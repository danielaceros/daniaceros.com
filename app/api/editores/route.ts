// app/api/editores/route.ts
// Recibe el formulario de /editores (captación de editores freelance en LATAM).
//   1. Comprueba origen, tipo y tamaño; valida y limpia (nada del cliente se guarda tal cual).
//   2. Guarda el registro como JSON en Vercel Blob (editores/registros/<id>.json): de ahí lo baja
//      ~/Projects/editores-latam/sync.py al .xlsx de seguimiento. Con EDITORES_BLOB_TOKEN (store PRIVADO) el JSON
//      con el WhatsApp no tiene URL pública; sin esa variable cae al store público con sufijo aleatorio.
//      OJO: /api/editores/reconcile y sync.py leen el store público; si se activa EDITORES_BLOB_TOKEN hay que adaptar reconcile.
//   3. Avisa a Dani por email. Si el email falla, el registro NO se pierde: ya está guardado.
// Idempotente: el cliente manda un id de envío; reintentar (doble toque, red caída tras guardar) no duplica.
import { createHmac } from "node:crypto"
import { del, list, put } from "@vercel/blob"
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { buildEmail, type EditorRecord } from "@/lib/editores/email"
import { appendEditorRow, rowFromRecord } from "@/lib/editores-sheet"
import {
  DISPONIBILIDAD, EXPERIENCIA, MAX_H, MAX_V, PLAZO, SOFTWARE,
  cleanText, normalizeHandle, normalizeUrl, validName,
} from "@/lib/editores/shared"

export const runtime = "nodejs"
export const maxDuration = 30

const MAX_BODY = 16_000
const TOKEN = process.env.EDITORES_BLOB_TOKEN || undefined
const ACCESS = TOKEN ? ("private" as const) : ("public" as const)
const NO_STORE = { "Cache-Control": "no-store" }
const json = (body: unknown, status = 200) => NextResponse.json(body, { status, headers: NO_STORE })

// Límite 1 (memoria de la instancia): barato, frena ráfagas de una IP en la misma instancia.
const hits = new Map<string, number[]>()
function limitedLocal(key: string) {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < 3_600_000)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 2000) for (const [k, v] of hits) if (!v.some((t) => now - t < 3_600_000)) hits.delete(k)
  return recent.length > 30
}

// Límite 2 (compartido entre instancias): marcadores vacíos en el propio Blob. IP con hash HMAC (no se guarda la IP).
// Falla abierto: si Blob no responde, no se bloquea a un candidato real. Mejor aún: regla de rate limit en el WAF de Vercel.
const PER_IP_HOUR = 20 // las operadoras móviles de LATAM comparten IP (CGNAT): margen holgado
const GLOBAL_HOUR = 400
async function limitedShared(ip: string): Promise<boolean> {
  try {
    const now = Date.now()
    const key = createHmac("sha256", TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN ?? "editores").update(ip).digest("hex").slice(0, 24)
    const mine = `editores/rl/ip/${key}/`
    const bucket = `editores/rl/all/${new Date(now).toISOString().slice(0, 13)}/`
    const [a, g] = await Promise.all([
      list({ prefix: mine, limit: 100, token: TOKEN }),
      list({ prefix: bucket, limit: GLOBAL_HOUR + 1, token: TOKEN }),
    ])
    const recent = a.blobs.filter((b) => now - new Date(b.uploadedAt).getTime() < 3_600_000)
    const old = a.blobs.filter((b) => !recent.includes(b)).map((b) => b.url)
    if (old.length) void del(old, { token: TOKEN }).catch(() => {})
    if (recent.length >= PER_IP_HOUR || g.blobs.length >= GLOBAL_HOUR) return true
    const tag = `${now}-${Math.random().toString(36).slice(2, 8)}`
    await Promise.all([
      put(`${mine}${tag}`, "1", { access: ACCESS, token: TOKEN, addRandomSuffix: false, contentType: "text/plain" }),
      put(`${bucket}${tag}`, "1", { access: ACCESS, token: TOKEN, addRandomSuffix: false, contentType: "text/plain" }),
    ])
    return false
  } catch (e) {
    console.error("[editores] rate-limit", e instanceof Error ? e.message : "error")
    return false
  }
}

async function readBody(request: Request): Promise<string | null> {
  const declared = Number(request.headers.get("content-length") ?? 0)
  if (declared > MAX_BODY || !request.body) return null
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let size = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    size += value.length
    if (size > MAX_BODY) { await reader.cancel(); return null }
    chunks.push(value)
  }
  return Buffer.concat(chunks).toString("utf8")
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  if (!origin || !host) return false
  if (request.headers.get("sec-fetch-site") === "cross-site") return false
  try { return new URL(origin).host === host } catch { return false }
}

async function sendMail(r: EditorRecord) {
  const to = process.env.EMAIL_TO
  if (!to) return
  const { subject, text, html } = buildEmail(r)
  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.RESEND_FROM ?? "Editores <editores@hola.daniaceros.com>", to: [to], subject, text, html }),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) console.error("[editores] resend", res.status)
    return
  }
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return
  const port = Number(SMTP_PORT ?? 465)
  const tx = nodemailer.createTransport({
    host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: 8000, greetingTimeout: 8000, socketTimeout: 10000,
  })
  await tx.sendMail({ from: EMAIL_FROM ?? SMTP_USER, to, subject, text, html })
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return json({ ok: false, error: "forbidden" }, 403)
  if (!(request.headers.get("content-type") ?? "").toLowerCase().startsWith("application/json")) return json({ ok: false, error: "bad_request" }, 415)
  const raw = await readBody(request)
  if (raw === null) return json({ ok: false, error: "too_large" }, 413)
  let body: Record<string, unknown>
  try {
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("shape")
    body = parsed as Record<string, unknown>
  } catch {
    return json({ ok: false, error: "bad_request" }, 400)
  }

  const ip = (request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown").trim()
  if (limitedLocal(ip)) return json({ ok: false, error: "rate_limited" }, 429)

  // Honeypot y tiempo mínimo: un bot rellena todo y envía en segundos. Respondemos "ok" sin guardar.
  const elapsed = Number(body.elapsedMs)
  if (cleanText(body.hp, 50) || !(elapsed >= 8000)) return json({ ok: true })

  const nombre = cleanText(body.nombre, 80)
  const pais = cleanText(body.pais, 60)
  const whatsapp = cleanText(body.whatsapp, 20).replace(/\s/g, "")
  const portfolio = [...new Set((Array.isArray(body.portfolio) ? body.portfolio : []).slice(0, 4).map(normalizeUrl).filter((u): u is string => !!u))]
  const software = (Array.isArray(body.software) ? body.software : []).map((s) => cleanText(s, 40)).filter((s) => SOFTWARE.includes(s)).slice(0, 8)
  const experiencia = cleanText(body.experiencia, 6)
  const disponibilidad = cleanText(body.disponibilidad, 20)
  const plazoEntrega = cleanText(body.plazo, 20)
  const precioVerticalUsd = Number(body.precioVerticalUsd)
  const precioHorizontalUsd = Number(body.precioHorizontalUsd)
  const instagram = normalizeHandle(body.instagram)

  const problems: string[] = []
  if (!validName(nombre)) problems.push("nombre")
  if (!pais) problems.push("pais")
  if (!/^\+\d{8,15}$/.test(whatsapp)) problems.push("whatsapp")
  if (portfolio.length < 1) problems.push("portfolio")
  if (instagram === null) problems.push("instagram")
  if (!software.length) problems.push("software")
  if (!EXPERIENCIA.includes(experiencia)) problems.push("experiencia")
  if (!DISPONIBILIDAD.includes(disponibilidad)) problems.push("disponibilidad")
  if (!PLAZO.includes(plazoEntrega)) problems.push("plazo")
  if (!(precioVerticalUsd >= 1 && precioVerticalUsd <= MAX_V)) problems.push("precioVertical")
  if (!(precioHorizontalUsd >= 1 && precioHorizontalUsd <= MAX_H)) problems.push("precioHorizontal")
  if (problems.length) return json({ ok: false, error: "invalid", fields: problems }, 422)

  // Id de envío del cliente (idempotencia). Solo [a-z0-9]; si falta o es raro, el servidor genera uno.
  const sid = typeof body.sid === "string" ? body.sid.replace(/-/g, "").toLowerCase() : ""
  const id = /^[a-f0-9]{16,40}$/.test(sid) ? sid.slice(0, 16) : crypto.randomUUID().replace(/-/g, "").slice(0, 16)

  if (await limitedShared(ip)) return json({ ok: false, error: "rate_limited" }, 429)

  const utmIn = (body.utm && typeof body.utm === "object" ? body.utm : {}) as Record<string, unknown>
  const createdAt = new Date().toISOString()
  const record = {
    id,
    createdAt,
    nombre,
    pais,
    whatsapp,
    instagram: instagram ?? "",
    portfolio,
    software,
    experiencia,
    disponibilidad,
    plazoEntrega,
    precioVerticalUsd: Math.round(precioVerticalUsd),
    precioHorizontalUsd: Math.round(precioHorizontalUsd),
    utm: {
      source: cleanText(utmIn.source, 60),
      medium: cleanText(utmIn.medium, 60),
      campaign: cleanText(utmIn.campaign, 100),
      content: cleanText(utmIn.content, 100),
      term: cleanText(utmIn.term, 100),
    },
    fbclid: cleanText(body.fbclid, 120),
    fbp: cleanText(body.fbp, 80),
    fbc: cleanText(body.fbc, 140),
  }

  const pathname = `editores/registros/${id}.json`
  try {
    if (!TOKEN) {
      // Store público (fallback): el nombre lleva sufijo aleatorio, así que no hay "ya existe" atómico.
      const prev = await list({ prefix: pathname.replace(/\.json$/, ""), limit: 1 })
      if (prev.blobs.length) return json({ ok: true, id, duplicate: true })
    }
    await put(pathname, JSON.stringify(record, null, 2), {
      access: ACCESS,
      token: TOKEN,
      addRandomSuffix: !TOKEN, // público: la URL no se puede adivinar (el JSON lleva WhatsApp). Privado: no hace falta.
      allowOverwrite: false,
      contentType: "application/json",
    })
  } catch (e) {
    if (e instanceof Error && /already exists/i.test(e.message)) return json({ ok: true, id, duplicate: true })
    console.error("[editores] blob", e instanceof Error ? e.message : "error")
    return json({ ok: false, error: "storage" }, 500)
  }

  // Fila en la Google Sheet (best-effort, con reintento; /api/editores/reconcile recupera lo que falle). Tras Blob, antes del email.
  try {
    await appendEditorRow(rowFromRecord(record))
  } catch (e) {
    console.error("[editores] sheet", e instanceof Error ? e.message : "error")
  }

  // Aviso por email: best-effort (el registro ya está a salvo). Con await y tiempos límite: en Vercel, lo que sigue
  // corriendo tras responder se pausa y el correo no sale.
  try {
    await sendMail(record)
  } catch (e) {
    console.error("[editores] email", e instanceof Error ? e.message : "error")
  }

  return json({ ok: true, id })
}

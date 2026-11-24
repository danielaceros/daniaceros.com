// app/api/editores/route.ts
// Recibe el formulario de /editores (captación de editores freelance en LATAM).
//   1. Valida y limpia (nada del cliente se guarda tal cual).
//   2. Guarda el registro como JSON en Vercel Blob (editores/registros/…): de ahí lo baja
//      ~/Projects/editores-latam/sync.py al .xlsx de seguimiento.
//   3. Avisa a Dani por email (SMTP). Si el email falla, el registro NO se pierde: ya está guardado.
import { put } from "@vercel/blob"
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const maxDuration = 30

const SOFTWARE = ["DaVinci Resolve", "Premiere Pro", "After Effects", "Final Cut", "CapCut", "Motion graphics", "Otro"]
const EXPERIENCIA = ["<1", "1-3", "3-5", "5+"]
const PLAZO = ["24h", "48h", "3-4 días", "1 semana"]
const DISPONIBILIDAD = ["tiempo completo", "parcial", "puntual"]

// Límite por IP en memoria: frena el spam básico por instancia (no es una garantía global).
const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 3_600_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 6
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : ""

function normUrl(v: unknown): string | null {
  const s = clean(v, 500)
  if (!s) return null
  try {
    const u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`)
    if (!u.hostname.includes(".")) return null
    return u.toString()
  } catch {
    return null
  }
}

function handle(v: unknown): string {
  let s = clean(v, 200).toLowerCase()
  s = s.replace(/^https?:\/\/(www\.)?instagram\.com\//, "").replace(/[/?#].*$/, "").replace(/^@/, "")
  return /^[a-z0-9._]{1,30}$/.test(s) ? s : ""
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!)

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }

  // Honeypot y tiempo mínimo: un bot rellena todo y envía en segundos. Respondemos "ok" sin guardar.
  const elapsed = Number(body.elapsedMs)
  if (clean(body.web, 50) || !(elapsed >= 8000)) return NextResponse.json({ ok: true })
  if (limited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })

  const nombre = clean(body.nombre, 80)
  const pais = clean(body.pais, 60)
  const whatsapp = clean(body.whatsapp, 20).replace(/[\s-]/g, "")
  const portfolio = (Array.isArray(body.portfolio) ? body.portfolio : []).slice(0, 4).map(normUrl).filter((u): u is string => !!u)
  const software = (Array.isArray(body.software) ? body.software : []).map((s) => clean(s, 40)).filter((s) => SOFTWARE.includes(s)).slice(0, 8)
  const experiencia = clean(body.experiencia, 6)
  const disponibilidad = clean(body.disponibilidad, 20)
  const plazoEntrega = clean(body.plazo, 20)
  const precioVerticalUsd = Number(body.precioVerticalUsd)
  const precioHorizontalUsd = Number(body.precioHorizontalUsd)

  const problems: string[] = []
  if (nombre.length < 2) problems.push("nombre")
  if (!pais) problems.push("pais")
  if (!/^\+\d{8,15}$/.test(whatsapp)) problems.push("whatsapp")
  if (portfolio.length < 1) problems.push("portfolio")
  if (!EXPERIENCIA.includes(experiencia)) problems.push("experiencia")
  if (!DISPONIBILIDAD.includes(disponibilidad)) problems.push("disponibilidad")
  if (!PLAZO.includes(plazoEntrega)) problems.push("plazo")
  if (!(precioVerticalUsd >= 1 && precioVerticalUsd <= 5000)) problems.push("precioVertical")
  if (!(precioHorizontalUsd >= 1 && precioHorizontalUsd <= 20000)) problems.push("precioHorizontal")
  if (problems.length) return NextResponse.json({ ok: false, error: "invalid", fields: problems }, { status: 422 })

  const utmIn = (body.utm && typeof body.utm === "object" ? body.utm : {}) as Record<string, unknown>
  const id = crypto.randomUUID().slice(0, 8)
  const createdAt = new Date().toISOString()
  const record = {
    id,
    createdAt,
    nombre,
    pais,
    whatsapp,
    instagram: handle(body.instagram),
    portfolio,
    software,
    experiencia,
    disponibilidad,
    plazoEntrega,
    precioVerticalUsd: Math.round(precioVerticalUsd),
    precioHorizontalUsd: Math.round(precioHorizontalUsd),
    utm: {
      source: clean(utmIn.source, 60),
      medium: clean(utmIn.medium, 60),
      campaign: clean(utmIn.campaign, 100),
      content: clean(utmIn.content, 100),
    },
  }

  try {
    await put(`editores/registros/${createdAt.replace(/[:.]/g, "-")}-${id}.json`, JSON.stringify(record, null, 2), {
      access: "public",
      addRandomSuffix: true, // la URL no se puede adivinar: el JSON lleva WhatsApp
      contentType: "application/json",
    })
  } catch (e) {
    console.error("[editores] blob", e)
    return NextResponse.json({ ok: false, error: "storage" }, { status: 500 })
  }

  // Aviso por email: best-effort (el registro ya está a salvo).
  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM, EMAIL_TO } = process.env
    if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD && EMAIL_TO) {
      const port = Number(SMTP_PORT ?? 465)
      const tx = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASSWORD } })
      const wa = `https://wa.me/${whatsapp.slice(1)}`
      const rows: [string, string][] = [
        ["País", pais],
        ["WhatsApp", `${whatsapp} (${wa})`],
        ["Instagram", record.instagram ? `@${record.instagram} (https://instagram.com/${record.instagram})` : "—"],
        ["Portfolio", portfolio.join("\n")],
        ["Software", software.join(", ") || "—"],
        ["Experiencia", `${experiencia} años`],
        ["Disponibilidad", disponibilidad],
        ["Plazo aftermovie", plazoEntrega],
        ["Precio vertical", `${record.precioVerticalUsd} USD`],
        ["Precio horizontal", `${record.precioHorizontalUsd} USD`],
        ["Origen", [record.utm.source, record.utm.campaign, record.utm.content].filter(Boolean).join(" · ") || "directo"],
      ]
      await tx.sendMail({
        from: EMAIL_FROM ?? SMTP_USER,
        to: EMAIL_TO,
        subject: `Nuevo editor LATAM: ${nombre} (${pais}) · V ${record.precioVerticalUsd} / H ${record.precioHorizontalUsd} USD`,
        text: `${nombre} se ha registrado en /editores.\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nID: ${id}`,
        html: `<div style="font-family:system-ui,sans-serif;max-width:560px"><h2 style="margin:0 0 12px">${esc(nombre)} · ${esc(pais)}</h2><table cellpadding="6" style="border-collapse:collapse;font-size:14px">${rows
          .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top;white-space:nowrap">${esc(k)}</td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
          .join("")}</table><p style="color:#999;font-size:12px">ID ${id}</p></div>`,
      })
    }
  } catch (e) {
    console.error("[editores] email", e)
  }

  return NextResponse.json({ ok: true, id })
}

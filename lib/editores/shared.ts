// Lógica común del formulario /editores (cliente) y de /api/editores (servidor): normalización y
// validación de WhatsApp, enlaces, Instagram y precios. Sin dependencias: se importa desde ambos lados.

export type Pais = {
  n: string
  /** Prefijo internacional */
  d: string
  /** Longitudes válidas del número nacional (sin prefijo ni ceros de marcación). Vacío = genérico. */
  len: number[]
  /** Ejemplo de número móvil nacional, para el placeholder y el mensaje de error. */
  ph: string
}

// Primero los países de la campaña (Colombia, Venezuela, Argentina, Perú, Ecuador), luego el resto.
export const PAISES: Pais[] = [
  { n: "Colombia", d: "+57", len: [10], ph: "300 123 4567" },
  { n: "Venezuela", d: "+58", len: [10], ph: "412 123 4567" },
  { n: "Argentina", d: "+54", len: [10, 11], ph: "9 11 1234 5678" },
  { n: "Perú", d: "+51", len: [9], ph: "987 654 321" },
  { n: "Ecuador", d: "+593", len: [9], ph: "99 123 4567" },
  { n: "México", d: "+52", len: [10], ph: "55 1234 5678" },
  { n: "Chile", d: "+56", len: [9], ph: "9 1234 5678" },
  { n: "Uruguay", d: "+598", len: [8, 9], ph: "94 123 456" },
  { n: "Bolivia", d: "+591", len: [8], ph: "7123 4567" },
  { n: "Paraguay", d: "+595", len: [9], ph: "981 123 456" },
  { n: "Costa Rica", d: "+506", len: [8], ph: "8312 3456" },
  { n: "Panamá", d: "+507", len: [8], ph: "6123 4567" },
  { n: "Guatemala", d: "+502", len: [8], ph: "5123 4567" },
  { n: "Honduras", d: "+504", len: [8], ph: "9123 4567" },
  { n: "El Salvador", d: "+503", len: [8], ph: "7123 4567" },
  { n: "Nicaragua", d: "+505", len: [8], ph: "8123 4567" },
  { n: "R. Dominicana", d: "+1", len: [10], ph: "809 123 4567" },
  { n: "Otro", d: "+", len: [], ph: "Número" },
]

export const SOFTWARE = ["DaVinci Resolve", "Premiere Pro", "After Effects", "Final Cut", "CapCut", "Motion graphics", "Otro"]
export const EXPERIENCIA = ["<1", "1-3", "3-5", "5+"]
export const PLAZO = ["24h", "48h", "3-4 días", "1 semana"]
export const DISPONIBILIDAD = ["tiempo completo", "parcial", "puntual"]

export const MAX_V = 5000
export const MAX_H = 20000

/** Texto de una línea: sin control, sin caracteres invisibles/bidi (spoofing en asunto y correo), colapsa espacios. */
export function cleanText(v: unknown, max: number): string {
  if (typeof v !== "string") return ""
  const s = v
    .normalize("NFC")
    .replace(/[\u0000-\u001f\u007f-\u009f​-‏‪-‮⁠-⁩﻿]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  return Array.from(s).slice(0, max).join("")
}

export function validName(s: string): boolean {
  return s.length >= 2 && /\p{L}/u.test(s)
}

/** Enlace de portfolio → URL https normalizada, o null si no es una web pública razonable. */
export function normalizeUrl(v: unknown): string | null {
  if (typeof v !== "string") return null
  const s = v.trim()
  if (!s || s.length > 500 || /\s/.test(s)) return null
  if (/^[a-z][a-z0-9+.-]*:/i.test(s) && !/^https?:\/\//i.test(s)) return null // javascript:, mailto:, ftp:, host:puerto…
  if (s.startsWith("@") || s.startsWith("//")) return null
  try {
    const u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`)
    if (u.username || u.password) return null
    const h = u.hostname.toLowerCase()
    if (!/^(?=.{4,253}$)([a-z0-9-]{1,63}\.)+[a-z][a-z0-9-]{1,62}$/.test(h)) return null
    return u.toString()
  } catch {
    return null
  }
}

/** "@usuario", "usuario", "instagram.com/usuario/?igsh=…" → "usuario". "" si vacío, null si no es válido. */
export function normalizeHandle(v: unknown): string | null {
  if (typeof v !== "string") return ""
  let s = v.trim().toLowerCase()
  if (!s) return ""
  s = s.replace(/^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\//, "").replace(/^(www\.)?(instagram\.com|instagr\.am)\//, "")
  s = s.replace(/[/?#].*$/, "").replace(/^@+/, "")
  return /^[a-z0-9._]{1,30}$/.test(s) ? s : null
}

/**
 * Precio en USD escrito a mano: "150", "150,50", "1.200", "1,200.50", "$ 90". Devuelve un entero o null.
 * Un único separador seguido de exactamente 3 cifras es de millares ("1.200" = 1200); con 1-2 cifras, decimal.
 */
export function parsePrice(raw: string): number | null {
  let s = raw.replace(/[^\d.,]/g, "")
  if (!/\d/.test(s)) return null
  const seps = s.match(/[.,]/g) ?? []
  if (seps.length > 1) {
    if (new Set(seps).size === 1) s = s.replace(/[.,]/g, "") // "1.200.000": todo millares
    else {
      const last = Math.max(s.lastIndexOf("."), s.lastIndexOf(",")) // "1.200,50": el último es el decimal
      s = s.slice(0, last).replace(/[.,]/g, "") + "." + s.slice(last + 1)
    }
  } else if (seps.length === 1) {
    const i = s.search(/[.,]/)
    const before = s.slice(0, i), after = s.slice(i + 1)
    if (after.length === 3 && before) s = before + after // "1.200" = 1200
    else if (after.length >= 1 && after.length <= 2) s = `${before || "0"}.${after}`
    else if (after.length === 0) s = before
    else return null
  }
  const n = Number(s)
  return Number.isFinite(n) && n > 0 ? Math.round(n) : null
}

const norm54 = (n: string): string => {
  if (n.startsWith("9") && n.length === 11) return n
  if (n.length === 10) return "9" + n
  if (n.length === 12) {
    // 011 15 1234 5678 → quita el 15 tras el código de área (2, 3 o 4 cifras)
    for (const k of [2, 3, 4]) if (n.slice(k, k + 2) === "15" && n.length - 2 === 10) return "9" + n.slice(0, k) + n.slice(k + 2)
  }
  return n
}

export type PhoneResult = { ok: true; e164: string; national: string } | { ok: false; error: string }

/** WhatsApp: prefijo + número tal como lo escribe la gente (con 0 inicial, 15, 9 argentino, +prefijo pegado…). */
export function normalizePhone(dial: string, raw: string, paisName = ""): PhoneResult {
  const dd = dial.replace(/\D/g, "")
  if (!dd || dd.length > 4) return { ok: false, error: "Revisa el código de país" }
  const pais = PAISES.find((p) => p.d === `+${dd}` && p.len.length && (!paisName || p.n === paisName)) ?? PAISES.find((p) => p.d === `+${dd}` && p.len.length)
  const lens = pais?.len ?? []
  let n = raw.replace(/\D/g, "")
  if (n.startsWith("00" + dd)) n = n.slice(2)
  // Número pegado con prefijo internacional ("57 300 123 4567"): solo si lo que queda tiene una longitud válida.
  const okLen = (x: string) => (lens.length ? lens.includes(x.length) || (dd === "54" && [10, 11, 12].includes(x.length)) : x.length >= 7)
  if (n.startsWith(dd) && n.length > dd.length && okLen(n.slice(dd.length).replace(/^0+/, "")) && (!lens.length || n.length - dd.length >= Math.min(...lens))) n = n.slice(dd.length)
  if (dd === "52") n = n.replace(/^04[45]/, "")
  n = n.replace(/^0+/, "")
  if (dd === "52" && n.length === 11 && n.startsWith("1")) n = n.slice(1)
  if (dd === "1" && n.length === 11 && n.startsWith("1")) n = n.slice(1)
  if (dd === "54") n = norm54(n)
  if (lens.length ? !lens.includes(n.length) : n.length < 6 || n.length + dd.length > 15) {
    return { ok: false, error: lens.length ? `El número de ${pais!.n} lleva ${lens.join(" u ")} dígitos, sin el 0 inicial (ej. ${pais!.ph})` : "Revisa el número (con código de país)" }
  }
  const e164 = `+${dd}${n}`
  if (!/^\+\d{8,15}$/.test(e164)) return { ok: false, error: "Revisa el número (con código de país)" }
  return { ok: true, e164, national: n }
}

export function formatPhone(e164: string, dial: string): string {
  const dd = dial.replace(/\D/g, "")
  const n = e164.replace(/^\+/, "").slice(dd.length)
  const g = n.length === 11 ? [1, 2, 4, 4] : n.length === 10 ? [3, 3, 4] : n.length === 9 ? [3, 3, 3] : n.length === 8 ? [4, 4] : [n.length]
  let i = 0
  const parts = g.map((k) => { const p = n.slice(i, i + k); i += k; return p }).filter(Boolean)
  return `+${dd} ${parts.join(" ")}`
}

/**
 * Campo único de WhatsApp ("+57 300 123 4567", con el prefijo precargado al elegir país). Se parte en
 * prefijo + número usando el país elegido; si el prefijo no encaja, se prueba con el más largo conocido.
 */
export function normalizeFullPhone(full: string, paisName: string): PhoneResult {
  const digits = full.replace(/\D/g, "")
  const sel = PAISES.find((p) => p.n === paisName && p.len.length)
  if (sel) {
    const dd = sel.d.slice(1)
    return normalizePhone(sel.d, digits.startsWith(dd) ? digits.slice(dd.length) : digits, sel.n)
  }
  // "Otro": prefijo libre; se acepta cualquier E.164 de 8-15 cifras (ya escrito con prefijo).
  if (!/^\d{8,15}$/.test(digits)) return { ok: false, error: "Revisa el número (con código de país)" }
  const known = PAISES.filter((p) => p.len.length && digits.startsWith(p.d.slice(1))).sort((a, b) => b.d.length - a.d.length)[0]
  return { ok: true, e164: `+${digits}`, national: digits.slice(known ? known.d.length - 1 : 2) }
}

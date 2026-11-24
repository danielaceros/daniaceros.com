// Cuerpo del aviso por email de /api/editores. Todo lo que viene del formulario se escapa antes de entrar en el HTML.
export type EditorRecord = {
  id: string
  nombre: string
  pais: string
  whatsapp: string
  instagram: string
  portfolio: string[]
  software: string[]
  experiencia: string
  disponibilidad: string
  plazoEntrega: string
  precioVerticalUsd: number
  precioHorizontalUsd: number
  utm: { source: string; medium: string; campaign: string; content: string; term?: string }
}

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

export function buildEmail(r: EditorRecord) {
  const wa = `https://wa.me/${r.whatsapp.slice(1)}`
  const rows: [string, string][] = [
    ["País", r.pais],
    ["WhatsApp", `${r.whatsapp} (${wa})`],
    ["Instagram", r.instagram ? `@${r.instagram} (https://instagram.com/${r.instagram})` : "—"],
    ["Portfolio", r.portfolio.join("\n")],
    ["Software", r.software.join(", ") || "—"],
    ["Experiencia", `${r.experiencia} años`],
    ["Disponibilidad", r.disponibilidad],
    ["Plazo aftermovie", r.plazoEntrega],
    ["Aftermovie vertical", `${r.precioVerticalUsd} USD`],
    ["Aftermovie horizontal", `${r.precioHorizontalUsd} USD`],
    ["Origen", [r.utm.source, r.utm.campaign, r.utm.content].filter(Boolean).join(" · ") || "directo"],
  ]
  const subject = `Nuevo editor LATAM: ${r.nombre} (${r.pais}) · V ${r.precioVerticalUsd} / H ${r.precioHorizontalUsd} USD`
  const text = `${r.nombre} se ha registrado en /editores.\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nID: ${r.id}`
  const html = `<div style="font-family:system-ui,sans-serif;max-width:560px"><h2 style="margin:0 0 12px">${esc(r.nombre)} · ${esc(r.pais)}</h2><table cellpadding="6" style="border-collapse:collapse;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top;white-space:nowrap">${esc(k)}</td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table><p style="color:#999;font-size:12px">ID ${esc(r.id)}</p></div>`
  return { subject, text, html }
}

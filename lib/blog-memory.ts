export type BlogMemoryEntry = {
  slug: string
  keyword: string
  intent: string
  createdAt: string
  status: "draft" | "published"
  notes?: string
}

export const blogMemory: BlogMemoryEntry[] = [
  {
    slug: "grabacion-eventos-madrid",
    keyword: "grabación de eventos madrid",
    intent: "comercial",
    createdAt: "2026-03-17",
    status: "draft",
    notes: "Oportunidad detectada en Search Console. Evitar crear otra URL para la misma intención sin revisar esta primero.",
  },
  {
    slug: "video-corporativo-madrid",
    keyword: "video profesional para empresas madrid",
    intent: "comercial",
    createdAt: "2026-03-21",
    status: "published",
    notes: "Mejora de URL existente publicada el 2026-03-23 por oportunidad en Search Console. Query principal: 76 impresiones, 0 clics, posición media 28.62. Refuerzo SEO/comercial con propuesta, presupuesto, enlazado interno y CTA. No crear URL nueva para esta intención salvo cambio claro.",
  },
]

export function findSimilarTopic(term: string) {
  const normalized = term.toLowerCase()
  return blogMemory.find((entry) =>
    normalized.includes(entry.keyword.toLowerCase()) || entry.keyword.toLowerCase().includes(normalized)
  )
}

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
    status: "published",
    notes: "URL /blog/grabacion-eventos-madrid reforzada y publicada el 2026-03-27 tras oportunidad en Search Console. Query principal: 88 impresiones, 0 clics, posición media 19.95. Sin canibalización para la query exacta; todo el volumen cae sobre esta URL.",
  },
  {
    slug: "video-corporativo-madrid",
    keyword: "video profesional para empresas madrid",
    intent: "comercial",
    createdAt: "2026-03-21",
    status: "published",
    notes: "Mejora de URL existente publicada el 2026-03-23 por oportunidad en Search Console. Query principal: 76 impresiones, 0 clics, posición media 28.62. Refuerzo SEO/comercial con propuesta, presupuesto, enlazado interno y CTA. No crear URL nueva para esta intención salvo cambio claro.",
  },
  {
    slug: "video-corporativo-madrid",
    keyword: "agencia de vídeo corporativo en madrid",
    intent: "comercial",
    createdAt: "2026-03-28",
    status: "published",
    notes: "Segunda mejora de la URL /video-corporativo-madrid publicada el 2026-03-28 tras oportunidad en Search Console. Query principal: 19 impresiones, 0 clics, posición media 25.11. La query cae casi entera sobre esta URL; se reforzaron H1, metadata, bloque comercial, presupuesto, FAQs, enlazado interno y CTA. No abrir URL nueva para esta intención salvo cambio claro sin canibalización.",
  },
  {
    slug: "video-corporativo-madrid",
    keyword: "productora de vídeos corporativos en madrid",
    intent: "comercial",
    createdAt: "2026-03-31",
    status: "published",
    notes: "Nueva mejora de la URL /video-corporativo-madrid publicada el 2026-03-31 tras oportunidad en Search Console. Query principal: 16 impresiones, 0 clics, posición media 24.94. La intención cae limpia sobre esta URL; se reforzaron metadata, copy comercial, FAQs, enlazado interno y CTA sin abrir una URL nueva ni generar canibalización evidente.",
  },
]

export function findSimilarTopic(term: string) {
  const normalized = term.toLowerCase()
  return blogMemory.find((entry) =>
    normalized.includes(entry.keyword.toLowerCase()) || entry.keyword.toLowerCase().includes(normalized)
  )
}

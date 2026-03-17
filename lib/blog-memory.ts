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
]

export function findSimilarTopic(term: string) {
  const normalized = term.toLowerCase()
  return blogMemory.find((entry) =>
    normalized.includes(entry.keyword.toLowerCase()) || entry.keyword.toLowerCase().includes(normalized)
  )
}

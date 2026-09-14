// app/[lang]/casos-de-exito/content.ts
// Textos de /casos-de-exito por idioma. El ES es copia literal del original (no tocar).
import type { Lang } from "@/lib/i18n/config"

const es = {
  metaTitle: "Casos de éxito",
  metaDescription:
    "Casos de éxito audiovisuales para empresas, marcas e instituciones. Proyectos reales con resultados medibles.",
  keywords: ["casos de exito video", "portfolio corporativo", "proyectos audiovisuales madrid"],
  title: "Casos de éxito",
  /** "Caso de éxito {n}: {title} ({category})" */
  caseHeading: "Caso de éxito {n}: {title} ({category})",
  caseAria: "Ver caso de éxito: {title}",
  // Etiqueta del diseño por slug (el slug debe existir en data/projects).
  categories: {
    "camara-de-comercio": "Evento subvencional",
    "real-madrid-riquelme": "Campaña electoral · Real Madrid",
    ifema: "Vídeo institucional",
    "rimmel-london": "Campaña de marca · Rimmel London",
    cinesa: "Experiencia de marca",
    "omar-montes": "Concierto",
    "brahim-diaz": "Proyecto promocional Sony Pictures",
  } as Record<string, string>,
  whyTitle: "¿Por qué funcionan estos proyectos?",
  whyText:
    "En cada caso hay un objetivo claro, un mensaje que transmitir y un resultado medible: refuerzo de marca, contenido para redes, documentación del evento o impacto emocional. Trabajamos desde el briefing hasta la entrega con un enfoque narrativo y una estética coherente con la identidad del cliente, lo que hace que el vídeo no sea solo un recuerdo, sino una pieza de comunicación que suma.",
}

const en: typeof es = {
  metaTitle: "Case studies",
  metaDescription:
    "Video case studies for companies, brands and institutions. Real projects with measurable results.",
  keywords: ["video case studies", "corporate video portfolio", "video production projects madrid"],
  title: "Case studies",
  caseHeading: "Case study {n}: {title} ({category})",
  caseAria: "View case study: {title}",
  categories: {
    "camara-de-comercio": "Subsidized event",
    "real-madrid-riquelme": "Election campaign · Real Madrid",
    ifema: "Corporate video",
    "rimmel-london": "Brand campaign · Rimmel London",
    cinesa: "Brand experience",
    "omar-montes": "Concert",
    "brahim-diaz": "Sony Pictures promotional project",
  },
  whyTitle: "Why do these projects work?",
  whyText:
    "Every case has a clear goal, a message to get across and a measurable result: brand reinforcement, social media content, event documentation or emotional impact. We work from the brief through to delivery with a narrative approach and a look that stays true to the client's identity, so the video isn't just a keepsake but a piece of communication that adds real value.",
}

/** Orden fijo de los casos (slugs de data/projects). */
export const CASE_SLUGS = [
  "camara-de-comercio",
  "real-madrid-riquelme",
  "ifema",
  "rimmel-london",
  "cinesa",
  "omar-montes",
  "brahim-diaz",
]

export const content: Record<Lang, typeof es> = { es, en }

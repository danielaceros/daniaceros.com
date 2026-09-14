// Textos de /contacto por idioma. El ES es literal del original (no cambiar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Contacto",
  metaDescription:
    "Contacta con Daniel Acero para vídeo corporativo, institucional o cobertura de eventos en Madrid y toda España.",
  keywords: ["contacto filmmaker madrid", "presupuesto video corporativo", "videografo madrid"],
}

const en: typeof es = {
  metaTitle: "Contact",
  metaDescription:
    "Get in touch with Daniel Acero for corporate video or event coverage in Madrid and across Spain.",
  keywords: ["contact filmmaker madrid", "corporate video quote", "videographer madrid"],
}

export const content: Record<Lang, typeof es> = { es, en }

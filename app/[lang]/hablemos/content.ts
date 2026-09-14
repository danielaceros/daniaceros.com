// Textos de /hablemos por idioma. El ES es literal del original (no cambiar).
// El mensaje de WhatsApp, el texto móvil y los enlaces legales salen del
// diccionario compartido (contact.*), que ya tiene exactamente esos textos.
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Hablemos",
  metaDescription:
    "Producción audiovisual para empresas, marcas y eventos en Madrid. Vídeo corporativo con enfoque cinematográfico y ejecución profesional.",
  keywords: ["hablemos", "filmmaker corporativo madrid", "videografo eventos madrid"],
  heroTitle: "¿Hablamos de tu proyecto?",
  heroDescription: "Te digo presupuesto y disponibilidad en 2 minutos por WhatsApp.",
  heroCtaLabel: "Pedir presupuesto ahora",
}

const en: typeof es = {
  metaTitle: "Let's talk",
  metaDescription:
    "Video production for companies, brands and events in Madrid. Corporate video with a cinematic approach and professional execution.",
  keywords: ["let's talk", "corporate filmmaker madrid", "event videographer madrid"],
  heroTitle: "Let's talk about your project",
  heroDescription: "I'll give you a quote and my availability in 2 minutes on WhatsApp.",
  heroCtaLabel: "Get a quote now",
}

export const content: Record<Lang, typeof es> = { es, en }

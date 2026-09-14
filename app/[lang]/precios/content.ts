// Textos de /precios por idioma. El ES es literal del original (no cambiar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Precios de servicios audiovisuales",
  metaDescription:
    "Cómo se calcula el precio de un vídeo corporativo o cobertura de evento en Madrid. Presupuesto personalizado y transparente.",
  keywords: ["precio video corporativo", "presupuesto videografo madrid", "coste video evento"],
  kicker: "precios",
  title: "¿Cuánto cuesta un servicio de vídeo corporativo o un evento?",
  howTitle: "Cómo se calculan los precios",
  howIntro:
    "Cada proyecto es distinto. El presupuesto depende de varios factores que valoramos en la primera conversación:",
  howItems: [
    "Tipo de proyecto (vídeo corporativo, evento, institucional, piezas para redes).",
    "Duración del rodaje y número de días.",
    "Localización y desplazamientos.",
    "Entregas que necesitas (vídeo principal, versiones para redes, formatos adicionales).",
    "Plazos y urgencia.",
  ],
  includesTitle: "Qué incluyen la mayoría de mis proyectos",
  includesItems: [
    "Brief y definición del enfoque creativo.",
    "Grabación en 4K con equipo profesional.",
    "Edición y corrección de color.",
    "Vídeo principal listo para web o presentación.",
    "Versiones adaptadas a redes sociales (horizontal y/o vertical) cuando aplica.",
    "Música con licencia y ajustes de ritmo narrativo.",
  ],
  whyTitle: "Por qué no trabajo con precios cerrados",
  whyText:
    "Un vídeo corporativo de un día en Madrid no es lo mismo que la cobertura de un congreso de tres días en otra ciudad, ni que una pieza con varias localizaciones y entrevistas. Por eso prefiero escuchar tu proyecto, entender el alcance y prepararte un presupuesto personalizado en lugar de ofrecer tarifas fijas que no se ajustan a la realidad de cada encargo.",
}

const en: typeof es = {
  metaTitle: "Video production pricing",
  metaDescription:
    "How the price of a corporate video or event coverage in Madrid is calculated. Tailored, transparent quotes.",
  keywords: ["corporate video pricing", "videographer madrid quote", "event video cost"],
  kicker: "pricing",
  title: "How much does a corporate video or event coverage cost?",
  howTitle: "How pricing works",
  howIntro:
    "Every project is different. The quote depends on several factors that we go over in our first conversation:",
  howItems: [
    "Type of project (corporate video, event, social media content).",
    "Length of the shoot and number of days.",
    "Location and travel.",
    "Deliverables you need (main video, social media versions, additional formats).",
    "Timeline and urgency.",
  ],
  includesTitle: "What most of my projects include",
  includesItems: [
    "Brief and definition of the creative approach.",
    "4K filming with professional equipment.",
    "Editing and color grading.",
    "Main video ready for your website or presentations.",
    "Versions adapted for social media (horizontal and/or vertical) where applicable.",
    "Licensed music and fine-tuned narrative pacing.",
  ],
  whyTitle: "Why I don't work with fixed prices",
  whyText:
    "A one-day corporate video in Madrid is not the same as covering a three-day conference in another city, or a piece with several locations and interviews. That's why I'd rather hear about your project, understand its scope and prepare a tailored quote, instead of offering fixed rates that don't reflect the reality of each job.",
}

export const content: Record<Lang, typeof es> = { es, en }

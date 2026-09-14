// lib/service-links.ts
// Enlazado interno hacia las páginas de servicio (landings SEO). Una sola fuente para:
//   - el pie de ContactCTA (anchors cortos por intención de búsqueda),
//   - el bloque de landings de /servicios,
//   - el bloque «servicio relacionado» de la plantilla del blog (relatedServiceForPost).
// Las rutas son SIEMPRE las españolas sin prefijo: localizedHref() añade /en.
import type { Lang } from "@/lib/i18n/config"

export type ServicePath =
  | "/servicios"
  | "/servicios/corporativo"
  | "/servicios/institucional"
  | "/filmmaker-madrid"
  | "/videografo-madrid"
  | "/video-corporativo-madrid"
  | "/video-eventos-madrid"
  | "/contenido-mensual"
  | "/marca-personal"

type ServiceCopy = {
  /** Anchor corto del pie (se pinta en minúsculas). */
  anchor: string
  /** Título del enlace en /servicios y en el bloque del blog. */
  title: string
  /** Una línea descriptiva (sin datos nuevos: sale del contenido de cada página). */
  description: string
}

export const SERVICE_LINKS: Record<ServicePath, Record<Lang, ServiceCopy>> = {
  "/servicios": {
    es: {
      anchor: "servicios",
      title: "Servicios de vídeo para empresas",
      description: "Vídeo corporativo, institucional y de eventos en Madrid y en toda España.",
    },
    en: {
      anchor: "services",
      title: "Video production services",
      description: "Corporate, institutional and event video in Madrid and across Spain.",
    },
  },
  "/servicios/corporativo": {
    es: {
      anchor: "filmmaker corporativo",
      title: "Filmmaker corporativo en Madrid",
      description: "Piezas de vídeo para empresas, marcas y lanzamientos.",
    },
    en: {
      anchor: "corporate filmmaker",
      title: "Corporate filmmaker in Madrid",
      description: "Video for companies, brands and launches.",
    },
  },
  "/servicios/institucional": {
    es: {
      anchor: "vídeo institucional",
      title: "Vídeo institucional",
      description: "Contenido para organizaciones, instituciones y entidades.",
    },
    en: {
      anchor: "institutional video",
      title: "Corporate video for institutions",
      description: "Content for organizations, institutions and public bodies.",
    },
  },
  "/filmmaker-madrid": {
    es: {
      anchor: "filmmaker en madrid",
      title: "Filmmaker en Madrid",
      description: "Vídeo profesional para eventos, marcas y empresas.",
    },
    en: {
      anchor: "filmmaker in madrid",
      title: "Filmmaker in Madrid",
      description: "Professional video for events, brands and businesses.",
    },
  },
  "/videografo-madrid": {
    es: {
      anchor: "videógrafo profesional",
      title: "Videógrafo en Madrid",
      description: "Grabación profesional de eventos, empresas y contenido corporativo.",
    },
    en: {
      anchor: "professional videographer",
      title: "Videographer in Madrid",
      description: "Professional filming for events, businesses and corporate content.",
    },
  },
  "/video-corporativo-madrid": {
    es: {
      anchor: "vídeo corporativo",
      title: "Vídeo corporativo en Madrid",
      description: "Propuesta, rodaje, edición, versiones y entrega para web, ventas y campañas.",
    },
    en: {
      anchor: "corporate video",
      title: "Corporate video production in Madrid",
      description: "Proposal, filming, editing, versions and delivery for web, sales and campaigns.",
    },
  },
  "/video-eventos-madrid": {
    es: {
      anchor: "videógrafo de eventos",
      title: "Vídeo de eventos en Madrid",
      description: "Congresos, lanzamientos, convenciones y experiencias de marca.",
    },
    en: {
      anchor: "event videographer",
      title: "Event video production in Madrid",
      description: "Conferences, product launches, conventions and brand experiences.",
    },
  },
  "/contenido-mensual": {
    es: {
      anchor: "contenido para clínicas",
      title: "Pack mensual de contenido para clínicas",
      description: "Tu clínica activa en redes todo el mes, en una sesión.",
    },
    en: {
      anchor: "content for clinics",
      title: "Monthly content package for clinics",
      description: "Your clinic active on social media all month, from one session.",
    },
  },
  "/marca-personal": {
    es: {
      anchor: "marca personal",
      title: "Pack mensual para marcas personales",
      description: "Una sesión al mes y reels listos.",
    },
    en: {
      anchor: "personal brand",
      title: "Monthly package for personal brands",
      description: "One session a month and reels ready to go.",
    },
  },
}

/** Filas del pie: pares cortos (caben en una línea a 360 px) y «Madrid» solo en un anchor. */
export const FOOTER_SERVICE_ROWS: ServicePath[][] = [
  ["/servicios/corporativo", "/video-corporativo-madrid"],
  ["/filmmaker-madrid", "/video-eventos-madrid"],
  ["/videografo-madrid", "/servicios/institucional"],
  ["/contenido-mensual", "/marca-personal"],
]

/** Landings que enlaza el bloque «por tipo de proyecto» de /servicios. */
export const SERVICES_PAGE_LANDINGS: ServicePath[] = [
  "/filmmaker-madrid",
  "/videografo-madrid",
  "/video-corporativo-madrid",
  "/video-eventos-madrid",
  "/contenido-mensual",
  "/marca-personal",
]

// Reglas por orden de prioridad sobre "slug + keyword" del post ORIGINAL en español (así ES y EN
// enlazan al mismo servicio). La primera que casa gana; si ninguna casa → /servicios.
const RELATED_RULES: ReadonlyArray<readonly [RegExp, ServicePath]> = [
  [/cl[ií]nica|meridian/i, "/contenido-mensual"],
  [/evento|feria|stand|congreso|mesa redonda|recap|en directo|aftermovie/i, "/video-eventos-madrid"],
  [/institucional|sector p[uú]blico/i, "/servicios/institucional"],
  [/vide[oó]grafo/i, "/videografo-madrid"],
  [/filmmaker corporativo|realizador/i, "/servicios/corporativo"],
  [/filmmaker/i, "/filmmaker-madrid"],
  [/corporativ|empresa|pymes|sector|employer|onboarding|inversores/i, "/video-corporativo-madrid"],
  [/madrid/i, "/filmmaker-madrid"],
]

/** Servicio relacionado de un artículo del blog (plantilla; no requiere editar los posts). */
export function relatedServiceForPost(post: { slug: string; keyword: string }): ServicePath {
  const haystack = `${post.slug} ${post.keyword}`
  return RELATED_RULES.find(([pattern]) => pattern.test(haystack))?.[1] ?? "/servicios"
}

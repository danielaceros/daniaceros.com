// lib/i18n/config.ts
// Utilidades de locale SIN dependencias (ni React ni Next): las importan el
// proxy (proxy.ts), componentes de servidor y componentes de cliente por igual.
// Ver I18N_GUIDE.md para el patrón completo.

export const LOCALES = ["es", "en"] as const
export type Lang = (typeof LOCALES)[number]

/** Idioma por defecto: vive SIN prefijo en la URL (/servicios). */
export const DEFAULT_LOCALE: Lang = "es"

/** Cookie que fija el idioma elegido (selector o detección automática). */
export const LOCALE_COOKIE = "NEXT_LOCALE"
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 año

/** Códigos hreflang (alternates.languages). x-default apunta a ES. */
export const HREFLANG: Record<Lang, string> = { es: "es-ES", en: "en" }

/** og:locale por idioma. */
export const OG_LOCALE: Record<Lang, string> = { es: "es_ES", en: "en_US" }

/** Valor de inLanguage en JSON-LD. */
export const SCHEMA_LANGUAGE: Record<Lang, string> = { es: "es-ES", en: "en" }

/** Nombre del idioma en su propio idioma (aria-label del selector). */
export const LANGUAGE_NAMES: Record<Lang, string> = { es: "Español", en: "English" }

/**
 * Idiomas del navegador que se quedan en español en la detección automática
 * (español, catalán, gallego y euskera). Cualquier otro → inglés.
 */
export const SPANISH_FAMILY_LANGUAGES = ["es", "ca", "gl", "eu"]

export function isLang(value: string | undefined | null): value is Lang {
  return !!value && (LOCALES as readonly string[]).includes(value)
}

/** Normaliza el param `[lang]` (siempre validado por dynamicParams=false). */
export function toLang(value: string | undefined | null): Lang {
  return isLang(value) ? value : DEFAULT_LOCALE
}

/**
 * Slugs en inglés (SEO en búsquedas en inglés). Clave = ruta ESPAÑOLA, valor = ruta EN sin prefijo.
 * Las carpetas de app/[lang] siguen siendo las españolas: el proxy reescribe /en/<slug-en> → /en/<slug-es>
 * y redirige (301) /en/<slug-es> → /en/<slug-en>. El español no cambia.
 * Rutas que no estén aquí mantienen el mismo slug en ambos idiomas.
 */
export const EN_PATHS: Record<string, string> = {
  "filmacion-profesional-empresas": "professional-filming-madrid",
  "video-corporativo-centros-fisioterapia": "physiotherapy-centre-video-madrid",
  "video-corporativo-clinicas-estetica": "aesthetic-clinic-video-madrid",
  "/servicios": "/services",
  "/servicios/corporativo": "/services/corporate",
  "/servicios/institucional": "/services/institutional",
  "/filmmaker-madrid": "/filmmaker-in-madrid",
  "/videografo-madrid": "/videographer-in-madrid",
  "/video-corporativo-madrid": "/corporate-video-madrid",
  "/video-eventos-madrid": "/event-videographer-madrid",
  "/precios": "/pricing",
  "/proceso": "/process",
  "/contratar": "/hire-me",
  "/contacto": "/contact",
  "/hablemos": "/lets-talk",
  "/sobre-mi": "/about",
  "/clientes": "/clients",
  "/casos-de-exito": "/case-studies",
  "/contenido-mensual": "/monthly-content",
  "/marca-personal": "/personal-branding",
}

/** Slugs de artículos del blog en inglés (clave = slug ES, valor = slug EN). */
export const EN_BLOG_SLUGS: Record<string, string> = {
  "grabar-en-ifema-empresa-extranjera": "filming-at-ifema-madrid",
  "video-corporativo-academias-idiomas": "language-school-video-madrid",
  "cuanto-cuesta-video-corporativo": "how-much-does-a-corporate-video-cost",
  "permisos-grabacion-video-corporativo-madrid": "filming-permits-madrid",
  "filmacion-eventos-espana": "event-filming-in-spain",
  "rodaje-corporativo-en-el-extranjero": "corporate-shoots-abroad",
  "video-corporativo-eventos-hibridos": "hybrid-event-video",
  "produccion-audiovisual-y-eventos": "audiovisual-production-for-events",
  "filmmaker-eventos": "event-filmmaker",
  "filmmaker-corporativo": "corporate-filmmaker",
  "grabacion-eventos-madrid": "event-recording-madrid",
  "diferencia-videografo-filmmaker-corporativo": "videographer-vs-corporate-filmmaker",
  "como-elegir-filmmaker-corporativo": "how-to-choose-a-corporate-filmmaker",
  "videos-profesionales-madrid": "professional-videos-madrid",
  "locaciones-entrevistas-corporativas-madrid": "interview-locations-madrid",
  "realizador-video-corporativo-madrid": "corporate-video-director-madrid",
  "contenido-para-redes-sociales-madrid": "social-media-content-madrid",
  "caso-meridian-biohealth": "video-content-for-businesses-madrid",
  "produccion-video-promocional-empresas-madrid": "promotional-video-production-for-businesses-in-madrid",
  "video-vertical-profesional": "professional-vertical-video",
  "iluminacion-entrevistas-corporativas": "corporate-interview-lighting",
  "diferencias-video-institucional-video-de-marca": "corporate-video-vs-brand-video",
  "equipo-minimo-video-empresa": "equipment-needed-to-shoot-a-corporate-video",
  "briefing-video-corporativo": "how-to-write-a-corporate-video-brief",
  "storyboard-video-corporativo": "corporate-video-storyboard",
  "musica-y-derechos-en-video-de-empresa": "music-licensing-for-corporate-video",
  "produccion-eventos-corporativos-directo": "live-corporate-event-video-production",
  "video-recap-de-eventos": "event-recap-video",
  "sonido-directo-entrevistas": "how-to-record-audio-for-interviews",
  "color-grading-video-corporativo": "color-grading-for-corporate-video",
  "aspect-ratio-169-916-linkedin-instagram": "16-9-vs-9-16-aspect-ratio-for-linkedin-and-instagram",
  "subtitulos-automaticos-video-corporativo": "auto-subtitles-for-corporate-video",
  "como-preparar-un-ceo-para-grabar-a-camara": "how-to-prepare-a-ceo-for-a-video-shoot",
  "teleprompter-cuando-usarlo-y-cuando-no": "when-to-use-a-teleprompter",
  "plazos-realistas-video-corporativo": "how-long-does-it-take-to-make-a-corporate-video",
  "direccion-de-arte-video-corporativo": "art-direction-for-corporate-video",
  "branding-sonoro-video-empresa": "sonic-branding-for-corporate-video",
  "por-que-tu-video-corporativo-no-convierte": "why-your-corporate-video-isn-t-converting",
  "video-testimonial-vs-caso-de-estudio": "testimonial-video-vs-case-study-video",
  "broll-video-corporativo": "b-roll-for-corporate-video",
  "video-manifiesto-de-marca": "brand-manifesto-video",
  "como-medir-roi-video-corporativo": "how-to-measure-corporate-video-roi",
  "video-onboarding-interno": "employee-onboarding-video",
  "video-institucional-errores-que-lo-hacen-generico": "generic-corporate-video-mistakes",
  "cuantas-camaras-para-entrevista": "how-many-cameras-for-an-interview",
  "iluminacion-natural-vs-artificial-video-corporativo": "natural-vs-artificial-lighting-for-video",
  "estabilizacion-gimbal-slider-tripode": "gimbal-vs-slider-vs-tripod",
  "duracion-ideal-video-corporativo": "ideal-corporate-video-length",
  "guion-video-corporativo": "corporate-video-script",
  "preproduccion-video-corporativo": "corporate-video-pre-production",
  "grabacion-exteriores-empresas": "outdoor-corporate-video-filming",
  "microfono-solapa-vs-boom-entrevistas-corporativas": "lavalier-vs-boom-mic-for-interviews",
  "video-employer-branding": "employer-branding-video",
  "dron-en-video-corporativo": "drone-footage-for-corporate-video",
  "como-grabar-mesa-redonda-corporativa": "how-to-film-a-panel-discussion",
  "video-corporativo-ferias-stands": "trade-show-video-production",
  "dirigir-empleados-sin-experiencia-camara": "how-to-direct-employees-on-camera",
  "showreel-corporativo": "corporate-showreel",
  "grabacion-video-corporativo-plantas-industriales": "industrial-video-production",
  "derechos-imagen-empleados-video-corporativo": "employee-video-consent-and-image-rights",
  "video-captacion-inversores": "investor-pitch-video",
  "video-corporativo-multiidioma-subtitulado-doblaje": "multilingual-corporate-video",
  "como-entrevistar-cliente-video-testimonial": "client-testimonial-video-interview-questions",
  "grabar-en-oficina-sin-interrumpir-trabajo": "filming-in-an-office-during-work-hours",
  "video-corporativo-resultados-anuales": "annual-report-video",
  "video-corporativo-lanzamiento-producto": "product-launch-video",
  "video-corporativo-rsc-sostenibilidad": "sustainability-video-for-companies",
  "actores-vs-empleados-reales-video-corporativo": "actors-vs-real-employees-in-corporate-video",
  "animacion-2d-vs-video-real-corporativo": "animation-vs-live-action-video",
  "voz-en-off-video-corporativo": "corporate-video-voiceover",
  "organizar-rodaje-corporativo": "how-to-organize-a-corporate-video-shoot",
  "video-bienvenida-clientes-nuevos": "client-welcome-video",
  "camara-lenta-video-corporativo": "slow-motion-in-corporate-video",
  "rondas-revision-video-corporativo": "corporate-video-revision-rounds",
  "video-cultura-de-empresa": "company-culture-video",
  "video-aniversario-de-empresa": "company-anniversary-video",
  "grabacion-croma-video-corporativo": "green-screen-corporate-video",
  "making-of-video-corporativo": "corporate-behind-the-scenes-video",
  "storytelling-video-corporativo": "corporate-video-storytelling",
  "video-corporativo-multisede": "multi-location-corporate-video",
  "video-corporativo-seguridad-laboral": "workplace-safety-training-video",
  "video-corporativo-sector-inmobiliario": "real-estate-corporate-video",
  "video-corporativo-sector-sanitario": "healthcare-corporate-video",
  "video-corporativo-sector-educativo": "education-corporate-video",
  "video-corporativo-sector-tecnologico": "tech-company-corporate-video",
  "video-corporativo-sector-financiero": "financial-services-corporate-video",
  "video-corporativo-sector-logistico-transporte": "logistics-and-transport-corporate-video",
  "video-corporativo-sector-retail": "retail-corporate-video",
  "video-corporativo-sector-energetico": "energy-sector-corporate-video",
  "video-corporativo-sector-hostelero-turistico": "hospitality-and-tourism-corporate-video",
  "video-corporativo-sector-construccion": "construction-company-corporate-video",
  "video-corporativo-sector-automocion": "automotive-corporate-video",
  "video-corporativo-para-pymes": "corporate-video-for-small-businesses",
  "contrato-derechos-uso-video-corporativo": "corporate-video-usage-rights",
  "video-corporativo-sector-legal": "law-firm-corporate-video",
  "formatos-entrega-video-corporativo": "corporate-video-delivery-formats",
  "video-corporativo-sector-agroalimentario": "food-industry-corporate-video",
  "ia-en-posproduccion-video-corporativo": "ai-in-video-post-production",
  "video-corporativo-sector-publico": "public-sector-corporate-video",
  "aprovechar-rodaje-corporativo-redes-sociales": "repurpose-corporate-video-for-social-media",
  "video-corporativo-clinicas-dentales": "corporate-video-for-dental-clinics",
  "video-corporativo-empresas-moda": "corporate-video-for-fashion-companies",
  "video-corporativo-empresas-ingenieria": "corporate-video-for-engineering-firms",
  "video-corporativo-gestorias-asesorias": "corporate-video-for-accountancy-firms",
  "video-corporativo-estudios-arquitectura": "corporate-video-for-architecture-practices",
  "video-corporativo-consultoras": "corporate-video-for-consultancies",
  "video-corporativo-ong-fundaciones": "corporate-video-for-ngos-and-foundations",
  "grabacion-documental-corporativo": "corporate-documentary-filming",
  "estructura-video-corporativo": "corporate-video-structure",
  "video-corporativo-startups": "corporate-video-for-startups",
  "video-documental-vs-publicitario-empresas": "documentary-vs-advertising-video-for-companies",
  "video-corporativo-sector-deportivo": "corporate-video-for-the-sports-sector",
  "video-corporativo-sector-farmaceutico": "pharmaceutical-corporate-video",
  "backup-gestion-archivos-rodaje-corporativo": "corporate-shoot-backup",
  "video-corporativo-sector-seguros": "insurance-corporate-video",
  "testimonios-remoto-video-corporativo": "remote-video-testimonials",
  "teaser-vs-video-corporativo-completo": "teaser-vs-corporate-video",
  "video-corporativo-clinicas-veterinarias": "veterinary-clinic-video-madrid",
  "videografo-congresos-madrid": "conference-videographer-madrid",
  "grabacion-eventos-corporativos-empresas": "corporate-event-filming-madrid",
  "video-corporativo-movil-o-camara-profesional": "phone-or-pro-camera-corporate-video",
}

const EN_PATH_TO_ES: Record<string, string> = Object.fromEntries([
  ...Object.entries(EN_PATHS).map(([es, en]) => [en, es]),
  ...Object.entries(EN_BLOG_SLUGS).map(([es, en]) => [`/blog/${en}`, `/blog/${es}`]),
])

/** Ruta ES (sin prefijo, sin query) → ruta EN con slug en inglés. Sin mapeo: la misma. */
export function toEnPath(esPath: string): string {
  if (EN_PATHS[esPath]) return EN_PATHS[esPath]
  const blog = esPath.match(/^\/blog\/([^/]+)$/)
  if (blog?.[1] && EN_BLOG_SLUGS[blog[1]]) return `/blog/${EN_BLOG_SLUGS[blog[1]]}`
  return esPath
}

/** Ruta EN (slug en inglés) → ruta ES de la carpeta real. Sin mapeo: la misma. */
export function toEsPath(enPath: string): string {
  return EN_PATH_TO_ES[enPath] ?? enPath
}

/** ¿Es una ruta EN con slug español que debe redirigir al slug inglés? */
export function enRedirectTarget(enPath: string): string | null {
  const target = toEnPath(enPath)
  return target !== enPath ? target : null
}

/**
 * Href interno localizado. `path` es SIEMPRE la ruta española sin prefijo
 * ("/", "/servicios", "/#contacto", "/blog/slug?x=1").
 *   localizedHref("es", "/servicios") → "/servicios"
 *   localizedHref("en", "/servicios") → "/en/servicios"
 *   localizedHref("en", "/")          → "/en"
 *   localizedHref("en", "/#contacto") → "/en#contacto"
 * URLs externas (https:, mailto:, tel:, #ancla) se devuelven tal cual.
 */
export function localizedHref(lang: Lang, path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  if (lang === DEFAULT_LOCALE) return path
  const match = path.match(/^([^?#]*)(.*)$/)
  const rawPathname = match?.[1] ?? path
  const suffix = match?.[2] ?? ""
  const pathname = lang === "en" ? toEnPath(rawPathname) : rawPathname
  return `/${lang}${pathname === "/" ? "" : pathname}${suffix}`
}

/**
 * Quita el prefijo de idioma de un pathname.
 *   "/en/servicios" → { lang: "en", path: "/servicios" }
 *   "/es"           → { lang: "es", path: "/" }   (rutas internas reescritas)
 *   "/servicios"    → { lang: null, path: "/servicios" }
 */
export function stripLocale(pathname: string): { lang: Lang | null; path: string } {
  const segments = pathname.split("/")
  const first = segments[1]
  if (isLang(first)) {
    const rest = `/${segments.slice(2).join("/")}`
    const clean = rest === "/" ? "/" : rest.replace(/\/$/, "") || "/"
    // En EN la URL visible lleva slug inglés; la ruta "lógica" es siempre la española.
    return { lang: first, path: first === "en" ? toEsPath(clean) : clean }
  }
  return { lang: null, path: pathname || "/" }
}

/** Misma página en otro idioma: "/en/servicios" + "es" → "/servicios". */
export function switchLocalePath(pathname: string, target: Lang): string {
  return localizedHref(target, stripLocale(pathname).path)
}

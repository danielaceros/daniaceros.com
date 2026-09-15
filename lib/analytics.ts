// Eventos de medición en cliente: GA4 (gtag) + etiqueta de sesión en Microsoft Clarity.
// No hace nada si los scripts no están cargados (preview, bloqueadores, fuera de producción).

type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

// Parámetros que se añaden a todos los eventos mientras estén fijados: en las landings /lp,
// `lp_id` llega así a vsl_*, contact_click y lp_cta_click sin tocar cada componente.
let eventContext: EventParams = {}

export function setEventContext(context: EventParams | null) {
  eventContext = context ?? {}
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return
  try {
    window.gtag?.("event", name, { ...eventContext, ...params })
    window.clarity?.("event", name)
  } catch {
    // La medición nunca debe romper la página.
  }
}

/**
 * Los scripts de medición cargan con lazyOnload: un evento lanzado al montar la página se perdería.
 * Espera a que exista gtag (como mucho `timeoutMs`) y ejecuta `callback` igualmente al agotarse.
 */
export function whenAnalyticsReady(callback: () => void, timeoutMs = 20000) {
  if (typeof window === "undefined") return () => {}
  if (window.gtag) {
    callback()
    return () => {}
  }
  const started = Date.now()
  const timer = window.setInterval(() => {
    if (window.gtag || Date.now() - started > timeoutMs) {
      window.clearInterval(timer)
      callback()
    }
  }, 400)
  return () => window.clearInterval(timer)
}

/** sessionStorage: landing de origen (+ UTM), la fija LandingTracking al entrar en una /lp. */
export const LP_ATTRIBUTION_KEY = "lp_attribution"
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const

/** sessionStorage: de qué formulario sale el lead. Lo guarda LazyContactForm al montarse; lo lee /gracias. */
export const FORM_ORIGIN_KEY = "form_origin"

export type FormOrigin = {
  /** "landing" (/lp/<slug>) o "web" (cualquier otra página con formulario). */
  origin: "landing" | "web"
  /** Ruta de la página del formulario. */
  form_page: string
  lp_id?: string
} & Partial<Record<(typeof UTM_KEYS)[number], string>>

/** Origen del formulario de la página actual: landing con su lp_id o web, más las UTM de la URL. */
export function currentFormOrigin(): FormOrigin {
  const path = window.location.pathname
  const result: FormOrigin = { origin: path.startsWith("/lp/") ? "landing" : "web", form_page: path }
  if (result.origin === "landing") {
    try {
      const landing = JSON.parse(sessionStorage.getItem(LP_ATTRIBUTION_KEY) ?? "null")
      if (landing?.lp_id) result.lp_id = landing.lp_id
    } catch {
      // Sin sessionStorage: el origen sigue siendo "landing" con su ruta.
    }
  }
  const search = new URLSearchParams(window.location.search)
  for (const key of UTM_KEYS) {
    const value = search.get(key)
    if (value) result[key] = value.slice(0, 100)
  }
  return result
}

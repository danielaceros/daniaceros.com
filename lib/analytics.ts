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

/** sessionStorage: landing de origen (+ UTM) para atribuir el lead en /gracias. */
export const LP_ATTRIBUTION_KEY = "lp_attribution"
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const

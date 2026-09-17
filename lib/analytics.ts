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

// Parámetros que se añaden a todos los eventos mientras estén fijados: en las landings /eventos,
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
 * Espera a que `isReady()` se cumpla (como mucho `timeoutMs`) y ejecuta `callback` igualmente al agotarse.
 */
function whenReady(isReady: () => boolean, callback: () => void, timeoutMs: number) {
  if (typeof window === "undefined") return () => {}
  if (isReady()) {
    callback()
    return () => {}
  }
  const started = Date.now()
  const timer = window.setInterval(() => {
    if (isReady() || Date.now() - started > timeoutMs) {
      window.clearInterval(timer)
      callback()
    }
  }, 400)
  return () => window.clearInterval(timer)
}

/** Espera a gtag: para los eventos de GA4 (diagnóstico). */
export function whenAnalyticsReady(callback: () => void, timeoutMs = 20000) {
  return whenReady(() => !!window.gtag, callback, timeoutMs)
}

/**
 * Espera al píxel de Meta. `Lead` es el evento por el que optimizan los anuncios, así que no se puede
 * colgar de gtag: si gtag estuviera listo y fbq todavía no, el evento se perdería. El snippet del píxel
 * define `window.fbq` de forma síncrona y encola las llamadas, así que basta con que exista.
 */
export function whenPixelReady(callback: () => void, timeoutMs = 20000) {
  return whenReady(() => typeof window.fbq === "function", callback, timeoutMs)
}

/** sessionStorage: landing de origen (+ UTM), la fija LandingTracking al entrar en una /eventos. */
export const LP_ATTRIBUTION_KEY = "lp_attribution"
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const

/** sessionStorage: de qué formulario sale el lead. Lo guarda LazyContactForm al montarse; lo lee /gracias. */
export const FORM_ORIGIN_KEY = "form_origin"

/**
 * sessionStorage: marca de tiempo de un ENVÍO real del formulario. La escribe LazyContactForm cuando el iframe
 * de GHL avisa de que ha creado el contacto; la lee /gracias. `form_origin` NO sirve para esto: se escribe al
 * montar el formulario, o sea con solo llegar a verlo, y dejaba que /gracias contara como lead a cualquiera que
 * bajase hasta el formulario sin enviarlo y luego llegase a /gracias por historial o atrás/adelante.
 */
export const FORM_SUBMIT_KEY = "form_submitted_at"

/** Un envío vale como lead solo si /gracias llega poco después; pasado este rato, la marca se considera vieja. */
export const SUBMIT_MAX_AGE_MS = 15 * 60 * 1000

/** sessionStorage: qué lead se ha contado ya, para no repetirlo al recargar /gracias o volver con atrás/adelante. */
export const LEAD_FIRED_KEY = "lead_fired"

/**
 * Origen del formulario de GHL: solo se aceptan mensajes suyos al escuchar el envío. Es el dominio white-label
 * de Dani, no el api.fitnesslaunch.es genérico: al ser subdominio de daniaceros.com, el iframe deja de ser
 * third-party y sus cookies sobreviven a las restricciones de Safari, que es donde más se rompía la atribución
 * en móvil. Si se cambia el host del iframe, hay que cambiar esto o el aviso de envío deja de llegar.
 */
export const GHL_FORM_ORIGIN = "https://api.daniaceros.com"

export type FormOrigin = {
  /** "landing" (/eventos/<slug>) o "web" (cualquier otra página con formulario). */
  origin: "landing" | "web"
  /** Ruta de la página del formulario. */
  form_page: string
  lp_id?: string
} & Partial<Record<(typeof UTM_KEYS)[number], string>>

/** Origen del formulario de la página actual: landing con su lp_id o web, más las UTM de la URL. */
export function currentFormOrigin(): FormOrigin {
  const path = window.location.pathname
  const result: FormOrigin = { origin: path.startsWith("/eventos/") ? "landing" : "web", form_page: path }
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

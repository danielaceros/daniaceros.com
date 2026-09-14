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

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return
  try {
    window.gtag?.("event", name, params)
    window.clarity?.("event", name)
  } catch {
    // La medición nunca debe romper la página.
  }
}

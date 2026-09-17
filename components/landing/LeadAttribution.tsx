"use client"

// /gracias: atribuye el lead al formulario del que sale. LazyContactForm guarda en sessionStorage su origen al
// montarse (landing /eventos con su lp_id, o web con la ruta de la página). Aquí se lanza `form_lead` en GA4 con
// origin, lp_id, form_page y UTM, y `Lead` (evento ESTÁNDAR de Meta) en el píxel. Se borra al leerlo para no
// contar dos veces al recargar.
//
// `Lead` es el único evento de optimización de las dos webs de Dani: a0studios.es dispara exactamente el mismo
// nombre con los mismos parámetros (a0studios-web/src/components/analytics/LeadAttribution.tsx). No renombrar
// aquí sin cambiar allí y sin ajustar el promoted_object del adset en Meta.

import { useEffect } from "react"
import {
  FORM_ORIGIN_KEY,
  LP_ATTRIBUTION_KEY,
  trackEvent,
  whenAnalyticsReady,
  whenPixelReady,
  type FormOrigin,
} from "@/lib/analytics"

export default function LeadAttribution() {
  useEffect(() => {
    let origin: FormOrigin | null = null
    try {
      const raw = sessionStorage.getItem(FORM_ORIGIN_KEY)
      sessionStorage.removeItem(FORM_ORIGIN_KEY)
      sessionStorage.removeItem(LP_ATTRIBUTION_KEY)
      origin = raw ? JSON.parse(raw) : null
    } catch {
      return
    }
    if (!origin?.origin) return
    const lead = origin

    const cancelAnalytics = whenAnalyticsReady(() => {
      trackEvent("form_lead", lead)
    })
    const cancelPixel = whenPixelReady(() => {
      try {
        window.fbq?.("track", "Lead", {
          origin: lead.origin,
          lp_id: lead.lp_id ?? "",
          form_page: lead.form_page,
        })
      } catch {
        // La medición nunca debe romper la página.
      }
    })

    return () => {
      cancelAnalytics()
      cancelPixel()
    }
  }, [])

  return null
}

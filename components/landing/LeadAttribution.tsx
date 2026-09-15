"use client"

// /gracias: atribuye el lead al formulario del que sale. LazyContactForm guarda en sessionStorage su origen al
// montarse (landing /lp con su lp_id, o web con la ruta de la página). Aquí se lanza `form_lead` en GA4 con
// origin, lp_id, form_page y UTM, y `FormLead` en Meta. Se borra al leerlo para no contar dos veces al recargar.

import { useEffect } from "react"
import {
  FORM_ORIGIN_KEY,
  LP_ATTRIBUTION_KEY,
  trackEvent,
  whenAnalyticsReady,
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

    return whenAnalyticsReady(() => {
      trackEvent("form_lead", lead)
      try {
        window.fbq?.("trackCustom", "FormLead", {
          origin: lead.origin,
          lp_id: lead.lp_id ?? "",
          form_page: lead.form_page,
        })
      } catch {
        // La medición nunca debe romper la página.
      }
    })
  }, [])

  return null
}

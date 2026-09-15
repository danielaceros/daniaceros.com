"use client"

// /gracias: si el lead viene de una landing /lp (sessionStorage de LandingTracking), lanza `lp_lead` en GA4
// con su lp_id y UTM, y `LandingLead` en Meta. Se borra al leerlo para no contar dos veces si se recarga.

import { useEffect } from "react"
import { LP_ATTRIBUTION_KEY, trackEvent, whenAnalyticsReady } from "@/lib/analytics"

export default function LeadAttribution() {
  useEffect(() => {
    let data: Record<string, string> | null = null
    try {
      const raw = sessionStorage.getItem(LP_ATTRIBUTION_KEY)
      if (!raw) return
      sessionStorage.removeItem(LP_ATTRIBUTION_KEY)
      data = JSON.parse(raw)
    } catch {
      return
    }
    if (!data?.lp_id) return
    const attribution = data

    return whenAnalyticsReady(() => {
      trackEvent("lp_lead", attribution)
      try {
        window.fbq?.("trackCustom", "LandingLead", { lp_id: attribution.lp_id })
      } catch {
        // La medición nunca debe romper la página.
      }
    })
  }, [])

  return null
}

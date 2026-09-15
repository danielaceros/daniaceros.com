"use client"

// Medición de las landings /lp: fija `lp_id` en todos los eventos de la página, guarda la landing de origen
// y sus UTM en sessionStorage (el formulario GHL siempre redirige a /gracias, donde se atribuye el lead)
// y lanza `lp_view` cuando gtag ya está cargado.

import { useEffect } from "react"
import {
  LP_ATTRIBUTION_KEY,
  UTM_KEYS,
  setEventContext,
  trackEvent,
  whenAnalyticsReady,
} from "@/lib/analytics"

export default function LandingTracking({ lpId }: { lpId: string }) {
  useEffect(() => {
    const search = new URLSearchParams(window.location.search)
    const utm: Record<string, string> = {}
    for (const key of UTM_KEYS) {
      const value = search.get(key)
      if (value) utm[key] = value.slice(0, 100)
    }

    setEventContext({ lp_id: lpId })
    try {
      sessionStorage.setItem(
        LP_ATTRIBUTION_KEY,
        JSON.stringify({ lp_id: lpId, lp_path: window.location.pathname, ...utm })
      )
    } catch {
      // Sin sessionStorage (modo privado estricto): se pierde la atribución en /gracias, no la página.
    }

    const cancel = whenAnalyticsReady(() => {
      trackEvent("lp_view", { lp_id: lpId, ...utm })
      try {
        window.clarity?.("set", "lp_id", lpId)
      } catch {
        // La medición nunca debe romper la página.
      }
    })

    return () => {
      cancel()
      setEventContext(null)
    }
  }, [lpId])

  return null
}

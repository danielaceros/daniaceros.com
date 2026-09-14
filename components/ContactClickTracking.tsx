"use client"

// Mide los clics a WhatsApp, email y teléfono de toda la web con un único listener delegado
// (sin tocar cada enlace): evento GA4 "contact_click" { method, page_path } + "Contact" de Meta.

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

function contactMethod(href: string) {
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return "whatsapp"
  if (href.startsWith("mailto:")) return "email"
  if (href.startsWith("tel:")) return "phone"
  return null
}

export default function ContactClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]")
      if (!link) return
      const method = contactMethod(link.getAttribute("href") ?? "")
      if (!method) return
      trackEvent("contact_click", { method, page_path: window.location.pathname })
      try {
        window.fbq?.("track", "Contact", { method })
      } catch {
        // La medición nunca debe romper la página.
      }
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}

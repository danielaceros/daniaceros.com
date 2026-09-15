"use client"

// Botón de las landings /lp: baja al formulario (#contacto) conservando la query (UTM) y mide `lp_cta_click`.

import { trackEvent } from "@/lib/analytics"

type Props = {
  lpId: string
  /** Dónde está el botón en la página (hero, dolores…): parámetro `position` del evento. */
  position: string
  label: string
  className?: string
}

export default function LandingCta({ lpId, position, label, className }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    trackEvent("lp_cta_click", { lp_id: lpId, position })
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#contacto`)
  }

  return (
    <a
      href="#contacto"
      onClick={handleClick}
      className={`inline-flex min-h-[52px] items-center justify-center text-balance rounded-2xl border border-white/25 bg-white px-8 py-3 text-center font-inter text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-black transition-transform duration-300 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[56px] sm:px-10 sm:text-[13px] ${className ?? ""}`}
    >
      {label}
    </a>
  )
}

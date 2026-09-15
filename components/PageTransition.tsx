"use client"

import { usePathname } from "next/navigation"
import clsx from "clsx"
import { stripLocale } from "@/lib/i18n"

const flushTopRoutes = new Set([
  "/aviso-legal",
  "/politica-de-cookies",
  "/politica-de-privacidad",
  "/gracias",
  "/tv",
])

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const path = stripLocale(pathname).path
  const isFlushTopRoute = flushTopRoutes.has(path)
  // Landings de anuncios (/eventos/...): sin fundido de página. data-lux deja todo a opacidad 0 al hidratar
  // (html.js-motion) y lo recupera con 760 ms de transición: en móvil retrasaba el LCP (póster del VSL) ~2 s.
  const skipReveal = path.startsWith("/eventos/")

  return (
    <div data-lux={skipReveal ? undefined : ""} className="relative">
      <div className={clsx("relative z-10", !isFlushTopRoute && "pt-[5.25rem] sm:pt-[5.5rem] lg:pt-24")}>
        {children}
      </div>
      {/* Brillo superior por encima del contenido y desde y=0: así cubre también la franja bajo el navbar
          flotante y no deja una banda de otro tono detrás de la pill (con o sin fondo opaco en <main>). */}
      {!isFlushTopRoute && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[85svh] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(255,255,255,0.07),rgba(255,255,255,0))]"
        />
      )}
    </div>
  )
}

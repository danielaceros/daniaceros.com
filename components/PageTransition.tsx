"use client"

import { usePathname } from "next/navigation"
import clsx from "clsx"

const flushTopRoutes = new Set([
  "/aviso-legal",
  "/politica-de-cookies",
  "/politica-de-privacidad",
  "/gracias",
])

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isFlushTopRoute = flushTopRoutes.has(pathname)

  return (
    <div className={clsx(!isFlushTopRoute && "pt-[5.25rem] sm:pt-[5.5rem] lg:pt-24")}>
      <div data-lux className="relative">
        {!isFlushTopRoute && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.08),rgba(255,255,255,0))]"
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

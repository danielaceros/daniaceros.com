// components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"

const navItems = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Clientes", href: "/clientes" },
  { label: "Casos de éxito", href: "/casos-de-exito" },
  { label: "Servicios", href: "/servicios" },
  { label: "Precios", href: "/precios" },
  { label: "Proceso", href: "/proceso" },
  { label: "Contratar", href: "/contratar" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
]

export default function Header() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const shouldHide = currentScrollY > lastScrollYRef.current && currentScrollY > 100
        setHidden((prev) => (prev === shouldHide ? prev : shouldHide))
        lastScrollYRef.current = currentScrollY
        tickingRef.current = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <header
        className={clsx(
          "fixed left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-3 sm:px-5 lg:px-6 top-[max(0.75rem,env(safe-area-inset-top))]",
          hidden && "pointer-events-none"
        )}
      >
        <nav
          className={clsx(
            "flex items-center justify-between rounded-full border border-white/10 bg-black/68 py-2.5 pl-3 pr-2.5 backdrop-blur-2xl transition-all duration-300 sm:py-3 sm:pl-4 sm:pr-3 lg:pl-5 lg:pr-4",
            hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <Link
            href="/"
            className="flex min-h-[44px] min-w-[44px] items-center rounded font-inter text-[10px] font-medium uppercase text-white/88 transition-colors duration-300 hover:text-white sm:text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            daniel acero©
          </Link>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "group relative rounded py-1 font-inter text-[10px] uppercase text-white/72 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-[11px]",
                      isActive && "text-white"
                    )}
                  >
                    {item.label}
                    <span
                      className={clsx(
                        "absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href="/contacto"
                className="group relative rounded border border-white/14 bg-white/[0.03] px-3 py-2 font-inter text-[10px] uppercase text-white/92 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-[11px]"
              >
                Cuéntame tu proyecto
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-11 w-11 flex-col justify-center gap-1.5 rounded-lg text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span
              className={clsx(
                "h-0.5 w-5 bg-current rounded-full origin-center block transition-transform duration-300",
                mobileOpen && "translate-y-[8px] rotate-45"
              )}
            />
            <span
              className={clsx(
                "h-0.5 w-5 bg-current rounded-full block transition-opacity duration-200",
                mobileOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={clsx(
                "h-0.5 w-5 bg-current rounded-full origin-center block transition-transform duration-300",
                mobileOpen && "-translate-y-[8px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden"
          aria-hidden="true"
        >
          <nav className="flex min-h-full flex-col items-center justify-center gap-8 px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(5rem,env(safe-area-inset-top)+2.5rem)]">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <div
                    key={item.href}
                    style={{ transitionDelay: `${i * 20}ms` }}
                    className="translate-y-0 opacity-100 transition-all duration-300"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={clsx(
                        "py-2 font-inter text-[18px] uppercase transition-colors duration-300 sm:text-[21px]",
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                )
              })}
              <div>
                <Link
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded border border-white/15 bg-white/[0.03] px-5 py-3 font-inter text-[16px] uppercase text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:opacity-95 sm:text-[18px]"
                >
                  Cuéntame tu proyecto
                </Link>
              </div>
          </nav>
        </div>
      )}
    </>
  )
}

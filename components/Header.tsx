// components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { motion, AnimatePresence } from "framer-motion"
import { ease } from "@/lib/motion"

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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: ease.expo, delay: 0.2 },
        }}
        className={clsx(
          "fixed left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-3 sm:px-5 lg:px-6 top-[max(0.75rem,env(safe-area-inset-top))]",
          hidden && "pointer-events-none"
        )}
      >
        <motion.nav
          animate={{
            y: hidden ? -100 : 0,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: ease.expo }}
          className="flex items-center justify-between rounded-full border border-white/10 bg-black/68 py-2.5 pl-3 pr-2.5 backdrop-blur-2xl sm:py-3 sm:pl-4 sm:pr-3 lg:pl-5 lg:pr-4"
        >
          <Link
            href="/"
            className="flex min-h-[44px] min-w-[44px] items-center rounded font-inter text-[10px] font-medium uppercase tracking-normal text-white/88 transition-colors duration-300 hover:text-white sm:text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
                      "group relative rounded py-1 font-inter text-[10px] uppercase tracking-normal text-white/72 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-[11px]",
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
                className="group relative rounded border border-white/14 bg-white/[0.03] px-3 py-2 font-inter text-[10px] uppercase tracking-normal text-white/92 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-[11px]"
              >
                Cuéntame tu proyecto
              </Link>
            </li>
          </ul>

          <motion.button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-11 w-11 flex-col justify-center gap-1.5 rounded-lg text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3, ease: ease.expo }}
              className="h-0.5 w-5 bg-current rounded-full origin-center block"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="h-0.5 w-5 bg-current rounded-full block"
            />
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3, ease: ease.expo }}
              className="h-0.5 w-5 bg-current rounded-full origin-center block"
            />
          </motion.button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: ease.expo }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden"
            aria-hidden="true"
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: ease.expo, delay: 0.05 }}
              className="flex min-h-full flex-col items-center justify-center gap-8 px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(5rem,env(safe-area-inset-top)+2.5rem)]"
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 + i * 0.05, ease: ease.expo }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={clsx(
                        "py-2 font-inter text-[18px] uppercase tracking-[-0.03em] transition-colors duration-300 sm:text-[21px]",
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: ease.expo }}
              >
                <Link
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded border border-white/15 bg-white/[0.03] px-5 py-3 font-inter text-[16px] uppercase tracking-normal text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:opacity-95 sm:text-[18px]"
                >
                  Cuéntame tu proyecto
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

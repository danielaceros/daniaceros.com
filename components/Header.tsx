// components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import clsx from "clsx"

const navItems = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "servicios", href: "/servicios" },
  { label: "casos de éxito", href: "/casos-de-exito" },
  { label: "mi proceso", href: "/proceso" },
  { label: "sobre mí", href: "/sobre-mi" },
  { label: "faq", href: "/faq" },
]

export default function Header() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY

      // si bajas, se oculta; si subes, aparece
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY])

  return (
    <div
      className={clsx(
        "fixed top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-6 transition-all duration-300 ease-out",
        hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <nav className="flex items-center justify-between rounded-full bg-transparent py-3">
        {/* Logo */}
        <Link
          href="/"
          className="font-inter text-[12px] font-medium uppercase tracking-[-0.02em] text-white"
        >
          daniel acero©
        </Link>

        {/* Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "nav-link font-inter text-[12px] uppercase tracking-[-0.02em] text-white/80 transition hover:text-white",
                    isActive && "active text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}

          {/* CTA */}
          <li>
            <Link
              href="/contacto"
              className="nav-link font-inter text-[12px] underline uppercase tracking-[-0.02em] text-white transition hover:opacity-80"
            >
              Cuéntame tu proyecto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
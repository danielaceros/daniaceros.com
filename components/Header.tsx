// components/Header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"
import clsx from "clsx"
import {
  HREFLANG,
  LANGUAGE_NAMES,
  LOCALES,
  getDictionary,
  localizedHref,
  stripLocale,
  switchLocalePath,
  type Dictionary,
  type Lang,
} from "@/lib/i18n"
import { persistLocale } from "@/lib/i18n/client"

// `href` = ruta española sin prefijo; se localiza con localizedHref(lang, href).
const navItems: { key: keyof Dictionary["header"]["nav"]; href: string }[] = [
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/sobre-mi" },
  { key: "clients", href: "/clientes" },
  { key: "caseStudies", href: "/casos-de-exito" },
  { key: "services", href: "/servicios" },
  { key: "pricing", href: "/precios" },
  { key: "process", href: "/proceso" },
  { key: "hire", href: "/contratar" },
  { key: "faq", href: "/faq" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contacto" },
]

const headerHiddenRoutes = new Set([
  "/aviso-legal",
  "/politica-de-cookies",
  "/politica-de-privacidad",
  "/gracias",
  "/tv",
])

type LanguageSwitcherProps = {
  lang: Lang
  pathname: string
  label: string
  variant: "desktop" | "mobile"
}

// Selector ES | EN. Enlace normal (<a>, recarga completa) para que <html lang>
// y todo el árbol cambien de idioma; antes de navegar fija la cookie
// NEXT_LOCALE, que el proxy respeta siempre.
function LanguageSwitcher({ lang, pathname, label, variant }: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={clsx(
        "flex items-center font-inter uppercase",
        variant === "desktop" ? "gap-1 text-[10px] xl:text-[11px]" : "gap-3 text-[14px] sm:text-[15px]"
      )}
    >
      {LOCALES.map((locale, index) => {
        const isCurrent = locale === lang
        return (
          <Fragment key={locale}>
            {index > 0 ? (
              <span aria-hidden className="text-white/25">
                |
              </span>
            ) : null}
            <a
              href={switchLocalePath(pathname, locale)}
              hrefLang={HREFLANG[locale]}
              lang={locale}
              aria-label={LANGUAGE_NAMES[locale]}
              aria-current={isCurrent ? "true" : undefined}
              onClick={() => persistLocale(locale)}
              className={clsx(
                "rounded transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                variant === "desktop" ? "py-1" : "flex min-h-[44px] min-w-[44px] items-center justify-center px-1",
                isCurrent ? "text-white" : "text-white/45 hover:text-white/90"
              )}
            >
              {locale}
            </a>
          </Fragment>
        )
      })}
    </div>
  )
}

type HeaderProps = {
  lang: Lang
  /** 404 global: el pathname no es fiable (/_not-found al prerenderizar), así que el selector lleva a la home de cada idioma. */
  notFound?: boolean
}

export default function Header({ lang, notFound = false }: HeaderProps) {
  const rawPathname = usePathname()
  // En el HTML prerenderizado el pathname llega como /es/... (ruta interna
  // reescrita por el proxy) y en el cliente como /...: se normaliza siempre.
  const pathname = stripLocale(rawPathname).path
  const switcherPath = notFound ? "/" : pathname
  const t = getDictionary(lang).header
  const hideHeader = headerHiddenRoutes.has(pathname)
  const isHablemosPage = pathname === "/hablemos"
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
        const delta = currentScrollY - lastScrollYRef.current

        // Always restore the header near top of page.
        if (currentScrollY <= 80) {
          setHidden(false)
          lastScrollYRef.current = currentScrollY
          tickingRef.current = false
          return
        }

        // Use delta threshold to avoid noisy browser UI scroll jitter.
        if (delta > 8) {
          setHidden(true)
        } else if (delta < -8) {
          setHidden(false)
        }

        lastScrollYRef.current = currentScrollY
        tickingRef.current = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const hablemosHref = localizedHref(lang, "/hablemos")

  const handleHablemosContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHablemosPage) return
    event.preventDefault()
    const contactSection = document.getElementById("contacto")
    if (!contactSection) return
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `${hablemosHref}#contacto`)
  }

  if (hideHeader) return null

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
            "cinematic-glow lux-shine relative overflow-hidden flex items-center justify-between rounded-full border border-white/10 bg-black/68 py-2.5 pl-3 pr-2.5 backdrop-blur-2xl transition-all duration-300 sm:py-3 sm:pl-4 sm:pr-3 lg:pl-5 lg:pr-4",
            hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          {isHablemosPage ? (
            <>
              <Link
                href={hablemosHref}
                className="flex min-h-[44px] min-w-[44px] items-center rounded font-inter text-[10px] font-medium uppercase text-white/88 transition-colors duration-300 hover:text-white sm:text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                daniel acero©
              </Link>
              <Link
                href={`${hablemosHref}#contacto`}
                onClick={handleHablemosContactClick}
                className="group relative flex min-h-[44px] items-center rounded border border-white/14 bg-white/[0.03] px-3 py-2 font-inter text-[10px] uppercase text-white/92 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-[11px]"
              >
                {t.cta}
              </Link>
            </>
          ) : (
            <>
              <Link
                href={localizedHref(lang, "/")}
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
                        href={localizedHref(lang, item.href)}
                        className={clsx(
                          "group relative rounded py-1 font-inter text-[10px] uppercase text-white/72 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-[11px]",
                          isActive && "text-white"
                        )}
                      >
                        {t.nav[item.key]}
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
                    href={localizedHref(lang, "/contacto")}
                    className="group relative rounded border border-white/14 bg-white/[0.03] px-3 py-2 font-inter text-[10px] uppercase text-white/92 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-[11px]"
                  >
                    {t.cta}
                  </Link>
                </li>
                {/* Margen negativo: el selector va pegado al CTA para no quitar
                    ancho al resto del menú (en ES a 1280px iba justo y hacía
                    saltar de línea "Sobre mí" / "Casos de éxito"). */}
                <li className="-ml-3 xl:-ml-5">
                  <LanguageSwitcher
                    lang={lang}
                    pathname={switcherPath}
                    label={t.languageSwitcherLabel}
                    variant="desktop"
                  />
                </li>
              </ul>

              <button
                type="button"
                aria-label={mobileOpen ? t.closeMenu : t.openMenu}
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
            </>
          )}
        </nav>
      </header>

      {mobileOpen && !isHablemosPage && (
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
                      href={localizedHref(lang, item.href)}
                      onClick={() => setMobileOpen(false)}
                      className={clsx(
                        "py-2 font-inter text-[18px] uppercase transition-colors duration-300 sm:text-[21px]",
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      )}
                    >
                      {t.nav[item.key]}
                    </Link>
                  </div>
                )
              })}
              <div>
                <Link
                  href={localizedHref(lang, "/contacto")}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded border border-white/15 bg-white/[0.03] px-5 py-3 font-inter text-[16px] uppercase text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:opacity-95 sm:text-[18px]"
                >
                  {t.cta}
                </Link>
              </div>
              <LanguageSwitcher
                lang={lang}
                pathname={switcherPath}
                label={t.languageSwitcherLabel}
                variant="mobile"
              />
          </nav>
        </div>
      )}
    </>
  )
}

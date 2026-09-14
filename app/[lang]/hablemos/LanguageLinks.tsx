"use client"

// Selector ES | EN discreto para el pie de /hablemos (su cabecera especial no
// lleva selector). Mismo comportamiento que el LanguageSwitcher del Header:
// <a> normal (recarga completa para que cambie <html lang>) y cookie
// NEXT_LOCALE fijada antes de navegar.
import { Fragment } from "react"
import { HREFLANG, LANGUAGE_NAMES, LOCALES, switchLocalePath, type Lang } from "@/lib/i18n"
import { persistLocale } from "@/lib/i18n/client"

type Props = {
  lang: Lang
  /** Ruta española sin prefijo de la página actual ("/hablemos"). */
  path: string
  label: string
}

export default function LanguageLinks({ lang, path, label }: Props) {
  return (
    <span role="group" aria-label={label} className="inline-flex items-center gap-1.5">
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
              href={switchLocalePath(path, locale)}
              hrefLang={HREFLANG[locale]}
              lang={locale}
              aria-label={LANGUAGE_NAMES[locale]}
              aria-current={isCurrent ? "true" : undefined}
              onClick={() => persistLocale(locale)}
              className={`rounded transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                isCurrent ? "text-white/90" : "hover:text-white/90"
              }`}
            >
              {locale}
            </a>
          </Fragment>
        )
      })}
    </span>
  )
}

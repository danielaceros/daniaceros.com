// lib/i18n/config.ts
// Utilidades de locale SIN dependencias (ni React ni Next): las importan el
// proxy (proxy.ts), componentes de servidor y componentes de cliente por igual.
// Ver I18N_GUIDE.md para el patrón completo.

export const LOCALES = ["es", "en"] as const
export type Lang = (typeof LOCALES)[number]

/** Idioma por defecto: vive SIN prefijo en la URL (/servicios). */
export const DEFAULT_LOCALE: Lang = "es"

/** Cookie que fija el idioma elegido (selector o detección automática). */
export const LOCALE_COOKIE = "NEXT_LOCALE"
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 año

/** Códigos hreflang (alternates.languages). x-default apunta a ES. */
export const HREFLANG: Record<Lang, string> = { es: "es-ES", en: "en" }

/** og:locale por idioma. */
export const OG_LOCALE: Record<Lang, string> = { es: "es_ES", en: "en_US" }

/** Valor de inLanguage en JSON-LD. */
export const SCHEMA_LANGUAGE: Record<Lang, string> = { es: "es-ES", en: "en" }

/** Nombre del idioma en su propio idioma (aria-label del selector). */
export const LANGUAGE_NAMES: Record<Lang, string> = { es: "Español", en: "English" }

/**
 * Idiomas del navegador que se quedan en español en la detección automática
 * (español, catalán, gallego y euskera). Cualquier otro → inglés.
 */
export const SPANISH_FAMILY_LANGUAGES = ["es", "ca", "gl", "eu"]

export function isLang(value: string | undefined | null): value is Lang {
  return !!value && (LOCALES as readonly string[]).includes(value)
}

/** Normaliza el param `[lang]` (siempre validado por dynamicParams=false). */
export function toLang(value: string | undefined | null): Lang {
  return isLang(value) ? value : DEFAULT_LOCALE
}

/**
 * Href interno localizado. `path` es SIEMPRE la ruta española sin prefijo
 * ("/", "/servicios", "/#contacto", "/blog/slug?x=1").
 *   localizedHref("es", "/servicios") → "/servicios"
 *   localizedHref("en", "/servicios") → "/en/servicios"
 *   localizedHref("en", "/")          → "/en"
 *   localizedHref("en", "/#contacto") → "/en#contacto"
 * URLs externas (https:, mailto:, tel:, #ancla) se devuelven tal cual.
 */
export function localizedHref(lang: Lang, path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  if (lang === DEFAULT_LOCALE) return path
  const match = path.match(/^([^?#]*)(.*)$/)
  const pathname = match?.[1] ?? path
  const suffix = match?.[2] ?? ""
  return `/${lang}${pathname === "/" ? "" : pathname}${suffix}`
}

/**
 * Quita el prefijo de idioma de un pathname.
 *   "/en/servicios" → { lang: "en", path: "/servicios" }
 *   "/es"           → { lang: "es", path: "/" }   (rutas internas reescritas)
 *   "/servicios"    → { lang: null, path: "/servicios" }
 */
export function stripLocale(pathname: string): { lang: Lang | null; path: string } {
  const segments = pathname.split("/")
  const first = segments[1]
  if (isLang(first)) {
    const rest = `/${segments.slice(2).join("/")}`
    return { lang: first, path: rest === "/" ? "/" : rest.replace(/\/$/, "") || "/" }
  }
  return { lang: null, path: pathname || "/" }
}

/** Misma página en otro idioma: "/en/servicios" + "es" → "/servicios". */
export function switchLocalePath(pathname: string, target: Lang): string {
  return localizedHref(target, stripLocale(pathname).path)
}

import type { Metadata } from "next"
import {
  DEFAULT_LOCALE,
  HREFLANG,
  OG_LOCALE,
  isTranslatedPath,
  localizedHref,
  toLang,
  type Lang,
} from "@/lib/i18n"

export const SITE_URL = "https://www.daniaceros.com"
// Antes apuntaba a un asset de Firebase Storage que devuelve 402 Payment
// Required (bucket con la facturación caída). Usamos el hero ya alojado en
// Vercel Blob, que sí está disponible y es la imagen de marca principal.
export const DEFAULT_OG_IMAGE =
  "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/hero/daniel-acero-hero-v2-llWDLWKhpBLHLD1VcbHNvWsLL7DeYZ.jpg"

// @id estables para referenciar las mismas entidades entre distintos bloques
// JSON-LD (evita duplicar el objeto Person/ProfessionalService completo en
// cada página).
export const PERSON_ID = `${SITE_URL}/sobre-mi#person`
export const BUSINESS_ID = `${SITE_URL}/#business`

export type BreadcrumbEntry = { name: string; path: string }

/** BreadcrumbList JSON-LD a partir de una lista de {name, path} (path relativo, sin dominio). */
export function buildBreadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/**
 * hreflang de una ruta traducida. `path` = ruta española sin prefijo.
 * { "es-ES": "/servicios", en: "/en/servicios", "x-default": "/servicios" }
 */
export function buildLanguageAlternates(path: string): Record<string, string> {
  return {
    [HREFLANG.es]: localizedHref("es", path),
    [HREFLANG.en]: localizedHref("en", path),
    "x-default": localizedHref(DEFAULT_LOCALE, path),
  }
}

/**
 * true si la versión `lang` de la ruta es una traducción pendiente
 * (se sirve con el contenido ES y debe ir con noindex y fuera del sitemap).
 */
export function isPendingTranslation(lang: Lang, translated: boolean): boolean {
  return lang !== DEFAULT_LOCALE && !translated
}

type BuildMetadataArgs = {
  title: string
  description: string
  /** Ruta ESPAÑOLA sin prefijo ("/servicios"). El prefijo /en lo añade buildMetadata. */
  path: string
  keywords?: string[]
  noIndex?: boolean
  /** Idioma de la página. Por defecto "es". */
  lang?: Lang
  /**
   * ¿Existe traducción EN de esta ruta? Por defecto se consulta el registro
   * lib/i18n/routes.ts. Si es true: hreflang en ambas versiones e index en EN.
   * Si es false: la versión EN sale con noindex y sin hreflang.
   */
  translated?: boolean
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  lang = DEFAULT_LOCALE,
  translated,
}: BuildMetadataArgs): Metadata {
  const hasTranslation = translated ?? isTranslatedPath(path)
  const pending = isPendingTranslation(lang, hasTranslation)
  const localizedPath = localizedHref(lang, path)
  const url = `${SITE_URL}${localizedPath}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: localizedPath,
      ...(hasTranslation && !noIndex ? { languages: buildLanguageAlternates(path) } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : pending
        ? { index: false, follow: true }
        : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang],
      url,
      siteName: "Daniel Acero",
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export type LangParams = { params: Promise<{ lang: string }> }

/**
 * Atajo para páginas bajo app/[lang]:
 *
 *   // Página pendiente de traducir (mismo texto ES; en /en sale noindex):
 *   export const generateMetadata = localizedMetadata({ title, description, path })
 *
 *   // Página traducida (textos por idioma):
 *   export const generateMetadata = localizedMetadata((lang) => {
 *     const t = getDictionary(lang).meta.home
 *     return { title: t.title, description: t.description, path: "/" }
 *   })
 */
export function localizedMetadata(
  args: Omit<BuildMetadataArgs, "lang"> | ((lang: Lang) => Omit<BuildMetadataArgs, "lang">)
) {
  return async function generateMetadata({ params }: LangParams): Promise<Metadata> {
    const lang = toLang((await params).lang)
    const resolved = typeof args === "function" ? args(lang) : args
    return buildMetadata({ ...resolved, lang })
  }
}

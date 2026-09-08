import type { Metadata } from "next"

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

type BuildMetadataArgs = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: "es_ES",
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

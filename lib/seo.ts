import type { Metadata } from "next"

export const SITE_URL = "https://danielacero.com"
export const DEFAULT_OG_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/Disen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=ae45c05e-35c1-40c4-a89a-b7a738811667"

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

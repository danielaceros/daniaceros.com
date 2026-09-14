import {
  BUSINESS_ID,
  DEFAULT_OG_IMAGE,
  PERSON_ID,
  SITE_URL,
  buildBreadcrumbSchema,
  localizedMetadata,
  type LangParams,
} from "@/lib/seo"
import { SCHEMA_LANGUAGE, getDictionary, localizedHref, toLang } from "@/lib/i18n"
import SobreMiClient from "./SobreMiClient"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/sobre-mi",
  keywords: content[lang].keywords,
}))

// Person de primer nivel: el resto de páginas (layout raíz, blog) lo
// referencian por @id en vez de duplicar el objeto completo.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Daniel Acero",
  jobTitle: content.es.jobTitle,
  url: `${SITE_URL}/sobre-mi`,
  image: DEFAULT_OG_IMAGE,
  sameAs: [
    "https://www.instagram.com/daniaceros",
    "https://es.linkedin.com/in/daniaceros",
    "https://www.youtube.com/@daniacerxs/videos",
  ],
  worksFor: { "@id": BUSINESS_ID },
}

export default async function Page({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  const path = localizedHref(lang, "/sobre-mi")

  // PERSON_ID es una entidad única: el objeto Person completo solo vive en la
  // versión ES. La versión EN publica un AboutPage que lo referencia por @id.
  const mainSchema =
    lang === "es"
      ? personSchema
      : {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${SITE_URL}${path}#webpage`,
          url: `${SITE_URL}${path}`,
          name: t.metaTitle,
          inLanguage: SCHEMA_LANGUAGE[lang],
          mainEntity: { "@id": PERSON_ID },
        }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: getDictionary(lang).breadcrumbs.home, path: localizedHref(lang, "/") },
    { name: t.breadcrumb, path },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SobreMiClient lang={lang} />
    </>
  )
}

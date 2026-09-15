import { buildFaqSchema, buildServiceSchema, localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import VideoCorporativoMadridClient from "./VideoCorporativoMadridClient"
import { content } from "./content"

const PATH = "/video-corporativo-madrid"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: PATH,
  keywords: content[lang].keywords,
}))

export default async function Page({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  // Service + FAQPage: el FAQ sale del mismo array (t.faq) que pinta la página.
  const schemas = [
    buildServiceSchema({ name: t.title, description: t.metaDescription, path: PATH, lang }),
    buildFaqSchema(t.faq, PATH, lang),
  ]
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <VideoCorporativoMadridClient lang={lang} />
    </>
  )
}

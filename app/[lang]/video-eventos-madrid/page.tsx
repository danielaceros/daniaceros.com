import { buildServiceSchema, localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import VideoEventosMadridClient from "./VideoEventosMadridClient"
import { content } from "./content"

const PATH = "/video-eventos-madrid"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: PATH,
  keywords: content[lang].keywords,
}))

export default async function Page({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  // Solo Service: esta landing no tiene FAQ visible, así que no lleva FAQPage.
  const serviceSchema = buildServiceSchema({ name: t.title, description: t.metaDescription, path: PATH, lang })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <VideoEventosMadridClient lang={lang} />
    </>
  )
}

import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import VideoCorporativoMadridClient from "./VideoCorporativoMadridClient"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/video-corporativo-madrid",
  keywords: content[lang].keywords,
}))

export default async function Page({ params }: LangParams) {
  const lang = toLang((await params).lang)
  return <VideoCorporativoMadridClient lang={lang} />
}

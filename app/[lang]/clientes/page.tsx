import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import ClientesClient from "./ClientesClient"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/clientes",
  keywords: content[lang].keywords,
}))

export default async function Page({ params }: LangParams) {
  const lang = toLang((await params).lang)
  return <ClientesClient lang={lang} />
}

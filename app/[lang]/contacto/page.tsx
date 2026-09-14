import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/contacto",
  keywords: content[lang].keywords,
}))

export default async function ContactPage({ params }: LangParams) {
  const lang = toLang((await params).lang)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <ContactPortfolioMarquee lang={lang} />
      {/* La página no tenía H1: el título del bloque de contacto pasa a ser la cabecera principal. */}
      <ContactCTA lang={lang} headingAs="h1" />
    </main>
  )
}

import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import ContactCTA from "@/components/ContactCTA"
import VslSection from "@/components/VslSection"
import { PERSON_ID, SITE_URL, localizedMetadata, type LangParams } from "@/lib/seo"
import { SCHEMA_LANGUAGE, getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { VSL } from "@/lib/media"

export const generateMetadata = localizedMetadata((lang) => {
  const t = getDictionary(lang).meta.home
  return {
    title: t.title,
    description: t.description,
    path: "/",
    keywords: t.keywords,
  }
})

export default async function Home({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const homePath = localizedHref(lang, "/")

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": lang === "es" ? `${SITE_URL}/#website` : `${SITE_URL}${homePath}#website`,
    name: "Daniel Acero",
    url: lang === "es" ? SITE_URL : `${SITE_URL}${homePath}`,
    inLanguage: SCHEMA_LANGUAGE[lang],
  }

  // VideoObject del VSL (un @id por idioma). contentUrl = mp4 progresivo, no el m3u8 del HLS. Sin transcript
  // hasta que Dani valide la transcripción.
  const vsl = VSL[lang]
  const dict = getDictionary(lang)
  const homeUrl = lang === "es" ? SITE_URL : `${SITE_URL}${homePath}`
  const vslSchema = vsl
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": `${homeUrl}#vsl`,
        name: dict.vsl.videoLabel,
        description: `${dict.hero.tagline}. ${dict.hero.description}`,
        thumbnailUrl: [vsl.poster],
        contentUrl: vsl.mp4,
        uploadDate: vsl.uploadDate,
        duration: vsl.duration,
        inLanguage: SCHEMA_LANGUAGE[lang],
        author: { "@id": PERSON_ID },
      }
    : null

  return (
    <main className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {vslSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vslSchema) }} />
      ) : null}
      {/* El VSL es lo primero que se ve: título compacto encima, sin foto de fondo */}
      <Hero lang={lang} variant="video">
        {VSL[lang] ? <VslSection lang={lang} hideTitle inline /> : null}
      </Hero>
      <Portfolio lang={lang} />
      <About lang={lang} />
      <div id="contacto">
        <ContactCTA lang={lang} />
      </div>
    </main>
  )
}

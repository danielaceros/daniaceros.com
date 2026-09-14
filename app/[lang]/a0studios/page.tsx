import Image from "next/image"
import ContactCTA from "@/components/ContactCTA"
import { PERSON_ID, SITE_URL, buildBreadcrumbSchema, localizedMetadata, type LangParams } from "@/lib/seo"
import { SCHEMA_LANGUAGE, getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { whatsappUrl } from "@/lib/contact"
import { A0_IMAGES, A0_URL, content } from "./content"

// Página puente: presenta A0Studios dentro del portfolio y manda a su web (a0studios.es).
// La antigua /the-rooftop-content-studio redirige directamente a a0studios.es (next.config.ts).

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/a0studios",
  keywords: content[lang].keywords,
}))

export default async function A0StudiosPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  const path = localizedHref(lang, "/a0studios")

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: t.metaTitle,
    inLanguage: SCHEMA_LANGUAGE[lang],
    about: {
      "@type": "Organization",
      // Mismo @id que el negocio declarado en a0studios.es, para que buscadores/IA lo unan en una entidad.
      "@id": "https://www.a0studios.es/#business",
      name: "A0Studios",
      // "Rooftop Content Studio" = nombre anterior del estudio (rooftopcontentstudio.es → a0studios.es).
      alternateName: ["Acero Studios", "Rooftop Content Studio"],
      url: A0_URL,
      founder: { "@id": PERSON_ID },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ronda de Atocha, 16",
        postalCode: "28012",
        addressLocality: "Madrid",
        addressCountry: "ES",
      },
    },
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: getDictionary(lang).breadcrumbs.home, path: localizedHref(lang, "/") },
    { name: t.breadcrumb, path },
  ])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <header data-lux className="cinematic-reveal mb-10 sm:mb-12">
          <p className="mb-2 font-inter text-[11px] uppercase text-white/40">{t.kicker}</p>
          <h1 className="font-inter text-[28px] font-semibold uppercase leading-[1.05] sm:text-[36px] lg:text-[48px]">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl font-inter text-[14px] leading-[1.7] text-white/70 sm:text-[16px]">{t.subtitle}</p>
        </header>

        <figure data-lux className="cinematic-reveal">
          <div className="relative aspect-[16/9] w-full max-w-full overflow-hidden rounded-xl bg-white/5">
            <Image
              src={A0_IMAGES.hero}
              alt={t.heroAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-inter text-[11px] uppercase tracking-[0.14em] text-white/45">
            {t.location}
          </figcaption>
        </figure>

        <div className="mt-12 space-y-14 font-inter">
          <section data-lux className="cinematic-reveal space-y-5">
            {t.intro.map((paragraph) => (
              <p key={paragraph} className="text-[13px] leading-[1.75] text-white/85 sm:text-[14px]">
                {paragraph}
              </p>
            ))}
          </section>

          <section data-lux className="cinematic-reveal space-y-6">
            <h2 className="text-[14px] font-semibold uppercase text-white sm:text-[15px]">{t.formatsTitle}</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {t.formats.map((item) => (
                <li key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[14px] font-medium text-white/95">{item.title}</p>
                  <p className="mt-2 text-[13px] leading-[1.7] text-white/70">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section data-lux className="cinematic-reveal grid gap-3 sm:grid-cols-3">
            {A0_IMAGES.gallery.map((src, index) => (
              <div key={src} className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-xl bg-white/5">
                <Image
                  src={src}
                  alt={t.galleryAlts[index] ?? ""}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
            ))}
          </section>

          <section data-lux className="cinematic-reveal space-y-4">
            <h2 className="text-[14px] font-semibold uppercase text-white sm:text-[15px]">{t.howTitle}</h2>
            <p className="text-[13px] leading-[1.75] text-white/85 sm:text-[14px]">{t.howText}</p>
          </section>

          <section
            data-lux
            className="cinematic-reveal rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:px-10"
          >
            <p className="text-[15px] font-medium text-white/90 sm:text-[17px]">{t.ctaTitle}</p>
            <a
              href={A0_URL}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-white px-8 font-inter text-[13px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a] transition-opacity duration-300 hover:opacity-90"
            >
              {t.ctaButton}
              <span aria-hidden>→</span>
            </a>
            <a
              href={whatsappUrl(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-[13px] text-white/60 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
            >
              {t.ctaWhatsapp}
            </a>
          </section>
        </div>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { SCHEMA_LANGUAGE, toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/faq",
  keywords: content[lang].keywords,
}))

export default async function FAQPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  // El bloque ES original no llevaba inLanguage: solo se añade en EN (I18N_GUIDE §3.5).
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(lang === "es" ? {} : { inLanguage: SCHEMA_LANGUAGE[lang] }),
    mainEntity: t.sections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="space-y-6 mb-14">
          <p className="font-inter text-[11px] uppercase text-white/40">
            {t.kicker}
          </p>
          <h1 className="font-inter font-semibold uppercase text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            {t.title}
          </h1>
        </header>

        <div className="space-y-12 font-inter">
          {t.sections.map((section) => (
            <section key={section.title} className="space-y-5">
              <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
                {section.title}
              </h2>
              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li key={item.q} className="space-y-2">
                    <h3 className="font-inter text-[14px] sm:text-[15px] font-medium text-white">
                      {item.q}
                    </h3>
                    <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
                      {item.a}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

        </div>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

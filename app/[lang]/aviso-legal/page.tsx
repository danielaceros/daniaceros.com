// app/[lang]/aviso-legal/page.tsx
import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { OWNER, content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/aviso-legal",
}))

export default async function AvisoLegalPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  const sections = [t.sections.terms, t.sections.ip, t.sections.liability, t.sections.law]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {t.notice ? (
          <p className="mb-8 border-l border-white/20 pl-4 text-[13px] leading-[1.7] text-white/55 italic">
            {t.notice}
          </p>
        ) : null}

        <h1
          className="
            mb-12 font-inter font-semibold uppercase
            text-[32px] sm:text-[42px] lg:text-[56px]
          "
        >
          {t.title}
        </h1>

        <div className="space-y-8 text-[14px] leading-[1.7] text-white/80 sm:text-[15px]">
          <p>{t.intro}</p>

          <div>
            <p><strong>{t.owner.holderLabel}</strong>{` ${OWNER.holder}`}</p>
            <p><strong>{t.owner.tradeNameLabel}</strong>{` ${OWNER.tradeName}`}</p>
            <p><strong>{t.owner.taxIdLabel}</strong>{` ${OWNER.taxId}`}</p>
            <p><strong>{t.owner.addressLabel}</strong>{` ${OWNER.address}`}</p>
            <p>
              <strong>{t.owner.emailLabel}</strong>{" "}
              <a href={`mailto:${OWNER.email}`} className="underline hover:text-white transition-colors">
                {OWNER.email}
              </a>
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 font-inter font-semibold uppercase text-white">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </article>

      <ContactCTA lang={lang} />
    </main>
  )
}

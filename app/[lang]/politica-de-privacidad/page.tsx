import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { CONTROLLER, content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/politica-de-privacidad",
}))

const h2ClassName = "mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white"
const linkClassName = "underline underline-offset-4 hover:text-white transition"

export default async function PrivacyPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {t.notice ? (
          <p className="mb-8 border-l border-white/20 pl-4 text-[13px] leading-[1.7] text-white/55 italic">
            {t.notice}
          </p>
        ) : null}

        <h1 className="mb-12 font-inter font-semibold uppercase  text-[32px] sm:text-[42px] lg:text-[56px]">
          {t.title}
        </h1>

        <div className="space-y-10 text-[14px] leading-[1.7] text-white/80 sm:text-[15px]">
          <p>{t.intro}</p>

          <h2 className={h2ClassName}>{t.controller.title}</h2>
          <ul className="space-y-1">
            <li>{`${t.controller.holderLabel} ${CONTROLLER.holder}`}</li>
            <li>{`${t.controller.tradeNameLabel} ${CONTROLLER.tradeName}`}</li>
            <li>{`${t.controller.taxIdLabel} ${CONTROLLER.taxId}`}</li>
            <li>{`${t.controller.addressLabel} ${CONTROLLER.address}`}</li>
            <li>
              {t.controller.emailLabel}{" "}
              <a href={`mailto:${CONTROLLER.contactEmail}`} className={linkClassName}>
                {CONTROLLER.contactEmail}
              </a>
            </li>
          </ul>

          <h2 className={h2ClassName}>{t.data.title}</h2>
          <p>{t.data.intro}</p>
          <ul className="list-disc pl-4 space-y-1">
            {t.data.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className={h2ClassName}>{t.purpose.title}</h2>
          <ul className="list-disc pl-4 space-y-1">
            {t.purpose.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className={h2ClassName}>{t.legalBasis.title}</h2>
          <ul className="list-disc pl-4 space-y-1">
            {t.legalBasis.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className={h2ClassName}>{t.retention.title}</h2>
          <p>{t.retention.text}</p>

          <h2 className={h2ClassName}>{t.rights.title}</h2>
          <ul className="list-disc pl-4 space-y-1">
            {t.rights.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p>
            {t.rights.exercise}{" "}
            <a href={`mailto:${CONTROLLER.rightsEmail}`} className={linkClassName}>
              {CONTROLLER.rightsEmail}
            </a>
          </p>

          <h2 className={h2ClassName}>{t.security.title}</h2>
          <p>{t.security.text}</p>

          <h2 className={h2ClassName}>{t.changes.title}</h2>
          <p>{t.changes.text}</p>
        </div>
      </article>

      <div className="mt-24">
        <ContactCTA lang={lang} />
      </div>
    </main>
  )
}

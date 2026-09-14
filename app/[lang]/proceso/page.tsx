import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/proceso",
  keywords: content[lang].keywords,
}))

export default async function ProcesoPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="space-y-6 mb-14">
          <p className="font-inter text-[11px] uppercase text-white/40">
            {t.kicker}
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            {t.title}
          </h1>
        </header>

        <div className="space-y-10 font-inter">
          {t.steps.map((step, i) => (
            <section key={step.title} className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white flex items-baseline gap-3">
                <span className="text-white/50 tabular-nums">{i + 1}.</span>
                {step.title}
              </h2>
              <ul className="space-y-1.5 text-[13px] sm:text-[14px] leading-[1.65] text-white/78 list-disc list-inside pl-5">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              {t.whyTitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              {t.whyText}
            </p>
          </section>

        </div>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/servicios/corporativo",
  keywords: content[lang].keywords,
}))

export default async function CorporateServicePage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20 space-y-10">
        <header className="space-y-5">
          <p className="font-inter text-[11px] uppercase text-white/40">
            {t.kicker}
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[30px] leading-[1.05] sm:text-[40px] lg:text-[56px]">
            {t.title}
          </h1>
          <p className="max-w-3xl font-inter text-[14px] sm:text-[15px] leading-[1.7] text-white/72">
            {t.lead}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)]">
          <div className="space-y-7 text-white/78">
            <p className="font-inter text-[14px] sm:text-[15px] leading-[1.7]">
              {t.intro}
            </p>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                {t.whatTitle}
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7]">
                {t.whatText}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                {t.typesTitle}
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                {t.types.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                {t.approachTitle}
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7]">
                {t.approachText}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                {t.processTitle}
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                {t.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                {t.fitTitle}
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                {t.fit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase text-white/50">
                {t.clientsTitle}
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/80">
                {t.clientsText}
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase text-white/50">
                {t.whereTitle}
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/80">
                {t.whereText}
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-4 border-t border-white/10 pt-10 space-y-4">
          <h2 className="font-inter text-[16px] sm:text-[18px] font-semibold uppercase ">
            {t.ctaTitle}
          </h2>
          <p className="max-w-3xl font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
            {t.ctaText}
          </p>
        </section>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

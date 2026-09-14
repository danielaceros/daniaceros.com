import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/politica-de-cookies",
}))

const h2ClassName = "mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white"

export default async function CookiesPage({ params }: LangParams) {
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

          <h2 className={h2ClassName}>{t.what.title}</h2>
          <p>{t.what.text}</p>

          <h2 className={h2ClassName}>{t.types.title}</h2>
          <ul className="list-disc pl-4 space-y-2">
            {t.types.items.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>{` ${item.text}`}
              </li>
            ))}
          </ul>

          <h2 className={h2ClassName}>{t.thirdParty.title}</h2>
          <p>{t.thirdParty.text}</p>
          <ul className="list-disc pl-4 space-y-2">
            {t.thirdParty.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className={h2ClassName}>{t.management.title}</h2>
          <p>{t.management.text}</p>
          <ul className="list-disc pl-4 space-y-2">
            {t.management.browsers.map((browser) => (
              <li key={browser.name}>
                {`${browser.name}:`}{" "}
                <a
                  href={browser.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white transition"
                >
                  {browser.label}
                </a>
              </li>
            ))}
          </ul>

          <h2 className={h2ClassName}>{t.consent.title}</h2>
          <p>{t.consent.text}</p>

          <h2 className={h2ClassName}>{t.updates.title}</h2>
          <p>{t.updates.text}</p>
        </div>
      </article>

      <div className="mt-24">
        <ContactCTA lang={lang} />
      </div>
    </main>
  )
}

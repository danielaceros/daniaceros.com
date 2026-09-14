import Link from "next/link"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { localizedHref, toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/gracias",
  noIndex: true,
}))

export default async function GraciasPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-4xl items-center justify-center px-4 py-8 text-white sm:px-6 sm:py-10">
      <section className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center shadow-[0_24px_70px_-38px_rgba(0,0,0,0.9)] sm:p-12">
        <p className="font-inter text-[12px] uppercase tracking-[0.22em] text-white/55">{t.kicker}</p>
        <h1 className="mt-4 font-display text-[38px] font-semibold uppercase leading-[1.02] sm:text-[52px]">
          {t.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-inter text-[14px] leading-[1.7] text-white/72 sm:text-[16px]">
          {t.text}
        </p>
        <div className="mt-10">
          <Link
            href={localizedHref(lang, "/")}
            className="inline-flex min-h-[58px] min-w-[280px] items-center justify-center rounded-full border border-white/35 px-8 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-white/92 transition-all duration-300 hover:border-white/55 hover:bg-white/[0.04] hover:text-white sm:min-w-[340px] sm:text-[14px]"
          >
            {t.backHome}
          </Link>
        </div>
      </section>
    </main>
  )
}

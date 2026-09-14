"use client"

import Link from "next/link"
import { Fragment, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import ContactCTA from "@/components/ContactCTA"
import { ease } from "@/lib/motion"
import { localizedHref, type Lang } from "@/lib/i18n/config"
import { content, type RichText } from "./content"

const paragraphClass = "text-[13px] sm:text-[14px] leading-[1.75] text-white/85"
const inlineLinkClass = "text-white underline underline-offset-4 hover:text-white/80"

function Rich({ parts, lang }: { parts: RichText; lang: Lang }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <Link key={i} href={localizedHref(lang, part.href)} className={inlineLinkClass}>
            {part.label}
          </Link>
        )
      )}
    </>
  )
}

export default function VideoCorporativoMadridPage({ lang }: { lang: Lang }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6">
        <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px] text-center">
          {t.title}
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="https://kgtz1gujr7extokb.public.blob.vercel-storage.com/hero/daniel-acero-hero-v2-llWDLWKhpBLHLD1VcbHNvWsLL7DeYZ.jpg"
            alt={t.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:pb-12">
        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.meaningTitle}
            </h2>
            {t.meaning.map((paragraph) => (
              <p key={paragraph} className={paragraphClass}>
                {paragraph}
              </p>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.includesTitle}
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85 list-disc list-inside">
              {t.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.typesTitle}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.types.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] leading-[1.6] text-white/85"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.agencyTitle}
            </h2>
            {t.agency.map((paragraph) => (
              <p key={paragraph} className={paragraphClass}>
                {paragraph}
              </p>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.solveTitle}
            </h2>
            {t.solve.map((paragraph) => (
              <p key={paragraph} className={paragraphClass}>
                {paragraph}
              </p>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.productionCompanyTitle}
            </h2>
            {t.productionCompany.map((parts, i) => (
              <p key={i} className={paragraphClass}>
                <Rich parts={parts} lang={lang} />
              </p>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.trustTitle}
            </h2>
            {t.trust.map((paragraph) => (
              <p key={paragraph} className={paragraphClass}>
                {paragraph}
              </p>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.howTitle}
            </h2>
            {t.how.map((parts, i) => (
              <p key={i} className={paragraphClass}>
                <Rich parts={parts} lang={lang} />
              </p>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.fitTitle}
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85 list-disc list-inside">
              {t.fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.budgetTitle}
            </h2>
            {t.budget.map((parts, i) => (
              <p key={i} className={paragraphClass}>
                <Rich parts={parts} lang={lang} />
              </p>
            ))}
          </section>

          <section className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.quoteTitle}
            </h2>
            <p className={paragraphClass}>
              {t.quoteText}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href={localizedHref(lang, "/contacto")} className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 bg-white px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-black transition hover:bg-white/90">
                {t.quotePrimary}
              </Link>
              <Link href={localizedHref(lang, "/portfolio")} className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition hover:border-white/30 hover:text-white/85">
                {t.quoteSecondary}
              </Link>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.faqTitle}
            </h2>
            <ul className="space-y-2 border-t border-white/10 pt-4">
              {t.faq.map((item, i) => (
                <li key={item.q} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left font-inter text-[14px] sm:text-[15px] font-medium text-white transition-colors hover:text-white/90"
                  >
                    {item.q}
                    <span className={`shrink-0 text-white/50 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: ease.expo }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <ContactPortfolioMarquee lang={lang} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20">
        <h2 className="font-inter font-semibold uppercase  text-[24px] leading-[1.1] sm:text-[28px] lg:text-[32px] mb-12">
          {t.eventsTitle}
        </h2>

        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.coverageTitle}
            </h3>
            <ul className="space-y-2">
              {t.coverage.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] leading-[1.6] text-white/85"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.eventTypesTitle}
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.eventTypes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] leading-[1.6] text-white/85"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.differenceTitle}
            </h3>
            <p className={paragraphClass}>
              {t.differenceText}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.styleTitle}
            </h3>
            <p className={paragraphClass}>
              {t.styleText}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.clientsTitle}
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.clients.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] leading-[1.6] text-white/85"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.deliveryTitle}
            </h3>
            <p className={paragraphClass}>
              {t.deliveryText}
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-10">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.whereTitle}
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              {t.whereText}
            </p>
          </section>
        </div>
      </section>

      <ViewMoreOnTV className="px-4 pb-2" lang={lang} />

      <ContactCTA lang={lang} />
    </main>
  )
}

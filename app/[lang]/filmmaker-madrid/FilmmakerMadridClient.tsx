"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import ContactCTA from "@/components/ContactCTA"
import { ease } from "@/lib/motion"
import type { Lang } from "@/lib/i18n/config"
import { content } from "./content"

export default function FilmmakerMadridPage({ lang }: { lang: Lang }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6 sm:pb-8">
        <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px]">
          {t.title}
        </h1>
      </section>

      <ContactPortfolioMarquee lang={lang} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-20">
        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.servicesTitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              {t.servicesText}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.whyTitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              {t.whyText}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.howTitle}
            </h2>
            <ol className="space-y-4">
              {t.steps.map((step, i) => (
                <li key={step.title} className="space-y-2">
                  <h3 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white flex items-baseline gap-2">
                    <span className="text-white/50 tabular-nums">{i + 1}.</span>
                    {step.title}
                  </h3>
                  <ul className="space-y-1 pl-6 text-[13px] sm:text-[14px] leading-[1.65] text-white/78">
                    {step.items.map((item) => (
                      <li key={item} className="list-disc">{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
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

          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="font-inter text-[16px] sm:text-[18px] font-semibold uppercase  text-white">
              {t.whereTitle}
            </h2>
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

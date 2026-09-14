"use client"

import { useState } from "react"
import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import ContactCTA from "@/components/ContactCTA"
import type { Lang } from "@/lib/i18n"
import { content } from "./content"

export default function ClientesPage({ lang = "es" }: { lang?: Lang }) {
  const t = content[lang]
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <ContactPortfolioMarquee lang={lang} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-20">
        <header className="mb-12">
          <h1 className="font-inter font-semibold uppercase text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            {t.title}
          </h1>
        </header>

        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
              {t.sectorsTitle}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.sectors.map((item) => (
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
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
              {t.projectTypesTitle}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.projectTypes.map((item) => (
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
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
              {t.trustTitle}
            </h2>
            <ul className="space-y-2">
              {t.trust.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
              {t.faqTitle}
            </h2>
            <ul className="space-y-2 border-t border-white/10 pt-4">
              {t.faq.map((item, i) => (
                <li key={item.q} className="border-b border-white/10">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={`clientes-faq-question-${i}`}
                      aria-expanded={openFaq === i}
                      aria-controls={`clientes-faq-answer-${i}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left font-inter text-[14px] sm:text-[15px] font-medium text-white transition-colors hover:text-white/90"
                    >
                      {item.q}
                      <span
                        aria-hidden="true"
                        className={[
                          "shrink-0 text-white/50 transition-transform duration-200",
                          openFaq === i ? "rotate-180" : "",
                        ].join(" ")}
                      >
                        ▼
                      </span>
                    </button>
                  </h3>
                  {/* Respuesta siempre presente en el HTML (server-rendered) para
                      crawlers, incluso cuando está colapsada visualmente: solo se
                      anima con CSS (grid-template-rows), nunca se desmonta del DOM. */}
                  <div
                    id={`clientes-faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`clientes-faq-question-${i}`}
                    className={[
                      "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out",
                      openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="min-h-0">
                      <p className="pb-4 font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </section>

      <ViewMoreOnTV className="px-4 pb-2" lang={lang} />

      <ContactCTA lang={lang} />
    </main>
  )
}

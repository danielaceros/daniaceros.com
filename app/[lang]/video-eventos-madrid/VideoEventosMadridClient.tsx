"use client"

import Image from "next/image"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import ContactCTA from "@/components/ContactCTA"
import type { Lang } from "@/lib/i18n/config"
import { content } from "./content"

export default function VideoEventosMadridPage({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6">
        <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px]">
          {t.title}
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-6">
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
        <p className="mt-6 text-[13px] sm:text-[14px] leading-[1.75] text-white/85 font-inter">
          {t.intro}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-20">
        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.eventTypesTitle}
            </h2>
            <ul className="space-y-2">
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
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.styleTitle}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.style.map((item) => (
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
              {t.clientsTitle}
            </h2>
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
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              {t.howTitle}
            </h2>
            <ol className="space-y-3">
              {t.how.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85"
                >
                  <span className="text-white/50 tabular-nums">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
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

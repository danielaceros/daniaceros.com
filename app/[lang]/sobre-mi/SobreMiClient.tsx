"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ContactCTA from "@/components/ContactCTA"
import type { Lang } from "@/lib/i18n"
import { ease, stagger, viewport } from "@/lib/motion"
import { content } from "./content"

const portraitUrl =
  "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/sobre-mi/daniel-acero-ceo-awards-bqVq9Ciw7DVt6yXSt5RamnQXn0WOJj.jpeg"

export default function SobreMiPage({ lang = "es" }: { lang?: Lang }) {
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ease.expo }}
          className="mb-14"
        >
          <p className="font-inter text-[11px] uppercase text-white/40 mb-2">
            {t.kicker}
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            {t.title}
          </h1>
        </motion.header>

        <div className="space-y-14 font-inter">
          {/* Intro + retrato */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: stagger.normal, delayChildren: 0.1 },
              },
            }}
            className="grid gap-10 lg:grid-cols-[1fr,minmax(280px,340px)] lg:gap-12 lg:items-start"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.expo } },
              }}
              className="space-y-6"
            >
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
                {t.intro}
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: ease.expo } },
              }}
              className="relative aspect-[3/4] max-h-[480px] w-full overflow-hidden rounded-xl bg-white/5 lg:max-h-none"
            >
              <Image
                src={portraitUrl}
                alt={t.portraitAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-cover object-top"
              />
            </motion.div>
          </motion.section>

          {/* Mi enfoque */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              {t.approachTitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              {t.approachText}
            </p>
          </motion.section>

          {/* Qué me diferencia */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-6"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              {t.differentiatorsTitle}
            </h2>
            <ul className="space-y-5">
              {t.differentiators.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <div>
                    <span className="font-medium text-white/95">{item.title}:</span>{" "}
                    <span className="text-[13px] sm:text-[14px] leading-[1.7] text-white/85">
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Experiencia */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              {t.experienceTitle}
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85 list-disc list-inside pl-2">
              {t.experienceSectors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>

          {/* Mi filosofía */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              {t.philosophyTitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              {t.philosophyText}
            </p>
          </motion.section>

          {/* Dónde trabajo */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              {t.whereTitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              {t.whereText}
            </p>
          </motion.section>

        </div>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

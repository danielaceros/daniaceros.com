"use client"

import { motion } from "framer-motion"
import { ease, stagger, viewport } from "@/lib/motion"
import { getDictionary, type Lang } from "@/lib/i18n"

export default function PortfolioHero({ lang = "es" }: { lang?: Lang }) {
  const t = getDictionary(lang).portfolio.hero

  return (
    <motion.section
      data-lux
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger.relaxed, delayChildren: 0.15 },
        },
      }}
      className="page-container pt-20 pb-12 sm:pt-28 sm:pb-20"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.expo } },
        }}
        className="mb-8 sm:mb-10 font-inter font-semibold uppercase  text-[28px] leading-[1.05] sm:text-[48px] lg:text-[64px]"
      >
        {t.title}
      </motion.h1>

      <div className="max-w-3xl space-y-5 text-white/78">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.expo } },
          }}
          className="font-inter text-[13px] sm:text-[14px] leading-[1.6]"
        >
          {t.paragraphs[0]}
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.expo } },
          }}
          className="font-inter text-[13px] sm:text-[14px] leading-[1.6]"
        >
          {t.paragraphs[1]}
        </motion.p>
      </div>
    </motion.section>
  )
}

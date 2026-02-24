"use client"

import { motion } from "framer-motion"
import { ease } from "@/lib/motion"

type Props = { children: React.ReactNode }

export default function SectionTitle({ children }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: ease.expo }}
      className="mb-8 font-display text-[26px] font-semibold uppercase leading-[1.02] tracking-[-0.03em] sm:mb-10 sm:text-[34px] lg:text-[42px]"
    >
      {children}
      {/* Animated underline that draws in */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: ease.expo }}
        className="mt-3 block h-px w-12 origin-left bg-white/35"
      />
    </motion.h2>
  )
}

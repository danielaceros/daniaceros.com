"use client"

import { motion } from "framer-motion"
import { ease, stagger, viewport } from "@/lib/motion"

export default function PortfolioHero() {
  return (
    <motion.section
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
        Historias visuales que conectan con empresas, instituciones y marcas
      </motion.h1>

      <div className="max-w-3xl space-y-5 text-white/78">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.expo } },
          }}
          className="font-inter text-[13px] sm:text-[14px] leading-[1.6]"
        >
          Mi trabajo consiste en transformar eventos, ideas y experiencias corporativas en piezas audiovisuales con narrativa y estética cinematográfica. A continuación encontrarás una selección de proyectos realizados en diferentes sectores: empresas, instituciones, deporte, formación, activaciones y eventos profesionales.
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.expo } },
          }}
          className="font-inter text-[13px] sm:text-[14px] leading-[1.6]"
        >
          Cada proyecto tiene su propia historia, su propio objetivo y su propio enfoque visual. Aquí puedes descubrir cómo trabajo y qué resultados genero para mis clientes.
        </motion.p>
      </div>
    </motion.section>
  )
}

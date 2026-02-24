"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ease, stagger } from "@/lib/motion"
import { VIDEO_POSTER_URL } from "@/lib/media"

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.08])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0.56, 0.82])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, 60])
  const allowParallax = !prefersReducedMotion

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger.slow,
        delayChildren: 0.35,
      },
    },
  }

  const line = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: ease.expo },
    },
  }

  const subtitle = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: ease.expo },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0">
        <motion.div
          style={allowParallax ? { y: bgY, scale: bgScale } : undefined}
          className="absolute inset-0 h-[120%] w-full -top-[10%]"
        >
          <Image
            src={VIDEO_POSTER_URL}
            alt=""
            fill
            priority
            quality={72}
            sizes="100vw"
            className="h-full w-full scale-105 object-cover blur-[7px] opacity-70"
          />
        </motion.div>
        <motion.div
          style={allowParallax ? { opacity: overlayOpacity } : undefined}
          className="pointer-events-none absolute inset-0 bg-black/72"
        />
      </div>

      {/* Content — fades up on scroll */}
      <motion.div
        style={allowParallax ? { opacity: contentOpacity, y: contentY } : undefined}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Title with clip/mask feel — each word or line could stagger; we use one block with overflow hidden */}
          <div className="overflow-hidden">
            <motion.h1
              variants={line}
              className="font-display font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(2.8rem,11.8vw,9.2rem)]"
            >
              DANIEL ACERO
            </motion.h1>
          </div>

          <motion.p
            variants={subtitle}
            className="mt-4 font-inter text-[clamp(0.94rem,2.8vw,1.3rem)] font-medium uppercase tracking-[0.12em] text-white/86 sm:mt-5"
          >
            Filmmaker corporativo y videógrafo de eventos en Madrid
          </motion.p>

          <motion.p
            variants={subtitle}
            className="mt-4 max-w-3xl px-1 font-inter text-[13px] font-normal leading-[1.72] tracking-[0.01em] text-white/72 sm:mt-5 sm:text-[15px]"
          >
            Transformo eventos empresariales, congresos y conferencias en piezas audiovisuales profesionales para marcas y empresas en Madrid.
          </motion.p>
        </motion.div>

        {/* Scroll indicator — minimal, smooth loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6, ease: ease.expo }}
          className="absolute bottom-[max(2rem,env(safe-area-inset-bottom)+1rem)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          aria-hidden
        >
          <span className="font-inter text-[10px] uppercase tracking-[0.22em] text-white/38">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: ease.expoInOut,
            }}
            className="h-10 w-px bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

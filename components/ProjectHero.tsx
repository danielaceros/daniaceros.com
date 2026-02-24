"use client"

import { motion } from "framer-motion"
import { ease } from "@/lib/motion"

type Props = {
  title: string
  video: string
  href: string
}

export default function ProjectHero({ title, video, href }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: ease.expo }}
      className="relative h-[30svh] min-h-[220px] w-full overflow-hidden bg-[#0a0a0a] sm:h-[34svh] sm:min-h-[260px] lg:h-[40svh]"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 block transition-opacity duration-500 hover:opacity-95"
        aria-label={`Ver vídeo de ${title}`}
      >
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full scale-105 object-cover blur-[1.5px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-black/55 transition-opacity duration-500 hover:bg-black/46" />
      </a>

      <div className="pointer-events-none absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-10 sm:right-10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: ease.expo }}
          className="font-display text-[24px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] sm:text-[38px] lg:text-[48px]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-2 font-inter text-[10px] font-medium uppercase tracking-[0.08em] text-white/66"
        >
          Haz clic para ver el proyecto completo
        </motion.p>
      </div>
    </motion.section>
  )
}

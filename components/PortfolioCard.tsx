"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ease } from "@/lib/motion"
import { VIDEO_POSTER_URL } from "@/lib/media"

type Props = {
  title: string
  video: string
  href: string
  index?: number
}

type NavigatorConnection = {
  saveData?: boolean
  effectiveType?: string
}

const isInternal = (href: string) => href.startsWith("/")

export default function PortfolioCard({ title, video, href, index = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [canAutoplay, setCanAutoplay] = useState(true)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NavigatorConnection }).connection
    const isDataSaver = !!connection?.saveData
    const isSlowNetwork =
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "3g"

    // Prevent heavy autoplay behavior on constrained mobile networks.
    setCanAutoplay(!(isDataSaver || isSlowNetwork))
  }, [])

  useEffect(() => {
    if (shouldLoadVideo || !cardRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: "120px 0px", threshold: 0.12 }
    )

    observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [shouldLoadVideo])

  const wrapperVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: index * 0.06, ease: ease.expo },
    },
  }

  const content = (
    <>
      <video
        src={shouldLoadVideo ? video : undefined}
        autoPlay={canAutoplay}
        muted
        loop
        playsInline
        preload={index < 2 ? "metadata" : "none"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
      >
        <track kind="captions" srcLang="es" label="Sin dialogo" src="/captions/silent.vtt" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 left-4 right-4 font-display text-[16px] font-semibold uppercase leading-tight tracking-[-0.03em] text-white/95 line-clamp-2 sm:bottom-5 sm:left-5 sm:right-5 sm:text-[19px]">
        {title}
      </span>
      <span className="absolute bottom-5 left-5 h-px w-0 bg-white/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-10" />
    </>
  )

  const baseClass =
    "group relative block aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

  if (isInternal(href)) {
    return (
      <motion.div ref={cardRef} variants={wrapperVariants}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, ease: ease.expo }}
        >
          <Link
            href={href}
            aria-label={`Ver proyecto ${title}`}
            className={baseClass}
          >
            {content}
          </Link>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div ref={cardRef} variants={wrapperVariants}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: ease.expo }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver vídeo de ${title}`}
          className={baseClass}
        >
          {content}
        </a>
      </motion.div>
    </motion.div>
  )
}

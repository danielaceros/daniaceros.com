"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import { ease } from "@/lib/motion"

type Props = {
  title: string
  video: string
  videoBlurClass?: string
}

export default function ProjectHero({ title, video, videoBlurClass = "blur-[0.5px]" }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroReady, setIsHeroReady] = useState(false)
  const [isModalReady, setIsModalReady] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <motion.section
        data-lux
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: ease.expo }}
        className="lux-shine relative h-[30svh] min-h-[220px] w-full overflow-hidden bg-[#0a0a0a] sm:h-[34svh] sm:min-h-[260px] lg:h-[40svh]"
      >
        <button
          type="button"
          onClick={() => {
            setIsModalReady(false)
            setIsOpen(true)
          }}
          className="absolute inset-0 block cursor-pointer transition-opacity duration-500 hover:opacity-95"
          aria-label={`Ver vídeo de ${title}`}
        >
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setIsHeroReady(true)}
            className={`h-full w-full scale-105 object-cover ${videoBlurClass} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.08]`}
          />
          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
              isHeroReady ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="h-7 w-7 animate-spin rounded-full border border-white/50 border-t-transparent" />
          </div>
          <div className="absolute inset-0 bg-black/55 transition-opacity duration-500 hover:bg-black/46" />
        </button>

        <div className="pointer-events-none absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-10 sm:right-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: ease.expo }}
            className="font-display text-[24px] font-semibold uppercase leading-[1.03] sm:text-[38px] lg:text-[48px]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-2 font-inter text-[10px] font-medium uppercase  text-white/66"
          >
            Haz clic para ver el video completo
          </motion.p>
        </div>
      </motion.section>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/82 px-3 py-4 backdrop-blur-sm sm:px-6"
              onClick={() => setIsOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label={`Video de ${title}`}
            >
              <div
                className="relative max-h-[88svh] max-w-[94vw] overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] uppercase  text-white/85 transition hover:bg-black/75"
                  aria-label="Cerrar video"
                >
                  Cerrar
                </button>
                <video
                  src={video}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onLoadedData={() => setIsModalReady(true)}
                  className="block max-h-[88svh] max-w-[94vw] bg-black object-contain"
                />
                <div
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 transition-opacity duration-300 ${
                    isModalReady ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="h-8 w-8 animate-spin rounded-full border border-white/60 border-t-transparent" />
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}

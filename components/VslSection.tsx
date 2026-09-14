"use client"

// VSL de la home: vídeo 16:9 con póster y botón de play grande. No descarga
// nada hasta que se pulsa play (sin `src` inicial + preload="none"). Al pulsar
// elige calidad en cliente:
//   - 4K por defecto.
//   - 1080p si hay ahorro de datos, red 2g/3g o pantalla pequeña
//     (ancho CSS × devicePixelRatio < 1600).
//   - Si el 4K falla al cargar, cae automáticamente al 1080p.
// Las URLs salen de lib/media.ts (VSL[lang]); si es null la sección no existe.

import { useRef, useState } from "react"
import type { CSSProperties } from "react"
import { getDictionary, type Lang } from "@/lib/i18n"
import { VSL } from "@/lib/media"

type NavigatorConnection = { saveData?: boolean; effectiveType?: string }
type Quality = "4k" | "1080p"

function pickQuality(): Quality {
  if (typeof window === "undefined") return "4k"
  const connection = (navigator as Navigator & { connection?: NavigatorConnection }).connection
  if (connection?.saveData) return "1080p"
  if (connection?.effectiveType && ["slow-2g", "2g", "3g"].includes(connection.effectiveType)) {
    return "1080p"
  }
  const physicalWidth = (window.screen?.width ?? window.innerWidth) * (window.devicePixelRatio || 1)
  if (physicalWidth < 1600) return "1080p"
  return "4k"
}

type Props = {
  lang: Lang
  /** Oculta el título corto encima del vídeo. */
  hideTitle?: boolean
  className?: string
}

export default function VslSection({ lang, hideTitle = false, className }: Props) {
  const media = VSL[lang]
  const t = getDictionary(lang).vsl
  const videoRef = useRef<HTMLVideoElement>(null)
  const qualityRef = useRef<Quality | null>(null)
  const [started, setStarted] = useState(false)

  if (!media) return null

  const playVideo = (video: HTMLVideoElement) => {
    video.play().catch(() => {
      // Si el navegador bloquea play(), dejamos los controles nativos visibles
      // para que el usuario pueda iniciarlo a mano.
    })
  }

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (!qualityRef.current) {
      qualityRef.current = pickQuality()
      video.src = qualityRef.current === "4k" ? media.video4k : media.video
      video.dataset.quality = qualityRef.current
    }
    setStarted(true)
    playVideo(video)
  }

  const handleError = () => {
    const video = videoRef.current
    if (!video || qualityRef.current !== "4k") return
    qualityRef.current = "1080p"
    video.src = media.video
    video.dataset.quality = "1080p"
    video.load()
    playVideo(video)
  }

  return (
    <section
      data-lux
      aria-label={t.videoLabel}
      className={`cinematic-reveal page-container pb-4 pt-12 sm:pb-6 sm:pt-16 lg:pt-20 ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        {hideTitle ? null : (
          <p
            data-lux
            style={{ "--lux-delay": "80ms" } as CSSProperties}
            className="mb-5 flex items-center justify-center gap-3 text-center font-inter text-[10px] uppercase tracking-[0.22em] text-white/55 sm:mb-6 sm:text-[11px]"
          >
            <span aria-hidden className="h-px w-8 bg-white/25" />
            {t.title}
            <span aria-hidden className="h-px w-8 bg-white/25" />
          </p>
        )}

        <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_28px_70px_-36px_rgba(0,0,0,0.95)]">
          <video
            ref={videoRef}
            poster={media.poster}
            preload="none"
            playsInline
            controls={started}
            onError={handleError}
            aria-label={t.videoLabel}
            className="absolute inset-0 h-full w-full bg-black object-cover"
          />

          {started ? null : (
            <button
              type="button"
              onClick={handlePlay}
              aria-label={t.play}
              className="group absolute inset-0 flex cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25 transition-opacity duration-500 group-hover:opacity-80"
              />
              <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-[0_18px_48px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:border-white/55 group-hover:bg-white/20 sm:h-[96px] sm:w-[96px]">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="ml-1 h-7 w-7 fill-white sm:h-9 sm:w-9"
                >
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.24-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

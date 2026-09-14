"use client"

// <video> decorativo en bucle (tarjetas del portfolio, casos de éxito) que SOLO descarga y reproduce
// mientras está en pantalla.
//
// - El HTML del servidor lleva el <video> con su src y su poster (SEO intacto), pero con preload="none"
//   y sin autoplay: el navegador no descarga nada hasta que se llama a play().
// - Un IntersectionObserver por vídeo (también los clones de los marquees) hace play() al ser visible
//   (≥ 20 %) y pause() al salir del todo. Tiene en cuenta el recorte de contenedores con overflow, así
//   que en carruseles horizontales solo suenan las tarjetas que se ven.
// - Con "Ahorro de datos" activado no se reproduce nada (queda el póster), igual que antes en PortfolioCard.
import { useEffect, useRef } from "react"
import type { VideoHTMLAttributes } from "react"
import { preconnect } from "react-dom"
import { BLOB_ORIGIN } from "@/lib/media"

type NavigatorConnection = { saveData?: boolean; effectiveType?: string }

const PLAY_RATIO = 0.2

export function useAutoplayWhenVisible(enabled = true) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video || !enabled) return
    const connection = (navigator as Navigator & { connection?: NavigatorConnection }).connection
    if (connection?.saveData) return
    if (typeof IntersectionObserver === "undefined") {
      video.muted = true
      void video.play().catch(() => {})
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting && entry.intersectionRatio >= PLAY_RATIO) {
          if (video.paused) {
            video.muted = true
            void video.play().catch(() => {})
          }
        } else if (!entry.isIntersecting && !video.paused) {
          video.pause()
        }
      },
      { threshold: [0, PLAY_RATIO] }
    )
    observer.observe(video)
    return () => {
      observer.disconnect()
      if (!video.paused) video.pause()
    }
  }, [enabled])

  return ref
}

type Props = Omit<VideoHTMLAttributes<HTMLVideoElement>, "autoPlay" | "preload" | "muted" | "loop" | "playsInline"> & {
  src: string
  /** false = solo póster (p. ej. red lenta en PortfolioCard). */
  autoplay?: boolean
}

export default function AutoplayVideo({ autoplay = true, ...rest }: Props) {
  preconnect(BLOB_ORIGIN)
  const ref = useAutoplayWhenVisible(autoplay)
  return <video ref={ref} muted loop playsInline preload="none" {...rest} />
}

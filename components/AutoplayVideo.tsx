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
// - Si el VSL está en pantalla y aún no ha arrancado, espera a que empiece (VSL_STARTED_EVENT, máx. 8 s):
//   en móvil el carrusel entra en el primer pantallazo y sus mp4 le quitaban el ancho de banda al VSL.
import { useEffect, useRef } from "react"
import type { VideoHTMLAttributes } from "react"
import { preconnect } from "react-dom"
import { BLOB_ORIGIN, VSL_STARTED_EVENT } from "@/lib/media"

type NavigatorConnection = { saveData?: boolean; effectiveType?: string }

const PLAY_RATIO = 0.2
const VSL_WAIT_MAX_MS = 8000

type VslWindow = Window & { __vslStarted?: boolean }

/** Resuelve cuando el VSL visible ha arrancado (o enseguida si no hay VSL en pantalla, o a los 8 s). */
function vslGate(): Promise<void> {
  const w = window as VslWindow
  const vsl = document.querySelector("[data-vsl-player]")
  if (!vsl || w.__vslStarted) return Promise.resolve()
  const r = vsl.getBoundingClientRect()
  if (r.bottom <= 0 || r.top >= window.innerHeight) return Promise.resolve()
  return new Promise((resolve) => {
    const done = () => {
      window.clearTimeout(timer)
      window.removeEventListener(VSL_STARTED_EVENT, done)
      resolve()
    }
    const timer = window.setTimeout(done, VSL_WAIT_MAX_MS)
    window.addEventListener(VSL_STARTED_EVENT, done)
  })
}

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

    let cancelled = false
    let visible = false
    const gate = vslGate()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting && entry.intersectionRatio >= PLAY_RATIO) {
          visible = true
          void gate.then(() => {
            if (cancelled || !visible || !video.paused) return
            video.muted = true
            void video.play().catch(() => {})
          })
        } else if (!entry.isIntersecting) {
          visible = false
          if (!video.paused) video.pause()
        }
      },
      { threshold: [0, PLAY_RATIO] }
    )
    observer.observe(video)
    return () => {
      cancelled = true
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

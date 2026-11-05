"use client"

// Reel vertical protagonista de una landing (p. ej. el de IFEMA en /eventos/ifema): arranca solo, sin sonido y en
// bucle, con un botón para activar el audio. Es la versión web ligera del vídeo (720p, ~14 MB), no el original:
// se reproduce en móvil de un expositor y no debe gastar CDN de más. `preload="metadata"` + póster: hasta que
// arranca la reproducción no baja el vídeo entero.
import { useRef, useState } from "react"

type Props = { src: string; poster: string; label?: string; className?: string }

export default function LandingReel({ src, poster, label, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  function toggleSound() {
    const video = ref.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted) void video.play().catch(() => undefined)
  }

  return (
    <div
      className={`relative mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:max-w-[340px] ${className}`}
    >
      <video
        ref={ref}
        className="aspect-[9/16] w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {label ? (
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 font-inter text-[11px] uppercase tracking-[0.08em] text-white/85 backdrop-blur">
          {label}
        </span>
      ) : null}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Activar sonido" : "Silenciar"}
        className="absolute bottom-3 right-3 inline-flex min-h-[40px] items-center rounded-full bg-black/60 px-4 font-inter text-[12px] uppercase tracking-[0.06em] text-white backdrop-blur transition-colors duration-300 hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {muted ? "Activar sonido" : "Silenciar"}
      </button>
    </div>
  )
}

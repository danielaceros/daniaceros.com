"use client"

// Vídeo de muestra (aftermovie de un cliente) de la sublanding /eventos/ifema/propuesta. Horizontal, con póster y
// controles nativos; `preload="none"` para no gastar CDN ni ancho de banda de quien solo hace scroll: el vídeo
// no baja hasta que se pulsa play.
import { useState } from "react"

type Props = { src: string; poster: string; title: string; className?: string }

export default function ShowcaseVideo({ src, poster, title, className = "" }: Props) {
  const [started, setStarted] = useState(false)
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/12 bg-black ${className}`}>
      <video
        className="aspect-video w-full bg-black object-cover"
        src={src}
        poster={poster}
        controls
        playsInline
        preload="none"
        aria-label={title}
        onPlay={() => setStarted(true)}
      />
      {!started ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-black shadow-xl sm:h-20 sm:w-20">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 sm:h-9 sm:w-9" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      ) : null}
    </div>
  )
}

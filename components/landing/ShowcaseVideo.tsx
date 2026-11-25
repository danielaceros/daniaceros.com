"use client"

// Vídeo de muestra (aftermovie, entrevista o reel de un cliente) de las landings de /eventos. Horizontal (o
// vertical 9:16), con póster y botón de play propio: los controles nativos del navegador solo aparecen una vez
// empieza la reproducción (antes se veían toscos encima del póster). `preload="none"` para no gastar CDN ni ancho
// de banda de quien solo hace scroll: el vídeo no baja hasta que se pulsa play.
import { useRef, useState } from "react"

type Props = {
  src: string
  poster: string
  title: string
  className?: string
  vertical?: boolean
  // false = el botón de play no entra en el orden de tabulación (p. ej. slide inactivo de un carrusel).
  tabbable?: boolean
}

export default function ShowcaseVideo({ src, poster, title, className = "", vertical = false, tabbable = true }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  function start() {
    setStarted(true)
    // play() devuelve una promesa que puede rechazarse (p. ej. si se pausa al instante): se ignora.
    ref.current?.play().catch(() => {})
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/12 bg-black ${className}`}>
      <video
        ref={ref}
        className={`block w-full bg-black object-contain ${vertical ? "aspect-[9/16]" : "aspect-video"}`}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="none"
        aria-label={title}
        onPlay={() => setStarted(true)}
      />
      {!started ? (
        <button
          type="button"
          onClick={start}
          tabIndex={tabbable ? 0 : -1}
          aria-label={`Reproducir: ${title}`}
          className="group absolute inset-0 flex cursor-pointer items-center justify-center focus:outline-none"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-black shadow-xl transition-transform duration-200 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-white/70 sm:h-20 sm:w-20">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 sm:h-9 sm:w-9" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  )
}

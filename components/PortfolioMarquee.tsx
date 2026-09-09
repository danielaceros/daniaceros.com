"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export type MarqueeItem = {
  slug: string
  title: string
  video: string
  poster?: string
}

type CardSize = "sm" | "lg"

type Props = {
  items: MarqueeItem[]
  /** "sm" = tamaño actual de Contacto. "lg" = tarjetas más grandes (página Portfolio). */
  size?: CardSize
  /** "modal" abre el vídeo en un lightbox (comportamiento de Contacto).
   *  "link" navega a `${basePath}/${slug}` (ficha completa del proyecto). */
  mode?: "modal" | "link"
  basePath?: string
  speed?: number
  className?: string
}

const SIZE_CLASSES: Record<CardSize, string> = {
  sm: "aspect-[3/4] h-[140px] w-[105px] sm:h-[180px] sm:w-[135px] lg:h-[220px] lg:w-[165px]",
  lg: "aspect-[3/4] h-[220px] w-[165px] sm:h-[300px] sm:w-[225px] lg:h-[380px] lg:w-[285px]",
}

const TITLE_SIZE_CLASSES: Record<CardSize, string> = {
  sm: "text-[10px] sm:text-[13px]",
  lg: "text-[13px] sm:text-[16px] lg:text-[19px]",
}

const GAP_CLASSES: Record<CardSize, string> = {
  sm: "gap-4",
  lg: "gap-5 sm:gap-6",
}

const EDGE_FADE_CLASSES: Record<CardSize, string> = {
  sm: "w-32",
  lg: "w-24 sm:w-40 lg:w-56",
}

export default function PortfolioMarquee({
  items,
  size = "sm",
  mode = "modal",
  basePath = "/portfolio",
  speed = 0.28,
  className,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const xRef = useRef(0)
  const runningRef = useRef(false)
  const [activeVideo, setActiveVideo] = useState<{ title: string; video: string } | null>(null)

  useEffect(() => {
    const animate = () => {
      if (!runningRef.current) return
      if (trackRef.current) {
        xRef.current -= speed
        const width = trackRef.current.scrollWidth / 2
        if (-xRef.current >= width) xRef.current = 0
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const start = () => {
      if (runningRef.current) return
      runningRef.current = true
      rafRef.current = requestAnimationFrame(animate)
    }

    const stop = () => {
      runningRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    const onVisibilityChange = () => {
      if (document.hidden) stop()
      else start()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start()
        else stop()
      },
      { threshold: 0.05 }
    )

    if (trackRef.current) observer.observe(trackRef.current)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      stop()
      observer.disconnect()
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [speed])

  useEffect(() => {
    if (mode !== "modal" || !activeVideo) return

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null)
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [mode, activeVideo])

  return (
    <>
      <section className={`relative w-full overflow-hidden py-6 sm:py-8 ${className ?? ""}`}>
        <div ref={trackRef} className={`flex w-max ${GAP_CLASSES[size]} will-change-transform`}>
          {[...items, ...items].map((item, i) => (
            <MarqueeCard
              key={`${item.slug}-${i}`}
              title={item.title}
              video={item.video}
              poster={item.poster}
              size={size}
              href={mode === "link" ? `${basePath}/${item.slug}` : undefined}
              onOpen={
                mode === "modal"
                  ? () => setActiveVideo({ title: item.title, video: item.video })
                  : undefined
              }
            />
          ))}
        </div>

        <div
          className={`pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent ${EDGE_FADE_CLASSES[size]}`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent ${EDGE_FADE_CLASSES[size]}`}
        />
      </section>

      {mode === "modal" && activeVideo && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/82 px-3 py-4 backdrop-blur-sm sm:px-6"
              onClick={() => setActiveVideo(null)}
              role="dialog"
              aria-modal="true"
              aria-label={`Video de ${activeVideo.title}`}
            >
              <div
                className="relative max-h-[88svh] max-w-[94vw] overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] uppercase text-white/85 transition hover:bg-black/75"
                  aria-label="Cerrar video"
                >
                  Cerrar
                </button>
                <video
                  src={activeVideo.video}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="block max-h-[88svh] max-w-[94vw] bg-black object-contain"
                />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}

function MarqueeCard({
  title,
  video,
  poster,
  size,
  href,
  onOpen,
}: {
  title: string
  video: string
  poster?: string
  size: CardSize
  href?: string
  onOpen?: () => void
}) {
  const cardClassName = `group relative block cursor-pointer overflow-hidden rounded-xl bg-[#0a0a0a] ${SIZE_CLASSES[size]}`

  const inner = (
    <>
      <video
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <span
        className={`pointer-events-none absolute bottom-2 left-2 right-2 font-inter font-semibold uppercase text-white truncate ${TITLE_SIZE_CLASSES[size]}`}
      >
        {title}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} aria-label={`Ver proyecto ${title}`} className={cardClassName}>
        {inner}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onOpen} className={cardClassName} aria-label={`Abrir video de ${title}`}>
      {inner}
    </button>
  )
}

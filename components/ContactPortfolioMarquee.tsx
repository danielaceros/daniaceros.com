"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { projects } from "@/data/projects"

const items = projects.map((p) => ({ title: p.title, video: p.video, poster: p.poster }))

export default function ContactPortfolioMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const xRef = useRef(0)
  const runningRef = useRef(false)
  const [activeVideo, setActiveVideo] = useState<{ title: string; video: string } | null>(null)

  useEffect(() => {
    const speed = 0.28

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
  }, [])

  useEffect(() => {
    if (!activeVideo) return

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
  }, [activeVideo])

  return (
    <>
      <section className="relative w-full overflow-hidden py-6 sm:py-8">
        <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
          {[...items, ...items].map((item, i) => (
            <MarqueeCard
              key={`${item.title}-${i}`}
              title={item.title}
              video={item.video}
              poster={item.poster}
              onOpen={() => setActiveVideo({ title: item.title, video: item.video })}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </section>

      {activeVideo && typeof document !== "undefined"
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
  onOpen,
}: {
  title: string
  video: string
  poster?: string
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="
        group relative block cursor-pointer
        aspect-[3/4] h-[140px] w-[105px] overflow-hidden
        rounded-xl bg-[#0a0a0a]
        sm:h-[180px] sm:w-[135px]
        lg:h-[220px] lg:w-[165px]
      "
      aria-label={`Abrir video de ${title}`}
    >
      <video
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          pointer-events-none absolute inset-0 h-full w-full object-cover
          transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-[1.04]
        "
      />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <span
        className="
          pointer-events-none absolute bottom-2 left-2 right-2
          font-inter text-[10px] sm:text-[13px] font-semibold uppercase
           text-white truncate
        "
      >
        {title}
      </span>
    </button>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const items = [
  { title: "FIFA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A1.mp4?alt=media&token=12073558-3af3-459a-bf2a-e76441a8c42e", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A1.mp4?alt=media&token=12073558-3af3-459a-bf2a-e76441a8c42e"},
  { title: "BRAHIM DÍAZ",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/ssstik.io_%40sonypicturesspain_1765025166403.mp4?alt=media&token=85e6bd4f-2ae0-4e7b-a795-84e34d415928", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/ssstik.io_%40sonypicturesspain_1765025166403.mp4?alt=media&token=85e6bd4f-2ae0-4e7b-a795-84e34d415928"},
  { title: "OMAR MONTES",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/SnapInsta.to_AQMpJcNmZa5CVSZIaTtKFv0wnJqh7qcQzpu0xzJSsuTFssC5KiccQz6uQHcxUAFRHe0oe3Q1RG2dDE0mBhr4v4jwdYg5x3_vWrx9fYM%20(1)_1.mp4?alt=media&token=c1211d45-7fae-4049-b82e-339e6a1028a9", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/SnapInsta.to_AQMpJcNmZa5CVSZIaTtKFv0wnJqh7qcQzpu0xzJSsuTFssC5KiccQz6uQHcxUAFRHe0oe3Q1RG2dDE0mBhr4v4jwdYg5x3_vWrx9fYM%20(1)_1.mp4?alt=media&token=c1211d45-7fae-4049-b82e-339e6a1028a9"},
  { title: "TENGO UN PLAN",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A3.mp4?alt=media&token=087cdd6c-1228-48f4-b059-c1a214f90cf9", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A3.mp4?alt=media&token=087cdd6c-1228-48f4-b059-c1a214f90cf9"},
  { title: "CÁMARA DE COMERCIO",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A7%20(2).mp4?alt=media&token=9aefe430-138c-4501-b6fa-b0f0b160ccfe", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A7%20(2).mp4?alt=media&token=9aefe430-138c-4501-b6fa-b0f0b160ccfe"},
  { title: "IFEMA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/%F0%9F%8E%A5%20Un%20punto%20de%20encuentro%2C%20un%20impulso%2C%20y%20una%20sen%CC%83al%20clara-%20el%20sector%20esta%CC%81%20despertando.Tercer%20an%CC%83o%20c.mp4?alt=media&token=e9318ece-6817-48e0-a1a0-f6c90daf774f", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/%F0%9F%8E%A5%20Un%20punto%20de%20encuentro%2C%20un%20impulso%2C%20y%20una%20sen%CC%83al%20clara-%20el%20sector%20esta%CC%81%20despertando.Tercer%20an%CC%83o%20c.mp4?alt=media&token=e9318ece-6817-48e0-a1a0-f6c90daf774f"},
  { title: "FEDERACIÓN DE ESGRIMA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A5.mp4?alt=media&token=ce83614c-90e9-45ce-ae95-0feaec9c1135", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A5.mp4?alt=media&token=ce83614c-90e9-45ce-ae95-0feaec9c1135"},
  { title: "CINESA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/CINESA%20(2).mp4?alt=media&token=da7f88d0-6b36-4ee8-9e9c-6b81c6a1819b", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/CINESA%20(2).mp4?alt=media&token=da7f88d0-6b36-4ee8-9e9c-6b81c6a1819b"},
]

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
              onOpen={() => setActiveVideo({ title: item.title, video: item.video })}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent" />
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
  onOpen,
}: {
  title: string
  video: string
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
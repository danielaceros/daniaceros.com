"use client"

// Slider de aftermovies de las landings de cenas: el vídeo activo va grande y centrado, y el siguiente asoma por
// el lado para invitar a deslizar. En móvil se desliza con el dedo; en escritorio hay flechas, puntos y teclado.
// Es solo CSS (scroll-snap) más un poco de JS para saber cuál es el activo y pausar los demás.
// Cada vídeo es un ShowcaseVideo (póster, preload="none"): nada se descarga hasta pulsar play.
import { useCallback, useEffect, useRef, useState } from "react"
import ShowcaseVideo from "@/components/landing/ShowcaseVideo"
import type { ShowcaseItem } from "@/components/landing/ShowcaseTabs"

const ARROW =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"

export default function AftermovieSlider({ items }: { items: ShowcaseItem[] }) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)

  const slideEls = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[]

  // El activo es el slide cuyo centro queda más cerca del centro del carril.
  const syncActive = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    slideEls().forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    setActive(best)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(syncActive)
    }
    track.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      track.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [syncActive])

  // Al cambiar de slide, los vídeos de los demás se pausan.
  useEffect(() => {
    slideEls().forEach((el, i) => {
      if (i !== active) el.querySelectorAll("video").forEach((v) => v.pause())
    })
  }, [active])

  function goTo(index: number) {
    const el = slideEls()[Math.max(0, Math.min(items.length - 1, index))]
    const track = trackRef.current
    if (!el || !track) return
    track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2, behavior: "smooth" })
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.target instanceof HTMLVideoElement) return
    if (event.key === "ArrowRight") {
      event.preventDefault()
      goTo(active + 1)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      goTo(active - 1)
    }
  }

  const current = items[active] ?? items[0]
  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <section aria-roledescription="carrusel" aria-label="Aftermovies de ejemplo" onKeyDown={onKeyDown}>
      {/* Todos los slides tienen la misma caja 16:9 (los tres vídeos son 1280x720) y van centrados en vertical.
          El hueco de los extremos va como margen del primero y del último (en % del carril) para que cualquier
          slide, también el 1.º y el último, pueda quedar exactamente centrado. */}
      <ul
        ref={trackRef}
        className="relative -mx-4 flex snap-x snap-mandatory items-center gap-3 overflow-x-auto scroll-smooth py-5 [scrollbar-width:none] sm:mx-0 sm:[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] sm:gap-5 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => {
          const isActive = i === active
          return (
            <li
              key={item.id}
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${items.length}: ${item.label}`}
              className={`relative w-[80%] shrink-0 snap-center transition-[transform,opacity] duration-500 first:ml-[10%] last:mr-[10%] motion-reduce:transition-none sm:w-[72%] sm:first:ml-[14%] sm:last:mr-[14%] ${
                isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-40"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/12 shadow-[0_24px_60px_rgba(0,0,0,0.55)] sm:rounded-3xl">
                <ShowcaseVideo
                  src={item.src}
                  poster={item.poster}
                  title={`Aftermovie: ${item.label}`}
                  tabbable={isActive}
                  className="!rounded-none !border-0"
                />
              </div>
              {!isActive ? (
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ver ${item.label}`}
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:rounded-3xl"
                />
              ) : null}
            </li>
          )
        })}
      </ul>

      <div className="mt-2 flex items-center justify-between gap-4 sm:mt-3">
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Anterior" className={ARROW}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <div className="min-w-0 flex-1 text-center" aria-live="polite">
          <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.2em] text-white/60">
            {pad(active + 1)} / {pad(items.length)}
          </p>
          <p className="mt-1 truncate font-display text-[18px] font-semibold uppercase leading-[1.1] sm:text-[22px]">{current.label}</p>
          <p className="mt-1 font-inter text-[12.5px] leading-[1.5] text-white/65 sm:text-[13px]">{current.context}</p>
        </div>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === items.length - 1} aria-label="Siguiente" className={ARROW}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1" aria-label="Elegir aftermovie" role="group">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-current={i === active ? "true" : undefined}
            aria-label={`Ir al aftermovie ${i + 1}: ${item.label}`}
            onClick={() => goTo(i)}
            className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/35"}`} />
          </button>
        ))}
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import AutoplayVideo from "@/components/AutoplayVideo"
import { format, getDictionary, type Lang } from "@/lib/i18n"
import { optimizedPoster } from "@/lib/media"

export type MarqueeItem = {
  slug: string
  title: string
  video: string
  poster?: string
}

type CardSize = "sm" | "lg" | "xl"

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
  /** Contacto sigue siendo la tira animada de siempre (auto-scroll, no
   *  interactiva). El Portfolio (home + /portfolio) necesita que la gente
   *  pueda desplazarlo a mano para ver todas las piezas: con scrollable=true
   *  se desactiva la animación automática y el track pasa a ser un scroll
   *  horizontal real (swipe/trackpad/arrastre con el ratón). */
  scrollable?: boolean
  /** Idioma de los aria-labels. `basePath` debe venir ya localizado (localizedHref). */
  lang?: Lang
}

/** Móvil (< 640px) o táctil hasta tablet vertical: un solo vídeo en marcha (la tarjeta centrada). */
const SINGLE_PLAYER_QUERY = "(max-width: 639px), (pointer: coarse) and (max-width: 1023px)"

const SIZE_CLASSES: Record<CardSize, string> = {
  sm: "aspect-[3/4] h-[140px] w-[105px] sm:h-[180px] sm:w-[135px] lg:h-[220px] lg:w-[165px]",
  lg: "aspect-[3/4] h-[220px] w-[165px] sm:h-[300px] sm:w-[225px] lg:h-[380px] lg:w-[285px]",
  // "xl" = Portfolio del home. Mismo tamaño que "sm" hasta el móvil/tablet
  // (no toca esa experiencia ya validada) pero crece bastante más a partir de
  // desktop para que 7 proyectos llenen pantallas anchas (1440-2560px) en
  // vez de dejar un hueco enorme a la derecha tras la última tarjeta.
  xl: "aspect-[3/4] h-[140px] w-[105px] sm:h-[180px] sm:w-[135px] lg:h-[300px] lg:w-[225px] xl:h-[360px] xl:w-[270px] 2xl:h-[420px] 2xl:w-[315px]",
}

const TITLE_SIZE_CLASSES: Record<CardSize, string> = {
  sm: "text-[10px] sm:text-[13px]",
  lg: "text-[13px] sm:text-[16px] lg:text-[19px]",
  xl: "text-[10px] sm:text-[13px] lg:text-[17px] 2xl:text-[20px]",
}

const GAP_CLASSES: Record<CardSize, string> = {
  sm: "gap-4",
  lg: "gap-5 sm:gap-6",
  xl: "gap-4 sm:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8",
}

const EDGE_FADE_CLASSES: Record<CardSize, string> = {
  sm: "w-32",
  lg: "w-24 sm:w-40 lg:w-56",
  xl: "w-24 sm:w-32 lg:w-48 2xl:w-64",
}

export default function PortfolioMarquee({
  items,
  size = "sm",
  mode = "modal",
  basePath = "/portfolio",
  speed = 0.28,
  className,
  scrollable = false,
  lang = "es",
}: Props) {
  const t = getDictionary(lang).portfolio
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const xRef = useRef(0)
  const runningRef = useRef(false)
  const [activeVideo, setActiveVideo] = useState<{ title: string; video: string } | null>(null)
  // Móvil y tablet vertical: 4–5 tarjetas entran a la vez en pantalla y reproducirlas todas descargaba
  // ~65 MB en 10 s y bajaba a 41–45 fps. Ahí solo se mueve la tarjeta más centrada y visible (≥ 75 %);
  // el resto enseña su póster. En desktop (puntero fino o ≥ 1024px) se reproducen todas las visibles.
  const [singlePlayer, setSinglePlayer] = useState(false)
  const [centeredIndex, setCenteredIndex] = useState(-1)
  // Pósters diferidos: un <video poster> se descarga nada más pintarse aunque esté bajo el pliegue, y los
  // 7 pósters (~300 KB) competían con el póster del VSL (el LCP) en móvil. Se piden al acercarse la tira.
  const sectionRef = useRef<HTMLElement>(null)
  const [postersReady, setPostersReady] = useState(false)

  useEffect(() => {
    if (postersReady) return
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === "undefined") {
      const timer = setTimeout(() => setPostersReady(true), 0)
      return () => clearTimeout(timer)
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPostersReady(true)
          observer.disconnect()
        }
      },
      { rootMargin: "600px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [postersReady])

  // Arrastre con ratón en desktop: el scroll nativo (swipe/trackpad) ya
  // funciona solo con overflow-x-auto, esto añade la afordancia de "coger y
  // tirar" con el ratón que la gente espera en una tira horizontal.
  // Solo ratón: en táctil manda el scroll nativo (touch-pan-x). La captura del puntero y la
  // desactivación del snap solo empiezan al superar el umbral, para que un click normal siga
  // llegando a la tarjeta (con captura desde pointerdown el click acaba en el track).
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: false })

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollable || !trackRef.current || event.pointerType !== "mouse" || event.button !== 0) return
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: trackRef.current.scrollLeft,
      moved: false,
    }
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!scrollable || !dragRef.current.active || !track) return
    // Botón ya soltado fuera del track (sin captura todavía): se cancela el arrastre pendiente.
    if ((event.buttons & 1) === 0) {
      dragRef.current.active = false
      return
    }
    const delta = event.clientX - dragRef.current.startX
    if (!dragRef.current.moved) {
      if (Math.abs(delta) <= 4) return
      dragRef.current.moved = true
      track.setPointerCapture(event.pointerId)
      // Mientras se arrastra: sin snap ni scroll suave, para que cada scrollLeft se aplique tal cual.
      track.style.scrollSnapType = "none"
      track.style.scrollBehavior = "auto"
    }
    track.scrollLeft = dragRef.current.startScroll - delta
  }

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!scrollable || !dragRef.current.active) return
    dragRef.current.active = false
    if (track?.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId)
    if (track) {
      track.style.scrollSnapType = ""
      track.style.scrollBehavior = ""
    }
  }

  // Tras un arrastre, evita que el click final en la tarjeta abra el vídeo
  // (el navegador dispara click aunque haya habido movimiento de por medio).
  const onTrackClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (scrollable && dragRef.current.moved) {
      event.preventDefault()
      event.stopPropagation()
      dragRef.current.moved = false
    }
  }

  useEffect(() => {
    if (scrollable) return

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
  }, [speed, scrollable])

  useEffect(() => {
    const mq = window.matchMedia(SINGLE_PLAYER_QUERY)
    const update = () => setSinglePlayer(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!singlePlayer || !track) return
    let frame = 0
    const measure = () => {
      frame = 0
      const vw = window.innerWidth
      const vh = window.innerHeight
      let best = -1
      let bestDistance = Infinity
      track.querySelectorAll<HTMLElement>("[data-marquee-card]").forEach((card, index) => {
        const r = card.getBoundingClientRect()
        if (!r.width || r.bottom <= 0 || r.top >= vh) return
        const visible = (Math.min(r.right, vw) - Math.max(r.left, 0)) / r.width
        if (visible < 0.75) return
        const distance = Math.abs(r.left + r.width / 2 - vw / 2)
        if (distance < bestDistance) {
          bestDistance = distance
          best = index
        }
      })
      setCenteredIndex(best)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    track.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    // La tira animada se mueve sin eventos de scroll: se re-mide cada 700 ms.
    const interval = scrollable ? 0 : window.setInterval(schedule, 700)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      if (interval) window.clearInterval(interval)
      track.removeEventListener("scroll", schedule)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [singlePlayer, scrollable])

  const canPlay = (index: number) => !singlePlayer || index === centeredIndex

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
      <section ref={sectionRef} className={`relative w-full py-6 sm:py-8 ${scrollable ? "" : "overflow-hidden"} ${className ?? ""}`}>
        {scrollable ? (
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
            onDragStart={(event) => event.preventDefault()}
            onClickCapture={onTrackClickCapture}
            // Sin scroll-smooth: el snap inicial generaba un scroll suave en la carga y Chrome dejaba de
            // registrar el LCP de toda la página. scroll-pl alinea el snap con el padding (sin salto inicial).
            className="cursor-grab touch-pan-x snap-x snap-proximity overflow-x-auto overscroll-x-contain scroll-pl-4 px-4 active:cursor-grabbing sm:scroll-pl-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: "none" }}
          >
            <div className={`flex w-max ${GAP_CLASSES[size]}`}>
              {items.map((item, i) => (
                <div key={item.slug} className="snap-start">
                  <MarqueeCard
                    autoplay={canPlay(i)}
                    title={item.title}
                    video={item.video}
                    poster={postersReady ? item.poster : undefined}
                    size={size}
                    lang={lang}
                    href={mode === "link" ? `${basePath}/${item.slug}` : undefined}
                    onOpen={
                      mode === "modal"
                        ? () => setActiveVideo({ title: item.title, video: item.video })
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div ref={trackRef} className={`flex w-max ${GAP_CLASSES[size]} will-change-transform`}>
            {[...items, ...items].map((item, i) => (
              <MarqueeCard
                key={`${item.slug}-${i}`}
                autoplay={canPlay(i)}
                title={item.title}
                video={item.video}
                poster={postersReady ? item.poster : undefined}
                size={size}
                lang={lang}
                href={mode === "link" ? `${basePath}/${item.slug}` : undefined}
                onOpen={
                  mode === "modal"
                    ? () => setActiveVideo({ title: item.title, video: item.video })
                    : undefined
                }
              />
            ))}
          </div>
        )}

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
              aria-label={format(t.videoDialog, { title: activeVideo.title })}
            >
              <div
                className="relative max-h-[88svh] max-w-[94vw] overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] uppercase text-white/85 transition hover:bg-black/75"
                  aria-label={t.closeVideo}
                >
                  {t.close}
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
  autoplay = true,
  title,
  video,
  poster,
  size,
  href,
  onOpen,
  lang,
}: {
  autoplay?: boolean
  title: string
  video: string
  poster?: string
  size: CardSize
  href?: string
  onOpen?: () => void
  lang: Lang
}) {
  const t = getDictionary(lang).portfolio
  const cardClassName = `group relative block cursor-pointer overflow-hidden rounded-xl bg-[#0a0a0a] ${SIZE_CLASSES[size]}`

  const inner = (
    <>
      {/* Solo descarga/reproduce mientras se ve; los clones del marquee animado también tienen el suyo. */}
      <AutoplayVideo
        src={video}
        autoplay={autoplay}
        poster={optimizedPoster(poster, 640)}
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
      <Link href={href} aria-label={format(t.viewProject, { title })} className={cardClassName} draggable={false} data-marquee-card>
        {inner}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onOpen} className={cardClassName} aria-label={format(t.openVideo, { title })} data-marquee-card>
      {inner}
    </button>
  )
}

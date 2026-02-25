"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"
import { createPortal } from "react-dom"

type Props = {
  title: string
  video: string
  href: string
  index?: number
  openInModal?: boolean
}

type NavigatorConnection = {
  saveData?: boolean
  effectiveType?: string
}

const isInternal = (href: string) => href.startsWith("/")

export default function PortfolioCard({
  title,
  video,
  href,
  index = 0,
  openInModal = false,
}: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [canAutoplay] = useState(() => {
    if (typeof navigator === "undefined") return true
    const connection = (navigator as Navigator & { connection?: NavigatorConnection }).connection
    const isDataSaver = !!connection?.saveData
    const isSlowNetwork =
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "3g"
    return !(isDataSaver || isSlowNetwork)
  })
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isModalReady, setIsModalReady] = useState(false)

  useEffect(() => {
    if (shouldLoadVideo || !cardRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: "120px 0px", threshold: 0.12 }
    )

    observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [shouldLoadVideo])

  useEffect(() => {
    if (!isOpen) return
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) setIsModalReady(false)
  }, [isOpen])

  const content = (
    <>
      <video
        src={shouldLoadVideo ? video : undefined}
        autoPlay={canAutoplay}
        muted
        loop
        playsInline
        preload={index < 2 ? "metadata" : "none"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 left-4 right-4 font-display text-[16px] font-semibold uppercase leading-tight text-white/95 line-clamp-2 sm:bottom-5 sm:left-5 sm:right-5 sm:text-[19px]">
        {title}
      </span>
      <span className="absolute bottom-5 left-5 h-px w-0 bg-white/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-10" />
    </>
  )

  const baseClass =
    "hover-lift group relative block aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

  if (openInModal) {
    return (
      <>
        <div
          ref={cardRef}
          data-lux
          style={{
            transitionDelay: `${index * 25}ms`,
            "--lux-delay": `${80 + index * 45}ms`,
          } as CSSProperties}
          className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
        >
          <button
            type="button"
            aria-label={`Ver vídeo de ${title}`}
            className={`${baseClass} w-full cursor-pointer text-left`}
            onClick={() => setIsOpen(true)}
          >
            {content}
          </button>
        </div>

        {isOpen && typeof document !== "undefined"
          ? createPortal(
              <div
                className="fixed inset-0 z-[120] flex items-center justify-center bg-black/82 px-3 py-4 backdrop-blur-sm sm:px-6"
                onClick={() => setIsOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label={`Video de ${title}`}
              >
                <div
                  className="relative max-h-[88svh] max-w-[94vw] overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] uppercase text-white/85 transition hover:bg-black/75"
                    aria-label="Cerrar video"
                  >
                    Cerrar
                  </button>
                  <video
                    src={video}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    onLoadedData={() => setIsModalReady(true)}
                    className="block max-h-[88svh] max-w-[94vw] bg-black object-contain"
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 transition-opacity duration-300 ${
                      isModalReady ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="h-8 w-8 animate-spin rounded-full border border-white/60 border-t-transparent" />
                  </div>
                </div>
              </div>,
              document.body
            )
          : null}
      </>
    )
  }

  if (isInternal(href)) {
    return (
      <div
        ref={cardRef}
        data-lux
        style={{
          transitionDelay: `${index * 25}ms`,
          "--lux-delay": `${80 + index * 45}ms`,
        } as CSSProperties}
        className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
      >
        <div>
          <Link
            href={href}
            aria-label={`Ver proyecto ${title}`}
            className={baseClass}
          >
            {content}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      data-lux
      style={{
        transitionDelay: `${index * 25}ms`,
        "--lux-delay": `${80 + index * 45}ms`,
      } as CSSProperties}
      className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
    >
      <div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver vídeo de ${title}`}
          className={baseClass}
        >
          {content}
        </a>
      </div>
    </div>
  )
}

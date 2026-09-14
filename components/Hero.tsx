"use client"

import Image from "next/image"
import Link from "next/link"
import type { CSSProperties, ReactNode } from "react"
import { VIDEO_POSTER_URL } from "@/lib/media"
import { getDictionary, type Lang } from "@/lib/i18n"

type Props = {
  /** Idioma: rellena los textos por defecto desde el diccionario. Por defecto "es". */
  lang?: Lang
  title?: string
  tagline?: string
  description?: string
  ctaLabel?: string
  compactTitle?: boolean
  trustedLogosImageSrc?: string
  trustedLogosImageAlt?: string
  /**
   * "background" (por defecto): foto de fondo a pantalla completa con el texto encima.
   * "video": sin foto; título compacto, `children` (el VSL) justo debajo y el CTA tras el vídeo,
   * para que el vídeo sea lo primero que se vea (home).
   */
  variant?: "background" | "video"
  children?: ReactNode
}

export default function Hero(props: Props) {
  const { lang = "es", compactTitle = false, trustedLogosImageSrc, children } = props
  const isVideo = props.variant === "video"
  const t = getDictionary(lang).hero
  // `??` (no `||`): un "" explícito (p. ej. tagline="" en /hablemos) oculta el bloque.
  const title = props.title ?? t.title
  const tagline = props.tagline ?? t.tagline
  const description = props.description ?? t.description
  const ctaLabel = props.ctaLabel ?? t.ctaLabel
  const trustedLogosImageAlt = props.trustedLogosImageAlt ?? t.trustedLogosAlt

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const contactSection = document.getElementById("contacto")
    if (!contactSection) return
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `${window.location.pathname}#contacto`)
  }

  const cta = (
    <Link
      data-lux
      style={{ "--lux-delay": "320ms" } as CSSProperties}
      href="#contacto"
      onClick={handleContactClick}
      className={`hero-cta hero-fade-up hero-fade-up-delay-3 inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white text-center font-inter font-semibold uppercase tracking-[0.06em] text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        isVideo
          ? "mt-7 min-h-[52px] px-8 py-3 text-[12px] sm:mt-9 sm:min-h-[56px] sm:px-10 sm:text-[13px]"
          : "mt-7 min-h-[58px] px-8 py-4 text-[13px] sm:min-h-[64px] sm:px-11 sm:text-[14px]"
      }`}
    >
      <span className="hero-cta-label">{ctaLabel}</span>
    </Link>
  )

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isVideo
          ? "pb-12 pt-8 sm:pb-16 sm:pt-10"
          : compactTitle
            ? "min-h-0 sm:min-h-[86svh]"
            : "h-[100svh]"
      }`}
    >
      {isVideo ? null : (
        <div className="absolute inset-0">
          <div className="hero-bg-ambient absolute inset-0 h-full w-full">
            <Image
              src={VIDEO_POSTER_URL}
              alt=""
              fill
              priority
              quality={72}
              sizes="100vw"
              style={{ objectPosition: "center 22%" }}
              className="h-full w-full scale-105 object-cover blur-[1.5px] opacity-90"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/80" />
        </div>
      )}

      <div
        className={`relative z-10 flex flex-col items-center px-4 text-center sm:px-6 ${
          isVideo ? "" : `h-full justify-center ${compactTitle ? "pb-10 pt-10 sm:pb-4 sm:pt-24" : ""}`
        }`}
      >
        <div className="flex w-full max-w-4xl flex-col items-center">
          <h1
            data-lux
            style={{ "--lux-delay": "90ms" } as CSSProperties}
            className={`hero-fade-up font-display font-semibold uppercase ${
              isVideo
                ? "leading-[0.95] text-[clamp(2.5rem,9.5vw,4.6rem)]"
                : compactTitle
                  ? "leading-[1.02] text-[clamp(2rem,8.5vw,4.7rem)]"
                  : "leading-[0.9] text-[clamp(2.8rem,11.8vw,9.2rem)]"
            }`}
          >
            {title}
          </h1>
          {tagline ? (
            <p
              data-lux
              style={{ "--lux-delay": "180ms" } as CSSProperties}
              className={`hero-fade-up hero-fade-up-delay-1 font-inter font-medium uppercase text-white/86 ${
                isVideo
                  ? "mt-3 text-[clamp(0.9rem,2.6vw,1.15rem)] sm:mt-4"
                  : "mt-4 text-[clamp(0.94rem,2.8vw,1.3rem)] sm:mt-5"
              }`}
            >
              {tagline}
            </p>
          ) : null}
          <p
            data-lux
            style={{ "--lux-delay": "260ms" } as CSSProperties}
            className={`hero-fade-up hero-fade-up-delay-2 max-w-3xl px-1 font-inter text-[13px] font-normal leading-[1.72] text-white/72 sm:text-[15px] ${
              isVideo ? "mt-3 sm:mt-4" : compactTitle ? "mt-6 sm:mt-7" : "mt-4 sm:mt-5"
            }`}
          >
            {description}
          </p>
          {isVideo ? null : cta}

          {trustedLogosImageSrc ? (
            <div
              data-lux
              style={{ "--lux-delay": "380ms" } as CSSProperties}
              className="hero-fade-up hero-fade-up-delay-3 mt-5 w-full max-w-2xl sm:mt-6"
            >
              <p className="mb-2 text-center font-inter text-[10px] uppercase tracking-[0.18em] text-white/58 sm:mb-3 sm:text-[11px]">
                {t.trustedLogosLabel}
              </p>
              <div className="hero-trusted-loop mx-auto w-full overflow-hidden rounded-xl">
                <div className="hero-trusted-track">
                  <img
                    src={trustedLogosImageSrc}
                    alt={trustedLogosImageAlt}
                    className="hero-trusted-image h-14 w-auto max-w-none sm:h-16"
                  />
                  <img
                    src={trustedLogosImageSrc}
                    alt=""
                    aria-hidden
                    className="hero-trusted-image h-14 w-auto max-w-none sm:h-16"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {isVideo ? (
          <>
            {children ? <div className="mt-7 w-full sm:mt-9">{children}</div> : null}
            {cta}
          </>
        ) : null}
      </div>

      <style>{`
        .hero-bg-ambient {
          animation: hero-bg-ambient 14s ease-in-out infinite alternate;
          will-change: transform;
        }

        .hero-fade-up {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          animation: hero-fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-fade-up-delay-1 {
          animation-delay: 120ms;
        }

        .hero-fade-up-delay-2 {
          animation-delay: 240ms;
        }

        .hero-fade-up-delay-3 {
          animation-delay: 360ms;
        }

        .hero-trusted-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 0;
          animation: hero-trusted-loop 22s linear infinite;
          will-change: transform;
        }

        .hero-trusted-loop {
          position: relative;
          isolation: isolate;
          /* Real alpha fade: blends with any background image */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .hero-trusted-image {
          flex: 0 0 auto;
        }

        .hero-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transition:
            transform 380ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 380ms cubic-bezier(0.16, 1, 0.3, 1),
            background-color 380ms cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 12px 32px -20px rgba(255, 255, 255, 0.28);
        }

        .hero-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 18%,
            rgba(255, 255, 255, 0.78) 0%,
            rgba(255, 255, 255, 0.18) 42%,
            rgba(255, 255, 255, 0) 76%
          );
          opacity: 0.5;
          transition: opacity 380ms cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 0;
        }

        .hero-cta::after {
          content: "";
          position: absolute;
          top: -40%;
          bottom: -40%;
          left: -35%;
          width: 35%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.45), transparent);
          transform: translateX(-130%) rotate(8deg);
          animation: hero-cta-shine 5.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          pointer-events: none;
          z-index: 0;
        }

        .hero-cta-label {
          position: relative;
          z-index: 1;
          transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-cta:hover {
          transform: translate3d(0, -2px, 0) scale(1.01);
          background-color: rgba(255, 255, 255, 0.96);
          box-shadow: 0 22px 48px -24px rgba(255, 255, 255, 0.42);
        }

        .hero-cta:hover::before {
          opacity: 0.78;
        }

        .hero-cta:hover .hero-cta-label {
          transform: translate3d(0, -0.5px, 0);
        }

        .hero-cta:active {
          transform: translate3d(0, 0, 0) scale(0.992);
        }

        @keyframes hero-bg-ambient {
          0% {
            transform: scale(1.045) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.09) translate3d(0, -2.5%, 0);
          }
        }

        @keyframes hero-fade-up {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes hero-cta-shine {
          0%,
          62% {
            transform: translateX(-130%) rotate(8deg);
            opacity: 0;
          }
          68% {
            opacity: 0.55;
          }
          82% {
            transform: translateX(360%) rotate(8deg);
            opacity: 0;
          }
          100% {
            transform: translateX(360%) rotate(8deg);
            opacity: 0;
          }
        }

        @keyframes hero-trusted-loop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-ambient,
          .hero-fade-up,
          .hero-cta::after,
          .hero-trusted-track {
            animation: none;
            transform: none;
            opacity: 1;
          }

          .hero-cta,
          .hero-cta-label {
            transition: none;
          }
        }

      `}</style>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import { VIDEO_POSTER_URL } from "@/lib/media"

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="hero-bg-ambient absolute -top-[10%] inset-0 h-[120%] w-full">
          <Image
            src={VIDEO_POSTER_URL}
            alt=""
            fill
            priority
            quality={72}
            sizes="100vw"
            className="h-full w-full scale-105 object-cover blur-[7px] opacity-70"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/72" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <div className="flex flex-col items-center">
          <h1
            data-lux
            style={{ "--lux-delay": "90ms" } as CSSProperties}
            className="hero-fade-up font-display font-semibold uppercase leading-[0.9] text-[clamp(2.8rem,11.8vw,9.2rem)]"
          >
            DANIEL ACERO
          </h1>
          <p
            data-lux
            style={{ "--lux-delay": "180ms" } as CSSProperties}
            className="hero-fade-up hero-fade-up-delay-1 mt-4 font-inter text-[clamp(0.94rem,2.8vw,1.3rem)] font-medium uppercase text-white/86 sm:mt-5"
          >
            Filmmaker corporativo y videógrafo de eventos en Madrid
          </p>
          <p
            data-lux
            style={{ "--lux-delay": "260ms" } as CSSProperties}
            className="hero-fade-up hero-fade-up-delay-2 mt-4 max-w-3xl px-1 font-inter text-[13px] font-normal leading-[1.72] text-white/72 sm:mt-5 sm:text-[15px]"
          >
            Transformo eventos empresariales, congresos y conferencias en piezas audiovisuales
            profesionales para marcas y empresas en Madrid.
          </p>
          <Link
            data-lux
            style={{ "--lux-delay": "320ms" } as CSSProperties}
            href="#contacto"
            className="hero-cta hero-fade-up hero-fade-up-delay-3 mt-7 inline-flex min-h-[58px] items-center justify-center rounded-2xl border border-white/25 bg-white px-8 py-4 text-center font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[64px] sm:px-11 sm:text-[14px]"
          >
            <span className="hero-cta-label">Pide presupuesto</span>
          </Link>
        </div>

        <div
          data-lux
          style={{ "--lux-delay": "380ms" } as CSSProperties}
          className="hero-fade-up hero-fade-up-delay-3 absolute bottom-[max(2rem,env(safe-area-inset-bottom)+1rem)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          aria-hidden
        >
          <span className="font-inter text-[10px] uppercase text-white/38">
            Scroll
          </span>
          <span className="hero-scroll-line h-10 w-px rounded-full bg-white/50" />
        </div>
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

        .hero-scroll-line {
          animation: hero-scroll-line 2s ease-in-out infinite;
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

        @keyframes hero-scroll-line {
          0%,
          100% {
            opacity: 0.45;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(7px);
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

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-ambient,
          .hero-fade-up,
          .hero-scroll-line,
          .hero-cta::after {
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

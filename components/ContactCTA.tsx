import Link from "next/link"
import WhatsAppButton from "./WhatsAppButton"
import type { CSSProperties } from "react"

export default function ContactCTA() {
  return (
    <section data-lux className="cinematic-reveal mx-auto mt-20 max-w-5xl px-4 pb-24 text-center sm:mt-24 sm:px-6 sm:pb-32">
      <h2
        data-lux
        style={{ "--lux-delay": "90ms" } as CSSProperties}
        className="cinematic-reveal-delay-1 mb-4 font-display text-[30px] font-semibold uppercase leading-[1.02] sm:mb-5 sm:text-[40px] lg:text-[48px]"
      >
        ¿Hablamos de tu proyecto?
      </h2>

      <p
        data-lux
        style={{ "--lux-delay": "160ms" } as CSSProperties}
        className="cinematic-reveal cinematic-reveal-delay-2 mx-auto mb-12 max-w-2xl font-inter text-[13px] leading-[1.75] text-white/68 sm:text-[14px]"
      >
        Si estás valorando crear un vídeo para tu empresa, cuéntame qué tienes en mente
        y te digo en minutos si encaja y cómo lo haría. Te respondo personalmente. Sin compromiso.
      </p>

      <div
        data-lux
        style={{ "--lux-delay": "230ms" } as CSSProperties}
        className="cinematic-reveal cinematic-reveal-delay-3 mx-auto max-w-3xl"
      >
        <div className="relative">
          <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.26),rgba(255,255,255,0)_68%)] opacity-70 blur-lg transition-opacity duration-500" />
          <WhatsAppButton
            label="Hablamos por WhatsApp"
            phone="34711255496"
            message="Hola Dani! Estamos valorando crear vídeo para la empresa y quería saber cómo trabajáis y si encaja para nuestro caso."
            className="relative z-10 h-[60px] rounded-xl border-white/30 bg-gradient-to-b from-white to-white/95 px-6 shadow-[0_12px_36px_rgba(255,255,255,0.14)] hover:shadow-[0_18px_48px_rgba(255,255,255,0.2)]"
          />
        </div>
        <p className="mt-3 text-[11px] text-white/52 sm:text-[12px]">
          Te respondo en 2–5 minutos · Sin llamadas
        </p>
      </div>

      <footer
        data-lux
        style={{ "--lux-delay": "300ms" } as CSSProperties}
        className="cinematic-reveal cinematic-reveal-delay-3 mt-16 border-t border-white/[0.08] pt-10"
      >
        <p className="font-inter text-[11px] lowercase text-white/45">
          <Link
            href="https://www.instagram.com/daniaceros"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            @danielaceros
          </Link>
        </p>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-inter text-[11px] lowercase text-white/45">
          <Link href="/aviso-legal" className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            aviso legal
          </Link>
          <span aria-hidden>·</span>
          <Link href="/politica-de-cookies" className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            política de cookies
          </Link>
          <span aria-hidden>·</span>
          <Link href="/politica-de-privacidad" className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            política de privacidad
          </Link>
        </p>
      </footer>
    </section>
  )
}

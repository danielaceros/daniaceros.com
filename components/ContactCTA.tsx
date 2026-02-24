import Link from "next/link"
import WhatsAppButton from "./WhatsAppButton"

export default function ContactCTA() {
  return (
    <section className="mx-auto mt-20 max-w-5xl px-4 pb-24 text-center sm:mt-24 sm:px-6 sm:pb-32">
      <h2 className="mb-4 font-display text-[30px] font-semibold uppercase leading-[1.02] sm:mb-5 sm:text-[40px] lg:text-[48px]">
        ¿Hablamos de tu proyecto?
      </h2>

      <p className="mx-auto mb-12 max-w-2xl font-inter text-[13px] leading-[1.75] text-white/68 sm:text-[14px]">
        Si estás valorando crear un vídeo para tu empresa, cuéntame qué tienes en mente
        y te digo en minutos si encaja y cómo lo haría. Te respondo personalmente. Sin compromiso.
      </p>

      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.26),rgba(255,255,255,0)_68%)] opacity-70 blur-lg transition-opacity duration-500" />
          <WhatsAppButton
            label="Cuéntame tu proyecto"
            phone="34711255496"
            message="Hola Dani, vengo del anuncio. Mi empresa es ___ y estoy valorando crear un vídeo para ___. ¿Crees que encaja para mi caso?"
            className="relative z-10 h-[60px] rounded-xl border-white/30 bg-gradient-to-b from-white to-white/95 px-6 shadow-[0_12px_36px_rgba(255,255,255,0.14)] hover:shadow-[0_18px_48px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>

      <footer className="mt-16 border-t border-white/[0.08] pt-10">
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

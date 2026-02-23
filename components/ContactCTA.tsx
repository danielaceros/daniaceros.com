import Link from "next/link"
import WhatsAppButton from "./WhatsAppButton"

export default function ContactCTA() {
  return (
    <section className="mx-auto mt-16 max-w-5xl px-6 pb-28 text-center">
      <h2
        className="
          mb-4 font-inter font-semibold uppercase tracking-[-0.08em]
          text-[28px] sm:text-[36px] lg:text-[44px]
        "
      >
        ¿Hablamos de tu proyecto?
      </h2>

      <p className="mx-auto mb-10 max-w-2xl font-inter text-[13px] sm:text-[14px] leading-[1.5] text-white/70">
        Si estás valorando crear un vídeo para tu empresa, cuéntame qué tienes en mente
        y te digo en minutos si encaja y cómo lo haría. Te respondo personalmente. Sin compromiso.
      </p>

      <div className="mx-auto max-w-3xl">
        <WhatsAppButton
          label="Cuéntame tu proyecto"
          phone="34711255496"
          message="Hola Dani, vengo del anuncio. Mi empresa es ___ y estoy valorando crear un vídeo para ___. ¿Crees que encaja para mi caso?"
          className="w-full"
        />
      </div>

      <div className="mt-10 text-xs text-white/50">
        <p><Link
            href="https://www.instagram.com/daniaceros"
            className="hover:text-white transition"
          >
            @danielaceros
          </Link></p>

        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <Link
            href="/aviso-legal"
            className="hover:text-white transition"
          >
            aviso legal
          </Link>
          ·
          <Link
            href="/politica-de-cookies"
            className="hover:text-white transition"
          >
            política de cookies
          </Link>
          ·
          <Link
            href="/politica-de-privacidad"
            className="hover:text-white transition"
          >
            política de privacidad
          </Link>
        </p>
      </div>
    </section>
  )
}
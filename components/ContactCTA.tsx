import Link from "next/link"
import type { CSSProperties } from "react"
import Script from "next/script"

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Dani! Estamos valorando crear vídeo para la empresa y quería saber cómo trabajáis y si encaja para nuestro caso."
)
const WHATSAPP_URL = `https://wa.me/34711255496?text=${WHATSAPP_MESSAGE}`
const CONTACT_EMAIL = "work@daniaceros.com"

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
        className="cinematic-reveal cinematic-reveal-delay-3 mx-auto w-full max-w-5xl"
      >
        <div className="grid overflow-hidden rounded-xl bg-[#0a0a0a] lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="border-white/10 px-6 pb-7 pt-8 text-left lg:border-r lg:px-10 lg:py-11">
            <p className="max-w-[32ch] font-inter text-[14px] leading-[1.8] text-white/66">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas con una propuesta
              personalizada.
            </p>
            <div className="mt-9 space-y-5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-3 rounded text-[17px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                <span className="font-inter text-[17px]">{CONTACT_EMAIL}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded text-[17px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                <span className="font-inter text-[17px]">+34 711 25 54 96</span>
              </a>
            </div>
          </aside>

          <div className="relative overflow-hidden">
            <iframe
              src="https://api.fitnesslaunch.es/widget/form/xIIdaDunDkxA4Mcwehu0"
              className="block h-[640px] w-[calc(100%+24px)] -ml-3 md:h-[680px] md:w-[calc(100%+32px)] md:-ml-4 lg:h-[640px]"
              style={{ border: "none", borderRadius: "0px" }}
              id="inline-xIIdaDunDkxA4Mcwehu0"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form - Dani Acero"
              data-height="undefined"
              data-layout-iframe-id="inline-xIIdaDunDkxA4Mcwehu0"
              data-form-id="xIIdaDunDkxA4Mcwehu0"
              title="Form - Dani Acero"
            />
          </div>
        </div>
        <Script src="https://api.fitnesslaunch.es/js/form_embed.js" strategy="afterInteractive" />
      </div>

      <footer
        data-lux
        style={{ "--lux-delay": "300ms" } as CSSProperties}
        className="cinematic-reveal cinematic-reveal-delay-3 mt-14 pt-2"
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

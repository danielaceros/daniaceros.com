import type { Metadata } from "next"
import Link from "next/link"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Dani! Estamos valorando crear vídeo para la empresa y quería saber cómo trabajáis y si encaja para nuestro caso."
)
const WHATSAPP_URL = `https://wa.me/34711255496?text=${WHATSAPP_MESSAGE}`

export const metadata: Metadata = buildMetadata({
  title: "Hablemos",
  description:
    "Produccion audiovisual para empresas, marcas y eventos en Madrid. Video corporativo con enfoque cinematografico y ejecucion profesional.",
  path: "/hablemos",
  keywords: [
    "hablemos",
    "filmmaker corporativo madrid",
    "videografo eventos madrid",
  ],
})

export default function HablemosPage() {
  return (
    <main className="text-white">
      <Hero
        title="¿Hablamos de tu proyecto?"
        tagline=""
        description="Te digo presupuesto y disponibilidad en 2 minutos por WhatsApp."
        ctaLabel="Pedir presupuesto ahora"
        compactTitle
        trustedLogosImageSrc="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/bannerlegit.png?alt=media&token=99a19a7d-ffa0-4eb1-80ff-5732df48ea7b"
      />
      <Portfolio
        openVideosInModal
        forceTwoColumns
        desktopSlideshow
        sectionClassName="pt-2 pb-0 sm:pt-3 sm:pb-0"
      />
      <div id="contacto">
        <ContactCTA
          mobileFormFirst
          hideMobileContactInfo
          hideFooter
          sectionClassName="mt-1 pb-6 sm:mt-2 sm:pb-8"
        />
      </div>
      <About mobileCompactSplit sectionClassName="pt-0 pb-2 sm:pt-1 sm:pb-3" />
      <section className="mx-auto w-full max-w-6xl px-4 pb-4 text-right sm:hidden">
        <p className="ml-auto max-w-[36ch] font-inter text-[13px] leading-[1.75] text-white/66">
          Si prefieres, también puedes escribirme directamente por email o WhatsApp y te respondo
          personalmente.
        </p>
        <div className="mt-7 space-y-4">
          <a
            href="mailto:work@daniaceros.com"
            className="group flex items-center justify-end gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="font-inter text-[16px]">work@daniaceros.com</span>
            <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="font-inter text-[16px]">+34 711 25 54 96</span>
            <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
          </a>
        </div>
      </section>
      <footer className="mx-auto w-full max-w-6xl px-4 pb-5 pt-0 text-center sm:px-6 sm:pb-6">
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
    </main>
  )
}

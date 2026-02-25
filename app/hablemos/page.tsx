import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

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
      <Hero />
      <Portfolio openVideosInModal />
      <About />
      <div id="contacto">
        <ContactCTA />
      </div>
    </main>
  )
}

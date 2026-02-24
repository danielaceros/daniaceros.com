import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Filmmaker corporativo y videografo en Madrid",
  description:
    "Produccion audiovisual para empresas, marcas y eventos en Madrid. Video corporativo con enfoque cinematografico y ejecucion profesional.",
  path: "/",
  keywords: [
    "filmmaker corporativo madrid",
    "videografo eventos madrid",
    "productora audiovisual madrid",
  ],
})

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <Portfolio />
      <About />
      <ContactCTA />
    </main>
  )
}
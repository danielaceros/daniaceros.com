import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Filmmaker corporativo y videógrafo en Madrid",
  description:
    "Producción audiovisual para empresas, marcas y eventos en Madrid. Vídeo corporativo con enfoque cinematográfico y ejecución profesional.",
  path: "/",
  keywords: [
    "filmmaker corporativo madrid",
    "videografo eventos madrid",
    "productora audiovisual madrid",
  ],
})

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Daniel Acero",
  url: SITE_URL,
  inLanguage: "es-ES",
}

export default function Home() {
  return (
    <main className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <Portfolio />
      <About />
      <div id="contacto">
        <ContactCTA />
      </div>
    </main>
  )
}
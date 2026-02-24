import type { Metadata } from "next"
import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta con Daniel Acero para video corporativo, institucional o cobertura de eventos en Madrid y toda Espana.",
  path: "/contacto",
  keywords: ["contacto filmmaker madrid", "presupuesto video corporativo", "videografo madrid"],
})

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <ContactPortfolioMarquee />
      <ContactCTA />
    </main>
  )
}
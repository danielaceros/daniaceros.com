import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata } from "@/lib/seo"

// Pendiente de traducir: en /en sale el contenido ES con noindex (ver I18N_GUIDE.md).
export const generateMetadata = localizedMetadata({
  title: "Contacto",
  description:
    "Contacta con Daniel Acero para vídeo corporativo, institucional o cobertura de eventos en Madrid y toda España.",
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
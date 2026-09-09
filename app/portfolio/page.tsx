import type { Metadata } from "next"
import SectionTitle from "@/components/SectionTitle"
import PortfolioHero from "@/components/PortfolioHero"
import PortfolioMarquee from "@/components/PortfolioMarquee"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import ContactCTA from "@/components/ContactCTA"
import { projects } from "@/data/projects"
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Casos reales de vídeo corporativo, institucional y eventos. Portfolio audiovisual de Daniel Acero.",
  path: "/portfolio",
  keywords: ["portfolio filmmaker", "casos de exito audiovisual", "video corporativo ejemplos"],
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
])

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-10">
        <PortfolioHero />
        <SectionTitle>Portfolio</SectionTitle>
      </section>

      <PortfolioMarquee
        items={projects.map((project) => ({
          slug: project.slug,
          title: project.title,
          video: project.video,
          poster: project.poster,
        }))}
        size="lg"
        mode="link"
        basePath="/portfolio"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
        <ViewMoreOnTV className="mt-2 sm:mt-4" />
      </section>
      <ContactCTA />
    </main>
  )
}

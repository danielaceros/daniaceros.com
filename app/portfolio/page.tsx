import type { Metadata } from "next"
import SectionTitle from "@/components/SectionTitle"
import PortfolioCard from "@/components/PortfolioCard"
import PortfolioHero from "@/components/PortfolioHero"
import ContactCTA from "@/components/ContactCTA"
import { projects } from "@/data/projects"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Casos reales de video corporativo, institucional y eventos. Portfolio audiovisual de Daniel Acero.",
  path: "/portfolio",
  keywords: ["portfolio filmmaker", "casos de exito audiovisual", "video corporativo ejemplos"],
})

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-10">
        <PortfolioHero />
        <SectionTitle>Portfolio</SectionTitle>
        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <PortfolioCard
              key={project.slug}
              title={project.title}
              video={project.video}
              href={`/portfolio/${project.slug}`}
            />
          ))}
        </div>
      </section>
      <ContactCTA />
    </main>
  )
}   
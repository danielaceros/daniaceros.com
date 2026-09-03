import type { Metadata } from "next"
import Link from "next/link"
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

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/tv"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-5 py-2.5 font-inter text-[11px] uppercase text-white/85 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Ver más, como en Instagram
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </section>
      <ContactCTA />
    </main>
  )
}   
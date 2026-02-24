import SectionTitle from "./SectionTitle"
import PortfolioCard from "./PortfolioCard"
import { projects } from "@/data/projects"

export default function Portfolio() {
  return (
    <section className="page-container section-breathing">
      <div>
        <SectionTitle>Portfolio</SectionTitle>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((project, i) => (
          <PortfolioCard
            key={project.slug}
            title={project.title}
            video={project.video}
            href={`/portfolio/${project.slug}`}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}

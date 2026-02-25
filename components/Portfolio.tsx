import SectionTitle from "./SectionTitle"
import PortfolioCard from "./PortfolioCard"
import { projects } from "@/data/projects"
import type { CSSProperties } from "react"

type Props = {
  openVideosInModal?: boolean
}

export default function Portfolio({ openVideosInModal = false }: Props) {
  return (
    <section data-lux className="cinematic-reveal page-container section-breathing">
      <div className="cinematic-reveal-delay-1" style={{ "--lux-delay": "80ms" } as CSSProperties}>
        <SectionTitle>Portfolio</SectionTitle>
      </div>

      <div
        data-lux
        className="cinematic-reveal cinematic-reveal-delay-2 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        style={{ "--lux-delay": "160ms" } as CSSProperties}
      >
        {projects.map((project, i) => (
          <PortfolioCard
            key={project.slug}
            title={project.title}
            video={project.video}
            href={`/portfolio/${project.slug}`}
            index={i}
            openInModal={openVideosInModal}
          />
        ))}
      </div>
    </section>
  )
}

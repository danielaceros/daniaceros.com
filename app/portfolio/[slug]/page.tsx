// app/portfolio/[slug]/page.tsx
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import ProjectHero from "@/components/ProjectHero"
import ProjectContent from "@/components/ProjectContent"
import ContactCTA from "@/components/ContactCTA"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-black text-white">
      <ProjectHero
        title={project.title}
        video={project.video}
        href={project.href}
      />

      <ProjectContent sections={project.sections} />

      <ContactCTA />
    </main>
  )
}
// app/portfolio/[slug]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import ProjectHero from "@/components/ProjectHero"
import ProjectContent from "@/components/ProjectContent"
import ContactCTA from "@/components/ContactCTA"
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      robots: { index: false, follow: false },
    }
  }

  const cleanTitle = project.title.replace(/\s*—\s*.*/, "").trim()
  const description =
    project.sections?.[0]?.items?.[0] ??
    "Proyecto audiovisual corporativo de Daniel Acero."
  const path = `/portfolio/${project.slug}`
  const url = `${SITE_URL}${path}`

  return {
    title: cleanTitle,
    description,
    alternates: { canonical: path },
    keywords: [
      "video corporativo",
      "produccion audiovisual",
      "filmmaker madrid",
      cleanTitle.toLowerCase(),
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url,
      siteName: "Daniel Acero",
      title: cleanTitle,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: cleanTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <ProjectHero
        title={project.title}
        video={project.video}
      />

      <ProjectContent sections={project.sections} />

      <ContactCTA />
    </main>
  )
}
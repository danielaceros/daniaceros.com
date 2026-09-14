// app/[lang]/portfolio/[slug]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, projects } from "@/data/projects"
import ProjectHero from "@/components/ProjectHero"
import ProjectContent from "@/components/ProjectContent"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import ContactCTA from "@/components/ContactCTA"
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildBreadcrumbSchema,
  buildLanguageAlternates,
} from "@/lib/seo"
import {
  OG_LOCALE,
  SCHEMA_LANGUAGE,
  getDictionary,
  isTranslatedPath,
  localizedHref,
  toLang,
} from "@/lib/i18n"

type Props = {
  params: Promise<{ lang: string; slug: string }>
}

// El layout [lang] fija dynamicParams=false (solo es/en). Aquí se reactiva para
// que un slug inexistente llegue a notFound() DENTRO del layout (con Header),
// como antes del i18n, en vez del 404 global sin layout.
export const dynamicParams = true

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang: rawLang } = await params
  const lang = toLang(rawLang)
  const dict = getDictionary(lang)
  const project = getProject(slug, lang)

  if (!project) {
    return {
      title: dict.meta.project.notFoundTitle,
      robots: { index: false, follow: false },
    }
  }

  const cleanTitle = project.title.replace(/\s*—\s*.*/, "").trim()
  const description =
    project.sections?.[0]?.items?.[0] ?? dict.meta.project.fallbackDescription
  const basePath = `/portfolio/${project.slug}`
  const path = localizedHref(lang, basePath)
  const url = `${SITE_URL}${path}`
  const translated = isTranslatedPath(basePath)

  return {
    title: cleanTitle,
    description,
    alternates: {
      canonical: path,
      ...(translated ? { languages: buildLanguageAlternates(basePath) } : {}),
    },
    keywords: [...dict.meta.project.keywords, cleanTitle.toLowerCase()],
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
      locale: OG_LOCALE[lang],
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
  const { slug, lang: rawLang } = await params
  const lang = toLang(rawLang)
  const dict = getDictionary(lang)

  const project = getProject(slug, lang)

  if (!project) return notFound()

  const cleanTitle = project.title.replace(/\s*—\s*.*/, "").trim()
  const description =
    project.sections?.[0]?.items?.[0] ?? dict.meta.project.fallbackDescription

  // Solo incluimos los campos que existen realmente en data/projects.ts
  // (nombre, descripción, vídeo y thumbnail) — sin inventar duración ni
  // fecha de publicación, que no se guardan ahí. inLanguage solo en idiomas
  // distintos del ES (el JSON-LD español se mantiene idéntico al original).
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: cleanTitle,
    description,
    thumbnailUrl: [project.poster],
    contentUrl: project.video,
    ...(lang === "es" ? {} : { inLanguage: SCHEMA_LANGUAGE[lang] }),
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: dict.breadcrumbs.home, path: localizedHref(lang, "/") },
    { name: dict.portfolio.sectionTitle, path: localizedHref(lang, "/portfolio") },
    { name: cleanTitle, path: localizedHref(lang, `/portfolio/${project.slug}`) },
  ])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ProjectHero
        title={project.title}
        video={project.video}
        poster={project.poster}
        videoBlurClass="blur-[3px]"
        lang={lang}
      />

      <ProjectContent sections={project.sections} />

      <ViewMoreOnTV className="px-4 pt-2 sm:pt-4" lang={lang} />

      <ContactCTA lang={lang} />
    </main>
  )
}

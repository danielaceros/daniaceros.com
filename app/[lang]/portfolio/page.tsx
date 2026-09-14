import SectionTitle from "@/components/SectionTitle"
import PortfolioHero from "@/components/PortfolioHero"
import PortfolioMarquee from "@/components/PortfolioMarquee"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import ContactCTA from "@/components/ContactCTA"
import { getProjects } from "@/data/projects"
import { buildBreadcrumbSchema, localizedMetadata, type LangParams } from "@/lib/seo"
import { getDictionary, localizedHref, toLang } from "@/lib/i18n"

export const generateMetadata = localizedMetadata((lang) => {
  const t = getDictionary(lang).meta.portfolio
  return {
    title: t.title,
    description: t.description,
    path: "/portfolio",
    keywords: t.keywords,
  }
})

export default async function PortfolioPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const dict = getDictionary(lang)
  const projects = getProjects(lang)

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: dict.breadcrumbs.home, path: localizedHref(lang, "/") },
    { name: dict.portfolio.sectionTitle, path: localizedHref(lang, "/portfolio") },
  ])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-10">
        <PortfolioHero lang={lang} />
        <SectionTitle>{dict.portfolio.sectionTitle}</SectionTitle>
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
        basePath={localizedHref(lang, "/portfolio")}
        scrollable
        lang={lang}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
        <ViewMoreOnTV className="mt-2 sm:mt-4" lang={lang} />
      </section>
      <ContactCTA lang={lang} />
    </main>
  )
}

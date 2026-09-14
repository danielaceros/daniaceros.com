import Link from "next/link"
import ContactCTA from "@/components/ContactCTA"
import ViewMoreOnTV from "@/components/ViewMoreOnTV"
import { getProjects } from "@/data/projects"
import { buildBreadcrumbSchema, localizedMetadata, type LangParams } from "@/lib/seo"
import { format, getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { CASE_SLUGS, content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/casos-de-exito",
  keywords: content[lang].keywords,
}))

export default async function CasosDeExitoPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  const projects = getProjects(lang)

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: getDictionary(lang).breadcrumbs.home, path: localizedHref(lang, "/") },
    { name: t.title, path: localizedHref(lang, "/casos-de-exito") },
  ])

  // Casos de éxito: slug debe existir en data/projects; category es la etiqueta del diseño
  const casesWithProject = CASE_SLUGS.map((slug) => ({
    slug,
    category: t.categories[slug] ?? "",
    project: projects.find((p) => p.slug === slug),
  })).filter((c): c is typeof c & { project: NonNullable<typeof c.project> } => !!c.project)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="mb-14">
          <h1 className="font-inter font-semibold uppercase text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            {t.title}
          </h1>
        </header>

        <div className="space-y-16 font-inter">
          {casesWithProject.map(({ slug, category, project }, index) => (
            <article key={slug} className="space-y-4">
              <h2 className="font-inter text-[15px] sm:text-[17px] font-bold uppercase text-white/95">
                {format(t.caseHeading, {
                  n: String(index + 1),
                  title: project.title.split("—")[0].trim(),
                  category: category.toUpperCase(),
                })}
              </h2>
              <Link
                href={localizedHref(lang, `/portfolio/${slug}`)}
                className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]"
                aria-label={format(t.caseAria, { title: project.title })}
              >
                <video
                  src={project.video}
                  poster={project.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={index < 2 ? "auto" : "metadata"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="pointer-events-none absolute bottom-4 left-4 right-4 font-inter text-[15px] font-semibold uppercase text-white sm:text-[17px]">
                  {project.title.split("—")[0].trim()}
                </span>
              </Link>
              <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
                {project.sections[0]?.items?.[0] ?? ""}
              </p>
            </article>
          ))}

          <section className="space-y-4 border-t border-white/10 pt-12">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
              {t.whyTitle}
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              {t.whyText}
            </p>
          </section>

          <ViewMoreOnTV className="pt-2" lang={lang} />
        </div>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

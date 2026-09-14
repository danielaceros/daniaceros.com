import Link from "next/link"
import { getAllPosts, getLocalizedPost } from "@/lib/blog"
import { buildBreadcrumbSchema, localizedMetadata, type LangParams } from "@/lib/seo"
import { DEFAULT_LOCALE, getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { content } from "./content"

// Índice del blog. Textos fijos en ./content.ts; título/extracto/categoría/tags
// de cada artículo vía getLocalizedPost (traducción de lib/blog-translations o
// ES original). index/hreflang de /en/blog lo decide el registro lib/i18n/routes.ts.
// El ES reproduce exactamente getBlogMetadata() de lib/blog.ts.
export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/blog",
  keywords: content[lang].keywords,
}))

export default async function BlogPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  // En otros idiomas: primero los artículos traducidos (orden cronológico dentro
  // de cada grupo); los pendientes salen con su texto ES y la etiqueta "Spanish".
  const localizedPosts = getAllPosts()
    .map((post) => getLocalizedPost(post.slug, lang) ?? { post, translated: false })
    .sort((a, b) => (lang === DEFAULT_LOCALE ? 0 : Number(b.translated) - Number(a.translated)))

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: getDictionary(lang).breadcrumbs.home, path: localizedHref(lang, "/") },
    { name: t.blog, path: localizedHref(lang, "/blog") },
  ])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl">
          <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-white/45">{t.blog}</p>
          <h1 className="mt-4 font-inter text-[34px] leading-[1.02] sm:text-[48px] lg:text-[64px] uppercase text-white">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[14px] sm:text-[16px] leading-[1.8] text-white/72">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {localizedPosts.map(({ post, translated }) => {
            const untranslated = lang !== DEFAULT_LOCALE && !translated
            return (
              <article
                key={post.slug}
                {...(untranslated ? { lang: DEFAULT_LOCALE } : {})}
                className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/45 font-inter">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span>{post.readingTime}</span>
                  {untranslated ? (
                    <span lang={lang} className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] tracking-[0.14em] text-white/55">
                      {t.untranslatedLabel}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-5 text-[26px] leading-[1.08] sm:text-[32px] font-inter uppercase text-white max-w-[16ch]">
                  <Link href={localizedHref(lang, `/blog/${post.slug}`)} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.8] text-white/68 max-w-[56ch]">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={localizedHref(lang, `/blog/${post.slug}`)}
                    {...(untranslated ? { lang } : {})}
                    className="inline-flex min-h-[44px] items-center rounded-full border border-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/88 hover:border-white/28 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    {t.readArticle}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

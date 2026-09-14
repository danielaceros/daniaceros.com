import type { MetadataRoute } from "next"
import { getAllPosts, hasPostTranslation } from "@/lib/blog"
import { projects } from "@/data/projects"
import { SITE_URL, buildLanguageAlternates } from "@/lib/seo"
import { LOCALES, DEFAULT_LOCALE, isTranslatedPath, localizedHref, type Lang } from "@/lib/i18n"

const staticPaths = [
  "/",
  "/contacto",
  "/servicios",
  "/servicios/corporativo",
  "/servicios/institucional",
  "/portfolio",
  "/precios",
  "/proceso",
  "/contratar",
  "/contenido-mensual",
  "/marca-personal",
  "/faq",
  "/sobre-mi",
  "/hablemos",
  "/tv",
  "/filmmaker-madrid",
  "/videografo-madrid",
  "/video-corporativo-madrid",
  "/video-eventos-madrid",
  "/clientes",
  "/casos-de-exito",
  "/aviso-legal",
  "/politica-de-privacidad",
  "/politica-de-cookies",
]

// Fecha de build: lastmod razonable para páginas estáticas y de portfolio,
// que no tienen fecha de publicación propia.
const BUILD_DATE = new Date()

type Entry = MetadataRoute.Sitemap[number]

/**
 * Entradas de una ruta (path ES sin prefijo) en todos los idiomas publicados.
 * - Sin traducción: solo la URL ES, exactamente igual que antes del i18n.
 * - Con traducción: URL ES + URL EN, ambas con xhtml:link alternates.
 */
function localizedEntries(path: string, lastModified: Date, translated: boolean): Entry[] {
  if (!translated) {
    return [{ url: `${SITE_URL}${path}`, lastModified }]
  }
  const languages = Object.fromEntries(
    Object.entries(buildLanguageAlternates(path)).map(([hreflang, href]) => [
      hreflang,
      `${SITE_URL}${href}`,
    ])
  )
  return LOCALES.map((lang: Lang) => ({
    url: `${SITE_URL}${localizedHref(lang, path)}`,
    lastModified,
    alternates: { languages },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const latestPostDate = posts.reduce<Date>((latest, post) => {
    const date = new Date(post.updatedAt ?? post.publishedAt)
    return date > latest ? date : latest
  }, new Date(0))

  const staticEntries = staticPaths.flatMap((path) =>
    localizedEntries(path, BUILD_DATE, isTranslatedPath(path))
  )

  const blogIndexEntries = localizedEntries(
    "/blog",
    latestPostDate > new Date(0) ? latestPostDate : BUILD_DATE,
    isTranslatedPath("/blog")
  )

  const blogEntries = posts.flatMap((post) =>
    localizedEntries(
      `/blog/${post.slug}`,
      new Date(post.updatedAt ?? post.publishedAt),
      LOCALES.filter((lang) => lang !== DEFAULT_LOCALE).every((lang) =>
        hasPostTranslation(post.slug, lang)
      )
    )
  )

  const portfolioEntries = projects.flatMap((project) =>
    localizedEntries(
      `/portfolio/${project.slug}`,
      BUILD_DATE,
      isTranslatedPath(`/portfolio/${project.slug}`)
    )
  )

  return [...staticEntries, ...blogIndexEntries, ...blogEntries, ...portfolioEntries]
}

import type { MetadataRoute } from "next"
import { getAllPosts, hasPostTranslation } from "@/lib/blog"
import { projects } from "@/data/projects"
import { SITE_URL, buildLanguageAlternates } from "@/lib/seo"
import { LOCALES, DEFAULT_LOCALE, isTranslatedPath, localizedHref, type Lang } from "@/lib/i18n"

// lastmod FIJO por ruta (AAAA-MM-DD). Antes era la fecha del build: cada despliegue (la automatización
// del blog publica en main a menudo) "actualizaba" todas las páginas y Google deja de fiarse del lastmod.
// No se calcula con git porque en Vercel el clon puede ser superficial.
// ⚠️ Al cambiar el CONTENIDO de una página, actualiza aquí su fecha.
// 2026-09-14 = web bilingüe + VSL en la home + /a0studios (todas las rutas se rehicieron ese día).
const STATIC_LASTMOD: Record<string, string> = {
  "/": "2026-09-14",
  "/contacto": "2026-09-14",
  "/servicios": "2026-09-14",
  "/servicios/corporativo": "2026-09-14",
  "/servicios/institucional": "2026-09-14",
  "/portfolio": "2026-09-14",
  "/precios": "2026-09-14",
  "/proceso": "2026-09-14",
  "/contratar": "2026-09-14",
  "/contenido-mensual": "2026-09-14",
  "/marca-personal": "2026-09-14",
  "/faq": "2026-09-14",
  "/sobre-mi": "2026-09-14",
  "/hablemos": "2026-09-14",
  "/tv": "2026-09-14",
  "/filmmaker-madrid": "2026-09-14",
  "/videografo-madrid": "2026-09-14",
  "/video-corporativo-madrid": "2026-09-14",
  "/video-eventos-madrid": "2026-09-14",
  "/a0studios": "2026-09-14",
  "/clientes": "2026-09-14",
  "/casos-de-exito": "2026-09-14",
  "/aviso-legal": "2026-09-14",
  "/politica-de-privacidad": "2026-09-14",
  "/politica-de-cookies": "2026-09-14",
}

/** Fichas de portfolio (data/projects.ts): fecha del último cambio de sus textos. */
const PORTFOLIO_LASTMOD = "2026-09-14"

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

  const staticEntries = Object.entries(STATIC_LASTMOD).flatMap(([path, date]) =>
    localizedEntries(path, new Date(date), isTranslatedPath(path))
  )

  const blogIndexEntries = localizedEntries(
    "/blog",
    latestPostDate > new Date(0) ? latestPostDate : new Date(STATIC_LASTMOD["/"]),
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
      new Date(PORTFOLIO_LASTMOD),
      isTranslatedPath(`/portfolio/${project.slug}`)
    )
  )

  return [...staticEntries, ...blogIndexEntries, ...blogEntries, ...portfolioEntries]
}

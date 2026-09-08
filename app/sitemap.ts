import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { projects } from "@/data/projects"
import { SITE_URL } from "@/lib/seo"

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
  "/the-rooftop-content-studio",
  "/clientes",
  "/casos-de-exito",
  "/aviso-legal",
  "/politica-de-privacidad",
  "/politica-de-cookies",
]

// Fecha de build: lastmod razonable para páginas estáticas y de portfolio,
// que no tienen fecha de publicación propia.
const BUILD_DATE = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const latestPostDate = posts.reduce<Date>((latest, post) => {
    const date = new Date(post.updatedAt ?? post.publishedAt)
    return date > latest ? date : latest
  }, new Date(0))

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: BUILD_DATE,
  }))

  const blogIndexEntry = {
    url: `${SITE_URL}/blog`,
    lastModified: latestPostDate > new Date(0) ? latestPostDate : BUILD_DATE,
  }

  const blogEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }))

  const portfolioEntries = projects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: BUILD_DATE,
  }))

  return [...staticEntries, blogIndexEntry, ...blogEntries, ...portfolioEntries]
}

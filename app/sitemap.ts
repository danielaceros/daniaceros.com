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

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioUrls = projects.map((project) => `${SITE_URL}/portfolio/${project.slug}`)
  const blogUrls = getAllPosts().map((post) => `${SITE_URL}/blog/${post.slug}`)

  const urls = [
    ...staticPaths.map((path) => `${SITE_URL}${path}`),
    `${SITE_URL}/blog`,
    ...blogUrls,
    ...portfolioUrls,
  ]

  return urls.map((url) => ({ url }))
}

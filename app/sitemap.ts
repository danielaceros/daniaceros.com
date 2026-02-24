import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { SITE_URL } from "@/lib/seo"

const staticRoutes = [
  "",
  "/portfolio",
  "/servicios",
  "/servicios/corporativo",
  "/servicios/institucional",
  "/sobre-mi",
  "/clientes",
  "/casos-de-exito",
  "/precios",
  "/proceso",
  "/contratar",
  "/faq",
  "/contacto",
  "/filmmaker-madrid",
  "/videografo-madrid",
  "/video-corporativo-madrid",
  "/video-eventos-madrid",
  "/aviso-legal",
  "/politica-de-privacidad",
  "/politica-de-cookies",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const baseEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/video-") ? 0.9 : 0.8,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  return [...baseEntries, ...projectEntries]
}

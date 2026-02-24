import type { MetadataRoute } from "next"
const sitemapUrls = [
  "https://daniaceros.com/",
  "https://daniaceros.com/contacto",
  "https://daniaceros.com/servicios",
  "https://daniaceros.com/portfolio",
  "https://daniaceros.com/precios",
  "https://daniaceros.com/proceso",
  "https://daniaceros.com/contratar",
  "https://daniaceros.com/faq",
  "https://daniaceros.com/sobre-mi",
  "https://daniaceros.com/filmmaker-madrid",
  "https://daniaceros.com/videografo-madrid",
  "https://daniaceros.com/the-rooftop-content-studio",
  "https://daniaceros.com/clientes",
  "https://daniaceros.com/casos-de-exito",
  "https://daniaceros.com/video-corporativo-madrid",
  "https://daniaceros.com/video-eventos-madrid",
  "https://daniaceros.com/aviso-legal",
  "https://daniaceros.com/politica-de-privacidad",
  "https://daniaceros.com/politica-de-cookies",
  "https://daniaceros.com/portfolio/fifa",
  "https://daniaceros.com/portfolio/camara-de-comercio",
  "https://daniaceros.com/portfolio/federacion-esgrima",
  "https://daniaceros.com/portfolio/ikami",
  "https://daniaceros.com/portfolio/cinesa",
  "https://daniaceros.com/portfolio/tengo-un-plan",
  "https://daniaceros.com/portfolio/ifema",
  "https://daniaceros.com/portfolio/omar-montes",
  "https://daniaceros.com/portfolio/brahim-diaz",
  "https://daniaceros.com/servicios/corporativo",
  "https://daniaceros.com/servicios/instituciones",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapUrls.map((url) => ({ url }))
}

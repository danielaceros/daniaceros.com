// Textos fijos de las plantillas del blog (índice, artículo y not-found) por idioma.
// El ES es literal del original (JSX + getBlogMetadata de lib/blog.ts): no cambiar.
// Los artículos se traducen en lib/blog-translations (no aquí).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Blog de vídeo corporativo, eventos y producción audiovisual en Madrid",
  metaDescription:
    "Artículos sobre vídeo corporativo, grabación de eventos, aftermovies y estrategia audiovisual para empresas y marcas en Madrid.",
  keywords: [
    "blog video corporativo madrid",
    "grabacion de eventos madrid",
    "aftermovie evento corporativo",
    "produccion audiovisual empresas madrid",
  ],
  /** Nombre de la sección (kicker del índice, breadcrumb). */
  blog: "Blog",
  title: "Insights sobre vídeo corporativo, eventos y producción audiovisual",
  intro:
    "Artículos pensados para empresas y marcas que quieren entender mejor cómo convertir eventos, piezas corporativas y producción audiovisual en contenido útil para negocio.",
  readArticle: "Leer artículo",
  /** Etiqueta para artículos sin traducción en el índice de otro idioma (no se usa en ES). */
  untranslatedLabel: "Español",
  /** CTA por defecto de las link-cards de un artículo. */
  viewProfile: "Ver perfil",
  notFound: {
    title: "Artículo no encontrado",
    text: "Este post no existe o todavía no está publicado. Vuelve al índice del blog y seguimos.",
    cta: "Ir al blog",
  },
}

const en: typeof es = {
  metaTitle: "Corporate video, event filming and video production blog in Madrid",
  metaDescription:
    "Articles on corporate video, event filming, aftermovies and video strategy for companies and brands in Madrid.",
  keywords: [
    "corporate video blog madrid",
    "event videography madrid",
    "corporate event aftermovie",
    "video production for businesses madrid",
  ],
  blog: "Blog",
  title: "Insights on corporate video, events and video production",
  intro:
    "Articles for companies and brands that want to better understand how to turn events, corporate pieces and video production into content that works for their business.",
  readArticle: "Read article",
  untranslatedLabel: "Spanish",
  viewProfile: "View profile",
  notFound: {
    title: "Article not found",
    text: "This post doesn't exist or hasn't been published yet. Head back to the blog index and carry on from there.",
    cta: "Go to the blog",
  },
}

export const content: Record<Lang, typeof es> = { es, en }

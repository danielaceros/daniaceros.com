import type { Metadata } from "next"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  readingTime: string
  category: string
  tags: string[]
  keyword: string
  intent: "informacional" | "comercial" | "mixta"
  excerpt: string
  seoTitle: string
  metaDescription: string
  heroKicker: string
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "list"; ordered?: boolean; items: string[] }
    | { type: "faq"; question: string; answer: string }
  >
}

export const blogPosts: BlogPost[] = [
  {
    slug: "grabacion-eventos-madrid",
    title: "Grabación de eventos en Madrid para empresas, marcas y congresos",
    description:
      "Servicio de grabación de eventos en Madrid con enfoque cinematográfico, cobertura profesional y piezas listas para web, aftermovie y redes.",
    publishedAt: "2026-03-17",
    readingTime: "6 min",
    category: "SEO",
    tags: ["grabación de eventos", "Madrid", "vídeo corporativo", "aftermovie"],
    keyword: "grabación de eventos madrid",
    intent: "comercial",
    excerpt:
      "Qué debe incluir una grabación de eventos profesional en Madrid y cómo convertir un congreso o evento de empresa en una pieza útil para marca y negocio.",
    seoTitle: "Grabación de eventos en Madrid | Vídeo profesional para empresas y marcas",
    metaDescription:
      "Servicio de grabación de eventos en Madrid para empresas, congresos y marcas. Cobertura audiovisual profesional con enfoque cinematográfico, aftermovie y piezas para redes.",
    heroKicker: "Blog / SEO",
    body: [
      {
        type: "paragraph",
        text: "Si estás buscando un servicio de grabación de eventos en Madrid, probablemente no necesitas solo a alguien que documente lo que pasa. Necesitas una cobertura audiovisual capaz de convertir un evento en una pieza útil para comunicación, marca y negocio.",
      },
      {
        type: "paragraph",
        text: "Trabajo con empresas, marcas y organizaciones que quieren cubrir congresos, conferencias, presentaciones, encuentros corporativos o experiencias de marca con una mirada más cuidada: imagen profesional, ritmo narrativo y entregables pensados para seguir usando el contenido después del evento.",
      },
      { type: "heading", level: 2, text: "Qué incluye una grabación de eventos profesional" },
      {
        type: "list",
        items: [
          "Cobertura audiovisual del evento en localización.",
          "Captura de momentos clave, ambiente, asistentes y branding.",
          "Material para vídeo principal, aftermovie o piezas cortas para redes.",
          "Edición y corrección de color cuando aplica al proyecto.",
        ],
      },
      { type: "heading", level: 2, text: "Para qué tipo de eventos trabajo" },
      {
        type: "paragraph",
        text: "Congresos, conferencias, presentaciones de producto, encuentros corporativos, eventos de marca, jornadas internas, ferias y activaciones. El objetivo no es solo registrar lo ocurrido, sino generar un vídeo que tenga valor después: en web, redes, recap comercial o futuras ediciones.",
      },
      { type: "heading", level: 2, text: "Enfoque de trabajo" },
      {
        type: "paragraph",
        text: "Cada evento tiene una intención distinta. A veces la prioridad es captar la energía del día. Otras, generar una pieza resumen para patrocinadores, clientes o redes. Por eso la grabación se plantea con criterio desde antes del evento: qué momentos son clave, qué imagen quiere proyectar la marca y qué entregables tendrán más valor después.",
      },
      { type: "heading", level: 2, text: "Grabación de eventos en Madrid con enfoque cinematográfico" },
      {
        type: "paragraph",
        text: "Mi trabajo combina cobertura de evento, mirada narrativa y ejecución audiovisual cuidada. No se trata de llenar una timeline con planos, sino de construir una pieza limpia, profesional y útil. Si además interesa, del mismo rodaje pueden salir adaptaciones para redes sociales o un aftermovie completo.",
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Trabajas solo en Madrid?",
        answer:
          "Madrid es la base principal, aunque puedo desplazarme según el proyecto.",
      },
      {
        type: "faq",
        question: "¿También haces aftermovies o piezas para redes?",
        answer:
          "Sí. En muchos casos es lo más interesante: aprovechar la cobertura del evento para obtener un vídeo principal y varias piezas complementarias.",
      },
      {
        type: "faq",
        question: "¿Qué se puede enlazar desde esta página?",
        answer:
          "La home, precios, portfolio y cualquier caso de evento o congreso que refuerce autoridad y contexto comercial.",
      },
    ],
  },
]

export function getAllPosts() {
  return [...blogPosts].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogMetadata(): Metadata {
  return buildMetadata({
    title: "Blog de vídeo corporativo, eventos y producción audiovisual en Madrid",
    description:
      "Artículos sobre vídeo corporativo, grabación de eventos, aftermovies y estrategia audiovisual para empresas y marcas en Madrid.",
    path: "/blog",
    keywords: [
      "blog video corporativo madrid",
      "grabacion de eventos madrid",
      "aftermovie evento corporativo",
      "produccion audiovisual empresas madrid",
    ],
  })
}

export function getPostMetadata(post: BlogPost): Metadata {
  return {
    ...buildMetadata({
      title: post.seoTitle,
      description: post.metaDescription,
      path: `/blog/${post.slug}`,
      keywords: [post.keyword, ...post.tags],
    }),
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Daniel Acero",
      title: post.seoTitle,
      description: post.metaDescription,
      locale: "es_ES",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  }
}

// lib/blog-translations.ts
// Registro de traducciones de artículos del blog (lib/blog.ts = original ES).
// Mientras un artículo NO esté aquí, /en/blog/<slug> muestra el texto español
// con robots noindex y queda fuera del sitemap.
//
// Para traducir un artículo:
//   1. Añade una entrada en `blogTranslations.en` con la MISMA clave que el slug ES.
//   2. Rellena todos los campos de BlogPostTranslation (mismo orden de bloques
//      en `body`; las URLs de imágenes/vídeos pueden reutilizarse).
//   3. Nada más: getLocalizedPost() la usa, la página pasa a index + hreflang
//      y app/sitemap.ts la incluye.
// El slug EN puede ser distinto: añádelo a EN_BLOG_SLUGS en lib/i18n/config.ts (sin mapeo, es el mismo que el ES).
import type { BlogPost } from "@/lib/blog"
import type { Lang } from "@/lib/i18n/config"
import { enPart1 } from "@/lib/blog-translations/en-1"
import { enPart2 } from "@/lib/blog-translations/en-2"
import { enPart3 } from "@/lib/blog-translations/en-3"
import { enPart4 } from "@/lib/blog-translations/en-4"
import { enPart5 } from "@/lib/blog-translations/en-5"
import { enPart6 } from "@/lib/blog-translations/en-6"
import { enPart7 } from "@/lib/blog-translations/en-7"
import { enAuto } from "@/lib/blog-translations/en-auto"

export type BlogPostTranslation = Pick<
  BlogPost,
  | "title"
  | "description"
  | "readingTime"
  | "category"
  | "tags"
  | "keyword"
  | "excerpt"
  | "seoTitle"
  | "metaDescription"
  | "heroKicker"
  | "body"
>

export const blogTranslations: Partial<Record<Lang, Record<string, BlogPostTranslation>>> = {
  en: { ...enPart1, ...enPart2, ...enPart3, ...enPart4, ...enPart5, ...enPart6, ...enPart7, ...enAuto },
}

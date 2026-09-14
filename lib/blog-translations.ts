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
// El slug EN es el mismo que el ES por ahora (/en/blog/<slug-es>).
import type { BlogPost } from "@/lib/blog"
import type { Lang } from "@/lib/i18n/config"
import { enPart1 } from "@/lib/blog-translations/en-1"

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
  en: { ...enPart1 },
}

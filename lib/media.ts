import type { Lang } from "@/lib/i18n/config"

export const VIDEO_POSTER_URL =
  "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/hero/daniel-acero-hero-v2-llWDLWKhpBLHLD1VcbHNvWsLL7DeYZ.jpg"

/**
 * VSL de la home (components/VslSection.tsx), uno por idioma.
 * - video4k: máster 4K (por defecto en escritorio/pantallas grandes).
 * - video: 1080p ligero (conexión lenta/ahorro de datos, pantallas pequeñas
 *   o si el 4K falla al cargar).
 * - poster: imagen previa.
 * `null` = la sección no se renderiza en ese idioma.
 */
export type VslMedia = { video4k: string; video: string; poster: string }

export const VSL: Record<Lang, VslMedia | null> = {
  es: null,
  en: {
    video4k: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/vsl/vsl-en-dani-acero-4k.mp4",
    video: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/vsl/vsl-en-dani-acero.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/vsl/vsl-en-dani-acero-poster.jpg",
  },
}

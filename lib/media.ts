import type { Lang } from "@/lib/i18n/config"

export const VIDEO_POSTER_URL =
  "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/hero/daniel-acero-hero-v2-llWDLWKhpBLHLD1VcbHNvWsLL7DeYZ.jpg"

const BLOB = "https://kgtz1gujr7extokb.public.blob.vercel-storage.com"
export const BLOB_ORIGIN = BLOB

/**
 * Póster de <video> servido por el optimizador de Next (/_next/image: WebP y ancho acotado) en vez del
 * JPEG 1080×1920 original del Blob. `<video poster>` no pasa por next/image, así que la URL se construye
 * a mano. Solo para imágenes del Blob (las externas se devuelven tal cual) y con dos anchos fijos para no
 * multiplicar transformaciones en la cuota de Image Optimization: 640 (tarjetas) y 1080 (grande).
 * La calidad debe estar en images.qualities (Next 16: por defecto solo 75).
 */
export function optimizedPoster(url: string | undefined, width: 640 | 1080 | 1920 = 640): string | undefined {
  if (!url || !url.startsWith(`${BLOB}/`)) return url
  return `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=75`
}

/**
 * VSL de la home (components/VslSection.tsx), uno por idioma.
 * - hls: master playlist HLS adaptativo (2160p/1440p/1080p/720p/480p, fMP4, segmentos de 2 s),
 *   generado con /Volumes/Dani/FILMMAKING_ADS/VSL_WEB/make_hls.sh desde el máster 4K.
 * - mp4: 1080p progresivo, solo como último recurso si HLS falla.
 * - poster: imagen previa.
 * `null` = la sección no se renderiza en ese idioma.
 */
export type VslMedia = { hls: string; mp4: string; poster: string }

export const VSL: Record<Lang, VslMedia | null> = {
  es: {
    hls: `${BLOB}/vsl/hls/es/master.m3u8`,
    mp4: `${BLOB}/vsl/vsl-es-dani-acero.mp4`,
    poster: `${BLOB}/vsl/vsl-es-dani-acero-poster.jpg`,
  },
  en: {
    hls: `${BLOB}/vsl/hls/en/master.m3u8`,
    mp4: `${BLOB}/vsl/vsl-en-dani-acero.mp4`,
    poster: `${BLOB}/vsl/vsl-en-dani-acero-poster.jpg`,
  },
}

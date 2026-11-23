// lib/cenas-fotos.ts
// Fotos reales de una gala de empresa en Madrid (sin nombrar al cliente) para las landings de cenas de empresa
// (/eventos/cenas-de-empresa y /eventos/cenas-de-empresa/propuesta). UN SOLO SITIO donde añadir o quitar fotos.
// Archivos optimizados (≤1100 px, JPG) en /public/eventos/cenas. Solo material editado y de calidad.
import type { ShowcaseItem } from "@/components/landing/ShowcaseTabs"

export type CenaFoto = { src: string; width: number; height: number; alt: string; caption: string }

const f = (n: number, width: number, height: number, alt: string, caption: string): CenaFoto => ({
  src: `/eventos/cenas/gala-${String(n).padStart(2, "0")}.jpg`,
  width,
  height,
  alt,
  caption,
})

// `alt` describe la imagen (accesibilidad); `caption` es el pie que se ve al ampliarla.
export const CENAS_FOTOS: CenaFoto[] = [
  f(1, 1080, 1350, "Sala de gala con los invitados a las mesas, bajo una lámpara de araña", "El salón, lleno: la cena en su mejor momento."),
  f(2, 1080, 1350, "Pareja brindando con copas de champán", "Un brindis que nadie planeó y que se queda en la foto."),
  f(3, 1080, 1350, "Invitadas sonriendo a la mesa durante la cena", "Las mesas, entre risas y confidencias."),
  f(4, 1080, 1350, "Invitada sonriendo con un anillo en la mano", "Los detalles de la noche: una sonrisa y un momento propio."),
  f(5, 1600, 1600, "Pareja llegando de la mano a la gala", "La llegada, de la mano: así empieza la noche."),
  f(6, 1080, 1350, "Dos invitadas sonrientes sentadas a la mesa", "Compañeras de mesa, sin posar y sin darse cuenta de la cámara."),
  f(7, 1600, 1600, "Pareja de invitados llegando a la gala", "Vestidos para la ocasión, a las puertas de la gala."),
  f(8, 1080, 1350, "Invitada sonriendo sentada en el salón", "Sin posar: la sonrisa de quien se lo está pasando bien."),
  f(9, 1080, 1350, "Invitados aplaudiendo durante la cena", "Aplausos en la mesa: el equipo celebrando a los suyos."),
  f(10, 1080, 1350, "Invitados conversando en la recepción", "La conversación de antes de sentarse a cenar."),
  f(11, 1600, 1600, "Pareja de invitados caminando hacia la gala", "Cada llegada cuenta su propia historia."),
  f(12, 1600, 1600, "Invitado con esmoquin llegando a la gala", "Llegando con ganas de fiesta."),
]

// Aftermovies de referencia de una gala de empresa (versión web 720p en Vercel Blob, con póster).
// Sin datos del cliente a propósito: solo se enseñan como muestra del resultado.

export const CENAS_AFTERMOVIES: ShowcaseItem[] = [
  {
    id: "gala-corto",
    label: "Resumen corto",
    context: "Aftermovie de una gala de empresa en Madrid · 40 s",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-a-web-k1H3QpqVaKEnvcfmVrcifG9blrxHss.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-a-poster-liyzFCONzJ7UZsJpbMKwcwoAMLmNLU.jpg",
  },
  {
    id: "gala-largo",
    label: "Resumen largo",
    context: "Aftermovie de una gala de empresa en Madrid · 1 min 5 s",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-b-web-FNngvTnlB8eykHDRN2lzI2km0fXltM.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-b-poster-CgK9VEqQboLuS1pxK9eyyW2E8ME5aG.jpg",
  },
  {
    id: "gala-teaser",
    label: "Teaser",
    context: "Teaser de una gala de empresa en Madrid · 13 s",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-c-web-MkptNM1DAaWPjURGXcJmIbGSBIziUs.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-c-poster-cIiCCsxAoPzbTxaxzYl2vEM4CapBQJ.jpg",
  },
]

// Reel vertical del hero de las landings de cenas (720p + versión móvil de 480x854, con póster).
export const CENAS_HERO = {
  src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-v-hero-web-unEqvxdzkAjfph7XMJUAj0GZvEy0Xq.mp4",
  srcMobile:
    "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-v-hero-mobile-86WasXOFLSocrhTF11fq46tnYBiWzX.mp4",
  poster:
    "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-v-hero-poster-bgJCkk81FCCDvGICuLKjD2pLAOi2AR.jpg",
}

// Versión vertical (stories y reels) del aftermovie de referencia, para la propuesta.
export const CENAS_VERTICAL = {
  src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-v-largo-web-hcvtngsHmC4ex1swgzGZwEzHxT5jYK.mp4",
  poster:
    "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-gala-v-largo-poster-rvGuPWb7vj0meJiA2BUAwB9qkvXZYu.jpg",
  context: "La misma pieza en vertical, lista para stories y reels · 1 min 5 s",
}

// Reels verticales de ejemplo (se presupuestan aparte): 720x1280, con póster. Sin datos del cliente.
export const CENAS_REELS = [
  {
    id: "reel-1",
    context: "Brindis y aplausos en el salón",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-reel-1-web-ST3EA2UFtR4hWXMadRGj1C1gxnZJho.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-reel-1-poster-8HMqMFpB5eavWN8vDGA7xX9C4vu9ZJ.jpg",
  },
  {
    id: "reel-2",
    context: "Llegada y copa en la terraza",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-reel-2-web-qp4Dplt44JXZMSHT3mjo83BTtFrKct.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-reel-2-poster-mGG8vcRncnviWHm7FPOc78lKtNfBZY.jpg",
  },
  {
    id: "reel-3",
    context: "Llegadas y brindis a la entrada",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-reel-3-web-OG4jShYazonbSglbj6nvDEo1zISXTY.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/cenas-reel-3-poster-DNOPGaXra7ZZcSUmLdmvGY35jOighL.jpg",
  },
]

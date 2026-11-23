// lib/cenas-fotos.ts
// Fotos reales de una gala de empresa en Madrid (sin nombrar al cliente) para las landings de cenas de empresa
// (/eventos/cenas-de-empresa y /eventos/cenas-de-empresa/propuesta). UN SOLO SITIO donde añadir o quitar fotos.
// Archivos optimizados (≤1100 px, JPG) en /public/eventos/cenas. Solo material editado y de calidad.
import type { ShowcaseItem } from "@/components/landing/ShowcaseTabs"

export type CenaFoto = { src: string; width: number; height: number; alt: string }

const f = (n: number, width: number, height: number, alt: string): CenaFoto => ({
  src: `/eventos/cenas/gala-${String(n).padStart(2, "0")}.jpg`,
  width,
  height,
  alt,
})

export const CENAS_FOTOS: CenaFoto[] = [
  f(1, 880, 1100, "Sala de gala con los invitados a las mesas, bajo una lámpara de araña"),
  f(2, 880, 1100, "Pareja brindando con copas de champán"),
  f(3, 880, 1100, "Invitadas sonriendo a la mesa durante la cena"),
  f(4, 880, 1100, "Invitada sonriendo con un anillo en la mano"),
  f(5, 1100, 1100, "Pareja llegando de la mano a la gala"),
  f(6, 880, 1100, "Dos invitadas sonrientes sentadas a la mesa"),
  f(7, 1100, 1100, "Pareja de invitados llegando a la gala"),
  f(8, 880, 1100, "Invitada sonriendo sentada en el salón"),
  f(9, 880, 1100, "Invitados aplaudiendo durante la cena"),
  f(10, 880, 1100, "Invitados conversando en la recepción"),
  f(11, 1100, 1100, "Pareja de invitados caminando hacia la gala"),
  f(12, 1100, 1100, "Invitado con esmoquin llegando a la gala"),
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

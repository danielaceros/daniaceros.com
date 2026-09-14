// app/[lang]/tv/content.ts
// Textos de /tv por idioma. El ES es copia literal del original (no tocar).
// Los captions/categorías de los reels viven en data/tv-reels.ts (ES) y
// data/tv-reels.en.ts (EN).
import type { Lang } from "@/lib/i18n/config"

const es = {
  meta: {
    title: "TV — el portfolio en formato Reels",
    description:
      "El portfolio de Daniel Acero, en formato Reels: desliza como en Instagram y ve cada pieza tal y como se publicó.",
    keywords: ["daniel acero reels", "portfolio video vertical", "showreel instagram madrid"],
  },
  kicker: "daniel acero · tv",
  title: "El portfolio, como en Instagram",
  hint: "Silenciado por defecto — toca el icono para activar el sonido. Desliza hacia arriba para ver la siguiente pieza.",
  /** UI de components/tv/ReelPhone.tsx */
  reelPhone: {
    unmute: "Activar sonido",
    mute: "Silenciar",
    follow: "Síguenos",
  },
}

const en: typeof es = {
  meta: {
    title: "TV — the portfolio in Reels format",
    description:
      "Daniel Acero's portfolio in Reels format: swipe just like on Instagram and watch every piece exactly as it was published.",
    keywords: ["daniel acero reels", "vertical video portfolio", "instagram showreel madrid"],
  },
  kicker: "daniel acero · tv",
  title: "The portfolio, Instagram-style",
  hint: "Muted by default — tap the icon to turn the sound on. Swipe up to see the next piece.",
  reelPhone: {
    unmute: "Turn sound on",
    mute: "Mute",
    follow: "Follow",
  },
}

export const content: Record<Lang, typeof es> = { es, en }

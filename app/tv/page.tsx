// app/tv/page.tsx
import type { Metadata } from "next"
import ReelPhone from "@/components/tv/ReelPhone"
import { TV_REELS } from "@/data/tv-reels"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "TV — el portfolio en formato Reels",
  description:
    "El portfolio de Daniel Acero, en formato Reels: desliza como en Instagram y ve cada pieza tal y como se publicó.",
  path: "/tv",
  keywords: ["daniel acero reels", "portfolio video vertical", "showreel instagram madrid"],
})

export default function TVPage() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 pb-10 pt-24 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 46% at 50% 6%, rgba(255,255,255,0.10), rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative z-10 mb-5 text-center sm:mb-7">
        <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
          daniel acero · tv
        </p>
        <h1 className="mt-2 font-display text-[22px] font-semibold uppercase leading-[1.05] sm:text-[28px]">
          El portfolio, como en Instagram
        </h1>
      </div>

      <div className="relative z-10">
        <ReelPhone reels={TV_REELS} />
      </div>

      <p className="relative z-10 mt-5 max-w-xs text-center font-inter text-[11px] text-white/45 sm:mt-6">
        Silenciado por defecto — toca el icono para activar el sonido. Desliza hacia arriba para
        ver la siguiente pieza.
      </p>
    </main>
  )
}

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
    <main className="relative flex h-dvh w-full flex-col items-center overflow-hidden bg-[#0a0a0a] px-4 py-3 text-white sm:py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 46% at 50% 6%, rgba(255,255,255,0.10), rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Título y pie ceden el sitio al móvil en pantallas bajas (móvil en
          landscape, ventanas cortas) — se ocultan del todo por debajo de
          480px de alto en vez de dejar al móvil sin apenas hueco. */}
      <div className="relative z-10 flex-none text-center [@media(max-height:480px)]:hidden">
        <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
          daniel acero · tv
        </p>
        <h1 className="mt-1.5 font-display text-[18px] font-semibold uppercase leading-[1.05] sm:text-[24px]">
          El portfolio, como en Instagram
        </h1>
      </div>

      {/* Único hijo que crece/encoge: el móvil siempre cabe en lo que sobra
          entre el título y el pie, en cualquier alto de pantalla — nunca es
          la página la que scrollea, solo el móvil por dentro. */}
      <div className="relative z-10 my-2 min-h-0 w-full flex-1 [container-type:size]">
        <div className="flex h-full w-full items-center justify-center">
          <ReelPhone reels={TV_REELS} />
        </div>
      </div>

      <p className="relative z-10 max-w-xs flex-none text-center font-inter text-[10.5px] text-white/45 sm:text-[11px] [@media(max-height:480px)]:hidden">
        Silenciado por defecto — toca el icono para activar el sonido. Desliza hacia arriba para
        ver la siguiente pieza.
      </p>
    </main>
  )
}

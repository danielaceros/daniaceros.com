// Entrevista y reels verticales ya entregados (material editado), compartido por /eventos/ifema y
// /eventos/ifema/propuesta. El material sale de lib/ifema-referencias.ts (ENTREVISTA y REELS).
import ShowcaseVideo from "@/components/landing/ShowcaseVideo"
import { ENTREVISTA, REELS } from "@/lib/ifema-referencias"

const EYEBROW = "font-inter text-[12px] font-semibold uppercase tracking-[0.18em] text-white/72"
const TITLE = "font-display text-[26px] font-semibold uppercase leading-[1.04] text-balance sm:text-[36px]"

export default function IfemaEntregas() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className={`${EYEBROW} text-center`}>Y no solo el aftermovie</p>
      <h2 className={`${TITLE} mt-3 text-center`}>Entrevistas y reels para meses de contenido</h2>
      <p className="mx-auto mt-3 max-w-xl text-center font-inter text-[15px] leading-[1.65] text-white/65">
        De la misma grabación salen entrevistas montadas y piezas verticales listas para publicar.
      </p>
      <div className="mt-8 sm:mt-10">
        <ShowcaseVideo src={ENTREVISTA.src} poster={ENTREVISTA.poster} title={`Entrevista: ${ENTREVISTA.context}`} />
        <p className="mt-3 text-center font-inter text-[13px] text-white/70">{ENTREVISTA.context}</p>
      </div>
      <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
        {REELS.map((reel) => (
          <li key={reel.id} className="mx-auto w-full max-w-[280px] sm:max-w-none">
            <ShowcaseVideo src={reel.src} poster={reel.poster} title={`Reel: ${reel.context}`} vertical />
            <p className="mt-3 text-center font-inter text-[13px] text-white/70">{reel.context}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

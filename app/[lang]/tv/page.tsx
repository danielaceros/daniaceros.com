// app/tv/page.tsx
import ReelPhone from "@/components/tv/ReelPhone"
import { getTVReels } from "@/data/tv-reels"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].meta.title,
  description: content[lang].meta.description,
  path: "/tv",
  keywords: content[lang].meta.keywords,
}))

export default async function TVPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  return (
    <main className="relative flex h-dvh w-full flex-col items-center overflow-hidden bg-[#0a0a0a] text-white sm:px-4 sm:py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(60% 46% at 50% 6%, rgba(255,255,255,0.10), rgba(255,255,255,0) 70%)",
        }}
      />

      {/* En móvil no hay chrome de página alrededor: el feed va a pantalla
          completa, borde a borde, como si estuvieras dentro de Instagram.
          El título y el pie de texto solo existen desde sm hacia arriba,
          donde sí hay sitio para el marco de iPhone + contexto alrededor. */}
      <div className="relative z-10 hidden flex-none text-center sm:block [@media(max-height:480px)]:hidden">
        <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
          {t.kicker}
        </p>
        <h1 className="mt-1.5 font-display text-[18px] font-semibold uppercase leading-[1.05] sm:text-[24px]">
          {t.title}
        </h1>
      </div>

      {/* Único hijo que crece/encoge: el móvil siempre cabe en lo que sobra
          entre el título y el pie, en cualquier alto de pantalla — nunca es
          la página la que scrollea, solo el móvil por dentro. En mobile
          (sin título/pie/padding alrededor) este bloque ya ES el viewport
          completo, así que el feed ocupa el 100% de la pantalla. */}
      <div className="relative z-10 my-0 min-h-0 w-full flex-1 [container-type:size] sm:my-2">
        <div className="flex h-full w-full items-center justify-center">
          <ReelPhone reels={getTVReels(lang)} labels={t.reelPhone} />
        </div>
      </div>

      <p className="relative z-10 hidden max-w-xs flex-none text-center font-inter text-[10.5px] text-white/45 sm:block sm:text-[11px] [@media(max-height:480px)]:hidden">
        {t.hint}
      </p>
    </main>
  )
}

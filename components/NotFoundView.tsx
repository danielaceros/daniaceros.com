// 404 con la estética de la web (fondo #0a0a0a, Manrope, pills de cristal).
// `langs` = un idioma (404 dentro de [lang]) o ["es", "en"] (404 global estático, sin idioma fiable).
import Link from "next/link"
import { localizedHref, type Lang } from "@/lib/i18n"

const COPY: Record<Lang, { kicker: string; title: string; text: string; home: string; services: string }> = {
  es: {
    kicker: "Error 404",
    title: "Esta página no existe",
    text: "Puede que el enlace esté roto o que la página se haya movido.",
    home: "Volver al inicio",
    services: "Ver servicios",
  },
  en: {
    kicker: "Error 404",
    title: "This page doesn't exist",
    text: "The link may be broken or the page may have moved.",
    home: "Back to home",
    services: "See services",
  },
}

const PILL =
  "inline-flex min-h-[44px] items-center justify-center rounded-full px-5 font-inter text-[12px] uppercase tracking-[0.12em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

export default function NotFoundView({ langs }: { langs: Lang[] }) {
  const [primary, secondary] = langs
  const p = COPY[primary]
  const s = secondary ? COPY[secondary] : null

  return (
    <main className="flex min-h-[100svh] items-center justify-center bg-[#0a0a0a] px-4 pb-16 pt-28 text-center text-white">
      <div className="flex max-w-xl flex-col items-center">
        <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-white/45">{p.kicker}</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,8vw,3.4rem)] font-semibold uppercase leading-[1.02]">
          {p.title}
          {s ? (
            <span lang={secondary} className="mt-3 block text-[0.42em] font-medium leading-[1.2] text-white/55">
              {s.title}
            </span>
          ) : null}
        </h1>
        <p className="mt-5 font-inter text-[14px] leading-[1.75] text-white/68 sm:text-[15px]">
          {p.text}
          {s ? (
            <span lang={secondary} className="mt-1 block text-white/50">
              {s.text}
            </span>
          ) : null}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={localizedHref(primary, "/")} className={`${PILL} bg-white font-semibold text-[#0a0a0a] hover:bg-white/90`}>
            {s ? `${p.home} · ${s.home}` : p.home}
          </Link>
          <Link
            href={localizedHref(primary, "/servicios")}
            className={`${PILL} border border-white/14 bg-white/[0.03] text-white/88 hover:border-white/25 hover:bg-white/[0.06] hover:text-white`}
          >
            {s ? `${p.services} · ${s.services}` : p.services}
          </Link>
        </div>
      </div>
    </main>
  )
}

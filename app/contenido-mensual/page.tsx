import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Pack mensual de contenido para empresas | Daniel Acero",
  description:
    "Una sesión de 2 horas al mes. Te llevas hasta 30 reels editados. Sin permanencia. Desde 620€/mes. Validado con clientes activos.",
  path: "/contenido-mensual",
  keywords: [
    "pack mensual de contenido",
    "contenido mensual para empresas",
    "reels mensuales empresa",
    "filmmaker mensual madrid",
  ],
})

const HERO_PORTRAIT =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/0a4bxjgj0xSqIihE9ktHzjeng%20(2).png?alt=media&token=ead483f1-9cd5-4169-9e3d-810307334885"

const LOGO_STRIP =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/bannerlegit.png?alt=media&token=99a19a7d-ffa0-4eb1-80ff-5732df48ea7b"

const MERIDIAN_BROLL =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/5D8C07A0-DF6C-4A1D-B935-0DE35EE494E3.mp4?alt=media&token=74d33b70-2485-4ea6-97ad-df1b584ded8a"

const MERIDIAN_AVATAR =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/553185479_17875058964420491_2090743360774964884_n.jpg?alt=media&token=9a06a5c5-7cbb-4ce1-a4c7-091907d7531e"

const PLANS = [
  { name: "Starter", price: "620", reels: "8", pubs: "2", session: "2h", extra: null, highlight: false },
  { name: "Standard", price: "780", reels: "12", pubs: "3", session: "2h", extra: null, highlight: true, badge: "El más demandado" },
  { name: "Pro", price: "990", reels: "16", pubs: "4", session: "3h", extra: "+1 reel destacado", highlight: false },
  { name: "Premium", price: "1.200", reels: "20", pubs: "5", session: "4h", extra: "+2 destacados · thumbnails", highlight: false },
]

const ADD_ONS = [
  { name: "Guionización", price: "+100€/mes" },
  { name: "Publicación", price: "+100€/mes" },
  { name: "Paid Media", price: "A consultar" },
]

const CLARIFICATIONS = [
  ["Permanencia", "Sin compromiso. Mensual cancelable. Tu contenido cada mes, mientras te encaje."],
  ["Cancelación", "Preaviso antes del siguiente ciclo. El ciclo en curso no se reembolsa."],
  ["Modificaciones", "1 ronda consolidada de cambios, hasta 72h tras la entrega."],
  ["Desplazamiento", "Madrid M-40 incluido. Fuera, +50€/sesión. Operamos en toda España."],
]

const FIRST_MONTH = [
  ["01", "Llamada inicial"],
  ["07", "Guiones revisados"],
  ["14", "Sesión de grabación"],
  ["28", "Primer reel publicado"],
]

export default function ContenidoMensualPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 lg:gap-14 items-center">
            <div>
              <p
                data-lux
                style={{ "--lux-delay": "60ms" } as CSSProperties}
                className="hero-fade-up font-inter text-[11px] uppercase tracking-[0.18em] text-white/50"
              >
                Servicios · Pack mensual de contenido
              </p>

              <h1
                data-lux
                style={{ "--lux-delay": "120ms" } as CSSProperties}
                className="hero-fade-up hero-fade-up-delay-1 mt-5 font-display font-semibold uppercase leading-[0.95] text-[clamp(2.2rem,7vw,5rem)]"
              >
                Tu empresa.<br />
                Una sesión al mes.<br />
                <span className="text-white/55">30 reels listos.</span>
              </h1>

              <p
                data-lux
                style={{ "--lux-delay": "200ms" } as CSSProperties}
                className="hero-fade-up hero-fade-up-delay-2 mt-6 max-w-xl font-inter text-[15px] sm:text-[16px] leading-[1.65] text-white/72"
              >
                Voy a tu negocio una vez al mes. Grabamos en 2 horas con teleprompter.
                Te entrego el contenido editado. Tú apareces y lees. Lo demás lo hago yo.
              </p>

              <div
                data-lux
                style={{ "--lux-delay": "280ms" } as CSSProperties}
                className="hero-fade-up hero-fade-up-delay-3 mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contacto"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-white px-7 py-4 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-black hover:bg-white/90 transition-colors"
                >
                  Empezar este mes
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1m4xJaT_4DuwG_PZtnaFq7_HhHjLYAOcA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-white/25 bg-white/[0.03] px-7 py-4 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-white hover:bg-white/[0.07] transition-colors"
                >
                  Ver dossier
                </Link>
              </div>

              <div
                data-lux
                style={{ "--lux-delay": "360ms" } as CSSProperties}
                className="hero-fade-up mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md"
              >
                {[
                  ["30", "reels al mes"],
                  ["2h", "de tu tiempo"],
                  ["+50", "proyectos"],
                ].map(([n, label]) => (
                  <div key={label} className="border-l border-white/15 pl-3 sm:pl-4">
                    <p className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-semibold leading-none">{n}</p>
                    <p className="mt-1.5 font-inter text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-white/45">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-lux
              style={{ "--lux-delay": "240ms" } as CSSProperties}
              className="hero-fade-up hero-fade-up-delay-2 hidden lg:block relative aspect-[683/1024] rounded-3xl overflow-hidden"
            >
              <Image
                src={HERO_PORTRAIT}
                alt="Daniel Acero filmmaker corporativo en Madrid"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 0px, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/8 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="border-y border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <p className="font-inter text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/35 text-center mb-6">
            Empresas con las que he trabajado
          </p>
          <div className="relative h-8 sm:h-10 max-w-3xl mx-auto opacity-90">
            <Image
              src={LOGO_STRIP}
              alt="FIFA, IFEMA, Cinesa, Cámara de Comercio Madrid"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
            Cómo funciona
          </p>
          <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,3rem)]">
            Tres pasos. <span className="text-white/55">Cero fricción.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {[
            ["01", "Voy a tu negocio", "Llevo todo el equipo y monto en 15 minutos. Cámaras, luces, audio, teleprompter."],
            ["02", "Grabamos en 2h", "Lees el guion en teleprompter. Yo dirijo encuadre, ritmo y rodaje. Tú no piensas."],
            ["03", "Te entrego los reels", "Editados, con color, audio y subtítulos. Listos para publicar el mes entero."],
          ].map(([n, title, desc]) => (
            <div key={n} className="bg-[#0a0a0a] p-7 sm:p-9">
              <p className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white/15 leading-none">{n}</p>
              <h3 className="mt-5 font-inter text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.04em]">{title}</h3>
              <p className="mt-2.5 font-inter text-[13px] sm:text-[14px] leading-[1.6] text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASO MERIDIAN */}
      <section className="border-t border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
                Cliente activo · Validación real
              </p>
              <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,2.8rem)]">
                Meridian Biohealth lleva<br className="hidden sm:block" /> meses con el sistema.
              </h2>
              <p className="mt-5 font-inter text-[14px] sm:text-[15px] leading-[1.7] text-white/72 max-w-lg">
                Cada mes voy a su clínica, grabamos en 2 horas, y se llevan 30 reels para publicar.
                Su equipo invierte solo el tiempo de la grabación. Todo lo demás corre por mi cuenta.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                {[
                  ["30", "reels / mes"],
                  ["2h", "de su tiempo"],
                  ["0", "preocupaciones"],
                ].map(([n, label]) => (
                  <div key={label} className="border-l border-white/15 pl-3">
                    <p className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold leading-none">{n}</p>
                    <p className="mt-1.5 font-inter text-[10px] uppercase tracking-[0.06em] text-white/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IG-STYLE CARD WITH BROLL VIDEO */}
            <div className="order-1 lg:order-2 mx-auto w-full max-w-[400px]">
              <div className="rounded-3xl overflow-hidden bg-[#0a0a0a] ring-1 ring-white/10 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 p-4 border-b border-white/8">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0 bg-[#0a0a0a]">
                    <Image
                      src={MERIDIAN_AVATAR}
                      alt="Meridian Biohealth"
                      fill
                      unoptimized
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-inter text-[14px] font-semibold text-white truncate">meridianbiohealth</span>
                      <svg className="h-3.5 w-3.5 shrink-0 text-[#3897F0]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                      </svg>
                    </div>
                    <span className="font-inter text-[12px] text-white/55 block">Meridian Biohealth · Madrid</span>
                  </div>
                  <Link
                    href="https://www.instagram.com/meridianbiohealth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#0095F6] hover:bg-[#1877F2] transition-colors px-4 py-1.5 font-inter text-[12px] font-semibold text-white"
                  >
                    Seguir
                  </Link>
                </div>

                {/* Video b-roll */}
                <div className="relative aspect-[9/16] bg-black">
                  <video
                    src={MERIDIAN_BROLL}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/85">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-white/85"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </div>
              </div>

              <Link
                href="https://www.instagram.com/meridianbiohealth"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-white/85 hover:bg-white/[0.07] transition-colors"
              >
                Ver feed completo en Instagram <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              Planes mensuales
            </p>
            <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,3rem)]">
              Elige tu volumen.<br /><span className="text-white/55">Empieza este mes.</span>
            </h2>
          </div>
          <p className="font-inter text-[12px] leading-[1.6] text-white/50 max-w-xs">
            Mensual cancelable · Sin permanencia · IVA no incluido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.highlight
                  ? "relative rounded-3xl border border-white bg-white text-[#0a0a0a] p-7 flex flex-col lg:scale-[1.04] lg:-translate-y-1 shadow-2xl"
                  : "relative rounded-3xl border border-white/12 bg-[#0a0a0a] p-7 flex flex-col"
              }
            >
              {plan.highlight && plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-white font-inter text-[10px] uppercase tracking-[0.12em] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <p className={`font-inter text-[11px] uppercase tracking-[0.14em] ${plan.highlight ? "text-[#0a0a0a]/60" : "text-white/45"}`}>
                {plan.name}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-[42px] sm:text-[50px] font-semibold leading-none">{plan.price}€</span>
                <span className={`font-inter text-[12px] ${plan.highlight ? "text-[#0a0a0a]/55" : "text-white/45"}`}>/mes</span>
              </div>

              <ul className={`mt-6 space-y-2 font-inter text-[13px] leading-[1.5] ${plan.highlight ? "text-[#0a0a0a]/85" : "text-white/75"}`}>
                <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> {plan.reels} reels editados</li>
                <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> {plan.pubs} pub / semana</li>
                <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> Sesión de {plan.session}</li>
                {plan.extra && <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> {plan.extra}</li>}
              </ul>

              <Link
                href="/contacto"
                className={
                  plan.highlight
                    ? "mt-7 inline-flex justify-center rounded-xl bg-[#0a0a0a] text-white px-5 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-[#1c1917] transition-colors"
                    : "mt-7 inline-flex justify-center rounded-xl border border-white/25 bg-white/[0.03] px-5 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-white hover:bg-white/[0.07] transition-colors"
                }
              >
                Empezar
              </Link>
            </div>
          ))}
        </div>

        {/* VOLUMEN */}
        <div className="mt-5 rounded-3xl border border-white/12 bg-white/[0.02] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-white/45">Volumen · A medida</p>
            <h3 className="mt-1.5 font-display text-[20px] sm:text-[24px] font-semibold uppercase leading-tight">
              20+ reels al mes, equipo escalado, lanzamientos.
            </h3>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 inline-flex justify-center rounded-xl border border-white/30 bg-white/[0.04] px-6 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-white/[0.08] transition-colors"
          >
            Hablemos
          </Link>
        </div>

        {/* ADD-ONS */}
        <div className="mt-10">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
            Add-ons opcionales
          </p>
          <div className="flex flex-wrap gap-2.5">
            {ADD_ONS.map((a) => (
              <div
                key={a.name}
                className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 font-inter text-[12px] flex items-center gap-2.5"
              >
                <span className="font-semibold uppercase tracking-[0.04em]">{a.name}</span>
                <span className="text-white/40">·</span>
                <span className="text-white/60">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMER MES + ACLARACIONES (combinados, compactos) */}
      <section className="border-t border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              Tu primer mes
            </p>
            <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.6rem,3.6vw,2.2rem)]">
              De la llamada al primer reel<br /> en 28 días.
            </h2>

            <div className="mt-9 space-y-5">
              {FIRST_MONTH.map(([day, title]) => (
                <div key={day} className="flex items-center gap-5 border-b border-white/8 pb-4">
                  <span className="font-display text-[28px] sm:text-[32px] font-semibold text-white/30 w-12 shrink-0">
                    {day}
                  </span>
                  <span className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.03em]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              Aclaraciones
            </p>
            <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.6rem,3.6vw,2.2rem)]">
              Letra pequeña, <span className="text-white/55">sin trampas.</span>
            </h2>

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {CLARIFICATIONS.map(([title, body]) => (
                <div key={title}>
                  <h3 className="font-inter text-[13px] font-semibold uppercase tracking-[0.04em]">{title}</h3>
                  <p className="mt-1.5 font-inter text-[12.5px] leading-[1.6] text-white/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

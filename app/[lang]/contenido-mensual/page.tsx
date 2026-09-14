import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { format, localizedHref, toLang } from "@/lib/i18n"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].meta.title,
  description: content[lang].meta.description,
  path: "/contenido-mensual",
  keywords: content[lang].meta.keywords,
}))

// Avatar de Meridian ya usado en /avatars para el resto de menciones a este
// cliente en esta misma página (WALL_AVATARS, ACTIVE_CLIENTS). Reemplaza la
// URL rota de Firebase Storage.
const MERIDIAN_AVATAR = "/avatars/meridianbiohealth.jpg"

const WALL_AVATARS = [
  "meridianbiohealth", "lipedemainstituto", "clinicaguinova",
]

export default async function ContenidoMensualPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <p
                data-lux
                style={{ "--lux-delay": "60ms" } as CSSProperties}
                className="hero-fade-up font-inter text-[11px] uppercase tracking-[0.18em] text-white/50"
              >
                {t.hero.kicker}
              </p>

              <h1
                data-lux
                style={{ "--lux-delay": "120ms" } as CSSProperties}
                className="hero-fade-up hero-fade-up-delay-1 mt-5 font-display font-semibold uppercase leading-[0.95] text-[clamp(2.2rem,7vw,5rem)]"
              >
                {t.hero.titleLine1}<br />
                <span className="text-white/55">{t.hero.titleLine2}</span>
              </h1>

              <p
                data-lux
                style={{ "--lux-delay": "200ms" } as CSSProperties}
                className="hero-fade-up hero-fade-up-delay-2 mt-6 max-w-xl font-inter text-[15px] sm:text-[16px] leading-[1.65] text-white/72"
              >
                {t.hero.intro}
              </p>

              <div
                data-lux
                style={{ "--lux-delay": "280ms" } as CSSProperties}
                className="hero-fade-up hero-fade-up-delay-3 mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href={t.hero.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-white px-7 py-4 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-black hover:bg-white/90 transition-colors"
                >
                  {t.hero.whatsappLabel}
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1xAiiGOch24-LI7jAgNQ2LBSZT-KciBsR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-white/25 bg-white/[0.03] px-7 py-4 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-white hover:bg-white/[0.07] transition-colors"
                >
                  {t.hero.dossierLabel}
                </Link>
              </div>
            </div>
            {/* TODO: Dani debe subir un reemplazo real a Vercel Blob para este
                asset (retrato hero de Daniel Acero, antes en Firebase Storage,
                ahora roto). Se quitó la columna de imagen; el hero pasa a una
                sola columna centrada. */}
          </div>
        </div>
      </section>

      {/* TODO: Dani debe subir un reemplazo real a Vercel Blob para este
          asset (banner de logos de empresas, antes en Firebase Storage,
          ahora roto). Se quitó la sección "LOGO STRIP" completa. */}

      {/* STATS HERO — NUEVO */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-8 text-center">
            {t.stats.kicker}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {t.stats.items.map(([num, lab, sub]) => (
              <div key={lab}>
                <p className="font-display text-[40px] sm:text-[56px] font-light leading-none text-[#D4A05A]">{num}</p>
                <p className="mt-3 font-inter text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/70">{lab}</p>
                <p className="mt-1.5 font-inter text-[12px] sm:text-[13px] text-white/45 leading-[1.5]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA INVISIBLE — NUEVO */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
            {t.problem.kicker}
          </p>
          <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,3rem)]">
            {t.problem.titleStart} <span className="text-white/55">{t.problem.titleAccent}</span>
            <br />{t.problem.titleEnd}
          </h2>
          <div className="mt-7 max-w-2xl space-y-4">
            <p className="font-inter text-[15px] sm:text-[16px] leading-[1.7] text-white/72">
              {t.problem.body}
            </p>
            <p className="font-inter text-[15px] sm:text-[16px] leading-[1.7] text-white/50 italic">
              {t.problem.aside}
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
            {t.how.kicker}
          </p>
          <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,3rem)]">
            {t.how.title} <span className="text-white/55">{t.how.titleAccent}</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {t.how.steps.map(([n, title, desc]) => (
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
                {t.caseStudy.kicker}
              </p>
              <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,2.8rem)]">
                {t.caseStudy.titleLine1}<br className="hidden sm:block" /> {t.caseStudy.titleLine2}
              </h2>
              <p className="mt-5 font-inter text-[14px] sm:text-[15px] leading-[1.7] text-white/72 max-w-lg">
                {t.caseStudy.body}
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                {t.caseStudy.stats.map(([n, label]) => (
                  <div key={label} className="border-l border-white/15 pl-3">
                    <p className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold leading-none">{n}</p>
                    <p className="mt-1.5 font-inter text-[10px] uppercase tracking-[0.06em] text-white/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IG-STYLE CARD */}
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
                    <span className="font-inter text-[12px] text-white/55 block">{t.caseStudy.cardMeta}</span>
                  </div>
                  <Link
                    href="https://www.instagram.com/meridianbiohealth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#0095F6] hover:bg-[#1877F2] transition-colors px-4 py-1.5 font-inter text-[12px] font-semibold text-white"
                  >
                    {t.caseStudy.follow}
                  </Link>
                </div>

                {/* Foto. TODO: Dani debe subir un b-roll real (vídeo) a
                    Vercel Blob para este asset — el vídeo de Firebase Storage
                    estaba roto. De momento reutiliza el avatar del cliente. */}
                <div className="relative aspect-[9/16] bg-black">
                  <Image
                    src={MERIDIAN_AVATAR}
                    alt="Meridian Biohealth"
                    fill
                    unoptimized
                    sizes="400px"
                    className="object-cover"
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
                {t.caseStudy.viewFeed} <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WALL DE AUTORIDAD — MOVIDO POST-CASOS DEEP */}
      <section className="border-t border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
                {t.wall.kicker}
              </p>
              <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.6rem,3.6vw,2.4rem)]">
                {t.wall.titleStart} <span className="text-[#D4A05A]">{t.wall.titleAccent}</span>.
              </h2>
            </div>
            <p className="font-inter text-[12px] sm:text-[13px] text-white/45 leading-[1.55] max-w-xs">
              {t.wall.noteLine1}<br />{t.wall.noteLine2}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            {WALL_AVATARS.map((handle) => (
              <a
                key={handle}
                href={`https://instagram.com/${handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square rounded-full overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#D4A05A]/60 transition-colors"
                aria-label={`@${handle}`}
              >
                <Image
                  src={`/avatars/${handle}.jpg`}
                  alt={`@${handle}`}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MÁS CASOS — GRID (CONTINUACIÓN WALL) */}
      <section className="border-b border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.activeClients.map((c) => (
              <a
                key={c.handle}
                href={`https://instagram.com/${c.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:border-[#D4A05A]/40 hover:bg-white/[0.03] transition-colors"
              >
                <Image
                  src={`/avatars/${c.handle}.jpg`}
                  alt={c.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-inter text-[14px] sm:text-[15px] font-semibold leading-tight">{c.name}</p>
                  <p className="font-inter text-[11px] text-white/55 mt-1 leading-snug truncate">@{c.handle}</p>
                  <p className="font-inter text-[10px] text-white/40 mt-0.5 leading-snug">{c.meta}</p>
                  <p className="font-inter text-[9.5px] tracking-[0.12em] uppercase text-[#D4A05A] mt-2 font-semibold">
                    {c.tag}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              {t.plans.kicker}
            </p>
            <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,3rem)]">
              {t.plans.titleLine1}<br /><span className="text-white/55">{t.plans.titleLine2}</span>
            </h2>
          </div>
          <p className="font-inter text-[12px] leading-[1.6] text-white/50 max-w-xs">
            {t.plans.note}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.plans.items.map((plan) => (
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
                <span className="font-display text-[42px] sm:text-[50px] font-semibold leading-none">{plan.price}</span>
                <span className={`font-inter text-[12px] ${plan.highlight ? "text-[#0a0a0a]/55" : "text-white/45"}`}>{t.plans.perMonth}</span>
              </div>

              <ul className={`mt-6 space-y-2 font-inter text-[13px] leading-[1.5] ${plan.highlight ? "text-[#0a0a0a]/85" : "text-white/75"}`}>
                <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> {format(t.plans.reels, { n: plan.reels })}</li>
                <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> {format(t.plans.pubs, { n: plan.pubs })}</li>
                <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> {format(t.plans.session, { session: plan.session })}</li>
                {plan.extra && <li className="flex gap-2"><span className={plan.highlight ? "text-[#0a0a0a]/40" : "text-white/35"}>·</span> {plan.extra}</li>}
              </ul>

              <Link
                href={localizedHref(lang, "/contacto")}
                className={
                  plan.highlight
                    ? "mt-7 inline-flex justify-center rounded-xl bg-[#0a0a0a] text-white px-5 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-[#1c1917] transition-colors"
                    : "mt-7 inline-flex justify-center rounded-xl border border-white/25 bg-white/[0.03] px-5 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] text-white hover:bg-white/[0.07] transition-colors"
                }
              >
                {t.plans.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* VOLUMEN */}
        <div className="mt-5 rounded-3xl border border-white/12 bg-white/[0.02] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-white/45">{t.plans.volumeKicker}</p>
            <h3 className="mt-1.5 font-display text-[20px] sm:text-[24px] font-semibold uppercase leading-tight">
              {t.plans.volumeTitle}
            </h3>
          </div>
          <Link
            href={localizedHref(lang, "/contacto")}
            className="shrink-0 inline-flex justify-center rounded-xl border border-white/30 bg-white/[0.04] px-6 py-3 font-inter text-[13px] font-semibold uppercase tracking-[0.06em] hover:bg-white/[0.08] transition-colors"
          >
            {t.plans.volumeCta}
          </Link>
        </div>

        {/* TODO INCLUIDO */}
        <div className="mt-10 rounded-2xl border border-white/12 bg-white/[0.02] p-6 text-center">
          <p className="font-inter text-[13px] sm:text-[14px] leading-[1.6] text-white/70">
            <span className="text-white font-semibold">{t.plans.allInLead}</span> {t.plans.allInText}
          </p>
        </div>

        {/* MODALIDADES DE PAGO */}
        <div className="mt-4 rounded-2xl border border-white/12 bg-white/[0.02] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-inter text-[13px] sm:text-[14px] text-white/70">
            <span className="text-white font-semibold">{t.plans.quarterlyLead}</span> {t.plans.quarterlyText}
          </p>
          <span className="font-inter text-[12px] text-white/45">{t.plans.quarterlyNote}</span>
        </div>
      </section>

      {/* BONOS — NUEVO */}
      <section className="border-t border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              {t.bonuses.kicker}
            </p>
            <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,2.6rem)]">
              {t.bonuses.titleLine1}<br /><span className="text-white/55">{t.bonuses.titleLine2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.bonuses.items.map((bonus) => (
              <div key={bonus.title} className="rounded-3xl border border-white/12 bg-[#0a0a0a] p-7">
                <div className="h-1 w-12 bg-white/30 mb-6" />
                <h3 className="font-inter text-[14px] font-semibold uppercase tracking-[0.08em] mb-3">{bonus.title}</h3>
                <p className="font-inter text-[13px] leading-[1.6] text-white/65 mb-5">{bonus.desc}</p>
                <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-white/40">{format(t.bonuses.valueLabel, { value: bonus.value })}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-inter text-[13px] text-white/55">
            {t.bonuses.totalLabel} <span className="text-white font-semibold">{t.bonuses.totalValue}</span>
          </p>
        </div>
      </section>

      {/* CAPACIDAD LIMITADA — NUEVO */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/[0.03] px-4 py-2 font-inter text-[10px] uppercase tracking-[0.2em] text-white/70 mb-8">
            {t.capacity.badge}
          </span>
          <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,3rem)]">
            {t.capacity.titleLine1}<br /><span className="text-white/55">{t.capacity.titleLine2}</span>
          </h2>
          <p className="mt-7 font-inter text-[15px] sm:text-[16px] leading-[1.65] text-white/70 max-w-2xl mx-auto">
            {t.capacity.bodyStart}<span className="text-white font-semibold">{t.capacity.bodyStrong}</span>{t.capacity.bodyEnd}
          </p>
        </div>
      </section>

      {/* PRIMER MES — TIMELINE VISUAL */}
      <section className="border-t border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl mb-14">
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              {t.firstMonth.kicker}
            </p>
            <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.8rem,4.5vw,3rem)]">
              {t.firstMonth.titleLine1}<br /><span className="text-white/55">{t.firstMonth.titleLine2}</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-[#D4A05A]/20 via-[#D4A05A]/60 to-[#D4A05A]/20" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
              {t.firstMonth.items.map(([day, title]) => (
                <div key={day} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  {/* Nodo */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4A05A]/40 bg-[#0a0a0a]">
                    <span className="font-display text-[20px] font-semibold text-[#D4A05A]">{day}</span>
                  </div>
                  <p className="mt-2 font-inter text-[10px] uppercase tracking-[0.14em] text-white/35">{format(t.firstMonth.dayLabel, { day })}</p>
                  <h3 className="mt-2 font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.03em] leading-snug">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACLARACIONES */}
      <section className="border-t border-white/[0.06] bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              {t.clarifications.kicker}
            </p>
            <h2 className="font-display font-semibold uppercase leading-[1.05] text-[clamp(1.6rem,3.6vw,2.2rem)]">
              {t.clarifications.title} <span className="text-white/55">{t.clarifications.titleAccent}</span>
            </h2>

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
              {t.clarifications.items.map(([title, body]) => (
                <div key={title}>
                  <h3 className="font-inter text-[13px] font-semibold uppercase tracking-[0.04em]">{title}</h3>
                  <p className="mt-1.5 font-inter text-[12.5px] leading-[1.6] text-white/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

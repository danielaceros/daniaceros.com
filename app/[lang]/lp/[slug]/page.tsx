// app/[lang]/lp/[slug]/page.tsx
// Plantilla única de las landings de anuncios (/lp/<slug>, solo ES). Datos por anuncio: lib/landings.ts.
// Funnel aparte de la web-portfolio: cabecera mínima (Header.tsx), sin enlaces de navegación, noindex y fuera
// del sitemap. Orden pensado para móvil: gancho del reel → VSL → expertise → dolor → portfolio → formulario.
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import VslSection from "@/components/VslSection"
import ContactCTA from "@/components/ContactCTA"
import PortfolioMarquee from "@/components/PortfolioMarquee"
import LandingCta from "@/components/landing/LandingCta"
import LandingTracking from "@/components/landing/LandingTracking"
import { getProjects } from "@/data/projects"
import { buildMetadata } from "@/lib/seo"
import { getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { LANDINGS, getLanding } from "@/lib/landings"
import { VSL } from "@/lib/media"

type Props = { params: Promise<{ lang: string; slug: string }> }

// Solo los slugs de lib/landings.ts; slugs desconocidos → 404. Mismo patrón que portfolio/[slug]: se generan
// para los dos idiomas y la versión /en/lp/... responde notFound() (solo existen en ES).
export const dynamicParams = false

export function generateStaticParams() {
  return LANDINGS.map((landing) => ({ slug: landing.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const landing = getLanding(slug)
  if (!landing) return {}
  return {
    ...buildMetadata({
      title: landing.metaTitle,
      description: landing.subtitle,
      path: `/lp/${landing.slug}`,
      noIndex: true,
      translated: false,
    }),
    // metaTitle ya lleva " | Dani Acero": sin el sufijo de la plantilla raíz.
    title: { absolute: landing.metaTitle },
  }
}

const SECTION_TITLE = "font-display text-[26px] font-semibold uppercase leading-[1.04] sm:text-[34px]"
const LEGAL_LINK =
  "inline-flex min-h-[44px] items-center rounded transition-colors duration-300 hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

export default async function LandingPage({ params }: Props) {
  const { lang: rawLang, slug } = await params
  const lang = toLang(rawLang)
  const landing = getLanding(slug)
  if (lang !== "es" || !landing) notFound()

  const footer = getDictionary(lang).contact.footer
  const portfolioItems = getProjects(lang).map(({ slug: projectSlug, title, video, poster }) => ({
    slug: projectSlug,
    title,
    video,
    poster,
  }))

  return (
    <main className="text-white">
      <LandingTracking lpId={landing.id} />

      {/* 1–2. Gancho del reel + VSL. Mismo encaje que el hero con vídeo de la home: el póster del VSL es el LCP. */}
      <section className="relative w-full overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-10">
        <div className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6">
          <div className="flex w-full max-w-4xl flex-col items-center">
            <h1 className="font-display text-[clamp(1.85rem,7.2vw,3.6rem)] font-semibold uppercase leading-[1] text-balance">
              {landing.title}
            </h1>
            <p className="mt-4 max-w-2xl px-1 font-inter text-[14px] leading-[1.7] text-white/74 text-balance sm:text-[16px]">
              {landing.subtitle}
            </p>
          </div>
          {VSL[lang] ? (
            <div className="mt-7 w-full sm:mt-9">
              <VslSection lang={lang} hideTitle inline formHref="#contacto" />
            </div>
          ) : null}
          <LandingCta lpId={landing.id} position="hero" label={landing.ctaLabel} className="mt-7 sm:mt-9" />
        </div>
      </section>

      {/* 3. Expertise, con lo que menciona ese reel */}
      <section className="page-container pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className={SECTION_TITLE}>Quién graba tu evento</h2>
          <ul className="mt-6 border-t border-white/10">
            {landing.expertise.map((line) => (
              <li
                key={line}
                className="flex items-baseline gap-4 border-b border-white/10 py-4 font-inter text-[15px] leading-[1.6] text-white/86 sm:text-[16px]"
              >
                <span aria-hidden className="h-px w-5 shrink-0 translate-y-[-0.3em] bg-white/70" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. El dolor concreto del reel */}
      <section className="page-container pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-8 sm:px-10 sm:py-10">
          <h2 className={SECTION_TITLE}>¿Te suena?</h2>
          <ul className="mt-6 space-y-4">
            {landing.pains.map((pain) => (
              <li key={pain} className="flex gap-3 font-inter text-[15px] leading-[1.7] text-white/80 sm:text-[16px]">
                <span aria-hidden className="mt-[0.85em] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span>{pain}</span>
              </li>
            ))}
          </ul>
          <LandingCta lpId={landing.id} position="pains" label={landing.ctaLabel} className="mt-8 w-full sm:w-auto" />
        </div>
      </section>

      {/* 5. Portfolio como prueba. Modal (no enlaza a las fichas: no saca del funnel); vídeos diferidos. */}
      <section className="pb-4">
        <div className="page-container">
          <h2 className={`${SECTION_TITLE} text-center`}>Trabajos recientes</h2>
        </div>
        <div className="mt-6 sm:mt-8">
          <PortfolioMarquee items={portfolioItems} size="xl" mode="modal" scrollable lang={lang} />
        </div>
      </section>

      {/* 6. Formulario GHL (redirige a /gracias, donde LeadAttribution atribuye el lead a esta landing) */}
      <div id="contacto">
        <ContactCTA
          lang={lang}
          mobileFormFirst
          hideFooter
          forwardQueryParams
          sectionClassName="mt-10 pb-8 sm:mt-14 sm:pb-10"
        />
      </div>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-6 text-center sm:px-6">
        <p className="flex flex-wrap items-center justify-center gap-x-2 font-inter text-[12px] lowercase text-white/45">
          <Link href={localizedHref(lang, "/aviso-legal")} prefetch={false} className={LEGAL_LINK}>
            {footer.legalNotice}
          </Link>
          <span aria-hidden>·</span>
          <Link href={localizedHref(lang, "/politica-de-cookies")} prefetch={false} className={LEGAL_LINK}>
            {footer.cookies}
          </Link>
          <span aria-hidden>·</span>
          <Link href={localizedHref(lang, "/politica-de-privacidad")} prefetch={false} className={LEGAL_LINK}>
            {footer.privacy}
          </Link>
        </p>
      </footer>
    </main>
  )
}

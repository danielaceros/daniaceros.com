// app/[lang]/eventos/[slug]/propuesta/page.tsx
// Sublanding de propuesta para expositores de IFEMA: /eventos/ifema/propuesta. Es el enlace que Dani manda a cada
// empresa tras un primer contacto: reel de IFEMA + VSL (misma apertura que /eventos/ifema), packs con precio,
// qué incluye, por qué compensa, referencias y formulario. Se personaliza con #Empresa~Feria (Personalize.tsx).
// Solo ES, noindex, fuera del sitemap. Solo existe para slugs con propuesta (hoy: ifema).
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import VslSection from "@/components/VslSection"
import ClientLogosTicker from "@/components/landing/ClientLogosTicker"
import ContactCTA from "@/components/ContactCTA"
import PortfolioMarquee from "@/components/PortfolioMarquee"
import LandingCta from "@/components/landing/LandingCta"
import LandingGreeting from "@/components/landing/LandingGreeting"
import { PersonalizeProvider, Rich } from "@/components/landing/Personalize"
import LandingReel from "@/components/landing/LandingReel"
import LandingTracking from "@/components/landing/LandingTracking"
import { getProjects } from "@/data/projects"
import { buildMetadata } from "@/lib/seo"
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/contact"
import { getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { getLanding } from "@/lib/landings"
import { VSL } from "@/lib/media"

type Props = { params: Promise<{ lang: string; slug: string }> }

const SLUGS_CON_PROPUESTA = ["ifema"]

export const dynamicParams = false

export function generateStaticParams() {
  return SLUGS_CON_PROPUESTA.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!SLUGS_CON_PROPUESTA.includes(slug)) return {}
  return {
    ...buildMetadata({
      title: "Propuesta de vídeo para tu stand en IFEMA | Dani Acero",
      description: "Packs de grabación para expositores de IFEMA: aftermovie, fotos y material en bruto para meses.",
      path: `/eventos/${slug}/propuesta`,
      noIndex: true,
      translated: false,
    }),
    title: { absolute: "Propuesta de vídeo para tu stand en IFEMA | Dani Acero" },
  }
}

const SECTION_TITLE = "font-display text-[26px] font-semibold uppercase leading-[1.04] text-balance sm:text-[36px]"
const EYEBROW = "font-inter text-[12px] font-semibold uppercase tracking-[0.18em] text-white/55"
const LEGAL_LINK =
  "inline-flex min-h-[44px] items-center rounded transition-colors duration-300 hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

// Packs. Los precios los fija Dani (sin IVA, cerrados). Más días: a consultar.
const PACKS = [
  {
    id: "un-dia",
    name: "Tu stand, un día",
    tagline: "Un día de feria, bien contado",
    price: "600",
    features: [
      "Hasta 2 horas de cobertura en tu stand",
      "Aftermovie editado, en horizontal y en vertical",
      "50 fotografías editadas",
      "Entrevistas al fundador, clientes y equipo",
      "Todo el vertical y los recursos en bruto, para reutilizar",
    ],
    reco: false,
  },
  {
    id: "dos-dias",
    name: "Tu feria, dos días",
    tagline: "La feria entera, con sus dos caras",
    price: "1.000",
    features: [
      "Hasta 2 horas de cobertura cada día",
      "Todo lo del pack de un día",
      "Un solo aftermovie con la feria completa, en horizontal y en vertical",
      "Más material de stand, visitantes y equipo para vuestras redes y futuras campañas",
    ],
    reco: true,
  },
] as const

// Qué te llevas, visual: un número grande + qué es.
const LLEVAS = [
  { big: "2", label: "aftermovies", detail: "horizontal para web y vertical para redes, editados" },
  { big: "50", label: "fotos editadas", detail: "listas para prensa, LinkedIn y tu web" },
  { big: "3", label: "voces", detail: "fundador, clientes y equipo, entrevistados en tu stand" },
  { big: "∞", label: "material en bruto", detail: "vertical y recursos para publicar durante meses" },
] as const

const POR_QUE = [
  {
    title: "Tu stand deja huella",
    text: "Cuando se desmonta, el stand desaparece. El vídeo y las fotos se quedan: prueba de que estuviste, y de cómo.",
  },
  {
    title: "Contenido para casi 3 meses",
    text: "Lo que graba una mañana de feria da para publicar semana a semana mucho después de que cierre IFEMA.",
  },
  {
    title: "Se reutiliza el año que viene",
    text: "Las entrevistas y los recursos valen para la próxima edición, para tu web y para tus acciones comerciales.",
  },
  {
    title: "Sin que muevas un dedo",
    text: "Llego, grabo y me voy. Tú sigues atendiendo a tus clientes: no hay que coordinar nada ni preparar guiones.",
  },
] as const

// Referencias reales de eventos cubiertos. Solo hechos de lo contratado; nada de cifras ni citas inventadas.
const REFERENCIAS = [
  {
    name: "IFEMA Madrid",
    tag: "Recinto",
    text: "Pieza institucional para el recinto ferial, con la escala real de sus eventos.",
  },
  {
    name: "VIAVI",
    tag: "VETECO · IFEMA",
    text: "Sus 30 años en el sector: afterwork y feria en dos jornadas, con aftermovie H+V, entrevista, reels y fotos.",
  },
  {
    name: "A-OK Motors",
    tag: "VETECO · IFEMA",
    text: "Aftermovie en horizontal y vertical y 50 fotografías editadas de su stand.",
  },
  {
    name: "Edugenia",
    tag: "Evento · noviembre 2026",
    text: "Cobertura de evento con fotografía editada y material de vídeo.",
  },
] as const

export default async function PropuestaPage({ params }: Props) {
  const { lang: rawLang, slug } = await params
  const lang = toLang(rawLang)
  const landing = getLanding(slug)
  if (lang !== "es" || !landing || !SLUGS_CON_PROPUESTA.includes(slug)) notFound()

  const footer = getDictionary(lang).contact.footer
  const portfolioItems = getProjects(lang).map(({ slug: projectSlug, title, video, poster }) => ({
    slug: projectSlug,
    title,
    video,
    poster,
  }))
  const idx = portfolioItems.findIndex((item) => item.slug === landing.featuredProject)
  if (idx > 0) portfolioItems.unshift(...portfolioItems.splice(idx, 1))
  const reel = portfolioItems.find((item) => item.slug === landing.featuredProject)

  return (
    <PersonalizeProvider>
      <main className="text-white">
        <LandingTracking lpId={landing.id} />

        {/* 1. Hero: titular + reel de IFEMA, después marcas y VSL (misma apertura que /eventos/ifema). */}
        <section className="relative w-full overflow-hidden pb-8 pt-8 sm:pt-10 lg:pb-12">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 text-center sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <p className={EYEBROW}>Propuesta · expositores de IFEMA</p>
              <h1 className="mt-4 font-display text-[clamp(1.85rem,7.2vw,3.6rem)] font-semibold uppercase leading-[1] text-balance lg:text-[clamp(2.4rem,3.6vw,3.6rem)]">
                <Rich text="Que el stand de {empresa|tu empresa|b} se convierta en contenido para 3 meses" />
              </h1>
              <p className="mt-4 max-w-2xl px-1 font-inter text-[14px] leading-[1.7] text-white/74 text-balance sm:text-[16px] lg:max-w-xl lg:px-0 lg:text-[17px]">
                Grabo tu stand, a tu equipo y a tus clientes en pista. Te llevas un aftermovie, fotos y material para
                publicar mucho después de la feria.
              </p>
              <a
                href="#packs"
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/25 bg-white px-8 py-3 text-center font-inter text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-black transition-transform duration-300 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[56px] sm:px-10 sm:text-[13px]"
              >
                Ver los packs y precios
              </a>
            </div>
            {reel ? (
              <LandingReel
                src={reel.video}
                poster={reel.poster}
                label="Reel · IFEMA Madrid"
                className="lg:mx-0 lg:max-w-[340px]"
              />
            ) : null}
          </div>
        </section>

        <section className="relative z-10 flex flex-col items-center px-4 pb-12 text-center sm:px-6 sm:pb-16">
          <ClientLogosTicker />
          {VSL[lang] ? (
            <div className="mt-8 w-full sm:mt-10">
              <LandingGreeting className="mb-4 font-display text-[clamp(1.25rem,5.2vw,1.9rem)] font-semibold uppercase leading-[1.1] text-balance sm:mb-5" />
              <VslSection lang={lang} hideTitle inline formOnly reveal={false} formHref="#contacto" />
            </div>
          ) : null}
        </section>

        {/* 2. Packs con precio: el centro de la página. El de dos días va destacado. */}
        <section id="packs" className="page-container scroll-mt-6 pb-14 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <p className={`${EYEBROW} text-center`}>Packs · precio cerrado, sin sorpresas</p>
            <h2 className={`${SECTION_TITLE} mt-3 text-center`}>Elige cómo grabamos tu feria</h2>
            <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
              {PACKS.map((pack) => (
                <article
                  key={pack.id}
                  className={`relative flex flex-col rounded-3xl border p-6 sm:p-8 ${
                    pack.reco
                      ? "border-white/45 bg-white/[0.07] shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
                      : "border-white/15 bg-white/[0.03]"
                  }`}
                >
                  {pack.reco ? (
                    <span className="absolute -top-3 left-6 rounded-full bg-white px-4 py-1 font-inter text-[11px] font-bold uppercase tracking-[0.14em] text-black sm:left-8">
                      Recomendado
                    </span>
                  ) : null}
                  <h3 className="font-display text-[22px] font-semibold uppercase leading-[1.1] sm:text-[26px]">
                    {pack.name}
                  </h3>
                  <p className="mt-1 font-inter text-[14px] text-white/62">{pack.tagline}</p>
                  <p className="mt-6 flex items-baseline gap-2 font-display">
                    <span className="text-[52px] font-semibold leading-none sm:text-[64px]">{pack.price}€</span>
                    <span className="font-inter text-[13px] text-white/60">+ IVA · precio cerrado</span>
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-white/12 pt-6">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex gap-3 font-inter text-[15px] leading-[1.55] text-white/88">
                        <span aria-hidden className="mt-[0.15em] font-semibold text-white">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <LandingCta
                    lpId={landing.id}
                    position={`pack-${pack.id}`}
                    label="Reservar fecha"
                    className={`mt-8 w-full ${pack.reco ? "" : "!border-white/30 !bg-transparent !text-white hover:!bg-white/10"}`}
                  />
                </article>
              ))}
            </div>
            <div className="mt-5 flex flex-col items-center gap-5 rounded-3xl border border-dashed border-white/30 px-6 py-7 text-center sm:mt-6 sm:flex-row sm:justify-between sm:px-10 sm:text-left md:gap-8">
              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  Pack a medida · a consultar
                </p>
                <h3 className="mt-2 font-display text-[22px] font-semibold uppercase leading-[1.1] text-balance sm:text-[26px]">
                  ¿Quieres cubrir todos los días de tu feria?
                </h3>
                <p className="mt-2 max-w-xl font-inter text-[14px] leading-[1.65] text-white/70 sm:text-[15px]">
                  Las fechas de IFEMA se llenan rápido y mi agenda también. Dime cuántos días vas a estar y te
                  preparo una propuesta a medida.
                </p>
              </div>
              <LandingCta
                lpId={landing.id}
                position="pack-medida"
                label="Consultar disponibilidad"
                className="w-full shrink-0 sm:w-auto"
              />
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-center font-inter text-[13px] leading-[1.65] text-white/50">
              La edición del material en bruto no está incluida: es para que lo uses tú o tu equipo cuando quieras.
            </p>
          </div>
        </section>

        {/* 3. Qué te llevas: cifras grandes, de un vistazo. */}
        <section className="page-container pb-14 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <h2 className={`${SECTION_TITLE} text-center`}>Qué te llevas</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
              {LLEVAS.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col rounded-2xl border border-white/12 bg-white/[0.03] p-5 sm:p-6"
                >
                  <span className="font-display text-[44px] font-semibold leading-none sm:text-[56px]">{item.big}</span>
                  <span className="mt-3 font-inter text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
                    {item.label}
                  </span>
                  <span className="mt-2 font-inter text-[13px] leading-[1.55] text-white/65 sm:text-[14px]">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Por qué merece la pena: el valor, en cuatro frases claras. */}
        <section className="page-container pb-14 sm:pb-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-10 sm:px-12 sm:py-14">
            <h2 className={SECTION_TITLE}>Por qué merece la pena</h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
              {POR_QUE.map((item) => (
                <li key={item.title}>
                  <h3 className="font-display text-[19px] font-semibold uppercase leading-[1.15] sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-inter text-[15px] leading-[1.7] text-white/74 sm:text-[16px]">{item.text}</p>
                </li>
              ))}
            </ul>
            <LandingCta lpId={landing.id} position="valor" label="Quiero este pack" className="mt-10 w-full sm:w-auto" />
          </div>
        </section>

        {/* 5. Referencias. */}
        <section className="page-container pb-14 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <h2 className={`${SECTION_TITLE} text-center`}>Ya lo he hecho</h2>
            <p className="mx-auto mt-3 max-w-xl text-center font-inter text-[15px] leading-[1.65] text-white/65">
              Eventos y ferias cubiertos hace poco, con el mismo tipo de entregables que ves arriba.
            </p>
            <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {REFERENCIAS.map((ref) => (
                <li key={ref.name} className="rounded-2xl border border-white/12 bg-white/[0.03] p-5 sm:p-6">
                  <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    {ref.tag}
                  </p>
                  <h3 className="mt-2 font-display text-[22px] font-semibold uppercase leading-[1.1]">{ref.name}</h3>
                  <p className="mt-3 font-inter text-[14px] leading-[1.65] text-white/72">{ref.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Trabajos recientes. Modal: no saca del funnel. */}
        <section className="pb-4">
          <div className="page-container">
            <h2 className={`${SECTION_TITLE} text-center`}>Trabajos recientes</h2>
          </div>
          <div className="mt-6 sm:mt-8">
            <PortfolioMarquee items={portfolioItems} size="xl" mode="modal" scrollable lang={lang} />
          </div>
          <div className="mt-8 flex justify-center px-4 sm:mt-10">
            <Link
              href={localizedHref(lang, "https://www.daniaceros.com/")}
              target="_blank"
              rel="noopener"
              prefetch={false}
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/30 px-8 py-3 text-center font-inter text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[56px] sm:px-10 sm:text-[13px]"
            >
              Ver más trabajos
            </Link>
          </div>
        </section>

        {/* 7. Formulario + contacto directo. */}
        <div id="contacto">
          <p className="mx-auto mt-10 max-w-xl px-4 text-center font-inter text-[14px] leading-[1.6] text-white/62 sm:mt-14">
            Escríbeme directamente:{" "}
            <a
              href={whatsappUrl("Hola Dani, he visto la propuesta de IFEMA y me gustaría reservar fecha para mi stand.")}
              target="_blank"
              rel="noopener"
              className="underline decoration-white/40 underline-offset-[0.25em] transition-colors hover:text-white"
            >
              WhatsApp
            </a>{" "}
            ·{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline decoration-white/40 underline-offset-[0.25em] transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <ContactCTA
            lang={lang}
            mobileFormFirst
            hideFooter
            formPreloadMargin="1000px"
            formMountAfterPaint
            sectionClassName="mt-6 pb-8 sm:mt-8 sm:pb-10"
          />
        </div>

        <footer className="mx-auto w-full max-w-6xl px-4 pb-6 text-center sm:px-6">
          <p className="flex flex-wrap items-center justify-center gap-x-2 font-inter text-[12px] lowercase text-white/45">
            <Link href={localizedHref(lang, "/aviso-legal")} prefetch={false} target="_blank" rel="noopener" className={LEGAL_LINK}>
              {footer.legalNotice}
            </Link>
            <span aria-hidden>·</span>
            <Link href={localizedHref(lang, "/politica-de-cookies")} prefetch={false} target="_blank" rel="noopener" className={LEGAL_LINK}>
              {footer.cookies}
            </Link>
            <span aria-hidden>·</span>
            <Link href={localizedHref(lang, "/politica-de-privacidad")} prefetch={false} target="_blank" rel="noopener" className={LEGAL_LINK}>
              {footer.privacy}
            </Link>
          </p>
        </footer>
      </main>
    </PersonalizeProvider>
  )
}

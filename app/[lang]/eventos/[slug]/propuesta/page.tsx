// app/[lang]/eventos/[slug]/propuesta/page.tsx
// Sublanding de propuesta para expositores de IFEMA: /eventos/ifema/propuesta. Es el enlace que Dani manda a cada
// empresa tras un primer contacto: reel de IFEMA + VSL (misma apertura que /eventos/ifema), packs con precio,
// qué incluye, por qué compensa, referencias y formulario. Se personaliza con #Empresa~Feria (Personalize.tsx).
// Solo ES, noindex, fuera del sitemap. Solo existe para slugs con propuesta (hoy: ifema).
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import VslSection from "@/components/VslSection"
import ClientLogosTicker from "@/components/landing/ClientLogosTicker"
import PortfolioMarquee from "@/components/PortfolioMarquee"
import WhatsappCta from "@/components/landing/WhatsappCta"
import LandingGreeting from "@/components/landing/LandingGreeting"
import { PersonalizeProvider, Rich } from "@/components/landing/Personalize"
import LandingReel from "@/components/landing/LandingReel"
import LandingTracking from "@/components/landing/LandingTracking"
import StickyReserveBar from "@/components/landing/StickyReserveBar"
import ShowcaseTabs, { type ShowcaseItem } from "@/components/landing/ShowcaseTabs"
import ReferenceCards, { type ReferenceItem } from "@/components/landing/ReferenceCards"
import { getProjects } from "@/data/projects"
import { buildMetadata } from "@/lib/seo"
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
const EYEBROW = "font-inter text-[12px] font-semibold uppercase tracking-[0.18em] text-white/72"
const LEGAL_LINK =
  "inline-flex min-h-[44px] items-center rounded transition-colors duration-300 hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

// Pack único: un día de feria. Quien quiera cubrir más días habla con Dani (a medida, sin precio publicado).
const PACKS = [
  {
    id: "un-dia",
    name: "Tu stand, un día",
    tagline: "2 horas en tu stand, bien contadas",
    price: "600",
    features: [
      "Hasta 2 horas de cobertura en tu stand",
      "Aftermovie editado, en horizontal y en vertical",
      "50 fotografías editadas",
      "Entrevistas al fundador, clientes y equipo",
      "Todo el vertical y los recursos en bruto, para reutilizar",
    ],
    reco: true,
  },
] as const

// Qué te llevas, visual: un número grande + qué es.
const LLEVAS = [
  { big: "H+V", label: "aftermovie", detail: "horizontal para web y vertical para redes, editado" },
  { big: "50", label: "fotos editadas", detail: "listas para prensa, LinkedIn y tu web" },
  { big: "3", label: "voces", detail: "fundador, clientes y equipo, entrevistados en tu stand" },
  { big: "100%", label: "del bruto", detail: "todo el vertical y los recursos de la sesión, tuyos para reutilizar" },
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

// Aftermovies finales ya montados (versión web 720p en Vercel Blob). Se añaden aquí según estén aprobados.
const AFTERMOVIES: ShowcaseItem[] = [
  {
    id: "serdatia",
    label: "Serdatia",
    context: "Serdatia · Tech Show Madrid · IFEMA",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/serdatia-techshow-web-rbOR1RQXoqazTu27GWThutst8Zjjh3.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/serdatia-techshow-poster-PQ1VoUYsvZgsR44qaZSuEuBPpIX1M2.jpg",
  },
  {
    id: "aok",
    label: "A-OK Motors",
    context: "A-OK Motors · VETECO · IFEMA",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-ferias-web.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-ferias-poster.jpg",
  },
]

// Referencias con resumen en modal. SOLO material editado y de calidad (aftermovies finales y fotos de la entrega),
// nunca brutos ni fragmentos sin editar: lo ve el cliente final. Dani autorizó nombrarlos el 13-nov-2026.
// Las entrevistas no entran hasta que estén editadas. Los aftermovies salen de AFTERMOVIES (mismo vídeo).
const VIDEO_DE = (id: string) => AFTERMOVIES.find((item) => item.id === id)
const REFERENCIAS: ReferenceItem[] = [
  {
    id: "aok",
    name: "A-OK Motors",
    tag: "VETECO · IFEMA",
    text: "Contenido de su stand en foto y vídeo para sus redes.",
    logo: "/logos/ferias/aok.png",
    photo: "/img/ferias/aok.jpg",
    video: VIDEO_DE("aok") && { src: VIDEO_DE("aok")!.src, poster: VIDEO_DE("aok")!.poster },
    photos: ["/img/ferias/galeria/aok-01.jpg", "/img/ferias/galeria/aok-02.jpg"],
  },
  {
    id: "viavi",
    name: "VIAVI",
    tag: "VETECO · IFEMA",
    text: "Más de 10 entrevistas a fundadores, clientes y empleados para celebrar sus 30 años: contenido para varios meses.",
    logo: "/logos/ferias/viavi.png",
    photo: "/img/ferias/viavi.jpg",
    pos: "object-top",
    photos: ["/img/ferias/galeria/viavi-01.jpg", "/img/ferias/galeria/viavi-02.jpg"],
  },
  {
    id: "edugenia",
    name: "Edugenia",
    tag: "SIMO Educación · IFEMA",
    text: "Startup de menos de un año: foto y vídeo para sus redes, entrevistas y demos de producto en su propio stand.",
    logo: "/logos/ferias/edugenia.svg",
    photo: "/img/ferias/edugenia.jpg",
    photos: ["/img/ferias/galeria/edugenia-01.jpg", "/img/ferias/galeria/edugenia-02.jpg"],
  },
  {
    id: "serdatia",
    name: "Serdatia",
    tag: "Tech Show Madrid · IFEMA",
    text: "Empresa nueva del grupo Seresco: contenido para LinkedIn y TikTok con el que hicieron su lanzamiento.",
    logo: "/logos/ferias/serdatia.png",
    photo: "/img/ferias/serdatia.jpg",
    video: VIDEO_DE("serdatia") && { src: VIDEO_DE("serdatia")!.src, poster: VIDEO_DE("serdatia")!.poster },
    photos: ["/img/ferias/galeria/serdatia-01.jpg"],
  },
]

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
        <section id="propuesta-hero" className="relative w-full overflow-hidden pb-8 pt-8 sm:pt-10 lg:pb-12">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 text-center sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <p className={EYEBROW}>Propuesta · expositores de IFEMA</p>
              <h1 className="mt-4 font-display text-[clamp(1.85rem,7.2vw,3.6rem)] font-semibold uppercase leading-[1] text-balance lg:text-[clamp(2.4rem,3.6vw,3.6rem)]">
                <Rich text="Que el stand de {empresa|tu empresa|b} se convierta en contenido para casi 3 meses" />
              </h1>
              <p className="mt-4 max-w-2xl px-1 font-inter text-[14px] leading-[1.7] text-white/74 text-balance sm:text-[16px] lg:max-w-xl lg:px-0 lg:text-[17px]">
                Grabo tu stand, a tu equipo y a tus clientes en pista. Te llevas un aftermovie, fotos y material para
                publicar mucho después de la feria.
              </p>
              <p className="mt-5 font-inter text-[15px] leading-[1.5] text-white/85">
                <strong className="font-semibold text-white">Pack de un día desde 600 € + IVA</strong> · precio cerrado ·
                aftermovie y 50 fotos editadas
              </p>
              <WhatsappCta lpId={landing.id} position="hero" label="Reservar mi fecha por WhatsApp" className="mt-4" />
            </div>
            {reel ? (
              <LandingReel
                src={reel.video}
                srcMobile="https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/ifema-tranjis-mobile.mp4"
                poster={reel.poster}
                label="Reel · IFEMA Madrid"
                className="!max-w-[220px] sm:!max-w-[300px] lg:mx-0 lg:!max-w-[340px]"
              />
            ) : null}
          </div>
        </section>

        <section className="relative z-10 flex flex-col items-center px-4 pb-12 text-center sm:px-6 sm:pb-16">
          <ClientLogosTicker />
          {VSL[lang] ? (
            <div className="mt-8 w-full sm:mt-10">
              <LandingGreeting className="mb-4 font-display text-[clamp(1.25rem,5.2vw,1.9rem)] font-semibold uppercase leading-[1.1] text-balance sm:mb-5" />
              <VslSection lang={lang} hideTitle inline whatsappOnly reveal={false} />
            </div>
          ) : null}
        </section>

        {/* 2. Packs con precio: el centro de la página. El de dos días va destacado. */}
        <section id="packs" className="page-container scroll-mt-6 pb-14 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <p className={`${EYEBROW} text-center`}>Precio cerrado, sin sorpresas</p>
            <h2 className={`${SECTION_TITLE} mt-3 text-center`}><Rich text="Tu stand en {feria|IFEMA|b}, grabado y listo para publicar" /></h2>
            <div className="mx-auto mt-8 grid max-w-xl gap-5 sm:mt-10">
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
                  <p className="mt-1 font-inter text-[14px] text-white/75">{pack.tagline}</p>
                  <p className="mt-6 flex items-baseline gap-2 font-display">
                    <span className="font-inter text-[15px] font-semibold uppercase tracking-[0.1em] text-white/75">desde</span>
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
                  <p className="mt-5 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 font-inter text-[14px] leading-[1.55] text-white/80">
                    <strong className="font-semibold text-white">Este es el pack base.</strong> Si quieres más
                    entregables o más cosas, se añaden: dímelo y lo ajustamos a lo que necesites.
                  </p>
                  <WhatsappCta lpId={landing.id} position={`pack-${pack.id}`} label="Reservar mi fecha por WhatsApp" className="mt-8 w-full" />
                </article>
              ))}
            </div>
            <div className="mt-5 flex flex-col items-center gap-5 rounded-3xl border border-dashed border-white/30 px-6 py-7 text-center sm:mt-6 sm:flex-row sm:justify-between sm:px-10 sm:text-left md:gap-8">
              <div>
                <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.16em] text-white/72">
                  Si no quieres perderte nada · habla conmigo
                </p>
                <h3 className="mt-2 font-display text-[22px] font-semibold uppercase leading-[1.1] text-balance sm:text-[26px]">
                  ¿Quieres cubrir todos los días de tu feria?
                </h3>
                <p className="mt-2 max-w-xl font-inter text-[14px] leading-[1.65] text-white/70 sm:text-[15px]">
                  Esta es una solución de un día. Si no quieres perderte absolutamente nada, habla conmigo: las
                  fechas de IFEMA se llenan rápido y mi agenda también.
                </p>
              </div>
              <WhatsappCta lpId={landing.id} position="pack-medida" intent="dias" label="Hablar conmigo por WhatsApp" className="w-full shrink-0 sm:w-auto" />
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-center font-inter text-[14px] leading-[1.65] text-white/70">
              El material en bruto se entrega sin editar, para que lo uses tú o tu equipo cuando quieras; la edición de piezas adicionales no está incluida.
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
            <WhatsappCta lpId={landing.id} position="valor" label="Reservar mi fecha por WhatsApp" className="mt-10 w-full sm:w-auto" />
          </div>
        </section>

        {/* 4b. Así queda: aftermovies reales de stands en IFEMA, un selector por cliente. */}
        <section className="page-container pb-14 sm:pb-20">
          <div className="mx-auto max-w-4xl">
            <p className={`${EYEBROW} text-center`}>Así queda</p>
            <h2 className={`${SECTION_TITLE} mt-3 text-center`}>Aftermovies de stands en IFEMA</h2>
            <div className="mt-8 sm:mt-10">
              <ShowcaseTabs items={AFTERMOVIES} />
            </div>
          </div>
        </section>

        {/* 5. Referencias: logo sobre fondo claro (los logos son de marca, no blancos), dónde fue y qué se grabó. */}
        {REFERENCIAS.length > 0 ? (
          <section className="page-container pb-14 sm:pb-20">
            <div className="mx-auto max-w-5xl">
              <h2 className={`${SECTION_TITLE} text-center`}>Mis últimas grabaciones en IFEMA</h2>
              <p className="mx-auto mt-3 max-w-xl text-center font-inter text-[15px] leading-[1.65] text-white/65">
                Stands de expositores, equipo y clientes en pista, de las ferias de este mismo otoño.
              </p>
              <ReferenceCards items={REFERENCIAS} lpId={landing.id} />
              <div className="mt-4 flex flex-col items-center justify-between gap-2 rounded-2xl border border-dashed border-white/25 px-6 py-5 text-center sm:flex-row sm:text-left">
                <p className="font-display text-[20px] font-semibold uppercase leading-[1.1] sm:text-[24px]">
                  + Muchas más
                </p>
                <p className="max-w-xl font-inter text-[14px] leading-[1.6] text-white/72 sm:text-[15px]">
                  Estas son las más recientes. He grabado muchas más ferias y stands; aquí solo enseño las que ya
                  tengo editadas.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {/* 6. Trabajos recientes. Modal: no saca del funnel. */}
        <section className="pb-4">
          <div className="page-container">
            <h2 className={`${SECTION_TITLE} text-center`}>Trabajos recientes</h2>
          </div>
          <div className="mt-6 sm:mt-8">
            <PortfolioMarquee items={portfolioItems} size="xl" mode="modal" scrollable lang={lang} />
          </div>
        </section>

        {/* 7. Cierre del funnel: un único CTA, WhatsApp con el mensaje ya escrito. */}
        <section id="contacto" className="page-container scroll-mt-6 pb-14 pt-6 sm:pb-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/[0.05] px-6 py-10 text-center sm:px-12 sm:py-14">
            <h2 className={SECTION_TITLE}>
              <Rich text="Reserva la fecha de {empresa|tu stand|b}" />
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-inter text-[15px] leading-[1.7] text-white/78 sm:text-[16px]">
              Escríbeme por WhatsApp, cuéntame qué feria y qué día, y lo cerramos ahí mismo. El mensaje ya va escrito:
              solo tienes que enviarlo.
            </p>
            <WhatsappCta lpId={landing.id} position="cierre" label="Reservar mi fecha por WhatsApp" className="mt-8 w-full sm:w-auto" />
          </div>
        </section>

        <StickyReserveBar lpId={landing.id} price="600€" label="Reservar mi fecha" />
        <div aria-hidden className="h-20 md:hidden" />

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

import { localizedMetadata, type LangParams } from "@/lib/seo"
import { toLang } from "@/lib/i18n"
import { content } from "./content"

// TODO: Dani debe subir reemplazos reales a Vercel Blob para estos assets
// (vídeo banner + 7 fotos del estudio, antes en Firebase Storage, ahora
// rotos). Hasta entonces se han quitado la sección de vídeo hero y la
// galería completa más abajo.

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].meta.title,
  description: content[lang].meta.description,
  path: "/the-rooftop-content-studio",
  keywords: content[lang].meta.keywords,
}))

export default async function TheRooftopContentStudioPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="mx-auto max-w-5xl px-4 pb-8 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <nav className="mb-10 rounded-full border border-white/10 bg-black/65 px-5 py-3 backdrop-blur">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase  text-white/70 sm:text-[11px]">
            {t.nav.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        <p className="text-[11px] uppercase text-white/60 sm:text-[12px]">
          {t.kicker}
        </p>
        <h1 className="mt-4 font-inter text-[34px] font-semibold uppercase leading-[1.05] sm:text-[46px] lg:text-[60px]">
          {t.titleLines[0]}
          <br />
          {t.titleLines[1]}
          <br />
          {t.titleLines[2]}
        </h1>
      </section>

      <section className="mx-auto max-w-5xl overflow-hidden border-y border-white/10 py-3">
        <div className="rooftop-ticker whitespace-nowrap text-[10px] uppercase text-white/55 sm:text-[11px]">
          {t.ticker.repeat(8)}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div>
          <p className="text-[12px] uppercase text-white/55">{t.about.kicker}</p>
          <h2 className="mt-3 text-[27px] font-semibold leading-[1.15] sm:text-[33px]">
            {t.about.title}
          </h2>
          <p className="mt-4 text-[14px] leading-[1.75] text-white/78">
            {t.about.p1}
          </p>
          <p className="mt-4 text-[14px] leading-[1.75] text-white/78">
            {t.about.p2}
          </p>

          <h3 className="mt-7 text-[13px] font-semibold uppercase  text-white/88">
            {t.about.formatsTitle}
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {t.about.formats.map((item) => (
              <li key={item} className="text-[13px] text-white/78">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TODO: Dani debe subir reemplazos reales a Vercel Blob para los
          assets de esta sección (galería de 7 fotos del estudio, antes en
          Firebase Storage, ahora rotas). Se quitó la sección "Galeria"
          completa. */}

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">{t.benefits.kicker}</p>
        <h2 className="mb-6 text-[26px] font-semibold sm:text-[32px]">{t.benefits.title}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.benefits.items.map((item, index) => {
            const [title, body] = item.split("|")
            return (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[11px] font-semibold uppercase text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[18px] font-semibold text-white/95">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-white/75">{body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">{t.process.kicker}</p>
        <h2 className="mb-6 text-[26px] font-semibold sm:text-[32px]">{t.process.title}</h2>
        <ol className="space-y-3">
          {t.process.items.map((item, index) => {
            const [title, body] = item.split("|")
            return (
              <li key={title} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                <p className="text-[11px] font-semibold uppercase text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[17px] font-semibold">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-white/75">{body}</p>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">{t.pricing.kicker}</p>
        <h2 className="mb-2 text-[26px] font-semibold sm:text-[32px]">{t.pricing.title}</h2>
        <p className="mb-6 text-[13px] text-white/70">{t.pricing.subtitle}</p>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-[11px] uppercase text-white/55">{t.pricing.halfDay.name}</p>
            <p className="mt-3 text-[42px] font-semibold leading-none">{t.pricing.halfDay.price}</p>
            <p className="mt-1 text-[13px] text-white/65">{t.pricing.halfDay.duration}</p>
            <p className="mt-4 text-[13px] leading-[1.7] text-white/75">
              {t.pricing.halfDay.desc}
            </p>
            <button className="mt-6 rounded-full border border-white/20 px-5 py-2 text-[12px] uppercase  text-white/90">
              {t.pricing.book}
            </button>
          </article>

          <article className="rounded-2xl border border-white/20 bg-white/[0.05] p-6">
            <p className="inline-block rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase text-white/80">
              {t.pricing.popular}
            </p>
            <p className="mt-4 text-[11px] uppercase text-white/55">{t.pricing.fullDay.name}</p>
            <p className="mt-3 text-[42px] font-semibold leading-none">{t.pricing.fullDay.price}</p>
            <p className="mt-1 text-[13px] text-white/65">{t.pricing.fullDay.duration}</p>
            <p className="mt-4 text-[13px] leading-[1.7] text-white/75">
              {t.pricing.fullDay.desc}
            </p>
            <button className="mt-6 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-[12px] uppercase  text-white">
              {t.pricing.book}
            </button>
          </article>
        </div>

        <p className="mt-5 text-[12px] uppercase text-white/55">
          {t.pricing.includes}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">{t.location.kicker}</p>
        <h2 className="mb-3 text-[26px] font-semibold sm:text-[32px]">{t.location.title}</h2>
        <p className="mb-5 max-w-3xl text-[14px] leading-[1.75] text-white/75">
          {t.location.body}
        </p>
        <ul className="mb-5 grid gap-2 text-[13px] text-white/75 sm:grid-cols-3">
          <li>{t.location.points[0]}</li>
          <li>{t.location.points[1]}</li>
          <li>{t.location.points[2]}</li>
        </ul>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title={t.location.mapTitle}
            src="https://www.google.com/maps?q=Calle%20Ronda%20de%20Atocha%2016%2C%20Madrid&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[280px] w-full sm:h-[340px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">{t.faq.kicker}</p>
        <h2 className="mb-5 text-[26px] font-semibold sm:text-[32px]">{t.faq.title}</h2>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5">
          {t.faq.items.map((item) => (
            <details key={item.q} className="border-b border-white/10 py-4 last:border-b-0">
              <summary className="cursor-pointer list-none pr-8 text-[14px] font-medium text-white/92">
                {item.q}
              </summary>
              <p className="pt-3 text-[13px] leading-[1.7] text-white/72">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">{t.contact.kicker}</p>
        <h2 className="mb-3 text-[26px] font-semibold sm:text-[32px]">{t.contact.title}</h2>
        <p className="mb-6 max-w-3xl text-[14px] leading-[1.75] text-white/75">
          {t.contact.body}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-[14px] text-white/78">
            <p>hola@therooftopcontentstudio.com</p>
            <p className="mt-2">+34 711 25 54 96</p>
            <p className="mt-2">{t.contact.address}</p>
          </div>

          <form className="grid gap-3 rounded-2xl border border-white/10 bg-black/35 p-5">
            <label className="text-[12px] text-white/70">
              {t.contact.nameLabel}
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder={t.contact.namePlaceholder} />
            </label>
            <label className="text-[12px] text-white/70">
              {t.contact.emailLabel}
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder={t.contact.emailPlaceholder} />
            </label>
            <label className="text-[12px] text-white/70">
              {t.contact.phoneLabel}
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder="+34 711 25 54 96" />
            </label>
            <label className="text-[12px] text-white/70">
              {t.contact.messageLabel}
              <textarea className="mt-1 h-24 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder={t.contact.messagePlaceholder} />
            </label>
            <button className="mt-2 rounded-full border border-white/25 px-5 py-2 text-[12px] uppercase  text-white/90">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase text-white/55">{t.footer.title}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-white/72">
            {t.footer.nav.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5 text-[12px] text-white/70">hola@therooftopcontentstudio.com</p>
          <p className="mt-1 text-[12px] text-white/70">+34 711 25 54 96</p>
          <p className="mt-1 text-[12px] text-white/70">{t.contact.address}</p>
          <p className="mt-6 text-[11px] text-white/45">© 2026 Rooftop Content Studio</p>
        </div>
      </footer>

      <style>{`
        .rooftop-ticker {
          animation: rooftop-ticker 38s linear infinite;
          will-change: transform;
        }

        @keyframes rooftop-ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rooftop-ticker {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

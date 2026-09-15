import Link from "next/link"
import Image from "next/image"
import ContactCTA from "@/components/ContactCTA"
import { buildBreadcrumbSchema, localizedMetadata, type LangParams } from "@/lib/seo"
import { getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { SERVICES_PAGE_LANDINGS, SERVICE_LINKS } from "@/lib/service-links"
import { content } from "./content"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/servicios",
  keywords: content[lang].keywords,
}))

export default async function ServicesPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: getDictionary(lang).breadcrumbs.home, path: localizedHref(lang, "/") },
    { name: t.breadcrumb, path: localizedHref(lang, "/servicios") },
  ])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20 space-y-10">
        <header className="space-y-6">
          <p className="font-inter text-[11px] uppercase text-white/40">
            {t.kicker}
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[30px] leading-[1.05] sm:text-[40px] lg:text-[56px]">
            {t.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Intro + bullets */}
          <div className="space-y-6 text-white/78">
            {t.intro.map((paragraph) => (
              <p key={paragraph} className="font-inter text-[14px] sm:text-[15px] leading-[1.7]">
                {paragraph}
              </p>
            ))}

            <div className="space-y-3">
              <p className="font-inter text-[12px] font-semibold uppercase text-white/60">
                {t.specialtiesLabel}
              </p>
              <ul className="space-y-2 font-inter text-[14px] sm:text-[15px] leading-[1.6]">
                {t.specialties.map((item) => (
                  <li key={item.href} className="list-disc list-inside">
                    <Link
                      href={localizedHref(lang, item.href)}
                      className="font-semibold hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enlaces a las landings (mismo estilo que «especialidades»): hoy solo las enlazaba el sitemap. */}
            <div className="space-y-3">
              <p className="font-inter text-[12px] font-semibold uppercase text-white/60">
                {t.landingsLabel}
              </p>
              <ul className="space-y-2 font-inter text-[14px] sm:text-[15px] leading-[1.6]">
                {SERVICES_PAGE_LANDINGS.map((path) => (
                  <li key={path} className="list-disc list-inside">
                    <Link
                      href={localizedHref(lang, path)}
                      prefetch={false}
                      className="font-semibold hover:text-white transition-colors"
                    >
                      {SERVICE_LINKS[path][lang].title}
                    </Link>{" "}
                    — {SERVICE_LINKS[path][lang].description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                {t.locationTitle}
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
                {t.locationText}
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://kgtz1gujr7extokb.public.blob.vercel-storage.com/hero/daniel-acero-hero-v2-llWDLWKhpBLHLD1VcbHNvWsLL7DeYZ.jpg"
                alt={t.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-inter text-[11px] uppercase text-white/40">
                  {t.forWhomLabel}
                </p>
                <p className="mt-2 font-inter text-[13px] leading-[1.6]">
                  {t.forWhomText}
                </p>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-inter text-[11px] uppercase text-white/40">
                  {t.formatLabel}
                </p>
                <p className="mt-2 font-inter text-[13px] leading-[1.6]">
                  {t.formatText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-8 border-t border-white/10 pt-10 mt-4">
          <h2 className="font-inter font-semibold uppercase text-[18px] sm:text-[20px]">
            {t.ctaTitle}
          </h2>
          <p className="max-w-3xl font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
            {t.ctaText}
          </p>

          <div className="flex flex-wrap gap-3 text-[13px] text-white/70">
            {t.ctaLinks.map((link) => (
              <Link
                key={link.href}
                href={localizedHref(lang, link.href)}
                className="rounded-full border border-white/20 px-4 py-2 font-inter uppercase hover:border-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </section>

      <ContactCTA lang={lang} />
    </main>
  )
}

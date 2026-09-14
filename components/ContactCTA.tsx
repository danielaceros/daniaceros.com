import Link from "next/link"
import { Fragment, type CSSProperties } from "react"
import LazyContactForm from "./LazyContactForm"
import { getDictionary, localizedHref, type Lang } from "@/lib/i18n"
import { FOOTER_SERVICE_ROWS, SERVICE_LINKS } from "@/lib/service-links"
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/contact"

type Props = {
  /** Idioma de los textos, del mensaje de WhatsApp y de los enlaces. Por defecto "es". */
  lang?: Lang
  sectionClassName?: string
  mobileFormFirst?: boolean
  hideFooter?: boolean
  hideMobileContactInfo?: boolean
  /** Etiqueta del título. "h1" solo en /contacto (única cabecera de la página); el aspecto no cambia. */
  headingAs?: "h1" | "h2"
}

// Pie: filas de enlaces en línea, 12px y zona táctil de 44px (antes 11px y 17px de alto).
// Para añadir otra fila (p. ej. enlaces a landings), usar <p className={FOOTER_ROW}> con <Link className={FOOTER_LINK}>
// separados por <span aria-hidden>·</span>; las filas se apilan sin margen extra porque cada enlace ya mide 44px.
const FOOTER_ROW = "flex flex-wrap items-center justify-center gap-x-2 font-inter text-[12px] lowercase text-white/45"
const FOOTER_LINK =
  "inline-flex min-h-[44px] items-center rounded transition-colors duration-300 hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

export default function ContactCTA({
  lang = "es",
  sectionClassName,
  mobileFormFirst = false,
  hideFooter = false,
  hideMobileContactInfo = false,
  headingAs = "h2",
}: Props) {
  const t = getDictionary(lang).contact
  const WHATSAPP_URL = whatsappUrl(t.whatsappMessage)
  const Heading = headingAs

  return (
    <section
      data-lux
      className={`cinematic-reveal mx-auto mt-20 max-w-5xl px-4 pb-24 text-center sm:mt-24 sm:px-6 sm:pb-32 ${sectionClassName ?? ""}`}
    >
      <Heading
        data-lux
        style={{ "--lux-delay": "90ms" } as CSSProperties}
        className="cinematic-reveal-delay-1 mb-4 font-display text-[30px] font-semibold uppercase leading-[1.02] sm:mb-5 sm:text-[40px] lg:text-[48px]"
      >
        {t.title}
      </Heading>

      <p
        data-lux
        style={{ "--lux-delay": "160ms" } as CSSProperties}
        className="cinematic-reveal cinematic-reveal-delay-2 mx-auto mb-12 max-w-2xl font-inter text-[13px] leading-[1.75] text-white/68 sm:text-[14px]"
      >
        {t.intro}
      </p>

      <div
        data-lux
        style={{ "--lux-delay": "230ms" } as CSSProperties}
        className="cinematic-reveal cinematic-reveal-delay-3 mx-auto w-full max-w-5xl"
      >
        <div className="grid overflow-hidden rounded-xl bg-[#0a0a0a] lg:grid-cols-[0.82fr_1.18fr]">
          <aside
            className={`border-white/10 px-6 pb-7 pt-8 text-left lg:border-r lg:px-10 lg:py-11 ${
              mobileFormFirst ? "hidden lg:block" : ""
            }`}
          >
            <p className="max-w-[32ch] font-inter text-[14px] leading-[1.8] text-white/66">
              {t.asideText}
            </p>
            <div className="mt-8 space-y-1">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex min-h-[44px] items-center gap-3 rounded text-[17px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                <span className="font-inter text-[17px]">{CONTACT_EMAIL}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[44px] items-center gap-3 rounded text-[17px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                <span className="font-inter text-[17px]">+34 711 25 54 96</span>
              </a>
            </div>
          </aside>

          <div className={`relative overflow-hidden ${mobileFormFirst ? "order-1" : ""}`}>
            <LazyContactForm lang={lang} />
          </div>

          {mobileFormFirst && !hideMobileContactInfo ? (
            <aside className="order-2 px-6 pb-7 pt-7 text-left lg:hidden">
              <p className="max-w-[36ch] font-inter text-[13px] leading-[1.75] text-white/66">
                {t.mobileAsideText}
              </p>
              <div className="mt-6 space-y-1">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex min-h-[44px] items-center gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                  <span className="font-inter text-[16px]">{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[44px] items-center gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                  <span className="font-inter text-[16px]">+34 711 25 54 96</span>
                </a>
              </div>
            </aside>
          ) : null}
        </div>
      </div>

      {hideFooter ? null : (
        <footer
          data-lux
          style={{ "--lux-delay": "300ms" } as CSSProperties}
          className="cinematic-reveal cinematic-reveal-delay-3 mt-14 pt-2"
        >
          {/* Enlaces a las páginas de servicio (anchors por intención; textos en lib/service-links.ts). */}
          <nav aria-label={t.footer.servicesLabel}>
            {FOOTER_SERVICE_ROWS.map((row) => (
              <p key={row.join("|")} className={FOOTER_ROW}>
                {row.map((path, index) => (
                  <Fragment key={path}>
                    {index > 0 ? <span aria-hidden>·</span> : null}
                    <Link href={localizedHref(lang, path)} prefetch={false} className={FOOTER_LINK}>
                      {SERVICE_LINKS[path][lang].anchor}
                    </Link>
                  </Fragment>
                ))}
              </p>
            ))}
          </nav>
          <p className={FOOTER_ROW}>
            <Link
              href="https://www.instagram.com/daniaceros"
              target="_blank"
              rel="noopener noreferrer"
              className={FOOTER_LINK}
            >
              @daniaceros
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="https://es.linkedin.com/in/daniaceros"
              target="_blank"
              rel="noopener noreferrer"
              className={FOOTER_LINK}
            >
              linkedin
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="https://www.youtube.com/@daniacerxs/videos"
              target="_blank"
              rel="noopener noreferrer"
              className={FOOTER_LINK}
            >
              youtube
            </Link>
            <span aria-hidden>·</span>
            <Link
              href={localizedHref(lang, "/a0studios")}
              className={FOOTER_LINK}
            >
              a0studios
            </Link>
          </p>
          <p className={FOOTER_ROW}>
            <Link href={localizedHref(lang, "/aviso-legal")} className={FOOTER_LINK}>
              {t.footer.legalNotice}
            </Link>
            <span aria-hidden>·</span>
            <Link href={localizedHref(lang, "/politica-de-cookies")} className={FOOTER_LINK}>
              {t.footer.cookies}
            </Link>
            <span aria-hidden>·</span>
            <Link href={localizedHref(lang, "/politica-de-privacidad")} className={FOOTER_LINK}>
              {t.footer.privacy}
            </Link>
          </p>
        </footer>
      )}
    </section>
  )
}

import Link from "next/link"
import type { CSSProperties } from "react"
import LazyContactForm from "./LazyContactForm"
import { getDictionary, localizedHref, type Lang } from "@/lib/i18n"

const CONTACT_EMAIL = "work@daniaceros.com"

type Props = {
  /** Idioma de los textos, del mensaje de WhatsApp y de los enlaces. Por defecto "es". */
  lang?: Lang
  sectionClassName?: string
  mobileFormFirst?: boolean
  hideFooter?: boolean
  hideMobileContactInfo?: boolean
}

export default function ContactCTA({
  lang = "es",
  sectionClassName,
  mobileFormFirst = false,
  hideFooter = false,
  hideMobileContactInfo = false,
}: Props) {
  const t = getDictionary(lang).contact
  const WHATSAPP_URL = `https://wa.me/34711255496?text=${encodeURIComponent(t.whatsappMessage)}`

  return (
    <section
      data-lux
      className={`cinematic-reveal mx-auto mt-20 max-w-5xl px-4 pb-24 text-center sm:mt-24 sm:px-6 sm:pb-32 ${sectionClassName ?? ""}`}
    >
      <h2
        data-lux
        style={{ "--lux-delay": "90ms" } as CSSProperties}
        className="cinematic-reveal-delay-1 mb-4 font-display text-[30px] font-semibold uppercase leading-[1.02] sm:mb-5 sm:text-[40px] lg:text-[48px]"
      >
        {t.title}
      </h2>

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
            <div className="mt-9 space-y-5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-3 rounded text-[17px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                <span className="font-inter text-[17px]">{CONTACT_EMAIL}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded text-[17px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
              <div className="mt-7 space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
                  <span className="font-inter text-[16px]">{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-inter text-[11px] lowercase text-white/45">
            <Link
              href="https://www.instagram.com/daniaceros"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              @danielaceros
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="https://es.linkedin.com/in/daniaceros"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              linkedin
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="https://www.youtube.com/@daniacerxs/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              youtube
            </Link>
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-inter text-[11px] lowercase text-white/45">
            <Link href={localizedHref(lang, "/aviso-legal")} className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              {t.footer.legalNotice}
            </Link>
            <span aria-hidden>·</span>
            <Link href={localizedHref(lang, "/politica-de-cookies")} className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              {t.footer.cookies}
            </Link>
            <span aria-hidden>·</span>
            <Link href={localizedHref(lang, "/politica-de-privacidad")} className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              {t.footer.privacy}
            </Link>
          </p>
        </footer>
      )}
    </section>
  )
}

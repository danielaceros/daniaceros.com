import Link from "next/link"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import ContactCTA from "@/components/ContactCTA"
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { getDictionary, localizedHref, toLang } from "@/lib/i18n"
import { content } from "./content"
import LanguageLinks from "./LanguageLinks"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/hablemos",
  keywords: content[lang].keywords,
}))

export default async function HablemosPage({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  const dict = getDictionary(lang)
  const WHATSAPP_URL = `https://wa.me/34711255496?text=${encodeURIComponent(dict.contact.whatsappMessage)}`

  return (
    <main className="text-white">
      {/* TODO: Dani debe subir un reemplazo real a Vercel Blob para este asset
          (banner de logos de clientes, antes en Firebase Storage, ahora roto).
          Hero oculta el bloque de logos de confianza automáticamente cuando
          no se le pasa trustedLogosImageSrc. */}
      <Hero
        lang={lang}
        title={t.heroTitle}
        tagline=""
        description={t.heroDescription}
        ctaLabel={t.heroCtaLabel}
        compactTitle
      />
      <Portfolio
        lang={lang}
        openVideosInModal
        forceTwoColumns
        desktopSlideshow
        sectionClassName="pt-2 pb-0 sm:pt-3 sm:pb-0"
      />
      <div id="contacto">
        <ContactCTA
          lang={lang}
          mobileFormFirst
          hideMobileContactInfo
          hideFooter
          sectionClassName="mt-1 pb-6 sm:mt-2 sm:pb-8"
        />
      </div>
      <About lang={lang} mobileCompactSplit sectionClassName="pt-0 pb-2 sm:pt-1 sm:pb-3" />
      <section className="mx-auto w-full max-w-6xl px-4 pb-4 text-right sm:hidden">
        <p className="ml-auto max-w-[36ch] font-inter text-[13px] leading-[1.75] text-white/66">
          {dict.contact.mobileAsideText}
        </p>
        <div className="mt-7 space-y-4">
          <a
            href="mailto:work@daniaceros.com"
            className="group flex items-center justify-end gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="font-inter text-[16px]">work@daniaceros.com</span>
            <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end gap-3 rounded text-[16px] text-white/86 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="font-inter text-[16px]">+34 711 25 54 96</span>
            <span className="h-px w-5 bg-white/85 transition-all duration-300 group-hover:w-7" />
          </a>
        </div>
      </section>
      <footer className="mx-auto w-full max-w-6xl px-4 pb-5 pt-0 text-center sm:px-6 sm:pb-6">
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
            {dict.contact.footer.legalNotice}
          </Link>
          <span aria-hidden>·</span>
          <Link href={localizedHref(lang, "/politica-de-cookies")} className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            {dict.contact.footer.cookies}
          </Link>
          <span aria-hidden>·</span>
          <Link href={localizedHref(lang, "/politica-de-privacidad")} className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            {dict.contact.footer.privacy}
          </Link>
          {/* Selector de idioma discreto: la cabecera especial de /hablemos no lo lleva. */}
          <span aria-hidden>·</span>
          <LanguageLinks lang={lang} path="/hablemos" label={dict.header.languageSwitcherLabel} />
        </p>
      </footer>
    </main>
  )
}

"use client"

// not-found no recibe params: el idioma se lee del segmento [lang] con useParams
// (sigue dentro del layout [lang], así que siempre está disponible).
import Link from "next/link"
import { useParams } from "next/navigation"
import { localizedHref, toLang } from "@/lib/i18n"
import { content } from "./content"

export default function BlogNotFound() {
  const params = useParams<{ lang?: string }>()
  const lang = toLang(params?.lang)
  const t = content[lang]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-inter">{t.blog}</p>
        <h1 className="mt-4 text-[30px] sm:text-[40px] uppercase font-inter text-white">{t.notFound.title}</h1>
        <p className="mt-4 text-[15px] leading-[1.8] text-white/68">
          {t.notFound.text}
        </p>
        <div className="mt-8">
          <Link href={localizedHref(lang, "/blog")} className="inline-flex min-h-[44px] items-center rounded-full border border-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/88 hover:border-white/28 hover:bg-white/[0.05] transition-all duration-300">
            {t.notFound.cta}
          </Link>
        </div>
      </div>
    </main>
  )
}

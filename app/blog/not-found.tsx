import Link from "next/link"

export default function BlogNotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-inter">Blog</p>
        <h1 className="mt-4 text-[30px] sm:text-[40px] uppercase font-inter text-white">Artículo no encontrado</h1>
        <p className="mt-4 text-[15px] leading-[1.8] text-white/68">
          Este post no existe o todavía no está publicado. Vuelve al índice del blog y seguimos.
        </p>
        <div className="mt-8">
          <Link href="/blog" className="inline-flex min-h-[44px] items-center rounded-full border border-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/88 hover:border-white/28 hover:bg-white/[0.05] transition-all duration-300">
            Ir al blog
          </Link>
        </div>
      </div>
    </main>
  )
}

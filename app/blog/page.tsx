import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts, getBlogMetadata } from "@/lib/blog"

export const metadata: Metadata = getBlogMetadata()

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl">
          <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-white/45">Blog</p>
          <h1 className="mt-4 font-inter text-[34px] leading-[1.02] sm:text-[48px] lg:text-[64px] uppercase text-white">
            Insights sobre vídeo corporativo, eventos y producción audiovisual
          </h1>
          <p className="mt-6 max-w-2xl text-[14px] sm:text-[16px] leading-[1.8] text-white/72">
            Artículos pensados para empresas y marcas que quieren entender mejor cómo convertir eventos,
            piezas corporativas y producción audiovisual en contenido útil para negocio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/45 font-inter">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-5 text-[26px] leading-[1.08] sm:text-[32px] font-inter uppercase text-white max-w-[16ch]">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.8] text-white/68 max-w-[56ch]">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/88 hover:border-white/28 hover:bg-white/[0.05] transition-all duration-300"
                >
                  Leer artículo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

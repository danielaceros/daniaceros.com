import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllPosts, getPostBySlug, getPostMetadata } from "@/lib/blog"

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return getPostMetadata(post)
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const faqs = post.body.filter((block) => block.type === "faq")

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-3xl border-b border-white/10 pb-10 sm:pb-12">
          <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-white/45">{post.heroKicker}</p>
          <h1 className="mt-4 font-inter text-[34px] leading-[1.04] sm:text-[48px] lg:text-[58px] uppercase text-white">
            {post.title}
          </h1>
          <p className="mt-6 text-[15px] leading-[1.8] text-white/70 max-w-2xl">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.16em] text-white/45 font-inter">
            <span>{post.publishedAt}</span>
            <span className="h-1 w-1 self-center rounded-full bg-white/20" />
            <span>{post.readingTime}</span>
            <span className="h-1 w-1 self-center rounded-full bg-white/20" />
            <span>{post.keyword}</span>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 space-y-6 sm:space-y-7">
          {post.body.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p key={index} className="text-[15px] sm:text-[17px] leading-[1.95] text-white/78">
                  {block.text}
                </p>
              )
            }

            if (block.type === "heading") {
              const Tag = block.level === 2 ? "h2" : "h3"
              const className =
                block.level === 2
                  ? "pt-6 text-[24px] sm:text-[30px] leading-[1.12] uppercase font-inter text-white"
                  : "pt-3 text-[18px] sm:text-[20px] leading-[1.2] uppercase font-inter text-white/92"
              return <Tag key={index} className={className}>{block.text}</Tag>
            }

            if (block.type === "list") {
              const ListTag = block.ordered ? "ol" : "ul"
              return (
                <ListTag key={index} className="space-y-3 pl-5 text-[15px] sm:text-[16px] leading-[1.85] text-white/74 list-disc marker:text-white/35">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ListTag>
              )
            }

            if (block.type === "faq") {
              return (
                <div key={index} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <h3 className="text-[16px] sm:text-[18px] uppercase font-inter text-white">{block.question}</h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.85] text-white/72">{block.answer}</p>
                </div>
              )
            }

            return null
          })}
        </div>

        <div className="mt-14 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/45 font-inter">Siguiente paso</p>
          <h2 className="mt-3 text-[24px] sm:text-[30px] uppercase font-inter text-white max-w-[18ch]">
            Si quieres mover este proyecto, te respondo yo
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.8] text-white/70 max-w-2xl">
            Cuéntame objetivo, fecha, localización y tipo de pieza. Puedo decirte rápido cómo enfocaría la producción, qué entregables tienen más sentido y por dónde empezaría.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contacto" className="inline-flex min-h-[44px] items-center rounded-full border border-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/88 hover:border-white/28 hover:bg-white/[0.05] transition-all duration-300">
              Pedir propuesta
            </Link>
            <Link href="/portfolio" className="inline-flex min-h-[44px] items-center rounded-full border border-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/88 hover:border-white/28 hover:bg-white/[0.05] transition-all duration-300">
              Ver trabajos
            </Link>
            <Link href="/precios" className="inline-flex min-h-[44px] items-center rounded-full border border-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/88 hover:border-white/28 hover:bg-white/[0.05] transition-all duration-300">
              Ver precios
            </Link>
            <Link href="/blog" className="inline-flex min-h-[44px] items-center rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/55 hover:text-white/85 transition-all duration-300">
              Volver al blog
            </Link>
          </div>
        </div>
      </article>

      {faqs.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      ) : null}
    </main>
  )
}

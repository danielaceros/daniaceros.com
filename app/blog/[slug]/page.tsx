import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getAllPosts, getPostBySlug, getPostMetadata } from "@/lib/blog"
import ContactCTA from "@/components/ContactCTA"

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

            if (block.type === "image") {
              return (
                <figure key={index} className="my-2 sm:my-4">
                  <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02]">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={block.width}
                      height={block.height}
                      priority={block.priority}
                      sizes="(min-width: 1024px) 720px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  {block.caption ? (
                    <figcaption className="mt-3 text-[12px] sm:text-[13px] leading-[1.6] text-white/50 font-inter">
                      {block.caption}
                    </figcaption>
                  ) : null}
                </figure>
              )
            }

            if (block.type === "link-card") {
              return (
                <a
                  key={index}
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-prose group my-2 flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:gap-5 sm:p-5 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <Image
                    src={block.avatar}
                    alt={block.avatarAlt}
                    width={64}
                    height={64}
                    className="h-14 w-14 flex-shrink-0 rounded-full sm:h-16 sm:w-16"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] sm:text-[16px] font-inter text-white truncate">{block.title}</p>
                    <p className="mt-0.5 text-[13px] sm:text-[14px] text-white/60 truncate">{block.subtitle}</p>
                    {block.meta ? (
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/40 font-inter">{block.meta}</p>
                    ) : null}
                  </div>
                  <span className="flex-shrink-0 text-[11px] uppercase tracking-[0.16em] text-white/55 group-hover:text-white/85 transition-colors">
                    {block.cta ?? "Ver perfil"} →
                  </span>
                </a>
              )
            }

            if (block.type === "video") {
              const aspect = block.portrait ? "aspect-[9/16] max-w-[360px]" : "aspect-video w-full"
              return (
                <figure key={index} className="my-2 sm:my-4">
                  <div className={`overflow-hidden rounded-[20px] border border-white/10 bg-black ${block.portrait ? "mx-auto " + aspect : aspect}`}>
                    <video
                      src={block.src}
                      poster={block.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {block.caption ? (
                    <figcaption className="mt-3 text-center text-[12px] sm:text-[13px] leading-[1.6] text-white/50 font-inter">
                      {block.caption}
                    </figcaption>
                  ) : null}
                </figure>
              )
            }

            return null
          })}
        </div>

      </article>

      <ContactCTA hideFooter />

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

"use client"

import { useEffect, useRef } from "react"

const items = [
  { title: "FIFA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A1.mp4?alt=media&token=12073558-3af3-459a-bf2a-e76441a8c42e", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A1.mp4?alt=media&token=12073558-3af3-459a-bf2a-e76441a8c42e"},
  { title: "BRAHIM DÍAZ",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/ssstik.io_%40sonypicturesspain_1765025166403.mp4?alt=media&token=85e6bd4f-2ae0-4e7b-a795-84e34d415928", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/ssstik.io_%40sonypicturesspain_1765025166403.mp4?alt=media&token=85e6bd4f-2ae0-4e7b-a795-84e34d415928"},
  { title: "OMAR MONTES",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/SnapInsta.to_AQMpJcNmZa5CVSZIaTtKFv0wnJqh7qcQzpu0xzJSsuTFssC5KiccQz6uQHcxUAFRHe0oe3Q1RG2dDE0mBhr4v4jwdYg5x3_vWrx9fYM%20(1)_1.mp4?alt=media&token=c1211d45-7fae-4049-b82e-339e6a1028a9", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/SnapInsta.to_AQMpJcNmZa5CVSZIaTtKFv0wnJqh7qcQzpu0xzJSsuTFssC5KiccQz6uQHcxUAFRHe0oe3Q1RG2dDE0mBhr4v4jwdYg5x3_vWrx9fYM%20(1)_1.mp4?alt=media&token=c1211d45-7fae-4049-b82e-339e6a1028a9"},
  { title: "TENGO UN PLAN",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A3.mp4?alt=media&token=087cdd6c-1228-48f4-b059-c1a214f90cf9", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A3.mp4?alt=media&token=087cdd6c-1228-48f4-b059-c1a214f90cf9"},
  { title: "CÁMARA DE COMERCIO",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A7%20(2).mp4?alt=media&token=9aefe430-138c-4501-b6fa-b0f0b160ccfe", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A7%20(2).mp4?alt=media&token=9aefe430-138c-4501-b6fa-b0f0b160ccfe"},
  { title: "IFEMA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/%F0%9F%8E%A5%20Un%20punto%20de%20encuentro%2C%20un%20impulso%2C%20y%20una%20sen%CC%83al%20clara-%20el%20sector%20esta%CC%81%20despertando.Tercer%20an%CC%83o%20c.mp4?alt=media&token=e9318ece-6817-48e0-a1a0-f6c90daf774f", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/%F0%9F%8E%A5%20Un%20punto%20de%20encuentro%2C%20un%20impulso%2C%20y%20una%20sen%CC%83al%20clara-%20el%20sector%20esta%CC%81%20despertando.Tercer%20an%CC%83o%20c.mp4?alt=media&token=e9318ece-6817-48e0-a1a0-f6c90daf774f"},
  { title: "FEDERACIÓN DE ESGRIMA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A5.mp4?alt=media&token=ce83614c-90e9-45ce-ae95-0feaec9c1135", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A5.mp4?alt=media&token=ce83614c-90e9-45ce-ae95-0feaec9c1135"},
  { title: "CINESA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/CINESA%20(2).mp4?alt=media&token=da7f88d0-6b36-4ee8-9e9c-6b81c6a1819b", href: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/CINESA%20(2).mp4?alt=media&token=da7f88d0-6b36-4ee8-9e9c-6b81c6a1819b"},
]

export default function ContactPortfolioMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let x = 0
    const speed = 0.3 // ajusta para igualar Framer

    const animate = () => {
      if (trackRef.current) {
        x -= speed
        const width = trackRef.current.scrollWidth / 2
        if (-x >= width) x = 0
        trackRef.current.style.transform = `translateX(${x}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative w-full overflow-hidden py-8">
      <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
        {[...items, ...items].map((item, i) => (
          <MarqueeCard key={`${item.title}-${i}`} {...item} />
        ))}
      </div>

      {/* Fades laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </section>
  )
}

function MarqueeCard({
  title,
  video,
  href,
}: {
  title: string
  video: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative block cursor-pointer
        aspect-[3/4] h-[140px] w-[105px] overflow-hidden
        rounded-xl bg-black
        sm:h-[180px] sm:w-[135px]
        lg:h-[220px] lg:w-[165px]
      "
    >
      <video
        src={video}
        muted
        loop
        playsInline
        preload="metadata"
        className="
          pointer-events-none absolute inset-0 h-full w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.03]
        "
      />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <span
        className="
          pointer-events-none absolute bottom-2 left-2
          font-inter text-[13px] font-semibold uppercase
          tracking-[-0.08em] text-white
        "
      >
        {title}
      </span>
    </a>
  )
}
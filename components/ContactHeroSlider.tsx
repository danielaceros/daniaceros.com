"use client"

import { useEffect, useState } from "react"
import { getProjects } from "@/data/projects"
import type { Lang } from "@/lib/i18n"

export default function ContactHeroSlider({ lang = "es" }: { lang?: Lang }) {
  const slides = getProjects(lang).map((p) => ({ title: p.title, video: p.video, poster: p.poster }))

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="relative mx-auto mt-10 w-full max-w-7xl overflow-hidden rounded-3xl">
      <div className="relative aspect-[16/6] w-full bg-[#0a0a0a]">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={s.video}
              poster={s.poster}
              muted
              loop
              playsInline
              autoPlay={i === index}
              preload={i === index ? "metadata" : "none"}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <span className="absolute bottom-4 left-4 font-inter text-xs font-semibold uppercase  text-white">
              {s.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

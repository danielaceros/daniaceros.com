"use client"

import { getProjects } from "@/data/projects"
import PortfolioMarquee from "@/components/PortfolioMarquee"
import type { Lang } from "@/lib/i18n"

export default function ContactPortfolioMarquee({ lang = "es" }: { lang?: Lang }) {
  const items = getProjects(lang).map((p) => ({
    slug: p.slug,
    title: p.title,
    video: p.video,
    poster: p.poster,
  }))

  return <PortfolioMarquee items={items} size="sm" mode="modal" lang={lang} />
}

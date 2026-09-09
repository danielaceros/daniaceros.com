"use client"

import { projects } from "@/data/projects"
import PortfolioMarquee from "@/components/PortfolioMarquee"

export default function ContactPortfolioMarquee() {
  const items = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    video: p.video,
    poster: p.poster,
  }))

  return <PortfolioMarquee items={items} size="sm" mode="modal" />
}

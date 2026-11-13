"use client"

// Selector de aftermovies de la sublanding /eventos/ifema/propuesta: una pestaña por cliente y un solo reproductor
// visible, para que la página no se alargue al ir añadiendo vídeos. Pestañas accesibles (tablist/tab/tabpanel).
import { useState } from "react"
import ShowcaseVideo from "@/components/landing/ShowcaseVideo"

export type ShowcaseItem = { id: string; label: string; context: string; src: string; poster: string }

export default function ShowcaseTabs({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const current = items.find((item) => item.id === active) ?? items[0]
  if (!current) return null

  return (
    <div>
      <div role="tablist" aria-label="Aftermovies" className="flex flex-wrap justify-center gap-2">
        {items.map((item) => {
          const selected = item.id === current.id
          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              type="button"
              onClick={() => setActive(item.id)}
              className={`min-h-[44px] rounded-full border px-5 font-inter text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                selected
                  ? "border-white bg-white text-black"
                  : "border-white/30 text-white/80 hover:border-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} className="mt-6">
        <ShowcaseVideo key={current.id} src={current.src} poster={current.poster} title={`Aftermovie de ${current.label}`} />
        <p className="mt-3 text-center font-inter text-[13px] text-white/70">{current.context}</p>
      </div>
    </div>
  )
}

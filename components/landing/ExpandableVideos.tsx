"use client"

// Vídeos de muestra ampliables (reels y vertical de las landings de cenas): miniatura con póster y botón de
// play; al pulsar se abre un modal con el vídeo grande, con sonido y reproducción automática. Con varios, flechas
// y teclado (← → Esc) para pasar de uno a otro. Modal con <dialog> nativo (foco atrapado, Esc) y scroll del fondo
// bloqueado. El vídeo solo existe mientras el modal está abierto: nada se descarga hasta que alguien pulsa.
import { useEffect, useRef, useState } from "react"

export type ExpandableVideo = { id: string; src: string; poster: string; context: string }

const NAV =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"

type Props = {
  items: ExpandableVideo[]
  /** Vídeos 9:16 (por defecto) u horizontales 16:9. */
  vertical?: boolean
  className?: string
}

export default function ExpandableVideos({ items, vertical = true, className = "" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const total = items.length
  const current = openIndex === null ? null : items[openIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (current && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = "hidden"
    }
    if (!current && dialog.open) dialog.close()
  }, [current])

  function open(index: number, trigger: HTMLElement) {
    lastFocus.current = trigger
    setOpenIndex(index)
  }
  function close() {
    setOpenIndex(null)
    document.documentElement.style.overflow = ""
    lastFocus.current?.focus()
  }
  function step(delta: number) {
    setOpenIndex((i) => (i === null ? i : (i + delta + total) % total))
  }

  return (
    <>
      <ul className={className}>
        {items.map((item, i) => (
          <li key={item.id} className="mx-auto w-full">
            <button
              type="button"
              onClick={(event) => open(i, event.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`Ampliar vídeo: ${item.context}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/12 bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.poster}
                alt=""
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${vertical ? "aspect-[9/16]" : "aspect-video"}`}
              />
              <span aria-hidden className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/92 text-black shadow-xl sm:h-16 sm:w-16">
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 sm:h-7 sm:w-7" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span
                aria-hidden
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </button>
            <p className="mt-2 text-center font-inter text-[12.5px] leading-[1.5] text-white/68 sm:text-[13px]">{item.context}</p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => {
          setOpenIndex(null)
          document.documentElement.style.overflow = ""
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        onKeyDown={(event) => {
          if (total > 1 && event.target instanceof HTMLElement && event.target.tagName !== "VIDEO") {
            if (event.key === "ArrowRight") step(1)
            else if (event.key === "ArrowLeft") step(-1)
          }
        }}
        aria-label="Vídeo ampliado"
        className={`m-auto max-h-[96vh] overflow-hidden rounded-3xl border border-white/15 bg-[#0b0b0b] p-0 text-white backdrop:bg-black/85 ${
          vertical ? "w-[min(460px,96vw)]" : "w-[min(1100px,96vw)]"
        }`}
      >
        {current ? (
          <div>
            <div className="relative flex items-center justify-center bg-black">
              <video
                key={current.id}
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                playsInline
                className={`w-full bg-black ${vertical ? "max-h-[82vh] object-contain" : "aspect-video"}`}
              />
              <button type="button" onClick={close} aria-label="Cerrar" className={`${NAV} absolute right-3 top-3 text-[20px] leading-none`}>
                ×
              </button>
              {total > 1 ? (
                <>
                  <button type="button" onClick={() => step(-1)} aria-label="Vídeo anterior" className={`${NAV} absolute left-3 top-1/2 -translate-y-1/2`}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M15 5l-7 7 7 7" />
                    </svg>
                  </button>
                  <button type="button" onClick={() => step(1)} aria-label="Vídeo siguiente" className={`${NAV} absolute right-3 top-1/2 -translate-y-1/2`}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              ) : null}
            </div>
            <div className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6">
              <p className="font-inter text-[14.5px] leading-[1.6] text-white/88 sm:text-[15.5px]">{current.context}</p>
              {total > 1 ? (
                <p className="shrink-0 pt-0.5 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55" aria-live="polite">
                  {String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}

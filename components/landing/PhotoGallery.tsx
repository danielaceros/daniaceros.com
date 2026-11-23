"use client"

// Galería de fotos reales (landings de cenas de empresa): mosaico de 2 columnas en móvil y 3 desde sm. Al pulsar
// una foto se abre ampliada, con su descripción, flechas, contador, teclado (← → Esc) y deslizar en móvil.
// Modal con <dialog> nativo (foco atrapado, Esc para cerrar) y scroll del fondo bloqueado, como el de las referencias.
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CENAS_FOTOS } from "@/lib/cenas-fotos"

const NAV =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-30"

export default function PhotoGallery({ priority = false }: { priority?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const touchX = useRef<number | null>(null)
  const total = CENAS_FOTOS.length
  const current = openIndex === null ? null : CENAS_FOTOS[openIndex]

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
      <ul className="columns-2 gap-3 sm:columns-3 sm:gap-4">
        {CENAS_FOTOS.map((foto, i) => (
          <li key={foto.src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={(event) => open(i, event.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`Ampliar foto: ${foto.alt}`}
              className="group relative block w-full overflow-hidden rounded-xl bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={foto.width}
                height={foto.height}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 30vw, 46vw"
                priority={priority && i < 2}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </button>
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
          if (event.key === "ArrowRight") step(1)
          else if (event.key === "ArrowLeft") step(-1)
        }}
        aria-label="Foto ampliada"
        className="m-auto max-h-[96vh] w-[min(980px,96vw)] overflow-hidden rounded-3xl border border-white/15 bg-[#0b0b0b] p-0 text-white backdrop:bg-black/85"
      >
        {current ? (
          <div
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return
              const dx = e.changedTouches[0].clientX - touchX.current
              touchX.current = null
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
            }}
          >
            <div className="relative flex max-h-[78vh] items-center justify-center bg-black">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(min-width: 1024px) 900px, 96vw"
                className="max-h-[78vh] w-auto max-w-full object-contain"
                priority
              />
              <button type="button" onClick={close} aria-label="Cerrar" className={`${NAV} absolute right-3 top-3 text-[20px] leading-none`}>
                ×
              </button>
              <button type="button" onClick={() => step(-1)} aria-label="Foto anterior" className={`${NAV} absolute left-3 top-1/2 -translate-y-1/2`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Foto siguiente" className={`${NAV} absolute right-3 top-1/2 -translate-y-1/2`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex items-start justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5">
              <p className="font-inter text-[15px] leading-[1.6] text-white/88 sm:text-[16px]">{current.caption}</p>
              <p className="shrink-0 pt-0.5 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55" aria-live="polite">
                {String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}

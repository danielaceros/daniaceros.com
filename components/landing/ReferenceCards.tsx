"use client"

// Tarjetas de referencias de la sublanding /eventos/ifema/propuesta. Al pinchar una se abre un modal con el
// resumen del proyecto: aftermovie (si hay) y fotos editadas. SOLO material editado y de calidad: aquí lo ve el
// cliente final, nunca brutos. Modal con <dialog> nativo (foco atrapado, Esc para cerrar) y scroll del fondo bloqueado.
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ShowcaseVideo from "@/components/landing/ShowcaseVideo"

export type ReferenceItem = {
  id: string
  name: string
  tag: string
  text: string
  logo: string
  photo: string
  /** Clase de object-position para la foto de la tarjeta (p. ej. "object-top"). */
  pos?: string
  video?: { src: string; poster: string }
  /** Fotos editadas del modal. */
  photos: string[]
}

export default function ReferenceCards({ items }: { items: ReferenceItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const current = items.find((item) => item.id === openId) ?? null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (current && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = "hidden"
    }
    if (!current && dialog.open) dialog.close()
    return () => {
      if (!current) document.documentElement.style.overflow = ""
    }
  }, [current])

  function open(id: string, trigger: HTMLElement) {
    lastFocus.current = trigger
    setOpenId(id)
  }
  function close() {
    setOpenId(null)
    document.documentElement.style.overflow = ""
    lastFocus.current?.focus()
  }
  function goContact() {
    close()
    window.setTimeout(() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
  }

  return (
    <>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((ref) => (
          <li key={ref.id} className="flex">
            <button
              type="button"
              onClick={(event) => open(ref.id, event.currentTarget)}
              aria-haspopup="dialog"
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] text-left transition-colors hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="relative block aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={ref.photo}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${ref.pos ?? ""}`}
                />
                <span className="absolute left-3 top-3 flex h-11 items-center rounded-lg bg-white px-3 shadow-lg">
                  <Image
                    src={ref.logo}
                    alt={`Logo de ${ref.name}`}
                    width={160}
                    height={64}
                    unoptimized
                    className="h-7 w-auto max-w-[120px] object-contain"
                  />
                </span>
              </span>
              <span className="flex flex-1 flex-col p-5">
                <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.14em] text-white/72">{ref.tag}</span>
                <span className="mt-2 font-display text-[20px] font-semibold uppercase leading-[1.1]">{ref.name}</span>
                <span className="mt-2 font-inter text-[14px] leading-[1.6] text-white/72">{ref.text}</span>
                <span className="mt-4 font-inter text-[12px] font-semibold uppercase tracking-[0.12em] text-white">Ver el proyecto →</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => {
          setOpenId(null)
          document.documentElement.style.overflow = ""
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        aria-labelledby="ref-modal-title"
        className="m-auto max-h-[92vh] w-[min(960px,94vw)] overflow-y-auto rounded-3xl border border-white/15 bg-[#0b0b0b] p-0 text-white backdrop:bg-black/80"
      >
        {current ? (
          <div className="p-5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.14em] text-white/72">{current.tag}</p>
                <h3 id="ref-modal-title" className="mt-2 font-display text-[26px] font-semibold uppercase leading-[1.05] sm:text-[34px]">
                  {current.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-[20px] leading-none transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                ×
              </button>
            </div>
            <p className="mt-3 max-w-2xl font-inter text-[15px] leading-[1.7] text-white/80">{current.text}</p>

            {current.video ? (
              <div className="mt-6">
                <p className="mb-3 font-inter text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Aftermovie</p>
                <ShowcaseVideo src={current.video.src} poster={current.video.poster} title={`Aftermovie de ${current.name}`} />
              </div>
            ) : null}

            {current.photos.length > 0 ? (
              <div className="mt-6">
                <p className="mb-3 font-inter text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Fotografías editadas</p>
                <ul className={`grid gap-3 ${current.photos.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {current.photos.map((src, i) => (
                    <li key={src} className="relative aspect-[3/2] overflow-hidden rounded-xl bg-black">
                      <Image
                        src={src}
                        alt={`Fotografía editada ${i + 1} del stand de ${current.name}`}
                        fill
                        sizes="(min-width:640px) 460px, 90vw"
                        className="object-cover"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-inter text-[14px] text-white/70">¿Quieres algo así para tu stand?</p>
              <button
                type="button"
                onClick={goContact}
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/25 bg-white px-8 py-3 font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-black transition-transform hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Reservar mi fecha
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}

import Image from "next/image"
import { CENAS_FOTOS } from "@/lib/cenas-fotos"

// Galería de fotos reales (landings de cenas de empresa). Columnas tipo mosaico: 2 en móvil, 3 desde sm.
// Las dos primeras fotos cargan con prioridad solo si `priority`; el resto, perezosas.
export default function PhotoGallery({ priority = false }: { priority?: boolean }) {
  return (
    <ul className="columns-2 gap-3 sm:columns-3 sm:gap-4">
      {CENAS_FOTOS.map((foto, i) => (
        <li key={foto.src} className="mb-3 break-inside-avoid overflow-hidden rounded-xl bg-white/[0.04] sm:mb-4">
          <Image
            src={foto.src}
            alt={foto.alt}
            width={foto.width}
            height={foto.height}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 30vw, 46vw"
            priority={priority && i < 2}
            className="h-auto w-full"
          />
        </li>
      ))}
    </ul>
  )
}

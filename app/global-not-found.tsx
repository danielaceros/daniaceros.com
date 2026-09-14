// app/global-not-found.tsx (experimental.globalNotFound en next.config.ts)
// 404 para URLs que no casan con ninguna ruta. Con el layout raíz dentro de
// app/[lang], Next ya no tiene un layout único con el que componer el 404, así
// que este archivo reconstruye exactamente el 404 de antes del i18n: documento
// raíz en español (Header, metadata, JSON-LD) + la UI por defecto de Next.
// Es estático, así que va siempre en español (también para /en/...).
import type { Metadata } from "next"
import NotFound from "next/dist/client/components/builtin/not-found"
import RootDocument, { buildRootMetadata, rootViewport } from "@/components/RootDocument"

export const metadata: Metadata = buildRootMetadata("es")

export const viewport = rootViewport

export default function GlobalNotFound() {
  return (
    <RootDocument lang="es" notFound>
      <NotFound />
    </RootDocument>
  )
}

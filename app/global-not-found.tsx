// app/global-not-found.tsx (experimental.globalNotFound en next.config.ts)
// 404 para URLs que no casan con ninguna ruta. Con el layout raíz dentro de app/[lang], Next no tiene
// un layout único con el que componer el 404, así que este archivo monta el documento raíz (Header,
// metadata) con la 404 de la web. Es estático y no conoce el idioma: texto en español e inglés.
import type { Metadata } from "next"
import RootDocument, { buildRootMetadata, rootViewport } from "@/components/RootDocument"
import NotFoundView from "@/components/NotFoundView"

export const metadata: Metadata = {
  ...buildRootMetadata("es"),
  title: "404 · Página no encontrada | Daniel Acero",
  robots: { index: false, follow: true },
}

export const viewport = rootViewport

export default function GlobalNotFound() {
  return (
    <RootDocument lang="es" notFound>
      <NotFoundView langs={["es", "en"]} />
    </RootDocument>
  )
}

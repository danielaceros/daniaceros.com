"use client"

// 404 dentro del layout [lang] (Header, <html lang>, metadata del idioma). not-found no recibe params:
// el idioma sale del segmento [lang] con useParams. Next añade noindex y responde 404.
import { useParams } from "next/navigation"
import NotFoundView from "@/components/NotFoundView"
import { toLang } from "@/lib/i18n"

export default function NotFound() {
  const params = useParams<{ lang?: string }>()
  return <NotFoundView langs={[toLang(params?.lang)]} />
}

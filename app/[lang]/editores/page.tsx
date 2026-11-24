// /editores — captación de editores de vídeo freelance en LATAM (destino de los anuncios de Meta).
// Una sola pantalla tipo Typeform: sin scroll, sin menú, sin salidas. Solo ES, fuera de índices y sitemap.
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { toLang } from "@/lib/i18n"
import EditorForm from "@/components/editores/EditorForm"

export const metadata: Metadata = {
  title: "Editores de vídeo freelance · Dani Acero",
  description: "Busco editores de vídeo en Latinoamérica. Postúlate en 2 minutos.",
  robots: { index: false, follow: false },
}

export default async function EditoresPage({ params }: { params: Promise<{ lang: string }> }) {
  if (toLang((await params).lang) !== "es") notFound()
  return <EditorForm />
}

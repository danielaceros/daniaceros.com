import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import FilmmakerMadridClient from "./FilmmakerMadridClient"

export const metadata: Metadata = buildMetadata({
  title: "Filmmaker en Madrid | Video profesional para empresas",
  description:
    "Servicio de filmmaker en Madrid para eventos, marcas y empresas. Produccion, grabacion y edicion audiovisual profesional.",
  path: "/filmmaker-madrid",
  keywords: ["filmmaker madrid", "video profesional madrid", "produccion audiovisual empresas"],
})

export default function Page() {
  return <FilmmakerMadridClient />
}

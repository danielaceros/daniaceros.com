import { localizedMetadata } from "@/lib/seo"
import FilmmakerMadridClient from "./FilmmakerMadridClient"

// Pendiente de traducir: en /en sale el contenido ES con noindex (ver I18N_GUIDE.md).
export const generateMetadata = localizedMetadata({
  title: "Filmmaker en Madrid | Vídeo profesional para empresas",
  description:
    "Servicio de filmmaker en Madrid para eventos, marcas y empresas. Producción, grabación y edición audiovisual profesional.",
  path: "/filmmaker-madrid",
  keywords: ["filmmaker madrid", "video profesional madrid", "produccion audiovisual empresas"],
})

export default function Page() {
  return <FilmmakerMadridClient />
}

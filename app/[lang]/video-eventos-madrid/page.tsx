import { localizedMetadata } from "@/lib/seo"
import VideoEventosMadridClient from "./VideoEventosMadridClient"

// Pendiente de traducir: en /en sale el contenido ES con noindex (ver I18N_GUIDE.md).
export const generateMetadata = localizedMetadata({
  title: "Vídeo de eventos en Madrid",
  description:
    "Servicio de vídeo de eventos en Madrid para congresos, conferencias, ferias y eventos corporativos con enfoque profesional.",
  path: "/video-eventos-madrid",
  keywords: ["video eventos madrid", "videografo eventos corporativos", "grabacion congresos madrid"],
})

export default function Page() {
  return <VideoEventosMadridClient />
}

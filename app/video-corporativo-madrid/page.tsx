import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import VideoCorporativoMadridClient from "./VideoCorporativoMadridClient"

export const metadata: Metadata = buildMetadata({
  title: "Productora y agencia de vídeo corporativo en Madrid",
  description:
    "Productora de vídeos corporativos en Madrid con trato directo y enfoque comercial. Yo y mi equipo llevamos propuesta, rodaje, edición, versiones y entrega para web, ventas y campañas.",
  path: "/video-corporativo-madrid",
  keywords: [
    "productora de vídeos corporativos en madrid",
    "agencia de vídeo corporativo en madrid",
    "video corporativo madrid",
    "video profesional para empresas madrid",
    "grabacion video corporativo madrid",
    "filmmaker corporativo",
  ],
})

export default function Page() {
  return <VideoCorporativoMadridClient />
}

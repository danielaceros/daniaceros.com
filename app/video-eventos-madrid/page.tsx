import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import VideoEventosMadridClient from "./VideoEventosMadridClient"

export const metadata: Metadata = buildMetadata({
  title: "Video de eventos en Madrid",
  description:
    "Servicio de video de eventos en Madrid para congresos, conferencias, ferias y eventos corporativos con enfoque profesional.",
  path: "/video-eventos-madrid",
  keywords: ["video eventos madrid", "videografo eventos corporativos", "grabacion congresos madrid"],
})

export default function Page() {
  return <VideoEventosMadridClient />
}

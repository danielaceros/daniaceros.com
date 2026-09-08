import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import VideografoMadridClient from "./VideografoMadridClient"

export const metadata: Metadata = buildMetadata({
  title: "Videógrafo en Madrid | Grabación profesional",
  description:
    "Videógrafo profesional en Madrid para eventos, empresas y contenido corporativo. Vídeo de alta calidad para comunicación de marca.",
  path: "/videografo-madrid",
  keywords: ["videografo madrid", "grabacion eventos madrid", "video corporativo madrid"],
})

export default function Page() {
  return <VideografoMadridClient />
}

import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import VideografoMadridClient from "./VideografoMadridClient"

export const metadata: Metadata = buildMetadata({
  title: "Videografo en Madrid | Grabacion profesional",
  description:
    "Videografo profesional en Madrid para eventos, empresas y contenido corporativo. Video de alta calidad para comunicacion de marca.",
  path: "/videografo-madrid",
  keywords: ["videografo madrid", "grabacion eventos madrid", "video corporativo madrid"],
})

export default function Page() {
  return <VideografoMadridClient />
}

import { localizedMetadata } from "@/lib/seo"
import VideografoMadridClient from "./VideografoMadridClient"

// Pendiente de traducir: en /en sale el contenido ES con noindex (ver I18N_GUIDE.md).
export const generateMetadata = localizedMetadata({
  title: "Videógrafo en Madrid | Grabación profesional",
  description:
    "Videógrafo profesional en Madrid para eventos, empresas y contenido corporativo. Vídeo de alta calidad para comunicación de marca.",
  path: "/videografo-madrid",
  keywords: ["videografo madrid", "grabacion eventos madrid", "video corporativo madrid"],
})

export default function Page() {
  return <VideografoMadridClient />
}

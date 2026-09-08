import type { Metadata } from "next"
import { BUSINESS_ID, DEFAULT_OG_IMAGE, PERSON_ID, SITE_URL, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo"
import SobreMiClient from "./SobreMiClient"

export const metadata: Metadata = buildMetadata({
  title: "Sobre mí",
  description:
    "Conoce a Daniel Acero, filmmaker corporativo especializado en vídeo para empresas, eventos e instituciones.",
  path: "/sobre-mi",
  keywords: ["sobre daniel acero", "filmmaker madrid", "videografo corporativo"],
})

// Person de primer nivel: el resto de páginas (layout raíz, blog) lo
// referencian por @id en vez de duplicar el objeto completo.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Daniel Acero",
  jobTitle: "Filmmaker corporativo",
  url: `${SITE_URL}/sobre-mi`,
  image: DEFAULT_OG_IMAGE,
  sameAs: ["https://www.instagram.com/daniaceros"],
  worksFor: { "@id": BUSINESS_ID },
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/sobre-mi" },
])

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SobreMiClient />
    </>
  )
}

import { localizedMetadata } from "@/lib/seo"
import ClientesClient from "./ClientesClient"

// Pendiente de traducir: en /en sale el contenido ES con noindex (ver I18N_GUIDE.md).
export const generateMetadata = localizedMetadata({
  title: "Clientes",
  description:
    "Clientes y proyectos audiovisuales para empresas, instituciones, agencias y marcas en Madrid y toda España.",
  path: "/clientes",
  keywords: ["clientes filmmaker", "video corporativo clientes", "casos audiovisuales"],
})

export default function Page() {
  return <ClientesClient />
}

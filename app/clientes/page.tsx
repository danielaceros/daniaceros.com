import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import ClientesClient from "./ClientesClient"

export const metadata: Metadata = buildMetadata({
  title: "Clientes",
  description:
    "Clientes y proyectos audiovisuales para empresas, instituciones, agencias y marcas en Madrid y toda Espana.",
  path: "/clientes",
  keywords: ["clientes filmmaker", "video corporativo clientes", "casos audiovisuales"],
})

export default function Page() {
  return <ClientesClient />
}

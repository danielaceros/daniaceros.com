import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import SobreMiClient from "./SobreMiClient"

export const metadata: Metadata = buildMetadata({
  title: "Sobre mi",
  description:
    "Conoce a Daniel Acero, filmmaker corporativo especializado en video para empresas, eventos e instituciones.",
  path: "/sobre-mi",
  keywords: ["sobre daniel acero", "filmmaker madrid", "videografo corporativo"],
})

export default function Page() {
  return <SobreMiClient />
}

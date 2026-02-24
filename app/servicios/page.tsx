import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Servicios de video para empresas y marcas",
  description:
    "Servicios de video corporativo e institucional en Madrid: grabacion, edicion y piezas para web, redes y comunicacion empresarial.",
  path: "/servicios",
  keywords: ["servicios de video madrid", "video corporativo", "video institucional"],
})

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20 space-y-10">
        <header className="space-y-6">
          <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/40">
            servicios
          </p>
          <h1 className="font-inter font-semibold uppercase tracking-[-0.08em] text-[30px] leading-[1.05] sm:text-[40px] lg:text-[56px]">
            Servicios de vídeo para empresas, eventos y marcas en Madrid
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Intro + bullets */}
          <div className="space-y-6 text-white/78">
            <p className="font-inter text-[14px] sm:text-[15px] leading-[1.7]">
              Soy Daniel Acero, filmmaker y videógrafo especializado en convertir eventos corporativos,
              congresos y experiencias de marca en piezas audiovisuales que comunican con impacto.
            </p>
            <p className="font-inter text-[14px] sm:text-[15px] leading-[1.7]">
              Trabajo con empresas y marcas que buscan contenido audiovisual profesional, emocional
              y alineado con su identidad.
            </p>

            <div className="space-y-3">
              <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                especialidades
              </p>
              <ul className="space-y-2 font-inter text-[14px] sm:text-[15px] leading-[1.6]">
                <li className="list-disc list-inside">
                  <Link
                    href="/servicios/corporativo"
                    className="font-semibold hover:text-white transition-colors"
                  >
                    Vídeo corporativo
                  </Link>{" "}
                  — piezas para empresas, marcas y lanzamientos.
                </li>
                <li className="list-disc list-inside">
                  <Link
                    href="/servicios/institucional"
                    className="font-semibold hover:text-white transition-colors"
                  >
                    Vídeo institucional
                  </Link>{" "}
                  — contenido para organizaciones, instituciones y entidades.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[-0.04em]">
                Trabajo en Madrid y en toda España
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
                Aunque estoy basado en Madrid, viajo para cubrir proyectos en toda España.
                He trabajado con compañías y proyectos para marcas nacionales e internacionales.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/Disen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=ae45c05e-35c1-40c4-a89a-b7a738811667"
                alt="Rodaje de vídeo para empresa"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/40">
                  para quién trabajo
                </p>
                <p className="mt-2 font-inter text-[13px] leading-[1.6]">
                  Empresas, agencias, instituciones, productoras y marcas que quieren comunicar con
                  un lenguaje visual cuidado y contemporáneo.
                </p>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/40">
                  formato
                </p>
                <p className="mt-2 font-inter text-[13px] leading-[1.6]">
                  Piezas para web, redes sociales, campañas de pago, presentaciones internas y
                  documentación de eventos corporativos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-8 border-t border-white/10 pt-10 mt-4">
          <h2 className="font-inter font-semibold uppercase text-[18px] sm:text-[20px]">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="max-w-3xl font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
            Cuéntame qué tipo de vídeo estás pensando (corporativo, institucional o evento) y qué
            objetivo te gustaría conseguir. Te propongo una forma de abordarlo y un plan claro de
            producción y entrega.
          </p>

          <div className="flex flex-wrap gap-3 text-[13px] text-white/70">
            <Link
              href="/servicios/corporativo"
              className="rounded-full border border-white/20 px-4 py-2 font-inter uppercase tracking-[0.12em] hover:border-white/60 hover:text-white transition-colors"
            >
              Servicios de vídeo corporativo
            </Link>
            <Link
              href="/servicios/institucional"
              className="rounded-full border border-white/20 px-4 py-2 font-inter uppercase tracking-[0.12em] hover:border-white/60 hover:text-white transition-colors"
            >
              Servicios de vídeo institucional
            </Link>
          </div>
        </section>
      </section>

      <ContactCTA />
    </main>
  )
}


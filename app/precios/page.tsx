import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Precios de servicios audiovisuales",
  description:
    "Como se calcula el precio de un video corporativo o cobertura de evento en Madrid. Presupuesto personalizado y transparente.",
  path: "/precios",
  keywords: ["precio video corporativo", "presupuesto videografo madrid", "coste video evento"],
})

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="space-y-6 mb-14">
          <p className="font-inter text-[11px] uppercase text-white/40">
            precios
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            ¿Cuánto cuesta un servicio de vídeo corporativo o un evento?
          </h1>
        </header>

        <div className="space-y-12 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Cómo se calculan los precios
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Cada proyecto es distinto. El presupuesto depende de varios factores que valoramos
              en la primera conversación:
            </p>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/78 list-disc list-inside">
              <li>Tipo de proyecto (vídeo corporativo, evento, institucional, piezas para redes).</li>
              <li>Duración del rodaje y número de días.</li>
              <li>Localización y desplazamientos.</li>
              <li>Entregas que necesitas (vídeo principal, versiones para redes, formatos adicionales).</li>
              <li>Plazos y urgencia.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Qué incluyen la mayoría de mis proyectos
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/78 list-disc list-inside">
              <li>Brief y definición del enfoque creativo.</li>
              <li>Grabación en 4K con equipo profesional.</li>
              <li>Edición y corrección de color.</li>
              <li>Vídeo principal listo para web o presentación.</li>
              <li>Versiones adaptadas a redes sociales (horizontal y/o vertical) cuando aplica.</li>
              <li>Música con licencia y ajustes de ritmo narrativo.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Por qué no trabajo con precios cerrados
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Un vídeo corporativo de un día en Madrid no es lo mismo que la cobertura de un
              congreso de tres días en otra ciudad, ni que una pieza con varias localizaciones y
              entrevistas. Por eso prefiero escuchar tu proyecto, entender el alcance y prepararte
              un presupuesto personalizado en lugar de ofrecer tarifas fijas que no se ajustan a la
              realidad de cada encargo.
            </p>
          </section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

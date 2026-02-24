import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

const steps = [
  {
    title: "Reunión inicial y briefing",
    items: [
      "Definición de objetivos",
      "Público objetivo",
      "Mensaje clave",
      "Estilo visual y tono",
      "Plazos y presupuesto",
      "Referencias",
    ],
  },
  {
    title: "Propuesta y planificación",
    items: [
      "Concepto creativo",
      "Guion y storyboard",
      "Localizaciones y permisos",
      "Equipo técnico y artístico",
      "Calendario de producción",
      "Presupuesto detallado",
    ],
  },
  {
    title: "Grabación del proyecto",
    items: [
      "Preproducción",
      "Rodaje",
      "Dirección de arte",
      "Sonido directo",
    ],
  },
  {
    title: "Edición y narrativa",
    items: [
      "Montaje",
      "Corrección de color",
      "Diseño sonoro y mezcla",
      "VFX (efectos visuales)",
      "Música original o licencias",
      "Grafismos y animaciones",
    ],
  },
  {
    title: "Revisión y ajustes",
    items: [
      "Revisión contigo del primer corte",
      "Hasta dos rondas de modificaciones incluidas para afinar el resultado",
    ],
  },
  {
    title: "Entrega final",
    items: [
      "Versiones finales en los formatos acordados (web, redes, presentación)",
      "Transferencia segura de archivos y copia de respaldo",
    ],
  },
  {
    title: "Soporte y continuidad",
    items: [
      "Soporte post-entrega para dudas o pequeños retoques",
      "Posibilidad de seguir colaborando en futuros proyectos",
    ],
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Proceso de trabajo",
  description:
    "Conoce el proceso de trabajo de Daniel Acero: briefing, produccion, edicion y entrega final para proyectos audiovisuales corporativos.",
  path: "/proceso",
  keywords: ["proceso de video corporativo", "como trabaja un filmmaker", "produccion audiovisual empresas"],
})

export default function ProcesoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="space-y-6 mb-14">
          <p className="font-inter text-[11px] uppercase text-white/40">
            proceso
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            Cómo trabajo
          </h1>
        </header>

        <div className="space-y-10 font-inter">
          {steps.map((step, i) => (
            <section key={step.title} className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white flex items-baseline gap-3">
                <span className="text-white/50 tabular-nums">{i + 1}.</span>
                {step.title}
              </h2>
              <ul className="space-y-1.5 text-[13px] sm:text-[14px] leading-[1.65] text-white/78 list-disc list-inside pl-5">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="space-y-4 pt-8 border-t border-white/10">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              ¿Por qué trabajar conmigo?
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Trabajo de forma clara y ordenada: desde el primer contacto definimos objetivos,
              plazos y entregas. Así evitas sorpresas y el resultado se alinea con lo que buscas.
              Además, al ser yo quien dirige y edita, la visión del proyecto se mantiene coherente
              de principio a fin.
            </p>
          </section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

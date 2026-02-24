import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

const budgetItems = [
  "Tu propuesta — qué tipo de vídeo o evento tienes en mente",
  "Tu objetivo — qué quieres conseguir con el contenido",
  "Tu público — a quién va dirigido",
  "Tus medios — dónde lo vas a publicar o usar (web, redes, presentaciones)",
  "Tu presupuesto — rango aproximado si lo tienes definido",
  "Tu fecha — cuándo necesitas el material o cuándo es el evento",
  "Tu formato — duración aproximada, estilo (corporativo, dinámico, documental)",
  "Tus referencias — vídeos o estilos que te gusten",
  "Tu equipo — si ya tienes equipo de comunicación o es solo contigo",
]

const processSteps = [
  "Primer contacto — me cuentas tu proyecto por WhatsApp o email",
  "Propuesta — te envío un enfoque creativo y presupuesto detallado",
  "Aceptación — revisamos juntos y confirmas si encaja",
  "Contrato — cerramos alcance, plazos y condiciones",
  "Pago — acordamos forma de pago (anticipo y resto a la entrega)",
  "Preproducción — planificación, guion y logística",
  "Rodaje — grabación según lo planificado",
  "Postproducción — edición, color y versiones",
  "Entrega final — te envío los archivos y quedamos para cualquier ajuste",
]

export const metadata: Metadata = buildMetadata({
  title: "Contratar servicio audiovisual",
  description:
    "Guia para contratar un proyecto audiovisual: que informacion enviar, como funciona el proceso y pasos para empezar.",
  path: "/contratar",
  keywords: ["contratar filmmaker madrid", "contratar videografo", "proyecto audiovisual empresas"],
})

export default function ContratarPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="space-y-6 mb-14">
          <p className="font-inter text-[11px] uppercase text-white/40">
            contratar
          </p>
          <h1 className="font-inter font-semibold uppercase text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            Empecemos tu proyecto
          </h1>
        </header>

        <div className="space-y-12 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase text-white flex items-baseline gap-3">
              <span className="text-white/50 tabular-nums">1.</span>
              ¿Qué necesito saber antes de preparar tu presupuesto?
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Para darte una propuesta clara y útil, me ayuda tener en cuenta lo siguiente:
            </p>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/78 list-disc list-inside pl-5">
              {budgetItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase text-white flex items-baseline gap-3">
              <span className="text-white/50 tabular-nums">2.</span>
              ¿Cómo funciona el proceso después de que me escribas?
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/78 list-disc list-inside pl-5">
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase text-white flex items-baseline gap-3">
              <span className="text-white/50 tabular-nums">3.</span>
              ¿Por qué trabajar conmigo?
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Trabajo de forma directa y transparente: desde el primer mensaje te digo si tu proyecto
              encaja y cómo lo abordaría. No hay intermediarios: tú hablas conmigo, yo dirijo y edito,
              y el resultado mantiene una visión coherente de principio a fin. Además, priorizo plazos
              realistas y entregas que realmente uses (web, redes, presentaciones), sin añadir complejidad
              innecesaria.
            </p>
          </section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

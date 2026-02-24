"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ContactCTA from "@/components/ContactCTA"
import { ease } from "@/lib/motion"

const comoTrabajoSteps = [
  { title: "Reunión inicial y briefing", items: ["Objetivos, público y mensaje clave.", "Estilo visual, plazos y presupuesto."] },
  { title: "Propuesta y planificación", items: ["Concepto, guion y plan de rodaje.", "Calendario y presupuesto detallado."] },
  { title: "Grabación", items: ["Preproducción, rodaje y sonido directo.", "En Madrid o donde indiques."] },
  { title: "Edición y narrativa", items: ["Montaje, color y diseño sonoro.", "Grafismos y versiones si se acuerda."] },
  { title: "Revisión y ajustes", items: ["Revisión del primer corte contigo.", "Hasta dos rondas de modificaciones incluidas."] },
  { title: "Entrega final", items: ["Formatos acordados (web, redes, sala).", "Transferencia segura de archivos."] },
]

const faqItems = [
  { q: "¿Dónde trabajo?", a: "Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere." },
  { q: "¿Necesitas un filmmaker en Madrid para tu evento o proyecto?", a: "No es obligatorio estar en Madrid. Trabajo en Madrid, en otras ciudades y en ubicaciones que tú indiques. Lo importante es encajar en fechas y alcance del proyecto." },
  { q: "Vídeo de eventos corporativos en Madrid", a: "Ofrezco cobertura de eventos corporativos en Madrid y alrededores: congresos, lanzamientos, convenciones, team buildings y experiencias. Incluyo grabación, edición y entregas en los formatos que necesites." },
  { q: "Qué incluyo en la cobertura de tu evento", a: "Grabación en multicámara cuando hace falta, sonido directo, edición del vídeo principal y, si se acuerda, versiones para redes sociales. Todo se detalla en la propuesta según el tipo de evento." },
  { q: "Tipos de eventos que cubro", a: "Congresos y jornadas, lanzamientos de producto, convenciones comerciales, eventos de equipo, presentaciones institucionales, inauguraciones y experiencias de marca." },
  { q: "¿Por qué un vídeo profesional marca la diferencia?", a: "Un vídeo profesional transmite seriedad y calidad, mejora el recuerdo de tu mensaje y te da material reutilizable para web, redes y campañas. Invertir en buen contenido suele rentabilizarse en imagen y alcance." },
  { q: "Estilo de grabación", a: "Trabajo con un estilo limpio y narrativo: planos que cuentan la historia del evento o de la marca, ritmo de edición acorde al uso final y una estética coherente con tu identidad. Uso 4K cuando el proyecto lo pide y Full HD como estándar." },
  { q: "Clientes para los que trabajo", a: "Empresas de todos los tamaños, instituciones públicas, ONGs, agencias, productoras y marcas que necesitan vídeo corporativo, de eventos o para redes. Si tienes un proyecto en mente, cuéntamelo." },
  { q: "Entregables y material", a: "Entrego los vídeos acordados (normalmente MP4 listo para web y redes), versiones cortas si se ha pactado, y el material en bruto solo si se incluye en el presupuesto." },
]

export default function FilmmakerMadridPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6 sm:pb-8">
        <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px]">
          Vídeo profesional para eventos, marcas y empresas en Madrid
        </h1>
      </section>

      <ContactPortfolioMarquee />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-20">
        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Servicios como filmmaker en Madrid
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Soy Daniel Acero, filmmaker y videógrafo especializado en vídeo corporativo, cobertura de eventos y piezas para marcas. Trabajo con empresas e instituciones que buscan contenido audiovisual profesional en Madrid y en toda España: desde un spot para redes hasta la cobertura completa de un congreso o un vídeo institucional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Por qué contratarme como filmmaker en Madrid
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Experiencia en proyectos corporativos e institucionales, comunicación clara y plazos respetados. Trabajo de forma ágil y adaptada a cada cliente: desde el briefing hasta la entrega final, con una visión coherente del proyecto y la posibilidad de escalar con equipo cuando hace falta.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Cómo trabajo
            </h2>
            <ol className="space-y-4">
              {comoTrabajoSteps.map((step, i) => (
                <li key={step.title} className="space-y-2">
                  <h3 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white flex items-baseline gap-2">
                    <span className="text-white/50 tabular-nums">{i + 1}.</span>
                    {step.title}
                  </h3>
                  <ul className="space-y-1 pl-6 text-[13px] sm:text-[14px] leading-[1.65] text-white/78">
                    {step.items.map((item) => (
                      <li key={item} className="list-disc">{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Preguntas frecuentes
            </h2>
            <ul className="space-y-2 border-t border-white/10 pt-4">
              {faqItems.map((item, i) => (
                <li key={item.q} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left font-inter text-[14px] sm:text-[15px] font-medium text-white transition-colors hover:text-white/90"
                  >
                    {item.q}
                    <span className={`shrink-0 text-white/50 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: ease.expo }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="font-inter text-[16px] sm:text-[18px] font-semibold uppercase  text-white">
              ¿Dónde trabajo?
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Estoy basado en Madrid y trabajo en toda España. Para eventos y rodajes me desplazo donde haga falta; para reuniones y entregas podemos hacerlo en persona en Madrid o por videollamada.
            </p>
          </section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ContactCTA from "@/components/ContactCTA"
import { ease } from "@/lib/motion"

const sectores = [
  "Instituciones públicas",
  "Grandes Corporaciones",
  "Startups",
  "Agencias de Marketing y Publicidad",
  "Productoras de Video",
  "Marcas de lujo",
  "ONGs",
  "Pymes",
]

const tiposProyectos = [
  "Video Corporativo",
  "Video para redes sociales",
  "Video eventos",
  "Testimoniales",
  "Video animacion",
  "Entrevistas",
  "Spots Publicitarios",
  "Documentales",
]

const porQueConfian = [
  "Experiencia contrastada en proyectos corporativos e institucionales.",
  "Comunicación clara y plazos de entrega respetados.",
  "Enfoque en el mensaje y en los objetivos de cada cliente.",
  "Flexibilidad para adaptarme a equipos y presupuestos.",
]

const faqItems = [
  {
    q: "¿Dónde trabajas?",
    a: "Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere.",
  },
  {
    q: "¿Necesito un filmmaker en Madrid para tu evento o proyecto?",
    a: "No es obligatorio estar en Madrid. Trabajo en Madrid, en otras ciudades y en ubicaciones que tú indiques. Lo importante es encajar en fechas y alcance del proyecto.",
  },
  {
    q: "Vídeo de eventos corporativos en Madrid",
    a: "Ofrezco cobertura de eventos corporativos en Madrid y alrededores: congresos, lanzamientos, convenciones, team buildings y experiencias. Incluyo grabación, edición y entregas en los formatos que necesites.",
  },
  {
    q: "Qué incluyo en la cobertura de tu evento",
    a: "Grabación en multicámara cuando hace falta, sonido directo, edición del vídeo principal y, si se acuerda, versiones para redes sociales. Todo se detalla en la propuesta según el tipo de evento.",
  },
  {
    q: "Tipos de eventos que cubro",
    a: "Congresos y jornadas, lanzamientos de producto, convenciones comerciales, eventos de equipo, presentaciones institucionales, inauguraciones y experiencias de marca.",
  },
  {
    q: "¿Por qué un vídeo profesional marca la diferencia?",
    a: "Un vídeo profesional transmite seriedad y calidad, mejora el recuerdo de tu mensaje y te da material reutilizable para web, redes y campañas. Invertir en buen contenido suele rentabilizarse en imagen y alcance.",
  },
  {
    q: "Métricas de grabación",
    a: "Trabajo en 4K cuando el proyecto lo pide y en Full HD como estándar. Formatos y duraciones se acuerdan en la propuesta según el uso final (web, redes, sala, etc.).",
  },
  {
    q: "Clientes para los que trabajo",
    a: "Empresas de todos los tamaños, instituciones públicas, ONGs, agencias, productoras y marcas que necesitan vídeo corporativo, de eventos o para redes. Si tienes un proyecto en mente, cuéntamelo.",
  },
  {
    q: "Entregables y material",
    a: "Entrego los vídeos acordados (normalmente MP4 listo para web y redes), versiones cortas si se ha pactado, y el material en bruto solo si se incluye en el presupuesto.",
  },
]

export default function ClientesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <ContactPortfolioMarquee />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-20">
        <header className="mb-12">
          <h1 className="font-inter font-semibold uppercase tracking-[-0.08em] text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            Clientes
          </h1>
        </header>

        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
              He trabajado con empresas de diferentes sectores
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {sectores.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] leading-[1.6] text-white/85"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
              Tipos de proyectos realizados
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {tiposProyectos.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] leading-[1.6] text-white/85"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
              Por qué confían en mí
            </h2>
            <ul className="space-y-2">
              {porQueConfian.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
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
                    <span
                      className={[
                        "shrink-0 text-white/50 transition-transform duration-200",
                        openFaq === i ? "rotate-180" : "",
                      ].join(" ")}
                    >
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

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

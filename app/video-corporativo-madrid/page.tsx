"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import ContactPortfolioMarquee from "@/components/ContactPortfolioMarquee"
import ContactCTA from "@/components/ContactCTA"
import { ease } from "@/lib/motion"

const tiposVideos = [
  "Video Corporativo",
  "Video para redes sociales",
  "Video eventos",
  "Testimoniales",
  "Video animación",
  "Entrevistas",
  "Spots publicitarios",
  "Documentales",
]

const coberturaEvento = [
  "Preproducción y planificación",
  "Grabación (multicámara cuando hace falta)",
  "Postproducción y edición",
  "Material final en los formatos acordados (web, redes, sala)",
]

const tiposEventos = [
  "Congresos y jornadas",
  "Ferias y stands",
  "Conferencias y presentaciones",
  "Lanzamientos de producto",
  "Convenciones comerciales",
  "Eventos de equipo y team building",
  "Inauguraciones",
]

const clientesTipos = [
  "Grandes Corporaciones",
  "Startups",
  "Agencias de Marketing y Publicidad",
  "Instituciones públicas",
  "Productoras de Video",
  "Marcas de lujo",
  "ONGs",
  "Pymes",
]

const faqParte1 = [
  { q: "¿Dónde trabajo?", a: "Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere." },
  { q: "¿Necesitas un vídeo corporativo profesional?", a: "Si quieres comunicar con claridad y calidad —presentar tu empresa, tu producto o un evento— un vídeo corporativo profesional te da credibilidad, control del mensaje y material reutilizable para web, redes y campañas. Te preparo una propuesta a medida según tu objetivo." },
]

export default function VideoCorporativoMadridPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6">
        <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px] text-center">
          Vídeo corporativo en Madrid
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/Disen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=ae45c05e-35c1-40c4-a89a-b7a738811667"
            alt="Vídeo corporativo para empresas en Madrid"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:pb-12">
        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Qué es un vídeo corporativo
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Un vídeo corporativo es una pieza audiovisual pensada para comunicar los valores, la actividad o el mensaje de una empresa, institución o marca. Sirve para presentar la compañía, un producto, un evento o una campaña de forma clara y profesional. Puede ser un vídeo de presentación, un reportaje de un evento, testimoniales, piezas para redes sociales o spots; el objetivo es siempre alinear imagen y mensaje con tu audiencia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Tipos de vídeos corporativos que realizo
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {tiposVideos.map((item) => (
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
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Por qué empresas en Madrid confían en mí
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Experiencia en proyectos corporativos e institucionales, comunicación clara y plazos respetados. Trabajo de forma ágil y adaptada a cada cliente: desde el briefing hasta la entrega final, con una visión coherente del proyecto. Las empresas confían en mí por el resultado, la seriedad en la producción y la posibilidad de escalar con equipo cuando el proyecto lo requiere.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Cómo trabajo
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Contacto inicial para entender tu objetivo; después te envío una propuesta personalizada con concepto, plazos y presupuesto. Tras el visto bueno, planificamos la producción, grabamos (en Madrid o donde indiques) y pasamos a edición y postproducción. Incluyo hasta dos rondas de revisión y entrego el material en los formatos acordados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Preguntas frecuentes
            </h2>
            <ul className="space-y-2 border-t border-white/10 pt-4">
              {faqParte1.map((item, i) => (
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

        </div>
      </section>

      <ContactPortfolioMarquee />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20">
        <h2 className="font-inter font-semibold uppercase  text-[24px] leading-[1.1] sm:text-[28px] lg:text-[32px] mb-12">
          Vídeo de eventos corporativos en Madrid
        </h2>

        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Qué incluyo en la cobertura de tu evento
            </h3>
            <ul className="space-y-2">
              {coberturaEvento.map((item) => (
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
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Tipos de eventos que cubro
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {tiposEventos.map((item) => (
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
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Por qué un vídeo profesional marca la diferencia
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Un vídeo profesional transmite seriedad y calidad, mejora el recuerdo de tu mensaje y te da material reutilizable para web, redes y campañas. Invertir en buen contenido suele rentabilizarse en imagen y alcance; los asistentes y quienes no pudieron asistir pueden revivir el evento y tu marca gana consistencia visual.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Estilo de grabación
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Trabajo con un estilo limpio y narrativo: planos que cuentan la historia del evento o de la marca, ritmo de edición acorde al uso final y una estética coherente con tu identidad. Uso 4K cuando el proyecto lo pide y Full HD como estándar; el formato y la duración se acuerdan en la propuesta según el uso (web, redes, sala).
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Clientes para los que trabajo
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {clientesTipos.map((item) => (
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
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Entrega del material
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Entrego los vídeos acordados en los formatos pactados (normalmente MP4 listo para web y redes), versiones cortas si se ha acordado, y el material en bruto solo si está incluido en el presupuesto. La transferencia se hace por enlace seguro y puedes solicitar copia de respaldo si la necesitas.
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-10">
            <h3 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              ¿Dónde trabajo?
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere.
            </p>
          </section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

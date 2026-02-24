"use client"

import Image from "next/image"
import ContactCTA from "@/components/ContactCTA"

const tiposEventos = [
  "Eventos corporativos",
  "Presentaciones, ponencias, reuniones, mesas redondas, convenciones",
  "Conferencias y simposios",
  "Ferias y exhibiciones",
  "Aperturas y lanzamientos de productos",
  "Ceremonias de premios",
  "Eventos deportivos",
  "Festivales y conciertos",
  "Otros eventos especiales",
]

const estiloGrabacion = [
  "Historia emocional",
  "Planificación detallada",
  "Equipo de trabajo experto",
  "Equipo técnico de vanguardia",
  "Edición profesional",
  "Entrega rápida y sencilla",
  "Cobertura flexible",
  "Postproducción personalizada",
]

const ejemplosClientes = [
  "PSA",
  "Fundación Española de la Energía",
  "Consejo de la Juventud",
  "Ayuntamiento de Madrid",
  "Dirección General de Bilingüismo",
  "Organizaciones sin ánimo de lucro",
]

const comoTrabajo = [
  "Sesión previa para entender tu proyecto y objetivos",
  "Creación del guion con un equipo de profesionales",
  "Grabación del evento en Madrid",
  "Edición de vídeo profesional",
  "Entrega rápida y sencilla para que puedas compartirlo",
]

export default function VideoEventosMadridPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6">
        <h1 className="font-inter font-semibold uppercase tracking-[-0.08em] text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px]">
          Vídeo de eventos en Madrid
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/Disen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=ae45c05e-35c1-40c4-a89a-b7a738811667"
            alt="Grabación de vídeo de eventos en Madrid"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        <p className="mt-6 text-[13px] sm:text-[14px] leading-[1.75] text-white/85 font-inter">
          Grabamos y editamos recuerdos audiovisuales para compartir con el mundo.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-20">
        <div className="space-y-14 font-inter">
          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
              Qué tipo de eventos cubro
            </h2>
            <ul className="space-y-2">
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
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
              Mi estilo de grabación de eventos
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {estiloGrabacion.map((item) => (
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
              Ejemplos de clientes
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {ejemplosClientes.map((item) => (
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
              Cómo trabajo
            </h2>
            <ol className="space-y-3">
              {comoTrabajo.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85"
                >
                  <span className="text-white/50 tabular-nums">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
              ¿Dónde trabajo?
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
              Con base en Madrid, pero me desplazo por toda España.
            </p>
          </section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

"use client"

import Link from "next/link"
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
  {
    q: "¿Dónde trabajo?",
    a: "Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere.",
  },
  {
    q: "¿Necesitas un vídeo profesional para tu empresa en Madrid?",
    a: "Si quieres comunicar con claridad y calidad —presentar tu empresa, tu producto o un servicio— un vídeo profesional te da credibilidad, control del mensaje y material reutilizable para web, redes, ventas y campañas. Yo y mi equipo te preparamos una propuesta a medida según tu objetivo.",
  },
  {
    q: "¿También preparas presupuesto y enfoque antes de grabar?",
    a: "Sí. Antes de rodar definimos objetivo, alcance, entregables y presupuesto. La idea es que sepas qué pieza vas a tener, para qué sirve y cómo la vamos a producir.",
  },
  {
    q: "¿Cuánto cuesta un vídeo profesional para empresa en Madrid?",
    a: "Depende del tipo de pieza, el número de jornadas, las localizaciones, el equipo técnico y las versiones finales. No trabajo con una tarifa genérica porque el objetivo y el uso cambian mucho. Si me cuentas qué necesitas, te preparo una propuesta y presupuesto claros.",
  },
  {
    q: "¿Cómo pedimos presupuesto para el vídeo?",
    a: "Lo más útil es compartir objetivo, tipo de empresa, plazo, localización y dónde vais a usar la pieza. Con eso puedo proponerte un enfoque realista y un presupuesto alineado con el resultado que buscáis.",
  },
  {
    q: "¿Sois una agencia de vídeo corporativo en Madrid o un equipo de producción?",
    a: "Trabajo de forma directa como filmmaker y director del proyecto. Cuando el alcance lo pide, sumo a mi equipo de producción, sonido, iluminación o postproducción. Tienes la solidez de una agencia de vídeo corporativo en Madrid, pero con trato directo y criterio unificado.",
  },
  {
    q: "¿Qué diferencia hay entre contratar una agencia grande y trabajar conmigo?",
    a: "La diferencia principal es la cercanía y la agilidad. Aquí hablas conmigo desde el briefing, definimos la propuesta sin capas innecesarias y yo coordino al equipo cuando hace falta. Eso suele traducirse en mejor encaje, decisiones más rápidas y un presupuesto más ajustado al proyecto real.",
  },
  {
    q: "¿Podéis preparar propuesta y presupuesto para un vídeo corporativo en Madrid?",
    a: "Sí. Si me compartes objetivo, tipo de empresa, localización, plazo y uso del vídeo, te preparo una propuesta clara con enfoque, alcance y presupuesto orientativo o cerrado según el caso.",
  },
  {
    q: "¿Qué entregables suele incluir un proyecto de vídeo corporativo?",
    a: "Depende del proyecto, pero lo normal es una pieza principal y, si interesa, adaptaciones cortas para web, LinkedIn, campañas o presentaciones comerciales. La idea es aprovechar el rodaje para que el material tenga recorrido real.",
  },
]

export default function VideoCorporativoMadridPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6">
        <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.1] sm:text-[36px] lg:text-[44px] text-center">
          Agencia de vídeo corporativo en Madrid para empresas y marcas
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/Disen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=ae45c05e-35c1-40c4-a89a-b7a738811667"
            alt="Grabación de vídeo corporativo para empresas en Madrid"
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
              Qué significa tener un vídeo profesional para tu empresa
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Si estás buscando una agencia de vídeo corporativo en Madrid, muchas veces en realidad necesitas algo más concreto: un equipo que entienda tu objetivo comercial, proponga una pieza viable y la ejecute bien de principio a fin. Yo lidero ese proceso con trato directo y, cuando el proyecto lo pide, sumo a mi equipo para cubrir producción, rodaje y postproducción sin que tengas que coordinar mil intermediarios.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Si estás buscando un vídeo profesional para empresas en Madrid, normalmente no necesitas solo una cámara. Necesitas una pieza que explique bien quién eres, qué vendes y por qué deberían elegirte. Yo y mi equipo trabajamos este tipo de proyectos de principio a fin: propuesta, enfoque, rodaje, edición y entrega lista para web, campañas, ventas o comunicación interna.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Un vídeo profesional para empresa puede servir para presentar la compañía, reforzar marca, enseñar un servicio, captar leads o apoyar una conversación comercial. La clave es que no se quede en algo bonito: tiene que ser útil para negocio y tener sentido en presupuesto, formato y uso real.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Qué incluye un vídeo profesional para empresas en Madrid
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85 list-disc list-inside">
              <li>Definición del objetivo comercial y del mensaje que hay que dejar claro.</li>
              <li>Planificación de rodaje, localizaciones, guion o escaleta cuando hace falta.</li>
              <li>Grabación con equipo profesional en Madrid o donde toque el proyecto.</li>
              <li>Edición, color, ritmo y versiones adaptadas para web, redes, ventas o campañas.</li>
            </ul>
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
              Si buscas una agencia de vídeo corporativo en Madrid, así trabajo
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              No funciono como una agencia tradicional con capas comerciales y producción separadas. Aquí hablas conmigo, aterrizamos el objetivo, definimos la propuesta y yo coordino al equipo necesario para sacar la pieza adelante. Para muchas empresas, eso significa menos ruido, más claridad y un vídeo mejor alineado con negocio.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Este formato encaja especialmente bien cuando necesitas una solución ágil: vídeo de marca, pieza corporativa, entrevistas, cobertura de evento con enfoque comercial o contenido para campañas. Tienes la capacidad de una agencia de vídeo corporativo en Madrid, pero con una dirección creativa unificada y trato directo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Qué resuelvo como agencia de vídeo corporativo para empresas
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Normalmente llegáis con una necesidad bastante concreta: presentar mejor la empresa, explicar un servicio, reforzar credibilidad, lanzar una campaña o dejar un activo serio para ventas. Mi trabajo no es solo grabar. Es traducir ese objetivo en una pieza que tenga sentido en mensaje, producción, calendario y retorno comercial.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Por eso, antes de rodar, definimos público, uso real del vídeo, tono, localizaciones, formato de entrega y qué versión necesita cada canal. Si hace falta, del mismo proyecto salen versiones para web, LinkedIn, paid media o presentaciones comerciales. Así no compras un vídeo bonito sin más; compras una herramienta útil para negocio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Por qué empresas en Madrid confían en mí
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Experiencia en proyectos corporativos e institucionales, comunicación clara y plazos respetados. Trabajo de forma ágil y adaptada a cada cliente: desde el briefing hasta la entrega final, con una visión coherente del proyecto. Las empresas confían en mí por el resultado, la seriedad en la producción y la posibilidad de escalar con equipo cuando el proyecto lo requiere.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              El enfoque es personal y profesional: yo lidero el proyecto y, cuando hace falta, sumo equipo para cubrir rodaje, sonido, iluminación o versiones extra. Así la pieza mantiene criterio creativo y al mismo tiempo responde a una necesidad real de negocio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Cómo trabajo
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Primero entiendo qué necesitas conseguir con el vídeo: vender mejor, presentar la empresa, apoyar una campaña o dejar una pieza sólida para reuniones, web y redes. Después te propongo una forma concreta de grabarlo. Tras el visto bueno, planificamos la producción, rodamos en Madrid o donde haga falta y cierro la edición con entregables pensados para uso real, no solo para enseñar una pieza bonita.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Si ya tienes claro el objetivo, puedes escribirme con el contexto del proyecto y te preparo una propuesta cerrada. Si todavía estás comparando opciones, revisa primero mi <Link href="/portfolio" className="text-white underline underline-offset-4 hover:text-white/80">portfolio</Link>, cómo planteo los <Link href="/servicios/corporativo" className="text-white underline underline-offset-4 hover:text-white/80">proyectos corporativos</Link>, el <Link href="/proceso" className="text-white underline underline-offset-4 hover:text-white/80">proceso de trabajo</Link> y la página de <Link href="/precios" className="text-white underline underline-offset-4 hover:text-white/80">precios</Link> para aterrizar mejor el presupuesto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Cuándo encaja contratar este servicio
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85 list-disc list-inside">
              <li>Cuando necesitas presentar tu empresa o servicio con una pieza más seria que un vídeo improvisado.</li>
              <li>Cuando ventas, marketing o dirección necesitan un activo reutilizable para web, reuniones, campañas y redes.</li>
              <li>Cuando buscas un proveedor en Madrid que pueda liderar la propuesta, la grabación y la edición sin marearte.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Presupuesto y propuesta para vídeo corporativo en Madrid
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              El presupuesto depende del objetivo, el número de jornadas, si hace falta guion, entrevistas, localizaciones, sonido, iluminación, versiones extra o adaptación para campañas. Lo importante es que la propuesta baje a tierra qué se va a hacer, qué entregables vas a recibir y para qué te van a servir.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Si me compartes contexto del proyecto, te digo rápido si encaja, cómo lo enfocaría y qué equipo tendría sentido mover. Puedes revisar también la página de <Link href="/precios" className="text-white underline underline-offset-4 hover:text-white/80">precios</Link>, algunos <Link href="/casos-de-exito" className="text-white underline underline-offset-4 hover:text-white/80">casos de éxito</Link> y el <Link href="/portfolio" className="text-white underline underline-offset-4 hover:text-white/80">portfolio</Link> para ver el nivel de acabado y el tipo de proyectos que suelo resolver.
            </p>
          </section>

          <section className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase  text-white/90">
              Pide presupuesto con contexto y te respondo yo
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Si me escribes con objetivo, tipo de pieza, plazo, localización y uso final, puedo decirte rápido si encaja y cómo lo plantearía. La idea no es venderte un vídeo genérico, sino proponerte una pieza útil para captar clientes, presentar mejor tu empresa o reforzar una campaña.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contacto" className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 bg-white px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-black transition hover:bg-white/90">
                Pedir propuesta
              </Link>
              <Link href="/portfolio" className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition hover:border-white/30 hover:text-white/85">
                Ver trabajos
              </Link>
            </div>
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
              Un vídeo profesional transmite seriedad, ordena mejor el mensaje y acelera conversaciones comerciales. Sirve para web, propuestas, campañas, LinkedIn, presentaciones o piezas de apoyo a ventas. Bien planteado, un solo rodaje puede darte una pieza principal y varias adaptaciones útiles para distintos puntos del embudo.
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

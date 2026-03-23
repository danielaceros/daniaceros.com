import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Filmmaker corporativo en Madrid | Vídeo profesional para empresas",
  description:
    "Filmmaker corporativo en Madrid para empresas que necesitan vídeo profesional orientado a negocio. Concepto, grabación y edición para web, ventas y marca.",
  path: "/servicios/corporativo",
  keywords: [
    "filmmaker corporativo",
    "filmmaker corporativo madrid",
    "video profesional para empresas madrid",
    "video corporativo madrid",
    "produccion de video para empresas",
  ],
})

export default function CorporateServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20 space-y-10">
        <header className="space-y-5">
          <p className="font-inter text-[11px] uppercase text-white/40">
            servicios · filmmaker corporativo
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[30px] leading-[1.05] sm:text-[40px] lg:text-[56px]">
            Filmmaker corporativo en Madrid para empresas y marcas
          </h1>
          <p className="max-w-3xl font-inter text-[14px] sm:text-[15px] leading-[1.7] text-white/72">
            Si buscas un filmmaker corporativo, no necesitas solo a alguien que grabe. Necesitas una pieza
            que te ayude a vender mejor, presentar tu empresa con criterio y dejar material útil para web,
            ventas, campañas y comunicación de marca.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)]">
          <div className="space-y-7 text-white/78">
            <p className="font-inter text-[14px] sm:text-[15px] leading-[1.7]">
              Soy Daniel Acero y trabajo como filmmaker corporativo para empresas que quieren comunicar
              quiénes son, qué hacen y por qué deberían elegirlas. Me encargo del enfoque, la grabación
              y la edición para que el vídeo no se quede en algo bonito: tiene que servir para negocio.
            </p>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                Qué hace un filmmaker corporativo
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7]">
                Un filmmaker corporativo traduce una necesidad comercial en una pieza audiovisual clara.
                Puede ser un vídeo de empresa para la web, una presentación de servicio, un testimonial,
                una pieza de marca o contenido para campañas. La diferencia está en que todo se plantea
                con intención: mensaje, rodaje, edición y entregables alineados con el uso real.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                Qué tipo de vídeo corporativo realizo
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                <li>· Vídeos corporativos de marca y posicionamiento.</li>
                <li>· Piezas para lanzamientos de producto o servicio.</li>
                <li>· Vídeos para web y presentaciones comerciales.</li>
                <li>· Piezas para campañas de pago y redes sociales.</li>
                <li>· Testimoniales y casos de éxito.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                Mi enfoque como filmmaker corporativo
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7]">
                Trabajo con un ángulo personal y profesional: yo y mi equipo nos ocupamos de que la pieza
                tenga criterio visual, mensaje claro y ejecución seria. Cada proyecto se plantea según el
                objetivo: captar confianza, explicar mejor un servicio, reforzar posicionamiento o apoyar una
                conversación comercial.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                Proceso de trabajo
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                <li>1. Brief, objetivo comercial y mensaje que hay que dejar claro.</li>
                <li>2. Plan de rodaje adaptado a tu equipo, localización y tiempos reales.</li>
                <li>3. Grabación con enfoque cinematográfico y atención al detalle.</li>
                <li>4. Edición, color y versiones para web, ventas, campañas o redes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase ">
                Cuándo te encaja contratar este servicio
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                <li>· Cuando necesitas un vídeo corporativo que explique bien tu empresa o servicio.</li>
                <li>· Cuando quieres material profesional para propuestas, web o campañas de captación.</li>
                <li>· Cuando buscas un filmmaker corporativo en Madrid que pueda liderar la pieza de principio a fin.</li>
              </ul>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase text-white/50">
                empresas con las que he trabajado
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/80">
                He colaborado con marcas, instituciones y compañías de distintos sectores:
                entretenimiento, deporte, formación, retail y sector servicios.
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase text-white/50">
                dónde trabajo
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/80">
                Trabajo principalmente en Madrid, pero también me desplazo a otras ciudades cuando el
                proyecto lo requiere.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-4 border-t border-white/10 pt-10 space-y-4">
          <h2 className="font-inter text-[16px] sm:text-[18px] font-semibold uppercase ">
            ¿Necesitas un filmmaker corporativo para tu empresa?
          </h2>
          <p className="max-w-3xl font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
            Cuéntame qué pieza necesitas, qué objetivo comercial tiene y dónde la vas a usar. Yo y mi
            equipo te preparamos una propuesta clara de enfoque, rodaje y entregables para que el vídeo
            tenga sentido de negocio desde el primer día.
          </p>
        </section>
      </section>

      <ContactCTA />
    </main>
  )
}


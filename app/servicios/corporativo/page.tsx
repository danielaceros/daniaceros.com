import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Servicio de video corporativo en Madrid",
  description:
    "Servicio profesional de video corporativo para empresas en Madrid. Grabacion, edicion y contenido audiovisual orientado a negocio.",
  path: "/servicios/corporativo",
  keywords: ["video corporativo madrid", "filmmaker corporativo", "produccion de video para empresas"],
})

export default function CorporateServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20 space-y-10">
        <header className="space-y-5">
          <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/40">
            servicios · vídeo corporativo
          </p>
          <h1 className="font-inter font-semibold uppercase tracking-[-0.08em] text-[30px] leading-[1.05] sm:text-[40px] lg:text-[56px]">
            Vídeo corporativo para empresas en Madrid
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)]">
          <div className="space-y-7 text-white/78">
            <p className="font-inter text-[14px] sm:text-[15px] leading-[1.7]">
              Diseño, grabo y edito vídeos corporativos para empresas que quieren comunicar quiénes
              son, qué hacen y por qué son diferentes. Desde piezas para web y presentaciones hasta
              contenido pensado para redes y campañas.
            </p>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[-0.04em]">
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
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[-0.04em]">
                Mi enfoque como filmmaker corporativo
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7]">
                Cada pieza está pensada para transmitir una idea clara y alineada con tu marca:
                narrativa cuidada, ritmo cinematográfico y atención al detalle en cada plano.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[-0.04em]">
                Proceso de trabajo
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                <li>1. Brief y enfoque creativo.</li>
                <li>2. Plan de rodaje adaptado a tu equipo y localización.</li>
                <li>3. Grabación en 4K con enfoque cinematográfico.</li>
                <li>4. Edición, color y versiones para los distintos canales.</li>
              </ul>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase tracking-[0.18em] text-white/50">
                empresas con las que he trabajado
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/80">
                He colaborado con marcas, instituciones y compañías de distintos sectores:
                entretenimiento, deporte, formación, retail y sector servicios.
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase tracking-[0.18em] text-white/50">
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
          <h2 className="font-inter text-[16px] sm:text-[18px] font-semibold uppercase tracking-[-0.04em]">
            ¿Quieres contar la historia de tu empresa?
          </h2>
          <p className="max-w-3xl font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
            Cuéntame qué tipo de vídeo corporativo necesitas, para qué canal lo vas a utilizar y
            qué objetivos persigues. A partir de ahí preparo una propuesta clara de enfoque,
            rodaje y entregas.
          </p>
        </section>
      </section>

      <ContactCTA />
    </main>
  )
}


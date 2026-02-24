import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Servicio de video institucional",
  description:
    "Video institucional y cobertura audiovisual para entidades, organizaciones e instituciones en Madrid y toda Espana.",
  path: "/servicios/institucional",
  keywords: ["video institucional madrid", "cobertura audiovisual institucional", "filmmaker para entidades"],
})

export default function InstitutionalServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20 space-y-10">
        <header className="space-y-5">
          <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-white/40">
            servicios · vídeo institucional
          </p>
          <h1 className="font-inter font-semibold uppercase tracking-[-0.08em] text-[30px] leading-[1.05] sm:text-[40px] lg:text-[56px]">
            Vídeo institucional y cobertura audiovisual para organizaciones y entidades
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)]">
          <div className="space-y-7 text-white/78">
            <p className="font-inter text-[14px] sm:text-[15px] leading-[1.7]">
              Ayudo a instituciones, organizaciones y entidades a comunicar su labor con imágenes:
              vídeos institucionales, actos oficiales, jornadas, congresos y proyectos de impacto
              social.
            </p>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[-0.04em]">
                Qué puedo hacer por tu institución
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                <li>· Vídeos institucionales para web y memorias anuales.</li>
                <li>· Cobertura audiovisual de jornadas, congresos y eventos.</li>
                <li>· Piezas breves para redes sociales y campañas.</li>
                <li>· Contenido documental para proyectos y programas específicos.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[-0.04em]">
                Estilo y enfoque
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7]">
                Busco un equilibrio entre cercanía y formalidad: imagen cuidada, respeto por el
                contexto institucional y una narrativa clara que ponga en valor el trabajo de tu
                organización.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase tracking-[-0.04em]">
                Proceso de trabajo
              </h2>
              <ul className="space-y-1 font-inter text-[13px] sm:text-[14px] leading-[1.6]">
                <li>1. Definición de mensajes clave y públicos.</li>
                <li>2. Planificación de rodaje y logística con tu equipo.</li>
                <li>3. Grabación discreta, respetando protocolo y tiempos.</li>
                <li>4. Edición y entregas adaptadas a los canales donde se va a difundir.</li>
              </ul>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase tracking-[0.18em] text-white/50">
                organizaciones con las que trabajo
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/80">
                Cámaras de comercio, federaciones, asociaciones, instituciones educativas,
                administraciones y entidades del tercer sector.
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 p-6 space-y-3">
              <h2 className="font-inter text-[13px] uppercase tracking-[0.18em] text-white/50">
                entregas habituales
              </h2>
              <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/80">
                Vídeo principal para web o presentación, clips adaptados a redes, y versiones más
                técnicas para memoria anual o informes internos.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-4 border-t border-white/10 pt-10 space-y-4">
          <h2 className="font-inter text-[16px] sm:text-[18px] font-semibold uppercase tracking-[-0.04em]">
            ¿Tu institución necesita comunicar con claridad y profesionalidad?
          </h2>
          <p className="max-w-3xl font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/72">
            Cuéntame qué tipo de acto, proyecto o iniciativa quieres documentar o explicar. Te
            propongo un enfoque que encaje con el tono de tu organización y el público al que te
            diriges.
          </p>
        </section>
      </section>

      <ContactCTA />
    </main>
  )
}


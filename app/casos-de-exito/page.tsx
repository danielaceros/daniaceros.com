import type { Metadata } from "next"
import Link from "next/link"
import ContactCTA from "@/components/ContactCTA"
import { projects } from "@/data/projects"
import { VIDEO_POSTER_URL } from "@/lib/media"
import { buildMetadata } from "@/lib/seo"

// Casos de éxito: slug debe existir en data/projects; category es la etiqueta del diseño
const casosDeExito = [
  { slug: "fifa", category: "Evento corporativo internacional" },
  { slug: "camara-de-comercio", category: "Evento subvencional" },
  { slug: "federacion-esgrima", category: "Competición deportiva" },
  { slug: "ifema", category: "Vídeo institucional" },
  { slug: "tengo-un-plan", category: "Marca personal y formación" },
  { slug: "cinesa", category: "Experiencia de marca" },
  { slug: "omar-montes", category: "Concierto" },
  { slug: "brahim-diaz", category: "Proyecto promocional Sony Pictures" },
]

export const metadata: Metadata = buildMetadata({
  title: "Casos de exito",
  description:
    "Casos de exito audiovisuales para empresas, marcas e instituciones. Proyectos reales con resultados medibles.",
  path: "/casos-de-exito",
  keywords: ["casos de exito video", "portfolio corporativo", "proyectos audiovisuales madrid"],
})

function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export default function CasosDeExitoPage() {
  const casesWithProject = casosDeExito
    .map((c) => ({ ...c, project: getProjectBySlug(c.slug) }))
    .filter((c): c is typeof c & { project: NonNullable<typeof c.project> } => !!c.project)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="mb-14">
          <h1 className="font-inter font-semibold uppercase text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            Casos de éxito
          </h1>
        </header>

        <div className="space-y-16 font-inter">
          {casesWithProject.map(({ slug, category, project }, index) => (
            <article key={slug} className="space-y-4">
              <h2 className="font-inter text-[15px] sm:text-[17px] font-bold uppercase text-white/95">
                Caso de éxito {index + 1}: {project.title.split("—")[0].trim()} ({category.toUpperCase()})
              </h2>
              <Link
                href={`/portfolio/${slug}`}
                className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]"
                aria-label={`Ver caso de éxito: ${project.title}`}
              >
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={index < 2 ? "auto" : "metadata"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                >
                  <track kind="captions" srcLang="es" label="Sin dialogo" src="/captions/silent.vtt" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="pointer-events-none absolute bottom-4 left-4 right-4 font-inter text-[15px] font-semibold uppercase text-white sm:text-[17px]">
                  {project.title.split("—")[0].trim()}
                </span>
              </Link>
              <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
                {project.sections[0]?.items?.[0] ?? ""}
              </p>
            </article>
          ))}

          <section className="space-y-4 border-t border-white/10 pt-12">
            <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
              ¿Por qué funcionan estos proyectos?
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              En cada caso hay un objetivo claro, un mensaje que transmitir y un resultado medible: refuerzo de marca, contenido para redes, documentación del evento o impacto emocional. Trabajamos desde el briefing hasta la entrega con un enfoque narrativo y una estética coherente con la identidad del cliente, lo que hace que el vídeo no sea solo un recuerdo, sino una pieza de comunicación que suma.
            </p>
          </section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

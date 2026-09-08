import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

// TODO: Dani debe subir reemplazos reales a Vercel Blob para estos assets
// (vídeo banner + 7 fotos del estudio, antes en Firebase Storage, ahora
// rotos). Hasta entonces se han quitado la sección de vídeo hero y la
// galería completa más abajo.

const formatos = [
  "Reels y TikToks",
  "Videos para YouTube",
  "Podcasts y entrevistas",
  "Fotos para redes sociales",
  "Contenido para newsletters",
  "Videos corporativos",
]

const beneficios = [
  "Ahorra Tiempo|Produce semanas de contenido en una sola sesion. Sin improvisar, sin estres y sin perder horas editando en casa.",
  "Calidad Profesional|Iluminacion de estudio, sonido profesional y un equipo que sabe como hacerte brillar ante la camara.",
  "Localizacion Unica|Un rooftop privado en el centro de Madrid con vistas espectaculares. El escenario perfecto para tu marca.",
  "Todo Incluido|Equipo tecnico, direccion creativa, maquillaje y teleprompter. Tu solo tienes que presentarte.",
  "Contenido Estrategico|No grabamos por grabar. Planificamos cada pieza para que encaje en tu estrategia de contenidos.",
  "Resultados Inmediatos|Recibe tu contenido editado y listo para publicar en menos de una semana.",
]

const proceso = [
  "Briefing Estrategico|Analizamos tu marca, tu audiencia y tus objetivos para disenar un plan de contenido a medida.",
  "Pre-produccion|Preparamos guiones, escaleta, referencias visuales y todo lo necesario para que el dia de grabacion sea perfecto.",
  "Dia de Grabacion|Grabamos todo el contenido planificado en nuestro estudio rooftop con un equipo profesional a tu disposicion.",
  "Post-produccion y Entrega|Editamos, corregimos color, anadimos subtitulos y te entregamos todo listo para publicar.",
]

const faq = [
  {
    q: "Necesito experiencia delante de la camara?",
    a: "No. Te guiamos durante toda la sesion para que te sientas comodo y natural.",
  },
  {
    q: "Que incluye exactamente el servicio?",
    a: "Incluye espacio, filmmaker, equipo tecnico, direccion y entrega lista para publicar.",
  },
  {
    q: "Cuanto contenido puedo grabar en una sesion?",
    a: "Depende del formato, pero una media jornada suele cubrir entre 10 y 20 piezas cortas.",
  },
  {
    q: "En cuanto tiempo recibo el contenido editado?",
    a: "Habitualmente en menos de una semana, segun volumen y complejidad.",
  },
  {
    q: "Puedo traer a mi propio equipo?",
    a: "Si, podemos integrarlo en el flujo de produccion sin problema.",
  },
  {
    q: "Donde esta el estudio?",
    a: "En Calle Ronda de Atocha 16, en el centro de Madrid.",
  },
  {
    q: "Como reservo una sesion?",
    a: "Escribenos y te respondemos en menos de 24 horas con propuesta personalizada.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Rooftop Content Studio - Madrid",
  description:
    "Estudio de grabación profesional con vistas al atardecer de Madrid. Produce contenido premium para redes, podcast y vídeo corporativo.",
  path: "/the-rooftop-content-studio",
  keywords: [
    "rooftop content studio madrid",
    "estudio de grabacion madrid",
    "reels y podcast madrid",
    "video corporativo madrid",
  ],
})

export default function TheRooftopContentStudioPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="mx-auto max-w-5xl px-4 pb-8 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <nav className="mb-10 rounded-full border border-white/10 bg-black/65 px-5 py-3 backdrop-blur">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase  text-white/70 sm:text-[11px]">
            {["Rooftop Content Studio", "Estudio", "Galeria", "Proceso", "Tarifas", "FAQ", "Hablemos"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        <p className="text-[11px] uppercase text-white/60 sm:text-[12px]">
          Estudio de grabacion profesional con vistas al atardecer de Madrid
        </p>
        <h1 className="mt-4 font-inter text-[34px] font-semibold uppercase leading-[1.05] sm:text-[46px] lg:text-[60px]">
          Estudio de Grabacion en Madrid
          <br />
          Graba Meses de Contenido
          <br />
          en Una Manana
        </h1>
      </section>

      <section className="mx-auto max-w-5xl overflow-hidden border-y border-white/10 py-3">
        <div className="rooftop-ticker whitespace-nowrap text-[10px] uppercase text-white/55 sm:text-[11px]">
          {"CONTENT STUDIO · MADRID · ROOFTOP · GRABACION PROFESIONAL · REELS · PODCAST · VIDEO · ".repeat(8)}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div>
          <p className="text-[12px] uppercase text-white/55">( Que es )</p>
          <h2 className="mt-3 text-[27px] font-semibold leading-[1.15] sm:text-[33px]">
            Tu Estudio de Contenido en Madrid.
          </h2>
          <p className="mt-4 text-[14px] leading-[1.75] text-white/78">
            Rooftop Content Studio es un espacio de grabacion premium disenado para creadores,
            marcas y profesionales que quieren producir contenido de calidad sin complicaciones.
          </p>
          <p className="mt-4 text-[14px] leading-[1.75] text-white/78">
            Reservas tu sesion, te presentas y nosotros nos encargamos de todo: equipo,
            iluminacion, direccion y edicion. Sales con semanas de contenido listo para publicar.
          </p>

          <h3 className="mt-7 text-[13px] font-semibold uppercase  text-white/88">
            Formatos que producimos
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {formatos.map((item) => (
              <li key={item} className="text-[13px] text-white/78">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TODO: Dani debe subir reemplazos reales a Vercel Blob para los
          assets de esta sección (galería de 7 fotos del estudio, antes en
          Firebase Storage, ahora rotas). Se quitó la sección "Galeria"
          completa. */}

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">( Beneficios )</p>
        <h2 className="mb-6 text-[26px] font-semibold sm:text-[32px]">Por Que Elegirnos.</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {beneficios.map((item, index) => {
            const [title, body] = item.split("|")
            return (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[11px] font-semibold uppercase text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[18px] font-semibold text-white/95">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-white/75">{body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">( Proceso )</p>
        <h2 className="mb-6 text-[26px] font-semibold sm:text-[32px]">Como Trabajamos.</h2>
        <ol className="space-y-3">
          {proceso.map((item, index) => {
            const [title, body] = item.split("|")
            return (
              <li key={title} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                <p className="text-[11px] font-semibold uppercase text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[17px] font-semibold">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-white/75">{body}</p>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">( Tarifas )</p>
        <h2 className="mb-2 text-[26px] font-semibold sm:text-[32px]">Elige tu Plan.</h2>
        <p className="mb-6 text-[13px] text-white/70">Todo incluido. Sin sorpresas. Sin costes ocultos.</p>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-[11px] uppercase text-white/55">Media Jornada</p>
            <p className="mt-3 text-[42px] font-semibold leading-none">600€</p>
            <p className="mt-1 text-[13px] text-white/65">/ 4 horas</p>
            <p className="mt-4 text-[13px] leading-[1.7] text-white/75">
              Ideal para grabar entre 10 y 20 piezas de contenido corto o modulos especificos.
            </p>
            <button className="mt-6 rounded-full border border-white/20 px-5 py-2 text-[12px] uppercase  text-white/90">
              Reservar
            </button>
          </article>

          <article className="rounded-2xl border border-white/20 bg-white/[0.05] p-6">
            <p className="inline-block rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase text-white/80">
              Popular
            </p>
            <p className="mt-4 text-[11px] uppercase text-white/55">Jornada Completa</p>
            <p className="mt-3 text-[42px] font-semibold leading-none">1.000€</p>
            <p className="mt-1 text-[13px] text-white/65">/ 8 horas</p>
            <p className="mt-4 text-[13px] leading-[1.7] text-white/75">
              Perfecta para formaciones completas, podcast o produccion intensiva.
            </p>
            <button className="mt-6 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-[12px] uppercase  text-white">
              Reservar
            </button>
          </article>
        </div>

        <p className="mt-5 text-[12px] uppercase text-white/55">
          Incluye: Espacio · Filmmaker · Equipo tecnico
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">( Ubicacion )</p>
        <h2 className="mb-3 text-[26px] font-semibold sm:text-[32px]">En el Corazon de Madrid.</h2>
        <p className="mb-5 max-w-3xl text-[14px] leading-[1.75] text-white/75">
          Nuestro estudio rooftop esta situado en el centro de Madrid, con facil acceso en
          transporte publico y parking cercano. Un espacio privado con vistas panoramicas.
        </p>
        <ul className="mb-5 grid gap-2 text-[13px] text-white/75 sm:grid-cols-3">
          <li>Centro de Madrid, Espana</li>
          <li>Metro a menos de 5 minutos</li>
          <li>Parking publico a 2 minutos</li>
        </ul>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Mapa de ubicacion del Rooftop Content Studio en Madrid"
            src="https://www.google.com/maps?q=Calle%20Ronda%20de%20Atocha%2016%2C%20Madrid&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[280px] w-full sm:h-[340px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">( FAQ )</p>
        <h2 className="mb-5 text-[26px] font-semibold sm:text-[32px]">Preguntas Frecuentes.</h2>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5">
          {faq.map((item) => (
            <details key={item.q} className="border-b border-white/10 py-4 last:border-b-0">
              <summary className="cursor-pointer list-none pr-8 text-[14px] font-medium text-white/92">
                {item.q}
              </summary>
              <p className="pt-3 text-[13px] leading-[1.7] text-white/72">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-4 text-[12px] uppercase text-white/55">( Contacto )</p>
        <h2 className="mb-3 text-[26px] font-semibold sm:text-[32px]">Hablemos de tu Proyecto.</h2>
        <p className="mb-6 max-w-3xl text-[14px] leading-[1.75] text-white/75">
          Cuentanos sobre tu proyecto y te responderemos en menos de 24 horas con una
          propuesta personalizada.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-[14px] text-white/78">
            <p>hola@therooftopcontentstudio.com</p>
            <p className="mt-2">+34 711 25 54 96</p>
            <p className="mt-2">Centro de Madrid, Espana</p>
          </div>

          <form className="grid gap-3 rounded-2xl border border-white/10 bg-black/35 p-5">
            <label className="text-[12px] text-white/70">
              Nombre *
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder="Tu nombre" />
            </label>
            <label className="text-[12px] text-white/70">
              Email *
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder="tu@email.com" />
            </label>
            <label className="text-[12px] text-white/70">
              Telefono
              <input className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder="+34 711 25 54 96" />
            </label>
            <label className="text-[12px] text-white/70">
              Mensaje *
              <textarea className="mt-1 h-24 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 text-[13px]" placeholder="Cuentanos sobre tu proyecto..." />
            </label>
            <button className="mt-2 rounded-full border border-white/25 px-5 py-2 text-[12px] uppercase  text-white/90">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase text-white/55">Navegacion</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-white/72">
            {["Estudio", "Galeria", "Proceso", "Tarifas", "FAQ", "Contacto"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5 text-[12px] text-white/70">hola@therooftopcontentstudio.com</p>
          <p className="mt-1 text-[12px] text-white/70">+34 711 25 54 96</p>
          <p className="mt-1 text-[12px] text-white/70">Centro de Madrid, Espana</p>
          <p className="mt-6 text-[11px] text-white/45">© 2026 Rooftop Content Studio</p>
        </div>
      </footer>

      <style>{`
        .rooftop-ticker {
          animation: rooftop-ticker 38s linear infinite;
          will-change: transform;
        }

        @keyframes rooftop-ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rooftop-ticker {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

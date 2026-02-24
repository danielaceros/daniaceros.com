import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

const faqSections = [
  {
    title: "Servicios y tipos de proyectos",
    items: [
      {
        q: "¿Qué tipos de vídeo realizas?",
        a: "Vídeo corporativo (marca, producto, web), cobertura de eventos (congresos, lanzamientos, experiencias), vídeo institucional para organizaciones y entidades, y piezas para redes sociales y campañas.",
      },
      {
        q: "¿Trabajas solo o con equipo?",
        a: "Depende del proyecto. Para muchas producciones trabajo en solitario (cámara, dirección y edición). Para proyectos más grandes puedo coordinar equipo técnico y artístico según lo que necesites.",
      },
      {
        q: "¿Haces vídeos fuera de Madrid?",
        a: "Sí. Estoy basado en Madrid pero me desplazo por toda España para rodajes y eventos cuando el proyecto lo requiere.",
      },
    ],
  },
  {
    title: "Proceso de trabajo",
    items: [
      {
        q: "¿Cuánto tarda un proyecto de principio a fin?",
        a: "Varía según el alcance. Un vídeo corporativo sencillo puede estar listo en 2-3 semanas; un evento con varias entregas puede llevar 3-6 semanas. Lo concretamos en la propuesta.",
      },
      {
        q: "¿Cuántas revisiones incluye?",
        a: "Incluyo hasta dos rondas de modificaciones sobre el primer corte. Cambios adicionales se pueden acordar si el proyecto lo requiere.",
      },
      {
        q: "¿Necesito tener el guion listo?",
        a: "No es obligatorio. Puedo ayudarte a definir mensajes, estructura y tono desde el briefing. Si ya tienes un borrador, lo trabajamos juntos.",
      },
    ],
  },
  {
    title: "Entregas y formatos",
    items: [
      {
        q: "¿En qué formato entrego el vídeo?",
        a: "Normalmente en MP4 (H.264) listo para web y redes. Si necesitas otros formatos (MOV, ProRes, DCP) o resoluciones concretas, lo indicamos en el presupuesto.",
      },
      {
        q: "¿Haces versiones para redes sociales?",
        a: "Sí. Puedo incluir versiones en horizontal (16:9) y vertical (9:16) para Instagram, TikTok, LinkedIn, etc., según lo que uses en tu comunicación.",
      },
      {
        q: "¿Cómo me envías los archivos?",
        a: "Por enlace de descarga (WeTransfer, Drive o similar) con acceso temporal. Si necesitas backup a largo plazo, lo comentamos.",
      },
    ],
  },
  {
    title: "Precios y presupuestos",
    items: [
      {
        q: "¿Por qué no hay precios fijos en la web?",
        a: "Cada proyecto es distinto: duración del rodaje, número de entregas, localización y plazos influyen en el presupuesto. Prefiero prepararte una propuesta personalizada tras conocer tu necesidad.",
      },
      {
        q: "¿Cómo se paga?",
        a: "Suele haber un anticipo al confirmar el proyecto y el resto a la entrega. La forma concreta (transferencia, plazos) la acordamos en el contrato.",
      },
      {
        q: "¿El presupuesto tiene validez?",
        a: "Sí. En la propuesta indico un plazo de validez (normalmente 15-30 días) para que puedas valorarlo con calma.",
      },
    ],
  },
  {
    title: "Reservas y logística",
    items: [
      {
        q: "¿Con cuánta antelación debo contactar?",
        a: "Cuanto antes, mejor. Para eventos con fecha fija conviene reservar con varias semanas de antelación. Para vídeos corporativos sin fecha cerrada, podemos encajar según disponibilidad.",
      },
      {
        q: "¿Necesito permisos o seguros para grabar?",
        a: "En espacios privados (oficina, local) suele ser suficiente con tu autorización. En la vía pública o en ciertos recintos a veces hace falta permiso; te indico qué necesitas según el caso.",
      },
    ],
  },
  {
    title: "Uso y derechos",
    items: [
      {
        q: "¿Puedo usar el vídeo donde quiera?",
        a: "Sí. Al contratar el proyecto, los derechos de uso quedan para ti según lo que cerremos (uso corporativo, redes, campañas de pago, etc.). Lo detallamos en el contrato.",
      },
      {
        q: "¿Puedes usar el vídeo en tu portfolio?",
        a: "Suelo pedir permiso para incluir el trabajo en mi web y redes salvo que haya confidencialidad. Si prefieres que no se publique, lo respeto.",
      },
    ],
  },
  {
    title: "Otros",
    items: [
      {
        q: "¿Trabajas con agencias o solo con el cliente final?",
        a: "Ambos. Trabajo con empresas e instituciones directamente y también con agencias o productoras que externalizan la parte audiovisual.",
      },
      {
        q: "¿Qué pasa si necesito cambios de última hora?",
        a: "Cambios pequeños suelen poder integrarse. Cambios grandes (más días de rodaje, nuevas entregas) pueden implicar un ajuste de presupuesto y plazos; lo hablamos y vemos la mejor opción.",
      },
    ],
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Preguntas frecuentes",
  description:
    "Respuestas a preguntas frecuentes sobre video corporativo, eventos, entregas, plazos, presupuestos y derechos de uso.",
  path: "/faq",
  keywords: ["faq video corporativo", "dudas videografo madrid", "preguntas produccion audiovisual"],
})

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <header className="space-y-6 mb-14">
          <p className="font-inter text-[11px] uppercase text-white/40">
            faq
          </p>
          <h1 className="font-inter font-semibold uppercase text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            Preguntas frecuentes
          </h1>
        </header>

        <div className="space-y-12 font-inter">
          {faqSections.map((section) => (
            <section key={section.title} className="space-y-5">
              <h2 className="font-inter text-[13px] sm:text-[14px] font-semibold uppercase text-white/90">
                {section.title}
              </h2>
              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li key={item.q} className="space-y-2">
                    <p className="font-inter text-[14px] sm:text-[15px] font-medium text-white">
                      {item.q}
                    </p>
                    <p className="font-inter text-[13px] sm:text-[14px] leading-[1.7] text-white/78">
                      {item.a}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

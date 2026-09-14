// Textos de /faq por idioma (también alimentan el JSON-LD FAQPage).
// El ES es literal del original (no cambiar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Preguntas frecuentes",
  metaDescription:
    "Respuestas a preguntas frecuentes sobre vídeo corporativo, eventos, entregas, plazos, presupuestos y derechos de uso.",
  keywords: ["faq video corporativo", "dudas videografo madrid", "preguntas produccion audiovisual"],
  kicker: "faq",
  title: "Preguntas frecuentes",
  sections: [
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
          a: "Normalmente en .MP4 (H.264) listo para web y redes. Si necesitas otros formatos (MOV, ProRes, DCP) o resoluciones concretas, lo indicamos en el presupuesto.",
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
  ],
}

const en: typeof es = {
  metaTitle: "Frequently asked questions",
  metaDescription:
    "Answers to frequently asked questions about corporate video, events, deliverables, timelines, quotes and usage rights.",
  keywords: ["corporate video faq", "videographer madrid questions", "video production questions"],
  kicker: "faq",
  title: "Frequently asked questions",
  sections: [
    {
      title: "Services and types of projects",
      items: [
        {
          q: "What types of video do you make?",
          a: "Corporate video (brand, product, website, and for organizations and public bodies), event coverage (conventions, launches, experiences), and content for social media and campaigns.",
        },
        {
          q: "Do you work alone or with a crew?",
          a: "It depends on the project. For many productions I work on my own (camera, direction and editing). For larger projects I can coordinate a technical and creative crew based on what you need.",
        },
        {
          q: "Do you shoot outside Madrid?",
          a: "Yes. I'm based in Madrid, but I travel all over Spain for shoots and events when the project requires it.",
        },
      ],
    },
    {
      title: "Work process",
      items: [
        {
          q: "How long does a project take from start to finish?",
          a: "It depends on the scope. A simple corporate video can be ready in 2-3 weeks; an event with several deliverables can take 3-6 weeks. We'll pin this down in the proposal.",
        },
        {
          q: "How many revisions are included?",
          a: "I include up to two rounds of revisions on the first cut. Additional changes can be agreed if the project requires them.",
        },
        {
          q: "Do I need to have the script ready?",
          a: "It's not required. I can help you define the messaging, structure and tone from the briefing stage. If you already have a draft, we'll work on it together.",
        },
      ],
    },
    {
      title: "Deliverables and formats",
      items: [
        {
          q: "What format do you deliver the video in?",
          a: "Usually .MP4 (H.264), ready for web and social media. If you need other formats (MOV, ProRes, DCP) or specific resolutions, we'll include them in the quote.",
        },
        {
          q: "Do you create versions for social media?",
          a: "Yes. I can include horizontal (16:9) and vertical (9:16) versions for Instagram, TikTok, LinkedIn, etc., depending on the channels you use.",
        },
        {
          q: "How do you send the files?",
          a: "Via a download link (WeTransfer, Drive or similar) with temporary access. If you need long-term backup, we can discuss it.",
        },
      ],
    },
    {
      title: "Pricing and quotes",
      items: [
        {
          q: "Why aren't there fixed prices on the website?",
          a: "Every project is different: the length of the shoot, the number of deliverables, the location and the timeline all affect the quote. I prefer to prepare a tailored proposal once I understand what you need.",
        },
        {
          q: "How does payment work?",
          a: "There's usually a deposit when the project is confirmed and the balance on delivery. The specific terms (bank transfer, payment schedule) are agreed in the contract.",
        },
        {
          q: "Does the quote have an expiry date?",
          a: "Yes. The proposal states a validity period (usually 15-30 days) so you can consider it without any rush.",
        },
      ],
    },
    {
      title: "Bookings and logistics",
      items: [
        {
          q: "How far in advance should I get in touch?",
          a: "The sooner, the better. For events with a fixed date, it's best to book several weeks in advance. For corporate videos without a set date, we can fit it in based on availability.",
        },
        {
          q: "Do I need permits or insurance to film?",
          a: "In private spaces (offices, premises) your authorization is usually enough. On public streets or in certain venues a permit is sometimes required; I'll let you know what you need for your specific case.",
        },
      ],
    },
    {
      title: "Usage and rights",
      items: [
        {
          q: "Can I use the video wherever I want?",
          a: "Yes. When you commission the project, the usage rights are yours according to what we agree (corporate use, social media, paid campaigns, etc.). We set this out in the contract.",
        },
        {
          q: "Can you use the video in your portfolio?",
          a: "I usually ask for permission to feature the work on my website and social media, unless there's a confidentiality agreement. If you'd rather it wasn't published, I'll respect that.",
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          q: "Do you work with agencies or only with end clients?",
          a: "Both. I work directly with companies and institutions, and also with agencies and production companies that outsource their video production.",
        },
        {
          q: "What if I need last-minute changes?",
          a: "Small changes can usually be accommodated. Bigger changes (extra shoot days, new deliverables) may mean adjusting the budget and timeline; we'll talk it through and find the best option.",
        },
      ],
    },
  ],
}

export const content: Record<Lang, typeof es> = { es, en }

import type { Metadata } from "next"
import { buildMetadata, SITE_URL } from "@/lib/seo"

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  readingTime: string
  category: string
  tags: string[]
  keyword: string
  intent: "informacional" | "comercial" | "mixta"
  excerpt: string
  seoTitle: string
  metaDescription: string
  heroKicker: string
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "list"; ordered?: boolean; items: string[] }
    | { type: "faq"; question: string; answer: string }
    | {
        type: "image"
        src: string
        alt: string
        width: number
        height: number
        caption?: string
        priority?: boolean
      }
    | {
        type: "video"
        src: string
        poster?: string
        caption?: string
        portrait?: boolean
      }
    | {
        type: "link-card"
        href: string
        avatar: string
        avatarAlt: string
        title: string
        subtitle: string
        meta?: string
        cta?: string
      }
  >
}

export const blogPosts: BlogPost[] = [
  {
    slug: "caso-meridian-biohealth",
    title: "Cómo grabamos 30 reels al mes para Meridian Biohealth en solo 2 horas",
    description:
      "Caso real: cómo monto un sistema de contenido mensual para una clínica en Madrid que publica 30 reels al mes invirtiendo 2 horas efectivas de grabación al mes.",
    publishedAt: "2026-05-05",
    readingTime: "6 min",
    category: "Caso real",
    tags: [
      "contenido para empresas",
      "reels para clínicas",
      "filmmaker Madrid",
      "teleprompter",
      "Meridian Biohealth",
    ],
    keyword: "contenido para empresas madrid",
    intent: "comercial",
    excerpt:
      "Voy una vez al mes a su clínica, montamos el equipo, leen al teleprompter y de ahí salen 30 reels que se publican durante todo el mes. Sin reuniones de guion. Sin pelearse con la cámara.",
    seoTitle: "30 reels al mes en 2 horas: caso Meridian Biohealth | Contenido para empresas en Madrid",
    metaDescription:
      "Caso real de contenido para empresas en Madrid: 30 reels al mes para Meridian Biohealth grabados en 2 horas efectivas. Sistema con teleprompter, edición y publicación.",
    heroKicker: "Blog / Caso real",
    body: [
      {
        type: "paragraph",
        text: "El equipo de Meridian Biohealth invierte dos horas al mes delante de la cámara. Y publica 30 reels.",
      },
      {
        type: "link-card",
        href: "https://www.instagram.com/meridianbiohealth/",
        avatar: "/blog/meridian/meridian-avatar.webp",
        avatarAlt: "Logo de Meridian Biohealth, clínica de odontología biológica en Madrid",
        title: "Meridian Biohealth",
        subtitle: "@meridianbiohealth · Dr. Jorge Escobar",
        meta: "Odontología biológica · Madrid",
        cta: "Ver Instagram",
      },
      {
        type: "paragraph",
        text: "No tienen un departamento de marketing interno. No se pelean con guiones cada semana. No paran su agenda de pacientes para grabar. Voy yo una vez al mes a su clínica en Madrid, monto el equipo, les pongo el teleprompter, leemos los textos del mes y de ahí salen las piezas. Edito, programo y se publican durante las cuatro semanas siguientes.",
      },
      {
        type: "paragraph",
        text: "Esta es la entrada en la que cuento, sin adornar, cómo está montado el sistema, qué problema resuelve y por qué a una clínica le sale rentable trabajar así en lugar de improvisar contenido en redes.",
      },
      {
        type: "image",
        src: "/blog/meridian/perfil.webp",
        alt: "Perfil de Instagram de Meridian Biohealth: Dr. Jorge Escobar, Biological Dentist, clínica de odontología biológica e integrativa en Arturo Soria, Madrid",
        width: 1179,
        height: 1104,
        caption: "Meridian Biohealth: clínica de odontología biológica e integrativa en Arturo Soria, Madrid.",
        priority: true,
      },
      { type: "heading", level: 2, text: "El reto: publicar constante sin parar la clínica" },
      {
        type: "paragraph",
        text: "Meridian Biohealth es una clínica de odontología biológica e integrativa en Madrid. El Dr. Jorge Escobar quería tener presencia seria en redes para explicar conceptos que no se entienden en una consulta de 30 minutos: implantes cerámicos, terapia neural, microbiota oral, ozono, relación entre boca y salud sistémica.",
      },
      {
        type: "paragraph",
        text: "El problema no era de criterio. Tenía claro qué quería contar. El problema era operativo. Una clínica con agenda apretada no puede pararse cada semana a grabar. Y un profesional médico no debería estar editando reels a las once de la noche.",
      },
      {
        type: "paragraph",
        text: "Lo que necesitaba era un sistema. Una sola sesión mensual que dejara material suficiente para todo el mes y un proceso de edición y publicación que no le tocara a él.",
      },
      { type: "heading", level: 2, text: "El sistema: una sesión al mes, 30 piezas en redes" },
      {
        type: "paragraph",
        text: "El método es deliberadamente simple. Cuanto menos tiene que decidir el cliente el día de grabación, mejor sale el contenido.",
      },
      { type: "heading", level: 3, text: "1. Guiones cerrados antes de pisar la clínica" },
      {
        type: "paragraph",
        text: "Antes de la sesión, cerramos los textos del mes. No improvisamos delante de la cámara. Cada reel tiene su guion exacto, pensado para sonar natural cuando se lee y para entrar en el formato vertical de Instagram y TikTok sin recortes raros.",
      },
      { type: "heading", level: 3, text: "2. Una visita mensual a su clínica" },
      {
        type: "paragraph",
        text: "Voy yo a Arturo Soria con el equipo. Cámara, sonido, iluminación, teleprompter. Aprovechamos varios espacios reales de la clínica: consulta, sala de implantes, recepción. Eso nos da fondos visuales distintos sin tener que cambiar de localización.",
      },
      { type: "heading", level: 3, text: "3. Teleprompter: cero memorización" },
      {
        type: "paragraph",
        text: "Es la parte que más cambia el resultado. El Dr. Escobar lee del teleprompter mirando a cámara. No tiene que aprenderse nada. No hay quince tomas para que la frase salga limpia. Y la mirada queda fija al objetivo, que es lo que pide el formato vertical para que el espectador no haga scroll.",
      },
      { type: "heading", level: 3, text: "4. Dos horas efectivas, cuatro horas de bloque" },
      {
        type: "paragraph",
        text: "Bloqueamos cuatro horas en la agenda, pero el tiempo real delante de cámara son dos. El resto es montaje del equipo, cambios de plano y descansos. Saltamos entre escenarios de la clínica para que las 30 piezas no se vean iguales aunque se hayan grabado el mismo día.",
      },
      {
        type: "video",
        src: "/blog/meridian/bts-story.webm",
        poster: "/blog/meridian/bts-story-poster.webp",
        portrait: true,
        caption: "Behind the scenes de una sesión mensual en la clínica.",
      },
      { type: "heading", level: 3, text: "5. Edición y publicación gestionada" },
      {
        type: "paragraph",
        text: "Después de grabar, me llevo todo el material. Edición con tipografía, subtítulos quemados, cortes ágiles, B-roll de la clínica y elementos gráficos pensados para retener atención en los primeros tres segundos. Las piezas se programan para que el feed publique constante durante el mes.",
      },
      { type: "heading", level: 2, text: "Resultados: 30 piezas al mes con dos horas del cliente" },
      {
        type: "list",
        items: [
          "30 reels publicados al mes en Instagram y reaprovechados en otras redes.",
          "Dos horas efectivas de grabación al mes invertidas por el equipo de la clínica.",
          "Una visita mensual al centro. Cero desplazamientos del cliente al estudio.",
          "Un único interlocutor para guion, grabación, edición y publicación.",
          "Feed coherente: misma estética, mismas tipografías, mismo criterio en todas las piezas.",
        ],
      },
      {
        type: "image",
        src: "/blog/meridian/feed.webp",
        alt: "Feed de Instagram de Meridian Biohealth con piezas de vídeo del Dr. Jorge Escobar sobre odontología biológica, implantología, terapia neural y microbiota oral",
        width: 1179,
        height: 2556,
        caption: "Feed actual de @meridianbiohealth. Las piezas con play son reels grabados en sesión mensual.",
      },
      { type: "heading", level: 2, text: "Por qué funciona este modelo" },
      {
        type: "paragraph",
        text: "Funciona porque elimina las tres cosas que matan el contenido en empresas que no son agencias: la fricción para sentarse a grabar, la incertidumbre sobre qué decir y la dispersión de tener a varias personas tocando el proceso.",
      },
      {
        type: "paragraph",
        text: "Una sesión mensual con guion preparado y teleprompter convierte la grabación en algo predecible. Sale en agenda, dura lo que tiene que durar y deja material para semanas. Después no hay nada que el cliente tenga que hacer hasta la siguiente sesión.",
      },
      {
        type: "paragraph",
        text: "Y funciona también porque no es contenido genérico. Está grabado en su clínica, con su material, con su criterio profesional. Eso se nota. Una pieza grabada en su sala de implantes con su equipamiento real comunica autoridad de un modo que un set genérico no puede replicar.",
      },
      { type: "heading", level: 2, text: "Para qué tipo de empresa tiene sentido" },
      {
        type: "paragraph",
        text: "Tiene sentido cuando hay un experto que quiere comunicar pero no tiene tiempo, cuando la marca depende de explicar bien servicios complejos y cuando ya hay un volumen mínimo de pacientes, clientes o leads que justifica invertir en presencia constante. Clínicas, despachos, consultoras, formadores, empresas de servicios profesionales: el modelo se adapta sin demasiada modificación.",
      },
      {
        type: "paragraph",
        text: "Y tiene menos sentido cuando se busca contenido low-cost en alta cantidad sin criterio. Esto no es eso. Esto es producir poco volumen, bien resuelto y constante, con criterio profesional detrás de cada pieza.",
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Hace falta tener experiencia delante de la cámara?",
        answer:
          "No. El teleprompter resuelve el 90% del problema. Lees lo que está escrito, mirando al objetivo, y la pieza queda natural sin tener que memorizar ni improvisar.",
      },
      {
        type: "faq",
        question: "¿Quién escribe los guiones?",
        answer:
          "Los preparamos juntos antes de la sesión a partir de los temas que quiere tratar el cliente. La idea técnica viene de él; yo me encargo de adaptarla al formato vertical y al ritmo que pide el reel.",
      },
      {
        type: "faq",
        question: "¿Por qué grabar en la clínica y no en estudio?",
        answer:
          "Porque la clínica es el activo visual más fuerte. Grabar en su sala de implantes con el equipo médico real comunica autoridad. Un estudio neutro vale para cualquiera; su clínica vale solo para él.",
      },
      {
        type: "faq",
        question: "¿Trabajas con empresas que no son clínicas?",
        answer:
          "Sí. Lo aplico con despachos, consultoras, formadores y empresas de servicios. El sistema cambia poco: una visita mensual al cliente, sesión con teleprompter, guiones cerrados, edición y publicación gestionada.",
      },
      {
        type: "faq",
        question: "¿Dónde puedo ver el resultado?",
        answer:
          "En el Instagram de la clínica: instagram.com/meridianbiohealth. La mayoría de las piezas con play del feed están grabadas en sesiones mensuales como la de este caso.",
      },
    ],
  },
  {
    slug: "grabacion-eventos-madrid",
    title: "Grabación de eventos en Madrid para empresas, marcas y congresos",
    description:
      "Servicio de grabación de eventos en Madrid para empresas, congresos y marcas que necesitan una cobertura profesional, bien resuelta y útil después del evento.",
    publishedAt: "2026-03-17",
    updatedAt: "2026-03-27",
    readingTime: "8 min",
    category: "SEO",
    tags: ["grabación de eventos", "Madrid", "vídeo corporativo", "aftermovie", "eventos corporativos"],
    keyword: "grabación de eventos madrid",
    intent: "comercial",
    excerpt:
      "Qué debe incluir una grabación de eventos profesional en Madrid, cómo plantearla con criterio comercial y cuándo merece la pena convertirla en una pieza para ventas, marca y recap.",
    seoTitle: "Grabación de eventos en Madrid para empresas | Vídeo y aftermovie profesional",
    metaDescription:
      "Grabación de eventos en Madrid para empresas, congresos, ferias y marcas. Cobertura audiovisual profesional con aftermovie, piezas para redes y enfoque comercial.",
    heroKicker: "Blog / SEO",
    body: [
      {
        type: "paragraph",
        text: "Si estás buscando un servicio de grabación de eventos en Madrid, normalmente no necesitas solo a alguien que documente lo que pasa. Necesitas una cobertura audiovisual que deje material útil para comunicación, marca, recap comercial y contenido posterior. Yo y mi equipo lo planteamos así desde el principio: qué hay que contar, qué momentos importan y qué entregables van a tener valor real después del evento.",
      },
      {
        type: "paragraph",
        text: "Trabajo con empresas, marcas e instituciones que organizan congresos, conferencias, ferias, lanzamientos, jornadas internas o experiencias de marca y quieren una ejecución seria: grabación limpia, criterio narrativo, coordinación de producción y una edición final que no parezca un simple resumen improvisado.",
      },
      { type: "heading", level: 2, text: "Qué incluye una grabación de eventos profesional en Madrid" },
      {
        type: "list",
        items: [
          "Definición del objetivo del vídeo: recap, pieza de marca, cobertura institucional o contenido para ventas y redes.",
          "Planificación previa para saber qué momentos, personas y activos hay que cubrir durante el evento.",
          "Grabación del evento en Madrid con el equipo técnico y humano que pida el proyecto.",
          "Edición del vídeo principal y, si encaja, cortes adicionales para LinkedIn, web, campañas o redes.",
          "Entrega en formatos pensados para uso real, no solo para guardar el recuerdo del día.",
        ],
      },
      { type: "heading", level: 2, text: "Cuándo compensa contratar grabación de eventos" },
      {
        type: "paragraph",
        text: "Compensa cuando el evento tiene valor más allá del momento presencial: quieres enseñar autoridad, aprovechar speakers, reforzar marca, presentar mejor la empresa o quedarte con piezas reutilizables para semanas o meses. Un solo rodaje bien pensado puede darte un aftermovie, clips cortos, recursos para la web y material de apoyo para futuras acciones comerciales.",
      },
      { type: "heading", level: 2, text: "Qué tipo de eventos cubro" },
      {
        type: "paragraph",
        text: "Congresos, conferencias, presentaciones de producto, encuentros corporativos, ferias, activaciones, jornadas internas, inauguraciones y experiencias de marca. La lógica no cambia: entender qué imagen quieres proyectar y producir una cobertura que sirva tanto durante el evento como después.",
      },
      { type: "heading", level: 2, text: "Cómo enfoco la cobertura para empresas y marcas" },
      {
        type: "paragraph",
        text: "No planteo la grabación como una acumulación de planos. La planteo como una pieza de comunicación. Eso implica decidir antes qué momentos son estratégicos, si hace falta cubrir ponentes, asistentes, branding, testimonios, ambiente o producto, y cómo se va a traducir todo eso en una entrega final limpia, profesional y útil para negocio.",
      },
      {
        type: "paragraph",
        text: "Cuando el proyecto lo requiere, sumo equipo para cubrir producción, sonido, iluminación o multicámara. La ventaja es que tienes trato directo conmigo y, al mismo tiempo, capacidad real para resolver un evento con exigencia profesional sin depender de una estructura pesada.",
      },
      { type: "heading", level: 2, text: "Grabación de eventos en Madrid con enfoque cinematográfico y comercial" },
      {
        type: "paragraph",
        text: "Mi forma de trabajar mezcla cobertura, narrativa y ejecución. Quiero que el vídeo se vea bien, sí, pero sobre todo que sirva. Que puedas enseñarlo en la web, moverlo en redes, usarlo en propuestas o recuperar el evento como activo de marca. Si además interesa, del mismo rodaje pueden salir adaptaciones para redes sociales o un aftermovie más emocional.",
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes sobre grabación de eventos en Madrid" },
      {
        type: "faq",
        question: "¿Trabajas solo en Madrid?",
        answer:
          "Madrid es la base principal, pero me desplazo si el proyecto lo pide. La mayoría de coberturas corporativas salen de Madrid, aunque no estoy limitado a una sola ciudad.",
      },
      {
        type: "faq",
        question: "¿También haces aftermovie y piezas cortas para redes?",
        answer:
          "Sí. De hecho, muchas veces es lo más rentable: aprovechar la grabación del evento para sacar una pieza principal y varias versiones cortas para LinkedIn, Instagram, web o recap comercial.",
      },
      {
        type: "faq",
        question: "¿Puedes preparar propuesta y presupuesto antes del evento?",
        answer:
          "Sí. Si me compartes fecha, tipo de evento, localización, horario y entregables esperados, te digo rápido qué enfoque recomiendo y cómo plantearía el presupuesto.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay entre grabar un evento y cubrirlo con criterio comercial?",
        answer:
          "La diferencia está en la intención. No es solo registrar lo que pasa, sino pensar qué material vas a necesitar después para vender mejor, reforzar marca o comunicar con más autoridad. Eso cambia qué se graba, cómo se edita y qué entregables se priorizan.",
      },
    ],
  },
  {
    slug: "filmmaker-corporativo",
    title: "Filmmaker corporativo: qué hace y cómo elegir el adecuado",
    description:
      "Qué hace un filmmaker corporativo, en qué se diferencia de un videógrafo o un creador de contenido y cómo elegir el adecuado para vídeo de empresa en Madrid.",
    publishedAt: "2026-05-05",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "filmmaker corporativo",
      "vídeo corporativo",
      "producción audiovisual",
      "filmmaker Madrid",
      "vídeo de empresa",
    ],
    keyword: "filmmaker corporativo",
    intent: "informacional",
    excerpt:
      "Un filmmaker corporativo no es solo el que aprieta el botón. Es quien decide qué se graba, cómo se cuenta y cómo se entrega para que el vídeo trabaje para tu empresa.",
    seoTitle: "Filmmaker corporativo: cómo elegir | Daniel Acero",
    metaDescription:
      "Qué hace un filmmaker corporativo, cuándo te conviene y cómo elegir el adecuado para vídeo de empresa, eventos y marca en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Un filmmaker corporativo no es alguien que llega con una cámara y graba lo que pasa. Es la persona que decide qué historia cuenta el vídeo, cómo se graba para que se vea bien y cómo se entrega para que sirva al negocio.",
      },
      {
        type: "paragraph",
        text: "Llevo años trabajando con empresas en Madrid que vienen de un primer intento fallido: pagaron por un vídeo, recibieron un archivo bonito y nadie sabe qué hacer con él. Aquí cuento cómo evitar esa situación cuando contratas a un filmmaker corporativo, qué tiene que aportar y dónde se nota la diferencia.",
      },
      {
        type: "image",
        src: "/blog/filmmaker-corporativo/hero.webp",
        alt: "Manos sosteniendo una cámara de vídeo profesional con micrófono RØDE para una grabación corporativa.",
        width: 1880,
        height: 1253,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un filmmaker corporativo y por qué importa" },
      {
        type: "paragraph",
        text: "Un filmmaker corporativo trabaja vídeo para empresas. La diferencia con un videógrafo de eventos puro o un creador de contenido para redes está en la intención. El filmmaker corporativo piensa el vídeo como una pieza de comunicación: para qué se va a usar, dónde se va a ver, qué tiene que conseguir.",
      },
      {
        type: "paragraph",
        text: "En la práctica eso significa que se involucra antes de la grabación, no solo el día. Pregunta por el público, por el formato final, por dónde va a vivir el vídeo. Y graba pensando en el montaje, no solo en captar lo que hay delante.",
      },
      {
        type: "paragraph",
        text: "Esto importa porque la mayoría de vídeos corporativos que veo fallan en lo mismo: están grabados decentemente pero no comunican nada. Son bonitos. Y vacíos.",
      },
      { type: "heading", level: 2, text: "Cómo trabajar con un filmmaker corporativo (sin que sea un caos)" },
      { type: "heading", level: 3, text: "Define el objetivo del vídeo antes que el formato" },
      {
        type: "paragraph",
        text: "Si el primer briefing es 'queremos un vídeo de un minuto para Instagram', vamos mal. Antes hay que saber qué queremos que sienta o entienda quien lo vea. Después se decide la duración, la red social y el estilo. Cambiar este orden es la causa número uno de vídeos corporativos que no funcionan.",
      },
      { type: "heading", level: 3, text: "Comparte referencias visuales reales" },
      {
        type: "paragraph",
        text: "No hace falta un brand book de 80 páginas. Tres o cuatro vídeos que te gusten, con notas concretas sobre qué te gusta de cada uno, son más útiles que un documento extenso. Y di también lo que no quieres ver: ese plano cenital con drone, esa música épica de stock, ese plano genérico de gente sonriendo a cámara.",
      },
      { type: "heading", level: 3, text: "Tómate en serio la fase de preproducción" },
      {
        type: "paragraph",
        text: "Una grabación bien preparada se hace en menos tiempo y sale mejor. Hablamos de cuántas localizaciones, qué ropa, quién va a hablar, si hay teleprompter, qué planos B-roll necesitamos. Si esto se decide en la furgoneta camino a la grabación, el resultado lo va a reflejar.",
      },
      {
        type: "image",
        src: "/blog/filmmaker-corporativo/intermedia.webp",
        alt: "Estudio de producción de vídeo corporativo iluminado, listo para una grabación de entrevista en Madrid.",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes al contratar filmmaker corporativo" },
      {
        type: "list",
        items: [
          "Pagar por horas de grabación sin haber definido qué vídeo final esperas. Acabas con material desordenado y sin pieza clara.",
          "Pedir 'algo cinematográfico' sin haber pensado dónde se va a ver. Un vídeo cinematográfico para un Instagram Story no funciona igual que para una home web.",
          "Saltarse la fase de guion o esquema, aunque sea de una página. Sin guion no hay edición posible que arregle el material grabado.",
          "Confundir filmmaker corporativo con videógrafo de bodas o creador de contenido. Trabajan distinto, piensan distinto, entregan distinto.",
          "Querer cambiar el enfoque a mitad de edición. Cada cambio tras el rough cut multiplica el tiempo y suele empeorar el resultado final.",
          "Comparar presupuestos solo por el precio total, sin mirar qué entrega cada uno. Dos presupuestos similares pueden tener tres veces más trabajo uno que otro.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto cuesta contratar un filmmaker corporativo en Madrid?",
        answer:
          "Un vídeo corporativo serio suele moverse entre 1.500 y 6.000 euros, según jornada de grabación, número de cámaras, edición y entregables. Por debajo de eso suele faltar preproducción o postproducción, y eso se nota en el resultado final.",
      },
      {
        type: "faq",
        question: "¿Cuál es la diferencia entre filmmaker, videógrafo y videomaker?",
        answer:
          "En la práctica los términos se usan casi intercambiables, pero filmmaker suele implicar más trabajo de dirección y narrativa. Un videógrafo puede limitarse a grabar bien lo que ya pasa; un filmmaker decide qué pasa y cómo se cuenta.",
      },
      {
        type: "faq",
        question: "¿Trabajas con marca personal y autónomos o solo con empresas grandes?",
        answer:
          "Trabajo con ambos. Lo que cambia es el alcance: con autónomos suelo cubrir piezas más cortas y campañas concretas, con empresas suele haber producciones más completas. La forma de trabajar es la misma.",
      },
      {
        type: "faq",
        question: "¿Necesitas un equipo grande para grabar un vídeo corporativo?",
        answer:
          "Depende del proyecto. Para una entrevista bien iluminada con dos cámaras puedo ir solo. Para un evento con varias salas o una producción con dirección de arte, sumo equipo. Lo decido según lo que pida el proyecto, no por defecto.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en producir vídeo corporativo en Madrid, antes de cerrar a nadie, plantea con claridad para qué lo quieres y cómo lo vas a usar. Si ya lo tienes claro o quieres comentarlo conmigo, escríbeme desde la página de contacto y vemos cómo plantearlo.",
      },
    ],
  },
  {
    slug: "produccion-video-promocional-empresas-madrid",
    title: "Producción de vídeo promocional para empresas en Madrid: cómo se hace bien",
    description:
      "Cómo planteo la producción de un vídeo promocional para empresas en Madrid: guion, rodaje, edición y entrega, con plazos y errores reales que evito.",
    publishedAt: "2026-05-06",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "video promocional madrid",
      "produccion audiovisual empresas",
      "filmmaker corporativo madrid",
      "vídeo de empresa",
      "guion vídeo promocional",
    ],
    keyword: "producción de vídeo promocional para empresas en madrid",
    intent: "informacional",
    excerpt:
      "Un vídeo promocional bueno no se improvisa. Cuento cómo lo planteo de principio a fin trabajando con empresas en Madrid: qué decido antes de grabar, qué pasa el día del rodaje y qué entrego al final.",
    seoTitle: "Producción vídeo promocional empresas Madrid | Daniel Acero",
    metaDescription:
      "Producción de vídeo promocional para empresas en Madrid: guion, rodaje, edición y entrega. Cómo lo planteo, plazos reales y errores que evito.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La mayoría de empresas que me llama queriendo un vídeo promocional ya tiene una idea aproximada en la cabeza. Quieren algo que se vea bien, que dure poco y que sirva para vender. El problema es que esa descripción cabe en cualquier vídeo, y por eso muchos vídeos promocionales acaban siendo intercambiables.",
      },
      {
        type: "paragraph",
        text: "Llevo años produciendo vídeo promocional para empresas en Madrid y, antes de tocar la cámara, dedico tiempo a entender para qué lo quieren, dónde lo van a usar y qué tiene que pasar después de que alguien lo vea. De ahí salen las decisiones de guion, formato, duración y rodaje. Esta guía es lo que les cuento a las empresas que se sientan conmigo por primera vez.",
      },
      {
        type: "image",
        src: "/blog/produccion-video-promocional-empresas-madrid/hero.webp",
        alt: "Set de rodaje de vídeo promocional para una empresa con cámara, luces y operador",
        width: 1920,
        height: 1080,
        caption: "Foto: Voyage Pro vía Unsplash.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un vídeo promocional para empresa y para qué sirve",
      },
      {
        type: "paragraph",
        text: "Un vídeo promocional es una pieza pensada para mover algo concreto en quien la ve: que pida información, que entre en una landing, que entienda un producto, que confíe en una marca antes de hablar con un comercial. No es lo mismo que un vídeo institucional (cuenta quién eres) ni que un caso de estudio (cuenta qué hiciste con un cliente). Es más cercano a un anuncio.",
      },
      {
        type: "paragraph",
        text: "En empresas pequeñas y medianas en Madrid suelo encontrarme tres usos: web (hero de la home o página de producto), campañas de pago (Meta, LinkedIn, YouTube) y comerciales que envían el vídeo en frío junto a una propuesta. Cada uso pide una duración y un montaje distintos. Por eso pregunto antes dónde va a vivir el vídeo. Si va a Meta Ads, los primeros tres segundos tienen que sostenerse solos sin sonido. Si va a una web, puede respirar más.",
      },
      {
        type: "paragraph",
        text: "El error más común es grabar un vídeo único de tres minutos pensando que vale para todo. Casi nunca vale. Por eso, cuando puedo, planteo el rodaje para sacar varias versiones del mismo material: un máster largo y dos o tres cortes adaptados a redes y campañas.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo planteo una producción bien hecha",
      },
      {
        type: "heading",
        level: 3,
        text: "Briefing y guion antes del rodaje",
      },
      {
        type: "paragraph",
        text: "Antes de poner una fecha de grabación tenemos una llamada o reunión corta. Ahí salen tres cosas: objetivo, mensaje principal y dónde se va a usar. Con eso escribo un guion en una página, sin florituras, con el plano de cabecera, las frases clave a cámara y los recursos visuales que necesito grabar. Lo enviamos al cliente, lo cerramos por escrito y a partir de ahí el rodaje deja de ser una conversación abierta.",
      },
      {
        type: "heading",
        level: 3,
        text: "Día de rodaje: equipo y ritmo",
      },
      {
        type: "paragraph",
        text: "Para un vídeo promocional de empresa estándar voy con dos cámaras Sony, un set de luces LED, micros de solapa y, si hay alguien hablando a cámara, teleprompter. Una jornada de rodaje suele ser de seis a ocho horas. Bloquear esa jornada bien (entrevista por la mañana, recursos por la tarde) ahorra una segunda visita y una factura mayor.",
      },
      {
        type: "heading",
        level: 3,
        text: "Edición y entrega",
      },
      {
        type: "paragraph",
        text: "Edito en DaVinci Resolve. Mando un primer corte en una semana o diez días. El cliente revisa, me devuelve cambios concretos y aplico una segunda y, como mucho, una tercera ronda. Más allá de tres rondas, el vídeo deja de mejorar y empieza a empeorar. Entrego máster en 16:9, recorte en 9:16 para Reels y un corte de 30 segundos para campaña, todos con subtítulos quemados opcionales.",
      },
      {
        type: "image",
        src: "/blog/produccion-video-promocional-empresas-madrid/interior.webp",
        alt: "Equipo de rodaje grabando un plano de vídeo promocional en Madrid",
        width: 1920,
        height: 1404,
        caption: "Foto: Sergio Kian vía Unsplash.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que veo a menudo",
      },
      {
        type: "list",
        items: [
          "Grabar un único máster de tres minutos sin pensar en versiones cortas para campañas.",
          "Dejar el guion para el día del rodaje. Sale más caro y peor.",
          "Meter al CEO a cámara sin teleprompter ni preparación. La pieza se nota forzada.",
          "Confundir vídeo promocional con vídeo institucional. El primero vende, el segundo presenta.",
          "Pedir cambios sin un objetivo claro entre rondas, lo que alarga la entrega y empeora la pieza.",
          "Olvidar los subtítulos: la mayoría del consumo en redes ocurre sin sonido.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto cuesta producir un vídeo promocional para una empresa en Madrid?",
        answer:
          "Depende del alcance. Una pieza de un día de rodaje, edición y dos versiones suele moverse en una franja media. Producciones con localización, equipo amplio o varias jornadas suben proporcional. Hago presupuesto cerrado por proyecto, no por hora, y lo mando por escrito antes de empezar.",
      },
      {
        type: "faq",
        question: "¿Cuánto se tarda desde la primera reunión hasta tener el vídeo entregado?",
        answer:
          "Plazo razonable: dos a cuatro semanas. Una semana para cerrar guion y agenda, una jornada de rodaje, una a dos semanas de edición con dos rondas de revisión. Si hay urgencia (lanzamiento, evento) lo planteo más comprimido, pero el guion no se salta.",
      },
      {
        type: "faq",
        question: "¿Hace falta guion previo o lo improvisamos en el rodaje?",
        answer:
          "Hace falta. Improvisar en rodaje sale caro y produce piezas blandas. Un guion de una página, con plano de cabecera y frases a cámara, evita el 90% de los problemas de edición. Lo redacto yo a partir del briefing y lo cerramos antes de coger la cámara.",
      },
      {
        type: "faq",
        question: "¿Puedo usar el mismo vídeo para mi web y para campañas de pago?",
        answer:
          "Solo si está pensado así desde el principio. Lo habitual es entregar un máster largo para web y dos o tres cortes específicos para campañas, con encuadre 9:16 y duración corta. Sale del mismo rodaje, pero el montaje es distinto y conviene preverlo en el briefing.",
      },
      {
        type: "paragraph",
        text: "Si tienes claro que quieres un vídeo promocional para tu empresa y prefieres planteármelo en directo, escríbeme desde la página de contacto y miramos juntos qué pieza tiene sentido para lo que estás intentando mover.",
      },
    ],
  },
  {
    slug: "filmmaker-eventos",
    title: "Filmmaker para eventos: qué hace y cuándo lo necesitas",
    description:
      "Qué hace un filmmaker durante un evento corporativo, qué entrega después y en qué se diferencia de contratar a un cámara por horas. Guía práctica desde rodajes reales en Madrid.",
    publishedAt: "2026-05-07",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "filmmaker",
      "eventos corporativos",
      "vídeo en directo",
      "Madrid",
      "producción audiovisual",
    ],
    keyword: "filmmaker eventos",
    intent: "informacional",
    excerpt:
      "Qué hace exactamente un filmmaker en un evento, qué entrega, en qué se diferencia de un cámara contratado por horas y cuándo tiene sentido llamarle desde el principio.",
    seoTitle: "Filmmaker para eventos | Daniel Acero",
    metaDescription:
      "Filmmaker para eventos: qué cubre, cómo trabajo en directo y cuándo merece la pena. Guía práctica desde rodajes corporativos reales en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando una empresa me llama para cubrir un evento, casi siempre la primera pregunta es la misma: \"¿en qué se diferencia un filmmaker de contratar a un cámara por horas?\". La respuesta corta es que un cámara graba lo que ocurre y un filmmaker decide qué historia quieres contar antes de que ocurra.",
      },
      {
        type: "paragraph",
        text: "La diferencia se nota en el resultado. Un evento grabado sin criterio se convierte en treinta minutos de planos generales que nadie ve. Un evento cubierto por un filmmaker se convierte en una pieza corta que se publica esa semana y un recap más largo que la marca usa durante meses.",
      },
      {
        type: "image",
        src: "/blog/filmmaker-eventos/hero.webp",
        alt: "Filmmaker sujetando una cámara antes de cubrir un evento corporativo",
        width: 1920,
        height: 1280,
        caption: "Antes de pulsar grabar ya hay decisiones tomadas: planos clave, momentos prioritarios y cómo se va a montar.",
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué hace un filmmaker en un evento" },
      {
        type: "paragraph",
        text: "Un filmmaker no llega a grabar, llega a producir. Eso quiere decir que antes del evento ya ha hablado con el cliente, ha mirado la sala, sabe quién va a hablar y cuándo, y tiene claro qué piezas finales se van a entregar. Cubrir un evento sin esa preparación es lo que produce vídeos que parecen todos iguales.",
      },
      {
        type: "paragraph",
        text: "Durante el directo, el trabajo no es solo apretar el botón. Es decidir en cada momento qué merece estar grabado y qué no. Hay un keynote que sí va a ir a redes, una mesa redonda que probablemente no, un coffee break con interacciones que dan b-roll bueno y un photocall donde la marca quiere insistir. Esa lectura en tiempo real es lo que distingue una cobertura útil de una bolsa de archivos brutos.",
      },
      {
        type: "paragraph",
        text: "Después del evento entrega los formatos que el cliente va a usar de verdad. No un único máster de cuarenta minutos, sino lo que se va a publicar: un teaser corto al día siguiente, un recap de uno a dos minutos para LinkedIn, cortes verticales para Instagram y los testimoniales editados por separado.",
      },
      { type: "heading", level: 2, text: "Cómo lo monto yo" },
      { type: "heading", level: 3, text: "Antes del evento" },
      {
        type: "paragraph",
        text: "Pido la escaleta el día que cerramos el proyecto. Necesito horarios, ponentes, ubicaciones dentro del recinto y los momentos que la dirección de comunicación considera no negociables. Con eso preparo un plan de cobertura: dónde se planta cada cámara, qué microfonía hace falta, en qué tramos voy a soltar la principal para coger b-roll y cuándo se hacen los testimoniales fuera de la sala.",
      },
      { type: "heading", level: 3, text: "Durante el evento" },
      {
        type: "paragraph",
        text: "Trabajo con dos cámaras Sony cuando hay un escenario fijo (una abierta, otra a primer plano) y con una sola cuando el evento es en movimiento. El audio del escenario lo cojo siempre por línea de mesa, no por micro de cámara, porque si se pierde ese audio el evento no se monta. En paralelo voy capturando b-roll del público, manos, marcas, branding y detalles de la sala. Eso es lo que después llena el recap.",
      },
      { type: "heading", level: 3, text: "Después del evento" },
      {
        type: "paragraph",
        text: "Edito en DaVinci Resolve. Suelo entregar un teaser de quince a treinta segundos en menos de 48 horas (para que la marca pueda publicar mientras el evento aún está caliente) y el recap principal en una a dos semanas, con una ronda de revisión incluida. Si hay testimoniales o ponencias completas, las entrego como piezas separadas con el corte limpio del audio de mesa.",
      },
      {
        type: "image",
        src: "/blog/filmmaker-eventos/mid.webp",
        alt: "Ponente en escenario durante un evento corporativo en Madrid",
        width: 1920,
        height: 1280,
        caption: "Lo que se publica de un evento son momentos concretos, no la grabación entera.",
      },
      { type: "heading", level: 2, text: "Errores comunes que veo" },
      {
        type: "list",
        items: [
          "Contratar al filmmaker la semana del evento. Sin tiempo para preparar la cobertura, lo que entregas es genérico.",
          "Pedir solo \"un vídeo del evento\" sin decidir antes para qué canal y qué duración. Acaba siendo una pieza que no encaja en ningún sitio.",
          "Saltarse el audio de mesa. El micro de cámara en una sala grande no vale, y si pierdes el audio del ponente pierdes la pieza.",
          "Llevar una sola cámara a un evento con escenario fijo y mesa redonda. Si se va el plano principal no tienes plan B.",
          "No reservar espacio para grabar testimoniales fuera de la sala. Los mejores cortes para campañas suelen salir de ahí, no del escenario.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuál es la diferencia entre un filmmaker y un cámara contratado por horas?",
        answer:
          "Un cámara graba lo que le indicas en el sitio. Un filmmaker decide la cobertura antes, dirige el rodaje en directo y entrega las piezas editadas listas para publicar. Si solo necesitas archivo bruto, te sobra con un cámara. Si quieres material que se publique, necesitas a alguien que también edite y piense en el resultado.",
      },
      {
        type: "faq",
        question: "¿Cuántas cámaras hace falta para cubrir un evento corporativo?",
        answer:
          "Depende. Un evento con escenario fijo y ponentes de hora y media en adelante pide dos cámaras (abierta y primer plano). Un evento más informal o con desplazamientos se cubre mejor con una cámara móvil y, si hay presupuesto, una segunda fija para planos generales. Más de tres cámaras suele ser excesivo si no hay realización en directo.",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda en estar listo el vídeo del evento?",
        answer:
          "Suelo entregar un teaser corto en 24 a 48 horas y el recap principal en una a dos semanas. Si pides también ponencias completas o testimoniales editados por separado, sumar otros tres a cinco días. Plazos más cortos son posibles, pero conviene avisar antes del rodaje para reservar las jornadas de edición.",
      },
      {
        type: "faq",
        question: "¿Es mejor contratar un filmmaker autónomo o una productora para un evento?",
        answer:
          "Para eventos de un día con una o dos cámaras, un filmmaker autónomo cubre el trabajo entero y tienes una sola persona responsable. Para eventos grandes, multi-localización o con realización en directo, tiene más sentido una productora con varios equipos. La pregunta útil no es \"autónomo o productora\" sino quién va a estar el día del evento dirigiendo la cobertura.",
      },
      {
        type: "paragraph",
        text: "Si tienes un evento corporativo cerca y prefieres hablarlo en directo antes de pedir presupuesto, escríbeme desde la página de contacto con la fecha y un par de líneas sobre el formato. A partir de ahí miramos qué cobertura tiene sentido y qué piezas vas a poder publicar después.",
      },
    ],
  },
  {
    slug: "contenido-para-redes-sociales-madrid",
    title: "Contenido para redes sociales en Madrid: cómo se monta un sistema que aguante el ritmo",
    description:
      "Cómo planteo el contenido para redes sociales de una empresa en Madrid: jornadas de grabación, formatos por canal, edición y publicación sin depender de la inspiración semanal.",
    publishedAt: "2026-05-08",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "contenido para redes sociales",
      "reels para empresas",
      "vídeo vertical",
      "Madrid",
      "filmmaker corporativo",
    ],
    keyword: "contenido para redes sociales madrid",
    intent: "informacional",
    excerpt:
      "Publicar en redes cada semana sin agotarse no va de inspiración. Va de tener un sistema: una jornada de grabación, formatos definidos por canal y un calendario que ya viene cerrado.",
    seoTitle: "Contenido para redes sociales en Madrid | Daniel Acero",
    metaDescription:
      "Contenido para redes sociales en Madrid: cómo monto jornadas de grabación, formatos por canal y publicación sin depender de la inspiración semanal.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Casi todas las empresas que me llaman para hacer contenido en Madrid empiezan igual: alguien dentro lleva semanas intentando mantener el feed activo y no llega. Una semana hay tres reels, la siguiente ninguno, y al mes siguiente se replantea todo.",
      },
      {
        type: "paragraph",
        text: "El problema casi nunca es de ideas. Es que se está intentando producir contenido como si fuera improvisación creativa, y eso no aguanta seis meses. Lo que aguanta es un sistema: jornadas de grabación marcadas en calendario, formatos definidos por canal y una edición que sale ya pensada para publicar.",
      },
      {
        type: "image",
        src: "/blog/contenido-para-redes-sociales-madrid/hero.webp",
        alt: "Persona grabando contenido vertical con un smartphone para redes sociales",
        width: 1920,
        height: 1280,
        caption: "El contenido que se publica de forma estable casi nunca sale de improvisar: sale de una jornada bien preparada al mes.",
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué un sistema y no \"contenido fresco\"" },
      {
        type: "paragraph",
        text: "Producir contenido para redes en formato \"vamos viendo\" cuesta más caro de lo que parece. Cada semana hay que decidir el tema, escribir el guion, montar la cámara, grabar, editar y publicar. Si esa cadena se rompe en cualquier paso, se rompe la semana entera. Y cuando hablamos de un equipo interno con otras prioridades, se rompe seguro.",
      },
      {
        type: "paragraph",
        text: "Un sistema lo que hace es separar la grabación del resto. Una vez al mes se concentra todo el material que se va a usar durante las cuatro semanas siguientes. La edición y la publicación van por detrás, ya con piezas en mano, no a contrarreloj.",
      },
      {
        type: "paragraph",
        text: "El cambio mental es importante: no se trata de grabar más, se trata de grabar menos veces y aprovechar mejor cada jornada. Una mañana de cuatro horas bien planificada da material para todo un mes de publicaciones en LinkedIn, Instagram y TikTok.",
      },
      { type: "heading", level: 2, text: "Cómo monto un sistema mensual" },
      { type: "heading", level: 3, text: "Calendario y guion al inicio del mes" },
      {
        type: "paragraph",
        text: "Antes de la jornada de grabación cierro con el cliente los textos del mes. Suelen ser entre ocho y doce piezas: dos o tres más largas para LinkedIn, el resto cortas para reels y TikTok. Los guiones están escritos a frase corta, listos para teleprompter, en el tono que ya use la marca por escrito en otros canales.",
      },
      { type: "heading", level: 3, text: "Una jornada de grabación al mes" },
      {
        type: "paragraph",
        text: "Voy con dos cámaras Sony, microfonía de solapa, teleprompter y dos esquemas de luz suave. La persona que va a salir lee los textos del mes seguidos, sin reuniones de guion delante. Si la jornada está bien preparada, la grabación efectiva son dos a tres horas, incluyendo cambios de plano y un par de fondos distintos para que las piezas no parezcan todas iguales.",
      },
      { type: "heading", level: 3, text: "Edición pensada por canal" },
      {
        type: "paragraph",
        text: "El mismo material se monta en formatos distintos según donde se publica. Para LinkedIn una pieza más larga y subtitulada con tipografías limpias. Para Instagram y TikTok, cortes verticales de quince a cuarenta y cinco segundos, con ritmo más alto y subtítulos quemados. Edito en DaVinci Resolve y entrego en una carpeta organizada por semana, con los textos sugeridos para cada publicación.",
      },
      {
        type: "image",
        src: "/blog/contenido-para-redes-sociales-madrid/mid.webp",
        alt: "Equipo de rodaje preparando una sesión de grabación de contenido para redes",
        width: 1920,
        height: 1280,
        caption: "La diferencia entre publicar a menudo y publicar a veces casi siempre es esta: una jornada bien montada al mes.",
      },
      { type: "heading", level: 2, text: "Errores que veo cuando alguien intenta hacerlo solo" },
      {
        type: "list",
        items: [
          "Grabar sin guion escrito y editar buscando \"el momento bueno\". El tiempo que se gasta en post se multiplica por tres.",
          "Publicar sin diferenciar formato por canal. Lo que funciona en LinkedIn no es lo mismo que en TikTok aunque venga del mismo material.",
          "Cambiar de fondo, ropa o luz cada semana. El feed pierde reconocimiento y parece que cada pieza la haya hecho otra persona.",
          "Esperar a tener \"algo importante que decir\" para grabar. La constancia pesa más que cualquier publicación brillante aislada.",
          "No incluir subtítulos quemados. La mayoría del feed se ve sin sonido y sin subtítulos las primeras dos líneas se pierden.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas piezas se sacan de una jornada mensual de grabación?",
        answer:
          "Depende del formato y del nivel de preparación, pero el rango habitual es entre ocho y treinta piezas finales. Para reels y vídeos cortos suelen salir entre veinte y treinta al mes con una jornada de tres a cuatro horas. Si se mezclan piezas largas con cortas, lo razonable es entre ocho y doce.",
      },
      {
        type: "faq",
        question: "¿Hace falta que la persona que sale a cámara tenga experiencia?",
        answer:
          "No. Casi todas las personas con las que trabajo no se sienten cómodas a cámara la primera vez. Por eso uso teleprompter siempre, los textos están escritos en su tono habitual y la jornada empieza con planos sencillos para que la persona se acostumbre antes de los textos largos. En la segunda o tercera grabación se nota mucho la diferencia.",
      },
      {
        type: "faq",
        question: "¿Es mejor grabar un día al mes o repartir varios mini rodajes?",
        answer:
          "Para empresas con un equipo interno ocupado, una jornada larga al mes funciona mejor que varios mini rodajes. Reduce el coste logístico, evita parar la agenda varias veces y obliga a planificar el contenido por adelantado. Mini rodajes solo tienen sentido cuando hay momentos puntuales que solo ocurren ese día (un evento, una visita, un lanzamiento concreto).",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda en publicarse el contenido tras la grabación?",
        answer:
          "El primer bloque suele estar listo en cinco a siete días para que se pueda empezar a publicar la semana siguiente al rodaje. El resto se va entregando escalonado durante las cuatro semanas, ajustado al calendario que cerramos al inicio del mes. Si hay urgencia (un lanzamiento o una campaña concreta), se prioriza esa pieza primero.",
      },
      {
        type: "paragraph",
        text: "Si estás llevando contenido para redes desde dentro de tu empresa y notas que no aguantas el ritmo, escríbeme desde la página de contacto con un par de líneas sobre qué canales quieres alimentar y con qué frecuencia. A partir de ahí miramos si tiene sentido montar un sistema mensual o algo más puntual.",
      },
    ],
  },
  {
    slug: "video-vertical-profesional",
    title: "Vídeo vertical profesional: cómo grabarlo bien para Reels, TikTok y Shorts",
    description:
      "Guía práctica de vídeo vertical profesional: encuadre 9:16, iluminación, sonido directo, errores comunes y consejos para grabar piezas que aguanten Reels, TikTok y Shorts.",
    publishedAt: "2026-05-11",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "vídeo vertical",
      "Reels",
      "TikTok",
      "Shorts",
      "filmmaker corporativo",
      "9:16",
    ],
    keyword: "vídeo vertical profesional",
    intent: "informacional",
    excerpt:
      "Grabar vertical no es girar la cámara noventa grados. Cambia el encuadre, la iluminación, el sonido y el montaje. Esta es la guía con la que produzco piezas verticales para empresas en Madrid.",
    seoTitle: "Vídeo vertical profesional: cómo grabarlo | Daniel Acero",
    metaDescription:
      "Vídeo vertical profesional para Reels, TikTok y Shorts: encuadre 9:16, sonido directo y errores que cargan el contenido. Guía práctica desde Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Casi todo lo que se publica en redes hoy es vertical. Reels, TikTok, Shorts, Stories. Y casi todo se sigue grabando como si todavía fuera para YouTube en 2018: cámara apaisada, plano medio frontal, sonido ambiente y a rezar.",
      },
      {
        type: "paragraph",
        text: "Un vídeo vertical profesional no es lo mismo que girar la cámara noventa grados. Es una manera distinta de encuadrar, iluminar, sonorizar y montar. Esta es la guía práctica con la que planteo piezas verticales para empresas en Madrid.",
      },
      {
        type: "image",
        src: "/blog/video-vertical-profesional/hero.webp",
        alt: "Persona grabando vídeo vertical con un smartphone en formato 9:16",
        width: 1920,
        height: 1280,
        caption: "El vertical bien grabado se nota desde el primer segundo: encuadre limpio, sonido directo y luz pensada para la cara.",
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué cambia respecto a un vídeo horizontal" },
      {
        type: "paragraph",
        text: "El formato vertical aprende del móvil. Se ve a un palmo de la cara, casi siempre sin sonido, mientras alguien hace scroll. Eso obliga a cambiar varias decisiones básicas: dónde pones los ojos en el encuadre, cuánto aire dejas, dónde caen los subtítulos y cómo trabajas el primer segundo.",
      },
      {
        type: "paragraph",
        text: "El espectador medio decide si sigue mirando en los primeros dos segundos. Si en ese intervalo no entiende dónde estás, qué se ve y qué le aportas, hace scroll. Eso impone disciplina en encuadre y sonido más que ningún otro formato.",
      },
      {
        type: "paragraph",
        text: "Y luego está el detalle técnico: 1080×1920 a 30 fps como mínimo, perfil de color plano si lo vas a etalonar después y audio limpio, porque la plataforma vuelve a comprimir lo que subes y todo lo que estaba justo se rompe.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Encuadre: ojos en el tercio superior" },
      {
        type: "paragraph",
        text: "Los ojos del sujeto deben caer en el primer tercio superior del encuadre. Por encima dejas aire para que la cara no quede pegada al borde y por debajo te queda espacio para subtítulos quemados sin tapar la barbilla. Si grabas con cámara, usa un objetivo de 35 mm o 50 mm equivalente full frame. Con móvil, el angular estándar (24-26 mm) basta y evita la distorsión del ultra-angular.",
      },
      { type: "heading", level: 3, text: "Iluminación: una fuente principal suave" },
      {
        type: "paragraph",
        text: "El error más común es iluminar como si fuera horizontal: dos luces a 45 grados, plano americano. En vertical eso aplana la cara. Lo que funciona es una sola fuente principal grande (panel LED con softbox, ventana lateral) cerca del sujeto y un rebote suave al otro lado. Sin luces de fondo agresivas que delatan que es un set.",
      },
      { type: "heading", level: 3, text: "Sonido: microfonía cercana siempre" },
      {
        type: "paragraph",
        text: "Sin sonido directo decente, da igual la cámara. Para piezas estáticas, un lavalier (Lark M2, RØDE Wireless GO II) clavado a 20 cm de la boca. Para piezas en movimiento, una shotgun en pértiga si tienes a alguien que la sostenga, o el lavalier si vas solo. El audio ambiente del móvil no aguanta una pieza de treinta segundos sin que el espectador desconecte.",
      },
      {
        type: "image",
        src: "/blog/video-vertical-profesional/mid.webp",
        alt: "Creadora de contenido grabando una pieza vertical para redes sociales",
        width: 1920,
        height: 1280,
        caption: "Una sola luz lateral, micrófono cerca y encuadre limpio. El 90% del resultado se decide antes de grabar.",
      },
      { type: "heading", level: 2, text: "Errores que veo a menudo" },
      {
        type: "list",
        items: [
          "Grabar en horizontal y recortar a vertical en post. Pierdes resolución, pierdes margen para encuadrar bien y se nota a la legua.",
          "Plano medio o americano. En vertical quedan enormes los hombros y pequeña la cara. Mejor plano corto o cintura para arriba con la persona en el tercio alto.",
          "Texto sobreimpreso pegado a los bordes. Instagram y TikTok comen los primeros y últimos doscientos píxeles con interfaz; cualquier texto ahí queda tapado por los botones.",
          "Música a tope tapando la voz. La voz manda en la retención; la música debe ir doce decibelios por debajo de la voz, no al revés.",
          "Olvidarse de los subtítulos quemados. Más del 70% del consumo es sin sonido. Sin subtítulos pierdes a la mayoría en los dos primeros segundos.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Mejor grabar en 4K vertical o en 1080?",
        answer:
          "Para piezas que solo van a redes, 1080×1920 a 30 fps basta y ocupa la mitad de espacio en proyecto. 4K vertical (2160×3840) tiene sentido si vas a hacer recortes dentro del encuadre en post (zoom in/out simulado) o si quieres reaprovechar el material para piezas horizontales recortadas más adelante. Para una sola pieza vertical limpia, 1080 va bien.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar vídeo vertical profesional con el móvil?",
        answer:
          "Sí, con matices. Los iPhone recientes (15 Pro en adelante) graban material publicable si añades buena iluminación y un micrófono externo. El móvil sigue perdiendo en rango dinámico (cielos quemados, sombras tapadas) y en bokeh natural, así que para piezas que requieren ese look pulido tira de cámara. Para contenido más espontáneo, móvil con lavalier y luz natural lateral suele ser suficiente.",
      },
      {
        type: "faq",
        question: "¿Qué duración funciona mejor en Reels, TikTok y Shorts?",
        answer:
          "Como punto de partida, entre quince y cuarenta y cinco segundos. Por debajo de quince cuesta entregar valor real; por encima de cuarenta y cinco hay que estar muy seguro de que el contenido aguanta. Si la pieza es informativa con guion cerrado, hasta sesenta o noventa segundos puede funcionar; si es más visual o de gancho rápido, entre veinte y treinta segundos es la zona dulce.",
      },
      {
        type: "faq",
        question: "¿Compensa hacerlo a la vez en 9:16 y 16:9?",
        answer:
          "Solo si lo planificas desde el principio. Eso implica encuadrar con margen suficiente arriba y abajo y trabajar dos montajes distintos en edición. Si la prioridad son redes, mejor grabar nativo vertical y olvidarse del 16:9 que casi nadie va a ver. Si la pieza también vive en una web o en YouTube, sí compensa planificar las dos versiones desde la grabación.",
      },
      {
        type: "paragraph",
        text: "Si estás produciendo contenido vertical para tu empresa y no estás seguro de si lo que sale es publicable, escríbeme desde la página de contacto con un par de líneas sobre el formato y el canal donde lo quieres publicar. Echamos un ojo a lo que tienes y vemos si conviene ajustar el proceso o producirlo distinto.",
      },
    ],
  },
  {
    slug: "videos-profesionales-madrid",
    title: "Vídeos profesionales en Madrid: qué incluye y cómo elegir proveedor",
    description:
      "Qué son los vídeos profesionales para empresas en Madrid, cómo se producen bien y qué errores cuestan dinero. Guía práctica antes de contratar.",
    publishedAt: "2026-05-12",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeos profesionales madrid",
      "vídeo corporativo",
      "producción audiovisual",
      "filmmaker madrid",
      "vídeo de empresa",
    ],
    keyword: "videos profesionales en madrid",
    intent: "informacional",
    excerpt:
      "Muchas empresas producen su primer vídeo sin saber para qué lo van a usar y reciben un archivo que no encaja en ningún sitio. Esta es la guía que doy antes de cerrar cualquier proyecto.",
    seoTitle: "Vídeos profesionales en Madrid: cómo elegir | Daniel Acero",
    metaDescription:
      "Vídeos profesionales en Madrid para empresas: qué incluye una producción bien resuelta, cómo elegir proveedor y errores que cuestan dinero.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Muchas empresas en Madrid producen su primer vídeo profesional sin saber muy bien qué esperar y acaban recibiendo un archivo que nadie sabe dónde meter. El vídeo se ve bien en la pantalla del proveedor, pero no sirve en la web, no encaja en los anuncios y tampoco convence en las propuestas comerciales.",
      },
      {
        type: "paragraph",
        text: "Llevo años produciendo vídeos para empresas en Madrid —desde startups con presupuesto ajustado hasta corporativas con varias localizaciones— y el problema suele ser el mismo: se pide el producto antes de tener claro para qué se va a usar. Esta guía es lo que cuento antes de cerrar cualquier proyecto.",
      },
      {
        type: "image",
        src: "/blog/videos-profesionales-madrid/hero.webp",
        alt: "Operador de cámara grabando un vídeo profesional para una empresa en exteriores",
        width: 1920,
        height: 1280,
        caption: "Foto: Gordon Cowie vía Unsplash.",
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué son los vídeos profesionales para empresas y por qué marcan la diferencia" },
      {
        type: "paragraph",
        text: "Un vídeo profesional para empresa no se define por la cámara que se usa. Se define por la cadena completa: un objetivo claro antes de grabar, una estructura narrativa mínima, técnica de rodaje que aguanta cualquier pantalla y una edición pensada para el canal donde va a vivir la pieza.",
      },
      {
        type: "paragraph",
        text: "En la práctica eso significa que hay trabajo antes del rodaje —briefing, guion, localización, planning de planos— y trabajo después que no consiste solo en cortar y poner música, sino en montar algo que cumpla el objetivo concreto que se acordó al principio. Un proveedor que no pregunta para qué es el vídeo antes de presupuestar está vendiendo horas de cámara, no una producción.",
      },
      {
        type: "paragraph",
        text: "Para una empresa en Madrid, contratar vídeo profesional también implica elegir a alguien que conozca los usos habituales del mercado: web, campañas en Meta y LinkedIn, propuestas comerciales, comunicación interna. Las necesidades técnicas de cada formato son distintas y producirlas con criterio ahorra dinero y tiempo.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Define el objetivo antes del formato" },
      {
        type: "paragraph",
        text: "Si la primera conversación con el proveedor es sobre duración o estilo antes de haber definido qué quieres que haga quien vea el vídeo, la producción ya empieza torcida. Un vídeo de presentación de empresa que busca generar confianza en clientes B2B pide un montaje distinto al de una campaña en Instagram pensada para generar solicitudes de presupuesto. Formato, duración, ritmo de edición y música salen de saber para qué es la pieza.",
      },
      { type: "heading", level: 3, text: "Preproducción: la fase que más se salta" },
      {
        type: "paragraph",
        text: "La preproducción es lo que diferencia una producción que sale limpia de una que tarda el doble y entrega la mitad. Consiste en cerrar por escrito el guion o la escaleta, definir las localizaciones, decidir quién habla a cámara y con qué apoyo (teleprompter, escaleta, guion memorizado), planificar los planos de recurso y confirmar que el audio va con micro dedicado. Si esto se improvisa el día del rodaje, el tiempo efectivo de grabación se multiplica.",
      },
      { type: "heading", level: 3, text: "Rodaje con equipo adecuado al proyecto" },
      {
        type: "paragraph",
        text: "Una entrevista corporativa con dos cámaras Sony, un par de focos LED y micro de solapa sale bien con una sola persona. Un evento con varias salas o escenarios simultáneos pide más equipo. El criterio no es que más equipo sea mejor; es elegir la escala que pide el proyecto sin inflar el presupuesto con recursos que no van a aparecer en el vídeo final.",
      },
      {
        type: "image",
        src: "/blog/videos-profesionales-madrid/mid.webp",
        alt: "Cámara de vídeo profesional en un set de producción para empresa",
        width: 1920,
        height: 1280,
        caption: "Foto: Voyage Pro vía Unsplash.",
      },
      { type: "heading", level: 2, text: "Errores habituales en producción de vídeo para empresas" },
      {
        type: "list",
        items: [
          "Pedir presupuesto sin briefing. El proveedor presupuesta lo que le parece razonable, no lo que tú necesitas.",
          "No reservar preproducción en el calendario. Un rodaje sin guion cerrado tarda el doble y produce material que no se monta bien.",
          "Grabar un único máster largo pensando que vale para todo. Un vídeo de tres minutos no funciona como anuncio en Meta ni como Story; hay que planificar versiones desde el principio.",
          "Cambiar el brief a mitad de edición. Cada cambio de dirección en edición avanzada sale caro y casi siempre empeora la pieza.",
          "No asegurar el audio con micro dedicado. El micro de la cámara en una sala grande no vale; si el audio falla, la pieza entera se cae.",
          "Elegir proveedor solo por precio sin ver trabajo previo en el mismo tipo de formato. Un especialista en bodas no produce corporativo igual que alguien que lo hace cada mes.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto cuesta un vídeo profesional para una empresa en Madrid?",
        answer:
          "Depende del alcance. Una pieza de un día de rodaje con edición y una o dos versiones finales suele moverse entre 1.500 y 4.000 euros. Proyectos con varias jornadas, equipo amplio o múltiples entregables adaptados por canal suben en proporción. Lo más útil es pedir presupuesto cerrado por proyecto, no por hora de cámara.",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda en entregarse un vídeo corporativo?",
        answer:
          "Un plazo razonable para una producción estándar es dos a cuatro semanas desde el briefing hasta la entrega final. Una semana para cerrar guion y agenda, una jornada de rodaje y una a dos semanas de edición con una o dos rondas de revisión. Si hay urgencia, se puede comprimir si se prevé antes del rodaje; lo que no se puede comprimir es la fase de guion.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay entre un vídeo corporativo y uno para redes sociales?",
        answer:
          "La duración, el ritmo de montaje y cómo aguanta el primer segundo sin sonido. Un vídeo corporativo para web puede tomar dos o tres minutos y respirar; uno para redes tiene que engancharse en los primeros dos segundos, aguantar sin audio y entrar bien en vertical. Pueden salir del mismo rodaje, pero el montaje es distinto y hay que preverlo desde el principio.",
      },
      {
        type: "faq",
        question: "¿Hace falta guion antes del rodaje?",
        answer:
          "Sí, aunque sea de una página. Improvisar delante de la cámara cuesta más en tiempo de rodaje y produce material que es difícil de montar después. Un guion mínimo —objetivo del vídeo, frases clave, planos de recurso necesarios— reduce el tiempo de grabación, reduce rondas de revisión y casi siempre mejora el resultado final.",
      },
      {
        type: "paragraph",
        text: "Si estás buscando producir un vídeo profesional para tu empresa en Madrid y quieres saber cómo lo plantearía para tu caso concreto, escríbeme desde la página de contacto con un par de líneas sobre qué necesitas y dónde va a vivir la pieza. A partir de ahí te digo si tiene sentido y cómo lo haría.",
      },
    ],
  },
  {
    slug: "iluminacion-entrevistas-corporativas",
    title: "Iluminación para entrevistas corporativas: cómo conseguir un plano limpio",
    description:
      "Guía práctica de iluminación para entrevistas corporativas: equipo mínimo, posición de focos, temperatura de color y errores que arruinan el plano desde el set.",
    publishedAt: "2026-05-13",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "iluminación entrevistas",
      "vídeo corporativo",
      "filmmaker madrid",
      "producción audiovisual",
      "entrevistas a cámara",
    ],
    keyword: "iluminación para entrevistas corporativas",
    intent: "informacional",
    excerpt:
      "Iluminar bien una entrevista corporativa cambia el resultado más que el modelo de cámara. Equipo, posición de focos y errores que cuestan una sesión entera.",
    seoTitle: "Iluminación para entrevistas corporativas | Daniel Acero",
    metaDescription:
      "Iluminación para entrevistas corporativas: equipo mínimo, cómo colocar los focos y errores que arruinan el plano. Guía práctica desde rodajes en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando me dicen que el vídeo 'no tiene ese punto que tienen otros', casi siempre el problema está en la luz. No en la cámara. No en la edición. En cómo está iluminado el plano de entrevista, que es donde el espectador pasa la mayor parte del tiempo.",
      },
      {
        type: "paragraph",
        text: "Llevo años grabando entrevistas corporativas en Madrid: directivos, portavoces, equipos técnicos, fundadores. Lo que hace que una entrevista se vea profesional no es el equipo caro. Es tener una fuente de luz grande, bien colocada, que favorezca la cara sin levantar sombras raras en la pared de fondo.",
      },
      {
        type: "image",
        src: "/blog/iluminacion-entrevistas-corporativas/hero.webp",
        alt: "Persona sentada en una silla preparada para una entrevista grabada en estudio con iluminación profesional",
        width: 1920,
        height: 1440,
        caption: "Foto: Take the Stairs vía Unsplash.",
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es la iluminación para entrevistas corporativas y por qué importa" },
      {
        type: "paragraph",
        text: "La iluminación para entrevistas corporativas tiene un objetivo concreto: que la cara del entrevistado se vea clara, con definición en los rasgos y sin sombras duras que distraigan. Suena simple, pero ejecutarlo bien en condiciones reales (una sala de reuniones con ventanas, un despacho con fluorescentes en el techo, un pasillo corporativo) requiere tomar decisiones rápidas.",
      },
      {
        type: "paragraph",
        text: "La diferencia entre un plano que parece de noticiario y uno que parece de producción no está en el número de focos. Está en entender de dónde viene la luz principal, cómo llenar las sombras sin aplanar el rostro y qué hacer con el fondo para que no compita con quien habla.",
      },
      {
        type: "paragraph",
        text: "Y tiene consecuencias directas en edición. Un plano mal iluminado puede intentarse corregir en DaVinci Resolve, pero solo hasta cierto punto. A partir de ahí, la piel toma tonos raros, el ruido se multiplica al intentar recuperar sombras y la pieza se ve forzada.",
      },
      { type: "heading", level: 2, text: "Cómo ilumino una entrevista corporativa" },
      { type: "heading", level: 3, text: "La fuente principal: grande y suave" },
      {
        type: "paragraph",
        text: "La primera decisión es dónde va la luz principal. Uso paneles LED con softbox o tela difusora. El tamaño importa: un panel grande a un metro del sujeto es más suave que uno pequeño a dos metros, aunque den la misma potencia. Lo coloco a unos cuarenta y cinco grados respecto al eje cámara-sujeto, ligeramente por encima de los ojos para que la nariz proyecte una sombra corta hacia abajo. Nada de luz cenital, que aplana la cara, ni de luz frontal directa, que elimina todo el volumen.",
      },
      { type: "heading", level: 3, text: "El relleno: no más de un tercio de la principal" },
      {
        type: "paragraph",
        text: "El lado opuesto al foco principal siempre necesita algo de luz. Sin relleno, la mitad de la cara queda en sombra y la proporción queda mal en cámara, aunque en el set no lo veas así. Uso un panel LED pequeño al mínimo o un reflector plateado que recoge parte de la luz de la principal. El relleno no puede igualar a la principal en potencia; si lo hace, la cara queda plana y sin profundidad.",
      },
      { type: "heading", level: 3, text: "El fondo: separación limpia" },
      {
        type: "paragraph",
        text: "El fondo de una entrevista corporativa tiene que servir de apoyo, no de distracción. Tres opciones que funcionan: iluminar el fondo con un foco separado para crear diferencia entre la persona y lo que tiene detrás; usar el desenfoque natural de un objetivo luminoso (f/1.8 o f/2.8); o buscar un fondo real de la empresa (una pared con logo, una estantería ordenada) que sume contexto. Lo que no funciona es una pared blanca sin tratar o una ventana a contraluz sin compensar.",
      },
      {
        type: "image",
        src: "/blog/iluminacion-entrevistas-corporativas/mid.webp",
        alt: "Filmación de entrevista corporativa en estudio con dos personas y equipo de cámara profesional",
        width: 1920,
        height: 1280,
        caption: "Foto: Jonah De Oliveira vía Unsplash.",
      },
      { type: "heading", level: 2, text: "Errores que arruinan una entrevista corporativa" },
      {
        type: "list",
        items: [
          "Confiar en la luz de la sala tal como está. Los fluorescentes de techo aplanan la cara y mezclan temperaturas de color. Casi siempre hay que apagar y rebobinar.",
          "Colocar al entrevistado con una ventana a la espalda. La cámara no puede exponer bien para la cara y el fondo al mismo tiempo; el resultado habitual es cara oscura o fondo quemado.",
          "Usar un foco pequeño muy cerca. El halo de luz en la cara es visible, las sombras quedan duras y la piel se marca en exceso.",
          "Mezclar temperaturas de color sin control. Si los paneles están a 5600K y hay ventanas a 4200K mezcladas, la piel toma tonos verdes en partes del encuadre que no se corrigen bien en post.",
          "No probar el plano a través de la cámara antes de llamar al entrevistado. Lo que ves a ojo en el set no es lo que registra el sensor. Siempre miro por el monitor antes de empezar.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Qué equipo mínimo hace falta para iluminar una entrevista corporativa?",
        answer:
          "Un panel LED de 60×60 cm o más con softbox, un reflector y un trípode de focos es lo mínimo funcional. Con eso puedes montar una iluminación de tres puntos básica en diez minutos. Si el espacio tiene ventanas aprovechables, la luz natural puede actuar como relleno o como contraluz y reduces aún más el equipo.",
      },
      {
        type: "faq",
        question: "¿Qué temperatura de color es mejor para entrevistas de empresa?",
        answer:
          "5600K (luz de día) si hay ventanas en el set que no puedes tapar. 3200K o 4000K si el espacio está completamente controlado. Lo importante es que todos los focos estén a la misma temperatura o muy cerca. Las mezclas hacen que partes de la cara salgan con tonos distintos y eso no se arregla bien en post.",
      },
      {
        type: "faq",
        question: "¿Puedo usar luz natural para una entrevista corporativa?",
        answer:
          "Sí, con condiciones. Una ventana lateral grande funciona como fuente principal si la luz del día es suave y difusa. El problema es que la luz natural cambia en tiempo real: en quince minutos puede pasar de perfecta a inusable. Para una entrevista corta puede valer; para una sesión de dos horas, los paneles LED dan consistencia que la ventana no puede dar.",
      },
      {
        type: "faq",
        question: "¿Hace falta un gaffer o puedo iluminar yo solo la entrevista?",
        answer:
          "Para una entrevista corporativa estándar con un único sujeto, se puede montar y ajustar el setup solo. Lo que cambia es el tiempo: en solitario llevas entre veinte y cuarenta minutos; con un gaffer son diez. Si hay prisa, set complicado o más de dos entrevistados con fondos distintos, tener a alguien que solo se encargue de luz ahorra más en tiempo del que cuesta.",
      },
      {
        type: "paragraph",
        text: "Si estás planificando un rodaje de entrevistas para tu empresa y quieres saber cómo lo resolvería, escríbeme desde la página de contacto con un par de líneas sobre el espacio y el número de personas. Puedo darte una idea del setup antes de presupuestar nada.",
      },
    ],
  },
  {
    slug: "como-elegir-filmmaker-corporativo",
    title: "Cómo elegir un filmmaker corporativo para tu empresa",
    description:
      "Guía práctica para elegir un filmmaker corporativo sin cometer los errores habituales: cómo revisar el portfolio, leer la comunicación previa y entender un presupuesto antes de contratar.",
    publishedAt: "2026-05-14",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "filmmaker corporativo",
      "contratar filmmaker",
      "vídeo corporativo",
      "producción audiovisual",
      "guía",
    ],
    keyword: "cómo elegir un filmmaker corporativo",
    intent: "informacional",
    excerpt:
      "Contratar al filmmaker equivocado para un proyecto corporativo sale caro. Estos son los criterios reales que aplicaría para elegir antes de firmar.",
    seoTitle: "Cómo elegir un filmmaker corporativo | Daniel Acero",
    metaDescription:
      "Cómo elegir un filmmaker corporativo sin errores. Portfolio, comunicación y presupuesto: lo que revisar antes de contratar para tu empresa.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien me pregunta cómo encontraron a alguien como yo, la respuesta habitual es: por descarte. Muchos han pasado antes por uno o dos encargos que no salieron bien. Tiempo perdido, dinero gastado y un disco duro lleno de material que no usaron.",
      },
      {
        type: "paragraph",
        text: "Con los criterios correctos, el proceso es directo. Aquí cuento lo que yo mismo miraría si estuviera al otro lado eligiendo a un filmmaker para un proyecto.",
      },
      {
        type: "image",
        src: "/blog/como-elegir-filmmaker-corporativo/hero.webp",
        alt: "Cámara de cine profesional sobre trípode preparada para un rodaje corporativo",
        width: 1920,
        height: 1280,
        caption: "Foto: Jakob Owens vía Unsplash.",
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué diferencia a un filmmaker corporativo de un videógrafo de eventos" },
      {
        type: "paragraph",
        text: "Un videógrafo de eventos recoge lo que pasa. Un filmmaker corporativo tiene criterio editorial: sabe qué necesita la marca antes de llegar al set, cómo construir un relato con las imágenes disponibles y cómo resolver los imprevistos sin que se note en el resultado. La distinción importa porque el tipo de profesional que eliges determina qué clase de material vas a obtener.",
      },
      {
        type: "paragraph",
        text: "Un vídeo corporativo tiene un objetivo concreto: vender un servicio, presentar un equipo, generar confianza en un cliente potencial o documentar un evento de forma útil. Para eso no vale solo saber operar una cámara. Hace falta entender la empresa, su tono, su público y qué debe pasar cuando alguien vea el vídeo. Eso es lo que distingue a un filmmaker corporativo de alguien que simplemente filma.",
      },
      { type: "heading", level: 2, text: "Cómo evaluar a un filmmaker antes de firmar" },
      { type: "heading", level: 3, text: "El portfolio: fíjate en lo que no enseñan" },
      {
        type: "paragraph",
        text: "Cualquier filmación con luz correcta, montaje rítmico y música de Epidemic Sound parece bien hecha. El portfolio te dice poco si solo miras los mejores momentos. Lo que sí te dice algo: si los vídeos tienen coherencia entre sí; si hay variedad de clientes y sectores o todo parece el mismo encargo repetido; si puedes identificar un punto de vista propio más allá de la técnica. Pregunta también qué pasó en proyectos complicados. Los que saben explicar cómo resolvieron un problema son más fiables que los que solo enseñan los resultados perfectos.",
      },
      { type: "heading", level: 3, text: "La comunicación antes del encargo: un indicador que no falla" },
      {
        type: "paragraph",
        text: "Antes de contratar a alguien, mantén una conversación sobre el proyecto. No sobre el precio: sobre el proyecto. Un filmmaker que hace buenas preguntas — qué objetivo tiene el vídeo, quién lo va a ver, cuánto tiempo tiene el espectador antes de decidir — es alguien que piensa en el resultado, no solo en los planos. Si la primera conversación va directo a presupuesto sin entender el encargo, es una señal de alerta.",
      },
      { type: "heading", level: 3, text: "El presupuesto: qué incluye y qué no" },
      {
        type: "paragraph",
        text: "Los presupuestos de producción de vídeo varían mucho en función de lo que incluyen. Un número bajo puede significar que no está previsto el equipo de audio, los días de edición o las correcciones. Antes de comparar cifras, compara desglosados. ¿Incluye grabación y edición? ¿Cuántos días de rodaje? ¿Cuántas rondas de revisión? ¿Música con licencia o de stock gratuito? Preguntar esto antes no es desconfianza: es profesionalidad.",
      },
      {
        type: "image",
        src: "/blog/como-elegir-filmmaker-corporativo/mid.webp",
        alt: "Equipo reunido en sala de reuniones revisando trabajo de producción audiovisual",
        width: 1920,
        height: 1280,
        caption: "Foto: Ninthgrid vía Unsplash.",
      },
      { type: "heading", level: 2, text: "Errores comunes al contratar un filmmaker corporativo" },
      {
        type: "list",
        items: [
          "Elegir por precio sin revisar el desglosado. El coste más bajo puede esconder ausencias de servicio que luego suponen costes extra o tiempo adicional.",
          "No pedir referencias ni proyectos anteriores similares al tuyo. Un filmmaker que trabaja bien en bodas puede no tener el criterio necesario para un vídeo de empresa.",
          "Dar por hecho los plazos de entrega sin acordarlos. Los tiempos de edición varían; pregunta la fecha estimada antes de cerrar el encargo.",
          "No definir el número de revisiones incluidas. Sin ese límite, el proceso puede alargarse indefinidamente y generar tensión en la relación.",
          "Pedir que reproduzca el estilo de otro. Si contratas a alguien por su criterio, déjale usarlo. Si necesitas un estilo muy concreto, explícalo con referencias antes de empezar.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto cobra un filmmaker corporativo en Madrid?",
        answer:
          "El rango habitual en Madrid para un proyecto corporativo completo — rodaje de un día más edición — va de 1.200 a 4.000 euros, según la duración del vídeo, el número de cámaras, el equipo de sonido y los días de postproducción. Los proyectos con localizaciones múltiples o requisitos técnicos más exigentes pueden superar esa cifra.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo se tarda en entregar un vídeo corporativo?",
        answer:
          "Para un vídeo de dos a cinco minutos con un día de rodaje, el plazo habitual de entrega es de dos a tres semanas desde que termina el rodaje. Depende del número de revisiones acordadas y de la complejidad del montaje. Los proyectos urgentes se pueden acelerar, pero conviene acordarlo antes del encargo, no después.",
      },
      {
        type: "faq",
        question: "¿Qué información necesita un filmmaker para presupuestar un proyecto?",
        answer:
          "Como mínimo: tipo de vídeo (entrevista, evento, producto, marca), duración estimada del resultado, fecha y ciudad de rodaje, y número de personas en pantalla. Con eso se puede dar un rango orientativo. Para un presupuesto cerrado hace falta el brief completo y, si hay localizaciones concretas, una visita técnica previa.",
      },
      {
        type: "faq",
        question: "¿Es mejor un filmmaker independiente o una productora?",
        answer:
          "Depende del proyecto. Un filmmaker independiente suele ser más ágil y directo para proyectos de uno a tres días de rodaje. Una productora tiene más estructura para proyectos grandes con múltiples equipos o distribución en varios formatos. Para la mayoría de los vídeos corporativos de empresas medianas, el filmmaker independiente ofrece mejor relación entre calidad y coste.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto en mente y quieres saber si encaja con lo que hago, escríbeme desde la página de contacto. En menos de 48 horas te cuento si puedo ayudarte y qué necesitaría saber para darte un presupuesto ajustado.",
      },
    ],
  },
  {
    slug: "diferencias-video-institucional-video-de-marca",
    title: "Vídeo institucional vs vídeo de marca: diferencias y cuándo usar cada uno",
    description:
      "Diferencias entre vídeo institucional y vídeo de marca: objetivos, formato, tono y cuándo necesitas cada uno para tu empresa.",
    publishedAt: "2026-05-15",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo institucional",
      "vídeo de marca",
      "producción audiovisual",
      "filmmaker corporativo",
      "vídeo corporativo madrid",
    ],
    keyword: "diferencias entre vídeo institucional y vídeo de marca",
    intent: "informacional",
    excerpt:
      "Dos formatos, dos propósitos. El vídeo institucional presenta la empresa. El vídeo de marca conecta emocionalmente con el cliente. Saber cuál necesitas cambia el presupuesto, el guion y el resultado.",
    seoTitle: "Vídeo institucional vs vídeo de marca | Daniel Acero",
    metaDescription:
      "Diferencias entre vídeo institucional y vídeo de marca: objetivos, formato, tono y cuándo necesitas cada uno para tu empresa.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Dos formatos que muchas empresas confunden, y el resultado suele notarse. El vídeo institucional y el vídeo de marca tienen objetivos distintos, ritmos distintos y públicos distintos. No son intercambiables.",
      },
      {
        type: "paragraph",
        text: "Cuando un cliente me pide uno de los dos sin saber bien cuál necesita, lo primero que hago es preguntarle para qué lo va a usar. La respuesta cambia el guion, el tono, el presupuesto y el resultado final.",
      },
      {
        type: "image",
        src: "/blog/diferencias-video-institucional-video-de-marca/hero.webp",
        alt: "The sony logo is illuminated on a dark background.",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es cada uno",
      },
      {
        type: "paragraph",
        text: "El vídeo institucional es el formato que presenta la empresa. Quién es, a qué se dedica, qué valores tiene, cuánto lleva en el mercado. Es informativo, ordenado y suele tener un tono sobrio. Se usa en presentaciones, eventos del sector, webs corporativas y ferias. El espectador no tiene por qué conocerte de antemano.",
      },
      {
        type: "paragraph",
        text: "El vídeo de marca va a otro sitio. No describe la empresa: comunica por qué importa. El foco está en la emoción, en la identificación, en el por qué alguien elegiría trabajar contigo o comprarte. Puede no mencionar productos, no dar datos, no tener narración explícita. Su fuerza está en cómo hace sentir.",
      },
      {
        type: "paragraph",
        text: "Dicho de otro modo: el institucional responde 'qué somos' y el de marca responde 'qué representamos'. Son preguntas distintas y necesitan respuestas distintas.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se ejecutan bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Vídeo institucional",
      },
      {
        type: "paragraph",
        text: "Para que funcione tiene que ser claro y creíble. Nada de aspiracionales vacíos. Necesita estructura lógica: quiénes somos, qué hacemos, cómo lo hacemos, para quién. El tono puede ser cercano o formal según la empresa, pero tiene que ser directo. Duración habitual: entre 2 y 3 minutos. Si supera los 4, pierde atención salvo que tenga un propósito muy concreto.",
      },
      {
        type: "heading",
        level: 3,
        text: "Vídeo de marca",
      },
      {
        type: "paragraph",
        text: "Aquí la estructura es más libre pero no menos exigente. Un buen vídeo de marca empieza con una idea concreta: un contraste, una tensión, un insight sobre el cliente o la categoría. La dirección de arte y el montaje importan más que en el institucional. La música no es decoración, es parte del mensaje. Duración habitual: entre 60 y 90 segundos, aunque puede ser más corto si el concepto es fuerte.",
      },
      {
        type: "heading",
        level: 3,
        text: "El tono como señal",
      },
      {
        type: "paragraph",
        text: "Una forma rápida de distinguirlos: en el institucional la voz habla sobre la empresa. En el de marca la voz habla sobre el cliente o sobre una idea que va más allá de la empresa. Si el guion tiene frases como 'somos líderes en' o 'con más de 20 años de experiencia', es institucional. Si tiene frases como 'hay personas que' o 'en un mundo donde', apunta a marca.",
      },
      {
        type: "image",
        src: "/blog/diferencias-video-institucional-video-de-marca/mid.webp",
        alt: "A snap shot of our Sony FS7 cinema camera system from our film set, while producing a documentary series.",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes al confundirlos",
      },
      {
        type: "list",
        items: [
          "Pedir un vídeo institucional cuando en realidad necesitas posicionamiento de marca para LinkedIn o redes.",
          "Hacer un vídeo de marca tan abstracto que nadie entiende a qué se dedica la empresa.",
          "Mezclar los dos formatos en uno solo: el resultado suele quedar largo, difuso y sin fuerza.",
          "Usar el tono sobrio del institucional para el de marca, perdiendo la capacidad de conectar emocionalmente.",
          "Publicar el institucional en redes sociales como si fuera contenido de marca: no está pensado para ese consumo.",
          "Pensar que el vídeo de marca siempre es más caro: depende del concepto, no del formato.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Puedo tener los dos?",
        answer:
          "Sí, y muchas empresas los tienen. El institucional para presentaciones B2B, ferias y la web corporativa. El de marca para campañas, redes sociales y comunicación de propósito. No se contradicen si están bien diferenciados.",
      },
      {
        type: "faq",
        question: "¿Cuál necesito primero?",
        answer:
          "Si tu empresa está explicando quién es en cada reunión de ventas, necesitas el institucional. Si ya te conocen pero no conectan emocionalmente con lo que haces, necesitas el de marca. En la mayoría de los casos el institucional va antes.",
      },
      {
        type: "faq",
        question: "¿Cuánto duran estos vídeos?",
        answer:
          "El institucional suele funcionar entre 2 y 3 minutos. El de marca entre 60 y 90 segundos, aunque hay conceptos que funcionan en 30 segundos y otros que necesitan 2 minutos. La duración tiene que responder al concepto, no al presupuesto.",
      },
      {
        type: "faq",
        question: "¿El filmmaker hace los dos tipos?",
        answer:
          "Depende del filmmaker. Algunos están especializados en institucional porque tienen experiencia con entrevistas de empresa y narración factual. Otros trabajan más el vídeo de marca porque tienen formación en dirección creativa. Conviene preguntar qué tipo de proyectos ha hecho antes de contratar.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto en mente y no sabes si lo que necesitas es un institucional o un vídeo de marca, cuéntamelo desde la página de contacto. En 48 horas te digo qué formato encaja mejor con tu objetivo y qué necesitaría saber para darte un presupuesto.",
      },
    ],
  },
  {
    slug: "equipo-minimo-video-empresa",
    title: "Equipo mínimo para grabar un vídeo de empresa (sin gastar de más)",
    description:
      "La lista corta de lo que realmente hace falta para grabar un vídeo de empresa: cámara, audio e iluminación esenciales. Sin sobreequipamiento.",
    publishedAt: "2026-05-18",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "equipo de vídeo corporativo",
      "cámara para entrevistas",
      "audio para vídeo de empresa",
      "iluminación vídeo corporativo",
      "producción audiovisual",
      "filmmaker Madrid",
    ],
    keyword: "equipo mínimo para grabar un vídeo de empresa",
    intent: "informacional",
    excerpt:
      "La lista corta de lo que realmente hace falta para grabar un vídeo de empresa. Sin sobreequipamiento ni marketing de equipos.",
    seoTitle: "Equipo mínimo para vídeo de empresa | Daniel Acero",
    metaDescription:
      "Equipo mínimo para grabar un vídeo de empresa: cámara, audio e iluminación. Qué priorizar, qué alquilar y qué no necesitas realmente.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La pregunta que más escucho cuando alguien va a grabar su primer vídeo de empresa no es '¿qué quiero contar?' sino '¿qué equipo necesito?'. La respuesta corta: menos de lo que crees.",
      },
      {
        type: "paragraph",
        text: "He grabado vídeos corporativos con configuraciones muy distintas, desde rodajes con varios cuerpos de cámara hasta entrevistas resueltas con un equipo que cabe en una mochila de 25 litros. Lo que hace bueno un vídeo de empresa no es la cantidad de equipo, sino saber qué pieza importa en cada toma.",
      },
      {
        type: "image",
        src: "/blog/equipo-minimo-video-empresa/hero.webp",
        alt: "Cámara en trípode preparada para un rodaje corporativo",
        width: 1920,
        height: 1280,
        caption: "Un trípode robusto con rótula fluida es más importante que el cuerpo de cámara.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué importa elegir bien el equipo",
      },
      {
        type: "paragraph",
        text: "Equiparse de más tiene un coste real: más tiempo de montaje y desmontaje, más cables que gestionar, más decisiones técnicas que te alejan de lo que importa, que es la persona que tienes delante o la historia que estás contando. Un equipo sobredimensionado también puede poner nervioso al portavoz de una empresa que lleva un micrófono de corbata, un softbox a 60 cm de la cara y tres cámaras apuntándole.",
      },
      {
        type: "paragraph",
        text: "Por otro lado, quedarse corto en audio o en luz es difícil de arreglar en postproducción. Puedes subir la exposición de una imagen, pero no puedes recuperar un audio con eco ambiental. Ahí es donde conviene no escatimar.",
      },
      {
        type: "heading",
        level: 2,
        text: "Lo mínimo que realmente necesitas",
      },
      {
        type: "heading",
        level: 3,
        text: "Cámara",
      },
      {
        type: "paragraph",
        text: "Una cámara con sensor APS-C o Full Frame y control manual es suficiente para casi todo. Sony A7 III, Fujifilm X-T4, Canon R6... el modelo importa menos de lo que parece si la óptica es decente. Un objetivo fijo entre 35 mm y 85 mm en Full Frame da la compresión adecuada para entrevistas y deja el fondo suficientemente desfocado para separar al sujeto del entorno. Un trípode robusto con rótula fluida. Eso es la base.",
      },
      {
        type: "heading",
        level: 3,
        text: "Audio",
      },
      {
        type: "paragraph",
        text: "El audio es la pieza que más se nota cuando falla y la que más se pasa por alto al empezar. Para una entrevista corporativa lo mínimo es un micrófono de corbata inalámbrico, el Rode Wireless Go II o equivalente, grabando directamente a la cámara o a un grabador externo tipo Zoom H5. Si grabas en exterior o en una sala con reverberación, un micrófono de cañón en una pértiga ayuda a rechazar el sonido ambiente. No hacen falta los dos para empezar: el de corbata resuelve el 90 % de los casos.",
      },
      {
        type: "heading",
        level: 3,
        text: "Iluminación",
      },
      {
        type: "paragraph",
        text: "Con luz natural de una ventana grande y un reflector de tela blanca ya puedes hacer una entrevista presentable. Si quieres control total, un kit de dos puntos de luz LED bicolor, key light y relleno suave, resuelve casi cualquier interior. Algo como el Aputure Amaran 100d con una softbox de 60×90 cm y un panel LED de relleno es una configuración que funciona en despachos, salas de reuniones y estudios pequeños sin levantar sospechas de rodaje televisivo que intimide al entrevistado.",
      },
      {
        type: "image",
        src: "/blog/equipo-minimo-video-empresa/mid.webp",
        alt: "Estudio fotográfico con iluminación de dos puntos para entrevista",
        width: 1920,
        height: 1080,
        caption: "Dos puntos de luz LED bicolor son suficientes para una entrevista corporativa de calidad.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes al equiparse",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Comprar cámara premium antes de resolver el audio. El resultado es imagen perfecta con voz que suena a sótano.",
          "Usar trípode de foto para vídeo. Los movimientos con una rótula de bola son bruscos e impublicables. Hace falta una rótula fluida.",
          "Depender de la luz de techo. Casi todas las luces de oficina son amarillas o verdes, quedan fatal en cámara y son difíciles de corregir en color.",
          "Grabar en Log sin saber cómo revelarlo. Mejor una imagen bien expuesta sin Log que Log mal corregido en la entrega.",
          "Saltarse el monitoreo de audio. Sin auriculares durante la grabación no sabes si hay un ruido de fondo hasta que llegas al montaje.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Se puede grabar un vídeo de empresa solo con el móvil?",
        answer:
          "Para ciertos formatos sí: vídeos rápidos para redes sociales, detrás de cámaras o contenido muy informal. Para una entrevista corporativa o un vídeo institucional, el control sobre la exposición, la profundidad de campo y el audio que da una cámara dedicada hace una diferencia visible en el resultado final.",
      },
      {
        type: "faq",
        question: "¿Cuánto cuesta el equipo mínimo profesional?",
        answer:
          "Un cuerpo de cámara APS-C con óptica fija ronda los 1.200-1.800 euros de segunda mano. El kit de audio entre 300 y 500 euros. La iluminación básica de dos puntos LED entre 400 y 700 euros. En total, entre 2.000 y 3.000 euros para un equipo que resuelve el 95 % de las situaciones. Muchos profesionales empiezan alquilando en lugar de comprando.",
      },
      {
        type: "faq",
        question: "¿Es mejor alquilar que comprar al principio?",
        answer:
          "Si tienes pocos proyectos al año, alquilar sale más barato y te permite probar equipo antes de comprometerte. A partir de 10-12 proyectos anuales suele compensar tener lo básico en propiedad. Las casas de alquiler en Madrid tienen prácticamente cualquier pieza disponible.",
      },
      {
        type: "faq",
        question: "¿Qué cambia si el rodaje es en exterior?",
        answer:
          "El principal cambio es el audio: en exterior el micrófono de corbata necesita una cubierta de pelo para evitar el ruido del viento. La iluminación en exterior se resuelve en muchos casos con reflectores y difusores sobre el sol directo. Si el sol está muy alto o muy duro, un filtro ND variable en el objetivo es imprescindible para controlar la exposición.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto concreto y quieres saber qué equipo usaría yo para ese rodaje específico, cuéntamelo desde la página de contacto. En 48 horas te digo qué configuración tiene más sentido para lo que necesitas.",
      },
    ],
  },
  {
    slug: "briefing-video-corporativo",
    title: "Briefing para vídeo corporativo: qué incluir antes de empezar a grabar",
    description:
      "Qué preguntas responder antes del rodaje: objetivos, tono, canal de distribución y plazos. El documento corto que evita problemas largos.",
    publishedAt: "2026-05-19",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "briefing vídeo corporativo",
      "producción audiovisual",
      "vídeo corporativo",
      "guía producción de vídeo",
      "filmmaker Madrid",
    ],
    keyword: "briefing para tu vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Un briefing de media hora evita semanas de revisiones. Te explico qué preguntas tiene que responder antes de que enciendas la cámara.",
    seoTitle: "Briefing para vídeo corporativo | Daniel Acero",
    metaDescription:
      "Qué incluir en el briefing de tu vídeo corporativo: objetivos, tono, plazos y errores comunes. Media hora que ahorra días de trabajo.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Antes de encender la cámara ya debería estar claro qué queremos conseguir con el vídeo, a quién va dirigido y qué tono tiene que tener. Ese trabajo previo es el briefing, y cuando falta o está a medias, el rodaje se complica.",
      },
      {
        type: "paragraph",
        text: "He visto proyectos que se retrasaron semanas no por problemas técnicos sino porque nadie había decidido antes si el vídeo era para captar clientes o para reforzar la comunicación interna. Un briefing de media hora evita esa clase de conversaciones a destiempo.",
      },
      {
        type: "image",
        src: "/blog/briefing-video-corporativo/hero.webp",
        alt: "Reunión de equipo frente a portátil para planificar un proyecto de vídeo corporativo",
        width: 1920,
        height: 1280,
        caption: "Definir el objetivo antes del rodaje es la mitad del trabajo.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un briefing de vídeo y por qué importa",
      },
      {
        type: "paragraph",
        text: "Un briefing de vídeo es un documento corto donde quedan escritos los objetivos del proyecto, quién es el destinatario del vídeo, el tono que debe tener, qué no debe aparecer y cuáles son los plazos reales. No es un guion ni una propuesta. Es la base de trabajo compartida entre la empresa y el realizador.",
      },
      {
        type: "paragraph",
        text: "Su función principal es reducir la cantidad de suposiciones. Sin él, cada persona del equipo trabaja con su propia interpretación de lo que se necesita. Con él, las decisiones importantes están tomadas antes de llegar al set.",
      },
      {
        type: "paragraph",
        text: "En proyectos de un día de rodaje el briefing puede ser una llamada de 30 minutos documentada en un mail de resumen. En proyectos más grandes conviene un documento de 2 o 3 páginas. En ningún caso necesita ser una presentación elaborada.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo prepararlo bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Objetivos y público",
      },
      {
        type: "paragraph",
        text: "Lo primero que tiene que responder el briefing es para qué sirve el vídeo. ¿Para atraer clientes nuevos? ¿Para presentar la empresa en un evento? ¿Para el onboarding de nuevos empleados? Cada respuesta cambia la estructura, la duración y el tono. También hay que definir quién lo va a ver: si va dirigido a decisores B2B o a usuarios finales, el lenguaje y lo que se muestra cambia bastante.",
      },
      {
        type: "heading",
        level: 3,
        text: "Tono y referencias",
      },
      {
        type: "paragraph",
        text: "El tono es uno de los puntos donde más se pierde tiempo si no se define antes. Pedir algo moderno o corporativo pero cercano es demasiado vago. Lo que funciona bien es compartir tres vídeos de referencia, de cualquier marca, sector o país, y explicar qué es lo que gusta de cada uno. No si son buenos o malos en general, sino qué elemento concreto interesa: el ritmo de corte, la música, cómo están planteadas las entrevistas.",
      },
      {
        type: "heading",
        level: 3,
        text: "Logística y plazos",
      },
      {
        type: "paragraph",
        text: "El briefing tiene que recoger también la fecha de rodaje estimada, la fecha límite de entrega real, no la ideal sino la que tiene consecuencias si no se cumple, y quién aprueba la versión final. Este último punto es clave: si hay varias personas con capacidad de veto, el proceso de revisiones puede alargarse indefinidamente. Acordar de inicio quién tiene la última palabra ahorra muchas fricciones.",
      },
      {
        type: "image",
        src: "/blog/briefing-video-corporativo/mid.webp",
        alt: "Mesa de trabajo con portátil y notas para planificación de producción audiovisual",
        width: 1920,
        height: 1288,
        caption: "Un documento de una página con los puntos clave vale más que una reunión de dos horas sin conclusiones.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes en el briefing",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Dar instrucciones de tono contradictorias como serio pero divertido o breve pero completo, sin aclarar cuál pesa más.",
          "No definir el canal de distribución: un vídeo para LinkedIn tiene una duración y un formato distintos a uno para la web o para una pantalla de recepción.",
          "Cambiar los objetivos después de aprobado el guion, lo que obliga a regrabar partes ya rodadas.",
          "Confundir el mensaje principal con la lista de cosas que la empresa quiere mencionar. Un vídeo de 90 segundos aguanta un solo mensaje claro.",
          "No incluir restricciones: personas que no deben aparecer, instalaciones confidenciales, frases que no se pueden decir.",
          "Aplazar el briefing para hacerlo cuando haya tiempo, lo que suele significar empezar a rodar sin él.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo lleva hacer un briefing?",
        answer:
          "Una sesión de 30 minutos con las personas clave suele ser suficiente para proyectos de un día de rodaje. Lo importante no es la duración sino que las decisiones queden escritas. Un mail de resumen tras la llamada cumple esa función sin necesidad de documentos formales.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si no tenemos claro el objetivo del vídeo?",
        answer:
          "Es más frecuente de lo que parece. Si no hay claridad sobre para qué sirve el vídeo, el problema no es técnico sino estratégico. En ese caso lo más útil es empezar la conversación desde el problema que la empresa quiere resolver, no desde el formato. De ahí suele emerger el objetivo.",
      },
      {
        type: "faq",
        question: "¿El realizador tiene que participar en el briefing?",
        answer:
          "Sí, siempre que sea posible. Puedo alertar en esa fase sobre problemas de viabilidad, sugerir alternativas y hacer preguntas que el cliente no se había planteado. Si el briefing se hace entre departamentos internos y el realizador lo recibe ya cerrado, pierde parte de su valor.",
      },
      {
        type: "faq",
        question: "¿Hay una plantilla estándar de briefing para vídeo corporativo?",
        answer:
          "Hay muchas plantillas, pero la mayoría son demasiado largas o genéricas. Lo mínimo que tiene que responder es: objetivo, público, tono, canal de distribución, duración estimada, fecha límite real y quién aprueba. Con eso resuelto, el resto se ajusta durante el proceso.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto de vídeo corporativo y no sabes por dónde empezar el briefing, cuéntamelo desde la página de contacto. En 48 horas lo miramos juntos y te digo qué preguntas tienen más peso para tu caso concreto.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-video-corporativo",
    title: "Cuánto cuesta un vídeo corporativo en España: rangos reales",
    description:
      "Los precios de un vídeo corporativo varían mucho según el alcance. Te explico los rangos reales que manejo en mis proyectos para que puedas ir a cualquier presupuesto con los números claros.",
    publishedAt: "2026-05-20",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "producción audiovisual",
      "presupuesto vídeo",
      "precio vídeo corporativo",
      "filmmaker Madrid",
    ],
    keyword: "cuánto cuesta hacer un vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Los precios de un vídeo corporativo varían mucho según el alcance. Te explico los rangos reales que manejo en mis proyectos para que puedas ir a cualquier presupuesto con los números claros.",
    seoTitle: "Cuánto cuesta un vídeo corporativo | Daniel Acero",
    metaDescription:
      "Cuánto cuesta un vídeo corporativo en Madrid: rangos de precio reales, sin marketing. Desde una entrevista básica hasta una producción de marca completa.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien me pregunta cuánto cuesta un vídeo corporativo, la respuesta honesta es: depende. Pero eso no ayuda a nadie. Así que aquí desgrano los rangos reales que manejo en mis proyectos para que puedas ir a cualquier presupuesto con los números claros.",
      },
      {
        type: "paragraph",
        text: "No voy a darte una cifra mágica. Voy a explicarte qué componentes tiene un presupuesto de producción de vídeo y por qué varían tanto de un proyecto a otro.",
      },
      {
        type: "image",
        src: "/blog/cuanto-cuesta-video-corporativo/hero.webp",
        alt: "Monitor SmallHD en set de producción audiovisual corporativa",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué hay tanta diferencia de precio entre presupuestos",
      },
      {
        type: "paragraph",
        text: "Dos presupuestos para el mismo vídeo corporativo pueden diferir en 5.000 euros. Eso no significa que uno sea mejor o peor: es que están hablando de productos distintos. Un vídeo corporativo puede ser un operador con una cámara Sony A7 grabando durante 4 horas y entregando un corte de 90 segundos con música de stock. O puede ser dos días de rodaje, equipo de tres personas, locación en exterior, narración en off, colorización en DaVinci Resolve y tres versiones para canales distintos.",
      },
      {
        type: "paragraph",
        text: "Esa diferencia de alcance es la que explica el abanico de precios. No la calidad del profesional.",
      },
      {
        type: "heading",
        level: 2,
        text: "Qué determina el precio de un vídeo corporativo",
      },
      {
        type: "heading",
        level: 3,
        text: "Preproducción: lo que pasa antes de encender la cámara",
      },
      {
        type: "paragraph",
        text: "La preproducción incluye las reuniones de briefing, el guion técnico, el plan de rodaje y la búsqueda de locaciones o actores si los necesitas. En proyectos básicos esto puede ser media jornada de trabajo. En proyectos complejos, dos semanas. Trabajo que a veces no se ve pero que define el resultado. En mis proyectos la preproducción representa entre el 20 y el 30% del tiempo total invertido.",
      },
      {
        type: "heading",
        level: 3,
        text: "Rodaje: días, equipo y locaciones",
      },
      {
        type: "paragraph",
        text: "El coste de rodaje depende de cuántos días grabes, cuántas personas forman el equipo técnico y si hay que pagar locaciones. Un rodaje de un día con un operador cuesta entre 600 y 1.200 euros, sin edición. Si añades un técnico de sonido y una persona de dirección de arte, ese día puede llegar a 2.500 euros. Con locación de alquiler en Madrid, suma entre 300 y 1.000 euros más dependiendo del espacio.",
      },
      {
        type: "heading",
        level: 3,
        text: "Postproducción: edición, color y música",
      },
      {
        type: "paragraph",
        text: "Editar un vídeo de dos o tres minutos a partir de seis u ocho horas de material bruto lleva entre 20 y 40 horas, dependiendo de cuántos ciclos de revisión hay. A eso se suma la colorización, los subtítulos si los necesitas, la música —que puede ser de librería o un encargo a compositor— y el masterizado para cada formato. En proyectos estándar la postproducción representa entre el 40 y el 50% del presupuesto total.",
      },
      {
        type: "image",
        src: "/blog/cuanto-cuesta-video-corporativo/mid.webp",
        alt: "Filming a woman with a camera and gimbal rig.",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Rangos de precio según el tipo de vídeo",
      },
      {
        type: "list",
        items: [
          "Entrevista ejecutiva o testimonial (media jornada, 2 cámaras, subtítulos): 800-1.800 euros",
          "Vídeo corporativo básico (1 día de rodaje, 1 operador, 90-120 segundos editados): 1.500-3.000 euros",
          "Cobertura de evento corporativo (jornada completa, 2 cámaras, resumen de 3-5 minutos): 2.000-4.500 euros",
          "Vídeo de marca o manifiesto (2 días de rodaje, guion, equipo de tres, música de librería): 5.000-9.000 euros",
          "Campaña audiovisual completa con múltiples piezas y versiones de canal: 10.000 euros en adelante",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿El presupuesto incluye el guion?",
        answer:
          "Depende del profesional. En mis proyectos el guion técnico está incluido en la preproducción. Si necesitas redacción de locución o guion con voz en off, lo indicamos como partida separada con un coste adicional de 200-500 euros según extensión.",
      },
      {
        type: "faq",
        question: "¿Cuántas revisiones están incluidas?",
        answer:
          "Lo habitual es dos rondas de cambios en el corte de edición. Las revisiones adicionales o los cambios estructurales que implican reeditar desde cero se cotizan aparte. Es importante dejarlo claro por escrito antes de empezar.",
      },
      {
        type: "faq",
        question: "¿Hay que pagar por separado las locaciones?",
        answer:
          "Si el rodaje es en las instalaciones del cliente, no hay coste de locación. Si necesitas un espacio de alquiler —sala de evento, terraza, showroom— el alquiler se añade como partida independiente. En Madrid hay opciones desde 200 hasta 1.500 euros por día según el espacio.",
      },
      {
        type: "faq",
        question: "¿Cuándo tiene sentido invertir más en producción?",
        answer:
          "Cuando el vídeo va a representar a tu empresa en todos los canales durante los próximos dos o tres años. Una web corporativa, una presentación a inversores o una campaña de LinkedIn de captación merecen una producción cuidada. Para contenido de consumo rápido, un vídeo básico bien ejecutado cumple igual.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto en mente y quieres saber qué presupuesto tiene sentido para lo que necesitas, cuéntamelo desde la página de contacto. Te doy una estimación sin compromiso en 24 horas.",
      },
    ],
  },
  {
    slug: "realizador-video-corporativo-madrid",
    title: "Realizador de vídeo corporativo en Madrid: qué hace y cómo elegirlo",
    description:
      "Qué hace un realizador de vídeo corporativo en Madrid, en qué se diferencia de una productora y cómo elegir al profesional adecuado para tu proyecto.",
    publishedAt: "2026-05-21",
    readingTime: "5 min",
    category: "Guía",
    tags: ["realizador de vídeo", "vídeo corporativo", "Madrid", "producción audiovisual", "filmmaker"],
    keyword: "realizador de vídeo corporativo madrid",
    intent: "informacional",
    excerpt:
      "Un realizador de vídeo corporativo en Madrid dirige y ejecuta todo el proceso audiovisual de una empresa. Te cuento qué hace exactamente, en qué se diferencia de una productora y cómo elegirlo.",
    seoTitle: "Realizador de Vídeo Corporativo Madrid | Daniel Acero",
    metaDescription:
      "Qué hace un realizador de vídeo corporativo en Madrid, en qué se diferencia de una productora y cómo elegir al profesional adecuado para tu proyecto.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando una empresa busca a alguien para grabar su vídeo corporativo, la búsqueda suele pasar por dos o tres denominaciones: filmmaker, videógrafo, realizador. La diferencia no es solo de nombre.",
      },
      {
        type: "paragraph",
        text: "Un realizador de vídeo corporativo en Madrid es el profesional que asume la dirección completa de un proyecto audiovisual: desde el concepto hasta el archivo final. Trabajo solo o con un equipo pequeño según lo que pida el proyecto.",
      },
      {
        type: "image",
        src: "/blog/realizador-video-corporativo-madrid/hero.webp",
        alt: "Realizador de vídeo corporativo con cámara profesional preparando un rodaje en Madrid",
        width: 1920,
        height: 1280,
        caption: "La dirección del rodaje determina el resultado mucho antes de llegar a la edición.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué hace un realizador de vídeo corporativo",
      },
      {
        type: "paragraph",
        text: "El trabajo no empieza el día del rodaje. Antes de encender la cámara ya he trabajado durante días en el concepto, el guion técnico, los planos que necesito y la logística del set.",
      },
      {
        type: "paragraph",
        text: "En el set, dirijo. Decido encuadres, iluminación, ritmo de las entrevistas, qué planos de recurso tiene sentido capturar. Si hay personas grabando a cámara —un CEO, un directivo, un ponente— también me encargo de prepararlas. Que se suelten, que hablen con naturalidad, que no parezca que están leyendo aunque lo estén haciendo.",
      },
      {
        type: "paragraph",
        text: "Después del rodaje viene la edición. Color, audio, subtítulos, música. El vídeo que ves al final es la suma de cientos de decisiones tomadas en las tres fases: preproducción, rodaje y postproducción.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se trabaja en la práctica",
      },
      {
        type: "heading",
        level: 3,
        text: "Preproducción: la fase que más determina el resultado",
      },
      {
        type: "paragraph",
        text: "Antes del rodaje hacemos una reunión de briefing. Quiero entender qué objetivo tiene el vídeo, a quién va dirigido, en qué canales se va a publicar y qué tono tiene la marca. Con esa información preparo el guion técnico o el plan de rodaje. No llego a grabar sin tener claro qué planos necesito y en qué orden los voy a hacer.",
      },
      {
        type: "heading",
        level: 3,
        text: "Rodaje: dirección de cámara y coordinación en set",
      },
      {
        type: "paragraph",
        text: "Trabajo con cámara Sony A7 IV, luces LED portátiles y micro de solapa inalámbrico. El equipo cabe en dos maletas, así que el montaje en tu oficina o en la sala de tu empresa se hace en 20-30 minutos sin necesidad de técnicos adicionales. Si el proyecto es más grande —un evento corporativo, una campaña con varios personajes— ampliamos el equipo según lo que pida el guion.",
      },
      {
        type: "heading",
        level: 3,
        text: "Postproducción: de los archivos al vídeo final",
      },
      {
        type: "paragraph",
        text: "Edito en DaVinci Resolve. El flujo habitual es: primer corte de estructura, revisión del cliente con un enlace de comentarios, ajustes, color grading, mezcla de audio y entrega en los formatos que necesites. Dos rondas de revisión están incluidas en todos mis proyectos. Los cambios estructurales que implican reeditar desde cero se cotizan como partida separada.",
      },
      {
        type: "image",
        src: "/blog/realizador-video-corporativo-madrid/mid.webp",
        alt: "Equipo de producción de vídeo corporativo preparando iluminación y cámara para una entrevista profesional",
        width: 1920,
        height: 1280,
        caption: "La configuración de equipo depende del tipo de proyecto, no del tamaño de la empresa.",
      },
      {
        type: "heading",
        level: 2,
        text: "En qué se diferencia de una productora",
      },
      {
        type: "list",
        items: [
          "Una productora tiene equipo propio —director, director de fotografía, productor ejecutivo— y costes generales que se trasladan al presupuesto mínimo.",
          "Un realizador independiente asume todos esos roles o subcontrata solo lo que el proyecto necesita. El coste de entrada es más bajo y la comunicación más directa.",
          "Para proyectos de escala media —entrevistas ejecutivas, vídeos institucionales, coberturas de evento o series de contenido mensual— un realizador freelance suele ser más ágil y más asequible.",
          "Para campañas con actores, escenografía elaborada, locaciones complejas o más de 3-4 días de rodaje, una productora con estructura mayor puede ser la opción más adecuada.",
          "La elección depende del alcance del proyecto, no de ninguna jerarquía de calidad.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo tarda un realizador de vídeo corporativo en entregar el proyecto?",
        answer:
          "Depende del tipo de proyecto. Una entrevista corporativa grabada en media jornada puede entregarse en 5-7 días hábiles. Un vídeo institucional de un día de rodaje suele estar listo en 10-15 días. Para proyectos más grandes o con varias rondas de revisión hay que contar 3-4 semanas desde el rodaje.",
      },
      {
        type: "faq",
        question: "¿Es lo mismo un realizador que un videógrafo?",
        answer:
          "En la práctica se usan como sinónimos. La distinción más habitual es que 'videógrafo' se asocia a proyectos de cobertura o contenido social, mientras que 'realizador' implica más dirección artística y responsabilidad sobre el conjunto del proyecto. No hay una regla fija.",
      },
      {
        type: "faq",
        question: "¿Necesito contratar a alguien más además del realizador?",
        answer:
          "Para la mayoría de los proyectos corporativos de escala media, no. El realizador cubre cámara, iluminación básica y dirección. Si el proyecto necesita un segundo operador, una maquilladora o un sonidista en set, se incorporan solo si el guion lo justifica.",
      },
      {
        type: "faq",
        question: "¿Puede un realizador grabar en mis instalaciones sin permisos especiales?",
        answer:
          "Si el rodaje es en tu propio espacio —oficina, showroom, fábrica, sala de reuniones— no necesitas ningún permiso adicional. Si el rodaje es en espacio público o en locaciones de terceros, hay que gestionar los permisos correspondientes. En Madrid esto suele tardar entre 3 y 10 días según el espacio.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto en mente —entrevista ejecutiva, vídeo para tu web, cobertura de evento o serie de contenido mensual— cuéntamelo desde la página de contacto. Te doy una estimación en 24 horas.",
      },
    ],
  },
  {
    slug: "storyboard-video-corporativo",
    title: "Storyboard para vídeo corporativo: cómo usarlo aunque no sepas dibujar",
    description:
      "El storyboard no es para artistas. Es una herramienta de comunicación que evita errores antes de llegar al rodaje. Guía práctica de un filmmaker en Madrid.",
    publishedAt: "2026-05-22",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "preproducción",
      "vídeo corporativo",
      "producción audiovisual",
      "filmmaking",
      "planificación de rodaje",
    ],
    keyword: "storyboard para vídeo corporativo",
    intent: "informacional",
    excerpt:
      "El storyboard no es para artistas. Es una herramienta de comunicación que evita errores antes de llegar al rodaje. Te explico cómo lo uso en producción corporativa.",
    seoTitle: "Storyboard para vídeo corporativo | Daniel Acero",
    metaDescription:
      "Storyboard para vídeo corporativo: qué es, cuándo usarlo y cómo prepararlo sin saber dibujar. Guía práctica de un filmmaker en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "El storyboard es una de esas herramientas que la gente asocia con producciones grandes. Rodajes de publicidad de televisión, efectos especiales, equipos de cincuenta personas. La realidad para vídeo corporativo es más discreta.",
      },
      {
        type: "paragraph",
        text: "He preparado producciones corporativas con y sin storyboard. Lo que he aprendido es que no depende del presupuesto: depende del tipo de proyecto y de cuánto necesita el cliente visualizar el resultado antes del rodaje.",
      },
      {
        type: "image",
        src: "/blog/storyboard-video-corporativo/hero.webp",
        alt: "Claqueta de rodaje en primer plano, herramienta clave en la producción audiovisual corporativa",
        width: 1920,
        height: 1280,
        caption: "La preproducción bien hecha reduce el tiempo de rodaje y evita errores costosos.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un storyboard y por qué importa",
      },
      {
        type: "paragraph",
        text: "Un storyboard es una secuencia de viñetas —bocetos, fotografías de referencia o capturas de pantalla— que representa plano a plano lo que se va a grabar. Cada viñeta indica qué se ve en pantalla, cómo se mueve la cámara y, si procede, qué dice la voz en off o qué texto aparece en ese momento.",
      },
      {
        type: "paragraph",
        text: "El valor real no está en el dibujo. Está en el proceso de pensar el vídeo antes de grabar. Cuando revisas el storyboard con el cliente detectas problemas antes de que se conviertan en rodaje repetido o postproducción cara. Una viñeta que no convence cuesta cero. Una escena que hay que repetir cuesta medio día.",
      },
      {
        type: "paragraph",
        text: "No hace falta saber dibujar. Una caja con una línea de horizonte y una figura en palo ya comunica si el plano es un gran angular o un primer plano. Lo que no puede faltar es la intención: qué quiero que entienda el espectador en ese segundo.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo prepararlo bien",
      },
      {
        type: "heading",
        level: 3,
        text: "La estructura básica: número de plano, descripción y nota de audio",
      },
      {
        type: "paragraph",
        text: "Cada viñeta recoge tres cosas: lo que se ve en pantalla —composición, personajes, fondo—, el tipo de movimiento de cámara —fijo, traveling, pan— y el texto de la voz en off o el rótulo que aparece. Si la producción tiene guion narrado, el storyboard va pegado al guion: cada párrafo tiene sus planos correspondientes anotados al margen.",
      },
      {
        type: "heading",
        level: 3,
        text: "Herramientas si no dibujas bien",
      },
      {
        type: "paragraph",
        text: "Uso Canva para los storyboards más visuales: tienen plantillas donde arrastras fotos de referencia, imágenes de stock o capturas del espacio a grabar. Para proyectos más técnicos, una hoja de cálculo con tres columnas es suficiente: número de plano, descripción y nota de audio. También funciona hacer un recorrido fotográfico por la localización antes del rodaje, con las fotos numeradas y una anotación al pie. Eso es técnicamente un storyboard y cualquier cliente lo entiende.",
      },
      {
        type: "heading",
        level: 3,
        text: "Cómo presentarlo al cliente",
      },
      {
        type: "paragraph",
        text: "Cuando presento el storyboard, voy plano a plano explicando en voz alta: 'Aquí empezamos con un plano general del espacio de recepción, entra la voz en off con el primer mensaje, y luego cortamos a un primer plano del producto sobre la mesa.' El objetivo es que el cliente pueda seguir el vídeo mentalmente antes de que exista. Si algo no le cuadra, es mucho mejor saberlo en esta reunión que durante el montaje.",
      },
      {
        type: "image",
        src: "/blog/storyboard-video-corporativo/intermedia.webp",
        alt: "Equipo de producción audiovisual en plató, rodando con cámara y sistema de iluminación profesional",
        width: 1920,
        height: 1280,
        caption: "La preproducción clara permite al equipo de rodaje llegar al set con menos dudas.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo tiene sentido usarlo (y cuándo puedes prescindir)",
      },
      {
        type: "list",
        items: [
          "En vídeos con guion narrado: la voz en off dicta el ritmo y cada plano tiene que corresponder a una frase concreta. Sin storyboard, el montaje se convierte en un puzzle difícil de resolver.",
          "Cuando no puedes visitar la localización antes de grabar: planificas sobre fotografías o planos del espacio y llegas al rodaje con las decisiones tomadas.",
          "En producciones con equipo amplio —director de fotografía, técnico de luces, maquilladora—: todos trabajan sobre el mismo documento y no hay malentendidos en set.",
          "En grabaciones documentales o de cobertura de eventos: no merece la pena. La realidad manda y el storyboard sobra.",
          "Cuando el presupuesto es ajustado: preparar bien el storyboard reduce el tiempo de rodaje y, por tanto, el coste total del proyecto.",
          "En vídeos sencillos de una sola cámara y un solo tema: una lista de planos es suficiente.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuántas viñetas necesita un storyboard para vídeo corporativo?",
        answer:
          "Depende de la duración y la complejidad. Un vídeo de 2 minutos suele tener entre 15 y 25 viñetas. Si hay muchos cortes rápidos puede llegar a 40. No hay un número correcto; hay el número que te permite explicar el vídeo sin ambigüedades antes de grabar.",
      },
      {
        type: "faq",
        question: "¿Quién prepara el storyboard, el cliente o el filmmaker?",
        answer:
          "Lo prepara el filmmaker, pero con aportaciones del cliente en la fase de revisión. El cliente no dibuja nada; solo dice si lo que ve en las viñetas corresponde a lo que imagina. Las correcciones se hacen sobre el storyboard, no sobre el vídeo ya montado.",
      },
      {
        type: "faq",
        question: "¿Puedo usar fotos de referencia en lugar de dibujos?",
        answer:
          "Sí. Es lo que hago la mayor parte del tiempo. Fotos de la localización, imágenes de stock o frames de otros vídeos que comuniquen el estilo. El dibujo es solo una forma de representar la imagen prevista, no la única ni necesariamente la mejor.",
      },
      {
        type: "faq",
        question: "¿El storyboard es vinculante durante el rodaje?",
        answer:
          "No. Es una guía. Si durante la grabación algo no funciona como estaba planeado, cambias el plano. El storyboard es una herramienta de preproducción: reduce la incertidumbre, no la elimina.",
      },
      {
        type: "paragraph",
        text: "Si tienes una producción en mente y no sabes por dónde empezar, el storyboard —aunque sea en versión simple— es lo primero que pone orden. Si quieres que lo preparemos juntos antes del rodaje, cuéntame tu proyecto desde la página de contacto.",
      },
    ],
  },
  {
    slug: "musica-y-derechos-en-video-de-empresa",
    title: "Música y derechos de autor en vídeo de empresa",
    description:
      "Cómo gestionar los derechos musicales en un proyecto de vídeo corporativo: licencias de sincronización, plataformas royalty-free y errores que evitar antes de publicar.",
    publishedAt: "2026-05-25",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "derechos de autor",
      "música para vídeo",
      "licencias musicales",
      "vídeo corporativo",
      "producción audiovisual",
    ],
    keyword: "música y derechos en vídeo de empresa",
    intent: "informacional",
    excerpt:
      "Usar música sin los derechos correctos en un vídeo de empresa puede derivar en reclamaciones, retiradas y multas. Esto es lo que tienes que gestionar antes de publicar.",
    seoTitle: "Música en vídeo de empresa: derechos | Daniel Acero",
    metaDescription:
      "Música y derechos de autor en vídeo corporativo: qué licencias necesitas, plataformas legales y errores que pueden costarte caro.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La música puede transformar un vídeo de empresa mediocre en algo que la gente recuerda. El problema es que casi todos los proyectos corporativos que llegan a mis manos tienen el mismo punto ciego: nadie ha pensado en los derechos antes de publicar.",
      },
      {
        type: "paragraph",
        text: "Esto no es un problema de mala fe. Es falta de información. Una canción de Spotify no se puede usar en un vídeo de empresa. Una pista que suena 'gratis' en YouTube no significa que sus derechos estén cedidos para uso comercial. Aquí explico cómo funciona esto y qué opciones tienes.",
      },
      {
        type: "image",
        src: "/blog/musica-y-derechos-en-video-de-empresa/hero.webp",
        alt: "Productor musical trabajando en estudio con teclado y software de audio",
        width: 1920,
        height: 1549,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué significa tener derechos sobre una pieza musical",
      },
      {
        type: "paragraph",
        text: "Cuando grabas un vídeo y le pones música encima estás realizando lo que en derecho se llama una sincronización. Básicamente, sincronizas audio con imagen en movimiento. Para hacerlo legalmente necesitas permiso del titular de los derechos de esa música, que puede ser el artista, su discográfica, o ambos.",
      },
      {
        type: "paragraph",
        text: "Hay dos tipos de derechos que suelen ir de la mano: los derechos de autor sobre la composición —la melodía, la letra— y los derechos fonográficos sobre la grabación concreta. Si quieres usar una canción conocida en un vídeo de empresa, necesitas permiso de los compositores y permiso de la discográfica que posee esa grabación. Son dos entidades distintas y, en muchos casos, dos licencias distintas.",
      },
      {
        type: "paragraph",
        text: "Para vídeos de uso interno el riesgo es menor. Para vídeos publicados en web, YouTube, redes sociales o en eventos con público, el riesgo de reclamación es real y tiene consecuencias prácticas: desde la retirada del vídeo hasta la pérdida de monetización.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo gestionar la música en un proyecto corporativo",
      },
      {
        type: "heading",
        level: 3,
        text: "Licencias de sincronización",
      },
      {
        type: "paragraph",
        text: "La licencia de sincronización es el permiso formal para usar una canción específica en un vídeo. Conseguirla requiere contactar directamente con el titular de los derechos. En canciones comerciales eso significa hablar con discográficas o con gestoras de derechos como SGAE. El proceso lleva tiempo, no siempre hay respuesta, y el precio puede ir de 200 euros a decenas de miles según la canción y el uso previsto. Para un vídeo corporativo estándar, no suele ser el camino.",
      },
      {
        type: "heading",
        level: 3,
        text: "Plataformas de música royalty-free",
      },
      {
        type: "paragraph",
        text: "La opción más práctica para la mayoría de proyectos corporativos es usar plataformas de música royalty-free. Artlist, Musicbed, Epidemic Sound o Pond5 ofrecen librerías de pistas con licencia para uso en vídeo. Pagas una suscripción anual y puedes usar la música en tus proyectos sin coste adicional por cada entrega. Yo suelo trabajar con Artlist para proyectos corporativos porque la licencia cubre distribución comercial sin restricciones de plataforma, lo que simplifica mucho la conversación con el cliente.",
      },
      {
        type: "heading",
        level: 3,
        text: "Música original",
      },
      {
        type: "paragraph",
        text: "Otra opción es encargar una pieza original. Un compositor puede crear una melodía hecha a medida para tu marca por entre 300 y 1.500 euros, dependiendo de la duración y la complejidad. A cambio recibes los derechos completos sobre esa composición y su grabación. Es la solución más cara a corto plazo, pero la más limpia a largo plazo si el vídeo va a tener mucha difusión o si quieres usar ese audio en toda tu comunicación de marca.",
      },
      {
        type: "image",
        src: "/blog/musica-y-derechos-en-video-de-empresa/intermedia.webp",
        alt: "Mesa de mezclas en estudio de sonido para producción audiovisual",
        width: 1920,
        height: 1200,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes en vídeos corporativos",
      },
      {
        type: "list",
        items: [
          "Usar canciones de Spotify o Apple Music pensando que 'solo es una plataforma de streaming': esas licencias no incluyen sincronización con vídeo.",
          "Descargar pistas de YouTube Audio Library sin leer los términos: algunas tienen restricciones de uso comercial o requieren atribución visible.",
          "Pensar que si el vídeo es privado no hay problema: en eventos con público o proyecciones internas de empresa, los derechos siguen siendo necesarios.",
          "Usar música royalty-free comprada para un proyecto en todos los proyectos futuros sin renovar la suscripción: las licencias suelen estar vinculadas a la suscripción activa.",
          "No guardar los justificantes de licencia: si llega una reclamación de copyright en YouTube, necesitas poder demostrar que tienes derecho a usar esa pista.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Puedo usar música de YouTube Audio Library en un vídeo comercial?",
        answer:
          "Depende de la pista. YouTube Audio Library tiene canciones con diferentes tipos de licencia: dominio público, Creative Commons con o sin restricciones comerciales. Antes de usar una pista, revisa la ficha de la canción. Si indica que no permite uso comercial, no la uses en un vídeo de empresa.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si YouTube detecta música con copyright en mi vídeo corporativo?",
        answer:
          "YouTube tiene un sistema llamado Content ID que detecta fragmentos de música registrados. Si tu vídeo coincide con una pista protegida puede pasar una de estas cosas: el vídeo se silencia, los ingresos van al titular de los derechos, o el vídeo queda bloqueado en ciertos países. En casos más graves el vídeo se retira. Esto le puede pasar tanto a canales de empresa como a agencias o productoras.",
      },
      {
        type: "faq",
        question: "¿La licencia de Artlist o Epidemic Sound cubre Instagram y TikTok?",
        answer:
          "En general sí, pero los términos exactos dependen del plan contratado. Artlist cubre la mayoría de plataformas con su licencia estándar. Epidemic Sound tiene planes diferenciados para creadores individuales y para uso comercial. Verifica los términos antes de publicar, especialmente si el cliente va a usar el vídeo en su propio canal y no en el de la agencia.",
      },
      {
        type: "faq",
        question: "¿Puedo usar música clásica sin pagar derechos?",
        answer:
          "La composición puede ser de dominio público si el compositor murió hace más de 70 años. Pero la grabación específica puede tener sus propios derechos si fue interpretada y grabada recientemente. Para estar seguro, busca grabaciones publicadas bajo licencias Creative Commons o usa plataformas royalty-free que incluyan versiones de música clásica.",
      },
      {
        type: "paragraph",
        text: "La gestión de derechos musicales es una parte de la producción que no aparece en el presupuesto hasta que aparece en forma de problema. Si tienes un proyecto en marcha y no tienes claro qué música puedes usar, puedo orientarte desde el principio. Cuéntame los detalles desde la página de contacto.",
      },
    ],
  },
  {
    slug: "produccion-eventos-corporativos-directo",
    title: "Producción de eventos corporativos en directo: qué necesitas y cómo prepararlo",
    description:
      "Guía práctica sobre producción audiovisual de eventos corporativos en directo: equipo, logística, errores habituales y cómo preparar el rodaje.",
    publishedAt: "2026-05-26",
    readingTime: "5 min",
    category: "Guía",
    tags: ["eventos corporativos", "producción en directo", "filmación de eventos", "vídeo corporativo", "audiovisual Madrid"],
    keyword: "producción de eventos corporativos en directo",
    intent: "informacional",
    excerpt:
      "Grabar un evento corporativo en directo implica decisiones técnicas y logísticas que no admiten error. Aquí explico qué hace falta, cómo prepararlo y qué falla más.",
    seoTitle: "Producción de eventos corporativos en directo | Daniel Acero",
    metaDescription:
      "Producción de eventos corporativos en directo: equipo, logística y errores habituales. Guía práctica de un filmmaker con experiencia real en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Un evento corporativo en directo no da segundas oportunidades. Cuando el ponente entra al escenario ya no hay tiempo para ajustar el encuadre, mover el micrófono ni cambiar el plan. O lo tienes todo preparado o improvisas sobre la marcha y el material sale cojo.",
      },
      {
        type: "paragraph",
        text: "He grabado presentaciones de empresa, conferencias, townhalls, lanzamientos de producto y cenas de gala. Lo que diferencia un resultado sólido de uno mediocre no suele ser el equipo — suele ser la preparación. Te cuento cómo lo trabajo.",
      },
      {
        type: "image",
        src: "/blog/produccion-eventos-corporativos-directo/hero.webp",
        alt: "Equipo de producción audiovisual grabando un evento corporativo en directo con cámaras profesionales",
        width: 1920,
        height: 1280,
        caption: "La producción de eventos en directo exige planificación antes, no durante.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es y por qué la producción en directo es diferente",
      },
      {
        type: "paragraph",
        text: "Producción en directo significa grabar algo mientras ocurre, sin posibilidad de repetir. Una conferencia, una jornada de empresa, un panel de debate, un acto de inauguración. El reto es que el evento tiene su propio ritmo, sus propios imprevistos y sus propias limitaciones de espacio. Tú te adaptas. El evento no espera.",
      },
      {
        type: "paragraph",
        text: "La diferencia entre un vídeo de evento que funciona y uno que nadie vuelve a ver está en cómo se usa ese material después. ¿Es un aftermovie de dos minutos para LinkedIn? ¿Son cortes individuales de cada ponente? ¿Se necesita una versión larga para el archivo interno? Esa decisión define el equipo, las posiciones de cámara y el ritmo de grabación.",
      },
      {
        type: "paragraph",
        text: "Sin esa claridad desde el principio, llegas a postproducción con material que no encaja en ningún formato útil.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se hace bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Previo al evento: reconocimiento y plan de rodaje",
      },
      {
        type: "paragraph",
        text: "El trabajo real empieza uno o dos días antes. Necesito ver el espacio en el que voy a grabar: dónde están las fuentes de luz natural, si hay iluminación de sala fija y de qué temperatura, dónde se pone el ponente, desde qué ángulo se ve el escenario sin que la cabeza de alguien tape el plano. Si la sala tiene tramoya o pantallas LED, necesito saber si van a interferir con la exposición de cámara. También confirmo con organización si habrá un técnico de sonido que pueda darme señal de mesa o si voy con mis propios micrófonos.",
      },
      {
        type: "heading",
        level: 3,
        text: "Durante el evento: posiciones, comunicación y gestión del caos",
      },
      {
        type: "paragraph",
        text: "Trabajo con un esquema de posiciones fijas y movimiento controlado. En la mayoría de eventos uso dos cámaras: una fija en un plano general estable — suele ser un Sony A7 IV en trípode al fondo de la sala — y otra para planos de detalle, reacciones del público y momentos que no están en el guion. Con dos cámaras tengo suficiente cobertura para editar sin cortes feos. Con una sola, cualquier problema en un momento clave es irrecuperable. El contacto con el organizador del evento durante el acto es clave. Si el orden del día cambia sobre la marcha — y casi siempre cambia algo — necesito saberlo con el mínimo margen para reposicionarme.",
      },
      {
        type: "heading",
        level: 3,
        text: "Postproducción: pieza final o entrega rápida",
      },
      {
        type: "paragraph",
        text: "Algunos clientes necesitan un corte de 90 segundos publicable en 24-48 horas para redes. Otros quieren una pieza más elaborada de 3-5 minutos con entrevistas individuales, planos del espacio y música. El proceso de edición en DaVinci Resolve es distinto en cada caso: el primero exige selección rápida de los mejores momentos y un ritmo ágil; el segundo permite estructurar una narrativa más completa. Define esto antes de grabar, no después.",
      },
      {
        type: "image",
        src: "/blog/produccion-eventos-corporativos-directo/intermedia.webp",
        alt: "Público asistiendo a una conferencia corporativa en sala de evento profesional",
        width: 1920,
        height: 1280,
        caption: "La cobertura del público y los momentos de sala aportan contexto al vídeo final.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes en la producción de eventos corporativos",
      },
      {
        type: "list",
        items: [
          "No reconocer el espacio antes del día. Llegas el mismo día y descubres que la iluminación es un desastre sin haber traído el equipo adecuado.",
          "Ir con una sola cámara sin plan de contingencia. Un problema técnico o un movimiento imprevisto y pierdes el momento que el cliente necesita.",
          "No confirmar la señal de audio con el técnico de sonido. La voz del ponente es irrecuperable si falla el micro. Sin audio limpio el vídeo no sirve.",
          "No cerrar el formato de entrega antes del evento. Grabar sin saber el destino del material lleva a contenido que no encaja en ningún lado.",
          "Subestimar los tiempos de postproducción. Un evento de 8 horas genera cientos de gigabytes de material; la revisión y el montaje llevan tiempo real.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuántas personas necesito para grabar un evento corporativo?",
        answer:
          "Para la mayoría de eventos de tamaño medio — entre 50 y 300 personas — trabajo con una o dos personas. Yo opero las cámaras y gestiono el audio; un asistente puede encargarse de la segunda cámara o de los planos de sala. En eventos de gran formato con múltiples salas simultáneas puede necesitarse un equipo más amplio, pero para un evento estándar de empresa no es necesario.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si el evento no tiene buena iluminación?",
        answer:
          "La mayoría de salas de evento tienen iluminación deficiente para vídeo — es lo habitual. Se puede compensar con luces portátiles propias si la organización lo permite, o ajustando la exposición de cámara y el tratamiento de color en postproducción. En casos muy extremos hay pérdida inevitable de calidad. Por eso el reconocimiento previo importa: se pueden tomar medidas antes, no durante el evento.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo tarda la entrega de un vídeo de evento?",
        answer:
          "Un corte rápido para redes puede estar listo en 24-48 horas si el cliente lo necesita con urgencia. Una pieza completa con entrevistas, planos de sala y música tarda entre 5 y 10 días hábiles, dependiendo del volumen de material y el número de revisiones. Establecer plazos realistas antes del evento evita expectativas desalineadas en postproducción.",
      },
      {
        type: "faq",
        question: "¿Se puede retransmitir en directo a la vez que se graba para edición?",
        answer:
          "Sí, pero son dos trabajos diferentes con equipos y flujos distintos. La retransmisión en streaming requiere mezclador de vídeo, encoder y conexión estable. La grabación para edición posterior requiere calidad máxima y cobertura multicámara. Hacer las dos cosas a la vez con el mismo equipo tiene limitaciones serias. Si necesitas ambas, lo recomendable es separar los equipos y las responsabilidades.",
      },
      {
        type: "paragraph",
        text: "Si tienes un evento en los próximos meses y quieres hablar sobre qué material tiene sentido producir y cómo enfocarlo, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "video-recap-de-eventos",
    title: "Vídeo recap de eventos: qué incluir y qué cortar",
    description:
      "Un buen recap de eventos no graba todo: sabe qué elegir. Qué planos son imprescindibles y cuáles van directamente a la papelera de reciclaje.",
    publishedAt: "2026-05-27",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo de eventos",
      "recap",
      "montaje",
      "postproducción",
      "filmación corporativa",
      "eventos Madrid",
    ],
    keyword: "vídeo recap de eventos",
    intent: "informacional",
    excerpt:
      "Un buen recap de eventos no graba todo: sabe qué elegir. Te explico qué planos no pueden faltar y qué suele acabar en la papelera de reciclaje.",
    seoTitle: "Recap de eventos: qué incluir y qué evitar | Daniel Acero",
    metaDescription:
      "Vídeo recap de eventos: qué planos y momentos no pueden faltar y qué cortar para que el resultado no parezca un archivo de grabación.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La mayoría de recaps de eventos fallan antes de que empiece el montaje. No por falta de imágenes, sino por exceso. El cameraman grabó cuatro horas, el cliente quiere todo dentro, y el resultado final parece un archivo de seguridad más que un vídeo de comunicación.",
      },
      {
        type: "paragraph",
        text: "Un buen recap no se mide en duración ni en la cantidad de planos que mete. Se mide en cuánto corta. Si el editor no tiene criterio de selección, el resultado final dura 7 minutos y pierde al espectador en el minuto 2. Este artículo explica qué planos son imprescindibles y cuáles van directamente a la papelera.",
      },
      {
        type: "image",
        src: "/blog/video-recap-de-eventos/hero.webp",
        alt: "Cámara en mano cubriendo un evento corporativo en sala",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un vídeo recap y por qué importa",
      },
      {
        type: "paragraph",
        text: "Un recap de evento es una pieza corta —entre 90 segundos y 3 minutos— que resume lo que ocurrió en una jornada, congreso, gala, formación o lanzamiento de producto. Su función no es documentar: es comunicar. Se publica en LinkedIn, en la web corporativa, se envía a los asistentes o se usa como argumento para la siguiente edición.",
      },
      {
        type: "paragraph",
        text: "Lo que lo diferencia de una grabación completa es la selección. Un recap tiene ritmo, tiene estructura y tiene un punto de vista. La grabación completa existe por si acaso. El recap existe para que alguien que no estuvo quiera haber estado.",
      },
      {
        type: "paragraph",
        text: "En empresas que organizan eventos anuales, el recap es el activo audiovisual con más retorno: atrae patrocinadores, refuerza marca y convence a potenciales asistentes mejor que cualquier folleto.",
      },
      {
        type: "heading",
        level: 2,
        text: "Qué incluir sí o sí",
      },
      {
        type: "heading",
        level: 3,
        text: "Los planos de ambiente y sala",
      },
      {
        type: "paragraph",
        text: "Los primeros 20 segundos de un recap deben colocar al espectador en el espacio. La sala llena, el escenario preparado, el público llegando, el equipo técnico montando. Cuatro o cinco planos de 3-4 segundos cada uno son suficientes para establecer el contexto sin que el vídeo arranque con una charla sin presentación. Estos planos se capturan antes de que empiece el evento y en los descansos: es cuando hay luz natural, movimiento libre y acceso sin interrumpir a los ponentes. Si no se graban en ese momento, no hay forma de recuperarlos después.",
      },
      {
        type: "heading",
        level: 3,
        text: "Las caras y reacciones del público",
      },
      {
        type: "paragraph",
        text: "El error más frecuente es grabar solo al ponente. Las reacciones del público son las que convierten un vídeo de una charla en un vídeo de un evento. Risas, apuntes en papel, conversaciones durante el networking, el aplauso al final de una intervención. Son los planos que hacen que el espectador piense que debería haber estado. Dedico siempre al menos un 20-25% del material final a planos de reacción y ambiente humano. En un evento de 200 personas, eso es fácil de conseguir. En uno de 30, requiere más criterio para no abusar de las mismas caras.",
      },
      {
        type: "heading",
        level: 3,
        text: "Los momentos de transición y clímax",
      },
      {
        type: "paragraph",
        text: "El inicio de un ponente, el momento en que levanta la mano para enfatizar algo, el aplauso al final de la charla, el corte a la sala durante una pausa. Estos momentos de transición dan estructura al montaje sin que parezca un collage de clips sin coherencia. Son los que separan un buen editor de alguien que simplemente sabe usar el software.",
      },
      {
        type: "image",
        src: "/blog/video-recap-de-eventos/mid.webp",
        alt: "Audiencia en evento corporativo durante una presentación",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué cortar sin dudar",
      },
      {
        type: "list",
        items: [
          "Planos de espaldas del ponente o con cabeza cortada: si no se ve la cara, no suma.",
          "Audiencia mirando el móvil o distraída: comunica lo contrario de lo que el cliente quiere.",
          "Los primeros 30 segundos de cada charla antes de que el ponente encuentre el ritmo: casi siempre son arranques titubeantes.",
          "Pasillos vacíos y mesas de catering sin gente: generan sensación de evento frío y poco concurrido.",
          "Presentaciones de PowerPoint completas: en un recap solo va el segundo en que el ponente señala el dato clave, no la diapositiva entera.",
          "Cualquier plano con contraluz sin compensar o grabado bajo luz de emergencia: destruye la calidad percibida del resto del vídeo.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto debe durar un recap de evento?",
        answer:
          "Entre 90 segundos y 3 minutos es el rango que funciona en la mayoría de plataformas. Por debajo de 90 segundos es difícil transmitir el ambiente del evento. Por encima de 3 minutos la retención cae y el vídeo empieza a parecer una grabación completa. Para eventos de un día entero, lo habitual es un recap de entre 2 y 2:30 minutos. Para conferencias de varios días con material muy variado puede llegarse a 3:30.",
      },
      {
        type: "faq",
        question: "¿Con cuántas cámaras se graba un recap de evento?",
        answer:
          "Dos cámaras es el mínimo razonable: una fija en el escenario y otra móvil para planos de ambiente y público. Con una sola cámara el corte entre planos es más limitado y el riesgo de perder momentos clave es mayor. Tres cámaras permiten un montaje más fluido y cubrir el evento sin interrumpir la grabación para reposicionarse. A partir de cuatro, la complejidad de sincronización y los costes de postproducción aumentan notablemente.",
      },
      {
        type: "faq",
        question: "¿Qué música se usa en un recap corporativo?",
        answer:
          "Música con licencia de uso comercial. Plataformas como Artlist o Musicbed tienen catálogos amplios pensados para este tipo de producción. El ritmo de la música dicta el ritmo del montaje: para eventos dinámicos y networking, algo con tempo entre 100 y 120 BPM funciona bien. Para galas o presentaciones de empresa, piezas más pausadas y orquestales dan mejor resultado. Nunca música de Spotify sin licencia: en el momento en que el cliente sube el vídeo a LinkedIn o YouTube puede recibir una reclamación de derechos.",
      },
      {
        type: "faq",
        question: "¿Cuándo se entrega el recap después del evento?",
        answer:
          "Si el cliente necesita publicarlo mientras el evento está en tendencia, hay que planificar un corte exprés con material preseleccionado durante la grabación. Ese corte puede estar listo en 4-6 horas tras el evento si hay acuerdo previo sobre duración, música y estilo. Un recap cuidado, con revisiones y aprobación del cliente, tarda entre 3 y 5 días hábiles. Hay que acordarlo antes de empezar a grabar, no al terminar el evento.",
      },
      {
        type: "paragraph",
        text: "Si estás organizando un evento y quieres hablar sobre cómo cubrir la grabación y qué tipo de recap tiene sentido para tu caso, puedes escribirme desde la página de contacto. Trabajo en Madrid y alrededores.",
      },
    ],
  },
  {
    slug: "sonido-directo-entrevistas",
    title: "Sonido directo para entrevistas corporativas: lo mínimo que necesitas",
    description:
      "Tres elementos de audio para grabar entrevistas corporativas con sonido limpio: micrófono de solapa, grabadora de backup y monitorización en tiempo real.",
    publishedAt: "2026-05-28",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "sonido para vídeo",
      "entrevistas corporativas",
      "producción audiovisual",
      "vídeo corporativo",
      "equipo técnico",
    ],
    keyword: "sonido directo para entrevistas",
    intent: "informacional",
    excerpt:
      "El audio decide más cosas de las que parece. Esto es lo mínimo que necesito para grabar entrevistas corporativas con sonido limpio.",
    seoTitle: "Sonido directo para entrevistas corporativas | Daniel Acero",
    metaDescription:
      "Sonido directo para entrevistas corporativas: qué micrófono, grabadora y configuración necesitas para capturar audio limpio en producción.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "El audio decide más cosas de las que parece. Puedes tener una imagen perfecta, bien expuesta, con buen color, y arruinar el vídeo entero con un sonido malo. En entrevistas corporativas esto es especialmente evidente porque el espectador escucha hablar a alguien durante dos o tres minutos. Si ese audio falla, el mensaje no llega.",
      },
      {
        type: "paragraph",
        text: "No hace falta montar un estudio de grabación. Hay tres elementos básicos que cambian completamente el resultado. Los uso en casi cada entrevista que grabo.",
      },
      {
        type: "image",
        src: "/blog/sonido-directo-entrevistas/hero.webp",
        alt: "Micrófono de solapa listo para grabar una entrevista corporativa",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué el audio arruina más vídeos que la imagen",
      },
      {
        type: "paragraph",
        text: "Los micrófonos integrados en cámaras captan todo: el aire acondicionado, el tráfico de la calle, los pasos del pasillo, el murmullo de un ordenador. Cuando hay un fondo de ruido constante, el cerebro lo detecta aunque el espectador no lo identifique conscientemente. El resultado es una sensación de baja calidad que afecta a cómo percibe el mensaje, la empresa y al entrevistado.",
      },
      {
        type: "paragraph",
        text: "El problema añadido de grabar en oficinas es que son espacios llenos de superficies reflectantes: paredes lisas, cristal, suelos de parqué. El sonido rebota y crea un reverb que hace que la voz suene lejana o encajonada. Un micrófono de solapa situado a 15-20 cm de la boca del entrevistado captura la voz antes de que ese reverb se mezcle. Esa diferencia es enorme.",
      },
      {
        type: "heading",
        level: 2,
        text: "Los tres elementos mínimos para sonido limpio",
      },
      {
        type: "heading",
        level: 3,
        text: "Micrófono de solapa (lavalier)",
      },
      {
        type: "paragraph",
        text: "Es el elemento más crítico. Un lavalier inalámbrico como el Rode Wireless GO II o el DJI Mic Mini pone el micrófono cerca de la fuente de sonido y elimina prácticamente todos los problemas de ambiente. El receptor se conecta directamente a la cámara o a la grabadora. En exteriores añado un deadcat para cortar el viento. La calidad de estos sistemas ha mejorado enormemente en los últimos años; ya no hay excusa para grabar con el micrófono de cámara.",
      },
      {
        type: "heading",
        level: 3,
        text: "Grabadora portátil",
      },
      {
        type: "paragraph",
        text: "Cuando el sistema inalámbrico falla o quiero un canal de seguridad, grabo también con una Zoom H1n o una Tascam DR-05X conectada directamente al lavalier. Cuesta menos de 80 euros, cabe en el bolsillo y actúa como backup. Pongo la grabadora en el bolsillo del entrevistado o en el cinturón y sincronizo el audio en edición. DaVinci Resolve tiene una función de sincronización automática por forma de onda que lo hace en segundos. Si el sistema inalámbrico tiene cualquier problema, tengo la toma íntegra en la grabadora.",
      },
      {
        type: "heading",
        level: 3,
        text: "Monitor de auriculares",
      },
      {
        type: "paragraph",
        text: "No puedes corregir en postproducción lo que no sabes que está mal durante la grabación. Con unos auriculares monitorizando el audio en tiempo real, detectas cualquier problema antes de que sea tarde: un crujido en el cable, un soplido de aire acondicionado, saturación en la ganancia. No necesitas auriculares de estudio; unos in-ear con buena atenuación pasiva son suficientes. Revisa los niveles en la grabadora o en la cámara antes de empezar cada toma.",
      },
      {
        type: "image",
        src: "/blog/sonido-directo-entrevistas/mid.webp",
        alt: "Equipo de producción audiovisual durante grabación de entrevista",
        width: 1920,
        height: 1282,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que deberías evitar",
      },
      {
        type: "list",
        items: [
          "Poner el lavalier demasiado bajo: cuanto más lejos de la boca, más ambiente capta. Anclarlo en el primer botón de la camisa o en la solapa, no en el cinturón.",
          "Saltarse el deadcat en exterior: aunque no haya viento fuerte, cualquier movimiento de aire genera ruidos que no se pueden quitar en postproducción.",
          "Fiarse del auto-gain de la cámara: el control automático de ganancia sube el volumen en los silencios y capta todo el ruido de fondo. Siempre en manual.",
          "Grabar sin canal de seguridad: si el único micrófono falla durante la entrevista, pierdes la toma. La grabadora portátil como backup evita situaciones irreparables.",
          "No hacer prueba de sonido antes de empezar: 30 segundos de prueba con auriculares te evitan descubrir el problema al revisar el material en el ordenador.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Mejor lavalier de cable o inalámbrico?",
        answer:
          "Para entrevistas en interior donde el entrevistado no se mueve, el cable funciona bien y elimina el riesgo de interferencias. En exterior o en espacios con mucho movimiento, el inalámbrico da más libertad y reduce el riesgo de tirones. Yo uso casi siempre inalámbrico porque hace la grabación más cómoda para el entrevistado y me da más flexibilidad para ajustar encuadre.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si grabo en una sala con mucho eco?",
        answer:
          "El eco no se puede eliminar completamente en postproducción. La solución es capturarlo lo menos posible: acercar el micrófono a la boca del entrevistado, poner tejidos o elementos blandos en la sala si es posible (cortinas, alfombras), y elegir una habitación más pequeña antes que una sala grande vacía. A veces cambiar de habitación es la solución más rápida.",
      },
      {
        type: "faq",
        question: "¿Necesito micrófonos diferentes para exteriores?",
        answer:
          "El mismo lavalier sirve para interior y exterior. La diferencia está en los accesorios: deadcat obligatorio en exterior y, si la entrevista es en un sitio con mucho ruido ambiente, valorar hacer la grabación en otro momento o lugar. Los micrófonos de cañón como el Rode NTG4 son una buena alternativa en exterior cuando no se puede poner un lavalier, pero requieren un operador de boom o una montura robusta en cámara.",
      },
      {
        type: "faq",
        question: "¿Cuánto debería costar el equipo de audio mínimo?",
        answer:
          "Con unos 300-400 euros puedes montar un sistema completo: lavalier inalámbrico tipo DJI Mic Mini (200-250 €), grabadora de backup tipo Zoom H1n (75 €) y auriculares in-ear con buena atenuación (40-60 €). No hace falta más para producir entrevistas corporativas con audio profesional.",
      },
      {
        type: "paragraph",
        text: "El audio no tiene que ser complicado. Con estos tres elementos funciono en el 90% de las entrevistas corporativas que grabo. Si estás preparando una producción y quieres hablar sobre el equipo que tiene sentido para tu proyecto, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "color-grading-video-corporativo",
    title: "Color grading para vídeo corporativo: coherencia visual desde el set hasta la entrega",
    description:
      "Qué es el color grading en vídeo corporativo, cómo se aplica en DaVinci Resolve y qué errores evitar para que todos los planos parezcan grabados el mismo día.",
    publishedAt: "2026-05-29",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "color grading",
      "vídeo corporativo",
      "postproducción",
      "DaVinci Resolve",
      "filmmaker madrid",
    ],
    keyword: "color grading para vídeo corporativo",
    intent: "informacional",
    excerpt:
      "El color grading no es solo aplicar un filtro. Es la capa visual que separa un vídeo corporativo profesional de uno que parece casero. Te explico cómo lo trabajo.",
    seoTitle: "Color grading para vídeo corporativo | Daniel Acero",
    metaDescription:
      "Color grading para vídeo corporativo: qué es, cómo se aplica y qué errores evitar para conseguir un acabado profesional en tus producciones.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando entrego un vídeo corporativo, el cliente suele comentar primero la imagen. A veces con ese nombre exacto, otras dicen 'qué buena calidad' o 'parece muy profesional'. Casi siempre están hablando del color grading.",
      },
      {
        type: "paragraph",
        text: "La corrección y el etalonaje son la diferencia entre un vídeo que parece sacado de un móvil y uno que parece una producción real. No es magia. Es flujo de trabajo.",
      },
      {
        type: "image",
        src: "/blog/color-grading-video-corporativo/hero.webp",
        alt: "Cámara de vídeo profesional en un trípode lista para una grabación corporativa.",
        width: 1920,
        height: 1280,
        caption: "La coherencia visual empieza antes de encender la cámara.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es el color grading y por qué importa",
      },
      {
        type: "paragraph",
        text: "El color grading es el proceso de manipular los valores de color de las imágenes grabadas para lograr un resultado visual coherente y con intención. Va desde la corrección básica —blancos bien, exposición equilibrada— hasta el look final: un tono concreto, una atmósfera definida.",
      },
      {
        type: "paragraph",
        text: "En vídeo corporativo no se busca un look cinematográfico agresivo. Se busca que la imagen sea limpia, que la piel de las personas salga bien y que los colores corporativos de la empresa sean reconocibles. Y, sobre todo, que todos los planos del mismo vídeo parezcan grabados el mismo día con la misma cámara.",
      },
      {
        type: "paragraph",
        text: "Trabajo principalmente en DaVinci Resolve. Tiene la mejor gestión de color del mercado para este tipo de producciones y, a diferencia de Premiere, la corrección de color no es un añadido, es el núcleo del software.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se hace bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Corrección primaria: la base",
      },
      {
        type: "paragraph",
        text: "El primer paso es la corrección primaria. Igualar la exposición de todos los planos, corregir el balance de blancos, sacar las sombras si están muy cerradas. Si grabas en un perfil Log —S-Log2, S-Log3, C-Log—, primero tienes que aplicar un LUT técnico para llevar la imagen a un espacio de color estándar como REC.709 antes de tocar nada.",
      },
      {
        type: "paragraph",
        text: "Esta fase no tiene que ver con el estilo. Es resolver problemas: la entrevista en sala que quedó fría, el plano recurso que tiene más luz que el anterior, la toma de exterior que está un punto por encima. Sin una buena base, el look que apliques encima quedará mal.",
      },
      {
        type: "heading",
        level: 3,
        text: "Look y mood: del Log al REC.709",
      },
      {
        type: "paragraph",
        text: "Una vez que tienes la imagen corregida técnicamente, puedes trabajar el look. En vídeo corporativo suelo ir hacia tonos neutros, ligeramente cálidos en interiores, con piel bien saturada y fondos discretos. Nada de cruces de canales agresivos ni virados que distorsionen el azul corporativo de la empresa.",
      },
      {
        type: "paragraph",
        text: "El look lo trabajo con nodos en DaVinci: uno para la curva de contraste, otro para el ajuste de matices con el Hue vs Saturation, y un tercero para la calificación de piel si hay mucha variación entre sujetos. Llevar todo en nodos separados me permite revisar y modificar cada elemento sin deshacer el trabajo anterior.",
      },
      {
        type: "heading",
        level: 3,
        text: "Consistencia entre planos",
      },
      {
        type: "paragraph",
        text: "Aquí está la diferencia entre alguien que sabe hacer color grading y alguien que solo sabe usar LUTs. La consistencia. Dos planos de la misma entrevista tienen que tener exactamente el mismo aspecto aunque se grabaran con media hora de diferencia y la luz haya cambiado.",
      },
      {
        type: "paragraph",
        text: "Uso el scope vectorial y el waveform para comparar planos, no el monitor del portátil. Las pantallas mienten. Los scopes no. Si el vectorscope me dice que la piel de un plano tiene más saturación que el anterior, lo corrijo aunque al ojo parezca igual.",
      },
      {
        type: "image",
        src: "/blog/color-grading-video-corporativo/intermedia.webp",
        alt: "Monitor con interfaz de edición de vídeo en postproducción profesional.",
        width: 1920,
        height: 1280,
        caption: "La edición de color en monitor calibrado es la única manera de tomar decisiones visuales fiables.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes en color grading corporativo",
      },
      {
        type: "list",
        items: [
          "Aplicar un LUT de cine al metraje corporativo sin ajustarlo después. El look queda bien en el fotograma de preview y fatal en movimiento con personas reales.",
          "No calibrar el monitor. Cualquier trabajo de color hecho en una pantalla descalibrada es trabajo rehecho.",
          "Usar el mismo look para interiores y exteriores sin adaptar el balance de blancos base. El resultado es incoherente aunque el LUT sea el mismo.",
          "Saturar en exceso las pieles. El visor engaña; el vectorscope dice la verdad.",
          "No guardar el archivo original sin corregir. Si el cliente cambia de idea sobre el look, necesitas poder retomar desde cero.",
          "Hacer el grading antes del montaje definitivo. Si después se cambian planos, hay que rehacer el trabajo de color.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Necesito grabar en Log para hacer un buen color grading?",
        answer:
          "No es imprescindible, pero ayuda. Los perfiles Log comprimen la exposición y guardan más información en las luces y las sombras, lo que da más margen de ajuste en postproducción. Si grabas en un perfil estándar REC.709 y la exposición es correcta, puedes hacer un grading perfectamente válido. La diferencia se nota en situaciones de contraste extremo: una ventana iluminada detrás del entrevistado, por ejemplo.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo tarda el color grading de un vídeo corporativo?",
        answer:
          "Un vídeo de entrevista de 3 a 5 minutos, bien grabado, lleva entre 1 y 2 horas. Si hay muchos planos recurso con iluminación cambiante o si el metraje tiene problemas de base, puede subir a 3 o 4 horas. Esto es parte del presupuesto de postproducción y hay que dejarlo claro desde el principio.",
      },
      {
        type: "faq",
        question: "¿Qué software es mejor para color grading corporativo?",
        answer:
          "DaVinci Resolve, tanto en versión gratuita como Studio. Para vídeo corporativo la versión gratuita cubre el 95% de lo que necesitas. Premiere y Final Cut tienen herramientas de color decentes, pero la gestión de nodos y los scopes de DaVinci son superiores para trabajo de color serio.",
      },
      {
        type: "faq",
        question: "¿El color grading se puede hacer en un portátil normal?",
        answer:
          "Depende del metraje. Para H.264 o H.265 de una cámara convencional, un portátil moderno aguanta bien con DaVinci en versión gratuita. Para RAW o ProRes de cámaras más exigentes necesitas una tarjeta gráfica decente o proxies. Lo más limitante casi siempre es el monitor: si la pantalla no está calibrada o tiene un gamut pequeño, el color que estás viendo no es real.",
      },
      {
        type: "paragraph",
        text: "El color grading no debería ser un extra que se añade al final porque falta algo. Es parte de la producción desde el momento en que decides el perfil de color con el que vas a grabar. Si estás preparando una producción y quieres que el resultado final tenga coherencia visual, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "aspect-ratio-169-916-linkedin-instagram",
    title: "Aspect ratio en vídeo corporativo: 16:9 vs 9:16 para LinkedIn e Instagram",
    description:
      "Cuándo grabar en 16:9 y cuándo en 9:16 para LinkedIn e Instagram. Criterios prácticos para tomar la decisión antes de la grabación, no en postproducción.",
    publishedAt: "2026-06-01",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "aspect ratio",
      "vídeo corporativo",
      "LinkedIn",
      "Instagram",
      "formato vídeo",
      "redes sociales",
    ],
    keyword: "aspect ratio 16:9 vs 9:16 LinkedIn Instagram",
    intent: "informacional",
    excerpt:
      "El formato en que grabas un vídeo corporativo importa tanto como el contenido. Explico cuándo usar 16:9 y cuándo 9:16 para LinkedIn e Instagram.",
    seoTitle: "16:9 vs 9:16 para LinkedIn e Instagram | Daniel Acero",
    metaDescription:
      "Aspect ratio en vídeo corporativo: cuándo grabar en 16:9 y cuándo en 9:16 para LinkedIn e Instagram. Guía práctica con criterios reales de producción.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "El formato del vídeo ya no es un detalle técnico que se resuelve en postproducción. Es una decisión de producción que afecta al encuadre, al montaje y a cómo se va a ver el resultado en cada plataforma.",
      },
      {
        type: "paragraph",
        text: "Trabajo con marcas que me piden vídeos para LinkedIn e Instagram a la vez, y la pregunta del aspect ratio aparece en casi todos los proyectos. La respuesta corta es que depende de dónde va a vivir el vídeo y cuánto tiempo va a durar. La respuesta larga es esta guía.",
      },
      {
        type: "image",
        src: "/blog/aspect-ratio-169-916-linkedin-instagram/hero.webp",
        alt: "Pantalla de edición de vídeo profesional con monitor y teclado en estudio de postproducción.",
        width: 1920,
        height: 1288,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es el aspect ratio y por qué importa en vídeo corporativo",
      },
      {
        type: "paragraph",
        text: "El aspect ratio es la relación entre el ancho y el alto del fotograma. El 16:9 es horizontal: 1920×1080 píxeles, el formato estándar de televisión y web. El 9:16 es vertical: 1080×1920 píxeles, el formato nativo del móvil en vertical. El 1:1 es cuadrado: 1080×1080, heredado de los primeros años de Instagram.",
      },
      {
        type: "paragraph",
        text: "En el móvil, que es donde se consume la mayor parte del vídeo corporativo hoy, un vídeo 16:9 ocupa menos de un tercio de la pantalla. Un 9:16 la ocupa entera. Esa diferencia de superficie visual es el argumento principal para adaptar el formato según la plataforma.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo elegir el formato según la plataforma",
      },
      {
        type: "heading",
        level: 3,
        text: "LinkedIn: 16:9 sigue siendo el estándar",
      },
      {
        type: "paragraph",
        text: "LinkedIn tiene más tráfico de escritorio que otras plataformas sociales. Sus usuarios acceden desde el trabajo, con un portátil o un monitor delante. El feed de LinkedIn muestra los vídeos en horizontal, y el 16:9 se ve limpio: sin franjas negras, sin recortes. Para entrevistas corporativas, testimonios en sala, recaps de conferencias y contenido pensado para B2B, el 16:9 es el formato correcto.",
      },
      {
        type: "paragraph",
        text: "Dicho eso, desde hace un par de años LinkedIn da más espacio en la app móvil a vídeos verticales. Si el vídeo dura menos de 60 segundos y está pensado exclusivamente para consumo en teléfono, el 9:16 puede funcionar mejor. Todavía no es la norma en LinkedIn, pero la tendencia está ahí.",
      },
      {
        type: "heading",
        level: 3,
        text: "Instagram: 9:16 para Reels, 4:5 para el feed",
      },
      {
        type: "paragraph",
        text: "En Instagram Reels, el 9:16 es el formato nativo. Se puede subir un vídeo 16:9, pero Instagram lo muestra con franjas negras arriba y abajo, lo que reduce el área visible. En Reels la atención se capta en los primeros 2 segundos, y un encuadre que ocupa menos pantalla que el contenido de la competencia es una desventaja real.",
      },
      {
        type: "paragraph",
        text: "Para el feed estático de Instagram, el formato más eficiente no es el 16:9 sino el 4:5 vertical, que ocupa más espacio en el scroll antes de que el usuario tenga que hacer clic en ver más. El 1:1 también funciona, pero el 4:5 rinde mejor en pantallas modernas.",
      },
      {
        type: "heading",
        level: 3,
        text: "Cuando tienes que publicar en las dos plataformas",
      },
      {
        type: "paragraph",
        text: "La solución práctica es grabar en 16:9 con área de seguridad 9:16. Durante la grabación me aseguro de que el sujeto principal —la cara del entrevistado, el producto, el texto clave— cabe dentro del recuadro central vertical del encuadre. En postproducción exporto dos versiones: 16:9 para LinkedIn y web, 9:16 para Instagram y Stories. No es rodar dos vídeos distintos. Es una sola grabación con una planificación de encuadre consciente.",
      },
      {
        type: "image",
        src: "/blog/aspect-ratio-169-916-linkedin-instagram/intermedia.webp",
        alt: "Persona grabando vídeo vertical con smartphone para contenido en redes sociales.",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo tiene sentido adaptar el formato (y cuándo no)",
      },
      {
        type: "list",
        items: [
          "Adaptar si el vídeo va a vivir principalmente en Reels o Stories. El retorno en visibilidad justifica la edición adicional.",
          "Adaptar si el vídeo dura menos de 90 segundos. A partir de esa duración, el consumo en formato vertical cae significativamente.",
          "No adaptar si el presupuesto no cubre dos ediciones distintas y el destino principal es web o presentaciones corporativas.",
          "No adaptar si el encuadre original depende del ancho: exteriores amplios, planos de locación, escenas con varios sujetos. Recortar a 9:16 puede quedar mal.",
          "Decidirlo antes de grabar, no en postproducción. Un plano compuesto para 16:9 puede ser imposible de recortar a vertical sin perder información esencial.",
          "Si hay dudas, grabar con más margen en la composición. Mejor tener espacio para recortar que no poder hacerlo.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Qué pasa si subo un vídeo 16:9 a Instagram Reels?",
        answer:
          "Instagram lo acepta, pero lo muestra con franjas negras arriba y abajo. El vídeo ocupa menos pantalla que un Reel en 9:16. En un formato donde la competencia por la atención es intensa y los primeros fotogramas son decisivos, esa reducción de área visible es una desventaja práctica.",
      },
      {
        type: "faq",
        question: "¿Necesito dos cámaras para grabar en 16:9 y 9:16?",
        answer:
          "No. Con una sola cámara y una planificación de encuadre correcta puedes generar ambos formatos en postproducción. La clave es dejar suficiente espacio encima y debajo del sujeto durante la grabación para que el recorte vertical no corte información relevante. Es una decisión de composición, no de equipamiento.",
      },
      {
        type: "faq",
        question: "¿El 1:1 sigue siendo útil para vídeo corporativo?",
        answer:
          "En el feed de Instagram y Facebook funciona razonablemente bien porque ocupa más espacio en el scroll que el 16:9. Para Reels y Stories ya no es el formato ideal. Si tengo que elegir entre 1:1 y 9:16 para contenido pensado para móvil, elijo 9:16. Si el destino es solo el feed estático, el 4:5 es mejor opción que el 1:1.",
      },
      {
        type: "faq",
        question: "¿El aspect ratio afecta al rendimiento algorítmico del vídeo?",
        answer:
          "De forma indirecta, sí. El algoritmo de Instagram favorece el contenido que usa el formato nativo de cada ubicación. Un Reel en 9:16 ocupa más pantalla y tiene más posibilidades de generar engagement que uno en 16:9 con franjas. No es una penalización explícita, pero la diferencia en área visual influye en el porcentaje de reproducción y en la probabilidad de aparición en la pantalla de exploración.",
      },
      {
        type: "paragraph",
        text: "El aspect ratio es una decisión que se toma antes de pulsar grabar, no después de la edición. Si estás planificando una producción para LinkedIn e Instagram y quieres asegurarte de que el resultado funciona en las dos plataformas, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "subtitulos-automaticos-video-corporativo",
    title: "Subtítulos automáticos en vídeo corporativo: pros, contras y cuándo usarlos",
    description:
      "Guía práctica sobre subtítulos automáticos para vídeo corporativo: cómo funcionan, dónde fallan y cuándo merece la pena hacer la transcripción a mano.",
    publishedAt: "2026-06-02",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "subtítulos automáticos",
      "vídeo corporativo",
      "accesibilidad",
      "post-producción",
      "edición de vídeo",
      "DaVinci Resolve",
    ],
    keyword: "subtítulos automáticos vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Los generadores automáticos de subtítulos ahorran tiempo, pero tienen límites claros. Cuándo los uso en vídeo corporativo, cuándo no, y qué revisar siempre antes de publicar.",
    seoTitle: "Subtítulos automáticos en vídeo corporativo | Daniel Acero",
    metaDescription:
      "Subtítulos automáticos en vídeo corporativo: qué herramientas funcionan, cuándo ahorra tiempo y cuándo necesitan revisión manual.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La mayoría de herramientas de edición ya incluyen algún tipo de generador de subtítulos automáticos. DaVinci Resolve, Premiere Pro, CapCut, Descript... todos tienen la función. El flujo es el mismo: subes el vídeo, el software transcribe el audio y te entrega los subtítulos en segundos. Lo que varía es lo que haces después.",
      },
      {
        type: "paragraph",
        text: "En proyectos de vídeo corporativo uso subtítulos automáticos con frecuencia, pero nunca los publico sin revisar. Aquí cuento en qué escenarios funcionan bien, dónde fallan y cuándo prefiero hacer la transcripción a mano desde el principio.",
      },
      {
        type: "image",
        src: "/blog/subtitulos-automaticos-video-corporativo/hero.webp",
        alt: "Monitor de edición de vídeo mostrando una línea de tiempo con subtítulos en un proyecto corporativo",
        width: 1920,
        height: 1280,
        caption: "La revisión de los subtítulos automáticos forma parte del proceso de edición.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué los subtítulos importan en vídeo corporativo",
      },
      {
        type: "paragraph",
        text: "El 85% del vídeo en redes sociales se ve sin sonido. En LinkedIn, donde se consume mucho vídeo corporativo, el autoplay en silencio es el comportamiento por defecto. Sin subtítulos, el mensaje desaparece. No es un detalle de accesibilidad: es el medio para que el contenido funcione.",
      },
      {
        type: "paragraph",
        text: "En entrevistas, testimoniales o vídeos formativos internos, los subtítulos también reducen la carga cognitiva del espectador. Facilitan el seguimiento cuando hay terminología técnica o cuando el audio no es perfectamente nítido por condiciones de rodaje.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo funcionan los subtítulos automáticos",
      },
      {
        type: "heading",
        level: 3,
        text: "Herramientas que uso",
      },
      {
        type: "paragraph",
        text: "Para proyectos editados en DaVinci Resolve, uso la función de transcripción integrada disponible desde la versión 18. Para vídeos que van directamente a redes, CapCut tiene una buena implementación en español con ajuste de tipografía sencillo. Para proyectos donde el cliente necesita el archivo SRT por separado, Whisper de OpenAI vía línea de comandos da la mayor precisión que he encontrado de forma consistente.",
      },
      {
        type: "heading",
        level: 3,
        text: "Dónde funcionan bien",
      },
      {
        type: "paragraph",
        text: "Cuando el audio es limpio, el hablante habla con claridad y el contenido está en castellano estándar, la precisión es alta: entre el 90 y el 95% de las palabras. En ese escenario, la revisión manual se reduce a corregir puntuación, ajustar el timing de algunos cortes y unificar estilo. El ahorro es real: lo que tardaría 45 minutos en transcribir a mano lo reviso en 10.",
      },
      {
        type: "heading",
        level: 3,
        text: "Dónde fallan",
      },
      {
        type: "paragraph",
        text: "Los problemas aparecen con acentos regionales marcados, términos técnicos del sector, nombres propios y habla rápida. En una entrevista donde el portavoz pronuncia denominaciones especializadas del ámbito médico, financiero o legal, el sistema las transcribe como puede. Un error en un término técnico no es un error tipográfico menor: es desinformación. En esos casos, reviso cada línea.",
      },
      {
        type: "image",
        src: "/blog/subtitulos-automaticos-video-corporativo/intermedia.webp",
        alt: "Monitor de cámara sobre trípode en un rodaje de entrevista corporativa",
        width: 1920,
        height: 1280,
        caption: "El audio captado en rodaje determina en gran medida la precisión de los subtítulos automáticos.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo hacer la transcripción a mano",
      },
      {
        type: "list",
        items: [
          "El vídeo incluye terminología técnica específica del sector del cliente.",
          "Hay nombres propios de personas, empresas o productos que el modelo no reconoce.",
          "El hablante tiene acento marcado o habla a ritmo elevado.",
          "El audio tiene ruido de fondo significativo: eventos, exteriores con viento, oficinas abiertas.",
          "El contenido tiene uso legal, formativo certificado o auditoría interna, donde cualquier error tiene consecuencias.",
          "El cliente va a leer los subtítulos antes de aprobar el vídeo y el margen de correcciones es estrecho.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Los subtítulos automáticos son válidos para un vídeo corporativo formal?",
        answer:
          "Depende del nivel de precisión que exija el proyecto. Para contenido de redes, sí, con revisión. Para una presentación institucional o un vídeo donde el texto va a ser leído con atención, prefiero transcribir manualmente o revisar al 100% la salida automática antes de dar el vídeo por terminado.",
      },
      {
        type: "faq",
        question: "¿Qué formato de subtítulos debo entregar al cliente?",
        answer:
          "Depende del uso final. SRT es el formato más universal: funciona en YouTube, Vimeo, plataformas de formación y la mayoría de reproductores. Si el cliente quiere subtítulos integrados en el vídeo —burned in—, lo gestiono desde la línea de tiempo de edición directamente, sin necesidad de exportar un archivo separado.",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda revisar los subtítulos automáticos de un vídeo de 3 minutos?",
        answer:
          "Entre 10 y 20 minutos si el audio es limpio y el contenido está en castellano estándar. Si hay muchas correcciones, puede acercarse al tiempo de transcripción manual. Ese es el punto a partir del cual deja de tener sentido usar el automático y merece la pena empezar desde cero.",
      },
      {
        type: "faq",
        question: "¿Los subtítulos afectan al posicionamiento del vídeo en YouTube?",
        answer:
          "YouTube tiene en cuenta el texto de los subtítulos para indexar el contenido. Subtítulos correctos y bien sincronizados ayudan a que el vídeo aparezca en búsquedas relacionadas con lo que se dice en él. Si los subtítulos automáticos tienen errores, esos errores también se indexan.",
      },
      {
        type: "paragraph",
        text: "Los subtítulos automáticos son una herramienta útil, no un proceso que pueda funcionar sin supervisión. Antes de publicar cualquier vídeo con subtítulos, los reviso. Si estás planificando la producción de un vídeo corporativo y quieres que el resultado esté listo para publicar sin trabajo adicional de tu parte, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "como-preparar-un-ceo-para-grabar-a-camara",
    title: "Cómo preparar a un CEO para grabar a cámara",
    description:
      "Guía práctica para preparar a un director general antes de grabar a cámara: llamada previa, postura, lenguaje y errores comunes que arruinan la toma.",
    publishedAt: "2026-06-03",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "entrevistas corporativas",
      "vídeo corporativo",
      "CEO en cámara",
      "dirección en rodaje",
      "producción de vídeo",
      "filmmaker madrid",
    ],
    keyword: "cómo preparar a un CEO para grabar a cámara",
    intent: "informacional",
    excerpt:
      "Grabar a un CEO con naturalidad no es cuestión de talento delante de la cámara. Es preparación: una llamada previa, las preguntas escritas con antelación, y saber qué hacer con las manos cuando se enciende el piloto rojo.",
    seoTitle: "Cómo preparar a un CEO para grabar a cámara | Daniel Acero",
    metaDescription:
      "Cómo preparar a un CEO para grabar a cámara: llamada previa, postura, lenguaje y errores que hay que evitar. Guía práctica de un filmmaker corporativo.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Hay una conversación que tengo en casi todos mis rodajes corporativos. El director general entra a la sala, mira la cámara, y dice: \"Avísame cuando empieces, que delante de la cámara me pongo nervioso.\" Lleva veinte años presentando resultados trimestrales ante cien personas sin inmutarse. Y se pone nervioso delante de un objetivo de 50 mm.",
      },
      {
        type: "paragraph",
        text: "No es debilidad. Es un problema de preparación. El CEO no sabe qué pasa exactamente cuando empieza a grabar, qué se va a preguntar ni cuánto tiempo dura. Y cuando alguien no sabe qué esperar, el cuerpo se pone en alerta. Mi trabajo, antes de encender la cámara, es eliminar esa incertidumbre.",
      },
      {
        type: "image",
        src: "/blog/como-preparar-un-ceo-para-grabar-a-camara/hero.webp",
        alt: "Cámara de cine Sony FS7 sobre trípode en un set de rodaje profesional",
        width: 1920,
        height: 1080,
        caption: "La preparación del portavoz empieza mucho antes de que la cámara se encienda.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué la cámara intimida más que hablar en público",
      },
      {
        type: "paragraph",
        text: "Hablar ante un público da señales de respuesta. Ves caras, puedes ajustar el ritmo y percibes si alguien está siguiendo el discurso. La cámara no da nada. Mira fija y no reacciona. Para alguien que no ha grabado mucho, esa ausencia de feedback es desorientadora.",
      },
      {
        type: "paragraph",
        text: "El otro factor es la permanencia. Una presentación se olvida. Un vídeo queda. Eso añade presión. El CEO siente que cada frase va a vivir para siempre, y eso le hace buscar la perfección en tiempo real, lo que bloquea el lenguaje natural.",
      },
      {
        type: "paragraph",
        text: "Por eso la preparación no es solo técnica. Es también psicológica: que llegue al set sabiendo que los errores son normales, que hay margen para repetir, y que el resultado va a estar bien.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo preparo al CEO antes de grabar",
      },
      {
        type: "heading",
        level: 3,
        text: "La llamada previa",
      },
      {
        type: "paragraph",
        text: "Antes de rodar, hago una llamada de 20 minutos con el CEO o con su asistente. No para ensayar guion, sino para repasar el formato: cuántas preguntas hay, qué tipo de respuestas buscamos, si va a leer al teleprompter o improvisar, y cuánto tiempo tenemos en el set. También le digo lo que no tiene que preocuparle: los fallos de pronunciación se cortan, las pausas largas se editan, y si sale mal una toma hay tiempo para repetirla.",
      },
      {
        type: "heading",
        level: 3,
        text: "La postura y el espacio antes de empezar",
      },
      {
        type: "paragraph",
        text: "Cuando llego al set, dedico entre 5 y 10 minutos a colocar al CEO antes de grabar. Le pido que se siente exactamente como se sienta normalmente, no que adopte una postura «correcta» que le va a resultar incómoda después de tres minutos. Regulamos la silla para que no haya tensión en los hombros. Le digo dónde mirar: si hay entrevistador, mira al entrevistador, no a la cámara. Si habla directo a cámara, le sitúo un punto de referencia a la altura correcta para que no eleve la mirada.",
      },
      {
        type: "heading",
        level: 3,
        text: "El lenguaje durante la grabación",
      },
      {
        type: "paragraph",
        text: "Antes de la primera pregunta, hago una toma de calentamiento. Le pido que me diga en voz alta su nombre, su cargo y lo que hacía antes de llegar a ese puesto. No se graba para el vídeo final. Sirve para que la voz se asiente, para que el cuerpo se acostumbre a hablar hacia la cámara, y para que compruebe que el mundo no se acaba si se equivoca. Después de eso, la primera pregunta real sale siempre mejor.",
      },
      {
        type: "image",
        src: "/blog/como-preparar-un-ceo-para-grabar-a-camara/interior.webp",
        alt: "Cámara profesional en estudio de producción durante un rodaje corporativo",
        width: 1920,
        height: 1280,
        caption: "Un set organizado y una instrucción clara antes de empezar reduce el tiempo de rodaje.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que arruinan la toma",
      },
      {
        type: "list",
        items: [
          "Enviarle el guion completo la noche anterior para que lo memorice. Si lo memoriza, suena a memoria.",
          "No explicarle el tiempo disponible. La incertidumbre sobre la duración añade presión innecesaria.",
          "Empezar directamente con la primera pregunta sin una toma de calentamiento.",
          "Pedirle que «sea natural». Es la instrucción más inútil que existe delante de una cámara.",
          "Programar el rodaje después de un bloque de reuniones de 4 horas. La fatiga mental se nota en cámara.",
          "Usar un fondo que el CEO encuentre incómodo o que no represente bien a la empresa.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo necesita un CEO para prepararse antes de grabar?",
        answer:
          "Con una llamada previa de 20 minutos y las preguntas escritas con 24 horas de antelación, suele ser suficiente. No hace falta memorizar nada. Solo leer las preguntas para que el tema no le pille de sorpresa.",
      },
      {
        type: "faq",
        question: "¿Teleprompter o respuestas improvisadas para un CEO?",
        answer:
          "Depende del perfil. Los que tienen mucha práctica pública suelen funcionar mejor respondiendo a una pregunta breve sin leer. Los que no graban habitualmente agradecen el teleprompter, siempre que el texto esté escrito en su propio lenguaje y no en jerga de marketing.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si el CEO no puede soltar un fragmento sin errores?",
        answer:
          "Le digo que no pasa nada y seguimos grabando por partes. Una respuesta de 2 minutos se puede grabar en 4 tomas de 30 segundos y montar después sin que se note. Es más trabajo de edición, pero el resultado sale igual de bien.",
      },
      {
        type: "faq",
        question: "¿Hace falta maquillaje para grabar a un CEO?",
        answer:
          "Un poco de polvo o base ligera ayuda a reducir brillos bajo los focos. No es obligatorio, pero si el CEO va a pasar 30 minutos bajo iluminación directa, lo agradece. Llevo polvo matificante en el kit para esos casos.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto que incluye entrevistas a directivos y quieres hablar del formato antes de entrar al set, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "teleprompter-cuando-usarlo-y-cuando-no",
    title: "Teleprompter en vídeo corporativo: cuándo usarlo y cuándo no",
    description:
      "Guía práctica para decidir si el teleprompter tiene sentido en tu próximo rodaje corporativo. Cuándo ayuda, cuándo perjudica y qué alternativas existen.",
    publishedAt: "2026-06-04",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "teleprompter",
      "vídeo corporativo",
      "rodaje corporativo",
      "preproducción",
      "portavoz en cámara",
      "comunicación corporativa",
    ],
    keyword: "teleprompter cuándo usarlo",
    intent: "informacional",
    excerpt:
      "El teleprompter no es siempre la solución. Dos preguntas antes de cada rodaje me dicen si tiene sentido o si va a perjudicar el resultado.",
    seoTitle: "Teleprompter corporativo: cuándo usarlo | Daniel Acero",
    metaDescription:
      "Teleprompter: cuándo usarlo en vídeo corporativo y cuándo no. Guía práctica de Daniel Acero, filmmaker en Madrid, para decidir antes del rodaje.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "El teleprompter lleva décadas en televisión y, en los últimos años, ha llegado a todo tipo de producciones corporativas. La pregunta que me hacen antes de casi cualquier rodaje con portavoz no es si tienen guión, sino si quieren usar teleprompter. Mi respuesta casi nunca es un sí rotundo ni un no absoluto.",
      },
      {
        type: "paragraph",
        text: "Hay situaciones donde el teleprompter salva el rodaje: reduce tomas, elimina errores y le da seguridad al presentador. Y hay situaciones donde lo arruina: la persona se ve rígida, los ojos no responden con naturalidad y el vídeo pierde credibilidad. La diferencia no está en la herramienta, sino en quién la usa y qué tiene que transmitir.",
      },
      {
        type: "image",
        src: "/blog/teleprompter-cuando-usarlo-y-cuando-no/hero.webp",
        alt: "Cámara Sony FS7 en set de rodaje corporativo preparada para grabar con teleprompter",
        width: 1920,
        height: 1080,
        caption: "El teleprompter es una herramienta, no una garantía.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un teleprompter y cómo funciona en producción corporativa",
      },
      {
        type: "paragraph",
        text: "Un teleprompter es un espejo semitransparente que refleja el texto del guión frente al objetivo de la cámara. El presentador lee las palabras, pero sus ojos miran directamente al objetivo. Desde el punto de vista técnico es sencillo: un tablet o monitor, un cristal a 45 grados y un software que controla la velocidad del desfile de texto.",
      },
      {
        type: "paragraph",
        text: "En producción corporativa se usa principalmente para vídeos de portavoz, mensajes del CEO, presentaciones de producto o comunicados internos. Cualquier pieza donde alguien tiene que hablar a cámara durante más de 30 segundos y el texto necesita ser preciso es candidata a teleprompter.",
      },
      {
        type: "paragraph",
        text: "El reto no es técnico. El reto es que la mayoría de las personas que se sientan delante de un teleprompter por primera vez leen. Y cuando se nota que alguien está leyendo, el vídeo pierde credibilidad al instante. El espectador no sabe decirte qué falla exactamente, pero lo percibe.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo tiene sentido usar teleprompter",
      },
      {
        type: "heading",
        level: 3,
        text: "Cuando el texto necesita ser exacto",
      },
      {
        type: "paragraph",
        text: "Hay mensajes donde no hay margen de imprecisión: comunicados legales, anuncios de resultados financieros, discursos de apertura de evento donde cada palabra pesa. En estos casos el teleprompter no es una muleta, es la herramienta correcta. El riesgo de improvisar y decir algo fuera de lugar es mayor que el riesgo de parecer ligeramente preparado.",
      },
      {
        type: "heading",
        level: 3,
        text: "Cuando el presentador está entrenado",
      },
      {
        type: "paragraph",
        text: "Los locutores y los presentadores de televisión llevan años leyendo teleprompter sin que se note. Un directivo que hace comunicaciones internas con regularidad también puede aprenderlo. Con dos o tres horas de práctica real, la mayoría consigue un resultado aceptable. Sin práctica, ningún ajuste técnico compensa la mirada vidriosa.",
      },
      {
        type: "heading",
        level: 3,
        text: "Cuando la pieza es larga o densa en contenido",
      },
      {
        type: "paragraph",
        text: "Para vídeos de más de dos minutos donde el protagonista tiene que cubrir muchos puntos sin perder el hilo, el teleprompter reduce errores y tomas. Sin él, tres minutos de guión pueden costar cuatro horas de rodaje. Con él, si el presentador lo maneja bien, ese tiempo se recorta a la mitad.",
      },
      {
        type: "image",
        src: "/blog/teleprompter-cuando-usarlo-y-cuando-no/mid.webp",
        alt: "Realizadora grabando vídeo a cámara en estudio de producción corporativa",
        width: 1920,
        height: 1080,
        caption: "El estilo de la pieza determina si el teleprompter encaja o sobra.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo el teleprompter perjudica el vídeo",
      },
      {
        type: "list",
        items: [
          "Cuando la pieza busca cercanía o espontaneidad: testimoniales, entrevistas de equipo, vídeos de cultura de empresa.",
          "Cuando el presentador nunca lo ha usado y no hay tiempo para practicar antes del rodaje.",
          "Cuando el espacio no permite montar el equipo a la distancia correcta y el ángulo de lectura se vuelve evidente.",
          "Cuando el guión no está cerrado y se sigue editando el texto durante el propio rodaje.",
          "Cuando el estilo del vídeo es documental o conversacional y la rigidez del teleprompter rompe ese tono.",
          "Cuando la persona que aparece en cámara es más creíble siendo espontánea que siendo precisa.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes sobre teleprompter en vídeo corporativo",
      },
      {
        type: "faq",
        question: "¿Se nota en el vídeo que alguien está usando teleprompter?",
        answer:
          "Si el presentador está entrenado, no se nota. Si no lo está, sí: los ojos no hacen microexpresiones naturales, el ritmo es demasiado uniforme y la velocidad de parpadeo cambia. El espectador no sabe decirte qué falla, pero percibe que algo no cuadra.",
      },
      {
        type: "faq",
        question: "¿Qué velocidad es la correcta para el texto del teleprompter?",
        answer:
          "Depende de la persona. La mayoría habla entre 130 y 160 palabras por minuto en cámara. El operador ajusta la velocidad para que coincida con el ritmo natural de habla, no al revés. Con mando remoto el propio presentador puede controlarlo, aunque al principio eso genera más nerviosismo que alivio.",
      },
      {
        type: "faq",
        question: "¿A qué distancia debe estar el presentador de la cámara?",
        answer:
          "Para una entrevista estándar rodada con una óptica de 85mm o similar, el presentador suele estar entre dos y tres metros de cámara. A esa distancia, el ángulo de lectura es casi imperceptible. Con ópticas más angulares el teleprompter queda más cerca y el efecto de lectura se vuelve más visible.",
      },
      {
        type: "faq",
        question: "¿Es mejor teleprompter o aprender el guión de memoria?",
        answer:
          "Aprender el guión de memoria da resultados más naturales, pero exige tiempo de preparación que muchos directivos no tienen. Para piezas de 30 a 60 segundos es viable. Para piezas de dos minutos o más, el teleprompter es más eficiente. Una tercera opción que funciona bien es hablar desde puntos clave en lugar de un guión literal: el presentador tiene libertad de expresión y el mensaje queda estructurado.",
      },
      {
        type: "paragraph",
        text: "Antes de decidir si incluyo teleprompter en un rodaje, pregunto dos cosas: qué tipo de pieza es y cuánto tiempo ha practicado la persona. La respuesta a esas dos preguntas suele decirlo todo. Si tienes un vídeo corporativo en mente y quieres hablar de cómo organizarlo antes del rodaje, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "locaciones-entrevistas-corporativas-madrid",
    title: "Locaciones para grabar entrevistas corporativas en Madrid",
    description:
      "Qué espacios funcionan de verdad para grabar entrevistas corporativas en Madrid: oficinas, hoteles, coworkings y exteriores. Guía práctica con errores comunes y consejos de producción.",
    publishedAt: "2026-06-05",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "locaciones entrevistas corporativas",
      "grabar entrevistas Madrid",
      "locaciones vídeo corporativo",
      "producción audiovisual Madrid",
      "filmmaker Madrid",
    ],
    keyword: "locaciones para grabar entrevistas corporativas en Madrid",
    intent: "informacional",
    excerpt:
      "Elegir bien la locación marca la diferencia entre una entrevista que parece profesional y una que parece grabada en el trastero. Te cuento las opciones que uso en Madrid y cuándo tiene sentido cada una.",
    seoTitle: "Locaciones para entrevistas corporativas en Madrid | Daniel Acero",
    metaDescription:
      "Locaciones para grabar entrevistas corporativas en Madrid: oficinas, hoteles, coworking, exteriores y estudios. Qué funciona y qué evitar.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Antes de encender una sola cámara, tengo que decidir dónde grabar. La locación determina el sonido, la luz y el fondo, y los tres afectan directamente al resultado final.",
      },
      {
        type: "paragraph",
        text: "He grabado entrevistas corporativas en Madrid en casi todo tipo de espacio: desde salas de reuniones de empresa hasta jardines en azoteas. Algunas funcionan bien desde el primer momento. Otras requieren trabajo extra que no siempre es posible hacer en el tiempo disponible.",
      },
      {
        type: "image",
        src: "/blog/locaciones-entrevistas-corporativas-madrid/hero.webp",
        alt: "Entrevista corporativa en oficina moderna, dos personas sentadas frente a frente con luz natural",
        width: 1920,
        height: 1080,
        caption: "La locación define el tono visual de cualquier entrevista corporativa.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué la locación condiciona todo",
      },
      {
        type: "paragraph",
        text: "En una entrevista corporativa, el entrevistado habla a cámara durante 10 o 20 minutos. El espacio tiene que permitirle concentrarse. Si hay ruido de tráfico, de centralita o de aire acondicionado encendido, la grabación queda comprometida desde el inicio.",
      },
      {
        type: "paragraph",
        text: "La iluminación es el segundo factor. Muchas oficinas tienen luz de techo dura o fluorescente que aplana las caras y genera sombras poco favorecedoras. Puedo compensarlo con focos propios, pero necesito espacio suficiente para colocarlos bien. El fondo comunica también: una estantería transmite una cosa, un almacén transmite otra. Antes de cualquier rodaje, inspecciono el espacio o pido fotos para evaluar qué traigo y qué evito.",
      },
      {
        type: "heading",
        level: 2,
        text: "Opciones que uso en Madrid",
      },
      {
        type: "heading",
        level: 3,
        text: "La oficina del cliente",
      },
      {
        type: "paragraph",
        text: "La opción más cómoda logísticamente. No hay que desplazar al entrevistado y el entorno suele reflejar la identidad de la empresa. Pero hay que reconocer el espacio antes de grabar. Las oficinas abiertas tienen mucho ruido de fondo. Las salas de reuniones suelen estar bien aisladas acústicamente, aunque pueden ser pequeñas para colocar tres puntos de luz y dos cámaras con holgura.",
      },
      {
        type: "paragraph",
        text: "Pido siempre acceso 45 minutos antes del rodaje para explorar opciones de fondo y ver cómo entra la luz natural a esa hora del día.",
      },
      {
        type: "heading",
        level: 3,
        text: "Hoteles con sala de reuniones",
      },
      {
        type: "paragraph",
        text: "Cuando el cliente no tiene oficina o quiere un entorno más neutro, alquilamos una sala de hotel. En Madrid hay muchas opciones en el centro que ofrecen salas por horas con buena acústica y control de luz. El coste ronda los 80-150 euros por tres horas, lo que se absorbe sin problema dentro del presupuesto de producción.",
      },
      {
        type: "paragraph",
        text: "La ventaja es el silencio: los hoteles cuidan que sus salas no tengan ruido de pasillos ni de cocinas. La desventaja es que el entorno puede quedar genérico si no se trabaja bien el encuadre.",
      },
      {
        type: "heading",
        level: 3,
        text: "Espacios de coworking o alquiler por horas",
      },
      {
        type: "paragraph",
        text: "Madrid tiene bastante oferta de espacios que alquilan salas diáfanas o de reuniones por horas, bien equipadas y con buena iluminación natural. El precio varía entre 30 y 80 euros por hora según el barrio y el tipo de espacio. Los de Salamanca o Chamberí suelen tener estética más cuidada.",
      },
      {
        type: "paragraph",
        text: "Funcionan bien cuando busco fondos más modernos o con estética de startup. No siempre tienen el silencio de un hotel, así que conviene preguntar antes sobre el nivel de ocupación a la hora del rodaje.",
      },
      {
        type: "image",
        src: "/blog/locaciones-entrevistas-corporativas-madrid/mid.webp",
        alt: "Mesa de producción con auriculares y micrófono profesional para grabación de audio en entrevista",
        width: 1920,
        height: 1280,
        caption: "El control del sonido empieza mucho antes de conectar el micrófono.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que veo con más frecuencia",
      },
      {
        type: "list",
        items: [
          "Grabar con el aire acondicionado encendido sin haberlo previsto: el zumbido se filtra en el audio y no tiene solución en posproducción.",
          "Colocar al entrevistado con una ventana a la espalda sin gestionar la luz, lo que lo deja silueteado.",
          "No pedir acceso previo y llegar sin margen para ajustar fondo, focos ni encuadre.",
          "Elegir un espacio demasiado pequeño: cámaras y focos necesitan distancia del entrevistado para funcionar bien.",
          "Grabar en exteriores sin plan B para el viento o el ruido de tráfico en horario de alta circulación.",
          "Asumir que cualquier sala de reuniones sirve sin comprobar el techo, el eco y la temperatura de color de la luz.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo necesito para preparar la locación antes de grabar?",
        answer: "Depende del espacio. En una sala que ya conozco, 30 minutos son suficientes. Si es la primera vez que trabajo allí, necesito entre 45 y 60 minutos para colocar los focos, hacer pruebas de sonido y ajustar el encuadre definitivo.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar una entrevista corporativa en una cafetería o restaurante?",
        answer: "Puede funcionar si se graba antes de que abran o en un horario de muy baja ocupación. El problema habitual es el ruido de cocina, la música ambiental y el tránsito de personas. No es mi primera opción para una entrevista que tiene que durar más de cinco minutos.",
      },
      {
        type: "faq",
        question: "¿Qué tipo de fondo funciona mejor para una entrevista corporativa?",
        answer: "Prefiero fondos con algo de profundidad y textura: una estantería, una pared con buena luz, o una ventana que crea separación visual entre el entrevistado y el entorno. Los fondos completamente lisos pueden quedar bien si la iluminación es correcta, pero dejan poco margen creativo.",
      },
      {
        type: "faq",
        question: "¿Es necesario contratar un estudio para una entrevista profesional?",
        answer: "No necesariamente. La mayoría de entrevistas corporativas que produzco se graban en las instalaciones del cliente o en salas alquiladas. Un estudio tiene sentido cuando necesito control total del entorno, fondos infinitos o croma. Para una entrevista estándar de empresa, el presupuesto se aprovecha mejor en otros elementos.",
      },
      {
        type: "paragraph",
        text: "Si estás planificando una entrevista corporativa en Madrid y no tienes claro qué locación encaja mejor con tu proyecto, puedo ayudarte a evaluarlo antes de empezar. Escríbeme desde la página de contacto y lo vemos juntos.",
      },
    ],
  },
  {
    slug: "plazos-realistas-video-corporativo",
    title: "Plazos realistas para entregar un vídeo corporativo",
    description:
      "Cuánto tiempo lleva producir un vídeo corporativo: plazos reales por fase, de preproducción a entrega final. Sin sorpresas en tu planning.",
    publishedAt: "2026-06-08",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "producción audiovisual",
      "plazos de entrega",
      "preproducción",
      "postproducción",
      "planificación",
    ],
    keyword: "plazos realistas para entregar un vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Cuando un cliente me pregunta cuándo estará listo el vídeo, la respuesta honesta no es una fecha: es un proceso. Estos son los plazos reales por fase para que no haya sorpresas.",
    seoTitle: "Plazos para un vídeo corporativo | Daniel Acero",
    metaDescription:
      "Cuánto tiempo lleva producir un vídeo corporativo: plazos reales por fase, de preproducción a entrega final. Sin sorpresas en tu planning.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando un cliente me pregunta cuándo estará listo el vídeo, lo primero que pienso es en cuántas fases quedan por coordinar, no en cuántos días tengo libres. Un vídeo corporativo tiene fases de ida y vuelta: el cliente revisa, el cliente aprueba, yo edito de nuevo. Cada ronda de revisión que no está prevista en el planning alarga el proyecto sin que nadie lo haya pedido.",
      },
      {
        type: "paragraph",
        text: "Los plazos que describo aquí son los que manejo habitualmente con empresas en Madrid. No son los mínimos posibles ni los más cómodos: son los que permiten trabajar sin comprimir fases y entregar algo que dé orgullo a ambas partes.",
      },
      {
        type: "image",
        src: "/blog/plazos-realistas-video-corporativo/hero.webp",
        alt: "Claqueta de rodaje en primer plano durante la producción de un vídeo corporativo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué cuenta como plazo realista",
      },
      {
        type: "paragraph",
        text: "Un plazo realista no es el tiempo que tarda la edición. Es el tiempo total desde que confirmamos el proyecto hasta que el cliente tiene el archivo final en su poder. Eso incluye la preproducción, la grabación, la edición y las rondas de revisión. Cuando alguien me dice que necesita el vídeo en cuatro días, lo primero que evalúo es si hay tiempo suficiente para hacer bien cada una de esas fases.",
      },
      {
        type: "paragraph",
        text: "En proyectos simples, sin locaciones complicadas ni muchos participantes, un vídeo de 2-3 minutos puede estar listo en 10 días hábiles desde el arranque. En proyectos con entrevistas múltiples, viajes o dependencias de terceros, el rango habitual es de 3 a 5 semanas.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se distribuyen los plazos por fase",
      },
      {
        type: "heading",
        level: 3,
        text: "Preproducción: de 3 a 10 días hábiles",
      },
      {
        type: "paragraph",
        text: "Esta fase incluye la reunión de briefing, la definición del guion o estructura narrativa, la selección de locaciones, la coordinación de participantes y la logística de rodaje. En empresas pequeñas con buena disposición, tres días son suficientes. En organizaciones con procesos internos de aprobación, puede llegar a diez. El error más habitual es subestimarla y arrancar el rodaje sin los elementos básicos definidos.",
      },
      {
        type: "heading",
        level: 3,
        text: "Grabación: de 1 a 3 jornadas",
      },
      {
        type: "paragraph",
        text: "Una jornada de rodaje de 8 horas permite generar entre 6 y 10 minutos de vídeo editado final, dependiendo del ritmo y el número de participantes. Para vídeos de hasta 3 minutos, una jornada bien organizada suele ser suficiente. Para proyectos con varias locaciones o muchos testimoniales, necesito dos o tres jornadas. Comprimir más de lo razonable en un solo día compromete la calidad del material grabado.",
      },
      {
        type: "heading",
        level: 3,
        text: "Edición y entrega: de 5 a 15 días hábiles",
      },
      {
        type: "paragraph",
        text: "La edición de un vídeo de 2-3 minutos lleva entre 8 y 16 horas de trabajo según la complejidad del montaje, la cantidad de material grabado y el grado de acabado en colorimetría y audio. A eso hay que sumar al menos una ronda de revisión con el cliente y sus correcciones. Con dos rondas de revisión pactadas de antemano, el plazo total de postproducción suele quedar entre 8 y 12 días hábiles.",
      },
      {
        type: "image",
        src: "/blog/plazos-realistas-video-corporativo/intermedia.webp",
        alt: "Claqueta de producción audiovisual en exterior durante una jornada de rodaje",
        width: 1920,
        height: 1298,
      },
      {
        type: "heading",
        level: 2,
        text: "Factores que alargan los plazos sin que nadie lo vea venir",
      },
      {
        type: "list",
        items: [
          "Revisiones por correo sin consolidar: cuando cuatro personas del cliente mandan comentarios por separado y en momentos distintos, cada ronda se convierte en dos.",
          "Participantes que cancelan el día del rodaje: reorganizar una jornada a última hora consume tiempo de preproducción que ya no existe.",
          "Material de archivo en formatos incompatibles: si el cliente aporta vídeos en resoluciones o códecs que necesitan conversión, eso no estaba en el planning.",
          "Guion que cambia después del rodaje: reescribir la narrativa en postproducción es posible, pero multiplica las horas de edición.",
          "Aprobaciones que dependen de una sola persona ausente: un director que está de viaje puede detener el proyecto durante una semana.",
          "Música con derechos no resueltos: usar una canción sin licencia en la entrega final obliga a reemplazarla, lo que afecta al montaje y al timing.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes sobre plazos en vídeo corporativo",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda un vídeo corporativo de 1 minuto?",
        answer: "Entre 7 y 12 días hábiles desde el arranque, si el briefing está claro y los participantes están disponibles. La grabación puede hacerse en medio día, pero la edición, las revisiones y la entrega final requieren su tiempo aunque el vídeo sea corto.",
      },
      {
        type: "faq",
        question: "¿Se puede hacer un vídeo corporativo en 48 horas?",
        answer: "En casos de urgencia real, es posible tener un vídeo sencillo en 48 horas: rodaje de pocas horas, edición básica y sin rondas de revisión. Pero ese escenario implica saltarse la preproducción, lo que se nota en el resultado. No lo recomiendo como modo de trabajo habitual.",
      },
      {
        type: "faq",
        question: "¿Cuántas rondas de revisión son razonables?",
        answer: "Trabajo con dos rondas de revisión incluidas en el presupuesto. La primera sirve para ajustar estructura, ritmo y selección de planos. La segunda, para correcciones de detalle. Una tercera ronda es posible, pero implica tiempo adicional que hay que valorar.",
      },
      {
        type: "faq",
        question: "¿Qué puedo hacer para acelerar los plazos sin perder calidad?",
        answer: "Lo que más acelera un proyecto es tener el briefing cerrado antes de empezar, confirmar la disponibilidad de todos los participantes con antelación, designar una sola persona del equipo del cliente para consolidar comentarios y no cambiar el guion una vez arrancado el rodaje.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto con una fecha de entrega ajustada y quieres saber si es viable, cuéntame los detalles desde la página de contacto. Evaluamos juntos si los plazos son realistas y qué habría que ajustar para llegar.",
      },
    ],
  },
  {
    slug: "direccion-de-arte-video-corporativo",
    title: "Dirección de arte para vídeo corporativo: qué es y cómo aplicarla",
    description:
      "La dirección de arte define el aspecto visual de tu vídeo mucho antes de encender la cámara. Qué supone en un rodaje corporativo y cómo evitar los errores más frecuentes.",
    publishedAt: "2026-06-09",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "dirección de arte",
      "vídeo corporativo",
      "producción audiovisual",
      "filmmaker madrid",
      "rodaje corporativo",
    ],
    keyword: "dirección de arte para vídeo corporativo",
    intent: "informacional",
    excerpt:
      "La dirección de arte define el aspecto visual de tu vídeo mucho antes de encender la cámara. Te explico qué supone en un rodaje corporativo y por qué vale la pena planificarla.",
    seoTitle: "Dirección de arte en vídeo corporativo | Daniel Acero",
    metaDescription:
      "Dirección de arte para vídeo corporativo: qué es, cómo aplicarla en rodajes de empresa y los errores más comunes que arruinan el resultado visual.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La dirección de arte no es solo poner flores en el fondo de una entrevista. Es la decisión consciente de cada elemento visual que aparece en pantalla: el espacio, la paleta de color, el vestuario, el atrezo. En un vídeo corporativo, esas decisiones determinan si la empresa parece lo que dice ser o simplemente parece una empresa más.",
      },
      {
        type: "paragraph",
        text: "He rodado con clientes que llegaban al set con la sala preparada, el portavoz bien vestido y los detalles pensados de antemano. La diferencia en postproducción es notable. Y he rodado en situaciones en las que nadie había pensado en nada, y el resultado —incluso con buena iluminación— nunca termina de convencer.",
      },
      {
        type: "image",
        src: "/blog/direccion-de-arte-video-corporativo/hero.webp",
        alt: "Preparativos antes de una entrevista corporativa en un set de vídeo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es la dirección de arte en un vídeo corporativo",
      },
      {
        type: "paragraph",
        text: "En cine y publicidad, el director de arte gestiona todo el aspecto visual de la producción: sets, decorados, paleta cromática, vestuario, atrezo. En el vídeo corporativo, ese rol rara vez recae en una persona dedicada. Lo asume el realizador, el cliente, o nadie —y eso último se nota.",
      },
      {
        type: "paragraph",
        text: "En la práctica, dirección de arte en un vídeo de empresa significa tomar decisiones previas al rodaje: dónde grabamos, qué aparece en plano, qué colores predominan, qué viste el portavoz, qué hay —y qué no hay— sobre la mesa. No hace falta un presupuesto de producción de cine. Hace falta tiempo para pensar antes del día del rodaje.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se aplica bien",
      },
      {
        type: "heading",
        level: 3,
        text: "El espacio y la escenografía",
      },
      {
        type: "paragraph",
        text: "Elegir el espacio correcto es la primera decisión de arte. Una oficina diáfana con buena luz natural funciona; una sala de reuniones con paneles grises y fluorescentes, no. Si el espacio propio no da bien, plantearse una locación externa tiene sentido. Dentro del espacio elegido, hay que despejar: quitar cables sueltos, ordenar estanterías visibles al fondo, retirar objetos que distraen. Lo que no aporta, resta.",
      },
      {
        type: "heading",
        level: 3,
        text: "La paleta de color y el vestuario",
      },
      {
        type: "paragraph",
        text: "Los colores de lo que aparece en plano tienen que convivir. Si la empresa usa azul marino en su identidad, que el portavoz no llegue con una camisa de rayas verdes y naranjas. No hablo de uniformes: hablo de coherencia. Lo mismo aplica a las paredes de fondo, a los muebles visibles, al papel sobre la mesa. Una paleta de 2 o 3 colores que no se peleen entre sí es suficiente.",
      },
      {
        type: "heading",
        level: 3,
        text: "El atrezo y los detalles de marca",
      },
      {
        type: "paragraph",
        text: "El atrezo corporativo son los elementos que reafirman la identidad de la empresa en plano: un producto físico bien colocado, el logo en un contexto natural —no pegado con cinta adhesiva—, materiales propios del sector. Son detalles pequeños que aportan credibilidad. Un abogado grabado sin ningún libro en la estantería no convence igual que uno con su biblioteca detrás.",
      },
      {
        type: "image",
        src: "/blog/direccion-de-arte-video-corporativo/intermedia.webp",
        alt: "Equipo de iluminación preparado en un estudio para rodaje corporativo",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes",
      },
      {
        type: "list",
        items: [
          "Fondo saturado de elementos que distraen: pantallas encendidas, pizarras llenas, cajas apiladas.",
          "Vestuario que choca con el espacio: colores demasiado similares al fondo o demasiado estridentes.",
          "Iluminación fluorescente de oficina sin corregir, que aplana la imagen y da sensación de baja producción.",
          "Logos de marca forzados: el cartel con el logotipo colocado de forma artificial en primer plano.",
          "No pensar en los fondos secundarios: si hay tomas con movimiento o planos abiertos, todo el fondo entra en cuadro.",
          "Cambiar el espacio entre tomas sin reorganizarlo: el raccord de arte es tan importante como el de continuidad.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Necesito contratar a un director de arte para mi vídeo corporativo?",
        answer: "No necesariamente. Para producciones medianas o pequeñas, el realizador y el propio cliente pueden cubrirlo bien con una sesión de preparación previa. Solo en producciones con varios sets, muchos portavoces o necesidades de escenografía elaborada tiene sentido contratar a alguien específico para ese rol.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo se necesita para preparar la dirección de arte?",
        answer: "Para una entrevista corporativa estándar, entre 30 minutos y 2 horas de preparación el día anterior son suficientes: elegir y despejar el espacio, decidir el vestuario, preparar los elementos de atrezo. Para sets más complejos con varios planos y locaciones, un día completo de preparación es lo habitual.",
      },
      {
        type: "faq",
        question: "¿Qué es más importante: el espacio o la iluminación?",
        answer: "Los dos se condicionan mutuamente. Un espacio bien elegido facilita la iluminación y reduce el trabajo técnico. Una buena iluminación puede compensar algunas limitaciones del espacio, pero no puede hacer desaparecer un fondo caótico o un vestuario que chirría. Lo ideal es planificar los dos a la vez.",
      },
      {
        type: "faq",
        question: "¿Vale la pena invertir en decoración para un vídeo de empresa?",
        answer: "Depende del uso del vídeo. Para una pieza de marca o institucional de largo recorrido, sí. Para un vídeo interno de comunicación, la prioridad puede ser otra. Lo que siempre vale la pena es limpiar y organizar el espacio antes de grabar: no cuesta dinero, solo tiempo.",
      },
      {
        type: "paragraph",
        text: "La dirección de arte en vídeo corporativo no es un capricho estético. Es la diferencia entre un resultado que refuerza la imagen de la empresa y uno que simplemente documenta un rodaje. Si tienes un proyecto en mente y quieres hablarlo, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "branding-sonoro-video-empresa",
    title: "Branding sonoro en vídeo de empresa: música, voz y efectos",
    description:
      "Cómo elegir música, voz en off y efectos de sonido para que tus vídeos corporativos refuercen la identidad de marca en lugar de ignorarla.",
    publishedAt: "2026-06-10",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "branding sonoro",
      "música corporativa",
      "voz en off",
      "efectos de sonido",
      "vídeo corporativo",
      "identidad de marca",
    ],
    keyword: "branding sonoro vídeo de empresa",
    intent: "informacional",
    excerpt:
      "El sonido define si tu vídeo corporativo parece profesional o genérico. Aquí cuento cómo trabajo la música, la voz en off y los efectos para que refuercen la marca sin distraer.",
    seoTitle: "Branding sonoro en vídeo de empresa | Daniel Acero",
    metaDescription:
      "Branding sonoro para vídeo corporativo: cómo elegir música, voz en off y efectos que refuercen tu marca. Guía práctica con criterios reales.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Muchas empresas invierten en imagen, en locación, en iluminación. Y luego ponen una música de stock que descargaron en cinco minutos. El resultado se nota: el vídeo parece profesional visualmente, pero suena a algo genérico.",
      },
      {
        type: "paragraph",
        text: "El branding sonoro es el conjunto de decisiones sobre música, voz y efectos que hacen que un vídeo refuerce la identidad de la marca en lugar de ignorarla. No es un elemento secundario. En muchos vídeos, el sonido es lo que le da el tono a todo lo demás.",
      },
      {
        type: "image",
        src: "/blog/branding-sonoro-video-empresa/hero.webp",
        alt: "Estudio de grabación con guitarra acústica y equipamiento analógico para producción sonora corporativa",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es el branding sonoro y por qué importa",
      },
      {
        type: "paragraph",
        text: "Una marca tiene colores, tipografía, tono de comunicación. El sonido es otra capa de esa identidad. Cuando una empresa usa siempre el mismo tipo de música en sus vídeos, el espectador empieza a asociar ese sonido con la marca, aunque no lo note de forma consciente. Es el mismo principio que hace que reconozcas una marca antes de ver el logo.",
      },
      {
        type: "paragraph",
        text: "En vídeo corporativo el riesgo está en los dos extremos: música demasiado genérica que no dice nada, o música demasiado caracterizada que distrae del mensaje. El objetivo es encontrar algo que funcione como contexto, que soporte el contenido sin competir con él.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se trabaja bien el sonido de marca",
      },
      {
        type: "heading",
        level: 3,
        text: "La música de fondo no es decoración",
      },
      {
        type: "paragraph",
        text: "El primer paso es decidir qué emoción quieres activar, no qué música te gusta. Para una entrevista de testimonios de clientes, suele funcionar algo cálido, acústico, sin mucha percusión. Para un vídeo de presentación de producto tecnológico, algo más sintético. La temperatura emocional de la música tiene que ser coherente con el contenido que está sobre ella. Uso habitualmente Artlist y Musicbed para buscar temas, y siempre ajusto el volumen para que quede entre -18 dB y -25 dB según la presencia de voz.",
      },
      {
        type: "heading",
        level: 3,
        text: "La voz en off: tono, locutor y dirección",
      },
      {
        type: "paragraph",
        text: "Si el vídeo lleva locución, la elección del locutor es crítica. La voz tiene que sonar como la empresa: no más formal ni más informal. Para marcas con tono cercano y directo, uso locutores con registro conversacional, no de televisión. Para institucionales o financieras, algo más neutro y pausado. La dirección de la voz en off ocurre en la grabación: si el locutor va demasiado enérgico o demasiado plano, hay que corregirlo en ese momento. Después de la edición, arreglarlo cuesta mucho más.",
      },
      {
        type: "heading",
        level: 3,
        text: "Efectos de sonido y atmósfera",
      },
      {
        type: "paragraph",
        text: "Los efectos de sonido son el elemento más fácil de ignorar y el que más se nota en su ausencia. En un vídeo de evento, los sonidos ambiente del espacio —conversaciones suaves, pasos, aplausos— sitúan al espectador. En una entrevista limpia no hay que añadir nada artificial, pero sí asegurarse de que el silencio entre respuestas no sea abrupto. El fade suave de ambiente es casi siempre la solución. Lo trabajo en DaVinci Resolve Fairlight, que tiene un editor de audio suficientemente potente para este tipo de mezcla.",
      },
      {
        type: "image",
        src: "/blog/branding-sonoro-video-empresa/mid.webp",
        alt: "Auriculares de estudio para mezcla de audio en postproducción de vídeo corporativo",
        width: 1920,
        height: 1281,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes en el sonido de los vídeos corporativos",
      },
      {
        type: "list",
        items: [
          "Música demasiado alta que compite con la voz en off",
          "Cortes de música abruptos sin fade de salida",
          "Usar la misma canción en todos los vídeos sin criterio de coherencia de marca",
          "Voz en off grabada en un espacio con eco o reverb excesivo",
          "Efectos de sonido de stock que suenan artificiales y fuera de contexto",
          "No escuchar el vídeo con auriculares antes de entregar: los problemas de audio se notan mucho más",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Necesito contratar a un ingeniero de sonido para un vídeo corporativo?",
        answer: "Depende del tipo de proyecto. Para entrevistas corporativas estándar, un buen micrófono de solapa y la mezcla en postproducción son suficientes. Para eventos en directo con varios micros abiertos, presentadores y música en sala, sí tiene sentido contratar a alguien que gestione el sonido durante el rodaje. El coste es bajo comparado con el tiempo que ahorra en edición.",
      },
      {
        type: "faq",
        question: "¿Qué licencia de música necesito para un vídeo corporativo?",
        answer: "Si el vídeo va a publicarse en redes sociales o en la web de la empresa, necesitas una licencia comercial. Plataformas de suscripción como Artlist o Musicbed incluyen licencias para uso comercial sin límite de vistas. Con YouTube Audio Library o Pixabay, la licencia es gratuita pero tienes menos control sobre la calidad y la exclusividad.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo lleva la mezcla de audio de un vídeo de 2 minutos?",
        answer: "Para una entrevista con voz limpia y música de fondo, entre 30 minutos y 1 hora. Para un vídeo de evento con varios micros, pistas de ambiente y música sincronizada, puede ser entre 2 y 4 horas. El audio mal grabado multiplica ese tiempo, que es la principal razón para no descuidar el sonido en el rodaje.",
      },
      {
        type: "faq",
        question: "¿Vale la pena añadir una identidad sonora a los vídeos de empresa?",
        answer: "Para empresas que publican vídeo con cierta regularidad, sí. Una identidad sonora corta —entre 2 y 5 segundos— al principio o al final del vídeo crea reconocimiento de marca sin coste adicional en cada nueva producción. Para una empresa que produce un vídeo al año, el retorno es más limitado.",
      },
      {
        type: "paragraph",
        text: "El sonido no se ve, pero se siente. Un vídeo bien sonorizado hace que el espectador se quede más tiempo y que la marca quede mejor posicionada. Si tienes un proyecto y quieres hablar sobre cómo trabajar el audio, puedo ayudarte desde la página de contacto.",
      },
    ],
  },
  {
    slug: "por-que-tu-video-corporativo-no-convierte",
    title: "Por qué tu vídeo corporativo no convierte (y cómo arreglarlo)",
    description: "Errores comunes que hacen que un vídeo corporativo no genere leads ni ventas, y qué cambiar para que funcione.",
    publishedAt: "2026-06-11",
    readingTime: "4 min",
    category: "Guía",
    tags: ["vídeo corporativo", "conversión", "producción de vídeo", "marketing de vídeo", "errores de vídeo"],
    keyword: "por qué tu vídeo corporativo no convierte",
    intent: "informacional",
    excerpt: "Un vídeo corporativo que no convierte suele tener el mismo problema de fondo: se hizo para gustar, no para persuadir. Aquí están los errores más frecuentes.",
    seoTitle: "Por qué tu vídeo corporativo no convierte | Daniel Acero",
    metaDescription: "Errores comunes que hacen que un vídeo corporativo no genere leads ni ventas, y qué cambiar para que funcione.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Un vídeo corporativo puede tener buena fotografía, buena música y un montaje limpio, y aun así no convertir. Lo veo cada semana. Las empresas invierten en producción y luego no entienden por qué el vídeo no genera leads ni llamadas.",
      },
      {
        type: "paragraph",
        text: "El problema casi siempre tiene una raíz común: el vídeo se diseñó para impresionar al equipo directivo, no para mover a quien lo ve a hacer algo. Eso tiene solución, pero hay que diagnosticarlo primero.",
      },
      {
        type: "image",
        src: "/blog/por-que-tu-video-corporativo-no-convierte/hero.webp",
        alt: "Equipo de cámara Sony FS7 preparado para rodaje de producción audiovisual corporativa",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un vídeo que no convierte y por qué ocurre",
      },
      {
        type: "paragraph",
        text: "Convertir significa conseguir que alguien dé un paso después de ver el vídeo: pida presupuesto, reserve una reunión, descargue algo. Si el vídeo recibe visualizaciones pero nadie actúa, no está funcionando como herramienta de negocio.",
      },
      {
        type: "paragraph",
        text: "Las causas más habituales no son técnicas. La imagen puede ser impecable y el montaje fluido. El fallo está en la arquitectura del mensaje: qué dice el vídeo, en qué orden lo dice y a quién se lo dice.",
      },
      {
        type: "paragraph",
        text: "Un vídeo que intenta hablar a todo el mundo acaba sin hablar a nadie. Eso, más la ausencia de un CTA claro y una duración que supera lo que el espectador está dispuesto a aguantar, explica la mayoría de los casos.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo corregir los fallos más frecuentes",
      },
      {
        type: "heading",
        level: 3,
        text: "Define a quién le hablas antes de escribir una sola línea",
      },
      {
        type: "paragraph",
        text: "El briefing más habitual que recibo dice: quieren un vídeo para que todos sepan quiénes son. Eso es un póster, no un vídeo de conversión. Un vídeo que convierte tiene un destinatario específico: el director de compras de una empresa mediana que nunca ha trabajado con producción audiovisual, por ejemplo. Con ese perfil en mente, el guion cambia completamente: los argumentos que le importan, las dudas que tiene, el lenguaje que usa.",
      },
      {
        type: "heading",
        level: 3,
        text: "Construye el mensaje alrededor de un problema real",
      },
      {
        type: "paragraph",
        text: "La mayoría de los vídeos corporativos empiezan con la historia de la empresa o sus valores. Nadie que no trabaje ahí quiere escuchar eso en los primeros 10 segundos. Empezar por el problema del espectador, no por la historia de la empresa, es el cambio con mayor impacto. Un vídeo de 90 segundos que conecta con un dolor real convierte mucho más que uno de 4 minutos de presentación impecable.",
      },
      {
        type: "heading",
        level: 3,
        text: "El CTA tiene que ser uno solo y aparecer en el propio vídeo",
      },
      {
        type: "paragraph",
        text: "Listar cinco formas de contacto al final no es un CTA, es ruido. El espectador no va a hacer ninguna de esas cosas. Un CTA eficaz es uno: reserva 20 minutos con nosotros, con un enlace directo. Eso tiene que aparecer en el propio vídeo, no solo en el texto que lo acompaña. Si el vídeo acaba con el logo en fade out y música, estás dejando dinero sobre la mesa.",
      },
      {
        type: "image",
        src: "/blog/por-que-tu-video-corporativo-no-convierte/intermedia.webp",
        alt: "Profesional presentando en sala de reuniones con ordenadores portátiles",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes que bloquean la conversión",
      },
      {
        type: "list",
        items: [
          "Duración superior a 2 minutos sin una estructura narrativa que lo justifique.",
          "Testimonios genéricos sin datos concretos ni contexto verificable.",
          "Música tan protagonista que tapa la voz del entrevistado.",
          "Abrir con los valores de la empresa antes de establecer ningún problema del espectador.",
          "No poner subtítulos en un vídeo destinado a LinkedIn o Instagram, donde la mayoría se ve sin sonido.",
          "Usar imágenes de stock reconocibles que rompen la credibilidad visual en los primeros segundos.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo debería durar un vídeo corporativo para que convierta?",
        answer: "Depende del canal y del objetivo. Para redes sociales, entre 60 y 90 segundos. Para una landing de captación, hasta 2-3 minutos si el guion está construido en torno a un problema y una solución concretos. Por encima de eso, necesitas que el espectador tenga ya un interés previo muy definido.",
      },
      {
        type: "faq",
        question: "¿Puede hablar alguien de la empresa en lugar de un actor?",
        answer: "Puede hablar alguien de la empresa, y muchas veces es mejor. La autenticidad pesa más que la perfección técnica. Lo importante es preparar bien a la persona: qué va a decir, en qué orden y qué no va a decir. Sin preparación, cualquiera resulta torpe delante de una cámara.",
      },
      {
        type: "faq",
        question: "¿Dónde debe aparecer el CTA dentro del vídeo?",
        answer: "Al final, cuando el espectador ya tiene el contexto suficiente para decidir. Ponerlo al principio confunde; ponerlo a mitad interrumpe. Los últimos 10-15 segundos, con la pantalla lo más limpia posible y un solo mensaje, es donde funciona mejor.",
      },
      {
        type: "faq",
        question: "¿Puede un buen vídeo compensar una landing page mal diseñada?",
        answer: "No. El vídeo y la página donde vive trabajan juntos. Un vídeo excelente en una landing sin botón claro o con demasiado texto alrededor pierde efectividad. Si haces el vídeo bien, vale la pena también revisar dónde vive ese vídeo.",
      },
      {
        type: "paragraph",
        text: "Si quieres revisar por qué tu vídeo actual no está convirtiendo o hablar de uno nuevo desde el principio, puedes ponerte en contacto a través de la página de contacto.",
      },
    ],
  },
  {
    slug: "video-testimonial-vs-caso-de-estudio",
    title: "Vídeo testimonial vs vídeo caso de estudio: cuándo usar cada uno",
    description:
      "Diferencias reales entre el vídeo testimonial y el caso de estudio en vídeo: estructura, duración, coste y en qué momento del funnel encaja cada formato.",
    publishedAt: "2026-06-12",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo testimonial",
      "caso de estudio en vídeo",
      "vídeo corporativo",
      "marketing de contenidos",
      "producción audiovisual madrid",
    ],
    keyword: "vídeo testimonial vs caso de estudio",
    intent: "informacional",
    excerpt:
      "Un testimonial y un caso de estudio no son lo mismo. La diferencia está en quién habla, qué dice y en qué momento del ciclo de venta tiene sentido cada formato.",
    seoTitle: "Testimonial vs caso de estudio en vídeo | Daniel Acero",
    metaDescription:
      "Diferencias entre vídeo testimonial y caso de estudio: qué formato convierte mejor según tu objetivo, sector y momento del ciclo de venta.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando una empresa quiere demostrar que funciona, casi siempre piensa en filmar a un cliente satisfecho. Eso es razonable. El problema está en que no es lo mismo grabar un testimonial que producir un caso de estudio, aunque en los dos aparezca un cliente diciendo cosas buenas.",
      },
      {
        type: "paragraph",
        text: "La diferencia no es estética. Es de estructura, de duración, de lo que se le pide al cliente y de en qué momento del proceso de compra te ven las personas que van a ver el vídeo.",
      },
      {
        type: "image",
        src: "/blog/video-testimonial-vs-caso-de-estudio/hero.webp",
        alt: "Cámara Sony FS7 preparada para una entrevista corporativa en plató profesional",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué son y en qué se diferencian",
      },
      {
        type: "paragraph",
        text: "Un vídeo testimonial es una declaración. Alguien de la empresa cliente —directivo, responsable de proyecto, usuario final— habla a cámara sobre su experiencia. Sin narrador, sin datos detallados, sin reconstrucción del proceso. Solo la voz de alguien que conoce el producto o servicio y lo recomienda. Duración habitual: 60 a 90 segundos.",
      },
      {
        type: "paragraph",
        text: "Un caso de estudio en vídeo es una historia con estructura. Tiene un antes: el problema que tenía la empresa. Tiene un durante: qué se hizo y cómo. Tiene un después: qué resultados se obtuvieron y por qué importan. Aquí sí aparecen datos, métricas, contexto. La duración puede llegar a tres o cuatro minutos sin perder al espectador, porque cada parte de la historia tiene un por qué.",
      },
      {
        type: "paragraph",
        text: "El testimonial convence desde la emoción. El caso de estudio convence desde la evidencia. Los dos son útiles. El error es usar uno cuando la situación pedía el otro.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se hace bien cada uno",
      },
      {
        type: "heading",
        level: 3,
        text: "Estructura de un testimonial eficaz",
      },
      {
        type: "paragraph",
        text: "Tres bloques, sin más. Primero, quién es el cliente y cuál era su situación antes. Segundo, qué valoró más del trabajo conjunto: la comunicación, el resultado, algo concreto. Tercero, a quién se lo recomendaría. No guiones memorizados: son preguntas abiertas que hago fuera de cámara y el cliente responde mirando al objetivo. Lo que queda es auténtico y fluye sin parecer publicitario.",
      },
      {
        type: "heading",
        level: 3,
        text: "Estructura de un caso de estudio bien grabado",
      },
      {
        type: "paragraph",
        text: "El caso de estudio necesita preparación previa: saber exactamente qué se va a contar antes de entrar a grabar. Trabajo con un documento de una página que el cliente rellena con los datos clave —el problema inicial, el plazo, las métricas antes y después— para que durante el rodaje no tengamos que improvisar. En cámara, el responsable del proyecto cuenta la historia. Si hay planos del proceso o del entorno, se intercalan como B-roll. Al final, un titular con el resultado principal.",
      },
      {
        type: "heading",
        level: 3,
        text: "Cuánto tiempo necesita cada formato",
      },
      {
        type: "paragraph",
        text: "Un testimonial bien ejecutado se graba en una hora: preparación, rodaje y margen para repeticiones. La edición añade otra hora o dos. Un caso de estudio necesita más: media jornada de rodaje, el documento preparatorio, edición de cuatro a seis horas y una ronda de revisión. La diferencia de coste y tiempo es real, y conviene tenerla en cuenta cuando se planifica qué se va a producir.",
      },
      {
        type: "image",
        src: "/blog/video-testimonial-vs-caso-de-estudio/intermedia.webp",
        alt: "Presentador mostrando resultados ante equipo empresarial en sala de reuniones",
        width: 1200,
        height: 800,
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo tiene sentido cada formato",
      },
      {
        type: "list",
        items: [
          "Testimonial al principio del funnel: cuando el espectador aún no te conoce y necesita una razón emocional para seguir mirando.",
          "Caso de estudio al final del funnel: cuando el prospecto ya sabe quién eres pero necesita prueba de que funciona en situaciones parecidas a la suya.",
          "Testimonial en redes: corto, sin contexto previo, fácil de compartir. Funciona como primera impresión.",
          "Caso de estudio en landing de venta o propuesta: donde el prospecto ya tiene interés y busca validación antes de decidir.",
          "Si el cliente no puede compartir datos por confidencialidad: testimonial, que no requiere números.",
          "Si el resultado es medible y el cliente acepta publicar las cifras: caso de estudio, porque los datos concretos son lo que diferencia.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Puede un mismo cliente aparecer en los dos formatos?",
        answer: "Puede, y a veces tiene sentido hacerlo en momentos distintos. El testimonial se graba al terminar el proyecto, cuando la experiencia todavía está fresca. El caso de estudio se produce unos meses después, cuando ya hay resultados medibles. Son piezas complementarias, no redundantes.",
      },
      {
        type: "faq",
        question: "¿Qué hago si el cliente no quiere salir en cámara?",
        answer: "En ese caso el caso de estudio funciona igualmente: se narra con voz en off o con texto en pantalla, y se complementa con planos del entorno, el proceso o el producto. El testimonial sin cámara pierde fuerza porque su valor principal es la credibilidad de quien habla.",
      },
      {
        type: "faq",
        question: "¿Cuántos testimoniales necesita una empresa?",
        answer: "Depende del número de perfiles de cliente distintos que atiendes. Si trabajas con pymes de tecnología, con grandes empresas de retail y con startups, cada segmento necesita ver a alguien parecido a él en el vídeo. Un solo testimonial sirve para uno de esos perfiles.",
      },
      {
        type: "faq",
        question: "¿Es mejor el testimonial en vídeo o en texto?",
        answer: "El vídeo convierte mejor cuando el objetivo es generar confianza rápida. El texto tiene la ventaja de que los buscadores lo indexan directamente. Los dos tienen su lugar; si solo puedes elegir uno y estás pensando en el ciclo de venta, el vídeo tiene más peso en los momentos de decisión.",
      },
      {
        type: "paragraph",
        text: "Si tienes dudas sobre qué formato encaja mejor en tu caso, o si quieres empezar a producir uno de los dos, puedes escribirme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "broll-video-corporativo",
    title: "B-roll para vídeo corporativo: qué planos siempre funcionan",
    description:
      "Guía práctica sobre el b-roll en vídeo corporativo: qué planos de recurso grabar, cómo organizarlos y cuánto necesitas para que el montaje quede profesional.",
    publishedAt: "2026-06-15",
    readingTime: "5 min",
    category: "Guía",
    tags: ["b-roll", "vídeo corporativo", "filmmaker", "rodaje", "planos de recurso"],
    keyword: "b-roll para vídeo corporativo",
    intent: "informacional",
    excerpt:
      "El b-roll es lo que separa un vídeo corporativo que se ve profesional de uno que parece una videoconferencia grabada. Aquí explico qué planos grabo siempre y por qué.",
    seoTitle: "B-roll para vídeo corporativo: planos que siempre funcionan | Daniel Acero",
    metaDescription:
      "B-roll para vídeo corporativo: los planos de recurso que nunca fallan. Qué grabar, cómo organizarlo y cuánto necesitas para que el montaje fluya.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando llego a una empresa a grabar una entrevista, sé que voy a necesitar el doble de tiempo de lo que el cliente imagina. No por las entrevistas en sí — esas suelen durar 30 o 40 minutos. El tiempo extra es para el b-roll. Y ese tiempo extra es el que decide si el vídeo final parece profesional o parece amateur.",
      },
      {
        type: "paragraph",
        text: "El b-roll son los planos de recurso que van encima de la narración o entre los cortes de entrevista. Las manos que escriben, la sala de reuniones antes de que entre nadie, el producto en primer plano, la pantalla con el dashboard. Sin él, el montaje es un muro de cabezas parlantes. Con él, el vídeo respira.",
      },
      {
        type: "image",
        src: "/blog/broll-video-corporativo/hero.webp",
        alt: "Operador de cámara grabando b-roll en estudio corporativo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es el b-roll y por qué no es decorativo",
      },
      {
        type: "paragraph",
        text: "Hay una idea extendida de que el b-roll es «relleno»: imágenes bonitas para que no sea tan aburrido ver a alguien hablando. Es un error de concepto que tiene consecuencias en cómo se planifica el rodaje. El b-roll no rellena — estructura. Permite cortar sin que se note, introduce temas antes de que el entrevistado los mencione y da al espectador algo concreto donde fijarse mientras procesa información abstracta.",
      },
      {
        type: "paragraph",
        text: "En un vídeo corporativo de tres minutos trabajo con entre 20 y 30 planos de recurso. De esos, en el montaje final probablemente entren 12 o 15. Eso no es desperdicio — es margen. El montaje siempre necesita opciones, y el b-roll que no cabe en la versión principal suele aparecer en el recut para redes.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se trabaja bien el b-roll",
      },
      {
        type: "heading",
        level: 3,
        text: "Planos de contexto y ambiente",
      },
      {
        type: "paragraph",
        text: "Los primeros planos que grabo al llegar son los que ubican al espectador: la entrada de la oficina, el cartel con el logo, la recepción, la sala de reuniones vacía. Suelen durar en montaje entre 2 y 4 segundos cada uno. No tienen que ser espectaculares — tienen que ser limpios, bien encuadrados y técnicamente correctos. Un plano torcido o con una cámara visible en segundo término arruina la composición. Dedico los primeros 20 minutos del rodaje solo a esto, antes de que haya movimiento.",
      },
      {
        type: "heading",
        level: 3,
        text: "Planos de detalle y manos",
      },
      {
        type: "paragraph",
        text: "Los planos de detalle son los que más trabajo llevan y los que más impacto tienen en montaje. Manos sobre el teclado, la taza de café en la mesa de reuniones, el bolígrafo subrayando un documento, pantallas de ordenador desde el lado — nunca de frente porque los píxeles parpadean con la cámara. Uso una focal larga, f/2.8 o f/4, para aislar el elemento del fondo. Estos planos duran 1 o 2 segundos en montaje pero tardas 5 minutos en montarlos bien porque hay que ajustar la exposición en cada uno.",
      },
      {
        type: "heading",
        level: 3,
        text: "Planos de acción (el trabajo real)",
      },
      {
        type: "paragraph",
        text: "El tercer tipo es el más valioso: gente trabajando de verdad, no posando. Alguien revisando un correo, participando en una reunión breve, hablando con un compañero. Les pido que hagan lo que harían normalmente y yo me muevo alrededor con el gimbal o el trípode. No dirijo — observo. Estos planos tienen una autenticidad que los planos posados no tienen, y el espectador lo nota aunque no sepa exactamente qué lo hace diferente.",
      },
      {
        type: "image",
        src: "/blog/broll-video-corporativo/mid.webp",
        alt: "Cámara en trípode lista para grabar b-roll en interior de oficina",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Cuánto b-roll es suficiente",
      },
      {
        type: "paragraph",
        text: "Hay una regla práctica que uso: por cada minuto de vídeo final necesito entre 8 y 12 planos de recurso utilizables. «Utilizables» significa bien expuestos, sin movimientos de cámara bruscos no intencionales y con al menos 5 segundos de duración bruta para que el editor tenga margen en el corte.",
      },
      {
        type: "list",
        items: [
          "Para un vídeo de 2 minutos: entre 20 y 25 planos brutos de b-roll",
          "Para un vídeo de 4-5 minutos: entre 40 y 50 planos",
          "Tiempo de rodaje de b-roll en una empresa: 1,5 a 2 horas en una localización media",
          "Ratio habitual: 3 planos grabados por cada 1 que entra en montaje",
          "Si el vídeo tiene varios departamentos o localizaciones, multiplica por el número de espacios distintos",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Se puede grabar el b-roll sin que los empleados se pongan nerviosos?",
        answer: "Sí, con una explicación previa de 2 minutos basta. Les digo que voy a pasar por la oficina durante un rato grabando el ambiente y que no necesitan actuar ni posar. La mayoría se olvida de la cámara en 10 minutos. Los que se quedan más tensos los evito — el b-roll forzado se nota.",
      },
      {
        type: "faq",
        question: "¿Necesito un gimbal para el b-roll corporativo?",
        answer: "Depende del estilo del vídeo. Para un corporativo estándar prefiero el trípode en los planos de detalle y el gimbal solo para los planos de movimiento: pasillos, salidas de reuniones, recorridos por la oficina. Si el cliente quiere un look más documental, el gimbal con movimiento lento funciona bien. No es imprescindible.",
      },
      {
        type: "faq",
        question: "¿Qué focal uso para b-roll corporativo?",
        answer: "Trabajo principalmente con 35mm y 85mm. El 35mm da contexto y encuadres amplios. El 85mm aísla detalles y aplana el fondo. Para planos de ambiente a veces uso el 24mm, pero con cuidado porque distorsiona y no siempre queda bien en espacios con líneas arquitectónicas limpias.",
      },
      {
        type: "faq",
        question: "¿El b-roll se graba antes o después de la entrevista?",
        answer: "Lo ideal es antes. Llego con 30-40 minutos de margen antes de la entrevista y recorro los espacios. Cuando el entrevistado está delante de la cámara ya tengo cubierta la parte técnica de b-roll y me centro solo en la captura de la conversación. Si hay algo que no he podido grabar antes — una reunión en directo, por ejemplo — lo grabo al terminar.",
      },
      {
        type: "paragraph",
        text: "El b-roll no es lo que más se nota cuando está bien. Es lo que más se nota cuando falta. Si estás pensando en grabar el vídeo de tu empresa y quieres que el resultado tenga esa solidez que distingue un vídeo profesional, puedes hablar conmigo desde la página de contacto.",
      },
    ],
  },
  {
    slug: "video-manifiesto-de-marca",
    title: "Vídeo manifiesto de marca: estructura y ejemplos",
    description:
      "Qué es un vídeo manifiesto de marca, cómo se estructura, cuánto dura y qué errores evitar. Guía práctica de un filmmaker en Madrid.",
    publishedAt: "2026-06-16",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "branding",
      "producción audiovisual",
      "comunicación empresarial",
      "guion",
    ],
    keyword: "vídeo manifiesto de marca",
    intent: "informacional",
    excerpt:
      "El vídeo manifiesto de marca no es un anuncio ni un corporativo al uso. Es la pieza que responde a la pregunta fundamental: por qué existe tu empresa.",
    seoTitle: "Vídeo manifiesto de marca: cómo se estructura | Daniel Acero",
    metaDescription:
      "Qué es un vídeo manifiesto de marca, cómo se estructura, cuánto dura y errores frecuentes al producirlo. Guía práctica de un filmmaker en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Hay una diferencia clara entre un vídeo corporativo estándar y un vídeo manifiesto de marca. El primero cuenta qué hace tu empresa. El segundo explica por qué existe.",
      },
      {
        type: "paragraph",
        text: "Trabajo con empresas que quieren hacer una de estas piezas y lo primero que les pregunto es: ¿tenéis una respuesta clara al 'por qué'? Si la respuesta es 'somos líderes del sector' o 'llevamos 20 años en el mercado', el manifiesto no está listo. Eso no es un 'por qué', es un historial.",
      },
      {
        type: "image",
        src: "/blog/video-manifiesto-de-marca/hero.webp",
        alt: "Equipo de producción colaborando en un estudio para la grabación de un vídeo de marca con equipo profesional",
        width: 1880,
        height: 1253,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un vídeo manifiesto de marca",
      },
      {
        type: "paragraph",
        text: "Un manifiesto de marca en vídeo es una pieza audiovisual corta —entre 60 y 120 segundos suele ser lo óptimo— que articula la razón de ser de una empresa. No habla de productos, no lista servicios, no explica tarifas. Habla de valores, de visión, del problema que quieren resolver y de por qué les importa.",
      },
      {
        type: "paragraph",
        text: "Es la pieza que se usa en la homepage, en presentaciones a inversores, en la bienvenida a nuevos empleados y en campañas de branding. No cierra ventas directamente; construye la relación emocional que facilita que las ventas ocurran después.",
      },
      {
        type: "paragraph",
        text: "La confusión más frecuente es tratar el manifiesto como un vídeo institucional glorificado. El vídeo institucional describe. El manifiesto argumenta. Y esa diferencia cambia completamente cómo se escribe el guion, cómo se filma y cómo se edita.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se estructura bien un manifiesto de marca",
      },
      {
        type: "heading",
        level: 3,
        text: "La pregunta central",
      },
      {
        type: "paragraph",
        text: "Antes de escribir una línea de guion, hay que tener clara la pregunta que el manifiesto responde. Suele ser alguna variante de estas tres: ¿por qué existe esta empresa? ¿Qué cambio quiere ver en su sector? ¿Qué tiene en común con las personas a las que sirve? Si no hay una respuesta sólida, el manifiesto se convierte en una lista de adjetivos bonitos sobre fondo negro. He visto muchos.",
      },
      {
        type: "heading",
        level: 3,
        text: "El tono y la voz",
      },
      {
        type: "paragraph",
        text: "El tono del manifiesto es el punto donde veo más errores. Las marcas tienden a elevar el registro artificialmente: frases largas, metáforas vagas, voz en off solemne. El resultado suena a cualquier marca del sector, no a esa marca en concreto. Lo que funciona es lo contrario: el tono más específico y más propio que la marca pueda sostener de forma creíble.",
      },
      {
        type: "heading",
        level: 3,
        text: "La duración y el ritmo",
      },
      {
        type: "paragraph",
        text: "Un manifiesto de 90 segundos bien editado supera casi siempre a uno de 3 minutos que intenta decir demasiado. La estructura que suele funcionar: 10-15 segundos de apertura con la tensión o el problema, 40-50 segundos de argumento central con el 'por qué', y 20-30 segundos de resolución. Sin títulos de crédito interminables. Sin música que dure 20 segundos sola al principio.",
      },
      {
        type: "image",
        src: "/blog/video-manifiesto-de-marca/mid.webp",
        alt: "Claqueta de producción y portátil en un rodaje profesional de vídeo de marca",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes al hacer un vídeo manifiesto de marca",
      },
      {
        type: "list",
        items: [
          "Confundir el manifiesto con un anuncio: el manifiesto no pide comprar nada, pide creer en algo.",
          "Escribir el guion por comité: cuando lo revisan cinco personas, el resultado es tan consensuado que no suena a nadie.",
          "Usar stock footage para abaratar la producción: imágenes genéricas de internet no transmiten los valores de una marca concreta.",
          "Elegir una voz en off que no encaja con el tono de la marca: si la voz disuena, la pieza no funciona aunque el guion sea bueno.",
          "Filmar sin plan de distribución: un manifiesto pensado para la homepage tiene dimensiones y duración distintas al que va a LinkedIn o al que se proyecta en eventos.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto dura un vídeo manifiesto de marca ideal?",
        answer: "Entre 60 y 120 segundos. Por debajo de 60 segundos es difícil desarrollar el argumento con solidez. Por encima de 2 minutos se pierde atención si no hay una narrativa muy sólida. Las excepciones existen, pero son excepciones.",
      },
      {
        type: "faq",
        question: "¿El manifiesto necesita locución o puede funcionar solo con imágenes y música?",
        answer: "Puede funcionar con subtítulos en lugar de locución, pero suele perder fuerza. La voz transmite matices que el texto en pantalla no puede. Si la marca tiene una voz interna —un CEO que habla bien y encarna los valores— a veces la mejor opción es prescindir de la voz en off y poner a esa persona hablando directamente a cámara.",
      },
      {
        type: "faq",
        question: "¿Se puede usar en redes sociales o es solo para web?",
        answer: "Se puede usar en redes, pero hay que adaptar el formato. Un manifiesto en 16:9 funciona en YouTube y en la homepage. Para LinkedIn e Instagram Reels conviene editar una versión vertical o cuadrada con subtítulos. Son dos montajes diferentes, pero comparten el mismo material de rodaje.",
      },
      {
        type: "faq",
        question: "¿Cuánto cuesta producir un vídeo manifiesto de marca?",
        answer: "Depende de la complejidad del rodaje. Una pieza con un día de rodaje, locaciones internas y postproducción completa puede estar entre 3.000 y 6.000 euros. Si se necesitan locaciones externas, actores o animación, el coste sube. Para una empresa mediana o una startup, ese rango es lo habitual para una pieza bien hecha.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en hacer el manifiesto de tu marca y tienes claro tu 'por qué', lo que sigue es traducirlo a algo que se pueda ver y escuchar. Desde la página de contacto puedes contarme en qué punto estás y cuándo querrías tenerlo listo.",
      },
    ],
  },
  {
    slug: "como-medir-roi-video-corporativo",
    title: "Cómo medir el ROI de un vídeo corporativo (sin hacer trampa)",
    description:
      "Medir el retorno de un vídeo corporativo no es tan sencillo como contar visualizaciones. Objetivos, KPIs reales y errores que distorsionan la lectura.",
    publishedAt: "2026-06-17",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "ROI vídeo corporativo",
      "métricas de vídeo",
      "marketing audiovisual",
      "retorno inversión vídeo",
      "video marketing empresas",
    ],
    keyword: "cómo medir el ROI de un vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Medir el retorno de un vídeo corporativo no es tan sencillo como contar visualizaciones. Te explico cómo hacerlo con métricas que de verdad importan.",
    seoTitle: "ROI del vídeo corporativo: cómo medirlo | Daniel Acero",
    metaDescription:
      "Cómo medir el ROI de un vídeo corporativo sin métricas de vanidad: objetivos, KPIs reales y errores que distorsionan el resultado.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Antes de cerrar cualquier proyecto de vídeo corporativo, llega la pregunta: ¿ha valido la pena? La respuesta honesta es que depende de qué mides y de cuándo empezaste a hacerlo.",
      },
      {
        type: "paragraph",
        text: "He trabajado con empresas que tratan un vídeo como un éxito porque llegó a 50.000 visualizaciones. Y con otras que tienen una pieza institucional vista por 400 personas pero que cerró tres contratos en seis meses. Aquí explico cómo separo una cosa de la otra.",
      },
      {
        type: "image",
        src: "/blog/como-medir-roi-video-corporativo/hero.webp",
        alt: "Mano señalando gráficos de resultados y métricas de negocio sobre una mesa de trabajo",
        width: 1880,
        height: 1245,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué significa ROI en el contexto del vídeo corporativo",
      },
      {
        type: "paragraph",
        text: "El ROI de un vídeo no es cuántas veces se ve. Es la relación entre lo que costó producirlo y el valor que genera: leads captados, contratos firmados, tiempo de equipo ahorrado en presentaciones comerciales, posicionamiento de marca sostenido en el tiempo. Todo eso cuenta.",
      },
      {
        type: "paragraph",
        text: "El problema es que algunos de esos valores son fáciles de medir y otros no. Eso no significa que no existan. Significa que necesitas definir qué esperas del vídeo antes de grabarlo, no después.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo medirlo bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Define el objetivo antes de grabar",
      },
      {
        type: "paragraph",
        text: "El objetivo del vídeo determina qué métrica importa. Un vídeo institucional para la homepage no se mide igual que un vídeo de captación para LinkedIn. Un vídeo de onboarding interno no se mide como un spot de producto. Antes de grabar, define una sola cosa: qué comportamiento concreto quieres que provoque esta pieza.",
      },
      {
        type: "heading",
        level: 3,
        text: "Métricas cuantitativas: las que se pueden trackear",
      },
      {
        type: "paragraph",
        text: "Las que me resultan más útiles en proyectos de cliente: tasa de conversión en la página donde vive el vídeo (antes y después de publicarlo), tiempo de permanencia en esa página, número de solicitudes de contacto en los 30 días posteriores al lanzamiento, y —si va a LinkedIn— tasa de engagement real, es decir, comentarios y compartidos, no solo impresiones. Ninguna de estas métricas es perfecta por sí sola, pero combinadas dan una señal clara.",
      },
      {
        type: "heading",
        level: 3,
        text: "Métricas cualitativas: las que no aparecen en el dashboard",
      },
      {
        type: "paragraph",
        text: "A veces el retorno de un vídeo se mide en conversaciones. He visto piezas corporativas con menos de mil visualizaciones que el equipo comercial empezó a incluir en sus propuestas y que mejoraron el ratio de cierre del trimestre. Eso no aparece en ningún informe de YouTube Analytics. Pregunta a las personas que están en contacto con el cliente qué ha cambiado desde que el vídeo existe.",
      },
      {
        type: "image",
        src: "/blog/como-medir-roi-video-corporativo/mid.webp",
        alt: "Filmmaker revisando material grabado en un portátil junto a una cámara DSLR profesional",
        width: 1920,
        height: 1285,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes al medir el retorno de un vídeo",
      },
      {
        type: "list",
        items: [
          "Medir visualizaciones totales sin distinguir de dónde vienen: un pico de tráfico de bots infla los números sin aportar nada.",
          "Comparar el rendimiento de un vídeo institucional con el de un reel de entretenimiento: son piezas con objetivos y audiencias distintas.",
          "Dar el vídeo por amortizado en los primeros 30 días: una pieza bien hecha sigue generando valor a los 6 meses si está bien colocada.",
          "No establecer una línea de base antes de publicar: si no sabes cómo estaba la página antes, no puedes medir si el vídeo la mejoró.",
          "Atribuir al vídeo resultados que corresponden a otros factores: una campaña de ads activa al mismo tiempo o la temporada alta del negocio distorsionan la lectura.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo hay que esperar para medir el ROI de un vídeo corporativo?",
        answer:
          "Para un vídeo en la homepage o en redes, lo mínimo razonable son 60 días. En ese tiempo tienes suficientes datos de tráfico orgánico y comportamiento de usuario para sacar conclusiones útiles. Si el vídeo forma parte de una landing con tráfico pagado, puedes tener señales en 2 o 3 semanas.",
      },
      {
        type: "faq",
        question: "¿Existe un ROI estándar o benchmark para vídeo corporativo?",
        answer:
          "No existe un benchmark universal porque depende del coste del vídeo, del sector, del objetivo y del canal de distribución. Lo que sí puedo decir es que una pieza bien hecha y bien colocada debería recuperar su coste en un plazo de 12 meses si el negocio tiene un ticket medio razonable.",
      },
      {
        type: "faq",
        question: "¿Qué herramientas sirven para medir el rendimiento de un vídeo?",
        answer:
          "Google Analytics 4 para ver el comportamiento en la web (tiempo de permanencia, tasa de conversión antes y después), YouTube Studio si el vídeo vive ahí, y LinkedIn Analytics para el rendimiento en esa red. Para vídeos internos o de onboarding, el seguimiento suele ser más manual: encuestas de percepción o métricas de uso de la plataforma donde se aloja.",
      },
      {
        type: "faq",
        question: "¿Un vídeo con pocas visualizaciones puede tener buen ROI?",
        answer:
          "Sí, y es más común de lo que parece. Un vídeo visto por 200 personas correctas —decisores de compra, responsables de RRHH, socios potenciales— puede tener más valor que uno visto por 20.000 personas sin interés real en el producto. Las visualizaciones miden alcance, no retorno.",
      },
      {
        type: "paragraph",
        text: "Si tienes un vídeo corporativo publicado y no sabes si está funcionando, o estás pensando en producir uno nuevo y quieres definir antes cómo vas a medir el resultado, desde la página de contacto me puedes contar en qué punto estás.",
      },
    ],
  },
  {
    slug: "video-onboarding-interno",
    title: "Vídeo onboarding interno: estructura y duración que funcionan",
    description:
      "Cómo estructurar un vídeo de onboarding interno para que los nuevos empleados retengan lo que necesitan sin perderse en un único archivo de 40 minutos.",
    publishedAt: "2026-06-18",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "onboarding corporativo",
      "vídeo interno empresa",
      "formación en vídeo",
      "comunicación interna",
      "vídeo corporativo",
    ],
    keyword: "vídeo onboarding interno",
    intent: "informacional",
    excerpt:
      "Un vídeo de onboarding mal estructurado se ve una vez y se olvida. Esto es lo que hace que una pieza de bienvenida interna sea realmente útil.",
    seoTitle: "Vídeo onboarding interno: estructura y duración | Daniel Acero",
    metaDescription:
      "Vídeo onboarding interno: cómo estructurarlo, cuánto debe durar y qué incluir para que los nuevos empleados retengan lo que necesitan.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando una empresa me pide un vídeo de onboarding interno, lo primero que pregunto es para quién es y qué tiene que saber esa persona al terminar de verlo. Esas dos preguntas definen todo lo demás: la duración, la estructura, el tono y qué se deja fuera.",
      },
      {
        type: "paragraph",
        text: "El problema más habitual no es que el vídeo sea malo. Es que intenta cubrir demasiado. Cultura de empresa, políticas de RRHH, herramientas internas, valores de marca y protocolo de vacaciones en una sola pieza. Nadie retiene eso. Y el nuevo empleado lo ve una vez y no lo vuelve a abrir.",
      },
      {
        type: "image",
        src: "/blog/video-onboarding-interno/hero.webp",
        alt: "Persona de pie presentando a un grupo de empleados sentados frente a portátiles en una sala de formación",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un vídeo de onboarding interno y por qué importa",
      },
      {
        type: "paragraph",
        text: "Un vídeo de onboarding interno es una pieza audiovisual de bienvenida que una empresa produce para sus nuevos empleados. Puede ser un único vídeo generalista o una serie corta organizada por departamento. Su función principal no es impresionar: es reducir el tiempo que tarda alguien en entender cómo funciona el sitio al que acaba de llegar.",
      },
      {
        type: "paragraph",
        text: "Cuando funciona bien, libera tiempo a mánagers y a RRHH. Los primeros días del empleado son menos reactivos y el onboarding presencial se vuelve más concreto porque el contexto general ya está cubierto. Cuando funciona mal, añade fricción: el empleado tiene que ver un vídeo de 40 minutos lleno de texto en pantalla antes de poder hacer nada.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se hace bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Estructura modular, no monolítica",
      },
      {
        type: "paragraph",
        text: "Lo más efectivo es dividir el contenido en módulos cortos de 3 a 5 minutos cada uno, en lugar de producir un solo vídeo largo. De esa forma el nuevo empleado puede ver el módulo de herramientas cuando lo necesita, no antes. Cada módulo tiene un título claro y puede revisitarse sin tener que rebobinar 30 minutos. En las producciones de onboarding que hago suelo recomendar entre 4 y 6 módulos en lugar de una sola pieza de 20 minutos.",
      },
      {
        type: "heading",
        level: 3,
        text: "Duración: menos de lo que crees",
      },
      {
        type: "paragraph",
        text: "La duración total que funciona en la práctica es entre 12 y 20 minutos repartidos en módulos. Cada módulo no debería superar los 5 minutos. En esos 5 minutos caben exactamente un tema, bien explicado, sin rodeos. Si el guion ocupa 2 páginas A4 a doble espacio, el módulo dura alrededor de 4 minutos. Si ocupa 4 páginas, hay que dividirlo en dos. La duración la determina el contenido necesario, no la duración deseada.",
      },
      {
        type: "heading",
        level: 3,
        text: "A quién le habla y en qué tono",
      },
      {
        type: "paragraph",
        text: "El tono depende del tipo de empresa. Una startup tecnológica puede permitirse un registro cercano y directo. Una firma de consultoría necesita un registro más formal. Lo que no funciona en ningún contexto es el tono corporativo genérico: voz en off institucional, imágenes de stock y frases como 'aquí en [empresa] creemos en las personas'. Un portavoz real del equipo, hablando a cámara con naturalidad, convierte mejor que cualquier locución profesional sobre imágenes de recurso.",
      },
      {
        type: "image",
        src: "/blog/video-onboarding-interno/mid.webp",
        alt: "Mujer presentando una gráfica a una audiencia en una sala de conferencias corporativa",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que lo convierten en algo inútil",
      },
      {
        type: "list",
        items: [
          "Meterlo todo en un solo vídeo: la empresa quiere cubrirlo todo de una vez y el resultado es una pieza de 35 minutos que nadie termina de ver.",
          "Usar la estética del vídeo corporativo genérico: si la intro tiene el mismo look que el anuncio de una aerolínea, el nuevo empleado no siente que ese vídeo es para él.",
          "Grabar sin guion: improvisar en onboarding genera inconsistencias. Un responsable dice una cosa y otro dice algo distinto sobre el mismo proceso.",
          "No actualizar el contenido: un vídeo que menciona una herramienta que ya no se usa o un proceso que cambió genera confusión en lugar de aclarar.",
          "Forzar al CEO a protagonizar todos los módulos: tiene sentido que aparezca una vez para dar la bienvenida, pero no como narrador de cada bloque.",
          "Producirlo sin definir en qué momento del proceso de incorporación lo va a ver el nuevo empleado.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto cuesta producir un vídeo de onboarding interno?",
        answer:
          "Depende de la cantidad de módulos, si hay desplazamientos, si necesita locuciones o voz interna, y si requiere animación o solo grabación. Un onboarding de 4 módulos grabados en las instalaciones del cliente, con edición estándar y subtítulos, puede estar entre 3.000 y 6.000 euros. Si incluye animaciones personalizadas o varios días de grabación en distintas ubicaciones, el rango sube.",
      },
      {
        type: "faq",
        question: "¿Quién debería aparecer en el vídeo?",
        answer:
          "El CEO o director general en el primer módulo de bienvenida, si tiene presencia natural delante de la cámara. Para los módulos específicos —herramientas, procesos, cultura de equipo— es mejor que sean los responsables de cada área. No hace falta que sean actores, hace falta que conozcan el tema y hablen con soltura. Un par de horas de preparación con guion bien escrito es suficiente para la mayoría de personas.",
      },
      {
        type: "faq",
        question: "¿Hay que actualizar el vídeo de onboarding?",
        answer:
          "Sí, y por eso la estructura modular tiene otra ventaja: puedes regravar solo el módulo que ha quedado obsoleto sin tocar los demás. Un vídeo monolítico de 30 minutos que cambia un proceso interno hay que rehacerlo entero. Un módulo de 4 minutos se actualiza en medio día de grabación.",
      },
      {
        type: "faq",
        question: "¿Se puede hacer con medios internos?",
        answer:
          "Parcialmente. El guion y el contenido lo puede preparar el equipo de RRHH o comunicación interna. La grabación con teléfono o webcam sin conocimientos técnicos suele transmitir poca seriedad. Para una primera versión con presupuesto bajo, una grabación simple pero con buena iluminación y audio decente es mejor que una producción cara con contenido vago.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en producir el vídeo de onboarding de tu empresa y no sabes por dónde empezar —cuántos módulos, qué duración, con qué medios—, en la página de contacto puedes contarme la situación y te digo qué tiene sentido para tu caso.",
      },
    ],
  },
  {
    slug: "video-institucional-errores-que-lo-hacen-generico",
    title: "Vídeo institucional: los errores que lo hacen genérico",
    description:
      "Repaso a los errores más frecuentes que convierten un vídeo institucional en algo que parece de cualquier empresa y no de la tuya. Cómo evitarlos desde la fase de producción.",
    publishedAt: "2026-06-19",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo institucional",
      "producción de vídeo",
      "vídeo corporativo",
      "errores de producción",
      "comunicación empresarial",
    ],
    keyword: "vídeo institucional errores que lo hacen genérico",
    intent: "informacional",
    excerpt:
      "Un vídeo institucional genérico no convierte ni se recuerda. Repaso los errores más frecuentes que veo en producción y cómo los evito con mis clientes.",
    seoTitle: "Vídeo institucional genérico: errores comunes | Daniel Acero",
    metaDescription:
      "Vídeo institucional genérico: los errores que lo arruinan y cómo evitarlos en producción. Guía práctica de Daniel Acero, filmmaker corporativo en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La mayoría de vídeos institucionales que veo me dicen lo mismo: 'Somos líderes en el sector, comprometidos con la innovación y centrados en las personas'. Esas frases no le dicen nada a nadie y el vídeo acaba siendo un archivo más en el servidor.",
      },
      {
        type: "paragraph",
        text: "No es un problema de presupuesto. He visto vídeos de bajo coste con una identidad clarísima y vídeos de 30.000 euros que parecen plantillas. El problema está en las decisiones que se toman —o que no se toman— durante la producción.",
      },
      {
        type: "image",
        src: "/blog/video-institucional-errores-que-lo-hacen-generico/hero.webp",
        alt: "Cámara en trípode lista para rodaje de vídeo institucional corporativo",
        width: 1920,
        height: 1280,
        caption: "Un buen vídeo institucional empieza con decisiones claras antes de que la cámara entre en escena.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué hace genérico a un vídeo institucional",
      },
      {
        type: "paragraph",
        text: "Hay una confusión de base: creer que el vídeo institucional es un ejercicio de prestigio corporativo. Se contrata un equipo, se alquila una sala bonita, se graba al director gerente hablando de valores y se añade música emocionante de biblioteca. El resultado parece un vídeo de empresa, pero no habla de ninguna empresa en concreto.",
      },
      {
        type: "paragraph",
        text: "El vídeo genérico no engaña a nadie. El espectador que lo ve sabe en diez segundos si está ante algo real o ante una producción de relleno. Y si es relleno, hace scroll y no vuelve.",
      },
      {
        type: "paragraph",
        text: "Lo que da identidad a un vídeo no es el número de cámaras ni el tamaño del equipo. Es la claridad en el mensaje, la elección de quién aparece y la coherencia visual. Esas tres cosas se pueden tener con cualquier presupuesto.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se hace bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Define el mensaje antes de pensar en el plano",
      },
      {
        type: "paragraph",
        text: "El error más frecuente que veo es llegar al rodaje sin haber decidido qué quiere transmitir la empresa. No el eslogan, no los valores del código de conducta: el mensaje concreto que debe quedarse en la cabeza del espectador cuando termina el vídeo. Si no tienes esa frase, no empieces a grabar.",
      },
      {
        type: "heading",
        level: 3,
        text: "Muestra personas reales haciendo cosas reales",
      },
      {
        type: "paragraph",
        text: "Los empleados con sonrisa forzada mirando pantallas o piezas en una cinta no engañan a nadie. El espectador distingue una actuación de un momento real. Lo que funciona es grabar a alguien explicando algo que hace todos los días, en su entorno, con el vocabulario que usa normalmente. Eso cuesta dirigir bien, pero el resultado es incomparable.",
      },
      {
        type: "heading",
        level: 3,
        text: "Da una dirección visual con criterio",
      },
      {
        type: "paragraph",
        text: "Muchos vídeos institucionales se ruedan sin un criterio visual definido: planos parecidos entre sí, cortes sin ritmo, color sin consistencia. Una paleta de color, un tipo de encuadre y una norma de movimiento de cámara ya dan personalidad, aunque el rodaje sea de un solo día. No hace falta un director de arte para tener criterio visual.",
      },
      {
        type: "image",
        src: "/blog/video-institucional-errores-que-lo-hacen-generico/intermedia.webp",
        alt: "Equipo de trabajo reunido en oficina, escena real adecuada para vídeo institucional",
        width: 1920,
        height: 1282,
        caption: "Las escenas de trabajo real, sin poses, son las que dan credibilidad a un vídeo institucional.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes que lo convierten en genérico",
      },
      {
        type: "list",
        items: [
          "Abrir con el logo y el nombre de la empresa: el espectador ya sabe dónde está.",
          "Usar música de biblioteca de moda en lugar de una banda sonora que case con el tono de la marca.",
          "Escribir el guion en lenguaje corporativo en lugar de hablar como hablan sus clientes.",
          "No incluir ningún elemento visual específico: instalaciones propias, producto real, equipo de trabajo.",
          "Dejar que el vídeo dure cuatro minutos cuando el mensaje cabe en noventa segundos.",
          "No tener un CTA claro al final: ¿qué quieres que haga el espectador después de verlo?",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Qué duración es correcta para un vídeo institucional?",
        answer:
          "Entre 90 segundos y 2 minutos para distribución digital. Si el vídeo es para un evento interno o una presentación larga, puede llegar a 4 o 5 minutos, pero cada minuto tiene que justificarse. Estirar la duración para dar más peso al vídeo es contraproducente: el espectador abandona.",
      },
      {
        type: "faq",
        question: "¿Cuántas personas deben aparecer hablando a cámara?",
        answer:
          "El número no importa. Lo que importa es que quien habla tenga algo concreto que decir y que lo diga con naturalidad. Un solo portavoz con convicción es más efectivo que cinco personas repitiendo variaciones del mismo mensaje. Si usas varios testimonios, que cada uno aporte un punto de vista diferente.",
      },
      {
        type: "faq",
        question: "¿Es necesario un guion cerrado o bastan puntos orientativos?",
        answer:
          "Depende del portavoz. Alguien con experiencia en comunicación pública puede funcionar con puntos orientativos. Para el resto, un guion cerrado que hayan ensayado una hora antes da resultados mucho más consistentes que la improvisación. Con teleprompter, el guion no hace que parezcan rígidos: hace que mantengan contacto visual con la cámara.",
      },
      {
        type: "faq",
        question: "¿En qué se diferencia el vídeo institucional del vídeo de marca?",
        answer:
          "El vídeo institucional explica quién es la empresa: historia, equipo, misión, valores. El vídeo de marca trabaja la emoción y la identidad visual. En la práctica se solapan, pero tienen objetivos distintos. Muchas empresas fusionan ambos en un solo vídeo y el resultado queda a medias en los dos.",
      },
      {
        type: "paragraph",
        text: "Si estás planificando el vídeo institucional de tu empresa y quieres que tenga identidad propia en lugar de parecer el de cualquier otra, puedes escribirme desde la página de contacto y te digo si tiene sentido que trabajemos juntos.",
      },
    ],
  },
  {
    slug: "cuantas-camaras-para-entrevista",
    title: "Cuántas cámaras necesitas para grabar una entrevista corporativa",
    description:
      "Guía práctica sobre cuántas cámaras usar en una entrevista corporativa: cuándo basta con una, cuándo la segunda cámara cambia el montaje y qué errores evitar.",
    publishedAt: "2026-06-22",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "grabación de entrevistas",
      "vídeo corporativo",
      "producción audiovisual",
      "cámara",
      "entrevista corporativa",
    ],
    keyword: "cuántas cámaras para grabar una entrevista",
    intent: "informacional",
    excerpt:
      "Una cámara puede ser suficiente para una entrevista. Dos cámaras cambian el ritmo del montaje. Te explico cuándo merece la pena añadir la segunda.",
    seoTitle: "Cuántas cámaras para una entrevista corporativa | Daniel Acero",
    metaDescription:
      "¿Una o dos cámaras para tu entrevista corporativa? Cuándo basta con una y cuándo la segunda cambia el resultado del montaje. Guía práctica.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La pregunta que me hacen casi siempre antes de presupuestar una entrevista es esa: ¿cuántas cámaras vais a traer? Como si el número lo definiera todo.",
      },
      {
        type: "paragraph",
        text: "Depende. Depende de para qué sirve la entrevista, cuánto tiempo hay en montaje y qué espera el cliente del resultado final.",
      },
      {
        type: "image",
        src: "/blog/cuantas-camaras-para-entrevista/hero.webp",
        alt: "Cámara de vídeo profesional en set de entrevista corporativa con iluminación lateral",
        width: 1880,
        height: 1253,
        caption: "El plano que eliges y la iluminación hacen más que el número de cámaras.",
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "La respuesta corta: una cámara basta, dos mejoran",
      },
      {
        type: "paragraph",
        text: "Con una cámara bien posicionada puedes grabar una entrevista que funcione. La clave está en el plano que eliges, la iluminación y la dirección del entrevistado. El montaje en una sola cámara obliga a cortar en momentos de pausa o a usar B-roll para cubrir los saltos de edición. Eso es perfectamente válido y, en muchos casos, es exactamente lo que pide el formato.",
      },
      {
        type: "paragraph",
        text: "Con dos cámaras tienes opciones reales de montaje. Puedes cortar entre plano general y plano corto sin romper la continuidad del discurso. El resultado tiene más dinamismo y la edición se vuelve más flexible. Si la entrevista dura 45 minutos y de ahí tienen que salir 3 minutos de pieza final, la segunda cámara no es un lujo: es lo que te permite editar con criterio y no solo con lo que tienes.",
      },
      {
        type: "paragraph",
        text: "Hay casos en los que la segunda cámara es prescindible. Si el montaje va a ser un vídeo con voz en off sobre imágenes de recurso y la entrevistada aparece puntualmente, no merece la pena. Si el formato es una sola pregunta de 30 segundos para redes sociales, tampoco.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo sacar partido a cada configuración",
      },
      {
        type: "heading",
        level: 3,
        text: "Grabación con una sola cámara",
      },
      {
        type: "paragraph",
        text: "El plano habitual es un plano medio o medio corto, ligeramente desplazado del centro del encuadre, con la mirada del entrevistado dirigida hacia el entrevistador fuera de cámara. El reto del montaje es que cada corte en el discurso queda expuesto: si el entrevistado repite o titubea, tienes que cubrir ese corte con B-roll. Eso funciona bien si ya tienes imágenes de recurso preparadas o si el discurso es fluido y las pausas son naturales.",
      },
      {
        type: "heading",
        level: 3,
        text: "Grabación con dos cámaras",
      },
      {
        type: "paragraph",
        text: "La configuración más habitual es cámara A en plano medio o medio corto y cámara B en plano más cerrado o en un ángulo de apoyo. Ambas tienen que estar colocadas en el mismo lado del eje imaginario para que el entrevistado mire siempre en la misma dirección en los dos planos. El montaje se vuelve mucho más fluido: puedes cortar en cualquier momento del discurso sin necesidad de cubrir nada. En términos de producción, añadir una segunda cámara suma entre 20 y 40 minutos de setup y requiere atención durante la grabación, aunque sea pasiva.",
      },
      {
        type: "heading",
        level: 3,
        text: "¿Y con tres cámaras?",
      },
      {
        type: "paragraph",
        text: "En entrevistas estándar, rara vez tiene sentido. Lo uso en paneles o mesas de diálogo con varios portavoces, donde una tercera cámara cubre el plano general o permite cambiar de interlocutor sin corte visible. En una entrevista de una sola persona, tres cámaras casi siempre son superfluas.",
      },
      {
        type: "image",
        src: "/blog/cuantas-camaras-para-entrevista/intermedia.webp",
        alt: "Set de producción audiovisual con varias cámaras y pantalla verde en estudio profesional",
        width: 1880,
        height: 1253,
        caption: "Un set con dos cámaras bien posicionadas da más libertad al editor sin complicar el rodaje.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes al añadir la segunda cámara",
      },
      {
        type: "list",
        items: [
          "Cruzar el eje: las dos cámaras apuntan desde lados opuestos y en el montaje parece que el entrevistado mira en dos direcciones distintas.",
          "Igualar los planos: si A y B tienen el mismo ángulo y focal, no hay razón para cortar entre ellas. Los planos tienen que ser distintos para que el corte aporte algo.",
          "No coordinar la exposición: si hay una ventana en escena y la iluminación varía, los dos planos quedan incongruentes en edición.",
          "Mover la segunda cámara sin criterio durante la grabación: ese material se pierde en montaje.",
          "Activarla sin audio de referencia: sin señal de audio, el sincronizado manual en DaVinci Resolve o Premiere consume tiempo innecesario.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Tengo que avisar al entrevistado de que hay dos cámaras?",
        answer:
          "Sí, siempre. Aunque no cambia nada en el comportamiento de quien está siendo grabado, es una cuestión de transparencia y de que la persona sepa hacia dónde mirar en cada momento.",
      },
      {
        type: "faq",
        question: "¿Cuál es la diferencia de coste entre una y dos cámaras?",
        answer:
          "Depende del proyecto. Una segunda cámara puede implicar un segundo operador o simplemente montar una cámara fija en un punto secundario. En el segundo caso, el incremento de coste es mínimo comparado con lo que aporta al montaje.",
      },
      {
        type: "faq",
        question: "¿Qué cámara va en la posición A y cuál en la B?",
        answer:
          "La cámara con mejor óptica o mayor resolución suele ir en la posición A, el plano principal. La B puede ser la misma gama con una focal diferente o una cámara secundaria destinada al plano de apoyo.",
      },
      {
        type: "faq",
        question: "¿Puede grabarse una entrevista sin entrevistador visible con dos cámaras?",
        answer:
          "Sí. La segunda cámara puede hacer un plano de apoyo diferente sin incluir al entrevistador. Es lo más habitual en entrevistas corporativas donde solo aparece el portavoz de la empresa.",
      },
      {
        type: "paragraph",
        text: "Si estás planificando una entrevista corporativa y quieres saber qué configuración tiene sentido para tu caso, puedes escribirme desde la página de contacto. En función del uso final del vídeo y del tiempo de producción disponible, te digo qué merece la pena y qué sobra.",
      },
    ],
  },
  {
    slug: "iluminacion-natural-vs-artificial-video-corporativo",
    title: "Iluminación natural vs artificial en vídeo corporativo: cuándo usar cada una",
    description:
      "Luz natural o artificial en vídeo corporativo: cómo decidir según el espacio, el tiempo de grabación y el resultado que necesitas.",
    publishedAt: "2026-06-23",
    readingTime: "4 min",
    category: "Guía",
    tags: ["iluminación", "vídeo corporativo", "producción", "técnica", "filmmaker", "Madrid"],
    keyword: "iluminación natural vs artificial en vídeo corporativo",
    intent: "informacional",
    excerpt:
      "La luz define el resultado visual de cualquier grabación. Te explico cuándo apostar por la luz natural y cuándo merece la pena montar un equipo de iluminación artificial.",
    seoTitle: "Iluminación natural vs artificial en vídeo corporativo | Daniel Acero",
    metaDescription:
      "Iluminación natural o artificial en vídeo corporativo: cuándo conviene cada opción, qué equipo necesitas y cómo evitar los errores más comunes.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La decisión no es estética. Es logística. Cuando llego a un set y tengo ventanas grandes con luz de norte, trabajo con lo que hay. Cuando grabo en una sala de reuniones con fluorescentes viejos y persianas bloqueadas, saco los focos. La pregunta no es qué queda mejor en abstracto, sino qué puedes controlar en ese espacio ese día.",
      },
      {
        type: "paragraph",
        text: "En vídeo corporativo el problema con la luz natural no es que sea mala. Es que cambia. Una nube, un cambio de hora, el sol que pasa al otro lado del edificio: de un plano al siguiente tienes una temperatura de color diferente y una exposición distinta. Eso se puede corregir en postproducción, pero tiene un coste de tiempo que muchas veces no merece.",
      },
      {
        type: "image",
        src: "/blog/iluminacion-natural-vs-artificial-video-corporativo/hero.webp",
        alt: "Iluminación en set de vídeo corporativo con ventana y foco artificial",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué cambia realmente entre luz natural y artificial",
      },
      {
        type: "paragraph",
        text: "La luz natural tiene una calidad que es difícil de replicar: fuente de gran tamaño, gradaciones suaves, espectro completo. En interiores con buenas ventanas, una entrevista bien expuesta puede verse mejor que con un equipo de focos mediocre. El problema es la consistencia: a las 9 de la mañana tienes una cosa y a las 11 tienes otra.",
      },
      {
        type: "paragraph",
        text: "La luz artificial te da control. Decides la dirección, la intensidad, la temperatura de color. Si el espacio es oscuro o tienes que grabar varias horas seguidas y que todo iguale, no hay alternativa. Un equipo básico de tres focos LED bicolor, difusores y soportes cabe en el maletero de un coche y monta en 20 minutos.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo trabajar bien con luz natural",
      },
      {
        type: "heading",
        level: 3,
        text: "Elige el momento del día",
      },
      {
        type: "paragraph",
        text: "La luz directa de mediodía entra con ángulos agresivos y genera sombras duras en la cara. Para entrevistas prefiero las horas de la mañana o las de última tarde, cuando la luz llega oblicua y más suave. En Madrid en verano hay buena ventana entre las 8 y las 10, y otra entre las 18 y las 20.",
      },
      {
        type: "heading",
        level: 3,
        text: "Controla la dirección y la cantidad",
      },
      {
        type: "paragraph",
        text: "Una ventana lateral es un softbox gratuito. El entrevistado a 45 grados respecto a la ventana da un modelado de luz clásico. Si la ventana queda de frente, añado un reflector plateado o blanco al lado contrario para rellenar las sombras. Si hay demasiada luz y quema, una cortina blanca difunde sin perder la calidad de la fuente.",
      },
      {
        type: "heading",
        level: 3,
        text: "Reflectores y difusores como aliados",
      },
      {
        type: "paragraph",
        text: "Llevar un kit de reflectores plegables de 80 cm pesa casi nada y permite manejar la luz natural con mucha más precisión. No sustituye a un foco, pero en muchas locaciones es la diferencia entre una imagen plana y una imagen con volumen real.",
      },
      {
        type: "image",
        src: "/blog/iluminacion-natural-vs-artificial-video-corporativo/mid.webp",
        alt: "Estudio de vídeo con iluminación artificial profesional, softbox y equipo de filmación",
        width: 1920,
        height: 1440,
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo la luz artificial es la opción correcta",
      },
      {
        type: "list",
        items: [
          "El espacio no tiene ventanas o la luz exterior es muy dura y sin posibilidad de difusión.",
          "La grabación dura más de dos horas y necesitas que todos los planos igualen en color y exposición.",
          "Hay mezcla de luces: fluorescentes de techo más ventana lateral. Es más fácil tapar las fuentes existentes y controlar todo artificialmente.",
          "Grabas en varias locaciones distintas el mismo día y necesitas consistencia visual entre todas.",
          "El cliente quiere un resultado pulido con fondo neutro en un espacio que no lo tiene de forma natural.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Puedo usar solo la luz natural para un vídeo corporativo profesional?",
        answer:
          "Sí, si las condiciones son las adecuadas: ventanas grandes, luz lateral y horario controlado. El resultado puede ser muy bueno. El problema aparece cuando no controlas el espacio o el tiempo de grabación se extiende varias horas.",
      },
      {
        type: "faq",
        question: "¿Qué equipo mínimo de iluminación artificial necesito para una entrevista?",
        answer:
          "Para una entrevista estándar: dos focos LED bicolor de 60 a 100 W con softbox o difusor (key y fill), y un tercer foco pequeño para separar al sujeto del fondo o iluminarlo. Un kit completo con soportes puede rondar los 400-600 euros.",
      },
      {
        type: "faq",
        question: "¿La temperatura de color importa tanto en vídeo corporativo?",
        answer:
          "Bastante. Una mezcla de luz fría de ventana y luz cálida de foco da pieles de colores raros que cuestan mucho de corregir en DaVinci Resolve. Lo ideal es fijar una temperatura en cámara, 5600K para luz de día o 3200K para tungsteno, y que todas las fuentes igualen.",
      },
      {
        type: "faq",
        question: "¿Qué hago si en la locación hay mezcla de luces que no puedo controlar?",
        answer:
          "Primera opción: bajar las persianas y apagar los fluorescentes de techo, y trabajar solo con tus focos. Segunda opción: si no puedes eliminar las otras fuentes, usa una luz dominante con mucha más potencia que el resto y acepta que habrá algo de mezcla en zonas secundarias del encuadre.",
      },
      {
        type: "paragraph",
        text: "Si estás planificando una grabación y tienes dudas sobre cómo manejar la iluminación del espacio, escríbeme desde la página de contacto. Con las fotos del espacio y la hora prevista de grabación ya puedo decirte si merece la pena traer equipo o si la luz natural es suficiente.",
      },
    ],
  },
  {
    slug: "estabilizacion-gimbal-slider-tripode",
    title: "Gimbal, slider o trípode: cuándo usar cada herramienta de estabilización",
    description:
      "Guía práctica para decidir entre gimbal, slider y trípode en producciones de vídeo corporativo según el tipo de plano, espacio y movimiento que necesitas.",
    publishedAt: "2026-06-24",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "estabilización de cámara",
      "gimbal",
      "trípode",
      "slider",
      "vídeo corporativo",
      "producción audiovisual",
    ],
    keyword: "estabilización gimbal slider trípode",
    intent: "informacional",
    excerpt:
      "Trípode, slider o gimbal: la elección correcta depende del tipo de plano, el espacio y el movimiento que quieres conseguir. Te explico cómo pienso yo antes de cada rodaje.",
    seoTitle: "Estabilización: gimbal, slider o trípode | Daniel Acero",
    metaDescription:
      "Estabilización en vídeo corporativo: cuándo usar gimbal, slider o trípode. Errores habituales y criterios para elegir bien antes del rodaje.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La primera vez que alguien me preguntó si necesitaba un gimbal para su vídeo corporativo, la respuesta fue no. Tenía una sala de reuniones, una sola cámara y cinco personas que debían hablar a cámara. El gimbal habría sido estorbo puro.",
      },
      {
        type: "paragraph",
        text: "La estabilización no es un valor en sí mismo. Es una decisión que depende de lo que vas a grabar, del espacio, del tiempo que tienes y del tipo de movimiento que quieres conseguir. Aquí explico cómo pienso yo cuando tengo que elegir.",
      },
      {
        type: "image",
        src: "/blog/estabilizacion-gimbal-slider-tripode/hero.webp",
        alt: "Operador de cámara usando un gimbal durante una grabación corporativa en exteriores",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué hace cada herramienta",
      },
      {
        type: "paragraph",
        text: "El trípode es la base de casi todo. Fija la cámara, elimina el temblor y libera energía mental para pensar en el encuadre, la luz y la persona que tienes delante. Para entrevistas, declaraciones, presentaciones de producto y cualquier plano donde la cámara no se mueve, el trípode es la opción correcta.",
      },
      {
        type: "paragraph",
        text: "El slider añade movimiento horizontal o vertical de forma controlada. Ese desplazamiento de 60 u 80 centímetros transforma un plano estático en algo con vida sin que parezca grabado con cámara en mano. Funciona bien para planos de producto, recurso en oficinas o secuencias de apertura.",
      },
      {
        type: "paragraph",
        text: "El gimbal estabiliza la cámara mientras te mueves. Compensa vibraciones y permite caminar con fluidez o seguir a una persona en movimiento. Es la herramienta correcta para grabaciones de eventos, espacios que quieres recorrer o situaciones donde el movimiento narrativo importa.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo elegir según la situación",
      },
      {
        type: "heading",
        level: 3,
        text: "Trípode: cuando la cámara no se mueve",
      },
      {
        type: "paragraph",
        text: "Si la cámara no se desplaza durante la toma, el trípode gana siempre. Es más rápido de montar, más estable a cualquier focal y más silencioso que cualquier gimbal. En entrevistas corporativas trabajo casi siempre con dos trípodes: uno para la cámara principal y otro para la Sony A7 con focal larga. No hace falta más movimiento.",
      },
      {
        type: "heading",
        level: 3,
        text: "Slider: cuando el movimiento es corto y controlado",
      },
      {
        type: "paragraph",
        text: "Cuando tengo que hacer planos de recurso en oficinas o salas de reunión, el slider me da algo que el trípode no puede: el movimiento de apertura. Un travelling de 80 centímetros sobre una mesa de trabajo o un plano de cierre sobre un portátil añaden profundidad en movimiento. Lo llevo sobre todo cuando el vídeo tiene una secuencia de presentación de espacio o de producto.",
      },
      {
        type: "heading",
        level: 3,
        text: "Gimbal: cuando la cámara sigue la acción",
      },
      {
        type: "paragraph",
        text: "Los eventos son el terreno natural del gimbal. Cuando hay gente moviéndose, cuando quiero seguir a alguien por un pasillo o capturar el ambiente de una sala llena, el gimbal permite hacerlo con fluidez. En rodajes de ocho o diez horas en eventos, suele ser la herramienta que más tiempo tengo en la mano. La contrapartida: requiere práctica, carga en los brazos y batería.",
      },
      {
        type: "image",
        src: "/blog/estabilizacion-gimbal-slider-tripode/mid.webp",
        alt: "Cámara Sony sobre trípode en set de producción de vídeo corporativo",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que veo habitualmente",
      },
      {
        type: "list",
        items: [
          "Llevar el gimbal a entrevistas estáticas: añade tiempo de montaje sin ninguna ventaja real.",
          "No equilibrar el gimbal antes del rodaje: un gimbal mal balanceado produce movimientos erráticos difíciles de corregir en posproducción.",
          "Usar slider en espacios pequeños sin planificar el recorrido: si no hay sitio para el travelling, el plano queda a medias.",
          "Mezclar cámara en mano con slider en el mismo proyecto sin coherencia narrativa: el resultado visual es incoherente.",
          "Olvidar cargar las baterías del gimbal: consume mucho en exteriores y necesita baterías propias.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Puedo prescindir del slider en una producción corporativa?",
        answer:
          "Sí. En la mayoría de vídeos de empresa el slider es un extra, no una necesidad. Un vídeo bien iluminado y bien encuadrado desde un trípode es perfectamente competitivo sin ningún movimiento de cámara adicional.",
      },
      {
        type: "faq",
        question: "¿Qué peso de cámara admite un gimbal de gama media?",
        answer:
          "La mayoría de gimbals de gama media, como el DJI RS 3 o el Zhiyun Crane M3, admiten entre 2 y 3 kilogramos de payload. Con una Sony A7 y un objetivo estándar estás cómodo. Con un zoom largo o filtros adicionales, revisa las especificaciones antes de comprar.",
      },
      {
        type: "faq",
        question: "¿Puedo usar el trípode con un cabezal fluido básico?",
        answer:
          "Técnicamente sí, pero los paneos quedarán entrecortados. Si haces paneos suaves en cámara, merece la pena invertir en un cabezal fluido de calidad. Con un Manfrotto 502AH, por ejemplo, el pan es limpio y predecible.",
      },
      {
        type: "faq",
        question: "¿El gimbal sustituye a la estabilización óptica o al IBIS de la cámara?",
        answer:
          "No, se complementan. El gimbal corrige los movimientos grandes, como caminar o girar. El IBIS o la estabilización óptica corrige las vibraciones pequeñas. Usarlos juntos da el resultado más limpio, aunque hay que activarlos correctamente para evitar el efecto wooble que se produce cuando se contrarrestan entre sí.",
      },
      {
        type: "paragraph",
        text: "Si estás preparando un rodaje y tienes dudas sobre qué equipo de estabilización necesitas, escríbeme desde la página de contacto. Con el briefing del proyecto puedo decirte exactamente qué llevar y ahorrarte tiempo de montaje el día de la grabación.",
      },
    ],
  },
  {
    slug: "duracion-ideal-video-corporativo",
    title: "Cuánto debe durar un vídeo corporativo según el formato",
    description:
      "Guía con los rangos de duración reales para cada tipo de vídeo corporativo: spot, testimonial, aftermovie, onboarding y vídeo de producto. Sin teoría, con criterios de rodaje.",
    publishedAt: "2026-06-25",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "duración vídeo corporativo",
      "formatos audiovisuales",
      "producción audiovisual",
      "vídeo de empresa",
      "filmmaker Madrid",
    ],
    keyword: "duración ideal de un vídeo corporativo",
    intent: "informacional",
    excerpt:
      "La duración correcta de un vídeo corporativo depende del formato, el canal y lo que quieres conseguir. Te doy los rangos que uso en mis proyectos y los errores que alargan un vídeo sin añadir valor.",
    seoTitle: "Duración ideal de un vídeo corporativo | Daniel Acero",
    metaDescription:
      "Duración ideal de un vídeo corporativo según el formato: spot, entrevista, aftermovie, testimonial y onboarding. Rangos reales de un filmmaker en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La pregunta que me hacen casi en cada presupuesto es la misma: ¿cuánto tiene que durar el vídeo? La respuesta honesta es que depende. Pero 'depende' no ayuda a planificar, así que aquí van los rangos que manejo yo según el tipo de vídeo.",
      },
      {
        type: "paragraph",
        text: "Hay dos errores frecuentes: creer que más largo es mejor porque 'hay mucho que contar', y creer que más corto siempre gana porque 'la atención es escasa'. Ninguno de los dos es siempre cierto. Lo que importa es el formato, el canal y la acción que quieres que el espectador tome al terminar.",
      },
      {
        type: "image",
        src: "/blog/duracion-ideal-video-corporativo/hero.webp",
        alt: "Sistema de cámara Sony FS7 en un set de filmación corporativa profesional",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué la duración importa antes del rodaje",
      },
      {
        type: "paragraph",
        text: "Definir la duración antes de grabar no es solo una decisión de edición. Cambia cuántos testimonios necesitas, cuánto b-roll hay que acumular y cuánto tiempo de locución tiene que escribir el guion. Un aftermovie de 90 segundos y uno de 4 minutos se graban de manera diferente.",
      },
      {
        type: "paragraph",
        text: "Si llegas al rodaje sin haber decidido el formato final, terminas grabando de más o de menos. Generalmente de más, porque 'por si acaso'. Eso alarga el montaje, encarece la edición y dilata las revisiones.",
      },
      {
        type: "heading",
        level: 2,
        text: "Rangos por formato",
      },
      {
        type: "heading",
        level: 3,
        text: "Spot corporativo o vídeo de marca",
      },
      {
        type: "paragraph",
        text: "Entre 60 y 90 segundos para canal digital; entre 30 y 45 segundos si va a pauta pagada. El objetivo es impactar, no explicar. Cada segundo que superes sin añadir valor es un segundo donde pierdes espectadores. Con 75 segundos bien ejecutados puedes contar quién eres, qué haces y por qué importa.",
      },
      {
        type: "heading",
        level: 3,
        text: "Entrevista y vídeo testimonial",
      },
      {
        type: "paragraph",
        text: "Entre 90 segundos y 3 minutos. Menos de 90 segundos es difícil desarrollar algo con sustancia; más de 3 minutos necesita una razón narrativa clara para mantener la atención. Si el testimonio tiene que convencer a un cliente potencial, entre 2 y 2:30 minutos es el rango donde mejor funciona.",
      },
      {
        type: "heading",
        level: 3,
        text: "Aftermovie de evento",
      },
      {
        type: "paragraph",
        text: "Entre 2 y 4 minutos. Un aftermovie de 90 segundos puede funcionar como pieza de redes sociales, pero no comunica la escala del evento. Uno de 6 minutos suele perder espectadores salvo que haya una historia sólida que lo sostenga. El punto dulce para que quien no asistió quiera haberlo hecho y quien sí asistió lo quiera compartir está entre 2:30 y 3:30.",
      },
      {
        type: "image",
        src: "/blog/duracion-ideal-video-corporativo/intermedia.webp",
        alt: "Línea de tiempo de edición de vídeo en Premiere Pro en monitor de postproducción",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 3,
        text: "Vídeo de onboarding o formación",
      },
      {
        type: "paragraph",
        text: "Entre 3 y 8 minutos por módulo, dependiendo de la densidad del contenido. Lo que nunca funciona es el vídeo monolítico de 25 minutos que intenta abarcar todo el proceso de incorporación en un solo archivo. Divide por temas, no por duración.",
      },
      {
        type: "heading",
        level: 3,
        text: "Vídeo de producto o servicio",
      },
      {
        type: "paragraph",
        text: "Entre 60 segundos y 2 minutos. Si el producto es complejo y la decisión de compra es larga, puedes llegar a 3 minutos. Si es un consumidor final que decide en segundos, 45-60 segundos puede ser suficiente.",
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que alargan un vídeo sin añadir valor",
      },
      {
        type: "list",
        items: [
          "Introducción demasiado larga antes de entrar en materia.",
          "Logos animados de apertura que duran 5 o 6 segundos sin narrativa.",
          "Declaraciones que repiten lo mismo con distintas palabras.",
          "B-roll de relleno sin conexión con el audio.",
          "Cierre que explica lo que acaba de decir el vídeo en lugar de llamar a la acción.",
          "Créditos completos en una pieza destinada a redes sociales.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Los vídeos cortos siempre funcionan mejor en redes sociales?",
        answer:
          "No siempre. En LinkedIn, por ejemplo, los vídeos de 2 a 3 minutos con contenido de valor profesional pueden superar en retención a los cortos superficiales. La clave es que los primeros 3 segundos justifiquen seguir viendo.",
      },
      {
        type: "faq",
        question: "¿Cuánto dura un aftermovie profesional de una conferencia de un día?",
        answer:
          "Entre 2 y 4 minutos es el rango habitual. Con un día de conferencia puedes grabar suficiente para un 3 minutos sólido: apertura, ponentes, momentos de networking y cierre. Forzar 6 minutos normalmente implica añadir relleno.",
      },
      {
        type: "faq",
        question: "¿Tengo que decidir la duración antes de grabar o puedo decidirlo en edición?",
        answer:
          "Es mejor decidirlo antes. Si sabes que el resultado va a ser 90 segundos, en rodaje sabrás que necesitas 3 o 4 testimonios cortos y mucho b-roll de ritmo. Si llegas a edición sin ese criterio, suele sobrar material sin estructura y la duración la acaba decidiendo el editor por defecto.",
      },
      {
        type: "faq",
        question: "¿Qué hago si el cliente pide un vídeo que 'lo cuente todo', que normalmente implica algo muy largo?",
        answer:
          "Lo redirijo hacia el objetivo. Pregunto: ¿quieres que quien lo vea conozca la empresa, que se decida a contrataros o que aprenda a usar el producto? Cada objetivo tiene una duración natural. Si la respuesta es 'todo a la vez', propongo dividir en piezas distintas para distintos momentos del embudo.",
      },
      {
        type: "paragraph",
        text: "Si estás en fase de presupuesto y tienes dudas sobre qué formato y duración encaja mejor con tu objetivo, escríbeme desde la página de contacto. Con el briefing del proyecto puedo orientarte antes de comprometer el rodaje.",
      },
    ],
  },
  {
    slug: "guion-video-corporativo",
    title: "Guion para vídeo corporativo: estructura y errores habituales",
    description:
      "Cómo escribir un guion para vídeo corporativo que funcione: estructura en columnas, errores que evitar y consejos prácticos de un filmmaker corporativo en Madrid.",
    publishedAt: "2026-06-26",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "guion vídeo corporativo",
      "producción audiovisual",
      "vídeo corporativo Madrid",
      "preproducción",
      "filmmaker corporativo",
    ],
    keyword: "guion para vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Sin guion, el rodaje se alarga, el mensaje se diluye y el montaje se convierte en rescatar algo coherente de horas de material sin estructura. Así se escribe uno que funcione.",
    seoTitle: "Guion para vídeo corporativo | Daniel Acero",
    metaDescription:
      "Guion para vídeo corporativo: estructura, errores habituales y cómo escribirlo para que el mensaje llegue limpio desde el rodaje hasta la pantalla.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Antes de encender una cámara, hay una pregunta que siempre hago al cliente: ¿tienes guion? La respuesta más habitual es 'más o menos'. Eso, en la práctica, significa que no lo hay. Y sin guion, el rodaje se alarga, el mensaje se diluye y el montaje se convierte en rescatar algo coherente de horas de material sin estructura.",
      },
      {
        type: "paragraph",
        text: "El guion no es el documento más glamuroso de una producción. Pero es el que más dinero ahorra. Cuando está bien hecho, todo lo demás —casting, locación, equipo técnico— encaja con precisión.",
      },
      {
        type: "image",
        src: "/blog/guion-video-corporativo/hero.webp",
        alt: "Persona revisando guion de vídeo corporativo antes de un rodaje",
        width: 1920,
        height: 1281,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un guion en vídeo corporativo",
      },
      {
        type: "paragraph",
        text: "En vídeo corporativo, el guion no siempre es un texto que alguien lee en cámara. A veces es una estructura narrativa que define qué van a decir los testimonios, qué planos de b-roll necesitas y en qué orden monta el editor. Un guion puede tener forma de texto corrido, de tabla con columnas (imagen / sonido / tiempo), o de simple lista de bloques con instrucciones.",
      },
      {
        type: "paragraph",
        text: "Lo que sí debe tener siempre es un objetivo claro. No 'presentar la empresa'. Sino: hacer que quien vea el vídeo entienda qué problema resuelves y por qué elegirte a ti. Eso es lo que marca el tono, la duración y la estructura.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se escribe bien un guion corporativo",
      },
      {
        type: "heading",
        level: 3,
        text: "Empieza por el mensaje central, no por la historia",
      },
      {
        type: "paragraph",
        text: "Antes de abrir un documento, define una sola frase: qué debe pensar el espectador al terminar de ver el vídeo. No dos frases, una. Si no puedes resumirlo en una línea, el guion va a ser largo, difuso y difícil de editar. A partir de esa frase, todo lo que escribas tiene que empujar hacia ella.",
      },
      {
        type: "heading",
        level: 3,
        text: "Estructura el texto como un guion, no como una redacción",
      },
      {
        type: "paragraph",
        text: "Divide el documento en columnas o bloques: imagen (qué se ve), audio (qué se oye), texto en pantalla (si hay). Añade tiempos orientativos por bloque. Esto permite que el director, el editor y el cliente vean a la vez cómo encaja todo. Un guion sin estructura visual termina siendo una redacción que nadie usa en rodaje.",
      },
      {
        type: "heading",
        level: 3,
        text: "Escribe en voz natural, como se habla",
      },
      {
        type: "paragraph",
        text: "Lee el guion en voz alta. Si suena a texto de presentación de empresa, hay que reescribirlo. La cámara detecta cuando alguien está recitando, no hablando. Las frases cortas funcionan mejor. Los verbos activos funcionan mejor. Cuanto más parecido al habla real, más cómodo estará el portavoz delante de la cámara.",
      },
      {
        type: "image",
        src: "/blog/guion-video-corporativo/intermedia.webp",
        alt: "Libreta de guion sobre mesa de trabajo de un filmmaker",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores habituales en el guion de un vídeo corporativo",
      },
      {
        type: "list",
        items: [
          "Querer meter demasiado en poco tiempo: un minuto de vídeo son unas 150 palabras habladas, no 400.",
          "Escribir en tercera persona sobre la propia empresa ('Empresa X es líder en...'): nadie habla así.",
          "Dejar los mensajes clave para el final: si el espectador abandona a los 20 segundos, ya no los ve.",
          "No indicar los planos de b-roll: el editor no puede imaginar qué quieres si no lo especificas.",
          "Confundir el guion con el briefing: el guion dice qué sucede en pantalla, no qué quiere el cliente de forma genérica.",
          "No validar el guion antes del rodaje: los cambios en plató cuestan diez veces más que los cambios en el documento.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda en hacerse un guion para un vídeo corporativo?",
        answer:
          "Depende del tipo de pieza. Un guion para un vídeo de 60-90 segundos puede estar listo en dos o tres horas si el cliente sabe lo que quiere transmitir. Si hay que hacer preguntas, revisar mensajes clave e iterar, suma un día más. Es el paso donde más compensa invertir tiempo antes de rodar.",
      },
      {
        type: "faq",
        question: "¿El portavoz tiene que memorizar el guion?",
        answer:
          "No necesariamente. Si hay teleprompter, puede leerlo en cámara. Si no, lo mejor es que interiorice los mensajes y hable con naturalidad sobre ellos, no que memorice frases. La diferencia entre alguien que recita y alguien que conversa es inmediata en pantalla.",
      },
      {
        type: "faq",
        question: "¿Un guion sirve también para vídeos con b-roll sin portavoz?",
        answer:
          "Sí. En ese caso tiene menos texto hablado y más indicaciones visuales: qué planos, en qué orden, con qué música, qué texto aparece en pantalla. Sin ese documento, el rodaje se convierte en grabar mucho sin saber exactamente qué montar.",
      },
      {
        type: "faq",
        question: "¿Tiene que aprobarlo el cliente antes del rodaje?",
        answer:
          "Siempre. Es mucho más fácil cambiar una frase en un documento que repetir una toma en locación. Además, la aprobación del guion implica que el cliente ha validado el mensaje, lo que reduce revisiones en postproducción.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto en mente y no sabes por dónde empezar, el guion es el primer paso. Desde la página de contacto puedo revisar tu briefing y ayudarte a definir la estructura antes de que empiece el rodaje.",
      },
    ],
  },
  {
    slug: "preproduccion-video-corporativo",
    title: "Preproducción de un vídeo corporativo: qué hacer antes de llegar al rodaje",
    description:
      "La preproducción determina si el rodaje fluye o se convierte en improvisación cara. Guion, locaciones, plan de rodaje y logística: esto es lo que preparo antes de encender la cámara.",
    publishedAt: "2026-06-30",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "preproducción",
      "vídeo corporativo",
      "rodaje",
      "planificación audiovisual",
      "filmmaker corporativo",
      "Madrid",
    ],
    keyword: "preproducción de un vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Lo que pasa antes del rodaje determina casi todo lo que pasa durante y después. Esto es lo que preparo antes de encender la cámara.",
    seoTitle: "Preproducción de Vídeo Corporativo | Daniel Acero",
    metaDescription:
      "Preproducción de un vídeo corporativo: guion, locaciones, plan de rodaje y logística. Todo lo que hay que tener listo antes de empezar a grabar.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Antes de que llegue el día del rodaje, hay una fase de trabajo que determina si todo va a fluir o va a convertirse en improvisación cara. Esa fase es la preproducción. No es glamurosa. Nadie la fotografía. Pero es donde se gana o se pierde un vídeo.",
      },
      {
        type: "paragraph",
        text: "Trabajo con empresas de tamaños muy distintos y con niveles de experiencia muy distintos en producción audiovisual. Lo que tienen en común los proyectos que mejor salen es siempre lo mismo: alguien se tomó en serio la fase previa al rodaje.",
      },
      {
        type: "image",
        src: "/blog/preproduccion-video-corporativo/hero.webp",
        alt: "Equipo de producción audiovisual revisando planificación antes de un rodaje corporativo",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es la preproducción en un vídeo corporativo",
      },
      {
        type: "paragraph",
        text: "La preproducción abarca todo lo que ocurre entre que el proyecto está aprobado y el primer día de rodaje. Incluye el guion o escaleta, la elección y visita de locaciones, la definición del equipo técnico y humano, la logística del día de rodaje y la coordinación con el cliente y con los interlocutores que van a aparecer en cámara.",
      },
      {
        type: "paragraph",
        text: "No tiene una duración fija. Un vídeo de entrevista simple —una cámara, un interlocutor, una locación— puede tener 3 o 4 horas de preproducción real. Un vídeo de empresa con varios departamentos, múltiples locaciones y portavoces distintos puede necesitar una semana entera de preparación antes de encender ninguna cámara.",
      },
      {
        type: "paragraph",
        text: "El tiempo invertido en esta fase siempre se recupera durante el rodaje. Cada problema que detecto en la visita previa a la locación es una discusión que no interrumpe el rodaje. Cada mensaje clave validado en el guion es una toma que no hay que repetir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se hace bien",
      },
      {
        type: "heading",
        level: 3,
        text: "El guion o escaleta",
      },
      {
        type: "paragraph",
        text: "El primer documento que necesita cualquier producción es uno que diga qué se va a decir y en qué orden. Para entrevistas, esto toma la forma de preguntas preparadas y mensajes clave que el interlocutor debe comunicar. Para vídeos con presentador o con locución en off, necesito un guion completo antes de reservar ninguna fecha.",
      },
      {
        type: "paragraph",
        text: "No hace falta que sea perfecto. Lo que sí hace falta es que esté aprobado por el cliente antes del rodaje. Un cambio en un documento cuesta cero. Un cambio en plató puede costar horas.",
      },
      {
        type: "heading",
        level: 3,
        text: "La visita previa a la localización",
      },
      {
        type: "paragraph",
        text: "Visitar la localización antes del rodaje es casi siempre imprescindible. Necesito saber cómo entra la luz a las horas en que vamos a grabar, qué ruido ambiental hay —tráfico, aire acondicionado, obras cercanas—, qué espacio real existe para colocar cámaras y luces sin que el plano quede forzado, y si hay tomas de corriente accesibles o si hay que llevar baterías.",
      },
      {
        type: "paragraph",
        text: "Para locaciones en Madrid en interiores, también compruebo si el espacio tiene restricciones de uso o si necesito coordinar acceso con el responsable del edificio. Para exteriores, hay que saber si hacen falta permisos, especialmente si el rodaje es en espacio público o en zonas con mucha afluencia.",
      },
      {
        type: "heading",
        level: 3,
        text: "El plan de rodaje",
      },
      {
        type: "paragraph",
        text: "El plan de rodaje es un documento que especifica, hora por hora, qué se graba y en qué orden. Quién tiene que estar disponible a qué hora, cuánto tiempo de preparación hay antes de empezar a grabar, cuándo hay pausa y a qué hora se termina.",
      },
      {
        type: "paragraph",
        text: "Sin ese documento, el rodaje se retrasa. No porque la gente no trabaje, sino porque nadie tiene claro qué viene después. Un plan de rodaje bien hecho es un coordinador silencioso que mantiene el día en marcha sin que nadie tenga que preguntar constantemente qué toca ahora.",
      },
      {
        type: "image",
        src: "/blog/preproduccion-video-corporativo/intermedia.webp",
        alt: "Equipo técnico preparando equipo de cámara antes de un rodaje corporativo",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores habituales en la preproducción",
      },
      {
        type: "list",
        items: [
          "Empezar el rodaje sin guion aprobado: el cliente llega con cambios que podían haberse resuelto en papel.",
          "No visitar la localización antes del rodaje: los problemas de luz, ruido o espacio se descubren cuando ya no hay solución fácil.",
          "No confirmar la disponibilidad de los interlocutores con suficiente antelación: una baja de última hora desbarata el plan entero.",
          "Asumir que la locación tiene buena acústica sin comprobarlo: el eco o el ruido de fondo arruinan el sonido directo.",
          "No dejar margen de preparación al inicio del día: montar luces y hacer pruebas de cámara consume 45-60 minutos que no deben restarse del tiempo de grabación.",
          "Olvidar coordinar los accesos: llegar y descubrir que el espacio no está disponible a la hora acordada es un error de preproducción, no de rodaje.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo de antelación necesito para hacer bien la preproducción?",
        answer:
          "Para la mayoría de vídeos corporativos, con 5-7 días laborables antes del rodaje tengo margen suficiente. Proyectos más complejos —varios días de rodaje, múltiples locaciones, casting externo o animaciones— pueden necesitar dos o tres semanas de preparación.",
      },
      {
        type: "faq",
        question: "¿Incluye la preproducción un coste adicional?",
        answer:
          "Siempre está incluida en el presupuesto del proyecto. No existe el rodaje sin preproducción. El tiempo de preparación forma parte del precio, aunque no siempre aparezca como una partida separada en el presupuesto.",
      },
      {
        type: "faq",
        question: "¿Necesito estar presente en la visita previa a la localización?",
        answer:
          "No es imprescindible, pero ayuda. Si el cliente conoce bien el espacio, puede compartir fotos y vídeos que resuelven buena parte de las preguntas. Cuando hay dudas sobre la luz, el sonido o la distribución del espacio, prefiero hacer la visita en persona.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si la preproducción detecta que la locación no funciona?",
        answer:
          "Se cambia antes del rodaje, no durante. Tengo locaciones de reserva que conozco bien en Madrid y que sé que funcionan para entrevistas corporativas, planos de recurso o presentaciones en cámara. Cambiar la locación en preproducción no tiene coste; cambiarla el día del rodaje sí.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto en marcha y no sabes cómo estructurar la fase previa, puedo ayudarte. Desde la selección de locación hasta la preparación del guion. Escríbeme desde la página de contacto.",
      },
    ],
  },
  {
    slug: "grabacion-exteriores-empresas",
    title: "Grabación en exteriores para empresas: lo que hay que controlar",
    description:
      "Grabar fuera de una oficina puede dar mucho valor a un vídeo corporativo, pero también multiplica las variables. Cómo gestionar luz natural, sonido ambiente, logística y permisos en una producción corporativa.",
    publishedAt: "2026-07-01",
    readingTime: "5 min",
    category: "Guía",
    tags: ["vídeo corporativo", "exteriores", "producción audiovisual", "grabación", "filmmaker", "Madrid"],
    keyword: "grabación en exteriores para empresas",
    intent: "informacional",
    excerpt:
      "Grabar fuera de una oficina puede dar mucho valor a un vídeo corporativo, pero también multiplica las variables. Te explico qué controlar para que nada falle.",
    seoTitle: "Grabación en exteriores para empresas | Daniel Acero",
    metaDescription:
      "Grabación en exteriores para empresas: cómo gestionar luz natural, sonido ambiente, logística y permisos en una producción corporativa en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Hay proyectos que respiran mejor fuera de cuatro paredes. Un testimonio con la ciudad de fondo, una apertura de sede con luz natural, una secuencia de producto en un espacio que dice algo. Grabar en exteriores añade textura a un vídeo corporativo que ningún set de estudio puede imitar.",
      },
      {
        type: "paragraph",
        text: "Pero también multiplica los problemas. El sol se mueve, los aviones no consultan el plan de rodaje, y el permiso que pediste hace tres semanas todavía no ha llegado. Aquí van las variables que controlo antes de que empiece cualquier grabación en calle.",
      },
      {
        type: "image",
        src: "/blog/grabacion-exteriores-empresas/hero.webp",
        alt: "Equipo de filmación preparando una grabación en exteriores para un vídeo corporativo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué grabar en exteriores",
      },
      {
        type: "paragraph",
        text: "Un exterior reconocible ancla la empresa en un contexto real. Cuando una consultora aparece con Madrid de fondo o una empresa de logística con su nave y sus camiones, el espectador procesa información que ningún texto puede transmitir tan rápido: tamaño, ubicación, energía.",
      },
      {
        type: "paragraph",
        text: "Además, la luz natural bien manejada tiene una calidad que cuesta mucho imitar con equipos. Un amanecer suave o una tarde de nubes altas puede darle a una entrevista corporativa un aspecto que justifica todo el trabajo extra.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo controlar las variables",
      },
      {
        type: "heading",
        level: 3,
        text: "La luz natural",
      },
      {
        type: "paragraph",
        text: "La hora dorada no es un recurso opcional: es la única ventana donde el sol trabaja a tu favor. Entre las 7 y las 9 de la mañana en verano, o entre las 17 y las 19 en primavera, la luz es lateral, suave y muy cálida. Fuera de esas ventanas, el sol directo aplana las caras y crea sombras duras que no tienen solución en postproducción. Uso un difusor de 120 cm para suavizar cuando no hay más remedio, pero si puedo escoger, prefiero mover la hora. Para planos de recurso busco sombra de edificio o nublado homogéneo. El cielo azul claro con sol cenital es el escenario más difícil.",
      },
      {
        type: "heading",
        level: 3,
        text: "El sonido ambiente",
      },
      {
        type: "paragraph",
        text: "El ruido de calle es el mayor enemigo de un vídeo corporativo en exterior. Una entrevista con tráfico de fondo es inutilizable, da igual lo bueno que sea el micrófono. Los pasos que funcionan: micrófono de solapa con windscreen, grabación paralela con H6 como backup, y scouting de audio previo donde identifico fuentes de ruido fijas —obras, terrazas, líneas de metro en superficie—. Si hay viento por encima de 20 km/h, la cita exterior cae. Sin excepción. En ese caso muevo la entrevista a un espacio con luz controlada o replanifico.",
      },
      {
        type: "heading",
        level: 3,
        text: "La logística del espacio",
      },
      {
        type: "paragraph",
        text: "Los permisos en Madrid se tramitan a través del Ayuntamiento y pueden tardar entre 5 y 15 días hábiles dependiendo del tipo de grabación. Para uso de vía pública con trípode y equipo de más de una persona, hay que pedirlo. Para espacio privado —sede empresarial, parking, azotea— basta con la autorización del propietario por escrito. El día del rodaje compruebo: acceso para la furgoneta, punto de descarga, distancia a corriente, baños para el equipo y sombra para los intervalos.",
      },
      {
        type: "image",
        src: "/blog/grabacion-exteriores-empresas/mid.webp",
        alt: "Silueta de cámara en exteriores durante una producción audiovisual",
        width: 1920,
        height: 1272,
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo tiene sentido (y cuándo no)",
      },
      {
        type: "list",
        items: [
          "Tiene sentido cuando la empresa quiere mostrar sus instalaciones, nave o entorno de trabajo real.",
          "Funciona bien para vídeos de apertura de sede, presentaciones de proyecto o inauguraciones.",
          "Vale la pena cuando la imagen de marca del cliente tiene una dimensión urbana o de movilidad.",
          "Pierde sentido si el presupuesto no incluye tiempo de scouting y gestión de permisos.",
          "En vídeos de formación interna o comunicación legal, los exteriores añaden coste sin añadir valor.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto cuesta añadir un día de exterior a un rodaje corporativo?",
        answer:
          "Depende del tipo de exterior. Una terraza de la propia empresa no añade coste. Un espacio público en Madrid con equipo de más de una persona requiere permiso, con una tasa municipal de entre 50 y 150 euros dependiendo del uso. Un exterior emblemático con gestión de seguridad y cierre parcial puede añadir entre 500 y 1.500 euros al presupuesto de producción.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si llueve el día del rodaje?",
        answer:
          "Tengo siempre un plan B. Antes del rodaje acuerdo con el cliente una ventana de reprogramación de 3 a 5 días hábiles sin coste adicional. Si la lluvia es leve y el plano no incluye personas, a veces se puede trabajar. Para rodajes de un solo día sin margen de reprogramación, preparo un interior alternativo con luz artificial que dé un resultado aceptable.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar en exteriores en invierno en Madrid?",
        answer:
          "Sí, con condiciones. El invierno en Madrid tiene luz baja —el sol ronda los 25-30 grados sobre el horizonte— que puede ser muy fotogénica entre las 11 y las 14 horas. El problema es la temperatura: una entrevista exterior a 4 grados durante más de 20 minutos tiene límites obvios para el entrevistado. Para exteriores de invierno prefiero planos de recurso y apertura, no entrevistas largas.",
      },
      {
        type: "faq",
        question: "¿Necesito permiso para grabar con drone en exterior urbano?",
        answer:
          "Sí, siempre. En zonas urbanas de Madrid el uso de drone para filmación requiere coordinación con la Agencia Estatal de Seguridad Aérea y autorización del Ayuntamiento. El proceso tarda entre 2 y 4 semanas. Además, hay zonas de exclusión permanente cerca de Barajas y el centro histórico. Lo contrato con un operador certificado que gestiona todo el papeleo.",
      },
      {
        type: "paragraph",
        text: "Si estás planificando un vídeo corporativo que incluya exteriores en Madrid y quieres saber si el espacio que tienes en mente es viable, escríbeme desde la página de /contacto.",
      },
    ],
  },
  {
    slug: "microfono-solapa-vs-boom-entrevistas-corporativas",
    title: "Micrófono de solapa o boom: cuál usar en entrevistas corporativas",
    description:
      "Comparo micrófono de solapa y micrófono de boom en entrevistas corporativas: cómo funciona cada uno, cuándo falla y qué uso yo según el rodaje.",
    publishedAt: "2026-07-02",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "sonido en vídeo corporativo",
      "micrófono de solapa",
      "boom microphone",
      "entrevistas corporativas",
      "grabación de audio",
      "producción audiovisual",
    ],
    keyword: "micrófono de solapa vs boom en entrevistas corporativas",
    intent: "informacional",
    excerpt:
      "Solapa o boom en una entrevista corporativa: no hay opción mejor en abstracto, depende del movimiento, el ruido de la ropa y el tiempo de montaje que tengas.",
    seoTitle: "Micrófono de solapa vs boom en entrevistas | Daniel Acero",
    metaDescription:
      "Micrófono de solapa o boom en entrevistas corporativas: cuándo uso cada uno y qué evita fallos de audio en tu vídeo de empresa.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cada vez que preparo una entrevista corporativa me hacen la misma pregunta: ¿solapa o boom? La respuesta corta es que depende del entorno, del tiempo que tengo para montar y de cuánto se mueve la persona que entrevisto. La respuesta larga es este artículo.",
      },
      {
        type: "paragraph",
        text: "Llevo años grabando entrevistas para empresas en Madrid y he usado ambos sistemas en casi todos los escenarios posibles: salas de reuniones silenciosas, oficinas abiertas con aire acondicionado de fondo, exteriores con tráfico y platós improvisados en un almacén. Cada situación pide una solución distinta.",
      },
      {
        type: "image",
        src: "/blog/microfono-solapa-vs-boom-entrevistas-corporativas/hero.webp",
        alt: "Técnico de sonido preparando una entrevista corporativa en plató con cámara y micrófono",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es cada micrófono y para qué sirve" },
      {
        type: "paragraph",
        text: "El micrófono de solapa, o lavalier, es pequeño y se sujeta a la ropa cerca del pecho. Capta la voz de cerca, aísla bien el ruido ambiente y es prácticamente invisible en plano una vez colocado bien. Lo uso con petaca inalámbrica cuando la persona se mueve o necesita libertad de manos.",
      },
      {
        type: "paragraph",
        text: "El boom es un micrófono direccional montado en una pértiga que un técnico sostiene fuera de plano, apuntando hacia quien habla. Capta un sonido más natural y con más cuerpo porque no está pegado a la ropa, pero exige a alguien dedicado solo a sujetarlo durante toda la grabación.",
      },
      {
        type: "paragraph",
        text: "Ninguno es mejor en abstracto. La pregunta correcta no es cuál suena mejor en general, sino cuál resuelve mejor la situación que tengo delante.",
      },
      { type: "heading", level: 2, text: "Cómo elijo en un rodaje corporativo" },
      { type: "heading", level: 3, text: "Cuando el entrevistado se mueve o gesticula mucho" },
      {
        type: "paragraph",
        text: "Si la persona camina, gira la cabeza con frecuencia o gesticula con las manos cerca del pecho, el boom pierde consistencia: el técnico tiene que perseguir el movimiento y es fácil que el sonido varíe de volumen. Con solapa, el micrófono se mueve con la persona y el nivel se mantiene estable de principio a fin. Para testimoniales de pie o entrevistas caminando por una oficina, uso solapa casi siempre.",
      },
      { type: "heading", level: 3, text: "Cuando el entorno tiene ruido de roce con la ropa" },
      {
        type: "paragraph",
        text: "El problema clásico de la solapa es el roce: una bufanda, una corbata que se mueve o una chaqueta con textura áspera generan un ruido seco que se cuela en la pista de audio y es complicado de limpiar en posproducción. En esos casos prefiero el boom, que no toca al entrevistado y evita el roce por completo. También es mi opción cuando hay dos personas hablando muy cerca y no quiero microfonar a ambas por separado.",
      },
      { type: "heading", level: 3, text: "Cuando el tiempo de montaje es corto" },
      {
        type: "paragraph",
        text: "En rodajes con agenda apretada, donde entro y salgo de varias salas en una mañana, la solapa gana por rapidez: colocarla lleva menos de dos minutos y no necesito a nadie sujetando la pértiga. El boom exige un técnico dedicado y más tiempo de prueba de sonido antes de cada toma. Si voy solo con una segunda persona en cámara, la solapa es casi obligatoria.",
      },
      {
        type: "image",
        src: "/blog/microfono-solapa-vs-boom-entrevistas-corporativas/mid.webp",
        alt: "Equipo de grabación de vídeo corporativo montando cámara y sonido en set",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores que veo con frecuencia" },
      {
        type: "list",
        items: [
          "Colocar la solapa demasiado cerca de la barbilla: capta más respiración y menos voz natural. El punto correcto está a la altura del esternón.",
          "No probar el roce de la ropa antes de grabar: dos minutos de prueba con movimiento real evitan horas de limpieza de audio después.",
          "Usar boom sin monitorizar con auriculares: sin escucha en directo es fácil no darse cuenta de que el ángulo captó eco de la sala.",
          "Mezclar solapa inalámbrica con interferencias de wifi corporativo sin comprobar el canal antes: en oficinas con mucha red, cambia de frecuencia antes de grabar.",
          "No llevar un grabador de respaldo: si la petaca falla a mitad de entrevista, un grabador tipo Zoom H5 grabando en paralelo salva la toma.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo usar los dos micrófonos a la vez en la misma entrevista?",
        answer:
          "Sí, y en producciones importantes lo recomiendo. Grabo solapa como pista principal y boom como respaldo en una pista separada. Si la solapa falla o capta roce, tengo el boom para sustituir esa parte en la edición.",
      },
      {
        type: "faq",
        question: "¿Qué marca de solapa inalámbrica uso normalmente?",
        answer:
          "Trabajo con el sistema Rode Wireless Pro para la mayoría de entrevistas corporativas. Es compacto, tiene grabación interna de respaldo y aguanta bien un día completo de rodaje con baterías de sobra.",
      },
      {
        type: "faq",
        question: "¿El boom necesita una persona dedicada siempre?",
        answer:
          "En la práctica, sí. Aunque existen soportes fijos tipo jirafa para entornos controlados, en un rodaje corporativo real necesito a alguien siguiendo el movimiento del entrevistado, y esa persona no puede hacer otra cosa a la vez.",
      },
      {
        type: "faq",
        question: "¿Se nota la diferencia de calidad en el vídeo final?",
        answer:
          "Un espectador normal no distingue técnicamente cuál se usó si el audio está bien grabado y limpio. Lo que sí nota, sin saber por qué, es cuando el audio tiene roces, cambios de volumen o eco. Ahí es donde se paga la elección equivocada.",
      },
      {
        type: "paragraph",
        text: "Si estás preparando una entrevista corporativa y no sabes qué configuración de sonido necesitas para tu espacio, cuéntamelo desde la página de contacto. Con dos datos —número de personas y tipo de sala— te puedo decir qué equipo llevar antes del día del rodaje.",
      },
    ],
  },
  {
    slug: "video-employer-branding",
    title: "Vídeo de employer branding: qué es y cómo lo grabo bien",
    description:
      "Qué es un vídeo de employer branding, para qué sirve en procesos de selección y cómo lo grabo para que se vea creíble y no un anuncio corporativo.",
    publishedAt: "2026-07-03",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "employer branding",
      "vídeo corporativo",
      "recursos humanos",
      "reclutamiento",
      "vídeo institucional",
      "contenido para empresas",
    ],
    keyword: "vídeo de employer branding",
    intent: "informacional",
    excerpt:
      "Qué es un vídeo de employer branding, por qué cada vez más empresas en Madrid lo piden y cómo lo planteo para que resulte creíble y no publicidad.",
    seoTitle: "Vídeo de employer branding: cómo grabarlo | Daniel Acero",
    metaDescription:
      "Vídeo de employer branding: qué es, para qué sirve y cómo lo grabo para que una empresa atraiga talento de forma creíble.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cada vez más empresas en Madrid me piden un vídeo de employer branding sin saber muy bien cómo llamarlo. Me lo describen de otra forma: queremos algo para atraer gente que quiera trabajar aquí, necesitamos mostrar cómo es el equipo por dentro, la web de empleo se ve muy fría. Eso es justo lo que resuelve este tipo de vídeo.",
      },
      {
        type: "paragraph",
        text: "No es un vídeo corporativo institucional ni un testimonial de cliente. Va dirigido a un público distinto: candidatos, no clientes. Y eso cambia el tono, la duración y hasta lo que se enseña. Aquí no hablo de resultados de negocio, hablo de personas y de cómo es el día a día real dentro de la empresa.",
      },
      {
        type: "image",
        src: "/blog/video-employer-branding/hero.webp",
        alt: "Reunión de equipo en oficina para grabación de vídeo de employer branding",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un vídeo de employer branding y por qué importa" },
      {
        type: "paragraph",
        text: "Un vídeo de employer branding muestra cómo es trabajar en una empresa desde dentro. No vende un producto ni un servicio, vende la experiencia de formar parte del equipo. Habla de cultura, de espacio de trabajo, de las personas que ya están ahí y de por qué se quedan.",
      },
      {
        type: "paragraph",
        text: "Lo piden sobre todo empresas que compiten por perfiles técnicos escasos: desarrolladores, ingenieros, perfiles de datos. Cuando el salario y las condiciones son parecidos entre varias ofertas, lo que suele inclinar la decisión de un candidato es la impresión que se lleva de la cultura y el equipo. Un vídeo bien hecho comunica eso en 90 segundos mejor que cualquier texto en una oferta de empleo.",
      },
      {
        type: "paragraph",
        text: "También lo veo cada vez más en departamentos de RRHH que quieren reducir la rotación temprana. Un candidato que ve con honestidad cómo es el día a día antes de aceptar la oferta llega con expectativas más realistas, y eso reduce las bajas en los primeros meses de contrato, que suelen ser las más caras de gestionar para cualquier equipo de selección.",
      },
      { type: "heading", level: 2, text: "Cómo lo grabo bien" },
      { type: "heading", level: 3, text: "Elegir a quién poner delante de cámara" },
      {
        type: "paragraph",
        text: "No elijo a la persona con el cargo más alto, elijo a la que mejor cuenta su experiencia real. Suelo grabar a dos o tres perfiles distintos: alguien que lleva poco tiempo en la empresa, para hablar de la incorporación, y alguien con más antigüedad, para hablar de evolución interna. Nunca uso un guion cerrado, sí preguntas guía para que la respuesta salga natural y no suene ensayada.",
      },
      { type: "heading", level: 3, text: "Grabar el día a día real, no un guion artificial" },
      {
        type: "paragraph",
        text: "Evito las escenas impostadas de reunión sonriendo a cámara. Prefiero grabar en plano detalle mientras trabajan de verdad: una pizarra con notas, una conversación real entre dos compañeros, el café de media mañana. Ese material de apoyo, el b-roll, es el que hace creíble el vídeo. Sin él, cualquier testimonial suena a publicidad, por bien iluminado que esté.",
      },
      { type: "heading", level: 3, text: "Dónde y cómo se usa después" },
      {
        type: "paragraph",
        text: "La pieza final casi nunca vive sola. La trocean en clips cortos para LinkedIn, para la página de empleo y para procesos de selección concretos, donde un reclutador la envía directamente al candidato en la fase final antes de una entrevista. Por eso entrego siempre un máster largo de 2 a 3 minutos y una batería de cortes verticales de 60 a 90 segundos listos para redes, sin que haya que volver a montar nada después.",
      },
      {
        type: "image",
        src: "/blog/video-employer-branding/mid.webp",
        alt: "Cámara de vídeo profesional preparada para grabar una entrevista de employer branding",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Guionizar demasiado las respuestas: se nota y pierde toda la credibilidad que se busca.",
          "Grabar solo a directivos: el candidato quiere ver a alguien en un puesto parecido al suyo, no solo al CEO.",
          "No mostrar el espacio físico real: si luego la oficina no se parece al vídeo, genera el efecto contrario.",
          "Hacerlo demasiado largo: para redes y procesos de selección funciona mejor entre 60 y 120 segundos por pieza.",
          "Olvidar los subtítulos: la mayoría lo ve sin sonido en LinkedIn, y sin subtítulos se pierde el mensaje.",
          "No renovarlo nunca: un vídeo de hace tres años con gente que ya no trabaja ahí resta credibilidad en vez de sumarla.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto dura un vídeo de employer branding?",
        answer:
          "La pieza principal suele durar entre 2 y 3 minutos para la web de empleo. Para redes, corto piezas de 60 a 90 segundos centradas en un solo mensaje: incorporación, cultura o un testimonio concreto.",
      },
      {
        type: "faq",
        question: "¿Cuántas personas necesito grabar?",
        answer:
          "Con 3 o 4 testimonios cortos suele ser suficiente para cubrir varios perfiles y departamentos sin que el vídeo se alargue. Prefiero calidad de respuesta a cantidad de gente.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar en una sola jornada?",
        answer:
          "Sí, normalmente lo resuelvo en un día: entrevistas por la mañana y b-roll del espacio y del equipo trabajando por la tarde. Si la empresa tiene varias sedes, sumo medio día más por ubicación.",
      },
      {
        type: "faq",
        question: "¿Necesito un guion cerrado antes de grabar?",
        answer:
          "No, y de hecho lo desaconsejo. Preparo preguntas guía con RRHH antes del rodaje, pero dejo que cada persona responda con sus propias palabras. Un guion memorizado se nota casi siempre.",
      },
      {
        type: "paragraph",
        text: "Si tu empresa está compitiendo por talento y la oferta de empleo no está contando la parte humana del equipo, escríbeme desde /contacto y vemos qué formato encaja con vuestro proceso de selección y con el tiempo que tenéis disponible para grabar.",
      },
    ],
  },
  {
    slug: "dron-en-video-corporativo",
    title: "Dron en vídeo corporativo: cuándo tiene sentido usarlo",
    description:
      "Cuándo un plano de dron aporta de verdad a un vídeo corporativo, cuándo no compensa el gasto y qué permisos hacen falta para volar en Madrid.",
    publishedAt: "2026-07-06",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "dron",
      "vídeo corporativo",
      "grabación aérea",
      "producción audiovisual",
      "equipo de grabación",
      "Madrid",
    ],
    keyword: "dron en vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Cuándo un plano de dron aporta escala real a un vídeo corporativo, cuándo es mejor gastar ese presupuesto en otra cosa y qué permisos necesito para volar cerca de una empresa en Madrid.",
    seoTitle: "Dron en vídeo corporativo: cuándo usarlo | Daniel Acero",
    metaDescription:
      "Dron en vídeo corporativo: cuándo aporta escala real a una grabación de empresa, cuándo no compensa el gasto y qué permisos hacen falta en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Me piden dron en casi la mitad de los presupuestos de vídeo corporativo que preparo, aunque luego no siempre acabo usándolo. Un par de planos aéreos bien colocados elevan la producción, pero meterlo sin criterio suma coste y a veces resta en vez de sumar.",
      },
      {
        type: "paragraph",
        text: "En esta guía cuento cuándo un dron aporta de verdad a un vídeo corporativo, cuándo es mejor invertir ese presupuesto en otra cosa y qué necesito legalmente para volar cerca de una empresa o una nave industrial en Madrid.",
      },
      {
        type: "image",
        src: "/blog/dron-en-video-corporativo/hero.webp",
        alt: "Dron profesional sobrevolando una zona industrial durante una grabación corporativa",
        width: 1920,
        height: 1279,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué aporta un plano de dron y por qué importa" },
      {
        type: "paragraph",
        text: "Un plano de dron aporta escala. Muestra el tamaño real de unas instalaciones, la ubicación de una nave respecto a su entorno o el volumen de un evento cuando la cámara en mano no llega a transmitirlo. Es el recurso más rápido para dar contexto a algo que en tierra se ve fragmentado en planos sueltos.",
      },
      {
        type: "paragraph",
        text: "También funciona como transición. Un plano aéreo de entrada o de cierre marca que empieza o termina un bloque, sin necesidad de un rótulo ni una animación de por medio. Lo uso mucho para abrir vídeos institucionales de empresas con sede propia o para cerrar aftermovies de eventos al aire libre.",
      },
      {
        type: "paragraph",
        text: "Pero no es un recurso gratuito. Implica piloto certificado, seguro de responsabilidad civil específico y, según la zona, autorización previa del control de tránsito aéreo o del ayuntamiento. En la mayoría de rodajes en Madrid eso son entre 200 y 500 euros adicionales, según la complejidad del espacio aéreo de la zona.",
      },
      { type: "heading", level: 2, text: "Cómo lo integro bien en la producción" },
      { type: "heading", level: 3, text: "Elegir el momento del día" },
      {
        type: "paragraph",
        text: "Vuelo casi siempre a primera hora de la mañana o al final de la tarde. La luz rasante da relieve a fachadas y naves que a mediodía se ven planas y sin volumen, y a esas horas hay menos tráfico aéreo y menos gente alrededor si el rodaje es en un espacio exterior transitado.",
      },
      { type: "heading", level: 3, text: "Planificar la ruta antes de despegar" },
      {
        type: "paragraph",
        text: "Reviso el espacio aéreo de la zona antes de cada rodaje: cercanía a aeropuertos, hospitales o zonas restringidas. Buena parte de los polígonos industriales de Madrid caen dentro de restricciones por proximidad a Barajas, así que confirmo el permiso con semanas de antelación, nunca el mismo día del rodaje.",
      },
      { type: "heading", level: 3, text: "Combinar el plano aéreo con planos en tierra" },
      {
        type: "paragraph",
        text: "Nunca dejo el dron como único recurso visual. Grabo siempre planos en tierra del mismo espacio o evento y edito el aéreo como puntuación, dos o tres segundos como mucho salvo que sea el recurso central de la pieza. Un vídeo corporativo entero a base de plano de dron cansa y no cuenta nada de las personas que trabajan ahí.",
      },
      {
        type: "image",
        src: "/blog/dron-en-video-corporativo/mid.webp",
        alt: "Piloto manejando los mandos de un dron durante una grabación corporativa al aire libre",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido y cuándo no" },
      {
        type: "list",
        items: [
          "Instalaciones grandes o naves industriales: el dron muestra la escala que ningún plano en tierra transmite.",
          "Eventos al aire libre con mucho público: un plano cenital cuenta el volumen de gente en dos segundos.",
          "Oficinas pequeñas o espacios interiores: aquí el dron no aporta nada, mejor invertir ese presupuesto en más planos de personas.",
          "Zonas urbanas restringidas sin margen para tramitar permiso: no vale la pena forzarlo, el rodaje se puede retrasar semanas.",
          "Presupuestos ajustados con una sola jornada de grabación: prefiero cubrir bien las entrevistas antes que sumar dron y quedarme corto en el resto.",
          "Días de viento fuerte o lluvia: pospongo el vuelo, un plano aéreo tembloroso se nota más que su ausencia.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito permiso para grabar con dron en Madrid?",
        answer:
          "Sí, en la mayoría de casos. Toda la zona cercana a Barajas y buena parte del entorno urbano requiere autorización previa. Lo tramito con antelación, no se puede improvisar el mismo día del rodaje.",
      },
      {
        type: "faq",
        question: "¿Cuánto cuesta añadir dron a un vídeo corporativo?",
        answer:
          "Entre 200 y 500 euros adicionales según la complejidad de la zona y si hace falta permiso especial. Incluye piloto certificado, seguro específico y el tiempo de gestión del permiso.",
      },
      {
        type: "faq",
        question: "¿Cuánto se tarda en conseguir el permiso de vuelo?",
        answer:
          "En zonas sin restricción especial, un par de días. Cerca de aeropuertos o en el centro de Madrid puede llevar entre una y tres semanas, así que lo pido en cuanto se confirma la fecha de rodaje.",
      },
      {
        type: "faq",
        question: "¿Puedo usar un dron de aficionado para el vídeo?",
        answer:
          "No lo recomiendo para uso comercial. Hace falta licencia de piloto, seguro de responsabilidad civil y un dron con los certificados adecuados. Un vuelo sin esos papeles puede acabar en sanción para la empresa que lo contrata.",
      },
      {
        type: "paragraph",
        text: "Si tu próximo vídeo corporativo tiene una nave, una sede grande o un evento al aire libre y no sabes si el dron merece la pena, escríbeme desde /contacto y te digo con qué presupuesto encaja y qué permisos hacen falta antes de la fecha de grabación.",
      },
    ],
  },
  {
    slug: "como-grabar-mesa-redonda-corporativa",
    title: "Cómo grabar una mesa redonda o panel corporativo",
    description:
      "Cómo planteo cámaras, audio y luz para grabar una mesa redonda o panel con varios ponentes en un evento corporativo, sin perder ninguna intervención.",
    publishedAt: "2026-07-07",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "mesa redonda",
      "paneles corporativos",
      "grabación multicámara",
      "eventos corporativos",
      "producción audiovisual",
      "Madrid",
    ],
    keyword: "cómo grabar una mesa redonda corporativa",
    intent: "informacional",
    excerpt:
      "Grabar una mesa redonda con varios ponentes exige otra lógica que una entrevista individual. Cámaras, audio y coordinación del equipo cambian por completo.",
    seoTitle: "Cómo grabar una mesa redonda corporativa | Daniel Acero",
    metaDescription:
      "Cómo grabar una mesa redonda corporativa: cámaras, audio y luz para paneles con varios ponentes. Guía práctica desde mi experiencia en Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Una mesa redonda no es una entrevista con más gente delante. Cambia el número de cámaras que necesito, el audio se complica con cada ponente que se suma y el ritmo de la conversación exige un montaje distinto al de una entrevista a una sola persona.",
      },
      {
        type: "paragraph",
        text: "En esta guía cuento cómo planteo la grabación de un panel o mesa redonda corporativa con tres o cuatro ponentes: qué cámaras uso, cómo resuelvo el audio sin que se pierda ninguna intervención, cómo coordino a los operadores de cámara durante la sesión y qué errores veo repetirse cuando alguien intenta grabarlo con el mismo esquema que una entrevista individual.",
      },
      {
        type: "image",
        src: "/blog/como-grabar-mesa-redonda-corporativa/hero.webp",
        alt: "Público y ponentes durante una mesa redonda en un evento corporativo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué cambia frente a una entrevista individual" },
      {
        type: "paragraph",
        text: "Con un solo entrevistado controlo el encuadre, la luz y el audio de una persona. En una mesa redonda multiplico cada uno de esos elementos por el número de ponentes, y encima nadie habla en el orden que yo querría. Alguien interrumpe, otro se ríe fuera de plano, y el moderador cede la palabra sin avisarme.",
      },
      {
        type: "paragraph",
        text: "El resultado en bruto es mucho más difícil de montar que una entrevista: no hay un guion de preguntas cerrado, las intervenciones se solapan y necesito material de recurso (planos generales, reacciones, manos, público) para tapar los cortes de la conversación real.",
      },
      {
        type: "paragraph",
        text: "Por eso una mesa redonda me lleva casi el doble de cámaras y de tiempo de montaje que una entrevista a un único ponente, aunque dure lo mismo en pantalla. Una sesión de 30 minutos en directo puede suponerme un día entero de montaje si el número de ponentes sube de tres.",
      },
      { type: "heading", level: 2, text: "Cómo la planteo bien" },
      { type: "heading", level: 3, text: "Cámaras y encuadres para varios ponentes" },
      {
        type: "paragraph",
        text: "Uso mínimo tres cámaras: un plano general que cubre a todos los ponentes y sirve de plano de seguridad, y dos cámaras que se reparten los planos individuales o de dos personas según quién habla. Si el presupuesto da para una cuarta, la pongo detrás del público mirando hacia el escenario, para tener también la reacción de la sala.",
      },
      { type: "heading", level: 3, text: "Audio: un micro por persona, sin excepciones" },
      {
        type: "paragraph",
        text: "Cada ponente lleva su propio micrófono de solapa, conectado a un receptor independiente. Nunca comparto un solo micro de mesa entre varias personas: en cuanto dos hablan a la vez o alguien gira la cabeza, se pierde inteligibilidad y en postproducción no hay forma de arreglarlo. Grabo cada canal por separado y mezclo después.",
      },
      { type: "heading", level: 3, text: "Iluminación y disposición de la mesa" },
      {
        type: "paragraph",
        text: "Coloco a los ponentes en semicírculo abierto hacia las cámaras, nunca en línea recta, porque en línea recta las cámaras laterales solo ven perfiles. La luz principal viene de frente y algo elevada, igual para todos los puestos, así no hay un ponente mejor iluminado que el resto de la mesa.",
      },
      {
        type: "image",
        src: "/blog/como-grabar-mesa-redonda-corporativa/mid.webp",
        alt: "Equipo técnico preparando cámaras e iluminación antes de una mesa redonda corporativa",
        width: 1920,
        height: 1282,
      },
      { type: "heading", level: 3, text: "Comunicación con los operadores de cámara" },
      {
        type: "paragraph",
        text: "Con tres o cuatro cámaras operando a la vez, uso intercomunicador para indicar a cada operador quién tiene que abrir el plano en cada momento. Sin esa coordinación, las cámaras acaban enfocando al mismo ponente al mismo tiempo y me quedo sin planos de reacción cuando los necesito en el montaje.",
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Un solo micro de mesa para varios ponentes: la solución más barata y la que peor suena en postproducción.",
          "Cámaras fijas en plano general sin ningún primer plano: la mesa redonda se vuelve plana y monótona al montarla.",
          "No grabar planos de recurso del público o de la sala: sin ellos no hay dónde cortar cuando dos personas hablan a la vez.",
          "Sentar a los ponentes en línea recta: las cámaras laterales pierden el rostro de la mitad de la mesa.",
          "No asignar un técnico de sonido en directo: con cuatro micros abiertos a la vez, alguien tiene que vigilar niveles durante toda la sesión.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas cámaras necesito para grabar una mesa redonda?",
        answer:
          "Con tres cubro lo esencial: un plano general y dos que se reparten los primeros planos. Con cuatro ponentes o más, prefiero sumar una cuarta cámara para no perder reacciones.",
      },
      {
        type: "faq",
        question: "¿Puedo grabar una mesa redonda con un solo micrófono central?",
        answer:
          "Se puede, pero no lo recomiendo para uso profesional. En cuanto dos ponentes hablan a la vez la pista se vuelve inutilizable. Un micro de solapa por persona resuelve el problema desde el origen.",
      },
      {
        type: "faq",
        question: "¿Cuánto dura el montaje de una mesa redonda frente a una entrevista?",
        answer:
          "En mi experiencia, casi el doble. Sincronizar varias cámaras y canales de audio, y cubrir los solapes de la conversación con planos de recurso, lleva más tiempo que montar una entrevista con guion cerrado.",
      },
      {
        type: "faq",
        question: "¿Cuánto dura normalmente una mesa redonda corporativa?",
        answer:
          "Entre 30 y 45 minutos suele ser lo habitual en un evento de empresa. A partir de ahí la atención del público baja y conviene cortar para el vídeo final aunque la sesión en directo se alargue más.",
      },
      {
        type: "paragraph",
        text: "Si tu próximo evento incluye una mesa redonda o un panel con varios ponentes y no sabes cuántas cámaras o micros necesitas, escríbeme desde /contacto y te digo qué equipo encaja con el número de ponentes y el espacio donde vais a grabar.",
      },
    ],
  },
  {
    slug: "video-corporativo-ferias-stands",
    title: "Vídeo corporativo para ferias y stands: qué grabar y cómo",
    description:
      "Cómo planteo la grabación de vídeo corporativo en una feria o un stand: qué planos priorizo, cómo resuelvo el audio con ruido de fondo y qué equipo llevo.",
    publishedAt: "2026-07-08",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "ferias y eventos",
      "vídeo corporativo",
      "marketing B2B",
      "producción audiovisual",
      "Madrid",
    ],
    keyword: "vídeo corporativo para ferias y stands",
    intent: "informacional",
    excerpt:
      "Grabar en una feria o un stand corporativo exige otro planteamiento que grabar en la oficina: ruido, gente pasando por delante de cámara y una sola oportunidad para cazar cada momento.",
    seoTitle: "Vídeo corporativo para ferias y stands | Daniel Acero",
    metaDescription:
      "Vídeo corporativo para ferias y stands: qué planos priorizar, cómo resolver el audio con ruido y qué equipo llevar. Guía práctica desde Madrid.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Grabar en una feria o un stand corporativo tiene poco que ver con grabar en la oficina. Hay ruido ambiente, luz cambiante, gente pasando por delante de cámara todo el rato y un cliente que quiere resultados aunque el espacio no esté pensado para grabar.",
      },
      {
        type: "paragraph",
        text: "En esta guía cuento cómo planteo la grabación de vídeo corporativo en una feria o un stand: qué planos priorizo, cómo resuelvo el audio en un pabellón lleno de gente, qué equipo llevo encima para moverme rápido y qué errores veo repetirse cuando alguien intenta grabar una feria con el mismo esquema que una entrevista en estudio.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-ferias-stands/hero.webp",
        alt: "Stand corporativo en un pabellón de feria con visitantes recorriendo los pasillos",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué grabar en una feria y por qué importa" },
      {
        type: "paragraph",
        text: "Una feria da contenido que no consigo en ningún otro sitio: el stand montado, el flujo de visitantes, las conversaciones reales con clientes potenciales y el ambiente del pabellón completo. Ese material sirve para el aftermovie del evento, pero también para vídeos de venta y para redes sociales durante meses después de que la feria haya terminado.",
      },
      {
        type: "paragraph",
        text: "El problema es que la feria dura uno o dos días y no hay margen para repetir una toma. Si se me escapa el momento en que el director general cierra una conversación en el stand, no vuelve a pasar. Por eso planifico antes de llegar qué momentos quiero cazar sí o sí y cuáles son secundarios, y reparto mi atención en función de esa lista.",
      },
      {
        type: "paragraph",
        text: "También reservo tiempo fuera del horario de apertura del pabellón, normalmente la primera media hora o la última, para grabar planos limpios del stand sin público delante. Esos planos de recurso salvan el montaje cuando el resto del material está lleno de gente pasando por delante de cámara y no hay ni un solo plano despejado del diseño del stand.",
      },
      { type: "heading", level: 2, text: "Cómo lo planteo bien" },
      { type: "heading", level: 3, text: "Priorizar los planos que no se repiten" },
      {
        type: "paragraph",
        text: "Antes de entrar al pabellón tengo una lista corta con los momentos imprescindibles: la apertura del stand, la primera demo de producto, cualquier ponencia o presentación programada y las conversaciones con los clientes clave que el equipo comercial ya tiene agendadas. Todo lo demás lo grabo si hay tiempo, pero esa lista corta va primero y la reviso con el cliente antes de llegar al recinto.",
      },
      { type: "heading", level: 3, text: "Audio en un pabellón lleno de ruido" },
      {
        type: "paragraph",
        text: "El sonido ambiente de una feria tapa cualquier micrófono de cámara. Uso micrófono de solapa inalámbrico en la persona que habla y, si hay una demo con altavoces, conecto también una salida de línea desde la mesa de sonido del stand cuando existe. Sin eso, el audio de las conversaciones se pierde entre la música de fondo y el ruido de los stands vecinos.",
      },
      { type: "heading", level: 3, text: "Cámara y movimiento en espacios reducidos" },
      {
        type: "paragraph",
        text: "En un stand no hay sitio para trípodes grandes ni para moverme con calma. Trabajo con cámara al hombro o con un gimbal ligero para poder seguir a la gente entre los pasillos sin chocar con nadie. Llevo una sola cámara compacta tipo Sony A7 con un objetivo versátil y baterías y tarjetas de sobra, porque cambiar de óptica o parar a recargar en mitad de la feria no es una opción.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-ferias-stands/mid.webp",
        alt: "Visitantes caminando entre pasillos de un pabellón de feria durante un evento corporativo",
        width: 1920,
        height: 1064,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Grabar solo con el pabellón lleno de gente y sin planos limpios del stand, así el montaje no tiene dónde respirar.",
          "Confiar en el micrófono de la cámara para las conversaciones en el stand: se pierde entre el ruido de fondo.",
          "No agendar con el equipo comercial qué conversaciones o demos van a pasar y a qué hora, y perderse el momento clave.",
          "Llevar demasiado equipo pesado a un espacio donde apenas hay sitio para moverse.",
          "No reservar tiempo antes de la apertura para grabar el stand vacío.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto tiempo hace falta para grabar bien una feria o un stand?",
        answer:
          "Con un día completo de feria suele bastar si reservo la primera media hora sin público para los planos limpios del stand. En ferias de varios días, prefiero cubrir al menos dos jornadas para no depender de un único día bueno.",
      },
      {
        type: "faq",
        question: "¿Necesito un equipo de varias personas para grabar una feria?",
        answer:
          "Con una sola persona cubro un stand pequeño o mediano. Si el evento tiene varias actividades a la vez en un pabellón grande, sumo un segundo operador para no perderme la mitad de lo que pasa.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar con la luz del pabellón sin llevar iluminación propia?",
        answer:
          "En la mayoría de ferias sí, la luz del pabellón es suficiente para planos generales. Para primeros planos de conversaciones o demos, llevo un panel LED pequeño de mano que corrige el tono sin necesitar toma de corriente adicional.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay entre grabar una feria y grabar un evento corporativo cerrado?",
        answer:
          "En una feria compito por atención con decenas de stands alrededor y no controlo el ruido ni el paso de gente. En un evento cerrado sí controlo el espacio y el sonido, así que puedo planificar con más precisión los planos y el guion.",
      },
      {
        type: "paragraph",
        text: "Si tienes una feria o un stand programado y no sabes qué planos priorizar ni cómo resolver el audio con tanto ruido alrededor, escríbeme desde /contacto y te digo qué equipo y qué plan de grabación encajan con tu stand.",
      },
    ],
  },
  {
    slug: "dirigir-empleados-sin-experiencia-camara",
    title: "Cómo dirigir a empleados sin experiencia frente a cámara",
    description:
      "Cómo preparo a empleados que nunca han grabado un vídeo corporativo: qué digo antes de encender la cámara, cómo pregunto y dónde pongo la mirada.",
    publishedAt: "2026-07-09",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "dirección de talento",
      "entrevistas corporativas",
      "producción audiovisual",
      "Madrid",
    ],
    keyword: "cómo dirigir a empleados sin experiencia frente a cámara",
    intent: "informacional",
    excerpt:
      "La mayoría de empleados se ponen rígidos en cuanto ven la cámara encendida. No es un problema de personalidad, es que nadie les ha explicado qué se espera de ellos.",
    seoTitle: "Dirigir a empleados sin experiencia en cámara | Daniel Acero",
    metaDescription:
      "Cómo dirigir a empleados sin experiencia frente a cámara: preparación previa, preguntas en vez de guion y encuadre para que salga natural.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La mayoría de empleados se congelan en cuanto enciendo la cámara. No es un problema de personalidad ni de que no sepan hablar de su trabajo, es que nunca han hecho esto y nadie les ha explicado qué se espera de ellos delante del objetivo.",
      },
      {
        type: "paragraph",
        text: "Llevo años dirigiendo a gente que no es actor ni portavoz de comunicación para vídeos corporativos: testimonios internos, entrevistas de cultura de empresa, vídeos de producto grabados con el propio equipo técnico. En esta guía cuento cómo preparo esas grabaciones para que la persona hable con naturalidad y no como si estuviera leyendo un comunicado.",
      },
      {
        type: "image",
        src: "/blog/dirigir-empleados-sin-experiencia-camara/hero.webp",
        alt: "Empleado sentado en una mesa de oficina siendo entrevistado frente a una cámara",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la mayoría se pone rígida delante de la cámara" },
      {
        type: "paragraph",
        text: "La cámara cambia el comportamiento de cualquiera, incluso de gente que domina su trabajo. Hay miedo a equivocarse, a decir algo que suene mal delante de sus jefes o de otros compañeros, y una sensación de examen que no existe en una conversación normal. Ese nervio se nota en la voz, en la mirada y en las pausas.",
      },
      {
        type: "paragraph",
        text: "Un actor o un portavoz entrenado sabe gestionar esa presión porque lo ha hecho muchas veces. Un empleado normal no tiene esa costumbre, así que mi trabajo no es conseguir una interpretación perfecta, es bajar la sensación de examen lo suficiente para que hable como habla en una reunión cualquiera.",
      },
      { type: "heading", level: 2, text: "Cómo dirijo a alguien que nunca ha grabado" },
      { type: "heading", level: 3, text: "La conversación previa, antes de encender nada" },
      {
        type: "paragraph",
        text: "Antes de montar nada hablo con la persona diez o quince minutos sin cámara delante. Le explico de qué va el vídeo, dónde se va a usar y qué tipo de respuesta busco, pero no le doy un guion cerrado. Esa charla sirve para que se acostumbre a mi cara y a mi forma de preguntar antes de que haya un objetivo grabando.",
      },
      { type: "heading", level: 3, text: "Preguntas, no guion" },
      {
        type: "paragraph",
        text: "En vez de darle frases para memorizar, le hago preguntas abiertas y dejo que responda con sus propias palabras. Si la respuesta sale muy corta o muy plana, repito la pregunta de otra forma en vez de sugerirle qué decir. Luego, en montaje, elijo la mejor versión de entre varias respuestas a la misma pregunta.",
      },
      { type: "heading", level: 3, text: "Dónde pongo la mirada y el encuadre" },
      {
        type: "paragraph",
        text: "Sitúo a la persona en un ángulo de tres cuartos y le pido que me mire a mí, de pie junto al objetivo, en vez de mirar directamente a la cámara salvo que el formato lo pida así de forma deliberada. Mirar a una persona real en vez de a una lente negra baja la tensión de inmediato y el resultado se nota en la mirada durante el montaje.",
      },
      {
        type: "image",
        src: "/blog/dirigir-empleados-sin-experiencia-camara/mid.webp",
        alt: "Equipo de grabación preparando una cámara para una entrevista corporativa",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Dar un guion cerrado para memorizar: suena artificial y la persona se traba intentando recordarlo palabra por palabra.",
          "Grabar la primera toma sin dejar antes un margen para que la persona se relaje delante de la cámara.",
          "Colocar al empleado frente a su jefe o a varios compañeros mirando durante la grabación.",
          "Hacer preguntas cerradas de sí o no que no dan material aprovechable en montaje.",
          "No explicar antes dónde se va a ver el vídeo y para qué sirve.",
          "Interrumpir a media respuesta para corregir en vez de dejar terminar y repetir la toma después.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto tiempo hace falta para grabar a alguien sin experiencia frente a cámara?",
        answer:
          "Calculo entre 30 y 45 minutos por persona, contando la conversación previa sin cámara y varias tomas de las preguntas principales. Meter prisa es lo que peor resultado da.",
      },
      {
        type: "faq",
        question: "¿Es mejor dar un guion cerrado o dejar que hable libre?",
        answer:
          "Prefiero preguntas guía en vez de un guion cerrado. Un texto memorizado se nota siempre, mientras que una respuesta espontánea a una buena pregunta suena natural aunque no sea perfecta.",
      },
      {
        type: "faq",
        question: "¿Qué hago si la persona se traba varias veces seguidas?",
        answer:
          "Paro, le quito presión con una pausa corta y cambio la pregunta por una versión más sencilla. Insistir en la misma frase solo aumenta el bloqueo.",
      },
      {
        type: "faq",
        question: "¿Cuántas personas puedo grabar en una sola sesión?",
        answer:
          "En una jornada de trabajo normal suelo grabar entre cuatro y seis testimonios cortos, dejando margen entre cada uno para montar el set y para que la siguiente persona se relaje antes de sentarse.",
      },
      {
        type: "paragraph",
        text: "Si tienes que grabar testimonios internos o entrevistas con empleados que nunca han estado delante de una cámara, escríbeme desde /contacto y te cuento cómo planteo la sesión para que salga natural sin perder un día entero de trabajo del equipo.",
      },
    ],
  },
  {
    slug: "showreel-corporativo",
    title: "Showreel corporativo: qué es y cómo lo monto",
    description:
      "Qué es un showreel corporativo, para qué sirve realmente y cómo selecciono los planos, el ritmo y la música para que dure lo justo.",
    publishedAt: "2026-07-10",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "showreel corporativo",
      "vídeo corporativo",
      "portfolio audiovisual",
      "producción de vídeo",
      "edición de vídeo",
      "Madrid",
    ],
    keyword: "showreel corporativo",
    intent: "informacional",
    excerpt:
      "Un showreel corporativo no es un resumen de todo lo que has grabado. Es una pieza corta pensada para convencer a alguien en los primeros ocho segundos.",
    seoTitle: "Showreel corporativo: qué es y cómo montarlo | Daniel Acero",
    metaDescription:
      "Showreel corporativo: qué es, para qué sirve y cómo selecciono planos, ritmo y música para montar una pieza corta que venda tu trabajo.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Un showreel corporativo no es un resumen de todo lo que has grabado en el último año. Es una pieza corta, pensada para convencer a alguien en los primeros ocho segundos de que sabes lo que haces.",
      },
      {
        type: "paragraph",
        text: "Muchos clientes me piden un showreel pensando en un vídeo de dos minutos con todo lo bonito que tienen. Yo trabajo al revés: primero decido a quién se lo van a enseñar y qué decisión quieren que tome esa persona después de verlo. El montaje sale de ahí, no de la carpeta de material disponible.",
      },
      {
        type: "image",
        src: "/blog/showreel-corporativo/hero.webp",
        alt: "Editor de vídeo revisando una línea de tiempo con clips de vídeo corporativo",
        width: 1920,
        height: 1298,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un showreel corporativo y para qué sirve" },
      {
        type: "paragraph",
        text: "Un showreel es una pieza breve que reúne los mejores momentos de varios proyectos para mostrar el nivel de producción de una empresa o de un profesional. En el mundo corporativo se usa para presentaciones comerciales, para la web, para eventos de empresa o para procesos de selección de proveedor audiovisual.",
      },
      {
        type: "paragraph",
        text: "No es un making of. No es un vídeo de empresa al uso, con mensaje corporativo y voz en off explicando la misión. Es una demostración visual: aquí está el nivel de cámara, de luz, de montaje y de sonido que puedes esperar si trabajas conmigo o con mi productora.",
      },
      {
        type: "paragraph",
        text: "Por eso la duración manda sobre todo lo demás. Un showreel de tres minutos pierde a la mitad de la gente antes del segundo minuto. Prefiero entregar 45 segundos que se ven enteros a un minuto y medio que nadie termina.",
      },
      { type: "heading", level: 2, text: "Cómo lo monto paso a paso" },
      { type: "heading", level: 3, text: "Selecciono antes de mirar el calendario, no al revés" },
      {
        type: "paragraph",
        text: "El error más común es montar el showreel por orden cronológico, metiendo el proyecto más reciente primero. Yo reviso todo el material disponible y marco solo los planos que funcionan sin contexto: si necesitas explicar qué está pasando en el plano para que se entienda, ese plano no sirve para un showreel.",
      },
      { type: "heading", level: 3, text: "El ritmo lo marca la música, no al revés" },
      {
        type: "paragraph",
        text: "Elijo la pista antes de cortar el primer clip. Marco los golpes de la música y corto los planos sobre esos golpes, no después. Un showreel que ignora el ritmo de la música se siente desincronizado aunque cada plano individual esté bien grabado.",
      },
      { type: "heading", level: 3, text: "Duración: entre 30 y 60 segundos, casi siempre" },
      {
        type: "paragraph",
        text: "Para uso comercial o web me quedo en 45 segundos de media. Si el showreel va a abrir una presentación en directo delante de un cliente, puedo llegar a 90 segundos porque ahí hay alguien controlando la atención de la sala. Para redes o para la home de una web, cuanto más corto, mejor retención.",
      },
      {
        type: "image",
        src: "/blog/showreel-corporativo/intermedia.webp",
        alt: "Cámara de vídeo profesional montada en trípode en un set de producción",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al montar un showreel" },
      {
        type: "list",
        items: [
          "Meter un plano por cada cliente para no dejar a nadie fuera, en vez de elegir los planos que mejor venden.",
          "Usar música con derechos dudosos que luego da problemas al publicar en redes o en la web.",
          "Alargar la pieza porque \"queda poco\" para meter un plano más que no aporta nada nuevo.",
          "No repetir el mismo tipo de plano dos veces seguidas: entrevista, entrevista, entrevista cansa aunque cada una sea distinta.",
          "Dejar el logo o la marca de agua tapando la imagen durante toda la pieza en vez de solo al final.",
          "Actualizar el showreel una vez cada dos o tres años en vez de revisarlo cada pocos meses con el material nuevo.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debería durar un showreel corporativo?",
        answer:
          "Entre 30 y 60 segundos para uso web o redes. Puede subir a 90 segundos si se usa para abrir una presentación comercial en directo, donde hay alguien controlando la atención del público.",
      },
      {
        type: "faq",
        question: "¿Necesito grabar material nuevo o sirve con lo que ya tengo?",
        answer:
          "Casi siempre se puede montar con material ya grabado si hay variedad de proyectos. Solo recomiendo grabar planos nuevos cuando todo el archivo es muy similar entre sí y el showreel queda repetitivo.",
      },
      {
        type: "faq",
        question: "¿Qué música puedo usar sin problemas de derechos?",
        answer:
          "Uso librerías de música con licencia comercial válida para web y redes. Evito subir cualquier pista sin verificar antes la licencia, porque un reclamo de derechos puede tumbar la publicación justo cuando más se necesita.",
      },
      {
        type: "faq",
        question: "¿Cada cuánto hay que renovar el showreel?",
        answer:
          "Lo reviso cada seis meses o cada vez que hay dos o tres proyectos nuevos que suben claramente el nivel del anterior. Un showreel desactualizado transmite lo contrario de lo que busca.",
      },
      {
        type: "paragraph",
        text: "Si necesitas montar un showreel con tu material actual o grabar piezas nuevas pensadas para eso, escríbeme desde /contacto y te cuento cómo lo plantearía para tu caso.",
      },
    ],
  },
  {
    slug: "grabacion-video-corporativo-plantas-industriales",
    title: "Grabación de vídeo corporativo en plantas industriales: qué tener en cuenta",
    description:
      "Grabar en una fábrica o una planta industrial exige otra lógica: normativa de seguridad, turnos de producción y ruido que condiciona el sonido. Cuento cómo organizo estos rodajes.",
    publishedAt: "2026-07-13",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "producción industrial",
      "filmmaker Madrid",
      "vídeo institucional",
      "seguridad en rodaje",
    ],
    keyword: "grabación de vídeo corporativo en plantas industriales",
    intent: "informacional",
    excerpt:
      "Grabar en una planta industrial no es como grabar en una oficina. Hay normativa de seguridad, ruido, turnos de producción y espacios que no se pueden parar. Cuento cómo organizo estos rodajes.",
    seoTitle: "Vídeo corporativo en plantas industriales | Daniel Acero",
    metaDescription:
      "Grabación de vídeo corporativo en plantas industriales: normativa de seguridad, turnos de producción y logística para no parar la fábrica.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Grabar vídeo corporativo en una fábrica o una planta industrial no se parece a grabar en una oficina. Hay maquinaria en marcha, ruido constante, normativa de seguridad y turnos de producción que no se pueden parar solo porque haya una cámara delante.",
      },
      {
        type: "paragraph",
        text: "He grabado en naves logísticas, plantas de fabricación y almacenes en la zona industrial de Madrid. Cada vez el reto es el mismo: conseguir imágenes que se vean bien sin interrumpir la operativa ni poner en riesgo a nadie.",
      },
      {
        type: "image",
        src: "/blog/grabacion-video-corporativo-plantas-industriales/hero.webp",
        alt: "Línea de producción automatizada en el interior de una planta industrial",
        width: 1920,
        height: 1281,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué una planta industrial exige otro enfoque" },
      {
        type: "paragraph",
        text: "Una oficina se puede vaciar un rato o mover un escritorio de sitio. Una línea de producción no se detiene porque sí. Cada hora de parada tiene un coste real para la empresa, así que el rodaje se planifica alrededor del proceso productivo, no al revés.",
      },
      {
        type: "paragraph",
        text: "Además entra en juego la seguridad. Casco, chaleco reflectante, calzado de protección y a veces protección auditiva son obligatorios en ciertas zonas. Si el equipo de grabación no cumple esos requisitos, no entra a esa área, sin excepciones.",
      },
      {
        type: "paragraph",
        text: "El ruido de las máquinas también condiciona el sonido directo. En muchas zonas de planta es imposible grabar una entrevista limpia sin aislamiento, así que hay que buscar una sala cercana más silenciosa para las partes habladas.",
      },
      { type: "heading", level: 2, text: "Cómo organizo un rodaje en planta" },
      { type: "heading", level: 3, text: "Visita técnica antes del día de grabación" },
      {
        type: "paragraph",
        text: "Siempre pido una visita previa, aunque sea de una hora. Reviso qué zonas tienen mejor luz, dónde hay ruido excesivo, qué pasillos se pueden usar sin cruzar zonas de tránsito de maquinaria y qué permisos de seguridad necesito para el equipo.",
      },
      { type: "heading", level: 3, text: "Encajar el rodaje en los turnos de producción" },
      {
        type: "paragraph",
        text: "Pregunto siempre por los cambios de turno y los momentos de menor actividad. Los planos generales de la línea suelen salir mejor a media mañana, cuando el ritmo es estable. Las entrevistas con responsables encajan mejor en descansos o al final del turno.",
      },
      { type: "heading", level: 3, text: "Equipo compacto y rápido de montar" },
      {
        type: "paragraph",
        text: "En planta no llevo trípodes grandes ni montajes de luz complejos. Prefiero una cámara ligera, un estabilizador de mano y luz LED portátil. Cuanto menos tiempo tarde en montar y desmontar, menos molesto soy para el equipo que sigue trabajando alrededor.",
      },
      {
        type: "image",
        src: "/blog/grabacion-video-corporativo-plantas-industriales/intermedia.webp",
        alt: "Equipo de cámara profesional preparado para un rodaje corporativo",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar en una planta industrial" },
      {
        type: "list",
        items: [
          "Llegar sin conocer la normativa de seguridad de la planta y perder tiempo el día del rodaje resolviendo permisos.",
          "Programar la grabación en el pico de producción, cuando cualquier imprevisto genera más fricción.",
          "Grabar sonido directo en zonas con maquinaria en marcha sin un plan B de sala silenciosa.",
          "Ignorar el ruido de fondo durante la grabación y descubrir en postproducción que las voces no se entienden.",
          "No avisar al personal de planta de que habrá cámaras, lo que genera sorpresas o negativas de última hora a aparecer en imagen.",
          "Subestimar el tiempo de desplazamiento interno entre naves dentro del mismo polígono.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito un seguro especial para grabar en una fábrica?",
        answer:
          "Depende de la planta. Muchas empresas industriales exigen que el equipo de grabación tenga seguro de responsabilidad civil vigente antes de entrar. Lo suelo aportar antes del día del rodaje para no bloquear el acceso.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar mientras la producción sigue en marcha?",
        answer:
          "Sí, es lo habitual. Grabo desde zonas señalizadas y con la ropa de protección que exige cada área, sin interrumpir el proceso. Los planos que necesitan que una máquina esté detenida se acuerdan con antelación con el responsable de planta.",
      },
      {
        type: "faq",
        question: "¿Qué pasa con el ruido de las máquinas en las entrevistas?",
        answer:
          "Busco una sala cercana con puerta, como una oficina o sala de reuniones dentro de la propia planta, para grabar la parte hablada con un sonido limpio. Los planos de la línea de producción no necesitan sonido directo, así que ahí el ruido no es un problema.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo se necesita para grabar en una planta industrial?",
        answer:
          "Para una pieza corta suelo reservar media jornada: dos o tres horas de planos generales y un par de entrevistas. Si la planta es grande y hay varias áreas que mostrar, puede requerir una jornada completa.",
      },
      {
        type: "paragraph",
        text: "Si tienes que grabar un vídeo corporativo dentro de una planta o una nave industrial y no sabes por dónde empezar con los permisos y la logística, escríbeme desde /contacto y lo planificamos juntos antes de fijar fecha.",
      },
    ],
  },
  {
    slug: "derechos-imagen-empleados-video-corporativo",
    title: "Derechos de imagen de empleados en vídeo corporativo: qué necesitas cubrir",
    description:
      "Grabar a empleados en un vídeo corporativo implica gestionar su derecho de imagen. Cuento qué documento uso, qué cubre y qué hacer con extrabajadores, menores o terceros en el rodaje.",
    publishedAt: "2026-07-14",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "derechos de imagen",
      "RGPD",
      "protección de datos",
      "recursos humanos",
      "filmmaker Madrid",
    ],
    keyword: "derechos de imagen de empleados en vídeo corporativo",
    intent: "informacional",
    excerpt:
      "Grabar a empleados en un vídeo corporativo implica gestionar su derecho de imagen. Cuento qué documento necesito, qué cubre y qué hacer con extrabajadores, menores o terceros que aparecen en el rodaje.",
    seoTitle: "Derechos de imagen de empleados en vídeo | Daniel Acero",
    metaDescription:
      "Derechos de imagen de empleados en vídeo corporativo: qué documento firmar, casos especiales y errores a evitar antes de grabar.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cada vez que grabo un vídeo corporativo con empleados delante de cámara, hay un documento que reviso antes de encender nada: la cesión de derechos de imagen. No es un trámite decorativo. Es lo que protege a la empresa y a la persona que aparece en el vídeo si algo se usa mal, se reutiliza fuera de contexto o simplemente cambia de opinión con el tiempo.",
      },
      {
        type: "paragraph",
        text: "En España, el derecho a la propia imagen está protegido por ley. Que alguien trabaje para una empresa no significa que esa empresa pueda grabarle, usar su imagen en LinkedIn, en la web o en un anuncio sin su consentimiento explícito. Por eso, antes de cualquier rodaje con empleados, me aseguro de que ese consentimiento existe por escrito.",
      },
      {
        type: "image",
        src: "/blog/derechos-imagen-empleados-video-corporativo/hero.webp",
        alt: "Persona firmando un documento de cesión de derechos de imagen en una oficina",
        width: 1920,
        height: 1281,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué son los derechos de imagen y por qué importan en un rodaje corporativo" },
      {
        type: "paragraph",
        text: "El derecho de imagen es la facultad de decidir si tu imagen se capta, se reproduce o se publica, y en qué condiciones. Aparece recogido en la Constitución y se desarrolla en la Ley Orgánica 1/1982. Aplica igual a un empleado que sale treinta segundos en un vídeo de cultura de empresa que al CEO que protagoniza un vídeo institucional.",
      },
      {
        type: "paragraph",
        text: "El problema aparece cuando una empresa asume que, por ser trabajador, la persona ya ha aceptado aparecer en cualquier contenido. No es así. El contrato laboral no incluye automáticamente la cesión de derechos de imagen para uso publicitario o de marca. Son dos cosas distintas y hay que tratarlas por separado.",
      },
      {
        type: "paragraph",
        text: "Además entra en juego la protección de datos. La imagen de una persona identificable es un dato personal según el RGPD, así que el tratamiento necesita una base legal, que casi siempre es el consentimiento expreso, informado y revocable.",
      },
      { type: "heading", level: 2, text: "Cómo gestiono los derechos de imagen en cada rodaje" },
      { type: "heading", level: 3, text: "El documento de cesión de derechos de imagen" },
      {
        type: "paragraph",
        text: "Antes de cada rodaje corporativo con empleados, la empresa (o yo, si me lo piden) prepara un documento breve donde se especifica qué se va a grabar, para qué se va a usar el material, en qué canales se va a publicar y durante cuánto tiempo. Cada persona que va a salir en imagen lo firma antes de empezar. No hace falta un contrato de diez páginas: con media cara clara y concreta es suficiente.",
      },
      { type: "heading", level: 3, text: "Qué cubre y qué no cubre la autorización" },
      {
        type: "paragraph",
        text: "Una autorización genérica de 'salgo en el vídeo de empresa' no cubre todo. Si el vídeo se va a usar en redes sociales, en la web, en un anuncio pagado o en una feria, mejor especificarlo. Si más adelante la empresa quiere reutilizar ese material en otro contexto, como un anuncio, lo correcto es volver a pedir consentimiento o dejarlo previsto desde el principio en el documento.",
      },
      { type: "heading", level: 3, text: "Casos especiales: extrabajadores, menores y terceros" },
      {
        type: "paragraph",
        text: "Cuando alguien deja la empresa, su cesión de derechos de imagen no desaparece automáticamente, pero es buena práctica revisar si sigue teniendo sentido mantener ese material activo, sobre todo si la salida no fue amistosa. Con menores de edad, como hijos de empleados en un evento familiar, la autorización la firma el padre, madre o tutor legal. Y si en el vídeo aparecen terceros que no son empleados, como clientes o proveedores en un evento, aplican las mismas reglas: sin su consentimiento, no se publica su imagen.",
      },
      {
        type: "image",
        src: "/blog/derechos-imagen-empleados-video-corporativo/intermedia.webp",
        alt: "Equipo de grabación con cámara en trípode preparado para una entrevista corporativa",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes con los derechos de imagen en vídeo corporativo" },
      {
        type: "list",
        items: [
          "Grabar a un empleado sin haberle explicado antes dónde se va a usar el vídeo.",
          "Asumir que el contrato laboral ya cubre el uso de la imagen en marketing.",
          "No guardar constancia escrita de la autorización, solo un permiso verbal.",
          "Reutilizar material antiguo de un extrabajador sin comprobar si sigue siendo válido usarlo.",
          "No prever qué pasa si alguien pide retirar su imagen después de la publicación.",
          "Grabar a terceros, como visitantes o clientes en un evento, sin avisar de que hay cámaras.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo obligar a un empleado a salir en el vídeo corporativo?",
        answer:
          "No. Puedes pedírselo como parte razonable del trabajo, pero si la persona se niega explícitamente a aparecer en imagen, no hay forma legal de forzarlo. Lo habitual es ofrecer alternativas, como grabar solo su voz o mostrarlo de espaldas.",
      },
      {
        type: "faq",
        question: "¿Necesito un abogado para redactar la cesión de derechos de imagen?",
        answer:
          "Para un vídeo corporativo estándar no suele hacer falta un contrato complejo. Con un documento claro que recoja qué se graba, para qué se usa y en qué canales, firmado por cada persona, cubres lo esencial. Para usos más delicados, como publicidad pagada a gran escala, sí conviene que lo revise un abogado.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo dura una cesión de derechos de imagen?",
        answer:
          "Depende de lo que se acuerde en el documento. Puede ser indefinida mientras no se revoque, o limitada a un periodo concreto. Yo recomiendo dejarlo por escrito con claridad, incluyendo que la persona puede pedir retirar su imagen en cualquier momento.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si un empleado pide retirar su imagen después de que el vídeo esté publicado?",
        answer:
          "Hay que atender la solicitud y retirar o sustituir el contenido donde aparece, dentro de un plazo razonable. Por eso conviene guardar los proyectos de edición organizados: así se puede volver a montar la pieza sin esa persona sin tener que regrabar todo desde cero.",
      },
      {
        type: "paragraph",
        text: "Si vas a grabar un vídeo corporativo con empleados y no tienes claro cómo gestionar la cesión de derechos de imagen, escríbeme desde /contacto y te paso el modelo de documento que uso antes de cada rodaje.",
      },
    ],
  },
  {
    slug: "video-captacion-inversores",
    title: "Vídeo para captación de inversores: qué debe incluir un pitch video corporativo",
    description:
      "Cómo estructuro un vídeo para captación de inversores: qué contar en los primeros segundos, cómo presentar al equipo y la tracción, y los errores que restan credibilidad frente a un fondo.",
    publishedAt: "2026-07-15",
    readingTime: "5 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "pitch video",
      "inversores",
      "startups",
      "producción audiovisual",
      "filmmaker Madrid",
    ],
    keyword: "vídeo para captación de inversores",
    intent: "informacional",
    excerpt:
      "Un vídeo para captación de inversores no sustituye al pitch deck, lo refuerza. Cuento cómo lo estructuro para que un fondo o business angel entienda el negocio en menos de tres minutos.",
    seoTitle: "Vídeo para captación de inversores | Daniel Acero",
    metaDescription:
      "Vídeo para captación de inversores: qué incluir, cómo estructurarlo y qué evitar antes de grabarlo.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando una startup me pide un vídeo para captación de inversores, lo primero que aclaro es qué NO va a ser: no sustituye al pitch deck ni a la reunión en persona. Es una pieza que se manda antes, se ve en un tren o entre reuniones, y sirve para que quien la ve decida si merece la pena sentarse contigo media hora.",
      },
      {
        type: "paragraph",
        text: "He grabado varios de estos vídeos y todos comparten un problema de fondo: el fundador quiere meter demasiado. Producto, mercado, equipo, roadmap, cada métrica que tiene a mano. El resultado es una pieza de ocho minutos que nadie termina de ver. Un vídeo de este tipo funciona cuando dice menos, no más.",
      },
      {
        type: "image",
        src: "/blog/video-captacion-inversores/hero.webp",
        alt: "Fundadores de una startup reunidos alrededor de una mesa preparando su presentación a inversores",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un vídeo para captación de inversores y por qué importa" },
      {
        type: "paragraph",
        text: "Es una pieza corta, de dos a tres minutos, que resume el problema que resuelve el negocio, cómo lo resuelve, quién forma el equipo y por qué ahora es el momento de invertir. Se usa como adjunto en el primer contacto por email, como material de apoyo en una ronda, o como pieza que circula internamente en un fondo antes del comité de inversión.",
      },
      {
        type: "paragraph",
        text: "Importa porque un inversor recibe decenas de propuestas a la semana. Un documento de texto se hojea; un vídeo bien hecho se ve entero si engancha en los primeros quince segundos. Y a diferencia de un deck, transmite algo que el papel no transmite: cómo habla el fundador, si convence, si tiene claro lo que está construyendo.",
      },
      {
        type: "paragraph",
        text: "No es un vídeo institucional ni un anuncio de marca. Es una herramienta de venta muy concreta, dirigida a un público muy concreto, y eso condiciona el tono: directo, sin música épica de fondo, sin planos aéreos de oficinas que no aportan nada al argumento.",
      },
      { type: "heading", level: 2, text: "Cómo estructuro un pitch video que funciona" },
      { type: "heading", level: 3, text: "El problema y la oportunidad en los primeros 30 segundos" },
      {
        type: "paragraph",
        text: "Empiezo siempre por el problema, no por la empresa. Si el fundador abre hablando de cuándo fundó la compañía o de su currículum, ya ha perdido diez segundos que no recupera. Prefiero una frase que plantee el problema de forma concreta, con un dato o un ejemplo reconocible, y enlazar directamente con la solución.",
      },
      { type: "heading", level: 3, text: "Quién es el equipo y por qué puede ejecutarlo" },
      {
        type: "paragraph",
        text: "Un inversor no invierte solo en una idea, invierte en quién va a ejecutarla. Dedico entre treinta y cuarenta segundos a mostrar al equipo fundador hablando a cámara, no en una lista de nombres con cargos. Que se les vea cómodos, que expliquen con sus palabras por qué son las personas adecuadas para este problema en concreto.",
      },
      { type: "heading", level: 3, text: "Tracción, números y la llamada a la acción" },
      {
        type: "paragraph",
        text: "El cierre es para los números que ya existen: usuarios, ingresos, clientes firmados, lo que haya. Si la empresa es muy temprana y no hay tracción todavía, mejor centrar ese bloque en el tamaño del mercado y en el hito concreto que se va a alcanzar con la ronda. Termino siempre con una llamada a la acción clara: qué se busca, cuánto, y el siguiente paso para quien quiera hablar.",
      },
      {
        type: "image",
        src: "/blog/video-captacion-inversores/intermedia.webp",
        alt: "Emprendedor presentando su proyecto frente a un pequeño grupo de inversores",
        width: 1880,
        height: 1253,
        caption: "Grabación de una presentación real como base del vídeo para inversores.",
      },
      { type: "heading", level: 2, text: "Errores comunes en un vídeo para inversores" },
      {
        type: "list",
        items: [
          "Alargar el vídeo más de tres minutos porque \"hay mucho que contar\".",
          "Empezar por la historia personal del fundador en lugar de por el problema.",
          "Usar gráficos genéricos de stock en vez de datos reales del negocio.",
          "Grabar al equipo leyendo un guion memorizado, sin naturalidad.",
          "No incluir ninguna cifra de tracción cuando sí existe.",
          "Olvidar la llamada a la acción final: qué se pide y cómo contactar.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar un vídeo para captación de inversores?",
        answer:
          "Entre dos y tres minutos. Si el fundador tiene mucho que contar, mejor dejarlo para la reunión en persona o el deck extendido. El vídeo es la puerta de entrada, no el argumentario completo.",
      },
      {
        type: "faq",
        question: "¿Necesito animaciones o basta con grabación real?",
        answer:
          "Para la mayoría de startups, grabación real del equipo hablando a cámara funciona mejor que motion graphics genérico. Las animaciones tienen sentido cuando hay que explicar un producto técnico difícil de mostrar en pantalla, y ahí sí conviene combinar ambos formatos.",
      },
      {
        type: "faq",
        question: "¿El vídeo sustituye al pitch deck?",
        answer:
          "No. El deck sigue siendo el documento de referencia con todos los datos, el modelo de negocio y las proyecciones. El vídeo es un complemento que abre la puerta y genera la primera impresión antes de que alguien revise el deck con calma.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si la empresa todavía no tiene tracción?",
        answer:
          "Se puede grabar igualmente. En ese caso pongo el peso en el problema, el tamaño de mercado y el equipo. Un vídeo honesto sobre una empresa en etapa temprana funciona mejor que uno que infla cifras que luego no se sostienen en la reunión.",
      },
      {
        type: "paragraph",
        text: "Si estás preparando una ronda y quieres un vídeo para captación de inversores que no se quede en genérico, escríbeme desde /contacto y lo planteamos juntos antes de la grabación.",
      },
    ],
  },
  {
    slug: "video-corporativo-multiidioma-subtitulado-doblaje",
    title: "Vídeo corporativo multiidioma: subtitulado y doblaje",
    description:
      "Cómo decido entre subtítulos y doblaje en un vídeo corporativo que se lanza en varios idiomas: cuándo basta con subtítulos, cuándo compensa doblar y cómo mantener la coherencia de marca en cada versión.",
    publishedAt: "2026-07-16",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "subtitulado",
      "doblaje",
      "localización de vídeo",
      "producción audiovisual",
      "filmmaker Madrid",
    ],
    keyword: "vídeo corporativo multiidioma",
    intent: "informacional",
    excerpt:
      "Subtítulos o doblaje no es una decisión estética. Cuento cómo decido entre uno y otro según el canal, el mercado y el presupuesto, y cómo cuido que la marca suene igual en cada idioma.",
    seoTitle: "Vídeo corporativo multiidioma | Daniel Acero",
    metaDescription:
      "Vídeo corporativo multiidioma: cuándo subtitular, cuándo doblar y cómo cuidar la coherencia de marca en cada idioma.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando una empresa graba un vídeo corporativo pensando en varios mercados, tarde o temprano me pregunta lo mismo: ¿subtítulos o doblaje? La respuesta cambia según el idioma, el canal donde se va a ver y el presupuesto, pero hay un criterio de fondo que uso siempre para decidir.",
      },
      {
        type: "paragraph",
        text: "No es una decisión estética. Subtitular mal o doblar sin cuidado desluce un vídeo que en el idioma original funciona bien. Y cambiar de un idioma a otro sin perder el tono de marca cuesta más trabajo del que parece desde fuera.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-multiidioma-subtitulado-doblaje/hero.webp",
        alt: "Claqueta de rodaje sobre fondo oscuro en un set de grabación de vídeo corporativo",
        width: 1920,
        height: 1298,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es la localización de un vídeo corporativo y por qué importa" },
      {
        type: "paragraph",
        text: "Localizar un vídeo corporativo es adaptarlo a un idioma y a una cultura distintos sin que se note el trabajo detrás. No es traducir palabra por palabra: es ajustar ritmo, duración de las frases y a veces ejemplos culturales para que el mensaje llegue igual de claro en cada mercado.",
      },
      {
        type: "paragraph",
        text: "Importa porque una empresa que se expande a otro país suele reutilizar el mismo vídeo institucional o de producto en varios idiomas antes de grabar contenido nuevo. Si la localización es floja, el vídeo se percibe como una traducción barata, y eso resta la credibilidad que el vídeo original construyó.",
      },
      {
        type: "paragraph",
        text: "La decisión entre subtitular y doblar no es solo de presupuesto. Cambia también según dónde se va a ver: un vídeo para LinkedIn se sigue viendo en gran parte sin sonido, mientras uno para una feria o una presentación en sala necesita audio limpio en el idioma del público.",
      },
      { type: "heading", level: 2, text: "Cómo decido entre subtítulos y doblaje" },
      { type: "heading", level: 3, text: "Subtítulos: cuándo bastan" },
      {
        type: "paragraph",
        text: "Los subtítulos funcionan bien cuando el vídeo se mueve por redes sociales, cuando el presupuesto es ajustado o cuando el mercado de destino está acostumbrado a ver contenido subtitulado en vez de doblado, como los países nórdicos. También los prefiero cuando la voz del protagonista, un CEO o un fundador, forma parte del mensaje: se pierde autenticidad si esa voz desaparece detrás de un doblaje.",
      },
      { type: "heading", level: 3, text: "Doblaje: cuándo compensa" },
      {
        type: "paragraph",
        text: "El doblaje compensa cuando el vídeo va dirigido a un público que no lee subtítulos con comodidad, cuando se reproduce en pantallas sin interacción, como una sala de espera o un stand de feria, o cuando el mercado de destino tiene una cultura fuerte de doblaje, como España o Alemania. Aquí sí hace falta presupuesto real: una voz profesional, dirección de doblaje y ajuste de sincronía labial si el plano es un primer plano hablando a cámara.",
      },
      { type: "heading", level: 3, text: "Coherencia de marca entre idiomas" },
      {
        type: "paragraph",
        text: "Sea cual sea la opción, hay un punto que cuido siempre: que la terminología de marca se mantenga igual en todos los idiomas. Nombres de producto, claims, tono. Antes de traducir, preparo un glosario corto con los términos que no se tocan, para que el traductor o el estudio de doblaje no improvisen sobre la marcha. En edición uso DaVinci Resolve para quemar los subtítulos con la misma tipografía y el mismo color de marca en cada idioma, así que ese detalle no queda en manos del traductor ni del estudio de doblaje.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-multiidioma-subtitulado-doblaje/intermedia.webp",
        alt: "Micrófono de estudio para grabación de voz en off y doblaje de vídeo corporativo",
        width: 1920,
        height: 1080,
      },
      {
        type: "paragraph",
        text: "Otro punto que subestima casi todo el mundo es el tiempo. Doblar bien un vídeo de tres minutos, con dirección de doblaje y revisión de sincronía, lleva entre cuatro y seis días hábiles. Subtitular con calidad, con revisión de un nativo incluida, suele resolverse en dos o tres días. Si el vídeo tiene fecha de lanzamiento fija, ese margen hay que reservarlo desde el principio del proyecto, no al final.",
      },
      { type: "heading", level: 2, text: "Errores comunes al llevar un vídeo corporativo a varios idiomas" },
      {
        type: "list",
        items: [
          "Traducir el guion sin ajustar el ritmo, lo que deja subtítulos que van más rápido que la lectura cómoda.",
          "Usar doblaje automático o voces sintéticas en un vídeo institucional donde se espera una voz humana cuidada.",
          "No revisar el resultado con un hablante nativo del idioma de destino antes de publicar.",
          "Cambiar el claim o eslogan de marca en la traducción sin que nadie lo apruebe.",
          "Subtitular con una fuente o tamaño que no se lee bien en móvil.",
          "Olvidar los tiempos de espera: doblar bien un vídeo de tres minutos lleva días, no horas.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto cuesta doblar un vídeo corporativo a otro idioma?",
        answer:
          "Depende de la duración y del número de voces, pero para un vídeo de dos o tres minutos con una sola voz en off, el rango habitual está entre unos cientos de euros y algo más de mil si hace falta dirección de doblaje y ajuste de sincronía labial.",
      },
      {
        type: "faq",
        question: "¿Los subtítulos automáticos de las plataformas son suficientes?",
        answer:
          "Para contenido interno o de bajo riesgo, pueden servir de punto de partida. Para un vídeo corporativo que representa a la marca, siempre reviso y corrijo el subtítulo automático a mano: la puntuación, los cortes de línea y los términos técnicos suelen fallar.",
      },
      {
        type: "faq",
        question: "¿Puedo doblar solo una parte del vídeo y dejar el resto subtitulado?",
        answer:
          "Sí, y de hecho lo recomiendo en vídeos con varias voces: si el protagonista principal aporta autenticidad con su voz original, puede quedarse en versión original con subtítulos mientras el resto del vídeo, la locución en off por ejemplo, se dobla.",
      },
      {
        type: "faq",
        question: "¿Qué idioma reviso primero cuando lanzo un vídeo a varios mercados?",
        answer:
          "El que tenga más peso comercial para la empresa en ese momento, no el que sea más fácil de traducir. Prefiero hacer bien uno o dos idiomas que repartir el mismo presupuesto entre cinco versiones flojas.",
      },
      {
        type: "paragraph",
        text: "Si tienes un vídeo corporativo que necesitas llevar a otro idioma sin que pierda naturalidad, escríbeme desde /contacto y lo planteamos antes de tocar el guion.",
      },
    ],
  },
  {
    slug: "diferencia-videografo-filmmaker-corporativo",
    title: "Videógrafo o filmmaker corporativo: en qué se diferencian",
    description:
      "Videógrafo y filmmaker corporativo se usan como sinónimos, pero no cubren lo mismo. Explico en qué cambia el enfoque, el proceso y el tipo de entregable de cada uno.",
    publishedAt: "2026-07-17",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "filmmaker corporativo",
      "videógrafo",
      "vídeo corporativo",
      "producción audiovisual",
      "filmmaker Madrid",
    ],
    keyword: "diferencia entre videógrafo y filmmaker corporativo",
    intent: "informacional",
    excerpt:
      "Videógrafo y filmmaker corporativo se usan como sinónimos, pero no lo son. Cuento qué cambia en el enfoque, el proceso y el resultado final de cada uno.",
    seoTitle: "Videógrafo vs filmmaker corporativo | Daniel Acero",
    metaDescription:
      "Diferencia entre videógrafo y filmmaker corporativo: enfoque, proceso y entregables. Te explico cuándo necesitas uno u otro.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Cuando una empresa busca a alguien para grabar un vídeo, casi siempre usa las palabras videógrafo y filmmaker corporativo como si fueran lo mismo. En la práctica describen dos enfoques distintos del mismo oficio, y confundirlos lleva a expectativas que luego no encajan con el resultado.",
      },
      {
        type: "paragraph",
        text: "No es una diferencia de prestigio ni de precio en sí misma. Es una diferencia de qué se te entrega y de cuánto criterio narrativo hay detrás del vídeo final. Te cuento cómo lo distingo yo, después de haber trabajado desde los dos lados.",
      },
      {
        type: "image",
        src: "/blog/diferencia-videografo-filmmaker-corporativo/hero.webp",
        alt: "Cámara y trípode preparados en un set de grabación corporativa",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es cada figura y por qué importa distinguirlas" },
      {
        type: "paragraph",
        text: "Un videógrafo cubre un evento o una grabación siguiendo un guion o un briefing cerrado: graba lo que pasa, con buena técnica de cámara y sonido, y entrega el material montado sin desviarse demasiado de lo pactado. Es la figura adecuada para cubrir una jornada, un evento o una entrevista puntual.",
      },
      {
        type: "paragraph",
        text: "Un filmmaker corporativo entra antes, en la fase de concepto. Propone cómo contar la historia de la empresa, qué planos van a sostener ese relato y qué se descarta aunque quede bonito. El trabajo no termina en apretar el botón de grabar: empieza ahí.",
      },
      {
        type: "paragraph",
        text: "Importa distinguirlos porque cambia lo que puedes pedir. Si contratas un videógrafo esperando dirección creativa completa, te vas a quedar corto. Si contratas un filmmaker solo para cubrir un evento de tres horas sin margen de decisión, estás pagando de más por algo que no vas a usar.",
      },
      { type: "heading", level: 2, text: "En qué se nota la diferencia en la práctica" },
      { type: "heading", level: 3, text: "El briefing inicial" },
      {
        type: "paragraph",
        text: "Con un videógrafo, el briefing suele ser una lista de planos y momentos a cubrir. Con un filmmaker, la primera conversación es sobre el mensaje: qué quiere transmitir la empresa, a quién le habla y qué reacción busca. El plan de rodaje sale de ahí, no al revés.",
      },
      { type: "heading", level: 3, text: "El día de grabación" },
      {
        type: "paragraph",
        text: "El videógrafo sigue la lista de planos con eficiencia y buen ojo técnico. El filmmaker improvisa dentro de un marco: si aparece un momento mejor que el previsto, lo persigue, aunque eso signifique reordenar el plan del día. Esa flexibilidad solo funciona si hay un criterio narrativo claro detrás.",
      },
      { type: "heading", level: 3, text: "La entrega final" },
      {
        type: "paragraph",
        text: "El resultado de un videógrafo es un montaje correcto y fiel a lo grabado. El de un filmmaker corporativo es una pieza con estructura narrativa: arranque, tensión, cierre, aunque el tema sea tan poco dramático como un proceso de fabricación. Uso DaVinci Resolve en ambos casos, pero el tiempo de montaje de un filmmaker suele ser mayor porque hay más decisiones de ritmo por tomar.",
      },
      {
        type: "image",
        src: "/blog/diferencia-videografo-filmmaker-corporativo/intermedia.webp",
        alt: "Línea de tiempo de edición de vídeo en un software de montaje profesional",
        width: 1920,
        height: 1280,
      },
      {
        type: "paragraph",
        text: "En proyectos reales, esta diferencia se nota sobre todo en el presupuesto de tiempo. Cubrir un evento con un videógrafo puede resolverse en un día de grabación y dos o tres de montaje. Un vídeo de marca con un filmmaker corporativo suele llevar una semana de preproducción, uno o dos días de rodaje y entre cinco y ocho días de edición, porque el guion se revisa varias veces antes de darlo por cerrado.",
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido cada uno" },
      {
        type: "list",
        items: [
          "Evento puntual, conferencia o feria sin necesidad de narrativa de marca: un videógrafo es suficiente y más económico.",
          "Vídeo institucional, de marca o de captación de inversores: aquí el criterio narrativo del filmmaker marca la diferencia.",
          "Entrevista corta para redes sin gran producción: un videógrafo con buen ojo cubre la necesidad.",
          "Serie de contenido con hilo conductor a lo largo de varios meses: mejor un filmmaker que mantenga la coherencia de tono.",
          "Presupuesto ajustado y objetivo puramente documental: no pagues por dirección creativa que no vas a aprovechar.",
          "Vídeo que va a representar a la empresa durante años en su web o en captación comercial: invierte en el enfoque de filmmaker.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Un filmmaker corporativo también puede cubrir un evento?",
        answer:
          "Sí, y de hecho muchos filmmakers, yo incluido, cubrimos eventos. La diferencia está en cómo se plantea el encargo: si además de cubrir se pide una pieza narrativa con hilo propio, entra el enfoque de filmmaker aunque el origen sea un evento puntual.",
      },
      {
        type: "faq",
        question: "¿Cuesta más contratar a un filmmaker que a un videógrafo?",
        answer:
          "Normalmente sí, porque incluye tiempo de preproducción y un montaje más elaborado. La diferencia de precio suele reflejar horas reales de trabajo adicional, no solo posicionamiento de marca personal.",
      },
      {
        type: "faq",
        question: "¿Cómo sé qué necesito antes de pedir presupuesto?",
        answer:
          "Pregúntate si el vídeo necesita contar algo o solo mostrar algo. Si necesitas transmitir una idea o un valor de marca, buscas un filmmaker. Si necesitas un registro fiel de un momento, un videógrafo cubre la necesidad.",
      },
      {
        type: "faq",
        question: "¿Se puede empezar con un videógrafo y escalar a filmmaker más adelante?",
        answer:
          "Sí, es habitual. Muchas empresas empiezan cubriendo eventos y, cuando necesitan un vídeo de marca más elaborado, cambian de enfoque. Lo importante es que el proveedor sea transparente sobre qué tipo de trabajo está entregando en cada encargo.",
      },
      {
        type: "paragraph",
        text: "Si no tienes claro qué necesitas para tu próximo vídeo, escríbeme desde /contacto y te ayudo a decidir antes de pedir presupuesto.",
      },
    ],
  },
  {
    slug: "como-entrevistar-cliente-video-testimonial",
    title: "Cómo entrevistar a un cliente para un vídeo testimonial",
    description:
      "Entrevistar a un cliente para un vídeo testimonial no es poner preguntas frente a una cámara. Cuento cómo preparo la entrevista para que la respuesta suene natural y aporte algo real a la empresa.",
    publishedAt: "2026-07-20",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo testimonial",
      "entrevistas corporativas",
      "producción de vídeo",
      "filmmaker corporativo",
      "guion vídeo corporativo",
    ],
    keyword: "cómo entrevistar a un cliente para un vídeo testimonial",
    intent: "informacional",
    excerpt:
      "Entrevistar a un cliente para un vídeo testimonial exige más preparación que una cámara y una lista de preguntas. Explico cómo lo planteo para que la respuesta suene real, no ensayada.",
    seoTitle: "Cómo entrevistar para un vídeo testimonial | Daniel Acero",
    metaDescription:
      "Cómo entrevistar a un cliente para un vídeo testimonial: preguntas, entorno y ritmo para que la respuesta suene real y no ensayada.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Un vídeo testimonial vale lo que valga la respuesta del cliente delante de cámara. Puedes tener la mejor luz y el mejor plano, que si la persona contesta con frases de manual, el vídeo no sirve para nada. La entrevista es el 80% del resultado, y se prepara antes de encender la cámara, no durante.",
      },
      {
        type: "paragraph",
        text: "Llevo años grabando testimonios de clientes para empresas en Madrid, y la diferencia entre un testimonio que convence y uno que suena a publicidad casi nunca está en la técnica. Está en cómo se plantea la conversación. Te cuento cómo lo preparo yo.",
      },
      {
        type: "image",
        src: "/blog/como-entrevistar-cliente-video-testimonial/hero.webp",
        alt: "Set de grabación con cámara y micrófono preparado para una entrevista",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la preparación cambia el resultado" },
      {
        type: "paragraph",
        text: "Un cliente que accede a grabar un testimonio casi nunca es actor ni portavoz. Le pones un micrófono de solapa, enciendes dos focos y una cámara, y lo normal es que se ponga rígido. Si a eso le sumas que no sabe qué le vas a preguntar, la respuesta sale medida y defensiva, no natural.",
      },
      {
        type: "paragraph",
        text: "La preparación no significa darle las preguntas por escrito para que las memorice. Significa que antes de grabar ya sabes qué historia quieres sacar de esa persona, y que la conversación previa ha bajado su nivel de tensión lo suficiente para que hable como habla en realidad, no como cree que debe sonar en un vídeo corporativo.",
      },
      {
        type: "paragraph",
        text: "Cuando eso falla, el síntoma es siempre el mismo: frases genéricas tipo 'la experiencia ha sido muy positiva' o 'el equipo es muy profesional'. Son frases verdaderas pero inútiles, porque no dicen nada que un espectador no pueda suponer solo por ver el vídeo.",
      },
      { type: "heading", level: 2, text: "Cómo preparo la entrevista" },
      { type: "heading", level: 3, text: "El guion de preguntas, no un cuestionario cerrado" },
      {
        type: "paragraph",
        text: "Antes de la grabación hago una llamada de 15-20 minutos con el cliente para entender qué problema tenía la empresa antes de contratar el servicio y qué cambió después. De ahí saco entre 6 y 8 preguntas abiertas, nunca de sí o no. En vez de '¿Estás contento con el resultado?', pregunto '¿Qué es lo que más te sorprendió del proceso?'. La pregunta abierta obliga a construir una respuesta con contenido real.",
      },
      { type: "heading", level: 3, text: "El entorno y la cámara" },
      {
        type: "paragraph",
        text: "Grabo con dos cámaras, una frontal ligeramente descentrada y otra en plano más abierto, para poder cortar entre planos sin que se note el salto cuando la persona duda o repite una respuesta. El micrófono suele ser de solapa, discreto, porque un micrófono de mano frente a la cara recuerda demasiado a una entrevista de telediario y tensiona al cliente.",
      },
      {
        type: "paragraph",
        text: "Elijo un espacio donde el cliente se sienta cómodo, casi siempre su propia oficina o el lugar donde usa el producto o servicio, no un fondo neutro de estudio. Eso ayuda a que hable de su día a día en vez de ponerse en modo presentación.",
      },
      { type: "heading", level: 3, text: "Romper el hielo antes de grabar" },
      {
        type: "paragraph",
        text: "Los primeros cinco minutos con la cámara ya encendida no los uso. Charlo con la persona sobre algo que no tiene que ver con el vídeo, reviso el encuadre, ajusto el audio. Ese tiempo muerto sirve para que se olvide de que está siendo grabada. La primera respuesta buena casi nunca es la primera que se graba, es la tercera o cuarta.",
      },
      {
        type: "image",
        src: "/blog/como-entrevistar-cliente-video-testimonial/intermedia.webp",
        alt: "Persona hablando con naturalidad frente a un equipo de grabación",
        width: 1920,
        height: 1280,
      },
      {
        type: "paragraph",
        text: "Una entrevista de testimonio suele durar entre 30 y 45 minutos grabados para acabar usando 2 o 3 minutos en el montaje final. Ese ratio es normal: se necesita mucho material para encontrar las frases que realmente aportan. Recortar en DaVinci Resolve las respuestas planas y quedarte con las que tienen matiz es donde se gana el vídeo, no en la grabación en sí.",
      },
      { type: "heading", level: 2, text: "Errores que evito" },
      {
        type: "list",
        items: [
          "Enviar las preguntas exactas por escrito antes de grabar: la respuesta sale memorizada y se nota.",
          "Empezar a grabar la primera respuesta que da la persona, sin dejarla entrar en calor antes.",
          "Hacer preguntas cerradas que se contestan con una palabra.",
          "Grabar en un entorno que no es el suyo, forzando una puesta en escena artificial.",
          "No preguntar por el problema previo: sin el 'antes', el 'después' no tiene contraste ni fuerza.",
          "Cortar la entrevista en cuanto sale una respuesta decente, sin buscar una segunda mejor.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Debo darle las preguntas al cliente antes de la grabación?",
        answer:
          "Yo prefiero compartir los temas generales que vamos a tocar, no las preguntas exactas. Así la persona llega con ideas pero sin una respuesta ensayada palabra por palabra.",
      },
      {
        type: "faq",
        question: "¿Cuánto dura una sesión de grabación de testimonio?",
        answer:
          "Entre 30 y 45 minutos de grabación efectiva, más el tiempo de preparación de luz y sonido. Para el cliente suele ser una hora en total, incluyendo el rato de charla previa a encender la cámara.",
      },
      {
        type: "faq",
        question: "¿Qué hago si el cliente se pone nervioso frente a la cámara?",
        answer:
          "Paro, hablo con él sin grabar y retomo cuando esté más relajado. Forzar una respuesta con la persona tensa se nota en el vídeo final, y ese material casi nunca se acaba usando.",
      },
      {
        type: "faq",
        question: "¿Necesito un guion técnico para este tipo de entrevista?",
        answer:
          "No en el sentido de un guion cerrado. Sí necesito una lista de preguntas abiertas y una idea clara de qué historia busco antes de sentar a la persona delante de la cámara.",
      },
      {
        type: "paragraph",
        text: "Si tienes un cliente dispuesto a grabar un testimonio y no sabes por dónde empezar la conversación previa, escríbeme desde /contacto y te ayudo a plantear las preguntas.",
      },
    ],
  },
  {
    slug: "grabar-en-oficina-sin-interrumpir-trabajo",
    title: "Cómo grabar en una oficina sin interrumpir el trabajo del equipo",
    description:
      "Grabar un vídeo corporativo dentro de una oficina en horario laboral tiene su logística propia. Cuento cómo organizo el rodaje para no parar la operativa del equipo.",
    publishedAt: "2026-07-21",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "rodaje en oficina",
      "producción de vídeo",
      "filmmaker corporativo",
      "logística de rodaje",
    ],
    keyword: "cómo grabar en una oficina sin interrumpir el trabajo del equipo",
    intent: "informacional",
    excerpt:
      "Rodar dentro de una oficina en horario laboral exige tanta planificación como la propia grabación. Explico cómo organizo el equipo, los horarios y el espacio para no frenar el trabajo de nadie.",
    seoTitle: "Grabar en oficina sin interrumpir el trabajo | Daniel Acero",
    metaDescription:
      "Cómo grabar en una oficina sin interrumpir el trabajo del equipo: horarios, espacio y aviso previo para rodar sin parar la operativa diaria.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La primera vez que grabé dentro de una oficina en horario laboral aprendí que el problema no era la cámara. Era la gente trabajando alrededor. Un rodaje mal planteado en un espacio de trabajo real puede parar reuniones, bloquear pasillos y dejar a medio equipo con cara de fastidio antes de que hayas grabado el primer plano.",
      },
      {
        type: "paragraph",
        text: "Llevo años grabando vídeo corporativo dentro de oficinas ocupadas en Madrid, con gente trabajando a pocos metros del equipo. Te cuento cómo organizo el rodaje para que la empresa siga funcionando mientras yo grabo.",
      },
      {
        type: "image",
        src: "/blog/grabar-en-oficina-sin-interrumpir-trabajo/hero.webp",
        alt: "Equipo de grabación trabajando dentro de una oficina mientras un empleado sigue en su puesto",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la logística pesa tanto como la imagen" },
      {
        type: "paragraph",
        text: "Un vídeo corporativo grabado en oficina no se juega solo en el encuadre. Se juega en si consigues el material que necesitas sin generar fricción con la gente que sigue trabajando. Si el rodaje molesta, el cliente lo nota, el equipo lo comenta, y la próxima vez te ponen más trabas para volver a grabar.",
      },
      {
        type: "paragraph",
        text: "La oficina no es un set. Hay llamadas en curso, reuniones que no se pueden mover y personas que no han firmado para salir en cámara ese día. Cada uno de esos factores condiciona por dónde puedes moverte y a qué hora.",
      },
      {
        type: "paragraph",
        text: "Cuando planteo el rodaje bien, la mayoría de empleados ni se entera de que hubo una grabación hasta que ve el vídeo terminado. Esa es la señal de que la logística ha funcionado.",
      },
      { type: "heading", level: 2, text: "Cómo organizo el rodaje" },
      { type: "heading", level: 3, text: "Antes de llegar: horario y aviso al equipo" },
      {
        type: "paragraph",
        text: "Pido siempre el calendario de salas y reuniones del día antes de fijar la franja de grabación. Las horas mejores suelen ser primera hora de la mañana, antes de que la oficina se llene, o la franja de después de comer, cuando bajan las llamadas. Pido a mi contacto en la empresa que avise al equipo con un email corto: qué día, qué zonas, y que nadie tiene obligación de salir en plano si no quiere.",
      },
      { type: "heading", level: 3, text: "Equipo compacto para moverte rápido" },
      {
        type: "paragraph",
        text: "En oficina trabajo con cámara al hombro o en trípode ligero, casi nunca con raíles ni luces grandes salvo que la escena lo pida. Cuanto más aparatoso es el montaje, más tiempo se tarda en cambiar de zona y más se nota la presencia del equipo. Un par de paneles LED pequeños y un micrófono de solapa cubren la mayoría de planos de oficina sin necesitar cortar el paso por un pasillo.",
      },
      { type: "heading", level: 3, text: "Cómo me muevo sin bloquear el espacio" },
      {
        type: "paragraph",
        text: "Grabo en tramos cortos, de 10 a 15 minutos por zona, y libero el espacio en cuanto tengo el plano. Si necesito repetir una toma, prefiero volver más tarde a esa misma zona antes que tener a alguien esperando de pie mientras ajusto la cámara. También evito grabar de espaldas a los accesos: la gente necesita poder pasar sin rodear el equipo o esperar a que grite 'corten'.",
      },
      {
        type: "image",
        src: "/blog/grabar-en-oficina-sin-interrumpir-trabajo/intermedia.webp",
        alt: "Pasillo de oficina despejado con luz natural durante una jornada de grabación",
        width: 1920,
        height: 1501,
        caption: "Despejar el paso siempre tiene prioridad sobre conseguir el plano perfecto a la primera.",
      },
      {
        type: "paragraph",
        text: "Cuando hay que grabar cerca de puestos de trabajo activos, pido al empleado que siga con lo suyo en vez de fingir que trabaja. Un actor improvisado tecleando sin sentido se nota a kilómetros en el montaje final. Prefiero planos donde la persona hace algo real, aunque tenga que repetir el gesto dos o tres veces para que quede natural en cámara.",
      },
      { type: "heading", level: 2, text: "Errores que evito" },
      {
        type: "list",
        items: [
          "Fijar el rodaje sin consultar el calendario de reuniones de la empresa.",
          "Montar equipo grande en pasillos estrechos o zonas de paso obligado.",
          "Grabar a alguien sin avisarle antes, aunque sea de espaldas o de fondo.",
          "Alargar una toma en una zona más de lo necesario cuando hay gente esperando para pasar.",
          "Pedir a un empleado que finja estar trabajando en vez de dejarle hacer su tarea real.",
          "No tener un plan B de horario si una sala se ocupa a última hora.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto tiempo necesito bloquear en la oficina para grabar?",
        answer:
          "Para un vídeo corporativo estándar con varias zonas, entre 3 y 4 horas suele ser suficiente, repartidas en tramos cortos por espacio para no ocupar ninguna zona demasiado tiempo seguido.",
      },
      {
        type: "faq",
        question: "¿Hay que avisar a todos los empleados aunque no salgan en cámara?",
        answer:
          "Sí. Aunque solo grabe a dos o tres personas, aviso a todo el equipo de la zona con antelación. Evita caras de sorpresa y reduce las interrupciones durante el rodaje.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar durante una jornada normal sin parar la actividad?",
        answer:
          "Sí, si se planifica por franjas y zonas. La clave es no ocupar el mismo espacio más de 15 minutos seguidos y evitar las horas de mayor actividad, como el inicio de la mañana o las reuniones fijas.",
      },
      {
        type: "faq",
        question: "¿Qué hago si un empleado no quiere salir en el vídeo?",
        answer:
          "Se respeta sin preguntar por qué. Cambio el encuadre o espero a que esa persona no esté en la zona que voy a grabar. Forzar la aparición de alguien incómodo nunca compensa.",
      },
      {
        type: "paragraph",
        text: "Si tienes que grabar en tu oficina y no sabes cómo encajarlo sin parar el día a día del equipo, escríbeme desde /contacto y planteamos juntos la logística.",
      },
    ],
  },
  {
    slug: "video-corporativo-resultados-anuales",
    title: "Vídeo corporativo de resultados anuales: cómo comunicarlos bien",
    description:
      "Cómo planteo un vídeo corporativo de resultados anuales para que informe a empleados e inversores sin sonar a autobombo ni a PDF leído en voz alta.",
    publishedAt: "2026-07-22",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "comunicación interna",
      "vídeo institucional",
      "resultados anuales",
      "producción audiovisual",
    ],
    keyword: "vídeo corporativo de resultados anuales",
    intent: "informacional",
    excerpt:
      "Un vídeo de resultados anuales no vende hacia fuera, informa hacia dentro. Cuento cómo lo estructuro para que empleados e inversores recuerden lo importante sin aburrirse a los tres minutos.",
    seoTitle: "Vídeo corporativo de resultados anuales | Daniel Acero",
    metaDescription:
      "Vídeo corporativo de resultados anuales: cómo estructurarlo, qué duración usar y qué errores evitar para comunicar bien a empleados e inversores.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "La primera vez que un cliente me pidió un vídeo para presentar los resultados anuales a toda la empresa, mi primer instinto fue tratarlo como un vídeo institucional cualquiera. Me equivoqué. Un vídeo de resultados anuales no vende nada hacia fuera: informa hacia dentro, a gente que ya conoce la empresa y que va a notar enseguida si el tono suena a autobombo.",
      },
      {
        type: "paragraph",
        text: "Llevo varios años grabando este tipo de piezas para equipos de dirección que quieren cerrar el año de otra forma que no sea un PDF de cuarenta diapositivas leído en una sala con las luces apagadas. Te cuento cómo lo planteo para que funcione.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-resultados-anuales/hero.webp",
        alt: "Directivo presentando los resultados anuales de la empresa a su equipo en una sala de reuniones",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es y por qué importa" },
      {
        type: "paragraph",
        text: "Un vídeo corporativo de resultados anuales es una pieza breve, normalmente entre tres y seis minutos, en la que la dirección comunica cómo ha ido el año a empleados, socios o inversores. No es un vídeo de marca ni una pieza de captación: es comunicación interna con forma de vídeo.",
      },
      {
        type: "paragraph",
        text: "Importa porque el formato cambia cómo se recibe el mensaje. Un CEO leyendo cifras en una diapositiva transmite datos. El mismo CEO hablando a cámara, con las cifras apoyadas por gráficos claros y un par de testimonios de equipo, transmite además contexto y compromiso. La gente recuerda mejor lo que ve dicho en voz alta que lo que lee en una tabla.",
      },
      {
        type: "paragraph",
        text: "También filtra mejor la información. En un vídeo de cinco minutos no caben cuarenta métricas. Obliga a la dirección a decidir qué tres o cuatro cosas quiere que el equipo recuerde del año, y eso ya es un ejercicio útil antes de encender la cámara.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Definir para quién es antes que qué se dice" },
      {
        type: "paragraph",
        text: "Antes de escribir una sola línea de guion, pregunto quién va a ver esto: solo empleados, también inversores, o una mezcla de ambos. El tono cambia bastante. Para un equipo interno se puede hablar de tú a tú, con más cercanía y hasta bromas internas. Para inversores el registro sube, se pide más precisión en las cifras y menos margen para la improvisación.",
      },
      { type: "heading", level: 3, text: "Combinar datos con una historia humana" },
      {
        type: "paragraph",
        text: "Las cifras solas cansan a los tres minutos. Intercalo los datos clave con algo tangible: un proyecto concreto que salió bien, una anécdota de un cliente, un momento del equipo que ilustre por qué esas cifras tienen sentido. No hace falta un storytelling elaborado, basta con anclar cada dato a algo que la gente pueda visualizar en vez de solo escuchar un porcentaje.",
      },
      { type: "heading", level: 3, text: "Decidir la duración y el formato con la audiencia en mente" },
      {
        type: "paragraph",
        text: "Para un equipo de veinte personas grabo algo más cercano, con la dirección a cámara en un espacio de la propia oficina. Para una comunicación a inversores suelo apoyar más en gráficos animados y menos en el careo directo, porque el peso recae en la precisión del dato. En ambos casos evito pasar de los seis minutos: si hace falta más tiempo para contar todo, mejor partirlo en dos piezas cortas que en una única pieza larga que nadie termina de ver.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-resultados-anuales/intermedia.webp",
        alt: "Pantalla con gráficas de resultados anuales durante una reunión de equipo",
        width: 1920,
        height: 1280,
        caption: "Un par de gráficos claros comunican más que veinte cifras leídas seguidas.",
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Meter todas las métricas del año sin filtrar cuáles importan de verdad.",
          "Grabar a la dirección leyendo un guion sin ensayar, lo que se nota enseguida en cámara.",
          "Usar un tono de venta o marketing cuando la audiencia es interna.",
          "Alargar el vídeo más de seis o siete minutos por no querer dejar nada fuera.",
          "No enseñar el guion final a la dirección antes de grabar, lo que genera dudas delante de la cámara.",
          "Ignorar el sonido de la sala de grabación, algo que se agrava si hay eco o ruido de oficina de fondo.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debería durar un vídeo de resultados anuales?",
        answer:
          "Entre tres y seis minutos suele ser el punto óptimo. Por debajo de tres minutos es difícil dar contexto a las cifras, y por encima de seis empieza a perderse atención, sobre todo en un vídeo interno que la gente ve desde el móvil.",
      },
      {
        type: "faq",
        question: "¿Quién debería aparecer hablando en el vídeo?",
        answer:
          "Normalmente la persona con más peso simbólico en la empresa, ya sea CEO o socio fundador. Si el equipo es grande, ayuda añadir una segunda voz, como un responsable de área, para que no todo el peso del mensaje recaiga en una sola persona.",
      },
      {
        type: "faq",
        question: "¿Hace falta un guion cerrado o se puede improvisar?",
        answer:
          "Recomiendo un guion con los puntos clave escritos, aunque no palabra por palabra. Dejo margen para que la persona hable con sus propias palabras sobre esos puntos, porque leer un texto cerrado a cámara casi siempre se nota artificial.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar en la propia oficina o hace falta un estudio?",
        answer:
          "Se puede grabar en la oficina sin problema, siempre que se controle el sonido y la luz. Una sala de reuniones con buena luz natural y sin eco suele bastar; no hace falta un estudio para este tipo de pieza.",
      },
      {
        type: "paragraph",
        text: "Si tu empresa está pensando en cerrar el año con un vídeo de resultados en vez de otra presentación en PDF, escríbeme desde /contacto y hablamos de cómo plantearlo.",
      },
    ],
  },
  {
    slug: "video-corporativo-lanzamiento-producto",
    title: "Vídeo corporativo para lanzamiento de producto: cómo lo planteo",
    description:
      "Cómo organizo un vídeo de lanzamiento de producto cuando la fecha del evento no se puede mover: planificación inversa, formato por canal y qué dejar para el final.",
    publishedAt: "2026-07-23",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "vídeo corporativo",
      "lanzamiento de producto",
      "vídeo de marca",
      "producción audiovisual",
      "filmmaker Madrid",
    ],
    keyword: "vídeo corporativo para lanzamiento de producto",
    intent: "informacional",
    excerpt:
      "Un vídeo de lanzamiento no tiene margen para retrasarse: la fecha del evento manda. Cuento cómo planifico hacia atrás para que el vídeo llegue a tiempo sin sacrificar calidad.",
    seoTitle: "Vídeo corporativo para lanzamiento de producto | Daniel Acero",
    metaDescription:
      "Vídeo corporativo para lanzamiento de producto: cómo planifico el rodaje hacia atrás desde la fecha del evento y qué errores evito antes de grabar.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Un cliente me escribió hace unos meses con la fecha ya cerrada: la presentación de lanzamiento era en cinco semanas y necesitaba un vídeo para abrir el evento. No había guion, ni referencias, solo el producto y la fecha. Es el punto de partida más habitual cuando hablo de vídeo de lanzamiento.",
      },
      {
        type: "paragraph",
        text: "Un vídeo de lanzamiento de producto es distinto a un vídeo corporativo genérico porque tiene una fecha límite que no se puede mover y un único objetivo: generar expectación justo antes de que el producto salga al mercado. Aquí no hay margen para retrasar la entrega dos semanas porque el equipo de marketing esté revisando el naming.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-lanzamiento-producto/hero.webp",
        alt: "Presentación de lanzamiento de producto ante una sala con pantalla grande",
        width: 1920,
        height: 1372,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es y por qué importa" },
      {
        type: "paragraph",
        text: "Un vídeo de lanzamiento es la pieza audiovisual que acompaña la salida al mercado de un producto: puede abrir un evento en directo, protagonizar una campaña en redes o servir de teaser antes de la fecha oficial. Combina lenguaje de marca con información concreta sobre qué hace el producto y por qué importa ahora.",
      },
      {
        type: "paragraph",
        text: "Importa porque el calendario manda sobre el proceso creativo. En un vídeo institucional normal puedo permitirme mover el rodaje una semana si algo no encaja. En un lanzamiento no: la fecha del evento, la campaña de prensa y las redes ya están coordinadas, y el vídeo tiene que llegar a tiempo aunque el producto cambie de aspecto hasta el último momento.",
      },
      {
        type: "paragraph",
        text: "También importa porque suele ser la primera vez que mucha gente ve el producto en movimiento. Un catálogo o una ficha técnica explican qué hace. El vídeo explica por qué debería importarte, y eso cambia el tipo de planos y de ritmo que necesito.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Planificar hacia atrás desde la fecha del evento" },
      {
        type: "paragraph",
        text: "Lo primero que hago es coger la fecha de lanzamiento y contar hacia atrás: cuándo tiene que estar el máster final, cuándo la primera versión para aprobación interna, cuándo el rodaje, y cuándo tengo que tener cerrado el guion. Casi siempre el margen real de rodaje y montaje es más corto de lo que el cliente cree, porque la mitad del calendario se va en aprobaciones internas.",
      },
      { type: "heading", level: 3, text: "Elegir el formato según el canal de lanzamiento" },
      {
        type: "paragraph",
        text: "No es lo mismo un vídeo pensado para abrir una keynote en una pantalla grande que uno pensado para un teaser de quince segundos en Instagram. Antes de grabar pregunto dónde se va a ver primero: si es en el evento, priorizo planos que funcionen en pantalla completa y un ritmo más pausado; si es para redes, dejo margen en el encuadre para recortar a formato vertical sin perder al producto de plano.",
      },
      { type: "heading", level: 3, text: "Dejar el rodaje del producto físico para el final" },
      {
        type: "paragraph",
        text: "Grabo primero todo lo que no depende del producto terminado: entrevistas, planos de contexto, b-roll del equipo trabajando. El producto físico o el prototipo definitivo lo dejo para las últimas fechas posibles, porque casi siempre hay un cambio de última hora en acabado, color o packaging que llega justo antes del lanzamiento.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-lanzamiento-producto/intermedia.webp",
        alt: "Estudio de fotografía y vídeo preparado para grabar un producto",
        width: 1920,
        height: 1280,
        caption: "El producto físico se graba al final, cuando ya está en su acabado definitivo.",
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Empezar a grabar sin tener cerrado el naming final del producto.",
          "No dejar margen para un segundo corte si cambia el mensaje de marketing a última hora.",
          "Grabar el producto en un entorno que no refleja el packaging o acabado definitivo.",
          "Subestimar el tiempo que tarda la aprobación interna del guion y del primer corte.",
          "No preparar desde el principio una versión corta para redes además de la pieza principal del evento.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto margen necesito antes de la fecha de lanzamiento?",
        answer:
          "Como mínimo cuatro semanas entre el cierre del guion y el evento, contando rodaje, montaje y una ronda de aprobación interna. Con menos de eso hay que recortar fases, casi siempre a costa de la revisión.",
      },
      {
        type: "faq",
        question: "¿Hace falta grabar el producto físico o vale con renders?",
        answer:
          "Depende del producto. Si es algo tangible que se puede tocar y manipular en cámara, grabarlo en directo transmite más que un render. Los renders funcionan bien como apoyo cuando el producto todavía no existe en su forma final o cuando hay piezas que no se pueden fotografiar a tiempo.",
      },
      {
        type: "faq",
        question: "¿Qué duración debe tener un vídeo de lanzamiento?",
        answer:
          "Para abrir un evento en directo, entre noventa segundos y tres minutos suele funcionar. Para redes conviene tener además una versión de quince a treinta segundos, pensada para verse sin sonido y con el mensaje claro en los primeros tres segundos.",
      },
      {
        type: "faq",
        question: "¿Se puede reutilizar este vídeo después del lanzamiento?",
        answer:
          "Sí, y conviene planificarlo desde el rodaje. Grabo siempre algo más de material del necesario para poder montar después piezas cortas para redes o para la web, sin tener que organizar un segundo rodaje solo para eso.",
      },
      {
        type: "paragraph",
        text: "Si tienes una fecha de lanzamiento ya cerrada y necesitas un vídeo que llegue a tiempo, escríbeme desde /contacto y vemos cómo encajarlo en el calendario.",
      },
    ],
  },
  {
    slug: "video-corporativo-rsc-sostenibilidad",
    title: "Vídeo corporativo de RSC y sostenibilidad: cómo lo planteo",
    description:
      "Cómo planteo un vídeo de RSC y sostenibilidad para que muestre hechos filmables en vez de discurso genérico, y qué errores evito para no caer en el greenwashing.",
    publishedAt: "2026-07-24",
    readingTime: "4 min",
    category: "Guía",
    tags: [
      "RSC",
      "sostenibilidad",
      "vídeo corporativo",
      "comunicación corporativa",
      "vídeo de marca",
      "filmmaker Madrid",
    ],
    keyword: "vídeo corporativo de RSC y sostenibilidad",
    intent: "informacional",
    excerpt:
      "Un vídeo de RSC no se sostiene con paneles solares de stock ni discursos de intenciones. Cuento cómo lo planteo para que muestre hechos filmables en vez de postureo.",
    seoTitle: "Vídeo corporativo de RSC y sostenibilidad | Daniel Acero",
    metaDescription:
      "Vídeo corporativo de RSC y sostenibilidad: cómo lo cuento con hechos filmables, sin imágenes de stock ni promesas que no se pueden verificar.",
    heroKicker: "Blog / Guía",
    body: [
      {
        type: "paragraph",
        text: "Un cliente me llamó con el informe de sostenibilidad ya cerrado y me pidió un vídeo para acompañarlo. Cuando le pregunté qué quería mostrar, la respuesta fue vaga: algo sobre valores, sobre compromiso con el planeta. Es el punto de partida más habitual cuando hablo de vídeo de RSC: mucho discurso y poca imagen concreta que lo sostenga.",
      },
      {
        type: "paragraph",
        text: "Un vídeo de RSC y sostenibilidad no es un vídeo institucional con paneles solares de fondo de stock. Es la pieza que demuestra, con hechos filmables, que las iniciativas que la empresa cuenta en su memoria anual existen de verdad. Ahí está la diferencia entre un vídeo que suma credibilidad y uno que parece publicidad barata sacada de un banco de imágenes.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-rsc-sostenibilidad/hero.webp",
        alt: "Equipo de una empresa reunido para revisar iniciativas de sostenibilidad",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es y por qué importa" },
      {
        type: "paragraph",
        text: "Un vídeo de RSC recoge las acciones de una empresa en materia ambiental, social y de gobernanza y las traduce a imágenes que se pueden enseñar a empleados, inversores o clientes. No sustituye a la memoria de sostenibilidad, la complementa: donde el informe da cifras y tablas, el vídeo da contexto humano y muestra el lugar donde ocurre el cambio.",
      },
      {
        type: "paragraph",
        text: "Importa porque el escrutinio ha subido. Un vídeo con imágenes de stock de paneles solares y bosques que no tienen nada que ver con la actividad real de la empresa se nota a la legua, y hoy se paga caro en reputación. Cualquiera que trabaje en comunicación corporativa sabe que el greenwashing se detecta en segundos, y un vídeo mal planteado puede hacer más daño que no tener vídeo.",
      },
      {
        type: "paragraph",
        text: "También importa puertas adentro. Cada vez veo más empresas que usan estos vídeos en procesos de selección o en el onboarding de nuevos empleados, no solo de cara al exterior. Un candidato que ve acciones reales antes de firmar el contrato llega con expectativas distintas a uno que solo lee un PDF.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Buscar hechos concretos, no declaraciones de intenciones" },
      {
        type: "paragraph",
        text: "Antes de montar el equipo pido una lista de acciones ya ejecutadas, no de intenciones a futuro: una planta que cambió de proveedor energético, un programa de voluntariado con horas reales invertidas, una política de conciliación que se aplica de verdad. Si la acción no se puede filmar o documentar con datos concretos, no entra en el guion, por muy bien que suene en una diapositiva.",
      },
      { type: "heading", level: 3, text: "Grabar los procesos reales, no naturaleza genérica" },
      {
        type: "paragraph",
        text: "En vez de recurrir a b-roll de bosques o energías renovables sin relación con la empresa, grabo la planta, la oficina o el almacén donde ocurre el cambio real: el punto de reciclaje interno, la línea de producción con el nuevo proceso, la persona que gestiona el programa social. Cuesta más planificar el rodaje que comprar stock, pero es lo único que hace creíble el resultado.",
      },
      { type: "heading", level: 3, text: "Dejar hablar a quien ejecuta, no solo a dirección" },
      {
        type: "paragraph",
        text: "El discurso institucional de un director de sostenibilidad es necesario pero no basta por sí solo. Meto siempre testimonios de empleados que llevan la iniciativa en el día a día: el responsable de planta que gestiona los residuos, la persona de RRHH que coordina el programa de voluntariado, el operario que usa la maquinaria nueva. Son quienes dan la textura real que un guion corporativo no puede fabricar desde un despacho.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-rsc-sostenibilidad/intermedia.webp",
        alt: "Trabajador de planta industrial implicado en una iniciativa de sostenibilidad",
        width: 1920,
        height: 1280,
        caption: "Las personas que ejecutan la iniciativa dan más credibilidad que el discurso de dirección.",
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Usar imágenes de banco genéricas de renovables o naturaleza que no tienen relación con la actividad real de la empresa.",
          "Centrar todo el vídeo en el discurso de dirección sin mostrar ninguna acción concreta en marcha.",
          "Prometer cifras de impacto que no se pueden sustentar con datos verificables cuando alguien pregunte.",
          "Quedarse solo en lo medioambiental e ignorar la parte social y de gobernanza de la RSC.",
          "Grabar una única vez al año en vez de ir documentando iniciativas a lo largo de los meses.",
          "No adaptar el mismo material a los distintos públicos: empleados, inversores y clientes esperan cosas distintas.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar un vídeo de RSC y sostenibilidad?",
        answer:
          "Entre dos y cuatro minutos para la versión completa que acompaña la memoria anual, con cortes de treinta segundos para redes sociales centrados en una sola iniciativa cada uno.",
      },
      {
        type: "faq",
        question: "¿Hace falta esperar a tener cerrado el informe de sostenibilidad?",
        answer:
          "No. Prefiero grabar las iniciativas a medida que ocurren durante el año y montar el vídeo cuando el informe esté listo. Esperar al cierre del informe suele dejar poco margen y obliga a recrear situaciones que ya pasaron.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar en varias sedes o plantas de la empresa?",
        answer:
          "Sí, y muchas veces es necesario si las iniciativas relevantes están repartidas. Hay que planificar bien los desplazamientos porque cada sede añade un día de rodaje que no siempre está presupuestado desde el principio.",
      },
      {
        type: "faq",
        question: "¿Sirve el mismo vídeo para la memoria anual y para redes sociales?",
        answer:
          "La pieza larga funciona para la memoria y para presentaciones a inversores, pero para redes conviene cortar piezas independientes de una sola iniciativa cada una, porque el consumo ahí es más corto y disperso.",
      },
      {
        type: "paragraph",
        text: "Si tu empresa tiene iniciativas de RSC reales y quieres contarlas sin que suenen a relleno, escríbeme desde /contacto y vemos qué merece la pena filmar.",
      },
    ],
  },
]

export function getAllPosts() {
  return [...blogPosts].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogMetadata(): Metadata {
  return buildMetadata({
    title: "Blog de vídeo corporativo, eventos y producción audiovisual en Madrid",
    description:
      "Artículos sobre vídeo corporativo, grabación de eventos, aftermovies y estrategia audiovisual para empresas y marcas en Madrid.",
    path: "/blog",
    keywords: [
      "blog video corporativo madrid",
      "grabacion de eventos madrid",
      "aftermovie evento corporativo",
      "produccion audiovisual empresas madrid",
    ],
  })
}

export function getPostMetadata(post: BlogPost): Metadata {
  return {
    ...buildMetadata({
      title: post.seoTitle,
      description: post.metaDescription,
      path: `/blog/${post.slug}`,
      keywords: [post.keyword, ...post.tags],
    }),
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Daniel Acero",
      title: post.seoTitle,
      description: post.metaDescription,
      locale: "es_ES",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  }
}

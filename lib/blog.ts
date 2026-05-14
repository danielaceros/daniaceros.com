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

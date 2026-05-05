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

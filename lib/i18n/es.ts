// lib/i18n/es.ts
// Diccionario ESPAÑOL = fuente de verdad del tipo `Dictionary`.
// Añade aquí primero cualquier clave nueva: en.ts dará error de TypeScript
// hasta que tenga la misma clave. Los textos deben ser EXACTAMENTE los que ya
// había en los componentes (la versión ES no puede cambiar ni una coma).
// Placeholders tipo {title} se rellenan con `format()` de lib/i18n/index.ts.

const es = {
  meta: {
    siteName: "Daniel Acero",
    layout: {
      defaultTitle: "Daniel Acero | Filmmaker corporativo en Madrid",
      description:
        "Filmmaker corporativo y videógrafo de eventos en Madrid. Vídeo profesional para empresas, marcas e instituciones.",
      keywords: [
        "filmmaker madrid",
        "videografo madrid",
        "video corporativo madrid",
        "video eventos madrid",
        "produccion audiovisual para empresas",
      ],
      ogTitle: "Daniel Acero | Filmmaker corporativo en Madrid",
      ogDescription:
        "Vídeo profesional para eventos, marcas y empresas en Madrid. Producción audiovisual con enfoque cinematográfico.",
      twitterTitle: "Daniel Acero | Filmmaker corporativo en Madrid",
      twitterDescription: "Vídeo profesional para empresas, marcas y eventos en Madrid.",
    },
    home: {
      title: "Filmmaker corporativo y videógrafo en Madrid",
      description:
        "Producción audiovisual para empresas, marcas y eventos en Madrid. Vídeo corporativo con enfoque cinematográfico y ejecución profesional.",
      keywords: [
        "filmmaker corporativo madrid",
        "videografo eventos madrid",
        "productora audiovisual madrid",
      ],
    },
    portfolio: {
      title: "Portfolio",
      description:
        "Casos reales de vídeo corporativo, institucional y eventos. Portfolio audiovisual de Daniel Acero.",
      keywords: ["portfolio filmmaker", "casos de exito audiovisual", "video corporativo ejemplos"],
    },
    project: {
      notFoundTitle: "Proyecto no encontrado",
      fallbackDescription: "Proyecto audiovisual corporativo de Daniel Acero.",
      keywords: ["video corporativo", "produccion audiovisual", "filmmaker madrid"],
    },
  },
  schema: {
    serviceType: [
      "Video corporativo",
      "Video institucional",
      "Video de eventos",
      "Produccion audiovisual",
    ],
    /** knowsAbout del ProfessionalService y la Person (JSON-LD). */
    knowsAbout: [
      "Vídeo corporativo",
      "Vídeo de eventos",
      "Vídeo institucional",
      "Filmmaking",
      "Producción audiovisual",
      "Contenido para redes sociales",
    ],
  },
  breadcrumbs: {
    home: "Inicio",
  },
  header: {
    nav: {
      portfolio: "Portfolio",
      about: "Sobre mí",
      clients: "Clientes",
      caseStudies: "Casos de éxito",
      services: "Servicios",
      pricing: "Precios",
      process: "Proceso",
      hire: "Contratar",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contacto",
    },
    cta: "Cuéntame tu proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageSwitcherLabel: "Idioma",
  },
  hero: {
    title: "DANIEL ACERO",
    tagline: "Filmmaker corporativo y videógrafo de eventos en Madrid",
    description:
      "Transformo eventos empresariales, congresos y conferencias en piezas audiovisuales profesionales para marcas y empresas en Madrid.",
    ctaLabel: "Pide presupuesto",
    trustedLogosAlt: "Logos de clientes",
    trustedLogosLabel: "Algunas de las empresas que han confiado en mí:",
  },
  vsl: {
    title: "Mira esto primero",
    play: "Reproducir vídeo",
    pause: "Pausar vídeo",
    videoLabel: "Vídeo de presentación de Daniel Acero",
    unmute: "Activar sonido",
    mute: "Silenciar",
    volume: "Volumen",
    progress: "Progreso del vídeo",
    quality: "Calidad",
    auto: "Auto",
    fullscreen: "Pantalla completa",
    exitFullscreen: "Salir de pantalla completa",
    // Pantalla final (repite las opciones que enseña el propio vídeo, ahora pulsables)
    endTitle: "¿tienes un evento o un proyecto en mente?",
    endForm: "rellena el formulario",
    endWhatsapp: "WhatsApp",
    endEmail: "email",
    replay: "Volver a ver",
  },
  about: {
    title: "Sobre mí",
    imageAlt: "Daniel Acero",
    paragraphs: [
      "Soy Daniel Acero, filmmaker con más de seis años de experiencia ayudando a empresas y marcas a transformar sus eventos en historias visuales que perduran.",
      "He tenido la oportunidad de cubrir congresos, lanzamientos, conferencias y experiencias de marca en toda España, siempre con un objetivo claro: capturar la esencia de cada momento.",
      "Mi misión es que cada historia siga viva mucho después de que el evento acabe.",
    ],
  },
  contact: {
    title: "¿Hablamos de tu proyecto?",
    intro:
      "Si estás valorando crear un vídeo para tu empresa, cuéntame qué tienes en mente y te digo en minutos si encaja y cómo lo haría. Te respondo personalmente. Sin compromiso.",
    asideText:
      "Cuéntame tu proyecto y te respondo en menos de 24 horas con una propuesta personalizada.",
    mobileAsideText:
      "Si prefieres, también puedes escribirme directamente por email o WhatsApp y te respondo personalmente.",
    whatsappMessage:
      "Hola Dani! Estamos valorando crear vídeo para la empresa y quería saber cómo trabajas y si encaja para nuestro caso.",
    footer: {
      legalNotice: "aviso legal",
      cookies: "política de cookies",
      privacy: "política de privacidad",
    },
  },
  contactForm: {
    loadAria: "Cargar formulario de contacto",
    loading: "Cargando formulario…",
  },
  portfolio: {
    sectionTitle: "Portfolio",
    viewMoreOnTv: "Ver más, como en Instagram",
    viewVideo: "Ver vídeo de {title}",
    viewProject: "Ver proyecto {title}",
    openVideo: "Abrir video de {title}",
    videoDialog: "Video de {title}",
    close: "Cerrar",
    closeVideo: "Cerrar video",
    clickToWatch: "Haz clic para ver el video completo",
    hero: {
      title: "Historias visuales que conectan con empresas, instituciones y marcas",
      paragraphs: [
        "Mi trabajo consiste en transformar eventos, ideas y experiencias corporativas en piezas audiovisuales con narrativa y estética cinematográfica. A continuación encontrarás una selección de proyectos realizados en diferentes sectores: empresas, instituciones, deporte, formación, activaciones y eventos profesionales.",
        "Cada proyecto tiene su propia historia, su propio objetivo y su propio enfoque visual. Aquí puedes descubrir cómo trabajo y qué resultados genero para mis clientes.",
      ],
    },
  },
}

export type Dictionary = typeof es

export default es

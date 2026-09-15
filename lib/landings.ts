// lib/landings.ts
// Landings de funnel para los anuncios de eventos corporativos EV01–EV12 (Meta Ads, estrategia multilandings).
// Una ruta por anuncio en /lp/<slug>, solo en ES, con message-match del reel: H1 = su gancho, subtítulo = su
// promesa, dolores y expertise sacados de lo que Dani dice en ese reel. Plantilla única: app/[lang]/lp/[slug]/page.tsx.
// Son funnel, no SEO: noindex, fuera del sitemap, de lib/i18n/routes.ts y de public/llms.txt.
//
// Fuente de verdad del copy: ~/Projects/filmmaking-ads/landings/LANDINGS_CONTENT.json (sesión «A0 Studios ads»).
// Si Dani retoca un corte, se actualiza ese JSON y se vuelca aquí. Nada de cifras, clientes ni precios que no
// estén en los reels.

export type Landing = {
  /** Id del anuncio ("ev01"…): va como `lp_id` en todos los eventos de medición. */
  id: string
  /** Reel de origen ("EV01"…), solo referencia. */
  reel: string
  slug: string
  /** <title> completo: ya incluye " | Dani Acero" (sin sufijo de plantilla). */
  metaTitle: string
  /** Gancho del reel adaptado a titular (H1). */
  title: string
  /** Promesa del reel. También es la meta description. */
  subtitle: string
  /** Dolor concreto del reel (2–3). */
  pains: string[]
  /** Expertise que menciona ese reel (4 líneas). */
  expertise: string[]
  ctaLabel: string
}

export const LANDINGS: Landing[] = [
  {
    id: "ev01",
    reel: "EV01",
    slug: "evento-corporativo-madrid",
    metaTitle: "Filmmaker para eventos corporativos en Madrid | Dani Acero",
    title: "¿Organizas un evento corporativo en Madrid? Esto te interesa",
    subtitle: "Transformo tu evento en contenido que merezca la pena ser visto: los brutos, ese mismo día en Google Drive, y el vídeo editado en 24–48 horas.",
    pains: [
      "Quieres que tu evento se convierta en contenido que merezca la pena ser visto.",
      "No quieres esperar semanas: los brutos, ese mismo día en Google Drive.",
      "Necesitas el vídeo editado y listo para publicar en 24–48 horas.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Brutos el mismo día en Google Drive",
      "Vídeo editado en 24–48 horas, listo para publicar",
    ],
    ctaLabel: "Quiero más información",
  },
  {
    id: "ev02",
    reel: "EV02",
    slug: "error-mas-caro-de-tu-evento",
    metaTitle: "El error más caro de tu evento: grabarlo mal | Dani Acero",
    title: "Inviertes 2.000–3.000 € en tu evento y después nadie lo graba bien",
    subtitle: "Por una parte pequeña de tu presupuesto tienes el evento grabado y editado en menos de 48 horas.",
    pains: [
      "Gastas en ponentes, espacio y catering, y el vídeo lo improvisa alguien de tu equipo con el móvil.",
      "Es el error más caro y silencioso que puedes cometer.",
      "Cuando el evento termina, no queda nada que puedas usar para llenar el siguiente.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Brutos el mismo día en Google Drive",
      "Vídeo editado en menos de 48 horas, listo para publicar",
    ],
    ctaLabel: "Quiero mi evento bien grabado",
  },
  {
    id: "ev03",
    reel: "EV03",
    slug: "no-lo-grabes-con-el-movil",
    metaTitle: "No grabes tu evento con el móvil | Dani Acero",
    title: "«Ya lo grabamos nosotros con el móvil»: la frase que más arrepentimiento genera después de un evento",
    subtitle: "Cubro tu evento de manera profesional y te entrego el material completamente editado en menos de 48 horas.",
    pains: [
      "El vídeo sale movido y la luz es mala.",
      "El audio no se entiende.",
      "Al final lo subís con vergüenza. O directamente no lo subís.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Brutos el mismo día en Google Drive",
      "Material completamente editado en menos de 48 horas",
    ],
    ctaLabel: "Quiero contenido profesional para mi evento",
  },
  {
    id: "ev04",
    reel: "EV04",
    slug: "sin-segunda-toma",
    metaTitle: "En un evento en directo no hay segunda toma | Dani Acero",
    title: "En un evento en directo no hay repetición. Por eso importa quién lo graba",
    subtitle: "Llego sabiendo exactamente qué momentos no me puedo perder y convierto tu evento en contenido que convierte.",
    pains: [
      "El ponente da la mejor charla de su vida y nadie lo graba bien.",
      "Ese momento desaparece: no hay una segunda toma.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Llego sabiendo exactamente qué momentos no me puedo perder",
      "Vídeo editado en menos de 48 horas, listo para publicar",
    ],
    ctaLabel: "Quiero saber más",
  },
  {
    id: "ev05",
    reel: "EV05",
    slug: "video-del-evento-sin-publicar",
    metaTitle: "¿El vídeo de tu evento sigue sin publicar? | Dani Acero",
    title: "¿Sigues con el vídeo de tu último evento aún sin publicar?",
    subtitle: "Voy a tu evento y en menos de 48 horas te saco todo el contenido editado y listo para publicar.",
    pains: [
      "Contratas a alguien que graba, te manda los brutos y ahí se quedan.",
      "Nadie sabe qué hacer con ellos ni cómo publicarlos.",
      "Cuando lo vas a publicar, el momento ya ha pasado.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Vídeo editado en menos de 48 horas, listo para publicar",
      "Eventos en Madrid o en cualquier otra parte de España",
    ],
    ctaLabel: "Tengo un evento próximamente",
  },
  {
    id: "ev06",
    reel: "EV06",
    slug: "deja-de-buscar-filmmaker",
    metaTitle: "Deja de buscar filmmaker en cada evento | Dani Acero",
    title: "¿Cuántos filmmakers distintos habéis contratado en los últimos años?",
    subtitle: "Trabajar conmigo es súper sencillo: voy a tu evento y en menos de 48 horas saco todo el contenido listo para publicar. Sin más explicaciones.",
    pains: [
      "Buscar un filmmaker nuevo en cada evento es un suplicio.",
      "Cada vez buscando, explicando, todo desde cero.",
      "Cada vez una calidad diferente, un resultado diferente: siempre es una ruleta.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Brutos el mismo día en Google Drive",
      "Vídeo editado en menos de 48 horas, listo para publicar",
    ],
    ctaLabel: "Quiero dejar de buscar filmmaker",
  },
  {
    id: "ev07",
    reel: "EV07",
    slug: "filmmaker-sin-intermediarios",
    metaTitle: "Filmmaker de eventos sin intermediarios | Dani Acero",
    title: "He grabado eventos para IFEMA, Cinesa o la Cámara de Comercio de Madrid",
    subtitle: "Lo que me diferencia es la velocidad: el mismo día de tu evento te entrego todo lo grabado y en menos de 48 horas, el contenido editado. Sin intermediarios, directamente conmigo.",
    pains: [
      "Un evento corporativo no perdona errores.",
      "No hay margen para improvisar.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "Brutos el mismo día de tu evento",
      "Vídeo editado en menos de 48 horas, listo para publicar",
      "Sin intermediarios: trabajas directamente conmigo",
    ],
    ctaLabel: "Consultar disponibilidad y precios",
  },
  {
    id: "ev08",
    reel: "EV08",
    slug: "video-evento-en-48-horas",
    metaTitle: "El vídeo de tu evento en menos de 48 horas | Dani Acero",
    title: "La mayoría de productoras tardan semanas en entregarte el vídeo de tu evento. Yo no",
    subtitle: "Te entrego los brutos el mismo día del evento y el vídeo editado en menos de 48 horas, listo para redes sociales.",
    pains: [
      "Cuando tu evento ya ha pasado, cada semana que tarda el vídeo en llegar es una semana menos de vigencia.",
      "Para cuando lo tienes, ya no interesa tanto.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Brutos el mismo día del evento",
      "Todas las piezas editadas en menos de 48 horas, listas para publicar",
    ],
    ctaLabel: "Quiero contenido de calidad para mi evento",
  },
  {
    id: "ev09",
    reel: "EV09",
    slug: "video-resumen-de-tu-evento",
    metaTitle: "Un vídeo resumen que llena tu próximo evento | Dani Acero",
    title: "El vídeo de tu evento no es solo un recuerdo: es el que te permite llenar el siguiente",
    subtitle: "Voy a tu evento, lo convierto en contenido para redes sociales y en menos de 48 horas te lo entrego listo para publicar.",
    pains: [
      "Un buen vídeo resumen demuestra qué pasó en el anterior evento y le dice al próximo asistente qué puede encontrar.",
      "Si el vídeo acaba en una carpeta que nadie abre, no está haciendo ese trabajo.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He trabajado con empresas como IFEMA, Cinesa o la Cámara de Comercio de Madrid",
      "Tu evento convertido en contenido para redes sociales",
      "Vídeo editado en menos de 48 horas, listo para publicar",
    ],
    ctaLabel: "Quiero un buen filmmaker para mis eventos",
  },
  {
    id: "ev10",
    reel: "EV10",
    slug: "video-evento-imagen-de-marca",
    metaTitle: "El vídeo de tu evento es tu imagen de marca | Dani Acero",
    title: "El vídeo de tu evento es la primera imagen que muchos clientes van a tener de tu empresa",
    subtitle: "Voy a tu evento y lo convierto en contenido que puedas publicar durante los próximos meses en redes sociales. Te lo entrego todo en menos de 48 horas.",
    pains: [
      "No lo verán los que estuvieron allí, sino quienes lo vean en LinkedIn, en un email o buscando tu nombre.",
      "Si ese vídeo no está a la altura, tampoco lo está tu marca.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado para instituciones y empresas como IFEMA o la Cámara de Comercio de Madrid",
      "Contenido para publicar durante los próximos meses",
      "Vídeo editado en menos de 48 horas, listo para publicar",
    ],
    ctaLabel: "Necesito filmmaker para mi evento",
  },
  {
    id: "ev11",
    reel: "EV11",
    slug: "un-problema-menos-en-tu-evento",
    metaTitle: "El vídeo no debería ser otro problema | Dani Acero",
    title: "El día de tu evento ya tienes 47 problemas. El vídeo no debería ser el 48",
    subtitle: "Llego sabiendo exactamente lo que tengo que grabar y no te interrumpo: tú solo te ocupas del evento y yo me ocupo de que salga un buen vídeo.",
    pains: [
      "El ponente que llega tarde, el catering, el técnico de sonido…",
      "Coordinar además a un cámara que no sabe moverse en un evento es una carga más.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Llego sabiendo exactamente lo que tengo que grabar",
      "No te interrumpo: tú te ocupas del evento",
    ],
    ctaLabel: "Quiero despreocuparme del vídeo",
  },
  {
    id: "ev12",
    reel: "EV12",
    slug: "testimonios-de-tu-evento",
    metaTitle: "Testimonios grabados el mismo día del evento | Dani Acero",
    title: "El mejor testimonio de tu evento no se graba la semana siguiente: se graba el mismo día",
    subtitle: "Antes de que se vayan los asistentes, saco testimonios en caliente: clips de 30 segundos para llenar tu próximo evento con contenido de calidad.",
    pains: [
      "Cuando pasan los días, la emoción se enfría.",
      "Nadie contesta a un email pidiendo un testimonio grabado.",
      "El momento bueno es mientras dura el evento.",
    ],
    expertise: [
      "Más de 6 años como filmmaker corporativo en Madrid",
      "He grabado eventos para IFEMA, Cinesa y la Cámara de Comercio de Madrid",
      "Testimonios en caliente, antes de que se vayan los asistentes",
      "Clips de 30 segundos listos para publicar",
    ],
    ctaLabel: "Quiero testimonios de mi evento",
  },
]

export function getLanding(slug: string): Landing | undefined {
  return LANDINGS.find((landing) => landing.slug === slug)
}

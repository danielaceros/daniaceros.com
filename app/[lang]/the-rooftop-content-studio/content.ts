// app/[lang]/the-rooftop-content-studio/content.ts
// Textos de /the-rooftop-content-studio por idioma. El ES es copia literal del
// original (sin tildes, tal cual estaba publicado: no tocar).
// Beneficios y proceso usan "Título|Descripción".
import type { Lang } from "@/lib/i18n/config"

const es = {
  meta: {
    title: "Rooftop Content Studio - Madrid",
    description:
      "Estudio de grabación profesional con vistas al atardecer de Madrid. Produce contenido premium para redes, podcast y vídeo corporativo.",
    keywords: [
      "rooftop content studio madrid",
      "estudio de grabacion madrid",
      "reels y podcast madrid",
      "video corporativo madrid",
    ],
  },
  nav: ["Rooftop Content Studio", "Estudio", "Galeria", "Proceso", "Tarifas", "FAQ", "Hablemos"],
  kicker: "Estudio de grabacion profesional con vistas al atardecer de Madrid",
  titleLines: ["Estudio de Grabacion en Madrid", "Graba Meses de Contenido", "en Una Manana"],
  ticker: "CONTENT STUDIO · MADRID · ROOFTOP · GRABACION PROFESIONAL · REELS · PODCAST · VIDEO · ",
  about: {
    kicker: "( Que es )",
    title: "Tu Estudio de Contenido en Madrid.",
    p1: "Rooftop Content Studio es un espacio de grabacion premium disenado para creadores, marcas y profesionales que quieren producir contenido de calidad sin complicaciones.",
    p2: "Reservas tu sesion, te presentas y nosotros nos encargamos de todo: equipo, iluminacion, direccion y edicion. Sales con semanas de contenido listo para publicar.",
    formatsTitle: "Formatos que producimos",
    formats: [
      "Reels y TikToks",
      "Videos para YouTube",
      "Podcasts y entrevistas",
      "Fotos para redes sociales",
      "Contenido para newsletters",
      "Videos corporativos",
    ],
  },
  benefits: {
    kicker: "( Beneficios )",
    title: "Por Que Elegirnos.",
    items: [
      "Ahorra Tiempo|Produce semanas de contenido en una sola sesion. Sin improvisar, sin estres y sin perder horas editando en casa.",
      "Calidad Profesional|Iluminacion de estudio, sonido profesional y un equipo que sabe como hacerte brillar ante la camara.",
      "Localizacion Unica|Un rooftop privado en el centro de Madrid con vistas espectaculares. El escenario perfecto para tu marca.",
      "Todo Incluido|Equipo tecnico, direccion creativa, maquillaje y teleprompter. Tu solo tienes que presentarte.",
      "Contenido Estrategico|No grabamos por grabar. Planificamos cada pieza para que encaje en tu estrategia de contenidos.",
      "Resultados Inmediatos|Recibe tu contenido editado y listo para publicar en menos de una semana.",
    ],
  },
  process: {
    kicker: "( Proceso )",
    title: "Como Trabajamos.",
    items: [
      "Briefing Estrategico|Analizamos tu marca, tu audiencia y tus objetivos para disenar un plan de contenido a medida.",
      "Pre-produccion|Preparamos guiones, escaleta, referencias visuales y todo lo necesario para que el dia de grabacion sea perfecto.",
      "Dia de Grabacion|Grabamos todo el contenido planificado en nuestro estudio rooftop con un equipo profesional a tu disposicion.",
      "Post-produccion y Entrega|Editamos, corregimos color, anadimos subtitulos y te entregamos todo listo para publicar.",
    ],
  },
  pricing: {
    kicker: "( Tarifas )",
    title: "Elige tu Plan.",
    subtitle: "Todo incluido. Sin sorpresas. Sin costes ocultos.",
    halfDay: {
      name: "Media Jornada",
      price: "600€",
      duration: "/ 4 horas",
      desc: "Ideal para grabar entre 10 y 20 piezas de contenido corto o modulos especificos.",
    },
    fullDay: {
      name: "Jornada Completa",
      price: "1.000€",
      duration: "/ 8 horas",
      desc: "Perfecta para formaciones completas, podcast o produccion intensiva.",
    },
    popular: "Popular",
    book: "Reservar",
    includes: "Incluye: Espacio · Filmmaker · Equipo tecnico",
  },
  location: {
    kicker: "( Ubicacion )",
    title: "En el Corazon de Madrid.",
    body: "Nuestro estudio rooftop esta situado en el centro de Madrid, con facil acceso en transporte publico y parking cercano. Un espacio privado con vistas panoramicas.",
    points: ["Centro de Madrid, Espana", "Metro a menos de 5 minutos", "Parking publico a 2 minutos"],
    mapTitle: "Mapa de ubicacion del Rooftop Content Studio en Madrid",
  },
  faq: {
    kicker: "( FAQ )",
    title: "Preguntas Frecuentes.",
    items: [
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
    ],
  },
  contact: {
    kicker: "( Contacto )",
    title: "Hablemos de tu Proyecto.",
    body: "Cuentanos sobre tu proyecto y te responderemos en menos de 24 horas con una propuesta personalizada.",
    address: "Centro de Madrid, Espana",
    nameLabel: "Nombre *",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email *",
    emailPlaceholder: "tu@email.com",
    phoneLabel: "Telefono",
    messageLabel: "Mensaje *",
    messagePlaceholder: "Cuentanos sobre tu proyecto...",
    submit: "Enviar",
  },
  footer: {
    title: "Navegacion",
    nav: ["Estudio", "Galeria", "Proceso", "Tarifas", "FAQ", "Contacto"],
  },
}

const en: typeof es = {
  meta: {
    title: "Rooftop Content Studio - Madrid",
    description:
      "Professional filming studio with sunset views over Madrid. Produce premium content for social media, podcasts and corporate video.",
    keywords: [
      "rooftop content studio madrid",
      "filming studio madrid",
      "reels and podcast studio madrid",
      "corporate video madrid",
    ],
  },
  nav: ["Rooftop Content Studio", "Studio", "Gallery", "Process", "Rates", "FAQ", "Let's talk"],
  kicker: "Professional filming studio with sunset views over Madrid",
  titleLines: ["Filming Studio in Madrid", "Film Months of Content", "in a Single Morning"],
  ticker: "CONTENT STUDIO · MADRID · ROOFTOP · PROFESSIONAL FILMING · REELS · PODCAST · VIDEO · ",
  about: {
    kicker: "( What it is )",
    title: "Your Content Studio in Madrid.",
    p1: "Rooftop Content Studio is a premium filming space designed for creators, brands and professionals who want to produce quality content without the hassle.",
    p2: "You book your session, show up and we take care of everything: equipment, lighting, direction and editing. You leave with weeks of content ready to post.",
    formatsTitle: "Formats we produce",
    formats: [
      "Reels and TikToks",
      "YouTube videos",
      "Podcasts and interviews",
      "Photos for social media",
      "Newsletter content",
      "Corporate videos",
    ],
  },
  benefits: {
    kicker: "( Benefits )",
    title: "Why Choose Us.",
    items: [
      "Save Time|Produce weeks of content in a single session. No improvising, no stress and no hours lost editing at home.",
      "Professional Quality|Studio lighting, professional sound and a team that knows how to make you shine on camera.",
      "A Unique Location|A private rooftop in central Madrid with spectacular views. The perfect setting for your brand.",
      "All Inclusive|Technical equipment, creative direction, makeup and teleprompter. All you have to do is show up.",
      "Strategic Content|We don't film just for the sake of it. We plan every piece to fit your content strategy.",
      "Fast Results|Get your content edited and ready to post in less than a week.",
    ],
  },
  process: {
    kicker: "( Process )",
    title: "How We Work.",
    items: [
      "Strategic Briefing|We analyze your brand, your audience and your goals to design a tailored content plan.",
      "Pre-production|We prepare scripts, a running order, visual references and everything needed to make filming day perfect.",
      "Filming Day|We film all the planned content in our rooftop studio with a professional crew at your disposal.",
      "Post-production & Delivery|We edit, color-grade, add subtitles and deliver everything ready to post.",
    ],
  },
  pricing: {
    kicker: "( Rates )",
    title: "Choose Your Plan.",
    subtitle: "All inclusive. No surprises. No hidden costs.",
    halfDay: {
      name: "Half Day",
      price: "€600",
      duration: "/ 4 hours",
      desc: "Ideal for filming 10 to 20 short-form pieces or specific modules.",
    },
    fullDay: {
      name: "Full Day",
      price: "€1,000",
      duration: "/ 8 hours",
      desc: "Perfect for complete training courses, podcasts or intensive production.",
    },
    popular: "Popular",
    book: "Book",
    includes: "Includes: Space · Filmmaker · Technical equipment",
  },
  location: {
    kicker: "( Location )",
    title: "In the Heart of Madrid.",
    body: "Our rooftop studio is located in central Madrid, with easy access by public transport and parking nearby. A private space with panoramic views.",
    points: ["Central Madrid, Spain", "Metro less than 5 minutes away", "Public parking 2 minutes away"],
    mapTitle: "Map showing the location of Rooftop Content Studio in Madrid",
  },
  faq: {
    kicker: "( FAQ )",
    title: "Frequently Asked Questions.",
    items: [
      {
        q: "Do I need experience in front of the camera?",
        a: "No. We guide you throughout the session so you feel comfortable and natural.",
      },
      {
        q: "What exactly does the service include?",
        a: "It includes the space, a filmmaker, technical equipment, direction and delivery ready to post.",
      },
      {
        q: "How much content can I film in one session?",
        a: "It depends on the format, but a half day usually covers 10 to 20 short pieces.",
      },
      {
        q: "How soon will I receive the edited content?",
        a: "Usually in less than a week, depending on volume and complexity.",
      },
      {
        q: "Can I bring my own team?",
        a: "Yes, we can easily bring them into the production workflow.",
      },
      {
        q: "Where is the studio?",
        a: "At Calle Ronda de Atocha 16, in central Madrid.",
      },
      {
        q: "How do I book a session?",
        a: "Write to us and we'll get back to you within 24 hours with a tailored proposal.",
      },
    ],
  },
  contact: {
    kicker: "( Contact )",
    title: "Let's Talk About Your Project.",
    body: "Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.",
    address: "Central Madrid, Spain",
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    emailPlaceholder: "you@email.com",
    phoneLabel: "Phone",
    messageLabel: "Message *",
    messagePlaceholder: "Tell us about your project...",
    submit: "Send",
  },
  footer: {
    title: "Navigation",
    nav: ["Studio", "Gallery", "Process", "Rates", "FAQ", "Contact"],
  },
}

export const content: Record<Lang, typeof es> = { es, en }

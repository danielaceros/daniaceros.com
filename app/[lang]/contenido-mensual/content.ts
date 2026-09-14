// app/[lang]/contenido-mensual/content.ts
// Textos de /contenido-mensual por idioma. El ES es copia literal del original (no tocar).
// Placeholders ({n}, {session}, {day}, {value}) se rellenan con format() de @/lib/i18n.
import type { Lang } from "@/lib/i18n/config"

const es = {
  meta: {
    title: "Pack mensual de contenido para clínicas",
    description:
      "Tus pacientes te buscan en Instagram antes de pedir cita. En 2 horas grabamos tus 12 reels del mes, editados y con subtítulos. Sin permanencia. Desde 590€/mes.",
    keywords: [
      "contenido para clínicas",
      "marketing para clínicas madrid",
      "reels para clínicas",
      "contenido redes clínica dental estética",
    ],
  },
  hero: {
    kicker: "Pack mensual de contenido · Clínicas",
    titleLine1: "Tu clínica, activa en redes.",
    titleLine2: "Todo el mes, en una sesión.",
    intro:
      "Tus pacientes te buscan en Instagram antes de pedir cita. Yo me encargo de que te encuentren vivo: tú apareces, lees el teleprompter y te vas. Grabo, edito y publico el contenido de tu clínica.",
    whatsappLabel: "Hablar por WhatsApp",
    whatsappHref:
      "https://wa.me/34711255496?text=Hola%20Dani%2C%20vengo%20de%20daniaceros.com%2Fcontenido-mensual%20y%20me%20interesa%20el%20pack%20mensual.",
    dossierLabel: "Ver dossier",
  },
  stats: {
    kicker: "Lo que hay detrás",
    items: [
      ["+50", "Empresas, marcas e instituciones", "Desde clínicas privadas hasta IFEMA y Cinesa."],
      ["6", "Años produciendo en España", "Marca personal, marca corporativa, eventos, campaña."],
      ["+1.000", "Piezas producidas y publicadas", "Reels, vídeos largos, fotografía, vídeo de marca."],
      ["1", "Interlocutor directo", "Hablas conmigo. Yo dirijo tu cuenta de principio a fin."],
    ],
  },
  problem: {
    kicker: "El problema invisible",
    titleStart: "Tus clientes ya están",
    titleAccent: "mirando tu Instagram.",
    titleEnd: "Lo que ven decide si te contactan.",
    body:
      "Antes de llamarte, te googlean. Antes de googlearte, te buscan en Instagram. Si tu perfil está parado — sin posts recientes, sin reels, sin actividad — asumen que no estás operativo. Y se van con el siguiente.",
    aside: "No se factura en ninguna cuenta. Pero pasa.",
  },
  how: {
    kicker: "Cómo funciona",
    title: "Tres pasos.",
    titleAccent: "Cero fricción.",
    steps: [
      ["01", "Una sesión al mes", "Voy a tu clínica con el equipo de grabación, o vienes a mi estudio en Madrid centro. Mismo precio."],
      ["02", "Grabamos en 2h", "Lees el guion en teleprompter. Yo dirijo encuadre, ritmo y rodaje. Tú no piensas."],
      ["03", "Te entrego tus reels", "Editados, con color, audio y subtítulos. Primer reel en 48h. Resto durante el mes."],
    ],
  },
  caseStudy: {
    kicker: "Cliente activo · Validación real",
    titleLine1: "Meridian Biohealth lleva",
    titleLine2: "meses con el sistema.",
    body:
      "Cada mes voy a su clínica, grabamos en 2 horas, y se llevan todo el contenido del mes para publicar. Su equipo invierte solo el tiempo de la grabación. Todo lo demás corre por mi cuenta.",
    stats: [
      ["1", "sesión / mes"],
      ["2h", "de su tiempo"],
      ["0", "preocupaciones"],
    ],
    cardMeta: "Meridian Biohealth · Madrid",
    follow: "Seguir",
    viewFeed: "Ver feed completo en Instagram",
  },
  wall: {
    kicker: "Clientes activos · 2024-2026",
    titleStart: "Cuentas reales",
    titleAccent: "publicando ahora",
    noteLine1: "No son testimonios.",
    noteLine2: "Son cuentas activas — verificables en Instagram.",
  },
  activeClients: [
    { handle: "meridianbiohealth", name: "Meridian Biohealth", meta: "Odontología biológica · Madrid", tag: "Cliente recurrente" },
    { handle: "lipedemainstituto", name: "Instituto del Lipedema", meta: "Clínica · Madrid", tag: "Pack mensual" },
    { handle: "clinicaguinova", name: "Clínica Guinova", meta: "Clínica integral", tag: "Producción recurrente" },
  ],
  plans: {
    kicker: "Planes mensuales",
    titleLine1: "Elige tu volumen.",
    titleLine2: "Empieza este mes.",
    note: "Mensual cancelable · Sin permanencia · IVA no incluido",
    perMonth: "/mes",
    reels: "{n} reels editados",
    pubs: "{n} pub / semana",
    session: "Sesión de {session}",
    cta: "Empezar",
    items: [
      { name: "Starter", price: "590€", reels: "8", pubs: "2", session: "2h", extra: null, highlight: false },
      { name: "Standard", price: "780€", reels: "12", pubs: "3", session: "2h", extra: null, highlight: true, badge: "El más demandado" },
      { name: "Premium", price: "1.200€", reels: "20", pubs: "5", session: "4h", extra: "+2 destacados · thumbnails", highlight: false },
    ],
    volumeKicker: "Volumen · A medida",
    volumeTitle: "20+ reels al mes, equipo escalado, lanzamientos.",
    volumeCta: "Hablemos",
    allInLead: "Todo incluido en el pack:",
    allInText:
      "guiones, grabación, edición, subtítulos y publicación. Sin extras ni sorpresas — pagas el resultado, no las piezas.",
    quarterlyLead: "¿Pago trimestral?",
    quarterlyText: "Te baja un 10% y te congelo el precio.",
    quarterlyNote: "Mensual cancelable · o trimestral con descuento",
  },
  bonuses: {
    kicker: "Incluido sin coste extra",
    titleLine1: "Todos los planes incluyen.",
    titleLine2: "Sin letra pequeña.",
    items: [
      {
        title: "Banco B-Roll",
        desc: "Material bruto editable de tu sesión para tus Stories del mes.",
        value: "350€",
      },
      {
        title: "Pack de fotos",
        desc: "5-10 fotos profesionales en la misma sesión. Web, LinkedIn, perfil.",
        value: "200€",
      },
      {
        title: "Primer reel 48h",
        desc: "Entrega prioritaria del primer reel para arrancar publicación rápido.",
        value: "150€",
      },
    ],
    valueLabel: "Valor · {value}",
    totalLabel: "Valor total bonos incluidos ·",
    totalValue: "700€/mes",
  },
  capacity: {
    badge: "Capacidad limitada · Real",
    titleLine1: "Dirijo cada cuenta",
    titleLine2: "de principio a fin.",
    bodyStart:
      "Yo llevo tu cuenta: estrategia, guiones y dirección de cada sesión, con un equipo de confianza detrás para la edición. Por eso trabajo con un número ",
    bodyStrong: "limitado de clínicas activas a la vez",
    bodyEnd: " — para mantener la calidad que prometo. Cuando llego al tope, entras en lista de espera.",
  },
  firstMonth: {
    kicker: "Tu primer mes",
    titleLine1: "De la llamada al primer reel",
    titleLine2: "publicado en 16 días.",
    dayLabel: "Día {day}",
    items: [
      ["01", "Llamada inicial"],
      ["07", "Guiones revisados"],
      ["14", "Sesión de grabación"],
      ["16", "Primer reel publicado"],
    ],
  },
  clarifications: {
    kicker: "Aclaraciones",
    title: "Letra pequeña,",
    titleAccent: "sin trampas.",
    items: [
      ["Permanencia", "Sin compromiso. Mensual cancelable. Tu contenido cada mes, mientras te encaje."],
      ["Cancelación", "Preaviso antes del siguiente ciclo. El ciclo en curso no se reembolsa."],
      ["Modificaciones", "1 ronda consolidada de cambios, hasta 72h tras la entrega."],
      ["Desplazamiento", "Madrid M-40 incluido. Fuera, +50€/sesión. Operamos en toda España."],
    ],
  },
}

const en: typeof es = {
  meta: {
    title: "Monthly content package for clinics",
    description:
      "Patients look you up on Instagram before booking. In 2 hours we film your 12 reels for the month, edited and subtitled. No long-term contract. From €590/month.",
    keywords: [
      "content for clinics",
      "clinic marketing madrid",
      "reels for clinics",
      "social media content for dental and aesthetic clinics",
    ],
  },
  hero: {
    kicker: "Monthly content package · Clinics",
    titleLine1: "Your clinic, active on social media.",
    titleLine2: "All month long, from one session.",
    intro:
      "Your patients look you up on Instagram before booking an appointment. I make sure they find you active: you show up, read the teleprompter and you're done. I film, edit and publish your clinic's content.",
    whatsappLabel: "Chat on WhatsApp",
    whatsappHref:
      "https://wa.me/34711255496?text=Hi%20Dani%2C%20I%20found%20you%20on%20daniaceros.com%2Fen%2Fcontenido-mensual%20and%20I%27m%20interested%20in%20the%20monthly%20package.",
    dossierLabel: "View brochure",
  },
  stats: {
    kicker: "What's behind it",
    items: [
      ["50+", "Companies, brands and institutions", "From private clinics to IFEMA and Cinesa."],
      ["6", "Years producing in Spain", "Personal brands, corporate brands, events, campaigns."],
      ["1,000+", "Pieces produced and published", "Reels, long-form videos, photography, brand films."],
      ["1", "Direct point of contact", "You talk to me. I run your account from start to finish."],
    ],
  },
  problem: {
    kicker: "The invisible problem",
    titleStart: "Your clients are already",
    titleAccent: "looking at your Instagram.",
    titleEnd: "What they see decides whether they get in touch.",
    body:
      "Before they call you, they google you. Before they google you, they look you up on Instagram. If your profile has gone quiet — no recent posts, no reels, no activity — they assume you're not up and running. And they go to the next clinic.",
    aside: "It never shows up on any invoice. But it happens.",
  },
  how: {
    kicker: "How it works",
    title: "Three steps.",
    titleAccent: "Zero friction.",
    steps: [
      ["01", "One session a month", "I come to your clinic with the film crew, or you come to my studio in central Madrid. Same price."],
      ["02", "We film in 2 hours", "You read the script on a teleprompter. I direct the framing, pacing and shoot. You don't have to think about a thing."],
      ["03", "I deliver your reels", "Edited, color-graded, with sound and subtitles. First reel within 48 hours. The rest throughout the month."],
    ],
  },
  caseStudy: {
    kicker: "Active client · Real proof",
    titleLine1: "Meridian Biohealth has been",
    titleLine2: "using the system for months.",
    body:
      "Every month I go to their clinic, we film in 2 hours, and they walk away with all of the month's content ready to post. Their team only spends the time it takes to film. I take care of everything else.",
    stats: [
      ["1", "session / month"],
      ["2h", "of their time"],
      ["0", "worries"],
    ],
    cardMeta: "Meridian Biohealth · Madrid",
    follow: "Follow",
    viewFeed: "View the full feed on Instagram",
  },
  wall: {
    kicker: "Active clients · 2024-2026",
    titleStart: "Real accounts",
    titleAccent: "posting right now",
    noteLine1: "These aren't testimonials.",
    noteLine2: "They're active accounts — you can check them on Instagram.",
  },
  activeClients: [
    { handle: "meridianbiohealth", name: "Meridian Biohealth", meta: "Biological dentistry · Madrid", tag: "Recurring client" },
    { handle: "lipedemainstituto", name: "Instituto del Lipedema", meta: "Clinic · Madrid", tag: "Monthly package" },
    { handle: "clinicaguinova", name: "Clínica Guinova", meta: "Multidisciplinary clinic", tag: "Recurring production" },
  ],
  plans: {
    kicker: "Monthly plans",
    titleLine1: "Choose your volume.",
    titleLine2: "Start this month.",
    note: "Cancel monthly · No long-term contract · VAT not included",
    perMonth: "/month",
    reels: "{n} edited reels",
    pubs: "{n} posts / week",
    session: "{session} session",
    cta: "Get started",
    items: [
      { name: "Starter", price: "€590", reels: "8", pubs: "2", session: "2h", extra: null, highlight: false },
      { name: "Standard", price: "€780", reels: "12", pubs: "3", session: "2h", extra: null, highlight: true, badge: "Most popular" },
      { name: "Premium", price: "€1,200", reels: "20", pubs: "5", session: "4h", extra: "+2 featured · thumbnails", highlight: false },
    ],
    volumeKicker: "Volume · Custom",
    volumeTitle: "20+ reels a month, a scaled-up team, launches.",
    volumeCta: "Let's talk",
    allInLead: "Everything included in the package:",
    allInText:
      "scripts, filming, editing, subtitles and publishing. No extras, no surprises — you pay for the result, not for individual pieces.",
    quarterlyLead: "Prefer to pay quarterly?",
    quarterlyText: "You get 10% off and I lock in your price.",
    quarterlyNote: "Cancel monthly · or pay quarterly at a discount",
  },
  bonuses: {
    kicker: "Included at no extra cost",
    titleLine1: "Included in every plan.",
    titleLine2: "No fine print.",
    items: [
      {
        title: "B-Roll Library",
        desc: "Editable raw footage from your session for your Stories throughout the month.",
        value: "€350",
      },
      {
        title: "Photo pack",
        desc: "5-10 professional photos from the same session. Website, LinkedIn, profile.",
        value: "€200",
      },
      {
        title: "First reel in 48h",
        desc: "Priority delivery of your first reel so you can start posting fast.",
        value: "€150",
      },
    ],
    valueLabel: "Value · {value}",
    totalLabel: "Total value of included bonuses ·",
    totalValue: "€700/month",
  },
  capacity: {
    badge: "Limited capacity · For real",
    titleLine1: "I run every account",
    titleLine2: "from start to finish.",
    bodyStart:
      "I run your account: strategy, scripts and direction of every session, backed by a trusted team for the editing. That's why I only work with a ",
    bodyStrong: "limited number of active clinics at a time",
    bodyEnd: " — to keep the quality I promise. Once I'm at capacity, you go on the waiting list.",
  },
  firstMonth: {
    kicker: "Your first month",
    titleLine1: "From the first call to your first reel",
    titleLine2: "published in 16 days.",
    dayLabel: "Day {day}",
    items: [
      ["01", "Kickoff call"],
      ["07", "Scripts reviewed"],
      ["14", "Filming session"],
      ["16", "First reel published"],
    ],
  },
  clarifications: {
    kicker: "Good to know",
    title: "The fine print,",
    titleAccent: "no catches.",
    items: [
      ["Commitment", "No commitment. Cancel monthly. Your content every month, for as long as it works for you."],
      ["Cancellation", "Give notice before the next cycle. The current cycle is non-refundable."],
      ["Revisions", "1 consolidated round of changes, up to 72 hours after delivery."],
      ["Travel", "Within Madrid's M-40 ring road included. Outside it, +€50/session. We work all over Spain."],
    ],
  },
}

export const content: Record<Lang, typeof es> = { es, en }

// app/[lang]/marca-personal/content.ts
// Textos de /marca-personal por idioma. El ES es copia literal del original (no tocar).
// Placeholders ({n}, {session}) se rellenan con format() de @/lib/i18n.
import type { Lang } from "@/lib/i18n/config"

const es = {
  meta: {
    title: "Pack mensual de contenido para marcas personales",
    description:
      "Una sesión al mes en el estudio. Te llevas los reels del mes editados. Sin espacio propio. Sin improvisar. Solo apareces y lees. Desde 620€/mes.",
    keywords: [
      "pack mensual contenido marca personal",
      "reels mensuales marca personal madrid",
      "estudio grabación marca personal madrid",
      "contenido redes sociales coach consultor",
      "filmmaker marca personal madrid",
      "reel mensual teleprompter madrid",
    ],
  },
  hero: {
    kicker: "Servicios · Pack mensual · Marca personal",
    titleLine1: "Tu marca personal.",
    titleLine2: "Una sesión al mes.",
    titleLine3: "Reels listos.",
    intro:
      "Vienes a mi estudio una vez al mes. Grabamos todo en una sola sesión con teleprompter. Tú apareces y lees. Los guiones, la edición, los subtítulos y el formato los hago yo.",
    ctaLabel: "Empezar este mes",
    dossierLabel: "Ver dossier",
    stats: [
      ["1", "sesión al mes"],
      ["0", "improvisación"],
      ["+50", "proyectos"],
    ],
  },
  how: {
    kicker: "Cómo funciona",
    title: "Tres pasos.",
    titleAccent: "Cero fricción.",
    steps: [
      ["01", "Vienes al estudio", "Ronda de Atocha 16. Cámara, luz, teleprompter y sonido ya montados antes de que llegues."],
      ["02", "Grabamos en una sesión", "Los guiones pasan por el teleprompter. Solo tienes que leer. Sin memorizar, sin improvisar nada."],
      ["03", "Te entrego los reels", "Editados, con subtítulos, en vertical. Listos para publicar en Instagram, TikTok o LinkedIn."],
    ],
  },
  caseStudy: {
    kicker: "Cliente activo · Validación real",
    titleLine1: "Alejandro Pingarrón lleva",
    titleLine2: "meses construyendo su marca.",
    body:
      "Viene al estudio una vez al mes. Grabamos todos los reels en una sola sesión con teleprompter. Se lleva el contenido del mes listo para publicar. Solo aparece y lee.",
    stats: [
      ["73,9K", "seguidores"],
      ["1", "sesión / mes"],
      ["0", "preocupaciones"],
    ],
    cardMeta: "Coach Personal · Madrid",
    photoAlt: "Alejandro Pingarrón · Coach Personal",
    follow: "Seguir",
    viewFeed: "Ver feed completo en Instagram",
  },
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
      { name: "Starter", price: "620€", reels: "8", pubs: "2", session: "2h", extra: null, highlight: false },
      { name: "Standard", price: "780€", reels: "12", pubs: "3", session: "2h", extra: null, highlight: true, badge: "El más demandado" },
      { name: "Pro", price: "990€", reels: "16", pubs: "4", session: "3h", extra: "+1 reel destacado", highlight: false },
      { name: "Premium", price: "1.200€", reels: "20", pubs: "5", session: "4h", extra: "+2 destacados · thumbnails", highlight: false },
    ],
    volumeKicker: "Volumen · A medida",
    volumeTitle: "20+ reels al mes, contenido escalado, lanzamientos.",
    volumeCta: "Hablemos",
    addOnsKicker: "Add-ons opcionales",
    addOns: [
      { name: "Guionización", price: "+100€/mes" },
      { name: "Publicación", price: "+100€/mes" },
      { name: "Paid Media", price: "A consultar" },
    ],
  },
  firstMonth: {
    kicker: "Tu primer mes",
    titleLine1: "De la llamada al primer reel",
    titleLine2: "en 28 días.",
    items: [
      ["01", "Llamada inicial"],
      ["07", "Guiones revisados"],
      ["14", "Sesión en el estudio"],
      ["28", "Primer reel publicado"],
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
      ["Ubicación", "Estudio en Ronda de Atocha 16, Madrid. Metro Atocha y parking cercano. Horarios flexibles."],
    ],
  },
}

const en: typeof es = {
  meta: {
    title: "Monthly content package for personal brands",
    description:
      "One session a month at the studio. You walk away with the month's reels, fully edited. No space of your own needed. No improvising. Just show up and read. From €620/month.",
    keywords: [
      "monthly personal brand content package",
      "monthly reels personal brand madrid",
      "personal brand filming studio madrid",
      "social media content for coaches and consultants",
      "personal brand filmmaker madrid",
      "monthly reels teleprompter madrid",
    ],
  },
  hero: {
    kicker: "Services · Monthly package · Personal brand",
    titleLine1: "Your personal brand.",
    titleLine2: "One session a month.",
    titleLine3: "Reels ready to go.",
    intro:
      "You come to my studio once a month. We film everything in a single session with a teleprompter. You show up and read. I take care of the scripts, editing, subtitles and formatting.",
    ctaLabel: "Start this month",
    dossierLabel: "View brochure",
    stats: [
      ["1", "session a month"],
      ["0", "improvising"],
      ["50+", "projects"],
    ],
  },
  how: {
    kicker: "How it works",
    title: "Three steps.",
    titleAccent: "Zero friction.",
    steps: [
      ["01", "Come to the studio", "Ronda de Atocha 16. Camera, lighting, teleprompter and sound all set up before you arrive."],
      ["02", "We film in one session", "The scripts run on the teleprompter. All you have to do is read. No memorizing, no improvising."],
      ["03", "I deliver your reels", "Edited, subtitled and in vertical format. Ready to post on Instagram, TikTok or LinkedIn."],
    ],
  },
  caseStudy: {
    kicker: "Active client · Real proof",
    titleLine1: "Alejandro Pingarrón has spent",
    titleLine2: "months building his brand.",
    body:
      "He comes to the studio once a month. We film all his reels in a single session with a teleprompter. He walks away with the month's content ready to post. He just shows up and reads.",
    stats: [
      ["73.9K", "followers"],
      ["1", "session / month"],
      ["0", "worries"],
    ],
    cardMeta: "Personal Coach · Madrid",
    photoAlt: "Alejandro Pingarrón · Personal Coach",
    follow: "Follow",
    viewFeed: "View the full feed on Instagram",
  },
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
      { name: "Starter", price: "€620", reels: "8", pubs: "2", session: "2h", extra: null, highlight: false },
      { name: "Standard", price: "€780", reels: "12", pubs: "3", session: "2h", extra: null, highlight: true, badge: "Most popular" },
      { name: "Pro", price: "€990", reels: "16", pubs: "4", session: "3h", extra: "+1 featured reel", highlight: false },
      { name: "Premium", price: "€1,200", reels: "20", pubs: "5", session: "4h", extra: "+2 featured · thumbnails", highlight: false },
    ],
    volumeKicker: "Volume · Custom",
    volumeTitle: "20+ reels a month, scaled-up content, launches.",
    volumeCta: "Let's talk",
    addOnsKicker: "Optional add-ons",
    addOns: [
      { name: "Scriptwriting", price: "+€100/month" },
      { name: "Publishing", price: "+€100/month" },
      { name: "Paid Media", price: "On request" },
    ],
  },
  firstMonth: {
    kicker: "Your first month",
    titleLine1: "From the first call to your first reel",
    titleLine2: "in 28 days.",
    items: [
      ["01", "Kickoff call"],
      ["07", "Scripts reviewed"],
      ["14", "Studio session"],
      ["28", "First reel published"],
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
      ["Location", "Studio at Ronda de Atocha 16, Madrid. Atocha metro station and parking nearby. Flexible hours."],
    ],
  },
}

export const content: Record<Lang, typeof es> = { es, en }

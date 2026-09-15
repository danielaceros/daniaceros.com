// app/[lang]/a0studios/content.ts
// Página puente hacia A0Studios (el estudio de Dani, antes Rooftop Content Studio).
// La información completa vive en https://www.a0studios.es/: aquí no se repiten precios, horas ni FAQ
// para no competir con esa web en Google. Fotos: Blob del proyecto a0studios-web.
import type { Lang } from "@/lib/i18n/config"

export const A0_URL = "https://www.a0studios.es/"

// NAP canónico de A0Studios: idéntico carácter a carácter al de a0studios.es y a la
// ficha de Google Business Profile. No se traduce ni se reformatea.
export const A0_NAP = {
  name: "A0Studios",
  streetAddress: "Rda. de Atocha, 16, 7ºC esc dcha",
  postalCode: "28012",
  locality: "Madrid",
  address: "Rda. de Atocha, 16, 7ºC esc dcha, 28012 Madrid",
  phone: "711 25 54 96",
  url: A0_URL,
} as const

const A0_BLOB = "https://dhhlvt4j8kklwk3i.public.blob.vercel-storage.com/formatos/bts"

export const A0_IMAGES = {
  hero: `${A0_BLOB}/bts-dron-1-poster.jpg`,
  gallery: [`${A0_BLOB}/bts-set-7-poster.jpg`, `${A0_BLOB}/bts-set-9-poster.jpg`, `${A0_BLOB}/bts-foto-3.webp`],
}

const es = {
  metaTitle: "A0Studios, mi estudio de grabación en Madrid",
  metaDescription:
    "A0Studios® es el estudio de grabación de Dani Acero en un ático de Madrid centro: anuncios, reels, VSL y podcast con dirección creativa.",
  keywords: ["a0studios", "acero studios", "estudio dani acero"],
  breadcrumb: "A0Studios",
  kicker: "mi estudio",
  title: "A0Studios",
  subtitle: "Estudio de grabación de contenido en un ático de Madrid centro.",
  heroAlt: "Vistas desde la terraza de A0Studios, en Madrid centro",
  location: A0_NAP.address,
  intro: [
    "En 2025 monté A0Studios®, mi propio estudio de grabación en un ático de Madrid centro, a cinco minutos andando de Atocha. Lo monté para que empresas, founders y creadores puedan grabar su contenido con calidad de producción y sin la logística de un rodaje.",
    "El espacio es una herramienta, como la cámara. Lo que marca la diferencia es la dirección: preparo el set, te dirijo delante de la cámara y te ayudo con el guion y la estructura para que cada pieza funcione, ya sea para vender, captar clientes o ganar seguidores.",
  ],
  formatsTitle: "Qué se graba allí",
  formats: [
    { title: "Anuncios y VSL", text: "Piezas pensadas para campañas: hook, estructura y llamada a la acción." },
    { title: "Reels y contenido para redes", text: "Varias piezas verticales en una misma sesión, listas para cada plataforma." },
    { title: "Podcast y entrevistas", text: "Set de podcast para grabar solo o con invitados, en audio y vídeo." },
    { title: "Vídeo corporativo y formación", text: "Presentaciones, marca personal y cursos, con teleprompter." },
  ],
  galleryAlts: [
    "Grabación de un podcast en A0Studios",
    "Entrevista en el set de podcast de A0Studios",
    "Grabación con teleprompter en A0Studios",
  ],
  howTitle: "Cómo funciona",
  howText:
    "Una única sesión al día, así que el estudio es tuyo mientras grabas. Me cuentas qué necesitas y te preparo un presupuesto a medida: llave en mano, con el contenido editado y listo para publicar, o solo grabación.",
  ctaTitle: "Toda la información del estudio está en su web",
  ctaButton: "A0Studios",
  ctaWhatsapp: "o escríbeme por WhatsApp",
  whatsappMessage: "Hola Dani! Quiero información sobre A0Studios.",
}

const en: typeof es = {
  metaTitle: "A0Studios, my filming studio in Madrid",
  metaDescription:
    "A0Studios® is Dani Acero's filming studio in a penthouse in central Madrid: ads, reels, VSLs and podcasts with creative direction.",
  keywords: ["a0studios", "acero studios", "dani acero studio"],
  breadcrumb: "A0Studios",
  kicker: "my studio",
  title: "A0Studios",
  subtitle: "A content filming studio in a penthouse in central Madrid.",
  heroAlt: "View from the A0Studios terrace in central Madrid",
  location: A0_NAP.address,
  intro: [
    "In 2025 I set up A0Studios®, my own filming studio in a penthouse in central Madrid, a five-minute walk from Atocha. I built it so companies, founders and creators can film their content with production quality and without the logistics of a full shoot.",
    "The space is a tool, just like the camera. What makes the difference is the direction: I set up the shot, direct you on camera and help with the script and structure so every piece works, whether the goal is sales, leads or followers.",
  ],
  formatsTitle: "What gets filmed there",
  formats: [
    { title: "Ads and VSLs", text: "Pieces built for campaigns: hook, structure and call to action." },
    { title: "Reels and social content", text: "Several vertical pieces in one session, ready for each platform." },
    { title: "Podcasts and interviews", text: "A podcast set to record solo or with guests, in audio and video." },
    { title: "Corporate video and courses", text: "Presentations, personal branding and online courses, with a teleprompter." },
  ],
  galleryAlts: [
    "Podcast recording at A0Studios",
    "Interview on the A0Studios podcast set",
    "Teleprompter recording at A0Studios",
  ],
  howTitle: "How it works",
  howText:
    "One session a day, so the studio is all yours while you film. Tell me what you need and I'll put together a tailored quote: turnkey, with the content edited and ready to post, or filming only.",
  ctaTitle: "All the studio details are on its website",
  ctaButton: "A0Studios",
  ctaWhatsapp: "or message me on WhatsApp",
  whatsappMessage: "Hi Dani! I'd like some information about A0Studios.",
}

export const content: Record<Lang, typeof es> = { es, en }

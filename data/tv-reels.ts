// data/tv-reels.ts
// Datos para /tv: el portfolio (data/projects.ts) + las colaboraciones del
// viaje "La Vuelta al Mundo sin un Duro" (lavueltaalmundosinunduro.com),
// unificados en el mismo formato "reel de Instagram" que consume ReelPhone.
import { projects } from "./projects"

export type TVReel = {
  id: string
  name: string
  video: string
  poster?: string
  ig: string
  avatar?: string
  caption: string
  cat: string
  town?: string
}

// Metadata que no vive en data/projects.ts: qué cuenta de Instagram publicó
// cada pieza, el avatar (logo real del dominio del cliente, o sin avatar ->
// monograma) y el copy estilo Reel.
const PORTFOLIO_META: Record<
  string,
  { ig: string; avatar?: string; caption: string; cat: string; town?: string }
> = {
  fifa: {
    ig: "fifa",
    avatar: "https://icons.duckduckgo.com/ip3/fifa.com.ico",
    caption: "Cobertura 4K de un evento corporativo de FIFA, para marca y redes 🎥",
    cat: "🎥 Evento corporativo",
    town: "Madrid",
  },
  "brahim-diaz": {
    ig: "sonypicturesspain",
    avatar: "https://icons.duckduckgo.com/ip3/sonypictures.es.ico",
    caption: "Spot viral de Sony con Will Smith, El Rubius, Mangel y Brahim Díaz 🎬",
    cat: "🎬 Campaña de cine",
    town: "Madrid",
  },
  "omar-montes": {
    ig: "omarmontes",
    caption: "Illuminati Party en el Vistalegre — la energía del concierto en vídeo 🎤",
    cat: "🎤 Concierto",
    town: "Madrid",
  },
  "rimmel-london": {
    ig: "rimmellondones",
    avatar:
      "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://rimmellondon.com&size=128",
    caption: "Reto acuático con Gisela Pulido para Rimmel London 💧",
    cat: "💄 Activación de marca",
  },
  "camara-de-comercio": {
    ig: "camarademadrid",
    // Sin logo fiable vía favicon (gstatic/DDG solo devuelven el genérico de
    // 291-512 bytes para camaramadrid.es) -> monograma, igual que Omar Montes.
    caption: "Cobertura institucional de un evento de la Cámara de Comercio 🏛️",
    cat: "🏛️ Evento institucional",
    town: "Madrid",
  },
  ifema: {
    ig: "ifema_madrid",
    avatar:
      "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ifema.es&size=128",
    caption: "La escala y la energía de una feria de IFEMA Madrid, en vídeo 🎪",
    cat: "🎪 Feria",
    town: "Madrid",
  },
  "real-madrid-riquelme": {
    ig: "legadoyfuturo26",
    avatar:
      "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://legadoyfuturo.com&size=128",
    caption: "Campaña «El Real Madrid no se vende» — vertical y directa al socio 🤍",
    cat: "🗳️ Campaña electoral",
    town: "Madrid",
  },
  cinesa: {
    ig: "cinesa.es",
    avatar:
      "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cinesa.es&size=128",
    caption: "Aftermovie de un preestreno de Cinesa, ritmo ágil y social-first 🎬",
    cat: "🎬 Evento de marca",
    town: "Madrid",
  },
}

const PORTFOLIO_REELS: TVReel[] = projects.flatMap((p) => {
  const meta = PORTFOLIO_META[p.slug]
  if (!meta) return []
  return [
    {
      id: p.slug,
      name: p.title,
      video: p.video,
      poster: p.poster,
      ...meta,
    },
  ]
})

// Colaboraciones ya grabadas y editadas del viaje. Los assets (vídeo, poster,
// avatar) viven en lavueltaalmundosinunduro.com — se referencian en remoto en
// lugar de duplicarlos en este repo.
const VANLIFE_BASE = "https://lavueltaalmundosinunduro.com/assets/reels"

type VanlifeCat = "actividad" | "restaurante" | "alojamiento" | "cafe-brunch"

const VANLIFE_CATS: Record<VanlifeCat, string> = {
  actividad: "🎬 Actividad",
  restaurante: "🍽️ Restaurante",
  alojamiento: "🛏️ Alojamiento",
  "cafe-brunch": "☕ Café",
}

const VANLIFE_ENTRIES: Array<{
  id: string
  name: string
  cat: VanlifeCat
  town: string
  ig: string
  caption: string
  hasAvatar?: boolean
}> = [
  { id: "dolphin-seafaris", name: "Dolphin Seafaris", cat: "actividad", town: "Lagos", ig: "dolphin.seafaris", caption: "Delfines, cuevas de Benagil y una bióloga marina a bordo 🐬", hasAvatar: true },
  { id: "coastline-algarve", name: "Coastline Algarve", cat: "actividad", town: "Raposeira", ig: "coastlinealgarve", caption: "Saltos de acantilado y cuevas escondidas en la Costa Vicentina 🏄", hasAvatar: true },
  { id: "passeios-cavalo-monte-cabanas-do-mar", name: "Monte Cabanas do Mar", cat: "actividad", town: "Sines", ig: "montecabanasdomar", caption: "Rutas a caballo por la Praia do Norte, al atardecer 🐴", hasAvatar: true },
  { id: "na-pizza", name: "Na Pizza", cat: "restaurante", town: "Cascais", ig: "napizza.pt", caption: "Pizza napolitana con vistas en Cascais 🍕" },
  { id: "bahia-beach-bar-restaurant", name: "Bahia Beach Bar & Restaurant", cat: "restaurante", town: "Lagos", ig: "bahiabeachbarandrestaurant", caption: "Atardecer, hamacas y buena mesa sobre las dunas de Meia Praia 🌅" },
  { id: "wim-motors-academy", name: "Wim Motors Academy", cat: "actividad", town: "Odemira", ig: "wimmotorsacademy", caption: "Enduro y rally en plena naturaleza del Alentejo costero 🏍️" },
  { id: "time-out-market", name: "Time Out Market", cat: "restaurante", town: "Lisboa", ig: "timeoutmarketlisboa", caption: "Los mejores chefs de Lisboa, todos bajo el mismo techo 🍽️" },
  { id: "portugal-helicopters", name: "Portugal Helicopters", cat: "actividad", town: "Lisboa", ig: "portugalhelicopters", caption: "Lisboa, Belém y la costa vistas desde el aire 🚁" },
  { id: "1908-lisboa-hotel-restaurante-infame", name: "Infame · 1908 Lisboa Hotel", cat: "alojamiento", town: "Lisboa", ig: "1908lisboahotel", caption: "Cena con carácter en el Infame, Lisboa 🍷" },
  { id: "mela-canela", name: "Mela Canela", cat: "cafe-brunch", town: "Sintra", ig: "mela.canela", caption: "Brunch 100% plant-based en el centro de Sintra 🌱" },
  { id: "lamassa-fresh-handemade-pasta", name: "Lamassa", cat: "restaurante", town: "Estoril", ig: "lamassa_restaurante", caption: "Pasta fresca hecha a mano, todos los días 🍝" },
  { id: "casainglesaroosa", name: "Casa Inglesa Roosa", cat: "alojamiento", town: "Odemira", ig: "casainglesaroosa", caption: "Piscina, jardín y calma en pleno interior del Alentejo 🌿" },
  { id: "rochavau-hotel", name: "Rochavau Hotel", cat: "alojamiento", town: "Portimão", ig: "rochavauhotel", caption: "Descanso con estilo en el corazón de Portimão 🏨" },
  { id: "alchimie", name: "Alchimie", cat: "restaurante", town: "Matosinhos", ig: "alchimie_jl", caption: "Cocina de temporada franco-portuguesa en Matosinhos 🍽️" },
  { id: "pt-winehouse-barra-mars-petiscos-companh", name: "PT Winehouse", cat: "restaurante", town: "Esmoriz", ig: "ptwinehouse", caption: "Vinos portugueses y petiscos en Esmoriz 🍷" },
  { id: "restaurante-d-oliva", name: "Restaurante D'Oliva", cat: "restaurante", town: "Matosinhos", ig: "restaurantedoliva", caption: "Cocina portuguesa, italiana y sushi en Matosinhos 🍝" },
  { id: "altissimo-lisboa", name: "Altissimo Lisboa", cat: "actividad", town: "Sintra", ig: "altissimolisboa", caption: "Rocódromo indoor de 13,5 metros en Sintra 🧗", hasAvatar: true },
  { id: "mar-padel", name: "Mar Padel", cat: "actividad", town: "Matosinhos", ig: "marpadelindoor", caption: "Pádel indoor junto a la costa de Matosinhos 🎾", hasAvatar: true },
  { id: "lucia-del-mar-private-boat-tours-wines", name: "Lucía Del Mar", cat: "actividad", town: "Lisboa", ig: "lucia_delmar_boat_tours", caption: "Tour en barco por el Tejo con vino y atardecer 🌅" },
  { id: "watermark-surf-house", name: "Watermark Surf House", cat: "alojamiento", town: "Espinho", ig: "watermarksurfhouse", caption: "Surf house frente a la playa de Espinho 🏄" },
  { id: "funpark-kartodromo-de-fatima", name: "Funpark Kartódromo de Fátima", cat: "actividad", town: "Fátima", ig: "funpark.pt", caption: "Karts, tirolina y aventura en Fátima 🏎️", hasAvatar: true },
  { id: "lazy-breakfast-club", name: "Lazy Breakfast Club", cat: "cafe-brunch", town: "Porto", ig: "lazybreakfastclub", caption: "Brunch industrial-chic en el centro de Oporto 🥞" },
]

const VANLIFE_REELS: TVReel[] = VANLIFE_ENTRIES.map((e) => ({
  id: e.id,
  name: e.name,
  video: `${VANLIFE_BASE}/${e.id}.mp4`,
  poster: `${VANLIFE_BASE}/${e.id}.jpg`,
  ig: e.ig,
  avatar: e.hasAvatar ? `${VANLIFE_BASE}/avatars/${e.id}.jpg` : undefined,
  caption: e.caption,
  cat: VANLIFE_CATS[e.cat],
  town: e.town,
}))

// Portfolio propio primero, colaboraciones del viaje después. Orden fijo (sin
// aleatoriedad) para que el scroll infinito sea el mismo en cada visita.
export const TV_REELS: TVReel[] = [...PORTFOLIO_REELS, ...VANLIFE_REELS]

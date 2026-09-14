// data/tv-reels.en.ts
// English copy for /tv reels (data/tv-reels.ts), keyed by reel id.
// Only `caption` and `cat` are translated; handles, names, towns and media are shared.
// A reel missing here falls back to the Spanish copy (getTVReels).
import type { Lang } from "@/lib/i18n/config"

export type TVReelTranslation = { caption: string; cat: string }

const CAT = {
  activity: "🎬 Activity",
  restaurant: "🍽️ Restaurant",
  stay: "🛏️ Accommodation",
  cafe: "☕ Café",
}

export const tvReelTranslations: Partial<Record<Lang, Record<string, TVReelTranslation>>> = {
  en: {
    // Portfolio
    "brahim-diaz": {
      caption: "Viral Sony spot with Will Smith, El Rubius, Mangel and Brahim Díaz 🎬",
      cat: "🎬 Film campaign",
    },
    "omar-montes": {
      caption: "Illuminati Party at Vistalegre — the energy of the concert, captured on video 🎤",
      cat: "🎤 Concert",
    },
    "rimmel-london": {
      caption: "Water challenge with Gisela Pulido for Rimmel London 💧",
      cat: "💄 Brand activation",
    },
    "camara-de-comercio": {
      caption: "Institutional coverage of a Chamber of Commerce event 🏛️",
      cat: "🏛️ Institutional event",
    },
    ifema: {
      caption: "The scale and energy of an IFEMA Madrid trade fair, on video 🎪",
      cat: "🎪 Trade fair",
    },
    "real-madrid-riquelme": {
      caption: "The «El Real Madrid no se vende» (Real Madrid is not for sale) campaign — vertical and straight to club members 🤍",
      cat: "🗳️ Election campaign",
    },
    cinesa: {
      caption: "Aftermovie of a Cinesa premiere screening, fast-paced and social-first 🎬",
      cat: "🎬 Brand event",
    },

    // La Vuelta al Mundo sin un Duro
    "dolphin-seafaris": { caption: "Dolphins, the Benagil caves and a marine biologist on board 🐬", cat: CAT.activity },
    "coastline-algarve": { caption: "Cliff jumping and hidden caves along the Costa Vicentina 🏄", cat: CAT.activity },
    "passeios-cavalo-monte-cabanas-do-mar": { caption: "Horseback rides along Praia do Norte at sunset 🐴", cat: CAT.activity },
    "na-pizza": { caption: "Neapolitan pizza with a view in Cascais 🍕", cat: CAT.restaurant },
    "bahia-beach-bar-restaurant": { caption: "Sunsets, sun loungers and great food on the Meia Praia dunes 🌅", cat: CAT.restaurant },
    "wim-motors-academy": { caption: "Enduro and rally riding surrounded by the nature of coastal Alentejo 🏍️", cat: CAT.activity },
    "time-out-market": { caption: "Lisbon's best chefs, all under one roof 🍽️", cat: CAT.restaurant },
    "portugal-helicopters": { caption: "Lisbon, Belém and the coastline seen from the air 🚁", cat: CAT.activity },
    "1908-lisboa-hotel-restaurante-infame": { caption: "A dinner with character at Infame, Lisbon 🍷", cat: CAT.stay },
    "mela-canela": { caption: "100% plant-based brunch in the center of Sintra 🌱", cat: CAT.cafe },
    "lamassa-fresh-handemade-pasta": { caption: "Fresh handmade pasta, every single day 🍝", cat: CAT.restaurant },
    casainglesaroosa: { caption: "Pool, garden and peace and quiet in the heart of inland Alentejo 🌿", cat: CAT.stay },
    "rochavau-hotel": { caption: "Stylish downtime in the heart of Portimão 🏨", cat: CAT.stay },
    alchimie: { caption: "Seasonal French-Portuguese cooking in Matosinhos 🍽️", cat: CAT.restaurant },
    "pt-winehouse-barra-mars-petiscos-companh": { caption: "Portuguese wines and petiscos in Esmoriz 🍷", cat: CAT.restaurant },
    "restaurante-d-oliva": { caption: "Portuguese and Italian cuisine plus sushi in Matosinhos 🍝", cat: CAT.restaurant },
    "altissimo-lisboa": { caption: "A 13.5-meter indoor climbing wall in Sintra 🧗", cat: CAT.activity },
    "mar-padel": { caption: "Indoor padel by the Matosinhos coast 🎾", cat: CAT.activity },
    "lucia-del-mar-private-boat-tours-wines": { caption: "Boat tour on the Tagus with wine and a sunset 🌅", cat: CAT.activity },
    "watermark-surf-house": { caption: "A surf house right on the beach in Espinho 🏄", cat: CAT.stay },
    "funpark-kartodromo-de-fatima": { caption: "Go-karts, zip line and adventure in Fátima 🏎️", cat: CAT.activity },
    "lazy-breakfast-club": { caption: "Industrial-chic brunch in central Porto 🥞", cat: CAT.cafe },
  },
}

// lib/ifema-referencias.ts
// Aftermovies y referencias de ferias en IFEMA que se enseñan en las landings de expositores
// (/eventos/ifema y /eventos/ifema/propuesta). UN SOLO SITIO donde añadir material nuevo:
//  - AFTERMOVIES: vídeos finales ya montados (versión web 720p en Vercel Blob, con póster).
//  - REFERENCIAS: tarjetas con foto, logo y modal (aftermovie + fotos editadas).
// REGLA: solo material editado y de calidad. Nunca brutos ni fragmentos sin editar: lo ve el cliente final.
import type { ReferenceItem } from "@/components/landing/ReferenceCards"
import type { ShowcaseItem } from "@/components/landing/ShowcaseTabs"

// Aftermovies finales ya montados (versión web 720p en Vercel Blob). Se añaden aquí según estén aprobados.
export const AFTERMOVIES: ShowcaseItem[] = [
  {
    id: "serdatia",
    label: "Serdatia",
    context: "Serdatia · Tech Show Madrid · IFEMA",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/serdatia-techshow-web-rbOR1RQXoqazTu27GWThutst8Zjjh3.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/serdatia-techshow-poster-PQ1VoUYsvZgsR44qaZSuEuBPpIX1M2.jpg",
  },
  {
    id: "aok",
    label: "A-OK Motors",
    context: "A-OK Motors · VETECO · IFEMA",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-ferias-web.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-ferias-poster.jpg",
  },
]

// Referencias con resumen en modal. SOLO material editado y de calidad (aftermovies finales y fotos de la entrega),
// nunca brutos ni fragmentos sin editar: lo ve el cliente final. Dani autorizó nombrarlos el 13-nov-2026.
// Las entrevistas no entran hasta que estén editadas. Los aftermovies salen de AFTERMOVIES (mismo vídeo).
const VIDEO_DE = (id: string) => AFTERMOVIES.find((item) => item.id === id)
export const REFERENCIAS: ReferenceItem[] = [
  {
    id: "aok",
    name: "A-OK Motors",
    tag: "VETECO · IFEMA",
    text: "Contenido de su stand en foto y vídeo para sus redes.",
    logo: "/logos/ferias/aok.png",
    photo: "/img/ferias/aok.jpg",
    video: VIDEO_DE("aok") && { src: VIDEO_DE("aok")!.src, poster: VIDEO_DE("aok")!.poster },
    photos: ["/img/ferias/galeria/aok-01.jpg", "/img/ferias/galeria/aok-02.jpg"],
  },
  {
    id: "viavi",
    name: "VIAVI",
    tag: "VETECO · IFEMA",
    text: "Más de 10 entrevistas a fundadores, clientes y empleados para celebrar sus 30 años: contenido para varios meses.",
    logo: "/logos/ferias/viavi.png",
    photo: "/img/ferias/viavi.jpg",
    pos: "object-top",
    photos: ["/img/ferias/galeria/viavi-01.jpg", "/img/ferias/galeria/viavi-02.jpg"],
  },
  {
    id: "edugenia",
    name: "Edugenia",
    tag: "SIMO Educación · IFEMA",
    text: "Startup de menos de un año: foto y vídeo para sus redes, entrevistas y demos de producto en su propio stand.",
    logo: "/logos/ferias/edugenia.svg",
    photo: "/img/ferias/edugenia.jpg",
    photos: ["/img/ferias/galeria/edugenia-01.jpg", "/img/ferias/galeria/edugenia-02.jpg"],
  },
  {
    id: "serdatia",
    name: "Serdatia",
    tag: "Tech Show Madrid · IFEMA",
    text: "Empresa nueva del grupo Seresco: contenido para LinkedIn y TikTok con el que hicieron su lanzamiento.",
    logo: "/logos/ferias/serdatia.png",
    photo: "/img/ferias/serdatia.jpg",
    video: VIDEO_DE("serdatia") && { src: VIDEO_DE("serdatia")!.src, poster: VIDEO_DE("serdatia")!.poster },
    photos: ["/img/ferias/galeria/serdatia-01.jpg"],
  },
]


// lib/ifema-referencias.ts
// Aftermovies y referencias de ferias en IFEMA que se enseñan en las landings de expositores
// (/eventos/ifema y /eventos/ifema/propuesta). UN SOLO SITIO donde añadir material nuevo:
//  - AFTERMOVIES: vídeos finales ya montados (versión web 720p en Vercel Blob, con póster).
//  - REFERENCIAS: tarjetas con foto, logo y modal (aftermovie + fotos editadas).
// REGLA: solo material editado y de calidad. Nunca brutos ni fragmentos sin editar: lo ve el cliente final.
import type { EntregaVideo, ReferenceItem } from "@/components/landing/ReferenceCards"
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
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-aftermovie-web-ftBRVus9VzKvbxdlQTupprIOurzHh1.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-aftermovie-poster-skCI0oU9M0wsBC1JsCXbwELNy8RpTJ.jpg",
  },
  {
    id: "viavi",
    label: "VIAVI",
    context: "VIAVI · 30 aniversario · VETECO · IFEMA",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-aftermovie-web-4HbQ0ck50JMNEVc3AdOJtr4ZegvBfl.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-aftermovie-poster-EXItTmAf0NDbSjQECmasc8nkRpGzgy.jpg",
  },
  {
    id: "edugenia",
    label: "Edugenia",
    context: "Edugenia · SIMO Educación · IFEMA",
    src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/edugenia-aftermovie-web-LM0bfO02mBMNWqoESq28Suui8eDyWu.mp4",
    poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/edugenia-aftermovie-poster-hEOycgG7PaGORqqWL8P9DLisSGxOBk.jpg",
  },
]

// Más allá del aftermovie: entrevista y reels verticales ya entregados (versión web 720p, con póster).
// Solo se ven dentro de la ficha de cada empresa (REFERENCIAS.extras). `vertical` = 9:16.
const ENTREVISTA: EntregaVideo = {
  id: "viavi-entrevista",
  label: "Entrevista",
  context: "VIAVI · 30 años contados por su equipo",
  src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-entrevista-web-Gn7B99XAMAwivIqeYQRWo5JeNNQkcN.mp4",
  poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-entrevista-poster-sUS42nwpvEQd6f7eEv1zqKWbMiAA9S.jpg",
}
const REELS: EntregaVideo[] = [
  { id: "viavi-reel-cena", label: "Reel", context: "VIAVI · cena de los 30 años", src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-reel-cena-web-9BFGFTmc1iqUUSrHALti8kKFkRVNX0.mp4", poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-reel-cena-poster-OBIRXupBHsbcjEYR0c8TEcBZStrkbh.jpg", vertical: true },
  { id: "viavi-reel-feria", label: "Reel", context: "VIAVI · el día de la feria", src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-reel-feria-web-mU9JpmL6T4oTNFsL6H97YYMPgVANIS.mp4", poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/viavi-reel-feria-poster-2onStBco9Q59hx0Vfwz196YbcnaTnL.jpg", vertical: true },
  { id: "aok-minireel", label: "Reel", context: "A-OK Motors · stand en 8 planos", src: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-minireel-web-NCE1zoc2Gv4HWu8ShjAqA7ALKbEodQ.mp4", poster: "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/portfolio/aok-minireel-poster-E5xghhdUlVT3uZXRwehiaCkMgqaqCH.jpg", vertical: true },
]

// Referencias con resumen en modal. SOLO material editado y de calidad (aftermovies finales y fotos de la entrega),
// nunca brutos ni fragmentos sin editar: lo ve el cliente final. Dani autorizó nombrarlos el 13-nov-2026.
// Entrevista y reels editados: ver ENTREVISTA y REELS arriba. Los aftermovies salen de AFTERMOVIES (mismo vídeo).
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
    extras: [REELS[2]],
    photos: [{ src: "/img/ferias/galeria/aok-01.jpg" }, { src: "/img/ferias/galeria/aok-02.jpg" }, { src: "/img/ferias/galeria/aok-03.jpg" }, { src: "/img/ferias/galeria/aok-04.jpg" }, { src: "/img/ferias/galeria/aok-05.jpg", portrait: true }, { src: "/img/ferias/galeria/aok-06.jpg" }],
  },
  {
    id: "viavi",
    name: "VIAVI",
    tag: "VETECO · IFEMA",
    text: "Más de 10 entrevistas a fundadores, clientes y empleados para celebrar sus 30 años: contenido para varios meses.",
    logo: "/logos/ferias/viavi.png",
    photo: "/img/ferias/viavi.jpg",
    pos: "object-top",
    extras: [ENTREVISTA, REELS[0], REELS[1]],
    video: VIDEO_DE("viavi") && { src: VIDEO_DE("viavi")!.src, poster: VIDEO_DE("viavi")!.poster },
    photos: [{ src: "/img/ferias/galeria/viavi-01.jpg" }, { src: "/img/ferias/galeria/viavi-02.jpg" }, { src: "/img/ferias/galeria/viavi-03.jpg" }, { src: "/img/ferias/galeria/viavi-04.jpg" }, { src: "/img/ferias/galeria/viavi-05.jpg" }, { src: "/img/ferias/galeria/viavi-06.jpg" }],
  },
  {
    id: "edugenia",
    name: "Edugenia",
    tag: "SIMO Educación · IFEMA",
    text: "Startup de menos de un año: foto y vídeo para sus redes, entrevistas y demos de producto en su propio stand.",
    logo: "/logos/ferias/edugenia.svg",
    photo: "/img/ferias/edugenia.jpg",
    video: VIDEO_DE("edugenia") && { src: VIDEO_DE("edugenia")!.src, poster: VIDEO_DE("edugenia")!.poster },
    photos: [{ src: "/img/ferias/galeria/edugenia-01.jpg" }, { src: "/img/ferias/galeria/edugenia-02.jpg" }, { src: "/img/ferias/galeria/edugenia-03.jpg" }, { src: "/img/ferias/galeria/edugenia-04.jpg" }, { src: "/img/ferias/galeria/edugenia-05.jpg", portrait: true }, { src: "/img/ferias/galeria/edugenia-06.jpg" }],
  },
  {
    id: "serdatia",
    name: "Serdatia",
    tag: "Tech Show Madrid · IFEMA",
    text: "Empresa nueva del grupo Seresco: contenido para LinkedIn y TikTok con el que hicieron su lanzamiento.",
    logo: "/logos/ferias/serdatia.png",
    photo: "/img/ferias/serdatia.jpg",
    video: VIDEO_DE("serdatia") && { src: VIDEO_DE("serdatia")!.src, poster: VIDEO_DE("serdatia")!.poster },
    photos: [{ src: "/img/ferias/galeria/serdatia-01.jpg" }],
  },
]


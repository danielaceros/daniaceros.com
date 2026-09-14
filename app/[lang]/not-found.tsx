// 404 dentro del layout [lang] (Header, <html lang>, metadata del idioma).
// Antes del i18n el layout raíz era app/layout.tsx y Next pintaba su 404 por
// defecto dentro de él; al mover el layout a app/[lang] hace falta este
// boundary (junto con app/[lang]/[...notFound]/page.tsx) para conservarlo.
// Reutilizamos exactamente la UI por defecto de Next ("404 | This page could
// not be found.") para que el resultado sea idéntico al de antes.
export { default } from "next/dist/client/components/builtin/not-found"

import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

export default function Head() {
  const title = "Vídeo profesional para empresas en Madrid | Presupuesto, grabación y edición"
  const description =
    "Vídeo profesional para empresas en Madrid con enfoque comercial. Yo y mi equipo nos encargamos de propuesta, presupuesto, grabación y edición para web, ventas, campañas y marca."
  const canonical = `${SITE_URL}/video-corporativo-madrid`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Daniel Acero" />
      <meta name="keywords" content="video profesional para empresas madrid, grabacion video corporativo madrid, video corporativo madrid, grabacion de video para empresas, filmmaker corporativo" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Daniel Acero" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@daniaceros" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </>
  )
}

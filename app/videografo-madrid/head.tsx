import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

export default function Head() {
  const title = "Videografo en Madrid | Grabacion profesional"
  const description =
    "Videografo profesional en Madrid para eventos, empresas y contenido corporativo. Video de alta calidad para comunicacion de marca."
  const canonical = `${SITE_URL}/videografo-madrid`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="videografo madrid, grabacion eventos madrid, video corporativo madrid" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </>
  )
}

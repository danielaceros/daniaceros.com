import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

export default function Head() {
  const title = "Video de eventos en Madrid"
  const description =
    "Servicio de video de eventos en Madrid para congresos, conferencias, ferias y eventos corporativos con enfoque profesional."
  const canonical = `${SITE_URL}/video-eventos-madrid`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="video eventos madrid, videografo eventos corporativos, grabacion congresos madrid" />
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

import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

export default function Head() {
  const title = "Filmmaker en Madrid | Video profesional para empresas"
  const description =
    "Servicio de filmmaker en Madrid para eventos, marcas y empresas. Produccion, grabacion y edicion audiovisual profesional."
  const canonical = `${SITE_URL}/filmmaker-madrid`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="filmmaker madrid, video profesional madrid, produccion audiovisual empresas" />
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

import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

export default function Head() {
  const title = "Sobre mi | Daniel Acero"
  const description =
    "Conoce a Daniel Acero, filmmaker corporativo especializado en video para empresas, eventos e instituciones."
  const canonical = `${SITE_URL}/sobre-mi`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="sobre daniel acero, filmmaker madrid, videografo corporativo" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="profile" />
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

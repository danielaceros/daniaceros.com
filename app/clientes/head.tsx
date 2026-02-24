import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

export default function Head() {
  const title = "Clientes | Daniel Acero"
  const description =
    "Clientes y proyectos audiovisuales para empresas, instituciones, agencias y marcas en Madrid y toda Espana."
  const canonical = `${SITE_URL}/clientes`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="clientes filmmaker, video corporativo clientes, casos audiovisuales" />
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

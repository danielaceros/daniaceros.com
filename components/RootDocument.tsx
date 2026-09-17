// components/RootDocument.tsx
// Documento HTML raíz compartido (<html>, <head>, tracking, Header,
// PageTransition). Lo usan:
//   - app/[lang]/layout.tsx       → layout raíz por idioma
//   - app/global-not-found.tsx    → 404 de rutas inexistentes (Next lo sirve
//     sin pasar por ningún layout, así que necesita el documento completo)
import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "@/app/globals.css"
import Script from "next/script"
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition"
import LuxuryMotionProvider from "@/components/LuxuryMotionProvider"
import ContactClickTracking from "@/components/ContactClickTracking"
import MetaPixel from "@/components/MetaPixel"
import { BUSINESS_ID, DEFAULT_OG_IMAGE, PERSON_ID, SITE_URL } from "@/lib/seo"
import { OG_LOCALE, getDictionary, localizedHref, type Lang } from "@/lib/i18n"

const FAVICON_URL =
  "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/sobre-mi/daniel-acero-ceo-awards-bqVq9Ciw7DVt6yXSt5RamnQXn0WOJj.jpeg"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700"],
})

/** Metadata raíz por idioma (ES = idéntica a la del layout original). */
export function buildRootMetadata(lang: Lang): Metadata {
  const t = getDictionary(lang).meta.layout
  const homeUrl = lang === "es" ? SITE_URL : `${SITE_URL}${localizedHref(lang, "/")}`

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.defaultTitle,
      template: "%s | Daniel Acero",
    },
    description: t.description,
    applicationName: "Daniel Acero",
    keywords: t.keywords,
    alternates: {
      canonical: localizedHref(lang, "/"),
    },
    // Favicon: app/favicon.ico (64 px, la misma foto; Next lo enlaza solo). El JPEG de 220 KB del Blob
    // solo queda como apple-touch-icon, que los navegadores de escritorio/Android no descargan.
    icons: {
      apple: [{ url: FAVICON_URL, type: "image/jpeg", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang],
      url: homeUrl,
      siteName: "Daniel Acero",
      title: t.ogTitle,
      description: t.ogDescription,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Daniel Acero" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.twitterTitle,
      description: t.twitterDescription,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

export const rootViewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export default function RootDocument({
  lang,
  notFound = false,
  children,
}: {
  lang: Lang
  /** true solo desde app/global-not-found.tsx */
  notFound?: boolean
  children: React.ReactNode
}) {
  const dict = getDictionary(lang)

  // Keep third-party tags out of preview/dev to improve Lighthouse
  // signal quality and avoid third-party cookie penalties there.
  const isProductionDeployment = process.env.VERCEL_ENV === "production"
  const trackingExplicitlyDisabled = process.env.NEXT_PUBLIC_ENABLE_TRACKING === "false"
  const enableTracking = isProductionDeployment && !trackingExplicitlyDisabled

  return (
    <html lang={lang}>
      {/* Documento raíz real (antes vivía en app/layout.tsx, donde la regla no aplica). */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <link rel="apple-touch-icon" href={FAVICON_URL} sizes="180x180" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": BUSINESS_ID,
              name: "Daniel Acero",
              // Marca personal = "Dani Acero" (Instagram, a0studios.es); mismo profesional.
              alternateName: "Dani Acero",
              description: dict.meta.layout.description,
              // Sin `logo`: no existe un logotipo de la marca personal (solo fotos); no se inventa uno.
              image: DEFAULT_OG_IMAGE,
              url: SITE_URL,
              telephone: "+34 711 25 54 96",
              areaServed: "ES",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
              sameAs: [
                "https://www.instagram.com/daniaceros",
                "https://es.linkedin.com/in/daniaceros",
                "https://www.youtube.com/@daniacerxs/videos",
              ],
              serviceType: dict.schema.serviceType,
              knowsAbout: dict.schema.knowsAbout,
              // Referencia por @id al Person completo definido en /sobre-mi, en
              // vez de duplicar el objeto entero aquí.
              founder: { "@id": PERSON_ID },
            }),
          }}
        />

        {enableTracking && (
          <>
            {/* Google Analytics 4 + Google Ads (3 IDs: GA4 + 2 conversiones).
                TODO (pendiente, requiere acceso al panel de GTM-5NK4CTSS que
                no tenemos desde código): GTM puede disparar los 3
                config/conversion tags de este bloque él solo (Configuración
                GA4 + 2 tags de Google Ads), lo que eliminaría este script
                gtag.js independiente y sus 3 llamadas de red de bootstrap.
                NO lo hemos quitado aquí para no romper en silencio el
                tracking de conversiones de Ads mientras esos tags no estén
                verificados dentro del contenedor GTM. */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-96SSL5X2QH"
              strategy="lazyOnload"
            />
            <Script id="ga4" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-96SSL5X2QH');
                gtag('config', 'AW-17644170080');
                gtag('config', 'AW-17976589112');
              `}
            </Script>

            {/* Google Tag Manager */}
            <Script id="gtm" strategy="lazyOnload">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5NK4CTSS');
              `}
            </Script>

            <MetaPixel />

            {/* Microsoft Clarity — no es analítica crítica para negocio (a
                diferencia de GA4/Ads), así que se difiere a lazyOnload junto
                con el resto para no competir con el LCP. */}
            <Script id="clarity" strategy="lazyOnload">
              {`
                (function(c,l,a,r,i,t,y){
                  var existing=c[a];
                  if (typeof existing!=="function") {
                    var q=(existing&&existing.q)||[];
                    var fn=function(){fn.q.push(arguments)};
                    fn.q=q;
                    c[a]=fn;
                  }
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "tp6om1sfvt");
              `}
            </Script>
          </>
        )}
      </head>

      <body className={`${manrope.variable} ${cormorant.variable} antialiased bg-[#0a0a0a] text-white`}>
        <LuxuryMotionProvider />

        {enableTracking && (
          <>
            {/* GTM noscript */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-5NK4CTSS"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>

            {/* Meta Pixel noscript */}
            <noscript>
              <img
                height="1"
                width="1"
                alt=""
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=1832152070803112&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        )}

        {enableTracking && <ContactClickTracking />}

        <Header lang={lang} notFound={notFound} />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}

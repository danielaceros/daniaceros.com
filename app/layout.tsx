import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition"
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo"

const FAVICON_URL =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/0a4bxjgj0xSqIihE9ktHzjeng%20(2).png?alt=media&token=ead483f1-9cd5-4169-9e3d-810307334885"

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Daniel Acero | Filmmaker corporativo en Madrid",
    template: "%s | Daniel Acero",
  },
  description:
    "Filmmaker corporativo y videógrafo de eventos en Madrid. Vídeo profesional para empresas, marcas e instituciones.",
  applicationName: "Daniel Acero",
  keywords: [
    "filmmaker madrid",
    "videografo madrid",
    "video corporativo madrid",
    "video eventos madrid",
    "produccion audiovisual para empresas",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: FAVICON_URL }],
    shortcut: [{ url: FAVICON_URL }],
    apple: [{ url: FAVICON_URL }],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Daniel Acero",
    title: "Daniel Acero | Filmmaker corporativo en Madrid",
    description:
      "Vídeo profesional para eventos, marcas y empresas en Madrid. Producción audiovisual con enfoque cinematográfico.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Daniel Acero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Acero | Filmmaker corporativo en Madrid",
    description:
      "Vídeo profesional para empresas, marcas y eventos en Madrid.",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Keep third-party tags out of preview/dev to improve Lighthouse
  // signal quality and avoid third-party cookie penalties there.
  const isProductionDeployment = process.env.VERCEL_ENV === "production"
  const trackingExplicitlyDisabled = process.env.NEXT_PUBLIC_ENABLE_TRACKING === "false"
  const enableTracking = isProductionDeployment && !trackingExplicitlyDisabled

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Daniel Acero",
              image: DEFAULT_OG_IMAGE,
              url: SITE_URL,
              telephone: "+34 711 25 54 96",
              areaServed: "ES",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
              sameAs: ["https://www.instagram.com/daniaceros"],
              serviceType: [
                "Video corporativo",
                "Video institucional",
                "Video de eventos",
                "Produccion audiovisual",
              ],
            }),
          }}
        />

        {enableTracking && (
          <>
            {/* Google Analytics 4 */}
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

            {/* Meta Pixel */}
            <Script id="meta-pixel" strategy="lazyOnload">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src='https://connect.facebook.net/en_US/fbevents.js';
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '1832152070803112');
                fbq('track', 'PageView');
              `}
            </Script>

            {/* Microsoft Clarity */}
            <Script id="clarity" strategy="lazyOnload">
              {`
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "tp6om1sfvt");
              `}
            </Script>
          </>
        )}
      </head>

      <body className={`${manrope.variable} ${cormorant.variable} antialiased bg-[#0a0a0a] text-white`}>
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

        <Header />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
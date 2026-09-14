import type { NextConfig } from "next";

// Dominios de terceros que el sitio carga realmente (revisado con grep sobre
// app/, components/, lib/ y data/): GTM/GA4/Ads (googletagmanager.com),
// Meta Pixel (facebook.net/facebook.com), Microsoft Clarity (clarity.ms),
// el formulario embebido de GoHighLevel/fitnesslaunch (incluye Cloudflare
// Turnstile dentro de su propio iframe, que no necesita entrar en esta CSP
// porque corre en el documento del iframe, con su propia CSP), Firebase
// Storage (algunas imágenes legacy) y Vercel Blob (vídeos/imágenes actuales
// del portfolio). Las fuentes (Manrope, Cormorant Garamond) se sirven via
// next/font y quedan self-hosted, sin necesidad de fonts.googleapis.com.
//
// 'unsafe-inline' en script-src/style-src se mantiene porque GA4/GTM/Meta
// Pixel/Clarity se inyectan como <script> inline (next/script con contenido
// literal, sin nonce) y varios componentes usan estilos inline; pasar a un
// CSP basado en nonce sería más estricto pero requiere middleware nuevo, así
// que se deja fuera de este cambio para no arriesgar con lo ya en producción.
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  // Google tag (GA4 + Google Ads), Meta Pixel, Microsoft Clarity (carga el script real desde scripts.clarity.ms) y GHL.
  "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.googleadservices.com https://*.doubleclick.net https://www.google.com https://connect.facebook.net https://www.clarity.ms https://*.clarity.ms https://api.fitnesslaunch.es",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://firebasestorage.googleapis.com https://kgtz1gujr7extokb.public.blob.vercel-storage.com https://icons.duckduckgo.com https://t3.gstatic.com https://storage.googleapis.com https://www.facebook.com https://*.google-analytics.com https://*.googletagmanager.com https://www.googleadservices.com https://*.doubleclick.net https://www.google.com https://www.google.es https://*.clarity.ms https://c.bing.com https://lavueltaalmundosinunduro.com",
  "media-src 'self' blob: https://kgtz1gujr7extokb.public.blob.vercel-storage.com https://firebasestorage.googleapis.com https://lavueltaalmundosinunduro.com",
  // hls.js (VSL adaptativo): MediaSource usa URLs blob: y su worker se crea desde un blob:
  "worker-src 'self' blob:",
  "font-src 'self' data:",
  // GA4 envía a region1.google-analytics.com (y otros *.google-analytics.com / *.analytics.google.com);
  // Google Ads a www.google.com/ccm, google.com/ccm/form-data (sin www) y *.doubleclick.net (ad./googleads./stats.);
  // Clarity a *.clarity.ms. Meta Pixel: además de facebook.com, la config del píxel (connect.facebook.net/signals/config)
  // declara dos endpoints de servidor propios (…a.run.app y …on.aws); si Meta los cambia, aparecerán como violación de CSP.
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com https://google.com https://www.google.es https://*.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://www.facebook.com https://mpc2-prod-26-is5qnl632q-uc.a.run.app https://5z-2b6b7616f94640c2840d1841e1ac24c3.ecs.us-east-1.on.aws https://*.clarity.ms https://api.fitnesslaunch.es https://firebasestorage.googleapis.com https://kgtz1gujr7extokb.public.blob.vercel-storage.com",
  "frame-src 'self' https://api.fitnesslaunch.es https://www.googletagmanager.com https://*.doubleclick.net https://www.facebook.com",
  // Meta Pixel envía algunos eventos con un <form> POST a www.facebook.com/tr.
  "form-action 'self' https://api.fitnesslaunch.es https://www.facebook.com",
].join("; ");

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    // app/global-not-found.tsx: 404 con el documento completo (Header,
    // metadata) ahora que el layout raíz vive en app/[lang].
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Rooftop Content Studio ya no existe: ahora es A0Studios (web propia). 301 para pasar el SEO.
      { source: "/the-rooftop-content-studio", destination: "https://www.a0studios.es/", permanent: true },
      { source: "/:lang(en|es)/the-rooftop-content-studio", destination: "https://www.a0studios.es/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;

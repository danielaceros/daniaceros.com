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
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://www.clarity.ms https://api.fitnesslaunch.es",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://firebasestorage.googleapis.com https://kgtz1gujr7extokb.public.blob.vercel-storage.com https://icons.duckduckgo.com https://t3.gstatic.com https://storage.googleapis.com https://www.facebook.com https://www.google.com https://lavueltaalmundosinunduro.com",
  "media-src 'self' https://kgtz1gujr7extokb.public.blob.vercel-storage.com https://firebasestorage.googleapis.com https://lavueltaalmundosinunduro.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://connect.facebook.net https://www.facebook.com https://www.clarity.ms https://api.fitnesslaunch.es https://firebasestorage.googleapis.com https://kgtz1gujr7extokb.public.blob.vercel-storage.com",
  "frame-src 'self' https://api.fitnesslaunch.es https://www.googletagmanager.com",
  "form-action 'self' https://api.fitnesslaunch.es",
].join("; ");

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
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

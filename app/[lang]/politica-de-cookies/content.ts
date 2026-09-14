// Textos de /politica-de-cookies por idioma. El ES es literal del original (no cambiar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Política de cookies",
  metaDescription: "Política de cookies del sitio web de Daniel Acero.",
  /** Nota de traducción de cortesía (solo EN). */
  notice: null as string | null,
  title: "Política de cookies",
  intro:
    "Esta web, titularidad de Daniel Acero Sagredo (KLIP), utiliza cookies propias y de terceros para mejorar la experiencia de navegación, analizar el uso del sitio y ofrecer contenidos adaptados a los intereses del usuario.",
  what: {
    title: "1. ¿Qué son las cookies?",
    text: "Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita una página web. Permiten recordar información sobre su visita, como el idioma preferido u otras opciones de configuración.",
  },
  types: {
    title: "2. Tipos de cookies utilizadas",
    items: [
      {
        label: "Cookies técnicas:",
        text: "necesarias para el funcionamiento del sitio web y la prestación de los servicios ofrecidos.",
      },
      {
        label: "Cookies de análisis:",
        text: "permiten analizar el comportamiento de los usuarios para mejorar la web (por ejemplo, Google Analytics).",
      },
      {
        label: "Cookies publicitarias:",
        text: "gestionan los espacios publicitarios en base a criterios como el contenido editado o la frecuencia con la que se muestran los anuncios.",
      },
      {
        label: "Cookies de redes sociales:",
        text: "permiten interactuar con plataformas como Instagram, Facebook o TikTok.",
      },
    ],
  },
  thirdParty: {
    title: "3. Cookies de terceros",
    text: "Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos, de uso del sitio web y para la prestación de otros servicios relacionados con la actividad del sitio web.",
    items: ["Google Analytics", "Google Ads", "Meta (Facebook Pixel)", "Microsoft Clarity"],
  },
  management: {
    title: "4. Gestión y configuración de cookies",
    text: "El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su dispositivo:",
    /** `href` = destino; `label` = texto visible del enlace (en ES difiere en Chrome). */
    browsers: [
      {
        name: "Chrome",
        href: "https://support.google.com/chrome/answer/95647?hl=es",
        label: "https://support.google.com/chrome/answer/95647",
      },
      {
        name: "Safari",
        href: "https://support.apple.com/es-es/HT201265",
        label: "https://support.apple.com/es-es/HT201265",
      },
      {
        name: "Firefox",
        href: "https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-cookies",
        label: "https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-cookies",
      },
      {
        name: "Edge",
        href: "https://support.microsoft.com/es-es/help/4027947",
        label: "https://support.microsoft.com/es-es/help/4027947",
      },
    ],
  },
  consent: {
    title: "5. Consentimiento",
    text: "Al acceder a este sitio web por primera vez, el usuario verá un aviso sobre el uso de cookies. Si continúa navegando, se considerará que acepta su uso conforme a lo descrito en la presente política.",
  },
  updates: {
    title: "6. Actualización de la política de cookies",
    text: "El titular de este sitio web se reserva el derecho a modificar la presente política de cookies en función de exigencias legales o técnicas. Se recomienda al usuario revisar periódicamente esta política.",
  },
}

const en: typeof es = {
  metaTitle: "Cookie policy",
  metaDescription: "Cookie policy of Daniel Acero's website.",
  notice:
    "This English version is provided for convenience only. In case of discrepancy, the Spanish version shall prevail.",
  title: "Cookie policy",
  intro:
    "This website, owned by Daniel Acero Sagredo (KLIP), uses its own and third-party cookies to improve the browsing experience, analyze the use of the site and offer content tailored to the user's interests.",
  what: {
    title: "1. What are cookies?",
    text: "Cookies are small text files that are stored on the user's device when they visit a website. They make it possible to remember information about the visit, such as the preferred language or other settings.",
  },
  types: {
    title: "2. Types of cookies used",
    items: [
      {
        label: "Technical cookies:",
        text: "necessary for the operation of the website and the provision of the services offered.",
      },
      {
        label: "Analytics cookies:",
        text: "allow user behavior to be analyzed in order to improve the website (for example, Google Analytics).",
      },
      {
        label: "Advertising cookies:",
        text: "manage advertising spaces based on criteria such as the content published or the frequency with which ads are shown.",
      },
      {
        label: "Social media cookies:",
        text: "allow interaction with platforms such as Instagram, Facebook or TikTok.",
      },
    ],
  },
  thirdParty: {
    title: "3. Third-party cookies",
    text: "This website may use third-party services that collect information for statistical purposes, for website usage purposes and for the provision of other services related to the website's activity.",
    items: ["Google Analytics", "Google Ads", "Meta (Facebook Pixel)", "Microsoft Clarity"],
  },
  management: {
    title: "4. Managing and configuring cookies",
    text: "Users can allow, block or delete the cookies installed on their device by configuring the options of the browser installed on it:",
    browsers: [
      {
        name: "Chrome",
        href: "https://support.google.com/chrome/answer/95647?hl=en",
        label: "https://support.google.com/chrome/answer/95647",
      },
      {
        name: "Safari",
        href: "https://support.apple.com/en-us/HT201265",
        label: "https://support.apple.com/en-us/HT201265",
      },
      {
        name: "Firefox",
        href: "https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox",
        label: "https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox",
      },
      {
        name: "Edge",
        href: "https://support.microsoft.com/en-us/help/4027947",
        label: "https://support.microsoft.com/en-us/help/4027947",
      },
    ],
  },
  consent: {
    title: "5. Consent",
    text: "When accessing this website for the first time, the user will see a notice about the use of cookies. If the user continues browsing, they will be deemed to accept their use as described in this policy.",
  },
  updates: {
    title: "6. Updates to the cookie policy",
    text: "The owner of this website reserves the right to amend this cookie policy in line with legal or technical requirements. Users are advised to review this policy periodically.",
  },
}

export const content: Record<Lang, typeof es> = { es, en }

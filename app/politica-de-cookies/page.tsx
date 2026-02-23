import ContactCTA from "@/components/ContactCTA"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-28">
        <h1 className="mb-10 font-inter font-semibold uppercase tracking-[-0.08em] text-[32px] sm:text-[42px] lg:text-[56px]">
          Política de cookies
        </h1>

        <div className="space-y-10 text-[13px] leading-[1.7] sm:text-[14px] text-white/75">
          <p>
            Esta web, titularidad de Daniel Acero Sagredo (KLIP), utiliza cookies propias y de terceros para mejorar la experiencia de navegación, analizar el uso del sitio y ofrecer contenidos adaptados a los intereses del usuario.
          </p>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase tracking-[-0.06em] text-[14px] sm:text-[15px] text-white">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita una página web. Permiten recordar información sobre su visita, como el idioma preferido u otras opciones de configuración.
          </p>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase tracking-[-0.06em] text-[14px] sm:text-[15px] text-white">
            2. Tipos de cookies utilizadas
          </h2>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              <strong>Cookies técnicas:</strong> necesarias para el funcionamiento del sitio web y la prestación de los servicios ofrecidos.
            </li>
            <li>
              <strong>Cookies de análisis:</strong> permiten analizar el comportamiento de los usuarios para mejorar la web (por ejemplo, Google Analytics).
            </li>
            <li>
              <strong>Cookies publicitarias:</strong> gestionan los espacios publicitarios en base a criterios como el contenido editado o la frecuencia con la que se muestran los anuncios.
            </li>
            <li>
              <strong>Cookies de redes sociales:</strong> permiten interactuar con plataformas como Instagram, Facebook o TikTok.
            </li>
          </ul>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase tracking-[-0.06em] text-[14px] sm:text-[15px] text-white">
            3. Cookies de terceros
          </h2>
          <p>
            Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos, de uso del sitio web y para la prestación de otros servicios relacionados con la actividad del sitio web.
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Google Analytics</li>
            <li>Google Ads</li>
            <li>Meta (Facebook Pixel)</li>
            <li>Microsoft Clarity</li>
          </ul>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase tracking-[-0.06em] text-[14px] sm:text-[15px] text-white">
            4. Gestión y configuración de cookies
          </h2>
          <p>
            El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su dispositivo:
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Chrome:{" "}
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition"
              >
                https://support.google.com/chrome/answer/95647
              </a>
            </li>
            <li>
              Safari:{" "}
              <a
                href="https://support.apple.com/es-es/HT201265"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition"
              >
                https://support.apple.com/es-es/HT201265
              </a>
            </li>
            <li>
              Firefox:{" "}
              <a
                href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition"
              >
                https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-cookies
              </a>
            </li>
            <li>
              Edge:{" "}
              <a
                href="https://support.microsoft.com/es-es/help/4027947"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition"
              >
                https://support.microsoft.com/es-es/help/4027947
              </a>
            </li>
          </ul>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase tracking-[-0.06em] text-[14px] sm:text-[15px] text-white">
            5. Consentimiento
          </h2>
          <p>
            Al acceder a este sitio web por primera vez, el usuario verá un aviso sobre el uso de cookies. Si continúa navegando, se considerará que acepta su uso conforme a lo descrito en la presente política.
          </p>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase tracking-[-0.06em] text-[14px] sm:text-[15px] text-white">
            6. Actualización de la política de cookies
          </h2>
          <p>
            El titular de este sitio web se reserva el derecho a modificar la presente política de cookies en función de exigencias legales o técnicas. Se recomienda al usuario revisar periódicamente esta política.
          </p>
        </div>
      </section>

      <div className="mt-24">
        <ContactCTA />
      </div>
    </main>
  )
}
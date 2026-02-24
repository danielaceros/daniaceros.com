import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Politica de privacidad",
  description: "Politica de privacidad del sitio web de Daniel Acero.",
  path: "/politica-de-privacidad",
})

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <h1 className="mb-12 font-inter font-semibold uppercase  text-[32px] sm:text-[42px] lg:text-[56px]">
          Política de privacidad
        </h1>

        <div className="space-y-10 text-[14px] leading-[1.7] text-white/80 sm:text-[15px]">
          <p>
            En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios de este sitio web de los siguientes aspectos relacionados con el tratamiento de sus datos personales.
          </p>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            1. Responsable del tratamiento
          </h2>
          <ul className="space-y-1">
            <li>Responsable: Daniel Acero Sagredo</li>
            <li>Nombre comercial: KLIP</li>
            <li>DNI/NIF: 06590329R</li>
            <li>Domicilio: Calle de Mercedes Arteaga 24, España</li>
            <li>
              Correo electrónico de contacto:{" "}
              <a
                href="mailto:hello@daniaceros.com"
                className="underline underline-offset-4 hover:text-white transition"
              >
                hello@daniaceros.com
              </a>
            </li>
          </ul>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            2. Datos personales que se recogen
          </h2>
          <p>
            A través de este sitio web se pueden recoger los siguientes datos personales:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Información incluida en los mensajes enviados a través de formularios o WhatsApp</li>
          </ul>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            3. Finalidad del tratamiento de los datos
          </h2>
          <ul className="list-disc pl-4 space-y-1">
            <li>Atender solicitudes de información o presupuestos.</li>
            <li>Gestionar la relación comercial o contractual.</li>
            <li>Responder consultas enviadas a través de los canales de contacto.</li>
          </ul>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            4. Legitimación para el tratamiento
          </h2>
          <ul className="list-disc pl-4 space-y-1">
            <li>El consentimiento del usuario al enviar sus datos.</li>
            <li>La ejecución de un contrato o precontrato.</li>
          </ul>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            5. Conservación de los datos
          </h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar posibles responsabilidades derivadas del tratamiento.
          </p>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            6. Derechos de los usuarios
          </h2>
          <ul className="list-disc pl-4 space-y-1">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la rectificación de los datos inexactos</li>
            <li>Solicitar su supresión</li>
            <li>Solicitar la limitación del tratamiento</li>
            <li>Oponerse al tratamiento</li>
            <li>Solicitar la portabilidad de los datos</li>
          </ul>

          <p>
            Para ejercer estos derechos, el usuario puede enviar una solicitud al correo{" "}
            <a
              href="mailto:work@daniaceros.com"
              className="underline underline-offset-4 hover:text-white transition"
            >
              work@daniaceros.com
            </a>
          </p>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            7. Medidas de seguridad
          </h2>
          <p>
            El responsable ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>

          <h2 className="mt-10 mb-3 font-inter font-semibold uppercase text-[14px] sm:text-[15px] text-white">
            8. Cambios en la política de privacidad
          </h2>
          <p>
            El titular se reserva el derecho a modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda al usuario revisar periódicamente esta política.
          </p>
        </div>
      </article>

      <div className="mt-24">
        <ContactCTA />
      </div>
    </main>
  )
}
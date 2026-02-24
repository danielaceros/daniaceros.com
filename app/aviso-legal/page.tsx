// app/aviso-legal/page.tsx
import type { Metadata } from "next"
import ContactCTA from "@/components/ContactCTA"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  description: "Informacion legal del sitio web de Daniel Acero.",
  path: "/aviso-legal",
  noIndex: true,
})

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <h1
          className="
            mb-12 font-inter font-semibold uppercase tracking-[-0.08em]
            text-[32px] sm:text-[42px] lg:text-[56px]
          "
        >
          Aviso legal
        </h1>

        <div className="space-y-8 text-[14px] leading-[1.7] text-white/80 sm:text-[15px]">
          <p>
            En cumplimiento de lo dispuesto en la Ley 34/2002, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios del presente
            sitio web de los siguientes datos:
          </p>

          <div>
            <p><strong>Titular del sitio web:</strong> Daniel Acero Sagredo</p>
            <p><strong>Nombre comercial:</strong> KLIP</p>
            <p><strong>DNI/NIF:</strong> 06590329R</p>
            <p><strong>Domicilio:</strong> Calle de Mercedes Arteaga 24, España</p>
            <p>
              <strong>Correo electrónico de contacto:</strong>{" "}
              <a href="mailto:work@daniaceros.com" className="underline hover:text-white transition-colors">
                work@daniaceros.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-inter font-semibold uppercase tracking-[-0.06em] text-white">
              Condiciones de uso
            </h2>
            <p>
              El acceso y uso de este sitio web atribuye la condición de usuario, que acepta desde
              dicho acceso y/o uso las presentes condiciones de uso.
            </p>
            <p>
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que el
              titular ofrece a través de este sitio web, con carácter enunciativo pero no limitativo,
              a no emplearlos para actividades ilícitas o contrarias a la buena fe y al orden
              público.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-inter font-semibold uppercase tracking-[-0.06em] text-white">
              Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, vídeos, diseño gráfico, código
              fuente, logos, marcas, etc.) son titularidad de Daniel Acero Sagredo o dispone de los
              derechos de uso necesarios, quedando prohibida su reproducción, distribución o
              comunicación pública sin autorización expresa del titular.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-inter font-semibold uppercase tracking-[-0.06em] text-white">
              Responsabilidad
            </h2>
            <p>
              El titular no se hace responsable de los posibles errores u omisiones en los
              contenidos, ni de la falta de disponibilidad del sitio web, aunque se compromete a
              realizar los esfuerzos necesarios para evitar este tipo de situaciones.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-inter font-semibold uppercase tracking-[-0.06em] text-white">
              Legislación aplicable y jurisdicción
            </h2>
            <p>
              La relación entre el titular del sitio web y el usuario se regirá por la normativa
              vigente en España. Cualquier controversia se someterá a los Juzgados y Tribunales del
              domicilio del titular.
            </p>
          </div>
        </div>
      </article>

      <ContactCTA />
    </main>
  )
}
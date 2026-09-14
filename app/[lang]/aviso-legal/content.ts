// Textos de /aviso-legal por idioma. El ES es literal del original (no cambiar).
// Datos del titular (nombre, NIF, domicilio, email) idénticos en ambos idiomas.
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Aviso legal",
  metaDescription: "Información legal del sitio web de Daniel Acero.",
  /** Nota de traducción de cortesía (solo EN). */
  notice: null as string | null,
  title: "Aviso legal",
  intro:
    "En cumplimiento de lo dispuesto en la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios del presente sitio web de los siguientes datos:",
  owner: {
    holderLabel: "Titular del sitio web:",
    tradeNameLabel: "Nombre comercial:",
    taxIdLabel: "DNI/NIF:",
    addressLabel: "Domicilio:",
    emailLabel: "Correo electrónico de contacto:",
  },
  sections: {
    terms: {
      title: "Condiciones de uso",
      paragraphs: [
        "El acceso y uso de este sitio web atribuye la condición de usuario, que acepta desde dicho acceso y/o uso las presentes condiciones de uso.",
        "El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que el titular ofrece a través de este sitio web, con carácter enunciativo pero no limitativo, a no emplearlos para actividades ilícitas o contrarias a la buena fe y al orden público.",
      ],
    },
    ip: {
      title: "Propiedad intelectual e industrial",
      paragraphs: [
        "Todos los contenidos del sitio web (textos, imágenes, vídeos, diseño gráfico, código fuente, logos, marcas, etc.) son titularidad de Daniel Acero Sagredo o dispone de los derechos de uso necesarios, quedando prohibida su reproducción, distribución o comunicación pública sin autorización expresa del titular.",
      ],
    },
    liability: {
      title: "Responsabilidad",
      paragraphs: [
        "El titular no se hace responsable de los posibles errores u omisiones en los contenidos, ni de la falta de disponibilidad del sitio web, aunque se compromete a realizar los esfuerzos necesarios para evitar este tipo de situaciones.",
      ],
    },
    law: {
      title: "Legislación aplicable y jurisdicción",
      paragraphs: [
        "La relación entre el titular del sitio web y el usuario se regirá por la normativa vigente en España. Cualquier controversia se someterá a los Juzgados y Tribunales del domicilio del titular.",
      ],
    },
  },
}

const en: typeof es = {
  metaTitle: "Legal notice",
  metaDescription: "Legal information about Daniel Acero's website.",
  notice:
    "This English version is provided for convenience only. In case of discrepancy, the Spanish version shall prevail.",
  title: "Legal notice",
  intro:
    "In compliance with the provisions of Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), users of this website are hereby informed of the following details:",
  owner: {
    holderLabel: "Website owner:",
    tradeNameLabel: "Trade name:",
    taxIdLabel: "DNI/NIF (Spanish tax ID):",
    addressLabel: "Address:",
    emailLabel: "Contact email:",
  },
  sections: {
    terms: {
      title: "Terms of use",
      paragraphs: [
        "Accessing and using this website confers the status of user, who, by such access and/or use, accepts these terms of use.",
        "The user undertakes to make appropriate use of the content and services offered by the owner through this website and, by way of example but not limitation, not to use them for unlawful activities or activities contrary to good faith and public order.",
      ],
    },
    ip: {
      title: "Intellectual and industrial property",
      paragraphs: [
        "All content on this website (texts, images, videos, graphic design, source code, logos, trademarks, etc.) is owned by Daniel Acero Sagredo or he holds the necessary rights of use. Its reproduction, distribution or public communication without the express authorization of the owner is prohibited.",
      ],
    },
    liability: {
      title: "Liability",
      paragraphs: [
        "The owner accepts no liability for any errors or omissions in the content, or for the website being unavailable, although he undertakes to make the necessary efforts to prevent such situations.",
      ],
    },
    law: {
      title: "Applicable law and jurisdiction",
      paragraphs: [
        "The relationship between the website owner and the user shall be governed by the legislation in force in Spain. Any dispute shall be submitted to the Courts and Tribunals of the owner's place of residence.",
      ],
    },
  },
}

export const content: Record<Lang, typeof es> = { es, en }

/** Datos del titular: iguales en todos los idiomas. */
export const OWNER = {
  holder: "Daniel Acero Sagredo",
  tradeName: "KLIP",
  taxId: "06590329R",
  address: "Calle de Mercedes Arteaga 24, España",
  email: "work@daniaceros.com",
} as const

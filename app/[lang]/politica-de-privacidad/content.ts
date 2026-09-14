// Textos de /politica-de-privacidad por idioma. El ES es literal del original (no cambiar).
// Datos del responsable (nombre, NIF, domicilio, emails) idénticos en ambos idiomas.
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Política de privacidad",
  metaDescription: "Política de privacidad del sitio web de Daniel Acero.",
  /** Nota de traducción de cortesía (solo EN). */
  notice: null as string | null,
  title: "Política de privacidad",
  intro:
    "En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios de este sitio web de los siguientes aspectos relacionados con el tratamiento de sus datos personales.",
  controller: {
    title: "1. Responsable del tratamiento",
    holderLabel: "Responsable:",
    tradeNameLabel: "Nombre comercial:",
    taxIdLabel: "DNI/NIF:",
    addressLabel: "Domicilio:",
    emailLabel: "Correo electrónico de contacto:",
  },
  data: {
    title: "2. Datos personales que se recogen",
    intro: "A través de este sitio web se pueden recoger los siguientes datos personales:",
    items: [
      "Nombre y apellidos",
      "Dirección de correo electrónico",
      "Información incluida en los mensajes enviados a través de formularios o WhatsApp",
    ],
  },
  purpose: {
    title: "3. Finalidad del tratamiento de los datos",
    items: [
      "Atender solicitudes de información o presupuestos.",
      "Gestionar la relación comercial o contractual.",
      "Responder consultas enviadas a través de los canales de contacto.",
    ],
  },
  legalBasis: {
    title: "4. Legitimación para el tratamiento",
    items: [
      "El consentimiento del usuario al enviar sus datos.",
      "La ejecución de un contrato o precontrato.",
    ],
  },
  retention: {
    title: "5. Conservación de los datos",
    text: "Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar posibles responsabilidades derivadas del tratamiento.",
  },
  rights: {
    title: "6. Derechos de los usuarios",
    items: [
      "Acceder a sus datos personales",
      "Solicitar la rectificación de los datos inexactos",
      "Solicitar su supresión",
      "Solicitar la limitación del tratamiento",
      "Oponerse al tratamiento",
      "Solicitar la portabilidad de los datos",
    ],
    exercise: "Para ejercer estos derechos, el usuario puede enviar una solicitud al correo",
  },
  security: {
    title: "7. Medidas de seguridad",
    text: "El responsable ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.",
  },
  changes: {
    title: "8. Cambios en la política de privacidad",
    text: "El titular se reserva el derecho a modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda al usuario revisar periódicamente esta política.",
  },
}

const en: typeof es = {
  metaTitle: "Privacy policy",
  metaDescription: "Privacy policy of Daniel Acero's website.",
  notice:
    "This English version is provided for convenience only. In case of discrepancy, the Spanish version shall prevail.",
  title: "Privacy policy",
  intro:
    "In compliance with the provisions of Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 on the Protection of Personal Data and Guarantee of Digital Rights (LOPDGDD), users of this website are hereby informed of the following matters relating to the processing of their personal data.",
  controller: {
    title: "1. Data controller",
    holderLabel: "Controller:",
    tradeNameLabel: "Trade name:",
    taxIdLabel: "DNI/NIF (Spanish tax ID):",
    addressLabel: "Address:",
    emailLabel: "Contact email:",
  },
  data: {
    title: "2. Personal data collected",
    intro: "The following personal data may be collected through this website:",
    items: [
      "First name and surname(s)",
      "Email address",
      "Information included in messages sent through forms or WhatsApp",
    ],
  },
  purpose: {
    title: "3. Purpose of data processing",
    items: [
      "Responding to requests for information or quotes.",
      "Managing the commercial or contractual relationship.",
      "Answering inquiries sent through the contact channels.",
    ],
  },
  legalBasis: {
    title: "4. Legal basis for processing",
    items: [
      "The user's consent when submitting their data.",
      "The performance of a contract or pre-contractual measures.",
    ],
  },
  retention: {
    title: "5. Data retention",
    text: "Personal data will be kept for as long as necessary to fulfill the purpose for which it was collected and to determine any liabilities that may arise from the processing.",
  },
  rights: {
    title: "6. User rights",
    items: [
      "Access their personal data",
      "Request the rectification of inaccurate data",
      "Request its erasure",
      "Request the restriction of processing",
      "Object to the processing",
      "Request data portability",
    ],
    exercise: "To exercise these rights, users may send a request to",
  },
  security: {
    title: "7. Security measures",
    text: "The controller has adopted the technical and organizational measures necessary to guarantee the security of personal data and prevent its alteration, loss, processing or unauthorized access.",
  },
  changes: {
    title: "8. Changes to the privacy policy",
    text: "The owner reserves the right to amend this privacy policy to adapt it to new legislation or case law. Users are advised to review this policy periodically.",
  },
}

export const content: Record<Lang, typeof es> = { es, en }

/** Datos del responsable: iguales en todos los idiomas. */
export const CONTROLLER = {
  holder: "Daniel Acero Sagredo",
  tradeName: "KLIP",
  taxId: "06590329R",
  address: "Calle de Mercedes Arteaga 24, España",
  contactEmail: "hello@daniaceros.com",
  rightsEmail: "work@daniaceros.com",
} as const

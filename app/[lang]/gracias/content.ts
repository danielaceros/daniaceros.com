// Textos de /gracias por idioma. El ES es literal del original (no cambiar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Gracias",
  metaDescription: "Gracias por tu solicitud. Te contactaré lo antes posible.",
  kicker: "Solicitud enviada",
  title: "Gracias",
  text: "He recibido tu mensaje correctamente. En breve te escribo por WhatsApp o email para hablar de tu proyecto y darte una propuesta.",
  backHome: "Volver al inicio",
}

const en: typeof es = {
  metaTitle: "Thank you",
  metaDescription: "Thanks for your request. I'll get back to you as soon as possible.",
  kicker: "Request sent",
  title: "Thank you",
  text: "I've received your message. I'll be in touch shortly on WhatsApp or by email to talk about your project and send you a proposal.",
  backHome: "Back to home",
}

export const content: Record<Lang, typeof es> = { es, en }

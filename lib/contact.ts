// Datos de contacto compartidos (bloque de contacto, pantalla final del VSL, /gracias).
export const CONTACT_EMAIL = "work@daniaceros.com"
export const WHATSAPP_NUMBER = "34711255496"

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

"use client"

// Único CTA de la sublanding /eventos/ifema/propuesta: abre WhatsApp con un mensaje ya escrito y personalizado
// (empresa y feria del enlace #Empresa~Feria). Todo el funnel termina aquí. El clic se mide como `lp_cta_click`
// con su posición, y ContactClickTracking lo cuenta además como `contact_click` (whatsapp) y `Contact` de Meta.
import { usePersonalization } from "@/components/landing/Personalize"
import { trackEvent } from "@/lib/analytics"
import { whatsappUrl } from "@/lib/contact"

type Props = {
  lpId: string
  position: string
  label: string
  /** "reserva": quiere el pack; "dias": más días de feria; "pagina": viene de la landing del outreach (sin precios). */
  intent?: "reserva" | "dias" | "pagina"
  className?: string
}

export default function WhatsappCta({ lpId, position, label, intent = "reserva", className = "" }: Props) {
  const { empresa, feria } = usePersonalization()
  const quien = empresa ? `soy de ${empresa} y ` : ""
  const donde = feria ? `para ${feria}` : "para mi stand en IFEMA"
  const message =
    intent === "pagina"
      ? `Hola Dani, ${quien}he visto tu página de grabación de stands en IFEMA. Me gustaría hablar de contenido ${feria ? `para ${feria}` : "para mi stand"}.`
      : intent === "dias"
      ? `Hola Dani, ${quien}he visto tu propuesta de grabación ${donde}. Me gustaría cubrir todos los días de la feria, ¿hablamos?`
      : `Hola Dani, ${quien}he visto tu propuesta de grabación ${donde}. Me gustaría reservar fecha.`

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener"
      onClick={() => trackEvent("lp_cta_click", { lp_id: lpId, position })}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2.5 text-balance rounded-2xl border border-white/25 bg-white px-8 py-3 text-center font-inter text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-black transition-transform duration-300 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[56px] sm:px-10 sm:text-[13px] ${className}`}
    >
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z" />
      </svg>
      {label}
    </a>
  )
}

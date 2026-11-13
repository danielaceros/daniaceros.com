"use client"

// Barra fija inferior solo en móvil de la sublanding /eventos/ifema/propuesta: precio + botón de reserva al alcance
// del pulgar. Aparece al salir del hero (#propuesta-hero) y se oculta cuando el formulario (#contacto) está a la vista,
// para no taparlo. Abre WhatsApp (único CTA). Mide el clic como `lp_cta_click` con position "sticky".
import { useEffect, useState } from "react"
import { usePersonalization } from "@/components/landing/Personalize"
import { trackEvent } from "@/lib/analytics"
import { whatsappUrl } from "@/lib/contact"

export default function StickyReserveBar({ lpId, price, label }: { lpId: string; price: string; label: string }) {
  const [heroVisible, setHeroVisible] = useState(true)
  const [contactVisible, setContactVisible] = useState(false)
  const { empresa, feria } = usePersonalization()

  useEffect(() => {
    const hero = document.getElementById("propuesta-hero")
    const contact = document.getElementById("contacto")
    if (!hero || !contact || typeof IntersectionObserver === "undefined") return
    const heroObs = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0 })
    const contactObs = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { threshold: 0 })
    heroObs.observe(hero)
    contactObs.observe(contact)
    return () => {
      heroObs.disconnect()
      contactObs.disconnect()
    }
  }, [])

  const show = !heroVisible && !contactVisible

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-black/92 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
        <p className="font-inter text-[14px] leading-tight text-white/85">
          <span className="block text-[12px] uppercase tracking-[0.1em] text-white/60">Desde</span>
          <span className="font-display text-[22px] font-semibold text-white">{price}</span> + IVA
        </p>
        <a
          href={whatsappUrl(`Hola Dani, ${empresa ? `soy de ${empresa} y ` : ""}he visto tu propuesta de grabación ${feria ? `para ${feria}` : "para mi stand en IFEMA"}. Me gustaría reservar fecha.`)}
          target="_blank"
          rel="noopener"
          tabIndex={show ? 0 : -1}
          onClick={() => trackEvent("lp_cta_click", { lp_id: lpId, position: "sticky" })}
          className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-6 py-2 font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {label}
        </a>
      </div>
    </div>
  )
}

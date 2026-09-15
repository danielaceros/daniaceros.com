"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { getDictionary, type Lang } from "@/lib/i18n"

// El iframe de GoHighLevel/fitnesslaunch carga internamente Cloudflare
// Turnstile (~1.9MB en 5 chunks) apenas se monta. Antes se montaba siempre
// en el load inicial de cualquier página con <ContactCTA />, compitiendo por
// ancho de banda con el LCP. Aquí solo se monta (iframe + form_embed.js)
// cuando el usuario hace scroll hasta el formulario o interactúa con el
// placeholder, usando IntersectionObserver.
type Props = {
  lang?: Lang
  /** Landings de anuncios: pasa la query de la página (UTM) al iframe de GHL para la atribución del lead. */
  forwardQueryParams?: boolean
}

const FORM_URL = "https://api.fitnesslaunch.es/widget/form/xIIdaDunDkxA4Mcwehu0"

export default function LazyContactForm({ lang = "es", forwardQueryParams = false }: Props) {
  const t = getDictionary(lang).contactForm
  const containerRef = useRef<HTMLDivElement>(null)
  // Siempre arranca en false, tanto en el servidor (donde IntersectionObserver
  // ni existe) como en el cliente, para que la hidratación coincida y el HTML
  // inicial nunca lleve el iframe/Turnstile ya montado.
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (shouldLoad) return
    const el = containerRef.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      // Navegador muy antiguo sin soporte: cargamos igualmente, pero fuera
      // del cuerpo síncrono del effect (setTimeout) para no disparar un
      // setState síncrono directo dentro del effect.
      const timer = setTimeout(() => setShouldLoad(true), 0)
      return () => clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <>
          <iframe
            // El iframe solo se monta en cliente (shouldLoad), así que window existe aquí.
            src={forwardQueryParams ? `${FORM_URL}${window.location.search}` : FORM_URL}
            // Altura inicial ≈ la que acaba fijando form_embed.js (móvil ~785px, desktop ~750px): sin ella,
            // en desktop quedaba scroll interno y ENVIAR recortado hasta que el script reajustaba.
            className="block h-[790px] w-[calc(100%+24px)] -ml-3 md:h-[760px] md:w-[calc(100%+32px)] md:-ml-4"
            style={{ border: "none", borderRadius: "0px" }}
            id="inline-xIIdaDunDkxA4Mcwehu0"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form - Dani Acero"
            data-height="undefined"
            data-layout-iframe-id="inline-xIIdaDunDkxA4Mcwehu0"
            data-form-id="xIIdaDunDkxA4Mcwehu0"
            title="Form - Dani Acero"
          />
          <Script src="https://api.fitnesslaunch.es/js/form_embed.js" strategy="afterInteractive" />
        </>
      ) : (
        <button
          type="button"
          onClick={() => setShouldLoad(true)}
          className="flex h-[790px] w-full flex-col items-center justify-center gap-3 text-white/50 transition-colors duration-300 hover:text-white/70 md:h-[760px]"
          aria-label={t.loadAria}
        >
          <span className="h-6 w-6 animate-pulse rounded-full border border-white/20" aria-hidden="true" />
          <span className="font-inter text-[12px] uppercase tracking-[0.14em]">{t.loading}</span>
        </button>
      )}
    </div>
  )
}

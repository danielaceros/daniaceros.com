"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { getDictionary, type Lang } from "@/lib/i18n"
import { FORM_ORIGIN_KEY, FORM_SUBMIT_KEY, GHL_FORM_ORIGIN, currentFormOrigin } from "@/lib/analytics"

// El iframe de GoHighLevel carga internamente Cloudflare
// Turnstile (~1.9MB en 5 chunks) apenas se monta. Antes se montaba siempre
// en el load inicial de cualquier página con <ContactCTA />, compitiendo por
// ancho de banda con el LCP. Aquí solo se monta (iframe + form_embed.js)
// cuando el usuario hace scroll hasta el formulario o interactúa con el
// placeholder, usando IntersectionObserver.
type Props = {
  lang?: Lang
  /** Cuánto antes de llegar al formulario empieza a cargarse (rootMargin del IntersectionObserver). */
  preloadMargin?: string
}

const FORM_URL = "https://api.fitnesslaunch.es/widget/form/xIIdaDunDkxA4Mcwehu0"

/**
 * URL del iframe con el origen del lead: la query de la página (UTM) + `origen` (lp_id de la landing o "web") y
 * `pagina` (ruta), para poder guardarlos en campos ocultos de GHL. Además deja el origen en sessionStorage para
 * que /gracias atribuya el lead (LeadAttribution). Solo en cliente: se llama al empezar a cargar el formulario.
 */
function prepareFormSrc(): string {
  const origin = currentFormOrigin()
  try {
    sessionStorage.setItem(FORM_ORIGIN_KEY, JSON.stringify(origin))
  } catch {
    // Sin sessionStorage: el formulario funciona igual, solo se pierde la atribución en /gracias.
  }
  const params = new URLSearchParams(window.location.search)
  params.set("origen", origin.origin === "landing" ? (origin.lp_id ?? "landing") : "web")
  params.set("pagina", origin.form_page)
  return `${FORM_URL}?${params}`
}

/**
 * Marca un ENVÍO real del formulario. El iframe de GHL, tras crear el contacto, avisa al padre con
 * `set-sticky-contacts` (lleva ya el contacto y su fingerprint, o sea que solo sale de un envío correcto).
 * Sin esta marca, /gracias tomaba por lead el simple hecho de haber montado el formulario.
 */
function useFormSubmitBeacon() {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== GHL_FORM_ORIGIN) return
      if (!Array.isArray(event.data) || event.data[0] !== "set-sticky-contacts") return
      try {
        sessionStorage.setItem(FORM_SUBMIT_KEY, String(Date.now()))
      } catch {
        // Sin sessionStorage: /gracias todavía puede reconocer el envío por los params de la redirección.
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])
}

export default function LazyContactForm({ lang = "es", preloadMargin = "200px" }: Props) {
  useFormSubmitBeacon()
  const t = getDictionary(lang).contactForm
  const containerRef = useRef<HTMLDivElement>(null)
  // Siempre arranca en null, tanto en el servidor (donde IntersectionObserver
  // ni existe) como en el cliente, para que la hidratación coincida y el HTML
  // inicial nunca lleve el iframe/Turnstile ya montado.
  const [formSrc, setFormSrc] = useState<string | null>(null)
  const shouldLoad = formSrc !== null
  // El iframe tarda en pintar (Turnstile ~1.9MB): hasta su onLoad se mantiene el indicador de carga
  // detrás, en vez de un hueco negro de 790px (se nota sobre todo con la red lenta de la app de Instagram).
  const [frameLoaded, setFrameLoaded] = useState(false)

  useEffect(() => {
    if (shouldLoad) return
    const el = containerRef.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      // Navegador muy antiguo sin soporte: cargamos igualmente, pero fuera
      // del cuerpo síncrono del effect (setTimeout) para no disparar un
      // setState síncrono directo dentro del effect.
      const timer = setTimeout(() => setFormSrc(prepareFormSrc()), 0)
      return () => clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setFormSrc(prepareFormSrc())
          observer.disconnect()
        }
      },
      { rootMargin: preloadMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldLoad, preloadMargin])

  const loadingIndicator = (
    <>
      <span className="h-6 w-6 animate-pulse rounded-full border border-white/20" aria-hidden="true" />
      <span className="font-inter text-[12px] uppercase tracking-[0.14em]">{t.loading}</span>
    </>
  )

  return (
    <div ref={containerRef} className="relative">
      {formSrc ? (
        <>
          {frameLoaded ? null : (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/50"
            >
              {loadingIndicator}
            </div>
          )}
          <iframe
            src={formSrc}
            // Altura inicial ≈ la que acaba fijando form_embed.js (móvil ~785px, desktop ~750px): sin ella,
            // en desktop quedaba scroll interno y ENVIAR recortado hasta que el script reajustaba.
            onLoad={() => setFrameLoaded(true)}
            className="relative block h-[790px] w-[calc(100%+24px)] -ml-3 md:h-[760px] md:w-[calc(100%+32px)] md:-ml-4"
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
          onClick={() => setFormSrc(prepareFormSrc())}
          // Sin aria-label: el nombre accesible es el texto visible (Lighthouse: label-content-name-mismatch).
          className="flex h-[790px] w-full flex-col items-center justify-center gap-3 text-white/50 transition-colors duration-300 hover:text-white/70 md:h-[760px]"
        >
          {loadingIndicator}
        </button>
      )}
    </div>
  )
}

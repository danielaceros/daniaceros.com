"use client"

import { useCallback, useEffect, useRef, useState } from "react"
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
  /** Solo landings de anuncios: monta el iframe en cuanto ha pintado la primera pantalla, sin esperar al scroll. */
  mountAfterPaint?: boolean
}

const FORM_URL = "https://api.daniaceros.com/widget/form/xIIdaDunDkxA4Mcwehu0"

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
function useGhlMessages(onFormSized: () => void) {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== GHL_FORM_ORIGIN || !Array.isArray(event.data)) return

      // El formulario ya sabe lo que mide: a partir de aquí se puede enseñar sin que se vea a medio montar.
      if (event.data[0] === "highlevel.setHeight") {
        onFormSized()
        return
      }

      if (event.data[0] !== "set-sticky-contacts") return
      try {
        sessionStorage.setItem(FORM_SUBMIT_KEY, String(Date.now()))
      } catch {
        // Sin sessionStorage: /gracias todavía puede reconocer el envío por los params de la redirección.
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [onFormSized])
}

export default function LazyContactForm({ lang = "es", preloadMargin = "200px", mountAfterPaint = false }: Props) {
  const t = getDictionary(lang).contactForm
  const containerRef = useRef<HTMLDivElement>(null)
  // Siempre arranca en null, tanto en el servidor (donde IntersectionObserver
  // ni existe) como en el cliente, para que la hidratación coincida y el HTML
  // inicial nunca lleve el iframe/Turnstile ya montado.
  const [formSrc, setFormSrc] = useState<string | null>(null)
  const shouldLoad = formSrc !== null
  // El aviso `highlevel.setHeight` ya no controla cuándo se enseña el formulario (ver el esqueleto de abajo):
  // solo se escucha por la marca de envío real (`set-sticky-contacts`) que usa /gracias.
  const noop = useCallback(() => {}, [])
  useGhlMessages(noop)

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

  // Landings de anuncios: el formulario se monta en cuanto ha pintado la primera pantalla, sin esperar a que
  // el usuario baje. El razonamiento es de negocio, no de rendimiento: si alguien llega al formulario y no lo
  // ve, es un lead perdido; unas décimas en la primera pantalla no lo son. Medido en producción, el iframe
  // tardaba ~1,4 s en mostrar campos con red normal y ~3 s con red lenta, y ese reloj no empezaba hasta que el
  // usuario bajaba 2.400 px.
  //
  // Se espera al pintado a propósito, en vez de montarlo junto al hero: Turnstile se trae ~1,9 MB y competiría
  // por ancho de banda con el vídeo del VSL, que es el LCP y lo que retiene al visitante.
  // El IntersectionObserver de arriba se queda como red de seguridad por si el idle no llegara nunca.
  useEffect(() => {
    if (!mountAfterPaint || shouldLoad) return
    let done = false
    const mount = () => {
      if (done) return
      done = true
      setFormSrc(prepareFormSrc())
    }

    // 400 ms y no 1 s: el objetivo es que el formulario esté listo cuanto antes. Sigue siendo DESPUÉS del
    // primer pintado, que es lo que protege al vídeo del VSL de competir por ancho de banda con Turnstile.
    const idle = typeof window.requestIdleCallback === "function"
      ? window.requestIdleCallback(mount, { timeout: 400 })
      : window.setTimeout(mount, 400)

    if (document.readyState === "complete") {
      mount()
    } else {
      window.addEventListener("load", mount, { once: true })
    }

    return () => {
      done = true
      window.removeEventListener("load", mount)
      if (typeof window.cancelIdleCallback === "function" && typeof idle === "number") {
        window.cancelIdleCallback(idle)
      } else {
        window.clearTimeout(idle as number)
      }
    }
  }, [mountAfterPaint, shouldLoad])

  // Esqueleto con la forma real del formulario (cuatro campos y un botón). El iframe tarda ~1,4 s en móvil con
  // red normal y ~3 s con red lenta: un círculo latiendo en ese hueco parece un error, y una silueta reconocible
  // dice "aquí va un formulario, espera". Va dentro del mismo alto de siempre, así que no reintroduce CLS.
  const loadingIndicator = (
    <div className="flex w-full max-w-[420px] flex-col gap-6 px-6" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex flex-col gap-2">
          <span className="h-[10px] w-24 animate-pulse rounded-sm bg-white/12" />
          <span className="h-[38px] w-full rounded-sm border-b border-white/12 bg-white/[0.04]" />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <span className="h-[10px] w-40 animate-pulse rounded-sm bg-white/12" />
        <span className="h-[96px] w-full rounded-sm border-b border-white/12 bg-white/[0.04]" />
      </div>
      <span className="mt-2 h-[52px] w-full animate-pulse rounded-full bg-white/10" />
      <span className="sr-only">{t.loading}</span>
    </div>
  )

  return (
    <div ref={containerRef} className="relative">
      {formSrc ? (
        <>
          {/* El esqueleto va DETRÁS del iframe, no delante. form_embed.js de GHL esconde el iframe (opacity 0,
              visibility hidden, left -9999px) hasta recibir su señal de "listo", que incluye Turnstile: medido en
              móvil con red lenta, los campos ya estaban pintados a los ~2,5 s y GHL no los enseñaba hasta pasados
              los 12 s. Mientras, el iframe se salía del flujo, el hueco colapsaba y solo se veía negro.
              globals.css fuerza el iframe visible y en su sitio (ver .ghl-form-iframe), así que ahora: hasta que el
              formulario pinta, se ve esta silueta a través del iframe transparente; en cuanto pinta, la tapa. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-start pt-10 text-white/50"
          >
            {loadingIndicator}
          </div>
          <iframe
            src={formSrc}
            // Altura inicial ≈ la que acaba fijando form_embed.js (móvil ~785px, desktop ~750px).
            className="ghl-form-iframe relative z-10 block h-[790px] w-[calc(100%+24px)] -ml-3 md:h-[760px] md:w-[calc(100%+32px)] md:-ml-4"
            style={{ border: "none", borderRadius: "0px", background: "transparent" }}
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
            // Sin barra de scroll interna: mientras GHL no ha fijado la altura, el iframe desborda y su barra
            // asomaba por el borde del panel como una raya blanca vertical. form_embed.js ajusta la altura igual.
            scrolling="no"
          />
          <Script src="https://api.daniaceros.com/js/form_embed.js" strategy="afterInteractive" />
        </>
      ) : (
        <button
          type="button"
          onClick={() => setFormSrc(prepareFormSrc())}
          // Sin aria-label: el nombre accesible es el texto visible (Lighthouse: label-content-name-mismatch).
          className="flex h-[790px] w-full flex-col items-center justify-center text-white/50 transition-colors duration-300 hover:text-white/70 md:h-[760px]"
        >
          {loadingIndicator}
        </button>
      )}
    </div>
  )
}

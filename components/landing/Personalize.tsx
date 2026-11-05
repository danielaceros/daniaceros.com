"use client"

// Personalización de la landing de expositores (/eventos/ifema) en TODA la página.
// El email de outreach enlaza con un fragmento tras la almohadilla: /eventos/ifema#Abanico-Express~Promogift
// (empresa~feria, con "-" por los espacios). El fragmento no viaja al servidor ni toca la caché del CDN: el HTML
// estático sale siempre en versión genérica y la personalización se aplica en el navegador al montar.
//
// Los textos de lib/landings.ts llevan marcadores "{empresa|tu empresa}" y "{feria|la feria}": antes de la barra,
// el dato; después, el texto de escape que se usa si falta el dato o no pasa la validación. La página nunca se
// queda con un hueco ni con un texto raro. También acepta ?empresa=&feria= por compatibilidad.
//
// Los valores se pintan como texto (React los escapa) y solo se aceptan letras, números, espacios y puntuación
// corriente, de 2 a 60 caracteres.
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Personalization = { empresa: string | null; feria: string | null }

const SAFE = /^[\p{L}\p{N} .,&'’\-+/()·]{2,60}$/u
// Anclas internas de la página: no son datos de personalización.
const ANCHORS = new Set(["contacto"])
const TOKEN = /\{(empresa|feria)\|([^}]*)\}/g

const Ctx = createContext<Personalization>({ empresa: null, feria: null })

export function usePersonalization(): Personalization {
  return useContext(Ctx)
}

function clean(value: string | null | undefined): string | null {
  const text = (value ?? "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim()
  return SAFE.test(text) ? text : null
}

function read(): Personalization {
  let empresa: string | null = null
  let feria: string | null = null
  try {
    const raw = decodeURIComponent(window.location.hash.replace(/^#/, ""))
    if (raw && !ANCHORS.has(raw)) {
      const [e, f] = raw.split("~")
      empresa = clean(e)
      feria = clean(f)
    }
    if (!empresa && !feria) {
      const params = new URLSearchParams(window.location.search)
      empresa = clean(params.get("empresa"))
      feria = clean(params.get("feria"))
    }
  } catch {
    // fragmento mal codificado: se queda la versión genérica
  }
  return { empresa, feria }
}

export function PersonalizeProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<Personalization>({ empresa: null, feria: null })

  useEffect(() => {
    const next = read()
    setValue(next)
    // Pestaña del navegador personalizada solo si tenemos los dos datos.
    if (next.empresa && next.feria) document.title = `Vídeo para ${next.empresa} en ${next.feria} | Dani Acero`
  }, [])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

/** Resaltado de lo personalizado: negrita y subrayado. */
export function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-bold underline decoration-white/60 decoration-2 underline-offset-[0.22em]">{children}</strong>
}

/** Pinta un texto con marcadores {empresa|escape} / {feria|escape}; resalta solo los datos reales. */
export function Rich({ text }: { text: string }) {
  const data = usePersonalization()
  const parts: ReactNode[] = []
  let last = 0
  let i = 0
  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0
    if (index > last) parts.push(text.slice(last, index))
    const value = data[match[1] as keyof Personalization]
    parts.push(value ? <Highlight key={i++}>{value}</Highlight> : match[2])
    last = index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

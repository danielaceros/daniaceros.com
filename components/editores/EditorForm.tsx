"use client"
// Formulario de postulación de editores (LATAM), estilo Typeform: una pregunta por pantalla, sin scroll.
// Envía a /api/editores. Mide con CompleteRegistration (NO Lead: Lead mide a los clientes de Dani).
// Se renderiza en el servidor (primer pintado sin esperar a la hidratación); el vídeo de fondo se carga después y
// solo con buena conexión.
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { trackEvent, whenPixelReady } from "@/lib/analytics"
import {
  DISPONIBILIDAD as DISP, EXPERIENCIA as EXP, MAX_H, MAX_V, PAISES, PLAZO as PLZ, SOFTWARE,
  cleanText, formatPhone, normalizeFullPhone, normalizeHandle, normalizeUrl, parsePrice, validName,
} from "@/lib/editores/shared"

const BLOB = "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/editores/ref"
const GOLD = "#d4a544"
const L = (a: string[]) => a.map((x, i) => [x, ["Menos de 1 año", "1 a 3 años", "3 a 5 años", "Más de 5 años"][i]])
const EXPERIENCIA = L(EXP)
const PLAZO = PLZ.map((v, i) => [v, ["En 24 horas", "En 48 horas", "3 a 4 días", "Una semana"][i]])
const DISPONIBILIDAD = DISP.map((v, i) => [v, ["Tiempo completo", "Parcial", "Proyectos puntuales"][i]])

type Data = {
  nombre: string; pais: string; dial: string; tel: string; instagram: string
  portfolio: string[]; software: string[]; experiencia: string; disponibilidad: string; plazo: string
  pv: string; ph: string
}
const EMPTY: Data = {
  nombre: "", pais: "", dial: "+", tel: "", instagram: "", portfolio: ["", "", ""],
  software: [], experiencia: "", disponibilidad: "", plazo: "", pv: "", ph: "",
}

const STEPS = ["intro", "oferta", "proceso", "nombre", "pais", "whatsapp", "instagram", "portfolio", "software", "experiencia", "disponibilidad", "plazo", "vertical", "horizontal", "enviar", "fin"] as const
type Step = (typeof STEPS)[number]
const PRE = 3 // pantallas de presentación (intro, oferta, proceso)
const QUESTION_COUNT = STEPS.length - PRE - 1 // sin presentación ni fin
const FIN = STEPS.length - 1

const newSid = () => {
  try { if (crypto.randomUUID) return crypto.randomUUID().replace(/-/g, "") } catch { /* contexto no seguro */ }
  return Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
}
const cookie = (k: string) => document.cookie.split("; ").find((c) => c.startsWith(k + "="))?.slice(k.length + 1) ?? ""

/** Conexión lenta, ahorro de datos o poco movimiento: sin vídeo de fondo (queda la imagen fija). */
function useBackgroundVideo() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const c = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string; downlink?: number } }).connection
    const slow = !!c && (c.saveData || ["slow-2g", "2g", "3g"].includes(c.effectiveType ?? "") || (typeof c.downlink === "number" && c.downlink > 0 && c.downlink < 1.5))
    if (slow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let t = 0
    const start = () => { t = window.setTimeout(() => setOk(true), 600) }
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    return () => { window.clearTimeout(t); window.removeEventListener("load", start) }
  }, [])
  return ok
}

/** Con el teclado abierto (móvil) el visual viewport encoge: la pantalla se ajusta para que el botón siga a la vista. */
function useKeyboardBox() {
  const [box, setBox] = useState<{ h: number; top: number } | null>(null)
  useEffect(() => {
    const vv = window.visualViewport
    if (!vv) return
    let raf = 0
    const upd = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const open = vv.scale <= 1.02 && window.innerHeight - vv.height > 120
        setBox(open ? { h: Math.round(vv.height), top: Math.round(vv.offsetTop) } : null)
      })
    }
    vv.addEventListener("resize", upd); vv.addEventListener("scroll", upd); upd()
    return () => { cancelAnimationFrame(raf); vv.removeEventListener("resize", upd); vv.removeEventListener("scroll", upd) }
  }, [])
  return box
}

function RefVideo({ vertical }: { vertical: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const name = vertical ? "vertical" : "horizontal"
  return (
    <div className={`relative shrink-0 overflow-hidden rounded-xl bg-black ring-1 ring-white/15 ${vertical ? "aspect-[9/16] h-[var(--vh-v)] sm:h-[52dvh]" : "aspect-video w-full max-h-[var(--vh-h)] sm:w-[58%] sm:max-h-[50dvh]"}`}>
      {/* preload="none": no baja nada hasta que se pulsa play (el póster ya basta) — cuenta en datos móviles. */}
      <video ref={ref} key={String(failed)} src={`${BLOB}/ref-${name}-lite.mp4`} poster={`${BLOB}/ref-${name}.jpg`} controls playsInline preload="none"
        controlsList="nodownload" aria-label={vertical ? "Aftermovie vertical de referencia" : "Aftermovie horizontal de referencia"}
        onError={() => setFailed(true)} className="h-full w-full object-contain" />
      {failed && (
        <button type="button" onClick={() => { setFailed(false); window.setTimeout(() => ref.current?.load(), 0) }}
          className="absolute inset-0 flex items-center justify-center bg-black/80 p-3 text-center text-[13px] font-semibold text-white">
          No se pudo cargar el video. Toca para reintentar
        </button>
      )}
    </div>
  )
}

export default function EditorForm() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState<1 | -1>(1)
  const [d, setD] = useState<Data>(EMPTY)
  const [err, setErr] = useState("")
  const [sending, setSending] = useState(false)
  const [hp, setHp] = useState("")
  const [otro, setOtro] = useState(false)
  const startedAt = useRef(0)
  const sid = useRef("")
  const sendingRef = useRef(false)
  const firedRef = useRef(false)
  const autoTimer = useRef(0)
  const iRef = useRef(0)
  const utmRef = useRef<Record<string, string>>({})
  const inputRef = useRef<HTMLInputElement>(null)
  const headRef = useRef<HTMLHeadingElement>(null)
  const step: Step = STEPS[i]
  const bgOk = useBackgroundVideo()
  const kb = useKeyboardBox()
  const bgRef = useRef<HTMLVideoElement>(null)
  const [bgReady, setBgReady] = useState(false)

  useEffect(() => { iRef.current = i }, [i])
  const set = <K extends keyof Data>(k: K, v: Data[K]) => { setD((p) => ({ ...p, [k]: v })); setErr("") }

  // UTM y clic de Meta: se leen al entrar (por si la URL cambia luego) y se envían con el registro.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    utmRef.current = {
      source: q.get("utm_source") ?? "", medium: q.get("utm_medium") ?? "", campaign: q.get("utm_campaign") ?? "",
      content: q.get("utm_content") ?? "", term: q.get("utm_term") ?? "", fbclid: q.get("fbclid") ?? "",
    }
  }, [])

  const phone = useMemo(() => normalizeFullPhone(d.tel, d.pais), [d.tel, d.pais])
  const prices = useMemo(() => ({ v: parsePrice(d.pv), h: parsePrice(d.ph) }), [d.pv, d.ph])
  const paisInfo = PAISES.find((p) => p.n === d.pais)

  const check = useCallback((): string => {
    switch (step) {
      case "nombre": return validName(cleanText(d.nombre, 80)) ? "" : "Escribe tu nombre"
      case "pais": return cleanText(d.pais, 60) && d.pais !== "Otro" ? "" : "Elige tu país"
      case "whatsapp": return phone.ok ? "" : phone.error
      case "instagram": return normalizeHandle(d.instagram) === null ? "Escribe solo tu usuario, por ejemplo @tuusuario" : ""
      case "portfolio": {
        const filled = d.portfolio.map((s) => s.trim()).filter(Boolean)
        if (!filled.length) return "Agrega al menos un enlace"
        const bad = filled.find((s) => !normalizeUrl(s))
        return bad ? `Este enlace no parece válido: ${bad.slice(0, 40)}` : ""
      }
      case "software": return d.software.length ? "" : "Elige al menos uno"
      case "experiencia": return d.experiencia ? "" : "Elige una opción"
      case "disponibilidad": return d.disponibilidad ? "" : "Elige una opción"
      case "plazo": return d.plazo ? "" : "Elige una opción"
      case "vertical": return prices.v && prices.v <= MAX_V ? "" : `Escribe un precio en USD entre 1 y ${MAX_V}`
      case "horizontal": return prices.h && prices.h <= MAX_H ? "" : `Escribe un precio en USD entre 1 y ${MAX_H}`
      default: return ""
    }
  }, [step, d, phone, prices])

  // Historial: el botón atrás del móvil (o del navegador) retrocede una pregunta en vez de sacar de la página.
  const go = useCallback((delta: 1 | -1, fromPop = false) => {
    window.clearTimeout(autoTimer.current)
    const n = Math.min(FIN, Math.max(0, iRef.current + delta))
    setDir(delta); setErr(""); setI(n); iRef.current = n
    if (!fromPop && delta === 1) { try { window.history.pushState({ ed: n }, "") } catch { /* sin historial */ } }
  }, [])
  const back = useCallback(() => { if (iRef.current > 0) { try { window.history.back() } catch { go(-1) } } }, [go])
  useEffect(() => {
    try { window.history.replaceState({ ed: 0 }, "") } catch { /* nada */ }
    const onPop = (e: PopStateEvent) => {
      const n = typeof e.state?.ed === "number" ? e.state.ed : null
      if (n === null || n >= FIN) return
      window.clearTimeout(autoTimer.current)
      setDir(n < iRef.current ? -1 : 1); setErr(""); setI(n); iRef.current = n
    }
    window.addEventListener("popstate", onPop)
    return () => { window.removeEventListener("popstate", onPop); window.clearTimeout(autoTimer.current) }
  }, [])

  /** Avanza solo tras elegir una opción, si el usuario sigue en esa pantalla (evita saltarse pasos con doble toque). */
  const pick = useCallback((from: number) => {
    window.clearTimeout(autoTimer.current)
    autoTimer.current = window.setTimeout(() => { if (iRef.current === from) go(1) }, 200)
  }, [go])

  const submit = useCallback(async () => {
    if (sendingRef.current) return
    sendingRef.current = true
    setSending(true); setErr("")
    if (!sid.current) sid.current = newSid()
    const u = utmRef.current
    const fbc = cookie("_fbc") || (u.fbclid ? `fb.1.${Date.now()}.${u.fbclid}` : "")
    try {
      if (typeof navigator !== "undefined" && navigator.onLine === false) throw new Error("offline")
      const ctl = new AbortController()
      const to = window.setTimeout(() => ctl.abort(), 25000)
      let r: Response
      try {
        r = await fetch("/api/editores", {
          method: "POST", signal: ctl.signal, headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sid: sid.current,
            nombre: cleanText(d.nombre, 80), pais: d.pais, whatsapp: phone.ok ? phone.e164 : "",
            instagram: normalizeHandle(d.instagram) ?? "",
            portfolio: d.portfolio.map((s) => s.trim()).filter(Boolean).map((s) => normalizeUrl(s) ?? s),
            software: d.software, experiencia: d.experiencia, disponibilidad: d.disponibilidad, plazo: d.plazo,
            precioVerticalUsd: prices.v, precioHorizontalUsd: prices.h,
            utm: { source: u.source, medium: u.medium, campaign: u.campaign, content: u.content, term: u.term },
            fbclid: u.fbclid, fbp: cookie("_fbp"), fbc,
            hp, elapsedMs: Date.now() - startedAt.current,
          }),
        })
      } finally { window.clearTimeout(to) }
      const j = await r.json().catch(() => ({}))
      if (r.status === 429) { setErr("Hay demasiados envíos desde tu conexión. Espera unos minutos y vuelve a intentarlo: tus datos siguen aquí."); return }
      if (r.status === 422) { setErr("Hay un dato que el servidor no acepta. Vuelve atrás y revisa tus respuestas."); return }
      if (!r.ok || !j.ok) throw new Error("server")
      if (!firedRef.current) {
        firedRef.current = true
        trackEvent("editor_submit", { pais: d.pais })
        const id = sid.current
        whenPixelReady(() => window.fbq?.("track", "CompleteRegistration", { content_name: "editor_latam", status: true }, { eventID: id }))
      }
      go(1)
    } catch {
      setErr(typeof navigator !== "undefined" && navigator.onLine === false
        ? "Sin conexión. Cuando vuelvas a tener internet, pulsa Reintentar: tus datos siguen aquí."
        : "No se ha podido enviar. Revisa tu conexión y pulsa Reintentar: tus datos siguen aquí.")
    } finally { sendingRef.current = false; setSending(false) }
  }, [d, hp, go, phone, prices])

  const next = useCallback(() => {
    if (step === "intro") { startedAt.current = Date.now(); sid.current = newSid(); trackEvent("editor_start"); go(1); return }
    if (step === "oferta" || step === "proceso") { go(1); return }
    const e = check()
    if (e) { setErr(e); return }
    if (step === "enviar") { void submit(); return }
    go(1)
  }, [step, check, go, submit])

  // Enter avanza desde los campos de texto; en botones hace su clic normal.
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key !== "Enter" || ev.shiftKey || ev.isComposing || ev.repeat || step === "fin") return
      if (ev.target instanceof HTMLElement && (ev.target.tagName === "BUTTON" || ev.target.tagName === "A")) return
      ev.preventDefault(); next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, step])

  // Foco: campo de texto si lo hay; si no, el título (lectores de pantalla anuncian la pregunta).
  useEffect(() => {
    trackEvent("editor_step", { step })
    if (step === "intro") return
    const t = window.setTimeout(() => {
      if (inputRef.current) inputRef.current.focus({ preventScroll: true })
      else headRef.current?.focus({ preventScroll: true })
    }, 350)
    return () => window.clearTimeout(t)
  }, [step, otro])

  // El vídeo de fondo solo suena a imagen en las pantallas de presentación y en la final; durante las preguntas se pausa.
  const showBg = i < PRE || step === "fin"
  useEffect(() => {
    const v = bgRef.current
    if (!v) return
    if (showBg) void v.play().catch(() => {})
    else v.pause()
  }, [showBg, bgOk])

  const chip = (active: boolean) =>
    `min-h-11 rounded-xl border px-3 py-2.5 text-left text-[15px] font-semibold leading-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4a544] active:scale-[.98] ${active ? "border-[#d4a544] bg-[#d4a544]/15 text-white" : "border-white/20 bg-white/[.04] text-white/85 hover:border-white/40"}`
  const field = "w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-2.5 text-2xl font-semibold text-white !outline-none !shadow-none focus:!outline-none focus-visible:!outline-none placeholder:text-white/45 focus:border-[#d4a544] sm:py-3 sm:text-3xl"
  const aria = (sub?: boolean) => ({ "aria-labelledby": "ed-q", "aria-describedby": [sub ? "ed-sub" : "", err ? "ed-err" : ""].filter(Boolean).join(" ") || undefined, "aria-invalid": err ? true : undefined })

  const n = i - PRE + 1
  const q = (t: string, sub?: string) => (
    <div className="mb-[clamp(.6rem,2.4dvh,1.75rem)]">
      <p className="mb-1.5 text-sm font-bold" style={{ color: GOLD }}>{n} <span className="text-white/60">/ {QUESTION_COUNT}</span></p>
      <h1 id="ed-q" ref={headRef} tabIndex={-1} className="text-[clamp(1.3rem,4.4dvh,1.75rem)] font-extrabold leading-tight text-white !outline-none focus:!outline-none focus-visible:!outline-none sm:text-4xl">{t}</h1>
      {sub && <p id="ed-sub" className="mt-1.5 text-[clamp(.8rem,2.2dvh,.95rem)] leading-snug text-white/70 sm:text-base">{sub}</p>}
    </div>
  )
  const first = d.nombre.trim().split(/\s+/)[0] ?? ""

  const question = (() => {
    switch (step) {
      case "nombre":
        return <>{q("¿Cómo te llamas?")}<input ref={inputRef} {...aria()} className={field} value={d.nombre} onChange={(e) => set("nombre", e.target.value)} placeholder="Nombre y apellido" autoComplete="name" enterKeyHint="next" maxLength={80} /></>
      case "pais":
        return <>{q("¿Desde qué país trabajas?")}
          {otro ? (
            <div>
              <input ref={inputRef} {...aria()} className={field} value={d.pais === "Otro" ? "" : d.pais} onChange={(e) => set("pais", e.target.value.slice(0, 60) || "Otro")} placeholder="Escribe tu país" autoComplete="country-name" enterKeyHint="next" />
              <button type="button" className="mt-3 min-h-11 text-sm font-semibold text-white/70 underline underline-offset-4" onClick={() => { setOtro(false); setD((s) => ({ ...s, pais: "" })) }}>Elegir de la lista</button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2" role="group" aria-labelledby="ed-q">
              {PAISES.map((p) => (
                <button key={p.n} type="button" aria-pressed={d.pais === p.n} className={`${chip(d.pais === p.n)} !px-2 text-center !text-[14px] sm:!text-[15px]`}
                  onClick={() => {
                    if (p.n === "Otro") { setOtro(true); setD((s) => ({ ...s, pais: "Otro", dial: "+", tel: "+" })); return }
                    setD((s) => ({ ...s, pais: p.n, dial: p.d, tel: s.dial === p.d && s.tel.trim().length > p.d.length ? s.tel : p.d + " " })); setErr(""); pick(iRef.current)
                  }}>{p.n}</button>
              ))}
            </div>
          )}</>
      case "whatsapp":
        return <>{q("¿Cuál es tu WhatsApp?", "Es por donde te escribiré si quedas seleccionado. Comprueba que el número tiene WhatsApp.")}
          <input ref={inputRef} {...aria(true)} className={field} value={d.tel} placeholder={`${d.dial === "+" ? "+" : d.dial} ${paisInfo?.ph ?? "número"}`} inputMode="tel" autoComplete="tel" enterKeyHint="next"
            onChange={(e) => { let v = e.target.value.replace(/[^\d\s+()-]/g, "").slice(0, 24); if (v && !v.startsWith("+")) v = `${d.dial === "+" ? "+" : d.dial + " "}${v}`; set("tel", v) }} /></>
      case "instagram":
        return <>{q("¿Tienes Instagram profesional?", "Opcional, pero ayuda a ver tu trabajo.")}<input ref={inputRef} {...aria(true)} className={field} value={d.instagram} onChange={(e) => set("instagram", e.target.value.slice(0, 100))} placeholder="@tuusuario" autoCapitalize="none" autoCorrect="off" spellCheck={false} autoComplete="off" enterKeyHint="next" /></>
      case "portfolio":
        return <>{q("Muéstrame tu mejor trabajo", "Enlaces a YouTube, Vimeo, Drive o Instagram. Si puedes, uno vertical y uno horizontal. Si usas Drive, ponlo en «Cualquier persona con el enlace»: si no puedo abrirlo, no puedo verlo.")}
          <div>
            {d.portfolio.map((v, k) => (
              <input key={k} ref={k === 0 ? inputRef : undefined} {...aria(true)} aria-label={`Enlace ${k + 1}${k ? " (opcional)" : ""}`} aria-labelledby={undefined} className={`${field} !py-2 !text-lg sm:!text-xl`} value={v} placeholder={k === 0 ? "https://…" : "Otro enlace (opcional)"} inputMode="url" autoCapitalize="none" autoCorrect="off" spellCheck={false} autoComplete="off" enterKeyHint={k === d.portfolio.length - 1 ? "next" : "next"}
                onChange={(e) => set("portfolio", d.portfolio.map((x, j) => (j === k ? e.target.value.slice(0, 500) : x)))} />
            ))}
          </div></>
      case "software":
        return <>{q("¿Con qué editas?", "Elige todo lo que uses.")}
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2" role="group" aria-labelledby="ed-q">
            {SOFTWARE.map((s) => <button key={s} type="button" aria-pressed={d.software.includes(s)} className={chip(d.software.includes(s))} onClick={() => set("software", d.software.includes(s) ? d.software.filter((x) => x !== s) : [...d.software, s])}>{s}</button>)}
          </div></>
      case "experiencia":
      case "disponibilidad":
      case "plazo": {
        const opts = step === "experiencia" ? EXPERIENCIA : step === "disponibilidad" ? DISPONIBILIDAD : PLAZO
        const val = d[step]
        return <>{step === "experiencia" ? q("¿Cuánta experiencia tienes editando?") : step === "disponibilidad" ? q("¿Qué disponibilidad tienes?") : q("¿En cuánto tiempo entregas un aftermovie?", "Desde que recibes el material, con una primera versión lista para revisar.")}
          <div className="grid gap-1.5 sm:gap-2" role="group" aria-labelledby="ed-q">{opts.map(([v, l]) => <button key={v} type="button" aria-pressed={val === v} className={chip(val === v)} onClick={() => { set(step, v); pick(iRef.current) }}>{l}</button>)}</div></>
      }
      case "vertical":
      case "horizontal": {
        const v = step === "vertical"
        return (
          <div className={`flex gap-4 ${v ? "flex-row items-start" : "flex-col"} sm:flex-row sm:items-center sm:gap-8`}>
            <RefVideo key={step} vertical={v} />
            <div className="min-w-0 flex-1">
              {q(v ? "¿Cuánto cobrarías por un aftermovie vertical como este?" : "¿Y por el aftermovie horizontal (video resumen)?",
                v ? "Aftermovie vertical de ~30 s de los CEO Awards: selección de planos, ritmo, música, subtítulos y color. Precio por video, en USD."
                  : "Video resumen horizontal de ~1:40 de la misma gala: historia, ritmo, música y color. Precio por video, en USD.")}
              <div className="flex items-end gap-2">
                <input ref={inputRef} {...aria(true)} className={`${field} max-w-[9rem]`} value={v ? d.pv : d.ph} onChange={(e) => set(v ? "pv" : "ph", e.target.value.replace(/[^\d.,]/g, "").slice(0, 8))} placeholder="0" inputMode="decimal" autoComplete="off" enterKeyHint={v ? "next" : "done"} />
                <span className="pb-2.5 text-xl font-bold text-white/70">USD</span>
              </div>
            </div>
          </div>
        )
      }
      case "enviar":
        return <>{q("Todo listo" + (first ? ", " + first : "") + ".", "Revisa y envía. Te escribo por WhatsApp si encajas.")}
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[15px]">
            <dt className="text-white/60">País</dt><dd className="font-semibold text-white">{d.pais}</dd>
            <dt className="text-white/60">WhatsApp</dt><dd className="font-semibold text-white">{phone.ok ? (paisInfo && paisInfo.len.length ? formatPhone(phone.e164, paisInfo.d) : phone.e164) : d.tel}</dd>
            <dt className="text-white/60">Portfolio</dt><dd className="font-semibold text-white">{d.portfolio.filter((s) => s.trim()).length} enlace(s)</dd>
            <dt className="text-white/60">Vertical</dt><dd className="font-semibold text-white">{prices.v} USD</dd>
            <dt className="text-white/60">Horizontal</dt><dd className="font-semibold text-white">{prices.h} USD</dd>
          </dl>
          <p className="mt-3 text-[12.5px] leading-snug text-white/60">
            Al enviar, Dani Acero tratará tus datos solo para valorar tu candidatura y contactarte. Puedes pedir que los borre cuando quieras.{" "}
            <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="inline-block py-1 font-semibold text-white/85 underline underline-offset-2">Política de privacidad</a>
          </p></>
      default: return null
    }
  })()

  const pre = i < PRE
  const progress = pre ? 0 : step === "fin" ? 100 : (n / QUESTION_COUNT) * 100
  const nextLabel = step === "intro" ? "Ver el puesto" : step === "oferta" ? "Continuar" : step === "proceso" ? "Empezar" : step === "enviar" ? (sending ? "Enviando…" : err ? "Reintentar" : "Enviar") : step === "instagram" && !d.instagram ? "Saltar" : "Continuar"
  const wide = step === "vertical" || step === "horizontal"

  return (
    <main className="fixed inset-x-0 top-0 z-[60] flex flex-col overflow-hidden bg-[#0a0e1a] text-white"
      style={{
        height: kb ? kb.h : "100dvh", transform: kb ? `translateY(${kb.top}px)` : undefined,
        paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)", paddingLeft: "env(safe-area-inset-left)", paddingRight: "env(safe-area-inset-right)",
        ["--vh-v" as string]: "clamp(7rem,28dvh,15rem)", ["--vh-h" as string]: "clamp(6rem,22dvh,15rem)",
      }}>
      <style>{`@keyframes edIn{from{opacity:0;transform:translateY(calc(var(--d)*18px))}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){[data-ed-anim]{animation:none!important}}@media (max-height:480px) and (orientation:landscape){main [role=group]{grid-template-columns:repeat(3,minmax(0,1fr))!important}main h1{font-size:1.25rem!important}main footer{padding-bottom:.25rem!important}}`}</style>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BLOB}/bg.jpg`} alt="" aria-hidden="true" fetchPriority="low" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" style={{ opacity: showBg ? 0.5 : 0.12 }} />
      {bgOk && (
        <video ref={bgRef} autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1} src={`${BLOB}/bg-loop-lite.mp4`} onPlaying={() => setBgReady(true)}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" style={{ opacity: bgReady ? (showBg ? 0.5 : 0) : 0 }} />
      )}
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,.55) 0%,rgba(10,14,26,.78) 55%,#0a0e1a 100%)" }} />
      <div className="relative z-10 h-1 w-full shrink-0 bg-white/10" role="progressbar" aria-label="Progreso" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}><div className="h-full transition-all duration-500" style={{ width: `${progress}%`, background: GOLD }} /></div>
      <header className="relative z-10 flex shrink-0 items-center justify-between px-5 pt-1.5 sm:px-10 sm:pt-3">
        <span className="text-[13px] font-extrabold tracking-wide">DANI ACERO</span>
        {step !== "intro" && step !== "fin" && <button type="button" onClick={back} className="-mr-3 flex min-h-11 min-w-11 items-center justify-center px-3 text-sm font-semibold text-white/75 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4a544]">← Atrás</button>}
      </header>

      <div className="relative z-10 mx-auto flex w-full min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 sm:px-10" style={{ maxWidth: wide ? "64rem" : "48rem" }}>
        <div key={step} data-ed-anim className="my-auto py-2" style={{ ["--d" as string]: dir, animation: "edIn .3s ease both" }}>
          {step === "intro" && (
            <div>
              <div className="mb-[clamp(.6rem,2.4dvh,1.25rem)] flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/editores/dani.jpg" alt="Dani Acero" width={48} height={48} decoding="async" className="h-12 w-12 rounded-full object-cover ring-2" style={{ ["--tw-ring-color" as string]: GOLD }} />
                <div className="text-sm leading-tight"><p className="font-extrabold">Dani Acero</p><p className="text-white/70">Filmmaker · Madrid</p></div>
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[.2em]" style={{ color: GOLD }}>Convocatoria abierta · Freelance LATAM</p>
              <h1 ref={headRef} tabIndex={-1} className="text-[clamp(1.6rem,5.6dvh,2.1rem)] font-extrabold leading-[1.08] !outline-none focus-visible:!outline-none sm:text-6xl">Busco editores de video para trabajar conmigo.</h1>
              <p className="mt-[clamp(.6rem,2.2dvh,1.25rem)] max-w-xl text-[clamp(.9rem,2.5dvh,1rem)] leading-snug text-white/80 sm:text-xl">Aftermovies de eventos para marcas y empresas reales. Remoto, desde cualquier país de Latinoamérica.</p>
              <p className="mt-[clamp(.6rem,2.4dvh,1.5rem)] text-[11px] font-bold uppercase tracking-[.18em] text-white/60 sm:text-xs">IFEMA · Cámara de Comercio de Madrid · FIFA · Cinesa</p>
            </div>
          )}
          {step === "oferta" && (
            <div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-[.22em]" style={{ color: GOLD }}>El puesto</p>
              <h1 ref={headRef} tabIndex={-1} className="mb-[clamp(.6rem,2.4dvh,1.5rem)] text-[clamp(1.5rem,4.8dvh,1.9rem)] font-extrabold leading-tight !outline-none focus-visible:!outline-none sm:text-5xl">Lo que te ofrezco</h1>
              <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                {[
                  ["01", "Trabajo constante", "Eventos reales cada mes. Si encajas, entras en mi equipo habitual."],
                  ["02", "Pago en USD", "Por proyecto. Tú propones tu tarifa y yo valoro calidad y precio, no el más barato."],
                  ["03", "Trato directo", "Hablas conmigo, sin agencias ni intermediarios. Brief claro y feedback rápido."],
                ].map(([k, t, x]) => (
                  <div key={k} className="rounded-2xl border border-white/15 bg-white/[.05] px-4 py-[clamp(.5rem,1.7dvh,1rem)] backdrop-blur-md sm:p-5">
                    <p className="flex items-baseline gap-2"><span className="text-sm font-extrabold" style={{ color: GOLD }}>{k}</span><span className="text-[clamp(1rem,2.6dvh,1.15rem)] font-extrabold sm:text-xl">{t}</span></p>
                    <p className="mt-0.5 text-[clamp(.78rem,2dvh,.9rem)] leading-snug text-white/70 sm:mt-1.5 sm:text-[15px]">{x}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {step === "proceso" && (
            <div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-[.22em]" style={{ color: GOLD }}>Cómo funciona</p>
              <h1 ref={headRef} tabIndex={-1} className="mb-[clamp(.6rem,2.4dvh,1.5rem)] text-[clamp(1.5rem,4.8dvh,1.9rem)] font-extrabold leading-tight !outline-none focus-visible:!outline-none sm:text-5xl">Dos minutos y listo</h1>
              <ol className="space-y-2 sm:space-y-3">
                {[
                  ["Te postulas aquí", "Datos, portafolio y cuánto cobrarías por dos aftermovies."],
                  ["Reviso tu trabajo", "Miro tu portafolio y tu tarifa, uno por uno."],
                  ["Te escribo por WhatsApp", "Si encajas, hablamos directamente y te paso el primer proyecto."],
                ].map(([t, x], k) => (
                  <li key={t} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[.05] px-3.5 py-[clamp(.5rem,1.6dvh,1rem)] backdrop-blur-md sm:gap-4 sm:p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base font-extrabold text-[#0a0e1a]" style={{ background: GOLD }}>{k + 1}</span>
                    <div><p className="text-[clamp(1rem,2.6dvh,1.15rem)] font-extrabold leading-tight">{t}</p><p className="mt-0.5 text-[clamp(.78rem,2dvh,.9rem)] leading-snug text-white/70 sm:text-[15px]">{x}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {step === "fin" && (
            <div role="status">
              <p className="mb-3 text-5xl" aria-hidden="true" style={{ color: GOLD }}>✓</p>
              <h1 ref={headRef} tabIndex={-1} className="text-[2rem] font-extrabold leading-tight !outline-none focus-visible:!outline-none sm:text-5xl">Recibido{first ? `, ${first}` : ""}.</h1>
              <p className="mt-4 max-w-xl text-lg text-white/75">Reviso tu portafolio y tu tarifa. Si encajas, te escribo por WhatsApp en los próximos días. Gracias por postularte.</p>
            </div>
          )}
          {!pre && step !== "fin" && question}
          {step === "enviar" && <input type="text" name="hp_confirm" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />}
          <p id="ed-err" role="alert" className={err ? "mt-3 text-sm font-semibold text-[#ff8a8a]" : "sr-only"}>{err}</p>
        </div>
      </div>

      {step !== "fin" && (
        <footer className="relative z-10 mx-auto flex w-full shrink-0 items-center gap-4 px-5 pb-3 pt-2 sm:px-10 sm:pb-8 sm:pt-3" style={{ maxWidth: wide ? "64rem" : "48rem" }}>
          <button type="button" onClick={next} disabled={sending} className="min-h-12 rounded-xl px-7 text-base font-extrabold text-[#0a0e1a] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[.98] disabled:opacity-60" style={{ background: GOLD }}>{nextLabel}</button>
          <span className="hidden text-sm text-white/60 sm:inline">o pulsa <kbd className="rounded border border-white/30 px-1.5 py-0.5 text-xs">Enter ↵</kbd></span>
        </footer>
      )}
    </main>
  )
}

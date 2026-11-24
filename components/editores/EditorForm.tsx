"use client"
// Formulario de postulación de editores (LATAM), estilo Typeform: una pregunta por pantalla, sin scroll.
// Envía a /api/editores. Mide con CompleteRegistration (NO Lead: Lead mide a los clientes de Dani).
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { trackEvent, whenPixelReady } from "@/lib/analytics"

const BLOB = "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/editores/ref"
const GOLD = "#d4a544"

const PAISES: { n: string; d: string }[] = [
  { n: "México", d: "+52" }, { n: "Colombia", d: "+57" }, { n: "Argentina", d: "+54" }, { n: "Chile", d: "+56" },
  { n: "Perú", d: "+51" }, { n: "Venezuela", d: "+58" }, { n: "Ecuador", d: "+593" }, { n: "Uruguay", d: "+598" },
  { n: "Bolivia", d: "+591" }, { n: "Paraguay", d: "+595" }, { n: "Costa Rica", d: "+506" }, { n: "Panamá", d: "+507" },
  { n: "Guatemala", d: "+502" }, { n: "Rep. Dominicana", d: "+1" }, { n: "Otro", d: "+" },
]
const SOFTWARE = ["DaVinci Resolve", "Premiere Pro", "After Effects", "Final Cut", "CapCut", "Motion graphics", "Otro"]
const EXPERIENCIA = [["<1", "Menos de 1 año"], ["1-3", "1 a 3 años"], ["3-5", "3 a 5 años"], ["5+", "Más de 5 años"]]
const PLAZO = [["24h", "En 24 horas"], ["48h", "En 48 horas"], ["3-4 días", "3 a 4 días"], ["1 semana", "Una semana"]]
const DISPONIBILIDAD = [["tiempo completo", "Tiempo completo"], ["parcial", "Parcial"], ["puntual", "Proyectos puntuales"]]

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

const validUrl = (s: string) => {
  try {
    const u = new URL(/^https?:\/\//i.test(s.trim()) ? s.trim() : `https://${s.trim()}`)
    return u.hostname.includes(".")
  } catch { return false }
}

export default function EditorForm() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState<1 | -1>(1)
  const [d, setD] = useState<Data>(EMPTY)
  const [err, setErr] = useState("")
  const [sending, setSending] = useState(false)
  const startedAt = useRef(0)
  const [hp, setHp] = useState("")
  const step: Step = STEPS[i]
  // Portal al <body>: PageTransition envuelve la web con un transform y rompe position:fixed.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const inputRef = useRef<HTMLInputElement>(null)

  const set = <K extends keyof Data>(k: K, v: Data[K]) => { setD((p) => ({ ...p, [k]: v })); setErr("") }

  const check = useCallback((): string => {
    switch (step) {
      case "nombre": return d.nombre.trim().length < 2 ? "Escribe tu nombre" : ""
      case "pais": return d.pais ? "" : "Elige tu país"
      case "whatsapp": return /^\d{8,15}$/.test(d.tel.replace(/\D/g, "")) ? "" : "Revisa el número (con código de país)"
      case "portfolio": {
        const filled = d.portfolio.map((s) => s.trim()).filter(Boolean)
        if (!filled.length) return "Pon al menos un enlace"
        return filled.every(validUrl) ? "" : "Alguno de los enlaces no es válido"
      }
      case "software": return d.software.length ? "" : "Elige al menos uno"
      case "experiencia": return d.experiencia ? "" : "Elige una opción"
      case "disponibilidad": return d.disponibilidad ? "" : "Elige una opción"
      case "plazo": return d.plazo ? "" : "Elige una opción"
      case "vertical": return Number(d.pv) >= 1 && Number(d.pv) <= 5000 ? "" : "Pon un precio en USD"
      case "horizontal": return Number(d.ph) >= 1 && Number(d.ph) <= 20000 ? "" : "Pon un precio en USD"
      default: return ""
    }
  }, [step, d])

  const go = useCallback((delta: 1 | -1) => { setDir(delta); setErr(""); setI((n) => Math.min(STEPS.length - 1, Math.max(0, n + delta))) }, [])

  const submit = useCallback(async () => {
    setSending(true); setErr("")
    const q = new URLSearchParams(window.location.search)
    try {
      const r = await fetch("/api/editores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: d.nombre, pais: d.pais, whatsapp: "+" + d.tel.replace(/\D/g, ""), instagram: d.instagram,
          portfolio: d.portfolio.map((s) => s.trim()).filter(Boolean), software: d.software, experiencia: d.experiencia,
          disponibilidad: d.disponibilidad, plazo: d.plazo, precioVerticalUsd: Number(d.pv), precioHorizontalUsd: Number(d.ph),
          utm: { source: q.get("utm_source") ?? "", medium: q.get("utm_medium") ?? "", campaign: q.get("utm_campaign") ?? "", content: q.get("utm_content") ?? "" },
          web: hp, elapsedMs: Date.now() - startedAt.current,
        }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok || !j.ok) throw new Error(j.error ?? "error")
      trackEvent("editor_submit", { pais: d.pais })
      whenPixelReady(() => window.fbq?.("track", "CompleteRegistration", { content_name: "editor_latam", status: true }))
      go(1)
    } catch {
      setErr("No se ha podido enviar. Revisa tu conexión y vuelve a intentarlo.")
    } finally { setSending(false) }
  }, [d, hp, go])

  const next = useCallback(() => {
    if (step === "intro") { startedAt.current = Date.now(); trackEvent("editor_start"); go(1); return }
    if (step === "oferta" || step === "proceso") { go(1); return }
    const e = check()
    if (e) { setErr(e); return }
    if (step === "enviar") { void submit(); return }
    go(1)
  }, [step, check, go, submit])

  // Enter avanza (excepto en botones/chips); foco automático en el campo de texto de cada pantalla.
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Enter" && !ev.shiftKey && !(ev.target instanceof HTMLElement && ev.target.dataset.back)) { ev.preventDefault(); next() }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next])
  useEffect(() => {
    trackEvent("editor_step", { step })
    const t = window.setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 350)
    return () => window.clearTimeout(t)
  }, [step])

  const chip = (active: boolean) =>
    `rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition active:scale-[.98] ${active ? "border-[#d4a544] bg-[#d4a544]/15 text-white" : "border-white/15 bg-white/[.04] text-white/80 hover:border-white/40"}`
  const field = "w-full border-0 border-b-2 border-white/25 bg-transparent px-0 py-3 text-2xl font-semibold text-white !outline-none !shadow-none focus:!outline-none focus-visible:!outline-none placeholder:text-white/30 focus:border-[#d4a544] sm:text-3xl"

  const question = useMemo(() => {
    const n = i - PRE + 1
    const q = (t: string, sub?: string) => (
      <div className="mb-5 sm:mb-7">
        <p className="mb-2 text-sm font-bold" style={{ color: GOLD }}>{n} <span className="text-white/40">/ {QUESTION_COUNT}</span></p>
        <h1 className="text-[1.65rem] font-extrabold leading-tight text-white sm:text-4xl">{t}</h1>
        {sub && <p className="mt-2 text-[15px] leading-snug text-white/60 sm:text-base">{sub}</p>}
      </div>
    )
    switch (step) {
      case "nombre":
        return <>{q("¿Cómo te llamas?")}<input ref={inputRef} className={field} value={d.nombre} onChange={(e) => set("nombre", e.target.value)} placeholder="Nombre y apellido" autoComplete="name" maxLength={80} /></>
      case "pais":
        return <>{q("¿Desde qué país trabajas?")}
          <div className="grid max-h-[46dvh] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3">
            {PAISES.map((p) => (
              <button key={p.n} type="button" className={chip(d.pais === p.n && p.n !== "Otro" || (p.n === "Otro" && !!d.pais && !PAISES.some((x) => x.n === d.pais)))}
                onClick={() => { if (p.n === "Otro") { setD((s) => ({ ...s, pais: "Otro", dial: "+", tel: "+" })) } else { setD((s) => ({ ...s, pais: p.n, dial: p.d, tel: p.d + " " })); setErr(""); window.setTimeout(() => go(1), 180) } }}>{p.n}</button>
            ))}
          </div>
          {d.pais === "Otro" || (d.pais && !PAISES.some((x) => x.n === d.pais)) ? (
            <input ref={inputRef} className={`${field} mt-4`} value={d.pais === "Otro" ? "" : d.pais} onChange={(e) => set("pais", e.target.value.slice(0, 60) || "Otro")} placeholder="¿Cuál?" />
          ) : null}
        </>
      case "whatsapp":
        return <>{q("¿Cuál es tu WhatsApp?", "Es por donde te escribiré si quedas seleccionado. Comprueba que el número tiene WhatsApp.")}
          <input ref={inputRef} className={field} value={d.tel} placeholder="+57 300 123 4567" inputMode="tel" autoComplete="tel" aria-label="Número de WhatsApp con código de país"
            onChange={(e) => { let v = e.target.value.replace(/[^\d\s+-]/g, "").slice(0, 22); if (v && !v.startsWith("+")) v = `${d.dial === "+" ? "+" : d.dial + " "}${v}`; set("tel", v) }} /></>
      case "instagram":
        return <>{q("¿Tienes Instagram profesional?", "Opcional, pero ayuda a ver tu trabajo.")}<input ref={inputRef} className={field} value={d.instagram} onChange={(e) => set("instagram", e.target.value.slice(0, 100))} placeholder="@tuusuario" autoCapitalize="none" autoCorrect="off" /></>
      case "portfolio":
        return <>{q("Enséñame tu mejor trabajo", "Enlaces a YouTube, Vimeo, Drive o Instagram. Si puedes, uno vertical y uno horizontal.")}
          <div className="space-y-1">
            {d.portfolio.map((v, k) => (
              <input key={k} ref={k === 0 ? inputRef : undefined} className={`${field} !text-lg sm:!text-xl`} value={v} placeholder={k === 0 ? "https://…" : "Otro enlace (opcional)"} inputMode="url" autoCapitalize="none" autoCorrect="off"
                onChange={(e) => set("portfolio", d.portfolio.map((x, j) => (j === k ? e.target.value.slice(0, 500) : x)))} />
            ))}
          </div></>
      case "software":
        return <>{q("¿Con qué editas?", "Elige todo lo que uses.")}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {SOFTWARE.map((s) => <button key={s} type="button" className={chip(d.software.includes(s))} onClick={() => set("software", d.software.includes(s) ? d.software.filter((x) => x !== s) : [...d.software, s])}>{s}</button>)}
          </div></>
      case "experiencia":
        return <>{q("¿Cuánta experiencia tienes editando?")}
          <div className="grid gap-2">{EXPERIENCIA.map(([v, l]) => <button key={v} type="button" className={chip(d.experiencia === v)} onClick={() => { set("experiencia", v); window.setTimeout(() => go(1), 180) }}>{l}</button>)}</div></>
      case "disponibilidad":
        return <>{q("¿Qué disponibilidad tienes?")}
          <div className="grid gap-2">{DISPONIBILIDAD.map(([v, l]) => <button key={v} type="button" className={chip(d.disponibilidad === v)} onClick={() => { set("disponibilidad", v); window.setTimeout(() => go(1), 180) }}>{l}</button>)}</div></>
      case "plazo":
        return <>{q("¿En cuánto entregas un aftermovie?", "Desde que recibes el bruto, con una primera versión lista para revisar.")}
          <div className="grid gap-2">{PLAZO.map(([v, l]) => <button key={v} type="button" className={chip(d.plazo === v)} onClick={() => { set("plazo", v); window.setTimeout(() => go(1), 180) }}>{l}</button>)}</div></>
      case "vertical":
      case "horizontal": {
        const v = step === "vertical"
        return (
          <div className={`flex gap-5 ${v ? "flex-row items-start" : "flex-col"} sm:flex-row sm:items-center sm:gap-8`}>
            <video key={step} src={`${BLOB}/ref-${v ? "vertical" : "horizontal"}.mp4`} poster={`${BLOB}/ref-${v ? "vertical" : "horizontal"}.jpg`} controls playsInline preload="metadata"
              className={`rounded-xl bg-black object-contain ring-1 ring-white/15 ${v ? "h-[34dvh] w-auto shrink-0 sm:h-[52dvh]" : "max-h-[26dvh] w-full sm:max-h-[50dvh] sm:w-[58%]"}`} />
            <div className="min-w-0 flex-1">
              {q(v ? "¿Cuánto cobrarías por un aftermovie vertical como este?" : "¿Y por el aftermovie horizontal (vídeo resumen)?",
                v ? "Aftermovie vertical de ~30 s de los CEO Awards: selección de planos, ritmo, música, subtítulos y color. Precio por vídeo, en USD."
                  : "Vídeo resumen horizontal de ~1:40 de la misma gala: historia, ritmo, música y color. Precio por vídeo, en USD.")}
              <div className="flex items-end gap-2">
                <input ref={inputRef} className={`${field} max-w-[9rem]`} value={v ? d.pv : d.ph} onChange={(e) => set(v ? "pv" : "ph", e.target.value.replace(/\D/g, "").slice(0, 5))} placeholder="0" inputMode="numeric" />
                <span className="pb-3 text-xl font-bold text-white/60">USD</span>
              </div>
            </div>
          </div>
        )
      }
      case "enviar":
        return <>{q("Todo listo, " + (d.nombre.split(" ")[0] || "") + ".", "Revisa y envía. Te escribo por WhatsApp si encajas.")}
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[15px]">
            <dt className="text-white/50">País</dt><dd className="font-semibold text-white">{d.pais}</dd>
            <dt className="text-white/50">WhatsApp</dt><dd className="font-semibold text-white">{d.tel}</dd>
            <dt className="text-white/50">Portfolio</dt><dd className="truncate font-semibold text-white">{d.portfolio.filter(Boolean).length} enlace(s)</dd>
            <dt className="text-white/50">Aftermovie vertical</dt><dd className="font-semibold text-white">{d.pv} USD</dd>
            <dt className="text-white/50">Aftermovie horizontal</dt><dd className="font-semibold text-white">{d.ph} USD</dd>
          </dl></>
      default: return null
    }
  }, [i, step, d, go])

  const pre = i < PRE
  const progress = pre ? 0 : step === "fin" ? 100 : ((i - PRE + 1) / QUESTION_COUNT) * 100
  const nextLabel = step === "intro" ? "Ver el puesto" : step === "oferta" ? "Continuar" : step === "proceso" ? "Empezar"  : step === "enviar" ? (sending ? "Enviando…" : "Enviar") : step === "instagram" && !d.instagram ? "Saltar" : "Continuar"

  if (!mounted) return null
  return createPortal(
    <main className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-[#0a0e1a] text-white" style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}>
      <style>{`@keyframes edIn{from{opacity:0;transform:translateY(calc(var(--d)*22px))}to{opacity:1;transform:none}}`}</style>
      <video autoPlay muted loop playsInline preload="auto" poster={`${BLOB}/bg.jpg`} src={`${BLOB}/bg-loop.mp4`} aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 h-full w-full object-cover transition-opacity duration-1000" style={{ opacity: pre || step === "fin" ? 0.5 : 0.12 }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,14,26,.55) 0%,rgba(10,14,26,.78) 55%,#0a0e1a 100%)" }} />
      <div className="relative z-10 h-1 w-full bg-white/10"><div className="h-full transition-all duration-500" style={{ width: `${progress}%`, background: GOLD }} /></div>
      <header className="relative z-10 flex items-center justify-between px-5 pt-4 sm:px-10">
        <span className="text-[13px] font-extrabold tracking-wide">DANI ACERO</span>
        {step !== "intro" && step !== "fin" && <button type="button" data-back="1" onClick={() => go(-1)} className="text-sm font-semibold text-white/60 hover:text-white" aria-label="Volver">← Atrás</button>}
      </header>

      <div className={`relative z-10 mx-auto flex w-full ${step === "vertical" || step === "horizontal" ? "max-w-5xl" : "max-w-3xl"} flex-1 flex-col justify-center px-5 sm:px-10`} style={{ minHeight: 0 }}>
        <div key={step} style={{ ["--d" as string]: dir, animation: "edIn .35s ease both" }}>
          {step === "intro" && (
            <div>
              <div className="mb-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/editores/dani.jpg" alt="Dani Acero" width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-2" style={{ ["--tw-ring-color" as string]: GOLD }} />
                <div className="text-sm leading-tight"><p className="font-extrabold">Dani Acero</p><p className="text-white/60">Filmmaker · Madrid</p></div>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[.22em]" style={{ color: GOLD }}>Convocatoria abierta · Freelance LATAM</p>
              <h1 className="text-[2.1rem] font-extrabold leading-[1.05] sm:text-6xl">Busco editores de vídeo para trabajar conmigo.</h1>
              <p className="mt-5 max-w-xl text-base leading-snug text-white/75 sm:text-xl">Aftermovies de eventos para marcas y empresas reales. Remoto, desde cualquier país de Latinoamérica.</p>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[.2em] text-white/40 sm:text-xs">IFEMA · Cámara de Comercio de Madrid · FIFA · Cinesa</p>
            </div>
          )}
          {step === "oferta" && (
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[.22em]" style={{ color: GOLD }}>El puesto</p>
              <h1 className="mb-6 text-[1.9rem] font-extrabold leading-tight sm:text-5xl">Lo que te ofrezco</h1>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Trabajo constante", "Eventos reales cada mes. Si encajas, entras en mi equipo habitual."],
                  ["02", "Pago en USD", "Por proyecto. Tú propones tu tarifa y yo valoro calidad y precio, no el más barato."],
                  ["03", "Trato directo", "Hablas conmigo, sin agencias ni intermediarios. Brief claro y feedback rápido."],
                ].map(([n, t, x]) => (
                  <div key={n} className="rounded-2xl border border-white/12 bg-white/[.05] p-4 backdrop-blur-md sm:p-5">
                    <p className="text-sm font-extrabold" style={{ color: GOLD }}>{n}</p>
                    <p className="mt-1 text-lg font-extrabold sm:text-xl">{t}</p>
                    <p className="mt-1.5 text-[14px] leading-snug text-white/65 sm:text-[15px]">{x}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {step === "proceso" && (
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[.22em]" style={{ color: GOLD }}>Cómo funciona</p>
              <h1 className="mb-6 text-[1.9rem] font-extrabold leading-tight sm:text-5xl">Dos minutos y listo</h1>
              <ol className="space-y-3">
                {[
                  ["Te postulas aquí", "Datos, portfolio y cuánto cobrarías por dos aftermovies."],
                  ["Reviso tu trabajo", "Miro tu portfolio y tu tarifa, uno por uno."],
                  ["Te escribo por WhatsApp", "Si encajas, hablamos directamente y te paso el primer proyecto."],
                ].map(([t, x], k) => (
                  <li key={t} className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/[.05] p-4 backdrop-blur-md">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-extrabold text-[#0a0e1a]" style={{ background: GOLD }}>{k + 1}</span>
                    <div><p className="text-lg font-extrabold leading-tight">{t}</p><p className="mt-0.5 text-[14px] leading-snug text-white/65 sm:text-[15px]">{x}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {step === "fin" && (
            <div>
              <p className="mb-3 text-5xl">✓</p>
              <h1 className="text-[2rem] font-extrabold leading-tight sm:text-5xl">Recibido, {d.nombre.split(" ")[0]}.</h1>
              <p className="mt-4 max-w-xl text-lg text-white/70">Reviso tu portfolio y tu tarifa. Si encajas, te escribo por WhatsApp en los próximos días. Gracias por postularte.</p>
            </div>
          )}
          {!pre && step !== "fin" && question}
          <input type="text" name="web" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
          {err && <p role="alert" className="mt-4 text-sm font-semibold text-[#ff7a7a]">{err}</p>}
        </div>
      </div>

      {step !== "fin" && (
        <footer className="relative z-10 mx-auto flex w-full max-w-3xl items-center gap-4 px-5 pb-5 pt-3 sm:px-10 sm:pb-8">
          <button type="button" onClick={next} disabled={sending} className="rounded-xl px-7 py-3.5 text-base font-extrabold text-[#0a0e1a] transition active:scale-[.98] disabled:opacity-60" style={{ background: GOLD }}>{nextLabel}</button>
          <span className="hidden text-sm text-white/40 sm:inline">o pulsa <kbd className="rounded border border-white/25 px-1.5 py-0.5 text-xs">Enter ↵</kbd></span>
        </footer>
      )}
    </main>,
    document.body,
  )
}

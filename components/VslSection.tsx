"use client"

// VSL de la home con reproductor propio (estilo de la web: cristal oscuro, Manrope, blanco translúcido).
//
// Reproducción:
//   - Autoplay al entrar en pantalla (IntersectionObserver). Primero intenta CON sonido; si el navegador
//     lo bloquea (política de autoplay: sin interacción previa no se permite sonido), arranca en silencio y
//     muestra "Activar sonido". Se pausa al salir de pantalla y se reanuda al volver (salvo pausa manual).
//   - HLS adaptativo (2160p/1440p/1080p/720p/480p) con hls.js cargado bajo demanda: mide el ancho de banda y
//     cambia de calidad sin cortes, apuntando a la máxima sostenible. HLS nativo si no hay MSE. MP4 1080p
//     como último recurso.
//   - Nada se descarga hasta que el vídeo entra en pantalla (preload="none", sin src inicial).
//   - Al terminar: pantalla final con las mismas opciones que enseña el vídeo (formulario, WhatsApp, email),
//     ahora pulsables, y "Volver a ver". No se relanza solo al volver a entrar en pantalla.
// Medición (GA4 + Clarity, lib/analytics.ts): vsl_start, vsl_progress (25/50/75), vsl_complete, vsl_unmute,
// vsl_replay y vsl_cta_click { method }.
// Las URLs salen de lib/media.ts (VSL[lang]); si es null la sección no existe.

import { useCallback, useEffect, useRef, useState } from "react"
import type {
  CSSProperties,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from "react"
import { preconnect, preload } from "react-dom"
import type Hls from "hls.js"
import { getDictionary, type Lang } from "@/lib/i18n"
import { BLOB_ORIGIN, VSL, VSL_STARTED_EVENT, optimizedPoster } from "@/lib/media"
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/contact"
import { trackEvent } from "@/lib/analytics"

type Props = {
  lang: Lang
  /** Oculta el título corto encima del vídeo. */
  hideTitle?: boolean
  /** Destino de "rellena el formulario" en la pantalla final (por defecto el bloque #contacto de la home). */
  formHref?: string
  /**
   * Dentro del hero (home): sin márgenes de sección propios y con el ancho limitado por el alto de la
   * ventana, para que el vídeo entero quepa en la primera pantalla junto al título.
   */
  inline?: boolean
  className?: string
}

type LevelOption = { index: number; height: number }
type WebkitVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void }

const HIDE_CONTROLS_MS = 2600
const PROGRESS_MILESTONES = [25, 50, 75]

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

function qualityLabel(height: number) {
  if (height >= 2000) return "4K"
  return `${height}p`
}

export default function VslSection({
  lang,
  hideTitle = false,
  formHref = "#contacto",
  inline = false,
  className,
}: Props) {
  const media = VSL[lang]
  const dict = getDictionary(lang)
  const t = dict.vsl
  const waUrl = whatsappUrl(dict.contact.whatsappMessage)

  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)
  const loadPromiseRef = useRef<Promise<void> | null>(null)
  const fellBackRef = useRef(false)
  const userPausedRef = useRef(false)
  const soundTriedRef = useRef(false)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrubbingRef = useRef(false)
  const startTrackedRef = useRef(false)
  const milestonesRef = useRef(new Set<number>())

  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)
  const [muted, setMuted] = useState(false)
  const [needsSound, setNeedsSound] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [bufferedEnd, setBufferedEnd] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [qualityOpen, setQualityOpen] = useState(false)
  const [levels, setLevels] = useState<LevelOption[]>([])
  const [selectedLevel, setSelectedLevel] = useState(-1)
  const [activeHeight, setActiveHeight] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  // ---------- Fuente (HLS / nativo / MP4) ----------
  const fallbackToMp4 = useCallback((video: HTMLVideoElement) => {
    if (!media || fellBackRef.current) return
    fellBackRef.current = true
    hlsRef.current?.destroy()
    hlsRef.current = null
    setLevels([])
    video.src = media.mp4
    video.dataset.quality = "mp4-1080p"
    video.load()
  }, [media])

  const ensureSource = useCallback((): Promise<void> => {
    const video = videoRef.current
    if (!video || !media) return Promise.resolve()
    if (loadPromiseRef.current) return loadPromiseRef.current
    loadPromiseRef.current = (async () => {
      try {
        // Build "light" (sin subtítulos, pistas de audio alternativas ni DRM, que el VSL no usa): ~40 % menos JS.
        const { default: HlsLib } = await import("hls.js/light")
        if (HlsLib.isSupported()) {
          const hls = new HlsLib({
            // Tope de calidad según el tamaño real del reproductor × devicePixelRatio (ResizeObserver): en
            // una caja de 378 px no se baja el 4K; en pantalla completa vuelve a subir. Se desactiva
            // mientras haya una calidad elegida a mano (chooseLevel).
            capLevelToPlayerSize: true,
            startLevel: -1,
            abrEwmaDefaultEstimate: 6_000_000,
            abrBandWidthUpFactor: 0.8,
            abrBandWidthFactor: 0.9,
            // Buffer corto: menos MB por delante si la persona se va a mitad de vídeo y menos memoria.
            maxBufferLength: 12,
            maxMaxBufferLength: 30,
            backBufferLength: 15,
          })
          hlsRef.current = hls
          await new Promise<void>((resolve) => {
            hls.once(HlsLib.Events.MANIFEST_PARSED, () => {
              setLevels(
                hls.levels
                  .map((level, index) => ({ index, height: level.height }))
                  .sort((a, b) => b.height - a.height),
              )
              resolve()
            })
            hls.on(HlsLib.Events.LEVEL_SWITCHED, (_event, data) => {
              const height = hls.levels[data.level]?.height ?? 0
              setActiveHeight(height)
              video.dataset.quality = `${height}p`
            })
            hls.on(HlsLib.Events.ERROR, (_event, data) => {
              if (!data.fatal) return
              if (data.type === HlsLib.ErrorTypes.NETWORK_ERROR) hls.startLoad()
              else if (data.type === HlsLib.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError()
              else {
                fallbackToMp4(video)
                resolve()
              }
            })
            hls.loadSource(media.hls)
            hls.attachMedia(video)
          })
          return
        }
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = media.hls
          video.dataset.quality = "hls-native"
          return
        }
        fallbackToMp4(video)
      } catch {
        fallbackToMp4(video)
      }
    })()
    return loadPromiseRef.current
  }, [media, fallbackToMp4])

  // ---------- Reproducción ----------
  const startPlayback = useCallback(async () => {
    const video = videoRef.current
    if (!video) return
    await ensureSource()
    setStarted(true)
    if (!soundTriedRef.current) {
      soundTriedRef.current = true
      video.muted = false
      try {
        await video.play()
        setNeedsSound(false)
        return
      } catch {
        // Autoplay con sonido bloqueado por el navegador: arrancamos en silencio.
        video.muted = true
        setNeedsSound(true)
      }
    }
    try {
      await video.play()
    } catch {
      // Sin permiso ni en silencio (modo ahorro de energía, etc.): queda el botón de play.
    }
  }, [ensureSource])

  const unmute = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.muted || video.volume === 0) {
      trackEvent("vsl_unmute", { vsl_lang: lang, at_second: Math.round(video.currentTime) })
    }
    video.muted = false
    if (video.volume === 0) video.volume = 1
    setNeedsSound(false)
    if (video.paused) {
      userPausedRef.current = false
      void video.play().catch(() => {})
    }
  }, [lang])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (needsSound && !video.paused) {
      unmute()
      return
    }
    if (video.paused) {
      userPausedRef.current = false
      if (!started) void startPlayback()
      else void video.play().catch(() => {})
    } else {
      userPausedRef.current = true
      video.pause()
    }
  }, [needsSound, started, startPlayback, unmute])

  const replay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    trackEvent("vsl_replay", { vsl_lang: lang })
    userPausedRef.current = false
    setEnded(false)
    video.currentTime = 0
    void video.play().catch(() => {})
  }, [lang])

  const onEndCta = (method: "form" | "whatsapp" | "email", event?: ReactMouseEvent<HTMLAnchorElement>) => {
    trackEvent("vsl_cta_click", { vsl_lang: lang, method })
    if (method !== "form") return
    const exiting = document.fullscreenElement ? document.exitFullscreen().catch(() => {}) : Promise.resolve()
    // Ancla en la misma página: scroll explícito (como Hero.tsx). En WebKit el salto por ancla + scroll
    // suave + el montaje del iframe del formulario dejaba la página sin llegar a #contacto.
    const target = formHref.startsWith("#") ? document.getElementById(formHref.slice(1)) : null
    if (!target || !event) return
    event.preventDefault()
    void exiting.then(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${formHref}`)
      // Mientras dura el scroll suave pueden cambiar alturas por encima (imágenes diferidas, montaje del
      // iframe del formulario). Chrome lo compensa con scroll anchoring; WebKit no, y se quedaba corto.
      // Cada vez que el scroll se detiene, si #contacto no está arriba, se vuelve a alinear (máx. 4 s y
      // 4 correcciones). Se abandona en cuanto la persona toca la rueda, la pantalla o el teclado.
      let stopped = false
      let corrections = 0
      let lastY = window.scrollY
      const stop = () => {
        stopped = true
        window.clearInterval(timer)
        window.removeEventListener("wheel", stop)
        window.removeEventListener("touchstart", stop)
        window.removeEventListener("keydown", stop)
      }
      const realign = () => {
        if (stopped) return
        const top = target.getBoundingClientRect().top
        if (Math.abs(top) > 4 && Math.abs(top) < window.innerHeight && corrections < 4) {
          corrections += 1
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
      const timer = window.setInterval(() => {
        const y = window.scrollY
        if (y === lastY) realign()
        lastY = y
      }, 250)
      window.setTimeout(stop, 4000)
      window.addEventListener("wheel", stop, { passive: true, once: true })
      window.addEventListener("touchstart", stop, { passive: true, once: true })
      window.addEventListener("keydown", stop, { once: true })
      // Si el iframe termina de cargar después, una última alineación.
      const watchIframe = (iframe: HTMLIFrameElement) =>
        iframe.addEventListener("load", () => { if (!stopped) realign() }, { once: true })
      const existing = target.querySelector("iframe")
      if (existing) {
        watchIframe(existing)
        return
      }
      const observer = new MutationObserver(() => {
        const iframe = target.querySelector("iframe")
        if (!iframe) return
        observer.disconnect()
        watchIframe(iframe)
      })
      observer.observe(target, { childList: true, subtree: true })
      window.setTimeout(() => observer.disconnect(), 10_000)
    })
  }

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.muted || video.volume === 0) unmute()
    else video.muted = true
  }, [unmute])

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current
    const video = videoRef.current as WebkitVideo | null
    if (!container || !video) return
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else if (container.requestFullscreen) {
      void container.requestFullscreen().catch(() => video.webkitEnterFullscreen?.())
    } else {
      video.webkitEnterFullscreen?.()
    }
  }, [])

  const chooseLevel = useCallback((index: number) => {
    const hls = hlsRef.current
    if (hls) {
      // Elección manual (p. ej. 4K): sin tope por tamaño. "Auto" (-1) vuelve a limitar al reproductor.
      hls.capLevelToPlayerSize = index === -1
      hls.currentLevel = index
    }
    setSelectedLevel(index)
    setQualityOpen(false)
  }, [])

  // ---------- Controles visibles / auto-ocultar ----------
  const revealControls = useCallback(() => {
    setControlsVisible(true)
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => {
      const video = videoRef.current
      if (video && !video.paused && !scrubbingRef.current) setControlsVisible(false)
    }, HIDE_CONTROLS_MS)
  }, [])

  // ---------- Barra de progreso ----------
  const seekFromPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video || !duration) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
    video.currentTime = ratio * duration
    setCurrentTime(video.currentTime)
  }

  const onProgressKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return
    if (event.key === "ArrowRight") video.currentTime = Math.min(duration, video.currentTime + 5)
    else if (event.key === "ArrowLeft") video.currentTime = Math.max(0, video.currentTime - 5)
    else return
    event.preventDefault()
  }

  const onContainerKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("[role='slider'],button,input,a")) return
    if (event.key === " " || event.key === "k") {
      event.preventDefault()
      togglePlay()
    } else if (event.key === "m") toggleMute()
    else if (event.key === "f") toggleFullscreen()
  }

  // ---------- Efectos ----------
  // Eventos del <video>
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // Primer frame reproduciéndose: libera los vídeos decorativos que esperaban (AutoplayVideo).
    const onPlaying = () => {
      const w = window as Window & { __vslStarted?: boolean }
      if (w.__vslStarted) return
      w.__vslStarted = true
      window.dispatchEvent(new Event(VSL_STARTED_EVENT))
    }
    const onPlay = () => {
      setPlaying(true)
      setEnded(false)
      if (!startTrackedRef.current) {
        startTrackedRef.current = true
        trackEvent("vsl_start", { vsl_lang: lang, muted: video.muted })
      }
    }
    const onPause = () => {
      setPlaying(false)
      setControlsVisible(true)
    }
    const onEnded = () => {
      // No relanzar solo al volver a entrar en pantalla: queda la pantalla final.
      userPausedRef.current = true
      setEnded(true)
      setPlaying(false)
      setControlsVisible(true)
      if (!milestonesRef.current.has(100)) {
        milestonesRef.current.add(100)
        trackEvent("vsl_complete", { vsl_lang: lang, muted: video.muted })
      }
    }
    const onTime = () => {
      if (!scrubbingRef.current) setCurrentTime(video.currentTime)
      if (video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100
        for (const milestone of PROGRESS_MILESTONES) {
          if (percent >= milestone && !milestonesRef.current.has(milestone)) {
            milestonesRef.current.add(milestone)
            trackEvent("vsl_progress", { vsl_lang: lang, percent: milestone, muted: video.muted })
          }
        }
      }
    }
    const onDuration = () => setDuration(Number.isFinite(video.duration) ? video.duration : 0)
    const onProgress = () => {
      const { buffered } = video
      setBufferedEnd(buffered.length ? buffered.end(buffered.length - 1) : 0)
    }
    const onVolume = () => {
      setMuted(video.muted || video.volume === 0)
      setVolume(video.volume)
      if (!video.muted && video.volume > 0) setNeedsSound(false)
    }
    const onError = () => {
      if (!hlsRef.current) fallbackToMp4(video)
    }
    video.addEventListener("play", onPlay)
    video.addEventListener("playing", onPlaying)
    video.addEventListener("pause", onPause)
    video.addEventListener("ended", onEnded)
    video.addEventListener("timeupdate", onTime)
    video.addEventListener("durationchange", onDuration)
    video.addEventListener("loadedmetadata", onDuration)
    video.addEventListener("progress", onProgress)
    video.addEventListener("volumechange", onVolume)
    video.addEventListener("error", onError)
    return () => {
      video.removeEventListener("play", onPlay)
      video.removeEventListener("playing", onPlaying)
      video.removeEventListener("pause", onPause)
      video.removeEventListener("ended", onEnded)
      video.removeEventListener("timeupdate", onTime)
      video.removeEventListener("durationchange", onDuration)
      video.removeEventListener("loadedmetadata", onDuration)
      video.removeEventListener("progress", onProgress)
      video.removeEventListener("volumechange", onVolume)
      video.removeEventListener("error", onError)
    }
  }, [fallbackToMp4, lang])

  // Autoplay al entrar en pantalla, pausa al salir
  useEffect(() => {
    const container = containerRef.current
    if (!container || !media) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current
        if (!video) return
        if (entry.intersectionRatio >= 0.45) {
          if (!userPausedRef.current && video.paused) void startPlayback()
        } else if (entry.intersectionRatio < 0.15 && !video.paused && !document.fullscreenElement) {
          video.pause()
        }
      },
      { threshold: [0, 0.15, 0.45, 0.75] },
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [media, startPlayback])

  // Pantalla completa
  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", onChange)
    return () => document.removeEventListener("fullscreenchange", onChange)
  }, [])

  // Limpieza
  useEffect(
    () => () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
      hlsRef.current?.destroy()
      hlsRef.current = null
    },
    [],
  )

  if (!media) return null

  // Home (inline): el póster del VSL es el LCP → optimizado y precargado con prioridad alta.
  // preconnect al Blob sin y con CORS (el <video> usa la conexión con credenciales; hls.js, fetch anónimo).
  const posterUrl = optimizedPoster(media.poster, 1080) ?? media.poster
  preconnect(BLOB_ORIGIN)
  preconnect(BLOB_ORIGIN, { crossOrigin: "anonymous" })
  if (inline) preload(posterUrl, { as: "image", fetchPriority: "high" })

  const progress = duration ? (currentTime / duration) * 100 : 0
  const buffered = duration ? Math.min(100, (bufferedEnd / duration) * 100) : 0
  const showUi = controlsVisible || !playing || qualityOpen
  const autoLabel = activeHeight ? `${t.auto} · ${qualityLabel(activeHeight)}` : t.auto
  const currentQualityText =
    selectedLevel === -1 ? autoLabel : qualityLabel(levels.find((l) => l.index === selectedLevel)?.height ?? 0)

  const iconButton =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/85 transition-colors duration-300 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:h-10 sm:w-10"
  const endPill =
    "inline-flex h-9 items-center gap-2 rounded-full px-4 font-inter text-[12px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-11 sm:px-5 sm:text-[14px]"
  const endIcon = "h-3.5 w-3.5 fill-none stroke-current sm:h-4 sm:w-4"

  return (
    <section
      data-lux
      aria-label={t.videoLabel}
      className={`cinematic-reveal ${inline ? "w-full" : "page-container pb-4 pt-12 sm:pb-6 sm:pt-16 lg:pt-20"} ${className ?? ""}`}
    >
      <div
        className="mx-auto w-full max-w-5xl"
        style={inline ? { maxWidth: "min(64rem, max(22rem, calc((100svh - 23rem) * 16 / 9)))" } : undefined}
      >
        {hideTitle ? null : (
          <p
            data-lux
            style={{ "--lux-delay": "80ms" } as CSSProperties}
            className="mb-5 flex items-center justify-center gap-3 text-center font-inter text-[10px] uppercase tracking-[0.22em] text-white/55 sm:mb-6 sm:text-[11px]"
          >
            <span aria-hidden className="h-px w-8 bg-white/25" />
            {t.title}
            <span aria-hidden className="h-px w-8 bg-white/25" />
          </p>
        )}

        <div
          ref={containerRef}
          data-vsl-player
          tabIndex={0}
          onKeyDown={onContainerKey}
          onPointerMove={revealControls}
          onPointerDown={revealControls}
          onMouseLeave={() => playing && setControlsVisible(false)}
          className={`group/vsl relative aspect-video w-full max-w-full overflow-hidden bg-black focus:outline-none ${
            fullscreen ? "" : "rounded-2xl border border-white/10 shadow-[0_28px_70px_-36px_rgba(0,0,0,0.95)]"
          } ${showUi ? "cursor-default" : "cursor-none"}`}
        >
          <video
            ref={videoRef}
            poster={posterUrl}
            preload="none"
            playsInline
            aria-label={t.videoLabel}
            className="absolute inset-0 h-full w-full bg-black object-contain"
          />

          {/* Superficie clicable: play/pausa (o activar sonido si está en silencio por autoplay) */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={needsSound ? t.unmute : playing ? t.pause : t.play}
            className="absolute inset-0 h-full w-full cursor-inherit focus:outline-none"
          />

          {/* Play grande (antes de arrancar o en pausa) */}
          {!playing && !ended ? (
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/25" />
              <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-[0_18px_48px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/vsl:scale-[1.06] sm:h-[96px] sm:w-[96px]">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white sm:h-9 sm:w-9">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.24-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
                </svg>
              </span>
            </div>
          ) : null}

          {/* Activar sonido (autoplay silenciado): en la esquina para no tapar la cara ni los rótulos del vídeo. */}
          {needsSound && playing ? (
            <button
              type="button"
              onClick={unmute}
              className="absolute right-2.5 top-2.5 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/25 bg-black/45 px-2.5 py-1.5 font-inter text-[9px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_18px_48px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] hover:border-white/50 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4 sm:top-4 sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[11px] sm:tracking-[0.16em]"
            >
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
                <span className="relative inline-flex h-full w-full rounded-full bg-white" />
              </span>
              <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-white sm:h-4 sm:w-4" strokeWidth={1.8}>
                <path d="M11 5 6 9H3v6h3l5 4V5Z" strokeLinejoin="round" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" strokeLinecap="round" />
              </svg>
              {t.unmute}
            </button>
          ) : null}

          {/* Pantalla final: las opciones de contacto que enseña el vídeo, pulsables */}
          {ended ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 px-4 text-center backdrop-blur-[3px] sm:gap-5">
              <p className="font-inter text-[13px] italic text-white/85 sm:text-[17px]">{t.endTitle}</p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <a
                  href={formHref}
                  onClick={(event) => onEndCta("form", event)}
                  className={`${endPill} bg-white text-[#0a0a0a] shadow-[0_14px_36px_-16px_rgba(255,255,255,0.45)]`}
                >
                  <svg aria-hidden viewBox="0 0 24 24" className={endIcon} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3h7l5 5v13H7z" />
                    <path d="M14 3v5h5M10 13h6M10 17h6" />
                  </svg>
                  {t.endForm}
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onEndCta("whatsapp")}
                  className={`${endPill} border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-white/50`}
                >
                  <svg aria-hidden viewBox="0 0 24 24" className={endIcon} strokeWidth={1.8} strokeLinejoin="round">
                    <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3a8.5 8.5 0 1 1 15.5-4.6Z" />
                  </svg>
                  {t.endWhatsapp}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => onEndCta("email")}
                  className={`${endPill} border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-white/50`}
                >
                  <svg aria-hidden viewBox="0 0 24 24" className={endIcon} strokeWidth={1.8} strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3.5 6.5 8.5 6 8.5-6" />
                  </svg>
                  {t.endEmail}
                </a>
              </div>
              <button
                type="button"
                onClick={replay}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-inter text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:text-[11px]"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 4v5h5" />
                </svg>
                {t.replay}
              </button>
            </div>
          ) : null}

          {/* Barra de controles */}
          {started && !ended ? (
            <div
              className={`absolute inset-x-0 bottom-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showUi ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <div className="relative px-3 pb-2.5 sm:px-5 sm:pb-4">
                {/* Progreso */}
                <div
                  role="slider"
                  tabIndex={0}
                  aria-label={t.progress}
                  aria-valuemin={0}
                  aria-valuemax={Math.round(duration)}
                  aria-valuenow={Math.round(currentTime)}
                  aria-valuetext={`${formatTime(currentTime)} / ${formatTime(duration)}`}
                  onKeyDown={onProgressKey}
                  onPointerDown={(event) => {
                    scrubbingRef.current = true
                    event.currentTarget.setPointerCapture(event.pointerId)
                    seekFromPointer(event)
                  }}
                  onPointerMove={(event) => scrubbingRef.current && seekFromPointer(event)}
                  onPointerUp={(event) => {
                    scrubbingRef.current = false
                    event.currentTarget.releasePointerCapture(event.pointerId)
                  }}
                  className="group/progress relative flex h-5 cursor-pointer touch-none items-center focus:outline-none"
                >
                  <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/15 transition-[height] duration-300 group-hover/progress:h-[5px]">
                    <div className="absolute inset-y-0 left-0 bg-white/25" style={{ width: `${buffered}%` }} />
                    <div className="absolute inset-y-0 left-0 bg-white" style={{ width: `${progress}%` }} />
                  </div>
                  <div
                    aria-hidden
                    className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover/progress:scale-100 group-focus-visible/progress:scale-100"
                    style={{ left: `${progress}%` }}
                  />
                </div>

                <div className="mt-1 flex items-center gap-1 sm:gap-2">
                  <button type="button" onClick={togglePlay} aria-label={playing ? t.pause : t.play} className={iconButton}>
                    {playing ? (
                      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-[18px] sm:w-[18px]">
                        <rect x="6" y="5" width="4" height="14" rx="1.2" />
                        <rect x="14" y="5" width="4" height="14" rx="1.2" />
                      </svg>
                    ) : (
                      <svg aria-hidden viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current sm:h-[18px] sm:w-[18px]">
                        <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.24-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
                      </svg>
                    )}
                  </button>

                  <div className="group/volume flex items-center">
                    <button type="button" onClick={toggleMute} aria-label={muted ? t.unmute : t.mute} className={iconButton}>
                      <svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth={1.8}>
                        <path d="M11 5 6 9H3v6h3l5 4V5Z" strokeLinejoin="round" />
                        {muted ? (
                          <path d="m16 9.5 5 5m0-5-5 5" strokeLinecap="round" />
                        ) : (
                          <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" strokeLinecap="round" />
                        )}
                      </svg>
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={muted ? 0 : volume}
                      aria-label={t.volume}
                      onChange={(event) => {
                        const video = videoRef.current
                        if (!video) return
                        const value = Number(event.target.value)
                        video.volume = value
                        video.muted = value === 0
                      }}
                      className="hidden h-[3px] w-0 cursor-pointer appearance-none rounded-full bg-white/25 accent-white opacity-0 transition-all duration-300 group-hover/volume:w-20 group-hover/volume:opacity-100 focus:w-20 focus:opacity-100 sm:block"
                    />
                  </div>

                  <span className="ml-1 font-inter text-[11px] tabular-nums tracking-[0.04em] text-white/75 sm:text-[12px]">
                    {formatTime(currentTime)} <span className="text-white/35">/</span> {formatTime(duration)}
                  </span>

                  <div className="ml-auto flex items-center gap-1 sm:gap-2">
                    {/* Selector de calidad solo en pantallas grandes; en móvil manda el modo automático */}
                    {levels.length > 1 ? (
                      <div className="relative hidden sm:block">
                        <button
                          type="button"
                          onClick={() => setQualityOpen((open) => !open)}
                          aria-haspopup="menu"
                          aria-expanded={qualityOpen}
                          aria-label={`${t.quality}: ${currentQualityText}`}
                          className="flex h-8 items-center rounded-full border border-white/15 bg-white/[0.06] px-3 font-inter text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur-md transition-colors duration-300 hover:border-white/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:h-9 sm:text-[11px]"
                        >
                          {currentQualityText}
                        </button>
                        {qualityOpen ? (
                          <div
                            role="menu"
                            className="absolute bottom-full right-0 mb-2 min-w-[150px] overflow-hidden rounded-xl border border-white/15 bg-black/70 py-1.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl"
                          >
                            {[{ index: -1, height: 0 }, ...levels].map((option) => {
                              const active = option.index === selectedLevel
                              return (
                                <button
                                  key={option.index}
                                  type="button"
                                  role="menuitemradio"
                                  aria-checked={active}
                                  onClick={() => chooseLevel(option.index)}
                                  className={`flex w-full items-center justify-between gap-4 px-4 py-2 text-left font-inter text-[12px] tracking-[0.04em] transition-colors duration-200 hover:bg-white/10 ${
                                    active ? "text-white" : "text-white/65"
                                  }`}
                                >
                                  {option.index === -1 ? autoLabel : qualityLabel(option.height)}
                                  {active ? <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
                                </button>
                              )
                            })}
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      aria-label={fullscreen ? t.exitFullscreen : t.fullscreen}
                      className={iconButton}
                    >
                      <svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth={1.8} strokeLinecap="round">
                        {fullscreen ? (
                          <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
                        ) : (
                          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

// components/tv/ReelPhone.tsx
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { TVReel } from "@/data/tv-reels"
import styles from "./ReelPhone.module.css"

const MONO = ["#3a3a3a", "#2a2a2a", "#474747", "#1f1f1f", "#555555"]

// Cuántas tarjetas se clonan a cada extremo para simular scroll infinito:
// al asentarse sobre un clon, saltamos en silencio (sin animar) a la tarjeta
// real equivalente — mismo contenido, el visitante no lo nota.
function useLoopOrder(total: number) {
  return useMemo(() => {
    const clones = Math.min(2, Math.max(total - 1, 0))
    const order: number[] = []
    for (let i = total - clones; i < total; i++) order.push(i)
    for (let i = 0; i < total; i++) order.push(i)
    for (let i = 0; i < clones; i++) order.push(i)
    return { order, clones }
  }, [total])
}

const Icon = {
  heart: (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        d="M12 20.4S3 15 3 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 9 2.8C21 15 12 20.4 12 20.4z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  comment: (
    <svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true">
      <path
        d="M21 11.5a8.4 8.4 0 0 1-8.7 8.4 9 9 0 0 1-3-.5L3 21l1.7-5A8.3 8.3 0 0 1 3.5 11.5 8.4 8.4 0 0 1 12.3 3 8.4 8.4 0 0 1 21 11.5z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M21 3 3 10.4l7 3.3M21 3l-6.3 18-4.7-7.3M21 3 10.3 13.7"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  ),
  muteOn: (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M3 10v4h4l5 5V5L7 10H3z" fill="#fff" />
      <path d="M16 9l5 6M21 9l-5 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  muteOff: (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M3 10v4h4l5 5V5L7 10H3z" fill="#fff" />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
}

type Props = { reels: TVReel[] }

export default function ReelPhone({ reels }: Props) {
  const N = reels.length
  const { order, clones } = useLoopOrder(N)

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const activeRef = useRef(clones)
  const soundOnRef = useRef(false)
  // Solo la tarjeta activa reproduce con sonido — el resto siempre está
  // muteada — así que el icono de mute de cada tarjeta puede derivarse de
  // este estado en vez de leer video.muted (un ref) durante el render.
  const [activeDisplay, setActiveDisplay] = useState(clones)
  const [activeMuted, setActiveMuted] = useState(true)

  useEffect(() => {
    const vp = viewportRef.current
    if (!vp || order.length === 0) return

    const setActiveIndex = (idx: number) => {
      if (idx === activeRef.current) return
      activeRef.current = idx
      videoRefs.current.forEach((v, i) => {
        if (!v) return
        if (i === idx) {
          if (!v.src && v.dataset.src) v.src = v.dataset.src
          v.muted = !soundOnRef.current
          const p = v.play()
          if (p && typeof p.catch === "function") p.catch(() => {})
        } else {
          if (!v.paused) v.pause()
          if (!v.muted) v.muted = true
        }
      })
      ;[idx - 1, idx + 1].forEach((n) => {
        const v = videoRefs.current[n]
        if (v && !v.src && v.dataset.src) v.src = v.dataset.src
      })
      setActiveDisplay(idx)
      setActiveMuted(!soundOnRef.current)
    }

    let ticking = false
    let settleTimer: ReturnType<typeof setTimeout> | null = null

    const computeActive = () => {
      ticking = false
      const h = vp.clientHeight
      if (!h) return
      const idx = Math.min(order.length - 1, Math.max(0, Math.round(vp.scrollTop / h)))
      setActiveIndex(idx)
    }

    const checkWrap = () => {
      if (!clones) return
      const idx = activeRef.current
      if (idx < clones || idx >= clones + N) {
        const corrected = clones + (((idx - clones) % N) + N) % N
        vp.scrollTop = corrected * vp.clientHeight
        setActiveIndex(corrected)
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(computeActive)
      }
      if (settleTimer) clearTimeout(settleTimer)
      settleTimer = setTimeout(checkWrap, 140)
    }

    vp.scrollTop = clones * vp.clientHeight
    activeRef.current = -1 // fuerza el play/mute inicial en el primer setActiveIndex
    setActiveIndex(clones)

    vp.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      vp.removeEventListener("scroll", onScroll)
      if (settleTimer) clearTimeout(settleTimer)
    }
  }, [order, N, clones])

  const toggleMute = (displayIdx: number) => {
    // Solo la tarjeta activa suena; tocar el mute de una vecina no hace nada
    // (igual que en Reels: no puedes silenciar/activar un vídeo que no ves).
    if (displayIdx !== activeDisplay) return
    const v = videoRefs.current[displayIdx]
    if (!v) return
    v.muted = !v.muted
    soundOnRef.current = !v.muted
    setActiveMuted(v.muted)
  }

  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.notch} />
        <div ref={viewportRef} className={styles.viewport}>
          <div className={styles.track}>
            {order.map((realIdx, displayIdx) => {
              const reel = reels[realIdx]
              const mono = reel.avatar ? undefined : MONO[realIdx % MONO.length]
              const letter = reel.name.trim().charAt(0).toUpperCase()
              const muted = displayIdx === activeDisplay ? activeMuted : true
              const igUrl = `https://instagram.com/${reel.ig}`

              return (
                <div key={`${reel.id}-${displayIdx}`} className={styles.card}>
                  <video
                    ref={(el) => {
                      videoRefs.current[displayIdx] = el
                    }}
                    className={styles.video}
                    poster={reel.poster}
                    data-src={reel.video}
                    muted
                    loop
                    playsInline
                    preload="none"
                  />

                  <button
                    type="button"
                    className={styles.muteBtn}
                    onClick={() => toggleMute(displayIdx)}
                    aria-label={muted ? "Activar sonido" : "Silenciar"}
                  >
                    {muted ? Icon.muteOn : Icon.muteOff}
                  </button>

                  <div className={styles.rail}>
                    <span className={styles.railBtn}>{Icon.heart}</span>
                    <span className={styles.railBtn}>{Icon.comment}</span>
                    <span className={styles.railBtn}>{Icon.share}</span>
                    <div className={styles.railAudio}>
                      {reel.avatar ? (
                        <img src={reel.avatar} alt="" />
                      ) : (
                        <span className={styles.railAudioMono} style={{ background: mono }}>
                          {letter}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.bottom}>
                    <div className={styles.user}>
                      {reel.avatar ? (
                        <img className={styles.avatar} src={reel.avatar} alt="" loading="lazy" />
                      ) : (
                        <span className={styles.avatarMono} style={{ background: mono }}>
                          {letter}
                        </span>
                      )}
                      <a
                        className={styles.uname}
                        href={igUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{reel.ig}
                      </a>
                      <a
                        className={styles.follow}
                        href={igUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Síguenos
                      </a>
                    </div>
                    <p className={styles.caption}>{reel.caption}</p>
                    <span className={styles.metaLine}>
                      {reel.cat}
                      {reel.town ? ` · ${reel.town}` : ""}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

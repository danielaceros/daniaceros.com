"use client"

import * as React from "react"
import clsx from "clsx"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

type Props = {
  label: string
  phone: string
  message: string
  className?: string
}

export default function WhatsAppButton({
  label,
  phone,
  message,
  className,
}: Props) {
  const waUrl = React.useMemo(() => {
    const encoded = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encoded}`
  }, [phone, message])

  const onClick = React.useCallback(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact")
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17644170080/62xhCODU57UbEODWst1B",
        value: 1.0,
        currency: "EUR",
      })
    }
  }, [])

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      style={{ cursor: "pointer" }}
      aria-label={label}
      className={clsx(
        "whatsapp-clickable group relative isolate inline-flex h-14 min-h-[3.5rem] w-full cursor-pointer items-center justify-between overflow-hidden rounded-lg border border-white/20 bg-white px-5 text-left text-[#0a0a0a] shadow-[0_10px_32px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-[2px] hover:border-white/40 hover:shadow-[0_18px_46px_rgba(255,255,255,0.16)] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white to-white/95" />
      <span className="pointer-events-none absolute -left-1/3 top-[-120%] h-[340%] w-1/3 rotate-[16deg] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:left-[120%] group-hover:opacity-100" />
      <span className="relative z-10 pr-4 font-inter text-[12px] font-semibold uppercase sm:text-[13px]">
        {label}
      </span>
      <span className="relative z-10 text-[15px] leading-none text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
        ↗
      </span>
    </a>
  )
}

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ease } from "@/lib/motion"
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
    if (typeof window !== "undefined") {
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
      window.open(waUrl, "_blank", "noopener,noreferrer")
    }
  }, [waUrl])

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -1.5 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.28, ease: ease.expo }}
      className={clsx(
        "group inline-flex h-14 min-h-[3.5rem] w-full items-center justify-between rounded-md border border-white/15 bg-white px-5 text-left text-[#0a0a0a] shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/35 hover:shadow-[0_14px_40px_rgba(255,255,255,0.13)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      <span className="pr-4 font-inter text-[12px] font-semibold uppercase tracking-normal sm:text-[13px]">
        {label}
      </span>
      <motion.span
        initial={{ x: 0, y: 0 }}
        whileHover={{ x: 2.5, y: -2.5 }}
        transition={{ duration: 0.25, ease: ease.expo }}
        className="text-[15px] leading-none text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
      >
        ↗
      </motion.span>
    </motion.button>
  )
}

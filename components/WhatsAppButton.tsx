"use client"

import * as React from "react"
import { motion } from "framer-motion"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    gtag?: (...args: any[]) => void
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
      // Meta Pixel
      if (typeof window.fbq === "function") {
        window.fbq("track", "Contact")
      }

      // Google Ads
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
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      className={className}
      style={{
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderRadius: 6,
        border: "1px solid #E5E5E5",
        background: "#FFFFFF",
        color: "#000000",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: "0em",
        textTransform: "uppercase",
        lineHeight: "1em",
        cursor: "pointer",
      }}
    >
      <span>{label}</span>
      <motion.span
        initial={{ x: 0, y: 0 }}
        whileHover={{ x: 2, y: -2 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{ fontSize: 16 }}
      >
        ↗
      </motion.span>
    </motion.button>
  )
}
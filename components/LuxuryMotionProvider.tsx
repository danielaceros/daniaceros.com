"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function LuxuryMotionProvider() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.add("js-motion")

    const animated = Array.from(
      document.querySelectorAll<HTMLElement>("[data-lux]:not(.lux-visible)")
    )
    if (!animated.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const element = entry.target as HTMLElement
          element.classList.add("lux-visible")
          observer.unobserve(element)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    // Make above-the-fold elements visible immediately on route changes.
    animated.forEach((element) => {
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92) {
        element.classList.add("lux-visible")
        return
      }
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}

"use client"

import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ease } from "@/lib/motion"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="pt-[5.25rem] sm:pt-[5.5rem] lg:pt-24">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 20, scale: 0.994 }
          }
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -12, scale: 1.003 }
          }
          transition={{
            duration: prefersReducedMotion ? 0.2 : 0.62,
            ease: ease.expo,
          }}
          className="relative will-change-transform"
        >
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: prefersReducedMotion ? 0 : 0.08 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.45, ease: ease.expo }}
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.16),rgba(255,255,255,0))]"
          />
          <div className="relative z-10">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

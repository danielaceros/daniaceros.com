"use client"

import { motion } from "framer-motion"
import { ease } from "@/lib/motion"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: ease.expo }}
      className="pt-[5.25rem] sm:pt-[5.5rem] lg:pt-24"
    >
      {children}
    </motion.div>
  )
}

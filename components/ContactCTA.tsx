"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import WhatsAppButton from "./WhatsAppButton"
import { ease, stagger, viewport } from "@/lib/motion"

export default function ContactCTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger.normal, delayChildren: 0.1 },
        },
      }}
      className="mx-auto mt-20 max-w-5xl px-4 pb-24 text-center sm:mt-24 sm:px-6 sm:pb-32"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.expo } },
        }}
        className="mb-4 font-display text-[30px] font-semibold uppercase leading-[1.02] tracking-[-0.03em] sm:mb-5 sm:text-[40px] lg:text-[48px]"
      >
        ¿Hablamos de tu proyecto?
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.expo } },
        }}
        className="mx-auto mb-12 max-w-2xl font-inter text-[13px] leading-[1.75] tracking-normal text-white/68 sm:text-[14px]"
      >
        Si estás valorando crear un vídeo para tu empresa, cuéntame qué tienes en mente
        y te digo en minutos si encaja y cómo lo haría. Te respondo personalmente. Sin compromiso.
      </motion.p>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.expo } },
        }}
        className="mx-auto max-w-3xl"
      >
        <WhatsAppButton
          label="Cuéntame tu proyecto"
          phone="34711255496"
          message="Hola Dani, vengo del anuncio. Mi empresa es ___ y estoy valorando crear un vídeo para ___. ¿Crees que encaja para mi caso?"
          className="w-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        />
      </motion.div>

      <motion.footer
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
        }}
        className="mt-16 border-t border-white/[0.08] pt-10"
      >
        <p className="font-inter text-[11px] lowercase text-white/45">
          <Link
            href="https://www.instagram.com/daniaceros"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            @danielaceros
          </Link>
        </p>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-inter text-[11px] lowercase text-white/45">
          <Link href="/aviso-legal" className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            aviso legal
          </Link>
          <span aria-hidden>·</span>
          <Link href="/politica-de-cookies" className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            política de cookies
          </Link>
          <span aria-hidden>·</span>
          <Link href="/politica-de-privacidad" className="hover:text-white/90 transition-colors duration-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            política de privacidad
          </Link>
        </p>
      </motion.footer>
    </motion.section>
  )
}

"use client"

import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import PortfolioCard from "./PortfolioCard"
import { ease, stagger, viewport } from "@/lib/motion"

const portfolioItems = [
  { title: "FIFA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A1.mp4?alt=media&token=12073558-3af3-459a-bf2a-e76441a8c42e", href: "/portfolio/fifa"},
  { title: "BRAHIM DÍAZ",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/ssstik.io_%40sonypicturesspain_1765025166403.mp4?alt=media&token=85e6bd4f-2ae0-4e7b-a795-84e34d415928", href: "/portfolio/brahim-diaz"},
  { title: "OMAR MONTES",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/SnapInsta.to_AQMpJcNmZa5CVSZIaTtKFv0wnJqh7qcQzpu0xzJSsuTFssC5KiccQz6uQHcxUAFRHe0oe3Q1RG2dDE0mBhr4v4jwdYg5x3_vWrx9fYM%20(1)_1.mp4?alt=media&token=c1211d45-7fae-4049-b82e-339e6a1028a9", href: "/portfolio/omar-montes"},
  { title: "TENGO UN PLAN",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A3.mp4?alt=media&token=087cdd6c-1228-48f4-b059-c1a214f90cf9", href: "/portfolio/tengo-un-plan"},
  { title: "CÁMARA DE COMERCIO",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A7%20(2).mp4?alt=media&token=9aefe430-138c-4501-b6fa-b0f0b160ccfe", href: "/portfolio/camara-de-comercio"},
  { title: "IFEMA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/%F0%9F%8E%A5%20Un%20punto%20de%20encuentro%2C%20un%20impulso%2C%20y%20una%20sen%CC%83al%20clara-%20el%20sector%20esta%CC%81%20despertando.Tercer%20an%CC%83o%20c.mp4?alt=media&token=e9318ece-6817-48e0-a1a0-f6c90daf774f", href: "/portfolio/ifema"},
  { title: "FEDERACIÓN DE ESGRIMA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/A5.mp4?alt=media&token=ce83614c-90e9-45ce-ae95-0feaec9c1135", href: "/portfolio/federacion-de-esgrima"},
  { title: "CINESA",  video: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/CINESA%20(2).mp4?alt=media&token=da7f88d0-6b36-4ee8-9e9c-6b81c6a1819b", href: "/portfolio/cinesa"},
]

export default function Portfolio() {
  return (
    <section className="page-container section-breathing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: ease.expo }}
      >
        <SectionTitle>Portfolio</SectionTitle>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: stagger.normal, delayChildren: 0.1 },
          },
        }}
      >
        {portfolioItems.map((item, i) => (
          <PortfolioCard key={item.title} {...item} index={i} />
        ))}
      </motion.div>
    </section>
  )
}

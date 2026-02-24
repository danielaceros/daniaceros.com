"use client"

import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import PortfolioCard from "./PortfolioCard"
import { projects } from "@/data/projects"
import { ease, stagger, viewport } from "@/lib/motion"

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
        {projects.map((project, i) => (
          <PortfolioCard
            key={project.slug}
            title={project.title}
            video={project.video}
            href={`/portfolio/${project.slug}`}
            index={i}
          />
        ))}
      </motion.div>
    </section>
  )
}

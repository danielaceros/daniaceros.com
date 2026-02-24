"use client"

import { motion } from "framer-motion"
import { ease, viewport } from "@/lib/motion"

type Section = {
  title: string
  items: string[]
}

export default function ProjectContent({ sections }: { sections: Section[] }) {
  return (
    <section data-lux className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
      <div className="space-y-16 sm:space-y-20">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: sectionIndex * 0.05, ease: ease.expo }}
          >
            <h2 className="mb-5 font-display text-[26px] font-semibold uppercase leading-[1.04] sm:mb-6 sm:text-[42px]">
              {section.title}
            </h2>

            <div className="space-y-3">
              {section.items.map((item, i) => {
                if (item.startsWith("✓")) {
                  const [title, desc] = item.replace("✓", "").split(" — ")
                  return (
                    <div key={i} className="space-y-1">
                      <div className="flex gap-2">
                        <span className="text-white">✓</span>
                        <p className="font-inter text-[13px] font-semibold leading-[1.6] text-white sm:text-[14px]">
                          {title}
                        </p>
                      </div>
                      {desc && (
                        <p className="ml-5 max-w-4xl text-[12.5px] leading-[1.72] text-white/65 sm:text-[13.5px]">
                          {desc}
                        </p>
                      )}
                    </div>
                  )
                }
                if (item.startsWith("•")) {
                  return (
                    <p
                      key={i}
                      className="ml-3 text-[13px] leading-[1.72] text-white/72 sm:text-[14px]"
                    >
                      {item}
                    </p>
                  )
                }
                return (
                  <p
                    key={i}
                    className="max-w-4xl text-[13px] leading-[1.75] text-white/72 sm:text-[14px]"
                  >
                    {item}
                  </p>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// components/ProjectContent.tsx
type Section = {
  title: string
  items: string[]
}

export default function ProjectContent({
  sections,
}: {
  sections: Section[]
}) {
  return (
    <section className="mx-5 max-w-6xl">
      <div className="space-y-14">
        {sections.map((section) => (
          <div key={section.title}>
            <h2
              className="
                mb-5 font-inter font-semibold uppercase tracking-[-0.06em]
                text-[32px] leading-[1.05]
                sm:text-[44px]
              "
            >
              {section.title}
            </h2>

            <div className="">
              {section.items.map((item, i) => {
                // CHECK
                if (item.startsWith("✓")) {
                  const [title, desc] = item.replace("✓", "").split(" — ")
                  return (
                    <div key={i} className="space-y-1">
                      <div className="flex gap-2">
                        <span className="text-white">✓</span>
                        <p className="font-inter text-[13px] font-semibold leading-[1.5] text-white sm:text-[14px]">
                          {title}
                        </p>
                      </div>
                      {desc && (
                        <p className="ml-5 max-w-4xl text-[12.5px] leading-[1.55] text-white/65 sm:text-[13.5px]">
                          {desc}
                        </p>
                      )}
                    </div>
                  )
                }

                // BULLET
                if (item.startsWith("•")) {
                  return (
                    <p
                      key={i}
                      className="ml-3 text-[13px] leading-[1.55] text-white/70 sm:text-[14px]"
                    >
                      {item}
                    </p>
                  )
                }

                // TEXTO NORMAL
                return (
                  <p
                    key={i}
                    className="max-w-4xl text-[13px] leading-[1.6] text-white/70 sm:text-[14px]"
                  >
                    {item}
                  </p>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
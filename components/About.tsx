import Image from "next/image"
import SectionTitle from "./SectionTitle"
import type { CSSProperties } from "react"

const paragraphs = [
  "Soy Daniel Acero, filmmaker con más de seis años de experiencia ayudando a empresas y marcas a transformar sus eventos en historias visuales que perduran.",
  "He tenido la oportunidad de cubrir congresos, lanzamientos, conferencias y experiencias de marca en toda España, siempre con un objetivo claro: capturar la esencia de cada momento.",
  "Mi misión es que cada historia siga viva mucho después de que el evento acabe.",
]

type Props = {
  sectionClassName?: string
  mobileCompactSplit?: boolean
}

export default function About({ sectionClassName, mobileCompactSplit = false }: Props) {
  const sectionLayoutClassName = mobileCompactSplit
    ? "grid grid-cols-[1fr_auto] items-start gap-5 sm:grid-cols-1 sm:gap-14 lg:grid-cols-2 lg:gap-20"
    : "grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-20"

  return (
    <section
      data-lux
      className={`cinematic-reveal page-container section-breathing ${sectionLayoutClassName} ${sectionClassName ?? ""}`}
    >
      <div
        data-lux
        style={{ "--lux-delay": "90ms" } as CSSProperties}
        className={`cinematic-reveal-delay-1 ${mobileCompactSplit ? "pr-0 sm:pr-0 lg:pr-4" : "lg:pr-4"}`}
      >
        <SectionTitle>Sobre mí</SectionTitle>
        <div className={mobileCompactSplit ? "space-y-4 sm:space-y-6" : "space-y-6"}>
          {mobileCompactSplit ? (
            <>
              <p
                data-lux
                style={{ "--lux-delay": "150ms" } as CSSProperties}
                className="font-inter text-[12px] leading-[1.65] text-white/78 sm:hidden"
              >
                {paragraphs[0]}
              </p>
              {paragraphs.map((p, i) => (
                <p
                  key={`desktop-${i}`}
                  data-lux
                  style={{ "--lux-delay": `${150 + i * 70}ms` } as CSSProperties}
                  className="hidden font-inter text-[16px] leading-[1.65] text-white/78 sm:block"
                >
                  {p}
                </p>
              ))}
            </>
          ) : (
            paragraphs.map((p, i) => (
              <p
                key={i}
                data-lux
                style={{ "--lux-delay": `${150 + i * 70}ms` } as CSSProperties}
                className="font-inter text-[14px] sm:text-[16px] leading-[1.65] text-white/78"
              >
                {p}
              </p>
            ))
          )}
        </div>
      </div>

      <div
        data-lux
        style={{ "--lux-delay": "220ms" } as CSSProperties}
        className={`cinematic-reveal cinematic-reveal-delay-2 flex ${
          mobileCompactSplit ? "items-start justify-end sm:items-center sm:justify-center" : "items-center justify-center"
        }`}
      >
        <div className="hover-lift lux-shine relative">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/0a4bxjgj0xSqIihE9ktHzjeng%20(2).png?alt=media&token=ead483f1-9cd5-4169-9e3d-810307334885"
            alt="Daniel Acero"
            width={560}
            height={760}
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 560px"
            className={`h-auto w-full object-cover grayscale rounded-lg border border-white/[0.08] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:grayscale-0 hover:border-white/20 ${
              mobileCompactSplit
                ? "max-h-[220px] max-w-[132px] sm:max-h-[500px] sm:max-w-sm"
                : "max-h-[400px] max-w-[280px] sm:max-h-[500px] sm:max-w-sm"
            }`}
          />
        </div>
      </div>
    </section>
  )
}

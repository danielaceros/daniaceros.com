import Image from "next/image"
import SectionTitle from "./SectionTitle"

const paragraphs = [
  "Soy Daniel Acero, filmmaker con más de seis años de experiencia ayudando a empresas y marcas a transformar sus eventos en historias visuales que perduran.",
  "He tenido la oportunidad de cubrir congresos, lanzamientos, conferencias y experiencias de marca en toda España, siempre con un objetivo claro: capturar la esencia de cada momento.",
  "Mi misión es que cada historia siga viva mucho después de que el evento acabe.",
]

export default function About() {
  return (
    <section className="page-container section-breathing grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-20">
      <div className="lg:pr-4">
        <SectionTitle>Sobre mí</SectionTitle>
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="font-inter text-[14px] sm:text-[16px] leading-[1.65]  text-white/78">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/0a4bxjgj0xSqIihE9ktHzjeng%20(2).png?alt=media&token=ead483f1-9cd5-4169-9e3d-810307334885"
            alt="Daniel Acero"
            width={560}
            height={760}
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 560px"
            className="max-h-[400px] sm:max-h-[500px] h-auto w-full max-w-[280px] sm:max-w-sm object-cover grayscale rounded-lg border border-white/[0.08] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:grayscale-0 hover:border-white/20"
          />
        </div>
      </div>
    </section>
  )
}

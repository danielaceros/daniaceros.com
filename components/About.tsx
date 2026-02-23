import SectionTitle from "./SectionTitle"

export default function About() {
  return (
    <section className="grid grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
      <div>
        <SectionTitle>Sobre mí</SectionTitle>

        <p className="mb-4 font-inter text-[16px] leading-[1.2] tracking-[-0.04em] text-white/80">
          Soy Daniel Acero, filmmaker con más de seis años de experiencia ayudando a empresas y marcas a transformar sus eventos en historias visuales que perduran.
        </p>

        <p className="mb-4 font-inter text-[16px] leading-[1.2] tracking-[-0.04em] text-white/80">
          He tenido la oportunidad de cubrir congresos, lanzamientos, conferencias y experiencias de marca en toda España, siempre con un objetivo claro: capturar la esencia de cada momento.
        </p>

        <p className="font-inter text-[16px] leading-[1.2] tracking-[-0.04em] text-white/80">
          Mi misión es que cada historia siga viva mucho después de que el evento acabe.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/0a4bxjgj0xSqIihE9ktHzjeng%20(2).png?alt=media&token=ead483f1-9cd5-4169-9e3d-810307334885"
          alt="Daniel Acero"
          className="max-h-[500px] w-full max-w-sm object-cover grayscale"
        />
      </div>
    </section>
  )
}
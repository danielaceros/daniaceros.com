// components/PortfolioHero.tsx
export default function PortfolioHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-24 pb-16">
      <h1
        className="
          mb-8 font-inter font-semibold uppercase tracking-[-0.08em]
          text-[36px] leading-[1.05]
          sm:text-[48px]
          lg:text-[64px]
        "
      >
        Historias visuales que conectan con empresas, instituciones y marcas
      </h1>

      <div className="max-w-3xl space-y-4 text-white/80">
        <p className="font-inter text-[13px] sm:text-[14px] leading-[1.5]">
          Mi trabajo consiste en transformar eventos, ideas y experiencias corporativas en piezas audiovisuales con narrativa y estética cinematográfica. A continuación encontrarás una selección de proyectos realizados en diferentes sectores: empresas, instituciones, deporte, formación, activaciones y eventos profesionales.
        </p>

        <p className="font-inter text-[13px] sm:text-[14px] leading-[1.5]">
          Cada proyecto tiene su propia historia, su propio objetivo y su propio enfoque visual. Aquí puedes descubrir cómo trabajo y qué resultados genero para mis clientes.
        </p>
      </div>
    </section>
  )
}
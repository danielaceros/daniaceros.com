export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/Disen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=ae45c05e-35c1-40c4-a89a-b7a738811667" // o URL de Firebase/Frame.io
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver reel"
        >
            <img
            src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/Disen%CC%83o%20sin%20ti%CC%81tulo.png?alt=media&token=ae45c05e-35c1-40c4-a89a-b7a738811667"
            alt="Hero background"
            className="h-full w-full object-cover blur-md scale-110"
          />
        </a>
        <div className="pointer-events-none absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-inter font-bold uppercase tracking-[-0.08em] leading-[1] text-[64px] sm:text-[96px] lg:text-[150px]">
          DANIEL ACERO
        </h1>

        <p className="mt-4 font-inter font-semibold uppercase tracking-[-0.08em] text-[20px] sm:text-[28px] lg:text-[35px]">
          Filmmaker corporativo y videógrafo de eventos en Madrid
        </p>

        <p className="mt-4 max-w-3xl font-inter font-medium text-[14px] sm:text-[16px] leading-[1.2] tracking-[-0.04em] text-white/80">
          Transformo eventos empresariales, congresos y conferencias en piezas audiovisuales profesionales para marcas y empresas en Madrid.
        </p>
      </div>
    </section>
  )
}
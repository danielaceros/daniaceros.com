// components/ProjectHero.tsx
type Props = {
  title: string
  video: string
  href: string
}

export default function ProjectHero({ title, video, href }: Props) {
  return (
    <section className="relative h-[30svh] w-full overflow-hidden bg-black">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 block"
        aria-label={`Ver vídeo de ${title}`}
      >
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="
            h-full w-full object-cover
            scale-110 blur-sm
          "
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/40" />
      </a>

      <div className="pointer-events-none absolute bottom-6 left-6 right-6">
        <h1
          className="
            font-inter font-semibold uppercase tracking-[-0.08em]
            text-[28px] leading-[1.05]
            sm:text-[36px]
            lg:text-[48px]
          "
        >
          {title}
        </h1>
        <p
          className="
            mt-1 font-inter font-semibold lowercase italic tracking-[-0.01em]
            text-[10px] leading-[1.05] text-white/80
          "
        >
          Haz click aquí para ver el proyecto completo
        </p>
      </div>
    </section>
  )
}
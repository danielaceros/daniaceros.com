type Props = {
  title: string
  video: string // URL del vídeo (Firebase / Vimeo / Frame.io mp4)
  href: string  // link al vídeo (puede ser el mismo)
}

export default function PortfolioCard({ title, video, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver vídeo de ${title}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-black"
    >
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/30 transition group-hover:bg-black/10" />

      {/* Label */}
      <span
        className="
            pointer-events-none absolute bottom-4 left-4
            font-inter font-semibold uppercase
            tracking-[-0.08em]
            text-[18px] leading-none
            text-white/95
        "
        >
        {title}
        </span>
    </a>
  )
}
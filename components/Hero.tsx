import Image from "next/image"
import { VIDEO_POSTER_URL } from "@/lib/media"

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-[10%] inset-0 h-[120%] w-full">
          <Image
            src={VIDEO_POSTER_URL}
            alt=""
            fill
            priority
            quality={72}
            sizes="100vw"
            className="h-full w-full scale-105 object-cover blur-[7px] opacity-70"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/72" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <div className="flex flex-col items-center">
          <h1 className="font-display font-semibold uppercase leading-[0.9] text-[clamp(2.8rem,11.8vw,9.2rem)]">
            DANIEL ACERO
          </h1>
          <p className="mt-4 font-inter font-semibold text-[clamp(0.94rem,2.8vw,1.3rem)] font-medium uppercase text-white/86 sm:mt-5">
            Filmmaker corporativo y videógrafo de eventos en Madrid
          </p>
          <p className="mt-4 max-w-3xl px-1 font-inter text-[13px] font-normal leading-[1.72] text-white/72 sm:mt-5 sm:text-[15px]">
            Transformo eventos empresariales, congresos y conferencias en piezas audiovisuales
            profesionales para marcas y empresas en Madrid.
          </p>
        </div>

        <div
          className="absolute bottom-[max(2rem,env(safe-area-inset-bottom)+1rem)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          aria-hidden
        >
          <span className="font-inter text-[10px] uppercase text-white/38">
            Scroll
          </span>
          <span className="h-10 w-px animate-pulse rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}

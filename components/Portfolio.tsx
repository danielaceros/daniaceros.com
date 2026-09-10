import SectionTitle from "./SectionTitle"
import PortfolioCard from "./PortfolioCard"
import PortfolioMarquee from "./PortfolioMarquee"
import ViewMoreOnTV from "./ViewMoreOnTV"
import { projects } from "@/data/projects"
import type { CSSProperties } from "react"

type Props = {
  openVideosInModal?: boolean
  projectSlugs?: string[]
  forceTwoColumns?: boolean
  sectionClassName?: string
  desktopSlideshow?: boolean
}

export default function Portfolio({
  openVideosInModal = false,
  projectSlugs,
  // forceTwoColumns ya no afecta a nada: solo se usaba para el ancho de la
  // grid estática que este componente sustituyó por PortfolioMarquee. Se
  // mantiene en Props para no romper a quien lo siga pasando (p.ej. /hablemos).
  sectionClassName,
  desktopSlideshow = false,
}: Props) {
  const selectedProjects = projectSlugs?.length
    ? projectSlugs
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is (typeof projects)[number] => Boolean(project))
    : projects

  return (
    <section data-lux className={`cinematic-reveal section-breathing ${sectionClassName ?? ""}`}>
      {/* El título (y, en el slideshow de /hablemos, las tiras de tarjetas)
          siguen dentro del contenedor centrado habitual de la página. La tira
          scrollable de abajo NO va aquí: necesita ser hija directa de esta
          section (sin max-width) para poder ocupar el ancho completo del
          viewport de verdad — ver comentario junto a PortfolioMarquee. */}
      <div className="page-container">
        <div className="cinematic-reveal-delay-1" style={{ "--lux-delay": "80ms" } as CSSProperties}>
          <SectionTitle>Portfolio</SectionTitle>
        </div>

        {desktopSlideshow && (
          <>
          <div data-lux style={{ "--lux-delay": "160ms" } as CSSProperties} className="lg:hidden">
            <div className="portfolio-slideshow-wrap overflow-hidden">
              <div className="portfolio-mobile-track">
                {[...selectedProjects, ...selectedProjects].map((project, i) => (
                  <div key={`${project.slug}-m-${i}`} className="portfolio-mobile-item shrink-0">
                    <PortfolioCard
                      title={project.title}
                      video={project.video}
                      poster={project.poster}
                      href={`/portfolio/${project.slug}`}
                      index={i}
                      openInModal={openVideosInModal}
                      hideOverlayTitle
                    />
                    <p className="mt-2 px-1 text-left font-display text-[13px] font-semibold uppercase leading-tight text-white/92">
                      {project.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-lux style={{ "--lux-delay": "160ms" } as CSSProperties} className="hidden lg:block">
            <div className="portfolio-slideshow-wrap overflow-hidden">
              <div className="portfolio-desktop-track">
                {[...selectedProjects, ...selectedProjects].map((project, i) => (
                  <div key={`${project.slug}-${i}`} className="w-[260px] shrink-0 xl:w-[295px]">
                    <PortfolioCard
                      title={project.title}
                      video={project.video}
                      poster={project.poster}
                      href={`/portfolio/${project.slug}`}
                      index={i}
                      openInModal={openVideosInModal}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            .portfolio-slideshow-wrap {
              position: relative;
              isolation: isolate;
            }

            .portfolio-slideshow-wrap::before,
            .portfolio-slideshow-wrap::after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              width: 44px;
              pointer-events: none;
              z-index: 2;
            }

            .portfolio-slideshow-wrap::before {
              left: 0;
              background: linear-gradient(to right, #0a0a0a, rgba(10, 10, 10, 0));
            }

            .portfolio-slideshow-wrap::after {
              right: 0;
              background: linear-gradient(to left, #0a0a0a, rgba(10, 10, 10, 0));
            }

            .portfolio-mobile-track {
              display: flex;
              width: max-content;
              gap: 0.5rem;
              animation: portfolio-mobile-slide 40s linear infinite;
              will-change: transform;
            }

            .portfolio-mobile-item {
              width: min(44vw, 190px);
            }

            .portfolio-desktop-track {
              display: flex;
              width: max-content;
              gap: 0.85rem;
              animation: portfolio-desktop-slide 55s linear infinite;
              will-change: transform;
            }

            @keyframes portfolio-mobile-slide {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            @keyframes portfolio-desktop-slide {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .portfolio-mobile-track,
              .portfolio-desktop-track {
                animation: none;
                transform: translate3d(0, 0, 0);
              }
            }

            @media (min-width: 1024px) {
              .portfolio-slideshow-wrap::before,
              .portfolio-slideshow-wrap::after {
                width: 72px;
              }
            }
          `}</style>
          </>
        )}
      </div>

      {/* Tira scrollable: hija directa de la section (sin page-container de
          por medio) para que ocupe el 100% del ancho real del viewport. Antes
          vivía dentro de .page-container (max-width 76rem) envuelta en un
          truco "relative left-1/2 w-screen -translate-x-1/2" para
          desbordarse a full-bleed — pero ese truco calcula el offset de
          `left` como % del ancho del contenedor PADRE (page-container), no
          del viewport, así que en desktop ancho (1440/1920/2560px, donde
          page-container ya está topado a 1216px) el offset se quedaba corto
          y la tira aparecía desplazada a la derecha con un hueco enorme a la
          izquierda. Al no estar ya anidada en page-container, no hace falta
          ningún truco: la section es full-width de por sí. */}
      {!desktopSlideshow && (
        <div data-lux style={{ "--lux-delay": "160ms" } as CSSProperties}>
          <PortfolioMarquee
            items={selectedProjects.map((project) => ({
              slug: project.slug,
              title: project.title,
              video: project.video,
              poster: project.poster,
            }))}
            size="sm"
            mode={openVideosInModal ? "modal" : "link"}
            basePath="/portfolio"
            scrollable
          />
        </div>
      )}

      <div className="page-container">
        {/* Solo en la grid completa (home) — el slideshow de /hablemos es una
            landing de conversión pura, sin distracciones hacia /tv. */}
        {!desktopSlideshow && <ViewMoreOnTV className="mt-8 sm:mt-10" />}
      </div>
    </section>
  )
}

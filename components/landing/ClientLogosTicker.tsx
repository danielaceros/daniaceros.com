// Tira de logos de clientes de las landings de anuncios, justo debajo del VSL y antes del CTA.
// "IFEMA, Cinesa y la Cámara de Comercio" vivía en una línea de texto entre bullets, que es el peor sitio
// para el mejor argumento de autoridad que tiene Dani.
//
// Sin JavaScript: la animación es CSS pura, así que no añade nada al bundle de una landing de pago.
// El track lleva la lista dos veces y se desplaza media anchura, de modo que el bucle no tiene salto.
//
// Cada logo ocupa un HUECO proporcional al viewport (45vw en móvil, 25vw en escritorio), no su ancho natural.
// Con anchos naturales, un pase completo de los cinco logos medía menos que una pantalla ancha y se veían las
// dos copias a la vez: la misma marca aparecía dos veces en pantalla. Cinco huecos de 25vw son 125vw, así que
// un pase siempre es más ancho que la pantalla y eso no puede pasar en ninguna resolución.
// Los logos van al 65% de opacidad: blancos a tope competirían con el CTA, que también lo es, pero por debajo
// de ahí quedan apagados y dejan de hacer el trabajo de autoridad que justifica ponerlos.

const LOGOS = [
  { src: "/logos/ifema.png", width: 128, height: 88 },
  { src: "/logos/cinesa.png", width: 320, height: 88 },
  { src: "/logos/camara-madrid.png", width: 269, height: 88 },
  // Grupo GO va más alto que el resto: su logo apila la G y la O a la izquierda de "GRUPO", y al alto normal
  // ese monograma se lee como un número en vez de como un logo. No está recortado, es el lockup original.
  { src: "/logos/grupo-go.png", width: 213, height: 88, className: "h-[33px] sm:h-[38px]" },
  { src: "/logos/ranking-online.png", width: 218, height: 88 },
] as const

export default function ClientLogosTicker({ className = "" }: { className?: string }) {
  // Dos pasadas de la misma lista: la segunda es la que hace que el bucle cierre sin costura.
  const track = [...LOGOS, ...LOGOS]

  return (
    <div className={`logo-ticker-mask overflow-hidden ${className}`} aria-hidden="true">
      <div className="logo-ticker-track flex w-max items-center">
        {track.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="flex w-[45vw] shrink-0 items-center justify-center sm:w-[25vw]"
          >
            <img
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
              // Alto fijo y ancho automático: las dimensiones explícitas del atributo reservan el hueco
              // desde el primer pintado, así que la tira no mueve nada al cargar (CLS sigue en 0).
              className={`max-w-[80%] w-auto opacity-65 ${"className" in logo ? logo.className : "h-[26px] sm:h-[30px]"}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

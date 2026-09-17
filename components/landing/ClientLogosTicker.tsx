// Tira de logos de clientes de las landings de anuncios, justo debajo del VSL y antes del CTA.
// "IFEMA, Cinesa y la Cámara de Comercio" vivía en una línea de texto entre bullets, que es el peor sitio
// para el mejor argumento de autoridad que tiene Dani.
//
// Sin JavaScript: la animación es CSS pura, así que no añade nada al bundle de una landing de pago.
// El track lleva la lista dos veces y se desplaza media anchura, de modo que el bucle no tiene salto.
// Los logos van al 55% de opacidad a propósito: son blancos, y a tope compiten con el CTA, que también lo es.

const LOGOS = [
  { src: "/logos/ifema.png", width: 128, height: 88 },
  { src: "/logos/cinesa.png", width: 320, height: 88 },
  { src: "/logos/camara-madrid.png", width: 269, height: 88 },
  { src: "/logos/grupo-go.png", width: 213, height: 88 },
  { src: "/logos/ranking-online.png", width: 218, height: 88 },
] as const

export default function ClientLogosTicker({ className = "" }: { className?: string }) {
  // Dos pasadas de la misma lista: la segunda es la que hace que el bucle cierre sin costura.
  const track = [...LOGOS, ...LOGOS]

  return (
    <div className={`logo-ticker-mask overflow-hidden ${className}`} aria-hidden="true">
      <div className="logo-ticker-track flex w-max items-center gap-10 sm:gap-14">
        {track.map((logo, index) => (
          <img
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt=""
            width={logo.width}
            height={logo.height}
            loading="lazy"
            decoding="async"
            // Alto fijo y ancho automático: las dimensiones explícitas del atributo reservan el hueco
            // desde el primer pintado, así que la tira no mueve nada al cargar (CLS sigue en 0).
            className="h-[26px] w-auto shrink-0 opacity-55 sm:h-[30px]"
          />
        ))}
      </div>
    </div>
  )
}

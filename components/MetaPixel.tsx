"use client"

// Píxel de Meta. En las landings de anuncios (/eventos/<slug>) carga antes que en el resto de la web.
//
// Con `lazyOnload` el script espera a que la ventana esté ociosa, y quien entra desde la app de Instagram y se
// va en el primer segundo y medio no llega a disparar PageView: Meta no cuenta esa visita. Se vio en los datos
// del primer día de anuncios, 9 clics en el enlace frente a 3 landing_page_view. La landing no es lenta (LCP
// ~1,5 s en 4G lenta con CPU x4), así que el problema no era que tardara en pintar, sino cuándo arranca el píxel.
//
// Fuera de las landings se mantiene `lazyOnload`: ahí no hay tráfico de pago que medir y el hilo principal ya
// va justo (ver las notas de rendimiento de la home).

import Script from "next/script"
import { usePathname } from "next/navigation"

export const META_PIXEL_ID = "1832152070803112"

export default function MetaPixel() {
  const pathname = usePathname()
  const isAdLanding = pathname?.includes("/eventos/") ?? false

  return (
    <Script id="meta-pixel" strategy={isAdLanding ? "afterInteractive" : "lazyOnload"}>
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src='https://connect.facebook.net/en_US/fbevents.js';
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  )
}

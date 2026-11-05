"use client"

// Minititulo sobre el VSL de la landing de expositores (/eventos/ifema): "¿Cómo puedo ayudar a <empresa> en
// <feria>?". Usa la personalización compartida (Personalize.tsx). Aquí lo personalizable va SIEMPRE resaltado, también
// en la versión genérica ("tu empresa"), para que el diseño no cambie según el caso.
import { Highlight, usePersonalization } from "@/components/landing/Personalize"

export default function LandingGreeting({ className }: { className?: string }) {
  const { empresa, feria } = usePersonalization()
  return (
    <h2 className={className}>
      ¿Cómo puedo ayudar a <Highlight>{empresa ?? "tu empresa"}</Highlight>
      {feria ? (
        <>
          {" "}
          en <Highlight>{feria}</Highlight>
        </>
      ) : null}
      ?
    </h2>
  )
}

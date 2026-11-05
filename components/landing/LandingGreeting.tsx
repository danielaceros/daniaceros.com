"use client"

// Minititulo sobre el VSL de la landing de expositores (/eventos/ifema): "¿Cómo puedo ayudar a <empresa> en
// <feria>?". Usa la personalización compartida (Personalize.tsx). La empresa va en negrita (también en la versión genérica,
// "tu empresa") y la feria subrayada.
import { Highlight, usePersonalization } from "@/components/landing/Personalize"

export default function LandingGreeting({ className }: { className?: string }) {
  const { empresa, feria } = usePersonalization()
  return (
    <h2 className={className}>
      ¿Cómo puedo ayudar a <Highlight kind="b">{empresa ?? "tu empresa"}</Highlight>
      {feria ? (
        <>
          {" "}
          en <Highlight kind="u">{feria}</Highlight>
        </>
      ) : null}
      ?
    </h2>
  )
}

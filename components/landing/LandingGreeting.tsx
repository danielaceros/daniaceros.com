"use client"

// Minititulo sobre el VSL de la landing de expositores (/eventos/ifema): "¿Cómo puedo ayudar a <empresa>?".
// Usa la personalización compartida (Personalize.tsx). Solo lleva la empresa (en negrita; "tu empresa" si falta el
// dato): la feria ya sale en el titular y en el primer punto de dolor, y repetirla aquí saturaba.
import { Highlight, usePersonalization } from "@/components/landing/Personalize"

export default function LandingGreeting({ className }: { className?: string }) {
  const { empresa } = usePersonalization()
  return (
    <h2 className={className}>
      ¿Cómo puedo ayudar a <Highlight kind="b">{empresa ?? "tu empresa"}</Highlight>?
    </h2>
  )
}

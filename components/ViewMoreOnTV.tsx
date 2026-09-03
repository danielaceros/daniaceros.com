// components/ViewMoreOnTV.tsx
// CTA compartido: enlaza al portfolio en formato Reels (/tv). Mismo estilo
// pill que el botón "Cuéntame tu proyecto" del header, para que se sienta
// nativo del sistema de diseño en cualquier sección donde aparezca.
import Link from "next/link"

type Props = { className?: string }

export default function ViewMoreOnTV({ className }: Props) {
  return (
    <div className={`flex justify-center ${className ?? ""}`}>
      <Link
        href="/tv"
        className="group relative inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-5 py-2.5 font-inter text-[11px] uppercase text-white/85 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Ver más, como en Instagram
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </Link>
    </div>
  )
}

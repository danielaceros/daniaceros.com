import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Gracias",
  description: "Gracias por tu solicitud. Te contactaré lo antes posible.",
  path: "/gracias",
  noIndex: true,
})

export default function GraciasPage() {
  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-4xl items-center justify-center px-4 py-8 text-white sm:px-6 sm:py-10">
      <section className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center shadow-[0_24px_70px_-38px_rgba(0,0,0,0.9)] sm:p-12">
        <p className="font-inter text-[12px] uppercase tracking-[0.22em] text-white/55">Solicitud enviada</p>
        <h1 className="mt-4 font-display text-[38px] font-semibold uppercase leading-[1.02] sm:text-[52px]">
          Gracias
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-inter text-[14px] leading-[1.7] text-white/72 sm:text-[16px]">
          He recibido tu mensaje correctamente. En breve te escribo por WhatsApp o email para
          hablar de tu proyecto y darte una propuesta.
        </p>
      </section>
    </main>
  )
}

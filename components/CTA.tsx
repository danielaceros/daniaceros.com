export default function CTA() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl border-t border-white/20 pt-8">
        <button className="w-full bg-white py-3 text-center font-inter text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-neutral-200">
          Cuéntame tu proyecto
        </button>

        <p className="mt-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} · @danielaceros
        </p>
      </div>
    </section>
  )
}
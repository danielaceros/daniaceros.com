export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="
        mb-8 font-inter font-semibold uppercase tracking-[-0.08em]
        text-[28px] sm:text-[32px] lg:text-[40px]
      "
    >
      {children}
    </h2>
  )
}
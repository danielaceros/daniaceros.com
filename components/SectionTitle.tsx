type Props = { children: React.ReactNode }

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="mb-8 font-display text-[26px] font-semibold uppercase leading-[1.02] sm:mb-10 sm:text-[34px] lg:text-[42px]">
      {children}
      <span className="mt-3 block h-px w-12 origin-left bg-white/35" />
    </h2>
  )
}

import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import ContactCTA from "@/components/ContactCTA"

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <Portfolio />
      <About />
      <ContactCTA />
    </main>
  )
}
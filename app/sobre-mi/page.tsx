"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ContactCTA from "@/components/ContactCTA"
import { ease, stagger, viewport } from "@/lib/motion"

const portraitUrl =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/0a4bxjgj0xSqIihE9ktHzjeng%20(2).png?alt=media&token=ead483f1-9cd5-4169-9e3d-810307334885"

const diferenciadores = [
  {
    title: "Visión Estratégica",
    text: "Cada proyecto es un desafío y una oportunidad para ofrecer soluciones únicas, creativas y profundas.",
  },
  {
    title: "Narrativa Emocional",
    text: "Combino la estética visual con historias que resuenan en un nivel más profundo, generando una conexión auténtica con la audiencia.",
  },
  {
    title: "Experiencia y Eficiencia",
    text: "Trabajo de forma ágil, integrada y adaptada a cada proyecto, garantizando resultados sobresalientes sin comprometer la calidad.",
  },
  {
    title: "Colaboración",
    text: "Construyo relaciones sólidas con mis clientes, trabajando juntos para hacer realidad su visión, entendiendo sus metas y necesidades específicas.",
  },
]

const experienciaSectores = [
  "Sector público (ministerios y ayuntamientos)",
  "Grandes corporaciones (telecomunicaciones y banca)",
  "Empresas de nueva creación y startups",
  "Agencias de marketing y publicidad",
  "Productoras audiovisuales y multimedia",
]

export default function SobreMiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ease.expo }}
          className="mb-14"
        >
          <p className="font-inter text-[11px] uppercase text-white/40 mb-2">
            sobre mí
          </p>
          <h1 className="font-inter font-semibold uppercase  text-[28px] leading-[1.05] sm:text-[36px] lg:text-[48px]">
            Sobre mí
          </h1>
        </motion.header>

        <div className="space-y-14 font-inter">
          {/* Intro + retrato */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: stagger.normal, delayChildren: 0.1 },
              },
            }}
            className="grid gap-10 lg:grid-cols-[1fr,minmax(280px,340px)] lg:gap-12 lg:items-start"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.expo } },
              }}
              className="space-y-6"
            >
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
                Soy Daniel Acero, Filmmaker y comunicador audiovisual con más de 10 años de
                experiencia creando contenido de valor para marcas. Desde pequeño he sentido una
                fascinación especial por el arte visual y la forma en que la imagen puede transmitir
                emociones y contar historias. Esto me ha llevado a explorar el mundo de la
                comunicación, desde la creación de piezas audiovisuales hasta la dirección de
                fotografía. Hoy, mi enfoque principal es ayudar a empresas y profesionales a
                conectar con sus audiencias a través de narrativas visuales potentes y auténticas.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: ease.expo } },
              }}
              className="relative aspect-[3/4] max-h-[480px] w-full overflow-hidden rounded-xl bg-white/5 lg:max-h-none"
            >
              <Image
                src={portraitUrl}
                alt="Daniel Acero, Filmmaker"
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-cover object-top"
              />
            </motion.div>
          </motion.section>

          {/* Mi enfoque */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Mi enfoque como Filmmaker corporativo
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Mi enfoque se centra en comprender a fondo la esencia de cada marca y transformarla
              en una pieza audiovisual que resuene con las personas. Creo en el poder de la
              autenticidad y la narrativa emotiva para construir conexiones duraderas y generar un
              impacto real. Cada proyecto es una oportunidad para explorar nuevas ideas, fusionar
              creatividad y estrategia, y superar las expectativas de mis clientes, siempre con un
              compromiso inquebrantable con la excelencia y la innovación.
            </p>
          </motion.section>

          {/* Qué me diferencia */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-6"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Qué me diferencia
            </h2>
            <ul className="space-y-5">
              {diferenciadores.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <div>
                    <span className="font-medium text-white/95">{item.title}:</span>{" "}
                    <span className="text-[13px] sm:text-[14px] leading-[1.7] text-white/85">
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Experiencia */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Experiencia con empresas e instituciones
            </h2>
            <ul className="space-y-2 text-[13px] sm:text-[14px] leading-[1.65] text-white/85 list-disc list-inside pl-2">
              {experienciaSectores.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>

          {/* Mi filosofía */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Mi filosofía
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Mi filosofía se basa en tres pilares fundamentales: pasión, propósito y perfección.
              Creo que cada proyecto, por pequeño o grande que sea, merece ser tratado con el mismo
              nivel de dedicación, innovación y rigor. Busco la excelencia en cada detalle, desde la
              preproducción hasta la postproducción, para garantizar un resultado final que no solo
              cumpla, sino que supere las expectativas de mis clientes y sus audiencias.
            </p>
          </motion.section>

          {/* Dónde trabajo */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: ease.expo }}
            className="space-y-4"
          >
            <h2 className="font-inter text-[14px] sm:text-[15px] font-semibold uppercase  text-white">
              Dónde trabajo
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.75] text-white/85">
              Trabajo en Madrid, pero con una cartera de clientes que se extiende por toda España.
              Aunque mi base de operaciones está en la capital, mi capacidad de adaptación y mi red
              de colaboradores me permiten llevar a cabo proyectos en cualquier lugar, garantizando
              la misma calidad y compromiso, sin importar la ubicación geográfica de mis clientes.
            </p>
          </motion.section>

        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

// app/[lang]/sobre-mi/content.ts
// Textos de /sobre-mi por idioma. El ES es copia literal del original (no tocar).
import type { Lang } from "@/lib/i18n/config"

const es = {
  metaTitle: "Sobre mí",
  metaDescription:
    "Conoce a Daniel Acero, filmmaker corporativo especializado en vídeo para empresas, eventos e instituciones.",
  keywords: ["sobre daniel acero", "filmmaker madrid", "videografo corporativo"],
  breadcrumb: "Sobre mí",
  jobTitle: "Filmmaker corporativo",
  kicker: "sobre mí",
  title: "Sobre mí",
  intro:
    "Soy Daniel Acero, Filmmaker y comunicador audiovisual con más de seis años de experiencia creando contenido de valor para marcas. Desde pequeño he sentido una fascinación especial por el arte visual y la forma en que la imagen puede transmitir emociones y contar historias. Esto me ha llevado a explorar el mundo de la comunicación, desde la creación de piezas audiovisuales hasta la dirección de fotografía. Hoy, mi enfoque principal es ayudar a empresas y profesionales a conectar con sus audiencias a través de narrativas visuales potentes y auténticas.",
  portraitAlt: "Daniel Acero, Filmmaker",
  approachTitle: "Mi enfoque como Filmmaker corporativo",
  approachText:
    "Mi enfoque se centra en comprender a fondo la esencia de cada marca y transformarla en una pieza audiovisual que resuene con las personas. Creo en el poder de la autenticidad y la narrativa emotiva para construir conexiones duraderas y generar un impacto real. Cada proyecto es una oportunidad para explorar nuevas ideas, fusionar creatividad y estrategia, y superar las expectativas de mis clientes, siempre con un compromiso inquebrantable con la excelencia y la innovación.",
  differentiatorsTitle: "Qué me diferencia",
  differentiators: [
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
  ],
  experienceTitle: "Experiencia con empresas e instituciones",
  experienceSectors: [
    "Sector público (ministerios y ayuntamientos)",
    "Grandes corporaciones (telecomunicaciones y banca)",
    "Empresas de nueva creación y startups",
    "Agencias de marketing y publicidad",
    "Productoras audiovisuales y multimedia",
  ],
  philosophyTitle: "Mi filosofía",
  philosophyText:
    "Mi filosofía se basa en tres pilares fundamentales: pasión, propósito y perfección. Creo que cada proyecto, por pequeño o grande que sea, merece ser tratado con el mismo nivel de dedicación, innovación y rigor. Busco la excelencia en cada detalle, desde la preproducción hasta la postproducción, para garantizar un resultado final que no solo cumpla, sino que supere las expectativas de mis clientes y sus audiencias.",
  whereTitle: "Dónde trabajo",
  whereText:
    "Trabajo en Madrid, pero con una cartera de clientes que se extiende por toda España. Aunque mi base de operaciones está en la capital, mi capacidad de adaptación y mi red de colaboradores me permiten llevar a cabo proyectos en cualquier lugar, garantizando la misma calidad y compromiso, sin importar la ubicación geográfica de mis clientes.",
}

const en: typeof es = {
  metaTitle: "About me",
  metaDescription:
    "Meet Daniel Acero, a corporate filmmaker specializing in video for companies, events and institutions.",
  keywords: ["about daniel acero", "filmmaker madrid", "corporate videographer"],
  breadcrumb: "About me",
  jobTitle: "Corporate filmmaker",
  kicker: "about me",
  title: "About me",
  intro:
    "I'm Daniel Acero, a filmmaker and visual storyteller with more than six years of experience creating valuable content for brands. Ever since I was a kid, I've been fascinated by visual art and the way images can convey emotions and tell stories. That led me to explore the world of communication, from producing films to working as a director of photography. Today, my main focus is helping companies and professionals connect with their audiences through powerful, authentic visual storytelling.",
  portraitAlt: "Daniel Acero, Filmmaker",
  approachTitle: "My approach as a corporate filmmaker",
  approachText:
    "My approach is all about truly understanding the essence of each brand and turning it into a film that resonates with people. I believe in the power of authenticity and emotional storytelling to build lasting connections and make a real impact. Every project is a chance to explore new ideas, blend creativity with strategy and exceed my clients' expectations, always with an unwavering commitment to excellence and innovation.",
  differentiatorsTitle: "What sets me apart",
  differentiators: [
    {
      title: "Strategic Vision",
      text: "Every project is a challenge and an opportunity to deliver unique, creative and meaningful solutions.",
    },
    {
      title: "Emotional Storytelling",
      text: "I combine visual aesthetics with stories that resonate on a deeper level, creating an authentic connection with the audience.",
    },
    {
      title: "Experience and Efficiency",
      text: "I work in an agile, integrated way that adapts to each project, delivering outstanding results without compromising on quality.",
    },
    {
      title: "Collaboration",
      text: "I build strong relationships with my clients, working together to bring their vision to life and understanding their specific goals and needs.",
    },
  ],
  experienceTitle: "Experience with companies and institutions",
  experienceSectors: [
    "Public sector (government ministries and city councils)",
    "Large corporations (telecommunications and banking)",
    "New businesses and startups",
    "Marketing and advertising agencies",
    "Video and multimedia production companies",
  ],
  philosophyTitle: "My philosophy",
  philosophyText:
    "My philosophy rests on three core pillars: passion, purpose and perfection. I believe every project, big or small, deserves the same level of dedication, innovation and rigor. I strive for excellence in every detail, from pre-production to post-production, to deliver a final result that doesn't just meet but exceeds the expectations of my clients and their audiences.",
  whereTitle: "Where I work",
  whereText:
    "I'm based in Madrid, but my client base extends across Spain. Although my home base is in the capital, my adaptability and my network of collaborators allow me to take on projects anywhere, with the same quality and commitment regardless of where my clients are located.",
}

export const content: Record<Lang, typeof es> = { es, en }

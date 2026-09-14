// Textos de /servicios por idioma. El ES es copia literal de la página original (no tocar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Servicios de vídeo para empresas y marcas",
  metaDescription:
    "Servicios de vídeo corporativo e institucional en Madrid: grabación, edición y piezas para web, redes y comunicación empresarial.",
  keywords: ["servicios de video madrid", "video corporativo", "video institucional"],
  breadcrumb: "Servicios",
  kicker: "servicios",
  title: "Servicios de vídeo para empresas, eventos y marcas en Madrid",
  intro: [
    "Soy Daniel Acero, filmmaker y videógrafo especializado en convertir eventos corporativos, congresos y experiencias de marca en piezas audiovisuales que comunican con impacto.",
    "Trabajo con empresas y marcas que buscan contenido audiovisual profesional, emocional y alineado con su identidad.",
  ],
  specialtiesLabel: "especialidades",
  specialties: [
    {
      href: "/servicios/corporativo",
      label: "Vídeo corporativo",
      description: "— piezas para empresas, marcas y lanzamientos.",
    },
    {
      href: "/servicios/institucional",
      label: "Vídeo institucional",
      description: "— contenido para organizaciones, instituciones y entidades.",
    },
  ],
  locationTitle: "Trabajo en Madrid y en toda España",
  locationText:
    "Aunque estoy basado en Madrid, viajo para cubrir proyectos en toda España. He trabajado con compañías y proyectos para marcas nacionales e internacionales.",
  imageAlt: "Rodaje de vídeo para empresa",
  forWhomLabel: "para quién trabajo",
  forWhomText:
    "Empresas, agencias, instituciones, productoras y marcas que quieren comunicar con un lenguaje visual cuidado y contemporáneo.",
  formatLabel: "formato",
  formatText:
    "Piezas para web, redes sociales, campañas de pago, presentaciones internas y documentación de eventos corporativos.",
  ctaTitle: "¿Hablamos de tu proyecto?",
  ctaText:
    "Cuéntame qué tipo de vídeo estás pensando (corporativo, institucional o evento) y qué objetivo te gustaría conseguir. Te propongo una forma de abordarlo y un plan claro de producción y entrega.",
  ctaLinks: [
    { href: "/servicios/corporativo", label: "Servicios de vídeo corporativo" },
    { href: "/servicios/institucional", label: "Servicios de vídeo institucional" },
  ],
}

const en: typeof es = {
  metaTitle: "Video Production Services for Companies and Brands in Madrid",
  metaDescription:
    "Corporate video production services in Madrid for companies and institutions: filming, editing and content for websites, social media and business communications.",
  keywords: [
    "video production services madrid",
    "corporate video production madrid",
    "corporate video for institutions",
    "corporate filmmaker madrid",
  ],
  breadcrumb: "Services",
  kicker: "services",
  title: "Video production services for companies, events and brands in Madrid",
  intro: [
    "I'm Daniel Acero, a filmmaker and videographer who specializes in turning corporate events, conferences and brand experiences into films that communicate with impact.",
    "I work with companies and brands looking for professional, emotionally engaging video content that stays true to their identity.",
  ],
  specialtiesLabel: "specialties",
  specialties: [
    {
      href: "/servicios/corporativo",
      label: "Corporate video",
      description: "— films for companies, brands and launches.",
    },
    {
      href: "/servicios/institucional",
      label: "Corporate video for institutions",
      description: "— content for organizations, institutions and public bodies.",
    },
  ],
  locationTitle: "Based in Madrid, working across Spain",
  locationText:
    "Although I'm based in Madrid, I travel to cover projects all over Spain. I've worked with companies and on projects for Spanish and international brands.",
  imageAlt: "Corporate video shoot",
  forWhomLabel: "who I work with",
  forWhomText:
    "Companies, agencies, institutions, production companies and brands that want to communicate with a refined, contemporary visual language.",
  formatLabel: "formats",
  formatText:
    "Videos for websites, social media, paid campaigns, internal presentations and corporate event coverage.",
  ctaTitle: "Shall we talk about your project?",
  ctaText:
    "Tell me what kind of video you have in mind (corporate, for an institution or for an event) and what you'd like to achieve. I'll suggest an approach and a clear production and delivery plan.",
  ctaLinks: [
    { href: "/servicios/corporativo", label: "Corporate video services" },
    { href: "/servicios/institucional", label: "Corporate video for institutions" },
  ],
}

export const content: Record<Lang, typeof es> = { es, en }

// app/[lang]/clientes/content.ts
// Textos de /clientes por idioma. El ES es copia literal del original (no tocar).
import type { Lang } from "@/lib/i18n/config"

const es = {
  metaTitle: "Clientes",
  metaDescription:
    "Clientes y proyectos audiovisuales para empresas, instituciones, agencias y marcas en Madrid y toda España.",
  keywords: ["clientes filmmaker", "video corporativo clientes", "casos audiovisuales"],
  title: "Clientes",
  sectorsTitle: "He trabajado con empresas de diferentes sectores",
  sectors: [
    "Instituciones públicas",
    "Grandes Corporaciones",
    "Startups",
    "Agencias de Marketing y Publicidad",
    "Productoras de Video",
    "Marcas de lujo",
    "ONGs",
    "Pymes",
  ],
  projectTypesTitle: "Tipos de proyectos realizados",
  projectTypes: [
    "Video Corporativo",
    "Video para redes sociales",
    "Video eventos",
    "Testimoniales",
    "Video animacion",
    "Entrevistas",
    "Spots Publicitarios",
    "Documentales",
  ],
  trustTitle: "Por qué confían en mí",
  trust: [
    "Experiencia contrastada en proyectos corporativos e institucionales.",
    "Comunicación clara y plazos de entrega respetados.",
    "Enfoque en el mensaje y en los objetivos de cada cliente.",
    "Flexibilidad para adaptarme a equipos y presupuestos.",
  ],
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      q: "¿Dónde trabajas?",
      a: "Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere.",
    },
    {
      q: "¿Necesito un filmmaker en Madrid para tu evento o proyecto?",
      a: "No es obligatorio estar en Madrid. Trabajo en Madrid, en otras ciudades y en ubicaciones que tú indiques. Lo importante es encajar en fechas y alcance del proyecto.",
    },
    {
      q: "Vídeo de eventos corporativos en Madrid",
      a: "Ofrezco cobertura de eventos corporativos en Madrid y alrededores: congresos, lanzamientos, convenciones, team buildings y experiencias. Incluyo grabación, edición y entregas en los formatos que necesites.",
    },
    {
      q: "Qué incluyo en la cobertura de tu evento",
      a: "Grabación en multicámara cuando hace falta, sonido directo, edición del vídeo principal y, si se acuerda, versiones para redes sociales. Todo se detalla en la propuesta según el tipo de evento.",
    },
    {
      q: "Tipos de eventos que cubro",
      a: "Congresos y jornadas, lanzamientos de producto, convenciones comerciales, eventos de equipo, presentaciones institucionales, inauguraciones y experiencias de marca.",
    },
    {
      q: "¿Por qué un vídeo profesional marca la diferencia?",
      a: "Un vídeo profesional transmite seriedad y calidad, mejora el recuerdo de tu mensaje y te da material reutilizable para web, redes y campañas. Invertir en buen contenido suele rentabilizarse en imagen y alcance.",
    },
    {
      q: "Métricas de grabación",
      a: "Trabajo en 4K cuando el proyecto lo pide y en Full HD como estándar. Formatos y duraciones se acuerdan en la propuesta según el uso final (web, redes, sala, etc.).",
    },
    {
      q: "Clientes para los que trabajo",
      a: "Empresas de todos los tamaños, instituciones públicas, ONGs, agencias, productoras y marcas que necesitan vídeo corporativo, de eventos o para redes. Si tienes un proyecto en mente, cuéntamelo.",
    },
    {
      q: "Entregables y material",
      a: "Entrego los vídeos acordados (normalmente MP4 listo para web y redes), versiones cortas si se ha pactado, y el material en bruto solo si se incluye en el presupuesto.",
    },
  ],
}

const en: typeof es = {
  metaTitle: "Clients",
  metaDescription:
    "Clients and video projects for companies, institutions, agencies and brands in Madrid and across Spain.",
  keywords: ["filmmaker clients", "corporate video clients", "video production case studies"],
  title: "Clients",
  sectorsTitle: "I've worked with companies across different sectors",
  sectors: [
    "Public institutions",
    "Large Corporations",
    "Startups",
    "Marketing and Advertising Agencies",
    "Video Production Companies",
    "Luxury brands",
    "NGOs",
    "SMEs",
  ],
  projectTypesTitle: "Types of projects delivered",
  projectTypes: [
    "Corporate Video",
    "Social media video",
    "Event video",
    "Testimonials",
    "Animated video",
    "Interviews",
    "Commercials",
    "Documentaries",
  ],
  trustTitle: "Why clients trust me",
  trust: [
    "Proven experience in corporate and institutional projects.",
    "Clear communication and delivery deadlines that are met.",
    "A focus on each client's message and goals.",
    "Flexibility to adapt to different teams and budgets.",
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    {
      q: "Where do you work?",
      a: "I'm based in Madrid and travel all over Spain for shoots and event coverage whenever the project requires it.",
    },
    {
      q: "Do I need a Madrid-based filmmaker for my event or project?",
      a: "It doesn't have to be in Madrid. I work in Madrid, in other cities and at whatever locations you choose. What matters is that the dates and scope of the project are a fit.",
    },
    {
      q: "Corporate event video in Madrid",
      a: "I cover corporate events in and around Madrid: conventions, product launches, sales conferences, team-building days and brand experiences. Filming, editing and delivery in whatever formats you need are all included.",
    },
    {
      q: "What's included in your event coverage",
      a: "Multi-camera filming when needed, on-location sound, editing of the main video and, if agreed, cut-downs for social media. Everything is detailed in the proposal based on the type of event.",
    },
    {
      q: "Types of events I cover",
      a: "Conventions and conferences, product launches, sales conferences, team events, institutional presentations, openings and brand experiences.",
    },
    {
      q: "Why does a professional video make a difference?",
      a: "A professional video conveys credibility and quality, makes your message more memorable and gives you reusable assets for your website, social media and campaigns. Investing in good content usually pays off in brand image and reach.",
    },
    {
      q: "Filming specs",
      a: "I shoot in 4K when the project calls for it and in Full HD as standard. Formats and running times are agreed in the proposal based on the final use (web, social media, venue screens, etc.).",
    },
    {
      q: "Clients I work with",
      a: "Companies of all sizes, public institutions, NGOs, agencies, production companies and brands that need corporate, event or social media video. If you have a project in mind, tell me about it.",
    },
    {
      q: "Deliverables and footage",
      a: "I deliver the agreed videos (usually MP4 files ready for web and social media), short versions if agreed, and raw footage only if it's included in the quote.",
    },
  ],
}

export const content: Record<Lang, typeof es> = { es, en }

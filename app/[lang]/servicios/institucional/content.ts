// Textos de /servicios/institucional (y su alias /servicios/instituciones) por idioma.
// El ES es copia literal de la página original (no tocar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Servicio de vídeo institucional",
  metaDescription:
    "Vídeo institucional y cobertura audiovisual para entidades, organizaciones e instituciones en Madrid y toda España.",
  keywords: ["video institucional madrid", "cobertura audiovisual institucional", "filmmaker para entidades"],
  kicker: "servicios · vídeo institucional",
  title: "Vídeo institucional y cobertura audiovisual para organizaciones y entidades",
  intro:
    "Ayudo a instituciones, organizaciones y entidades a comunicar su labor con imágenes: vídeos institucionales, actos oficiales, jornadas, congresos y proyectos de impacto social.",
  servicesTitle: "Qué puedo hacer por tu institución",
  services: [
    "· Vídeos institucionales para web y memorias anuales.",
    "· Cobertura audiovisual de jornadas, congresos y eventos.",
    "· Piezas breves para redes sociales y campañas.",
    "· Contenido documental para proyectos y programas específicos.",
  ],
  styleTitle: "Estilo y enfoque",
  styleText:
    "Busco un equilibrio entre cercanía y formalidad: imagen cuidada, respeto por el contexto institucional y una narrativa clara que ponga en valor el trabajo de tu organización.",
  processTitle: "Proceso de trabajo",
  process: [
    "1. Definición de mensajes clave y públicos.",
    "2. Planificación de rodaje y logística con tu equipo.",
    "3. Grabación discreta, respetando protocolo y tiempos.",
    "4. Edición y entregas adaptadas a los canales donde se va a difundir.",
  ],
  organizationsTitle: "organizaciones con las que trabajo",
  organizationsText:
    "Cámaras de comercio, federaciones, asociaciones, instituciones educativas, administraciones y entidades del tercer sector.",
  deliverablesTitle: "entregas habituales",
  deliverablesText:
    "Vídeo principal para web o presentación, clips adaptados a redes, y versiones más técnicas para memoria anual o informes internos.",
  ctaTitle: "¿Tu institución necesita comunicar con claridad y profesionalidad?",
  ctaText:
    "Cuéntame qué tipo de acto, proyecto o iniciativa quieres documentar o explicar. Te propongo un enfoque que encaje con el tono de tu organización y el público al que te diriges.",
}

const en: typeof es = {
  metaTitle: "Corporate Video for Institutions and Organizations in Madrid",
  metaDescription:
    "Corporate video and event coverage for organizations, public bodies and institutions in Madrid and across Spain.",
  keywords: [
    "corporate video for institutions",
    "corporate video madrid",
    "event coverage for institutions",
    "filmmaker for organizations",
  ],
  kicker: "services · corporate video for institutions",
  title: "Corporate video and event coverage for organizations and public bodies",
  intro:
    "I help institutions, organizations and public bodies communicate their work through images: corporate videos, official ceremonies, conferences, congresses and social impact projects.",
  servicesTitle: "What I can do for your institution",
  services: [
    "· Corporate videos for websites and annual reports.",
    "· Video coverage of conferences, congresses and events.",
    "· Short videos for social media and campaigns.",
    "· Documentary content for specific projects and programs.",
  ],
  styleTitle: "Style and approach",
  styleText:
    "I strike a balance between approachability and formality: polished visuals, respect for the institutional context and a clear narrative that highlights your organization's work.",
  processTitle: "How I work",
  process: [
    "1. Defining key messages and audiences.",
    "2. Planning the shoot and logistics with your team.",
    "3. Discreet filming that respects protocol and schedules.",
    "4. Editing and deliverables tailored to the channels where the video will be shared.",
  ],
  organizationsTitle: "organizations I work with",
  organizationsText:
    "Chambers of commerce, federations, associations, educational institutions, public administrations and non-profit organizations.",
  deliverablesTitle: "typical deliverables",
  deliverablesText:
    "A main video for your website or presentations, clips adapted for social media, and more detailed versions for annual reports or internal documents.",
  ctaTitle: "Does your institution need to communicate clearly and professionally?",
  ctaText:
    "Tell me what kind of event, project or initiative you want to document or explain. I'll suggest an approach that fits your organization's tone and the audience you're speaking to.",
}

export const content: Record<Lang, typeof es> = { es, en }

// Textos de /proceso por idioma. El ES es literal del original (no cambiar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Proceso de trabajo",
  metaDescription:
    "Conoce el proceso de trabajo de Daniel Acero: briefing, producción, edición y entrega final para proyectos audiovisuales corporativos.",
  keywords: ["proceso de video corporativo", "como trabaja un filmmaker", "produccion audiovisual empresas"],
  kicker: "proceso",
  title: "Cómo trabajo",
  steps: [
    {
      title: "Reunión inicial y briefing",
      items: [
        "Definición de objetivos",
        "Público objetivo",
        "Mensaje clave",
        "Estilo visual y tono",
        "Plazos y presupuesto",
        "Referencias",
      ],
    },
    {
      title: "Propuesta y planificación",
      items: [
        "Concepto creativo",
        "Guion y storyboard",
        "Localizaciones y permisos",
        "Equipo técnico y artístico",
        "Calendario de producción",
        "Presupuesto detallado",
      ],
    },
    {
      title: "Grabación del proyecto",
      items: ["Preproducción", "Rodaje", "Dirección de arte", "Sonido directo"],
    },
    {
      title: "Edición y narrativa",
      items: [
        "Montaje",
        "Corrección de color",
        "Diseño sonoro y mezcla",
        "VFX (efectos visuales)",
        "Música original o licencias",
        "Grafismos y animaciones",
      ],
    },
    {
      title: "Revisión y ajustes",
      items: [
        "Revisión contigo del primer corte",
        "Hasta dos rondas de modificaciones incluidas para afinar el resultado",
      ],
    },
    {
      title: "Entrega final",
      items: [
        "Versiones finales en los formatos acordados (web, redes, presentación)",
        "Transferencia segura de archivos y copia de respaldo",
      ],
    },
    {
      title: "Soporte y continuidad",
      items: [
        "Soporte post-entrega para dudas o pequeños retoques",
        "Posibilidad de seguir colaborando en futuros proyectos",
      ],
    },
  ],
  whyTitle: "¿Por qué trabajar conmigo?",
  whyText:
    "Trabajo de forma clara y ordenada: desde el primer contacto definimos objetivos, plazos y entregas. Así evitas sorpresas y el resultado se alinea con lo que buscas. Además, al ser yo quien dirige y edita, la visión del proyecto se mantiene coherente de principio a fin.",
}

const en: typeof es = {
  metaTitle: "Work process",
  metaDescription:
    "Discover Daniel Acero's work process: briefing, production, editing and final delivery for corporate video projects.",
  keywords: ["corporate video process", "how a filmmaker works", "video production for companies"],
  kicker: "process",
  title: "How I work",
  steps: [
    {
      title: "Kick-off meeting and briefing",
      items: [
        "Defining objectives",
        "Target audience",
        "Key message",
        "Visual style and tone",
        "Timeline and budget",
        "References",
      ],
    },
    {
      title: "Proposal and planning",
      items: [
        "Creative concept",
        "Script and storyboard",
        "Locations and permits",
        "Technical and creative crew",
        "Production schedule",
        "Detailed budget",
      ],
    },
    {
      title: "Filming the project",
      items: ["Pre-production", "Shoot", "Art direction", "Location sound"],
    },
    {
      title: "Editing and storytelling",
      items: [
        "Editing",
        "Color grading",
        "Sound design and mixing",
        "VFX (visual effects)",
        "Original or licensed music",
        "Graphics and animations",
      ],
    },
    {
      title: "Review and revisions",
      items: [
        "Reviewing the first cut together",
        "Up to two rounds of revisions included to fine-tune the result",
      ],
    },
    {
      title: "Final delivery",
      items: [
        "Final versions in the agreed formats (web, social media, presentations)",
        "Secure file transfer and backup copy",
      ],
    },
    {
      title: "Support and continuity",
      items: [
        "Post-delivery support for questions or small tweaks",
        "The option to keep working together on future projects",
      ],
    },
  ],
  whyTitle: "Why work with me?",
  whyText:
    "I work in a clear, organized way: from the very first contact we define objectives, timelines and deliverables. That way there are no surprises and the result matches what you're looking for. And because I'm the one directing and editing, the vision for the project stays consistent from start to finish.",
}

export const content: Record<Lang, typeof es> = { es, en }

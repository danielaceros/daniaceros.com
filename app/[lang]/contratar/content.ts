// Textos de /contratar por idioma. El ES es literal del original (no cambiar).
import type { Lang } from "@/lib/i18n"

const es = {
  metaTitle: "Contratar servicio audiovisual",
  metaDescription:
    "Guía para contratar un proyecto audiovisual: qué información enviar, cómo funciona el proceso y pasos para empezar.",
  keywords: ["contratar filmmaker madrid", "contratar videografo", "proyecto audiovisual empresas"],
  kicker: "contratar",
  title: "Empecemos tu proyecto",
  budgetTitle: "¿Qué necesito saber antes de preparar tu presupuesto?",
  budgetIntro: "Para darte una propuesta clara y útil, me ayuda tener en cuenta lo siguiente:",
  budgetItems: [
    "Tu propuesta — qué tipo de vídeo o evento tienes en mente",
    "Tu objetivo — qué quieres conseguir con el contenido",
    "Tu público — a quién va dirigido",
    "Tus medios — dónde lo vas a publicar o usar (web, redes, presentaciones)",
    "Tu presupuesto — rango aproximado si lo tienes definido",
    "Tu fecha — cuándo necesitas el material o cuándo es el evento",
    "Tu formato — duración aproximada, estilo (corporativo, dinámico, documental)",
    "Tus referencias — vídeos o estilos que te gusten",
    "Tu equipo — si ya tienes equipo de comunicación o es solo contigo",
  ],
  processTitle: "¿Cómo funciona el proceso después de que me escribas?",
  processSteps: [
    "Primer contacto — me cuentas tu proyecto por WhatsApp o email",
    "Propuesta — te envío un enfoque creativo y presupuesto detallado",
    "Aceptación — revisamos juntos y confirmas si encaja",
    "Contrato — cerramos alcance, plazos y condiciones",
    "Pago — acordamos forma de pago (anticipo y resto a la entrega)",
    "Preproducción — planificación, guion y logística",
    "Rodaje — grabación según lo planificado",
    "Postproducción — edición, color y versiones",
    "Entrega final — te envío los archivos y quedamos para cualquier ajuste",
  ],
  whyTitle: "¿Por qué trabajar conmigo?",
  whyText:
    "Trabajo de forma directa y transparente: desde el primer mensaje te digo si tu proyecto encaja y cómo lo abordaría. No hay intermediarios: tú hablas conmigo, yo dirijo y edito, y el resultado mantiene una visión coherente de principio a fin. Además, priorizo plazos realistas y entregas que realmente uses (web, redes, presentaciones), sin añadir complejidad innecesaria.",
}

const en: typeof es = {
  metaTitle: "Hire video production services",
  metaDescription:
    "A guide to hiring a video production project: what information to send, how the process works and the steps to get started.",
  keywords: ["hire filmmaker madrid", "hire videographer", "video production for companies"],
  kicker: "hire",
  title: "Let's get your project started",
  budgetTitle: "What do I need to know before preparing your quote?",
  budgetIntro: "To give you a clear, useful proposal, it helps me to know the following:",
  budgetItems: [
    "Your idea — what kind of video or event you have in mind",
    "Your goal — what you want to achieve with the content",
    "Your audience — who it's aimed at",
    "Your channels — where you'll publish or use it (website, social media, presentations)",
    "Your budget — an approximate range, if you have one in mind",
    "Your date — when you need the footage or when the event takes place",
    "Your format — approximate length and style (corporate, dynamic, documentary)",
    "Your references — videos or styles you like",
    "Your team — whether you already have a communications team or it's just you",
  ],
  processTitle: "How does the process work once you get in touch?",
  processSteps: [
    "First contact — you tell me about your project on WhatsApp or by email",
    "Proposal — I send you a creative approach and a detailed quote",
    "Approval — we review it together and you confirm whether it's a fit",
    "Contract — we agree on scope, timeline and terms",
    "Payment — we agree on the payment terms (deposit up front and the balance on delivery)",
    "Pre-production — planning, script and logistics",
    "Shoot — filming as planned",
    "Post-production — editing, color and versions",
    "Final delivery — I send you the files and I'm on hand for any adjustments",
  ],
  whyTitle: "Why work with me?",
  whyText:
    "I work in a direct, transparent way: from your very first message I'll tell you whether your project is a fit and how I'd approach it. There are no middlemen: you talk to me, I direct and edit, and the result keeps a consistent vision from start to finish. I also prioritize realistic timelines and deliverables you'll actually use (website, social media, presentations), without adding unnecessary complexity.",
}

export const content: Record<Lang, typeof es> = { es, en }

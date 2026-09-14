// lib/i18n/en.ts
// English dictionary. Typed as `Dictionary` (inferred from es.ts): a missing
// or extra key is a TypeScript error. Brands and proper names stay as-is.
import type { Dictionary } from "./es"

const en: Dictionary = {
  meta: {
    siteName: "Daniel Acero",
    layout: {
      defaultTitle: "Daniel Acero | Corporate filmmaker in Madrid",
      description:
        "Corporate filmmaker and event videographer in Madrid. Professional video for companies, brands and institutions.",
      keywords: [
        "corporate filmmaker madrid",
        "videographer madrid",
        "corporate video madrid",
        "event video madrid",
        "video production for companies",
      ],
      ogTitle: "Daniel Acero | Corporate filmmaker in Madrid",
      ogDescription:
        "Professional video for events, brands and companies in Madrid. Video production with a cinematic approach.",
      twitterTitle: "Daniel Acero | Corporate filmmaker in Madrid",
      twitterDescription: "Professional video for companies, brands and events in Madrid.",
    },
    home: {
      title: "Corporate filmmaker & event videographer in Madrid",
      description:
        "Video production for companies, brands and events in Madrid. Corporate video with a cinematic approach and professional execution.",
      keywords: [
        "corporate filmmaker madrid",
        "event videographer madrid",
        "video production company madrid",
      ],
    },
    portfolio: {
      title: "Portfolio",
      description:
        "Real corporate, institutional and event video projects. The video portfolio of Daniel Acero.",
      keywords: ["filmmaker portfolio", "video production case studies", "corporate video examples"],
    },
    project: {
      notFoundTitle: "Project not found",
      fallbackDescription: "Corporate video project by Daniel Acero.",
      keywords: ["corporate video", "video production", "filmmaker madrid"],
    },
  },
  schema: {
    serviceType: [
      "Corporate video",
      "Institutional video",
      "Event video",
      "Video production",
    ],
  },
  breadcrumbs: {
    home: "Home",
  },
  header: {
    nav: {
      portfolio: "Portfolio",
      about: "About",
      clients: "Clients",
      caseStudies: "Case studies",
      services: "Services",
      pricing: "Pricing",
      process: "Process",
      hire: "Hire me",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact",
    },
    cta: "Tell me about your project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageSwitcherLabel: "Language",
  },
  hero: {
    title: "DANIEL ACERO",
    tagline: "Corporate filmmaker & event videographer in Madrid",
    description:
      "I turn corporate events, conventions and conferences into professional films for brands and companies in Madrid.",
    ctaLabel: "Get a quote",
    trustedLogosAlt: "Client logos",
    trustedLogosLabel: "Some of the companies that have trusted me:",
  },
  vsl: {
    title: "Watch this first",
    play: "Play video",
    pause: "Pause video",
    videoLabel: "Introduction video by Daniel Acero",
    unmute: "Tap for sound",
    mute: "Mute",
    volume: "Volume",
    progress: "Video progress",
    quality: "Quality",
    auto: "Auto",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit fullscreen",
  },
  about: {
    title: "About me",
    imageAlt: "Daniel Acero",
    paragraphs: [
      "I'm Daniel Acero, a filmmaker with more than six years of experience helping companies and brands turn their events into visual stories that last.",
      "I've had the chance to cover conventions, product launches, conferences and brand experiences all over Spain, always with one clear goal: capturing the essence of every moment.",
      "My mission is to keep every story alive long after the event is over.",
    ],
  },
  contact: {
    title: "Let's talk about your project",
    intro:
      "If you're thinking about creating a video for your company, tell me what you have in mind and I'll tell you within minutes whether it's a fit and how I'd approach it. I reply personally. No strings attached.",
    asideText:
      "Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.",
    mobileAsideText:
      "If you prefer, you can also email me or message me on WhatsApp directly and I'll reply personally.",
    whatsappMessage:
      "Hi Dani! We're thinking about creating a video for our company and I'd like to know how you work and whether it would be a good fit for us.",
    footer: {
      legalNotice: "legal notice",
      cookies: "cookie policy",
      privacy: "privacy policy",
    },
  },
  contactForm: {
    loadAria: "Load contact form",
    loading: "Loading form…",
  },
  portfolio: {
    sectionTitle: "Portfolio",
    viewMoreOnTv: "See more, Instagram-style",
    viewVideo: "Watch the {title} video",
    viewProject: "View the {title} project",
    openVideo: "Open the {title} video",
    videoDialog: "{title} video",
    close: "Close",
    closeVideo: "Close video",
    clickToWatch: "Click to watch the full video",
    hero: {
      title: "Visual stories that connect with companies, institutions and brands",
      paragraphs: [
        "My work is about turning events, ideas and corporate experiences into films with a cinematic narrative and look. Below you'll find a selection of projects across different sectors: companies, institutions, sport, training, brand activations and professional events.",
        "Every project has its own story, its own goal and its own visual approach. Here you can see how I work and the results I deliver for my clients.",
      ],
    },
  },
}

export default en

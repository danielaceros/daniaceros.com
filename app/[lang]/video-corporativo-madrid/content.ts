// Textos de /video-corporativo-madrid por idioma. El ES es copia literal de la página original (no tocar).
// Sin imports de servidor: lo usan page.tsx (metadata) y VideoCorporativoMadridClient.tsx.
import type { Lang } from "@/lib/i18n/config"

/** Enlace interno dentro de un párrafo. `href` = ruta ESPAÑOLA sin prefijo (se localiza al renderizar). */
export type InlineLink = { href: string; label: string }
/** Párrafo con enlaces: trozos de texto y enlaces en orden. */
export type RichText = (string | InlineLink)[]

const link = (href: string, label: string): InlineLink => ({ href, label })

const es = {
  metaTitle: "Productora y agencia de vídeo corporativo en Madrid",
  metaDescription:
    "Productora de vídeos corporativos en Madrid con trato directo y enfoque comercial. Yo y mi equipo llevamos propuesta, rodaje, edición, versiones y entrega para web, ventas y campañas.",
  keywords: [
    "productora de vídeos corporativos en madrid",
    "agencia de vídeo corporativo en madrid",
    "video corporativo madrid",
    "video profesional para empresas madrid",
    "grabacion video corporativo madrid",
    "filmmaker corporativo",
  ],
  title: "Agencia de vídeo corporativo en Madrid para empresas y marcas",
  imageAlt: "Grabación de vídeo corporativo para empresas en Madrid",
  meaningTitle: "Qué significa tener un vídeo profesional para tu empresa",
  meaning: [
    "Si estás buscando una agencia de vídeo corporativo en Madrid, muchas veces en realidad necesitas algo más concreto: un equipo que entienda tu objetivo comercial, proponga una pieza viable y la ejecute bien de principio a fin. Yo lidero ese proceso con trato directo y, cuando el proyecto lo pide, sumo a mi equipo para cubrir producción, rodaje y postproducción sin que tengas que coordinar mil intermediarios.",
    "Si lo que buscas es una productora de vídeos corporativos en Madrid, el enfoque es el mismo: aterrizar qué pieza necesitas, para qué la vas a usar y cómo producirla con criterio. No vendo una estructura inflada; vendo una producción bien pensada, ejecutada por mí y por el equipo que haga falta para que el vídeo sirva de verdad a ventas, marca o captación.",
    "Si estás buscando un vídeo profesional para empresas en Madrid, normalmente no necesitas solo una cámara. Necesitas una pieza que explique bien quién eres, qué vendes y por qué deberían elegirte. Yo y mi equipo trabajamos este tipo de proyectos de principio a fin: propuesta, enfoque, rodaje, edición y entrega lista para web, campañas, ventas o comunicación interna.",
    "Un vídeo profesional para empresa puede servir para presentar la compañía, reforzar marca, enseñar un servicio, captar leads o apoyar una conversación comercial. La clave es que no se quede en algo bonito: tiene que ser útil para negocio y tener sentido en presupuesto, formato y uso real.",
  ],
  includesTitle: "Qué incluye un vídeo profesional para empresas en Madrid",
  includes: [
    "Definición del objetivo comercial y del mensaje que hay que dejar claro.",
    "Planificación de rodaje, localizaciones, guion o escaleta cuando hace falta.",
    "Grabación con equipo profesional en Madrid o donde toque el proyecto.",
    "Edición, color, ritmo y versiones adaptadas para web, redes, ventas o campañas.",
  ],
  typesTitle: "Tipos de vídeos corporativos que realizo",
  types: [
    "Video Corporativo",
    "Video para redes sociales",
    "Video eventos",
    "Testimoniales",
    "Video animación",
    "Entrevistas",
    "Spots publicitarios",
    "Documentales",
  ],
  agencyTitle: "Si buscas una agencia de vídeo corporativo en Madrid, así trabajo",
  agency: [
    "No funciono como una agencia tradicional con capas comerciales y producción separadas. Aquí hablas conmigo, aterrizamos el objetivo, definimos la propuesta y yo coordino al equipo necesario para sacar la pieza adelante. Para muchas empresas, eso significa menos ruido, más claridad y un vídeo mejor alineado con negocio.",
    "Este formato encaja especialmente bien cuando necesitas una solución ágil: vídeo de marca, pieza corporativa, entrevistas, cobertura de evento con enfoque comercial o contenido para campañas. Tienes la capacidad de una agencia de vídeo corporativo en Madrid, pero con una dirección creativa unificada y trato directo.",
  ],
  solveTitle: "Qué resuelvo como agencia de vídeo corporativo para empresas",
  solve: [
    "Normalmente llegáis con una necesidad bastante concreta: presentar mejor la empresa, explicar un servicio, reforzar credibilidad, lanzar una campaña o dejar un activo serio para ventas. Mi trabajo no es solo grabar. Es traducir ese objetivo en una pieza que tenga sentido en mensaje, producción, calendario y retorno comercial.",
    "Por eso, antes de rodar, definimos público, uso real del vídeo, tono, localizaciones, formato de entrega y qué versión necesita cada canal. Si hace falta, del mismo proyecto salen versiones para web, LinkedIn, paid media o presentaciones comerciales. Así no compras un vídeo bonito sin más; compras una herramienta útil para negocio.",
  ],
  productionCompanyTitle: "Cuándo encaja una productora de vídeos corporativos en Madrid",
  productionCompany: [
    ["Encaja cuando necesitas algo más que grabar una pieza aislada: una presentación de empresa, un vídeo de marca, entrevistas, testimoniales, contenido para campañas o un activo comercial que tenga recorrido en web, LinkedIn, paid media o reuniones de ventas. Ahí es donde una productora de vídeos corporativos en Madrid aporta orden, propuesta y ejecución de principio a fin."],
    [
      "En mi caso, además, ese trabajo no pasa por capas comerciales separadas. Hablas conmigo, definimos la intención de la pieza y monto el equipo necesario para resolver rodaje, producción y postproducción con un criterio único. Si quieres ver cómo aterrizo esto en proyectos reales, puedes revisar el ",
      link("/portfolio", "portfolio"),
      ", los ",
      link("/casos-de-exito", "casos de éxito"),
      " o pedirme una propuesta desde ",
      link("/contacto", "contacto"),
      ".",
    ],
  ] as RichText[],
  trustTitle: "Por qué empresas en Madrid confían en mí",
  trust: [
    "Experiencia en proyectos corporativos e institucionales, comunicación clara y plazos respetados. Trabajo de forma ágil y adaptada a cada cliente: desde el briefing hasta la entrega final, con una visión coherente del proyecto. Las empresas confían en mí por el resultado, la seriedad en la producción y la posibilidad de escalar con equipo cuando el proyecto lo requiere.",
    "El enfoque es personal y profesional: yo lidero el proyecto y, cuando hace falta, sumo equipo para cubrir rodaje, sonido, iluminación o versiones extra. Así la pieza mantiene criterio creativo y al mismo tiempo responde a una necesidad real de negocio.",
  ],
  howTitle: "Cómo trabajo",
  how: [
    ["Primero entiendo qué necesitas conseguir con el vídeo: vender mejor, presentar la empresa, apoyar una campaña o dejar una pieza sólida para reuniones, web y redes. Después te propongo una forma concreta de grabarlo. Tras el visto bueno, planificamos la producción, rodamos en Madrid o donde haga falta y cierro la edición con entregables pensados para uso real, no solo para enseñar una pieza bonita."],
    [
      "Si ya tienes claro el objetivo, puedes escribirme con el contexto del proyecto y te preparo una propuesta cerrada. Si todavía estás comparando opciones, revisa primero mi ",
      link("/portfolio", "portfolio"),
      ", cómo planteo los ",
      link("/servicios/corporativo", "proyectos corporativos"),
      ", el ",
      link("/proceso", "proceso de trabajo"),
      " y la página de ",
      link("/precios", "precios"),
      " para aterrizar mejor el presupuesto.",
    ],
  ] as RichText[],
  fitTitle: "Cuándo encaja contratar este servicio",
  fit: [
    "Cuando necesitas presentar tu empresa o servicio con una pieza más seria que un vídeo improvisado.",
    "Cuando ventas, marketing o dirección necesitan un activo reutilizable para web, reuniones, campañas y redes.",
    "Cuando buscas un proveedor en Madrid que pueda liderar la propuesta, la grabación y la edición sin marearte.",
  ],
  budgetTitle: "Presupuesto y propuesta para vídeo corporativo en Madrid",
  budget: [
    ["El presupuesto depende del objetivo, el número de jornadas, si hace falta guion, entrevistas, localizaciones, sonido, iluminación, versiones extra o adaptación para campañas. Lo importante es que la propuesta baje a tierra qué se va a hacer, qué entregables vas a recibir y para qué te van a servir."],
    [
      "Si me compartes contexto del proyecto, te digo rápido si encaja, cómo lo enfocaría y qué equipo tendría sentido mover. Puedes revisar también la página de ",
      link("/precios", "precios"),
      ", algunos ",
      link("/casos-de-exito", "casos de éxito"),
      " y el ",
      link("/portfolio", "portfolio"),
      " para ver el nivel de acabado y el tipo de proyectos que suelo resolver.",
    ],
  ] as RichText[],
  quoteTitle: "Pide presupuesto con contexto y te respondo yo",
  quoteText:
    "Si me escribes con objetivo, tipo de pieza, plazo, localización y uso final, puedo decirte rápido si encaja y cómo lo plantearía. La idea no es venderte un vídeo genérico, sino proponerte una pieza útil para captar clientes, presentar mejor tu empresa o reforzar una campaña.",
  quotePrimary: "Pedir propuesta",
  quoteSecondary: "Ver trabajos",
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      q: "¿Dónde trabajo?",
      a: "Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere.",
    },
    {
      q: "¿Necesitas un vídeo profesional para tu empresa en Madrid?",
      a: "Si quieres comunicar con claridad y calidad —presentar tu empresa, tu producto o un servicio— un vídeo profesional te da credibilidad, control del mensaje y material reutilizable para web, redes, ventas y campañas. Yo y mi equipo te preparamos una propuesta a medida según tu objetivo.",
    },
    {
      q: "¿También preparas presupuesto y enfoque antes de grabar?",
      a: "Sí. Antes de rodar definimos objetivo, alcance, entregables y presupuesto. La idea es que sepas qué pieza vas a tener, para qué sirve y cómo la vamos a producir.",
    },
    {
      q: "¿Cuánto cuesta un vídeo profesional para empresa en Madrid?",
      a: "Depende del tipo de pieza, el número de jornadas, las localizaciones, el equipo técnico y las versiones finales. No trabajo con una tarifa genérica porque el objetivo y el uso cambian mucho. Si me cuentas qué necesitas, te preparo una propuesta y presupuesto claros.",
    },
    {
      q: "¿Cómo pedimos presupuesto para el vídeo?",
      a: "Lo más útil es compartir objetivo, tipo de empresa, plazo, localización y dónde vais a usar la pieza. Con eso puedo proponerte un enfoque realista y un presupuesto alineado con el resultado que buscáis.",
    },
    {
      q: "¿Sois una agencia de vídeo corporativo en Madrid o un equipo de producción?",
      a: "Trabajo de forma directa como filmmaker y director del proyecto. Cuando el alcance lo pide, sumo a mi equipo de producción, sonido, iluminación o postproducción. Tienes la solidez de una agencia de vídeo corporativo en Madrid, pero con trato directo y criterio unificado.",
    },
    {
      q: "¿Qué diferencia hay entre contratar una agencia grande y trabajar conmigo?",
      a: "La diferencia principal es la cercanía y la agilidad. Aquí hablas conmigo desde el briefing, definimos la propuesta sin capas innecesarias y yo coordino al equipo cuando hace falta. Eso suele traducirse en mejor encaje, decisiones más rápidas y un presupuesto más ajustado al proyecto real.",
    },
    {
      q: "¿Podéis preparar propuesta y presupuesto para un vídeo corporativo en Madrid?",
      a: "Sí. Si me compartes objetivo, tipo de empresa, localización, plazo y uso del vídeo, te preparo una propuesta clara con enfoque, alcance y presupuesto orientativo o cerrado según el caso.",
    },
    {
      q: "¿Qué entregables suele incluir un proyecto de vídeo corporativo?",
      a: "Depende del proyecto, pero lo normal es una pieza principal y, si interesa, adaptaciones cortas para web, LinkedIn, campañas o presentaciones comerciales. La idea es aprovechar el rodaje para que el material tenga recorrido real.",
    },
  ],
  eventsTitle: "Vídeo de eventos corporativos en Madrid",
  coverageTitle: "Qué incluyo en la cobertura de tu evento",
  coverage: [
    "Preproducción y planificación",
    "Grabación (multicámara cuando hace falta)",
    "Postproducción y edición",
    "Material final en los formatos acordados (web, redes, sala)",
  ],
  eventTypesTitle: "Tipos de eventos que cubro",
  eventTypes: [
    "Congresos y jornadas",
    "Ferias y stands",
    "Conferencias y presentaciones",
    "Lanzamientos de producto",
    "Convenciones comerciales",
    "Eventos de equipo y team building",
    "Inauguraciones",
  ],
  differenceTitle: "Por qué un vídeo profesional marca la diferencia",
  differenceText:
    "Un vídeo profesional transmite seriedad, ordena mejor el mensaje y acelera conversaciones comerciales. Sirve para web, propuestas, campañas, LinkedIn, presentaciones o piezas de apoyo a ventas. Bien planteado, un solo rodaje puede darte una pieza principal y varias adaptaciones útiles para distintos puntos del embudo.",
  styleTitle: "Estilo de grabación",
  styleText:
    "Trabajo con un estilo limpio y narrativo: planos que cuentan la historia del evento o de la marca, ritmo de edición acorde al uso final y una estética coherente con tu identidad. Uso 4K cuando el proyecto lo pide y Full HD como estándar; el formato y la duración se acuerdan en la propuesta según el uso (web, redes, sala).",
  clientsTitle: "Clientes para los que trabajo",
  clients: [
    "Grandes Corporaciones",
    "Startups",
    "Agencias de Marketing y Publicidad",
    "Instituciones públicas",
    "Productoras de Video",
    "Marcas de lujo",
    "ONGs",
    "Pymes",
  ],
  deliveryTitle: "Entrega del material",
  deliveryText:
    "Entrego los vídeos acordados en los formatos pactados (normalmente MP4 listo para web y redes), versiones cortas si se ha acordado, y el material en bruto solo si está incluido en el presupuesto. La transferencia se hace por enlace seguro y puedes solicitar copia de respaldo si la necesitas.",
  whereTitle: "¿Dónde trabajo?",
  whereText:
    "Estoy basado en Madrid y me desplazo por toda España para rodajes y cobertura de eventos cuando el proyecto lo requiere.",
}

const en: typeof es = {
  metaTitle: "Corporate Video Production Company & Agency in Madrid",
  metaDescription:
    "Corporate video production company in Madrid with direct contact and a business-driven approach. My team and I handle the proposal, filming, editing, versions and delivery for web, sales and campaigns.",
  keywords: [
    "corporate video production madrid",
    "corporate video production company madrid",
    "corporate video agency madrid",
    "corporate video madrid",
    "professional video for businesses madrid",
    "corporate video filming madrid",
    "corporate filmmaker",
  ],
  title: "Corporate video production agency in Madrid for companies and brands",
  imageAlt: "Corporate video shoot for companies in Madrid",
  meaningTitle: "What having a professional video for your company really means",
  meaning: [
    "If you're looking for a corporate video agency in Madrid, what you often really need is something more specific: a team that understands your business goal, proposes a workable film and executes it well from start to finish. I lead that process and you deal with me directly; when the project calls for it, I bring in my team to cover production, filming and post-production, so you don't have to coordinate a string of middlemen.",
    "If what you're after is a corporate video production company in Madrid, the approach is the same: pin down what film you need, what you'll use it for and how to produce it with sound judgment. I don't sell a bloated structure; I sell a well-thought-out production, carried out by me and whatever crew it takes for the video to genuinely serve your sales, brand or lead generation.",
    "If you're looking for professional video for businesses in Madrid, you usually need more than just a camera. You need a film that clearly explains who you are, what you sell and why people should choose you. My team and I handle this kind of project end to end: proposal, approach, filming, editing and delivery ready for your website, campaigns, sales or internal communications.",
    "A professional company video can introduce your business, strengthen your brand, showcase a service, generate leads or support a sales conversation. The key is that it doesn't stop at looking nice: it has to be useful for the business and make sense in terms of budget, format and real-world use.",
  ],
  includesTitle: "What professional video for businesses in Madrid includes",
  includes: [
    "Defining the business goal and the message that needs to come across.",
    "Planning the shoot, locations, and a script or outline when needed.",
    "Filming with professional equipment in Madrid or wherever the project takes us.",
    "Editing, color grading, pacing and versions adapted for web, social media, sales or campaigns.",
  ],
  typesTitle: "Types of corporate videos I produce",
  types: [
    "Corporate video",
    "Social media video",
    "Event video",
    "Testimonials",
    "Animation",
    "Interviews",
    "Commercials",
    "Documentaries",
  ],
  agencyTitle: "Looking for a corporate video agency in Madrid? Here's how I work",
  agency: [
    "I don't operate like a traditional agency with separate sales and production layers. You talk to me, we pin down the goal, define the proposal and I coordinate the crew needed to get the film made. For many companies, that means less noise, more clarity and a video that's better aligned with the business.",
    "This setup works especially well when you need an agile solution: a brand film, a corporate piece, interviews, event coverage with a commercial angle or content for campaigns. You get the capabilities of a corporate video agency in Madrid, but with unified creative direction and direct contact.",
  ],
  solveTitle: "What I solve as a corporate video agency for businesses",
  solve: [
    "Clients usually come to me with a fairly specific need: presenting the company better, explaining a service, building credibility, launching a campaign or creating a solid sales asset. My job isn't just filming. It's turning that goal into a film that makes sense in terms of message, production, schedule and commercial return.",
    "That's why, before shooting, we define the audience, how the video will actually be used, tone, locations, delivery format and which version each channel needs. If needed, the same project yields versions for your website, LinkedIn, paid media or sales presentations. So you're not just buying a nice-looking video; you're buying a tool that works for your business.",
  ],
  productionCompanyTitle: "When a corporate video production company in Madrid is the right fit",
  productionCompany: [
    ["It's the right fit when you need more than a one-off shoot: a company presentation, a brand film, interviews, testimonials, campaign content or a sales asset that will get real use on your website, LinkedIn, paid media or in sales meetings. That's where a corporate video production company in Madrid brings structure, a clear proposal and execution from start to finish."],
    [
      "In my case, that work doesn't go through separate sales layers either. You talk to me, we define what the film needs to achieve and I put together the crew needed to handle filming, production and post-production with a single creative vision. If you want to see how I apply this to real projects, take a look at the ",
      link("/portfolio", "portfolio"),
      ", the ",
      link("/casos-de-exito", "case studies"),
      " or request a proposal via the ",
      link("/contacto", "contact page"),
      ".",
    ],
  ] as RichText[],
  trustTitle: "Why companies in Madrid trust me",
  trust: [
    "Experience in corporate and institutional projects, clear communication and deadlines met. I work in an agile way, adapted to each client: from briefing to final delivery, with a consistent vision for the project. Companies trust me for the results, the professionalism of the production and the ability to scale up with a crew when a project requires it.",
    "The approach is personal and professional: I lead the project and, when needed, bring in a crew to cover filming, sound, lighting or extra versions. That way the film keeps its creative vision while meeting a real business need.",
  ],
  howTitle: "How I work",
  how: [
    ["First, I get to understand what you need the video to achieve: sell better, present the company, support a campaign or create a solid piece for meetings, your website and social media. Then I suggest a concrete way to film it. Once you give the go-ahead, we plan the production, shoot in Madrid or wherever needed, and I finish the edit with deliverables designed for real-world use, not just to show off a pretty film."],
    [
      "If your goal is already clear, send me the project details and I'll put together a fixed proposal. If you're still comparing options, start by checking out my ",
      link("/portfolio", "portfolio"),
      ", how I approach ",
      link("/servicios/corporativo", "corporate projects"),
      ", my ",
      link("/proceso", "work process"),
      " and the ",
      link("/precios", "pricing"),
      " page to get a clearer idea of the budget.",
    ],
  ] as RichText[],
  fitTitle: "When this service is the right fit",
  fit: [
    "When you need to present your company or service with something more polished than an improvised video.",
    "When sales, marketing or management need a reusable asset for your website, meetings, campaigns and social media.",
    "When you're looking for a Madrid-based provider who can lead the proposal, filming and editing without the hassle.",
  ],
  budgetTitle: "Corporate video quotes and proposals in Madrid",
  budget: [
    ["The budget depends on the goal, the number of shoot days, and whether you need a script, interviews, locations, sound, lighting, extra versions or campaign adaptations. What matters is that the proposal spells out exactly what will be done, what deliverables you'll receive and what they'll do for you."],
    [
      "If you share some context about the project, I'll quickly tell you whether it's a fit, how I'd approach it and what crew would make sense. You can also check the ",
      link("/precios", "pricing"),
      " page, some ",
      link("/casos-de-exito", "case studies"),
      " and the ",
      link("/portfolio", "portfolio"),
      " to see the level of finish and the kind of projects I usually take on.",
    ],
  ] as RichText[],
  quoteTitle: "Request a quote with some context and I'll reply personally",
  quoteText:
    "If you write to me with your goal, type of video, timeline, location and final use, I can quickly tell you whether it's a fit and how I'd approach it. The idea isn't to sell you a generic video, but to propose a film that helps you win clients, present your company better or boost a campaign.",
  quotePrimary: "Request a proposal",
  quoteSecondary: "View work",
  faqTitle: "Frequently asked questions",
  faq: [
    {
      q: "Where are you based?",
      a: "I'm based in Madrid and travel all over Spain for shoots and event coverage whenever a project requires it.",
    },
    {
      q: "Need a professional video for your company in Madrid?",
      a: "If you want to communicate clearly and with quality —to present your company, your product or a service— a professional video gives you credibility, control over your message and reusable material for your website, social media, sales and campaigns. My team and I will prepare a tailored proposal based on your goal.",
    },
    {
      q: "Do you also prepare a quote and approach before filming?",
      a: "Yes. Before shooting, we define the goal, scope, deliverables and budget. The idea is that you know what film you'll get, what it's for and how we'll produce it.",
    },
    {
      q: "How much does a professional company video cost in Madrid?",
      a: "It depends on the type of video, the number of shoot days, locations, technical crew and final versions. I don't work with a generic rate because goals and uses vary a lot. If you tell me what you need, I'll prepare a clear proposal and quote.",
    },
    {
      q: "How do we request a quote for the video?",
      a: "The most useful thing is to share your goal, type of company, timeline, location and where you'll use the video. With that, I can suggest a realistic approach and a budget aligned with the result you're after.",
    },
    {
      q: "Are you a corporate video agency in Madrid or a production team?",
      a: "I work directly as the filmmaker and project director. When the scope calls for it, I bring in my production, sound, lighting or post-production team. You get the solidity of a corporate video agency in Madrid, with direct contact and a single creative vision.",
    },
    {
      q: "What's the difference between hiring a big agency and working with me?",
      a: "The main difference is closeness and agility. Here you talk to me from the briefing onwards, we define the proposal without unnecessary layers and I coordinate the crew when needed. That usually means a better fit, faster decisions and a budget more closely matched to the actual project.",
    },
    {
      q: "Can you prepare a proposal and quote for a corporate video in Madrid?",
      a: "Yes. If you share your goal, type of company, location, timeline and how the video will be used, I'll prepare a clear proposal with the approach, scope and an estimated or fixed budget, depending on the case.",
    },
    {
      q: "What deliverables does a corporate video project usually include?",
      a: "It depends on the project, but typically a main film and, if useful, short edits for your website, LinkedIn, campaigns or sales presentations. The idea is to make the most of the shoot so the material gets real mileage.",
    },
  ],
  eventsTitle: "Corporate event video in Madrid",
  coverageTitle: "What's included in your event coverage",
  coverage: [
    "Pre-production and planning",
    "Filming (multi-camera when needed)",
    "Post-production and editing",
    "Final material in the agreed formats (web, social media, big screen)",
  ],
  eventTypesTitle: "Types of events I cover",
  eventTypes: [
    "Congresses and summits",
    "Trade fairs and exhibition stands",
    "Conferences and presentations",
    "Product launches",
    "Sales conventions",
    "Team events and team building",
    "Openings",
  ],
  differenceTitle: "Why professional video makes a difference",
  differenceText:
    "Professional video conveys credibility, structures your message better and speeds up sales conversations. It works for your website, proposals, campaigns, LinkedIn, presentations or sales support content. Done right, a single shoot can give you a main film and several useful edits for different stages of the funnel.",
  styleTitle: "Filming style",
  styleText:
    "I work with a clean, narrative style: shots that tell the story of the event or brand, an editing pace suited to the final use and an aesthetic consistent with your identity. I shoot in 4K when the project calls for it and in Full HD as standard; format and running time are agreed in the proposal based on use (web, social media, big screen).",
  clientsTitle: "Who I work with",
  clients: [
    "Large corporations",
    "Startups",
    "Marketing and advertising agencies",
    "Public institutions",
    "Video production companies",
    "Luxury brands",
    "NGOs",
    "SMEs",
  ],
  deliveryTitle: "Footage delivery",
  deliveryText:
    "I deliver the agreed videos in the agreed formats (usually MP4 files ready for web and social media), short versions if agreed, and raw footage only if it's included in the quote. Files are transferred via a secure link, and you can request a backup copy if you need one.",
  whereTitle: "Where I work",
  whereText:
    "I'm based in Madrid and travel all over Spain for shoots and event coverage whenever a project requires it.",
}

export const content: Record<Lang, typeof es> = { es, en }

// data/projects.en.ts
// English translations of data/projects.ts, keyed by project slug.
// Only `title` and `sections` are translated; video, poster and slug are shared.
// Keep the same section/item order and the same markers as the Spanish file:
//   "✓ Title — description" (split on " — " by ProjectContent) and "• item".
// A project missing here falls back to the Spanish content (getProjects).
import type { Lang } from "@/lib/i18n/config"

export type ProjectTranslation = {
  title: string
  sections: { title: string; items: string[] }[]
}

export const projectTranslations: Partial<Record<Lang, Record<string, ProjectTranslation>>> = {
  en: {
    "brahim-diaz": {
      title: "Brahim Díaz",
      sections: [
        {
          title: "",
          items: [
            "Sony Pictures created a one-of-a-kind promo for the release of Bad Boys: Ride or Die, bringing Will Smith together with three hugely influential Spanish figures: El Rubius, Mangel and Brahim Díaz, Real Madrid player and European champion.",
            "My role was to collaborate on the video production of the ad, making sure the experience was smooth, professional and on par with an international campaign.",
            "The result was a viral spot, shared by the stars themselves and distributed nationwide.",
          ],
        },
        {
          title: "PROJECT GOAL",
          items: [
            "Sony wanted content that brought together:",
            "• film",
            "• digital culture",
            "• professional sport",
            "• young audiences",
            "An unexpected, eye-catching collaboration to amplify the film's reach.",
            "Brahim Díaz's appearance was key: his connection with young audiences and his media profile after his season with Real Madrid added an extra layer of relevance.",
          ],
        },
        {
          title: "MY ROLE IN THE PROJECT",
          items: [
            "I collaborated on the production process to ensure:",
            "✓ Production coordination — Technical and logistical support during the shoot.",
            "✓ Narrative and visual cohesion — Overseeing shots, continuity and a look in line with the cinematic tone.",
            "✓ Assistant direction — Support with staging and communication between talent and crew.",
            "✓ Technical workflow control — Lighting, camera, sound and timing, keeping everything efficient and high quality.",
            "✓ Set preparation and composition — Making sure every take showcased the talent and fit the narrative.",
            "Although the video is short, the production called for precision, pace and professionalism given the talent involved.",
          ],
        },
        {
          title: "ABOUT THE SPOT",
          items: [
            "In the video:",
            "• Will Smith is arguing with El Rubius and Mangel in a mansion.",
            "• Suddenly, Brahim Díaz shows up and asks Will if he's ready for the final at Wembley.",
            "The scene plays with humor, spontaneity and culture clash.",
            "The piece was designed to be:",
            "• fast",
            "• viral",
            "• multi-platform",
            "• shareable on social media",
            "And it did exactly that.",
          ],
        },
        {
          title: "FINAL DELIVERABLES",
          items: [
            "The project included:",
            "Final spot for social media and promotion. A short, snappy format built to go viral.",
            "Distribution through the talent. El Rubius, Mangel and Brahim posted it on their channels, multiplying its reach.",
            "Media coverage. Outlets such as Diario Sur and other national newspapers wrote about the video.",
          ],
        },
        {
          title: "RESULTS",
          items: [
            "The piece had a remarkable impact:",
            "• thousands of comments and shares",
            "• organic reach through talent with millions of followers",
            "• national press coverage",
            "• a boost to Sony's promotional strategy in Spain",
            "• international visibility thanks to Will Smith himself",
            "The project showed how powerful it is to bring together celebrities, sport and digital culture in a video campaign.",
          ],
        },
      ],
    },
    "omar-montes": {
      title: "Omar Montes",
      sections: [
        {
          title: "",
          items: [
            "Omar Montes presented his “Illuminati Party” show at Madrid's Palacio Vistalegre, one of the city's most iconic venues.",
            "My mission was to capture the energy of the concert, the staging, the connection with the crowd and the scale of the event, creating a powerful, dynamic film full of life.",
            "The result is a video that reflects the intensity of the show, the party atmosphere and the artist's presence on stage.",
          ],
        },
        {
          title: "PROJECT GOAL",
          items: [
            "The content had to convey:",
            "✓ Energy and spectacle — Screens, lights, smoke, dancers and a large-scale production.",
            "✓ The artist's connection with the crowd — Glances, gestures and iconic live moments.",
            "✓ The essence of the “Illuminati Party” — A show that blends music, partying and striking visuals.",
            "✓ Reusable content for the artist — For social media, communications, press and the official recap.",
          ],
        },
        {
          title: "MY ROLE IN THE PROJECT",
          items: [
            "I covered the concert from inside the venue, including:",
            "• 4K filming",
            "• dynamic camera movement to follow the music",
            "• close-ups of the artist",
            "• wide shots of the stage and the crowd",
            "• moving between different areas of the venue (floor, backstage, sides)",
            "• capturing lights, effects and pyrotechnics",
            "• editing to the rhythm of the music",
            "• concert-style color grading (neons, contrast, balanced saturation)",
            "• a version adapted for social media",
            "The aim was to balance spectacle, emotion and pace while keeping a cinematic style.",
          ],
        },
        {
          title: "FILMING PROCESS",
          items: [
            "During the concert:",
            "• I worked among the crowd and in permitted areas to capture the real energy",
            "• I looked for close shots of the artist in action",
            "• I filmed the interaction with guests and the audience",
            "• I captured lighting changes, smoke, LED screens and effects",
            "• I shot wide takes to show the scale of a packed Vistalegre",
            "• I looked for unique moments: jumps, sing-alongs, gestures, chemistry",
            "The approach was to immerse the viewer in the concert experience.",
          ],
        },
        {
          title: "FINAL DELIVERABLES",
          items: [
            "The project included:",
            "1 main highlight video. Fast pace, music-driven edit and a vibrant look.",
            "Social media cutdowns. Clips optimized for Instagram, LinkedIn and other platforms.",
            "Color grading and music. A visual treatment consistent with Omar's brand identity.",
          ],
        },
        {
          title: "RESULTS",
          items: [
            "Thanks to the video:",
            "• the image of both the artist and the event was boosted",
            "• engaging content was created for social media and the press",
            "• the scale of the “Illuminati Party” in Madrid came across",
            "• a promotional piece was created for future concerts",
          ],
        },
      ],
    },
    "rimmel-london": {
      title: "Rimmel London",
      sections: [
        {
          title: "",
          items: [
            "Rimmel London hired me to cover a brand activation and produce its aftermovie. The event was designed to put its Megalift Waterproof mascara to the test in real water conditions.",
            "The star was athlete and content creator Gisela Pulido, joined by a group of creators invited to the event.",
            "My job was to capture the water challenge and turn it into a dynamic brand piece built for social media.",
          ],
        },
        {
          title: "PROJECT GOAL",
          items: [
            "The video had to show, visually and credibly, how water-resistant the product is:",
            "✓ Show the challenge in action — The moment the product faces waves and water at full intensity.",
            "✓ Reinforce the brand message — Making the resistance something you could see, not just hear about.",
            "✓ Create social-native content — A snappy recap built for quick viewing on Instagram.",
          ],
        },
        {
          title: "MY ROLE IN THE PROJECT",
          items: [
            "I handled the full video coverage of the event, including:",
            "• filming on location at the water challenge",
            "• detail shots of the product and the result on the skin",
            "• capturing the guests' reactions and energy",
            "• recap-style editing designed for vertical format",
            "• color grading in line with Rimmel London's brand identity",
            "• delivery optimized for Instagram",
            "The challenge was making the video feel authentic and fun without losing its advertising focus.",
          ],
        },
        {
          title: "FILMING PROCESS",
          items: [
            "During the activation:",
            "• I worked close to the water so I wouldn't miss a single moment of the challenge",
            "• I prioritized shots showing the makeup before and after",
            "• I captured the spontaneous interaction between the creators",
            "• I kept a fast filming pace to suit the recap format",
            "The result is a short, clear piece that hooks you from the very first second.",
          ],
        },
        {
          title: "FINAL DELIVERABLES",
          items: [
            "The project included:",
            "1 main recap video. Vertical format, snappy pace, ready for Reels.",
            "Color grading and branded editing. Consistent with Rimmel London's visual identity.",
          ],
        },
        {
          title: "RESULTS",
          items: [
            "The video allowed Rimmel London to:",
            "• visually prove the product promise",
            "• create branded content starring a relevant creator",
            "• have a piece ready to publish straight to social media",
          ],
        },
      ],
    },
    "camara-de-comercio": {
      title: "Cámara de Comercio",
      sections: [
        {
          title: "",
          items: [
            "The Cámara de Comercio (Chamber of Commerce) hosted an institutional event that brought together companies, speakers and representatives of the business community.",
            "My goal was to document the day with a professional, clear and elegant approach, capturing both the essence of the gathering and the key moments on the agenda.",
            "The result is an institutional video that reflects the importance of the event and the organization's identity.",
          ],
        },
        {
          title: "PROJECT GOAL",
          items: [
            "The video had to meet three main needs:",
            "✓ Document the event professionally — Including talks, networking, attendees and institutional branding.",
            "✓ Convey credibility and solidity — The content had to reflect the formal tone and the relevance of the institution.",
            "✓ Provide useful content for communications — Pieces ready for social media, press and institutional use.",
          ],
        },
        {
          title: "MY ROLE IN THE PROJECT",
          items: [
            "I handled the full coverage, including:",
            "• filming talks and key moments",
            "• institutional B-roll (attendees, details and atmosphere)",
            "• shots of branding and visual elements",
            "• professional narrative editing",
            "• elegant, neutral color grading",
            "• music suited to the institutional tone",
            "• deliverables for social media and the archive",
            "The priority was to keep a sober, clean style consistent with the image of the Cámara de Comercio.",
          ],
        },
        {
          title: "FILMING PROCESS",
          items: [
            "During the day:",
            "• I worked discreetly so as not to interrupt the protocol",
            "• I captured the key speeches",
            "• I documented the networking and attendee participation",
            "• I shot cutaways to enrich the narrative",
            "• I ensured stability, clarity and visual consistency",
            "This kind of event calls for institutional sensitivity and an understanding of corporate tone, always with respect and professionalism.",
          ],
        },
        {
          title: "FINAL DELIVERABLES",
          items: [
            "The project included:",
            "1 main highlight video. Cinematic edit with a clear narrative and a dynamic pace.",
            "Social media cutdowns. Vertical version optimized for Instagram and TikTok.",
            "Color grading and music. A visual treatment consistent with the brand identity.",
          ],
        },
        {
          title: "RESULTS",
          items: [
            "The video allowed the Cámara de Comercio to:",
            "• strengthen its visual communication",
            "• showcase professionalism and dynamism",
            "• have content for institutions, press and social media",
            "• reflect the reach and relevance of the event",
          ],
        },
      ],
    },
    ifema: {
      title: "IFEMA",
      sections: [
        {
          title: "",
          items: [
            "IFEMA Madrid needed a film that reflected the scale of its events, the professionalism of its team and the experience visitors enjoy at every trade fair, with a powerful visual approach worthy of a top-tier institutional brand.",
            "The goal was to create a dynamic, modern and visually striking corporate video that could be used on the website, social media, sales presentations and internal communications.",
          ],
        },
        {
          title: "PROJECT GOAL",
          items: [
            "The video was designed around three main goals:",
            "✓ Strengthen IFEMA's brand image — Convey solidity, professionalism and leadership as one of Europe's leading trade fair venues.",
            "✓ Show the real event experience — Capture the energy, the atmosphere, the movement and the interaction between exhibitors, visitors and organizers.",
            "✓ Build trust with exhibitors and partners — So that any brand or professional watching the video sees IFEMA as a serious, well-organized, high-impact setting for their business goals.",
            "✓ Provide reusable content — A core piece that can be adapted for the corporate website, social media, sales presentations and promotional materials.",
          ],
        },
        {
          title: "MY ROLE IN THE PROJECT",
          items: [
            "On this project I was responsible for:",
            "• designing the visual and narrative approach of the video",
            "• planning the shoot in a live event environment",
            "• filming live during the fair",
            "• directing shots to capture key moments of activity, audience and interaction",
            "• choosing locations within the venue to show scale and atmosphere",
            "• shooting B-roll of stands, visitors, details and movement",
            "• editing with a dynamic pace and a corporate focus",
            "• color grading with a clean, professional look",
            "• delivery in formats adapted for the web, social media and presentations",
            "The idea was to convey scale, dynamism and professionalism in a single film.",
          ],
        },
        {
          title: "FILMING PROCESS",
          items: [
            "During the shoot:",
            "• we worked in a real trade fair environment with heavy foot traffic",
            "• we captured wide shots of the overall atmosphere of the venue",
            "• we filmed the interaction between brands, visitors and organizers",
            "• I combined wide shots to show scale with detail shots to humanize the experience",
            "• I took care of lighting and aesthetics suited to a high-end corporate setting",
            "• I set out to convey constant movement, activity and energy",
            "The result is a piece that conveys the true scale of IFEMA and the experience inside its events.",
          ],
        },
        {
          title: "FINAL DELIVERABLES",
          items: [
            "The project included:",
            "1 main highlight video. Ideal for the corporate website, sales presentations or institutional use.",
            "Social media cutdowns. Clips optimized for Instagram, LinkedIn and other professional channels.",
            "Color grading and music. A visual treatment consistent with IFEMA's brand identity.",
          ],
        },
        {
          title: "RESULTS",
          items: [
            "The video allowed IFEMA to:",
            "• strengthen its positioning as a benchmark trade fair venue",
            "• visually communicate the real value of its events",
            "• convey professionalism and trust to exhibiting brands",
            "• have a powerful film for its corporate communications",
            "• set its communications apart with high-end original video content",
          ],
        },
      ],
    },
    "real-madrid-riquelme": {
      title: "Real Madrid",
      sections: [
        {
          title: "",
          items: [
            "Enrique Riquelme ran for president of Real Madrid with his «Legado y Futuro» (Legacy and Future) project, challenging Florentino Pérez in the club's first elections in almost 20 years.",
            "My mission was to give audiovisual shape to the campaign's central message — «El Real Madrid no se vende» (Real Madrid is not for sale) — with a vertical piece designed to rally Real Madrid members on social media.",
            "The result is an emotional, direct video built on a sense of belonging and on defending the club's identity.",
          ],
        },
        {
          title: "PROJECT GOAL",
          items: [
            "The video had three main goals:",
            "✓ Convey the campaign message — «El Real Madrid no se vende»: belonging, legacy and defense of the member-owned model.",
            "✓ Mobilize voters on social media — A short, emotional, shareable vertical piece ahead of election day.",
            "✓ Reflect the seriousness of the project — A polished look, with pace and a tone that is institutional yet approachable.",
          ],
        },
        {
          title: "MY ROLE IN THE PROJECT",
          items: [
            "I handled the video production of the piece, including:",
            "• direction and narrative approach of the message",
            "• 4K filming with a stabilized camera",
            "• emotionally charged close-ups",
            "• snappy editing designed for vertical (9:16)",
            "• editing pace built for social media",
            "• color grading",
            "• music and sound design matching the tone of the campaign",
            "• delivery optimized for Instagram and social media",
            "The key goal: a video that instantly connects with how members feel.",
          ],
        },
        {
          title: "PRODUCTION PROCESS",
          items: [
            "During the project:",
            "• I translated the campaign slogan into a clear visual narrative",
            "• I put emotion and belonging ahead of political discourse",
            "• I kept the edit fast to hold attention in the feed",
            "• I kept a look consistent with the «Legado y Futuro» identity",
            "• I adapted the piece to Instagram's native vertical format",
            "The result is a video with a strong emotional charge, aligned with the candidacy's message.",
          ],
        },
        {
          title: "FINAL DELIVERABLES",
          items: [
            "The project included:",
            "1 main campaign video. Vertical edit with a clear narrative and a direct message.",
            "Piece optimized for social media. 9:16 format designed for Instagram Reels.",
            "Color grading, music and sound design. A visual treatment consistent with the campaign identity.",
          ],
        },
        {
          title: "RESULTS",
          items: [
            "The piece was published as part of the Real Madrid 2026 election campaign:",
            "• it reinforced the «El Real Madrid no se vende» message",
            "• it generated conversation and reach on social media",
            "• it supported member turnout",
            "• it showed the value of a clear message told through video",
          ],
        },
      ],
    },
    cinesa: {
      title: "Cinesa",
      sections: [
        {
          title: "",
          items: [
            "We created video content that captures the real experience of the Cinesa event: the atmosphere, the activities, people having fun and the essence of a premiere screening designed to build brand recall.",
            "A dynamic, approachable and organic aftermovie designed for social media. We weren't after “the perfect shot”, but after conveying energy, emotion and authenticity.",
          ],
        },
        {
          title: "PROJECT GOAL",
          items: [
            "The goal of this production was to strengthen Cinesa's positioning as a modern, approachable experiential entertainment brand, connecting with its audience through real, emotional content.",
            "• Show the Cinesa experience beyond the cinema screen",
            "• Capture how the audience interacted with the activities",
            "• Reflect the atmosphere of the event and how much attendees enjoyed it",
            "• Highlight the food offering (menu and dishes)",
            "• Create engaging content for social media and digital communications",
          ],
        },
        {
          title: "MY ROLE IN THE PROJECT",
          items: [
            "End-to-end video production focused on branded content:",
            "• Creative direction of the content",
            "• Filming the event",
            "• Capturing visual resources (atmosphere, activities, audience, photocall, menu)",
            "• An experience-driven narrative approach",
            "• Editing the final aftermovie",
            "• Adapting the content for social media",
            "The aim was to build a video that doesn't just show the event, but conveys what it felt like to be there.",
          ],
        },
        {
          title: "FILMING PROCESS",
          items: [
            "During the shoot we captured the key moments of the event:",
            "• Premiere activities",
            "• Basketball activity",
            "• Audience interaction",
            "• People having fun",
            "• Standing area and photocall",
            "• Menu and food details",
            "• General atmosphere of the event",
            "Technical conditions:",
            "• Natural, dynamic filming style",
            "• No aerial shots",
            "• Social-first approach (built for social media)",
            "• Full coverage of the event experience",
          ],
        },
        {
          title: "FINAL DELIVERABLES",
          items: [
            "The main deliverable was a dynamic aftermovie optimized for social media.",
            "Video features:",
            "• Snappy pace",
            "• Fresh, approachable style",
            "• Basic color grading",
            "• Format ready to publish on social media",
          ],
        },
        {
          title: "RESULTS",
          items: [
            "The result allowed Cinesa to:",
            "• create engaging content for social media",
            "• strengthen its perception as an experiential brand",
            "• showcase what sets its events apart",
            "• increase engagement on its digital channels",
            "• have reusable material for future communications",
          ],
        },
      ],
    },
  },
}

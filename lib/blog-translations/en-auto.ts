// Traducciones EN de los artículos que publica la automatización (blog-bot).
// La automatización añade aquí UNA entrada por artículo nuevo, con la clave = slug ES,
// en el mismo commit que el artículo en español. Formato: igual que en-4.ts.
import type { BlogPostTranslation } from "@/lib/blog-translations"

export const enAuto: Record<string, BlogPostTranslation> = {
  "video-corporativo-academias-idiomas": {
    title: "Corporate video for language schools: how to show your method and your teachers",
    description:
      "How to plan a corporate video for a language school: who speaks, what you show of the classes, how to handle students' image rights and which mistakes to avoid.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "language school video",
      "corporate video",
      "student recruitment",
      "education sector",
      "Madrid filmmaker",
    ],
    keyword: "language school corporate video",
    excerpt:
      "Someone choosing a language school compares methods, schedules and prices, but ends up deciding on the teachers and the atmosphere. Here is how I plan a corporate video for a school.",
    seoTitle: "Corporate Video for Language Schools | Dani Acero",
    metaDescription:
      "Corporate video for language schools: who speaks, what you show of the classes, student image rights and mistakes to avoid. A guide from a Madrid filmmaker.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Anyone looking for a language school usually has three or four websites open. They all talk about their own method, small groups and native teachers. On paper they are almost identical.",
      },
      {
        type: "paragraph",
        text: "What breaks the tie is seeing what a class looks like and who teaches it. A well-planned corporate video shows exactly that before the student asks for information.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-academias-idiomas/hero.webp",
        alt: "Person writing at a desk during a language class",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why a video matters for a language school" },
      {
        type: "paragraph",
        text: "Learning a language takes months. The student is not buying a product, they are buying a weekly routine with specific people. That is why trust weighs more than the course catalogue.",
      },
      {
        type: "paragraph",
        text: "The video also helps with companies that hire training for their teams. An HR manager wants to see the level of the teachers and how the work is organised before signing anything.",
      },
      {
        type: "paragraph",
        text: "What I usually recommend is one introduction piece of one to two minutes plus several 30 to 45 second cuts: the method, the teachers and what the first class is like.",
      },
      { type: "heading", level: 2, text: "How to do it properly" },
      { type: "heading", level: 3, text: "Who appears on camera" },
      {
        type: "paragraph",
        text: "The academic director, two or three teachers of different languages and someone from the front desk who deals with new students. I film them seated, with three simple questions and no read-out script. A teacher explaining how they prepare a conversation class convinces more than any slogan.",
      },
      { type: "heading", level: 3, text: "What you show" },
      {
        type: "paragraph",
        text: "A real class, even a short one: how the time is split, which materials are used and how the teacher gives corrections. I add shots of the classroom, the waiting area and the materials. If you teach online, I also record a video-call session so people can see how it works.",
      },
      { type: "heading", level: 3, text: "How to film with students" },
      {
        type: "paragraph",
        text: "I film during a class arranged in advance, with a signed image release from every student who appears. For minors, a parent or guardian has to sign. I use one camera on a tripod and a lavalier microphone on the teacher, and I ask the students to take the class as normal. After ten minutes nobody looks at the camera.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-academias-idiomas/intermedia.webp",
        alt: "Teacher explaining to a group of students seated in a classroom",
        width: 1920,
        height: 1080,
        caption: "A real class, even for one minute, shows the atmosphere better than any description.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Using stock footage instead of showing your real classrooms and teachers.",
          "Filming students without a signed image release, especially minors.",
          "Promising levels or timelines for passing an exam that depend on each student.",
          "Describing the methodology in terms the student doesn't understand.",
          "Neglecting sound: classroom echo or background noise ruins any interview.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long should a language school video be?",
        answer:
          "The introduction, between one and two minutes. Topic cuts, between 30 and 45 seconds. For social media, vertical versions of 15 to 30 seconds taken from the same shoot.",
      },
      {
        type: "faq",
        question: "Can you film without interrupting classes?",
        answer:
          "Yes, with a class arranged in advance or by using a free classroom for the interviews. Usually I set aside one quiet morning or afternoon.",
      },
      {
        type: "faq",
        question: "Do I need permission for students to appear?",
        answer:
          "Yes. You need a written image release from every recognisable person, and from guardians if they are minors. If you'd rather not manage that, only the teaching staff can appear.",
      },
      {
        type: "faq",
        question: "How long does it take to have the video?",
        answer:
          "Between three and five weeks: preparation, one shooting day and editing with one or two rounds of revisions. The schedule is adjusted to the school's academic calendar.",
      },
      {
        type: "paragraph",
        text: "If you run a language school in Madrid and want a video that shows your team and the way you teach, write to me via /en/contacto. A short call is enough for me to tell you which format fits your school.",
      },
    ],
  },
}

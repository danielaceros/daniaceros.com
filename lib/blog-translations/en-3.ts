// lib/blog-translations/en-3.ts
// English translations of blog posts (part 3: index 62 to the end of blogPosts in lib/blog.ts).
import type { BlogPostTranslation } from "@/lib/blog-translations"

export const enPart3: Record<string, BlogPostTranslation> = {
  "voz-en-off-video-corporativo": {
    title: "Voiceover for corporate video: how to choose the right one",
    description:
      "How to choose the tone, pace and type of voiceover for a corporate video based on the message, the industry and the audience it speaks to.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "voiceover",
      "corporate video",
      "voice talent",
      "narration",
      "post-production",
      "video production",
    ],
    keyword: "corporate video voiceover",
    excerpt:
      "A voiceover can build trust in your corporate video or ruin it with the wrong tone. Here's how I choose the type of voice, the pace and the language based on the message and the audience.",
    seoTitle: "Voiceover for Corporate Video | Daniel Acero",
    metaDescription:
      "Voiceover for corporate video: how to choose the right tone, pace and voice for your message and the audience you're speaking to.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Not long ago a client asked me to make the voiceover for their corporate video sound \"like a nature documentary\". I hired a voice actor with that deep, unhurried delivery, and it just didn't fit: the company sells management software for small businesses, not footage of whale migrations. We switched to a warmer, more direct voice, and the video worked far better.",
      },
      {
        type: "paragraph",
        text: "Voiceover is one of the least planned elements in a corporate video, yet it's one of the things that most changes how the message lands. It isn't just about picking a voice that sounds nice: it's deciding on a tone, a pace and a way of speaking that fit what the company is saying and who is going to hear it.",
      },
      {
        type: "image",
        src: "/blog/voz-en-off-video-corporativo/hero.webp",
        alt: "Professional condenser microphone in a recording studio",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A voiceover is the narration that runs over the images without the speaker appearing on screen. It's used to explain processes, add context to product shots, introduce a corporate video or guide the viewer between sections of a longer video.",
      },
      {
        type: "paragraph",
        text: "It matters because it's the first thing that conveys the brand's tone, before the viewer has processed a single image. A voice that's too formal for a young startup sounds forced. A voice that's too casual for an investor video undermines its credibility. The mismatch shows within the first five seconds.",
      },
      {
        type: "paragraph",
        text: "It also does a practical job: it carries the pace of the video. If the edit is built on short, dynamic shots but the voice speaks slowly with long pauses, the video feels out of sync. The voice and the edit have to breathe to the same rhythm.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Choose the tone based on the message" },
      {
        type: "paragraph",
        text: "Before looking for a voice actor, I pin down one thing: whether the video is a corporate piece (a more neutral, measured tone), commercial (a tone with more energy) or training-focused (clear and instructional, never rushed). With that decided, I look for a voice that matches the company's age and industry. A fintech for young freelancers doesn't need the same voice as a law firm with large corporate clients.",
      },
      { type: "heading", level: 3, text: "Human voice vs synthetic (AI) voice" },
      {
        type: "paragraph",
        text: "AI-generated voices have improved a lot, and I use them for short scripts, test versions or internal videos where the budget doesn't stretch to a professional voice actor. For the final video the brand is going to publish, I still prefer a human voice: it handles irony, pauses and emphasis on specific words better, and for now the difference is noticeable to any reasonably trained ear.",
      },
      { type: "heading", level: 3, text: "Recording and directing the voiceover session" },
      {
        type: "paragraph",
        text: "When I work with a professional voice actor, I send the script with emphasis marks and explain the context of the video, not just the text. We record several takes of each line at different paces, because in the edit I almost always end up combining the slower take of one line with the more energetic take of the next, depending on what each shot needs.",
      },
      {
        type: "image",
        src: "/blog/voz-en-off-video-corporativo/intermedia.webp",
        alt: "Sound engineer editing an audio waveform on screen",
        width: 1920,
        height: 1281,
        caption: "Recording several takes of each line leaves room to adjust the pace in the edit.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Choosing the voice based on personal taste without thinking about who the end viewer will be.",
          "Writing the script as if it were meant to be read silently, with sentences too long for the voice actor to breathe through.",
          "Recording a single take per line and having no room left to adjust the pace in the edit.",
          "Using a synthetic voice for the final video to save money when the message needs to convey human trust.",
          "Giving the voice actor no context about the tone of the video, only the text to read.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a professional voiceover for a corporate video cost?",
        answer:
          "It depends on the length of the script and the voice actor's rate, whether per project or per word. For a two- or three-minute corporate video, prices usually range from €100 to €300 with a professional Spanish-language voice actor.",
      },
      {
        type: "faq",
        question: "Does the voiceover always have to be the same person across all my videos?",
        answer:
          "Keeping the same voice across most of your videos helps brand consistency, especially for corporate content. For one-off pieces or specific campaigns I can use a different voice without breaking the overall identity.",
      },
      {
        type: "faq",
        question: "Can I use an AI-generated voiceover for a video that will actually be published?",
        answer:
          "Yes, and it's increasingly common, especially for internal videos, technical explainers or content on a tight budget. For brand videos meant to last, I still recommend a human voice.",
      },
      {
        type: "faq",
        question: "What if my corporate video is going to have versions in several languages?",
        answer:
          "Each language needs its own voiceover, not a translation read by the same voice. Sentence rhythm and length change from one language to another, so the edit is also adjusted version by version.",
      },
      {
        type: "paragraph",
        text: "If you're not sure which tone of voice suits your next video, tell me what it's about and I'll suggest how to approach it. Get in touch via /en/contacto.",
      },
    ],
  },
  "organizar-rodaje-corporativo": {
    title: "How to organize a corporate video shoot: call sheet and logistics",
    description:
      "How I put together the call sheet, schedule and logistics for a corporate video shoot so the shoot day runs smoothly with no surprises.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video shoot",
      "video production",
      "shoot logistics",
      "call sheet",
      "pre-production",
      "corporate video",
    ],
    keyword: "how to organize a corporate video shoot",
    excerpt:
      "A corporate shoot is won or lost before the camera is switched on. Here's how I prepare the call sheet, the schedule and the backup plan so the day goes as planned.",
    seoTitle: "How to Organize a Corporate Video Shoot | Daniel Acero",
    metaDescription:
      "How to organize a corporate video shoot: call sheet, block-by-block scheduling and logistics so your shoot day goes smoothly.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "The worst shoot I've ever had didn't go wrong because of the camera or the lighting. It went wrong because nobody told reception we were arriving with a tripod and two cases of gear, and we lost forty minutes waiting for a visitor pass that didn't exist. Since then I send a call sheet to everyone, no exceptions, even if the shoot only lasts two hours.",
      },
      {
        type: "paragraph",
        text: "Organizing a corporate shoot is no different from organizing any operation with a tight schedule and several people depending on each other. The difference is that there's no room to repeat the day: the CEO has half an hour free between meetings, and that half hour is all you get.",
      },
      {
        type: "image",
        src: "/blog/organizar-rodaje-corporativo/hero.webp",
        alt: "Video production crew preparing camera equipment before a shoot",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What a call sheet is and why it matters" },
      {
        type: "paragraph",
        text: "A call sheet is a one-page document that sums up everything happening on shoot day: call time, exact address, who is in each block, what gets filmed in each slot and emergency contacts. I send it by email and repeat it on WhatsApp the night before, because emails get lost among a hundred others.",
      },
      {
        type: "paragraph",
        text: "It matters because it removes ambiguity. If someone asks what time the interview with the CFO starts, the answer is in the document, not in my memory or in a stray message from three weeks ago. The more people depend on the shoot, the more you notice when there isn't one.",
      },
      {
        type: "paragraph",
        text: "It also works as a way to manage expectations with the client. If the call sheet says we're shooting from 9:00 to 13:00 and need a closed room with no background noise, that requirement is in writing before the day, not negotiated in the hallway with the camera already set up.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Lock the call sheet 48 hours in advance" },
      {
        type: "paragraph",
        text: "I start the call sheet as soon as the schedules of the people appearing on camera are confirmed, usually three to five days before the shoot. I lock it 48 hours beforehand at the latest, because I need that margin to sort out loose ends: a missing access permit, a room that needs booking, building security that has to be notified.",
      },
      { type: "heading", level: 3, text: "Define roles and schedule in blocks" },
      {
        type: "paragraph",
        text: "I split the day into thirty- or sixty-minute blocks and assign each one to a person or a type of shot: interview with management, wide shots of the office, b-roll of the team at work. That way, if a block runs late, I know exactly how much time I can take from the next one without the whole day falling apart.",
      },
      { type: "heading", level: 3, text: "Prepare a plan B for the unexpected" },
      {
        type: "paragraph",
        text: "I always build in a buffer: if the shoot is meant to wrap at 14:00, I let the client know it could run until 14:30. I also have a backup shot ready to film if someone cancels their block at the last minute, so we don't go home empty-handed. A shoot with no buffer is a shoot that depends on everything going perfectly, and that almost never happens.",
      },
      {
        type: "image",
        src: "/blog/organizar-rodaje-corporativo/intermedia.webp",
        alt: "Professional video camera on a tripod ready to shoot",
        width: 1920,
        height: 1280,
        caption: "Arriving with the gear set up and tested before the agreed time avoids losing the first minutes of the shoot.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Not confirming building access: visitor passes, parking or security rules nobody mentioned beforehand.",
          "Cramming too many blocks into too little time with no buffer for the unexpected.",
          "Not telling the people appearing on camera how long their part will actually take.",
          "Forgetting about ambient sound: a room with noisy air conditioning or next to a busy hallway ruins the audio.",
          "Relying on a single power outlet or the client's wifi with no backup of your own.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How far in advance should the call sheet be sent?",
        answer:
          "Ideally 48 hours before the shoot. That gives time to sort out access, permits or last-minute changes without the pressure of the day itself.",
      },
      {
        type: "faq",
        question: "What information must a call sheet include?",
        answer:
          "Exact address with a meeting point, crew call time, block-by-block schedule, the name and phone number of the on-site contact, and any access or visitor-pass requirements.",
      },
      {
        type: "faq",
        question: "How much time should you set aside for a half-day corporate shoot?",
        answer:
          "For a shoot with four hours of actual filming I usually block out five, with half an hour at the start to set up gear and another half hour at the end in case a block runs over.",
      },
      {
        type: "faq",
        question: "What do I do if someone key cancels their part on the day of the shoot?",
        answer:
          "Having a backup shot ready (b-roll of the office, the product or the team at work) lets you make good use of the time without having to reschedule the whole shoot for another day.",
      },
      {
        type: "paragraph",
        text: "If you have a corporate shoot coming up and don't know where to start organizing it, send me the details and I'll help you build the call sheet. Get in touch via /en/contacto.",
      },
    ],
  },
  "video-bienvenida-clientes-nuevos": {
    title: "Welcome video for new clients: what to include and how to film it",
    description:
      "How I design a short welcome video for new clients: who should be on camera, how long it should be and what to include so the first impression is a good one.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "welcome video",
      "client onboarding",
      "corporate video",
      "customer experience",
      "brand video",
    ],
    keyword: "client welcome video",
    excerpt:
      "A well-made welcome video runs under two minutes and removes more uncertainty than an onboarding email. Here's how I approach it: who's on camera, how long it runs and what I include.",
    seoTitle: "Welcome Video for New Clients | Daniel Acero",
    metaDescription:
      "Welcome video for new clients: how long it should be, who should be on camera and what to include to make a great first impression without sounding corporate.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "When a company signs a new client, the first contact after the contract is usually a generic email or a welcome call improvised by whoever has a free slot that week. A welcome video changes that first impression: it runs under two minutes, the client watches it as soon as they log into their dashboard or receive the onboarding kit, and in a few seconds it conveys what an email never manages to.",
      },
      {
        type: "paragraph",
        text: "I've been filming this kind of piece for service and SaaS companies in Madrid for a few years, and it's one of the shortest formats I make but one of the most impactful per minute invested. You don't need a big shoot or an elaborate script: the key is who appears on camera and not dragging it out.",
      },
      {
        type: "image",
        src: "/blog/video-bienvenida-clientes-nuevos/hero.webp",
        alt: "Two business partners shaking hands at the entrance of a modern office",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A welcome video is the piece a client receives right after signing the contract or completing sign-up. It doesn't sell anything; that has already happened. Its job is to confirm they made the right decision and make clear what happens next: who their contact is, what the timeline looks like and where to ask for help if something isn't clear.",
      },
      {
        type: "paragraph",
        text: "It matters because the first days of a business relationship are the ones that create the most uncertainty for the client. They've paid, but haven't seen results yet. A short video with a real face behind the contract reduces that uncertainty far more than a welcome PDF with the company logo and generic copy.",
      },
      {
        type: "paragraph",
        text: "It also sets the tone of the relationship from the very first minute. If the video is warm and direct, the client understands they can reach out with confidence whenever they have a question. If it sounds corporate and cold, they adopt that same register in every later exchange, and that usually means more friction and more support tickets about things a one-minute video could have cleared up.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Choose who appears on camera" },
      {
        type: "paragraph",
        text: "The video should be recorded by the person who will actually manage the account, not a managing director the client will never see again. I've filmed versions with the CEO up front and watched them create expectations that the customer success team couldn't live up to. It's better to have the account manager or project lead: that's the face the client will recognize over the following weeks.",
      },
      { type: "heading", level: 3, text: "A 90-second script, not a five-minute one" },
      {
        type: "paragraph",
        text: "The script fits in under 200 words: welcome, what happens over the next few days, who the contact is and how to get help. I've tried longer versions with company background and they always lower the completion rate. The client already knows the company; what they need now is to get their bearings on what comes next.",
      },
      { type: "heading", level: 3, text: "Record several short versions in the same session" },
      {
        type: "paragraph",
        text: "In a single one-hour session I record the generic greeting plus two or three variations for different client segments, for example basic plan versus premium plan, or by industry. The extra cost of recording five more minutes of footage is minimal compared with having a video that better fits each type of client at the exact moment they receive it.",
      },
      {
        type: "image",
        src: "/blog/video-bienvenida-clientes-nuevos/intermedia.webp",
        alt: "Professional video camera on a wooden table",
        width: 1920,
        height: 1280,
        caption: "With a camera, soft light and a script locked in advance, the video is filmed in under an hour.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming the video with the managing director when they won't have any real contact with the client afterwards.",
          "Slipping sales messaging or upsells into a video that should focus solely on orienting the new client.",
          "Scripts over three minutes long that the client never watches to the end.",
          "Not updating the video when the onboarding process or the contact person changes.",
          "Filming it with heavy studio lighting and an ad-like look when the goal is to sound approachable.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long should a welcome video for new clients be?",
        answer:
          "Between 60 and 120 seconds. Beyond that the completion rate drops sharply, and the client already has the information they need before the minute-and-a-half mark.",
      },
      {
        type: "faq",
        question: "Who should appear in the video, the CEO or the customer success team?",
        answer:
          "Ideally the person who will actually manage the account. If the CEO records the video but then has no contact with the client, it creates an expectation the rest of the team can't live up to.",
      },
      {
        type: "faq",
        question: "Do you need a big shoot for this type of video?",
        answer:
          "No. With a camera, soft light and a script locked in advance, it's filmed in under an hour, including several takes and an alternative version or two for different client segments.",
      },
      {
        type: "faq",
        question: "Can the same video be reused for every client?",
        answer:
          "For most companies, yes: one well-made generic version is enough. Segmenting only makes sense if the onboarding process changes a lot depending on the plan purchased or the client's industry.",
      },
      {
        type: "paragraph",
        text: "If you want to create a welcome video for your new clients and don't know where to start with the script, tell me what your current onboarding process looks like and I'll suggest how to approach it. Get in touch via /en/contacto.",
      },
    ],
  },
  "camara-lenta-video-corporativo": {
    title: "Slow motion in corporate video: when it actually makes sense",
    description:
      "When I use slow motion in a corporate video, what frame rate I shoot at depending on the effect I'm after, and the most common mistakes when overusing slow motion in business videos.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "slow motion",
      "high frame rate",
      "corporate video",
      "video production",
      "post-production",
      "Sony A7",
    ],
    keyword: "slow motion in corporate video",
    excerpt:
      "Used well, slow motion highlights a gesture or a product detail. Used badly, it stretches a video that was already too long. Here's when I use it, what frame rate I shoot at and what I avoid.",
    seoTitle: "Slow Motion in Corporate Video | Daniel Acero",
    metaDescription:
      "Slow motion in corporate video: when to use it, what frame rate to shoot at and the most common mistakes when adding slow motion to business videos.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Every few months a client asks me to add slow motion to their corporate video because they saw it in an ad and liked the result. The answer is almost always the same: it depends on the shot and what's happening in it. Slow motion isn't an effect you add to make a video look more polished. It's a tool with a specific use, and outside that use it takes away more than it adds.",
      },
      {
        type: "paragraph",
        text: "I've spent years filming corporate video with cameras that can shoot high frame rates, so the question isn't technical, it's about judgment: when it adds something and when it just stretches a video that was already tight on time. Here I explain how I decide, what frame rate I shoot at and the most common mistakes I see when someone uses it without thinking.",
      },
      {
        type: "image",
        src: "/blog/camara-lenta-video-corporativo/hero.webp",
        alt: "Professional cinema camera mounted on a tripod on a film set",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "Shooting in slow motion means capturing more frames per second than will be played back later. If I shoot at 96 fps and the final video plays at 24 fps, every real second of footage becomes four seconds on screen. The higher the capture frame rate relative to the playback frame rate, the slower and more pronounced the effect.",
      },
      {
        type: "paragraph",
        text: "It matters because it changes the viewer's reading pace. A shot at normal speed is processed quickly and moves on. The same shot in slow motion forces you to pause a moment longer, and that only makes sense when there's something in that moment worth looking at calmly: a gesture, a texture, a movement that would go unnoticed at real speed.",
      },
      {
        type: "paragraph",
        text: "The usual mistake is treating it as an aesthetic filter applied because it looks nice, without asking whether the content of the shot justifies that extra time. A corporate video usually runs between 90 seconds and three minutes. Every second of slow motion that doesn't add new visual information is a second not delivering the message the client is paying to get across.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Choose the frame rate based on the effect you want" },
      {
        type: "paragraph",
        text: "For a subtle, almost imperceptible effect, I shoot at 50 or 60 fps on a 25 fps timeline. Motion is smoothed without the viewer consciously noticing it's in slow motion. For a pronounced effect, the kind that's noticeable and deliberate, I go up to 96 or 120 fps with the Sony A7. Anything beyond that is product commercial territory, and I almost never need it in a corporate piece.",
      },
      { type: "heading", level: 3, text: "Choose which shots deserve slow motion" },
      {
        type: "paragraph",
        text: "It works well on hands working on a product, on material or texture details, on a specific gesture from someone talking about something important, or on process b-roll where there's no dialogue to sync. It doesn't work on a shot of someone talking to camera: the voice distorts if it's slowed down along with the video, and separating audio from video to keep the voice's natural pace complicates the edit for no good reason.",
      },
      { type: "heading", level: 3, text: "Use it sparingly in the edit" },
      {
        type: "paragraph",
        text: "In a two-minute corporate video, I rarely include more than two or three slow-motion shots, and none lasts more than two or three seconds. If the viewer notices that almost the whole video is slowed down, it stops being a device and becomes the style of the entire video, which usually isn't what the client wants when they ask for something dynamic and direct.",
      },
      {
        type: "image",
        src: "/blog/camara-lenta-video-corporativo/intermedia.webp",
        alt: "Person holding a professional DSLR camera getting ready to shoot",
        width: 1920,
        height: 1080,
        caption: "The higher the capture frame rate, the more light you need: each frame gets less exposure time.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Slowing down a shot with dialogue without separating the audio, so the voice sounds distorted or has to be re-recorded later.",
          "Using slow motion throughout the video until it no longer reads as a device and becomes the overall pace of the piece.",
          "Not adding light when shooting at a high frame rate, leaving the shot dark or with more noise than necessary in post-production.",
          "Using it to disguise weak framing or a poorly executed camera move instead of reshooting the take.",
          "Not checking the project frame rate in DaVinci Resolve before exporting, which can leave the shot playing at a different speed than expected.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "What frame rate is slow motion shot at in corporate video?",
        answer:
          "For a subtle effect, 50 or 60 fps on a 25 fps timeline. For a pronounced, obvious effect, between 96 and 120 fps. You rarely need to go higher in a business video.",
      },
      {
        type: "faq",
        question: "Do you need more light to shoot in slow motion?",
        answer:
          "Yes. The more frames per second, the less exposure time each frame gets, so the scene needs more light than it would at normal speed to avoid looking dark or noisy.",
      },
      {
        type: "faq",
        question: "Can slow motion be used on a shot of someone talking?",
        answer:
          "Not directly: the voice distorts if it's slowed down along with the video. It's reserved for b-roll without dialogue, or the audio is recorded separately and synced afterwards, which adds editing work that is rarely worth it.",
      },
      {
        type: "faq",
        question: "How much of a corporate video should be in slow motion?",
        answer:
          "Very little. In a two-minute piece, two or three specific shots of two or three seconds each are usually enough. Any more and the device loses its effect.",
      },
      {
        type: "paragraph",
        text: "If you're preparing a corporate video and aren't sure which shots deserve slow motion and which don't, tell me what you want to convey and I'll tell you how I'd approach it. Get in touch via /en/contacto.",
      },
    ],
  },
  "rondas-revision-video-corporativo": {
    title: "Revision rounds in a corporate video: how I manage them",
    description:
      "How I organize revision rounds in a corporate video, how many I include in the quote, how I ask clients for structured feedback and what I do when requests go beyond the approved script.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "revision rounds",
      "corporate video",
      "post-production",
      "client feedback",
      "DaVinci Resolve",
      "video production",
    ],
    keyword: "corporate video revision rounds",
    excerpt:
      "Without a fixed number of revision rounds set in the quote, an edit can drag on for weeks. Here's how many I include, how I ask for feedback and what I do when a change goes beyond the approved script.",
    seoTitle: "Revision Rounds in a Corporate Video | Daniel Acero",
    metaDescription:
      "Revision rounds in a corporate video: how many I include in the quote, how I ask for structured feedback and how I handle changes outside the script.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "The first cut of a corporate video is almost never the one that gets delivered. In between there are one or more revision rounds where the client watches the cut and asks for changes: a shorter shot, a different order for the interviews, removing a line that sounds off. That's normal and part of the process. The problem comes when those rounds have no limit and no structure, and the edit turns into endless back-and-forth with no end date.",
      },
      {
        type: "paragraph",
        text: "I've been delivering corporate video for years, and the difference between a clean wrap and a project that runs a month over almost always comes down to how revisions are set up in the quote, not the quality of the edit. Here's how I organize it, how many rounds I include and what I do when a change goes beyond what was approved at the start.",
      },
      {
        type: "image",
        src: "/blog/rondas-revision-video-corporativo/hero.webp",
        alt: "Video editor reviewing an editing timeline on screen",
        width: 1920,
        height: 1298,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A revision round is when I deliver a cut of the video, the client watches it and sends me back a list of specific changes to that cut. It isn't an open conversation about whether they like the video in general: it's targeted feedback on decisions already made in a script and brief that were approved before filming.",
      },
      {
        type: "paragraph",
        text: "It matters because every round takes real time: reviewing the feedback, applying the changes in DaVinci Resolve, exporting again, sending the new cut. If the number of rounds isn't fixed in the quote, every extra round is work I do for free, and sooner or later that affects the quality of the result, because the time goes into repeating rather than polishing.",
      },
      {
        type: "paragraph",
        text: "The other reason it matters is that a poorly defined review process creates friction with the client. If they don't know how many rounds they have or what can be changed in each one, they ask for everything the moment it occurs to them, and the edit loses coherence because it piles up patches instead of being cut with a clear vision from start to finish.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Fix the number of rounds in the quote" },
      {
        type: "paragraph",
        text: "I include two revision rounds in the quote for a standard corporate video. The first is on the first cut, covering structure, pacing and shot selection. The second is on the corrected version, with finer adjustments: color, sound, the odd trim. A third round is available if needed, but it's billed separately, and I say so in the quote, not once it has already been requested.",
      },
      { type: "heading", level: 3, text: "Ask for feedback in a single document" },
      {
        type: "paragraph",
        text: "I ask for all changes to arrive in one list with timecodes: 'at 0:45, cut line X'. No scattered WhatsApp comments at different times, because that means opening the project several times for the same round and multiplies the time it takes to apply the changes. One consolidated document with all the feedback is one work session; several scattered messages are several sessions.",
      },
      { type: "heading", level: 3, text: "Separate surface changes from substantive changes" },
      {
        type: "paragraph",
        text: "A surface change is moving a shot, trimming a take, adjusting a subtitle. A substantive change is adding an interview that was never filmed, changing the core message of the video, or asking for a shot that doesn't exist in the raw footage. The former fall within the normal rounds. The latter mean rethinking the script, and sometimes reshooting, so I handle them separately from the moment they come up.",
      },
      {
        type: "image",
        src: "/blog/rondas-revision-video-corporativo/intermedia.webp",
        alt: "Two people reviewing a project together on a laptop screen",
        width: 1920,
        height: 1282,
        caption: "Structured feedback with timecodes reduces the number of rounds needed; it doesn't eliminate them.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Not fixing the number of rounds in the quote, which leaves the door open to endless revisions.",
          "Receiving feedback in scattered messages at different times instead of in a single list with timecodes.",
          "Confusing a substantive change (message, script structure) with a surface adjustment that does fit into a normal round.",
          "Applying changes directly to the master without saving a previous version, which makes it hard to go back if the client prefers the earlier cut.",
          "Letting several people on the client side weigh in on each round without a single person consolidating and prioritizing the feedback.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How many revision rounds does a corporate video normally include?",
        answer:
          "My quotes include two rounds: one on the first cut and another on the corrected version. Additional rounds can be added, but they're billed separately, and I make that clear from the initial quote.",
      },
      {
        type: "faq",
        question: "What happens if the client asks for a change that wasn't in the approved script?",
        answer:
          "If it's a substantive change, like adding a new interview or changing the core message, I treat it as a change in scope rather than part of the normal rounds. It's quoted separately before being applied.",
      },
      {
        type: "faq",
        question: "How should feedback be delivered so the revision is quick?",
        answer:
          "In a single document, with the exact timecode of each requested change. Scattered comments spread over several messages force repeated work sessions on the same cut.",
      },
      {
        type: "faq",
        question: "Can you go back to an earlier version of the edit if the client prefers the previous cut?",
        answer:
          "Yes, as long as intermediate versions of the project have been saved in DaVinci Resolve. That's why each round is saved as a separate version before applying the next set of changes.",
      },
      {
        type: "paragraph",
        text: "If you're planning a corporate video and want the review process locked in from the start, tell me the scope of the project and I'll suggest how to structure the rounds. Get in touch via /en/contacto.",
      },
    ],
  },
  "video-cultura-de-empresa": {
    title: "Company culture video: what to show and what to avoid",
    description:
      "How I approach a company culture video so it doesn't look like a generic ad: which moments I film, how I handle testimonials and what I leave out so it feels real.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "company culture video",
      "employer branding",
      "corporate video",
      "human resources",
      "video production",
    ],
    keyword: "company culture video",
    excerpt:
      "A company culture video can boost your recruiting or come across as corporate posturing. The difference lies in what you choose to show and what you leave out.",
    seoTitle: "Company Culture Video: What to Show | Daniel Acero",
    metaDescription:
      "Company culture video: which moments to film, how to handle testimonials and what to avoid so it doesn't look like a generic HR ad.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "I'm getting more and more requests for company culture videos: pieces that don't sell a product or explain a service, but show what it's like to work at a company. They're used for recruiting, to accompany a funding round or to strengthen the brand internally within the team. The problem is that most of these videos end up looking like the same ad: a bright office, people smiling at the camera, upbeat background music and a voiceover that says nothing specific.",
      },
      {
        type: "paragraph",
        text: "I've filmed several projects like this, and the difference between a video that sticks and one that's forgotten five minutes later almost always comes down to what you decide to show and what you leave out. Here's how I approach it from the first brief.",
      },
      {
        type: "image",
        src: "/blog/video-cultura-de-empresa/hero.webp",
        alt: "Work team gathered around a laptop in an office",
        width: 1920,
        height: 1281,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A company culture video doesn't explain what the company does or how its product works. It shows what a normal day is like inside: who works there, how they communicate, what space they work in, what unwritten rules exist. It's different from a standard corporate video focused on the business's activity; here the focus is on people and atmosphere, not revenue or services.",
      },
      {
        type: "paragraph",
        text: "It matters because more and more candidates look for references before sending a résumé. An honest video reduces the gap between what the job ad promises and what the person finds on day one, which in the long run lowers early turnover. It also works internally: it gives a fast-growing team a shared reference point for how things are done there.",
      },
      {
        type: "paragraph",
        text: "The risk is real: if the video has no clear direction, it comes out generic. Anyone who works in marketing has seen dozens of near-identical culture videos, and that's exactly the result you want to avoid.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Pick two or three real moments, not a speech" },
      {
        type: "paragraph",
        text: "Before filming, I ask the client to identify two or three specific moments that genuinely happen in their working week: a Monday team meeting, how a client issue gets resolved, how they celebrate when a project wraps. Filming those moments as they happen gives you far more than asking someone to talk to camera about the company's values in the abstract.",
      },
      { type: "heading", level: 3, text: "Film spontaneous testimonials, not word-for-word scripts" },
      {
        type: "paragraph",
        text: "For the employees who will speak on camera, I prepare open questions, not a fixed script. I'd rather have an answer with real hesitations and pauses than a perfect sentence that sounds read. Filler words get trimmed in the edit, but each person's natural tone is kept.",
      },
      { type: "heading", level: 3, text: "Show the workspace as it really is" },
      {
        type: "paragraph",
        text: "I don't stage an office for the occasion. If the space has busy desks and a bit of mess on any given Tuesday, that's part of the real culture too. Over-tidying the setting before filming is the first thing that gives away a staged video.",
      },
      {
        type: "image",
        src: "/blog/video-cultura-de-empresa/intermedia.webp",
        alt: "Three coworkers laughing together during a break at the office",
        width: 1920,
        height: 1280,
        caption: "A spontaneous moment between colleagues says more than a scripted testimonial.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Asking employees to memorize lines about \"passion\" or \"family\", which sound forced the moment they're read to camera.",
          "Filming only executives and leaving out the people who actually do the work day to day.",
          "Using stock footage of generic offices instead of filming the company's real space.",
          "Editing the video with nothing but motivational music, without letting in any real ambient sound.",
          "Showing no moments of difficulty or learning, which makes the video come across as advertising rather than real culture.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long is a company culture video?",
        answer:
          "Between 90 seconds and 3 minutes if it's for social media or the careers page. If it's internal material or for a funding round, it can run to 5-6 minutes because the audience is already inclined to watch it all the way through.",
      },
      {
        type: "faq",
        question: "Do I need a locked script before filming?",
        answer:
          "I need a block outline: which moments will be filmed and in roughly what order. I don't need each person to have their lines written out, because that's exactly what makes the video sound staged.",
      },
      {
        type: "faq",
        question: "How many employees should appear?",
        answer:
          "I prefer four or five people from different roles and levels of seniority over twenty two-second appearances. With fewer people you can go a little deeper into each testimonial.",
      },
      {
        type: "faq",
        question: "Is it useful for recruiting or only for internal branding?",
        answer:
          "It works for both if distribution is well planned: the full version for the careers page and 15-20 second cuts for social media during active hiring campaigns.",
      },
      {
        type: "paragraph",
        text: "If you're thinking about filming a company culture video and want it to feel real rather than staged, tell me about your team and I'll suggest which moments to film. Get in touch via /en/contacto.",
      },
    ],
  },
  "video-aniversario-de-empresa": {
    title: "Company anniversary video: how to tell your story without making it a boring corporate video",
    description:
      "How I approach a company anniversary video so it's more than a string of figures and old photos: which story I choose, who I interview and what archive footage I ask for.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "company anniversary video",
      "corporate video",
      "corporate film",
      "brand storytelling",
      "video production",
    ],
    keyword: "company anniversary video",
    excerpt:
      "A company anniversary video can end up as a boring corporate video or become a piece people actually share. The difference lies in which story you decide to tell.",
    seoTitle: "Company Anniversary Video | Daniel Acero",
    metaDescription:
      "Company anniversary video: what to tell, who to interview and what to avoid so it doesn't look like a generic corporate video.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Every so often I'm commissioned to film a company anniversary video: 10 years, 15, sometimes 25. The brief almost always starts the same way: \"we want something emotional that sums up our story\". The problem is that most anniversary videos I've seen look alike: old black-and-white photos, orchestral music, a founder talking about the early days and a closing shot of the current logo. It works the first time you see it. By the fifth company doing the same thing, it says nothing.",
      },
      {
        type: "paragraph",
        text: "I've filmed several projects like this, and the hardest part isn't the production itself, it's deciding which story to tell and from what angle. Here's how I approach it from the first brief to final delivery.",
      },
      {
        type: "image",
        src: "/blog/video-aniversario-de-empresa/hero.webp",
        alt: "Office team celebrating a company anniversary with party hats and cake",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A company anniversary video isn't a chronological summary of corporate milestones. It's a piece that explains why the company is still standing after X years and what has changed along the way. The difference between a flat corporate video and one that works is whether it tells the story of a real decision, risk or turning point, instead of just listing growth figures.",
      },
      {
        type: "paragraph",
        text: "It matters because it's one of the few times a year a company gets permission to talk about itself without directly selling anything. It's screened at the internal celebration, shared with long-standing clients and often ends up on LinkedIn as a brand piece. If the video sounds like empty self-promotion, it has the opposite effect to the one intended.",
      },
      {
        type: "paragraph",
        text: "It also works internally. A team that has grown fast has people who joined six months ago and don't know the company's story first-hand. Done well, the anniversary video becomes a shared memory.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Choose a common thread, not a list of milestones" },
      {
        type: "paragraph",
        text: "Before filming anything, I ask the client to tell me, without looking at any corporate presentation, what the hardest moment of these years was and which one they remember most proudly. That informal conversation almost always yields better material than any milestone dossier they've prepared for me. The final video is built around that tension: what nearly didn't work out and how it was resolved.",
      },
      { type: "heading", level: 3, text: "Interview someone who's been there from the start, not just the founder" },
      {
        type: "paragraph",
        text: "The founder usually has the most polished story, but also the most rehearsed. I prefer to include someone who has been with the company almost since the beginning without being its public face: an operations manager, the first employee. Their version of events adds nuances the official story lacks.",
      },
      { type: "heading", level: 3, text: "Use real archive footage, not reconstructions" },
      {
        type: "paragraph",
        text: "If there are photos, home videos or recordings of old events, I ask for all of them, even if the image quality is poor. That real material, even if it was shot on a phone eight years ago, conveys more authenticity than any present-day re-enactment with actors in period dress.",
      },
      {
        type: "image",
        src: "/blog/video-aniversario-de-empresa/intermedia.webp",
        alt: "Coworkers celebrating an achievement together in the office",
        width: 1920,
        height: 1080,
        caption: "A real toast says more than any shot staged for the camera.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Reducing the video to a series of figures (revenue, headcount, offices) with no story to back them up.",
          "Filming only the leadership team and leaving out the people who run day-to-day operations.",
          "Using generic orchestral music that dozens of similar corporate videos have already used.",
          "Showing no moment of difficulty, which makes the celebration feel hollow.",
          "Stretching the video beyond 4-5 minutes because \"there's so much to tell\"; too much footage dilutes what really matters.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long should a company anniversary video be?",
        answer:
          "Between 3 and 5 minutes for the full version screened at the internal event. For social media, I usually cut 60-90 second edits focused on a single moment in the story.",
      },
      {
        type: "faq",
        question: "Do you need to hire actors to recreate the early days?",
        answer:
          "I don't recommend it. If there isn't enough archive footage, I'd rather have the person tell the anecdote to camera than reconstruct the scene with actors; it usually comes across as more credible.",
      },
      {
        type: "faq",
        question: "What if the company has been through a tough period (a crisis, layoffs, a change of direction)?",
        answer:
          "I don't hide it completely, but I don't go into detail either. One honest line about a difficult moment adds credibility to the rest of the video; ignoring it altogether makes the message sound artificial.",
      },
      {
        type: "faq",
        question: "Can the video be reused beyond the anniversary?",
        answer:
          "Yes. Cut into smaller pieces, it works as brand content on LinkedIn for months, and the long version works well on the \"about us\" section of the website.",
      },
      {
        type: "paragraph",
        text: "If your company is about to reach a milestone anniversary and you want the video to tell more than growth figures, tell me the story and I'll suggest how to structure it. Get in touch via /en/contacto.",
      },
    ],
  },
  "grabacion-croma-video-corporativo": {
    title: "Green screen for corporate video: when it makes sense to use it",
    description:
      "When it's worth shooting on green screen for a corporate video, what studio and equipment I need, and the lighting mistakes that ruin the chroma key in post-production.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "chroma key",
      "green screen",
      "corporate video",
      "video production",
      "post-production",
      "film studio",
    ],
    keyword: "green screen corporate video",
    excerpt:
      "Shooting on green screen isn't the default option: it only makes sense when the background has to change by channel or when there's no real location that works. Here's when I use it and when I rule it out.",
    seoTitle: "Green Screen for Corporate Video | Daniel Acero",
    metaDescription:
      "Green screen for corporate video: when it's worth it, what the studio needs and the lighting mistakes that ruin the chroma key.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "I'm asked to shoot on green screen less often than people think. Most of the corporate videos I make are filmed in the client's actual office, in a meeting room or at their industrial facility, because a real setting brings a credibility no virtual background can replace. But there are projects where green screen genuinely solves a specific problem: when the same video needs different backgrounds for each market, when there's no presentable location, or when the speaker will be composited over data graphics.",
      },
      {
        type: "paragraph",
        text: "Here I explain when I recommend green screen, what I need on set for a clean key and the mistakes I see again and again on improvised shoots with a green cloth bought online.",
      },
      {
        type: "image",
        src: "/blog/grabacion-croma-video-corporativo/hero.webp",
        alt: "Evenly lit green chroma key background used in professional video production",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "Chroma key is a compositing technique: I film the subject against a background of a uniform color (almost always green, blue if they're wearing green) and in post-production I replace that color with another image or video. It works well for corporate videos with on-screen graphics, results presentations with data floating around the speaker, or pieces translated into several languages with a different background for each region.",
      },
      {
        type: "paragraph",
        text: "It's important to decide on it before filming, not in post-production. Green screen requires specific lighting and a specific distance from the background; if it's shot without planning and then fixed in the edit, it shows: edges with a green halo, badly cut-out hair, shadows that give away the cloth.",
      },
      {
        type: "paragraph",
        text: "You also have to weigh the cost. A well-executed green screen shoot needs a studio, additional lighting and more post-production hours than an interview filmed on location. It's only worth it when the virtual background adds something the real location can't.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Keep the subject at least two meters from the background" },
      {
        type: "paragraph",
        text: "The most common mistake is standing the person right up against the green screen. I need at least two meters between subject and background so the green light doesn't spill onto skin or dark clothing. That distance also lets you throw the background out of focus, which helps the keying software separate the edges more cleanly.",
      },
      { type: "heading", level: 3, text: "Light the background separately from the subject" },
      {
        type: "paragraph",
        text: "The green background needs its own lighting, even and shadow-free, independent of the lights I use for the subject. If I light it with the same fixtures, darker patches appear on the cloth that later create holes in the key. I usually use two panels on either side of the background, at the same height, so it's even from corner to corner.",
      },
      { type: "heading", level: 3, text: "Avoid clothing and accessories in the same shade as the screen" },
      {
        type: "paragraph",
        text: "It sounds obvious, but it has slipped past me more than once: if the speaker is wearing a green shirt or glasses with a greenish reflection, those areas disappear when the key is applied. I check wardrobe before the session and ask for solid colors, neither green nor saturated blue, so separation in post-production is clean.",
      },
      {
        type: "image",
        src: "/blog/grabacion-croma-video-corporativo/intermedia.webp",
        alt: "Lighting and camera equipment in a corporate video studio",
        width: 1920,
        height: 1080,
        caption: "Lighting the background separately from the subject is what makes the difference in a clean key.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Shooting with too little distance between subject and background, which creates green halos in the hair and around the edges.",
          "Using a single light source for both subject and background, leaving some areas of the cloth darker than others.",
          "Recording in-camera with a low-quality codec, which makes a clean key harder in post-production.",
          "Choosing green screen by default when a real location would have made the message more credible.",
          "Not checking on the monitor how the keyed subject looks during the shoot itself, and only discovering the problem in the edit.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Do I need a studio to shoot on green screen, or is a backdrop enough?",
        answer:
          "A taut, well-lit green screen backdrop can work for simple shots, but for a corporate video with camera movement I prefer a studio cyclorama: the curved, cornerless surface avoids shadows at the joins and gives a much cleaner result.",
      },
      {
        type: "faq",
        question: "Green screen or blue screen: which should I use?",
        answer:
          "Almost always green, because digital cameras are more sensitive in that channel and it separates better in post-production. I only switch to blue if the subject is wearing green or has green elements in their wardrobe that can't be removed.",
      },
      {
        type: "faq",
        question: "How much time does green screen add to post-production?",
        answer:
          "It depends on the shot, but I estimate an extra 30 to 60 minutes per minute of final video to clean up edges, fine-tune the key and composite the final background, compared with a standard edit without green screen.",
      },
      {
        type: "faq",
        question: "Does green screen work well outdoors or only in a studio?",
        answer:
          "Outdoors it's much harder to control: the light changes, the wind moves the cloth and uneven shadows appear. If the project can be set up indoors with controlled lighting, I always recommend that over trying it outside.",
      },
      {
        type: "paragraph",
        text: "If your corporate video needs different backgrounds for each market or you want to composite the speaker over data graphics, tell me about the project and I'll tell you whether green screen is the right solution or whether it's better approached another way. Get in touch via /en/contacto.",
      },
    ],
  },
  "making-of-video-corporativo": {
    title: "Corporate behind-the-scenes video: what it is and when to film one",
    description:
      "What a corporate behind-the-scenes video is, when it adds real value beyond the main video and how I plan it from the brief so the shooting effort isn't duplicated.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "making-of",
      "corporate video",
      "video production",
      "behind the scenes",
      "social media content",
      "Madrid",
    ],
    keyword: "corporate behind the scenes video",
    excerpt:
      "A behind-the-scenes video isn't the leftovers of the main shoot. It only works if it's planned from the brief, with its own goal and its own format. Here's when I recommend it and when I'd rather not film one.",
    seoTitle: "Corporate Behind-the-Scenes Video: When to Film It | Daniel Acero",
    metaDescription:
      "Corporate behind-the-scenes video: what it is, when it adds value and how I plan it alongside the main video without duplicating the shooting effort.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "When a client asks me for a behind-the-scenes video, half the time what they picture is a video that comes free with the main shoot. Someone films on their phone while I work and then something gets cut together from whatever there is. That kind of making-of almost never gets used: it sits in a Drive folder and nobody watches it.",
      },
      {
        type: "paragraph",
        text: "The making-of that does work is the one decided before arriving on set, with a clear goal and a format designed for where it will be published. Here's when it makes sense to add one to a project and when I'd rather tell the client they don't need it.",
      },
      {
        type: "image",
        src: "/blog/making-of-video-corporativo/hero.webp",
        alt: "Professional film clapperboard on the floor, behind the scenes of a video production",
        width: 1920,
        height: 1298,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate behind-the-scenes video is a piece that shows how the main video was made: the crew at work, the scene being set up, moments from the shoot that don't make the final cut. It isn't the main video with a different filter; it's separate content with a different goal.",
      },
      {
        type: "paragraph",
        text: "It matters because it humanizes the brand in a way a polished corporate video can't. A potential client watches the final video and assumes everything went perfectly on the first try. The making-of shows the lighting setup, the director giving notes, the speaker repeating a line for the third time. That builds closeness, and it works very well on internal channels or LinkedIn when the company wants to show its work culture.",
      },
      {
        type: "paragraph",
        text: "But it only adds value if it has a clear place to live: a company LinkedIn post, a video for HR's internal channels, employer branding content. If there's no channel planned for it, it never gets published and all the extra filming time is wasted.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Assign a second camera just for the making-of" },
      {
        type: "paragraph",
        text: "I don't try to get the making-of with the same camera I use for the main video between takes. I bring a second camera, usually a compact or a well-stabilized phone, and someone on the crew dedicates themselves exclusively to capturing the process without getting in the way of the actual shoot.",
      },
      { type: "heading", level: 3, text: "Film the process, not just random bloopers" },
      {
        type: "paragraph",
        text: "A making-of made of random shots of people moving cables tells no story. I look for moments with a narrative: setting up the lighting before the speaker arrives, the director's instructions before a take, the crew's reaction when it goes well. Four or five specific moments, not an hour of unstructured footage.",
      },
      { type: "heading", level: 3, text: "Edit it as a standalone piece, not as leftovers" },
      {
        type: "paragraph",
        text: "The making-of has its own edit, its own music and its own length, almost always between 60 and 90 seconds for social media. It isn't an outtake from the main video with a 'behind the scenes' title slapped on top. If I don't give it dedicated editing time, it shows and it doesn't get published.",
      },
      {
        type: "image",
        src: "/blog/making-of-video-corporativo/intermedia.webp",
        alt: "Professional video camera on a tripod at a corporate video shoot",
        width: 1920,
        height: 1280,
        caption: "A making-of needs its own camera and its own edit so it doesn't take hours away from the main shoot.",
      },
      { type: "heading", level: 2, text: "When it makes sense" },
      {
        type: "list",
        items: [
          "When the company has an active employer branding or internal culture channel to publish it on.",
          "When the main shoot is a large production, with a set, lighting or a striking location worth showing.",
          "When the goal is to strengthen the brand of the team or studio, not just the client's video.",
          "When there's budget and time for a dedicated second camera without taking resources from the main shoot.",
          "When it does NOT make sense: if it's a short half-day shoot with no spare time, or if nobody on the client's team is going to publish it anywhere.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Does a making-of add time to the shoot?",
        answer:
          "It shouldn't, if it's well planned. The second camera films in parallel without stopping the main shoot. What it does add is separate editing time, usually between 2 and 4 hours for a 60-90 second piece.",
      },
      {
        type: "faq",
        question: "Do I need an extra camera operator or can someone on the team film it?",
        answer:
          "With small crews, I usually ask the production person or the assistant to spend spare moments filming on their phone. On large shoots I do prefer a dedicated second operator, because it makes a big difference to the making-of's narrative.",
      },
      {
        type: "faq",
        question: "Is the making-of published before or after the main video?",
        answer:
          "Almost always after, as complementary content that expands the story once the main video is already out there. Publishing it beforehand only makes sense if it's used as a teaser to build anticipation.",
      },
      {
        type: "faq",
        question: "Is it worth it for a small shoot with a single interview?",
        answer:
          "Rarely. In a session of a couple of hours with one person in front of the camera, there isn't enough visual process to show. A making-of pays off on productions with more going on: sets, multiple locations, a large crew.",
      },
      {
        type: "paragraph",
        text: "If your next production is substantial enough to justify a making-of, tell me about the project and we'll plan it together from the brief so it isn't a last-minute add-on. Get in touch via /en/contacto.",
      },
    ],
  },
  "storytelling-video-corporativo": {
    title: "Storytelling in corporate video: how I structure the narrative",
    description:
      "How I build the storytelling in a corporate video: why I start with the conflict rather than the company, who the protagonist is and how I keep the script from turning into a list of features.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "storytelling",
      "corporate video",
      "narrative",
      "scriptwriting",
      "video production",
      "branding",
    ],
    keyword: "corporate video storytelling",
    excerpt:
      "Storytelling in corporate video isn't adding emotion to a product catalog. It's deciding on a conflict, a human protagonist and a resolution before writing the first line of the script.",
    seoTitle: "Storytelling in Corporate Video | Daniel Acero",
    metaDescription:
      "Storytelling in corporate video: how I choose the conflict, the protagonist and the narrative arc so the video is remembered and isn't just a list of features.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "When a client tells me they want to 'tell a story' in their corporate video, they almost always mean something different from what they then ask for in the script. They want emotion, but they also want all ten products, the three brand values and the logo in the first five seconds. That isn't storytelling; it's a catalog with background music.",
      },
      {
        type: "paragraph",
        text: "Storytelling in corporate video works when there's a real narrative structure behind it: a conflict, a protagonist and a resolution. You don't need a fiction script, but you do need to give up on cramming in everything the company would like to say.",
      },
      {
        type: "image",
        src: "/blog/storytelling-video-corporativo/hero.webp",
        alt: "Film clapperboard marking take 3 during a corporate video shoot",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "Storytelling, in this context, means deciding what the video is about before deciding what to show. Most corporate videos without a narrative are a list of reasons to hire the company, ranked by importance. They're understood, but not remembered.",
      },
      {
        type: "paragraph",
        text: "It matters because people remember stories, not lists of features. If the video sets up a real problem at the start and a resolution at the end, the viewer stays to the end to find out how it turns out. If the video opens with 'we've been an industry leader since 2005', it has already lost half the audience by second three.",
      },
      {
        type: "paragraph",
        text: "It isn't just a script issue. A shoot designed to tell a story also changes which shots I ask for, the order I interview people in and the questions I ask. If I know the video revolves around a problem the team solved, I steer the interview toward that moment rather than toward a list of generic achievements.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "I start with the conflict, not the company" },
      {
        type: "paragraph",
        text: "Before writing a single line about the company, I define the problem the video solves for the person watching. It might be an end customer's problem, an internal challenge for the team or a doubt the viewer has about whether to trust the brand. That conflict is the opening shot, not the logo.",
      },
      { type: "heading", level: 3, text: "I choose a human protagonist" },
      {
        type: "paragraph",
        text: "A company can't be the protagonist of a story; it's an abstract entity. The protagonist is always a person: an employee, a customer, a founder. I interview that person with questions that look for the moment of doubt or difficulty, not just the end result. 'Tell me about when you didn't know if this was going to work' gives better material than 'tell me why your product is good'.",
      },
      { type: "heading", level: 3, text: "I build a before-and-after arc" },
      {
        type: "paragraph",
        text: "Every section of the script has to move the story from point A to point B. If a section just repeats information the previous one already gave in other words, I cut it. In the edit I explicitly mark where the before is (the uncomfortable situation) and where the after is (the resolution) so the viewer feels the movement.",
      },
      {
        type: "image",
        src: "/blog/storytelling-video-corporativo/intermedia.webp",
        alt: "Video editing timeline in professional editing software",
        width: 1920,
        height: 1280,
        caption: "The edit is where it finally becomes clear whether the story has a clear before and after.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Cramming every product or service into the same video instead of choosing a single story.",
          "Starting with the company ('we're leaders in...') instead of the conflict or the viewer's question.",
          "Using testimonials that only say everything was perfect, without mentioning any real difficulty.",
          "Writing a script full of stock phrases ('passion', 'excellence', 'commitment') that says nothing concrete.",
          "Ending the video without a clear resolution, leaving the viewer unsure what happened in the end.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Does storytelling work for any type of corporate video?",
        answer:
          "It works best in corporate, brand and testimonial videos, where there's room to develop a story. For a highly technical product video or an internal tutorial, classic narrative matters less than clarity of information.",
      },
      {
        type: "faq",
        question: "Do I need a scriptwriter or can I write it myself?",
        answer:
          "For short videos, one to three minutes, I usually write the script myself from the client's brief. For longer pieces or ones with several protagonists, I recommend bringing in a script specialist just for that phase.",
      },
      {
        type: "faq",
        question: "How much time does storytelling add to pre-production?",
        answer:
          "Between two and four extra hours of work on the script and interview structure, compared with a bullet-point script. You get it back in the edit, because there's less unused footage and less indecision about what to cut.",
      },
      {
        type: "faq",
        question: "How do I know if my video has a story or is just a list of facts?",
        answer:
          "Ask yourself whether someone could explain what happened in the video in two sentences, with a before and an after. If you can only summarize it as a list of topics (it covers history, team, values and clients), there's no story yet, just a table of contents.",
      },
      {
        type: "paragraph",
        text: "If you have a corporate video in mind and don't know how to find the story, tell me the context and I'll help you find the real conflict before writing the script. Get in touch via /en/contacto.",
      },
    ],
  },
  "video-corporativo-multisede": {
    title: "Multi-location corporate video: how I coordinate shoots across several cities",
    description:
      "How I organize a corporate video when the company has offices in several cities: shared art direction, shooting order, a crew that travels and visual consistency across locations.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "multi-location",
      "video production",
      "shoot logistics",
      "companies with multiple offices",
    ],
    keyword: "multi-location corporate video",
    excerpt:
      "Filming at several locations isn't repeating the same shoot three times. The crew changes, the light changes, who's available changes. And the result has to look like it was shot by the same person on the same afternoon.",
    seoTitle: "Multi-Location Corporate Video: How to Coordinate It | Daniel Acero",
    metaDescription:
      "Multi-location corporate video: how I coordinate shoots across several cities without losing visual consistency or blowing the schedule.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "When a company has offices in Madrid, Barcelona and Valencia, the corporate video stops being a shoot. It becomes a logistics operation that happens to involve a camera.",
      },
      {
        type: "paragraph",
        text: "Coordinating several locations from a single brief is different from repeating the same shoot three times. The staff available at each office changes, the light in each space changes, who can sit in front of the camera on that particular day changes. And even so, the final result has to look as if it was shot by the same person on the same afternoon.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-multisede/hero.webp",
        alt: "Director working with a subject during an on-location shoot",
        width: 1920,
        height: 1277,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A multi-location corporate video is any piece that needs footage filmed at more than one of the same company's sites: different offices, different plants, different countries. I'm not talking about filming outdoors for a day, but about repeating the whole process (lighting, sound, interviews) at each site without the final edit giving away the jump between cities.",
      },
      {
        type: "paragraph",
        text: "It matters because more and more companies want videos that represent the whole organization, not just headquarters. An employer branding video that only shows Madrid when the company has 200 people in Barcelona falls short. The same goes for culture videos, annual results videos or investor videos: if the company operates in several places, the video has to reflect that or it loses credibility.",
      },
      {
        type: "paragraph",
        text: "The real risk isn't logistical, it's visual. If each location is filmed with different lighting, different framing and a different interview tone, the viewer notices the seams between sections even if they can't explain why. That's where you can tell whether there was art direction planned in advance or whether each stop on the trip was figured out on the fly.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "A single art direction document" },
      {
        type: "paragraph",
        text: "Before booking the first ticket, I lock in a short document with the color palette, the interview shot type (framing, camera height, focal length) and the list of core questions. That document travels with me to every location, and it's what lets me make quick decisions when the real space looks nothing like the photos I was sent.",
      },
      { type: "heading", level: 3, text: "I plan the order of locations by logistics, not importance" },
      {
        type: "paragraph",
        text: "It sounds obvious but it's often ignored: the order of the cities is decided by the flight or train, not the org chart. If Madrid and Valencia can be chained together over two days with a short journey, they go together, even if the Valencia office is smaller. Leaving logistics until the end is the fastest way to end up rushing the shoot on the last day.",
      },
      { type: "heading", level: 3, text: "A small crew that travels, not different crews in each city" },
      {
        type: "paragraph",
        text: "For 3 locations I usually travel with a crew of 2 (camera and sound) who repeat at every site, instead of hiring local operators in each city. It costs more in tickets and hotels, but the visual consistency you gain makes up for it: the same person who set the exposure in Madrid knows how to replicate that decision in Bilbao without having to explain it in writing.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-multisede/intermedia.webp",
        alt: "Video production crew waiting on the tarmac next to a light aircraft before traveling to the next location",
        width: 1920,
        height: 1080,
        caption: "With 3 or more locations, the flight schedule shapes the script as much as the content does.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Hiring different film crews at each location without a shared art direction document.",
          "Not accounting for real travel times between locations on the same shoot day.",
          "Filming each location at a different color temperature and counting on fixing it all in post-production.",
          "Adapting the script on the fly at each office instead of starting from a common structure.",
          "Not confirming the local subjects' actual availability before buying tickets.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does it cost to film a corporate video across several locations?",
        answer:
          "It depends on the number of cities and whether you need to fly or can take the train. As a guide, for 3 locations in Spain with day trips, the extra budget over a single-location shoot is usually €800 to €1,500 in travel, per diems and crew accommodation.",
      },
      {
        type: "faq",
        question: "How many days does it take to film at 3 locations?",
        answer:
          "With 4 hours of actual filming per location and short journeys between cities, I usually plan 3 or 4 full days, including a buffer day for flight issues or subject availability.",
      },
      {
        type: "faq",
        question: "Can I use local film crews in each city to cut costs?",
        answer:
          "You can, and sometimes it's the only option if there are many locations or the budget is tight. The risk is visual consistency: you need a very detailed art direction document and a coordination call with each operator before filming, or the final edit will look disjointed.",
      },
      {
        type: "faq",
        question: "How do I keep visual consistency without traveling with the same crew to every location?",
        answer:
          "By setting the non-negotiable technical parameters in advance: the same camera or an equivalent model, the same color profile, the same camera height and distance for interviews, and the same 2- or 3-point lighting setup. The more tightly defined that document is, the less the result depends on who's holding the camera.",
      },
      {
        type: "paragraph",
        text: "If your company has several locations and you need a corporate video that represents them all without showing the seams between cities, tell me how many locations there are and what timeline you're working with via /en/contacto.",
      },
    ],
  },
  "video-corporativo-seguridad-laboral": {
    title: "Workplace safety corporate video: how I film it properly",
    description:
      "How I film a workplace safety video for industrial companies: the real on-site procedure, a script validated by the safety officer, clear shots and short pieces for each risk.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "workplace safety",
      "occupational health and safety",
      "internal training",
      "industrial video",
    ],
    keyword: "workplace safety training video",
    excerpt:
      "A workplace safety video doesn't sell, it teaches. I film the plant's real procedure, validate it with the safety officer and leave it ready to be watched as many times as needed.",
    seoTitle: "Workplace Safety Corporate Video | Daniel Acero",
    metaDescription:
      "Workplace safety corporate video: how I film clear, validated health and safety procedures for industrial plants in Madrid.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "A workplace safety video isn't just any corporate video. It has to teach an exact procedure, not sell an idea. If the worker watching doesn't understand right away how to put on the harness or where the forklift must not pass, the video has failed.",
      },
      {
        type: "paragraph",
        text: "I've spent several years filming this kind of piece for industrial and construction companies in Madrid. The difference from a regular corporate video is the approach: here the star is the procedure, not the person explaining it.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-seguridad-laboral/hero.webp",
        alt: "Construction workers coordinating on site before filming a workplace safety video",
        width: 1920,
        height: 840,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A workplace safety corporate video is the audiovisual piece a company uses to train its workforce in risk prevention: PPE use, evacuation protocols, machinery operation, what to do in an accident. It doesn't replace mandatory in-person training, but it reinforces it and leaves material that can be rewatched as many times as needed.",
      },
      {
        type: "paragraph",
        text: "It matters because the law requires occupational risk prevention training, and a well-made video meets that obligation better than a 40-page PDF nobody finishes reading. A worker retains much more from watching 4 minutes of video with the real procedure filmed in their own plant than from reading a generic manual translated from another country.",
      },
      {
        type: "paragraph",
        text: "It also matters for legal liability. If there's an accident and the company can show it trained its workforce with clear, specific and dated material, its position in an inspection or a claim changes completely.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "I film the real procedure, not a generic re-enactment" },
      {
        type: "paragraph",
        text: "The most common mistake is buying a generic stock safety video and putting the company logo on it. It doesn't work. I film in the actual plant, with the actual machinery and, whenever possible, with one of the company's own workers demonstrating the procedure. The worker watching recognizes the place and the machine, and that makes them pay attention.",
      },
      { type: "heading", level: 3, text: "The script is reviewed by the safety officer, not just communications" },
      {
        type: "paragraph",
        text: "Before filming, the script goes through the company's risk prevention officer. A mistake in the order of a procedure (for example, cutting the power before isolating a machine) can turn the video into a legal problem instead of a solution. That technical review is non-negotiable, even if it pushes the schedule back a week.",
      },
      { type: "heading", level: 3, text: "Clear shots, no decoration" },
      {
        type: "paragraph",
        text: "No aerial drone shots or dramatic background music. I prioritize close-ups of hands, static framing that shows the full step-by-step, and captions naming each piece of PPE or tool. In post-production I check those captions and the subtitles in DaVinci Resolve before delivering the master: aesthetics always take a back seat to clarity.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-seguridad-laboral/intermedia.webp",
        alt: "Workers in high-visibility vests on the set of a workplace safety video",
        width: 1920,
        height: 1280,
        caption: "On site, the high-visibility vest and hard hat aren't props: they're mandatory, even for the film crew.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Using generic stock video instead of filming the plant's real procedure.",
          "Not validating the technical script with the safety officer before filming.",
          "Filming artistic shots that make it hard to see the details of the procedure.",
          "Making a single 20-minute video instead of short pieces for each procedure.",
          "Not subtitling the video for staff whose first language isn't Spanish.",
          "Not planning an annual review of the content when regulations or machinery change.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Does a workplace safety video replace in-person health and safety training?",
        answer:
          "No. Regulations require in-person training certified by a qualified professional. The video is a reinforcement: it's useful for reviewing the procedure before a specific task or for training someone who joins outside the general training calendar.",
      },
      {
        type: "faq",
        question: "How long is a well-made workplace safety video?",
        answer:
          "Between 3 and 6 minutes per procedure. If the company needs to cover several risks (PPE, evacuation, forklift operation), I prefer to film short standalone pieces rather than one long video nobody watches to the end.",
      },
      {
        type: "faq",
        question: "How much does it cost to film a workplace safety video?",
        answer:
          "For a day of filming at a single plant covering 2 or 3 procedures, the budget usually ranges from €1,200 to €2,500, depending on whether graphics with captions and subtitles in several languages are needed.",
      },
      {
        type: "faq",
        question: "Do you need an actor or can a real company employee appear?",
        answer:
          "A real employee is better, as long as they're willing and know the procedure well. The goal is for the rest of the workforce to identify with the person on screen, not for it to look like an ad.",
      },
      {
        type: "paragraph",
        text: "If your company needs to train its workforce in risk prevention with a clear video validated by your safety officer, tell me about the plant and the procedures you want to cover via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-inmobiliario": {
    title: "Corporate video for the real estate sector: how I approach it",
    description:
      "How I approach corporate video for property developers and real estate agencies in Madrid: what to film at each construction stage, which shots actually sell and which interior mistakes I avoid.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "real estate",
      "real estate video",
      "real estate marketing",
      "video production",
      "Madrid",
    ],
    keyword: "real estate corporate video",
    excerpt:
      "In real estate I don't sell square meters, I sell what it's like to live in that space. That's why I prioritize natural light, the real surroundings and shots a render will never convey.",
    seoTitle: "Corporate Video for Real Estate | Daniel Acero",
    metaDescription:
      "Corporate video for the real estate sector: how I film developments and offices for property developers and real estate agencies in Madrid, with shots that actually sell.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "A poorly planned real estate video shows square meters. A well-planned one shows what it's like to live there. That difference is what decides whether someone keeps watching to the end or closes it after five seconds.",
      },
      {
        type: "paragraph",
        text: "I've spent several years filming for property developers and real estate agencies in Madrid, covering new homes as well as offices and retail spaces. The challenge is always the same: turning an empty or half-built space into somewhere someone can picture themselves living.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-inmobiliario/hero.webp",
        alt: "Modern home interior with natural light and high-quality finishes",
        width: 1920,
        height: 1016,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for the real estate sector serves different goals depending on who commissions it: a developer wants to sell off-plan or completed homes, an agency wants to position itself as the go-to name in an area, and a company with offices or warehouses wants to show its facilities to clients or investors. What they have in common is that the video has to partly replace the physical viewing.",
      },
      {
        type: "paragraph",
        text: "It matters because in this sector the buying decision is slow and expensive, and the first filter almost always happens on a screen. If the video doesn't show how the morning light comes in or how close the metro is, that lead is lost before they book a viewing.",
      },
      {
        type: "paragraph",
        text: "It also matters because it competes directly with 3D renders. A render sells a promise; real video, once construction is well under way, sells certainty. And that certainty is what books viewings.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "I film in stages, not just at the end" },
      {
        type: "paragraph",
        text: "For new-build homes, I plan short shoots at different points in construction: structure, facade and model-unit handover. It isn't just social media content during the build; it's proof the project is genuinely progressing, something a buyer who has already paid a deposit values a lot.",
      },
      { type: "heading", level: 3, text: "I prioritize natural light and real spaces over empty shots" },
      {
        type: "paragraph",
        text: "I always film with natural light as the star, at the time of day when it best enters each room. And I avoid static shots of empty rooms with no sense of scale: I add a reference piece of furniture, a person walking down the hallway, something that gives the real size of the space. Without it, any living room looks smaller than it is.",
      },
      { type: "heading", level: 3, text: "The surroundings matter as much as the home" },
      {
        type: "paragraph",
        text: "Part of the shoot always happens outside: the neighborhood, access to the metro or the highway, the park next door, the communal areas if the development has them. That's what really decides many purchases, and it's exactly what a render never shows naturally.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-inmobiliario/intermedia.webp",
        alt: "Work meeting reviewing the strategy for a real estate development",
        width: 1920,
        height: 1280,
        caption: "Before filming, I go over with the sales team which selling point the video needs to get across.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Relying only on 3D renders when construction is far enough along to film for real.",
          "Filming interiors without controlled natural light, leaving spaces looking cold and artificial.",
          "Not showing the surroundings (neighborhood, transport links, communal areas), which is often what decides the purchase.",
          "Using one generic video for every development instead of tailoring it to each one's target buyer.",
          "Forgetting current drone regulations when planning an aerial shot of the development.",
          "Delivering only a long horizontal cut, with no vertical edits designed for Instagram or property portals.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a real estate development cost?",
        answer:
          "For a development with a model unit and a drone shot of the building, the usual range is €1,500 to €3,500, depending on the number of rooms and whether several deliverables are needed (horizontal for the website and verticals for social media).",
      },
      {
        type: "faq",
        question: "Is it better to film the property furnished or empty?",
        answer:
          "Furnished, whenever possible. An empty apartment loses scale and warmth on camera. If there's no real furniture, I use at least a few reference pieces (a table, a chair) so the viewer understands the real size of each room.",
      },
      {
        type: "faq",
        question: "How long is a good real estate video?",
        answer:
          "Between 60 and 90 seconds for the main cut of a home or retail space. For a whole development with several unit types, I prefer a slightly longer video (2 to 3 minutes) plus short cuts for each unit type for social media.",
      },
      {
        type: "faq",
        question: "Do you need a drone for this type of video?",
        answer:
          "Not always, but it really helps place the development in its surroundings: proximity to roads, green spaces, other buildings. If location is the main selling point, I do recommend it. If the selling point is the interior, it isn't essential.",
      },
      {
        type: "paragraph",
        text: "If you're launching a development or want to show your offices to clients and investors, tell me about the project and the stage it's at via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-sanitario": {
    title: "Corporate video for the healthcare sector: how I approach it",
    description:
      "How I approach corporate video for clinics, hospitals and healthcare centers in Madrid: patient privacy, clinical lighting and the shots that build real trust.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "healthcare",
      "video for clinics",
      "healthcare marketing",
      "video production",
      "Madrid",
    ],
    keyword: "healthcare corporate video",
    excerpt:
      "In healthcare, video doesn't sell a service, it sells trust. That's why I take as much care over patient privacy as over shots that convey professionalism without feeling cold.",
    seoTitle: "Corporate Video for the Healthcare Sector | Daniel Acero",
    metaDescription:
      "Corporate video for the healthcare sector: how I film in clinics and medical centers in Madrid while protecting patient privacy and building real trust.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "In healthcare, video doesn't sell a treatment, it sells trust. A patient looking for a clinic doesn't just compare prices; they compare who will be treating them and under what conditions. If the video doesn't convey professionalism and warmth at the same time, it isn't doing its job, however good the image quality.",
      },
      {
        type: "paragraph",
        text: "I've filmed at dental clinics, physiotherapy centers and private medical practices in Madrid, and the challenge is always the same: showing a clinical space without it looking cold, and showing the medical team without it looking like a generic stock ad.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-sanitario/hero.webp",
        alt: "Corridor in a healthcare center with benches and consulting room doors",
        width: 1920,
        height: 1440,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for the healthcare sector serves different goals depending on who commissions it: a clinic wants to present its facilities and medical team, a center wants to explain a specific treatment, and a private hospital wants to strengthen its brand against the competition. What they have in common is that the video partly replaces the first in-person visit.",
      },
      {
        type: "paragraph",
        text: "It matters because deciding to go to a clinic means putting your body, or your face, in someone's hands. That level of trust isn't built with epic music and stock footage; it's built by seeing the real space, the equipment and, above all, the people who will be looking after you.",
      },
      {
        type: "paragraph",
        text: "It also matters because in this sector data protection and patient image rights are stricter than in any other. A poorly planned video doesn't just look worse; it can create a serious legal problem if a patient is filmed without explicit written consent.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Consent is handled before the camera is switched on" },
      {
        type: "paragraph",
        text: "Before any shoot involving real patients, I ask the clinic to have signed consent specifically for audiovisual use, not just for the treatment. If there isn't time to arrange it in advance, I either film with volunteer patients from the team itself or focus on shots of the facilities and healthcare staff without identifiable patients.",
      },
      { type: "heading", level: 3, text: "Clinical lighting needs its own treatment" },
      {
        type: "paragraph",
        text: "Fluorescent lighting in a consulting room tends to look flat and harsh on camera. I always add a soft light source (a diffused LED panel) to soften shadows on faces without losing the clean, clinical look the space needs to convey. No dark or warm setups: in healthcare, visual cleanliness is part of the message.",
      },
      { type: "heading", level: 3, text: "The medical team talks, they don't recite" },
      {
        type: "paragraph",
        text: "When I film a doctor or physiotherapist explaining a treatment, I avoid a word-for-word memorized script: it sounds artificial and it shows. I prefer open questions, with a teleprompter only as support for key ideas, and I let the person speak in their own words. You shoot more footage, but the result sounds like a real person, not a commercial.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-sanitario/intermedia.webp",
        alt: "Medical consultation with a conversation between a healthcare professional and a patient",
        width: 1920,
        height: 1251,
        caption: "Before filming, I go over with the clinic which message of trust the video needs to get across.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming recognizable patients without signed consent specifically for audiovisual use.",
          "Using aggressive music or editing pace, which sets the wrong tone in a healthcare context.",
          "Leaving fluorescent lighting uncorrected, with flat faces and harsh shadows.",
          "Word-for-word memorized scripts that sound like an ad and undermine the professional's credibility.",
          "Not showing the equipment or the cleanliness of the space, which is exactly what a patient wants to check.",
          "Filming only the building and forgetting the people, who are what really builds trust.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a clinic or medical center cost?",
        answer:
          "For a clinic with facilities and two or three interviews with the medical team, the usual range is €1,200 to €3,000, depending on the final length and whether several pieces for social media are needed.",
      },
      {
        type: "faq",
        question: "Is consent mandatory for patients who appear in the video?",
        answer:
          "Yes, always. Consent for the medical treatment isn't enough: you need specific consent for the use of their image in corporate or marketing video, signed before filming.",
      },
      {
        type: "faq",
        question: "How long is a good video for a clinic?",
        answer:
          "Between 60 and 120 seconds for the main introduction video. If the goal is to explain a specific treatment, I prefer shorter, more focused pieces of 30 to 45 seconds designed for social media.",
      },
      {
        type: "faq",
        question: "Can you film without disrupting the clinic's activity?",
        answer:
          "Yes, by scheduling the shoot at quieter times or in rooms that aren't in use that day. I always agree a schedule with the center's management that doesn't affect patient care.",
      },
      {
        type: "paragraph",
        text: "If you run a clinic or healthcare center and want a video that builds real trust while protecting your patients' privacy, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-educativo": {
    title: "Corporate video for the education sector: how I approach it",
    description:
      "How I approach corporate video for schools, academies and universities in Madrid: image permissions for minors, real energy and what builds trust with families.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "education sector",
      "video for schools",
      "education marketing",
      "video production",
      "Madrid",
    ],
    keyword: "education corporate video",
    excerpt:
      "In education, video doesn't just sell a school, it sells a decision about a child's future or a career. That's why I take as much care over minors' image rights as over the real atmosphere a classroom conveys.",
    seoTitle: "Corporate Video for the Education Sector | Daniel Acero",
    metaDescription:
      "Corporate video for the education sector: how I film at schools and universities in Madrid, protecting minors' image rights and showing the school's real atmosphere.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "In education, video doesn't sell an enrollment, it sells a decision about the future. A family choosing a school for their child, or a student choosing a university, doesn't just compare curricula: they compare the environment that person will live in for years. If the video doesn't convey that, it's just another institutional brochure.",
      },
      {
        type: "paragraph",
        text: "I've filmed at schools, academies and university faculties in Madrid, and the challenge is always the same: showing the real energy of the classrooms without falling into a stiff corporate video, and handling minors' image rights with the care the law and common sense demand.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-educativo/hero.webp",
        alt: "Students walking across a university campus",
        width: 1920,
        height: 1278,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for the education sector serves different goals depending on who commissions it: a school wants to show its facilities and teaching approach at an open house, an academy wants to show its students' real results, and a university wants to strengthen its brand against other faculties with similar offerings. What they have in common is that the video partly replaces the in-person visit many families never get around to making.",
      },
      {
        type: "paragraph",
        text: "It matters because choosing a school is a high-stakes decision, both financially and emotionally. Nobody enrolls their child, or themselves in a degree, based only on a curriculum PDF. You need to feel the atmosphere: how students move through the hallways, how a teacher talks about their subject, what the place looks like on a normal school day.",
      },
      {
        type: "paragraph",
        text: "It also matters because the rules protecting minors' image rights are stricter here than in almost any other sector. A well-intentioned video can become a serious problem if an identifiable student appears without signed authorization from their family.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Consent for minors is arranged with the school, not on shoot day" },
      {
        type: "paragraph",
        text: "Before filming, I ask the school to identify which students have image authorization signed by their families, something many schools already collect at the start of the year. If that hasn't been arranged in advance, I prioritize wide shots where no face is clearly identifiable, or I film only with adult students and teaching staff.",
      },
      { type: "heading", level: 3, text: "Real energy is worth more than an empty classroom" },
      {
        type: "paragraph",
        text: "A shot of empty desks in midday light conveys nothing. I prefer to film a class in progress, a lab in use, recess, a hallway between lessons. You lose some control over composition, but you gain what really convinces a family: seeing that the school has a life of its own.",
      },
      { type: "heading", level: 3, text: "Teachers and students speak in their own words" },
      {
        type: "paragraph",
        text: "When I film a teacher or a former student talking about their experience, I avoid memorized scripts: it's obvious right away and undermines credibility. I prefer open questions, with a teleprompter only as support for key ideas, and I let the person speak in their own words. The result sounds like a real testimonial, not a school ad.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-educativo/intermedia.webp",
        alt: "Teacher talking with a group of students in the classroom",
        width: 1920,
        height: 1280,
        caption: "Before filming, I check with the school which time of day best shows its real atmosphere.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming identifiable minors without image authorization signed by their families.",
          "Showing only the building and empty classrooms, without the real atmosphere of students and teachers.",
          "Word-for-word recited scripts that sound like an corporate ad, not a testimonial.",
          "Not coordinating the shoot with school management, interrupting lessons or exams.",
          "Using music and editing pace designed for a different audience that doesn't connect with families or young people.",
          "Not including concrete results (career outcomes, former student testimonials), which is what really builds trust.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a school or university cost?",
        answer:
          "For a school with facilities and two or three testimonials from teachers or students, the usual range is €1,200 to €3,000, depending on the final length and whether additional pieces for social media are needed.",
      },
      {
        type: "faq",
        question: "Is parental consent mandatory to film students?",
        answer:
          "Yes, whenever the minor is identifiable in the video. Many schools already collect this authorization at the start of the year, but it's worth confirming it specifically for audiovisual use before filming.",
      },
      {
        type: "faq",
        question: "How long is a good corporate video for a school?",
        answer:
          "Between 90 and 150 seconds for the main video presenting the school. For open houses or social media, I prefer shorter pieces of 30 to 45 seconds focused on a single message.",
      },
      {
        type: "faq",
        question: "Can you film without interrupting lessons?",
        answer:
          "Yes, by scheduling the shoot between lessons, during breaks or in specific time slots agreed with management. I always avoid walking into a classroom in the middle of an explanation or an exam.",
      },
      {
        type: "paragraph",
        text: "If you run a school, academy or faculty and want a video that conveys your school's real atmosphere while protecting your students' image rights, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-tecnologico": {
    title: "Corporate video for the tech sector: how I approach it",
    description:
      "How I approach corporate video for startups and software companies in Madrid: making an intangible product visible, showing the real team and avoiding the generic stock-footage feel.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "tech sector",
      "startup video",
      "product video",
      "video production",
      "Madrid",
    ],
    keyword: "tech company corporate video",
    excerpt:
      "In tech the problem is almost never the budget, it's that the product can't be seen. That's why my work starts by translating what the software does into something people understand in ten seconds.",
    seoTitle: "Corporate Video for the Tech Sector | Daniel Acero",
    metaDescription:
      "Corporate video for the tech sector: how I film for startups and software companies in Madrid, showing product and team without falling into generic video.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "A startup or software company almost never has a budget problem with its corporate video. It has a translation problem: what it sells can't be seen. A product that lives inside a screen, a service running on a server, an algorithm that solves something the client can't even name.",
      },
      {
        type: "paragraph",
        text: "I've filmed for several tech companies in Madrid, and the challenge almost always plays out the same way: turning something intangible into images a client understands in the first ten seconds, without falling into the generic corporate video of hands typing on keyboards and charts floating over green screens.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-tecnologico/hero.webp",
        alt: "Tech startup team working together on laptops in an office",
        width: 1920,
        height: 1281,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for the tech sector usually pursues one of three goals: presenting the product to a potential client, giving an investor confidence, or showing company culture to attract talent. Each goal calls for a different video, although many companies try to cover all three with the same piece and end up falling short on all of them.",
      },
      {
        type: "paragraph",
        text: "It matters because in tech, trust is built differently than in other sectors. A client can't touch the product before buying it, so they need to see who's behind it: the team, the office, the way they work. That reduces perceived risk in a way no landing page manages on its own.",
      },
      {
        type: "paragraph",
        text: "It also matters because the sector is saturated with videos sharing the same look: stock footage of code on screens, generic electronic music, a voiceover promising disruption. When they all sound the same, the video stops differentiating and becomes background noise.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "The product is shown in real use, not in isolated screenshots" },
      {
        type: "paragraph",
        text: "Instead of filming static screenshots with artificial zooms, I prefer to film a real person using the product to solve a specific problem. You see the cursor move with intent, you see the person's face react. That communicates usefulness in a way no UI animation achieves on its own.",
      },
      { type: "heading", level: 3, text: "The team talks about what they're building, not the company mission" },
      {
        type: "paragraph",
        text: "When I film testimonials from founders or the technical team, I avoid textbook lines about vision and disruption. I ask them to explain, in their own words, what problem the product solves and for whom. That specificity is what a technical buyer or an investor recognizes as real credibility.",
      },
      { type: "heading", level: 3, text: "The office is filmed on a normal workday, not staged for the camera" },
      {
        type: "paragraph",
        text: "I'd rather turn up on an ordinary workday than ask them to set up a scene. A meeting room mid-conversation, someone reviewing code with headphones on, a whiteboard covered in real notes. You lose control over composition, but you gain authenticity, which in this sector counts for more than a polished look.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-tecnologico/intermedia.webp",
        alt: "Developer working with code on a computer screen",
        width: 1920,
        height: 1282,
        caption: "Filming the product in real use communicates more than any UI animation.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Opening the video with electronic music and generic lines about disruption or innovation.",
          "Showing only screenshots without anyone actually using the product.",
          "Founder testimonials reciting the investor pitch instead of talking about the product.",
          "Filming an empty office or one artificially staged for the camera, with nobody really working.",
          "Not explaining in the first few seconds what problem the product solves for someone seeing it for the first time.",
          "Using stock shots of code or servers that have nothing to do with the real product.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a startup or software company cost?",
        answer:
          "For a piece with product-in-use footage, two or three team testimonials and office shots, the usual range is €1,200 to €3,000, depending on the final length and the number of derived pieces for social media.",
      },
      {
        type: "faq",
        question: "How do you film a product that only exists on a screen?",
        answer:
          "By filming a real person interacting with the interface to complete a specific task, with the camera capturing both the screen and that person's reaction. It works better than isolated screenshots.",
      },
      {
        type: "faq",
        question: "How long should a tech company's main video be?",
        answer:
          "Between 60 and 120 seconds for the main product presentation piece. For social media or recruiting campaigns, I prefer shorter pieces of 20 to 40 seconds focused on a single message.",
      },
      {
        type: "faq",
        question: "Does it make sense to film in the office if the team works remotely?",
        answer:
          "Yes, although the approach changes: in that case I combine occasional in-person filming of the core team with video calls recorded in good audio and image quality for everyone else, rather than forcing an office that doesn't reflect the real day-to-day.",
      },
      {
        type: "paragraph",
        text: "If you have a startup or software company and want a video that shows your product and team without the generic tone the sector is known for, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-financiero": {
    title: "Corporate video for the financial sector: what changes in practice",
    description:
      "How I approach corporate video for banks, insurers and fintechs in Madrid: what goes through compliance, how to film with trust as the goal and which mistakes to avoid.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "financial services",
      "video for banks",
      "fintech",
      "video production",
      "Madrid",
    ],
    keyword: "financial services corporate video",
    excerpt:
      "In banking, insurance and fintech, a video doesn't just have to look good: it has to get through compliance without losing authenticity. Here's how I approach corporate video for the financial sector.",
    seoTitle: "Corporate Video for the Financial Sector | Daniel Acero",
    metaDescription:
      "Corporate video for the financial sector: how I film for banks, insurers and fintechs in Madrid while taking care of compliance, tone and trust.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "In the financial sector, corporate video faces a filter that almost no other sector has with the same intensity: compliance. Every sentence an employee says, every figure on screen, every claim about returns or security goes through legal review before it's published.",
      },
      {
        type: "paragraph",
        text: "I've filmed for financial institutions and fintechs in Madrid, and the challenge usually isn't technical. It's about process: how to produce something that conveys real trust without the script turning into a legal document read to camera.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-financiero/hero.webp",
        alt: "Financial sector professionals discussing documents in a meeting room",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for the financial sector usually pursues one of these goals: explaining a complex product simply, giving confidence to a client who is about to move their money, or showing institutional strength to investors and regulators. Each goal calls for a different tone, although the usual temptation is to cover them all with the same generic corporate video.",
      },
      {
        type: "paragraph",
        text: "It matters because in finance, trust is built in a particular way: the client doesn't see the product, they see promises about their money. A well-planned video reduces that uncertainty by showing real people, clear processes and a measured tone that doesn't overpromise.",
      },
      {
        type: "paragraph",
        text: "It also matters because the sector carries a very recognizable, worn-out look: hands on keyboards, stock rising charts, a deep voiceover promising growth. When the video sounds like a template, the viewer dismisses it before hearing the message.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "The script is signed off by compliance before filming, not after" },
      {
        type: "paragraph",
        text: "Before setting up any gear, I ask for the full script to go through the client's legal or compliance department. Changing a line in the edit is expensive and slow; changing it on paper is free. This avoids reshoots and protects the client from publishing something they later have to pull.",
      },
      { type: "heading", level: 3, text: "People talk about concrete processes, not return figures" },
      {
        type: "paragraph",
        text: "Instead of asking an executive to talk about results or forecasts, I prefer them to explain how a process works: how an application is reviewed, how data is protected, how an issue is handled. It's information that doesn't need a legal disclaimer and conveys seriousness better than any figure.",
      },
      { type: "heading", level: 3, text: "The look steers clear of stock market footage and generic charts" },
      {
        type: "paragraph",
        text: "I avoid the visual clichés the whole sector repeats: trading candlesticks, floating data maps, cold blue lights. I prefer to film real offices, people working at their desks, naturally staged conversations with clients. It looks less futuristic, but it feels more real.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-financiero/intermedia.webp",
        alt: "Team of professionals working together on laptops in an office",
        width: 1920,
        height: 1280,
        caption: "In finance, showing the real process counts for more than generic stock charts.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming before legal has reviewed the script, forcing reshoots or discarded footage.",
          "Having an employee promise returns or specific results without the corresponding disclaimer.",
          "Overusing generic stock market visuals: trading candlesticks, rising charts, cold blue lights.",
          "Using an overly solemn voiceover that sounds like a nineties commercial.",
          "Not making clear in the first few seconds what kind of institution it is and what problem it solves for the viewer.",
          "Filming client testimonials with ambiguous language that compliance ends up vetoing in the final review.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a financial institution cost?",
        answer:
          "For a piece with a compliance-approved script, two or three testimonials and office filming, the usual range is €1,500 to €3,500, depending on the number of derived pieces and the rounds of legal review planned.",
      },
      {
        type: "faq",
        question: "How long does it take for the script to be approved before filming?",
        answer:
          "It depends on the size of the institution, but it's wise to allow one to two weeks for the compliance round before setting a shoot date, especially if several people have to sign off.",
      },
      {
        type: "faq",
        question: "Can figures or results be used in the video?",
        answer:
          "Yes, but they almost always require a disclaimer visible on screen for as long as the claim lasts. That's why I prefer to focus the message on processes and people, and use figures only when they add something the disclaimer doesn't water down.",
      },
      {
        type: "faq",
        question: "What's the difference between filming for a traditional bank and a fintech?",
        answer:
          "A traditional bank usually needs more compliance rounds and a more institutional tone. A fintech has faster review processes and allows a warmer tone, although the legal filter on financial claims remains just as strict.",
      },
      {
        type: "paragraph",
        text: "If you work in banking, insurance or fintech and need a corporate video that builds trust without clashing with compliance, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-logistico-transporte": {
    title: "Corporate video for logistics and transport: what changes in practice",
    description:
      "How I approach corporate video for logistics and transport companies in Madrid: which shots tell the story of the real operation, how to film in a warehouse without stopping work and which mistakes to avoid.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "logistics",
      "transport company video",
      "warehouse video",
      "video production",
      "Madrid",
    ],
    keyword: "logistics and transport corporate video",
    excerpt:
      "In logistics and transport, a corporate video has to show an operation in motion without stopping it. Here's how I approach corporate video for this sector: which shots matter and what to avoid.",
    seoTitle: "Logistics & Transport Corporate Video | Daniel Acero",
    metaDescription:
      "Corporate video for logistics and transport: how I film in warehouses and with fleets in Madrid without slowing down day-to-day operations.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "In logistics and transport, corporate video starts from a different problem than in other sectors: the operation doesn't stop so you can film. A warehouse keeps moving goods, a fleet keeps heading out on routes, and the shoot has to fit within that movement without slowing it down.",
      },
      {
        type: "paragraph",
        text: "I've filmed at distribution centers and with transport companies in Madrid, and what works best isn't the most spectacular video, but the one that manages to show the scale and order of the real operation without interrupting a single shift.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-logistico-transporte/hero.webp",
        alt: "Forklift loading goods onto a truck outside a warehouse",
        width: 1920,
        height: 864,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for logistics and transport usually pursues one of these goals: demonstrating operational capacity to a potential client, clearly explaining a picking or distribution process, or showing the fleet and facilities as a trust signal in a bid. Each goal calls for a different pace, but they all share the same raw material: the operation as it really is.",
      },
      {
        type: "paragraph",
        text: "It matters because in this sector the client deciding to sign rarely visits the warehouse in person beforehand. The video plays that role: it shows volume, order and control without anyone having to travel to check.",
      },
      {
        type: "paragraph",
        text: "It also matters because the sector's generic look (aerial shots of warehouses and corporate music without a single human face) conveys the opposite of what you're after. A client hiring a logistics provider trusts people and processes, not just square meters of warehouse space.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "The shoot is planned around the shifts, not the other way around" },
      {
        type: "paragraph",
        text: "Before setting a date, I ask for the shift schedule and the peak activity times of the warehouse or fleet. Filming at the time of lowest operational load reduces the risk of interrupting critical processes and makes it easier for employees to speak on camera without the pressure of an urgent order waiting.",
      },
      { type: "heading", level: 3, text: "The shots follow the real flow of goods" },
      {
        type: "paragraph",
        text: "Instead of setting up isolated pretty shots, I follow the real route: goods in, storage, picking, packing, loading and dispatch. That common thread gives the video a logic the viewer understands without needing a voiceover to explain each step.",
      },
      { type: "heading", level: 3, text: "Employees talk about their specific role, not the company in general" },
      {
        type: "paragraph",
        text: "I'd rather have a warehouse worker explain how they prepare an order, or a driver explain how they plan a route, than an executive talking about corporate values. It's a short, specific testimonial, and it's more credible than any slogan about efficiency.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-logistico-transporte/intermedia.webp",
        alt: "Freight truck at a loading dock of an industrial warehouse",
        width: 1920,
        height: 1252,
        caption: "Following the real flow of goods gives the video a logic that needs no explanation.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming at peak times and forcing employees to act naturally while handling real orders.",
          "Overusing aerial shots of the warehouse without showing anyone working inside.",
          "Asking for generic testimonials about 'commitment' instead of concrete explanations of a task.",
          "Not coordinating with safety and occupational risk prevention before moving through forklift traffic areas.",
          "Filming the fleet parked in the lot instead of on the road or at the real loading dock.",
          "Ignoring the warehouse's ambient noise and recording audio that turns out to be unusable in the edit.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a logistics or transport company cost?",
        answer:
          "For a one-day shoot at a warehouse or on the road, with two or three employee testimonials, the usual range is €1,200 to €3,000, depending on the number of locations and whether outdoor drone footage is included.",
      },
      {
        type: "faq",
        question: "Can you film without stopping warehouse activity?",
        answer:
          "Yes, that's the norm. With a small crew and shots defined in advance, filming happens alongside the operation, coordinating with the shift manager on the quieter moments for the shots that need more calm.",
      },
      {
        type: "faq",
        question: "Do you need special permission to film in a warehouse or logistics center?",
        answer:
          "An external permit usually isn't required, but internal safety and occupational risk prevention authorization is, especially for moving through forklift traffic areas or loading docks.",
      },
      {
        type: "faq",
        question: "Is it worth including drone footage in this type of video?",
        answer:
          "It helps show the scale of the facilities or a fleet on the move, but only as a complement. A video made up solely of aerial shots without people feels cold and loses the human side that builds client trust.",
      },
      {
        type: "paragraph",
        text: "If you manage a warehouse, a distribution center or a transport fleet and need a corporate video that shows your real operation, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-retail": {
    title: "Corporate video for the retail sector: what works and what doesn't",
    description:
      "How I approach corporate video for stores and retail chains in Madrid: which shots convey the brand, how to film while the store is open to the public and which mistakes to avoid.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "retail",
      "video for stores",
      "brand video",
      "video production",
      "Madrid",
    ],
    keyword: "retail corporate video",
    excerpt:
      "In retail, a corporate video has to coexist with open stores and real customers coming and going. Here's how I plan the shoot to respect the point of sale and still convey the brand.",
    seoTitle: "Retail Corporate Video | Daniel Acero",
    metaDescription:
      "Corporate video for the retail sector: how I film in stores open to the public in Madrid without interrupting sales.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "In retail, a corporate video has to coexist with stores open to the public, real customers coming and going, and a space designed for selling, not filming. That completely changes how I plan the shoot compared with other sectors where you can simply clear the space.",
      },
      {
        type: "paragraph",
        text: "I've filmed in stores and chains in Madrid, and what works best isn't the most polished video, but the one that respects the rhythm of the point of sale and still manages to convey the brand clearly.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-retail/hero.webp",
        alt: "Boutique interior with clothing arranged on racks under warm light",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for retail usually pursues one of three goals: presenting a store opening or remodel, showing the shopping experience for social media or the website, or documenting internal culture for recruiting. Each goal changes the type of shot, but they all start from the same challenge: the space is already designed for the customer, not the camera.",
      },
      {
        type: "paragraph",
        text: "It matters because in retail the buying decision is made in seconds, and that same logic carries over to how a video grabs or loses attention. A badly lit shot or a messy shelf on screen communicates exactly the opposite of what the brand projects in the physical store.",
      },
      {
        type: "paragraph",
        text: "It also matters because many chains film on a store manager's phone and post that footage to social media with no brand image criteria at all. A well-planned corporate video elevates that same content without losing the spontaneity that works on social media.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "The shoot is scheduled for the quietest hours" },
      {
        type: "paragraph",
        text: "I always ask for the store's foot traffic data by time slot and plan the shoot for the quietest times, usually first thing before opening or during the midday shift change on a weekday. That avoids interrupting real customers and leaves room to repeat takes without pressure.",
      },
      { type: "heading", level: 3, text: "Shots show product and people, not just an empty store" },
      {
        type: "paragraph",
        text: "A common mistake is filming the store empty and perfect, with nobody inside. I prefer to combine shots of the space with merchandised product and at least one sales associate serving customers or restocking, because that's what a customer sees when they walk in and it's what makes the video credible.",
      },
      { type: "heading", level: 3, text: "Ambient sound gets as much care as the image" },
      {
        type: "paragraph",
        text: "In-store music, the sound of the checkout and background conversations are part of the real shopping experience. I record some of that ambient sound and keep it low in the mix during the edit, instead of replacing everything with library music that disconnects the video from the actual store.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-retail/intermedia.webp",
        alt: "Store aisle with neatly organized product shelves",
        width: 1920,
        height: 1440,
        caption: "Combining merchandised product with staff on the floor is more credible than an empty store.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming with the store closed to the public and losing the natural rhythm that comes from having people inside.",
          "Framing only shelves and product without a single face to make the brand feel approachable.",
          "Using generic music that has nothing to do with the store's real sonic identity.",
          "Not asking permission from customers who appear recognizable on camera.",
          "Scheduling the shoot on a weekend or during a sales campaign, when staff have no time to help the film crew.",
          "Delivering a horizontal video when the real destination is vertical Instagram or TikTok.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a store or retail chain cost?",
        answer:
          "For a one-day shoot at a single point of sale, with product shots and one or two employee testimonials, the usual range is €800 to €2,000, depending on whether it covers a single store or several of the chain's locations.",
      },
      {
        type: "faq",
        question: "Can you film while the store is open to the public?",
        answer:
          "Yes, and it's recommended. With a small crew and shots defined in advance, filming happens during quieter hours, letting the staff on shift know so they can help without neglecting customers.",
      },
      {
        type: "faq",
        question: "Do you need to ask permission from customers who appear in the video?",
        answer:
          "If a customer is recognizable on camera, yes, it's wise to get verbal permission or a short image release. The usual approach is to favor shots of hands, product or customers seen from behind to avoid that step.",
      },
      {
        type: "faq",
        question: "Should a retail store film in vertical format?",
        answer:
          "It depends on where it's going. If the video is for Instagram, TikTok or in-store screens, it's worth filming vertically from the start rather than cropping a horizontal video afterwards.",
      },
      {
        type: "paragraph",
        text: "If you run a store or a retail chain and need a corporate video that shows your real point of sale, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-energetico": {
    title: "Corporate video for the energy sector: what makes it different",
    description:
      "How I approach corporate video for wind farms, solar plants and other energy facilities in Spain: site access, safety and shots that convey a real, working operation.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "energy sector",
      "renewable energy",
      "industrial video",
      "workplace safety",
      "video production",
    ],
    keyword: "energy sector corporate video",
    excerpt:
      "In the energy sector, corporate video happens at live facilities, with strict safety protocols and restricted access. Here's how I plan the shoot to comply with regulations and still convey the scale of the project.",
    seoTitle: "Energy Sector Corporate Video | Daniel Acero",
    metaDescription:
      "Corporate video for the energy sector: how I film at wind farms and solar plants while respecting safety rules and without stopping operations.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "The energy sector poses a different challenge from the rest: most facilities (wind farms, solar plants, substations) are live, with strict safety protocols and access restricted for technical reasons, not image reasons. Filming there means planning with the operation, not around it.",
      },
      {
        type: "paragraph",
        text: "I've filmed at wind farms and solar plants in Spain, and what changes compared with an office shoot is that the environment is in charge: the weather, maintenance shifts and access rules decide when and how you film, not the production schedule.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-energetico/hero.webp",
        alt: "Wind farm with turbines next to solar panels at sunset",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for the energy sector usually responds to three needs: showing the real operation of a plant or farm to investors and stakeholders, documenting a construction or expansion project phase by phase, or communicating a company's commitment to the energy transition credibly, without falling into visual greenwashing.",
      },
      {
        type: "paragraph",
        text: "It matters because this is a sector where technical trust outweighs aesthetics. An investor or an industrial client isn't looking for a pretty video; they want to see that the facility works, that the people behind it know what they're doing and that the figures in the project report are backed up by real footage.",
      },
      {
        type: "paragraph",
        text: "It also matters because access to these facilities isn't easily repeated. Once the film crew has been in and out, coming back the following week usually means double or triple the cost, so upfront planning carries much more weight than in other sectors.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Access is coordinated with the safety manager, not just marketing" },
      {
        type: "paragraph",
        text: "Before setting a shoot date, I ask to speak directly with the safety manager or the plant manager, not just the communications team. They're the ones who decide which areas are accessible, what PPE is required and at what times the operation allows outside personnel on site.",
      },
      { type: "heading", level: 3, text: "The film crew wears the same PPE as a plant worker" },
      {
        type: "paragraph",
        text: "Hard hat, safety footwear, high-visibility vest and, depending on the facility, a harness or site-specific access training. It isn't a formality: without that gear you simply don't get in, and having it from day one avoids losing a shoot day for failing a basic requirement.",
      },
      { type: "heading", level: 3, text: "Shots combine the scale of the facility with human work" },
      {
        type: "paragraph",
        text: "A wind turbine or a solar field with nobody in it conveys size, but not operation. I prefer to intercut wide shots, often by drone when the airspace allows, with shots of technicians doing maintenance or inspections, because that's what makes the project credible to investors.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-energetico/intermedia.webp",
        alt: "Technician installing and inspecting a solar panel",
        width: 1920,
        height: 1281,
        caption: "Shots of real maintenance work are more credible than an empty, flawless facility.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Requesting a drone flight without first checking airspace restrictions near the facility or power lines.",
          "Filming without the PPE or access training the plant requires, and losing site access that same day.",
          "Showing only the empty facility, without a single technician or maintenance process on camera.",
          "Having no plan B if the weather changes on shoot day (wind, rain, fog).",
          "Using generic \"sustainability\" graphics instead of the project's own real production data.",
          "Underestimating travel time within the plant when planning the shoot day.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for an energy facility cost?",
        answer:
          "For a one-day shoot at a single facility, with wide shots, drone footage if the airspace allows and one or two technical interviews, the usual range is €1,200 to €3,000, depending on how complex access is and whether more than one day is needed.",
      },
      {
        type: "faq",
        question: "Do you need specific training to film at a wind farm or solar plant?",
        answer:
          "It depends on the facility, but it's common to require at least a basic sector-specific health and safety course and, at wind farms, working-at-height training if you access the nacelle. The plant itself usually provides that training before granting access.",
      },
      {
        type: "faq",
        question: "Can you fly a drone near an energy facility?",
        answer:
          "Only if the airspace allows it and with prior authorization from the plant and, in some cases, from AESA, Spain's aviation safety agency. Near high-voltage lines or moving wind turbines there are strict restrictions that should be checked weeks before the shoot, not on the day.",
      },
      {
        type: "faq",
        question: "How long does a typical shoot at an energy plant take?",
        answer:
          "A full day, 6 to 8 hours, is usually enough for a mid-sized facility with wide shots, detail shots and a couple of interviews. Construction projects filmed in phases require several visits spread over weeks or months.",
      },
      {
        type: "paragraph",
        text: "If you manage a wind farm, a solar plant or any energy facility and need a corporate video that shows the real operation, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-hostelero-turistico": {
    title: "Corporate video for hospitality and tourism: what changes",
    description:
      "How I approach corporate video for hotels, restaurants and tourism businesses: which shots, sound and formats best convey the real experience to guests.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "hospitality",
      "tourism",
      "hotel video",
      "video marketing",
      "video production",
    ],
    keyword: "hospitality and tourism corporate video",
    excerpt:
      "In hospitality and tourism, a corporate video sells an experience, not a service. Here's how I plan the shoot so it works on the website, on social media and on booking platforms.",
    seoTitle: "Hospitality & Tourism Corporate Video | Daniel Acero",
    metaDescription:
      "Corporate video for hospitality and tourism: which shots, sound and formats best convey the real experience of a hotel or restaurant.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "In hospitality and tourism, a corporate video sells an experience, not a service. People don't book a hotel, a restaurant or a guided tour for its technical features; they book because they can picture themselves living it. That completely changes how I plan the shoot.",
      },
      {
        type: "paragraph",
        text: "I've filmed at boutique hotels, restaurants and tourism businesses, and what sets this sector apart is that the video has to spark desire in seconds, not explain processes. Here's how I approach it so it works on the website, on social media and on booking platforms.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-hostelero-turistico/hero.webp",
        alt: "Boutique hotel reception with a wooden front desk and warm lighting",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for hospitality and tourism usually serves three goals: showing the space and the experience to raise perceived value, supporting conversion on the business's own website or on booking platforms, and generating ongoing content for social media that keeps the business visible between guest stays.",
      },
      {
        type: "paragraph",
        text: "It matters because in this sector the buying decision is mostly visual and emotional. A user decides in a few seconds whether a hotel or restaurant fits what they're looking for, and still photos are no longer enough to convey atmosphere, movement and ambient sound.",
      },
      {
        type: "paragraph",
        text: "It also matters because competition is fierce and there's little room for real differentiation. Two hotels of the same category at a similar price compete mainly on how they communicate the experience, and that's where video carries more weight than any other format.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "The space is filmed during real service hours, not empty" },
      {
        type: "paragraph",
        text: "A hotel without guests or a restaurant without diners conveys the opposite of what you're after. I prefer to schedule the shoot during times of real activity, like afternoon check-in or dinner service, even if that complicates the logistics, because it shows in the credibility of the result.",
      },
      { type: "heading", level: 3, text: "Ambient sound matters as much as the image" },
      {
        type: "paragraph",
        text: "In hospitality, sound sells as much as the shot: the clatter of a kitchen, the buzz of a terrace, the music in a lobby. I record live sound whenever I can, and when that isn't viable because of background noise, I add sound layers in post-production so the piece isn't left without atmosphere.",
      },
      { type: "heading", level: 3, text: "The format for each channel is planned from the script" },
      {
        type: "paragraph",
        text: "I don't film a single video and then crop it for everything. A hotel needs short vertical pieces for Instagram and TikTok, a longer horizontal video for the website and, in many cases, specific clips for its Booking or Google listing. Deciding this before the shoot avoids shots that don't work for any channel.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-hostelero-turistico/intermedia.webp",
        alt: "Chef plating a dish in a restaurant during service",
        width: 1920,
        height: 1281,
        caption: "Shots of real service (kitchen, dining room, guest care) convey more than a flawless empty space.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming only the empty space, with no guests or staff on camera, losing the feel of a real experience.",
          "Not getting image releases from guests who appear on camera, which means throwing away useful footage later.",
          "Ignoring ambient sound and delivering a video with no atmosphere that has to be filled with generic music.",
          "Filming in the low season or at low occupancy and using that footage to sell the high season.",
          "Not adapting the video to vertical format, losing most of the reach on Instagram and TikTok.",
          "Focusing the entire video on the facilities without a single shot of the people who deliver the service.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a hotel or restaurant cost?",
        answer:
          "For a one-day shoot with wide shots, atmosphere and two or three short pieces for social media, the usual range is €900 to €2,500, depending on the number of spaces and whether filming is needed across several shifts of the day.",
      },
      {
        type: "faq",
        question: "Do you need to ask permission from guests who appear in the video?",
        answer:
          "Yes. The most practical approach is to have a short image release ready in advance and ask for it on the spot, or simply work with extras or the business's own staff if you don't want to depend on real guests.",
      },
      {
        type: "faq",
        question: "What time of day is best to film a hotel or restaurant?",
        answer:
          "It depends on the goal, but I usually combine early-afternoon natural light for exteriors and terraces with the real atmosphere of lunch or dinner service, which brings the activity that makes the video believable.",
      },
      {
        type: "faq",
        question: "How long is a corporate video for hospitality?",
        answer:
          "For the website, a 60- to 90-second piece works best. For social media, I cut that same session into 15- to 30-second clips designed for each platform, instead of uploading the full long video.",
      },
      {
        type: "paragraph",
        text: "If you run a hotel, a restaurant or a tourism business and want a corporate video that conveys the real experience, not just the space, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-construccion": {
    title: "Corporate video for the construction sector: how I approach it",
    description:
      "How I approach corporate video on construction sites: safety, drones, documenting each phase and the mistakes I see again and again with contractors and developers.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "construction",
      "civil engineering",
      "corporate film",
      "drone",
      "video production",
    ],
    keyword: "construction company corporate video",
    excerpt:
      "In construction, a corporate video has to deal with safety, noise and dust. Here's how I plan an on-site shoot so the result is useful, not just pretty.",
    seoTitle: "Corporate Video for the Construction Sector | Daniel Acero",
    metaDescription:
      "Corporate video for the construction sector: on-site safety, drone use, documenting project phases and common mistakes when filming for a construction company.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Filming on a construction site is nothing like filming in an office. There's noise, dust, moving machinery and safety rules that aren't optional. A corporate video for a contractor or developer has to account for all of that from the planning stage, not improvise it on shoot day.",
      },
      {
        type: "paragraph",
        text: "I've filmed on residential sites, industrial buildings and civil engineering projects, and what sets this sector apart is that the video is almost never the main goal of the day: the site keeps working around you. Here's how I organize myself so the shoot doesn't get in the way and the result is genuinely useful.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-construccion/hero.webp",
        alt: "Worker in a hard hat on an excavator at a construction site",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video in construction usually responds to three needs: showing a project's progress to investors or clients, documenting the contractor's technical capabilities for future bids, and keeping a visual record of construction phases that later get covered by other layers of work.",
      },
      {
        type: "paragraph",
        text: "It matters because in this sector trust is built on evidence. A developer who shows real construction progress, with dates and context, conveys more confidence than any render or brochure. And a contractor that documents its work well has reusable footage for years, not just for one client.",
      },
      {
        type: "paragraph",
        text: "It also matters because many phases of a build never happen again. Foundations, a structure before the facade goes on, services that are later covered up: if they aren't filmed at the time, that footage is lost forever.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Safety shapes the entire shoot" },
      {
        type: "paragraph",
        text: "Before thinking about shots, I coordinate access with the site's health and safety coordinator. That means a hard hat, vest and certified boots at all times, basic site induction training when the site requires it, and accepting that certain areas or moments simply can't be filmed. I never negotiate on this, even if it means losing a shot I'd like to have.",
      },
      { type: "heading", level: 3, text: "The drone provides the scale you can't get from the ground" },
      {
        type: "paragraph",
        text: "On a construction site, an aerial shot isn't an aesthetic whim: it's the only way to show the true scale of a project, its relationship to its surroundings and progress between phases if the same framing is repeated at intervals. It needs prior authorization from the developer and, depending on the area, from AESA (Spain's aviation safety agency), so I plan it weeks in advance, not the day before.",
      },
      { type: "heading", level: 3, text: "Documenting construction progress requires medium-term planning" },
      {
        type: "paragraph",
        text: "A single shoot doesn't tell the story of a build. When the goal is to show progress, I propose visits spread across several phases, using the same camera positions whenever possible, so the contrast between one visit and the next comes through clearly in the edit.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-construccion/intermedia.webp",
        alt: "Group of construction workers standing on a building site",
        width: 1920,
        height: 1280,
        caption: "Shots of people at work convey real activity, not just machinery and empty structures.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Not coordinating access with the health and safety manager, which can bring the on-site shoot to a halt.",
          "Filming without the proper protective equipment, which is not only dangerous but can also get you denied access.",
          "Exposing cameras and lenses to dust and vibration without protection, shortening their lifespan.",
          "Not recording early phases that later get hidden under concrete, cladding or building services.",
          "Underestimating machinery noise and relying on live sound for interviews next to an active site.",
          "Not getting explicit authorization from the developer or contractor before publishing footage of the project.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a construction site or contractor cost?",
        answer:
          "For a one-day shoot with wide shots, drone footage and one or two interviews, the usual range is €1,000 to €2,800. If the project requires several visits to document different phases, the budget is quoted per session and wrapped into a combined package.",
      },
      {
        type: "faq",
        question: "Can you fly a drone over an active construction site?",
        answer:
          "Yes, but it requires prior authorization from the developer and, in many cases, notification to or a permit from AESA depending on the area and flight altitude. Near moving cranes or power lines there are strict restrictions that must be checked before the day of the flight.",
      },
      {
        type: "faq",
        question: "At what stage of construction should filming start?",
        answer:
          "As early as possible, if the goal is to document the whole process. Foundations and structure are phases that later get hidden, so if you want to show the complete process it's best to start from the earthworks.",
      },
      {
        type: "faq",
        question: "Does the film crew need PPE?",
        answer:
          "Yes, always. A hard hat, high-visibility vest and certified safety boots are mandatory on any active site, and some also require basic risk prevention training before granting access.",
      },
      {
        type: "paragraph",
        text: "If you run a construction company or a development firm and need to document a project's progress or showcase your technical capabilities on video, tell me about your project via /en/contacto.",
      },
    ],
  },
  "video-corporativo-sector-automocion": {
    title: "Corporate video for the automotive sector: how I approach it",
    description:
      "How I approach an automotive corporate video: product lighting, filming on the plant floor and vehicles in motion, and the mistakes I see again and again with dealerships and manufacturers.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "automotive",
      "industrial sector",
      "product video",
      "video production",
    ],
    keyword: "automotive corporate video",
    excerpt:
      "In automotive I film very different things under the same brief: the vehicle as a product and the factory or workshop as a process. Here's how I keep the two approaches separate on set.",
    seoTitle: "Automotive Corporate Video | Daniel Acero",
    metaDescription:
      "Corporate video for the automotive sector: product, plant and vehicles in motion, and how I plan each shoot without mixing them up.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "In automotive I film two very different things under the same brief: the vehicle as a product and the factory or workshop as a process. Each calls for different lighting and a different camera rhythm, and mixing them up without realizing it is the mistake I see most often in quotes that arrive already finalized.",
      },
      {
        type: "paragraph",
        text: "I've filmed at dealerships, assembly plants and fleet maintenance shops, and what changes between them isn't just the size of the space: it's what needs to shine and what needs to look solid. A dealership sells desire, a plant sells technical confidence and a fleet shop sells availability. Here's how I plan the shoot based on the video's real goal.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-automocion/hero.webp",
        alt: "Unpainted car body on the assembly line of an automobile factory",
        width: 1920,
        height: 1281,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "An automotive corporate video usually responds to three needs: selling the vehicle or service at a dealership or rental fleet, showing production capacity to a B2B client as a parts manufacturer or coachbuilder, or documenting internal quality and safety processes.",
      },
      {
        type: "paragraph",
        text: "It matters because in this sector the perception of precision carries a lot of weight. A video showing bodywork with clean reflections and a tidy assembly line conveys quality control before the client reads a single production figure. A video with messy reflections or crooked framing conveys exactly the opposite, even if the real process behind it is flawless.",
      },
      {
        type: "paragraph",
        text: "It also matters because much of the process can't easily be repeated. Once the vehicle is assembled, a shot of a bare component or a specific weld is no longer available without taking it apart again. If the video needs to document a particular phase, that phase has to be filmed while it exists, not whenever there's a gap in the schedule.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Product shots need controlled light, not lots of light" },
      {
        type: "paragraph",
        text: "For vehicle shots I use diffused light and large panels to control reflections on the bodywork, never direct light. A single badly placed light shows up as a blotch on the hood. I'd rather move the car or the camera than move lights over such a reflective surface, and I check the framing on an external monitor to catch reflections that are easy to miss with the naked eye.",
      },
      { type: "heading", level: 3, text: "The plant floor needs order and planning, not spontaneity" },
      {
        type: "paragraph",
        text: "On an assembly line, I coordinate the shoot with the production manager to film during periods when the line runs at a steady pace, not during start-ups or stoppages. I always ask for the required protective equipment and respect marked zones without exception, even if it means losing a shot. I also ask what can and can't be shown: some processes the company considers confidential from competitors.",
      },
      { type: "heading", level: 3, text: "Vehicles in motion are planned as a separate shoot" },
      {
        type: "paragraph",
        text: "If the video includes shots of the car on the move, I treat that part as a separate shoot: a closed track or an authorized road, a tracking car or a drone, and radio communication with the driver. I don't improvise it on the same day I'm filming inside the factory, because the equipment, insurance and permit requirements are different.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-automocion/intermedia.webp",
        alt: "Mechanic inspecting a vehicle's engine with the hood open in a workshop",
        width: 1920,
        height: 1080,
        caption: "Detail shots of the process convey precision better than a wide shot of the workshop.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Lighting the vehicle as if it were an interview, creating harsh reflections on the bodywork.",
          "Filming on the plant floor without coordinating with the production manager, interrupting the assembly line.",
          "Filming vehicles in motion outside a closed track or an authorized road.",
          "Mixing the sales tone of the product with the technical tone of the process in the same section without a clear transition.",
          "Leaving the plant's ambient sound to post-production instead of dealing with it during the shoot.",
          "Not protecting the gear from oil, metal shavings or metal dust in workshop areas.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does an automotive corporate video cost?",
        answer:
          "For a one-day product shoot with two or three vehicles and some shots of the facilities, the usual range is €1,200 to €3,000. If you add footage of the vehicle in motion with a tracking car or drone, the budget goes up depending on the resources needed.",
      },
      {
        type: "faq",
        question: "Can you film inside a factory or on an assembly line?",
        answer:
          "Yes, but always with prior authorization and coordination with the production and safety managers. Each plant has its own access rules, protective equipment and restricted areas, and they must be respected without exception.",
      },
      {
        type: "faq",
        question: "What camera works best for vehicle product shots?",
        answer:
          "I work with a Sony A7 and macro or telephoto lenses to control reflections and isolate details like badges, wheels or interior finishes, without having to bring the light too close to the vehicle.",
      },
      {
        type: "faq",
        question: "How long is a typical automotive corporate video?",
        answer:
          "Between 60 and 120 seconds for sales or product marketing, and between 3 and 5 minutes if the goal is to show production capacity to a B2B client during a bidding process.",
      },
      {
        type: "paragraph",
        text: "If you need a corporate video for your dealership, your production plant or your fleet shop, get in touch via /en/contacto and we'll plan it around the video's real goal: selling a product, demonstrating technical capability or documenting a process that won't happen again.",
      },
    ],
  },
  "video-corporativo-para-pymes": {
    title: "Corporate video for small businesses: what you need and what you can skip",
    description:
      "A practical guide to corporate video for small businesses: what goal to set before asking for a quote, how much gear you really need and the mistakes that waste the most money.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "small business",
      "video production budget",
      "video production",
      "small business marketing",
    ],
    keyword: "corporate video for small businesses",
    excerpt:
      "A small business doesn't need big-brand production values. It needs a clear goal, just the right amount of gear and a length designed for where the video will be watched. Here's how I approach it.",
    seoTitle: "Corporate Video for Small Businesses | Daniel Acero",
    metaDescription:
      "Corporate video for small businesses: the budget, gear and planning you really need, without paying for things you'll never use.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "With small businesses I see the same pattern over and over: either they don't film anything because they associate corporate video with multinational budgets, or they commission an oversized production because nobody told them what they actually needed. Both cost money, just in different ways.",
      },
      {
        type: "paragraph",
        text: "I've spent several years filming for businesses with 5 to 50 employees in Madrid: professional firms, workshops, clinics, studios and small factories. Here's how I approach a corporate video when the client is a small business, which part of the budget really matters and which part can be trimmed without anyone noticing.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-para-pymes/hero.webp",
        alt: "Small business team gathered around a table during a work session",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for a small business usually has a very specific job: giving confidence to someone who is already looking at the company's website or LinkedIn and hasn't yet decided to get in touch. It doesn't sell cold; it reinforces a decision that's already under way.",
      },
      {
        type: "paragraph",
        text: "It matters because a small business competes against larger companies with marketing budgets it doesn't have. A well-planned video, even a simple one, levels the perception of professionalism in the first fifteen seconds of a visit, which is when people decide whether to keep looking or leave.",
      },
      {
        type: "paragraph",
        text: "And it's just as important to know what you don't need. A small business doesn't need a drone, actors or three days of filming. It needs the founder or the team to look good and sound good, and for the message to be clear in under two minutes. Everything else is optional and billed separately.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Set a single goal before asking for a quote" },
      {
        type: "paragraph",
        text: "Before talking about cameras, I ask what the video is for: is it going on the website's homepage? Will it be used in a sales meeting? Is it for recruiting? Each goal calls for a different approach, and mixing all three into a single two-minute video usually dilutes the message until it doesn't serve any of them well.",
      },
      { type: "heading", level: 3, text: "Match the crew and gear to the real size of the project" },
      {
        type: "paragraph",
        text: "For most small businesses I work alone, with a Sony A7, a couple of LED lights and a lavalier mic. That's enough for interviews and shots of the office or workshop. I only add a second camera operator if more than two people are speaking on the same day or if a live event that can't be repeated needs covering.",
      },
      { type: "heading", level: 3, text: "Plan the length around where it will be watched" },
      {
        type: "paragraph",
        text: "For the website and LinkedIn I aim for 60 to 90 seconds. For an internal sales presentation, up to 3 minutes, because the viewer is more engaged with the content there. A 5-minute video on a small business's homepage is almost never watched to the end, and that extra footage has only cost money in filming and editing.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-para-pymes/intermedia.webp",
        alt: "Professional video camera on a tripod set up to film an interview",
        width: 1920,
        height: 1280,
        caption: "For a small business, simple gear used well delivers more than an oversized production.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Commissioning a company video without first deciding where it will be published.",
          "Asking for quotes that include a drone, actors or extra locations that add nothing to the message.",
          "Filming client testimonials without first preparing three or four guiding questions.",
          "Leaving the script for the day of the shoot, which usually more than doubles the length of the day.",
          "Not setting aside budget for subtitles, which are key if the video will be watched without sound on LinkedIn.",
          "Filming a single generic video to use on the website, social media and in sales at the same time, without adapting it to each channel.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does a corporate video for a small business cost?",
        answer:
          "For a one-day shoot with one or two interviews and shots of the business, the usual range is €700 to €1,800, depending on the final length and whether a pre-written script or subtitles are included.",
      },
      {
        type: "faq",
        question: "How long does a typical shoot for a small business take?",
        answer:
          "Between 3 and 5 hours is enough for interviews, team shots and shots of the workspace. If a complete process in a workshop or small factory needs to be documented, it can stretch to a full day.",
      },
      {
        type: "faq",
        question: "Do I need a written script if I'm going to improvise the interview?",
        answer:
          "You don't need a locked script, but you do need a list of questions or key points. Without it, the interview drags on, the person being interviewed loses their way and in the edit it's much harder to find the core message.",
      },
      {
        type: "faq",
        question: "Can I reuse the same video on my website, LinkedIn and Instagram?",
        answer:
          "The base footage, yes, but it's worth cutting different versions: a longer horizontal one for the website, and shorter vertical edits with subtitles for social media. Posting the same horizontal file on every channel usually hurts the viewing experience on mobile.",
      },
      {
        type: "paragraph",
        text: "If you have a small business in Madrid and want a corporate video with just the right crew for your budget, get in touch via /en/contacto and we'll plan it around your real goal, without adding anything you won't use.",
      },
    ],
  },
  "contrato-derechos-uso-video-corporativo": {
    title: "Corporate video contracts and usage rights: what to include",
    description:
      "Which license, exclusivity, term and territory clauses you should agree in writing before filming a corporate video, and what happens if nothing is agreed.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "usage rights",
      "video production contract",
      "video licensing",
      "video production",
    ],
    keyword: "corporate video usage rights",
    excerpt:
      "The price of a corporate video doesn't just pay for filming and editing. It also pays for a specific usage license. Here's which clauses to lock in before filming so you don't find out later what you can't do with your own video.",
    seoTitle: "Corporate Video Contracts & Usage Rights | Daniel Acero",
    metaDescription:
      "Which license, territory, term and exclusivity clauses a corporate video contract should include before filming begins.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Almost nobody asks about usage rights before filming a corporate video. People talk about dates, budget and how many interviews fit into the day, and the contract gets signed on the assumption that \"the video is mine because I paid for it\". That idea is only partly true, and the missing part is what causes problems later.",
      },
      {
        type: "paragraph",
        text: "I've spent years closing this kind of agreement with clients in Madrid, and every contract carries the same core clauses even when the video format changes. Here I explain what should be put in writing before the camera is switched on, so neither the client nor I have any doubts about what can be done with the footage once it's delivered.",
      },
      {
        type: "image",
        src: "/blog/contrato-derechos-uso-video-corporativo/hero.webp",
        alt: "Two people signing an agreement on a table",
        width: 1920,
        height: 1440,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "When I film a corporate video, the client isn't simply buying the raw file: they're buying a license to use a work in which I, as the author, retain the moral rights by default. What gets negotiated in the contract is the scope of that license: which channels, for how long, in which territory and whether it's exclusive or not.",
      },
      {
        type: "paragraph",
        text: "It matters because without that clause in writing, any use beyond what was agreed verbally falls into a gray area. I've seen companies film a video meant for their website and end up using it in a paid campaign without having agreed to it, or hand a clip to a business partner without knowing that also requires explicit permission.",
      },
      {
        type: "paragraph",
        text: "It also matters to me as a filmmaker: without clear usage limits, I can't price the project properly. A video licensed for social media only for one year costs something different from one with unlimited use and full exclusivity. The price depends on the rights being granted, not just the hours of filming.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Define the scope of channels and formats" },
      {
        type: "paragraph",
        text: "Before filming, I put in writing where the video will be used: website, organic social media, paid advertising, trade show screens, internal presentations. Any channel added after the original contract is negotiated separately, because it involves a different exploitation right from the one agreed.",
      },
      { type: "heading", level: 3, text: "Set the license term and territory" },
      {
        type: "paragraph",
        text: "A corporate video isn't usually licensed \"forever and worldwide\" unless that's specifically paid for. The norm is to limit the license to a term, for example three or five years, and to a territory, such as Spain or the European Union. Once that term ends, the license is renewed or the content is taken out of circulation.",
      },
      { type: "heading", level: 3, text: "Clarify exclusivity and use of behind-the-scenes footage" },
      {
        type: "paragraph",
        text: "If the client wants the footage not to be used by any other filmmaker, and doesn't want me to show it in my portfolio either, that's exclusivity and it's charged separately. By default, unless agreed otherwise, I usually reserve the right to show excerpts on my own site and social media as work samples, always crediting the client.",
      },
      {
        type: "image",
        src: "/blog/contrato-derechos-uso-video-corporativo/intermedia.webp",
        alt: "Person reviewing a video edit on a laptop",
        width: 1920,
        height: 1280,
        caption: "The contract is closed before filming, not after the edited video is delivered.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Assuming that paying for the shoot includes unlimited rights to the footage without agreeing it in writing.",
          "Not setting an expiry date for the license, which leaves the video's use ambiguous after several years.",
          "Forgetting to specify who can use the raw footage in addition to the edited, delivered video.",
          "Not clarifying whether third parties, such as a media agency or a business partner, can reuse the video.",
          "Agreeing exclusivity only verbally, without reflecting it in the quote or the contract.",
          "Not addressing the image rights of the employees filmed, which is a separate permission from the rights to the audiovisual work.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Is the video mine if I paid for it?",
        answer:
          "The client acquires a usage license, usually a broad one, but the author retains the moral rights to the work by default. The contract should set the exact scope of that license: channels, term and territory.",
      },
      {
        type: "faq",
        question: "Can I use the video in paid advertising if the contract doesn't mention it?",
        answer:
          "Not without risk. If paid advertising use isn't included in the original license, it's best to extend the contract before launching the campaign, because that type of use is usually valued and charged separately from organic use.",
      },
      {
        type: "faq",
        question: "How long does a corporate video license usually last?",
        answer:
          "In my contracts it's usually three to five years, renewable. An indefinite term with no territorial limit is possible, but it comes at a higher price because the rights granted are broader.",
      },
      {
        type: "faq",
        question: "Do I need a separate agreement for employees' image rights?",
        answer:
          "Yes. The production contract governs the rights to the audiovisual work itself; each filmed person's consent to appear in the video is a separate permission and must be obtained independently, usually with a release signed before the shoot.",
      },
      {
        type: "paragraph",
        text: "If you're about to commission a corporate video and want usage rights to be clear from the very first quote, get in touch via /en/contacto and we'll put it in writing before filming, with no surprises later.",
      },
    ],
  },
  "video-corporativo-sector-legal": {
    title: "Corporate video for the legal sector: what a law firm needs",
    description:
      "How I approach corporate video for law firms and legal consultancies: formats, editing tone, preparing the partners and confidentiality.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "law firms",
      "legal sector",
      "corporate film",
      "filmmaker Madrid",
    ],
    keyword: "law firm corporate video",
    excerpt:
      "At a law firm, video isn't about going viral, it's about conveying seriousness and sound judgment before the first call. Here's how I approach format, tone and filming so it fits the sector.",
    seoTitle: "Corporate Video for the Legal Sector | Daniel Acero",
    metaDescription:
      "Corporate video for the legal sector: the formats, editing tone and preparation a law firm needs before filming.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "A law firm doesn't sell the same thing as a consumer brand, and the video it needs doesn't look like a startup's either. Here the goal isn't to go viral: it's to convey seriousness, sound judgment and trust before the client picks up the phone.",
      },
      {
        type: "paragraph",
        text: "I've worked on several projects with law firms and legal consultancies in Madrid, and the pattern repeats itself. They want a video presence but worry it'll come out with the wrong tone: too corporate and cold, or too casual and not credible. Here's how I approach it so the result fits the sector.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-legal/hero.webp",
        alt: "Work meeting at a law firm with documents on the table",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "At a law firm, corporate video usually covers three different pieces: a corporate overview of the firm, short videos for each practice area and profiles of the partners who lead each team. It isn't one video that explains everything; they're short pieces that can be used separately depending on the channel.",
      },
      {
        type: "paragraph",
        text: "It matters because the decision to hire a law firm almost never starts with a phone call. It starts with a search: the firm's website, the partner's LinkedIn profile, a referral from a contact. Video comes in right there, before first contact, and helps confirm whether that firm conveys the judgment the client is looking for.",
      },
      {
        type: "paragraph",
        text: "There's also a layer that other sectors don't have: professional ethics. A law firm can't show client documents, talk about specific cases without explicit permission, or come across as boasting about results in an unprofessional way. That shapes what gets filmed and how it's edited, not just the messaging.",
      },
      {
        type: "paragraph",
        text: "At the same time, seriousness doesn't mean distance. A firm that's too rigid on camera conveys the opposite of what it wants: it intimidates instead of building trust. The balance I aim for is partners who come across as approachable without losing authority, and that's achieved more in preparing for the shoot than in the edit afterwards.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Choose the format based on the goal" },
      {
        type: "paragraph",
        text: "Before switching on the camera, I decide which format serves the real goal. If the firm wants to position itself as a leading authority in a specific area of law, a series of short videos by practice area works better than a single generic corporate video. If the goal is brand reputation, then a broader piece with the main partners does make sense.",
      },
      { type: "heading", level: 3, text: "Get the editing tone and pace right" },
      {
        type: "paragraph",
        text: "The editing pace in this sector isn't that of a consumer brand. I avoid fast cuts, music with dramatic build-ups and flashy graphics. I prefer steady shots, clean framing and almost imperceptible background music. The goal is for the video to convey solidity, not energy.",
      },
      { type: "heading", level: 3, text: "Prepare the partners to speak on camera" },
      {
        type: "paragraph",
        text: "Lawyers are used to arguing a case, not speaking to camera, and those are two different skills. On set I work from a brief of key ideas, not a locked script to memorize. If a teleprompter is needed I use it, but in short takes with pauses, so the line sounds spoken rather than read.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-legal/intermedia.webp",
        alt: "Video camera filming an interview in a meeting room",
        width: 1920,
        height: 1080,
        caption: "Before filming inside the firm, I check what's visible on camera.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Filming in a messy office, with real client papers or screens showing open cases in the background.",
          "Using generic stock music and graphics that don't set the firm apart from any competitor.",
          "Letting the partner improvise without any kind of brief, which drags out the shoot and dilutes the message.",
          "Not getting explicit written permission from a client who appears in a testimonial.",
          "Publishing the video only on the website and not on LinkedIn, where much of the B2B decision-making in this sector happens.",
          "Letting the video run beyond two or three minutes without a concrete case to hold attention.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "What type of video works best for a law firm?",
        answer:
          "A series of short videos by practice area, one to two minutes each, usually performs better than a single long corporate video. They can be published separately depending on the area each client is interested in.",
      },
      {
        type: "faq",
        question: "Do the partners have to memorize a script?",
        answer:
          "No, and it's better if they don't. I work from a brief of key ideas and, if support is needed, a teleprompter in short takes. The goal is for it to sound reasoned, not read.",
      },
      {
        type: "faq",
        question: "Can you film inside the firm without compromising confidentiality?",
        answer:
          "Yes, by checking beforehand what's visible on camera: documents, screens and whiteboards with notes. I let the team know in advance so the room is cleared on shoot day.",
      },
      {
        type: "faq",
        question: "How long does producing this type of video take?",
        answer:
          "For a corporate piece with two or three interviews, I usually need one shoot day and one to two weeks of editing, depending on the number of final pieces.",
      },
      {
        type: "paragraph",
        text: "If you run a law firm or legal consultancy in Madrid and want a video that conveys seriousness without sounding stiff, get in touch via /en/contacto and we'll plan it around your practice areas.",
      },
    ],
  },
  "formatos-entrega-video-corporativo": {
    title: "Corporate video delivery formats: what to ask your production company for",
    description:
      "Which formats, resolutions, subtitles and usage rights to ask your production company for when finalizing a corporate video, so there are no surprises at final delivery.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "post-production",
      "video deliverables",
      "video production",
      "DaVinci Resolve",
    ],
    keyword: "corporate video delivery formats",
    excerpt:
      "Before finalizing a corporate video, it's worth being clear about which formats, resolutions and rights the delivery includes. Here's what I ask for myself when I wrap a project, so there are no surprises at the end.",
    seoTitle: "Corporate Video Delivery Formats | Daniel Acero",
    metaDescription:
      "Corporate video delivery formats: what to ask your production company for before filming to avoid surprises with the final master.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "When I wrap a corporate video project, the part that raises the most questions is almost never the shoot. It's the delivery. The client receives a file via WeTransfer and doesn't know whether that's everything or whether something is still to come.",
      },
      {
        type: "paragraph",
        text: "I've spent years delivering pieces for LinkedIn, corporate websites, reception screens and internal presentations. Each channel requires a different format, and if it isn't discussed before the shoot, you end up re-exporting weeks later. This is what I ask for myself when I wrap a project, and what I recommend asking for if you're on the other side.",
      },
      {
        type: "image",
        src: "/blog/formatos-entrega-video-corporativo/hero.webp",
        alt: "Video editor working in front of several monitors showing a project's timeline and color grading",
        width: 1920,
        height: 1401,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A delivery format isn't just the final file that arrives by email. It includes the resolution, the codec, the aspect ratio, whether subtitles are burned in or supplied as a separate file, and exactly which usage rights that file covers.",
      },
      {
        type: "paragraph",
        text: "It matters because if it isn't put in writing before filming, the problem shows up at the end of the project: the master is in 1080p when 4K was needed for a trade show screen, or the vertical version for Instagram wasn't included in the quote and has to be negotiated separately with the project already closed.",
      },
      {
        type: "paragraph",
        text: "This doesn't depend on the size of the project. A three-minute video for a corporate website needs the same questions as a thirty-second one for social media: what resolution, what formats and what can be reused later without reshooting.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "The master: resolution and codec" },
      {
        type: "paragraph",
        text: "I always ask for the master in the highest resolution it was shot in, usually 4K on a Sony A7S III or similar, even if the final use is 1080p on the web. It serves as a source file if, a year from now, you need to cut a new piece without reshooting. For the master I usually deliver ProRes or a high-bitrate H.264; for web distribution, 1080p H.264 at a bitrate between 8 and 12 Mbps gives good results without being too heavy.",
      },
      { type: "heading", level: 3, text: "Vertical versions and cutdowns for social media" },
      {
        type: "paragraph",
        text: "If the video is going to LinkedIn, Instagram or Stories, I make it clear from the script stage that there will be 9:16 and 1:1 versions. Cropping a horizontal shot to vertical after the shoot almost always hurts the composition: the person ends up off-center or the logo falls out of frame. The right approach is to plan the vertical crop during the shoot, leaving room on either side of the shot.",
      },
      { type: "heading", level: 3, text: "Subtitles, music and usage rights" },
      {
        type: "paragraph",
        text: "I deliver subtitles in two formats: burned in for direct distribution on social media, and as a separate .srt file in case they need to be translated or edited without re-exporting the video. For music, I put in writing which license covers the track — a song licensed through a platform like Epidemic Sound isn't the same as a composition with exclusively assigned rights. And I always clarify whether the price includes the full video or only short cutdowns for social media, which is one of the most common points of confusion in a quote.",
      },
      {
        type: "image",
        src: "/blog/formatos-entrega-video-corporativo/intermedia.webp",
        alt: "USB and data cables ready to transfer a video file",
        width: 1920,
        height: 1280,
        caption: "The high-resolution master is the file that lets you reuse the footage without reshooting.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Accepting only the final file without asking for the master in the highest resolution shot.",
          "Not specifying vertical formats before the shoot, and ending up paying for them separately later.",
          "Assuming subtitles are included without confirming it in the quote.",
          "Not asking about the license for the video's background music.",
          "Receiving the file without a clear name or version number, which makes it hard to find months later.",
          "Not asking for the loose b-roll so it can be reused in future pieces.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "What resolution should I ask for in a corporate video?",
        answer:
          "At least 1080p for web use, but if the budget allows, ask for the master in 4K even if the final use is lower. It leaves room for crops and future uses without repeating the shoot.",
      },
      {
        type: "faq",
        question: "How long does a production company take to deliver the final video?",
        answer:
          "It depends on the project, but two to four weeks from the shoot is a realistic timeline for a corporate video with a couple of revision rounds.",
      },
      {
        type: "faq",
        question: "Are subtitles included in the quote?",
        answer:
          "Not always. It's worth asking before signing, because many production companies charge extra for them if several languages are needed.",
      },
      {
        type: "faq",
        question: "Can I ask for the editing project file as well as the final video?",
        answer:
          "You can ask, but not all production companies hand it over by default because it includes assets with third-party licenses. At the very least, ask for the unedited b-roll.",
      },
      {
        type: "paragraph",
        text: "If you're about to finalize a corporate video and want to be clear on which formats you need before filming, get in touch via /en/contacto and we'll put it in writing in the quote, with no surprises at delivery.",
      },
    ],
  },
  "video-corporativo-sector-agroalimentario": {
    title: "Corporate video for the food and agriculture sector: what makes it work",
    description:
      "How I approach a corporate video inside a food processing plant: hygiene regulations, filming without stopping the production line and how to tell the story of the process without falling into a generic corporate video.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "food industry",
      "industrial video",
      "video production",
      "product video",
    ],
    keyword: "food industry corporate video",
    excerpt:
      "Filming in a food processing plant has its own rules: hygiene, safety and a production line that doesn't stop for a camera. Here's how I approach it so the video turns out well without slowing down operations.",
    seoTitle: "Food & Agriculture Corporate Video | Daniel Acero",
    metaDescription:
      "Corporate video for the food and agriculture sector: how to film in a plant, comply with regulations and tell the process story without looking like generic advertising.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Filming in a food processing plant is nothing like filming in an office. There's a production line that doesn't stop because a camera is in front of it, hygiene protocols that have to be followed from minute one, and machinery that sets its own working pace.",
      },
      {
        type: "paragraph",
        text: "I've filmed at canneries, packing plants and fresh produce facilities. Each plant has its own specific rules, but the pattern repeats: it takes more planning than an office shoot, and the best results come when I let the process speak for itself, without forcing anything in front of the camera.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-agroalimentario/hero.webp",
        alt: "Workers inside a food processing plant with industrial machinery",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video for a food and agriculture company usually covers two needs at once: showing the production process transparently and building trust with distributors, B2B clients or end consumers. It isn't product advertising in the classic sense; it's showing how the work is done so that viewers trust what they buy.",
      },
      {
        type: "paragraph",
        text: "It matters because in this sector trust is built on concrete details: quality control, traceability, plant conditions. A well-planned video turns those processes, which are normally invisible to the customer, into something that can be seen and verified.",
      },
      {
        type: "paragraph",
        text: "There's also a layer other sectors don't have: health and food safety regulations. You can't walk into a production area with just any equipment or clothing, and that shapes what can be filmed and how, not just the video's messaging.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Hygiene rules and plant access" },
      {
        type: "paragraph",
        text: "Before setting foot in the plant, I ask about the exact hygiene protocol: coat, hairnet, specific footwear, sometimes gloves. The camera equipment also has to pass that check, and some areas simply don't allow cameras under the regulations. I confirm this with the quality manager before locking in a shoot date, not on the day itself.",
      },
      { type: "heading", level: 3, text: "Filming without stopping the production line" },
      {
        type: "paragraph",
        text: "The line doesn't stop for the shoot unless an exception is agreed in advance. I work around the real production pace: wide shots while the line keeps running, and the odd close-up during natural pauses in the process. This means arriving with the shot list locked, because there's no room to improvise on the fly without interrupting the operators.",
      },
      { type: "heading", level: 3, text: "Showing the process without falling into a generic corporate video" },
      {
        type: "paragraph",
        text: "The most common mistake is filming machinery and conveyor belts with no narrative thread, which gives you a video that could be from any factory. I prefer to follow the product: where the raw material comes from, what checks it goes through, how it reaches final packaging. That structure, simple as it is, turns technical shots into a story that's easy to follow.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-agroalimentario/intermedia.webp",
        alt: "Video camera on a tripod ready to film",
        width: 1920,
        height: 1280,
        caption: "In the plant, the shot list is locked before the shoot: there's no room to improvise without slowing the line.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Not confirming the hygiene and access protocol with the quality team before shoot day.",
          "Filming machinery without any narrative thread linking the shots to the final product.",
          "Asking to stop the production line without having agreed it in advance, which creates friction with the plant.",
          "Not planning a traceability or quality control shot, which is usually what builds the most trust when watching the video.",
          "Filming with equipment or clothing unsuitable for a production area, which can halt the shoot on the spot.",
          "Dragging the video out by showing the whole process at the same pace, without giving more weight to the steps that build the most trust.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Can you film inside a food production area?",
        answer:
          "It depends on the plant and the specific area. Some require a coat, hairnet and specific footwear for the camera crew; others don't allow filming under the regulations. It's always confirmed with the quality manager before the shoot date.",
      },
      {
        type: "faq",
        question: "Does the production line have to stop for filming?",
        answer:
          "No, except for a specific shot agreed in advance. The norm is to film around the line's real pace, using natural pauses in the process for close-ups.",
      },
      {
        type: "faq",
        question: "How long is this type of corporate video?",
        answer:
          "Two to three minutes is usually enough to show the whole process without losing the viewer's attention. Longer pieces work better as internal technical material than as a client-facing corporate video.",
      },
      {
        type: "faq",
        question: "What should be shown to build the most trust?",
        answer:
          "The quality control and traceability steps, even if they seem less eye-catching than the machinery. That's what most helps a distributor or B2B client trust the process.",
      },
      {
        type: "paragraph",
        text: "If you run a food and agriculture company in Madrid and want a video that shows your production process with a clear point of view, get in touch via /en/contacto and we'll plan it around your plant's regulations.",
      },
    ],
  },
  "ia-en-posproduccion-video-corporativo": {
    title: "AI in corporate video post-production: what I use and what I don't",
    description:
      "A look at which corporate video post-production tasks I already hand off to artificial intelligence tools, which I still do by hand and why human judgment still makes the difference.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "post-production",
      "artificial intelligence",
      "video editing",
      "DaVinci Resolve",
      "workflow",
    ],
    keyword: "AI in video post-production",
    excerpt:
      "I use AI tools to transcribe, subtitle and clean up audio. I don't use them to decide the pace of the edit or to write the script. Here's where I draw the line and why.",
    seoTitle: "AI in Corporate Video Post-Production | Daniel Acero",
    metaDescription:
      "Artificial intelligence in corporate video post-production: which tasks I automate, which I never delegate and the tools I use day to day.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Three years ago I transcribed interviews by listening to the audio twice and taking notes by hand. Today I upload the file, get the transcript in minutes and search for the exact line with Ctrl+F. That's AI in post-production, and there's nothing spectacular about it: it's a tool that takes hours of mechanical work off my plate.",
      },
      {
        type: "paragraph",
        text: "What has changed over the last couple of years is the number of tasks that can be automated without losing quality. But I've also seen corporate videos that clearly ran on autopilot: flat pacing, generic transitions, a script that says nothing because an AI wrote it without a real brief. Here's where I use these tools and where I don't touch them.",
      },
      {
        type: "image",
        src: "/blog/ia-en-posproduccion-video-corporativo/hero.webp",
        alt: "Two professionals reviewing a video edit at a desk with two monitors",
        width: 1880,
        height: 1253,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "When I talk about AI in post-production, I don't mean generating video from scratch with a prompt. I mean specific tools that speed up repetitive tasks within a traditional editing workflow: automatic transcription, subtitling, noise reduction, preliminary take selection by keyword.",
      },
      {
        type: "paragraph",
        text: "It matters because much of the post-production time on a corporate video goes into tasks that don't require editorial judgment: syncing audio, finding the exact moment the interviewee says a particular line, cleaning up background noise. Automating that frees up more hours for what does require an eye: pacing, shot selection, the story.",
      },
      {
        type: "paragraph",
        text: "The risk comes when the part that shouldn't be automated gets automated too. A script generated without knowing the real client, an edit whose cuts follow a generic template pattern: it shows, and in corporate video credibility is half the product.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Transcription and finding soundbites" },
      {
        type: "paragraph",
        text: "I upload every interview to an automatic transcription tool before editing anything. In twenty minutes I have the full text with timestamps. From there I search by word and jump straight to the exact second in the original clip, instead of scrubbing blindly. On a 40-minute interview this easily saves an hour of viewing.",
      },
      { type: "heading", level: 3, text: "Subtitling and audio cleanup" },
      {
        type: "paragraph",
        text: "I generate automatic subtitles as a first pass and then review them by hand, because proper names and the client's technical terms almost always come out wrong. For audio, I use AI noise reduction on takes recorded on a plant floor or outdoors in the wind; it's faster and cleaner than a manual EQ filter.",
      },
      { type: "heading", level: 3, text: "What I still do by hand" },
      {
        type: "paragraph",
        text: "The order of the edit, the rhythm of the cuts and which line opens the video are decisions I make myself, after watching all the footage at least once. No tool knows the client's context, what they want to convey or which line sounds forced even when it's well delivered. I don't delegate that, because it's the part that really determines whether the video works.",
      },
      {
        type: "image",
        src: "/blog/ia-en-posproduccion-video-corporativo/intermedia.webp",
        alt: "Video editing timeline on screen with several video and audio tracks",
        width: 1920,
        height: 1280,
        caption: "Transcription and subtitling get automated; the order of the edit doesn't.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Leaving automatic subtitles unreviewed, with proper names and figures transcribed incorrectly.",
          "Generating the entire script with AI without giving it real context about the client or the video's goal.",
          "Using automatic editing templates that impose a cutting rhythm unrelated to the story being told.",
          "Applying noise reduction too aggressively and losing the natural sound of the interviewee's voice.",
          "Not reviewing the final result point by point before delivery, trusting that the tool got it right.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Can you tell if a corporate video was edited with AI?",
        answer:
          "You can tell if the AI decided the pace of the edit or wrote the script without human judgment behind it. You can't tell if it was only used to transcribe, subtitle or clean up audio, because those tasks don't change the video's narrative.",
      },
      {
        type: "faq",
        question: "Can AI replace the editor on a corporate video?",
        answer:
          "Not for the decisions that matter: what to tell, in what order and at what pace. It can replace mechanical tasks like transcription or a first pass of subtitles, but editorial selection is still human work.",
      },
      {
        type: "faq",
        question: "Which AI tools are commonly used in post-production?",
        answer:
          "Automatic transcription, AI-assisted noise reduction and subtitle generation are the most widespread. DaVinci Resolve already integrates several of these features within its own editing workflow.",
      },
      {
        type: "faq",
        question: "Does using these tools increase the price of a corporate video?",
        answer:
          "No, quite the opposite: they cut the hours spent on mechanical tasks, which frees up more time for the edit and keeps the budget the same without cutting quality where judgment really counts.",
      },
      {
        type: "paragraph",
        text: "If you want a corporate video with a carefully handled post-production process, where technology speeds up the mechanical work but judgment stays human, get in touch via /en/contacto and let's talk about your project.",
      },
    ],
  },
}

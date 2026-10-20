// lib/blog-translations/en-7.ts
// English translations of blog posts (part 7): corporate video for the pharmaceutical and insurance sectors,
// shoot file backup, remote testimonials and teaser vs full corporate video.
import type { BlogPostTranslation } from "@/lib/blog-translations"

export const enPart7: Record<string, BlogPostTranslation> = {
  "video-corporativo-sector-farmaceutico": {
    title: "Corporate video for the pharmaceutical sector: what to bear in mind",
    description:
      "How I plan a corporate video for laboratories and medical device companies: a script reviewed by compliance, shooting on the plant floor and interviews with no clinical claims.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "pharmaceutical sector",
      "Madrid filmmaker",
      "audiovisual compliance",
      "institutional video",
    ],
    keyword: "pharmaceutical corporate video",
    excerpt:
      "In pharma, every shot goes through compliance before it is published. Here is how I plan the script, the plant shoot and the interviews so the video meets the regulations without losing its natural feel.",
    seoTitle: "Pharmaceutical Corporate Video | Dani Acero",
    metaDescription:
      "Corporate video for the pharmaceutical sector: compliance-reviewed script, plant access and interviews with no clinical claims. How I plan it.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Filming at a pharmaceutical company is not like filming at a software startup. Before I touch the camera, the content goes through the compliance department, and the words I use in the script matter as much as the shots.",
      },
      {
        type: "paragraph",
        text: "This is what I've learned working with laboratories and medical device companies in Madrid: how I plan the script, what I ask for before going onto the plant floor and how I shoot interviews so that nobody ends up promising something the product can't promise.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-farmaceutico/hero.webp",
        alt: "Scientist using a pipette with test tubes in a laboratory",
        width: 1920,
        height: 1204,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "A corporate video in pharma is used to communicate culture, manufacturing processes and trials, or to introduce the scientific team. It isn't product advertising: that has its own regulatory route and I don't normally handle it.",
      },
      {
        type: "paragraph",
        text: "It matters because the margin for error is small. A sentence that sounds like a therapeutic promise, an image of a patient without a signed consent form or a shot inside a clean room without the right authorisation can throw away months of the client's work.",
      },
      {
        type: "paragraph",
        text: "That's why the process starts before the shoot, not on the day of filming. The script is reviewed with compliance, not just with marketing, and locations inside the plant are confirmed with the quality manager, not just with communications.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "A script reviewed with compliance" },
      {
        type: "paragraph",
        text: "I send the script to compliance before fixing a shooting date. I don't ask for a generic go-ahead, I ask for a sentence-by-sentence review: what can be said about efficacy, which terms are prohibited and which claims need a source cited on screen. If something takes time to be approved, I'd rather know weeks in advance than on set with the crew already set up.",
      },
      { type: "heading", level: 3, text: "Shooting on the plant floor or in the laboratory" },
      {
        type: "paragraph",
        text: "Going into a clean room or onto a production line means a gown, a hairnet and sometimes a decontamination protocol for the equipment. I ask in advance what the camera can take in and what needs a cover or cleaning first. I film with as few people inside as possible and I check with the quality manager which shots are allowed before setting anything up.",
      },
      { type: "heading", level: 3, text: "Interviews with no clinical claims" },
      {
        type: "paragraph",
        text: "With researchers or medical staff I prepare questions about process and career path, not about results. If someone improvises a line like 'this cures' or 'it's the best on the market', I stop the take and repeat it. It's easier to fix it in front of the camera than in the edit suite, when there's no other take left to use.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-farmaceutico/intermedia.webp",
        alt: "Laboratory technician in a lab coat checking an environmental monitoring plate",
        width: 1920,
        height: 1280,
        caption: "I check every shot inside the plant with the quality manager beforehand.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Shooting before the script has been approved by compliance.",
          "Using patient testimonials without informed consent specific to audiovisual use.",
          "Letting someone claim efficacy or say something cures a condition on camera without a cited source.",
          "Not asking about clean room rules before going in with the equipment.",
          "Publishing the video without a final legal review of the finished edit, not just of the initial script.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Can I film inside a pharmaceutical production plant?",
        answer:
          "Yes, but usually with restrictions: fewer people inside, disinfected or covered equipment, and shots approved by the quality manager. I always confirm this before fixing the shooting date.",
      },
      {
        type: "faq",
        question: "Who reviews the script before filming?",
        answer:
          "The client's compliance department or legal team, normally separate from marketing. I prefer them to review the full script, not a summary, because the nuances of each sentence matter.",
      },
      {
        type: "faq",
        question: "Can patient testimonials be filmed?",
        answer:
          "Only with informed consent specific to audiovisual use, not the generic consent for the treatment. If the client doesn't have it, I make it a requirement before scheduling that interview.",
      },
      {
        type: "faq",
        question: "How long does it take to get a script approved in pharma?",
        answer:
          "It varies by laboratory, but I usually leave between one and three weeks before the shoot so that compliance can review and request changes without squeezing the schedule.",
      },
      {
        type: "paragraph",
        text: "If you work at a laboratory or a medical device company in Madrid and you need a corporate video that gets past the compliance filter without losing its natural feel, get in touch via /en/contact and we'll plan it together.",
      },
    ],
  },
  "backup-gestion-archivos-rodaje-corporativo": {
    title: "Backup and file management on a corporate shoot: how not to lose footage",
    description:
      "How I organise backup and file management during a corporate shoot: the three-copy rule, checksum verification and folder naming.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "shoot backup",
      "file management",
      "post-production",
      "Madrid filmmaker",
    ],
    keyword: "corporate shoot backup",
    excerpt:
      "The footage from a corporate shoot can almost never be recreated. Backup isn't an optional step at the end of the day: it's part of the shoot itself.",
    seoTitle: "Backup and File Management on a Shoot | Dani Acero",
    metaDescription:
      "Backup and file management on a corporate shoot: the three-copy rule, checksum verification and folder naming before you format any card.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Every corporate shoot ends with memory cards full of footage that can't be recreated. If it's a full-day interview with the CEO, there's no way to record that conversation again if a drive fails the next day. That's why backup isn't an optional step at the end of the day: it's part of the shoot itself.",
      },
      {
        type: "paragraph",
        text: "I've been shooting corporate video in Madrid for years and my backup protocol is as automated as the shoot itself. It isn't complicated, but it takes discipline: doing it the same way, in the same order, every time, even when it's late and the laptop battery is low.",
      },
      {
        type: "image",
        src: "/blog/backup-gestion-archivos-rodaje-corporativo/hero.webp",
        alt: "Video editor screen showing the audio waveform and the editing timeline",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "Backup on a corporate shoot means copying the recorded footage from the memory card to at least two different locations before formatting that card to use it again. It sounds obvious, but it's the step that gets skipped most often when there's a rush to pack up the gear or get to the next shoot.",
      },
      {
        type: "paragraph",
        text: "It matters because the cost of losing footage isn't only financial. It's the client's time, the availability of the CEO or the team in the video, and the reputation of whoever shot it. A backup failure on an event shoot, where there's no second chance, can mean redoing months of planning.",
      },
      {
        type: "paragraph",
        text: "On top of that, on projects with several shooting days or several cameras, the volume of files grows fast. A day with two 4K cameras can easily produce between 300 and 500 GB. Without a clear system for copying and naming, it's easy to lose track of which card has already been copied and which hasn't.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "The three-copy rule" },
      {
        type: "paragraph",
        text: "I apply the classic backup rule: at least three copies, on two different media, and one away from the shoot location. In practice that's the original card, which I don't erase until I get home, a copy on an SSD I carry in my backpack, and a second copy on another drive or in the cloud once I'm back at the studio. I don't format any card until all three copies are verified.",
      },
      { type: "heading", level: 3, text: "Checksum verification before wiping the card" },
      {
        type: "paragraph",
        text: "Copying isn't enough: you have to verify that the copy is identical to the original. I use tools like Hedge or ShotPut Pro that compare checksums, a digital fingerprint of the file, between the original and the copy. If the checksum matches, the copy is reliable. Only then do I format the card, never before.",
      },
      { type: "heading", level: 3, text: "Folder organisation and naming from the shoot onwards" },
      {
        type: "paragraph",
        text: "I name folders by date and project from the very first offload: 2026-09-18_client_camera-A. Inside, subfolders by card or by sound. This avoids the chaos of forty folders with no logic when I get to editing in DaVinci Resolve, and it means anyone on the team can find a file without having to ask me.",
      },
      {
        type: "image",
        src: "/blog/backup-gestion-archivos-rodaje-corporativo/intermedia.webp",
        alt: "Person inserting an SD memory card into a camera to download the recorded footage",
        width: 1920,
        height: 1281,
        caption: "I don't format a card until I have three verified copies of the footage on it.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Formatting the card straight after copying, without verifying the copy with a checksum.",
          "Keeping the only backup on the same drive I use every day, with no real redundancy.",
          "Not labelling cards that have already been copied, mixing them up with those still pending.",
          "Leaving all the backup until the end of the day, when there's more tiredness and more rush to pack up.",
          "Trusting the cloud to upload the footage on its own without checking the upload has finished before leaving a location with poor coverage.",
          "Having no copy outside the physical shoot location or the office, which gives no protection against theft or fire.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How many copies do I really need for a corporate shoot?",
        answer:
          "With three different media, the original card, a field drive and a drive or cloud copy at the studio, I cover most scenarios. For big projects, with a budget at stake, I add an extra copy on a drive that is kept away from my office.",
      },
      {
        type: "faq",
        question: "What if I don't have time to back up at the shoot itself?",
        answer:
          "If it's a one-day shoot and I go straight back to the studio, I can wait until I get there. But on multi-day shoots or outside Madrid, I back up every night. I don't let uncopied footage pile up, because the risk of losing several days of shooting is too high.",
      },
      {
        type: "faq",
        question: "Do I need specific hard drives or will any do?",
        answer:
          "I use SSDs for field backup because they're more resistant to knocks and vibration than mechanical drives. For long-term storage at the studio, higher-capacity mechanical drives are enough and cheaper.",
      },
      {
        type: "faq",
        question: "How long do I keep the footage after delivering the video?",
        answer:
          "It depends on the contract, but I usually keep the raw footage for between six months and a year after final delivery, in case a revision or an extra piece is needed. After that I archive it on a long-term storage drive and free up working space.",
      },
      {
        type: "paragraph",
        text: "If you're organising a corporate shoot and want the footage to reach post-production without any surprises, get in touch via /en/contact and I'll tell you how I'd approach it for your project.",
      },
    ],
  },
  "video-corporativo-sector-seguros": {
    title: "Corporate video for the insurance sector: how to build trust without jargon",
    description:
      "How I approach a corporate video for insurers and brokers: which formats work, how I explain coverage without jargon and what limits the sector's regulation sets.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "insurance sector",
      "insurers",
      "insurance brokers",
      "Madrid filmmaker",
    ],
    keyword: "insurance corporate video",
    excerpt:
      "Insurance is a product you don't see until you need to use it. The video has to build that trust in advance, without empty promises or jargon nobody understands.",
    seoTitle: "Corporate Video for the Insurance Sector | Dani Acero",
    metaDescription:
      "Corporate video for the insurance sector: which formats work, how to explain coverage without jargon and what limits regulation sets before you shoot.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Insurance is one of the hardest products to sell on video. You can't see it, you can't touch it, and most customers only understand what they've bought on the day they have to use it. That's where you find out whether the insurer or broker conveyed real trust or just nicely laid-out general terms and conditions.",
      },
      {
        type: "paragraph",
        text: "I've worked with brokers and brokerages in Madrid who want a corporate video but arrive with the same fear: that the result will sound like a generic ad from a big company, with nothing to set them apart. Here I explain how I approach it so the video explains things well and it's also clear there's a real person behind it.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-seguros/hero.webp",
        alt: "Two people reviewing insurance policy documents at an office desk",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What it is and why it matters" },
      {
        type: "paragraph",
        text: "In insurance, a corporate video is almost never a single institutional piece. It works better split into several formats: a brand video that explains who you are and how you work, short explainer videos for each type of coverage, and profiles of the agents or brokers who handle the direct relationship with the customer.",
      },
      {
        type: "paragraph",
        text: "It matters because the decision to take out insurance is rarely made on price alone. It's made on trust that, when something happens, someone will respond. Video is one of the few tools that can convey that feeling before signing, when there's still no real experience to prove it.",
      },
      {
        type: "paragraph",
        text: "There's also a regulatory layer that doesn't exist in other sectors. You can't promise coverage outcomes, or suggest that a claim will be resolved in a particular way, or show a real customer's case without their explicit written consent. That shapes the script from the first draft, not just the final edit.",
      },
      { type: "heading", level: 2, text: "How to do it well" },
      { type: "heading", level: 3, text: "Explain coverage without policy jargon" },
      {
        type: "paragraph",
        text: "The most common mistake is recycling the language of the general terms and conditions for the video script. I work the other way round: first I identify the real question the customer is asking (what happens if I have an accident abroad?) and I build the explanation around that question, not around the clause that answers it in the contract.",
      },
      { type: "heading", level: 3, text: "Give the broker a leading role, not just the brand" },
      {
        type: "paragraph",
        text: "In insurance, the relationship of trust is usually with the person, not the company. If the project is for a brokerage or an individual broker, I prioritise having them speak to camera with their own judgement, instead of hiding them behind a corporate voice-over. That's what sets one broker apart from another when the underlying product is almost identical.",
      },
      { type: "heading", level: 3, text: "Watch the tone: approachable, never alarmist" },
      {
        type: "paragraph",
        text: "It's tempting to build the script on fear (an accident, a fire, sick leave) to justify the need for insurance. I avoid that approach whenever I can. I prefer an approachable, solution-focused tone: what happens, what is done, who responds. Fear grabs attention for a second, but it creates rejection if it feels forced, and in this sector trust weighs more than initial impact.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-sector-seguros/intermedia.webp",
        alt: "Person signing a contract document on an office desk",
        width: 1920,
        height: 1281,
        caption: "Before recording any testimonial from a real customer, I ask for explicit written consent.",
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Promising or hinting at specific coverage outcomes, something the sector's regulation doesn't allow.",
          "Showing a real customer's case or testimonial without their explicit written consent.",
          "Copying the language of the general terms and conditions into the script, instead of translating it into the customer's real question.",
          "Building the whole message on fear, with alarmist music and imagery that creates rejection rather than trust.",
          "Hiding the agent or broker behind a generic voice-over when the person is precisely what keeps the customer.",
          "Using stock shots so generic that the video could belong to any insurer on the market.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Can I show a real case of a resolved claim?",
        answer:
          "Only with the customer's explicit written consent, and avoiding details that identify them if they don't want to appear. If there's no such consent, it's better to build a generic case that illustrates the process without naming anyone real.",
      },
      {
        type: "faq",
        question: "Which format works best: one long video or several short pieces?",
        answer:
          "Almost always several short pieces, one per type of coverage or frequently asked question, of one to two minutes. They can be shared by WhatsApp or email at the exact moment the customer has that doubt, instead of waiting for them to watch a long institutional video.",
      },
      {
        type: "faq",
        question: "Do I need a fixed script for the agent or broker?",
        answer:
          "No, and it isn't a good idea. I work with a brief of key ideas for each question, not a text to memorise. If support is needed I provide a teleprompter for short takes, so it sounds reasoned and not read.",
      },
      {
        type: "faq",
        question: "How long does production of this kind of video take?",
        answer:
          "For one brand piece plus three or four coverage explainers, I usually need one shooting day and between one and two weeks of editing, depending on the number of final pieces.",
      },
      {
        type: "paragraph",
        text: "If you're a broker, an agent or you run communications at an insurer in Madrid and you want a video that explains things well without sounding like a generic ad, get in touch via /en/contact and we'll plan it around your coverage.",
      },
    ],
  },
  "testimonios-remoto-video-corporativo": {
    title: "Recording remote testimonials for corporate video: how to do it with quality",
    description:
      "How I prepare and direct testimonials recorded remotely for corporate video: what equipment I ask the interviewee for, how I handle light and sound from a distance and which mistakes to avoid so it doesn't look amateur.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate video",
      "testimonials",
      "remote recording",
      "remote interviews",
      "audiovisual production",
    ],
    keyword: "remote video testimonials",
    excerpt:
      "More and more often I'm asked for testimonials recorded without me physically being there. Here is how I prepare them so the quality doesn't look amateur next to the rest of the corporate video.",
    seoTitle: "Remote Testimonials for Corporate Video | Dani Acero",
    metaDescription:
      "Recording remote testimonials for corporate video: equipment, light and sound so the long-distance interview doesn't look amateur.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "More and more often I'm asked for testimonials recorded remotely: a client in another city, an executive who can't travel, an international success story. The final piece has to look as polished as if I had been behind the camera, even though the person is recording alone from their office or living room.",
      },
      {
        type: "paragraph",
        text: "The problem isn't the distance. It's that most people record with their laptop in video-call mode, without thinking about light, sound or framing, and the result looks amateur next to the rest of the corporate video. Here I explain how I set up these recordings so the difference from an in-person interview is minimal.",
      },
      {
        type: "image",
        src: "/blog/testimonios-remoto-video-corporativo/hero.webp",
        alt: "Open laptop on a wooden table during a work video call",
        width: 1920,
        height: 1443,
        priority: true,
      },
      { type: "heading", level: 2, text: "What a remote testimonial is and why it's requested more and more" },
      {
        type: "paragraph",
        text: "A remote testimonial is an interview recorded without me being physically with the person being interviewed. They record from their own location, usually with a camera or their phone, following instructions I give them before and during the session by video call.",
      },
      {
        type: "paragraph",
        text: "It's requested mostly for success stories with clients outside Madrid, testimonials from international partners, or executives whose schedules can't be fitted around a trip by me. Also when the budget doesn't cover travelling to record 90 seconds of testimonial.",
      },
      {
        type: "paragraph",
        text: "The final quality depends almost entirely on the preparation beforehand. Remotely I can't fix anything during the recording apart from verbal instructions, so all the work is front-loaded into the briefing.",
      },
      { type: "heading", level: 2, text: "How I set it up so it doesn't look amateur" },
      { type: "heading", level: 3, text: "Minimum equipment on the interviewee's side" },
      {
        type: "paragraph",
        text: "I ask for three basic things: a recent phone or a camera in landscape orientation at eye level, resting on something stable (a tripod, a pile of books, whatever they have to hand), and a wired lavalier microphone if they have one, or otherwise the headset with microphone that comes with their phone, which records better than a laptop's built-in microphone. If they have none of that, I use the audio recording of the video call itself as a backup and tell them so from the start.",
      },
      { type: "heading", level: 3, text: "Light and sound when you don't control the room" },
      {
        type: "paragraph",
        text: "I ask them to sit facing a window, never with their back to it, and to switch off overhead lights that cast harsh shadows under the eyes. If they have a desk lamp, I position it over the video call until I get a soft frontal light. For sound, the priority is a small room with soft furnishings (curtains, sofa, rug): an empty room with bare walls sounds echoey and there's no way to fix it afterwards in post-production without it showing.",
      },
      { type: "heading", level: 3, text: "Script and direction from a distance" },
      {
        type: "paragraph",
        text: "I prepare short questions beforehand, one at a time, and send them with plenty of notice so the person doesn't have to improvise on the spot. During the recording I supervise by video call while they record locally with an app like Riverside, which uploads the file in high quality afterwards, instead of relying on the video call's own compression. I cut between questions to give directions, just as I would on an in-person shoot.",
      },
      {
        type: "image",
        src: "/blog/testimonios-remoto-video-corporativo/intermedia.webp",
        alt: "Microphone on a table in a small home studio set up for recording",
        width: 1920,
        height: 1296,
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Recording directly from Zoom or Meet without a local recording tool: the video call's compression is very noticeable in the final result.",
          "Letting the person sit with a huge window behind them: the camera exposes for the background and the face ends up backlit.",
          "Not testing the audio before starting: a badly connected lavalier mic is discovered halfway through the recording, when it's too late.",
          "Asking for long, improvised answers without short supporting questions: remotely it's harder to cut and repeat without the cut showing.",
          "Not recording a safety take on the phone as a backup, in case the recording app fails halfway through the session.",
          "Mixing remote testimonials with in-person ones without making sure the image quality is similar enough between the two.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Can you tell the difference between a remote testimonial and an in-person one?",
        answer:
          "With good preparation, very little. Light and sound are the factors that give away a remote recording most, not camera resolution. If those two are taken care of, the result blends in well with the rest of the video.",
      },
      {
        type: "faq",
        question: "Which app do you recommend for recording remote testimonials?",
        answer:
          "I use Riverside when I can, because it records each track locally and uploads it in high quality afterwards, without depending on the connection during the call. If the interviewee doesn't want to install anything, Zoom with high-quality cloud recording is plan B.",
      },
      {
        type: "faq",
        question: "Do I need to send equipment to the interviewee?",
        answer:
          "Almost never. A phone from the last four or five years and an entry-level lavalier microphone are usually enough. I only send equipment if it's a very important client and I want to control every last detail.",
      },
      {
        type: "faq",
        question: "How long does a remote testimonial session last?",
        answer:
          "Between 30 and 45 minutes including light and sound tests, even though the final testimonial uses only 2 or 3 minutes of that material. As with in-person shoots, most of the time goes on finding natural answers, not on the recording itself.",
      },
      {
        type: "paragraph",
        text: "If you have a testimonial to record with someone who can't come to Madrid, tell me about it via /en/contact and I'll tell you how to set it up so it fits with the rest of your corporate video.",
      },
    ],
  },
  "teaser-vs-video-corporativo-completo": {
    title: "Teaser vs full corporate video: what's the difference and when to use each",
    description:
      "I explain the real difference between a teaser and a full corporate video: what goal each piece serves, how I plan both on the same shoot and when it makes sense to ask for just one.",
    readingTime: "4 min read",
    category: "Guide",
    tags: [
      "corporate teaser",
      "corporate video",
      "audiovisual production",
      "Madrid filmmaker",
      "DaVinci Resolve",
      "video editing",
    ],
    keyword: "teaser vs corporate video",
    excerpt:
      "A teaser and a full corporate video are not the same piece cut to different lengths. They serve different goals and are planned differently from the technical script onwards.",
    seoTitle: "Teaser vs Full Corporate Video | Dani Acero",
    metaDescription:
      "Teaser vs full corporate video: what's the difference, when to use each and how I plan both pieces on the same shoot without duplicating costs.",
    heroKicker: "Blog / Guide",
    body: [
      {
        type: "paragraph",
        text: "Every time I finalise the quote for a corporate video with a client, the same question comes up: do we also need a teaser? The answer is almost always yes, but not because the teaser is a corporate video in miniature. They are two pieces with different goals, different pacing and different release moments, even though they share the same shoot.",
      },
      {
        type: "paragraph",
        text: "I've been delivering both formats to the same client from the same shooting day for years, and I still see the same confusion: thinking that the teaser is simply the long video cut in half. Here I explain the real difference, how I plan each piece from the technical script and when it makes sense to ask for just one of the two.",
      },
      {
        type: "image",
        src: "/blog/teaser-vs-video-corporativo-completo/hero.webp",
        alt: "Computer monitor showing video editing software with a timeline and preview window",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What a teaser is and what a full corporate video is" },
      {
        type: "paragraph",
        text: "A teaser is a short piece, between 15 and 40 seconds, designed to spark curiosity before the viewer sees the main piece. It relies on eye-catching shots, fast pacing and very little text. It doesn't explain anything in detail: it hints, and leaves a question open.",
      },
      {
        type: "paragraph",
        text: "The full corporate video is the piece that does answer that question. It lasts between 2 and 5 minutes, has a complete narrative structure with setup, development and close, and usually relies on testimonials, concrete data or a voice-over that guides the viewer from start to finish.",
      },
      {
        type: "paragraph",
        text: "The confusion comes from both pieces coming out of the same shoot. But a teaser is not a trimmed summary of the long video. It's a piece with its own script, even if it reuses some of the footage recorded that day.",
      },
      { type: "heading", level: 2, text: "How I plan each piece on the same shoot" },
      { type: "heading", level: 3, text: "Separate script and shot list from the briefing" },
      {
        type: "paragraph",
        text: "Before filming, I decide which shots are only for the teaser and which feed the full video. If I leave that decision for the edit suite, the teaser turns out weak: it ends up being leftover material from the long video, cut faster but with no personality of its own. I solve this by noting in the shooting plan which takes are meant to create immediate visual impact, with no need for context.",
      },
      { type: "heading", level: 3, text: "A different editing rhythm, not just a different length" },
      {
        type: "paragraph",
        text: "In the teaser I work with cuts of under a second, music that hits from the very first frame and zero spoken explanation. In the full video the pace slows down: I let the testimonials breathe, I control the pauses and I adjust the rhythm shot by shot in DaVinci Resolve so the narrative is easy to follow. They are two different editing logics, not the same one with fewer minutes.",
      },
      { type: "heading", level: 3, text: "A different release moment" },
      {
        type: "paragraph",
        text: "The teaser goes out first: in the week before launch, or even on the same day as a heads-up that something new is coming. The full video is the piece that closes the campaign, the one I link from the website, from a newsletter or from the paid ad itself once some interest has been generated. Publishing both pieces on the same day usually wastes the sense of anticipation the teaser creates.",
      },
      {
        type: "image",
        src: "/blog/teaser-vs-video-corporativo-completo/intermedia.webp",
        alt: "Video camera mounted on a tripod, ready to record",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Using the teaser as a literal preview of the full video, giving away what matters and killing the curiosity it is supposed to create.",
          "Cutting the teaser directly from the finished long video, instead of giving it its own edit with its own rhythm.",
          "Publishing both pieces on the same day, losing the sense of anticipation that justifies having a teaser.",
          "Not making the teaser's call to action clear: if it creates curiosity but doesn't say where to see the rest, the traffic it generates is lost.",
          "Putting long explanatory text in the teaser, when its role is emotional and visual, not informative.",
          "Asking for only a teaser with no budget for the full video, expecting a 20-second piece to do the job of a five-minute one.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Do I need to shoot twice to get a teaser and a full video?",
        answer:
          "No. Both come from the same shoot if I plan it properly from the technical script. What changes is the later edit, not the shooting day.",
      },
      {
        type: "faq",
        question: "How long should a corporate teaser be?",
        answer:
          "Between 15 and 40 seconds tends to work well on social media. If it runs longer, it stops behaving like a teaser and starts competing directly with the full video.",
      },
      {
        type: "faq",
        question: "Can I publish just the teaser without releasing the full video?",
        answer:
          "I can deliver it that way if the client asks, but it makes much less sense: the teaser is designed to raise a question that the full video answers. Without that second piece, the campaign is left lopsided.",
      },
      {
        type: "faq",
        question: "Does the teaser need a voice-over?",
        answer:
          "Almost never. It works better with music, minimal on-screen text and shots with their own visual strength. Voice-over is usually kept for the full video, where there is time to develop an explanation.",
      },
      {
        type: "paragraph",
        text: "If you have a launch, an event or a campaign under way and you don't know whether you need one piece or both, tell me about it via /en/contact and I'll tell you what makes sense for your specific case before we finalise the quote.",
      },
    ],
  },
}

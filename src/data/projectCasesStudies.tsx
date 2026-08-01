// Case study data, gathered from READMEs, package.json dependency lists, and
// repo metadata across all of Waithaka's real shipped projects. Used by the
// reusable ProjectCaseStudy.tsx template.
//
// IMAGE PLACEHOLDERS: every `coverImage`, `logo`, and `gallery[].src` path
// below points at a file that does NOT exist yet in /public/case-studies/.
// The `imagesNeeded` array on each entry spells out exactly what to shoot/
// screenshot and drop at that path. Nothing renders broken in the meantime —
// ProjectVisual-style gradient fallbacks are used until real files land.

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyImage {
  src: string;
  caption: string;
}

export interface ImageNeeded {
  path: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string; // big headline, e.g. "How I built a digital museum with AI"
  tagline: string; // short one-liner under the eyebrow
  category: string; // filter chip: matches your existing project categories where possible
  year: string;
  scope: string[];
  role: string;
  duration: string;
  contributors: string;
  techStack: string[];
  github: string;
  live: string | null;
  coverImage: string;
  logo?: string;
  tldr: {
    context: string;
    problem: string;
    role: string;
    outcome: string;
  };
  stats: CaseStudyStat[];
  gallery: CaseStudyImage[];
  features: string[];
  imagesNeeded: ImageNeeded[];
}

export const caseStudies: CaseStudy[] = [
  // ── 1. PastLens — flagship ──────────────────────────────────────────
  {
    slug: "pastlens",
    title: "Building an AI-powered digital museum, 1st Runner-Up at JKUAT",
    tagline: "A digital museum that uses AI to catalogue and narrate history.",
    category: "0 → 1",
    year: "2025",
    scope: ["Full Stack", "AI Integration", "Team Lead"],
    role: "Team Lead, 5-person team",
    duration: "21-day hackathon sprint",
    contributors: "5 (team lead)",
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Lenis",
      "OGL (WebGL)",
      "React Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Express",
      "MongoDB",
      "Prisma",
      "Google Gemini API",
      "Redis",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/Past-Lens/past_lens",
    live: "https://pastlens.vercel.app/",
    coverImage: "/images/cs/covers/pastlens-cover",
    logo: "/case-studies/pastlens/logo.png",
    tldr: {
      context:
        "Built during the JKUAT AI Hackathon — a 21-day sprint to ship an AI product from scratch. I led a 5-person team to build PastLens, a digital museum platform.",
      problem:
        'Cataloguing and exploring historical/cultural artifacts is slow and inaccessible — most "digital museums" are just static image galleries with no intelligence behind them.',
      role: "Led the team of 5: split the frontend (React/Vite/Tailwind, animated with Framer Motion and Lenis smooth-scroll) from the backend (Express, MongoDB via Prisma, Google's Gemini API for AI-generated context), and drove the architecture decisions end to end.",
      outcome:
        "Placed 1st Runner-Up at the JKUAT AI Hackathon. Shipped a full AI-assisted museum experience — contribution flow, AI-generated artifact context, and a polished animated UI — inside a 21-day window.",
    },
    stats: [
      { value: "1st RU", label: "JKUAT AI Hackathon" },
      { value: "5", label: "Person team, led by me" },
      { value: "21", label: "Day build sprint" },
    ],
    gallery: [
      {
        src: "/images/cs/gallery/pastlens-landing",
        caption: "Landing page",
      },
      {
        src: "/images/cs/gallery/Ai-bot",
        caption: "AI-generated artifact detail/context",
      },
    ],
    features: [
      "AI-generated historical/cultural context per artifact (Google Gemini)",
      "Contribution flow for uploading and cataloguing artifacts",
      "Smooth-scroll, animated UI (Lenis + Framer Motion + WebGL via OGL)",
      "Full auth system (JWT, bcrypt)",
      "Image handling via Cloudinary, cached with Redis",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/pastlens/cover.jpg",
        description:
          "Wide hero banner (1600×900) — the landing page or a striking artifact-detail screen",
      },
      {
        path: "/case-studies/pastlens/logo.png",
        description: "PastLens logo/wordmark, transparent background",
      },
      {
        path: "/case-studies/pastlens/screens/home.jpg",
        description: "Screenshot of the landing/home page",
      },
      {
        path: "/case-studies/pastlens/screens/gallery.jpg",
        description: "Screenshot of the artifact browse/gallery view",
      },
      {
        path: "/case-studies/pastlens/screens/contribute.jpg",
        description: "Screenshot of the /contribute flow",
      },
      {
        path: "/case-studies/pastlens/screens/ai-detail.jpg",
        description:
          "Screenshot showing AI-generated context on an artifact page",
      },
    ],
  },

  // ── 15. Pricing Optimization System ─────────────────────────────────

  {
    slug: "pricing-optimization-system",
    title: "Using reinforcement learning to optimize SME pricing",
    tagline:
      "Final-year project: an RL agent that learns optimal product pricing for small businesses.",
    category: "RESEARCH",
    year: "2026",
    scope: ["Machine Learning", "Research"],
    role: "Researcher & Engineer (solo)",
    duration: "Final year project",
    contributors: "1 (solo)",
    techStack: ["Python", "Reinforcement Learning"],
    github: "https://github.com/WaithakaGuru/pricing-optimization-system",
    live: null,
    coverImage: "/images/cs/covers/pricing-optimization-system-cover",
    tldr: {
      context:
        "My final year project — SMEs routinely underprice or overprice products because they lack the tooling larger companies use for dynamic pricing.",
      problem:
        "Static, rule-of-thumb pricing leaves money on the table or prices customers out, and most existing pricing-optimization tools are built for enterprises, not small businesses.",
      role: "Designing and building a reinforcement learning agent that learns a pricing policy for SME products from simulated or historical demand data.",
      outcome:
        "In progress — not yet deployed publicly. This entry is a placeholder until the project ships; happy to expand this section once results are in.",
    },
    stats: [
      { value: "ML", label: "Core Concept" },
      {
        value: "Research",
        label: "Learnt about SMEs and Product-Price-Dependencies",
      },
    ],
    gallery: [
      {
        src: "/images/cs/gallery/Pricing-opt-syst-ML-RL-price-recommendation",
        caption: "RL agents optimize product prices based on parameters",
      },
      {
        src: "/images/cs/gallery/Pricing-opt-syst-ML-RL-agent-monitor",
        caption: "Monitor price predictions made by the agents",
      },
      {
        src: "/images/cs/gallery/Pricing-opt-syst-POS",
        caption: "POS additional page for SME Admin to sell goods",
      },
      {
        src: "/images/cs/gallery/Pricing-opt-syst-inventory",
        caption: "Track remaining products in the SME Store",
      },
    ],
    features: [
      "RL-based pricing agent (details to be finalized as the project completes)",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/pricing-optimization-system/cover.jpg",
        description:
          "Wide hero banner (1600×900) — a results chart, reward curve, or architecture diagram once available",
      },
    ],
  },

  // ── 2. MUTSDA ────────────────────────────────────────────────────────
  {
    slug: "mutsda",
    title: "Automating church services with real-time chat for leaders",
    tagline:
      "A full-stack platform for church service automation and live communication.",
    category: "0 → 1",
    year: "2026",
    scope: ["Full Stack", "Real-Time Systems"],
    role: "Full Stack Engineer",
    duration: "Ongoing",
    contributors: "Team project (MUTSDA-WEB)",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Bun",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Redis",
      "Zustand",
    ],
    github: "https://github.com/MUTSDA-WEB/mutsda",
    live: "https://mutsda.vercel.app/",
    coverImage: "/images/cs/covers/mutsda-cover",
    logo: "/images/cs/mutsda/logo.png",
    tldr: {
      context:
        "Churches coordinate services, notifications, and events largely by hand — WhatsApp groups, printed bulletins, word of mouth. MUTSDA automates that for church leadership.",
      problem:
        "Leaders needed a way to manage services, events, and notifications in one place, plus talk to each other in real time — without building a full ops team around it.",
      role: "Built the full stack: a Bun + Hono API, PostgreSQL via Prisma, and a real-time chat system (DMs, group chats, a community chat, and visitor messages) running on Socket.IO with Redis as the message queue and a batching worker to keep database writes cheap.",
      outcome:
        "A working platform with direct messages, group chats, a leaders' community space, Redis-backed rate limiting on every route class, and message batching that persists chat history every 2 minutes without hammering the database.",
    },
    stats: [
      {
        value: "4",
        label: "Real-time chat modes (DM/group/community/visitor)",
      },
      { value: "2 min", label: "Message batch-write interval" },
      { value: "100", label: "Req/min default API rate limit" },
    ],
    gallery: [
      {
        src: "/images/cs/gallery/mutsda-dashboard",
        caption: "Leader dashboard",
      },
      {
        src: "/images/cs/gallery/mutsda-chat",
        caption: "Real-time chat interface",
      },
      {
        src: "/images/cs/gallery/mutsda-events",
        caption: "Services/events management",
      },
      {
        src: "/images/cs/gallery/mutsda-userprofile",
        caption: "User/profile",
      },
    ],
    features: [
      "Real-time chat: direct messages, group chats, a leaders' community space, and visitor messages",
      "Redis-backed message queue with 2-minute batch persistence to Postgres",
      "Redis-based rate limiting per route class (auth, messages, uploads, general API)",
      "Service and event scheduling with notifications",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/mutsda/cover.jpg",
        description:
          "Wide hero banner (1600×900) — dashboard or the chat interface",
      },
      {
        path: "/case-studies/mutsda/logo.png",
        description: "MUTSDA logo/wordmark, transparent background",
      },
      {
        path: "/case-studies/mutsda/screens/dashboard.jpg",
        description: "Screenshot of the main leader dashboard",
      },
      {
        path: "/case-studies/mutsda/screens/chat.jpg",
        description: "Screenshot of the real-time chat UI (DM or group)",
      },
      {
        path: "/case-studies/mutsda/screens/events.jpg",
        description: "Screenshot of services/events management screen",
      },
    ],
  },

  // ── 3. NoteLy ────────────────────────────────────────────────────────
  {
    slug: "notely",
    title: "A note-taking app with a sleek UI and real markdown support",
    tagline: "Full-stack note-taking, built with Material UI and Prisma.",
    category: "GROWTH",
    year: "2026",
    scope: ["Full Stack", "UI/UX"],
    role: "Full Stack Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: [
      "React",
      "Material UI",
      "TanStack Query",
      "Zustand",
      "React Router",
      "react-markdown",
      "Axios",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Cloudinary",
    ],
    github: "https://github.com/WaithakaGuru/NoteLy",
    live: "https://note-ly-xi.vercel.app/",
    coverImage: "/images/cs/covers/notely-cover",
    tldr: {
      context:
        "Most note apps are either too bare (a plain textarea) or too heavy (a full workspace tool). I wanted something in between — fast, markdown-native, and pleasant to look at.",
      problem:
        "Needed real authentication, markdown rendering that doesn't feel bolted on, and a UI that felt considered rather than default-Bootstrap.",
      role: "Built the whole stack solo: React + MUI on the front end with TanStack Query for data fetching and Zustand for local state, an Express + Prisma + Postgres API behind JWT auth (bcrypt-hashed passwords, password-strength scoring via zxcvbn), and Cloudinary for any attached images.",
      outcome:
        "A working, deployed note-taking app with full auth, markdown notes (via react-markdown + remark-gfm), and a polished Material UI interface.",
    },
    stats: [
      { value: "1", label: "Solo build, full stack" },
      { value: "GFM", label: "Full markdown support" },
    ],
    gallery: [
      {
        src: "/images/cs/gallery/notely-login",
        caption: "Sign in / register",
      },
      {
        src: "/images/cs/gallery/notely-dashboard",
        caption: "Notes list / dashboard",
      },
      {
        src: "/images/cs/gallery/notely-editor",
        caption: "Markdown note editor",
      },
      {
        src: "/images/cs/gallery/notely-studybay",
        caption: "Read others' notes or your notes",
      },
    ],
    features: [
      "Full auth: register, login, JWT sessions, bcrypt-hashed passwords",
      "Password strength scoring on signup (zxcvbn)",
      "Markdown notes with GitHub-flavoured markdown (remark-gfm)",
      "Image attachments via Cloudinary",
      "Material UI component system throughout",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/notely/cover.jpg",
        description:
          "Wide hero banner (1600×900) — the notes dashboard or editor",
      },
      {
        path: "/case-studies/notely/screens/login.jpg",
        description: "Screenshot of the login/register screen",
      },
      {
        path: "/case-studies/notely/screens/notes-list.jpg",
        description: "Screenshot of the notes list/dashboard",
      },
      {
        path: "/case-studies/notely/screens/editor.jpg",
        description: "Screenshot of a note open in the markdown editor",
      },
    ],
  },

  // ── 4. BlogIt ────────────────────────────────────────────────────────
  {
    slug: "blogit",
    title: "A full-stack blogging platform with auth and a real editor",
    tagline:
      "Write, publish, and manage posts — with markdown and full authentication.",
    category: "0 → 1",
    year: "2026",
    scope: ["Full Stack", "UI/UX"],
    role: "Full Stack Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: [
      "React",
      "Material UI",
      "TanStack Query",
      "Zustand",
      "React Router",
      "react-markdown",
      "Axios",
      "Express",
      "Prisma",
      "JWT",
      "bcrypt",
      "Cloudinary",
    ],
    github: "https://github.com/WaithakaGuru/BlogIt",
    live: "https://blog-it-blush-five.vercel.app/",
    coverImage: "/images/cs/covers/blogit-cover",
    tldr: {
      context:
        "NoteLy's sibling project — same underlying stack, aimed at publishing instead of private notes. Built to prove the stack out for a second, different content model.",
      problem:
        "Needed a blogging platform with a real editor (not just a plain textarea), author auth, and content that refreshes without manual reloads.",
      role: "Built the whole stack solo: React + MUI frontend with TanStack Query driving data fetching (so content stays fresh without manual refresh logic), Zustand for client state, and an Express + Prisma API with JWT auth and Cloudinary for post images.",
      outcome:
        "A deployed, working blog platform: authenticated authors, markdown posts, and a UI consistent with the rest of my full-stack work.",
    },
    stats: [
      { value: "1", label: "Solo build, full stack" },
      { value: "2", label: "Sibling projects sharing this stack (NoteLy)" },
    ],
    gallery: [
      { src: "/images/cs/gallery/blogit-feed", caption: "Post feed" },
      {
        src: "/images/cs/gallery/blogit-posts",
        caption: "Posts view",
      },
      {
        src: "/images/cs/gallery/blogit-editor",
        caption: "Write/edit post screen",
      },
    ],
    features: [
      "Full auth for authors (JWT, bcrypt)",
      "Markdown post editor and rendering",
      "TanStack Query-driven feed that stays fresh automatically",
      "Image uploads via Cloudinary",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/blogit/cover.jpg",
        description:
          "Wide hero banner (1600×900) — the post feed or an open post",
      },
      {
        path: "/case-studies/blogit/screens/feed.jpg",
        description: "Screenshot of the main post feed",
      },
      {
        path: "/case-studies/blogit/screens/post.jpg",
        description: "Screenshot of a single post open",
      },
      {
        path: "/case-studies/blogit/screens/editor.jpg",
        description: "Screenshot of the post editor/composer",
      },
    ],
  },

  // ── 5. Kiru Agency ───────────────────────────────────────────────────
  {
    slug: "kiru-agency",
    title: "Building Kiru Tech's own agency site, dome gallery and all",
    tagline: "The website for Kiru Tech — my own software development agency.",
    category: "0 → 1",
    year: "2026",
    scope: ["Full Stack", "UI/UX", "Founder"],
    role: "Founder & Lead Developer",
    duration: "Ongoing",
    contributors: "1 (founder)",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "GSAP",
      "@use-gesture/react",
    ],
    github: "https://github.com/KiruTechnology/Kiru-Agency",
    live: "https://kiru-agency.vercel.app/",
    coverImage: "/images/cs/covers/kiru-agency-cover",
    logo: "/images/cs/kiru-agency/logo.png",
    tldr: {
      context:
        "Kiru Tech is my own software development agency — this is its site, built to actually demonstrate the kind of work the agency does, not just describe it.",
      problem:
        "An agency site that just lists services in plain cards doesn't prove anything. It needed to feel engineered, not templated.",
      role: 'Designed and built the whole thing: React 19 + TypeScript + Vite + Tailwind CSS 4, with a custom interactive 3D "dome gallery" component (built on gesture handling via @use-gesture/react) as the hero centerpiece, GSAP for the rest of the motion, and a full page set — services, projects, pricing, auth pages, legal pages.',
      outcome:
        "A live, deployed agency site with a genuinely custom hero interaction rather than a template hero, full routing (React Router), and a complete page set including auth flows and legal pages.",
    },
    stats: [
      {
        value: "7+",
        label:
          "Distinct pages (home, services, projects, pricing, auth, legal)",
      },
      {
        value: "1",
        label: "Custom 3D dome gallery component, built from scratch",
      },
    ],
    gallery: [
      {
        src: "/images/cs/gallery/kiru-agency-hero",
        caption: "Hero with the dome gallery",
      },
      {
        src: "/images/cs/gallery/kiru-agency-services",
        caption: "Services page",
      },
      {
        src: "/images/cs/gallery/kiru-agency-projects",
        caption: "Projects showcase page",
      },
      {
        src: "/images/cs/gallery/kiru-agency-process",
        caption: "Step by step process from call to delivery",
      },
    ],
    features: [
      "Custom interactive 3D dome gallery hero (gesture-driven)",
      "GSAP-animated sections throughout",
      "Full page set: services, projects, pricing, login/signup, privacy/terms",
      "React Compiler enabled for automatic render optimization",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/kiru-agency/cover.jpg",
        description:
          "Wide hero banner (1600×900) — the dome gallery hero in action",
      },
      {
        path: "/case-studies/kiru-agency/logo.png",
        description: "Kiru Tech logo/wordmark, transparent background",
      },
      {
        path: "/case-studies/kiru-agency/screens/hero.jpg",
        description: "Screenshot of the homepage hero / dome gallery",
      },
      {
        path: "/case-studies/kiru-agency/screens/services.jpg",
        description: "Screenshot of the services page",
      },
      {
        path: "/case-studies/kiru-agency/screens/projects.jpg",
        description: "Screenshot of the projects showcase page",
      },
    ],
  },

  // ── 6. AlgosLab ──────────────────────────────────────────────────────
  {
    slug: "algoslab",
    title: "Teaching TypeScript and DSA with visual, interactive lessons",
    tagline:
      "A learning platform for TypeScript and Data Structures & Algorithms, with a live sorting visualizer.",
    category: "RESEARCH",
    year: "2026",
    scope: ["Frontend", "Education"],
    role: "Full Stack Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "PostCSS"],
    github: "https://github.com/WaithakaGuru/AlgosLab",
    live: "https://algoslab.vercel.app/",
    coverImage: "/images/cs/covers/algolabs-cover",
    tldr: {
      context:
        "Built for people migrating from JavaScript to TypeScript, and for anyone learning DSA who learns better by watching an algorithm run than reading pseudocode.",
      problem:
        "Most DSA resources are either dry theory or a wall of LeetCode problems with no visual intuition for what's actually happening inside the algorithm.",
      role: "Built two linked tools: AlgoLearn, a structured lesson hub covering TypeScript typing basics through linear/non-linear data structures, traversals, and searching/sorting; and Sorta, an interactive sorting visualizer (React + TypeScript + Vite + Tailwind) where you can change array size and speed and watch each algorithm work in real time.",
      outcome:
        "A working, deployed learning platform covering TS fundamentals through graphs, plus a genuinely useful visual sorting tool most DSA resources don't bother building.",
    },
    stats: [
      { value: "2", label: "Tools in one: AlgoLearn + Sorta visualizer" },
      { value: "Arrays→Graphs", label: "Lesson coverage" },
    ],
    gallery: [
      {
        src: "/images/cs/gallery/algoslab-learn",
        caption: "AlgoLearn lesson view",
      },
      {
        src: "/images/cs/gallery/algoslab-hero",
        caption: "Algoslab Landing page",
      },
      {
        src: "/images/cs/gallery/algoslab-sorta",
        caption: "Sorta sorting visualizer",
      },
    ],
    features: [
      "AlgoLearn: structured lessons from TS typing basics through graphs",
      "Sorta: interactive sorting visualizer with adjustable array size and speed",
      "Covers linear + non-linear data structures, traversals, recursion, searching/sorting",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/algoslab/cover.jpg",
        description:
          "Wide hero banner (1600×900) — the Sorta visualizer mid-animation is a strong choice",
      },
      {
        path: "/case-studies/algoslab/screens/algolearn.jpg",
        description: "Screenshot of an AlgoLearn lesson page",
      },
      {
        path: "/case-studies/algoslab/screens/sorta.jpg",
        description: "Screenshot of the Sorta sorting visualizer running",
      },
    ],
  },

  // ── 7. Git Blog ──────────────────────────────────────────────────────
  {
    slug: "git-blog",
    title: "Teaching Git from zero, as a team project I led",
    tagline:
      "A visual, beginner-friendly guide to Git and GitHub — from first commit to branching and merging.",
    category: "GROWTH",
    year: "2025",
    scope: ["Frontend", "Team Project"],
    role: "Project Manager",
    duration: "Group assignment",
    contributors: "4 (Waithaka + 3 teammates)",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/WaithakaGuru/Git-Blog",
    live: "https://git-blog-ten.vercel.app/",
    coverImage: "/images/cs/covers/git-blog-cover",
    tldr: {
      context:
        "A group assignment: style and build a blog-style page teaching Git and GitHub to people who've never used version control.",
      problem:
        "Git tutorials are usually either a wall of terminal commands or an overwhelming reference doc — not a gentle, visual on-ramp for a total beginner.",
      role: "I was project manager for a 4-person team, coordinating scope and structure while teammates handled the navbar, page body, and footer styling respectively.",
      outcome:
        "A shipped, live page covering what Git and GitHub are, core commands (add, commit, branch, merge), and where to go next — built and coordinated as a team.",
    },
    stats: [
      { value: "4", label: "Team members" },
      { value: "0→Mid", label: "Learner level covered" },
    ],
    gallery: [
      {
        src: "/images/cs/gallery/git-blog-content",
        caption: "The Git blog page",
      },
    ],
    features: [
      "Covers Git/GitHub basics, core commands, and branching/merging",
      "Points learners toward next steps after the fundamentals",
    ],
    imagesNeeded: [
      {
        path: "/images/cs/git-blog-cover",
        description:
          "Wide hero banner (1600×900) — full page screenshot works fine here",
      },
      {
        path: "/images/cs/git-blog-content",
        description: "Screenshot of the blog page content/body",
      },
    ],
  },

  // ── 8. Kwetu Creations ───────────────────────────────────────────────
  {
    slug: "kwetu-creations",
    title: "A site for a digital products building agency",
    tagline: "Agency site for Kwetu Creations, built with React and Tailwind.",
    category: "0 → 1",
    year: "2026",
    scope: ["Frontend"],
    role: "Frontend Engineer",
    duration: "Personal / client project",
    contributors: "2 (Co-Developer)",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Font Awesome",
    ],
    github: "https://github.com/WaithakaGuru/kwetu_creations",
    live: "https://kwetu-creations.vercel.app/",
    coverImage: "/images/cs/covers/kwetu-creations-cover",
    tldr: {
      context:
        "A site for Kwetu Creations, a digital products building agency.",
      problem:
        "Needed a clean, fast, multi-page agency presence — routing between pages without full reloads, and an icon system that didn't need custom SVGs for every service.",
      role: "Built the frontend solo: React + Vite + Tailwind CSS, React Router for client-side navigation, Font Awesome for the icon set.",
      outcome: "A deployed, working agency site.",
    },
    stats: [],
    gallery: [
      {
        src: "/images/cs/gallery/kwetu-creations-landing",
        caption: "Homepage",
      },
      {
        src: "/images/cs/gallery/kwetu-creations-services",
        caption: "Homepage",
      },
    ],
    features: [
      "Multi-page site with client-side routing",
      "Font Awesome icon system throughout",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/kwetu-creations/cover.jpg",
        description: "Wide hero banner (1600×900) — homepage hero",
      },
      {
        path: "/case-studies/kwetu-creations/screens/home.jpg",
        description: "Screenshot of the homepage",
      },
    ],
  },

  // ── 9. FoodSpy Menu ──────────────────────────────────────────────────
  {
    slug: "foodspy-menu",
    title: "A hotel menu UI, built to show off frontend craft",
    tagline:
      "A restaurant/hotel menu interface — a pure frontend design showcase.",
    category: "GROWTH",
    year: "2026",
    scope: ["Frontend", "UI Design"],
    role: "Frontend Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: ["React", "Vite", "react-icons"],
    github: "https://github.com/WaithakaGuru/FoodSpy-Menu",
    live: "https://food-spy-menu.vercel.app/",
    coverImage: "/images/cs/covers/foodspy-menu-cover",
    tldr: {
      context:
        "Built specifically to demonstrate frontend design ability — a restaurant/hotel menu UI, no backend needed to make the point.",
      problem:
        "Menu UIs are an easy place to look generic — needed something that reads as considered rather than a Bootstrap template.",
      role: "Designed and built the whole interface solo in React + Vite, keeping the dependency footprint intentionally small (just react-icons on top of React itself).",
      outcome:
        "A deployed, polished menu UI that stands on its own as a design sample.",
    },
    stats: [],
    gallery: [
      {
        src: "/images/cs/gallery/foodspy-menu-detail",
        caption: "Menu view",
      },
    ],
    features: [
      "Category-based menu browsing",
      "Lightweight — minimal dependencies by design",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/foodspy-menu-cover",
        description: "Wide hero banner (1600×900) — the main menu screen",
      },
      {
        path: "/case-studies/foodspy-menu-detail",
        description: "Screenshot of a menu category/item view",
      },
    ],
  },

  // ── 10. ThoughtFul API ───────────────────────────────────────────────
  {
    slug: "thoughtful-api",
    title: "A clean UI for a public advice-generator API",
    tagline:
      "Random advice, one click at a time — an API-consumption showcase.",
    category: "RESEARCH",
    year: "2026",
    scope: ["Frontend", "API Integration"],
    role: "Frontend Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: ["React", "Vite", "Fetch API"],
    github: "https://github.com/WaithakaGuru/ThoughtFul-API",
    live: "https://thought-ful-api.vercel.app/",
    coverImage: "/images/cs/covers/thoughtful-api-cover",
    tldr: {
      context:
        "One of a pair of projects built to show comfort working with public third-party APIs (the other is Name Ethnicity).",
      problem:
        "Wanted a small, complete project rather than a half-finished one — pick a public API, wrap it in a UI worth looking at.",
      role: "Built solo: a React + Vite frontend that calls the public Advice Slip API and displays a new piece of advice per request, with loading and error states handled properly rather than skipped.",
      outcome:
        "A small, deployed, complete project — proof of clean API consumption rather than a half-built demo.",
    },
    stats: [],
    gallery: [
      {
        src: "/images/cs/gallery/thoughtful-api-main",
        caption: "Main advice screen",
      },
    ],
    features: [
      "Fetches random advice from a public API on demand",
      "Handles loading and error states explicitly",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/thoughtful-api/cover.jpg",
        description:
          "Wide hero banner (1600×900) — main screen with a piece of advice showing",
      },
      {
        path: "/case-studies/thoughtful-api/screens/main.jpg",
        description: "Screenshot of the app displaying advice",
      },
    ],
  },

  // ── 11. Name Ethnicity API ───────────────────────────────────────────
  {
    slug: "name-ethnicity-api",
    title: "A Nationalize.io front end — predicting nationality from a name",
    tagline: "Type a name, see which countries it's most common in.",
    category: "0 → 1",
    year: "2025",
    scope: ["Frontend", "API Integration"],
    role: "Frontend Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Fetch API",
      "Nationalize.io API",
    ],
    github: "https://github.com/WaithakaGuru/Name-Ethnicity-API",
    live: "https://name-ethnicity-api.vercel.app/",
    coverImage: "/images/cs/covers/name-ethnicity-api-cover",
    tldr: {
      context:
        "A frontend replica/showcase built on top of the Nationalize.io API, which predicts likely nationalities for a given first name.",
      problem:
        "Wanted a clean example of async/await + fetch against a real public API, with proper empty/error/loading states — not just a happy-path demo.",
      role: "Built solo in vanilla HTML/CSS/JS: type a name, hit submit, the app calls api.nationalize.io and renders a ranked list of likely countries with probability scores.",
      outcome:
        "A complete, deployed, dependency-free (no framework) project demonstrating clean vanilla-JS API integration.",
    },
    stats: [],
    gallery: [
      {
        src: "/images/cs/gallery/name-ethnicity-api-result",
        caption: "Search result with country probabilities",
      },
    ],
    features: [
      "Predicts likely nationalities for any first name",
      "Handles empty input and network failure states",
      "Zero framework dependency — vanilla JS",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/name-ethnicity-api/cover.jpg",
        description:
          "Wide hero banner (1600×900) — a search result with country list showing",
      },
      {
        path: "/case-studies/name-ethnicity-api/screens/result.jpg",
        description: "Screenshot of a name search result",
      },
    ],
  },

  // ── 12. Rock Paper Scissors ──────────────────────────────────────────
  {
    slug: "rock-paper-scissors",
    title: "Rock, paper, scissors — with live score tracking",
    tagline:
      "A classic game, built to drill DOM manipulation and vanilla JS fundamentals.",
    category: "0 → 1",
    year: "2025",
    scope: ["Frontend", "Game"],
    role: "Frontend Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/WaithakaGuru/Rock-Paper-Scissors",
    live: "https://rock-paper-scissors-tan-theta.vercel.app/",
    coverImage: "/images/cs/covers/rock-paper-scissors-cover",
    tldr: {
      context:
        "Built to solidify core JS fundamentals: DOM manipulation, functions, JS↔CSS interaction, and array/object iteration — the classic project that actually teaches you something.",
      problem:
        "Wanted more than a console.log game — a fully interactive, styled, stateful UI on top of the logic.",
      role: "Built solo in vanilla HTML/CSS/JS: emoji-based visual choices, live win/loss score tracking, and a reset function, structured to make room for a planned computer-vs-computer autoplay mode.",
      outcome:
        "A complete, deployed, responsive game with live score tracking and a clean reset flow.",
    },
    stats: [],
    gallery: [
      {
        src: "/case-studies/rock-paper-scissors-gameplay",
        caption: "Gameplay with live score",
      },
    ],
    features: [
      "Live win/loss score tracking",
      "Emoji-based visual choices for player and computer",
      "Score reset functionality",
      "Computer vs. computer autoplay mode — planned",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/rock-paper-scissors/cover.jpg",
        description:
          "Wide hero banner (1600×900) — mid-game with a result showing",
      },
      {
        path: "/case-studies/rock-paper-scissors/screens/gameplay.jpg",
        description: "Screenshot of active gameplay with the score visible",
      },
    ],
  },

  // ── 13. Top 5 Travel Sites ───────────────────────────────────────────
  {
    slug: "top-5-travel-sites",
    title: "A parallax showcase for five must-visit travel destinations",
    tagline:
      "A simple, scroll-driven site advertising top travel spots and what to do there.",
    category: "GROWTH",
    year: "2025",
    scope: ["Frontend", "Motion Design"],
    role: "Frontend Engineer (solo)",
    duration: "Personal project",
    contributors: "1 (solo)",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/WaithakaGuru/Top-5-Travel-Sites",
    live: "https://top-5-travel-sites.vercel.app/",
    coverImage: "/images/cs/covers/top-5-travel-sites-cover",
    tldr: {
      context:
        "A display page advertising five travel destinations, including the inspiration behind each pick and fun activities available at each site.",
      problem:
        "Wanted to practice scroll-driven parallax motion without reaching for a library — pure HTML/CSS/JS.",
      role: "Built solo: parallax scroll effects, section-by-section destination reveals, vanilla JS throughout.",
      outcome:
        "A complete, deployed, single-page travel showcase with working parallax scroll.",
    },
    stats: [],
    gallery: [
      {
        src: "/images/cs/gallery/top-5-travel-sites-scroll",
        caption: "Parallax scroll section",
      },
    ],
    features: [
      "Parallax scrolling effects, built without a library",
      "Five destination spotlights with activity highlights",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/top-5-travel-sites/cover.jpg",
        description: "Wide hero banner (1600×900) — the top of the page",
      },
      {
        path: "/case-studies/top-5-travel-sites/screens/scroll.jpg",
        description: "Screenshot mid-scroll showing the parallax effect",
      },
    ],
  },

  // ── 14. Zaph Tours ───────────────────────────────────────────────────
  {
    slug: "zaph-tours",
    title: "A Material UI site for a travel and tours company",
    tagline: "Full site for Zaph Tours, built on MUI and React Router.",
    category: "0 → 1",
    year: "2026",
    scope: ["Frontend", "UI Design"],
    role: "Frontend Engineer (solo)",
    duration: "Personal / client project",
    contributors: "1 (solo)",
    techStack: ["React", "TypeScript", "Vite", "Material UI", "React Router"],
    github: "https://github.com/WaithakaGuru/Zaph-Tours",
    live: "https://zaph-tours-one.vercel.app/",
    coverImage: "/images/cs/covers/zaph-tours-cover",
    tldr: {
      context:
        "A site for Zaph Tours, a travel and tours company — needed a professional, component-consistent look without hand-building a full design system.",
      problem:
        "Travel sites live and die by how trustworthy and polished they feel — needed a UI kit that reads as established, fast.",
      role: "Built solo in React + TypeScript + Vite, using Material UI as the component system and React Router for multi-page navigation.",
      outcome:
        "A deployed, multi-page tours site with a consistent, professional UI.",
    },
    stats: [],
    gallery: [
      {
        src: "/images/cs/gallery/zaph-tours-landing",
        caption: "Homepage",
      },
      {
        src: "/images/cs/gallery/zaph-tours-packages",
        caption: "Tour packages listing",
      },
    ],
    features: [
      "Multi-page site with client-side routing",
      "Material UI component system throughout",
    ],
    imagesNeeded: [
      {
        path: "/case-studies/zaph-tours/cover.jpg",
        description: "Wide hero banner (1600×900) — homepage hero",
      },
      {
        path: "/case-studies/zaph-tours/screens/home.jpg",
        description: "Screenshot of the homepage",
      },
      {
        path: "/case-studies/zaph-tours/screens/packages.jpg",
        description: "Screenshot of the tour packages listing",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

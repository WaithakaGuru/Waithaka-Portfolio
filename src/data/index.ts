export interface Project {
  title: string;
  description: string;
  shortDesc: string;
  tags: string[];
  features: string[];
  github: string;
  live: string;
  image?: string;
  category: "ALL" | "0 → 1" | "GROWTH" | "RESEARCH";
  year: string;
}

export const projects: Project[] = [
  {
    title: "STOCKEASY",
    category: "0 → 1",
    year: "2025",
    shortDesc:
      "A comprehensive stock trading platform with real-time market data...",
    description:
      "A comprehensive stock trading platform with real-time market data, advanced charting tools, and portfolio management. Built with React, Node.js, and WebSocket for live updates. Features include real-time price tracking, technical indicators, customizable watchlists, and portfolio analytics.",
    tags: ["REACT", "NODE.JS", "WEBSOCKET", "CHARTJS", "REDUX"],
    features: [
      "Real-time stock price updates via WebSocket",
      "Advanced charting with 50+ technical indicators",
      "Portfolio tracking and performance analytics",
      "Customizable alerts and notifications",
      "Historical data analysis and backtesting",
    ],
    github: "https://github.com/username/stockeasy",
    live: "https://stockeasy-demo.com",
  },
  {
    title: "RESUMEIQ",
    category: "0 → 1",
    year: "2024",
    shortDesc:
      "AI-powered resume builder that helps job seekers create professional resumes...",
    description:
      "AI-powered resume builder that helps job seekers create professional resumes. Features smart suggestions, multiple templates, and ATS optimization for better job application success. Uses OpenAI for intelligent content suggestions and formatting recommendations.",
    tags: ["NEXT.JS", "OPENAI", "TAILWIND", "PRISMA"],
    features: [
      "AI-powered content suggestions and improvements",
      "20+ professional resume templates",
      "ATS optimization scoring and recommendations",
      "Real-time preview and editing",
      "Export to PDF with perfect formatting",
    ],
    github: "https://github.com/username/resumeiq",
    live: "https://resumeiq-demo.com",
  },
  {
    title: "SHOPFLOW",
    category: "GROWTH",
    year: "2024",
    shortDesc:
      "Modern e-commerce platform with seamless checkout experience...",
    description:
      "Modern e-commerce platform with seamless checkout experience, inventory management, and customer analytics. Integrated payment gateways and responsive design. Features include product recommendations, inventory tracking, and comprehensive admin dashboard.",
    tags: ["DJANGO", "REACT", "STRIPE", "POSTGRESQL"],
    features: [
      "Secure payment processing with Stripe",
      "Advanced inventory management system",
      "Customer analytics and reporting dashboard",
      "AI-powered product recommendations",
      "Multi-currency and multi-language support",
    ],
    github: "https://github.com/username/shopflow",
    live: "https://shopflow-demo.com",
  },
  {
    title: "TASKMASTER",
    category: "GROWTH",
    year: "2023",
    shortDesc: "Collaborative project management tool with kanban boards...",
    description:
      "Collaborative project management tool with kanban boards, real-time updates, and team communication features. Designed for remote teams and agile workflows. Includes time tracking, sprint planning, and team productivity analytics.",
    tags: ["VUE.JS", "FIREBASE", "TAILWIND", "VUEX"],
    features: [
      "Real-time collaborative kanban boards",
      "Sprint planning and backlog management",
      "Time tracking and productivity analytics",
      "Team communication and notifications",
      "Custom workflows and automation rules",
    ],
    github: "https://github.com/username/taskmaster",
    live: "https://taskmaster-demo.com",
  },
];

export const techStack = [
  { label: "LIBRARY", name: "REACT" },
  { label: "FRAMEWORK", name: "NEXT.JS" },
  { label: "LANGUAGE", name: "PYTHON" },
  { label: "LANGUAGE", name: "JAVASCRIPT" },
  { label: "LANGUAGE", name: "TYPESCRIPT" },
  { label: "LANGUAGE", name: "GOLANG" },
  { label: "BACKEND", name: "NODE.JS" },
  { label: "FRAMEWORK", name: "DJANGO" },
  { label: "STYLING", name: "TAILWIND" },
  { label: "DATA", name: "MYSQL" },
  { label: "DATA", name: "POSTGRES" },
  { label: "DATA", name: "MONGODB" },
  { label: "ORM", name: "PRISMA" },
  { label: "ML", name: "TENSORFLOW" },
  { label: "CORE", name: "HTML5" },
  { label: "VERSION", name: "GIT" },
  { label: "OPS", name: "GITHUB" },
  { label: "LANGUAGE", name: "PHP" },
  { label: "FRAMEWORK", name: "LARAVEL" },
  { label: "3D", name: "THREE.JS" },
  { label: "LANGUAGE", name: "C++" },
];

export const userReports = [
  {
    id: "003",
    file: "2025.txt",
    log: "REPORT_003.LOG",
    from: "STUDENT @ L J UNIVERSITY",
    report:
      "Cleanest code I’ve seen in years. He knows how to handle complex state management.",
    rating: 3,
    color: "pink",
  },
  {
    id: "004",
    file: "2025.txt",
    log: "REPORT_004.LOG",
    from: "DEV @ CREATIVECHAOS",
    report: "Creative designing idea and provided a Unique UI experience.",
    rating: 5,
    color: "purple",
  },
  {
    id: "005",
    file: "2025.txt",
    log: "REPORT_005.LOG",
    from: "UX DESIGNER @ TECHFLOW",
    report:
      "Highly intuitive UX. Delivered exactly what we needed before we even knew we needed it.",
    rating: 5,
    color: "orange",
  },
  {
    id: "006",
    file: "2025.txt",
    log: "REPORT_006.LOG",
    from: "STUDENT @ TRIPLECODE",
    report: "Arham built our dashboard and tripled our productivity.",
    rating: 3,
    color: "green",
  },
];

export const stats = {
  contributions: 2847,
  repositories: 67,
  streak: 38,
  wakatimeHours: 847,
  dailyAverage: "5h 42m",
  topLanguage: "JavaScript",
};

export const TICKER_ITEMS = [
  "FULL STACK DEVELOPMENT",
  "HACKATHONS",
  "CODE TUTOR",
  "BUSINESS AUTOMATION",
  "ACCESSIBLE",
  "FAST",
  "SECURE",
  "AI INTEGRATION",
  "CHAT BOTS & AGENTS",
  "OPEN SOURCE",
  "SKILLS FOR MONEY",
  "PERFORMANCE ENGINEERING",
  "FULL STACK DEVELOPMENT",
  "API DESIGN",
  "HACKATHONS",
  "CODE TUTOR",
  "BUSINESS AUTOMATION",
  "ACCESSIBLE",
  "FAST",
  "SECURE",
  "AI INTEGRATION",
  "CHAT BOTS & AGENTS",
  "API DESIGN",
  "OPEN SOURCE",
  "SKILLS FOR MONEY",
];

// Education and Certification types
export interface Education {
  logo: string;
  title: string;
  institution: string;
  date: string;
  description?: string;
  category: "DEGREE" | "BOOTCAMP" | "CERTIFICATE" | "COURSE" | "CERTIFICATION";
}

export const education: Education[] = [
  {
    logo: "🎓",
    category: "DEGREE",
    title: "Bachelor of Science in Software Engineering",
    institution: "Murang’a University of Technology",
    date: "September 2022 – April 2026 (Graduation: August 2026)",
    description:
      "Comprehensive training in software engineering principles, systems design, and fullstack development.",
  },
  {
    logo: "/images/education/teach2give-bootcamp.png",
    category: "BOOTCAMP",
    title: "Fullstack Software Development",
    institution: "Teach2Give, The Jitu",
    date: "May 2025 – August 2025",
    description:
      "Intensive hands-on training in modern web development using React, Node.js, PostgreSQL, and cloud deployment tools.",
  },
  {
    logo: "/images/education/KCSE results.jpg",
    category: "CERTIFICATE",
    title: "Kenya Certificate of Secondary Education (KCSE)",
    institution: "Njiiri School",
    date: "January 2018 – April 2022",
    description: "Achieved grade B+ in national examinations.",
  },
  {
    logo: "/images/education/ML CERT.png",
    category: "COURSE",
    title: "A Quick Introduction to Machine Learning",
    institution: "Cognitive Class",
    date: "Issued March 2026",
    description:
      "Credential ID: 05e9d2b8dfba4e949d619791c58b106f | Proof: /certs/ml-intro.png",
  },
  {
    logo: "/images/education/CISCO SECURITY.png",
    category: "CERTIFICATION",
    title: "Cisco Network Support and Security",
    institution: "Cisco Networking Academy",
    date: "Issued April 2025",
    description:
      "Credential ID: 7509fe1b-0162-4000-97e2-2ec6f54da76d | Proof: /certs/network-support-security.png",
  },
  {
    logo: "/images/education/CISCO Networking.png",
    category: "CERTIFICATION",
    title: "Cisco Certified Networking Devices and Initial Configurations",
    institution: "Cisco Networking Academy",
    date: "Issued January 2025",
    description: "Proof: /certs/network-devices-config.png",
  },
  {
    logo: "/images/education/teach2give-cert.png",
    category: "CERTIFICATION",
    title: "Teach2Give Certified Software Developer",
    institution: "Teach2Give",
    date: "Issued August 2025",
    description:
      "Certificate of Achievement in Software Development | Proof: /certs/t2g-fullstack.png",
  },
  {
    logo: "/images/education/AWS Security best practices.png",
    category: "CERTIFICATION",
    title: "AWS Certified Security practitioner",
    institution: "AWS",
    date: "Issued August 2025",
    description: "Certificate of Achievement in Security best practices",
  },
  {
    logo: "/images/education/AWS Security Fundamentals.png",
    category: "CERTIFICATION",
    title: "AWS Certified Certified Security practitioner",
    institution: "AWS",
    date: "Issued August 2025",
    description: "Certificate of Achievement in Security Fundamentals",
  },
];

export interface Experience {
  logo: string;
  title: string;
  company: string;
  date: string;
  dateShort?: string;
  description: string;
  worked: string[];
  learned: string[];
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
}

export const experiences: Experience[] = [
  {
    logo: "TJ",
    title: "Software Development Apprentice",
    company: "Teach2Give, The Jitu",
    date: "May 2025 — August 2025",
    dateShort: "May — Aug 2025",
    startYear: 2025,
    startMonth: 5,
    endYear: 2025,
    endMonth: 8,
    description:
      "Worked on fullstack applications focusing on performance, scalability, and rapid prototyping in collaborative teams.",
    worked: [
      "Developed web apps using React and Node.js with dynamic content generation",
      "Improved data persistence using PostgreSQL, Prisma ORM, and Neon cloud database",
      "Co-engineered backend APIs with Express.js and Bun runtime",
      "Built and maintained blogging and note-taking applications in large teams",
      "Mentored peers on UX design, data structures, and code optimization",
    ],
    learned: [
      "Fullstack architecture and API design",
      "Cloud deployment using Vercel",
      "Database optimization and ORM usage",
      "Team collaboration and agile workflows",
      "Performance tuning and maintainability practices",
    ],
  },
  {
    logo: "AI",
    title: "Team Leader — PastLens (JKUAT AI Hackathon)",
    company: "Murang’a University",
    date: "July 2025 — November 2025",
    dateShort: "Jul — Nov 2025",
    startYear: 2025,
    startMonth: 7,
    endYear: 2025,
    endMonth: 11,
    description:
      "Led development of an AI-powered cultural preservation system for language translation and artifact analysis.",
    worked: [
      "Led a team of 5 in building AI-based image scanning and clustering system",
      "Designed task allocation across engineering, documentation, and product roles",
      "Trained AI models using labeled datasets for language and image processing",
      "Developed prototype within 21 days under hackathon constraints",
    ],
    learned: [
      "Leadership and team coordination",
      "AI model training and dataset preparation",
      "Rapid prototyping under time constraints",
      "Cross-functional collaboration",
    ],
  },
  {
    logo: "GD",
    title: "Volunteer Developer",
    company: "Google Developer Students Club",
    date: "January 2023 — September 2024",
    dateShort: "Jan 2023 — Sep 2024",
    startYear: 2023,
    startMonth: 1,
    endYear: 2024,
    endMonth: 9,
    description:
      "Actively contributed to developer community through mentorship and technical workshops.",
    worked: [
      "Conducted coding workshops in Python and JavaScript",
      "Led hands-on development sessions for practical learning",
      "Taught data structures and object-oriented programming principles",
      "Improved code quality practices among peers",
    ],
    learned: [
      "Public speaking and technical training",
      "Mentorship and peer learning strategies",
      "Deep understanding of core programming concepts",
      "Community building and developer engagement",
    ],
  },
];

export interface Writing {
  id: string;
  platform: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  stats: string[];
  link: string;
  featured?: boolean;
}

export const writings: Writing[] = [
  {
    id: "1",
    platform: "VERCEL / PERSONAL BLOG",
    date: "2024",
    title: "Everyday Git — A Beginner's Complete Guide",
    description:
      "A comprehensive, beginner-friendly deep dive into Git — the world's most widely used version control system. Covers everything from installation and configuration to branching, merging, commits, and the staging area. Written to help designers, developers, writers...",
    tags: ["Git", "Version Control", "GitHub", "Tutorial", "Beginners"],
    stats: ["Full guide", "Written without AI", "Published on Vercel"],
    link: "https://git-blog-ten.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    platform: "MEDIUM",
    date: "MAY 2026",
    title: "React Performance Optimization Techniques ⚡",
    description:
      "A practical deep dive into building highly efficient, production-ready React interfaces. Covers memoization with React.memo, useMemo, and useCallback to minimize re-renders; advanced code splitting and lazy loading patterns to reduce bundle sizes; virtualization for large datasets...",
    tags: ["React", "Performance", "JavaScript", "TypeScript", "Frontend"],
    stats: ["2 min read", "Published May 2026", "Tagged #webdev #react"],
    link: "https://medium.com/@waithakaoffices/react-performance-optimization-techniques-3e57b944aa4b",
  },
  {
    id: "3",
    platform: "DEV.TO",
    date: "MAY 2026",
    title: "Building Real-Time Apps with WebSockets 🚀",
    description:
      "An exploration of how to build scalable real-time applications using WebSockets — from establishing persistent bidirectional connections and managing user sessions to error handling, reconnection strategies, Redis Pub/Sub for distributed messaging, and production deployment patterns.",
    tags: ["WebSockets", "TypeScript", "Node.js", "Go", "Real-Time", "Backend"],
    stats: ["Tagged #typescript #api", "Published May 2026", "DEV Community"],
    link: "https://dev.to/waithaka_dev/building-real-time-apps-with-websockets-44md",
  },
  {
    id: "4",
    platform: "MEDIUM",
    date: "MAY 2024",
    title: "TypeScript Best Practices for Production Code",
    description:
      "Essential TypeScript patterns and practices for writing maintainable, type-safe code at scale. Covers generics, utility types, and production-ready patterns.",
    tags: ["TypeScript", "Best Practices", "Production"],
    stats: ["950+ Views", "32 Claps"],
    link: "https://medium.com/@waithakaoffices/typescript-best-practices-for-production-code-%EF%B8%8F-920c7838bfa8",
  },
];

// Community / events / hackathons — feeds the two counter-scrolling marquees
// under Selected Work. Only 2 real entries exist in the rest of the data
// right now (from `experiences`); add more here as they come up so the
// marquees don't feel sparse on loop.
export interface CommunityItem {
  id: string;
  label: string;
  org: string;
  year: string;
  image: string;
}

export const communityImpact: CommunityItem[] = [
  {
    id: "c1",
    label: "1st Runner-Up — JKUAT AI Hackathon",
    org: "PastLens",
    year: "2025",
    image: "/images/community/first-runnersup",
  },
  {
    id: "c2",
    label: "Volunteer Developer",
    org: "Google Developer Students Club",
    year: "2023–2024",
    image: "/images/community/volunteer-dev",
  },
  {
    id: "c3",
    label: "Coding Workshops — Python & JavaScript",
    org: "GDSC",
    year: "2023–2024",
    image: "/images/community/coding-workshop",
  },
  {
    id: "c4",
    label: "Team Lead, 5-person team",
    org: "PastLens",
    year: "2025",
    image: "/images/community/pastlens-teamlead",
  },
  {
    id: "c5",
    label: "Fullstack Apprenticeship",
    org: "Teach2Give, The Jitu",
    year: "2025",
    image: "/images/community/certified-fullstack",
  },
  {
    id: "c6",
    label: "Founder",
    org: "Kiru Tech",
    year: "2025–Present",
    image: "/images/community/founder-kiru",
  },
  {
    id: "c7",
    label: "Data Structures & OOP Sessions",
    org: "GDSC",
    year: "2023–2024",
    image: "/images/community/DSA",
  },
  {
    id: "c8",
    label: "AI Model Training Under 21-Day Sprint",
    org: "JKUAT AI Hackathon",
    year: "2025",
    image: "/images/community/AI-model-training",
  },
];

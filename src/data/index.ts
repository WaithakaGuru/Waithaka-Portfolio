export interface Project {
  title: string;
  description: string;
  shortDesc: string;
  tags: string[];
  features: string[];
  github: string;
  live: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "STOCKEASY",
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
}

export const education: Education[] = [
  {
    logo: "🎓",
    title: "Bachelor of Science in Software Engineering",
    institution: "Murang’a University of Technology",
    date: "September 2022 – April 2026 (Graduation: August 2026)",
    description:
      "Comprehensive training in software engineering principles, systems design, and fullstack development.",
  },
  {
    logo: "💻",
    title: "Fullstack Software Development",
    institution: "Teach2Give, The Jitu",
    date: "May 2025 – August 2025",
    description:
      "Intensive hands-on training in modern web development using React, Node.js, PostgreSQL, and cloud deployment tools.",
  },
  {
    logo: "📜",
    title: "Kenya Certificate of Secondary Education (KCSE)",
    institution: "Njiiri School",
    date: "January 2018 – April 2022",
    description: "Achieved grade B+ in national examinations.",
  },
  {
    logo: "🤖",
    title: "A Quick Introduction to Machine Learning",
    institution: "Cognitive Class",
    date: "Issued March 2026",
    description:
      "Credential ID: 05e9d2b8dfba4e949d619791c58b106f | Proof: /certs/ml-intro.png",
  },
  {
    logo: "🌐",
    title: "Cisco Network Support and Security",
    institution: "Cisco Networking Academy",
    date: "Issued April 2025",
    description:
      "Credential ID: 7509fe1b-0162-4000-97e2-2ec6f54da76d | Proof: /certs/network-support-security.png",
  },
  {
    logo: "🛠️",
    title: "Cisco Certified Networking Devices and Initial Configurations",
    institution: "Cisco Networking Academy",
    date: "Issued January 2025",
    description: "Proof: /certs/network-devices-config.png",
  },
  {
    logo: "🏆",
    title: "Teach2Give Certified Software Developer",
    institution: "Teach2Give",
    date: "Issued August 2025",
    description:
      "Certificate of Achievement in Software Development | Proof: /certs/t2g-fullstack.png",
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
    platform: "DEV.TO",
    date: "SEP 2024",
    title: "Build a Pixel Perfect Skeleton Loader Using CSS",
    description:
      "A step-by-step tutorial on creating pixel-perfect skeleton loading screens using pure CSS, covering layout matching, background placeholders, and the shining animation effect.",
    tags: ["CSS", "HTML", "JavaScript"],
    stats: ["120+ Views", "Trending"],
    link: "https://dev.to",
    featured: true,
  },
  {
    id: "2",
    platform: "MEDIUM",
    date: "AUG 2024",
    title: "React Performance Optimization Techniques",
    description:
      "Deep dive into performance optimization strategies for React applications, including memoization, code splitting, and lazy loading patterns for production apps.",
    tags: ["React", "Performance", "JavaScript"],
    stats: ["850+ Views", "25 Claps"],
    link: "https://medium.com",
  },
  {
    id: "3",
    platform: "HASHNODE",
    date: "JUL 2024",
    title: "Understanding Async/Await in Modern JavaScript",
    description:
      "Comprehensive guide to async/await in JavaScript, comparing it with promises and callbacks, with practical examples and common pitfalls to avoid.",
    tags: ["JavaScript", "Async", "Tutorial"],
    stats: ["520+ Views", "12 Replies"],
    link: "https://hashnode.com",
  },
  {
    id: "4",
    platform: "DEV.TO",
    date: "JUN 2024",
    title: "Building Real-time Apps with WebSockets",
    description:
      "Learn how to build scalable real-time applications using WebSocket technology, including connection management, error handling, and deployment strategies.",
    tags: ["WebSockets", "Node.js", "Real-time"],
    stats: ["640+ Views", "18 Reactions"],
    link: "https://dev.to",
  },
  {
    id: "5",
    platform: "MEDIUM",
    date: "MAY 2024",
    title: "TypeScript Best Practices for Production Code",
    description:
      "Essential TypeScript patterns and practices for writing maintainable, type-safe code at scale. Covers generics, utility types, and production-ready patterns.",
    tags: ["TypeScript", "Best Practices", "Production"],
    stats: ["950+ Views", "32 Claps"],
    link: "https://medium.com",
  },
];

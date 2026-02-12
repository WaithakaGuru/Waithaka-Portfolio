export interface Experience {
  logo: string;
  title: string;
  company: string;
  date: string;
  dateShort?: string;
  description: string;
  worked: string[];
  learned: string[];
  // New fields for timeline positioning
  startYear: number;
  startMonth: number; // 1-12
  endYear: number;
  endMonth: number; // 1-12
}

// Example experiences array
export const experiences: Experience[] = [
  {
    logo: "L",
    title: "Product Designer",
    company: "Large Corp",
    date: "JAN 26 — Present",
    dateShort: "JAN 26 — Present",
    startYear: 2026,
    startMonth: 1,
    endYear: 2026,
    endMonth: 2, // Current month
    description:
      "Leading product design initiatives for enterprise software solutions, focusing on user experience and interface design.",
    worked: [
      "Redesigned the main dashboard interface",
      "Created design system components",
      "Conducted user research and testing",
    ],
    learned: [
      "Advanced prototyping techniques",
      "Enterprise design patterns",
      "Cross-functional collaboration",
    ],
  },
  {
    logo: "A",
    title: "Design Engineer",
    company: "Anthropic",
    date: "MAR 25 — DEC 25",
    dateShort: "MAR 25 — DEC 25",
    startYear: 2025,
    startMonth: 3,
    endYear: 2025,
    endMonth: 12,
    description:
      "Built and designed user-facing features for Claude AI, bridging design and engineering.",
    worked: [
      "Implemented new conversation features",
      "Designed and coded UI components",
      "Optimized frontend performance",
    ],
    learned: [
      "React and TypeScript best practices",
      "AI/ML product design",
      "Rapid prototyping and iteration",
    ],
  },
  {
    logo: "W",
    title: "Senior Staff Designer",
    company: "Webflow",
    date: "DEC 21 — DEC 24",
    dateShort: "DEC 21 — DEC 24",
    startYear: 2021,
    startMonth: 12,
    endYear: 2024,
    endMonth: 12,
    description:
      "Led design for core product features, mentored junior designers, and established design standards.",
    worked: [
      "Redesigned the visual editor",
      "Created the Webflow design system",
      "Led design for enterprise features",
    ],
    learned: [
      "Design leadership and mentorship",
      "Complex system design",
      "Stakeholder management",
    ],
  },
  {
    logo: "G",
    title: "Product Designer",
    company: "Gumroad",
    date: "AUG 20 — DEC 21",
    dateShort: "AUG 20 — DEC 21",
    startYear: 2020,
    startMonth: 8,
    endYear: 2021,
    endMonth: 12,
    description:
      "Designed creator-focused features for the Gumroad platform, improving the seller experience.",
    worked: [
      "Redesigned product pages",
      "Created email campaign builder",
      "Improved checkout flow",
    ],
    learned: [
      "Creator economy insights",
      "Payment flow design",
      "Mobile-first design",
    ],
  },
  {
    logo: "P",
    title: "Founding Designer",
    company: "Podla",
    date: "NOV 16 — NOV 19",
    dateShort: "NOV 16 — NOV 19",
    startYear: 2016,
    startMonth: 11,
    endYear: 2019,
    endMonth: 11,
    description:
      "First design hire at early-stage startup, established design culture and created initial product.",
    worked: [
      "Built the entire design system from scratch",
      "Designed mobile and web applications",
      "Created brand identity and marketing materials",
    ],
    learned: [
      "Startup operations and strategy",
      "0-1 product design",
      "Cross-functional ownership",
    ],
  },
];
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

// export const experiences: Experience[] = [
//   {
//     logo: "TC",
//     title: "DATA ENTRY MANAGER",
//     company: "TechCorp Solutions",
//     date: "FULL-TIME • AUG 23 - MAY 24",
//     dateShort: "AUGUST 2023 - MAY 2024",
//     description:
//       "Led a team of data specialists in maintaining accurate and compliant database systems. Implemented quality control processes that reduced errors by 35%. Coordinated cross-functional teams to ensure timely project delivery.",
//     worked: [
//       "Supervised teams of 12+ data specialists across multiple projects",
//       "Ensured consistent database and document operational norms",
//       "Reviewed documentation to confirm accuracy and compliance",
//       "Implemented automated validation systems reducing manual review time by 50%",
//     ],
//     learned: [
//       "Advanced team management and delegation strategies",
//       "Database optimization and performance tuning",
//       "Quality assurance methodologies and best practices",
//     ],
//   },
//   {
//     logo: "WF",
//     title: "JUNIOR FULL STACK DEVELOPER",
//     company: "WebFlow Studios",
//     date: "FULL-TIME • JUN 22 - JUL 23",
//     dateShort: "JUNE 2022 - JULY 2023",
//     description:
//       "Developed responsive web applications using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UIs. Optimized database queries and API endpoints for improved performance.",
//     worked: [
//       "Developed responsive web applications using React and Node.js",
//       "Collaborated with design team to implement pixel-perfect UIs",
//       "Optimized database queries reducing load times by 40%",
//       "Implemented RESTful APIs and integrated third-party services",
//       "Participated in code reviews and agile ceremonies",
//     ],
//     learned: [
//       "Full stack development best practices",
//       "Database optimization and query performance",
//       "API design and RESTful architecture",
//       "Team collaboration in agile environments",
//     ],
//   },
//   {
//     logo: "SI",
//     title: "FRONTEND DEVELOPER INTERN",
//     company: "StartUp Inc",
//     date: "INTERNSHIP • JAN 21 - MAY 22",
//     dateShort: "JANUARY 2021 - MAY 2022",
//     description:
//       "Built interactive components with vanilla JavaScript and React. Maintained and updated company website with modern features. Learned version control and agile development practices in a fast-paced startup environment.",
//     worked: [
//       "Built interactive components with vanilla JavaScript and React",
//       "Maintained and updated company website with modern features",
//       "Learned version control and agile development practices",
//       "Collaborated with senior developers on feature implementation",
//     ],
//     learned: [
//       "Modern JavaScript and React fundamentals",
//       "Git workflow and version control",
//       "Responsive design principles",
//       "Working in fast-paced startup environments",
//     ],
//   },
//   {
//     logo: "FL",
//     title: "FREELANCE WEB DEVELOPER",
//     company: "Self-Employed",
//     date: "FREELANCE • MAR 20 - DEC 20",
//     dateShort: "MARCH 2020 - DECEMBER 2020",
//     description:
//       "Worked with multiple clients to deliver custom web solutions. Built e-commerce sites, portfolios, and business websites. Managed client relationships and project timelines independently.",
//     worked: [
//       "Delivered 15+ client projects on time and within budget",
//       "Built e-commerce platforms with payment integration",
//       "Created responsive websites using HTML, CSS, and JavaScript",
//       "Managed all aspects of client communication and project delivery",
//     ],
//     learned: [
//       "Client management and communication skills",
//       "Time management and project planning",
//       "Business fundamentals and invoicing",
//       "Full project lifecycle from conception to deployment",
//     ],
//   },
// ];

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

export const stats = {
  contributions: 2847,
  repositories: 67,
  streak: 38,
  wakatimeHours: 847,
  dailyAverage: "5h 42m",
  topLanguage: "JavaScript",
};

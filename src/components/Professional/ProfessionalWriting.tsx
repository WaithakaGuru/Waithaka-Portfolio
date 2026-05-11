import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Article {
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

export function ProfessionalWriting() {
  const scrollRef = useScrollReveal();

  const articles: Article[] = [
    {
      id: "1",
      platform: "DEV.TO",
      date: "SEP 2021",
      title: "Build a Pixel Perfect Skeleton Loader Using CSS",
      description:
        "A step-by-step tutorial on creating pixel-perfect skeleton loading screens using pure CSS, covering layout matching, background placeholders, and the shining animation effect with keyframes.",
      tags: ["CSS", "HTML", "JavaScript"],
      stats: ["30+ Comments", "Went Viral"],
      link: "https://dev.to",
      featured: true,
    },
    {
      id: "2",
      platform: "MEDIUM",
      date: "MAR 2022",
      title: "React Performance Optimization Techniques",
      description:
        "Deep dive into performance optimization strategies for React applications, including memoization, code splitting, and lazy loading patterns.",
      tags: ["React", "Performance", "JavaScript"],
      stats: ["500+ Views", "15 Claps"],
      link: "https://medium.com",
    },
    {
      id: "3",
      platform: "HASHNODE",
      date: "JUL 2022",
      title: "Understanding Async/Await in Modern JavaScript",
      description:
        "Comprehensive guide to async/await in JavaScript, comparing it with promises and callbacks, with practical examples and common pitfalls to avoid.",
      tags: ["JavaScript", "Async", "Tutorial"],
      stats: ["300+ Views", "8 Replies"],
      link: "https://hashnode.com",
    },
    {
      id: "4",
      platform: "DEV.TO",
      date: "NOV 2022",
      title: "Building Real-time Apps with WebSockets",
      description:
        "Learn how to build scalable real-time applications using WebSocket technology, including connection management, error handling, and deployment strategies.",
      tags: ["WebSockets", "Node.js", "Real-time"],
      stats: ["200+ Views", "12 Reactions"],
      link: "https://dev.to",
    },
    {
      id: "5",
      platform: "MEDIUM",
      date: "FEB 2023",
      title: "TypeScript Best Practices for Production Code",
      description:
        "Essential TypeScript patterns and practices for writing maintainable, type-safe code at scale. Covers generics, utility types, and common pitfalls.",
      tags: ["TypeScript", "Best Practices", "Production"],
      stats: ["600+ Views", "20 Claps"],
      link: "https://medium.com",
    },
    {
      id: "6",
      platform: "HASHNODE",
      date: "MAY 2023",
      title: "Docker for Full-Stack Developers",
      description:
        "Complete guide to containerizing full-stack applications with Docker, including compose setup, multi-stage builds, and CI/CD integration.",
      tags: ["Docker", "DevOps", "Containerization"],
      stats: ["450+ Views", "25 Comments"],
      link: "https://hashnode.com",
    },
    {
      id: "7",
      platform: "DEV.TO",
      date: "AUG 2023",
      title: "PostgreSQL Optimization for High Traffic Apps",
      description:
        "Advanced PostgreSQL optimization techniques including indexing strategies, query optimization, and connection pooling for production systems.",
      tags: ["PostgreSQL", "Database", "Performance"],
      stats: ["350+ Views", "18 Reactions"],
      link: "https://dev.to",
    },
    {
      id: "8",
      platform: "MEDIUM",
      date: "OCT 2023",
      title: "Building Scalable APIs with Hono",
      description:
        "Explore the modern Hono framework for building lightweight, fast APIs. Includes middleware patterns, validation, and deployment examples.",
      tags: ["Hono", "APIs", "Backend"],
      stats: ["280+ Views", "14 Claps"],
      link: "https://medium.com",
    },
    {
      id: "9",
      platform: "HASHNODE",
      date: "DEC 2023",
      title: "Next.js 14: The Future of React Development",
      description:
        "Comprehensive review of Next.js 14 features including App Router, Server Components, and new performance optimizations for modern web development.",
      tags: ["Next.js", "React", "Frontend"],
      stats: ["550+ Views", "30 Replies"],
      link: "https://hashnode.com",
    },
  ];

  // Split articles into 3 rows
  const row1 = articles.slice(0, 3);
  const row2 = articles.slice(3, 6);
  const row3 = articles.slice(6, 9);

  const ArticleCard = ({ article }: { article: Article }) => (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "380px",
        maxWidth: "380px",
        background: "#ffffff",
        border: "2px solid #e0e0e0",
        padding: "20px",
        boxShadow: "none",
        transition: "all 0.15s",
        borderColor: article.featured ? "#f97316" : "#e0e0e0",
        textDecoration: "none",
        cursor: "pointer",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#f97316";
        e.currentTarget.style.boxShadow = "6px 6px 0 #0a0a0a";
        e.currentTarget.style.transform = "translate(-2px, -2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = article.featured
          ? "#f97316"
          : "#e0e0e0";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translate(0, 0)";
      }}
    >
      {/* Platform & Date */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#f97316",
            textTransform: "uppercase",
          }}
        >
          {article.platform}
        </span>
        <span style={{ color: "#e0e0e0" }}>—</span>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#999999",
            textTransform: "uppercase",
          }}
        >
          {article.date}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "15px",
          fontWeight: 700,
          color: "#0a0a0a",
          marginBottom: "10px",
          lineHeight: 1.3,
        }}
      >
        {article.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.5,
          color: "#555555",
          marginBottom: "12px",
          flex: 1,
        }}
      >
        {article.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "12px",
        }}
      >
        {article.tags.slice(0, 2).map((tag, idx) => (
          <span
            key={idx}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#f97316",
              background: "#fff9f5",
              border: "1px solid #f97316",
              padding: "3px 8px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          fontSize: "12px",
          color: "#999999",
          fontFamily: "JetBrains Mono, monospace",
          paddingTop: "12px",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        {article.stats.map((stat, idx) => (
          <div
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <span style={{ color: "#f97316", fontSize: "10px" }}>◆</span>
            <span>{stat}</span>
          </div>
        ))}
      </div>
    </a>
  );

  return (
    <section
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .writing-marquee-track {
          display: flex;
          width: max-content;
        }
        .writing-marquee-track.forward {
          animation: marquee 60s linear infinite;
        }
        .writing-marquee-track.reverse {
          animation: marquee-rev 60s linear infinite;
        }
      `}</style>

      <div className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto mb-20">
          {/* Section Header */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#f97316",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "28px",
                height: "2px",
                backgroundColor: "#f97316",
              }}
            ></span>
            TECHNICAL WRITING
          </div>

          {/* Title */}
          <h2
            ref={scrollRef()}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(36px, 4.5vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              marginBottom: "16px",
            }}
          >
            I Can <span style={{ color: "#f97316" }}>Write</span> Too
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "14px",
              color: "#555555",
              maxWidth: "560px",
              lineHeight: 1.8,
              marginBottom: "60px",
            }}
          >
            Technical writing is part of my toolkit. I document architecture
            decisions, share learnings, and contribute to the developer
            community through in-depth articles on platforms like DEV.to,
            Medium, and Hashnode.
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div style={{ borderTop: "1px solid #e0e0e0" }}>
        {/* Row 1 - Forward */}
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="writing-marquee-track forward">
            {[...row1, ...row1].map((article, i) => (
              <ArticleCard key={`${article.id}-${i}`} article={article} />
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="writing-marquee-track reverse">
            {[...row2, ...row2].map((article, i) => (
              <ArticleCard key={`${article.id}-${i}`} article={article} />
            ))}
          </div>
        </div>

        {/* Row 3 - Forward */}
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="writing-marquee-track forward">
            {[...row3, ...row3].map((article, i) => (
              <ArticleCard key={`${article.id}-${i}`} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

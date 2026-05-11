import { useScrollAnimations } from "../../hooks/useScrollReveal";
import { writings } from "../../data";

export function ProfessionalWriting() {
  const scrollRef = useScrollAnimations();

  const ArticleCard = ({ article }: { article: (typeof writings)[0] }) => (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        border: "2px solid #e0e0e0",
        padding: "20px",
        boxShadow: "none",
        transition: "all 0.15s",
        borderColor: article.featured ? "#f97316" : "#e0e0e0",
        textDecoration: "none",
        cursor: "pointer",
        height: "100%",
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

        {/* Masonry Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {writings.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

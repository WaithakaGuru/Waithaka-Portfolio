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
        "A step-by-step tutorial on creating pixel-perfect skeleton loading screens using pure CSS, covering layout matching, background placeholders, and the shining animation effect with keyframes. The post gained significant traction in the dev community with 30+ comments and discussions.",
      tags: ["CSS", "HTML", "JavaScript", "React", "Tutorial"],
      stats: ["30+ Comments", "Written without AI", "Went Viral"],
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
  ];

  return (
    <section
      className="py-20 px-6 sm:px-8 lg:px-12 border-b border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Technical Writing
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            I Can Write Too
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            While not big into writing technical blog posts, I can also write
            in-depth technical articles when needed. Here's one I wrote back in
            2021, completely without AI, that went viral on DEV.to.
          </p>
        </div>

        {/* Articles Grid */}
        <div ref={scrollRef()} className="space-y-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`p-8 rounded-xl border transition-all ${
                article.featured
                  ? "border-orange-500 bg-white shadow-md"
                  : "border-gray-200 bg-white hover:border-orange-500 hover:shadow-lg"
              }`}
            >
              {/* Header with platform and date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                  {article.platform}
                </span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {article.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-600">
                {article.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span>•</span>
                    <span className="font-medium">{stat}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a
                href={article.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                Read on {article.platform} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

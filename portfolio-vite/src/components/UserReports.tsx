import { useRef } from "react";

const reports = [
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

export function UserReports() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };
  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="py-0 px-0 bg-[#18191c] flex flex-col items-center min-h-150 w-full">
      {/* Window bar */}
      <div className="w-full flex justify-left pt-16 pb-10 ml-20">
        <div className="relative bg-[#23242a] border-b-4 border-blue-700 rounded-md shadow-lg px-8 py-4 flex items-center min-w-105 max-w-130">
          {/* Dots */}
          <div className="flex gap-2 absolute left-4 top-1/2 -translate-y-1/2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block border border-black"></span>
          </div>
          <span className="ml-16 font-mono text-2xl text-white font-extrabold tracking-wider">
            USER_REPORTS.txt
          </span>
          <span className="ml-6 px-3 py-1 bg-blue-600 text-xs font-bold text-white rounded shadow border border-blue-800">
            LIVE_FEED
          </span>
        </div>
      </div>
      {/* Marquee cards */}
      <div className="overflow-x-hidden w-full flex-1 flex items-center">
        <div
          ref={marqueeRef}
          className="flex gap-8 animate-user-marquee"
          style={{ animation: "user-marquee 40s linear infinite" }}
        >
          {reports.concat(reports).map((report, idx) => (
            <div
              key={idx}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`relative flex flex-col justify-between bg-[#18191c] border-2 border-black min-w-92.5 max-w-92.5 h-67.5 shadow-[4px_4px_0_var(--color-black)] transition-transform duration-200 cursor-pointer hover:scale-107 group`}
              style={{
                transition: "transform 0.2s",
                borderTop: `4px solid var(--tw-${report.color}-500, ${report.color})`,
              }}
            >
              {/* Top bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-1">
                <span
                  className={`font-mono text-xs font-bold tracking-widest ${report.color === "pink" ? "text-pink-400" : report.color === "purple" ? "text-purple-400" : report.color === "orange" ? "text-yellow-400" : "text-green-400"}`}
                >
                  {report.log}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {report.file}
                </span>
              </div>
              <div className="px-5 text-xs text-gray-400 font-mono mb-1">
                FROM: {report.from}
              </div>
              <div className="px-5 text-xl font-extrabold text-white leading-snug mb-2">
                ”{report.report}”
              </div>
              <div className="flex items-center px-5 pb-3">
                {Array.from({ length: report.rating }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg mr-1 ${report.color === "pink" ? "text-pink-400" : report.color === "purple" ? "text-purple-400" : report.color === "orange" ? "text-yellow-400" : "text-green-400"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {/* Corner fold */}
              <span className="absolute top-0 right-0 text-[10px] text-gray-400 font-mono bg-[#23242a] px-2 py-0.5 rounded-bl-md border-b-2 border-l-2 border-black">
                {report.file}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes user-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:scale-107:hover { transform: scale(1.07); }
      `}</style>
    </section>
  );
}

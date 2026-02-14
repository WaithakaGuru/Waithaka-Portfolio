import { useRef } from "react";
import { userReports as reports } from "../data/index";
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
    <section className="py-0 bg-[#18191c] flex flex-col items-center min-h-150 w-full px-2 sm:px-4">
      {/* Window bar */}
      <div
        className="flex justify-start pt-8 sm:pt-16 pb-6 sm:pb-10 ml-4 sm:ml-20 w-full sm:w-[94%] 
        sticky top-0 z-1000 backdrop-blur-xs"
      >
        <div
          className="bg-[#23242a] border-b-4 border-blue shadow-lg px-2 sm:px-8 rounded-md 
        py-2 sm:py-4 flex items-center justify-between min-w-80 sm:min-w-90 max-w-full sm:w-120"
        >
          {/* Dots */}
          <div className="flex gap-2 md:absolute left-4 top-1/2 md:-translate-y-1/2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block border border-black"></span>
          </div>
          <span className="sm:ml-16 ml-6 font-mono sm:text-2xl text-lg text-white font-extrabold sm:tracking-wider">
            USER_REPORTS.txt
          </span>
          <span className="ml-6 px-3 py-1 bg-blue text-xs font-bold text-white rounded shadow border border-blue-300">
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
              className={`relative flex flex-col justify-between bg-[#18191c] border-4 border-gray-800 min-w-88 sm:min-w-92.5 max-w-full sm:max-w-92.5 h-68 
                sm:h-70.5 shadow-[4px_4px_0_var(--color-black)] transition-transform duration-200 cursor-pointer hover:scale-107 group overflow-hidden`}
              style={{
                transition: "transform 0.2s",
              }}
            >
              {/* Top bar */}
              <div
                className="flex justify-between items-center px-5 py-4 pb-1 border-t-4"
                style={{
                  borderTopColor: `var(--tw-${report.color}-500, ${report.color})`,
                }}
              >
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
              <div
                className="px-2 sm:px-5 text-xl sm:text-2xl font-extrabold text-white leading-snug mb-2 wrap-break-word max-w-full"
                style={{ wordBreak: "break-word" }}
              >
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

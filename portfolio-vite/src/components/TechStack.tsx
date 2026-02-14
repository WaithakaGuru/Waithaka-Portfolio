import { techStack as stack } from "../data";

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative bg-black/95 text-white py-24 px-6 md:px-10 mt-4"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />

      <div className="relative max-w-full md:max-w-350 mx-auto px-2 sm:px-4">
        {/* Header */}
        <div
          className="flex items-center justify-between mb-10 w-full sticky top-0"
          style={{
            backgroundColor: "var(--bg-primary)",
            backdropFilter: "blur(4px)",
          }}
        >
          <h2
            className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight 
          wrap-break-word leading-tight max-w-full"
          >
            TECH_<span className="text-green-500">STACK</span>
          </h2>

          <div className="flex items-center gap-2 text-green-500 font-mono text-xs md:text-sm">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-ping" />
            /// OPTIMAL STRUCTURED CODE
          </div>
        </div>

        <div className="border-t-4 border-white/70 mb-10" />

        {/* Grid Container */}
        <div className="border border-white/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {stack.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 px-2 sm:px-6 py-4 sm:py-10 flex flex-col justify-center transition-all duration-200 transform hover:scale-105 hover:border-green-500 hover:bg-white/10 cursor-pointer rounded-lg max-w-full overflow-hidden"
              >
                <span className="text-green-500 text-xs tracking-widest font-mono mb-4">
                  {`>_ ${item.label}`}
                </span>

                <span
                  className="text-base sm:text-xl font-extrabold tracking-wide wrap-break-word max-w-full"
                  style={{ wordBreak: "break-word" }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b-4 border-white/70 mt-10 mb-6" />

        {/* Footer Meta Info */}
        <div className="flex justify-between text-xs font-mono text-white/60">
          <span>TOTAL_VERTICES: 21</span>
          <span>MEMORY_USAGE: 144</span>
        </div>
      </div>
    </section>
  );
}

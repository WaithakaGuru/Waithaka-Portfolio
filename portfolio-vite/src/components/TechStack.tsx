import { techStack as stack } from "../data";

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative bg-black/95 text-white py-24 px-10 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />

      <div className="relative max-w-350 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-8xl font-extrabold tracking-tight">
            TECH_<span className="text-green-500">STACK</span>
          </h2>

          <div className="flex items-center gap-3 text-green-500 font-mono text-sm">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            /// OPTIMAL STRUCTURED CODE
          </div>
        </div>

        <div className="border-t border-white/40 mb-10" />

        {/* Grid Container */}
        <div className="border border-white/30">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {stack.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 px-6 py-10 flex flex-col justify-center transition-all duration-200 transform hover:scale-105 hover:border-green-500 hover:bg-white/10 cursor-pointer"
              >
                <span className="text-green-500 text-xs tracking-widest font-mono mb-4">
                  {`>_ ${item.label}`}
                </span>

                <span className="text-xl font-extrabold tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-white/40 mt-10 mb-6" />

        {/* Footer Meta Info */}
        <div className="flex justify-between text-xs font-mono text-white/60">
          <span>TOTAL_VERTICES: 16</span>
          <span>MEMORY_USAGE: 144</span>
        </div>
      </div>
    </section>
  );
}

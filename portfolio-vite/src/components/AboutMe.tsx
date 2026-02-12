export function AboutMe() {
  return (
    <section id="about-me" className="py-20 px-10 bg-white">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image placeholder */}
        <div className="relative">
          <div className="w-full aspect-square max-w-100 mx-auto bg-white border-4 border-black shadow-[8px_8px_0_var(--color-black)] flex items-center justify-center">
            <div className="text-center text-gray-500 text-sm">
              [Profile Image]
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow border-2 border-black"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue border-2 border-black rounded-full"></div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-6">
            WHO_<span className="text-blue">AM_I ?</span>
          </h2>

          <div className="bg-white border-3 border-black p-6 shadow-[5px_5px_0_var(--color-black)] mb-6">
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              I am Waithaka Ndung'u, Certified Software Developer with 4+ years
              of experience building digital products that make an impact. I
              specialize in creating performant, scalable and optimal web/mobile
              applications.
            </p>
            <div className="bg-[#181818] border-2 border-black p-6 shadow-[5px_5px_0_var(--color-black)] mb-6 font-mono text-[17px] text-white">
              <div className="pl-4 border-l-4 border-purple-500 mb-4">
                <div>&gt; Specialized in Designing and Web Development.</div>
                <div>
                  &gt; Obsessed with{" "}
                  <span className="inline-block w-6 h-6 bg-black rounded-full align-middle mx-1"></span>
                  Perfection and AI.
                </div>
                <div>&gt; 3+ years of shipping code that works.</div>
              </div>
              <div className="flex gap-4 mt-6">
                <div className="bg-black text-white px-4 py-2 rounded font-bold flex items-center text-sm">
                  <span className="mr-2">📍</span>LOCATION: WORLDWIDE
                </div>
                <div className="bg-[#39d353] text-black px-4 py-2 rounded font-bold flex items-center text-sm">
                  <span className="mr-2">
                    <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-1"></span>
                  </span>
                  STATUS: AVAILABLE
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-yellow border-2 border-black p-4 text-center shadow-[3px_3px_0_var(--color-black)]">
              <div className="text-2xl font-extrabold">4+</div>
              <div className="text-xs font-semibold">YEARS EXP</div>
            </div>
            <div className="bg-white border-2 border-black p-4 text-center shadow-[3px_3px_0_var(--color-black)]">
              <div className="text-2xl font-extrabold">50+</div>
              <div className="text-xs font-semibold">PROJECTS</div>
            </div>
            <div className="bg-green border-2 border-black p-4 text-center shadow-[3px_3px_0_var(--color-black)]">
              <div className="text-2xl font-extrabold">15+</div>
              <div className="text-xs font-semibold">CLIENTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

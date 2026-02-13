export function AboutMe() {
  return (
    <section id="about-me" className="py-20 md:px-10 px-4 min-h-dvh w-full">
      <div
        className="
          w-full md:w-11/12 mx-auto
          flex flex-col md:flex-row
          border-x-4 border-b-4
          gap-8
          items-center
          bg-light-gray
          px-4 py-6
          border-zinc-700
        "
      >
        {/* IMAGE SECTION (35%) */}
        <div className="relative w-full md:w-[35%] flex justify-center">
          <div
            className="
              w-full max-w-xs
              aspect-square
              bg-white
              border-4 border-black
              shadow-[4px_4px_0_var(--color-black)]
              overflow-hidden
            "
          >
            <img
              src="./me.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 -left-9 w-8 h-8 bg-yellow border-2 border-black"></div>
          <div className="absolute -bottom-24 right-0 w-12 h-12 bg-blue border-2 border-black rounded-full"></div>
        </div>

        {/* CONTENT SECTION (65%) */}
        <div className="w-full md:w-[65%]">
          <h2 className="text-4xl md:text-6xl font-extrabold text-left mb-4">
            WHO_<span className="text-blue">AM_I ?</span>
          </h2>

          <div className="bg-white p-4 mb-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              I am Waithaka Ndung'u,{" "}
              <span className="bg-green">Certified Software Developer</span>{" "}
              with 4+ years of experience building digital products that make an
              impact. I specialize in creating performant, scalable and optimal
              web/mobile applications.
            </p>

            <div className="bg-[#181818] border-2 border-black p-4 sm:p-6 shadow-[5px_5px_0_var(--color-black)] mb-4 font-mono text-white rounded-lg">
              <div className="pl-4 border-l-4 border-purple-500 mb-4">
                <div>
                  &gt; Specialized in Web Development and AI integration
                </div>
                <div>&gt; Obsessed with Data Structures and Optimization</div>
                <div>
                  &gt; Over 3 years of shipping Apps that sell and scale
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <div className="bg-black text-white px-4 py-2 rounded font-bold text-sm">
                  📍 LOCATION: WORLDWIDE | REMOTE
                </div>
                <div className="bg-[#39d353] text-black px-4 py-2 rounded font-bold text-sm">
                  ● STATUS: AVAILABLE
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

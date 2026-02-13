export function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-20 md:px-10 px-4 h-dvh w-full relative"
    >
      <div
        className="w-full md:w-11/12 mx-auto flex border-x-4 border-b-4  gap-2 sm:gap-4 items-center relative
       bg-light-gray px-2 h-[95%] border-zinc-700 flex-1"
      >
        {/* Image placeholder */}
        <div className="relative h-full md:max-w-1/3">
          <div
            className="w-full aspect-square max-w-60 sm:max-w-[30%] mx-auto bg-white border-4 border-black shadow-[4px_4px_0_var(--color-black)]
           flex items-center justify-center overflow-hidden"
          >
            <img src="./me.jpg" alt="Profile Image" className="object-fill" />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 -left-8 w-8 h-8 bg-yellow border-2 border-black"></div>
          <div className="absolute bottom-4 right-0 w-12 h-12 bg-blue border-2 border-black rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative h-9/10 w-8/10 ">
          <h2 className="text-4xl md:text-6xl font-extrabold text-left mb-2">
            WHO_<span className="text-blue">AM_I ?</span>
          </h2>

          <div className="bg-white  p-4  mb-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              I am Waithaka Ndung'u,{" "}
              <span className="bg-green">Certified Software Developer</span>{" "}
              with 4+ years of experience building digital products that make an
              impact. I specialize in creating performant, scalable and optimal
              web/mobile applications.
            </p>
            <div className="bg-[#181818] border-2 border-black p-4 sm:p-6 shadow-[5px_5px_0_var(--color-black)] mb-4 font-mono text-base sm:text-[17px] text-white rounded-lg max-w-full overflow-hidden">
              <div className="pl-4 border-l-4 border-purple-500 mb-4">
                <div>
                  &gt; Specialized in Web Development and AI integration
                </div>
                <div>
                  &gt; Obsessed with{" "}
                  <span className="inline-block w-6 h-6 bg-black rounded-full align-middle mx-1"></span>
                  Data Structures and Optimization
                </div>
                <div>
                  &gt; over 3 years of shipping Apps that sell and scale
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="bg-black text-white px-4 py-2 rounded font-bold flex items-center text-sm">
                  <span className="mr-2">📍</span>LOCATION: WORLDWIDE|REMOTE
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
          <div className="grid grid-cols-3 gap-4 mb-12">
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

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center flex-col bg-light-gray relative py-24 px-5"
    >
      {/* Scroll indicator */}
      <div className="absolute top-16 right-5 text-[11px] font-medium flex items-center gap-2">
        SCROLL DOWN
        <div className="w-5 h-[30px] border-2 border-black rounded-full relative">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-black rounded-sm animate-scroll-indicator"></span>
        </div>
      </div>

      {/* Hero content */}
      <div className="text-center relative">
        {/* Decorative shapes */}
        <div className="hidden md:block w-[60px] h-[60px] bg-blue border-[3px] border-black absolute -left-20 top-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block w-20 h-20 bg-pink border-[3px] border-black rounded-full absolute -right-24 top-1/2 -translate-y-1/2"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-5">
          FULL STACK
          <br />
          <span className="text-outline">DEVELOPER</span>
        </h1>

        <div className="bg-yellow border-[3px] border-black py-4 px-8 inline-block font-bold text-sm my-8 shadow-[5px_5px_0_var(--color-black)]">
          I build digital products that refuse to be ignored.
        </div>

        <div className="flex gap-5 justify-center mt-8 flex-wrap">
          <a
            href="#projects"
            className="py-3.5 px-7 border-2 border-black font-bold text-[13px] cursor-pointer transition-all no-underline bg-black text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-black)]"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#"
            className="py-3.5 px-7 border-2 border-black font-bold text-[13px] cursor-pointer transition-all no-underline bg-white text-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-black)]"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* Marquee footer */}
      <div className="absolute bottom-5 w-full bg-blue text-white py-2 text-[11px] font-medium overflow-hidden whitespace-nowrap">
        <span className="inline-block pl-[100%] animate-marquee">
          SKILLS FOR MONEY /// FULL STACK DEVELOPMENT /// SYSTEM DESIGN /// REST DESIGN /// ACCESSIBLE /// FAST /// SECURE /// OPEN
        </span>
      </div>
    </section>
  );
}

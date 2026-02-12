export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center flex-col bg-transparent relative py-24 px-5"
    >
      {/* Scroll indicator */}
      <div className="absolute top-16 right-5 text-[11px] font-medium flex items-center gap-2">
        SCROLL DOWN
        <div className="w-5 h-[30px] border-2 border-black rounded-full relative">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-black rounded-sm animate-scroll-indicator"></span>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative text-left">
        {/* Decorative shapes */}
        <div className="hidden md:block w-[80px] h-[80px] bg-blue border-[3px] border-black absolute -left-44 top-1/2 -translate-y-1/2 animate-bounce-slow"></div>
        <div className="hidden md:block w-32 h-32 bg-pink border-[3px] border-black rounded-full absolute -right-56 top-1/2 -translate-y-1/2 animate-beep"></div>

        <h1 className="text-[4rem] md:text-[7.5rem] font-extrabold leading-tight mb-8">
          FULL STACK
          <br />
          <span className="text-outline">DEVELOPER</span>
        </h1>

        <div className="bg-yellow border-[3px] border-black py-8 px-16 inline-block font-bold text-2xl my-12 shadow-[5px_5px_0_var(--color-black)]">
          I build digital products that refuse to be ignored.
        </div>

        <div className="flex gap-5 justify-start mt-12 flex-wrap">
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
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-60%) scale(1.08); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
        @keyframes beep {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5) drop-shadow(0 0 12px #FFB6D9); }
        }
        .animate-beep { animation: beep 1.2s infinite; }
      `}</style>

      {/* Marquee footer */}
      <div className="absolute bottom-0 w-full bg-blue text-white py-4 text-[22px] font-semibold overflow-hidden whitespace-nowrap border-t-[3px] border-b-[3px] border-black" style={{ minHeight: '56px' }}>
        <span className="inline-block pl-[100%] animate-marquee">
          SKILLS FOR MONEY /// FULL STACK DEVELOPMENT /// SYSTEM DESIGN /// REST DESIGN /// ACCESSIBLE /// FAST /// SECURE /// OPEN
        </span>
      </div>
    </section>
  );
}

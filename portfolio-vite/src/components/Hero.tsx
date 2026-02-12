import { useEffect, useState } from "react";

export function Hero() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScroll(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-between bg-transparent relative px-5 overflow-hidden"
    >
      {/* Scroll progress bar */}
      <div
        style={{
          width: `${scroll * 100}%`,
          height: "6px",
          background: "#39d353",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: "width 0.2s",
        }}
      ></div>
      {/* Scroll indicator */}
      <div className="absolute top-26 right-5 text-[2.75] font-medium flex items-center gap-2">
        SCROLL DOWN
        <div className="w-5 h-7.5 border-2 border-black rounded-full relative">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-black rounded-sm animate-scroll-indicator"></span>
        </div>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative text-left">
          {/* Decorative shapes */}
          <div className="hidden md:block w-10 h-10 bg-blue border-[0.75] border-black absolute -left-44 top-1/2 -translate-y-1/2 animate-bounce-slow"></div>
          <div className="hidden md:block w-8 h-8 bg-pink border-[3px] border-black rounded-full absolute -right-56 top-1/2 -translate-y-1/2 animate-beep"></div>

          <h1 className="text-[4rem] md:text-[7.5rem] font-extrabold leading-tight mb-2 mt-12">
            FULL STACK
            <br />
            <span className="text-outline">DEVELOPER</span>
          </h1>

          <div className="bg-yellow border-2 border-black py-2 px-16 inline-block font-bold text-2xl my-6 shadow-[1.25_1.25_0_var(--color-black)]">
            <div className="font-light">
              I build digital products that generate revenue.
            </div>

            <div className="mt-4 text-center font-bold tracking-wide text-xl">
              Python · Go · TypeScript · HonoJS · Docker
            </div>
          </div>

          <div className="flex gap-16 justify-start mt-6  mb-16 flex-wrap">
            <a
              href="#projects"
              className="text-white py-3.5 px-7 border-2 border-black font-bold cursor-pointer transition-all no-underline bg-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0.75_0.75_0_var(--color-black)]"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#"
              className="py-3.5 px-7 border-2 border-black font-bold text-[3.25] cursor-pointer transition-all no-underline bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0.75_0.75_0_var(--color-black)]"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-60%) scale(1.08); }
        }
        .animate-bounce-slow { animation: bounce-slow 5s infinite; }
        @keyframes beep {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5) drop-shadow(0 0 12px #FFB6D9); }
        }
        .animate-beep { animation: beep 2.4s infinite; }
      `}</style>

      {/* Marquee footer */}
      <div
        className="absolute bottom-0 w-full text-xl bg-blue py-4 text-[5.5] font-semibold overflow-hidden whitespace-nowrap
         border-t-[0.75] border-b-[0.75] border-black"
        style={{ minHeight: "14" }}
      >
        <span className="inline-block pl-[25] animate-marquee tracking-wide">
          SKILLS FOR MONEY /// FULL STACK DEVELOPMENT /// SYSTEM DESIGN /// REST
          DESIGN /// HACKATHONS /// CODE TUTOR /// ACCESSIBLE /// FAST ///
          SECURE /// OPEN
        </span>
      </div>
    </section>
  );
}

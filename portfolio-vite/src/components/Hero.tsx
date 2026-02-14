import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-between bg-transparent relative px-5 overflow-hidden"
    >
      {/* Faint background text */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 sm:top-1/2 top-5/7 -translate-x-1/2 -translate-y-1/2 text-[10vw] 
        font-extrabold text-zinc-700 opacity-20 whitespace-nowrap z-0"
        style={{ userSelect: "none", letterSpacing: "0.2em" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        CODER
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 sm:top-1/6 top-1/4 -translate-x-1/2 -translate-y-1/2 text-[10vw] 
        font-extrabold text-zinc-700 opacity-15 whitespace-nowrap z-0"
        style={{ userSelect: "none", letterSpacing: "0.2em" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        DEVELOPER
      </motion.span>

      {/* A Floating image of the developer */}
      <motion.div
        className="hidden sm:absolute md:flex h-40 w-60 z-100 border-black border-4 overflow-clip
      md:top-1/4 md:right-1/10 lg:right-1/5  shadow-[5px_5px_0_var(--color-yellow)]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <img src="./me.jpg" className="object-cover object-top h-full w-full" />
      </motion.div>

      {/* Scroll progress bar */}
      <div
        style={{
          width: `${scroll * 100}%`,
          height: "8px",
          background: "#39d353",
          position: "fixed",
          borderBottom: "2px solid black",
          top: 0,
          left: 0,
          zIndex: 4000, // ensure above nav and dropdown
          transition: "width 0.2s",
          pointerEvents: "none", // never block interaction
        }}
      ></div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute hidden top-26 right-5 text-[2.75] font-medium sm:flex items-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        SCROLL DOWN
        <div className="w-5 h-7.5 border-2 border-black rounded-full relative">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-black rounded-sm animate-scroll-indicator"></span>
        </div>
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.1,
        }}
      >
        <div className="relative md:text-left text-center">
          {/* Decorative shapes */}
          <motion.div
            className="hidden md:block w-10 h-10 bg-blue border-[0.75] border-black absolute -left-44 top-1/2 -translate-y-1/2 animate-bounce-slow"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="hidden md:block w-8 h-8 bg-pink border-[3px] border-black rounded-full absolute -right-56 top-1/2 -translate-y-1/2 animate-beep"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>

          <motion.h1
            className="text-6xl md:text-[7.5rem] font-extrabold sm:leading-tight leading-12 mt-12"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            SOFTWARE
            <br />
            <span className="text-outline">ENGINEER</span>
          </motion.h1>

          <motion.div
            className="bg-yellow border-2 border-black py-2 md:px-16 sm:px-10 px-4 inline-block 
          font-bold sm:text-2xl  text-xl my-4 shadow-[5px_5px_0_var(--color-black)]"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="font-light">
              I build digital products that generate revenue.
            </div>

            <div className="text-center font-bold md:tracking-wide tracking-tight text-xl">
              Python · Go · TypeScript · HonoJS · Docker
            </div>
          </motion.div>

          <motion.div
            className="flex md:gap-8 md:justify-start justify-center mt-6 gap-6 mb-16 flex-wrap"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="#projects"
              className="text-white py-3.5 px-7 border-2 border-black font-bold cursor-pointer transition-all no-underline
               bg-black hover:-translate-x-0.5 hover:-translate-y-0.5 w-90 hover:shadow-[0.75_0.75_0_var(--color-black)] text-3xl"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#"
              className="py-3.5 px-7 border-2 border-black font-bold text-[3.25] cursor-pointer transition-all text-3xl
               no-underline bg-white hover:-translate-x-0.5 w-90 hover:-translate-y-0.5 hover:shadow-[0.75_0.75_0_var(--color-black)]"
            >
              DOWNLOAD CV
            </a>
          </motion.div>
        </div>
      </motion.div>
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
          border-y-4 border-black left-0 right-0"
        style={{ minHeight: "14" }}
      >
        <div className="flex w-max animate-marquee whitespace-nowrap text-[5.5] font-semibold tracking-wide">
          <span className="px-10">
            SKILLS FOR MONEY /// FULL STACK DEVELOPMENT /// SYSTEM DESIGN ///
            REST DESIGN /// HACKATHONS /// CODE TUTOR /// ACCESSIBLE /// FAST
            /// SECURE /// OPEN
          </span>

          {/* Duplicate for seamless loop */}
          <span className="px-10">
            SKILLS FOR MONEY /// FULL STACK DEVELOPMENT /// SYSTEM DESIGN ///
            REST DESIGN /// HACKATHONS /// CODE TUTOR /// ACCESSIBLE /// FAST
            /// SECURE /// OPEN
          </span>
        </div>
      </div>
    </section>
  );
}

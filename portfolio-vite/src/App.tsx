// import {
//   Navbar,
//   Hero,
//   CommunityImpact,
//   TechStack,
//   ExperienceSection,
//   EducationSection,
//   CodingStats,
//   SelectedWorks,
//   AboutMe,
//   Contact,
//   Footer,
//   UserReports,
// } from "./components";
// import { motion } from "framer-motion";

// function App() {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <Navbar />
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <Hero />
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <AboutMe />
//       </motion.div>
//       {/* Experience and Education side by side */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <div className="flex flex-col md:flex-row gap-8 w-full">
//           <div className="flex-1">
//             <ExperienceSection />
//           </div>
//           <div className="flex-1">
//             <EducationSection />
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <CommunityImpact />
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <TechStack />
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <CodingStats />
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <SelectedWorks />
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <UserReports />
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <Contact />
//       </motion.div>
//       <Footer />
//     </>
//   );
// }

// export default App;
import {
  Navbar,
  Hero,
  AboutMe,
  CommunityImpact,
  CodingStats,
  SelectedWorks,
  Contact,
  Footer,
  UserReports,
  CareerLedger,
} from "./components";
import { useTheme } from "./contexts/ThemeContext";
import { useEffect, useState } from "react";

function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage:
          "radial-gradient(var(--dot, rgba(0,0,0,0.16)) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        transition: "opacity 0.35s ease",
      }}
    />
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // Initial call
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 pointer-events-none"
      style={{ height: "0.4rem", zIndex: 1000000 }}
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "var(--accent)",
        }}
      />
    </div>
  );
}

export default function App() {
  // Consume theme so the component re-renders when tokens change
  const { isDark: _isDark } = useTheme();

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        transition: "background 0.35s ease, color 0.35s ease",
      }}
    >
      <ScrollProgress />
      <DotGrid />
      <Navbar />

      {/* ── Sections ── */}
      <Hero />
      <AboutMe />
      <CareerLedger />
      <SelectedWorks />
      <CommunityImpact />
      <CodingStats />
      <UserReports />
      <Contact />
      <Footer />
    </div>
  );
}

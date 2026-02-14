import {
  Navbar,
  Hero,
  CommunityImpact,
  TechStack,
  ExperienceSection,
  EducationSection,
  CodingStats,
  SelectedWorks,
  AboutMe,
  Contact,
  Footer,
  UserReports,
} from "./components";
import { motion } from "framer-motion";

function App() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AboutMe />
      </motion.div>
      {/* Experience and Education side by side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1">
            <ExperienceSection />
          </div>
          <div className="flex-1">
            <EducationSection />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CommunityImpact />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TechStack />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CodingStats />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SelectedWorks />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <UserReports />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Contact />
      </motion.div>
      <Footer />
    </>
  );
}

export default App;

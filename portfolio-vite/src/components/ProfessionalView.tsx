import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import {
  ProfessionalHero,
  ProfessionalAbout,
  ProfessionalExperience,
  ProfessionalEducation,
  ProfessionalTechStack,
  ProfessionalTestimonials,
  ProfessionalProjects,
  ProfessionalWriting,
  ProfessionalCTA,
  ProfessionalContact,
} from "./Professional";

interface ProfessionalViewProps {
  onSwitchView?: () => void;
}

export function ProfessionalView({ onSwitchView }: ProfessionalViewProps) {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white relative">
      {/* Shuttle Dotted Background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--dot, rgba(0,0,0,0.08)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.5,
        }}
      />
      <Navbar onSwitchView={onSwitchView} />
      <ScrollToTop />
      <main className="relative z-1">
        <ProfessionalHero />
        <ProfessionalAbout />
        <ProfessionalExperience />
        <ProfessionalEducation />
        <ProfessionalTechStack />
        <ProfessionalTestimonials />
        <ProfessionalProjects />
        <ProfessionalWriting />
        <ProfessionalCTA />
        <ProfessionalContact />
      </main>
      <Footer />
    </div>
  );
}

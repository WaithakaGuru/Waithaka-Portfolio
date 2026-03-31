import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import {
  ProfessionalHero,
  ProfessionalAbout,
  ProfessionalExperience,
  ProfessionalTestimonials,
  ProfessionalProjects,
  ProfessionalCTA,
  ProfessionalContact,
} from "./Professional";

export function ProfessionalView() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <ProfessionalHero />
        <ProfessionalAbout />
        <ProfessionalExperience />
        <ProfessionalTestimonials />
        <ProfessionalProjects />
        <ProfessionalCTA />
        <ProfessionalContact />
      </main>
      <Footer />
    </div>
  );
}

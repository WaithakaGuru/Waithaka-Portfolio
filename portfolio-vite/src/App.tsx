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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      {/* Experience and Education side by side */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex-1">
          <ExperienceSection />
        </div>
        <div className="flex-1">
          <EducationSection />
        </div>
      </div>
      <CommunityImpact />
      <TechStack />
      <CodingStats />
      <SelectedWorks />
      <UserReports />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

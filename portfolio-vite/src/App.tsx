import {
  Navbar,
  Hero,
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
      <TechStack />
      {/* Experience and Education side by side */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex-1">
          <ExperienceSection />
        </div>
        <div className="flex-1">
          <EducationSection />
        </div>
      </div>
      <CodingStats />
      <SelectedWorks />
      <UserReports />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

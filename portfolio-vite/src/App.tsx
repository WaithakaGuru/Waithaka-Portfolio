import {
  Navbar,
  Hero,
  TechStack,
  ExperienceSection,
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
      <ExperienceSection />
      <CodingStats />
      <SelectedWorks />
      <UserReports />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

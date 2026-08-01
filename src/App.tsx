import { useState } from "react";
import {
  HomeHero,
  AboutMe,
  CommunityImpact,
  ICanWrite,
  MinimalContact,
  MinimalFooter,
  PlayWithMe,
  SelectedWork,
} from "./components";
import { ProjectCaseStudy as ProjectDetails } from "./components/ProjectDetailsTemplate";
import { ResumePage } from "./components/ResumePage";
import { SideNav } from "./components/global/SideNav";
import { AppLayout } from "./components/layouts/AppLayout";
import { getCaseStudy } from "./data/projectCasesStudies";
import { useProjectStudy } from "./contexts";

export default function App() {
  type PageType = "main" | "resume" | "projectCaseStudy";

  const { currentProjectStudy } = useProjectStudy();
  const [page, setPage] = useState<PageType>("main");

  return (
    // Page routing  mechanisms
    <AppLayout>
      {page === "resume" ? (
        <>
          <ResumePage onBack={() => setPage("main")} />
          <MinimalFooter snap={false} />
        </>
      ) : page === "projectCaseStudy" ? (
        <>
          <ProjectDetails
            onBack={() => setPage("main")}
            study={getCaseStudy(currentProjectStudy)!}
          />
          <MinimalFooter snap={false} />
        </>
      ) : (
        <>
          <SideNav onOpenResume={() => setPage("resume")} />
          <HomeHero />
          <SelectedWork onOpenDetails={() => setPage("projectCaseStudy")} />
          <CommunityImpact />
          <AboutMe />
          <PlayWithMe />
          <ICanWrite />
          <MinimalContact />
          <MinimalFooter />
        </>
      )}
    </AppLayout>
  );
}

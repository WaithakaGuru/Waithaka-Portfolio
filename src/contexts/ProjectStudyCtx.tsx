// the context to expose the current selected projects whose cse Study page is to be opened
import { createContext, useContext, useState } from "react";

interface ProjectStudyProps {
  setCurrentProjectStudy: (current: string) => void;
  currentProjectStudy: string;
}

const ProjectStudyContext = createContext<ProjectStudyProps | null>(null);

export const ProjectStudyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [project, setProject] = useState<string>("");
  const vals: ProjectStudyProps = {
    currentProjectStudy: project,
    setCurrentProjectStudy: (current) => setProject(current),
  };
  return (
    <ProjectStudyContext.Provider value={vals}>
      {children}
    </ProjectStudyContext.Provider>
  );
};

export const useProjectStudy = () => {
  const ctx = useContext(ProjectStudyContext);
  if (!ctx)
    throw new Error(
      "useProjectStudy must be used within the ProjectStudyProvider",
    );
  return ctx;
};

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { ContactProvider } from "./contexts/ContactContext.tsx";
import { ProjectStudyProvider } from "./contexts/ProjectStudyCtx.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ProjectStudyProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </ProjectStudyProvider>
    </ThemeProvider>
  </StrictMode>,
);

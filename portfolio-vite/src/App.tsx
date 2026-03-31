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
  ViewSelector,
} from "./components";
import { ProfessionalView } from "./components/ProfessionalView";
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
    updateProgress();
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
  const { isDark: _isDark } = useTheme();
  const [selectedView, setSelectedView] = useState<
    "professional" | "artist" | null
  >(null);
  const [showApp, setShowApp] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolioView") as
      | "professional"
      | "artist"
      | null;
    if (saved) {
      setSelectedView(saved);
      if (saved === "artist") {
        setShowApp(true);
      } else if (saved === "professional") {
        // Redirect to professional HTML
        window.location.href = "/waithaka-portfolio.html";
      }
    }
  }, []);

  // Handle view selection
  const handleSelectView = (view: "professional" | "artist") => {
    localStorage.setItem("portfolioView", view);
    setSelectedView(view);

    if (view === "professional") {
      // Redirect to professional HTML file
      window.location.href = "/waithaka-portfolio.html";
    } else if (view === "artist") {
      setShowApp(true);
    }
  };

  // Show view selector if no view selected
  if (!selectedView) {
    return <ViewSelector onSelectView={handleSelectView} />;
  }

  // Show loading state while transitioning to professional view
  if (selectedView === "professional" && !showApp) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="font-mono-brand text-text">
            Redirecting to Professional View...
          </p>
        </div>
      </div>
    );
  }

  // Show artist portfolio
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
      <Navbar
        onSwitchView={() => {
          localStorage.removeItem("portfolioView");
          setSelectedView(null);
          setShowApp(false);
        }}
      />

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

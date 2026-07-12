import { SideNav } from "./components/SideNav";
import { HomeHero } from "./components/HomeHero";
import { PlayWithMe } from "./components/PlayWithMe";
import { MinimalFooter } from "./components/MinimalFooter";

export default function App() {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        transition: "background 0.35s ease, color 0.35s ease",
        minHeight: "100dvh",
      }}
    >
      <SideNav />
      <HomeHero />
      <PlayWithMe />
      {/* Selected Work, About, and Contact land here next pass */}
      <MinimalFooter />
    </div>
  );
}

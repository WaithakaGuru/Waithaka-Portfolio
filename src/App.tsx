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
      <section
        id="contact"
        className="px-6 sm:px-10 lg:px-24 py-20"
      >
        <div
          className="mx-auto max-w-6xl rounded-[32px] border px-8 py-10 sm:px-10 sm:py-12"
          style={{
            borderColor: "var(--border-lt)",
            background: "rgba(255,255,255,0.72)",
            boxShadow: "0 18px 40px rgba(18,24,31,0.08)",
          }}
        >
          <div className="max-w-2xl">
            <div className="mb-4 font-mono-brand text-xs uppercase tracking-[0.28em]" style={{ color: "var(--text-sub)" }}>
              Contact
            </div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl" style={{ color: "var(--text)" }}>
              Let’s build something useful.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7" style={{ color: "var(--text-sub)" }}>
              The phone in the hero scrolls here. If you want to talk product, systems, or a build that needs both taste and rigor, reach out.
            </p>
            <a
              href="mailto:hello@kiru.tech"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              hello@kiru.tech
            </a>
          </div>
        </div>
      </section>
      <MinimalFooter />
    </div>
  );
}

import { type ReactNode } from "react";
import { FloatingActions } from "../global/FloatActions";
import { CustomCursor } from "../global/CustomCursor";
import Click from "../global/GlobalClick";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      style={{
        color: "var(--text)",
        transition: "background 0.35s ease, color 0.35s ease",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* 1. Global Utilities & Interactivity elements */}
      <CustomCursor />
      <Click />

      {/* 2. Floating Action Dock (Theme Toggle + Scroll Top) */}
      <FloatingActions />

      {/* 3. Page Content */}
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}

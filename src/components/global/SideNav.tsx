import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiHome,
  FiBriefcase,
  FiZap,
  FiUser,
  FiFileText,
  FiUsers,
  FiEdit3,
  FiPhone,
} from "react-icons/fi";
import { Tooltip } from "./Tooltip";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const SCROLL_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: <FiHome size={16} /> },
  { id: "works", label: "Selected Work", icon: <FiBriefcase size={16} /> },
  { id: "community", label: "Community Impact", icon: <FiUsers size={16} /> },
  { id: "about", label: "About Me", icon: <FiUser size={16} /> },
  { id: "play", label: "Play With Me", icon: <FiZap size={16} /> },
  { id: "write", label: "I Can Write", icon: <FiEdit3 size={16} /> },
  { id: "contact", label: "Contact", icon: <FiPhone size={16} /> },
];

const goTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        // Fire when a section crosses a thin band near viewport-center,
        // instead of requiring 40% of the section's own height to be
        // visible — tall sections like #works (stacked cards, several
        // viewport-heights tall) could never reach that ratio.
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

interface SideNavProps {
  onOpenResume: () => void;
}

export function SideNav({ onOpenResume }: SideNavProps) {
  const active = useActiveSection(SCROLL_ITEMS.map((i) => i.id));
  return (
    <>
      <DesktopNav active={active} onOpenResume={onOpenResume} />
      <MobileNav active={active} onOpenResume={onOpenResume} />
    </>
  );
}

function DesktopNav({
  active,
  onOpenResume,
}: {
  active: string;
  onOpenResume: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.nav
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      animate={{ width: expanded ? 210 : 56 }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
      className="fixed top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-1 p-2 rounded-2xl backdrop-blur-md overflow-hidden"
      style={{
        left: "max(1rem, calc(var(--page-margin) + 1rem - var(--nav-width-collapsed)))",
        background: "var(--nav-bg)",
        border: "1px solid var(--border-lt)",
        boxShadow: "var(--shadow-h)",
      }}
    >
      {SCROLL_ITEMS.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            data-cursor="pointer"
            onClick={() => goTo(item.id)}
            className="flex items-center gap-2 h-10 px-2.25 rounded-xl transition-colors shrink-0"
            style={{
              color: isActive ? "var(--accent)" : "var(--text)",
              background: isActive ? "var(--accent-soft)" : "transparent",
            }}
            onMouseEnter={(e) => {
              if (!isActive)
                e.currentTarget.style.background = "var(--accent-soft";
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = "transparent";
            }}
          >
            <span className="shrink-0 relative">
              {item.icon}
              {isActive && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -right-1 -top-1 w-1.5 h-1.25 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </span>
            <span
              className="font-mono-brand text-[12px] whitespace-nowrap transition-opacity duration-150"
              style={{ opacity: expanded ? 1 : 0 }}
            >
              {item.label}
            </span>
          </button>
        );
      })}

      <div
        className="my-1 h-px shrink-0"
        style={{ background: "var(--border-lt)" }}
      />

      <button
        data-cursor="pointer"
        onClick={onOpenResume}
        className="flex items-center gap-3 h-10 px-2.5 rounded-xl transition-colors shrink-0"
        style={{ color: "var(--text)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--accent-soft)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        <span className="shrink-0">
          <FiFileText size={18} />
        </span>
        <span
          className="font-mono-brand text-[13px] whitespace-nowrap transition-opacity duration-150"
          style={{ opacity: expanded ? 1 : 0 }}
        >
          Resume
        </span>
      </button>
    </motion.nav>
  );
}

function MobileNav({
  active,
  onOpenResume,
}: {
  active: string;
  onOpenResume: () => void;
}) {
  const items = [
    ...SCROLL_ITEMS,
    { id: "resume", label: "Resume", icon: <FiFileText size={18} /> },
  ];

  return (
    <nav
      className="fixed bottom-6 left-5/11 -translate-x-1/2 z-99 flex md:hidden items-center gap-1 p-2 rounded-4xl 
      backdrop-blur-md max-w-[88dvw] h-14"
      style={{
        background: "var(--nav-bg)",
        border: "1px solid var(--border-lt)",
        boxShadow: "var(--shadow-h)",
      }}
    >
      {items.map((item) => {
        const isActive = item.id === "resume" ? false : active === item.id;
        return (
          <Tooltip key={item.id} label={item.label} side="top">
            <button
              data-cursor="pointer"
              onClick={() =>
                item.id === "resume" ? onOpenResume() : goTo(item.id)
              }
              aria-label={item.label}
              className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-colors"
              style={{
                color: isActive ? "var(--accent)" : "var(--text)",
                background: isActive ? "var(--accent-soft)" : "transparent",
              }}
            >
              {item.icon}
            </button>
          </Tooltip>
        );
      })}
    </nav>
  );
}

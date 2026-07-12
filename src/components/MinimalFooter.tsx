import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export function MinimalFooter() {
  return (
    <footer
      className="px-6 sm:px-10 lg:px-24 py-10 border-t"
      style={{ borderColor: "var(--border-lt)" }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-mono-brand text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} Waithaka Ndung'u · Kiru Tech
        </span>
        <div className="flex items-center gap-4">
          {[
            {
              icon: <FiGithub size={16} />,
              href: "https://github.com/WaithakaGuru",
            },
            { icon: <FiLinkedin size={16} />, href: "#" },
            { icon: <FiTwitter size={16} />, href: "#" },
            { icon: <FiMail size={16} />, href: "mailto:hello@kiru.tech" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text-sub)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export function MinimalFooter() {
  return (
    <footer
      className="px-6 sm:px-10 lg:px-24 py-10 border-t"
      style={{ borderColor: "var(--border-lt)" }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-mono-brand text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} Waithaka Ndung'u · Kiru Tech
        </span>
        <div className="flex items-center gap-4">
          {[
            {
              icon: <FiGithub size={16} />,
              href: "https://github.com/WaithakaGuru",
            },
            { icon: <FiLinkedin size={16} />, href: "#" },
            { icon: <FiTwitter size={16} />, href: "#" },
            { icon: <FiMail size={16} />, href: "mailto:hello@kiru.tech" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text-sub)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

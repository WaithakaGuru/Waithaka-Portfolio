import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { useContact } from "../contexts";
import { SiWhatsapp } from "react-icons/si";

export function MinimalFooter({ snap = true }) {
  const { wa, li, gh, ig, em } = useContact();
  return (
    <footer
      className={`section-bg-a page-margin pt-10 pb-24 border-t ${snap ? "snap-section" : ""}`}
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
              href: gh.link,
            },
            {
              icon: <FiLinkedin size={16} />,
              href: li.link,
            },
            {
              icon: <FiInstagram size={16} />,
              href: ig.link,
            },
            {
              icon: <SiWhatsapp size={16} />,
              href: wa.link,
            },
            {
              icon: <FiMail size={16} />,
              href: `mailto:${em.link}`,
            },
          ].map((s, i) => (
            <a
              data-cursor="pointer"
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-all border border-accent p-2 rounded-full flex justify-center  text-(--text-sub)
              hover:scale-140 hover:bg-accent-soft hover:text-slate-900"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

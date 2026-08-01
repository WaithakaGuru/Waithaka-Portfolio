import { FiBriefcase, FiGithub, FiArrowUpRight } from "react-icons/fi";
import SpotlightCard from "../work/SpotlightCard";
import { useTheme } from "../../contexts/ThemeContext";
import { SiWhatsapp } from "react-icons/si";
import { VerifiedBadge } from "../../utils/otherIcons";
import { useContact } from "../../contexts";

export function ProfileCard() {
  const { isDark } = useTheme();
  const { wa } = useContact();
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <SpotlightCard
      className="w-66 rounded-[48px] lg:border-10! border-8! overflow-hidden xl:h-118 h-60"
      spotlightColor="rgba(47, 155, 224, 0.28)"
    >
      <img
        src="/images/me-small.jpg"
        alt="Waithaka Ndung'u"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-[1rem] text-stone-50">
            Waithaka Ndung'u
          </span>
          <VerifiedBadge />
        </div>
        <p className="mt-1 text-[0.8rem] leading-snug hidden xl:flex text-stone-50 text-shadow-stone-900 text-shadow-xs">
          Full stack engineer who ships fast and digs deep into systems.
        </p>

        <div className="mt-4 items-center justify-between hidden xl:flex">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1 text-xs font-mono-brand"
              style={{ color: "#f1f1f4" }}
            >
              <FiBriefcase size={13} /> 15+ shipped
            </span>
            <span
              className="inline-flex items-center gap-1 text-xs font-mono-brand"
              style={{ color: "#f1f1f4" }}
            >
              <FiGithub size={13} /> 40+ repos
            </span>
          </div>
        </div>
        <div className="xl:my-4 flex items-center gap-2 w-full">
          {/* Existing Primary Button */}
          <button
            data-cursor="pointer"
            onClick={scrollToContact}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
            style={{
              color: isDark ? "#12181F" : "#f5f5f4",
              backgroundColor: isDark ? "#f5f5f4" : "#12181F",
              border: !isDark ? "1px solid #f5f5f4" : "",
            }}
          >
            Let's talk <FiArrowUpRight size={14} />
          </button>

          {/* WhatsApp Icon Button */}
          <a
            href={wa.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            aria-label="Contact on WhatsApp"
            className="inline-flex items-center justify-center p-3.5 rounded-2xl transition-transform hover:-translate-y-0.5 shrink-0"
            style={{
              color: isDark ? "#12181F" : "#f5f5f4",
              backgroundColor: isDark ? "#f5f5f4" : "#12181F",
              border: !isDark ? "1px solid #f5f5f4" : "",
            }}
          >
            <SiWhatsapp size={18} />
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}

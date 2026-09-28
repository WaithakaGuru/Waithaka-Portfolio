import { SiWhatsapp } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";
import { useContact } from "../../contexts";

export default function ContactButtonGroup() {
  const { wa, em, ph } = useContact();
  return (
    <div className="inline-flex items-center backdrop-blur-md rounded-full shadow-lg border-4 border-(--text-sub)">
      {/* WhatsApp Button */}
      <a
        data-cursor="pointer"
        href={wa.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white
         font-medium text-sm border-(--text-sub) transition-all duration-300 hover:scale-[1.03] 
         active:scale-[0.98] rounded-bl-full rounded-tl-full"
      >
        <SiWhatsapp size={18} className="animate-pulse" />
        <span>W.app</span>
      </a>

      {/* Phone Button */}
      <a
        data-cursor="pointer"
        href={`tel:${ph.link}`}
        className="flex items-center gap-2 px-3 py-2.5 bg-(--accent-soft) hover:bg-accent text-(--text)
         font-medium text-sm  transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
      >
        <FiPhone size={16} />
        <span>Call</span>
      </a>

      {/* Email Button */}
      <a
        data-cursor="pointer"
        href={`mailto:${em.link}`}
        className="flex items-center gap-2 px-3 py-2.5 bg-(--text) text-(--bg) font-medium text-sm
         transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-tr-full rounded-br-full "
      >
        <FiMail size={16} />
        <span>Email</span>
      </a>
    </div>
  );
}

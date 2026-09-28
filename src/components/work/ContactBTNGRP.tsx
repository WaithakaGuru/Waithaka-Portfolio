import { SiWhatsapp } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";
import { useContact } from "../../contexts";

export default function ContactButtonGroup() {
  const { wa, em, ph } = useContact();
  return (
    <div className="inline-flex items-center p-1.5 bg-slate-900/5 backdrop-blur-md dark:bg-white/5 rounded-full shadow-lg border border-slate-200/50 dark:border-slate-800/50">
      {/* WhatsApp Button */}
      <a
        href={wa.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-sm shadow-md shadow-[#25D366]/20
         transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-bl-full rounded-tl-full"
      >
        <SiWhatsapp size={18} className="animate-pulse" />
        <span>WhatsApp</span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${ph.link}`}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#007AFF] hover:bg-[#0063cc] text-white font-medium text-sm shadow-md shadow-[#007AFF]/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
      >
        <FiPhone size={16} />
        <span>Phone</span>
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${em.link}`}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#EA4335] hover:bg-[#d33a2c] text-white font-medium text-sm shadow-md shadow-[#EA4335]/20 transition-all
         duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-tr-full rounded-br-full "
      >
        <FiMail size={16} />
        <span>Email</span>
      </a>
    </div>
  );
}

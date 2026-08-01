import { createContext, useContext } from "react";

interface ContactLink {
  label: linkLabel;
  link: string;
}

type linkLabel = "whatsapp" | "github" | "instagram" | "linkedin" | "email";

const ContactContext = createContext<Record<string, ContactLink> | undefined>(
  undefined,
);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const { wa, ig, gh, li, em }: Record<string, ContactLink> = {
    wa: {
      label: "whatsapp",
      link: `https://wa.me/254725676491?text=${encodeURIComponent("Hello Waithaka, From your portfolio, Let's talk business")}`,
    },

    ig: {
      label: "instagram",
      link: "https://www.instagram.com/wai.the_hacker/",
    },
    gh: { label: "github", link: "https://www.github.com/WaithakaGuru/" },
    li: {
      label: "linkedin",
      link: "https://www.linkedin.com/in/waithaka-amos-b2b80a255/",
    },
    em: { label: "email", link: "waithakaoffices@gmail.com" },
  };
  return (
    <ContactContext.Provider value={{ wa, em, li, gh, ig }}>
      {children}
    </ContactContext.Provider>
  );
}

export const useContact = () => {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within a ContactProvider");
  return ctx;
};

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [clock, setClock] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setClock(
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}` +
          ` ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`,
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white py-12 px-10 relative border-t-6 border-(--accent)">
      {/* Faint background text */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold text-[#666] opacity-10 whitespace-nowrap z-0"
        style={{ userSelect: "none", letterSpacing: "0.2em" }}
      >
        COMPETENT
      </span>
      <div className="max-w-300 mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo & tagline */}
          <div>
            <div className="font-bold text-xl border-2 border-white inline-block px-4 py-2 mb-4">
              Waithaka.hack
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full Stack Developer crafting digital experiences that generate
              revenue.
            </p>
            <img
              src="/WofisTechFull.png"
              alt="Logo"
              className="w-60 h-30 object-cover"
              style={{ display: "block", width: "fit-content" }}
            />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-[1rem] text-(--accent) mb-4 border-b border-gray-500 pb-4">
              SITEMAP
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[1rem] text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[1rem] text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  className="text-[1rem] text-gray-400 hover:text-white transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[1rem] text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[1rem] text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-bold text-[1rem] text-(--accent) mb-4 pb-4 border-b border-gray-500">
              CONNECT
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-2xl hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all"
                aria-label="Twitter (X)"
              >
                <FaXTwitter />
              </a>
              <a
                href="mailto:waithakaoffices@gmail.com"
                className="w-10 h-10 flex items-center justify-center text-2xl hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all"
                aria-label="Email"
              >
                <MdEmail />
              </a>
            </div>
            {/* Digital clock below CONNECT */}
            <div
              className="mt-4 text-green font-mono text-lg"
              style={{ color: "#39d353" }}
            >
              {clock}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} Waithaka.hack — All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Built with <span style={{ color: "#ff4b4b" }}>❤️</span> for Devs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

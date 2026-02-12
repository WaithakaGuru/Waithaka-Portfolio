import { useEffect, useState } from "react";

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
    <footer className="bg-black text-white py-12 px-10 relative border-t-6 border-[#39d353]">
      <div className="max-w-300 mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo & tagline */}
          <div>
            <div className="font-bold text-xl border-2 border-white inline-block px-4 py-2 mb-4">
              Waithaka.hack
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full Stack Developer crafting digital experiences that refuse to
              be ignored.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm text-yellow mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-bold text-sm text-yellow mb-4">CONNECT</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-sm hover:bg-white hover:text-black transition-all"
              >
                GH
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-sm hover:bg-blue hover:border-blue transition-all"
              >
                IN
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-sm hover:bg-white hover:text-black transition-all"
              >
                X
              </a>
              <a
                href="mailto:arham@example.com"
                className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-sm hover:bg-yellow hover:border-yellow hover:text-black transition-all"
              >
                @
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

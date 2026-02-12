import { useState, useEffect } from 'react';

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      if (scrollY > threshold) {
        if (scrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-[90vw] max-w-[1700px] flex flex-row items-stretch justify-between transition-all duration-300 ${
        hidden ? '-translate-y-24 opacity-0 pointer-events-none' : ''
      }`}
      style={{ background: 'transparent' }}
    >
      {/* Name box */}
      <div className="flex items-center h-[56px]">
        <div className="bg-white border-2 border-black px-8 h-full flex items-center font-extrabold text-2xl shadow-[4px_4px_0_var(--color-black)]" style={{letterSpacing: '0.01em'}}>
          ARHAM.exe
        </div>
      </div>
      {/* Nav box */}
      <div className="flex items-center h-[56px]">
        <div className="flex items-center bg-white border-2 border-black px-8 h-full shadow-[4px_4px_0_var(--color-black)] gap-8">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /ABOUT
          </a>
          <a
            href="#stack"
            onClick={(e) => { e.preventDefault(); scrollToSection('stack'); }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /SKILLS
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /LOGS
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /WORK
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow border-2 border-black px-6 py-1.5 font-bold text-lg ml-4 shadow-[2px_2px_0_var(--color-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            style={{letterSpacing: '0.05em'}}
          >
            HIRE ME
          </button>
        </div>
      </div>
    </nav>
  );
}

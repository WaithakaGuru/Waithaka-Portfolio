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
      className={`fixed top-5 left-1/2 -translate-x-1/2 bg-white border-2 border-black py-3 px-5 z-[1000] flex items-center gap-8 box-shadow-neo transition-all duration-300 ${
        hidden ? '-translate-y-24 opacity-0 pointer-events-none' : ''
      }`}
    >
      <div className="font-bold text-sm border-2 border-black px-3 py-1 bg-white">
        ARHAM.exe
      </div>
      <a
        href="#home"
        onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        className="no-underline text-black text-[13px] font-medium hover:text-gray-500 transition-colors"
      >
        HOME
      </a>
      <a
        href="#projects"
        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
        className="no-underline text-black text-[13px] font-medium hover:text-gray-500 transition-colors"
      >
        PROJECTS
      </a>
      <a
        href="#stack"
        onClick={(e) => { e.preventDefault(); scrollToSection('stack'); }}
        className="no-underline text-black text-[13px] font-medium hover:text-gray-500 transition-colors"
      >
        STACK
      </a>
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        className="no-underline text-black text-[13px] font-medium hover:text-gray-500 transition-colors"
      >
        ABOUT
      </a>
      <button 
        onClick={() => scrollToSection('contact')}
        className="bg-yellow border-2 border-black px-4 py-1.5 font-bold text-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-black)] transition-all"
      >
        HIRE
      </button>
    </nav>
  );
}

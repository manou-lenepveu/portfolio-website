import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'À propos', path: '#about' },
    { name: 'Projets', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible
          ? 'opacity-100 translate-y-0 border-b border-[var(--border)] bg-[rgba(10,10,10,0.80)] backdrop-blur-xl'
          : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
    >
      {/* Shimmer effect on border */}
      {isVisible && (
        <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent_0%,var(--accent2)_30%,var(--accent)_50%,var(--accent2)_70%,transparent_100%)] bg-[length:200%_100%] animate-[navShimmer_0.9s_ease_forwards] opacity-60" />
      )}

      <a href="#hero" className="font-['Fraunces'] text-lg italic text-[var(--white)] tracking-tight no-underline">
        Manou.dev
      </a>

      <ul className="flex gap-10 list-none">
        {navItems.map((item, index) => (
          <li
            key={item.name}
            style={{
              transitionDelay: `${0.22 + index * 0.08}s`,
            }}
            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          >
            <a
              href={item.path}
              className="relative text-[var(--text-mid)] no-underline text-xs tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[var(--white)] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

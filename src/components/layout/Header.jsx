import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-[var(--border)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Shimmer accent line at bottom */}
      {(isScrolled || location.pathname !== '/') && (
        <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent_0%,var(--accent2)_30%,var(--accent)_50%,var(--accent2)_70%,transparent_100%)] bg-[length:200%_100%] animate-[navShimmer_1.2s_ease_forwards] opacity-60" />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="font-['Fraunces'] text-xl italic text-[var(--white)] tracking-tight no-underline hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-2"
        >
          <span>Manou.dev</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block opacity-80" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative no-underline text-xs tracking-[0.15em] uppercase font-['DM_Mono'] transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[var(--accent)] font-medium after:content-[\'\'] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-[var(--accent)]'
                    : 'text-[var(--text-mid)] hover:text-[var(--white)] after:content-[\'\'] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] after:transition-[width] after:duration-300 hover:after:w-full'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Quick status pill */}
          <Link
            to="/contact"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] text-[11px] text-[var(--text-mid)] hover:border-[var(--accent)] hover:text-[var(--white)] transition-colors duration-200 tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf7d] animate-[pulse_2.5s_infinite]" />
            <span>Dispo</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[var(--white)] p-2 hover:text-[var(--accent)] transition-colors"
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 py-6 animate-[fadeIn_0.2s_ease-out]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-[0.15em] uppercase font-['DM_Mono'] py-2 border-b border-[var(--border)] transition-colors ${
                    isActive
                      ? 'text-[var(--accent)] font-medium pl-2 border-l-2 border-l-[var(--accent)]'
                      : 'text-[var(--text-mid)] hover:text-[var(--white)]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-[var(--text-dim)]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4caf7d]" />
                Antananarivo, Madagascar
              </span>
              <a
                href="mailto:lenepveumanou@gmail.com"
                className="text-[var(--accent)] hover:underline"
              >
                Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

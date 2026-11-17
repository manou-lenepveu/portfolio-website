import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-['DM_Mono'] text-[var(--text-dim)]">
          <Link
            to="/"
            className="font-['Fraunces'] text-base italic text-[var(--white)] tracking-tight no-underline hover:text-[var(--accent)] transition-colors"
          >
            Manou.dev
          </Link>
          <span className="hidden sm:inline text-[var(--muted)]">/</span>
          <span>© 2026 Alda Manou Lenepveu Rabeniharisoa</span>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex items-center gap-6 text-[11px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]">
          <Link to="/" className="hover:text-[var(--white)] transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="hover:text-[var(--white)] transition-colors">
            À propos
          </Link>
          <Link to="/projects" className="hover:text-[var(--white)] transition-colors">
            Projets
          </Link>
          <Link to="/contact" className="hover:text-[var(--white)] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Location & Back to Top */}
        <div className="flex items-center gap-6 text-[11px] font-['DM_Mono'] text-[var(--text-dim)]">
          <span>Antananarivo, Madagascar</span>
          <button
            onClick={scrollToTop}
            className="p-2 border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--white)] transition-colors"
            title="Remonter en haut de page"
            aria-label="Remonter en haut de page"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="text-center pt-8 mt-8 border-t border-[rgba(255,255,255,0.03)] text-[10px] font-['DM_Mono'] text-[var(--text-dim)]">
        Conçu &amp; développé avec passion et soin ^-^
      </div>
    </footer>
  );
};

export default Footer;

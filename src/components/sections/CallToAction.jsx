import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ArrowRight, Github, Linkedin } from 'lucide-react';

const CallToAction = () => {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lenepveumanou@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="px-6 md:px-12 py-32 md:py-48 border-t border-[var(--border)] text-center bg-[var(--bg)] relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent)] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      {/* Label du haut */}
      <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-8">
        Travaillons ensemble
      </span>
      
      {/* Titre géant */}
      <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-[clamp(44px,8vw,112px)] font-light text-[var(--white)] tracking-[-0.04em] leading-[0.92] mb-12">
        Disons-nous<br />
        <em className="italic text-[var(--accent)]">bonjour.</em>
      </h2>

      {/* Email + Copy button */}
      <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href="mailto:lenepveumanou@gmail.com"
          className="text-[var(--white)] no-underline font-['DM_Mono'] text-lg md:text-2xl tracking-[0.05em] border-b border-[var(--muted)] pb-2 transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          lenepveumanou@gmail.com
        </a>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] hover:border-[var(--accent)] text-[11px] font-['DM_Mono'] text-[var(--text-mid)] hover:text-[var(--white)] transition-colors"
          title="Copier l'adresse email"
        >
          {copied ? (
            <>
              <Check size={13} className="text-[#4caf7d]" />
              <span className="text-[#4caf7d]">Copié !</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copier</span>
            </>
          )}
        </button>
      </div>

      {/* Button to Contact Page */}
      <div className="reveal reveal-delay-2 mb-16">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-[var(--white)] border border-[var(--muted)] px-8 py-3.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-300 group"
        >
          <span>Ouvrir le formulaire de contact</span>
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Socials & Meta */}
      <div className="reveal reveal-delay-3 flex flex-wrap justify-center items-center gap-8 md:gap-12 pt-8 border-t border-[var(--border)] max-w-xl mx-auto">
        <a 
          href="https://github.com/manou-lenepveu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--white)]"
        >
          <Github size={14} />
          <span>GitHub</span>
        </a>

        <a 
          href="https://www.linkedin.com/in/manou-lenepveu-47306733b" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--white)]"
        >
          <Linkedin size={14} />
          <span>LinkedIn</span>
        </a>

        <span className="text-[11px] tracking-[0.15em] uppercase text-[var(--text-dim)]">
          Antananarivo (GMT+3)
        </span>
      </div>
    </section>
  );
};

export default CallToAction;

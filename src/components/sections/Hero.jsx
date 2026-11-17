import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 relative overflow-hidden bg-[var(--bg)] pt-24">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[length:80px_80px] opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />

      {/* Subtle ambient glow in background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-[160px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Availability Badge */}
        <div className="flex items-center gap-3 mb-6 text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] opacity-0 animate-[fadeUp_0.8s_0.2s_forwards]">
          <span className="w-8 h-[1px] bg-[var(--accent)]" />
          <span className="flex items-center gap-2 text-[var(--text-dim)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf7d] animate-[pulse_2.5s_infinite]" />
            Disponible pour toute mission
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-['Fraunces'] text-[clamp(48px,9vw,130px)] font-light leading-[0.92] text-[var(--white)] tracking-[-0.04em] opacity-0 animate-[fadeUp_0.9s_0.4s_forwards]">
          <em className="italic text-[var(--accent)]">Alda Manou</em><br />
          Lenepveu Rabeniharisoa
        </h1>

        {/* Hero Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8 opacity-0 animate-[fadeUp_0.9s_0.7s_forwards]">
          <div className="max-w-[420px] text-[var(--text-mid)] text-[13px] leading-[1.8] space-y-2">
            <p className="text-[var(--white)] font-medium">
              Développeuse Full-Stack & Conceptrice Web
            </p>
            <p>
              Conception d'applications web élégantes, performantes et scalables. 
              Basée à Antananarivo, disponible dans le monde entier en télétravail.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-[var(--white)] no-underline text-xs tracking-[0.1em] uppercase border border-[var(--muted)] px-7 py-3.5 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] group"
            >
              <span>Voir les Projets</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[var(--text-mid)] hover:text-[var(--white)] text-xs tracking-[0.1em] uppercase px-5 py-3.5 transition-colors duration-200"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <span className="hidden md:flex absolute bottom-10 right-12 [writing-mode:vertical-rl] text-[10px] tracking-[0.2em] uppercase text-[var(--text-dim)] items-center gap-3 opacity-0 animate-[fadeIn_1s_1.2s_forwards] after:content-[''] after:block after:w-[1px] after:h-12 after:bg-[linear-gradient(to_bottom,var(--text-dim),transparent)] after:animate-[scrollLine_2s_1.5s_infinite]">
        Faire défiler
      </span>
    </section>
  );
};

export default Hero;

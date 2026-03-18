import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className='min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 relative overflow-hidden bg-[var(--bg)]'>
      {/* ligne de grille en arriere plan */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[length:80px_80px] opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_40%,transparent_100%)]'></div>

      <div className='relative z-10'>
        <div className="flex items-center gap-3 mb-6 text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] opacity-0 animate-[fadeUp_0.8s_0.2s_forwards]">
          <span className="w-8 h-[1px] bg-[var(--accent)]" />
          <span className="flex items-center gap-2 text-[var(--text-dim)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf7d] animate-[pulse_2.5s_infinite]" />
            Disponible pour toute mission!
          </span>
        </div>

        <h1 className="font-['Fraunces'] text-[clamp(64px,10vw,140px)] font-light leading-[0.9] text-[var(--white)] tracking-[-0.04em] opacity-0 animate-[fadeUp_0.9s_0.4s_forwards]">
            <em className="italic text-[var(--accent)]">Alda Manou</em><br />
            Lenepveu Rabeniharisoa
          </h1>

        <div className="flex flex-col md:flex-row justify-between items-end mt-12 opacity-0 animate-[fadeUp_0.9s_0.7s_forwards]">
            <p className="max-w-[360px] text-[var(--text-mid)] text-[13px] leading-[1.8]">
              Développeuse full-stack<br />
              Antananarivo.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-[var(--white)] no-underline text-xs tracking-[0.1em] uppercase border border-[var(--muted)] px-7 py-3.5 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] group"
            >
              Voir les Projets
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
      </div>

      <span className="absolute bottom-10 right-12 [writing-mode:vertical-rl] text-[10px] tracking-[0.2em] uppercase text-[var(--text-dim)] flex items-center gap-3 opacity-0 animate-[fadeIn_1s_1.2s_forwards] after:content-[''] after:block after:w-[1px] after:h-12 after:bg-[linear-gradient(to_bottom,var(--text-dim),transparent)] after:animate-[scrollLine_2s_1.5s_infinite]">
        Scroll
      </span>
    </section>
  );
};

export default Hero;


import { useEffect, useRef } from 'react';

const Contact = () => {
  // animation de "révélation" au scroll
  const sectionRef = useRef(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="px-6 md:px-12 py-32 md:py-48 border-t border-[var(--border)] text-center bg-[var(--bg)]"
    >
      {/* Label du haut */}
      <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-8">
        Travaillons ensemble
      </span>
      
      {/* Titre géant */}
      <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-[clamp(48px,8vw,112px)] font-light text-[var(--white)] tracking-[-0.04em] leading-[0.9] mb-12">
        Disons-nous<br />
        <em className="italic text-[var(--accent)]">bonjour.</em>
      </h2>

      {/* Email */}
      <a
        href="mailto:votremail@exemple.com"
        className="reveal reveal-delay-2 inline-block text-[var(--white)] no-underline font-['DM_Mono'] text-lg md:text-2xl tracking-[0.05em] border-b border-[var(--muted)] pb-2 transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] mb-20"
      >
        lenepveumanou@gmail.com
      </a>

      {/* Socials */}
      <div className="reveal reveal-delay-3 flex justify-center gap-10">
        <a href="https://github.com/manou-lenepveu" className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--white)]">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/manou-lenepveu-47306733b" className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--white)]">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
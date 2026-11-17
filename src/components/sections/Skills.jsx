import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Server, Layout as LayoutIcon, Terminal, ArrowUpRight } from 'lucide-react';

const Skills = () => {
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
      { threshold: 0.15 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const capabilities = [
    {
      index: "01",
      icon: LayoutIcon,
      title: "Frontend & UI Design",
      description:
        "Création d'interfaces élégantes, ultra-réactives et centrées sur l'utilisateur. Respect scrupuleux des grilles, de la typographie et des micro-animations.",
      techs: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      index: "02",
      icon: Server,
      title: "Backend & Architectures APIs",
      description:
        "Conception de serveurs robustes, d'APIs RESTful sécurisées et de bases de données fiables pour propulser des applications complètes et pérennes.",
      techs: ["Node.js", "Express", "Python", "PostgreSQL", "REST APIs"]
    },
    {
      index: "03",
      icon: Terminal,
      title: "Workflow & Qualité de code",
      description:
        "Pratiques modernes de développement : code typé, architecture modulaire, contrôle de version rigoureux et optimisation des performances de chargement.",
      techs: ["Git / GitHub", "Linux & Bash", "ESLint", "Responsive Web", "SEO"]
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 md:px-12 py-28 md:py-40 border-t border-[var(--border)] bg-[var(--bg)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              01 / À propos & Expertise
            </span>
            <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-[clamp(36px,5vw,68px)] font-light text-[var(--white)] tracking-[-0.03em] leading-[1.05] max-w-2xl">
              L'alliance du code robuste et de <em className="italic text-[var(--accent)]">l'élégance visuelle</em>.
            </h2>
          </div>

          <div className="reveal reveal-delay-2 max-w-md">
            <p className="text-[var(--text-mid)] text-[13px] leading-[1.8] mb-6">
              Je suis Manou, développeuse full-stack passionnée par la construction de produits web qui marient performance technique et expérience utilisateur sans compromis.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--accent)] hover:text-[var(--white)] transition-colors group"
            >
              <span>Découvrir mon parcours complet</span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.index}
                className={`reveal reveal-delay-${i + 1} p-8 rounded-none border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent2)] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
                    <span className="text-xs font-['DM_Mono'] text-[var(--accent)] font-medium">
                      {cap.index}
                    </span>
                    <Icon size={18} className="text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>

                  <h3 className="font-['Fraunces'] text-2xl text-[var(--white)] mb-4 font-normal">
                    {cap.title}
                  </h3>

                  <p className="text-[var(--text-mid)] text-xs leading-[1.8] mb-8">
                    {cap.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {cap.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase font-['DM_Mono'] tracking-wider px-2.5 py-1 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-mid)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Metrics / Snapshot */}
        <div className="reveal reveal-delay-3 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 border border-[var(--border)] bg-[rgba(17,17,17,0.5)]">
          <div>
            <span className="block font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] mb-1">
              Full-Stack
            </span>
            <span className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]">
              Architecture & UI
            </span>
          </div>

          <div>
            <span className="block font-['Fraunces'] text-3xl md:text-4xl text-[var(--accent)] mb-1">
              React 19
            </span>
            <span className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]">
              Écosystème moderne
            </span>
          </div>

          <div>
            <span className="block font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] mb-1">
              100%
            </span>
            <span className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]">
              Responsive & Optimisé
            </span>
          </div>

          <div>
            <span className="block font-['Fraunces'] text-3xl md:text-4xl text-[var(--accent)] mb-1">
              Antananarivo
            </span>
            <span className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]">
              Disponible en remote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

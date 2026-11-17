import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';

const FeaturedProjects = () => {
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

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const featured = [
    {
      id: "01",
      title: "Aura Commerce",
      category: "Full-Stack Web App",
      description:
        "Plateforme e-commerce haute performance avec gestion dynamique de panier, authentification sécurisée, intégration Stripe et panneau d'administration des produits.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Stripe API"],
      demoUrl: "https://github.com/manou-lenepveu",
      githubUrl: "https://github.com/manou-lenepveu",
      highlights: ["Panier persistant & temps réel", "Paiement sécurisé", "Design minimaliste & accessible"]
    },
    {
      id: "02",
      title: "Pulse Analytics Studio",
      category: "Data & Dashboard",
      description:
        "Tableau de bord interactif pour la visualisation de métriques en temps réel. Filtres avancés par période, graphiques dynamiques et gestion de KPIs complexes.",
      technologies: ["React", "Chart.js", "REST APIs", "CSS Grid", "Lucide Icons"],
      demoUrl: "https://github.com/manou-lenepveu",
      githubUrl: "https://github.com/manou-lenepveu",
      highlights: ["Graphiques haute fréquence", "Export de données", "Interface sombre ergonomique"]
    },
    {
      id: "03",
      title: "Atmos Weather PWA",
      category: "Progressive Web App",
      description:
        "Application météorologique moderne exploitant la géolocalisation et des prévisions multi-jours précises, avec support offline complet et animations thématiques.",
      technologies: ["React", "OpenWeather API", "PWA / Service Workers", "Tailwind CSS"],
      demoUrl: "https://github.com/manou-lenepveu",
      githubUrl: "https://github.com/manou-lenepveu",
      highlights: ["Fonctionnement hors-ligne", "Géolocalisation automatique", "Animations fluides"]
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="px-6 md:px-12 py-28 md:py-40 border-t border-[var(--border)] bg-[var(--bg)] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              02 / Sélection de Travaux
            </span>
            <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-[clamp(36px,5vw,68px)] font-light text-[var(--white)] tracking-[-0.03em] leading-[1.05]">
              Projets récents & <em className="italic text-[var(--accent)]">réalisations</em>.
            </h2>
          </div>

          <div className="reveal reveal-delay-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 text-[var(--white)] text-xs tracking-[0.12em] uppercase border border-[var(--muted)] px-6 py-3.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all group"
            >
              <span>Voir tous les projets</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16 mb-20">
          {featured.map((project, index) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${(index % 3) + 1} border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12 hover:border-[var(--accent2)] transition-all duration-300 group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-['DM_Mono'] text-xs text-[var(--accent)] tracking-widest">
                      {project.id} /
                    </span>
                    <span className="text-[11px] font-['DM_Mono'] uppercase tracking-[0.15em] text-[var(--text-dim)]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] font-normal group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-mid)] text-xs md:text-sm leading-[1.8] max-w-xl">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-[var(--text-dim)]">
                        <span className="w-1.5 h-[1px] bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-['DM_Mono'] uppercase tracking-wider px-3 py-1 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-mid)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--white)] hover:text-[var(--accent)] transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Explorer</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--text-dim)] hover:text-[var(--white)] transition-colors"
                    >
                      <Github size={14} />
                      <span>Code source</span>
                    </a>
                  </div>
                </div>

                {/* Right: Abstract UI / Visual Mockup */}
                <div className="lg:col-span-5 bg-[var(--bg)] border border-[var(--border)] p-6 md:p-8 rounded-none relative overflow-hidden group-hover:border-[var(--accent2)] transition-colors">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-6 text-[10px] text-[var(--text-dim)] font-['DM_Mono']">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--muted)]" />
                      <span className="w-2 h-2 rounded-full bg-[var(--muted)]" />
                      <span className="w-2 h-2 rounded-full bg-[var(--muted)]" />
                    </span>
                    <span>{project.title.toLowerCase().replace(/\s+/g, '-')}.preview</span>
                  </div>

                  <div className="space-y-3 font-['DM_Mono'] text-xs text-[var(--text-dim)]">
                    <div className="flex items-center justify-between text-[11px] text-[var(--text-mid)]">
                      <span>// Architecture</span>
                      <Code size={13} className="text-[var(--accent)]" />
                    </div>
                    <p className="text-[var(--accent)] text-xs">
                      const project = &apos;{project.title}&apos;;
                    </p>
                    <div className="p-3 bg-[var(--surface)] border border-[var(--border)] text-[11px] text-[var(--text-mid)]">
                      <p className="text-[var(--accent2)] mb-1">status: &apos;Production-Ready&apos;,</p>
                      <p>stack: [{project.technologies.slice(0, 3).map(t => `'${t}'`).join(', ')}]</p>
                    </div>
                    <div className="h-16 flex items-center justify-center border border-dashed border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--text-dim)]">
                      Interactive Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for full gallery */}
        <div className="reveal reveal-delay-2 text-center pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-dim)] tracking-wider uppercase mb-4">
            Envie de découvrir d&apos;autres réalisations et expérimentations ?
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase text-[var(--accent)] hover:text-[var(--white)] transition-colors"
          >
            <span>Consulter la galerie complète de projets</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

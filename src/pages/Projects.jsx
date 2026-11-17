import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Code, 
  Layers, 
  Search, 
  Sparkles,
  Terminal,
  Database,
  ArrowRight
} from 'lucide-react';

const projectsData = [
  {
    id: "01",
    title: "Aura Commerce",
    category: "Full-Stack",
    year: "2025",
    status: "Production-Ready",
    description:
      "Plateforme e-commerce haute performance intégrant un catalogue de produits dynamique, une gestion de panier réactive, une authentification sécurisée JWT et le règlement par Stripe.",
    highlights: [
      "Tunnel de commande complet avec intégration Stripe sécurisée",
      "Panier d'achat synchronisé et gestion d'état réactive",
      "Tableau de bord d'administration pour la gestion des stocks",
      "Architecture API REST sous Node.js & Express"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Stripe API", "PostgreSQL"],
    demoUrl: "https://github.com/manou-lenepveu",
    githubUrl: "https://github.com/manou-lenepveu",
    type: "Web Application"
  },
  {
    id: "02",
    title: "Pulse Analytics Studio",
    category: "APIs & Data",
    year: "2025",
    status: "Open Source",
    description:
      "Tableau de bord analytique interactif dédié à la visualisation de métriques en temps réel. Analyse de tendances, exports de données et personnalisation de KPIs.",
    highlights: [
      "Visualisation graphique interactive via Chart.js",
      "Filtres par plage temporelle dynamique et agrégation",
      "Interface ergonomique en mode sombre haute lisibilité",
      "Optimisation des temps de rendu sur de gros volumes de données"
    ],
    technologies: ["React", "Chart.js", "Tailwind CSS", "REST APIs", "CSS Grid", "Lucide Icons"],
    demoUrl: "https://github.com/manou-lenepveu",
    githubUrl: "https://github.com/manou-lenepveu",
    type: "Dashboard & Analytics"
  },
  {
    id: "03",
    title: "TaskFlow Collaborative Kanban",
    category: "Full-Stack",
    year: "2024",
    status: "Projet Collaboratif",
    description:
      "Application de productivité agile organisée en colonnes Kanban avec glisser-déposer fluide, attribution de tâches, gestion des priorités et suivi d'avancement.",
    highlights: [
      "Système de drag-and-drop interactif haute précision",
      "Création, édition et archivage de tickets en direct",
      "Gestion multi-utilisateurs et persistance des colonnes",
      "Backend léger avec base de données MongoDB"
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    demoUrl: "https://github.com/manou-lenepveu",
    githubUrl: "https://github.com/manou-lenepveu",
    type: "Productivity App"
  },
  {
    id: "04",
    title: "Atmos Weather PWA",
    category: "Outils & PWA",
    year: "2024",
    status: "Progressive Web App",
    description:
      "Application météo progressive tirant parti des Service Workers pour offrir une expérience hors-ligne complète, des alertes locales et des prévisions multi-jours précises.",
    highlights: [
      "Géolocalisation automatique avec recherche mondiale de villes",
      "Prévisions heure par heure et tendances sur 7 jours",
      "Mise en cache offline via Service Workers (PWA)",
      "Animations météo dynamiques basées sur les conditions réelles"
    ],
    technologies: ["React", "OpenWeather API", "PWA", "Tailwind CSS", "LocalStorage API"],
    demoUrl: "https://github.com/manou-lenepveu",
    githubUrl: "https://github.com/manou-lenepveu",
    type: "Mobile/Web PWA"
  },
  {
    id: "05",
    title: "DevSnippet Hub",
    category: "Frontend & UI",
    year: "2024",
    status: "Outil Développeur",
    description:
      "Gestionnaire et éditeur de snippets de code pour développeurs. Coloration syntaxique instantanée, classification par langages, recherche plein texte et export rapide.",
    highlights: [
      "Coloration syntaxique multi-langages via PrismJS",
      "Filtrage instantané par tags, favoris et mot-clé",
      "Copie de code en 1 clic avec notification visuelle",
      "Stockage local persistant sans dépendance serveur"
    ],
    technologies: ["React", "PrismJS", "Tailwind CSS", "Framer Motion", "Web Storage API"],
    demoUrl: "https://github.com/manou-lenepveu",
    githubUrl: "https://github.com/manou-lenepveu",
    type: "Developer Tool"
  },
  {
    id: "06",
    title: "Artisan Studio Showcase",
    category: "Frontend & UI",
    year: "2024",
    status: "Site Vitrine & Portfolio",
    description:
      "Site vitrine pour studio créatif conçu selon une grille éditoriale asymétrique. Micro-interactions sur-mesure, typographie soignée et score Lighthouse parfait.",
    highlights: [
      "Mise en page éditoriale avec navigation asymétrique",
      "Transitions fluides entre les sections",
      "Performance web optimale (score 100/100 Lighthouse)",
      "Accessibilité sémantique et responsive irréprochable"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "SVG Canvas", "Responsive UI"],
    demoUrl: "https://github.com/manou-lenepveu",
    githubUrl: "https://github.com/manou-lenepveu",
    type: "Creative Portfolio"
  }
];

const categories = ["Tous", "Full-Stack", "Frontend & UI", "APIs & Data", "Outils & PWA"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const pageRef = useRef(null);

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
      { threshold: 0.05 }
    );

    const current = pageRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [activeCategory, searchQuery]);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "Tous" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={pageRef} className="pt-32 pb-24 px-6 md:px-12 bg-[var(--bg)] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 pb-12 border-b border-[var(--border)]">
          <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-6 font-['DM_Mono']">
            02 / Galerie des travaux
          </span>
          <h1 className="reveal reveal-delay-1 font-['Fraunces'] text-[clamp(40px,7vw,96px)] font-light text-[var(--white)] tracking-[-0.03em] leading-[0.95] mb-8">
            Une sélection de réalisations & <em className="italic text-[var(--accent)]">systèmes web</em>.
          </h1>
          <p className="reveal reveal-delay-2 text-[var(--text-mid)] text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Chaque projet représente un défi technique et visuel : de l&apos;architecture backend à l&apos;ergonomie de l&apos;interface utilisateur.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-16 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--border)]">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-['DM_Mono'] tracking-wider uppercase px-4 py-2 border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)] font-medium'
                      : 'bg-[var(--surface)] text-[var(--text-mid)] border-[var(--border)] hover:border-[var(--accent2)] hover:text-[var(--white)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-dim)]"
              />
              <input
                type="text"
                placeholder="Rechercher (tech, titre...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--surface)] border border-[var(--border)] text-xs font-['DM_Mono'] text-[var(--white)] pl-9 pr-4 py-2 placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
          </div>

          {/* Results count */}
          <div className="flex justify-between items-center text-xs font-['DM_Mono'] text-[var(--text-dim)]">
            <span>
              {filteredProjects.length} résultat{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </span>
            <span className="hidden sm:inline">
              Filtre actif : <span className="text-[var(--accent)]">{activeCategory}</span>
            </span>
          </div>
        </div>

        {/* Projects Grid / List */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-[var(--border)] bg-[var(--surface)] p-8">
            <p className="text-sm font-['DM_Mono'] text-[var(--text-mid)] mb-4">
              Aucun projet ne correspond à vos critères de recherche.
            </p>
            <button
              onClick={() => {
                setActiveCategory("Tous");
                setSearchQuery("");
              }}
              className="text-xs uppercase font-['DM_Mono'] tracking-wider text-[var(--accent)] underline hover:text-[var(--white)]"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="space-y-16 mb-28">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`reveal reveal-delay-${(index % 3) + 1} border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12 hover:border-[var(--accent2)] transition-all duration-300 group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-['DM_Mono'] text-xs text-[var(--accent)] font-medium">
                        {project.id} /
                      </span>
                      <span className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.15em] px-2.5 py-0.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-dim)]">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.15em] text-[var(--accent2)]">
                        {project.status}
                      </span>
                      <span className="text-[10px] font-['DM_Mono'] text-[var(--text-dim)] ml-auto">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="font-['Fraunces'] text-2xl md:text-4xl text-[var(--white)] font-normal group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-xs md:text-sm text-[var(--text-mid)] leading-[1.8] max-w-xl">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)] block">
                        Points techniques clés :
                      </span>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-xs text-[var(--text-mid)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0 opacity-70" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Pills */}
                    <div className="pt-4 border-t border-[var(--border)]">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-['DM_Mono'] uppercase tracking-wider px-3 py-1 bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-6 pt-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--white)] hover:text-[var(--accent)] transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Explorer le projet</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--text-dim)] hover:text-[var(--white)] transition-colors"
                      >
                        <Github size={14} />
                        <span>Code source</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Code & Architecture Mockup */}
                  <div className="lg:col-span-5 bg-[var(--bg)] border border-[var(--border)] p-6 rounded-none relative overflow-hidden group-hover:border-[var(--accent2)] transition-colors">
                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-5 text-[10px] text-[var(--text-dim)] font-['DM_Mono']">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[var(--muted)]" />
                        <span className="w-2 h-2 rounded-full bg-[var(--muted)]" />
                        <span className="w-2 h-2 rounded-full bg-[var(--muted)]" />
                      </span>
                      <span>{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.config.ts</span>
                    </div>

                    <div className="space-y-3 font-['DM_Mono'] text-xs">
                      <div className="text-[11px] text-[var(--text-dim)] flex items-center justify-between">
                        <span>// Modules & Architecture</span>
                        <Code size={13} className="text-[var(--accent)]" />
                      </div>

                      <div className="p-3 bg-[var(--surface)] border border-[var(--border)] text-[11px] space-y-1">
                        <p className="text-[var(--accent)] font-mono">
                          export const projectConfig = &#123;
                        </p>
                        <p className="text-[var(--text-mid)] pl-4">
                          title: <span className="text-[var(--white)]">&apos;{project.title}&apos;</span>,
                        </p>
                        <p className="text-[var(--text-mid)] pl-4">
                          type: <span className="text-[var(--white)]">&apos;{project.type}&apos;</span>,
                        </p>
                        <p className="text-[var(--text-mid)] pl-4">
                          stack: <span className="text-[var(--accent2)]">[{project.technologies.slice(0, 3).map(t => `'${t}'`).join(', ')}]</span>,
                        </p>
                        <p className="text-[var(--text-mid)] pl-4">
                          status: <span className="text-[#4caf7d]">&apos;{project.status}&apos;</span>
                        </p>
                        <p className="text-[var(--accent)] font-mono">&#125;;</p>
                      </div>

                      <div className="p-3 border border-dashed border-[var(--border)] text-[10px] uppercase tracking-wider text-[var(--text-dim)] text-center">
                        Architecture Modulaire &bull; Sécurisée &bull; Évolutive
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Contact Invitation */}
        <div className="reveal border border-[var(--border)] bg-[var(--surface)] p-10 md:p-14 text-center">
          <span className="text-[11px] font-['DM_Mono'] uppercase tracking-[0.2em] text-[var(--accent)] block mb-4">
            Collaboration & Projets
          </span>
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] font-normal mb-4">
            Vous avez une idée ou un besoin spécifique ?
          </h2>
          <p className="text-xs md:text-sm text-[var(--text-mid)] max-w-xl mx-auto mb-8 leading-relaxed">
            Je suis disponible pour étudier votre projet, proposer une architecture adaptée et concevoir une solution clé en main.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.12em] bg-[var(--white)] text-[var(--bg)] px-8 py-4 hover:bg-[var(--accent)] transition-colors font-medium"
          >
            <span>Parlons de votre projet</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

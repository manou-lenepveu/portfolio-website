import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Download,
  Mail,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

const About = () => {
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
      { threshold: 0.08 }
    );

    const current = pageRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const skillGroups = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      description: "Interfaces modernes, fluides et centrées sur l'utilisateur.",
      skills: ["React 19", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3", "Responsive Design"]
    },
    {
      title: "Backend & Données",
      icon: Cpu,
      description: "Architectures fiables, sécurisées et performantes.",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "Authentification JWT"]
    },
    {
      title: "Workflow & Outils",
      icon: Terminal,
      description: "Environnement de travail moderne et rigoureux.",
      skills: ["Git & GitHub", "Vite", "Linux / Bash", "Postman", "ESLint / Prettier", "npm / yarn", "Vercel / Netlify"]
    },
    {
      title: "Design & Conception",
      icon: Layers,
      description: "De l'idée à l'écran, avec soin du détail.",
      skills: ["Figma to Code", "UI / UX Design", "Accessibilité Web (a11y)", "Design Systems", "Web Performance", "SEO Technique"]
    }
  ];

  const milestones = [
    {
      period: "2024 — Aujourd'hui",
      role: "Développeuse Full-Stack & Conceptrice Web",
      context: "Projets Indépendants & Collaborations",
      description:
        "Conception et développement d'applications web sur mesure : plateformes e-commerce interactives, dashboards analytiques avec graphiques en temps réel, PWAs météo et portfolios personnalisés. Optimisation continue des performances et de l'accessibilité."
    },
    {
      period: "2023 — 2024",
      role: "Approfondissement Écosystème Moderne",
      context: "Architecture Logicielle & React",
      description:
        "Immersion intensive dans l'écosystème React, TypeScript et les architectures backend Node.js. Création d'APIs REST modulaires, gestion d'états complexes et intégration de services tiers (paiements Stripe, webhooks, métriques)."
    },
    {
      period: "2022 — 2023",
      role: "Fondations en Informatique & Algorithmique",
      context: "Sciences Informatiques & Web Fondamental",
      description:
        "Acquisition des piliers de l'ingénierie logicielle : algorithmique, structures de données, logique de programmation (C, Python), ainsi que les standards fondamentaux du web (HTML sémantique, CSS moderne, JavaScript pur)."
    }
  ];

  const values = [
    {
      number: "01",
      title: "Rigueur & Propreté du Code",
      text: "Un code propre est un code qui dure. J'accorde une importance primordiale à la lisibilité, à la modularité et à la maintenabilité à long terme."
    },
    {
      number: "02",
      title: "Sensibilité Visuelle & Typographique",
      text: "Le développement ne s'arrête pas à la logique serveur. L'expérience visuelle, le rythme des espacements et la fluidité des interactions font toute la différence."
    },
    {
      number: "03",
      title: "Curiosité & Veille Permanente",
      text: "L'écosystème web évolue constamment. J'explore régulièrement les nouveaux outils et frameworks pour toujours proposer les approches les plus efficientes."
    }
  ];

  return (
    <div ref={pageRef} className="pt-32 pb-24 px-6 md:px-12 bg-[var(--bg)] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20 pb-12 border-b border-[var(--border)]">
          <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-6 font-['DM_Mono']">
            01 / À propos de moi
          </span>
          <h1 className="reveal reveal-delay-1 font-['Fraunces'] text-[clamp(40px,7vw,96px)] font-light text-[var(--white)] tracking-[-0.03em] leading-[0.95] mb-8">
            Construire avec rigueur,<br />
            concevoir avec <em className="italic text-[var(--accent)]">sensibilité</em>.
          </h1>
          <p className="reveal reveal-delay-2 text-[var(--text-mid)] text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Je suis Alda Manou Lenepveu Rabeniharisoa, développeuse full-stack passionnée par la rencontre entre la logique architecturale et l'art de l'interface utilisateur.
          </p>
        </div>

        {/* Bio & Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[13px] md:text-sm text-[var(--text)] leading-[1.9]">
            <p className="reveal text-[var(--white)] font-medium text-base">
              Basée à Antananarivo (Madagascar), je conçois des solutions web fiables, rapides et agréables à utiliser.
            </p>
            <p className="reveal reveal-delay-1 text-[var(--text-mid)]">
              Mon parcours est né d'une fascination pour la façon dont quelques lignes de code peuvent transformer une idée abstraite en un outil fonctionnel, interactif et universellement accessible. Au fil de mes projets, j'ai développé une double expertise : bâtir des fondations backend robustes tout en soignant les moindres détails d'une interface frontend.
            </p>
            <p className="reveal reveal-delay-2 text-[var(--text-mid)]">
              Que ce soit pour une plateforme e-commerce complète, un tableau de bord analytique ou une application web métier, j'aime aborder chaque projet sous un angle holistique : architecture de l'information, performance brute, propreté du code et raffinement visuel.
            </p>
            <p className="reveal reveal-delay-3 text-[var(--text-mid)]">
              En dehors du code, je m'intéresse au design graphique, à la typographie éditoriale et à l'exploration des nouvelles technologies qui façonnent le web moderne.
            </p>

            <div className="reveal reveal-delay-4 pt-6 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] bg-[var(--white)] text-[var(--bg)] px-6 py-3.5 hover:bg-[var(--accent)] transition-colors font-medium"
              >
                <Mail size={14} />
                <span>Me contacter</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] border border-[var(--border)] text-[var(--white)] px-6 py-3.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <span>Explorer mes projets</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Sidebar / Quick Info Card */}
          <div className="lg:col-span-5 reveal reveal-delay-2 border border-[var(--border)] bg-[var(--surface)] p-8 space-y-8">
            <div className="border-b border-[var(--border)] pb-6">
              <span className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
                Fiche d&apos;identité
              </span>
              <h3 className="font-['Fraunces'] text-2xl text-[var(--white)] font-normal">
                Alda Manou Lenepveu
              </h3>
              <p className="text-xs text-[var(--text-dim)] mt-1 font-['DM_Mono']">
                Full-Stack Developer
              </p>
            </div>

            <div className="space-y-4 text-xs font-['DM_Mono']">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[var(--text-dim)] block text-[10px] uppercase">Localisation</span>
                  <span className="text-[var(--white)]">Antananarivo, Madagascar</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[var(--text-dim)] block text-[10px] uppercase">Disponibilité</span>
                  <span className="text-[var(--white)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4caf7d] animate-[pulse_2.5s_infinite]" />
                    Missions Freelance & CDI
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[var(--text-dim)] block text-[10px] uppercase">Mode de travail</span>
                  <span className="text-[var(--white)]">Télétravail (Remote) / Hybride</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[var(--text-dim)] block text-[10px] uppercase">Langues</span>
                  <span className="text-[var(--white)]">Français (Courant), Anglais (Pro), Malagasy</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)]">
              <span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)] block mb-3">
                Réseaux & Code
              </span>
              <div className="flex gap-4 text-xs font-['DM_Mono']">
                <a
                  href="https://github.com/manou-lenepveu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/manou-lenepveu-47306733b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Arsenal Matrix */}
        <div className="mb-28">
          <div className="mb-12">
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-2 font-['DM_Mono']">
              Compétences & Technologies
            </span>
            <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] font-normal">
              Un arsenal technique éprouvé.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className={`reveal reveal-delay-${idx + 1} border border-[var(--border)] bg-[var(--surface)] p-8 hover:border-[var(--accent2)] transition-colors`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-['Fraunces'] text-xl text-[var(--white)] font-normal">
                        {group.title}
                      </h3>
                      <p className="text-[11px] text-[var(--text-dim)] font-['DM_Mono']">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-['DM_Mono'] px-3 py-1.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline / Journey Milestones */}
        <div className="mb-28">
          <div className="mb-12">
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-2 font-['DM_Mono']">
              Chronologie
            </span>
            <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] font-normal">
              Parcours & Étapes Clés
            </h2>
          </div>

          <div className="space-y-8 relative before:content-[''] before:absolute before:left-3 md:before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--border)]">
            {milestones.map((milestone, idx) => (
              <div
                key={milestone.period}
                className={`reveal reveal-delay-${idx + 1} relative pl-10 md:pl-12 group`}
              >
                {/* Node indicator */}
                <div className="absolute left-[7px] md:left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)] -translate-x-1/2 ring-4 ring-[var(--bg)] group-hover:scale-125 transition-transform" />

                <div className="border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 hover:border-[var(--accent2)] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="font-['DM_Mono'] text-xs text-[var(--accent)] tracking-wider">
                      {milestone.period}
                    </span>
                    <span className="text-[11px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]">
                      {milestone.context}
                    </span>
                  </div>

                  <h3 className="font-['Fraunces'] text-xl md:text-2xl text-[var(--white)] font-normal mb-3">
                    {milestone.role}
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--text-mid)] leading-[1.8]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values / Work Philosophy */}
        <div className="mb-28">
          <div className="mb-12">
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-2 font-['DM_Mono']">
              Philosophie de travail
            </span>
            <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] font-normal">
              Ce qui guide chacune de mes réalisations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={val.number}
                className={`reveal reveal-delay-${idx + 1} border border-[var(--border)] bg-[var(--surface)] p-8 flex flex-col justify-between`}
              >
                <div>
                  <span className="font-['DM_Mono'] text-sm text-[var(--accent)] block mb-6">
                    {val.number} /
                  </span>
                  <h3 className="font-['Fraunces'] text-xl text-[var(--white)] mb-4 font-normal">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[var(--text-mid)] leading-[1.8]">
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="reveal border border-[var(--border)] bg-[var(--surface)] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-[11px] font-['DM_Mono'] uppercase tracking-[0.2em] text-[var(--accent)]">
              Prochaine étape
            </span>
            <h2 className="font-['Fraunces'] text-3xl md:text-5xl text-[var(--white)] font-light leading-tight">
              Envie de collaborer sur un <em className="italic text-[var(--accent)]">projet ambitieux</em> ?
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-mid)] leading-relaxed">
              Qu&apos;il s&apos;agisse de créer une nouvelle application de zéro ou de renforcer votre équipe technique, je serai ravie d&apos;échanger avec vous.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] bg-[var(--white)] text-[var(--bg)] px-8 py-4 hover:bg-[var(--accent)] transition-colors font-medium"
              >
                <span>Démarrer une conversation</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

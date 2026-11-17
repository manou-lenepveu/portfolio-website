import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const projectTypes = [
  "Application Full-Stack",
  "Frontend & UI Design",
  "Refonte / Optimisation",
  "Mission Freelance",
  "Autre opportunité"
];

const faqs = [
  {
    question: "Travaillez-vous entièrement à distance (Remote) ?",
    answer:
      "Oui, absolument. Basée à Antananarivo (fuseau UTC+3), j'ai l'habitude de collaborer à distance avec des clients et équipes internationales, en utilisant des outils de communication modernes (Slack, Discord, Google Meet, GitHub) et une méthodologie agile éprouvée."
  },
  {
    question: "Quels sont vos délais habituels de réalisation ?",
    answer:
      "Les délais varient selon l'envergure du projet. Un site vitrine ou portfolio interactif prend généralement 1 à 2 semaines, tandis qu'une application full-stack complète (e-commerce, SaaS, dashboard) demande entre 3 et 6 semaines de conception, développement et tests."
  },
  {
    question: "Quelles technologies privilégiez-vous ?",
    answer:
      "Mon écosystème de prédilection repose sur React 19, TypeScript, Tailwind CSS et Framer Motion côté frontend, complété par Node.js, Express, Python et PostgreSQL/MongoDB côté backend. Cette stack garantit performance, maintenabilité et modernité."
  },
  {
    question: "Comment se déroule la facturation et le paiement ?",
    answer:
      "La facturation peut s'effectuer au forfait (prix fixé selon le cahier des charges) ou au taux journalier (TJM) pour les missions longues. Un acompte est habituellement convenu au lancement, suivi de jalons transparents."
  },
  {
    question: "Assurez-vous un suivi après la livraison ?",
    answer:
      "Oui. Chaque projet livré bénéficie d'une période de garantie et de correction d'anomalies, ainsi que d'une documentation technique claire pour vous rendre autonome ou faciliter de futures évolutions."
  }
];

const Contact = () => {
  const pageRef = useRef(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Application Full-Stack',
    budget: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Copy email state
  const [copied, setCopied] = useState(false);

  // Local time state
  const [localTime, setLocalTime] = useState('');

  // FAQ accordion open states
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Update Antananarivo local time (UTC+3)
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Indian/Antananarivo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat('fr-FR', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lenepveumanou@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Veuillez renseigner votre nom.";
    }
    if (!formData.email.trim()) {
      errs.email = "Veuillez renseigner votre adresse email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Adresse email invalide.";
    }
    if (!formData.message.trim()) {
      errs.message = "Veuillez décrire brièvement votre projet ou votre message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Votre message doit contenir au moins 10 caractères.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Application Full-Stack',
      budget: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={pageRef} className="pt-32 pb-24 px-6 md:px-12 bg-[var(--bg)] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20 pb-12 border-b border-[var(--border)]">
          <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-6 font-['DM_Mono']">
            03 / Contact & Échange
          </span>
          <h1 className="reveal reveal-delay-1 font-['Fraunces'] text-[clamp(40px,7vw,96px)] font-light text-[var(--white)] tracking-[-0.03em] leading-[0.95] mb-8">
            Donnons forme à votre <em className="italic text-[var(--accent)]">prochaine idée</em>.
          </h1>
          <p className="reveal reveal-delay-2 text-[var(--text-mid)] text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Vous avez un projet en tête, une opportunité de collaboration ou simplement une question technique ? Remplissez le formulaire ci-dessous ou écrivez-moi directement.
          </p>
        </div>

        {/* Two-Column Grid: Coordinates & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-start">
          {/* Left Column: Direct info & process */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Card */}
            <div className="reveal border border-[var(--border)] bg-[var(--surface)] p-8 space-y-6">
              <span className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.2em] text-[var(--accent)] block">
                Coordonnées directes
              </span>

              {/* Email */}
              <div className="space-y-2">
                <span className="text-[11px] font-['DM_Mono'] uppercase text-[var(--text-dim)] block">
                  Email professionnel
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-[var(--bg)] border border-[var(--border)]">
                  <a
                    href="mailto:lenepveumanou@gmail.com"
                    className="text-xs font-['DM_Mono'] text-[var(--white)] hover:text-[var(--accent)] transition-colors truncate"
                  >
                    lenepveumanou@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-['DM_Mono'] uppercase bg-[var(--surface)] border border-[var(--border)] text-[var(--text-mid)] hover:text-[var(--white)] hover:border-[var(--accent)] transition-colors self-start sm:self-auto"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-[#4caf7d]" />
                        <span className="text-[#4caf7d]">Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copier</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)] text-xs font-['DM_Mono']">
                <div>
                  <span className="text-[10px] uppercase text-[var(--text-dim)] flex items-center gap-1.5 mb-1">
                    <MapPin size={12} className="text-[var(--accent)]" />
                    Localisation
                  </span>
                  <span className="text-[var(--white)]">Antananarivo, MG</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-[var(--text-dim)] flex items-center gap-1.5 mb-1">
                    <Clock size={12} className="text-[var(--accent)]" />
                    Heure locale (UTC+3)
                  </span>
                  <span className="text-[var(--accent)] font-medium">
                    {localTime || '12:00:00'}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="pt-4 border-t border-[var(--border)] flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4caf7d] animate-[pulse_2.5s_infinite] shrink-0" />
                <span className="text-xs font-['DM_Mono'] text-[var(--text-mid)]">
                  Actuellement disponible pour de nouvelles missions
                </span>
              </div>

              {/* Social networks */}
              <div className="pt-4 border-t border-[var(--border)]">
                <span className="text-[10px] font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)] block mb-3">
                  Profils & Réseaux
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/manou-lenepveu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-['DM_Mono'] text-[var(--accent)] hover:text-[var(--white)] transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub ↗</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manou-lenepveu-47306733b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-['DM_Mono'] text-[var(--accent)] hover:text-[var(--white)] transition-colors"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Collaboration Process */}
            <div className="reveal reveal-delay-2 border border-[var(--border)] bg-[var(--surface)] p-8">
              <span className="text-[10px] font-['DM_Mono'] uppercase tracking-[0.2em] text-[var(--accent)] block mb-6">
                Processus de collaboration
              </span>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Cadrage & Écoute", text: "Premier échange pour comprendre vos objectifs, vos contraintes et le périmètre attendu." },
                  { step: "02", title: "Proposition Technique", text: "Définition de l'architecture, du calendrier d'exécution et devis transparent." },
                  { step: "03", title: "Développement & Démo", text: "Itérations régulières avec démonstrations en ligne pour tester en continu." },
                  { step: "04", title: "Mise en Ligne & Suivi", text: "Déploiement en production, optimisation finale et support technique." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start text-xs">
                    <span className="font-['DM_Mono'] text-[var(--accent)] font-medium shrink-0 pt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-[var(--white)] font-medium mb-1 font-['DM_Mono']">
                        {item.title}
                      </h4>
                      <p className="text-[var(--text-dim)] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="reveal reveal-delay-1 border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12 relative">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-6 animate-[fadeIn_0.5s_ease-out]">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--bg)] border border-[var(--accent)] flex items-center justify-center text-[var(--accent)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-['Fraunces'] text-3xl text-[var(--white)] font-normal">
                    Message transmis avec succès !
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--text-mid)] max-w-md mx-auto leading-relaxed">
                    Merci pour votre message, <span className="text-[var(--white)]">{formData.name}</span>. 
                    J&apos;ai bien reçu votre demande et je reviendrai vers vous à l&apos;adresse <span className="text-[var(--accent)]">{formData.email}</span> sous 24 à 48 heures.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={resetForm}
                      className="text-xs uppercase font-['DM_Mono'] tracking-[0.12em] px-6 py-3 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--white)] transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-['Fraunces'] text-2xl md:text-3xl text-[var(--white)] font-normal mb-2">
                      Parlez-moi de votre besoin
                    </h3>
                    <p className="text-xs text-[var(--text-mid)] font-['DM_Mono']">
                      Tous les champs marqués d&apos;un astérisque (*) sont requis.
                    </p>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]">
                      Type de projet
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`text-xs font-['DM_Mono'] px-3.5 py-2 border transition-all ${
                            formData.projectType === type
                              ? 'bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)] font-medium'
                              : 'bg-[var(--bg)] text-[var(--text-mid)] border-[var(--border)] hover:border-[var(--accent2)]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]"
                      >
                        Nom complet *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Ex. Sarah Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-[var(--bg)] border text-xs font-['DM_Mono'] text-[var(--white)] px-4 py-3 placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-[var(--border)] focus:border-[var(--accent)]'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] font-['DM_Mono'] text-red-400 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]"
                      >
                        Adresse Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="sarah@exemple.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[var(--bg)] border text-xs font-['DM_Mono'] text-[var(--white)] px-4 py-3 placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-[var(--border)] focus:border-[var(--accent)]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] font-['DM_Mono'] text-red-400 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Budget (Optional) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="budget"
                      className="block text-xs font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]"
                    >
                      Budget envisagé ou délai (optionnel)
                    </label>
                    <input
                      id="budget"
                      type="text"
                      placeholder="Ex. 1 500 € — 3 000 € / Démarrage sous 2 semaines"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[var(--bg)] border border-[var(--border)] text-xs font-['DM_Mono'] text-[var(--white)] px-4 py-3 placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-['DM_Mono'] uppercase tracking-wider text-[var(--text-dim)]"
                    >
                      Détails de votre projet ou question *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Décrivez votre idée, les fonctionnalités principales, vos attentes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-[var(--bg)] border text-xs font-['DM_Mono'] text-[var(--white)] p-4 placeholder-[var(--text-dim)] focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-[var(--border)] focus:border-[var(--accent)]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] font-['DM_Mono'] text-red-400 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 bg-[var(--white)] hover:bg-[var(--accent)] text-[var(--bg)] py-4 text-xs font-['DM_Mono'] uppercase tracking-[0.15em] font-medium transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-[var(--bg)] border-t-transparent rounded-full animate-spin" />
                          <span>Transmission en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer ma demande</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-['DM_Mono'] text-[var(--text-dim)] text-center pt-2">
                    Vos données restent strictement confidentielles et ne sont jamais transmises à des tiers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="mb-12">
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-2 font-['DM_Mono']">
              Foire Aux Questions
            </span>
            <h2 className="reveal reveal-delay-1 font-['Fraunces'] text-3xl md:text-4xl text-[var(--white)] font-normal">
              Questions fréquentes.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className={`reveal reveal-delay-${(idx % 3) + 1} border border-[var(--border)] bg-[var(--surface)] transition-colors ${
                    isOpen ? 'border-[var(--accent2)]' : 'hover:border-[var(--border)]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-sm md:text-base text-[var(--white)] font-['Fraunces'] font-normal hover:text-[var(--accent)] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[var(--accent)] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs md:text-sm text-[var(--text-mid)] font-['DM_Mono'] leading-[1.8] border-t border-[var(--border)] pt-4 animate-[fadeIn_0.3s_ease-out]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

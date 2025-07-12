import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce React App",
      description: "Application e-commerce complète avec panier, authentification et paiement. Interface moderne et responsive.",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      technologies: ["React", "TypeScript", "Tailwind", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif avec graphiques en temps réel et visualisation de données complexes.",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      technologies: ["React", "Chart.js", "API REST", "CSS Grid"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Application Météo PWA",
      description: "Progressive Web App météo avec géolocalisation, prévisions et interface adaptative.",
      image: "bg-gradient-to-br from-teal-400 to-teal-600",
      technologies: ["React", "PWA", "OpenWeather API", "Geolocation"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Projets Phares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez quelques-uns de mes projets les plus récents et les plus significatifs.
          </p>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Project Image */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.demoUrl}
                    className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200 group/link"
                  >
                    <ExternalLink size={16} className="text-gray-700 group-hover/link:text-teal-600" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200 group/link"
                  >
                    <Github size={16} className="text-gray-700 group-hover/link:text-teal-600" />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium">
                  Projet {project.id}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                  <a
                    href={project.githubUrl}
                    className="px-4 py-2 border border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 group"
          >
            Voir tous mes projets
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;


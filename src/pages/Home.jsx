import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
                Salut, je suis{' '}
                <span className="text-teal-500">Alda Manou</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Développeuse passionnée par la création d'expériences web modernes et intuitives. 
                Je me spécialise dans le développement frontend avec React et les technologies modernes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Voir mes projets
                </button>
                <button className="btn-secondary">
                  Télécharger CV
                </button>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Photo de profil</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Projets Phares
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets les plus récents et les plus significatifs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: project * 0.1 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-teal-600 font-medium">Projet {project}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Nom du Projet {project}
                </h3>
                <p className="text-gray-600 mb-4">
                  Description courte du projet et des technologies utilisées.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                    Tailwind
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="text-teal-500 hover:text-teal-600 font-medium">
                    Voir le projet
                  </button>
                  <button className="text-gray-500 hover:text-gray-600 font-medium">
                    Code source
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compétences
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des applications web modernes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'JavaScript', 'TypeScript', 'Tailwind', 'Node.js', 'Git'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-teal-600 font-bold text-lg">
                    {skill.charAt(0)}
                  </span>
                </div>
                <span className="text-gray-700 font-medium text-center">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

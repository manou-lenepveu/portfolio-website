import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-teal-600 font-medium text-lg"
              >
                Bonjour, je suis
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900"
              >
                <span className="block">Manou</span>
                <span className="block text-teal-500">Rabeniharisoa</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 font-light"
              >
                Développeuse Frontend React
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Passionnée par la création d'expériences web modernes et intuitives. 
              Je transforme des idées en applications React performantes et accessibles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2 group"
              >
                <Eye size={20} />
                Voir mes projets
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Download size={20} />
                Télécharger CV
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">2+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">5+</div>
                <div className="text-sm text-gray-600">Technologies maîtrisées</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-80 h-80 bg-teal-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-80 h-80 bg-teal-200 rounded-full opacity-30"></div>
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">Photo de profil</span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl">⚛️</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl">💻</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


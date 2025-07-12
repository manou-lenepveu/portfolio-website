import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-teal-500 to-teal-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Prête à collaborer ?
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
              Je suis toujours ouverte à de nouveaux défis et opportunités. 
              Discutons de votre prochain projet !
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 group"
            >
              <Mail size={20} />
              Me contacter
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              <MessageCircle size={20} />
              Discutons sur LinkedIn
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-teal-400"
          >
            <p className="text-teal-100 mb-2">Ou envoyez-moi directement un email</p>
            <a
              href="mailto:contact@example.com"
              className="text-white font-medium hover:text-teal-100 transition-colors duration-200"
            >
              contact@example.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;


import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: Code2, level: 90, color: "bg-blue-500" },
        { name: "JavaScript", icon: Terminal, level: 85, color: "bg-yellow-500" },
        { name: "TypeScript", icon: Code2, level: 75, color: "bg-blue-600" },
        { name: "Tailwind CSS", icon: Palette, level: 90, color: "bg-teal-500" },
      ]
    },
    {
      title: "Outils & Workflow",
      skills: [
        { name: "Git", icon: GitBranch, level: 80, color: "bg-orange-500" },
        { name: "Vite", icon: Layers, level: 85, color: "bg-purple-500" },
        { name: "Responsive Design", icon: Smartphone, level: 90, color: "bg-green-500" },
        { name: "Web APIs", icon: Globe, level: 75, color: "bg-indigo-500" },
      ]
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications web modernes et performantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${skill.color} text-white`}>
                          <Icon size={20} />
                        </div>
                        <span className="font-medium text-slate-900 flex-1">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Autres Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "HTML5", emoji: "🌐" },
              { name: "CSS3", emoji: "🎨" },
              { name: "Node.js", emoji: "🟢" },
              { name: "Python", emoji: "🐍" },
              { name: "C/C++", emoji: "⚡" },
              { name: "Bash", emoji: "💻" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.emoji}
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


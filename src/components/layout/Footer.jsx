import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/manouAlda',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'manoulenepveu@outlook.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Portfolio</h3>
            <p className="text-gray-300 max-w-md">
              Développeuse passionnée par la création d'expériences web modernes et intuitives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  À Propos
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Projets
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suivez-moi</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-teal-500 transition-colors duration-200 group"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Portfolio. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
            Fait avec <Heart size={16} className="mx-1 text-red-500" /> et React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


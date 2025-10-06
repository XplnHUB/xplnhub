import { motion } from 'framer-motion';
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="relative bg-gray-900/50 backdrop-blur-sm border-t border-cyan-500/20 mt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                XplnHUB
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Simplifying technology, empowering developers, and building a better open-source
              community.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Community', 'Contributors', 'Join Us'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-3">
              <motion.a
                href="https://github.com/XplnHUB"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="mailto:xplnhub@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>xplnhub@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"
        />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} XplnHUB. Open source and built with{' '}
            <Heart className="inline w-4 h-4 text-pink-500" /> by the community.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <motion.a
              href="https://github.com/XplnHUB"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:text-cyan-400 transition-colors"
            >
              Privacy
            </motion.a>
            <motion.a
              href="https://github.com/XplnHUB"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:text-cyan-400 transition-colors"
            >
              Terms
            </motion.a>
            <motion.a
              href="https://github.com/XplnHUB"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="hover:text-cyan-400 transition-colors"
            >
              License
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(34, 211, 238, 0.1)',
            '0 0 40px rgba(34, 211, 238, 0.2)',
            '0 0 20px rgba(34, 211, 238, 0.1)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
    </motion.footer>
  );
};

export default Footer;

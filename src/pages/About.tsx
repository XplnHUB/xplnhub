import { motion } from 'framer-motion';
import { Heart, Users, Target, Zap, Globe, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Built by developers, for developers. Every voice matters in shaping our tools.',
    },
    {
      icon: Globe,
      title: 'Open & Transparent',
      description: 'All our code is open source. No hidden agendas, just honest collaboration.',
    },
    {
      icon: Shield,
      title: 'Accessible',
      description: 'Technology should be understandable. We simplify complex concepts for everyone.',
    },
  ];

  const mission = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To democratize technology by creating tools that explain, simplify, and empower developers at every skill level.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description:
        'A world where technology barriers dissolve, and every developer has the resources to understand and build amazing things.',
    },
    {
      icon: Zap,
      title: 'Our Approach',
      description:
        'We combine cutting-edge technology with educational resources to create tools that teach as they work.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About XplnHUB
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We believe technology should empower, not intimidate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {mission.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50"
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting out, there's a place for you in the XplnHUB community.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="https://github.com/XplnHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/50 inline-flex items-center space-x-2"
            >
              <span>Explore Our Organization</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

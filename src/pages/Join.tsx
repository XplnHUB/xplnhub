import { motion } from 'framer-motion';
import {
  Github,
  FileText,
  MessageSquare,
  Rocket,
  Heart,
  Code2,
  Users,
  Zap,
} from 'lucide-react';

const Join = () => {
  const reasons = [
    {
      icon: Code2,
      title: 'Learn & Grow',
      description: 'Work on real projects and improve your development skills',
    },
    {
      icon: Users,
      title: 'Build Your Network',
      description: 'Connect with developers from around the world',
    },
    {
      icon: Heart,
      title: 'Make an Impact',
      description: 'Your contributions help developers everywhere',
    },
    {
      icon: Zap,
      title: 'All Levels Welcome',
      description: 'From beginners to experts, everyone has something to contribute',
    },
  ];

  const actions = [
    {
      icon: Github,
      title: 'View Issues on GitHub',
      description: 'Browse open issues and find tasks that match your skills',
      url: 'https://github.com/XplnHUB/xplnhub/issues',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FileText,
      title: 'Read CONTRIBUTING.md',
      description: 'Learn our contribution guidelines and code standards',
      url: 'https://github.com/XplnHUB/xplnhub/blob/main/CONTRIBUTING.md',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: MessageSquare,
      title: 'Join Discussions',
      description: 'Share ideas, ask questions, and engage with the community',
      url: 'https://github.com/orgs/XplnHUB/discussions',
      color: 'from-purple-500 to-pink-500',
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
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Rocket className="w-20 h-20 text-cyan-400" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Join Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're always looking for passionate developers, designers, and learners.
            <span className="block mt-2 text-cyan-400 font-semibold">
              All experience levels are welcome!
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Join XplnHUB?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/50"
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Get Started Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{action.description}</p>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  className="mt-4 text-cyan-400 font-semibold flex items-center"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              First Time Contributing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't worry! We have plenty of "good first issue" tasks perfect for beginners.
              Our community is friendly and always happy to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="https://github.com/XplnHUB"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/50 flex items-center space-x-2"
              >
                <Github className="w-6 h-6" />
                <span>Browse Good First Issues</span>
              </motion.a>
              <motion.a
                href="https://github.com/XplnHUB/xplnhub/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-cyan-400/50 hover:border-cyan-400 flex items-center space-x-2"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Ask for Help</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            Questions? Reach out at{' '}
            <a
              href="mailto:xplnhub.org@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              xplnhub.org@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;

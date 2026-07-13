import { motion } from 'framer-motion';
import { Lightbulb, Code2, Eye, Rocket, GitPullRequest, Users } from 'lucide-react';
import { WorkflowStep } from '../types';

const Community = () => {
  const workflow: WorkflowStep[] = [
    {
      title: 'Idea',
      description: 'Community members propose new features and improvements',
      icon: 'Lightbulb',
    },
    {
      title: 'Code',
      description: 'Developers collaborate to build and implement solutions',
      icon: 'Code2',
    },
    {
      title: 'Review',
      description: 'Team reviews pull requests and provides constructive feedback',
      icon: 'Eye',
    },
    {
      title: 'Release',
      description: 'Tested features are merged and released to the community',
      icon: 'Rocket',
    },
    {
      title: 'Impact',
      description: 'Users benefit from improved tools and share their experiences',
      icon: 'Users',
    },
  ];

  const iconMap = {
    Lightbulb,
    Code2,
    Eye,
    Rocket,
    Users,
  };

  // Workflow component (no state needed)

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
            Open Source & Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Built together, for everyone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            At XplnHUB, we believe in the power of open source. By sharing our code freely,
            we enable developers worldwide to learn, contribute, and build upon our work.
            Transparency isn't just a value—it's our foundation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Fork',
                description: 'Start with our repositories and make them your own',
                icon: GitPullRequest,
              },
              {
                title: 'Contribute',
                description: 'Submit pull requests and help improve our tools',
                icon: Code2,
              },
              {
                title: 'Learn',
                description: 'Explore our code and grow your development skills',
                icon: Lightbulb,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Workflow
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            From idea to impact, here's how we build together
          </p>

          <div className="relative">
            {/* Desktop: horizontal connecting line */}
            <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            {/* Mobile/Tablet: vertical connecting line */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/20 via-cyan-500/40 to-transparent" />

            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-5 gap-8">
              {workflow.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.12, duration: 0.6 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* step badge with number */}
                    <div className="relative mb-6">
                      <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-cyan-500/50">
                        {index + 1}
                      </div>

                      {/* icon container with hover glow */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        transition={{ duration: 0.4 }}
                        className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center relative"
                        style={{
                          boxShadow: '0 8px 20px rgba(2,6,23,0.5)',
                        }}
                      >
                        {/* hover glow effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                          boxShadow: 'inset 0 0 20px rgba(56,189,248,0.4), 0 0 30px rgba(59,130,246,0.5)',
                        }} />
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="relative z-10"
                        >
                          <Icon className="w-12 h-12 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* step title and description */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{step.description}</p>

                    {/* connector dot to timeline (hidden on mobile) */}
                    <div className="hidden lg:block absolute -top-8 w-2 h-2 bg-cyan-400 rounded-full left-1/2 -translate-x-1/2 group-hover:w-3 group-hover:h-3 group-hover:shadow-lg group-hover:shadow-cyan-400/70 transition-all duration-300" />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile/Tablet: Vertical Timeline Layout */}
            <div className="lg:hidden flex flex-col gap-6 pl-20">
              {workflow.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex gap-4 group relative"
                  >
                    {/* Connection point on timeline */}
                    <div className="absolute -left-16 top-6 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/60 group-hover:w-5 group-hover:h-5 group-hover:shadow-cyan-400/80 transition-all duration-300" />

                    {/* Icon container */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 relative"
                      style={{
                        boxShadow: '0 6px 16px rgba(2,6,23,0.5)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                        boxShadow: 'inset 0 0 16px rgba(56,189,248,0.3), 0 0 24px rgba(59,130,246,0.4)',
                      }} />
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                      >
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Text content */}
                    <div className="flex flex-col justify-center flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs md:text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">Step {index + 1}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{step.title}</h3>
                      <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
            How to Get Started
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Ready to contribute? Here's how to jump in and start making an impact:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                step: '01',
                title: 'Explore Issues',
                description:
                  'Browse open issues labelled "good first issue" to find beginner-friendly tasks',
              },
              {
                step: '02',
                title: 'Read Guidelines',
                description:
                  'Check our CONTRIBUTING.md for code standards and submission process',
              },
              {
                step: '03',
                title: 'Join Discussions',
                description:
                  'Participate in GitHub Discussions to share ideas and get help',
              },
              {
                step: '04',
                title: 'Submit PRs',
                description:
                  'Create pull requests with clear descriptions and follow our review process',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="flex space-x-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/50">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="https://github.com/XplnHUB"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/50"
            >
              Start Contributing Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;

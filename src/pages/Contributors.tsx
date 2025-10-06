import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, ExternalLink, Heart, Award } from 'lucide-react';
import { Contributor } from '../types';

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributors();
  }, []);

  const fetchContributors = async () => {
    try {
      const repos = ['CodeNarrator', 'Finmate', 'Insight-Py', 'xplnhub-insight-py'];
      const allContributors: Contributor[] = [];
      const contributorMap = new Map<string, Contributor>();

      for (const repo of repos) {
        const response = await fetch(
          `https://api.github.com/repos/XplnHUB/${repo}/contributors`
        );
        if (response.ok) {
          const data = await response.json();
          data.forEach((contributor: Contributor) => {
            if (contributorMap.has(contributor.login)) {
              const existing = contributorMap.get(contributor.login)!;
              existing.contributions += contributor.contributions;
            } else {
              contributorMap.set(contributor.login, { ...contributor });
            }
          });
        }
      }

      allContributors.push(...contributorMap.values());
      allContributors.sort((a, b) => b.contributions - a.contributions);

      setContributors(allContributors);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contributors:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Contributors
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Meet the amazing developers who make XplnHUB possible
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 mb-16"
        >
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You to Our Community
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every contribution, big or small, helps us build better tools for developers
              worldwide. We're grateful for your dedication and passion.
            </p>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mb-4"
            />
            <p className="text-gray-400 text-lg">Loading contributors...</p>
          </div>
        ) : contributors.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {contributors.map((contributor, index) => (
              <motion.a
                key={contributor.login}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className="w-24 h-24 rounded-full border-4 border-cyan-500/50 group-hover:border-cyan-400 transition-all"
                    />
                    {index < 3 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                        className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Award className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {contributor.login}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-400 mb-3">
                    <span className="text-sm">{contributor.contributions} contributions</span>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-sm">View Profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/5 backdrop-blur-sm rounded-3xl border border-cyan-500/20"
          >
            <Users className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No contributors found</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Growing Community!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate developers to join us. All experience levels
            are welcome!
          </p>
          <motion.a
            href="https://github.com/XplnHUB"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/50"
          >
            Start Contributing
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contributors;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Code2 } from 'lucide-react';
import { Repository } from '../types';

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([
    {
      name: 'CodeNarrator',
      language: 'JavaScript',
      description:
        'Transform complex code into clear, narrative explanations. CodeNarrator provides line-by-line breakdowns, highlights key concepts, and creates engaging walkthroughs that make understanding code effortless.',
      url: 'https://github.com/XplnHUB/CodeNarrator',
      highlights: [
        'Line-by-line code analysis',
        'Interactive narrative walkthroughs',
        'Key concept highlighting',
        'Multi-language support',
      ],
    },
    {
      name: 'Finmate',
      language: 'TypeScript',
      description:
        'A comprehensive finance management tool designed for students. Track expenses, manage budgets, set savings goals, and generate insightful reports to take control of your financial future.',
      url: 'https://github.com/XplnHUB/Finmate',
      highlights: [
        'Expense tracking & categorization',
        'Budget management tools',
        'Savings goal planning',
        'Visual financial reports',
      ],
    },
    {
      name: 'Insight-Py',
      language: 'Python',
      description:
        'Deep dive into Python codebases with powerful analysis tools. Visualize dependencies, assess performance bottlenecks, and gain comprehensive insights into your Python projects.',
      url: 'https://github.com/XplnHUB/Insight-Py',
      highlights: [
        'Dependency visualization',
        'Performance analysis',
        'Code quality metrics',
        'Interactive diagrams',
      ],
    },
    {
      name: 'xplnhub-insight-py',
      language: 'TypeScript',
      description:
        'Frontend Website of Insight-Py. It is a Python CLI tool that generates detailed reports combining static code analysis with AI explanations. Analyze your codebases with AI-powered insights and get a deeper understanding of your projects.',
      url: 'https://github.com/XplnHUB/xplnhub-insight-py',
      highlights: [
        'Python CLI tool',
        'Static code analysis',
        'AI-powered insights',
        'Code quality metrics',
      ],
    }
  ]);

  // 🧠 Fetch star and fork counts dynamically
  useEffect(() => {
    async function fetchRepoStats() {
      const updatedRepos = await Promise.all(
        repositories.map(async (repo) => {
          try {
            const res = await fetch(
              `https://api.github.com/repos/XplnHUB/${repo.name}`
            );
            if (!res.ok) throw new Error('Failed to fetch repo');
            const data = await res.json();
            return {
              ...repo,
              stars: data.stargazers_count,
              forks: data.forks_count,
            };
          } catch (error) {
            console.error(`Error fetching ${repo.name}:`, error);
            return repo;
          }
        })
      );

      setRepositories(updatedRepos);
    }

    fetchRepoStats();
  }, []);

  const languageColors: { [key: string]: string } = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3776ab',
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Innovative tools built to simplify technology and empower developers
          </p>
        </motion.div>

        <div className="space-y-12">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/70 transition-all">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {repo.name}
                        </h2>
                        <div className="flex items-center space-x-2 mt-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: languageColors[repo.language] }}
                          />
                          <span className="text-gray-400 text-sm">{repo.language}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {repo.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center space-x-2 text-cyan-400"
                      >
                        <Star className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold flex items-center space-x-2 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </motion.a>
                    {(repo.stars || repo.forks) && (
                      <div className="flex items-center gap-4 text-gray-300 text-sm">
                        {/*Number of stars //*/}
                        <div className="flex items-center gap-1">
                          <a href={repo.url}><Star size={16} className="text-yellow-400" /></a>
                          <a href={repo.url}><span>No. of Stars :</span></a>
                          <span>{repo.stars ?? 0}</span>
                        </div>
                        {/*Number of forks existing for the repo*/}
                        <div className="flex items-center gap-1">
                          <a href={repo.url}>
                            <GitFork size={16} className="text-blue-400" />
                          </a>
                          <a href={repo.url}><span>No. of Forks :</span></a>
                          <span>{repo.forks ?? 0}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="lg:w-64 flex items-center justify-center"
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-24 h-24 text-cyan-400/50" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Want to Contribute?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for passionate developers to join our projects!
          </p>
          <motion.a
            href="https://github.com/XplnHUB"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/50"
          >
            Explore All Repositories
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

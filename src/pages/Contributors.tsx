import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, ExternalLink, Heart, Award, GitCommit } from "lucide-react";
import { Contributor } from "../types";

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributors();
  }, []);

  const fetchContributors = async () => {
    try {
      const repos = ["CodeNarrator", "Finmate", "Insight-Py", "xplnhub-insight-py"];
      const contributorMap = new Map<string, Contributor>();

      for (const repo of repos) {
        const response = await fetch(
          `https://api.github.com/repos/XplnHUB/${repo}/contributors`
        );
        if (response.ok) {
          const data = await response.json();
          for (const contributor of data) {
            // Fetch additional user details (for full name)
            const userResponse = await fetch(`https://api.github.com/users/${contributor.login}`);
            let userData: any = {};
            if (userResponse.ok) {
              userData = await userResponse.json();
            }

            if (contributorMap.has(contributor.login)) {
              contributorMap.get(contributor.login)!.contributions += contributor.contributions;
            } else {
              contributorMap.set(contributor.login, {
                ...contributor,
                name: userData.name?.trim() ? userData.name.trim() : undefined,
              });
            }
          }
        }
      }

      const allContributors = Array.from(contributorMap.values()).sort(
        (a, b) => b.contributions - a.contributions
      );

      setContributors(allContributors);
    } catch (error) {
      console.error("Error fetching contributors:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/40 to-gray-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Contributors
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Meet the developers making <span className="text-cyan-400 font-semibold">XplnHUB</span> possible
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-12 border border-cyan-500/20 mb-16 shadow-xl"
        >
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">Thank You to Our Community ❤️</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every line of code counts. Thank you for helping shape open-source innovation.
            </p>
          </div>
        </motion.div>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mb-4"
            />
            <p className="text-gray-400 text-lg">Fetching contributors...</p>
          </div>
        ) : contributors.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
                whileHover={{ scale: 1.06, rotateY: 4 }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group overflow-hidden"
                aria-label={`View GitHub profile of ${contributor.login}`}
              >

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center px-1">
                  <div className="w-full">
                    <div className="relative">
                      <div className="h-20 w-full rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-600/40 to-purple-600/40 opacity-80 group-hover:opacity-100 transition-all duration-300" />

                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        src={contributor.avatar_url}
                        alt={`Avatar of ${contributor.login}`}
                        loading="lazy"
                        className={`w-24 h-24 rounded-full border-[3px] shadow-xl absolute left-1/2 -translate-x-1/2 -bottom-12 ${
                          index === 0
                            ? "border-yellow-400 shadow-[0_0_25px_#facc15]"
                            : index === 1
                            ? "border-gray-300 shadow-[0_0_25px_#d1d5db]"
                            : index === 2
                            ? "border-amber-500 shadow-[0_0_25px_#f59e0b]"
                            : "border-cyan-400/60 group-hover:border-cyan-300"
                        } transition-all duration-300`}
                      />

                      {index < 3 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                          className="absolute -top-4 right-6 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                          aria-label={`Top ${index + 1} contributor`}
                        >
                          <Award className="w-5 h-5 text-white" aria-hidden="true" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="pt-14 pb-3 flex flex-col items-center gap-2 w-full">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-200 transition-colors">
                      {contributor.name}
                    </h3>

                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-cyan-100/80 bg-white/5 border border-cyan-500/30 rounded-full">
                      @{contributor.login}
                    </span>

                    <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-100 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full shadow-inner shadow-cyan-500/20">
                      <GitCommit className="w-4 h-4" aria-hidden="true" />
                      <span>{contributor.contributions.toLocaleString()} contributions</span>
                    </div>

                    <p className="text-xs text-gray-400 max-w-[14rem] leading-relaxed">
                      Helping drive the XplnHUB mission forward.
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-cyan-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-sm">View Profile</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-cyan-500/20 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Community!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionate about open source? Start contributing and leave your mark on{" "}
            <span className="text-cyan-400 font-semibold">XplnHUB</span>.
          </p>
          <motion.a
            href="https://github.com/XplnHUB"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all"
          >
            Start Contributing
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contributors;

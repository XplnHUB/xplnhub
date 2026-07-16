import { motion } from 'framer-motion';
import { ArrowLeft, Code2, FileText, ShieldCheck, Sparkles } from 'lucide-react';

type LicenseProps = {
  onNavigate?: (page: string) => void;
};

const License = ({ onNavigate }: LicenseProps) => {
  const mockLicense = `MIT License

Copyright (c) 2026 XplnHUB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <button
            type="button"
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm p-8 md:p-12 shadow-2xl shadow-cyan-500/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">Open source project</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white">Project License</h1>
            
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 min-w-[220px]">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-2">
                  <ShieldCheck className="w-5 h-5" />
                  License type
                </div>
                <p className="text-white text-xl font-bold">MIT</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { title: 'Use freely', description: 'The code may be used, shared, and adapted.', icon: Code2 },
                { title: 'Keep attribution', description: 'The notice should stay with the software.', icon: FileText },
                { title: 'Community-first', description: 'Built for open collaboration and learning.', icon: Sparkles },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * index + 0.2, duration: 0.5 }}
                    className="rounded-2xl border border-cyan-500/15 bg-gray-950/40 p-5"
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <h2 className="text-white font-semibold mb-1">{item.title}</h2>
                    <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-gray-950/50 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">License text</h2>
              <pre className="whitespace-pre-wrap text-sm leading-7 text-gray-300 font-mono bg-black/20 rounded-2xl p-5 overflow-x-auto">
{mockLicense}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default License;

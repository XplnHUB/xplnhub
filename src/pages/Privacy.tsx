import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, EyeOff, Lock, FileText } from 'lucide-react';

type PrivacyProps = {
  onNavigate?: (page: string) => void;
};

const Privacy = ({ onNavigate }: PrivacyProps) => {
  const privacyContent = `Privacy Policy

Last Updated: July 2026

At XplnHUB, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use our platform.

1. Information We Collect
We collect information that you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and account credentials.

2. How We Use Your Information
We use the collected information to:
• Provide, maintain, and improve our services.
• Personalize your user experience.
• Send you technical updates, security alerts, and support messages.
• Respond to your comments, questions, and customer service requests.

3. Data Sharing and Disclosure
We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. We may share information with trusted service providers who assist us in operating our platform, so long as those parties agree to keep this information confidential.

4. Data Security
We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your data. However, please remember that no method of transmission over the internet is 100% secure.

5. Cookies and Tracking
We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.

6. Your Privacy Rights
Depending on your location, you may have rights to access, correct, delete, or limit the use of your personal data. To exercise these rights, please contact our support team.`;

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
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">Your Privacy Matters</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 min-w-[220px]">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-2">
                  <FileText className="w-5 h-5" />
                  Document status
                </div>
                <p className="text-white text-xl font-bold">Active</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { title: 'Data security', description: 'Advanced measures to safeguard your personal credentials.', icon: Lock },
                { title: 'Zero-selling policy', description: 'We will never trade or sell your personal data.', icon: EyeOff },
                { title: 'Control your info', description: 'Easily update, export, or permanently delete your details.', icon: ShieldCheck },
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
              <h2 className="text-2xl font-semibold text-white mb-4">Policy text</h2>
              <pre className="whitespace-pre-wrap text-sm leading-7 text-gray-300 font-mono bg-black/20 rounded-2xl p-5 overflow-x-auto">
{privacyContent}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
import { motion } from 'framer-motion';
import { ArrowLeft, UserCheck, ShieldAlert, Scale, FileText } from 'lucide-react';

type TermProps = {
  onNavigate?: (page: string) => void;
};

const Term = ({ onNavigate }: TermProps) => {
  const termsContent = `Terms of Service

Last Updated: July 2026

Welcome to XplnHUB. By accessing or using our platform, website, or services, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.

1. Acceptance of Terms
By creating an account or otherwise using XplnHUB, you accept and agree to comply with these Terms and our Privacy Policy. If you do not agree, you must not access or use our services.

2. User Responsibilities and Accounts
You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information.

3. Acceptable Use
You agree not to use XplnHUB for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the services in any way that could damage, disable, or impair our platform or interfere with any other party's use.

4. Intellectual Property
All content, features, and functionality on XplnHUB—including text, graphics, logos, and code—are the exclusive property of XplnHUB and are protected by international copyright, trademark, and other intellectual property laws.

5. Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY LAW, XPLNHUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.

6. Changes to Terms
We reserve the right to modify or replace these Terms at any time. We will provide notice of material changes by updating the "Last Updated" date at the top of this page.`;

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
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">Legal Agreement</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
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
                { title: 'User conduct', description: 'Rules regarding account responsibilities and safety.', icon: UserCheck },
                { title: 'Platform rights', description: 'Intellectual property and ownership of services.', icon: Scale },
                { title: 'Liability limits', description: 'Legal safeguards regarding warranties and damages.', icon: ShieldAlert },
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
              <h2 className="text-2xl font-semibold text-white mb-4">Agreement text</h2>
              <pre className="whitespace-pre-wrap text-sm leading-7 text-gray-300 font-mono bg-black/20 rounded-2xl p-5 overflow-x-auto">
{termsContent}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Term;
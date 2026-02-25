'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Network, Code2 } from 'lucide-react';

const networkColors = [
  'from-blue-600/20 to-blue-800/10 border-blue-500/30 text-blue-300',
  'from-cyan-600/20 to-cyan-800/10 border-cyan-500/30 text-cyan-300',
  'from-indigo-600/20 to-indigo-800/10 border-indigo-500/30 text-indigo-300',
];

const systemColors = [
  'from-violet-600/20 to-violet-800/10 border-violet-500/30 text-violet-300',
  'from-purple-600/20 to-purple-800/10 border-purple-500/30 text-purple-300',
];

export default function Skills() {
  const t = useTranslations('skills');

  const networkSkills = t.raw('networkSkills') as string[];
  const systemSkills = t.raw('systemSkills') as string[];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-blue-400 text-sm font-semibold tracking-widest uppercase block mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {t('sectionSubtitle')}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {t('sectionTitle')}
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Network Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a]/60 rounded-2xl border border-blue-500/15 p-6 glow-blue"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <Network className="w-5 h-5 text-blue-400" />
              </div>
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {t('networkTitle')}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {networkSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium bg-gradient-to-r border cursor-default transition-all duration-200 ${
                    networkColors[i % networkColors.length]
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-70" />
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Systems & Programming */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a]/60 rounded-2xl border border-violet-500/15 p-6"
            style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.07)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <Code2 className="w-5 h-5 text-violet-400" />
              </div>
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {t('systemsTitle')}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {systemSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium bg-gradient-to-r border cursor-default transition-all duration-200 ${
                    systemColors[i % systemColors.length]
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-70" />
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

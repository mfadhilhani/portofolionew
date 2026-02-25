'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  tech: string[];
}

export default function Experience() {
  const t = useTranslations('experience');
  const items = t.raw('items') as ExperienceItem[];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="section-container relative z-10">
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

        <div className="max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0a1628] shadow-lg shadow-blue-500/30" />

              <div className="bg-[#0f172a]/80 rounded-2xl border border-blue-500/15 p-6 mb-8 glow-blue">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {item.role}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm mt-0.5">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                    <Calendar className="w-3 h-3" />
                    <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.period}</span>
                  </div>
                </div>

                <p
                  className="text-slate-400 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4
                    className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {t('responsibilities')}
                  </h4>
                  <ul className="space-y-1.5">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg bg-blue-500/8 border border-blue-500/20 text-blue-300"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Globe, Network } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  category: string;
}

const categoryColors: Record<string, string> = {
  Web: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  Network: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
};

const categoryIcons: Record<string, typeof Globe> = {
  Web: Globe,
  Network: Network,
};

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as ProjectItem[];

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
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

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((project, i) => {
            const CategoryIcon = categoryIcons[project.category] || Globe;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-[#0f172a]/80 rounded-2xl border border-blue-500/15 p-6 transition-all duration-300 glow-blue-hover overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/3 rounded-full translate-y-20 translate-x-20 group-hover:bg-blue-500/7 transition-colors" />

                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#1e293b] border border-blue-500/10 group-hover:border-blue-500/25 transition-colors">
                      <CategoryIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${categoryColors[project.category] || categoryColors.Web}`}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-slate-400 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-5">
                  <span
                    className="text-xs text-slate-500 uppercase tracking-wider mb-2 block"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {t('techStack')}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-blue-500/8 border border-blue-500/15 text-blue-300/80"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-all group/link"
                >
                  <Github className="w-4 h-4" />
                  {t('viewCode')}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

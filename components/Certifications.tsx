'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, CheckCircle, ExternalLink, Calendar, Building } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface CertItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  image: string;
  competencies: string[];
}

const badgeColors: Record<string, string> = {
  BNSP: 'from-blue-600 to-blue-800',
  Kominfo: 'from-emerald-600 to-emerald-800',
};

export default function Certifications() {
  const t = useTranslations('certifications');
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  const items = t.raw('items') as CertItem[];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="section-container">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative bg-[#0f172a]/80 rounded-2xl border border-blue-500/15 p-6 cursor-pointer group transition-all duration-300 glow-blue-hover overflow-hidden"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/3 rounded-full -translate-y-16 translate-x-16 group-hover:bg-blue-500/8 transition-colors" />

              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${badgeColors[cert.badge] || 'from-slate-600 to-slate-800'} mb-4`}>
                <Award className="w-3 h-3" />
                {cert.badge}
              </div>

              <h3
                className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {cert.title}
              </h3>

              <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  {cert.issuer}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.year}
                </span>
              </div>

              <div className="space-y-1.5 mb-5">
                {cert.competencies.slice(0, 3).map((comp) => (
                  <div key={comp} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
                {cert.competencies.length > 3 && (
                  <span
                    className="text-xs text-blue-400 ml-5"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    +{cert.competencies.length - 3} more...
                  </span>
                )}
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                {t('viewCert')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-blue-500/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${badgeColors[selectedCert.badge] || 'from-slate-600 to-slate-800'} mb-5`}
              >
                <Award className="w-3.5 h-3.5" />
                {selectedCert.badge}
              </div>

              <h3
                className="text-2xl font-black text-white mb-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {selectedCert.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                <span>{selectedCert.issuer}</span>
                <span>•</span>
                <span>{selectedCert.year}</span>
              </div>

              {/* Certificate image */}
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full relative h-48 rounded-xl overflow-hidden mb-6 border border-blue-500/20 hover:border-blue-400/50 transition-all group"
              >
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    Lihat Penuh
                  </span>
                </div>
              </a>

              <h4
                className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t('competencies')}
              </h4>
              <div className="space-y-2">
                {selectedCert.competencies.map((comp) => (
                  <div key={comp} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {comp}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

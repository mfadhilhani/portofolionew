'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, Wifi, Shield, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const floatingIcons = [
  { Icon: Wifi, x: '10%', y: '20%', delay: 0 },
  { Icon: Shield, x: '85%', y: '15%', delay: 1 },
  { Icon: Terminal, x: '80%', y: '70%', delay: 2 },
  { Icon: Wifi, x: '5%', y: '75%', delay: 1.5 },
];

export default function Hero() {
  const t = useTranslations('hero');
  const [displayText, setDisplayText] = useState('');
  const fullText = t('title');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/6 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-500/10 pointer-events-none"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4 + delay, repeat: Infinity, delay }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="section-container relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {t('statusBadge')}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="text-white">Muhammad </span>
          <span className="gradient-text text-glow">Fadhil</span>
          <span className="text-white"> Hani</span>
        </motion.h1>

        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-2"
        >
          <span
            className="text-xl sm:text-2xl font-semibold text-blue-400 typing-cursor"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {displayText}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-sm font-medium text-cyan-400/80 mb-8 tracking-widest uppercase"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {t('subtitle')}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {t('summary')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/cv-fadhil-hani.pdf"
            download
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-105"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            {t('downloadCV')}
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-blue-500/40 hover:border-blue-400/60 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-all duration-300 hover:bg-blue-500/8 backdrop-blur-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <Mail className="w-4 h-4" />
            {t('contactMe')}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {t('scrollDown')}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}

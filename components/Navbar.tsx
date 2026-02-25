'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Globe, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { setCookie } from '@/lib/cookies';

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'certifications', 'experience', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    setCookie('NEXT_LOCALE', newLocale, 365);
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath.startsWith('/') ? newPath : `/${newLocale}`);
    router.refresh();
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'certifications', href: '#certifications' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ] as const;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1628]/90 backdrop-blur-xl border-b border-blue-500/10 shadow-lg shadow-blue-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-7 h-7 text-blue-500 group-hover:text-cyan-400 transition-colors" />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:bg-cyan-400/20 transition-colors" />
            </div>
            <span
              className="font-display font-bold text-lg tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="text-blue-400">MF</span>
              <span className="text-white">H</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  activeSection === item.key
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {t(item.key)}
                {activeSection === item.key && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-[#0f172a]/80 border border-blue-500/20 rounded-full p-1">
              <Globe className="w-3.5 h-3.5 text-blue-400 ml-1" />
              <button
                onClick={() => switchLocale('id')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  locale === 'id'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                ID
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  locale === 'en'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                EN
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-blue-500/10 bg-[#0a1628]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.key
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

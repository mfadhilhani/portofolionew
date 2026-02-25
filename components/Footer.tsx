'use client';

import { useTranslations } from 'next-intl';
import { Heart, Shield } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-blue-500/10 py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            <span
              className="text-sm font-bold"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="text-blue-400">MF</span>
              <span className="text-white">H</span>
            </span>
          </div>

          <p
            className="text-sm text-slate-500 flex items-center gap-1.5"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {t('madeWith')}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
            <span>by Muhammad Fadhil Hani</span>
          </p>

          <p
            className="text-xs text-slate-600"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            © {new Date().getFullYear()} · {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

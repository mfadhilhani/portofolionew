"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Star, Target, Zap } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { icon: GraduationCap, label: t("education"), value: t("educationValue"), sub: t("university") },
    { icon: Star, label: t("gpa"), value: t("gpaValue") },
    { icon: Target, label: t("focus"), value: t("focusValue") },
    { icon: Zap, label: t("interest"), value: t("interestValue") },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase block mb-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            {t("sectionSubtitle")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            {t("sectionTitle")}
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile image placeholder */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-cyan-500/10 scale-125 animate-pulse-slow" />

              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-blue-500/30 glow-blue overflow-hidden">
                <Image src="/profile.jpg" alt="Muhammad Fadhil Hani" fill className="object-cover" priority />
              </div>

              {/* BNSP badge */}
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-4 -right-4 bg-[#0f172a] border border-blue-500/30 rounded-xl px-3 py-2 shadow-lg shadow-blue-500/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    BNSP Certified
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {t("bio")}
            </p>

            <div className="grid gap-3">
              {stats.map(({ icon: Icon, label, value, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#0f172a]/60 border border-blue-500/10 hover:border-blue-500/25 transition-all duration-300 glow-blue-hover group"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {value}
                    </span>
                    {sub && <span className="text-xs text-blue-400 block">{sub}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

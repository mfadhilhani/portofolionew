"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: t("emailLabel"),
      value: "mfadhilhanih@gmail.com",
      href: "mailto:mfadhilhanih@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
    },
    {
      icon: Linkedin,
      label: t("linkedinLabel"),
      value: "linkedin.com/in/muhammad-fadhil-hani",
      href: "https://www.linkedin.com/in/muhammad-fadhil-hani-266376290/",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-500/40",
    },
    {
      icon: Github,
      label: t("githubLabel"),
      value: "github.com/mfadhilhani",
      href: "https://github.com/mfadhilhani/",
      color: "text-slate-300",
      bg: "bg-slate-500/10 border-slate-500/20 hover:border-slate-500/40",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase block mb-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            {t("sectionSubtitle")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            {t("sectionTitle")}
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
          <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto" style={{ fontFamily: "DM Sans, sans-serif" }}>
            {t("closing")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Social links */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            {socialLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a key={label} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer" className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${bg} group`}>
                <div className={`p-3 rounded-xl bg-[#0f172a] ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {label}
                  </span>
                  <span className={`text-sm font-medium ${color} group-hover:underline`}>{value}</span>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t("namePlaceholder")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-blue-500/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#0f172a] transition-all duration-200"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-blue-500/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#0f172a] transition-all duration-200"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                />
              </div>
              <div>
                <textarea
                  placeholder={t("messagePlaceholder")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-blue-500/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#0f172a] transition-all duration-200 resize-none"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                />
              </div>

              {sent && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-400 text-sm p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Check className="w-4 h-4" />
                  {t("successMessage")}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t("sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t("sendButton")}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

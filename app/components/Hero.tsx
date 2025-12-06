"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 bg-gradient-to-br from-premiumBeige via-white to-[#ffe6d9]">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-12 top-10 h-64 w-64 rounded-full bg-premiumRed/10 blur-3xl" />
        <div className="absolute right-10 -bottom-16 h-72 w-72 rounded-full bg-[#c4ddff]/50 blur-[110px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-premiumRed shadow-sm">
            <Sparkles className="h-4 w-4" />
            Fliesen mit Wohlfühlgarantie
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-premiumCharcoal">
              Freundliche Profis für{" "}
              <span className="text-premiumRed">helle Bäder</span> und
              langlebige Böden in Wien.
            </h1>
            <p className="text-premiumGrey text-lg md:text-xl leading-relaxed">
              Beratung, Planung und Ausführung aus einer Hand – sauber,
              termintreu und mit Blick fürs Detail, damit Sie sich jeden Tag
              richtig wohlfühlen.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[
              { icon: ShieldCheck, label: "20+ Jahre Erfahrung" },
              { icon: CheckCircle2, label: "Sauber & verbindlich" },
              { icon: Clock3, label: "Fixe Termine" },
            ].map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-premiumCharcoal shadow-sm border border-premiumGrey/10"
              >
                <item.icon className="h-4 w-4 text-premiumRed" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-premiumRed px-6 py-3 text-premiumWhite font-semibold shadow-lg shadow-premiumRed/25 transition hover:-translate-y-0.5 hover:bg-[#d0523d]"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-premiumGrey/20 bg-white/70 px-6 py-3 text-premiumCharcoal font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-premiumRed/40"
            >
              Referenzen ansehen
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative rounded-3xl bg-white/80 p-3 shadow-xl border border-white/60 overflow-hidden">
            <div className="absolute inset-x-6 top-6 h-32 rounded-3xl bg-gradient-to-br from-premiumRed/20 via-premiumBeige/60 to-white blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl bg-premiumBeige/70">
              <img
                src="/Hero.png"
                alt="Fliesenarbeiten"
                className="h-[360px] w-full object-cover"
              />
              <div className="absolute left-4 bottom-4 right-4 rounded-xl bg-white/80 backdrop-blur px-4 py-3 shadow-lg border border-premiumGrey/10">
                <div className="flex items-center justify-between text-sm text-premiumCharcoal">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShieldCheck className="h-4 w-4 text-premiumRed" />
                    Zufriedenheits-Versprechen
                  </div>
                  <span className="text-premiumGrey">sauber, freundlich, pünktlich</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

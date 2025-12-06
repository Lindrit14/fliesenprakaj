"use client";

import { motion } from "framer-motion";
import { ClipboardList, Ruler, Construction, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Besichtigung & Beratung",
    text: "Wir sehen uns Ihr Projekt vor Ort an, nehmen Maße und besprechen Ihre Wünsche.",
  },
  {
    icon: Ruler,
    title: "2. Planung & Angebot",
    text: "Sie erhalten ein transparentes, faires Angebot mit klaren Leistungen.",
  },
  {
    icon: Construction,
    title: "3. Ausführung",
    text: "Saubere und präzise Umsetzung – wir achten auf Details und Ordnung.",
  },
  {
    icon: CheckCircle2,
    title: "4. Abnahme & Übergabe",
    text: "Gemeinsame Kontrolle – erst wenn Sie zufrieden sind, sind wir es auch.",
  },
];

export default function Steps() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#fdf3eb] via-white to-[#eef3ff]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-premiumCharcoal mb-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          So läuft Ihr Projekt ab
        </motion.h2>
        <p className="text-center text-premiumGrey max-w-2xl mx-auto mb-10">
          Klar strukturiert, transparent kommuniziert – Sie wissen immer, welcher Schritt als nächstes kommt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-premiumGrey/10 bg-white/90 shadow-md p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-premiumRed/40 via-premiumRed/70 to-premiumRed/40" />
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-premiumRed/12 text-premiumRed">
                  <step.icon size={20} />
                </div>
                <div className="text-xs font-semibold text-premiumGrey/80 uppercase tracking-[0.18em]">
                  Schritt {idx + 1}
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-base text-premiumCharcoal">
                {step.title}
              </h3>
              <p className="text-sm text-premiumGrey leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

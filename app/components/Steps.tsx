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
    <section className="py-20 bg-premiumWhite">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-premiumCharcoal mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          So läuft Ihr Projekt ab
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="bg-premiumBeige/60 rounded-xl p-5 shadow-sm flex flex-col items-start border border-premiumGrey/15"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-premiumRed text-premiumBeige mb-3">
                <step.icon size={20} />
              </div>
              <h3 className="font-semibold mb-1 text-sm text-premiumCharcoal">
                {step.title}
              </h3>
              <p className="text-xs text-premiumGrey">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

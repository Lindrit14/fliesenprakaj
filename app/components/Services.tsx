"use client";

import { motion } from "framer-motion";
import { Hammer, Layers, Ruler } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Badsanierung",
    text: "Komplette Badsanierungen aus einer Hand: Abbruch, Untergrund, Abdichtung, Verlegung und Silikonfugen.",
    image: "/bad-sanierung.jpg",
  },
  {
    icon: Layers,
    title: "Fliesenverlegung",
    text: "Präzise Fliesenarbeiten an Boden, Wand und Stiegen – saubere Schnitte, gerade Fugen, langlebige Ergebnisse.",
    image: "/fliesenboden.jpg",
  },
  {
    icon: Ruler,
    title: "Großformat & Sonderwünsche",
    text: "Großformatfliesen, Nischen, Duschrinnen & Sonderlösungen, die perfekt zu Ihrem Raum passen.",
    image: "/grossformat.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-premiumBeige/80 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-premiumCharcoal mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Unsere Leistungen
        </motion.h2>

        <motion.p
          className="text-center text-premiumGrey max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ob komplettes Bad, neue Küche oder moderner Boden – wir planen und
          realisieren Ihr Projekt mit viel Erfahrung und einem Auge fürs Detail.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-premiumRed/5 via-transparent to-white pointer-events-none opacity-0 group-hover:opacity-100 transition" />
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-premiumRed/12 text-premiumRed flex items-center justify-center shadow-inner">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-premiumGrey/80">
                      Maßgeschneidert
                    </p>
                    <h3 className="text-lg font-semibold text-premiumCharcoal">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-premiumGrey flex-1 leading-relaxed">
                  {s.text}
                </p>
                <span className="text-sm font-semibold text-premiumRed inline-flex items-center gap-2">
                  Mehr erfahren
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

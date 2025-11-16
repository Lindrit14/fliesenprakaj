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
    <section id="services" className="py-20 bg-premiumBeige">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-premiumCharcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Unsere Leistungen
        </motion.h2>

        <motion.p
          className="text-center text-premiumGrey max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ob komplettes Bad, neue Küche oder moderner Boden – wir planen und
          realisieren Ihr Projekt mit viel Erfahrung und einem Auge fürs Detail.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              className="bg-premiumWhite rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-premiumGrey/15 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-premiumRed/10 text-premiumRed flex items-center justify-center">
                    <s.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-premiumCharcoal">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-premiumGrey flex-1">{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

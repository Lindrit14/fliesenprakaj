"use client";

import { motion } from "framer-motion";

const images = [
  "/gallery/projekt1.jpg",
  "/gallery/projekt2.jpg",
  "/gallery/projekt3.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-premiumBeige/70">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-premiumCharcoal mb-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Einblicke in unsere Arbeiten
        </motion.h2>

        <motion.p
          className="text-center text-premiumGrey mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Hier sehen Sie einen kleinen Ausschnitt unserer Projekte – weitere
          Referenzen zeigen wir Ihnen gerne im persönlichen Gespräch.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={src}
              className="overflow-hidden rounded-xl shadow-md bg-premiumGrey/20 border border-premiumGrey/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <img
                src={src}
                alt={`Projekt ${idx + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

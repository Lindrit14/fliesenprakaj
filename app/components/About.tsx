"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HandHeart, Clock } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-premiumWhite border-t border-premiumGrey/10"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-premiumRed tracking-[0.15em] uppercase mb-2">
            Über uns
          </p>
          <h2 className="text-3xl font-bold text-premiumCharcoal mb-4">
            Handwerk mit Erfahrung und Herz
          </h2>
          <p className="text-premiumGrey mb-4">
            Hinter Fliesen Prakaj steht ein Familienbetrieb, der seit vielen
            Jahren für zuverlässige, saubere und präzise Arbeit steht. Uns ist
            wichtig, dass Sie sich in Ihrem Bad, Ihrer Küche oder Ihren
            Wohnräumen wirklich wohlfühlen.
          </p>
          <p className="text-premiumGrey mb-6">
            Wir nehmen uns Zeit für Beratung, erklären verständlich und arbeiten
            so, wie wir es auch bei uns zuhause haben möchten – ordentlich,
            pünktlich und ehrlich.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="text-premiumRed mt-0.5" size={18} />
              <span>Zuverlässig & termintreu</span>
            </div>
            <div className="flex items-start gap-2">
              <HandHeart className="text-premiumRed mt-0.5" size={18} />
              <span>Persönliche Beratung</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="text-premiumRed mt-0.5" size={18} />
              <span>Langlebige Ergebnisse</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl overflow-hidden shadow-md bg-premiumBeige/50 h-64 md:h-80"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Platzhalter-Bild – ersetzen, wenn du ein echtes Foto hast */}
          <img
            src="/about-placeholder.jpg"
            alt="Fliesenarbeiten von Fliesen Prakaj"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

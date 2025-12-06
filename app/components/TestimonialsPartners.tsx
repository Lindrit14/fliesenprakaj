"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Familie H.",
    project: "Badsanierung, 11. Bezirk",
    text: "Sehr sauber gearbeitet, Termine eingehalten und immer freundlich. Wir fühlen uns im neuen Bad richtig wohl.",
    rating: 5,
  },
  {
    name: "Martin K.",
    project: "Küchenrückwand & Boden",
    text: "Top Beratung, klare Kommunikation und ein super Ergebnis. Die Fliesen sind perfekt ausgerichtet.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    project: "Boden in Holzoptik",
    text: "Robust, pflegeleicht und sieht aus wie echtes Holz. Baustelle wurde jeden Tag sauber hinterlassen.",
    rating: 5,
  },
];

const partners = [
  { name: "Mapei", logo: "/partners/mapei.svg" },
  { name: "Schlüter", logo: "/partners/schlueter.svg" },
  { name: "Keraben", logo: "/partners/keraben.svg" },
  { name: "Laticrete", logo: "/partners/laticrete.svg" },
];

export default function TestimonialsPartners() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#eef3ff] via-white to-premiumBeige/70">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3">
          <p className="inline-flex items-center rounded-full bg-premiumRed/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-premiumRed">
            Bewertungen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-premiumCharcoal">
            Was Kunden über uns sagen
          </h2>
          <p className="text-premiumGrey max-w-2xl mx-auto">
            Persönliche Betreuung, saubere Arbeit und langlebige Ergebnisse – das hören wir am häufigsten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.name}
              className="relative rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-md p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Quote className="h-6 w-6 text-premiumRed/60 mb-3" />
              <p className="text-premiumCharcoal font-semibold">{item.project}</p>
              <p className="text-sm text-premiumGrey mb-3 leading-relaxed">{item.text}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="text-premiumCharcoal font-semibold">{item.name}</div>
                <div className="flex items-center gap-1 text-premiumRed">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-premiumRed text-premiumRed" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="rounded-3xl border border-premiumGrey/10 bg-white/90 shadow-md p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="inline-flex items-center rounded-full bg-premiumRed/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-premiumRed">
                Partner
              </p>
              <h3 className="text-xl font-semibold text-premiumCharcoal">
                Starke Marken für langlebige Ergebnisse
              </h3>
              <p className="text-sm text-premiumGrey max-w-xl">
                Wir arbeiten mit hochwertigen Klebern, Abdichtungen und Fliesenherstellern, damit Sie lange Freude an Ihrem Projekt haben.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-16 items-center justify-center rounded-xl border border-premiumGrey/15 bg-white/80 px-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, HandHeart, ShieldCheck, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-premiumWhite py-20"
    >
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-premiumRed/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-premiumGrey/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-premiumRed/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-premiumRed">
            <Sparkles className="h-3.5 w-3.5" />
            Über uns
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-premiumCharcoal leading-tight">
              Handwerk mit Erfahrung{" "}
              <span className="text-premiumRed">und Herz</span>
            </h2>
            <p className="text-premiumGrey text-base leading-relaxed">
              Hinter Fliesen Prakaj steht ein Familienbetrieb, der seit vielen
              Jahren für zuverlässige, saubere und präzise Arbeit steht. Uns ist
              wichtig, dass Sie sich in Ihrem Bad, Ihrer Küche oder Ihren
              Wohnräumen wirklich wohlfühlen.
            </p>
            <p className="text-premiumGrey text-base leading-relaxed">
              Wir nehmen uns Zeit für Beratung, erklären verständlich und arbeiten
              so, wie wir es auch bei uns zuhause haben möchten – ordentlich,
              pünktlich und ehrlich.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-premiumGrey/15 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <HandHeart className="h-5 w-5 text-premiumRed" />
                <h3 className="text-premiumCharcoal font-semibold">
                  Persönliche Begleitung
                </h3>
              </div>
              <p className="text-sm text-premiumGrey">
                Wir hören zu, planen gemeinsam und schaffen Räume, die zu Ihrem Alltag passen.
              </p>
            </div>
            <div className="rounded-xl border border-premiumGrey/15 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-5 w-5 text-premiumRed" />
                <h3 className="text-premiumCharcoal font-semibold">
                  Präzise Ausführung
                </h3>
              </div>
              <p className="text-sm text-premiumGrey">
                Sorgfältige Vorbereitung, saubere Baustellen und langlebige Ergebnisse.
              </p>
            </div>
            <div className="rounded-xl border border-premiumGrey/15 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-5 w-5 text-premiumRed" />
                <h3 className="text-premiumCharcoal font-semibold">
                  Verlässlich & termintreu
                </h3>
              </div>
              <p className="text-sm text-premiumGrey">
                Klare Absprachen, verbindliche Zeitpläne und direkte Kommunikation.
              </p>
            </div>
            <div className="rounded-xl border border-premiumGrey/15 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-5 w-5 text-premiumRed" />
                <h3 className="text-premiumCharcoal font-semibold">
                  Gut geplant
                </h3>
              </div>
              <p className="text-sm text-premiumGrey">
                Wir koordinieren Gewerke, damit Ihr Projekt reibungslos fertig wird.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-premiumRed/20 via-premiumBeige/60 to-premiumWhite p-[10px] shadow-lg">
            <div className="relative overflow-hidden rounded-xl bg-premiumBeige/60">
              <img
                src="/about-placeholder.jpg"
                alt="Fliesenarbeiten von Fliesen Prakaj"
                className="h-72 w-full object-cover md:h-[22rem]"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/50 bg-white/70 px-4 py-3 shadow-md backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-premiumRed/10 text-premiumRed">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-premiumCharcoal">
                      Detailverliebt
                    </p>
                    <p className="text-xs text-premiumGrey">
                      Saubere Kanten, gleichmäßige Fugen, dauerhafte Freude.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

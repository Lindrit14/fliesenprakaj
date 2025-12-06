"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Images } from "lucide-react";

type Project = {
  title: string;
  cover: string;
  description: string;
  details: string[];
  photos: string[];
};

const projects: Project[] = [
  {
    title: "Modernes Bad mit Walk-in-Dusche",
    cover: "/gallery/projekt1.jpg",
    description: "Helles Bad mit bodenebener Dusche, Nische und fugenarmen Großformaten.",
    details: [
      "Großformat 120x60 cm, fugenarm verlegt",
      "Integrierte Nischen mit LED",
      "Rutschhemmender Duschbereich",
    ],
    photos: ["/gallery/projekt1.jpg", "/gallery/projekt2.jpg", "/gallery/projekt3.jpg"],
  },
  {
    title: "Warme Holzoptik am Boden",
    cover: "/gallery/projekt2.jpg",
    description: "Pflegeleichter Fliesenboden in Holzoptik – robust und gemütlich.",
    details: [
      "Feinsteinzeug in Holzoptik, durchgefärbt",
      "Gerade Fuge für ruhiges Bild",
      "Sockelleisten aus Fliese geschnitten",
    ],
    photos: ["/gallery/projekt2.jpg", "/gallery/projekt1.jpg", "/gallery/projekt3.jpg"],
  },
  {
    title: "Elegante Küche & Rückwand",
    cover: "/gallery/projekt3.jpg",
    description: "Küchenrückwand in Steinoptik mit leicht zu reinigender Oberfläche.",
    details: [
      "Steinoptik 60x30 cm mit schmaler Fuge",
      "Saubere Kantenabschlüsse",
      "Hitze- und spritzbeständig",
    ],
    photos: ["/gallery/projekt3.jpg", "/gallery/projekt1.jpg", "/gallery/projekt2.jpg"],
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [previewIndex, setPreviewIndex] = useState(0);

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-premiumBeige/60">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-premiumCharcoal mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Einblicke in unsere Arbeiten
        </motion.h2>

        <motion.p
          className="text-center text-premiumGrey max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Klicken Sie auf ein Projekt, um mehr Fotos und Details zu sehen.
        </motion.p>

        <div className="rounded-3xl bg-white/90 border border-premiumGrey/10 shadow-md p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, idx) => (
              <motion.button
                type="button"
                key={project.title}
                className={`relative overflow-hidden rounded-2xl border transition shadow-sm ${
                  activeIndex === idx
                    ? "border-premiumRed/50 shadow-lg"
                    : "border-premiumGrey/15 hover:shadow-md"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => {
                  setActiveIndex(idx);
                  setPreviewIndex(0);
                }}
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-premiumWhite drop-shadow">
                    <Images className="h-4 w-4" />
                    {project.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-premiumGrey/10 bg-premiumBeige/40 p-4 md:p-6 shadow-inner"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-xl bg-white/80 border border-premiumGrey/15 shadow">
                      <img
                        src={activeProject.photos[previewIndex]}
                        alt={activeProject.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-white/85 px-3 py-2 text-sm text-premiumCharcoal shadow">
                        <span className="font-semibold">{activeProject.title}</span>
                        <span className="text-premiumGrey">
                          Foto {previewIndex + 1} / {activeProject.photos.length}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-1">
                      {activeProject.photos.map((photo, pIdx) => (
                        <button
                          type="button"
                          key={photo + pIdx}
                          onClick={() => setPreviewIndex(pIdx)}
                          className={`h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border transition ${
                            previewIndex === pIdx
                              ? "border-premiumRed/60 shadow"
                              : "border-premiumGrey/20 hover:border-premiumRed/40"
                          }`}
                        >
                          <img src={photo} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-premiumCharcoal">
                      {activeProject.title}
                    </h3>
                    <p className="text-premiumGrey leading-relaxed">
                      {activeProject.description}
                    </p>
                    <div className="space-y-2">
                      {activeProject.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2 text-sm text-premiumCharcoal">
                          <CheckCircle2 className="h-4 w-4 text-premiumRed mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#kontakt"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-premiumRed hover:underline"
                    >
                      Ähnliches Projekt anfragen
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-premiumCharcoal/70 to-premiumCharcoal/85 bg-black/50"  />

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className=" text-4xl md:text-6xl font-bold mb-4">
          Ihr Fliesenleger für hochwertige Bäder & Böden in Wien
        </h1>

        <p className="text-premiumWhite text-lg md:text-2xl mb-8">
          Seit über 20 Jahren stehen wir für präzise Verlegung, saubere Arbeit  
          und langlebige Qualität — fair, zuverlässig und persönlich.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#kontakt"
            className="bg-premiumRed text-premiumBeige font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#6d2f24] transition"
          >
            Kostenloses Angebot anfordern
          </a>
          <a
            href="#gallery"
            className="border border-premiumBeige/60 text-premiumBeige px-8 py-3 rounded-md hover:bg-premiumBeige/10 transition"
          >
            Referenzen ansehen
          </a>
        </div>
      </motion.div>
    </section>
  );
}

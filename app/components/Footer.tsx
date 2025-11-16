"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-premiumCharcoal text-premiumBeige py-6 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <p>
          © {new Date().getFullYear()} Fliesen Prakaj – Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-premiumRed transition">
            Impressum
          </a>
          <a href="#" className="hover:text-premiumRed transition">
            Datenschutz
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

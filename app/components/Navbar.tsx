"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 bg-premiumBeige/90 backdrop-blur border-b border-premiumGrey/20 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Fliesen Prakaj Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <div className="leading-tight">
              <div className="text-premiumCharcoal font-semibold text-lg">
                Fliesen Prakaj
              </div>
              <div className="text-premiumGrey text-xs">
                Handwerk mit Präzision & Leidenschaft
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-premiumCharcoal text-sm font-medium">
            <a href="#services" className="hover:text-premiumRed transition">Leistungen</a>
            <a href="#gallery" className="hover:text-premiumRed transition">Referenzen</a>
            <a href="#about" className="hover:text-premiumRed transition">Über uns</a>
            <a href="#kontakt" className="hover:text-premiumRed transition">Kontakt</a>

            <a
              href="tel:+436644456521"
              className="flex items-center gap-2 bg-premiumRed text-premiumBeige px-4 py-2 rounded-md shadow hover:bg-[#6d2f24] transition"
            >
              <Phone size={18} /> +43 664 445 6521
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-premiumCharcoal"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-premiumCharcoal/95 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-5 right-5 text-premiumBeige"
              onClick={() => setOpen(false)}
            >
              <X size={32} />
            </button>

            <motion.nav
              className="flex flex-col items-center justify-center h-full gap-8 text-premiumBeige text-2xl font-semibold"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <a href="#services" onClick={() => setOpen(false)}>Leistungen</a>
              <a href="#gallery" onClick={() => setOpen(false)}>Referenzen</a>
              <a href="#about" onClick={() => setOpen(false)}>Über uns</a>
              <a href="#kontakt" onClick={() => setOpen(false)}>Kontakt</a>

              <a
                href="tel:+436644456521"
                className="mt-6 bg-premiumRed hover:bg-[#6d2f24] px-6 py-3 rounded-lg shadow text-lg flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Phone /> Jetzt anrufen
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, User } from "lucide-react";
import { sendMail } from "../actions/sendMail";

export default function ContactForm() {
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    const res = await sendMail(formData);
    setStatus(res.success ? "success" : "error");
    setLoading(false);
  }

  return (
    <section id="kontakt" className="py-24 bg-gradient-to-br from-premiumBeige/70 via-white to-[#eef2ff]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-premiumRed/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-premiumRed mb-4">
            Kontakt
          </div>
          <h2 className="text-3xl font-bold text-premiumCharcoal mb-3">
            Erzählen Sie uns von Ihrem Projekt
          </h2>
          <p className="text-premiumGrey mb-6 leading-relaxed">
            Schicken Sie uns eine kurze Beschreibung – gerne mit Infos zu Raum,
            Fliesengröße und Wunschoptik. Wir melden uns zeitnah bei Ihnen.
          </p>

          <div className="space-y-3 rounded-2xl border border-premiumGrey/10 bg-white/90 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-premiumRed/12 text-premiumRed">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-premiumGrey">Telefon</p>
                <a
                  href="tel:+436644456521"
                  className="text-premiumCharcoal font-semibold hover:text-premiumRed transition"
                >
                  +43 664 445 6521
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-premiumRed/12 text-premiumRed">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-premiumGrey">E-Mail</p>
                <a
                  href="mailto:office@fliesenprakaj.at"
                  className="text-premiumCharcoal font-semibold hover:text-premiumRed transition"
                >
                  office@fliesenprakaj.at
                </a>
              </div>
            </div>
            <p className="text-xs text-premiumGrey pt-2">
              Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
          </div>
        </motion.div>

        <motion.form
          action={handleSubmit}
          className="bg-white/95 rounded-3xl shadow-xl p-7 space-y-4 border border-premiumGrey/10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative">
            <User className="absolute left-3 top-3 text-premiumGrey/60" size={18} />
            <input
              name="name"
              type="text"
              required
              placeholder="Ihr Name"
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-premiumGrey/25 focus:outline-none focus:ring-2 focus:ring-premiumRed focus:border-premiumRed text-sm bg-white/80 shadow-inner"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-premiumGrey/60" size={18} />
            <input
              name="email"
              type="email"
              required
              placeholder="Ihre E-Mail"
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-premiumGrey/25 focus:outline-none focus:ring-2 focus:ring-premiumRed focus:border-premiumRed text-sm bg-white/80 shadow-inner"
            />
          </div>

          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-3 text-premiumGrey/60"
              size={18}
            />
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Ihre Nachricht (Projekt, Raum, Fliesenwunsch...)"
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-premiumGrey/25 focus:outline-none focus:ring-2 focus:ring-premiumRed focus:border-premiumRed text-sm resize-none bg-white/80 shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-premiumRed hover:bg-[#d0523d] disabled:bg-premiumGrey text-premiumWhite font-semibold py-3 rounded-lg shadow-lg shadow-premiumRed/20 transition"
          >
            {loading ? "Wird gesendet..." : "Nachricht senden"}
          </button>

          {status === "success" && (
            <p className="text-emerald-600 text-sm text-center mt-1">
              ✔ Ihre Nachricht wurde erfolgreich gesendet.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center mt-1">
              ❌ Es gab ein Problem beim Senden. Bitte später erneut versuchen.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

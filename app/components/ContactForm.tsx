"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
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
    <section id="kontakt" className="py-24 bg-premiumWhite">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold text-premiumRed tracking-[0.15em] uppercase mb-2">
            Kontakt
          </p>
          <h2 className="text-3xl font-bold text-premiumCharcoal mb-4">
            Erzählen Sie uns von Ihrem Projekt
          </h2>
          <p className="text-premiumGrey mb-4">
            Schicken Sie uns eine kurze Beschreibung – gerne mit Infos zu Raum,
            Fliesengröße und Wunschoptik. Wir melden uns zeitnah bei Ihnen.
          </p>
          <p className="text-premiumCharcoal mb-2">
            <strong>Telefon:</strong>{" "}
            <a
              href="tel:+436644456521"
              className="text-premiumRed hover:underline"
            >
              +43 664 445 6521
            </a>
          </p>
          <p className="text-premiumCharcoal mb-2">
            <strong>E-Mail:</strong>{" "}
            <a
              href="mailto:office@fliesenprakaj.at"
              className="text-premiumRed hover:underline"
            >
              office@fliesenprakaj.at
            </a>
          </p>
          <p className="text-xs text-premiumGrey mt-4">
            Hinweis: Ihre Daten werden vertraulich behandelt und nur zur
            Bearbeitung Ihrer Anfrage verwendet.
          </p>
        </motion.div>

        <motion.form
          action={handleSubmit}
          className="bg-premiumBeige rounded-2xl shadow-lg p-6 space-y-4 border border-premiumGrey/20"
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
              className="w-full pl-9 pr-3 py-2 rounded-md border border-premiumGrey/40 focus:outline-none focus:ring-2 focus:ring-premiumRed focus:border-premiumRed text-sm bg-premiumWhite"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-premiumGrey/60" size={18} />
            <input
              name="email"
              type="email"
              required
              placeholder="Ihre E-Mail"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-premiumGrey/40 focus:outline-none focus:ring-2 focus:ring-premiumRed focus:border-premiumRed text-sm bg-premiumWhite"
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
              className="w-full pl-9 pr-3 py-2 rounded-md border border-premiumGrey/40 focus:outline-none focus:ring-2 focus:ring-premiumRed focus:border-premiumRed text-sm resize-none bg-premiumWhite"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-premiumRed hover:bg-[#6d2f24] disabled:bg-premiumGrey text-premiumBeige font-semibold py-2.5 rounded-md shadow transition"
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

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-premiumBeige/60 via-white to-[#eef3ff] text-premiumCharcoal">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
        <div className="space-y-3 text-center">
          <p className="inline-flex items-center rounded-full bg-premiumRed/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-premiumRed">
            Impressum
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Angaben gemäß § 5 ECG</h1>
          <p className="text-premiumGrey max-w-3xl mx-auto">
            Transparente Informationen zu Anbieter, Kontakt und rechtlichen Hinweisen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-2">
            <h2 className="text-xl font-semibold">Verantwortlich</h2>
            <p>Fliesen Prakaj</p>
            <p>Wien (genaue Adresse bitte ergänzen)</p>
            <p>Österreich</p>
          </section>

          <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-2">
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a className="text-premiumRed hover:underline" href="tel:+436644456521">
                +43 664 445 6521
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a className="text-premiumRed hover:underline" href="mailto:office@fliesenprakaj.at">
                office@fliesenprakaj.at
              </a>
            </p>
            <p>Website: fliesenprakaj.at</p>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-2">
            <h2 className="text-xl font-semibold">Unternehmensdaten</h2>
            <p>Rechtsform: Einzelunternehmen</p>
            <p>Firmenbuchnummer: (falls vorhanden, bitte ergänzen)</p>
            <p>UID-Nr.: (bitte ergänzen)</p>
            <p>Mitglied der WKÖ, Landesinnung: Bau/Hafner/Plattenleger</p>
          </section>

          <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-2">
            <h2 className="text-xl font-semibold">Berufsrechtliche Angaben</h2>
            <p>Berufsbezeichnung: Platten- und Fliesenleger</p>
            <p>Zuständige Behörde: Magistratisches Bezirksamt Wien</p>
            <p>Gewerbeordnung: <a className="text-premiumRed hover:underline" href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer">www.ris.bka.gv.at</a></p>
          </section>
        </div>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
          <p className="text-premiumGrey leading-relaxed">
            Alle Inhalte wurden sorgfältig geprüft. Für Aktualität, Vollständigkeit oder Richtigkeit kann keine Haftung übernommen werden.
            Für Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Urheberrecht</h2>
          <p className="text-premiumGrey leading-relaxed">
            Texte, Fotos und Grafiken auf dieser Website sind urheberrechtlich geschützt. Eine Verwendung ohne ausdrückliche Zustimmung ist nicht gestattet.
          </p>
        </section>
      </div>
    </main>
  );
}

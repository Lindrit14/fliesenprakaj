export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-premiumBeige/60 via-white to-[#eef3ff] text-premiumCharcoal">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
        <div className="space-y-3 text-center">
          <p className="inline-flex items-center rounded-full bg-premiumRed/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-premiumRed">
            Datenschutz
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>
          <p className="text-premiumGrey max-w-3xl mx-auto">
            Wir behandeln Ihre Daten vertraulich und gemäß den gesetzlichen Vorgaben (DSGVO, TKG 2003).
          </p>
        </div>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Verantwortlicher</h2>
          <p>Fliesen Prakaj</p>
          <p>E-Mail: <a className="text-premiumRed hover:underline" href="mailto:office@fliesenprakaj.at">office@fliesenprakaj.at</a></p>
          <p>Telefon: <a className="text-premiumRed hover:underline" href="tel:+436644456521">+43 664 445 6521</a></p>
          <p>Adresse: Wien (genaue Adresse bitte ergänzen)</p>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Erhobene Daten</h2>
          <ul className="list-disc pl-5 space-y-1 text-premiumGrey">
            <li>Kontaktdaten aus dem Formular (Name, E-Mail, Nachricht).</li>
            <li>Technische Daten beim Besuch der Website (IP-Adresse, Browser, Uhrzeit, Seitenaufrufe), gespeichert in Server-Logs.</li>
            <li>Cookies nur in dem Umfang, wie für den Betrieb und optionale Dienste erforderlich.</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Zweck und Rechtsgrundlage</h2>
          <ul className="list-disc pl-5 space-y-1 text-premiumGrey">
            <li>Beantwortung von Anfragen und Angebotslegung (Art. 6 Abs. 1 lit. b DSGVO).</li>
            <li>Wahrung berechtigter Interessen wie Betrieb und Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO).</li>
            <li>Erfüllung gesetzlicher Pflichten, z. B. Aufbewahrungsfristen (Art. 6 Abs. 1 lit. c DSGVO).</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Speicherdauer</h2>
          <p className="text-premiumGrey leading-relaxed">
            Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist.
            Kontaktanfragen werden nach Abschluss oder Wegfall der Notwendigkeit gelöscht, gesetzliche Aufbewahrungspflichten bleiben unberührt.
          </p>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Weitergabe an Dritte</h2>
          <p className="text-premiumGrey leading-relaxed">
            Eine Weitergabe erfolgt nur, wenn sie zur Vertragserfüllung notwendig ist, auf Basis Ihrer Einwilligung,
            oder zur Erfüllung rechtlicher Verpflichtungen. Es erfolgt keine Weitergabe zu Werbezwecken an Dritte.
          </p>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Ihre Rechte</h2>
          <ul className="list-disc pl-5 space-y-1 text-premiumGrey">
            <li>Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung.</li>
            <li>Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen.</li>
            <li>Datenübertragbarkeit, soweit anwendbar.</li>
            <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft.</li>
            <li>Beschwerde bei der zuständigen Datenschutzbehörde (in Österreich: <a className="text-premiumRed hover:underline" href="https://www.dsb.gv.at" target="_blank" rel="noreferrer">www.dsb.gv.at</a>).</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Cookies & Analyse</h2>
          <p className="text-premiumGrey leading-relaxed">
            Diese Website setzt nur technisch notwendige Cookies, sofern keine weiteren Dienste integriert sind.
            Falls Analyse- oder Marketing-Tools eingebunden werden, informieren wir vorab und holen erforderliche Einwilligungen ein.
          </p>
        </section>

        <section className="rounded-2xl bg-white/90 border border-premiumGrey/10 shadow-sm p-6 space-y-3">
          <h2 className="text-xl font-semibold">Kontakt bei Fragen</h2>
          <p className="text-premiumGrey leading-relaxed">
            Für Datenschutzanfragen oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte per E-Mail oder Telefon.
          </p>
        </section>
      </div>
    </main>
  );
}

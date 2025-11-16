import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fliesen Prakaj | Professionelle Fliesenleger in Wien",
  description:
    "Fliesen Prakaj – Ihr Experte für Fliesenverlegung, Badsanierung, Großformatfliesen und professionelle Fliesenarbeiten in Wien & Umgebung.",
  keywords: [
    "Fliesenleger Wien",
    "Fliesen Wien",
    "Badsanierung Wien",
    "Großformatfliesen",
    "Fliesensanierung",
    "Fliese-auf-Fliese",
    "Dusche Fliesen",
    "Bodenfliesen",
  ],
  openGraph: {
    title: "Fliesen Prakaj | Professionelle Fliesenleger in Wien",
    description:
      "Fliesen Prakaj – hochwertige Fliesenverlegung, Sanierung, Badezimmer, Großformat & mehr.",
    url: "https://deine-domain-hier.at",
    siteName: "Fliesen Prakaj",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

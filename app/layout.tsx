import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neurodiverse Strategies – Neuroinclusive Workplace Consulting",
  description:
    "Neurodiverse Strategies partners with organizations to design, implement, and sustain neuroinclusive workplace cultures through evidence-based consulting, audits, and leadership development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Libre+Baskerville:wght@400;700&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}


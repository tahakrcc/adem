import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://malatyahidrofor.com'),
  title: "Malatya Hidrofor & Dalgıç Pompa Servisi - Ak Hidrofor",
  description: "Malatya hidrofor servisi, dalgıç pompa tamiri, kuyu sondaj ve su pompası montajı. 7/24 yerinde teknik servis hizmeti. Ak Dalgıç Pompa güvencesiyle.",
  keywords: [
    "Malatya Hidrofor",
    "Malatya Hidrofor Servisi",
    "Malatya Dalgıç Pompa",
    "Malatya Su Pompası Tamiri",
    "Adem Hidrofor Malatya",
    "Ak Dalgıç Pompa",
    "Malatya Kuyu Sondaj",
    "Yeşilyurt Hidrofor Tamircisi",
    "Battalgazi Hidrofor"
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

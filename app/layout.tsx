import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solidarity Law Office - Kantor Pengacara dan Konsultan Hukum Profesional di Semarang",
  description: "Solidarity Law Office adalah kantor pengacara di Semarang yang menyediakan jasa konsultasi hukum, litigasi, dan layanan legal profesional untuk individu dan perusahaan dengan pendekatan terpercaya dan strategis.",
  verification: {
    google: "Rz-qbJHxNeeO0qNzQua-InTXCCd0YNTr5NLMlvOQVS4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
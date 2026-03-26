"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

type Lang = "en" | "id";

const content = {
  en: {
    heroTitle: "Professional Legal Services",
    heroSubtitle: "Reliable legal solutions for individuals and businesses",

    about: "About",
    practice: "Practice Areas",
    team: "Our Team",
    contact: "Contact",
    articles: "Articles",
    consultation: "Consultation",

    tagline: "Defending Your Rights Relentlessly",
  },

  id: {
    heroTitle: "Layanan Hukum Profesional",
    heroSubtitle: "Solusi hukum terpercaya untuk individu dan bisnis",

    about: "Tentang Kami",
    practice: "Bidang Praktik",
    team: "Tim Kami",
    contact: "Kontak",
    articles: "Artikel",
    consultation: "Konsultasi",

    tagline: "Membela Hak Anda Tanpa Henti",
  },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof content)["en"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: content[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return ctx;
}
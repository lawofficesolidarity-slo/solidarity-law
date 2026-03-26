"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-950">Solidarity Law Office</p>
          <p className="text-sm text-slate-600">{t.tagline}</p>
        </div>
        <p className="text-sm text-slate-600">
          © 2026 Solidarity Law Office. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
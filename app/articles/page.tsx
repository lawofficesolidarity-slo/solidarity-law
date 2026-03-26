"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function ArticlesPage() {
  const { lang } = useLanguage();
  const isID = lang === "id";

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-black px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          {isID ? "AKAN DATANG" : "COMING SOON"}
        </h1>

        <p className="mt-4 text-slate-400">
          {isID
            ? "Halaman artikel sedang dalam tahap pengembangan."
            : "The articles page is currently under development."}
        </p>
      </div>
    </section>
  );
}
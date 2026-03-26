"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: t.about },
    { href: "/practice-areas", label: t.practice },
    { href: "/our-team", label: t.team },
    { href: "/contact", label: t.contact },
    { href: "/articles", label: t.articles },
    { href: "/consultation", label: t.consultation },
  ];

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex justify-center">
            <img
              src="/logo.png"
              alt="Solidarity Law Office"
              className="h-44 w-auto sm:h-52 md:h-60"
            />
          </Link>

          <div className="mt-8 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          <div className="mt-6 flex w-full flex-col items-center gap-5">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] font-medium tracking-[0.02em] text-slate-700">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative pb-1 transition duration-200 ${
                      active
                        ? "font-semibold text-slate-950"
                        : "hover:text-amber-700"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-amber-600 transition-all duration-200 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex w-full items-center justify-center sm:justify-end">
              <div className="flex overflow-hidden rounded-xl border border-slate-300 text-sm font-semibold shadow-sm">
                <button
                  onClick={() => setLang("en")}
                  className={`px-4 py-2.5 transition ${
                    lang === "en"
                      ? "bg-slate-950 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("id")}
                  className={`px-4 py-2.5 transition ${
                    lang === "id"
                      ? "bg-slate-950 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  ID
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
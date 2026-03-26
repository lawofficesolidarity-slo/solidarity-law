"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { content } from "@/lib/content";

export default function OurTeamPage() {
  const { lang } = useLanguage();
  const team = content[lang].team;

  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            {team.label}
          </p>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            {team.title.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              {lang === "id" ? "Advokat" : "Lawyer"}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </div>

        <div>
          {team.members.map((member, index) => (
            <div key={member.name}>
              <div className="grid gap-10 lg:grid-cols-[360px_1fr] items-start">
                <div>
                  <div className="flex h-[460px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="mt-5 text-center lg:text-left">
                    <h2 className="text-lg font-semibold text-white">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-amber-500">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-[15px] leading-8 text-slate-300 text-justify">
                  {(member.bio || "Bio belum tersedia")
                    .split("\n\n")
                    .map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                </div>
              </div>

              {index !== team.members.length - 1 && (
                <div className="my-16 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                  <div className="h-1 w-1 rounded-full bg-amber-600" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {team.paralegals && team.paralegals.length > 0 && (
          <div className="mt-20">
            <div className="my-16 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                Paralegal
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {team.paralegals.map((person) => (
                <div key={person.name} className="text-center">
                  <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {person.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
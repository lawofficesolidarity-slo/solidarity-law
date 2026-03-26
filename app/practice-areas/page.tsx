"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function PracticeAreasPage() {
  const { lang } = useLanguage();
  const isID = lang === "id";

  const label = isID ? "Bidang Praktik" : "Practice Areas";
  const heading = isID
    ? "Layanan hukum yang kami tangani"
    : "Legal services we handle";
  const intro = isID
    ? "Solidarity Law Office memberikan layanan hukum yang komprehensif bagi individu, perusahaan, dan institusi. Setiap bidang praktik kami tangani dengan pendekatan yang strategis, profesional, dan berorientasi pada solusi."
    : "Solidarity Law Office provides comprehensive legal services for individuals, corporations, and institutions. Each practice area is handled with a strategic, professional, and solution-oriented approach.";

  const areas = isID
    ? [
        {
          title: "Hukum Perdata",
          description:
            "Menangani berbagai permasalahan hukum perdata, termasuk sengketa, wanprestasi, dan penyusunan perjanjian secara profesional dan strategis.",
        },
        {
          title: "Hukum Pidana",
          description:
            "Memberikan pendampingan hukum dalam perkara pidana, baik pada tahap penyelidikan, penyidikan, hingga proses persidangan.",
        },
        {
          title: "Hukum Keluarga",
          description:
            "Menangani perkara keluarga seperti perceraian, hak asuh anak, dan warisan dengan pendekatan yang bijak dan solutif.",
        },
        {
          title: "Hukum Bisnis & Korporasi",
          description:
            "Memberikan layanan hukum bagi perusahaan, termasuk aspek operasional, kepatuhan, dan pengelolaan risiko hukum.",
        },
        {
          title: "Litigasi & Penyelesaian Sengketa",
          description:
            "Mewakili klien dalam proses litigasi di pengadilan maupun penyelesaian sengketa di luar pengadilan.",
        },
        {
          title: "Pendirian Perusahaan",
          description:
            "Membantu proses pendirian badan usaha secara legal dan sesuai regulasi yang berlaku.",
        },
        {
          title: "Perizinan & Legalitas Usaha",
          description:
            "Mengurus perizinan dan memastikan kegiatan usaha berjalan sesuai ketentuan hukum.",
        },
        {
          title: "Kontrak & Drafting Agreement",
          description:
            "Menyusun dan meninjau kontrak untuk memastikan perlindungan hukum yang optimal.",
        },
        {
          title: "Merger & Akuisisi (M&A)",
          description:
            "Memberikan pendampingan hukum dalam proses merger, akuisisi, dan restrukturisasi perusahaan.",
        },
        {
          title: "Kepailitan & PKPU",
          description:
            "Menangani perkara kepailitan dan penundaan kewajiban pembayaran utang secara profesional.",
        },
        {
          title: "Hukum Properti & Pertanahan",
          description:
            "Menangani aspek hukum terkait properti dan pertanahan, termasuk sengketa dan legalitas.",
        },
        {
          title: "Hukum Ketenagakerjaan",
          description:
            "Memberikan solusi hukum dalam hubungan kerja antara perusahaan dan tenaga kerja.",
        },
        {
          title: "Hukum Pajak",
          description:
            "Memberikan konsultasi dan pendampingan terkait kewajiban perpajakan.",
        },
      ]
    : [
        {
          title: "Civil Law",
          description:
            "Handling a wide range of civil matters, including disputes, breaches of contract, and legal agreements with a strategic approach.",
        },
        {
          title: "Criminal Law",
          description:
            "Providing legal assistance in criminal cases from investigation to court proceedings.",
        },
        {
          title: "Family Law",
          description:
            "Handling family-related matters such as divorce, child custody, and inheritance with a thoughtful approach.",
        },
        {
          title: "Corporate & Business Law",
          description:
            "Delivering legal services for companies, including compliance, operations, and risk management.",
        },
        {
          title: "Litigation & Dispute Resolution",
          description:
            "Representing clients in court litigation and alternative dispute resolution processes.",
        },
        {
          title: "Company Establishment",
          description:
            "Assisting in the legal establishment of business entities in compliance with regulations.",
        },
        {
          title: "Licensing & Business Compliance",
          description:
            "Ensuring business operations comply with legal and regulatory requirements.",
        },
        {
          title: "Contract Drafting & Review",
          description:
            "Drafting and reviewing agreements to ensure optimal legal protection.",
        },
        {
          title: "Merger & Acquisition (M&A)",
          description:
            "Providing legal support in mergers, acquisitions, and corporate restructuring.",
        },
        {
          title: "Bankruptcy & Suspension of Debt Payment (PKPU)",
          description:
            "Handling bankruptcy and debt restructuring cases professionally.",
        },
        {
          title: "Property & Land Law",
          description:
            "Managing legal aspects of property and land, including disputes and ownership.",
        },
        {
          title: "Employment Law",
          description:
            "Providing legal solutions in employer-employee relations.",
        },
        {
          title: "Tax Law",
          description:
            "Offering legal advice and assistance related to taxation matters.",
        },
      ];

  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            {label}
          </p>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {heading}
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-amber-600/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-10 w-10 rounded-full border border-amber-600/40 bg-amber-600/10" />

              <h2 className="text-xl font-semibold text-white">
                {area.title}
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
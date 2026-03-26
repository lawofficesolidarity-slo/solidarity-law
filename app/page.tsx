"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { lang } = useLanguage();

  const isID = lang === "id";

  const heroTitle = isID
    ? "Layanan Hukum Profesional dan Terpercaya"
    : "Professional and Trusted Legal Services";

  const heroSubtitle = isID
    ? "Memberikan solusi hukum yang strategis, efektif, dan berorientasi pada hasil bagi individu maupun bisnis."
    : "Providing strategic, effective, and results-oriented legal solutions for individuals and businesses.";

  const heroPrimary = isID ? "Konsultasi Sekarang" : "Consult Now";
  const heroSecondary = isID ? "Lihat Area Praktik" : "View Practice Areas";

  const whyLabel = isID ? "Keunggulan Kami" : "Why Choose Us";
  const whyTitle = isID
    ? "Komitmen kami dalam memberikan layanan hukum terbaik"
    : "Our commitment to delivering outstanding legal services";

  const whyItems = isID
    ? [
        {
          title: "Pendekatan Strategis",
          desc: "Setiap perkara dianalisis secara cermat untuk menghasilkan strategi hukum yang tepat sasaran.",
        },
        {
          title: "Profesional dan Responsif",
          desc: "Kami menjunjung profesionalisme dan merespons kebutuhan klien secara cepat dan tepat.",
        },
        {
          title: "Berorientasi pada Hasil",
          desc: "Setiap langkah hukum diarahkan untuk memberikan hasil yang efektif dan bernilai bagi klien.",
        },
      ]
    : [
        {
          title: "Strategic Approach",
          desc: "Every matter is carefully analyzed to produce well-targeted legal strategies.",
        },
        {
          title: "Professional and Responsive",
          desc: "We uphold professionalism and respond to client needs promptly and effectively.",
        },
        {
          title: "Results-Oriented",
          desc: "Every legal step is directed toward delivering effective and valuable outcomes for our clients.",
        },
      ];

  const practiceLabel = isID ? "Area Praktik" : "Practice Areas";
  const practiceTitle = isID
    ? "Layanan hukum yang kami tangani"
    : "Legal services we handle";

  const practiceItems = isID
    ? [
        "Hukum Perdata",
        "Hukum Pidana",
        "Hukum Keluarga",
        "Hukum Bisnis & Korporasi",
        "Litigasi & Penyelesaian Sengketa",
        "Perizinan & Legalitas Usaha",
      ]
    : [
        "Civil Law",
        "Criminal Law",
        "Family Law",
        "Corporate & Business Law",
        "Litigation & Dispute Resolution",
        "Licensing & Business Compliance",
      ];

  const teamLabel = isID ? "Tim Kami" : "Our Team";
  const teamTitle = isID
    ? "Profesional hukum yang siap mendampingi Anda"
    : "Legal professionals ready to assist you";

  const teamMembers = [
    {
      name: "BANGKIT MAHANANTIYO, S.H., M.H.",
      role: isID ? "Managing Partner" : "Managing Partner",
      image: "/bangkit.JPG",
    },
    {
      name: "SONNY HENDRAWAN, S.H.",
      role: isID ? "Partner" : "Partner",
      image: "/sonny.jpg",
    },
    {
      name: "ANDIKA PRASETIA SINAGA, S.H.",
      role: isID ? "Partner" : "Partner",
      image: "/andika.jpg",
    },
  ];

  const ctaTitle = isID
    ? "Butuh bantuan hukum?"
    : "Need legal assistance?";

  const ctaDesc = isID
    ? "Hubungi kami untuk mendiskusikan kebutuhan hukum Anda secara profesional dan terpercaya."
    : "Contact us to discuss your legal needs in a professional and trusted manner.";

  const ctaButton = isID ? "Ajukan Konsultasi" : "Request Consultation";

  const contactLabel = isID ? "Kontak Singkat" : "Quick Contact";
  const addressLabel = isID ? "Alamat" : "Address";
  const hoursLabel = isID ? "Jam Operasional" : "Office Hours";
  const hoursText = isID
    ? "Senin - Jumat, 09.00 WIB - 17.00 WIB"
    : "Monday - Friday, 09:00 WIB - 17:00 WIB";

  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* HERO */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
              Solidarity Law Office
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {heroSubtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="rounded-2xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                {heroPrimary}
              </Link>

              <Link
                href="/practice-areas"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {heroSecondary}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
                  {isID ? "Integritas" : "Integrity"}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {isID
                    ? "Kami menjunjung tinggi etika, tanggung jawab, dan kepercayaan klien."
                    : "We uphold ethics, responsibility, and client trust in every matter."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
                  {isID ? "Strategi" : "Strategy"}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {isID
                    ? "Kami menyusun strategi hukum yang terarah dan relevan dengan kebutuhan klien."
                    : "We develop focused legal strategies tailored to the needs of each client."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
                  {isID ? "Komitmen Profesional" : "Professional Commitment"}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {isID
                    ? "Kami hadir sebagai mitra hukum yang profesional, responsif, dan berorientasi pada hasil."
                    : "We stand as a professional, responsive, and results-oriented legal partner."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
              {whyLabel}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {whyTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PRACTICE AREAS */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
              {practiceLabel}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {practiceTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {practiceItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white shadow-md transition hover:-translate-y-1 hover:border-amber-600/40"
              >
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {isID ? "Lihat Semua Area Praktik" : "View All Practice Areas"}
            </Link>
          </div>
        </div>

        {/* OUR TEAM PREVIEW */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
              {teamLabel}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {teamTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-xl"
              >
                <div className="flex h-80 items-center justify-center bg-gray-50 p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-amber-700">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/our-team"
              className="inline-flex rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {isID ? "Lihat Seluruh Tim" : "View Full Team"}
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-white/5 to-white/10 px-8 py-12 text-center shadow-2xl sm:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {ctaDesc}
          </p>

          <div className="mt-8">
            <Link
              href="/consultation"
              className="inline-flex rounded-2xl bg-amber-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
            >
              {ctaButton}
            </Link>
          </div>
        </div>

        {/* QUICK CONTACT */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
              {contactLabel}
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">
                {addressLabel}
              </h3>
              <p className="mt-4 text-sm leading-8 text-slate-300">
                Ruko Jagalan No. 32E, Kel. Jagalan, Kec. Semarang Tengah, Kota
                Semarang, Provinsi Jawa Tengah.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
              <p className="mt-4 text-sm leading-8 text-slate-300">
                0819-2500-001
              </p>
              <a
                href="https://wa.me/628192500001"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-amber-500 transition hover:text-amber-400"
              >
                {isID ? "Chat Sekarang" : "Chat Now"}
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">
                {hoursLabel}
              </h3>
              <p className="mt-4 text-sm leading-8 text-slate-300">
                {hoursText}
                <br />
                {isID ? "Tanggal merah LIBUR" : "Closed on public holidays"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
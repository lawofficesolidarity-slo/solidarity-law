"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();
  const isID = lang === "id";

  const label = isID ? "Tentang Kami" : "About Us";

  const paragraphs = isID
    ? [
        "Solidarity Law Office adalah firma hukum yang didirikan dengan menjunjung tinggi nilai integritas, profesionalisme, serta komitmen terhadap tegaknya keadilan. Kami hadir sebagai mitra hukum yang terpercaya bagi individu, korporasi, maupun institusi dalam menghadapi berbagai permasalahan hukum yang semakin kompleks dan dinamis.",
        "Didukung oleh tim profesional yang berpengalaman, kami mengedepankan pendekatan yang strategis, solutif, dan berbasis pada analisis hukum yang komprehensif. Setiap layanan yang kami berikan tidak hanya berorientasi pada ketepatan yuridis, tetapi juga disesuaikan dengan kebutuhan, kepentingan, dan tujuan klien secara menyeluruh.",
        "Kami memahami bahwa setiap perkara memiliki karakteristik yang unik. Oleh karena itu, setiap penanganan perkara dilakukan dengan penuh tanggung jawab, ketelitian, serta menjunjung tinggi prinsip kerahasiaan dan etika profesi hukum. Komitmen kami adalah memberikan pendampingan hukum yang profesional, responsif, dan berorientasi pada hasil terbaik bagi klien.",
        "Bagi Solidarity Law Office, hukum bukan sekadar norma tertulis, melainkan instrumen untuk memberikan perlindungan, kepastian, dan keadilan. Dengan semangat dedikasi dan empati, kami senantiasa hadir untuk memberikan solusi hukum yang efektif, berkelanjutan, dan bernilai strategis.",
      ]
    : [
        "Solidarity Law Office is a law firm founded on the principles of integrity, professionalism, and a strong commitment to justice. We serve as a trusted legal partner for individuals, corporations, and institutions in addressing increasingly complex and dynamic legal challenges.",
        "Supported by experienced legal professionals, we emphasize a strategic, solution-oriented, and analytically grounded approach. Every legal service we provide is not only aimed at juridical accuracy, but is also carefully aligned with each client’s specific needs, interests, and objectives.",
        "We understand that every legal matter carries its own unique characteristics. For that reason, every case is handled with responsibility, precision, and strict adherence to confidentiality and professional ethics. Our commitment is to provide legal representation that is professional, responsive, and oriented toward achieving the best possible outcome for our clients.",
        "For Solidarity Law Office, the law is not merely a set of written rules, but an instrument of protection, certainty, and justice. With dedication and empathy, we remain committed to delivering legal solutions that are effective, sustainable, and strategically valuable.",
      ];

  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            {label}
          </p>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img
                src="/bangkit.jpg"
                alt="Bangkit Mahanantiyo"
                className="h-[500px] w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-6 text-justify text-[15px] leading-8 text-slate-300 sm:text-base">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
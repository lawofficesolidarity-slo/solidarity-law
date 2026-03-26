"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { lang } = useLanguage();

  const isID = lang === "id";

  const title = isID ? "Kontak" : "Contact";
  const heading = isID
    ? "Hubungi Solidarity Law Office"
    : "Get in Touch with Solidarity Law Office";

  const intro = isID
    ? "Kami siap membantu kebutuhan hukum Anda dengan layanan yang profesional, responsif, dan tepat sasaran."
    : "We are ready to assist your legal needs with professional, responsive, and well-targeted legal services.";

  const addressLabel = isID ? "Alamat" : "Address";
  const operationalLabel = isID
    ? "Hari dan Jam Operasional"
    : "Operating Days and Hours";
  const holidayNoteLabel = isID ? "Catatan" : "Note";

  const waLabel = "WhatsApp";
  const emailLabel = "Email";
  const instagramLabel = "Instagram";
  const tiktokLabel = "TikTok";

  const daysText = isID ? "Senin - Jumat" : "Monday - Friday";
  const hoursText = isID
    ? "Pukul 09.00 WIB - 17.00 WIB"
    : "09:00 AM - 05:00 PM WIB";
  const holidayNote = isID
    ? "Tanggal merah LIBUR"
    : "Closed on public holidays";

  const address =
    "Ruko Jagalan No. 32E, Kel. Jagalan, Kec. Semarang Tengah, Kota Semarang, Provinsi Jawa Tengah.";

  const whatsappDisplay = "0819-2500-001";
  const whatsappLink = "https://wa.me/628192500001";

  const emailAddress = "lawofficesolidarity@gmail.com";
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    isID ? "Permohonan Konsultasi Hukum" : "Legal Consultation Request"
  )}`;

  const instagramHandle = "@solidarity.lawoffice";
  const instagramLink = "https://instagram.com/solidarity.lawoffice";

  const tiktokHandle = "@solidaritylawoffice_slo";
  const tiktokLink = "https://www.tiktok.com/@solidaritylawoffice_slo";

  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            {title}
          </p>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {heading}
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-lg font-semibold text-white">
                {addressLabel}
              </h2>
              <p className="mt-4 leading-8 text-slate-300">{address}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-lg font-semibold text-white">
                {operationalLabel}
              </h2>
              <div className="mt-4 space-y-2 text-slate-300">
                <p>{daysText}</p>
                <p>{hoursText}</p>
                <p>
                  <span className="font-semibold text-white">
                    {holidayNoteLabel}:
                  </span>{" "}
                  {holidayNote}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-lg font-semibold text-white">
                {isID ? "Informasi Kontak" : "Contact Information"}
              </h2>

              <div className="mt-5 space-y-4 text-slate-300">
                <p>
                  <span className="font-semibold text-white">{waLabel}:</span>{" "}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-amber-500"
                  >
                    {whatsappDisplay}
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-white">{emailLabel}:</span>{" "}
                  <a
                    href={emailLink}
                    className="transition hover:text-amber-500"
                  >
                    {emailAddress}
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-white">
                    {instagramLabel}:
                  </span>{" "}
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-amber-500"
                  >
                    {instagramHandle}
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-white">{tiktokLabel}:</span>{" "}
                  <a
                    href={tiktokLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-amber-500"
                  >
                    {tiktokHandle}
                  </a>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
                >
                  {isID ? "Chat WhatsApp" : "Chat on WhatsApp"}
                </a>

                <a
                  href={emailLink}
                  className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {isID ? "Kirim Email" : "Send Email"}
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-2 shadow-2xl">
            <iframe
              title="Solidarity Law Office Map"
              src="https://www.google.com/maps?q=Ruko%20Jagalan%20No.%2032E%2C%20Semarang&output=embed"
              className="h-[720px] w-full rounded-[1.5rem]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
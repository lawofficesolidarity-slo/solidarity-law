"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ConsultationPage() {
  const { lang } = useLanguage();
  const isID = lang === "id";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const text = `
${isID ? "FORM KONSULTASI" : "CONSULTATION FORM"}

${isID ? "Nama" : "Name"}: ${form.name}
${isID ? "No. HP" : "Phone"}: ${form.phone}
${isID ? "Alamat" : "Address"}: ${form.address}

${isID ? "Konsultasi" : "Consultation"}:
${form.message}
    `;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/628192500001?text=${encoded}`, "_blank");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-white">
        {isID ? "Konsultasi Hukum" : "Legal Consultation"}
      </h1>

      <p className="mt-4 text-slate-300">
        {isID
          ? "Silakan isi formulir di bawah ini, tim kami akan segera menghubungi Anda."
          : "Please fill out the form below, our team will contact you shortly."}
      </p>

      <div className="mt-10 space-y-6">
        <input
          name="name"
          placeholder={isID ? "Nama Lengkap" : "Full Name"}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-black p-4 text-white"
        />

        <input
          name="phone"
          placeholder={isID ? "No. HP / WhatsApp" : "Phone / WhatsApp"}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-black p-4 text-white"
        />

        <input
          name="address"
          placeholder={isID ? "Alamat" : "Address"}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-700 bg-black p-4 text-white"
        />

        <textarea
          name="message"
          placeholder={
            isID
              ? "Tuliskan kebutuhan konsultasi Anda..."
              : "Write your consultation needs..."
          }
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-slate-700 bg-black p-4 text-white"
        />

        <button
          onClick={handleSubmit}
          className="w-full rounded-xl bg-amber-600 py-4 font-semibold text-white hover:bg-amber-700 transition"
        >
          {isID ? "Kirim ke WhatsApp" : "Send via WhatsApp"}
        </button>
      </div>
    </section>
  );
}
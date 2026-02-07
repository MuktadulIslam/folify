"use client";

import { useState, FormEvent } from "react";
import { CheckCircleIcon, SendIcon } from "./Icons";

function ContactInfo() {
  const items = [
    { icon: "📧", title: "ইমেইল করুন", detail: "contact@folify.com" },
    { icon: "📞", title: "কল করুন", detail: "+৮৮০ ১৬০১-৬৭৮০৫৯" },
    { icon: "📍", title: "অফিস", detail: "ধানমন্ডি-৩২, ঢাকা, বাংলাদেশ" },
  ];

  return (
    <div className="text-center lg:text-left">
      <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
        যোগাযোগ
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        অ্যাপ তৈরির <span className="gradient-text">রিকোয়েস্ট</span> পাঠান
      </h2>
      <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
        আপনার শিক্ষা প্রতিষ্ঠানের জন্য কাস্টম ওয়েবসাইট তৈরি করতে চান? আমাদের
        জানান আপনার চাহিদা এবং আমরা আপনার জন্য সেরা সমাধান তৈরি করবো।
      </p>

      <div className="space-y-4">
        {items.map((info) => (
          <div
            key={info.title}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-xl shrink-0">
              {info.icon}
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">{info.title}</div>
              <div className="text-muted text-sm">{info.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircleIcon className="w-10 h-10 text-green-500" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">ধন্যবাদ!</h3>
      <p className="text-muted text-lg">
        আপনার রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ
        করবো।
      </p>
      <button
        onClick={onReset}
        className="mt-6 text-primary font-semibold hover:underline"
      >
        আরেকটি রিকোয়েস্ট পাঠান
      </button>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-800 bg-white";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instituteName: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: `[প্রতিষ্ঠানের নাম: ${formData.instituteName}]\n\n${formData.message}`,
        }),
      });

      if (!res.ok) throw new Error("server error");

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        instituteName: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMsg("কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ContactInfo />

          {/* Form card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 p-6 sm:p-8 border border-gray-100">
            {status === "success" ? (
              <SuccessMessage onReset={() => setStatus("idle")} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="প্রথম নাম" required>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className={inputClass}
                      placeholder="আপনার প্রথম নাম"
                    />
                  </FormField>
                  <FormField label="শেষ নাম" required>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className={inputClass}
                      placeholder="আপনার শেষ নাম"
                    />
                  </FormField>
                </div>

                <FormField label="ইমেইল" required>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="example@email.com"
                  />
                </FormField>

                <FormField label="ফোন নম্বর">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                    placeholder="+৮৮০ ১XXXXXXXXX"
                  />
                </FormField>

                <FormField label="প্রতিষ্ঠানের নাম">
                  <input
                    type="text"
                    value={formData.instituteName}
                    onChange={(e) => update("instituteName", e.target.value)}
                    className={inputClass}
                    placeholder="আপনার স্কুল / কলেজ / কোচিং সেন্টারের নাম"
                  />
                </FormField>

                <FormField label="আপনার বার্তা" required>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="আপনার ওয়েবসাইটের জন্য কী কী ফিচার চান, কোন ধরনের ডিজাইন পছন্দ করেন — বিস্তারিত লিখুন..."
                  />
                </FormField>

                {status === "error" && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-shine w-full bg-linear-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:shadow-primary/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      রিকোয়েস্ট পাঠান
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { StarIcon } from "./Icons";

const testimonials = [
  {
    name: "রাফি আহমেদ",
    role: "প্রধান শিক্ষক, আলোর পথ স্কুল",
    text: "Folify ব্যবহার করে আমাদের স্কুলের ওয়েবসাইট তৈরি করা অবিশ্বাস্যভাবে সহজ ছিল। এখন অভিভাবকরা সহজে তথ্য পান।",
  },
  {
    name: "তাসনিয়া ইসলাম",
    role: "প্রতিষ্ঠাতা, ডিজিটাল শিক্ষা একাডেমি",
    text: "আমি কোনো প্রোগ্রামিং জানি না, তবুও Folify দিয়ে পেশাদার একটি ই-লার্নিং প্ল্যাটফর্ম তৈরি করতে পেরেছি।",
  },
  {
    name: "আশিক রহমান",
    role: "পরিচালক, জ্ঞানবীথি কোচিং",
    text: "ড্র্যাগ অ্যান্ড ড্রপ ফিচারটি অসাধারণ! আমাদের কোচিং সেন্টারের ওয়েবসাইট মাত্র ১ ঘণ্টায় তৈরি হয়ে গেছে।",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="card-hover bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, j) => (
          <StarIcon key={j} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
          {t.name[0]}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{t.name}</div>
          <div className="text-sm text-muted">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 lg:py-20 bg-linear-to-b from-white to-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            মতামত
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            আমাদের <span className="gradient-text">ব্যবহারকারীরা</span> যা বলছেন
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            শত শত শিক্ষা প্রতিষ্ঠান ইতিমধ্যে Folify ব্যবহার করে তাদের অনলাইন
            উপস্থিতি তৈরি করেছে
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

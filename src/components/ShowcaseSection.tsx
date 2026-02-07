import { CheckCircleIcon, ArrowRightIcon } from "./Icons";

const checkItems = [
  "রিয়েল-টাইম ভিজিটর অ্যানালিটিক্স",
  "কন্টেন্ট ম্যানেজমেন্ট সিস্টেম",
  "SEO অপটিমাইজেশন টুলস",
  "মোবাইল রেসপন্সিভ ডিজাইন",
];

function DashboardMockup() {
  return (
    <div className="relative bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-5 sm:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-800">ড্যাশবোর্ড</h4>
          <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">
            লাইভ
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "ভিজিটর", value: "২,৫৪৭", cls: "text-primary" },
            { label: "পেজ ভিউ", value: "৮,৩২১", cls: "text-secondary" },
            { label: "সাইনআপ", value: "১৮৪", cls: "text-accent" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
              <div className={`text-lg font-bold ${s.cls}`}>{s.value}</div>
              <div className="text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mini chart representation */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-end gap-1 h-20 justify-center">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
              <div
                key={i}
                className="w-full rounded-t bg-linear-to-t from-primary to-primary-light"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="text-center text-xs text-muted mt-2">মাসিক ভিজিটর গ্রাফ</div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-2.5 animate-float-slow border border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium">৩২ জন অনলাইন</span>
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Mockup */}
          <div className="order-2 lg:order-1">
            <DashboardMockup />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              শক্তিশালী ড্যাশবোর্ড
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              আপনার ওয়েবসাইটের{" "}
              <span className="gradient-text">সম্পূর্ণ নিয়ন্ত্রণ</span>{" "}
              আপনার হাতে
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              রিয়েল-টাইম অ্যানালিটিক্স, ভিজিটর ট্র্যাকিং, কন্টেন্ট
              ম্যানেজমেন্ট — সব কিছু একটি সুন্দর ড্যাশবোর্ড থেকে নিয়ন্ত্রণ
              করুন।
            </p>

            <ul className="space-y-4 mb-8">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <CheckCircleIcon className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-shine inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              বিনামূল্যে শুরু করুন
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

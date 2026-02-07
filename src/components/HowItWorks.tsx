const steps = [
  {
    num: "০১",
    title: "টেমপ্লেট বাছাই করুন",
    description:
      "আমাদের বিশাল টেমপ্লেট লাইব্রেরি থেকে আপনার পছন্দের ডিজাইন বেছে নিন। প্রতিটি টেমপ্লেট সম্পূর্ণ কাস্টমাইজেবল।",
    color: "bg-primary",
    ring: "ring-primary/20",
  },
  {
    num: "০২",
    title: "কন্টেন্ট যোগ করুন",
    description:
      "ড্র্যাগ অ্যান্ড ড্রপে আপনার টেক্সট, ছবি, ভিডিও এবং অন্যান্য কন্টেন্ট যোগ করুন। সব কিছু এত সহজ!",
    color: "bg-secondary",
    ring: "ring-secondary/20",
  },
  {
    num: "০৩",
    title: "কাস্টমাইজ করুন",
    description:
      "রঙ, ফন্ট, লেআউট — সব কিছু আপনার মনমতো পরিবর্তন করুন। রিয়েল-টাইম প্রিভিউ দেখুন।",
    color: "bg-accent",
    ring: "ring-accent/20",
  },
  {
    num: "০৪",
    title: "পাবলিশ করুন!",
    description:
      "এক ক্লিকে আপনার ওয়েবসাইট লাইভ করুন। কাস্টম ডোমেইন যুক্ত করুন এবং বিশ্বের সাথে শেয়ার করুন।",
    color: "bg-primary",
    ring: "ring-primary/20",
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="text-center relative">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 ring-8 ${step.ring} relative z-10`}
      >
        <span className="text-white text-xl sm:text-2xl font-bold">{step.num}</span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-muted text-sm sm:text-base leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 lg:py-20 bg-linear-to-b from-surface to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary/10 text-secondary-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            পদ্ধতি
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            মাত্র <span className="gradient-text">৪টি ধাপে</span> আপনার
            ওয়েবসাইট
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            সহজ এবং দ্রুত প্রক্রিয়া — কোনো টেকনিক্যাল জ্ঞান লাগবে না
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-primary via-secondary to-accent" />

          {steps.map((step, i) => (
            <StepCard key={i} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

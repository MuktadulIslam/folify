import {
  DragDropIcon,
  TemplateIcon,
  RocketIcon,
  ShieldIcon,
  GlobeIcon,
  HeadphonesIcon,
} from "./Icons";

const features = [
  {
    icon: DragDropIcon,
    title: "সহজ ড্র্যাগ অ্যান্ড ড্রপ",
    description:
      "মাউস দিয়ে টেনে এনে ছেড়ে দিন। কম্পোনেন্ট যোগ করুন, সাজান এবং কাস্টমাইজ করুন — সব কিছু কোডিং ছাড়াই।",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: TemplateIcon,
    title: "১০০+ রেডি টেমপ্লেট",
    description:
      "পেশাদারভাবে ডিজাইন করা টেমপ্লেট থেকে বেছে নিন। স্কুল, কলেজ, কোচিং সেন্টার — সবার জন্য আছে।",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: RocketIcon,
    title: "দ্রুত পারফরম্যান্স",
    description:
      "আমাদের অপটিমাইজড সিস্টেম নিশ্চিত করে আপনার ওয়েবসাইট দ্রুত লোড হবে এবং সব ডিভাইসে সুন্দর দেখাবে।",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: ShieldIcon,
    title: "নিরাপদ ও বিশ্বস্ত",
    description:
      "SSL সার্টিফিকেট, ডেটা এনক্রিপশন এবং নিয়মিত ব্যাকআপ — আপনার ওয়েবসাইট সবসময় নিরাপদ থাকবে।",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: GlobeIcon,
    title: "কাস্টম ডোমেইন",
    description:
      "আপনার নিজের ডোমেইন নাম যুক্ত করুন এবং পেশাদার ইমেইল অ্যাড্রেস পান। সব কিছু এক জায়গায়।",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: HeadphonesIcon,
    title: "২৪/৭ সাপোর্ট",
    description:
      "যেকোনো সমস্যায় আমাদের দক্ষ টিম সবসময় আপনার পাশে। বাংলায় সাপোর্ট পান যখন খুশি।",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  const Icon = feature.icon;
  return (
    <div className="card-hover bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm group">
      <div
        className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
      >
        <Icon className={`w-7 h-7 ${feature.color}`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-muted leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            বৈশিষ্ট্যসমূহ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            কেন <span className="gradient-text">Folify</span> বেছে নিবেন?
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            আমাদের প্ল্যাটফর্মে আছে সেরা সব ফিচার যা আপনার শিক্ষামূলক
            ওয়েবসাইট <br /> তৈরিকে করবে সহজ ও আনন্দময়
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

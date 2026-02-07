import { ArrowRightIcon, PlayIcon, DragDropIcon, CheckCircleIcon } from "./Icons";

function HeroBrowserMockup() {
  return (
    <div className="relative bg-white rounded-2xl shadow-2xl shadow-primary/10 p-3 sm:p-5 border border-gray-100">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-gray-100 rounded-full h-7 mx-2 flex items-center px-3">
          <span className="text-xs text-gray-400 truncate">folify.com/my-website</span>
        </div>
      </div>

      {/* Mockup content – drag & drop interface */}
      <div className="bg-gradient-to-br from-surface to-surface-alt rounded-xl p-4 space-y-3">
        {/* Toolbar */}
        <div className="flex gap-2">
          {["হেডার", "টেক্সট", "ছবি", "ভিডিও"].map((item) => (
            <div
              key={item}
              className="bg-white px-3 py-1.5 rounded-lg text-xs font-medium text-primary shadow-sm border border-primary/10"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Page blocks */}
        <div className="bg-white rounded-lg p-3 border-2 border-dashed border-primary/30 shadow-sm">
          <div className="h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded mb-2" />
          <div className="h-3 bg-gray-100 rounded w-3/4" />
        </div>

        <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg" />
            <div className="h-16 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg" />
            <div className="h-16 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 border-2 border-dashed border-secondary/30 shadow-sm animate-pulse">
          <div className="flex items-center gap-2 text-secondary text-xs font-medium">
            <DragDropIcon className="w-4 h-4" />
            এখানে ড্রপ করুন
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}

function StatItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl sm:text-3xl font-bold gradient-text">{num}</div>
      <div className="text-sm text-muted mt-0.5">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-delay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              বাংলাদেশের প্রথম শিক্ষামূলক ওয়েবসাইট বিল্ডার
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6">
              ড্র্যাগ অ্যান্ড ড্রপে{" "}
              <span className="gradient-text">তৈরি করুন</span>{" "}
              আপনার শিক্ষামূলক ওয়েবসাইট
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              কোনো কোডিং জ্ঞান ছাড়াই মাত্র কয়েক মিনিটে আপনার স্বপ্নের
              শিক্ষামূলক ওয়েবসাইট তৈরি করুন। Folify-এর সহজ ড্র্যাগ অ্যান্ড ড্রপ
              সিস্টেম দিয়ে সবকিছু সম্ভব।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-shine inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all animate-pulse-glow"
              >
                এখনই শুরু করুন
                <ArrowRightIcon />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-all"
              >
                <PlayIcon className="w-5 h-5" />
                কিভাবে কাজ করে
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <StatItem num="১০+" label="সন্তুষ্ট ব্যবহারকারী" />
              <StatItem num="২০+" label="রেডি টেমপ্লেট" />
              <StatItem num="৯৯.৯%" label="আপটাইম" />
            </div>
          </div>

          {/* Right – browser mockup */}
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative w-full max-w-lg">
              <HeroBrowserMockup />

              <FloatingCard className="-top-4 -right-4 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">পাবলিশ হয়েছে!</span>
                </div>
              </FloatingCard>

              <FloatingCard className="-bottom-4 -left-4 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DragDropIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">ড্র্যাগ অ্যান্ড ড্রপ</span>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

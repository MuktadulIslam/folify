import { ArrowRightIcon, ShieldIcon, CheckCircleIcon, HeadphonesIcon } from "./Icons";

export default function CTASection() {
  return (
    <section className="py-10 lg:py-14 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary-dark to-secondary" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          আজই আপনার শিক্ষামূলক ওয়েবসাইট তৈরি শুরু করুন
        </h2>
        <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          হাজার হাজার শিক্ষা প্রতিষ্ঠানের সাথে যোগ দিন যারা Folify দিয়ে তাদের
          ডিজিটাল উপস্থিতি তৈরি করছে। আপনার যাত্রা শুরু হোক এখনই!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn-shine inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all"
          >
            অ্যাপ তৈরির রিকোয়েস্ট দিন
            <ArrowRightIcon />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
          >
            আরও জানুন
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-5 h-5" />
            <span>১০০% নিরাপদ</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5" />
            <span>ফ্রি ট্রায়াল</span>
          </div>
          <div className="flex items-center gap-2">
            <HeadphonesIcon className="w-5 h-5" />
            <span>২৪/৭ সাপোর্ট</span>
          </div>
        </div>
      </div>
    </section>
  );
}

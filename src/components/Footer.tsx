import { FolifyLogo } from "./Icons";

const quickLinks = [
  { label: "বৈশিষ্ট্যসমূহ", href: "#features" },
  { label: "কিভাবে কাজ করে", href: "#how-it-works" },
  { label: "মতামত", href: "#testimonials" },
  { label: "যোগাযোগ", href: "#contact" },
];

const services = [
  "ওয়েবসাইট ডিজাইন",
  "কাস্টম ডেভেলপমেন্ট",
  "SEO অপটিমাইজেশন",
  "হোস্টিং সলিউশন",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <FolifyLogo className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">Folify</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              বাংলাদেশের প্রথম ড্র্যাগ অ্যান্ড ড্রপ শিক্ষামূলক ওয়েবসাইট
              বিল্ডার। কোডিং ছাড়াই তৈরি করুন আপনার স্বপ্নের ওয়েবসাইট।
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">যোগাযোগ</h4>
            <ul className="space-y-2.5 text-sm">
              <li>contact@folify.com</li>
              <li>+৮৮০ ১৬০১-৬৭৮০৫৯</li>
              <li>ধানমন্ডি-৩২, ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 p-3 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Folify। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}

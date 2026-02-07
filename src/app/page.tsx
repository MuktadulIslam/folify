import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://folify.com/#organization",
      name: "Folify",
      url: "https://folify.com",
      logo: {
        "@type": "ImageObject",
        url: "https://folify.com/og-image.png",
      },
      description:
        "Folify হলো বাংলাদেশের প্রথম ড্র্যাগ অ্যান্ড ড্রপ শিক্ষামূলক ওয়েবসাইট বিল্ডার।",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ধানমন্ডি-৩২",
        addressLocality: "ঢাকা",
        addressCountry: "BD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+880-1601-678059",
        contactType: "customer service",
        email: "contact@folify.com",
        availableLanguage: ["Bengali", "English"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://folify.com/#website",
      url: "https://folify.com",
      name: "Folify",
      description:
        "বাংলাদেশের প্রথম শিক্ষামূলক ওয়েবসাইট বিল্ডার - ড্র্যাগ অ্যান্ড ড্রপে তৈরি করুন আপনার ওয়েবসাইট",
      publisher: { "@id": "https://folify.com/#organization" },
      inLanguage: ["bn", "en"],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://folify.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://folify.com/#webpage",
      url: "https://folify.com",
      name: "Folify - বাংলাদেশের প্রথম শিক্ষামূলক ওয়েবসাইট বিল্ডার",
      isPartOf: { "@id": "https://folify.com/#website" },
      about: { "@id": "https://folify.com/#organization" },
      description:
        "Folify দিয়ে কোনো কোডিং ছাড়াই ড্র্যাগ অ্যান্ড ড্রপের মাধ্যমে আপনার স্কুল, কলেজ বা কোচিং সেন্টারের পেশাদার ওয়েবসাইট তৈরি করুন।",
      inLanguage: "bn",
    },
    {
      "@type": "SoftwareApplication",
      name: "Folify",
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      description:
        "Folify is Bangladesh's first drag and drop educational website builder. Create professional school, college, and coaching center websites without coding.",
      url: "https://folify.com",
      author: { "@id": "https://folify.com/#organization" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BDT",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "10",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Folify কি?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Folify হলো বাংলাদেশের প্রথম শিক্ষামূলক ওয়েবসাইট বিল্ডার। এটি দিয়ে কোনো কোডিং ছাড়াই ড্র্যাগ অ্যান্ড ড্রপের মাধ্যমে স্কুল, কলেজ এবং কোচিং সেন্টারের জন্য পেশাদার ওয়েবসাইট তৈরি করা যায়।",
          },
        },
        {
          "@type": "Question",
          name: "Folify দিয়ে কিভাবে ওয়েবসাইট তৈরি করা যায়?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Folify দিয়ে ওয়েবসাইট তৈরি করতে ৪টি সহজ ধাপ অনুসরণ করুন: ১) টেমপ্লেট বাছাই করুন, ২) কন্টেন্ট যোগ করুন, ৩) কাস্টমাইজ করুন, ৪) পাবলিশ করুন। কোনো কোডিং জ্ঞান প্রয়োজন নেই।",
          },
        },
        {
          "@type": "Question",
          name: "Folify কি ফ্রি?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "হ্যাঁ, Folify দিয়ে আপনি বিনামূল্যে আপনার শিক্ষামূলক ওয়েবসাইট তৈরি শুরু করতে পারেন। ১০০+ রেডি টেমপ্লেট এবং ড্র্যাগ অ্যান্ড ড্রপ ফিচার সবই ব্যবহার করতে পারবেন।",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ShowcaseSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}

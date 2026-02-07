import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://folify.com";

export const metadata: Metadata = {
  title: {
    default:
      "Folify - বাংলাদেশের প্রথম শিক্ষামূলক ওয়েবসাইট বিল্ডার | Drag & Drop Website Builder",
    template: "%s | Folify",
  },
  description:
    "Folify হলো বাংলাদেশের প্রথম ড্র্যাগ অ্যান্ড ড্রপ শিক্ষামূলক ওয়েবসাইট বিল্ডার। কোনো কোডিং ছাড়াই স্কুল, কলেজ, কোচিং সেন্টারের জন্য পেশাদার ওয়েবসাইট তৈরি করুন। Folify - Bangladesh's first educational website builder.",
  keywords: [
    "Folify",
    "folify",
    "folify.com",
    "Folify website builder",
    "Folify বাংলাদেশ",
    "শিক্ষামূলক ওয়েবসাইট",
    "শিক্ষামূলক ওয়েবসাইট বিল্ডার",
    "ড্র্যাগ অ্যান্ড ড্রপ ওয়েবসাইট",
    "ওয়েবসাইট বিল্ডার",
    "ওয়েবসাইট বিল্ডার বাংলাদেশ",
    "স্কুল ওয়েবসাইট",
    "কলেজ ওয়েবসাইট",
    "কোচিং সেন্টার ওয়েবসাইট",
    "educational website builder",
    "drag and drop website builder",
    "Bangladesh website builder",
    "school website builder",
    "no code website builder Bangladesh",
    "Folify drag and drop",
    "বাংলা ওয়েবসাইট বিল্ডার",
  ],
  authors: [{ name: "Folify", url: siteUrl }],
  creator: "Folify",
  publisher: "Folify",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "bn-BD": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: siteUrl,
    siteName: "Folify",
    title:
      "Folify - বাংলাদেশের প্রথম শিক্ষামূলক ওয়েবসাইট বিল্ডার",
    description:
      "Folify দিয়ে কোনো কোডিং ছাড়াই ড্র্যাগ অ্যান্ড ড্রপে আপনার স্কুল, কলেজ বা কোচিং সেন্টারের পেশাদার ওয়েবসাইট তৈরি করুন। সহজ, দ্রুত এবং সম্পূর্ণ ফ্রি!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Folify - শিক্ষামূলক ওয়েবসাইট বিল্ডার",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Folify - বাংলাদেশের প্রথম শিক্ষামূলক ওয়েবসাইট বিল্ডার",
    description:
      "কোনো কোডিং ছাড়াই ড্র্যাগ অ্যান্ড ড্রপে আপনার শিক্ষামূলক ওয়েবসাইট তৈরি করুন। Folify - সহজ, দ্রুত এবং পেশাদার।",
    images: ["/og-image.png"],
    creator: "@folify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "technology",
  applicationName: "Folify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className={`${hindSiliguri.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

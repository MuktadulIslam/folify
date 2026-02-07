import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Folify - ড্র্যাগ অ্যান্ড ড্রপে তৈরি করুন আপনার শিক্ষামূলক ওয়েবসাইট",
  description:
    "Folify দিয়ে কোনো কোডিং ছাড়াই ড্র্যাগ অ্যান্ড ড্রপের মাধ্যমে আপনার স্বপ্নের শিক্ষামূলক ওয়েবসাইট তৈরি করুন। সহজ, দ্রুত এবং পেশাদার।",
  keywords: [
    "শিক্ষামূলক ওয়েবসাইট",
    "ড্র্যাগ অ্যান্ড ড্রপ",
    "ওয়েবসাইট বিল্ডার",
    "Folify",
    "বাংলা",
    "educational website builder",
  ],
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

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Folify - শিক্ষামূলক ওয়েবসাইট বিল্ডার",
    short_name: "Folify",
    description:
      "বাংলাদেশের প্রথম ড্র্যাগ অ্যান্ড ড্রপ শিক্ষামূলক ওয়েবসাইট বিল্ডার।",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

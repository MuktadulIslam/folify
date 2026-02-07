"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon, FolifyLogo } from "./Icons";

const links = [
  { label: "বৈশিষ্ট্য", href: "#features" },
  { label: "কিভাবে কাজ করে", href: "#how-it-works" },
  { label: "মতামত", href: "#testimonials" },
  { label: "যোগাযোগ", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <FolifyLogo className="w-9 h-9 sm:w-10 sm:h-10 drop-shadow-lg group-hover:drop-shadow-xl transition-all" />
            <span className="text-xl sm:text-2xl font-bold gradient-text">Folify</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-shine bg-linear-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              অ্যাপ তৈরি করুন
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-up shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 font-medium transition-colors rounded-lg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center mt-2 btn-shine bg-linear-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-semibold"
              onClick={() => setOpen(false)}
            >
              অ্যাপ তৈরি করুন
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

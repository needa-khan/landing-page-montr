"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 ml-23">
        <img src="/montr_ai_logo_icon.webp" alt="logo" className="w-11 h-11" />
        <span className="text-2xl font-semibold text-gray-900 ">Montr AI</span>
      </div>

      {/* Center Nav Pill */}
      <div className="flex items-center gap-8 bg-gray-900 text-white text-sm font-medium px-8 py-3 rounded-full">
        <a href="#" className="flex items-center gap-1 hover:bg-white/10 px-3 py-1 rounded-full transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </a>
        <a href="#" className="hover:bg-white/10 px-3 py-1 rounded-full transition-colors">Home</a>
        <a href="#" className="flex items-center gap-1 hover:bg-white/10 px-3 py-1 rounded-full transition-colors">
          Features
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a href="#" className="flex items-center gap-1 hover:bg-white/10 px-3 py-1 rounded-full transition-colors">
          Solutions
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a href="#" className="hover:bg-white/10 px-3 py-1 rounded-full transition-colors">Pricing</a>
        <a href="#" className="flex items-center gap-1 hover:bg-white/10 px-3 py-1 rounded-full transition-colors">
          More
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
          Log in
        </button>
        <button className="text-sm font-medium bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
}


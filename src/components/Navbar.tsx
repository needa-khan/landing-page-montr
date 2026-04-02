"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
        <Link href="/">Home</Link>
        <div
            className="relative"
            onMouseEnter={() => setOpenMenu("features")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/features" className="flex items-center gap-1 hover:bg-white/10 px-3 py-1 rounded-full transition">
              Features
            </Link>

            {openMenu === "features" && (
              <div className="absolute top-12 left-0 w-64 bg-white text-gray-900 rounded-2xl shadow-lg p-4 space-y-2">
                <Link href="/features/autonomous-ai-agent" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Autonomous AI Agent</Link>
                <Link href="/features/ai-studio" className="block px-3 py-2 rounded-lg hover:bg-gray-100">AI Studio</Link>
                <Link href="/features/audio-bot" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Audio Bot</Link>
                <Link href="/features/automation-workflow" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Automation Workflow</Link>
              </div>
            )}
        </div>
        <div
            className="relative"
            onMouseEnter={() => setOpenMenu("solutions")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/solutions" className="flex items-center gap-1 hover:bg-white/10 px-3 py-1 rounded-full transition">
              Solutions
            </Link>

            {openMenu === "solutions" && (
              <div className="absolute top-12 left-0 w-64 bg-white text-gray-900 rounded-2xl shadow-lg p-4 space-y-2">
                <Link href="/solutions/agencies" className="block px-3 py-2 rounded-lg hover:bg-gray-100">For Agencies</Link>
                <Link href="/solutions/startups" className="block px-3 py-2 rounded-lg hover:bg-gray-100">For Startups</Link>
                <Link href="/solutions/smb" className="block px-3 py-2 rounded-lg hover:bg-gray-100">For SMBs</Link>
                <Link href="/solutions/ecommerce" className="block px-3 py-2 rounded-lg hover:bg-gray-100">For E-Commerce</Link>
                <Link href="/solutions/enterprise" className="block px-3 py-2 rounded-lg hover:bg-gray-100">For Enterprise</Link>
              </div>
            )}
        </div>
        <Link href="/pricing">Pricing</Link>
        <div
            className="relative"
            onMouseEnter={() => setOpenMenu("more")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 hover:bg-white/10 px-3 py-1 rounded-full transition">
              More
            </button>

            {openMenu === "more" && (
              <div className="absolute top-12 left-0 w-64 bg-white text-gray-900 rounded-2xl shadow-lg p-4 space-y-2">
                <Link href="/more/contacts" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Contacts</Link>
                <Link href="/more/team" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Team</Link>
                <Link href="/more/blog" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Blog</Link>
                <Link href="/more/faqs" className="block px-3 py-2 rounded-lg hover:bg-gray-100">FAQs</Link>
                <Link href="/more/careers" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Careers</Link>
              </div>
            )}
        </div>
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


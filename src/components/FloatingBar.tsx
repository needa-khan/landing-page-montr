"use client";

import { useEffect, useState } from "react";

export default function FloatingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      

      {/* Connect button */}
      <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors">
        {/* Small gradient icon */}
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        Connect Montr AI
      </button>
    </div>
  );
}

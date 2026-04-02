import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-6 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- NEWSLETTER SECTION --- */}
        <div className="bg-[#6366f1] rounded-[32px] p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-md">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-4">
              Newsletter
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Get AI updates worth opening.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Subscribe for weekly AI updates, product notes, and practical marketing experiments from the Montr team.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-64 bg-white px-5 py-3 rounded-xl text-sm focus:outline-none placeholder:text-gray-400"
              />
              <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* --- MAIN FOOTER LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Montr Logo Icon */}
              <img src="/montr_ai_logo_icon.webp" alt="logo" className="w-11 h-11" />
              
              {/* Text Container */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-950 tracking-tight leading-none">
                  Montr
                </span>
                <span className="text-[10px] font-medium text-black tracking-wide mt-0.5">
                  AI for Business Growth
                </span>
              </div>
            </div>
            {/*<div className="flex items-center gap-2 ml-23">
        
        <span className="text-2xl font-semibold text-gray-900 ">Montr AI</span>
      </div>*/}
            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-[200px]">
              Deploy autonomous AI agents that handle complex marketing work and improve with every cycle.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: "/instagram_icon.png", href: "#", label: "Instagram" },
                { icon: "/twitter_icon.png", href: "#", label: "Twitter" },
                { icon: "/linkedin_icon.png", href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:text-gray-950 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer overflow-hidden"
                >
                  <img 
                    src={social.icon} 
                    alt={social.label} 
                    className="w-10 h-10 object-contain opacity-60 hover:opacity-100 transition-opacity" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-950 mb-6">Features</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              {[
                { name: "Autonomous AI Agent", href: "/features/autonomous-ai-agent" },
                { name: "AI Studio", href: "/features/ai-studio" },
                { name: "Audio Bot", href: "/features/audio-bot" },
                { name: "Automation Workflow", href: "/features/automation-workflow" },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="hover:text-gray-950 transition-colors duration-200 block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-950 mb-6">Compare</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li className="hover:text-gray-950 cursor-pointer transition-colors">n8n vs Montr AI</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Hootsuite vs Montr AI</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">HubSpot vs Montr AI</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Zapier vs Montr AI</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Make vs Montr AI</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-950 mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li className="hover:text-gray-950 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Meet Our Team</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Blog / Insights</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">FAQs</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-950 mb-6">Legal & Support</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">Refund Policy</li>
              <li className="hover:text-gray-950 cursor-pointer transition-colors">DPA</li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-gray-500">
          <p>© 2026 Montr AI Labs Pvt. Ltd. All rights reserved.</p>
          
          <div className="flex items-center gap-8">
            <span className="hover:text-gray-950 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-950 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-gray-950 cursor-pointer transition-colors">Cookie settings</span>
            <div className="flex items-center gap-2 text-emerald-500 font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              All Systems Operational
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
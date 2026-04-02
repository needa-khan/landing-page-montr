"use client";

import Image from "next/image";

export default function Overview() {
  return (
    <section className="px-16 py-24 bg-white">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-black text-white text-sm px-5 py-2 rounded-full font-semibold tracking-wide">
            OVERVIEW
          </span>
          <span className="text-sm text-gray-500 px-4 py-2 hover:text-gray-900 cursor-pointer transition">
            Agentic Platform →
          </span>
        </div>

        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-5">
          The Complete Agentic Marketing Platform
        </h2>

        <p className="text-gray-500 text-[16px] max-w-2xl leading-relaxed">
          Automate your entire marketing stack with one platform. Deploy autonomous AI agents
          for content creation, campaigns, and lead closing.
        </p>
      </div>

      {/* Grid */}
<div className="grid grid-cols-3 gap-6">

  {/* ROW 1 LEFT: Big dark card spans 2 rows */}
  <div className="row-span-2 rounded-[28px] p-8 flex flex-col gap-5 
    bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white
    shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">✨</div>
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Core System</p>
      <h3 className="text-2xl font-semibold mb-3">Agentic AI</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        AI agents that can perform tasks on your behalf on any feature and improve over time.
      </p>
    </div>
    <div className="mt-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl h-52 overflow-hidden">
      <Image src="/Montr-canvas-Ad-generator-flow.webp" alt="Agentic" width={1000} height={300} className="w-full h-full object-cover" />
    </div>
  </div>

  {/* ROW 1 COL 2 */}
  <FeatureCard category="Creative Suite" title="Generative AI Studio"
    description="Generate text, images, videos, voiceovers, and AI characters from a single workspace."
    bg="bg-[#FFF7ED]" />

  {/* ROW 1 COL 3 */}
  <FeatureCard category="Publishing" title="Auto-Posting & Mgt."
    description="Cross-platform scheduling and analytics with AI copy timing built in." />

  {/* ROW 2 COL 2 — with image */}
  <FeatureCard category="Conversations" title="Unified Messaging Inbox"
    description="Central inbox for Instagram, Facebook, and email conversations."
    hasImage imageSrc="/features-messaging.png" />

  {/* ROW 2 COL 3 */}
  <FeatureCard category="Pipeline" title="Smart CRM"
    description="AI-assisted contact, pipeline, and deal management with cleaner context." />

  {/* ROW 3 LEFT: Big purple card spans 2 rows */}
  <div className="row-span-2 rounded-[28px] p-8 flex flex-col gap-5
    bg-[#F3F0FF]
    shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">🔗</div>
    
  <FeatureCard category="Automation" title="AI No-Code Automation"
    description="Visual automation canvas to connect AI agents without coding."
    hasImage imageSrc="/features-automation.png" />
    
  </div>

  {/* ROW 3 COL 2 */}
  <FeatureCard category="Lifecycle" title="Email & WhatsApp"
    description="Personalized campaign execution for lead nurturing and conversion." />

  {/* ROW 3 COL 3 */}
  <FeatureCard category="Capture" title="Chatbots & Voice Bots"
    description="24/7 AI support and lead qualification via chat and voice agents." />

  {/* ROW 4 COL 2 */}
  <FeatureCard category="Knowledge" title="AI-Powered Documents"
    description="Document creation with summarize, expand, and translate workflows."
    bg="bg-[#F9FAFB]" />

  {/* ROW 4 COL 3 */}
  <FeatureCard category="Conversion" title="Smart Lead Gen Forms"
    description="High-conversion forms with CRM and automation sync."
    bg="bg-[#FFF7ED]" />

</div>
    </section>
  );
}

type Props = {
  category: string;
  title: string;
  description: string;
  bg?: string;
  hasImage?: boolean;
  imageSrc?: string;
};

function FeatureCard({
  category,
  title,
  description,
  bg = "bg-white",
  hasImage = false,
  imageSrc = "/features-messaging.png",
}: Props) {
  return (
    <div
      className={`${bg} rounded-[26px] p-7 flex flex-col gap-3
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
        ⚡
      </div>

      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
        {category}
      </p>

      <h3 className="text-[20px] font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-500 text-[14px] leading-relaxed">
        {description}
      </p>

      {hasImage && (
        <div className="mt-3 bg-gray-50 rounded-2xl h-32 overflow-hidden border shadow-inner">
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
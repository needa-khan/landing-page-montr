"use client";

const row1 = [
  "openai","meta","facebook","x","instagram",
  "linkedin","whatsapp","gmail","youtube",
  "notion","figma","shopify","salesforce"
];

const row2 = [
  "hubspot","slack","airtable","zapier",
  "stripe","intercom","discord","dropbox",
  "google","amazon","netflix","paypal"
];

export default function Integrations() {
  return (
    <section className="px-16 py-24 bg-white">
      <div className="bg-[#F7F7F8] rounded-[32px] px-16 py-14 relative overflow-hidden">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-14">

          <div className="max-w-xl">
            <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-3">
              Connected by Design
            </p>

            <h2 className="text-[32px] font-semibold text-gray-900 mb-4 leading-tight">
              100+ integrations to make your business seamless.
            </h2>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              Bring publishing, messaging, CRM, files, automation, and model providers into one operating layer so every agent works with the same context.
            </p>
          </div>

          {/* STATS */}
          <div className="flex gap-4">
            <StatCard title="100+" subtitle="native tools" />
            <StatCard title="200+" subtitle="AI models" />
          </div>

        </div>

        {/* LOGO SECTION */}
        <div className="relative space-y-6">

          {/* fade left */}
          <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-[#F7F7F8] to-transparent" />

          {/* fade right */}
          <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-[#F7F7F8] to-transparent" />

          {/* ROW 1 (LEFT → RIGHT) */}
          <div className="overflow-hidden">
            <div className="flex gap-5 w-max animate-marquee">

              {[...row1, ...row1].map((logo, i) => (
                <LogoCard key={i} logo={logo} />
              ))}

            </div>
          </div>

          {/* ROW 2 (RIGHT → LEFT) */}
          <div className="overflow-hidden">
            <div className="flex gap-5 w-max animate-marquee-reverse">

              {[...row2, ...row2].map((logo, i) => (
                <LogoCard key={i} logo={logo} />
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: string }) {
  return (
    <div className="
      w-20 h-20 
      rounded-2xl 
      bg-white 
      flex items-center justify-center
      shadow-[0_6px_20px_rgba(0,0,0,0.06)]
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]
      transition-all duration-300
    ">
      <img
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${logo}.svg`}
        alt={logo}
        className="w-9 h-9 object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
      />
    </div>
  );
}

function StatCard({ title, subtitle }: any) {
  return (
    <div className="
      bg-white 
      rounded-2xl 
      px-6 py-5 
      text-center
      shadow-[0_6px_20px_rgba(0,0,0,0.06)]
      min-w-[110px]
    ">
      <p className="text-xl font-semibold text-gray-900">{title}</p>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}
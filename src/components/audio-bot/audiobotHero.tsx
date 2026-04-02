export default function AudioBotHero() {
  return (
    <section className="relative min-h-screen bg-[#e8f5f9] overflow-hidden font-sans">
      {/* Subtle background accent glow */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d0eaf2] opacity-50 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 flex flex-col gap-8 max-w-xl">

          {/* Feature badge */}
          <div className="flex items-center gap-3">
            <span className="bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              Feature
            </span>
            <span className="text-sm text-gray-600 font-medium tracking-wide">
              Audio Bot
            </span>
          </div>

          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-400 uppercase -mb-4">
            Voice Automation &nbsp;·&nbsp; Part of the Montr Platform
          </p>

          {/* Headline */}
          <h1 className="text-[3.25rem] lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight text-gray-950">
            Voice agents<br />
            that act like a<br />
            frontline team
          </h1>

          {/* Sub-copy */}
          <p className="text-base text-gray-500 leading-relaxed max-w-md">
            Handle support, qualification, and appointment flows with AI voice
            assistants that respond fast, keep context, and escalate cleanly
            when needed.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[
              {
                text: "Answer inbound support with low-latency voice AI",
              },
              {
                text: "Qualify and route leads before a human joins",
              },
              {
                text: "Book meetings and sync call outcomes to CRM",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl px-5 py-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <p className="text-[10px] font-bold tracking-widest uppercase text-sky-600 mb-3 flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6.5L4.5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Included
                </p>
                <p className="text-sm text-gray-600 leading-snug">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button className="w-full sm:w-auto bg-gray-950 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
              Book a Demo
            </button>
            <button className="w-full sm:w-auto bg-white/50 border border-gray-200 text-gray-700 px-8 py-3 rounded-full text-sm font-bold hover:bg-white transition-colors">
              View Pricing
            </button>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Dashboard Image ── */}
        <div className="flex-1 flex items-start justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[640px]">

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white">

              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                    Launch Surface
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    Audio Bot
                  </p>
                </div>
                <span className="flex items-center gap-1.5 bg-sky-50 text-sky-600 text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-sky-100">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 4H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 4V3a3 3 0 1 1 6 0v1"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                  Agentic layer
                </span>
              </div>

              {/* Dashboard image placeholder */}
              <div className="relative w-full aspect-[16/10] bg-gray-50 flex items-center justify-center p-4">
                <img
                  src="/dashboard-demo-2.webp"
                  alt="Montr Audio Bot Dashboard"
                  className="w-full h-full object-cover rounded-xl shadow-inner border border-gray-100"
                />
              </div>

              {/* Bottom Stat Bar */}
              <div className="grid grid-cols-2 border-t border-gray-50">
                <div className="px-8 py-6 border-r border-gray-50">
                   <p className="text-xl font-extrabold text-gray-900">&lt;500ms</p>
                   <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-400 mt-1">
                     Response Latency<br />Target
                   </p>
                </div>
                <div className="px-8 py-6">
                   <p className="text-xl font-extrabold text-gray-900">24/7</p>
                   <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-400 mt-1">
                     Coverage Without<br />Queue Gaps
                   </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
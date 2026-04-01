export default function AutonomousHero() {
  return (
    <section className="relative min-h-screen bg-[#fdf6ee] overflow-hidden font-sans">
      {/* Subtle background circle accent */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#f5e8d4] opacity-60 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 flex flex-col gap-8 max-w-xl">

          {/* Feature badge */}
          <div className="flex items-center gap-3">
            <span className="bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              Feature
            </span>
            <span className="text-sm text-gray-600 font-medium tracking-wide">
              Autonomous AI Agent
            </span>
          </div>

          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-400 uppercase -mb-4">
            Core Agentic System &nbsp;·&nbsp; Part of the Montr Platform
          </p>

          {/* Headline */}
          <h1 className="text-[3.25rem] lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight text-gray-950">
            AI agents that<br />
            do the work,<br />
            not just suggest<br />
            the next step
          </h1>

          {/* Sub-copy */}
          <p className="text-base text-gray-500 leading-relaxed max-w-md">
            Launch autonomous agents that plan, execute, and refine marketing
            tasks across campaigns, inboxes, CRM, and workflow automation from
            one operating layer.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[
              {
                text: "Deploy specialized AI agents for campaign execution and lead operations",
              },
              {
                text: "Let agents work across content, CRM, messaging, and automations without tool switching",
              },
              {
                text: "Keep humans in control with approvals, visibility, and clean escalation paths",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl px-5 py-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 mb-3 flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
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
        </div>

        {/* ── RIGHT COLUMN — Dashboard image ── */}
        <div className="flex-1 flex items-start justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[640px]">

            {/* Outer card wrapper */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">
                    Launch Surface
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    Autonomous AI Agent
                  </p>
                </div>
                <span className="flex items-center gap-1.5 bg-amber-50 text-amber-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.44L7 8.885l-3.09 1.626.59-3.44L2 4.635l3.455-.505L7 1z"
                      fill="currentColor"
                    />
                  </svg>
                  Agentic layer
                </span>
              </div>

              {/* Dashboard image placeholder */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 flex items-center justify-center">
                <div className="relative w-full aspect-[16/10] bg-gray-50 flex items-center justify-center">
                  <img
                    src="/dashboard-demo-2.webp"
                    alt="Montr dashboard"
                    className="object-cover"
                  />

                  <div className="flex flex-col items-center gap-2 text-gray-300 select-none">
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="40"
                        height="40"
                        rx="6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 3"
                      />
                      <circle cx="18" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M4 36l10-8 8 6 8-10 14 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat — 24/7 */}
            <div className="absolute -bottom-4 left-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4">
              <p className="text-2xl font-extrabold text-gray-900 leading-none">24/7</p>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mt-1">
                Task Execution<br />Coverage
              </p>
            </div>

            {/* Floating stat — Cross-feature */}
            <div className="absolute -bottom-4 right-4 bg-gray-950 text-white rounded-2xl shadow-xl px-6 py-4">
              <p className="text-base font-extrabold leading-none">Cross-feature</p>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mt-1">
                Coordination From<br />One Agent Layer
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
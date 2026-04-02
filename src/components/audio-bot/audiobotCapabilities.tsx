export default function AudioBotCapabilities() {
  const capabilities = [
    {
      index: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Low-latency conversation",
      description:
        "Respond quickly enough to feel natural, reducing the awkward pauses that make automated calls feel robotic.",
    },
    {
      index: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5c0 1.3.5 2.5 1.4 3.4L5 14h5.5l1.1-2.2c1 .5 2.1.7 3.4.7a5.5 5.5 0 0 0 5.5-5.5V6a4 4 0 0 0-4-4h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 6h4M11 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Context-aware memory",
      description:
        "Reference caller history, open tickets, and CRM data so the conversation starts with real context instead of generic scripts.",
    },
    {
      index: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Inbound and outbound flows",
      description:
        "Use one system for support handling, qualification calls, reminders, and outbound engagement campaigns.",
    },
    {
      index: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M3 11c0-4.97 4.03-9 9-9s9 4.03 9 9M21 11v5a3 3 0 0 1-3 3h-2M3 11v5a3 3 0 0 0 3 3h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="16" y="14" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="4" y="14" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Human handoff",
      description:
        "Escalate complex conversations with a transcript and summary so human agents can step in without re-asking questions.",
    },
    {
      index: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14h.01M15 14h.01M18 14h.01M9 14h.01M12 17h.01M15 17h.01M18 17h.01M9 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Live scheduling",
      description:
        "Check availability and book appointments in real time while the caller is still on the line.",
    },
    {
      index: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Call scoring and analytics",
      description:
        "Transcribe calls, analyze sentiment, and surface lead quality or service risk signals automatically.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Capabilities badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
            Capabilities
          </span>
          <span className="text-sm text-gray-600 font-medium tracking-wide">
            Product Depth
          </span>
        </div>
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-tight mb-5">
            Conversational voice operations
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Replace static phone trees with responsive voice automation that can listen, reason, and complete next steps.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.index}
              className="relative bg-[#fdfdfd] border border-gray-100 rounded-2xl px-6 pt-6 pb-8 hover:shadow-md hover:border-gray-200 transition-all duration-200 group"
            >
              {/* Index */}
              <span className="absolute top-5 right-5 text-xs font-semibold text-gray-300 tracking-widest">
                {cap.index}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 mb-5 shadow-sm group-hover:border-gray-300 transition-colors">
                {cap.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2.5 leading-snug">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
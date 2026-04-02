export default function AIStudioCapabilities() {
  const capabilities = [
    {
      index: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Advanced text generation",
      description:
        "Draft blogs, ads, landing-page copy, briefs, and reports with model access tuned for high-velocity marketing output.",
    },
    {
      index: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Image and graphic creation",
      description:
        "Generate photorealistic visuals or brand-aligned illustrations quickly enough to support daily campaign testing.",
    },
    {
      index: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M23 7l-7 5 7 5V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="1" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "Video synthesis",
      description:
        "Turn prompts into short-form motion assets, product explainers, and social-ready creative without a separate production chain.",
    },
    {
      index: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "Voice and audio",
      description:
        "Create voiceovers, audio layers, and localized narration with realistic output and fast turnaround.",
    },
    {
      index: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Prompt workspaces",
      description:
        "Store, organize, and share high-performing prompts so teams stop rebuilding the same workflows from scratch.",
    },
    {
      index: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Brand voice tuning",
      description:
        "Anchor output to your positioning, tone, and campaign references so generated assets feel consistent across channels.",
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
            End-to-end creative production
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Give your team one place to create, test, and refine campaign assets without bouncing between specialist tools.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.index}
              className="relative bg-[#f9f9fb] border border-gray-100 rounded-2xl px-6 pt-6 pb-8 hover:shadow-md hover:border-gray-200 transition-all duration-200 group"
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
              <h3 className="text-base font-bold text-gray-900 mb-2.5 leading-snug">
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
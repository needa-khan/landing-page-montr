"use client";

export default function Impact() {
  const stats = [
    {
      number: "10x",
      title: "Faster Output",
      description: "AI agents generate, schedule, and engage simultaneously.",
    },
    {
      number: "40+",
      title: "Hours Saved Weekly",
      description: "Put repetitive workflows like CRM syncing and emails on complete auto-pilot.",
    },
    {
      number: "1",
      title: "Unified Platform",
      description: "Replace your expensive marketing stack with a single operating system.",
    },
    {
      number: "24/7",
      title: "Autonomous Operation",
      description: "AI chatbots and voice agents capture leads while your team focuses elsewhere.",
    },
  ];

  return (
    <section className="bg-[#0d0d1a] px-10 py-16 min-h-screen flex flex-col justify-center gap-12">

      {/* Top Row */}
      <div className="flex items-start justify-between gap-8">

        {/* Left: badge + heading + subtext */}
        <div className="flex flex-col gap-6 max-w-2xl">

          {/* Badge pill */}
          <div className="flex items-center w-fit">
            <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">
              The Impact
            </span>
            <span className="text-gray-400 text-sm ml-4">Why go agentic?</span>
            {/* Line extending to right */}
            <div className="h-px bg-gray-700 w-40 ml-4" />
          </div>

          <h2 className="text-5xl font-bold text-white leading-tight">
            The Agentic Advantage
          </h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-xl">
            Stop switching between disjointed tools. Montr orchestrates your entire
            marketing strategy under one roof, automatically.
          </p>
        </div>

        {/* Right: Operating Signal card */}
        <div className="bg-[#1a1a2e] border border-gray-700 rounded-2xl p-8 max-w-sm w-full">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            Operating Signal
          </p>
          <p className="text-white text-lg leading-relaxed">
            One place to brief, launch, track, and iterate campaigns without losing
            context between teams, channels, and AI systems.
          </p>
        </div>

      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8 flex flex-col gap-4"
          >
            <span className="text-white text-6xl font-bold">{stat.number}</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-semibold">{stat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
export default function AutonomousUseCases() {
    const useCases = [
        {
            eyebrow: "CAMPAIGN OPS",
            index: "01",
            title: "Running launch workflows end to end",
            description:
                "A growth team used autonomous agents to turn launch briefs into asset requests, distribution tasks, approval queues, and follow-up actions across the stack.",
            bullets: [
                "Compressed multi-step launch coordination into one flow",
                "Reduced manual handoffs between strategy and execution",
                "Kept launch tasks moving outside working hours",
                "Improved campaign consistency across channels",
            ],
        },
        {
            eyebrow: "LEAD OPS",
            index: "02",
            title: "Qualifying and routing demand automatically",
            description:
                "A B2B revenue team deployed an agent to watch inbound forms and conversations, enrich contacts, update CRM records, and route the right opportunities instantly.",
            bullets: [
                "Shortened lead-response time dramatically",
                "Removed repetitive CRM admin work",
                "Applied routing logic more consistently",
                "Escalated high-intent leads with full context",
            ],
        },
        {
            eyebrow: "LIFECYCLE",
            index: "03",
            title: "Continuous follow-up without coordinator overhead",
            description:
                "A lean SaaS team used agents to monitor user signals, trigger outreach, prepare campaign variants, and queue approvals for the next best action.",
            bullets: [
                "Maintained follow-up coverage with a small team",
                "Triggered outreach from live product signals",
                "Reduced execution lag across lifecycle programs",
                "Freed operators for higher-value decisions",
            ],
        },
    ];

    return (
        <section className="bg-white py-20 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-tight mb-5">
                        Where autonomous agents create leverage first
                    </h2>
                    <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Autonomous AI Agent is strongest where teams lose time to repetitive
                        coordination, delayed follow-up, and execution gaps between tools.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {useCases.map((uc) => (
                        <div
                            key={uc.index}
                            className="flex flex-col bg-white border border-gray-100 rounded-2xl px-6 pt-6 pb-8 shadow-md shadow-gray-300/50"
                        >
                            {/* Eyebrow + Index */}
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">
                                    {uc.eyebrow}
                                </span>
                                <span className="text-xs font-semibold text-gray-300 tracking-widest">
                                    {uc.index}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                                {uc.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                {uc.description}
                            </p>

                            {/* Divider */}
                            <div className="border-t border-gray-200 mb-6" />

                            {/* Bullets */}
                            <ul className="flex flex-col gap-3 mt-auto">
                                {uc.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                                            <svg
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 h-3"
                                            >
                                                <path
                                                    d="M2 6.5L4.5 9L10 3"
                                                    stroke="white"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-sm text-gray-600 leading-snug">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* CTA Banner */}
                <div className="mt-24 bg-[#4A4C52] rounded-[32px] p-10 md:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-end justify-between gap-10 shadow-2xl shadow-gray-200/50">
                    <div className="flex-1">
                        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
                            Autonomous AI Agent
                        </p>
                        <h3 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            Deploy AI agents<br />
                            that move from<br />
                            planning to<br />
                            real <span className="text-[#A1A1AA]">execution</span>
                        </h3>
                        <p className="text-sm text-gray-300 max-w-md leading-relaxed">
                            Give your team a controllable agent layer that handles repetitive marketing work across the full platform.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                        <button className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                            Talk to Sales
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <button className="w-full sm:w-auto bg-transparent border border-gray-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
                            Compare Plans
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

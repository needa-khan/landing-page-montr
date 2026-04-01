export default function AIStudioCapabilities() {
    const capabilities = [
        {
            index: "01",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 6.5c1 .8 1.8 1.9 2.2 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            title: "Goal-driven execution",
            description:
                "Assign outcomes instead of one-off prompts so agents can break work into steps and keep momentum without constant supervision.",
        },
        {
            index: "02",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9.5 7h5M7 9.5v5M17 9.5v5M9.5 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            title: "Cross-feature actions",
            description:
                "Move between content generation, inbox handling, CRM updates, and workflow triggers from one connected operating layer.",
        },
        {
            index: "03",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path
                        d="M20 12a8 8 0 1 1-2.34-5.66"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path d="M20 4v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Iterative improvement",
            description:
                "Refine decisions over time using feedback loops, historical outcomes, and live campaign context instead of repeating static logic.",
        },
        {
            index: "04",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path
                        d="M12 3l2 5h5l-4 3.5 1.5 5.5L12 14l-4.5 3 1.5-5.5L5 8h5l2-5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Human-in-the-loop approvals",
            description:
                "Add approval gates for sensitive actions so teams keep oversight on outreach, messaging, routing, and campaign changes.",
        },
        {
            index: "05",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 3.5C8.5 2.5 10.2 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            title: "Persistent task memory",
            description:
                "Carry context forward across conversations, contacts, and workflows so agents do not restart from zero every time.",
        },
        {
            index: "06",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 17v-4M11 17v-7M15 17v-3M19 17v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            title: "Operational visibility",
            description:
                "Track what the agent decided, what it executed, and where human intervention improved the outcome.",
        },
    ];

    return (
        <section className="bg-white py-20 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
                {/* Capabilites badge */}
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
                        Autonomous execution<br />
                        with real operational control
                    </h2>
                    <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Use agentic workflows for the work that usually gets stuck between planning, execution,
                        follow-up, and optimization.
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
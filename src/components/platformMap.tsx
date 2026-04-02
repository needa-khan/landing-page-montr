"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const platformLinks = [
    { label: "Autonomous AI Agent", href: "/features/autonomous-ai-agent" },
    { label: "AI Studio", href: "/features/ai-studio" },
    { label: "Audio Bot", href: "/features/audio-bot" },
    { label: "Automation Workflow", href: "/features/automation-workflow" },
];

export default function PlatformMap() {
    const pathname = usePathname();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        el?.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        return () => {
            el?.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (dir: "left" | "right") => {
        scrollRef.current?.scrollBy({ left: dir === "right" ? 160 : -160, behavior: "smooth" });
    };

    return (
        <nav className="bg-[#fdf6ee] border-b border-[#ede8df] px-6 lg:px-12 py-3">
            <div className="max-w-7xl mx-auto flex items-center gap-6">

                {/* Left label */}
                <div className="flex-shrink-0">
                    <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-gray-400 leading-none mb-1">
                        Platform Map
                    </p>
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                        Jump between feature surfaces without leaving the product story.
                    </p>
                </div>

                {/* Divider */}
                <div className="flex-shrink-0 w-px h-8 bg-gray-200" />

                {/* Scrollable pills row */}
                <div className="relative flex items-center flex-1 min-w-0">

                    {/* Left fade + chevron */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-[#fdf6ee] border border-gray-200 shadow-sm text-gray-500 hover:text-gray-800 transition-colors"
                            aria-label="Scroll left"
                        >
                            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                <path d="M7.5 2L4 6l3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}

                    <div
                        ref={scrollRef}
                        className="flex items-center gap-2 overflow-x-auto scroll-smooth no-scrollbar px-1"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {platformLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`
                    flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 whitespace-nowrap
                    ${isActive
                                            ? "bg-gray-950 text-white shadow-sm"
                                            : "bg-white border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                                        }
                  `}
                                >
                                    {link.label}
                                    {!isActive && (
                                        <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5 opacity-50">
                                            <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right fade + chevron */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-[#fdf6ee] border border-gray-200 shadow-sm text-gray-500 hover:text-gray-800 transition-colors"
                            aria-label="Scroll right"
                        >
                            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                <path d="M4.5 2L8 6l-3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
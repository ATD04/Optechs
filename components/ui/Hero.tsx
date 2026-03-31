"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

interface HeroProps {
    headline: string;
    subheadline: string;
    primaryCTA?: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
    badge?: string;
    centered?: boolean;
    image?: string;
}

export default function Hero({
    headline,
    subheadline,
    primaryCTA,
    secondaryCTA,
    badge,
    centered = true,
    image,
}: HeroProps) {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[92vh] flex items-center bg-navy-950 overflow-hidden"
        >
            {/* AI Background Visual */}
            {image && (
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-navy-950/40 to-navy-950 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950 z-10 opacity-60" />

                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 1, 0, -1, 0]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full h-full opacity-40 lg:opacity-50 scale-110"
                    >
                        <Image
                            src={image}
                            alt="Background Visual"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Animated background grid layer */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] z-1" />

            {/* Subtle light leaks */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-1" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none z-1" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
                <div className={centered ? "text-center max-w-4xl mx-auto" : "max-w-3xl"}>
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            {badge}
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8"
                    >
                        {headline.split(" ").map((word, i) => (
                            <span key={i}>
                                {i > 0 && " "}
                                {word.replace(/[.,]/g, "") === "OPTECHS" || word === "Secure" || word === "Security" || word === "Cyber" ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-accent drop-shadow-sm">
                                        {word}
                                    </span>
                                ) : (
                                    word
                                )}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl ${centered ? "mx-auto" : ""}`}
                    >
                        {subheadline}
                    </motion.p>

                    {(primaryCTA || secondaryCTA) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className={`flex flex-col sm:flex-row gap-5 ${centered ? "justify-center" : "justify-start"}`}
                        >
                            {primaryCTA && (
                                <Link
                                    href={primaryCTA.href}
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-accent-dark text-navy-900 font-black text-lg rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300 group"
                                >
                                    {primaryCTA.label}
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            )}
                            {secondaryCTA && (
                                <Link
                                    href={secondaryCTA.href}
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 backdrop-blur-md"
                                >
                                    {secondaryCTA.label}
                                </Link>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Bottom transition gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-950 to-transparent z-10" />
        </section>
    );
}

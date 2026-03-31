"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    badge?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeader({
    badge,
    title,
    subtitle,
    centered = true,
    light = false,
}: SectionHeaderProps) {
    return (
        <div className={`mb-14 ${centered ? "text-center" : ""}`}>
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-4 ${light
                            ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                            : "bg-cyan-400/10 border-cyan-400/30 text-cyan-400"
                        }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {badge}
                </motion.div>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 ${light ? "text-navy-900" : "text-white"
                    }`}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`text-base sm:text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""
                        } ${light ? "text-gray-600" : "text-gray-400"}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

interface Stat {
    value: string;
    label: string;
}

interface StatsRowProps {
    stats: Stat[];
    light?: boolean;
}

export default function StatsRow({ stats, light = false }: StatsRowProps) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`text-center p-6 rounded-2xl border ${light
                            ? "bg-white border-gray-100 shadow-sm"
                            : "bg-white/3 border-white/8"
                        }`}
                >
                    <div
                        className="text-3xl sm:text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent"
                    >
                        {stat.value}
                    </div>
                    <div className={`text-sm font-medium ${light ? "text-gray-500" : "text-gray-400"}`}>
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    delay?: number;
}

export default function Card({ children, className = "", hover = true, glow = false, delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
            className={`relative bg-card-gradient border border-white/8 rounded-2xl p-6 shadow-card overflow-hidden group transition-all duration-300 ${glow ? "hover:shadow-glow hover:border-cyan-400/30" : "hover:border-white/15"
                } ${className}`}
        >
            {/* Subtle top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {children}
        </motion.div>
    );
}

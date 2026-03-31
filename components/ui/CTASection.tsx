"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTASectionProps {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export default function CTASection({
    title,
    description,
    buttonLabel,
    buttonHref,
    secondaryLabel,
    secondaryHref,
}: CTASectionProps) {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-navy-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-accent/10 opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 sm:p-16 shadow-glow"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={buttonHref}
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-accent-dark text-navy-900 font-bold rounded-xl hover:shadow-glow-md hover:scale-105 transition-all duration-200"
                        >
                            {buttonLabel}
                        </Link>
                        {secondaryLabel && secondaryHref && (
                            <Link
                                href={secondaryHref}
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                            >
                                {secondaryLabel}
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

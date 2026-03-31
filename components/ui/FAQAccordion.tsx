"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/types";

interface FAQAccordionProps {
    faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => {
                const isOpen = openId === faq.id;
                return (
                    <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                                ? "border-cyan-400/40 bg-cyan-400/5"
                                : "border-white/8 bg-white/3 hover:border-white/15"
                            }`}
                    >
                        <button
                            onClick={() => setOpenId(isOpen ? null : faq.id)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                        >
                            <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-cyan-400" : "text-white"}`}>
                                {faq.question}
                            </span>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-cyan-400 text-navy-900 rotate-45" : "bg-white/5 text-gray-400"
                                }`}>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
}

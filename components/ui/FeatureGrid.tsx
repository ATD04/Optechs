"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureGridProps {
    children: ReactNode;
    cols?: 2 | 3 | 4;
}

export default function FeatureGrid({ children, cols = 3 }: FeatureGridProps) {
    const colClass = {
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-2 lg:grid-cols-3",
        4: "sm:grid-cols-2 lg:grid-cols-4",
    }[cols];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
            }}
            className={`grid grid-cols-1 ${colClass} gap-6`}
        >
            {children}
        </motion.div>
    );
}

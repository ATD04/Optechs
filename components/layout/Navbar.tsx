"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSiteData } from "@/lib/content";

const siteData = getSiteData();

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-white/5"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-6 w-24 lg:h-8 lg:w-32 transition-transform group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="OPTECHS Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {siteData.navigation.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                                            ? "text-cyan-400 bg-cyan-400/10"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-indicator"
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-accent-dark text-navy-900 font-semibold text-sm rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-200"
                        >
                            Get Started
                        </Link>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden overflow-hidden border-t border-white/10 mt-1"
                        >
                            <ul className="py-4 space-y-1">
                                {siteData.navigation.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                                    ? "text-cyan-400 bg-cyan-400/10"
                                                    : "text-gray-300 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                                <li className="pt-2">
                                    <Link
                                        href="/contact"
                                        className="block text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-accent-dark text-navy-900 font-semibold text-sm rounded-lg"
                                    >
                                        Get Started
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

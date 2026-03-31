import Link from "next/link";
import Image from "next/image";
import { getSiteData } from "@/lib/content";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const siteData = getSiteData();


export default function Footer() {
    return (
        <footer className="bg-navy-950 border-t border-white/5">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative h-6 w-24 transition-transform group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="OPTECHS Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            {siteData.footer.description}
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-2">
                            <a
                                href={`tel:${siteData.brand.phone}`}
                                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                            >
                                <MdPhone className="w-4 h-4 text-cyan-400" />
                                {siteData.brand.phone}
                            </a>
                            <a
                                href={`mailto:${siteData.brand.email}`}
                                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                            >
                                <MdEmail className="w-4 h-4 text-cyan-400" />
                                {siteData.brand.email}
                            </a>
                            <p className="flex items-center gap-2 text-gray-400 text-sm">
                                <MdLocationOn className="w-4 h-4 text-cyan-400" />
                                {siteData.brand.address}
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {siteData.footer.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social + CTA */}
                    <div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-accent-dark text-navy-900 font-semibold text-sm rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-200"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-xs">{siteData.footer.copyright}</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

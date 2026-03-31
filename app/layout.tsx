import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: {
        default: "OPTECHS | Cybersecurity & Technical Solutions",
        template: "%s | OPTECHS",
    },
    description: "Leading cybersecurity and technical solutions provider. Securing enterprises with next-gen technology and expert services.",
    keywords: ["Cybersecurity", "Technical Solutions", "Network Security", "Cloud Security", "Managed Services", "OPTECHS"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.variable} font-sans antialiased bg-navy-950 text-white min-h-screen flex flex-col`}>
                <Navbar />
                <main className="flex-grow pt-16 lg:pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

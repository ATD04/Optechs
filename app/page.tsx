import Hero from "@/components/ui/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Card from "@/components/ui/Card";
import CTASection from "@/components/ui/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
    getSiteData,
    getSolutionsData,
    getServicesData
} from "@/lib/content";
import { MdSecurity, MdCloud, MdLock, MdSpeed, MdGroups, MdSupportAgent } from "react-icons/md";

const siteData = getSiteData();
const solutionsData = getSolutionsData();
const servicesData = getServicesData();

const icons: Record<string, any> = {
    Shield: MdSecurity,
    Cloud: MdCloud,
    Key: MdLock,
    Search: MdSecurity, // Fallback
    Eye: MdSecurity, // Fallback
    Layout: MdSecurity, // Fallback
};

export default function Home() {
    const featuredSolutions = solutionsData.solutions.slice(0, 3);
    const featuredServices = servicesData.services.slice(0, 3);

    return (
        <div>
            {/* Hero Section */}
            <Hero
                headline={siteData.brand.tagline}
                subheadline={siteData.brand.description}
                primaryCTA={{ label: "Explore Solutions", href: "/solutions" }}
                secondaryCTA={{ label: "Contact Us", href: "/contact" }}
                badge="Trust • Excellence • Innovation"
                centered={true}
                image="/images/home-visual.png"
            />

            {/* What We Do */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="What We Do"
                        subtitle="Providing comprehensive cybersecurity solutions to help organizations navigate the complex digital threat landscape with confidence."
                        badge="Core Expertise"
                    />
                    <FeatureGrid cols={3}>
                        <Card hover glow>
                            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                                <MdSecurity className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Full-Spectrum Defense</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We provide multi-layered security architectures that protect your enterprise from the perimeter to the edge.
                            </p>
                        </Card>
                        <Card hover glow>
                            <div className="w-12 h-12 rounded-xl bg-accent-dark/10 flex items-center justify-center mb-6">
                                <MdCloud className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Digital Transformation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Securely migrate to the cloud and modernize your infrastructure with our expert technical solutions.
                            </p>
                        </Card>
                        <Card hover glow>
                            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                                <MdLock className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Risk & Compliance</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Navigate the regulatory landscape with ease through our automated GRC and advisory services.
                            </p>
                        </Card>
                    </FeatureGrid>
                </div>
            </AnimatedSection>

            {/* Featured Solutions */}
            <AnimatedSection className="py-24 bg-navy-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Featured Solutions"
                        subtitle="Leading technology and strategic architectures designed to protect your most critical assets."
                        badge="Enterprise Ready"
                    />
                    <FeatureGrid cols={3}>
                        {featuredSolutions.map((sol) => (
                            <Card key={sol.id} hover className="h-full flex flex-col">
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-3 text-white">{sol.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">{sol.shortDescription}</p>
                                    <ul className="space-y-2">
                                        {sol.keyBenefits.slice(0, 3).map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                                                <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        ))}
                    </FeatureGrid>
                </div>
            </AnimatedSection>

            {/* Why OPTECHS */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <SectionHeader
                                title="Why Choose OPTECHS?"
                                subtitle="We don't just provide services; we build enduring partnerships to safeguard your organization's future in an increasingly hostile digital world."
                                badge="The OPTECHS Advantage"
                                centered={false}
                            />
                            <div className="space-y-6 mb-10">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                                        <MdSpeed className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Rapid Response</h4>
                                        <p className="text-gray-400 text-sm">Real-time monitoring and industry-leading response SLAs for mission-critical issues.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                                        <MdGroups className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Expert Team</h4>
                                        <p className="text-gray-400 text-sm">A deep bench of certified security architects and engineers with decades of experience.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                                        <MdSupportAgent className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">24/7 Support</h4>
                                        <p className="text-gray-400 text-sm">Global support availability ensuring your defense never rests, regardless of your time zone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Final CTA */}
            <CTASection
                title="Ready to Secure Your Enterprise?"
                description="Partner with OPTECHS today and build a resilient security posture that enables your business to innovate without fear."
                buttonLabel="Schedule a Consultation"
                buttonHref="/contact"
                secondaryLabel="Explore Services"
                secondaryHref="/services"
            />
        </div>
    );
}

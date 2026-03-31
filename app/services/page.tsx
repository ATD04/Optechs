import Hero from "@/components/ui/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getServicesData } from "@/lib/content";
import { MdSearch, MdVisibility, MdLayers, MdWarning, MdGroups, MdAssignmentTurnedIn } from "react-icons/md";

const servicesData = getServicesData();

const icons: Record<string, any> = {
    Search: MdSearch,
    Eye: MdVisibility,
    Layout: MdLayers,
    AlertTriangle: MdWarning,
    Users: MdGroups,
    FileCheck: MdAssignmentTurnedIn,
};

export const metadata = {
    title: "Services",
    description: "Professional cybersecurity services including penetration testing, managed security, and incident response.",
};

export default function ServicesPage() {
    return (
        <div className="pb-20">
            <Hero
                headline={servicesData.hero.headline}
                subheadline={servicesData.hero.subheadline}
                badge="Professional Services"
                centered={true}
                image="/images/services-visual.png"
            />

            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Strategic Security Enablement"
                        subtitle="Our professional services are designed to augment your capabilities and provide expert guidance across the entire security lifecycle."
                        badge="Expertise"
                    />

                    <div className="space-y-24">
                        {servicesData.services.map((svc, idx) => {
                            const Icon = icons[svc.icon] || MdSearch;
                            const isEven = idx % 2 === 0;

                            return (
                                <div key={svc.id} className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isEven ? "" : "lg:direction-rtl"}`}>
                                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-cyan-400" />
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-6 leading-tight">{svc.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                            {svc.description}
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">Deliverables</h4>
                                                <ul className="space-y-3">
                                                    {svc.deliverables.map((del, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                                            <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                            {del}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-8 sm:mt-0">
                                                <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Our Process</h4>
                                                <div className="space-y-4">
                                                    {svc.processSteps.map((step) => (
                                                        <div key={step.step} className="flex gap-3">
                                                            <div className="flex-shrink-0 w-6 h-6 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                                                                {step.step}
                                                            </div>
                                                            <div>
                                                                <h5 className="text-xs font-bold text-white mb-0.5">{step.title}</h5>
                                                                <p className="text-[10px] text-gray-500 leading-tight">{step.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`mt-12 lg:mt-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl bg-navy-900 border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="text-navy-800 font-black text-6xl lg:text-8xl opacity-10 select-none">
                                                {svc.id.split('-')[1]}
                                            </div>
                                            <div className="absolute inset-x-8 bottom-8 p-6 bg-navy-950/80 backdrop-blur-md rounded-2xl border border-white/10">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Active Service</span>
                                                </div>
                                                <div className="text-white font-bold mt-1">{svc.title} Engagement</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

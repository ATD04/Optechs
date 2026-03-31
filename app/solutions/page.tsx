"use client";

import { useState } from "react";
import Hero from "@/components/ui/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { getSolutionsData } from "@/lib/content";
import { MdSecurity, MdCloud, MdLock, MdMonitor, MdAssignmentTurnedIn, MdRadar } from "react-icons/md";

const solutionsData = getSolutionsData();

const icons: Record<string, any> = {
    Shield: MdSecurity,
    Cloud: MdCloud,
    Key: MdLock,
    Monitor: MdMonitor,
    ClipboardCheck: MdAssignmentTurnedIn,
    Radar: MdRadar,
};

export default function SolutionsPage() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const filteredSolutions = activeCategory === "All"
        ? solutionsData.solutions
        : solutionsData.solutions.filter(s => s.category === activeCategory);

    const categories = ["All", ...solutionsData.categories];

    return (
        <div className="pb-20">
            <Hero
                headline={solutionsData.hero.headline}
                subheadline={solutionsData.hero.subheadline}
                badge="Enterprise Solutions"
                centered={true}
                image="/images/solutions-visual.png"
            />

            {/* Solutions Grid */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Our Technology Stack"
                        subtitle="Explore our comprehensive suite of security solutions, each engineered to address specific threats and organizational needs."
                        badge="Portfolio"
                    />

                    {/* simple filtering */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeCategory === cat
                                    ? "bg-cyan-400 text-navy-900 border-cyan-400 shadow-glow"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:bg-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <FeatureGrid cols={3}>
                        {filteredSolutions.map((sol) => {
                            const Icon = icons[sol.icon] || MdSecurity;
                            return (
                                <Card key={sol.id} hover className="h-full flex flex-col group">
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-navy-900 transition-colors">
                                                <Icon className="w-6 h-6 text-cyan-400 group-hover:text-inherit" />
                                            </div>
                                            <Badge>{sol.category}</Badge>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">{sol.title}</h3>
                                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                            {sol.shortDescription}
                                        </p>
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Key Benefits</h4>
                                            <ul className="space-y-2">
                                                {sol.keyBenefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                                                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </FeatureGrid>
                </div>
            </AnimatedSection>
        </div>
    );
}

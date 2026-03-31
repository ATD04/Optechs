import Hero from "@/components/ui/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getCompanyData } from "@/lib/content";
import Image from "next/image";

const companyData = getCompanyData();

export const metadata = {
    title: "Company",
    description: "Learn about OPTECHS' mission, vision, and values. Saudi Arabia's leading cybersecurity partner.",
};

export default function CompanyPage() {
    return (
        <div className="pb-20">
            <Hero
                headline={companyData.hero.headline}
                subheadline={companyData.hero.subheadline}
                badge="Our Identity"
                centered={true}
                image="/images/company-visual.png"
            />

            {/* About Section */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
                        <div>
                            <SectionHeader
                                title={companyData.about.title}
                                badge="Who We Are"
                                centered={false}
                            />
                            <div className="space-y-6">
                                {companyData.about.paragraphs.map((p, i) => (
                                    <p key={i} className="text-gray-400 leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-0 grid grid-cols-1 gap-6">
                            <div className="p-8 rounded-3xl bg-cyan-400/5 border border-cyan-400/20">
                                <h3 className="text-2xl font-bold text-white mb-4">{companyData.mission.title}</h3>
                                <p className="text-cyan-100/70 italic leading-relaxed">
                                    &quot;{companyData.mission.text}&quot;
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-accent-dark/5 border border-accent-dark/20">
                                <h3 className="text-2xl font-bold text-white mb-4">{companyData.vision.title}</h3>
                                <p className="text-accent/70 italic leading-relaxed">
                                    &quot;{companyData.vision.text}&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Our Core Values"
                        subtitle="The principles that guide our interactions with our team, our partners, and our clients."
                        badge="Culture"
                    />
                    <FeatureGrid cols={3}>
                        {companyData.values.map((value, i) => (
                            <Card key={i} hover>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                            </Card>
                        ))}
                    </FeatureGrid>
                </div>
            </AnimatedSection>

            {/* Customers */}
            <AnimatedSection className="py-24 bg-navy-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Our Customers"
                        subtitle="Organizations that trust OPTECHS for specialized technical consultation and long-term collaboration."
                        badge="Clients"
                    />

                    <div className="max-w-3xl mx-auto">
                        <Card hover>
                            <div className="flex flex-col md:flex-row md:items-center gap-8">
                                <div className="bg-white rounded-2xl p-5 flex items-center justify-center md:w-80 w-full">
                                    <Image
                                        src="/images/khalifa-university.png"
                                        alt="Khalifa University"
                                        width={360}
                                        height={110}
                                        className="w-full h-auto object-contain"
                                        priority={false}
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3">Khalifa University</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Khalifa University is one of our valued clients, and we provide them with
                                        technical consultation to support their cybersecurity and technology objectives.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </AnimatedSection>

            {/* Timeline */}
            <AnimatedSection className="py-24 bg-navy-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-400/5 blur-3xl rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Our Journey"
                        subtitle="A history of growth, innovation, and unwavering protection."
                        badge="Timeline"
                    />
                    <div className="space-y-12 max-w-4xl mx-auto">
                        {companyData.timeline.map((item, i) => (
                            <div key={i} className="flex gap-8 items-start group">
                                <div className="flex-shrink-0 w-24 text-right">
                                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">
                                        {item.year}
                                    </span>
                                </div>
                                <div className="relative pt-1 border-l border-white/10 pl-8 pb-4">
                                    <div className="absolute top-2.5 -left-1.5 w-3 h-3 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

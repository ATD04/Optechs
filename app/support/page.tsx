import Hero from "@/components/ui/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { getSupportData } from "@/lib/content";

const supportData = getSupportData();

export const metadata = {
    title: "Support",
    description: "Get technical assistance and explore our support plans and frequently asked questions.",
};

export default function SupportPage() {
    return (
        <div className="pb-20">
            <Hero
                headline={supportData.hero.headline}
                subheadline={supportData.hero.subheadline}
                badge="Customer Success"
                centered={true}
                image="/images/solutions-visual.png"
            />

            {/* FAQs */}
            <AnimatedSection className="py-24 bg-navy-900/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Frequently Asked Questions"
                        subtitle="Find quick answers to common questions about our services, implementation, and engagement models."
                        badge="Knowledge Center"
                    />
                    <FAQAccordion faqs={supportData.faqs} />
                </div>
            </AnimatedSection>

            {/* Ticket CTA */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-navy-900 to-navy-800 border border-white/10 rounded-3xl p-10 sm:p-14 text-center">
                        <h2 className="text-3xl font-black text-white mb-6">Need Technical Assistance?</h2>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                            If you are an existing client experiencing technical issues, please open a support ticket and our team will get back to you according to your SLA.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-10 py-4 bg-cyan-400 text-navy-900 font-bold rounded-xl hover:shadow-glow hover:scale-105 transition-all">
                                Open a Ticket
                            </button>
                            <button className="px-10 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                                Access Portal
                            </button>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

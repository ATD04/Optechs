import Hero from "@/components/ui/Hero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import { getContactData } from "@/lib/content";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const contactData = getContactData();

const icons: Record<string, any> = {
    Phone: MdPhone,
    Mail: MdEmail,
    MapPin: MdLocationOn,
};

export default function ContactPage() {
    return (
        <div className="pb-20">
            <Hero
                headline={contactData.hero.headline}
                subheadline={contactData.hero.subheadline}
                badge="Connect With Us"
            />

            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{contactData.form.title}</h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            Reach us directly through any of the options below. We are ready to help with your next security project.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {contactData.info.map((item, i) => {
                            const Icon = icons[item.icon] || MdPhone;
                            const valueHref =
                                item.icon === "Phone"
                                    ? `tel:${item.value.replace(/\s+/g, "")}`
                                    : item.icon === "Mail"
                                      ? `mailto:${item.value}`
                                      : null;

                            return (
                                <Card key={i} hover={false} className="p-7 border-white/15 bg-white/3 h-full">
                                    <div className="flex gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-7 h-7 text-cyan-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{item.label}</div>
                                            {valueHref ? (
                                                <a
                                                    href={valueHref}
                                                    className="text-2xl sm:text-xl font-black text-white leading-tight hover:text-cyan-300 transition-colors break-words"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <div className="text-2xl sm:text-xl font-black text-white leading-tight break-words">{item.value}</div>
                                            )}
                                            <div className="text-sm text-gray-400 mt-2">{item.subValue}</div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}

                        <div className="sm:col-span-2 xl:col-span-3">
                            <Card hover={false} className="p-8 sm:p-10 border-white/10 bg-gradient-to-br from-navy-900 to-navy-800">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                                    <div className="max-w-2xl">
                                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{contactData.cta.title}</h3>
                                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                            {contactData.cta.description}
                                        </p>
                                    </div>
                                    <a
                                        href={contactData.cta.buttonHref}
                                        className="inline-flex items-center justify-center min-w-52 py-4 px-8 bg-cyan-400 text-navy-900 text-lg font-black rounded-2xl hover:shadow-glow transition-all"
                                    >
                                        {contactData.cta.buttonLabel}
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

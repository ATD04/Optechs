import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/ui/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getLearningData } from "@/lib/content";
import {
    MdArchitecture,
    MdComputer,
    MdMenuBook,
    MdCoPresent,
    MdScience,
    MdQuiz,
    MdSchool,
    MdGroups,
    MdTimeline,
    MdPeople,
    MdHub,
    MdTrackChanges,
    MdBackpack,
    MdAccountBalance,
    MdEngineering,
    MdBusinessCenter,
    MdHandshake,
    MdForum,
    MdRequestQuote,
    MdBuild,
    MdDescription,
    MdQrCode2,
    MdTune,
    MdCheckCircle,
    MdArrowForward,
    MdFlag,
    MdVisibility,
} from "react-icons/md";

const learningData = getLearningData();

export const metadata = {
    title: "Instructional Design & Learning Solutions",
    description: "End-to-end instructional design, e-learning, educational content, trainer toolkits, practical learning kits, assessment, and educator development from OPTECHS.",
};

const icons: Record<string, any> = {
    Design: MdArchitecture,
    Digital: MdComputer,
    Materials: MdMenuBook,
    Toolkit: MdCoPresent,
    Lab: MdScience,
    Assessment: MdQuiz,
    Educators: MdSchool,
    Facilitation: MdGroups,
    EndToEnd: MdTimeline,
    Learners: MdPeople,
    Connected: MdHub,
    Alignment: MdTrackChanges,
    School: MdBackpack,
    University: MdAccountBalance,
    Vocational: MdEngineering,
    Corporate: MdBusinessCenter,
    Partners: MdHandshake,
    Project: MdForum,
    Quote: MdRequestQuote,
};

const kitIcons = [MdBuild, MdDescription, MdQrCode2, MdTune];

// Offsets anchored sections below the fixed navbar
const anchorOffset = "scroll-mt-20 lg:scroll-mt-24";

export default function LearningSolutionsPage() {
    const { hero, overview, solutions, why, audiences, kits, work, insights, about, getStarted, cta } = learningData;

    return (
        <div>
            <Hero
                headline={hero.headline}
                subheadline={hero.subheadline}
                badge={hero.badge}
                primaryCTA={{ label: "Explore Our Solutions", href: "#solutions" }}
                secondaryCTA={{ label: "Discuss a Project", href: "/contact" }}
                centered={true}
                image={hero.image}
            />

            {/* Overview */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div id="overview" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <SectionHeader badge={overview.badge} title={overview.title} centered={false} />
                            <div className="space-y-5 -mt-6">
                                {overview.paragraphs.map((paragraph, i) => (
                                    <p key={i} className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-card">
                                <Image
                                    src={overview.image}
                                    alt="Collaborative learning and educational planning"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-cyan-500/10" />
                            </div>
                            <Card hover={false} glow className="relative -mt-24 mx-4 sm:mx-8 p-6 sm:p-8 bg-navy-900/90 backdrop-blur-md">
                                <h3 className="text-xl font-black text-white mb-1">{overview.panelTitle}</h3>
                                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">{overview.panelSubtitle}</p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {overview.highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-center gap-3 text-sm text-gray-300">
                                            <MdCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Solutions */}
            <AnimatedSection className="py-24 bg-navy-900">
                <div id="solutions" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <SectionHeader badge={solutions.badge} title={solutions.title} subtitle={solutions.subtitle} />
                    <FeatureGrid cols={4}>
                        {solutions.items.map((solution, i) => {
                            const Icon = icons[solution.icon] || MdArchitecture;
                            return (
                                <Card key={solution.id} glow delay={(i % 4) * 0.05} className="h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3 leading-snug">{solution.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{solution.description}</p>
                                    <ul className="space-y-2 mt-auto">
                                        {solution.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-xs text-gray-400">
                                                <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            );
                        })}
                    </FeatureGrid>
                </div>
            </AnimatedSection>

            {/* Why OPTECHS */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div id="why-optechs" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <SectionHeader badge={why.badge} title={why.title} subtitle={why.subtitle} />
                    <FeatureGrid cols={4}>
                        {why.items.map((item, i) => {
                            const Icon = icons[item.icon ?? ""] || MdCheckCircle;
                            return (
                                <Card key={item.title} hover={false} delay={i * 0.05} className="h-full text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-accent/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </Card>
                            );
                        })}
                    </FeatureGrid>
                </div>
            </AnimatedSection>

            {/* Who We Serve */}
            <AnimatedSection className="py-24 bg-navy-900">
                <div id="who-we-serve" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <SectionHeader badge={audiences.badge} title={audiences.title} subtitle={audiences.subtitle} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                        {audiences.items.map((item, i) => {
                            const Icon = icons[item.icon ?? ""] || MdSchool;
                            // 3 cards on the first row, 2 centered on the second
                            const span = i < 3 ? "lg:col-span-2" : i === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2";
                            return (
                                <Card key={item.title} glow delay={i * 0.05} className={`h-full ${span}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </AnimatedSection>

            {/* Learning Kits & Resources */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div id="learning-kits" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-2">
                            <SectionHeader badge={kits.badge} title={kits.title} subtitle={kits.subtitle} centered={false} />
                            <p className="text-gray-400 leading-relaxed -mt-6 mb-8">{kits.description}</p>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {kits.categories.map((category) => (
                                    <Badge key={category} className="px-3 py-1">{category}</Badge>
                                ))}
                            </div>
                            <Link
                                href={kits.cta.href}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-accent-dark text-navy-900 font-bold rounded-xl hover:shadow-glow-md hover:scale-105 transition-all duration-200"
                            >
                                {kits.cta.label}
                                <MdArrowForward className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
                            <div className="relative sm:col-span-2 aspect-[16/7] rounded-3xl overflow-hidden border border-white/10 shadow-card">
                                <Image
                                    src={kits.image}
                                    alt="Science laboratory equipment for practical learning"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/30 to-cyan-500/10" />
                            </div>
                            {kits.items.map((item, i) => {
                                const Icon = kitIcons[i] || MdBuild;
                                return (
                                    <Card key={item.title} hover={false} delay={i * 0.05} className="h-full">
                                        <Icon className="w-7 h-7 text-cyan-400 mb-5" />
                                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Our Work */}
            <AnimatedSection className="py-24 bg-navy-900">
                <div id="our-work" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <SectionHeader badge={work.badge} title={work.title} subtitle={work.subtitle} />
                    <FeatureGrid cols={3}>
                        {work.items.map((item, i) => (
                            <Card key={item.title} glow delay={i * 0.05} className="h-full !p-0">
                                {item.image && (
                                    <div className="relative aspect-[3/2] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                                    </div>
                                )}
                                <div className="p-6">
                                    <Badge className="mb-4">{item.category}</Badge>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </Card>
                        ))}
                    </FeatureGrid>
                </div>
            </AnimatedSection>

            {/* Insights & Resources */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div id="insights" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <SectionHeader badge={insights.badge} title={insights.title} subtitle={insights.subtitle} />

                    <FeatureGrid cols={3}>
                        {insights.featured.map((item, i) => (
                            <Card key={item.title} hover={false} delay={i * 0.05} className="h-full">
                                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">{item.category}</p>
                                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </Card>
                        ))}
                    </FeatureGrid>

                    <div className="flex flex-wrap justify-center gap-2 mt-12">
                        {insights.topics.map((topic) => (
                            <span
                                key={topic}
                                className="px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-gray-400 border border-white/10"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 mt-12">
                        <Card hover={false} className="p-8">
                            <h3 className="text-xl font-bold text-white mb-6">More Topics to Explore</h3>
                            <ul className="space-y-4">
                                {insights.moreTopics.map((topic) => (
                                    <li key={topic} className="flex items-start gap-3 text-sm text-gray-300">
                                        <MdCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card hover={false} className="p-8 flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-6">{insights.tools.title}</h3>
                            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                                {insights.tools.items.map((tool) => (
                                    <li key={tool} className="flex items-start gap-3 text-sm text-gray-300">
                                        <MdDescription className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={insights.tools.cta.href}
                                className="mt-auto inline-flex items-center gap-2 self-start text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                {insights.tools.cta.label}
                                <MdArrowForward className="w-4 h-4" />
                            </Link>
                        </Card>
                    </div>
                </div>
            </AnimatedSection>

            {/* About */}
            <AnimatedSection className="py-24 bg-navy-900">
                <div id="about" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <SectionHeader badge={about.badge} title={about.title} centered={false} />
                            <div className="space-y-5 -mt-6">
                                {about.paragraphs.map((paragraph, i) => (
                                    <p key={i} className="text-gray-400 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Card hover={false} glow className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <MdFlag className="w-6 h-6 text-cyan-400" />
                                    <h3 className="text-xl font-bold text-white">Our Mission</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">{about.mission}</p>
                            </Card>
                            <Card hover={false} glow className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <MdVisibility className="w-6 h-6 text-cyan-400" />
                                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">{about.vision}</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Get Started */}
            <AnimatedSection className="py-24 bg-navy-950">
                <div id="get-started" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${anchorOffset}`}>
                    <SectionHeader badge={getStarted.badge} title={getStarted.title} subtitle={getStarted.subtitle} />
                    <FeatureGrid cols={3}>
                        {getStarted.items.map((item, i) => {
                            const Icon = icons[item.icon ?? ""] || MdForum;
                            return (
                                <Link key={item.title} href={item.href ?? "/contact"} className="block h-full">
                                    <Card glow delay={i * 0.05} className="h-full">
                                        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                                            <Icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                                            Contact Us
                                            <MdArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Card>
                                </Link>
                            );
                        })}
                    </FeatureGrid>
                </div>
            </AnimatedSection>

            <CTASection
                title={cta.title}
                description={cta.description}
                buttonLabel={cta.buttonLabel}
                buttonHref={cta.buttonHref}
                secondaryLabel={cta.secondaryLabel}
                secondaryHref={cta.secondaryHref}
            />
        </div>
    );
}

// ─────────────────────────────────────────────
// Site / Navigation Types
// ─────────────────────────────────────────────
export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    href: string;
    icon: string;
}

export interface SiteData {
    brand: {
        name: string;
        tagline: string;
        logo: string;
        description: string;
        email: string;
        phone: string;
        address: string;
    };
    navigation: NavLink[];
    footer: {
        description: string;
        quickLinks: NavLink[];
        social: SocialLink[];
        copyright: string;
    };
}

// ─────────────────────────────────────────────
// Company Types
// ─────────────────────────────────────────────
export interface Value {
    title: string;
    description: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

export interface CompanyData {
    hero: { headline: string; subheadline: string };
    about: { title: string; paragraphs: string[] };
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: Value[];
    stats: Stat[];
    timeline: TimelineItem[];
}

// ─────────────────────────────────────────────
// Solutions Types
// ─────────────────────────────────────────────
export interface Solution {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    keyBenefits: string[];
    icon: string;
}

export interface SolutionsData {
    hero: { headline: string; subheadline: string };
    categories: string[];
    solutions: Solution[];
}

// ─────────────────────────────────────────────
// Services Types
// ─────────────────────────────────────────────
export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    deliverables: string[];
    processSteps: ProcessStep[];
    icon: string;
}

export interface ServicesData {
    hero: { headline: string; subheadline: string };
    services: Service[];
}

// ─────────────────────────────────────────────
// Vendors Types
// ─────────────────────────────────────────────
export interface Vendor {
    id: string;
    name: string;
    shortDescription: string;
    partnerType: string;
    category: string;
    logo: string;
}

export interface VendorsData {
    hero: { headline: string; subheadline: string };
    vendors: Vendor[];
}

// ─────────────────────────────────────────────
// Products Types
// ─────────────────────────────────────────────
export interface Product {
    id: string;
    name: string;
    description: string;
    keyFeatures: string[];
    useCases: string[];
    cta: string;
}

export interface ProductsData {
    hero: { headline: string; subheadline: string };
    products: Product[];
}

// ─────────────────────────────────────────────
// Support Types
// ─────────────────────────────────────────────
export interface SupportPlan {
    id: string;
    name: string;
    description: string;
    sla: string;
    hours: string;
    features: string[];
    highlighted: boolean;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export interface SupportData {
    hero: { headline: string; subheadline: string };
    supportPlans: SupportPlan[];
    faqs: FAQ[];
}

// ─────────────────────────────────────────────
// Contact Types
// ─────────────────────────────────────────────
export interface ContactInfoItem {
    label: string;
    value: string;
    subValue: string;
    icon: string;
}

export interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
}

export interface ContactData {
    hero: { headline: string; subheadline: string };
    info: ContactInfoItem[];
    form: {
        title: string;
        fields: FormField[];
        submitLabel: string;
        successMessage: string;
    };
    cta: {
        title: string;
        description: string;
        buttonLabel: string;
        buttonHref: string;
    };
}

// ─────────────────────────────────────────────
// Learning Solutions Types
// ─────────────────────────────────────────────
export interface LearningItem {
    icon?: string;
    category?: string;
    title: string;
    description: string;
    href?: string;
    image?: string;
}

export interface LearningSolution {
    id: string;
    icon: string;
    title: string;
    description: string;
    includes: string[];
}

export interface LearningSectionIntro {
    badge: string;
    title: string;
    subtitle: string;
}

export interface LearningData {
    hero: { badge: string; headline: string; subheadline: string; image: string };
    overview: {
        badge: string;
        title: string;
        paragraphs: string[];
        panelTitle: string;
        panelSubtitle: string;
        highlights: string[];
        image: string;
    };
    solutions: LearningSectionIntro & { items: LearningSolution[] };
    why: LearningSectionIntro & { items: LearningItem[] };
    audiences: LearningSectionIntro & { items: LearningItem[] };
    kits: LearningSectionIntro & {
        description: string;
        categories: string[];
        items: LearningItem[];
        image: string;
        cta: { label: string; href: string };
    };
    work: LearningSectionIntro & { items: LearningItem[] };
    insights: LearningSectionIntro & {
        featured: LearningItem[];
        topics: string[];
        moreTopics: string[];
        tools: { title: string; items: string[]; cta: { label: string; href: string } };
    };
    about: {
        badge: string;
        title: string;
        paragraphs: string[];
        mission: string;
        vision: string;
    };
    getStarted: LearningSectionIntro & { items: LearningItem[] };
    cta: {
        title: string;
        description: string;
        buttonLabel: string;
        buttonHref: string;
        secondaryLabel: string;
        secondaryHref: string;
    };
}

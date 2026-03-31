"use client";

import { useState } from "react";
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            fullName: String(formData.get("fullName") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            company: String(formData.get("company") ?? "").trim(),
            subject: String(formData.get("subject") ?? "").trim(),
            message: String(formData.get("message") ?? "").trim(),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = (await response.json().catch(() => null)) as { error?: string } | null;

            if (!response.ok) {
                setSubmitError(result?.error ?? "Unable to send your message right now. Please try again.");
                return;
            }

            form.reset();
            setIsSuccess(true);
        } catch {
            setSubmitError("Unable to send your message right now. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pb-20">
            <Hero
                headline={contactData.hero.headline}
                subheadline={contactData.hero.subheadline}
                badge="Connect With Us"
            />

            <AnimatedSection className="py-24 bg-navy-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-start">
                        {/* Contact Info */}
                        <div className="space-y-6 mb-12 lg:mb-0">
                            {contactData.info.map((item, i) => {
                                const Icon = icons[item.icon] || MdPhone;
                                return (
                                    <Card key={i} hover={false} className="p-8">
                                        <div className="flex gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                                                <div className="text-lg font-bold text-white mb-1">{item.value}</div>
                                                <div className="text-xs text-gray-500">{item.subValue}</div>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}

                            <div className="p-8 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 border border-white/10 mt-12">
                                <h3 className="text-xl font-bold text-white mb-4">{contactData.cta.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {contactData.cta.description}
                                </p>
                                <a
                                    href={contactData.cta.buttonHref}
                                    className="inline-flex items-center justify-center w-full py-4 bg-cyan-400 text-navy-900 font-bold rounded-xl hover:shadow-glow transition-all"
                                >
                                    {contactData.cta.buttonLabel}
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card hover={false} className="p-8 sm:p-12 border-white/10 bg-white/3">
                                <h3 className="text-3xl font-black text-white mb-8">{contactData.form.title}</h3>

                                {isSuccess ? (
                                    <div className="p-8 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-center">
                                        <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-8 h-8 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-4">Message Sent!</h4>
                                        <p className="text-cyan-100/70">{contactData.form.successMessage}</p>
                                        <button
                                            onClick={() => {
                                                setIsSuccess(false);
                                                setSubmitError(null);
                                            }}
                                            className="mt-8 px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all font-sm"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {contactData.form.fields.slice(0, 4).map((field) => (
                                                <div key={field.name}>
                                                    <label htmlFor={field.name} className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                                        {field.label} {field.required && <span className="text-cyan-400">*</span>}
                                                    </label>
                                                    <input
                                                        type={field.type}
                                                        id={field.name}
                                                        name={field.name}
                                                        required={field.required}
                                                        placeholder={field.placeholder}
                                                        className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        {contactData.form.fields.slice(4).map((field) => (
                                            <div key={field.name}>
                                                <label htmlFor={field.name} className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                                    {field.label} {field.required && <span className="text-cyan-400">*</span>}
                                                </label>
                                                <textarea
                                                    id={field.name}
                                                    name={field.name}
                                                    required={field.required}
                                                    placeholder={field.placeholder}
                                                    rows={5}
                                                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
                                                />
                                            </div>
                                        ))}

                                        {submitError && (
                                            <p className="text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                                                {submitError}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-cyan-500 to-accent-dark text-navy-900 font-bold rounded-xl hover:shadow-glow-md hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:scale-100"
                                        >
                                            {isSubmitting ? "Sending..." : contactData.form.submitLabel}
                                        </button>
                                    </form>
                                )}
                            </Card>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

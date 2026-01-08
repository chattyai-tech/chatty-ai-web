import {
    Brain,
    Sparkles,
    Network,
    ShieldCheck,
    Activity,
    Key,
    ArrowRight
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
    {
        Icon: Brain,
        name: "Enterprise NLP Intelligence",
        description: "Chatty AI decodes complex organizational nuance, delivering high-fidelity responses that synthesize your proprietary data silos.",
        href: "/platform",
        cta: "Explore NLP",
        background: (
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
                <div className="absolute right-0 top-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mr-20 -mt-20" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-nlp" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-nlp)" />
                </svg>
            </div>
        ),
        className: "lg:col-span-2",
    },
    {
        Icon: Sparkles,
        name: "Contextual Synthesis",
        description: "Go beyond keyword matching. Our engine understands intent and relationships within your company knowledge graph.",
        href: "/platform",
        cta: "Explore Contextual AI",
        background: (
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px' }} />
            </div>
        ),
        className: "lg:col-span-1",
    },
    {
        Icon: Network,
        name: "High-Velocity Integration",
        description: "Automate data ingestion from disparate databases and apps into a unified, queryable intelligence layer.",
        href: "/platform",
        cta: "View Integrations",
        background: (
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/15 via-transparent to-transparent" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mb-10" />
            </div>
        ),
        className: "lg:col-span-1",
    },
    {
        Icon: ShieldCheck,
        name: "Fortified Security",
        description: "SOC 2 Type II certified with multi-layered AES-256 encryption. Enterprise-grade isolation at every protocol level.",
        href: "/security",
        cta: "Security Docs",
        background: (
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>
        ),
        className: "lg:col-span-1",
    },
    {
        Icon: Activity,
        name: "Inference Velocity",
        description: "Experience sub-100ms response times even across multi-terabyte datasets with our high-performance edge compute.",
        href: "/platform",
        cta: "Check Speed",
        background: (
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-tl from-accent-violet/15 via-transparent to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03] dark:opacity-[0.05]" />
            </div>
        ),
        className: "lg:col-span-1",
    },
    {
        Icon: Key,
        name: "Sovereign Access Control",
        description: "Enforce granular RBAC and immutable audit logs to maintain absolute compliance across your organizational hierarchy.",
        href: "/security",
        cta: "Access Control",
        background: (
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px] -ml-20 -mb-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-transparent" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots-key" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots-key)" />
                </svg>
            </div>
        ),
        className: "lg:col-span-2",
    },
];

export function FeaturesBento() {
    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
                <div className="max-w-2xl">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] dark:text-white mb-6">
                        Advanced Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400">for the Modern Enterprise</span>
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] dark:text-zinc-200 font-medium">
                        Chatty AI delivers a foundation of secure, context-aware intelligence.
                        Architected for the rigors of high-growth organizational complexity.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-12 w-[1px] bg-border hidden md:block" />
                    <button className="px-6 py-3 rounded-2xl bg-primary/5 border border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group">
                        View Platform Features
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>

            <BentoGrid className="lg:grid-rows-2">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </section>
    );
}

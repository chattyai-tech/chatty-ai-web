"use client";
import React from "react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "ChattyAI has completely transformed how we access internal knowledge. It's like having a senior engineer available 24/7 to answer any question about our legacy codebase.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
        name: "Noa Levi",
        role: "VP of Engineering",
    },
    {
        text: "The zero-trust architecture was a dealbreaker for us. ChattyAI delivered. We can now search sensitive documents without them ever leaving our secure perimeter.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
        name: "Yosef Cohen",
        role: "CISO",
    },
    {
        text: "Implementing ChattyAI was seamless. It indexed our SharePoint and Confluence in hours, not weeks. The 'Chatty for Word' plugin is a favorite among our legal team.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
        name: "Maya Goldstein",
        role: "IT Director",
    },
    {
        text: "Finally, an AI that understands our domain-specific jargon. The accuracy of the answers is impressive, and the citations build real trust with users.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
        name: "David Shapiro",
        role: "Head of Product",
    },
    {
        text: "We replaced our internal search tool with ChattyAI. The difference is night and day. It doesn't just find documents; it answers questions.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
        name: "Tamar Ben-David",
        role: "Knowledge Manager",
    },
    {
        text: "The ability to run this on-premise gave us the confidence to roll out AI to our R&D department. Key intellectual property remains completely secure.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
        name: "Shira Mizrahi",
        role: "CTO",
    },
    {
        text: "Marketing workflows are 40% faster. We use the Agents to draft proposals based on past successful ones. It's an incredible productivity booster.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60",
        name: "Oren Friedman",
        role: "CMO",
    },
    {
        text: "The data connectors are robust. We connected it to Snowflake and Salesforce, and now our sales team can query customer data in plain English.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60",
        name: "Yael Rosenberg",
        role: "Sales Operations",
    },
    {
        text: "Support is top-notch. They helped us configure the air-gapped deployment for our defense contracts. Truly enterprise-grade service.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=60",
        name: "Eitan Berkowitz",
        role: "Security Architect",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
    return (
        <section className="relative py-20 sm:py-32 overflow-hidden bg-[var(--bg-primary)]">
            {/* Background Grid - ensuring it's visible if needed, though global body handles it */}

            <div className="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-[11px] font-bold uppercase tracking-wider mb-6">
                        Customer Stories
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
                        What our users say
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                        Leading enterprises trust ChattyAI to secure their data and empower their workforce.
                    </p>
                </motion.div>

                <div className="relative flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[800px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
                </div>
            </div>
        </section>
    );
};

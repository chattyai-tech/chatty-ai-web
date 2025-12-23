'use client'

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, animate } from 'framer-motion'
import {
    MessageSquare,
    FileText,
    Users,
    Cloud,
    Trello,
    Github,
    Zap,
    Video,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Compass,
    LucideIcon
} from 'lucide-react'

// --- Types ---
interface Tool {
    id: number;
    name: string;
    purpose: string;
    description: string;
    Icon: LucideIcon;
    color: string;
    gradient: string;
    stats: string;
}

// --- Data ---
const tools: Tool[] = [
    {
        id: 1,
        name: "Slack",
        purpose: "Communication",
        description: "Connect Chatty AI to your Slack channels for instant insights.",
        Icon: MessageSquare,
        color: "#E01E5A",
        gradient: "from-[#4A154B] via-[#E01E5A] to-[#ECB22E]",
        stats: "12k+ alerts"
    },
    {
        id: 2,
        name: "Notion",
        purpose: "Workspace",
        description: "Sync your Notion workspace to enable AI-powered answers.",
        Icon: FileText,
        color: "#787878",
        gradient: "from-zinc-600 via-zinc-800 to-black",
        stats: "50k+ pages"
    },
    {
        id: 3,
        name: "Teams",
        purpose: "Collaboration",
        description: "Deploy Chatty as your enterprise virtual assistant.",
        Icon: Users,
        color: "#6264A7",
        gradient: "from-[#464EB8] to-[#6264A7]",
        stats: "Enterprise"
    },
    {
        id: 4,
        name: "Salesforce",
        purpose: "CRM",
        description: "Query and update CRM records using natural language.",
        Icon: Cloud,
        color: "#00A1E0",
        gradient: "from-[#00A1E0] to-[#1589EE]",
        stats: "SOC2"
    },
    {
        id: 5,
        name: "Jira",
        purpose: "DevOps",
        description: "Automate ticket creation and gain velocity insights.",
        Icon: Trello,
        color: "#0052CC",
        gradient: "from-[#0052CC] to-[#2684FF]",
        stats: "CI/CD"
    },
    {
        id: 6,
        name: "GitHub",
        purpose: "Code",
        description: "Index repos for context-aware coding and audits.",
        Icon: Github,
        color: "#8B949E",
        gradient: "from-[#24292e] via-[#555] to-zinc-800",
        stats: "Audits"
    },
    {
        id: 7,
        name: "Linear",
        purpose: "Planning",
        description: "AI-powered task estimation and sprint analysis.",
        Icon: Zap,
        color: "#5E6AD2",
        gradient: "from-[#5E6AD2] to-[#7C3AED]",
        stats: "99.9%"
    },
    {
        id: 8,
        name: "Zoom",
        purpose: "Meetings",
        description: "Auto-summarize meetings and extract action items.",
        Icon: Video,
        color: "#2D8CFF",
        gradient: "from-[#2D8CFF] to-[#0E71EB]",
        stats: "Transcribe"
    },
];

const useResponsive = () => {
    const [screenSize, setScreenSize] = useState<'xs' | 'sm' | 'md' | 'lg'>('lg');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const checkSize = () => {
            const w = window.innerWidth;
            if (w < 640) setScreenSize('xs');  // sm breakpoint
            else if (w < 768) setScreenSize('sm');  // md breakpoint
            else if (w < 1024) setScreenSize('md');  // lg breakpoint
            else setScreenSize('lg');  // xl+
        };
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return screenSize;
};

export function IntegrationsOrbit() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const screenSize = useResponsive();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
    const smoothRotate = useSpring(rotate, { stiffness: 40, damping: 20 });

    const config = useMemo(() => {
        switch (screenSize) {
            case 'xs': return { radius: 0, iconSize: 0, cardW: 320, titleSize: 'text-2xl' };
            case 'sm': return { radius: 130, iconSize: 48, cardW: 260, titleSize: 'text-3xl' };
            case 'md': return { radius: 190, iconSize: 56, cardW: 280, titleSize: 'text-4xl' };
            default: return { radius: 280, iconSize: 68, cardW: 320, titleSize: 'text-5xl' };
        }
    }, [screenSize]);

    const isMobile = screenSize === 'xs';
    const containerDim = isMobile ? 300 : config.radius * 2 + 120;

    const [rotation, setRotation] = useState(0);
    const offsetDistance = useMotionValue("0%");
    const [offsetDistanceValue, setOffsetDistanceValue] = useState("0%");

    useEffect(() => {
        let frame: number;
        const animateRotation = () => {
            if (!isHovering) {
                setRotation(prev => (prev + 0.12) % 360);
            }
            frame = requestAnimationFrame(animateRotation);
        };
        frame = requestAnimationFrame(animateRotation);
        return () => cancelAnimationFrame(frame);
    }, [isHovering]);

    // Animate offset distance
    useEffect(() => {
        offsetDistance.set("0%");
        const controls = animate(offsetDistance, ["0%", "100%"], {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        });
        
        // Subscribe to MotionValue changes
        const unsubscribe = offsetDistance.on("change", (latest) => {
            setOffsetDistanceValue(latest);
        });
        
        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [offsetDistance, activeIndex]);

    const next = useCallback(() => setActiveIndex((i) => (i + 1) % tools.length), []);
    const prev = useCallback(() => setActiveIndex((i) => (i - 1 + tools.length) % tools.length), []);

    useEffect(() => {
        if (isHovering) return;
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [isHovering, next]);

    // Calculate icon positions for the connection path
    const getIconPosition = (index: number) => {
        const baseAngle = index * (360 / tools.length);
        const totalAngle = baseAngle + rotation;
        const angleRad = (totalAngle - 90) * (Math.PI / 180);
        return {
            x: Math.cos(angleRad) * config.radius,
            y: Math.sin(angleRad) * config.radius,
        };
    };

    const activeIconPos = getIconPosition(activeIndex);
    const halfDim = containerDim / 2;

    // SVG Path: From INNER edge of active icon (facing center) to card
    // Calculate the direction from icon to center, then start path from inner edge
    const iconDist = Math.sqrt(activeIconPos.x ** 2 + activeIconPos.y ** 2);
    const dirX = -activeIconPos.x / iconDist; // Direction toward center
    const dirY = -activeIconPos.y / iconDist;
    const innerEdgeOffset = config.iconSize / 2 + 4; // Start just outside the inner edge
    const pathStartX = activeIconPos.x + dirX * innerEdgeOffset;
    const pathStartY = activeIconPos.y + dirY * innerEdgeOffset;

    // Curved path from icon inner edge to card center
    const pathD = `M ${pathStartX} ${pathStartY} Q ${pathStartX * 0.4} ${pathStartY * 0.4}, 0 0`;

    return (
        <section
            ref={containerRef}
            className="py-16 bg-[var(--bg-primary)] overflow-hidden relative border-y border-white/[0.03] dark:border-y-0"
        >
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03)_0%,transparent_70%)]" />
            </div>

            <div className={`max-w-7xl mx-auto px-4 flex flex-col items-center relative z-10`}>

                {/* Header */}
                <div className={`text-center max-w-4xl ${isMobile ? 'mb-8' : 'mb-14'}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/[0.08] border border-indigo-500/15 text-indigo-500 text-[8px] font-black uppercase tracking-[0.2em] mb-4"
                    >
                        <Compass className="w-3 h-3" />
                        Intelligence Fabric
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`font-black text-[var(--text-primary)] mb-4 tracking-tight leading-[1.1] ${config.titleSize}`}
                    >
                        Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">Intelligence</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm text-[var(--text-secondary)] opacity-50 max-w-md mx-auto"
                    >
                        Connecting the world's most powerful platforms.
                    </motion.p>
                </div>

                {/* Orbit System */}
                <div
                    className={`relative flex items-center justify-center`}
                    style={{ width: containerDim, height: containerDim }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Connection SVG - From Active Icon Bottom to Card */}
                    {!isMobile && (
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-30"
                            viewBox={`${-halfDim} ${-halfDim} ${containerDim} ${containerDim}`}
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            {/* Aura/Glow Path */}
                            <motion.path
                                key={`aura-${activeIndex}`}
                                d={pathD}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.4 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                stroke={tools[activeIndex].color}
                                strokeWidth="6"
                                strokeLinecap="round"
                                fill="none"
                                style={{ filter: 'blur(6px)' }}
                            />

                            {/* Core Path - Visible Line */}
                            <motion.path
                                key={`core-${activeIndex}`}
                                d={pathD}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                stroke={tools[activeIndex].color}
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                            />

                            {/* Flowing Particle */}
                            <motion.circle
                                key={`particle-${activeIndex}`}
                                r="4"
                                fill="white"
                                style={{
                                    offsetPath: `path('${pathD}')`,
                                    offsetDistance: offsetDistanceValue,
                                    filter: `drop-shadow(0 0 8px ${tools[activeIndex].color})`
                                } as React.CSSProperties}
                            />

                            {/* Impact Glow at Card Entry Point */}
                            <motion.circle
                                cx="0"
                                cy="0"
                                r="8"
                                fill={tools[activeIndex].color}
                                animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                style={{ filter: 'blur(10px)' }}
                            />

                        </svg>
                    )}

                    {/* Concentric Guide Rings */}
                    {!isMobile && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {[1, 1.15, 1.3].map((scale, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        width: config.radius * 2,
                                        height: config.radius * 2,
                                        scale,
                                        rotate: i % 2 === 0 ? rotation * 0.3 : -rotation * 0.3
                                    }}
                                    className="border border-indigo-500/[0.05] rounded-full absolute"
                                />
                            ))}
                        </div>
                    )}

                    {/* Active Card - Small & Centered */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tools[activeIndex].id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            className="z-40 bg-[var(--bg-card)]/90 backdrop-blur-2xl shadow-2xl rounded-2xl p-4 text-center border border-white/[0.1] relative overflow-hidden group"
                            style={{ width: config.cardW }}
                        >
                            <div className="relative z-10 flex flex-col items-center">
                                <motion.div
                                    className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${tools[activeIndex].gradient}`}
                                >
                                    {React.createElement(tools[activeIndex].Icon, { size: 20, strokeWidth: 2 })}
                                </motion.div>

                                <h3 className="text-base font-black text-[var(--text-primary)] mb-0.5">
                                    {tools[activeIndex].name}
                                </h3>

                                <div className="mb-2 uppercase text-[7px] font-black tracking-widest text-indigo-500/70">
                                    {tools[activeIndex].purpose}
                                </div>

                                <p className="text-[10px] leading-relaxed mb-4 font-medium opacity-40 text-[var(--text-secondary)] line-clamp-2">
                                    {tools[activeIndex].description}
                                </p>

                                <div className="flex items-center gap-1.5 w-full">
                                    <button
                                        onClick={prev}
                                        className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-primary)] hover:border-indigo-500/30 transition-all"
                                    >
                                        <ChevronLeft size={12} className="text-[var(--text-secondary)]" />
                                    </button>

                                    <button className="flex-1 px-2 py-2 rounded-lg bg-indigo-600 text-white text-[8px] font-black transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/20 uppercase tracking-wider">
                                        Link
                                        <ArrowRight size={10} />
                                    </button>

                                    <button
                                        onClick={next}
                                        className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-primary)] hover:border-indigo-500/30 transition-all"
                                    >
                                        <ChevronRight size={12} className="text-[var(--text-secondary)]" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Orbiting Icons */}
                    {!isMobile && (
                        <div
                            style={{ transform: `rotate(${rotation}deg)` }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            {tools.map((tool, i) => {
                                const baseRotation = i * (360 / tools.length);
                                const isActive = i === activeIndex;

                                return (
                                    <div
                                        key={tool.id}
                                        className="absolute left-1/2 top-1/2 pointer-events-auto"
                                        style={{
                                            transform: `rotate(${baseRotation}deg) translateY(-${config.radius}px)`,
                                            width: config.iconSize,
                                            height: config.iconSize,
                                            marginLeft: -config.iconSize / 2,
                                            marginTop: -config.iconSize / 2,
                                        }}
                                    >
                                        <div
                                            style={{ transform: `rotate(-${baseRotation + rotation}deg)` }}
                                            className="w-full h-full relative"
                                        >
                                            <motion.div
                                                onClick={() => setActiveIndex(i)}
                                                whileHover={{ scale: 1.1 }}
                                                className={`w-full h-full rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 shadow-xl overflow-hidden ${isActive
                                                    ? `bg-gradient-to-br ${tool.gradient} text-white ring-4 ring-white/20`
                                                    : "bg-[var(--bg-card)]/50 backdrop-blur-xl border border-white/[0.1] text-[var(--text-muted)] hover:border-indigo-500/40"
                                                    }`}
                                            >

                                                {React.createElement(tool.Icon, { size: config.iconSize * 0.45, strokeWidth: isActive ? 2.5 : 1.5 })}
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Navigation Dots */}
                <div className={`flex justify-center gap-1.5 ${isMobile ? 'mt-6' : 'mt-10'}`}>
                    {tools.map((tool, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-5" : "w-1.5"}`}
                            style={{ backgroundColor: index === activeIndex ? tool.color : 'rgba(99,102,241,0.15)' }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

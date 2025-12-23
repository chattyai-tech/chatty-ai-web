"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
    text,
    duration,
    className,
}: {
    text: string;
    duration?: number;
    automatic?: boolean;
    className?: string;
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMask = () => {
            if (svgRef.current) {
                const svgRect = svgRef.current.getBoundingClientRect();
                const cxPercentage = ((springX.get() - svgRect.left) / svgRect.width) * 100;
                const cyPercentage = ((springY.get() - svgRect.top) / svgRect.height) * 100;
                setMaskPosition({
                    cx: `${cxPercentage}%`,
                    cy: `${cyPercentage}%`,
                });
            }
        };

        const unsubscribeX = springX.on("change", updateMask);
        const unsubscribeY = springY.on("change", updateMask);

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [springX, springY]);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }}
            className={cn("select-none uppercase cursor-pointer", className)}
        >
            <defs>
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                    cx="50%"
                    cy="50%"
                    r="25%"
                >
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor="var(--violet-400)" />
                            <stop offset="25%" stopColor="var(--purple-400)" />
                            <stop offset="50%" stopColor="var(--indigo-400)" />
                            <stop offset="75%" stopColor="var(--violet-500)" />
                            <stop offset="100%" stopColor="var(--brand-violet)" />
                        </>
                    )}
                </linearGradient>

                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="20%"
                    initial={{ cx: "50%", cy: "50%" }}
                    animate={maskPosition}
                    transition={{ duration: duration ?? 0.2, ease: "easeOut" }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>
                <mask id="textMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#revealMask)"
                    />
                </mask>
            </defs>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.3"
                className="fill-transparent stroke-neutral-300 font-[helvetica] text-7xl font-bold dark:stroke-neutral-700"
                style={{ opacity: hovered ? 0.9 : 0.6 }}
            >
                {text}
            </text>
            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.3"
                className="fill-transparent stroke-[var(--brand-purple)] font-[helvetica] text-7xl font-bold 
        dark:stroke-[var(--brand-purple)]"
                style={{ opacity: hovered ? 1 : 0.4 }}
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                }}
            >
                {text}
            </motion.text>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="0.3"
                mask="url(#textMask)"
                className="fill-transparent font-[helvetica] text-7xl font-bold"
            >
                {text}
            </text>
        </svg>
    );
};


export const FooterBackgroundGradient = () => {
    return (
        <div
            className="absolute inset-0 z-0"
            style={{
                background:
                    "radial-gradient(125% 125% at 50% 10%, var(--bg-primary) 50%, var(--accent-violet-low) 100%)",
            }}
        />
    );
};

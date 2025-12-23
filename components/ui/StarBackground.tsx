"use client";

import React, { useRef, useEffect, useState } from "react";

interface StarBackgroundProps {
    starCount?: number;
    speed?: number; // Rotational speed
    className?: string; // Additional CSS classes
}

export const StarBackground: React.FC<StarBackgroundProps> = ({
    starCount = 500,
    speed = 0.05,
    className = "",
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = canvas.parentElement.clientWidth * dpr;
                canvas.height = canvas.parentElement.clientHeight * dpr;
                ctx.scale(dpr, dpr);
                canvas.style.width = `${canvas.parentElement.clientWidth}px`;
                canvas.style.height = `${canvas.parentElement.clientHeight}px`;
            }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // 3D Point Definition
        interface Point3D {
            x: number;
            y: number;
            z: number;
            color: string;
            baseSize: number;
            opacity: number;
            pulseSpeed: number;
        }

        const particles: Point3D[] = [];
        const colors = [
            "#A855F7", // Purple-500
            "#8B5CF6", // Violet-500
            "#6366F1", // Indigo-500
        ];

        // Create a "Torus" / Nested Ring Shape to match the "Jarvis" feel
        // We want a cloud that feels structural.
        // Torus equation:
        // x = (R + r * cos(theta)) * cos(phi)
        // y = (R + r * cos(theta)) * sin(phi)
        // z = r * sin(theta)

        const R = 300; // Major radius
        const r = 120; // Minor radius (tube thickness)

        // Helper to add particles
        const addParticle = () => {
            // Random spherical/toroidal distribution
            const u = Math.random() * Math.PI * 2;
            const v = Math.random() * Math.PI * 2;

            // Torus distribution with some randomness for "cloud" feel
            const theta = u;
            const phi = v;

            // Spread points more naturally
            const randomR = R + (Math.random() - 0.5) * 100;
            const randomMist = (Math.random() - 0.5) * 60;

            const x = (randomR + (r + randomMist) * Math.cos(theta)) * Math.cos(phi);
            const y = (randomR + (r + randomMist) * Math.cos(theta)) * Math.sin(phi);
            const z = (r + randomMist) * Math.sin(theta);

            return {
                x,
                y,
                z,
                color: colors[Math.floor(Math.random() * colors.length)],
                baseSize: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.6 + 0.2,
                pulseSpeed: (Math.random() * 0.01) + 0.005
            };
        };

        for (let i = 0; i < starCount; i++) {
            particles.push(addParticle());
        }

        let angleX = 0;
        let angleY = 0;

        const render = () => {
            if (!canvas.parentElement) return;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.parentElement.clientWidth, canvas.parentElement.clientHeight);

            const centerX = canvas.parentElement.clientWidth / 2;
            const centerY = canvas.parentElement.clientHeight / 2;

            // Rotation speeds
            angleY += speed * 0.005;
            angleX += speed * 0.002;

            particles.forEach(p => {
                // Rotate around Y
                let x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
                let z1 = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);

                // Rotate around X
                let y1 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);
                let z2 = z1 * Math.cos(angleX) + p.y * Math.sin(angleX);

                // Simple 3D projection
                const fov = 400;
                const scale = fov / (fov + z2);
                const x2D = x1 * scale + centerX;
                const y2D = y1 * scale + centerY;

                // Don't draw if behind camera too much or out of bounds (optimization)
                if (scale < 0) return;

                // Pulse opacity
                p.opacity += p.pulseSpeed;
                if (p.opacity > 0.8 || p.opacity < 0.2) p.pulseSpeed = -p.pulseSpeed;

                // Draw
                ctx.beginPath();
                ctx.arc(x2D, y2D, p.baseSize * scale, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity; // Use globalAlpha for simple opacity handling with hex colors
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [starCount, speed]); // Re-init on prop change

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-0 pointer-events-none ${className}`}
        />
    );
};

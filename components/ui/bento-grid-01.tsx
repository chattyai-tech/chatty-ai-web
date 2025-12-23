"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Unlock, Globe } from "lucide-react"

export function TypeTester({ isHovered = false }: { isHovered?: boolean }) {
    return (
        <div className="flex items-center justify-center h-full min-h-[100px] cursor-pointer">
            <motion.span
                className="font-serif text-6xl md:text-8xl text-primary font-medium"
                animate={{
                    scale: isHovered ? 1.4 : 1,
                    rotate: isHovered ? [0, -2, 2, 0] : 0
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    rotate: { repeat: isHovered ? Infinity : 0, duration: 2 }
                }}
            >
                Aa
            </motion.span>
        </div>
    )
}

export function LayoutAnimation({ isHovered = false }: { isHovered?: boolean }) {
    const [deploymentMode, setDeploymentMode] = useState(0)

    useEffect(() => {
        if (isHovered) {
            const interval = setInterval(() => {
                setDeploymentMode((prev) => (prev + 1) % 4)
            }, 2500) // Slower for better comprehension
            return () => clearInterval(interval)
        } else {
            setDeploymentMode(0)
        }
    }, [isHovered])

    const deploymentModes = [
        { 
            name: "On-Prem", 
            layout: "grid-cols-1", 
            count: 1, 
            isolated: true, 
            description: "Complete isolation, air-gapped",
            showBoundary: true, // Show security boundary
            showDataFlow: false
        },
        { 
            name: "Private", 
            layout: "grid-cols-2", 
            count: 2, 
            isolated: true, 
            description: "Private cloud, VPC isolated",
            showBoundary: true, // Show VPC boundary
            showDataFlow: true, // Show internal communication
            internalConnections: true
        },
        { 
            name: "Hybrid", 
            layout: "grid-cols-3", 
            count: 3, 
            isolated: false, 
            description: "Hybrid cloud with secure sync",
            showBoundary: false,
            showDataFlow: true, // Show data sync between nodes
            bidirectionalFlow: true
        },
        { 
            name: "Edge", 
            layout: "grid-cols-4", 
            count: 4, 
            isolated: true, 
            description: "Edge computing, distributed",
            showBoundary: false,
            showDataFlow: true, // Show distributed edge nodes
            distributed: true
        },
    ]

    const current = deploymentModes[deploymentMode]

    return (
        <div className="h-full flex flex-col items-center justify-center min-h-[220px] gap-4 relative">
            {/* Deployment Mode Label */}
            <motion.div
                key={current.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-2 z-10"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{current.name}</span>
                </div>
                {isHovered && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[10px] text-zinc-400 mt-1"
                    >
                        {current.description}
                    </motion.p>
                )}
            </motion.div>
            
            {/* Security Boundary - Shows isolation for On-Prem and Private */}
            {current.showBoundary && isHovered && (
                <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-primary/30 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        scale: 1
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    style={{
                        top: '-8px',
                        bottom: '-8px',
                        left: '-8px',
                        right: '-8px'
                    }}
                />
            )}
            
            {/* Grid Container - Smooth layout transitions */}
            <motion.div
                className={`grid ${current.layout} gap-4 w-full max-w-[280px] relative z-10`}
                layout
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {Array.from({ length: current.count }).map((_, i) => (
                    <motion.div
                        key={`${current.name}-${i}`}
                        className="relative"
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ 
                            duration: 0.4,
                            delay: i * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {/* Main Deployment Node */}
                        <motion.div
                            className={`bg-primary/20 rounded-xl h-20 w-full border-2 ${
                                current.isolated 
                                    ? 'border-primary/60' 
                                    : 'border-primary/50'
                            }`}
                            animate={isHovered ? {
                                borderColor: current.isolated 
                                    ? ['rgba(139,92,246,0.6)', 'rgba(139,92,246,0.9)', 'rgba(139,92,246,0.6)']
                                    : 'rgba(139,92,246,0.7)',
                                boxShadow: current.isolated
                                    ? ['0 0 0 0 rgba(139,92,246,0)', '0 0 20px 4px rgba(139,92,246,0.4)', '0 0 0 0 rgba(139,92,246,0)']
                                    : '0 0 15px 3px rgba(139,92,246,0.3)'
                            } : {
                                borderColor: current.isolated ? 'rgba(139,92,246,0.6)' : 'rgba(139,92,246,0.5)',
                                boxShadow: '0 0 0 0 rgba(139,92,246,0)'
                            }}
                            transition={{ 
                                duration: current.isolated ? 2 : 0.3,
                                repeat: isHovered && current.isolated ? Infinity : 0,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            <div className="h-full flex items-center justify-center relative overflow-hidden">
                                {/* Active Status Indicator */}
                                <motion.div
                                    className="w-3 h-3 rounded-full bg-primary"
                                    animate={isHovered ? {
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.8, 1]
                                    } : {
                                        scale: 1,
                                        opacity: 1
                                    }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: isHovered ? Infinity : 0,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                />
                                
                                {/* Data Flow Indicator - For Hybrid and Edge */}
                                {current.showDataFlow && isHovered && (
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {/* Data flow particles */}
                                        {current.bidirectionalFlow ? (
                                            // Bidirectional flow for Hybrid
                                            <>
                                                <motion.div
                                                    className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                                                    style={{ left: '10%', top: '50%' }}
                                                    animate={{
                                                        x: ['0%', '80%', '0%'],
                                                        opacity: [0, 1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: i * 0.3,
                                                        ease: [0.4, 0, 0.2, 1]
                                                    }}
                                                />
                                                <motion.div
                                                    className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                                                    style={{ right: '10%', top: '50%' }}
                                                    animate={{
                                                        x: ['0%', '-80%', '0%'],
                                                        opacity: [0, 1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: i * 0.3 + 0.75,
                                                        ease: [0.4, 0, 0.2, 1]
                                                    }}
                                                />
                                            </>
                                        ) : current.distributed ? (
                                            // Distributed flow for Edge
                                            <motion.div
                                                className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                                                style={{ left: '50%', top: '50%' }}
                                                animate={{
                                                    scale: [0, 1.5, 0],
                                                    opacity: [0, 1, 0],
                                                    x: ['-50%', '-50%'],
                                                    y: ['-50%', '-50%']
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.4,
                                                    ease: [0.4, 0, 0.2, 1]
                                                }}
                                            />
                                        ) : null}
                                    </motion.div>
                                )}
                                
                                {/* Isolation Indicator - For isolated deployments */}
                                {current.isolated && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"
                                        animate={isHovered ? {
                                            opacity: [0.2, 0.5, 0.2]
                                        } : {
                                            opacity: 0.2
                                        }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: isHovered ? Infinity : 0,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    />
                                )}
                            </div>
                        </motion.div>
                        
                        {/* Connection Lines - Shows connectivity */}
                        {current.showDataFlow && i < current.count - 1 && (
                            <motion.div
                                className="absolute top-1/2 -right-2 w-6 h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full pointer-events-none z-0"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={isHovered ? { 
                                    scaleX: 1, 
                                    opacity: 1
                                } : { 
                                    scaleX: 0, 
                                    opacity: 0 
                                }}
                                transition={{ 
                                    delay: i * 0.15 + 0.2,
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {/* Data flow along connection */}
                                {isHovered && (
                                    <motion.div
                                        className="absolute w-2 h-2 rounded-full bg-primary"
                                        style={{ left: '-4px', top: '50%', transform: 'translateY(-50%)' }}
                                        animate={{
                                            x: ['0px', '24px', '0px'],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    />
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export function SpeedIndicator({ isHovered = false }: { isHovered?: boolean }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isHovered) {
            setLoading(true)
            const timeout = setTimeout(() => setLoading(false), 600)
            return () => clearTimeout(timeout)
        } else {
            setLoading(false)
        }
    }, [isHovered])

    return (
        <div className="flex flex-col items-center justify-center h-full gap-4 min-h-[100px]">
            <div className="h-10 flex items-center justify-center overflow-hidden relative w-full">
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            className="h-8 w-24 bg-primary/10 rounded"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            exit={{ opacity: 0, y: -20, position: 'absolute' }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                        />
                    ) : (
                        <motion.span
                            key="text"
                            initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            className="text-3xl md:text-4xl font-sans font-medium text-primary"
                        >
                            100ms
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            <span className="text-sm text-[var(--text-muted)]">Vector Search</span>
            <div className="w-full max-w-[120px] h-1.5 bg-primary/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: loading ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
                />
            </div>
        </div>
    )
}

export function SecurityBadge() {
    const [shields, setShields] = useState([
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: true }
    ])

    const toggleShield = (index: number) => {
        setShields(prev => prev.map((s, i) => i === index ? { ...s, active: !s.active } : s))
    }

    return (
        <div className="flex items-center justify-center h-full gap-2 min-h-[100px]">
            {shields.map((shield, idx) => (
                <motion.button
                    key={`shield-${shield.id}`}
                    type="button"
                    onClick={() => toggleShield(idx)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            toggleShield(idx)
                        }
                    }}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all ${shield.active ? 'bg-primary/20 border-primary/40' : 'bg-primary/5 border-transparent opacity-50'
                        }`}
                    whileHover={{ scale: 1.1, backgroundColor: shield.active ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ scale: shield.active ? 1.05 : 1 }}
                >
                    {shield.active ? (
                        <Lock className="w-5 h-5 text-primary" />
                    ) : (
                        <Unlock className="w-5 h-5 text-[var(--text-muted)]" />
                    )}
                </motion.button>
            ))}
        </div>
    )
}

export function GlobalNetwork() {
    const [pings, setPings] = useState<number[]>([])

    const triggerPing = () => {
        setPings(prev => [...prev.slice(-3), Date.now()])
    }

    return (
        <button
            type="button"
            className="flex items-center justify-center h-full relative min-h-[140px] group cursor-pointer w-full" 
            onClick={triggerPing}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="z-10"
            >
                <Globe className="w-16 h-16 text-primary group-hover:text-accent-violet transition-colors" />
            </motion.div>

            {/* Background Pulse */}
            <motion.div
                className="absolute w-16 h-16 bg-primary/10 rounded-full"
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <AnimatePresence>
                {pings.map((id) => (
                    <motion.div
                        key={id}
                        className="absolute w-16 h-16 border-2 border-primary/50 rounded-full"
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                ))}
            </AnimatePresence>

            <div className="absolute -bottom-2 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                Click to Ping
            </div>
        </button>
    )
}

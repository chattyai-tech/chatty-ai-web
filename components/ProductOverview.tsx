'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion'
import {
  Lock, Shield, Users, Globe, Zap, CheckCircle2, X, Fingerprint, Key, Server
} from 'lucide-react'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  isInView: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const BentoCard = ({ children, className = "", delay = 0, isInView, onMouseEnter, onMouseLeave }: BentoCardProps) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden rounded-2xl border border-[var(--border-primary)] dark:border-zinc-800 bg-[var(--bg-surface)] dark:bg-[#33214d] p-5 shadow-sm transition-all hover:shadow-xl hover:border-purple-500/30 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              circle 450px at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  )
}

// Real-Time Velocity Interactive Component
function VelocityMeter({ isHovered }: { isHovered: boolean }) {
  const [latency, setLatency] = useState(100)
  
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setLatency(Math.floor(Math.random() * 30) + 45) // 45-75ms
      }, 200)
      return () => clearInterval(interval)
    } else {
      setLatency(100)
    }
  }, [isHovered])

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-purple-500/20 flex items-center justify-center"
          animate={isHovered ? { 
            borderColor: ['rgba(139,92,246,0.2)', 'rgba(139,92,246,0.6)', 'rgba(139,92,246,0.2)']
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.span 
            className="text-2xl font-bold text-primary"
            key={latency}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15 }}
          >
            {latency}
          </motion.span>
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500"
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="text-center">
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">ms latency</span>
      </div>
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-6 rounded-full bg-purple-500/20"
            animate={isHovered ? {
              height: [24, Math.random() * 20 + 16, 24],
              backgroundColor: ['rgba(139,92,246,0.2)', 'rgba(139,92,246,0.6)', 'rgba(139,92,246,0.2)']
            } : {}}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  )
}

// Global Network Interactive Component
function NetworkGlobe({ isHovered }: { isHovered: boolean }) {
  const [pings, setPings] = useState<{ id: number; x: number; y: number }[]>([])
  
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setPings(prev => [...prev.slice(-4), { 
          id: Date.now(), 
          x: Math.random() * 60 - 30, 
          y: Math.random() * 60 - 30 
        }])
      }, 600)
      return () => clearInterval(interval)
    } else {
      setPings([])
    }
  }, [isHovered])

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="relative"
        animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Globe className="w-16 h-16 text-purple-500/60" />
      </motion.div>
      
      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-500"
          animate={isHovered ? {
            rotate: 360,
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
          style={{
            transformOrigin: '40px 40px',
            left: 'calc(50% - 4px)',
            top: 'calc(50% - 44px)',
          }}
        />
      ))}
      
      {/* Connection pings */}
      <AnimatePresence>
        {pings.map((ping) => (
          <motion.div
            key={ping.id}
            className="absolute w-3 h-3 rounded-full bg-green-400"
            initial={{ scale: 0, opacity: 1, x: ping.x, y: ping.y }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Security Shields Interactive Component
function SecurityLocks({ isHovered }: { isHovered: boolean }) {
  const [locks, setLocks] = useState([true, true, true])
  
  useEffect(() => {
    if (isHovered) {
      // Animate locks sequentially
      const sequence = async () => {
        for (let i = 0; i < 3; i++) {
          await new Promise(r => setTimeout(r, 300))
          setLocks(prev => prev.map((v, idx) => idx === i ? true : v))
        }
      }
      setLocks([false, false, false])
      sequence()
    }
  }, [isHovered])

  return (
    <div className="flex items-center justify-center gap-3">
      {locks.map((locked, i) => (
        <motion.div
          key={i}
          className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-colors ${
            locked 
              ? 'bg-green-500/10 border-green-500/40' 
              : 'bg-red-500/10 border-red-500/40'
          }`}
          animate={locked ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {locked ? (
            <Lock className="w-5 h-5 text-green-500" />
          ) : (
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Lock className="w-5 h-5 text-red-400 opacity-50" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

// Zero Trust Verification Interactive Component
function ZeroTrustVerification({ isHovered }: { isHovered: boolean }) {
  const [verificationStep, setVerificationStep] = useState(0)
  const steps = ['Identity', 'Device', 'Context', 'Access']
  
  useEffect(() => {
    if (isHovered) {
      setVerificationStep(0)
      const interval = setInterval(() => {
        setVerificationStep(prev => prev < steps.length ? prev + 1 : prev)
      }, 400)
      return () => clearInterval(interval)
    } else {
      setVerificationStep(0)
    }
  }, [isHovered])

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                i < verificationStep 
                  ? 'bg-green-500/20 text-green-500 border border-green-500/40' 
                  : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
              }`}
              animate={i < verificationStep ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {i < verificationStep ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <span>{i + 1}</span>
              )}
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div 
                className="w-4 h-0.5 mx-1"
                style={{ 
                  backgroundColor: i < verificationStep - 1 
                    ? 'rgba(34, 197, 94, 0.5)' 
                    : 'rgba(113, 113, 122, 0.2)' 
                }}
              />
            )}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {verificationStep > 0 && verificationStep <= steps.length && (
          <motion.span
            key={verificationStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs text-green-500 font-medium"
          >
            {steps[verificationStep - 1]} verified ✓
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

// Identity & Access Interactive Component
function IdentityAccess({ isHovered }: { isHovered: boolean }) {
  const [activeProvider, setActiveProvider] = useState<number | null>(null)
  const providers = [
    { name: 'Azure AD', icon: Key },
    { name: 'Okta', icon: Shield },
    { name: 'G-Suite', icon: Users },
  ]
  
  useEffect(() => {
    if (isHovered) {
      let idx = 0
      const interval = setInterval(() => {
        setActiveProvider(idx % providers.length)
        idx++
      }, 800)
      return () => clearInterval(interval)
    } else {
      setActiveProvider(null)
    }
  }, [isHovered])

  return (
    <div className="flex items-center justify-center gap-4">
      {providers.map((provider, i) => (
        <motion.div
          key={provider.name}
          className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-colors ${
            activeProvider === i ? 'bg-purple-500/20' : 'bg-transparent'
          }`}
          animate={activeProvider === i ? { scale: 1.1, y: -4 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
            activeProvider === i 
              ? 'bg-purple-500/20 border-purple-500/40' 
              : 'bg-zinc-500/10 border-zinc-500/20'
          }`}>
            <provider.icon className={`w-5 h-5 ${activeProvider === i ? 'text-purple-400' : 'text-zinc-400'}`} />
          </div>
          <span className={`text-[10px] font-medium ${activeProvider === i ? 'text-purple-400' : 'text-zinc-500'}`}>
            {provider.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

// Encryption Interactive Component
function EncryptionVisual({ isHovered }: { isHovered: boolean }) {
  const [encrypted, setEncrypted] = useState(false)
  
  useEffect(() => {
    if (isHovered) {
      const timeout = setTimeout(() => setEncrypted(true), 300)
      return () => clearTimeout(timeout)
    } else {
      setEncrypted(false)
    }
  }, [isHovered])

  const plainText = "DATA"
  const encryptedText = "█▓▒░"

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-4">
        <motion.div 
          className="px-4 py-2 rounded-lg bg-zinc-500/10 border border-zinc-500/20 font-mono text-sm"
          animate={encrypted ? { opacity: 0.5, scale: 0.95 } : { opacity: 1, scale: 1 }}
        >
          <span className={encrypted ? 'text-zinc-500' : 'text-[var(--text-primary)]'}>{plainText}</span>
        </motion.div>
        
        <motion.div
          animate={encrypted ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Zap className={`w-5 h-5 ${encrypted ? 'text-purple-500' : 'text-zinc-400'}`} />
        </motion.div>
        
        <motion.div 
          className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 font-mono text-sm"
          animate={encrypted ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
        >
          <span className={encrypted ? 'text-green-400' : 'text-zinc-500'}>{encryptedText}</span>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-xs font-medium"
        animate={{ color: encrypted ? 'rgb(34, 197, 94)' : 'rgb(113, 113, 122)' }}
      >
        {encrypted ? 'AES-256 Encrypted' : 'Plain Text'}
      </motion.div>
    </div>
  )
}

export const ProductOverview: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })
  const [mounted, setMounted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cards = [
    {
      id: 'velocity',
      title: 'Real-Time Velocity',
      description: 'Sub-100ms vector search and inference engine for instant responses.',
      icon: Zap,
      component: VelocityMeter,
    },
    {
      id: 'connectivity',
      title: 'Global Connectivity',
      description: 'Secure VPN integration with global edge locations for zero latency.',
      icon: Globe,
      component: NetworkGlobe,
    },
    {
      id: 'security',
      title: 'Security First',
      description: 'Enterprise-grade mTLS & JWT authentication built-in.',
      icon: Lock,
      component: SecurityLocks,
    },
    {
      id: 'zerotrust',
      title: 'Zero Trust',
      description: 'Every request individually verified with continuous authentication.',
      icon: Shield,
      component: ZeroTrustVerification,
    },
    {
      id: 'identity',
      title: 'Identity & Access',
      description: 'SSO support for Azure AD, G-Suite, and Okta with granular RBAC.',
      icon: Users,
      component: IdentityAccess,
    },
    {
      id: 'encryption',
      title: 'Data Encryption',
      description: 'AES-256 encryption at rest and TLS 1.3 in transit.',
      icon: Server,
      component: EncryptionVisual,
    },
  ]

  return (
    <section
      className={`py-12 sm:py-16 md:py-20 relative overflow-hidden bg-transparent transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Shield className="w-4 h-4" />
            Enterprise-Grade Platform
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] mb-5 tracking-tight"
          >
            Technical & Security{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-violet-400">
              Specifications
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Built for the most demanding enterprise environments. Interactive, secure, and ready for automation at scale.
          </motion.p>
        </div>

        {/* Uniform Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((card, index) => {
            const IconComponent = card.icon
            const InteractiveComponent = card.component
            const isHovered = hoveredCard === card.id
            
            return (
              <BentoCard
                key={card.id}
                isInView={isInView}
                delay={0.1 + index * 0.08}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="h-[260px]"
              >
                {/* Interactive Visual */}
                <div className="flex-1 flex items-center justify-center min-h-[120px]">
                  <InteractiveComponent isHovered={isHovered} />
                </div>
                
                {/* Card Content */}
                <div className="mt-auto pt-4 border-t border-[var(--border-primary)] dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] dark:text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </BentoCard>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {[
            { label: 'SOC 2 Type II', value: 'Certified' },
            { label: 'Uptime SLA', value: '99.99%' },
            { label: 'ISO 27001', value: 'Compliant' },
            { label: 'GDPR', value: 'Ready' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { FC, useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Brain, Sparkles, Globe, Shield, Zap, Lock } from 'lucide-react'

const FEATURES = [
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Chatty AI understands context and nuance, delivering human-like responses that truly comprehend your enterprise data.",
  },
  {
    icon: Sparkles,
    title: "Contextual Understanding",
    description: "Goes beyond keywords to understand the intent behind queries, providing accurate and relevant answers every time.",
  },
  {
    icon: Globe,
    title: "Multi-Source Integration",
    description: "Connect databases, documents, emails, and apps into a unified knowledge layer accessible through natural language.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption. Your data never leaves your infrastructure.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Get instant insights from your data with sub-100ms query responses and live dashboard updates.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Granular permissions ensure users only see data they're authorized to access. Full audit logging included.",
  }
]

// Shape Badge Component
const ShapeBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4 sm:mb-6">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-violet-500 w-3.5 sm:w-4 h-3.5 sm:h-4">
      <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor" />
    </svg>
    <span className="text-xs sm:text-sm font-semibold text-violet-400">{children}</span>
  </div>
)

export const ProblemSection: FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia?.('(max-width: 768px)')
    const update = () => setIsMobile(!!mq?.matches)
    update()
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  const motionEnabled = mounted && !prefersReducedMotion && !isMobile

  return (
    <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-violet-500/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10"
          style={!motionEnabled ? { opacity: 1 } : undefined}
          {...(motionEnabled
            ? {
              initial: { opacity: 0, y: 20 },
              animate: isInView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6 },
            }
            : {})}
        >
          <ShapeBadge>Features</ShapeBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">
            Essential features for enterprise AI
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
            Built from the ground up for enterprise requirements. Security, scalability, and intelligence in one platform.
          </p>
        </motion.div>

        {/* Features Grid - Subtle asymmetry for human feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              style={!motionEnabled ? { opacity: 1 } : undefined}
              {...(motionEnabled
                ? {
                  initial: { opacity: 0, y: 30 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.5, delay: 0.1 * index },
                }
                : {})}
            >
              <div className={`p-5 sm:p-6 md:p-8 h-full rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 ${index % 3 === 1 ? 'lg:mt-4' : ''} ${index % 3 === 2 ? 'lg:mt-8' : ''}`}>

                {/* Icon - Clean outline style */}
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-surface)] flex items-center justify-center mb-4 sm:mb-5 group-hover:border-violet-500/40 transition-colors">
                  <feature.icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-violet-500 transition-colors" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

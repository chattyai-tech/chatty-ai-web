'use client'

import { FC, useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Cable, MessageSquare, BarChart3, Rocket } from 'lucide-react'
import Image from 'next/image'

const STEPS = [
  {
    number: "01",
    icon: Cable,
    title: "Connect Your Sources",
    description: "Link your databases, documents, emails, and internal systems. Chatty AI securely indexes everything.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Ask in Natural Language",
    description: "Simply ask questions like you would to a colleague. Our AI understands context and intent.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Get Instant Insights",
    description: "Receive accurate answers, SQL queries, visualizations, and reports in seconds.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Scale Across Teams",
    description: "Roll out to your entire organization with enterprise SSO and role-based access.",
  }
]

// Shape Badge Component
const ShapeBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4 sm:mb-6">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-indigo-500 w-3.5 sm:w-4 h-3.5 sm:h-4">
      <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor" />
    </svg>
    <span className="text-xs sm:text-sm font-semibold text-indigo-400">{children}</span>
  </div>
)

export const HowItWorks: FC = () => {
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
    <section id="how-it-works" className="py-8 sm:py-12 md:py-16 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-indigo-500/5 rounded-full blur-[80px] sm:blur-[100px] translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

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
          <ShapeBadge>Integration</ShapeBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">
            Get started in minutes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
            From connection to insights in four simple steps. No complex setup required.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              style={!motionEnabled ? { opacity: 1 } : undefined}
              {...(motionEnabled
                ? {
                  initial: { opacity: 0, y: 30 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.5, delay: 0.15 * index },
                }
                : {})}
            >
              {/* Connector Line - Desktop only */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 md:top-10 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500/50 to-violet-500/30"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  />
                </div>
              )}

              <div className="group p-4 sm:p-5 md:p-6 h-full rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">

                {/* Step Number */}
                <div className="text-2xl sm:text-3xl font-bold text-[var(--border-secondary)] mb-3 sm:mb-4 select-none">{step.number}</div>

                {/* Icon - Clean outline style */}
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-surface)] flex items-center justify-center mb-4 sm:mb-5 group-hover:border-indigo-500/40 transition-colors">
                  <step.icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-indigo-500 transition-colors" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Partners */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-16"
          style={!motionEnabled ? { opacity: 1 } : undefined}
          {...(motionEnabled
            ? {
              initial: { opacity: 0, y: 30 },
              animate: isInView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.8 },
            }
            : {})}
        >
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-[var(--text-muted)] uppercase tracking-widest">Integrates with your tools</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { name: 'PostgreSQL', logo: '/postgresql-logo.png' },
              { name: 'Snowflake', logo: '/snowflake-logo.jpeg' },
              { name: 'BigQuery', logo: '/bigquery-logo.png' },
              { name: 'Salesforce', logo: '/salesforce-logo.png' },
              { name: 'Slack', logo: '/slack-logo.jpeg' },
              { name: 'Teams', logo: '/teams-logo.png' },
              { name: 'Notion', logo: '/notion-logo.png' },
              { name: 'Confluence', logo: '/confluence-logo.png' }
            ].map((tool) => (
              <div 
                key={tool.name} 
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {tool.logo ? (
                  <div className="relative h-8 sm:h-10 md:h-12 w-auto">
                    <Image
                    src={tool.logo}
                      alt={`${tool.name} logo`}
                      width={120}
                      height={48}
                      className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      unoptimized
                  />
                  </div>
                ) : (
                  <span className="text-xs sm:text-sm md:text-lg font-semibold text-[var(--text-muted)] hover:text-purple-400 transition-colors cursor-pointer">{tool.name}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

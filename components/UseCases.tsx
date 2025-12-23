'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, FileText, Workflow, FileSpreadsheet, Scale, BarChart3, ArrowRight } from 'lucide-react'

const USE_CASES = [
  {
    icon: Database,
    title: "AI SQL & Data Exploration",
    description: "Generate complex SQL queries from natural language. Explore schemas, tables, and visualize data instantly.",
  },
  {
    icon: FileText,
    title: "Enterprise Document Search",
    description: "Search and query across all enterprise documents with AI-powered semantic understanding.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks with n8n integration. Connect to 400+ apps seamlessly.",
  },
  {
    icon: FileSpreadsheet,
    title: "Document Generation",
    description: "Draft, summarize, and generate reports directly in Microsoft Word with AI assistance.",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Compare contracts, analyze policies, and ensure regulatory compliance automatically.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with natural language analytics.",
  }
]

const STATS = [
  { value: "89%", label: "Faster data insights" },
  { value: "75%", label: "Reduction in manual tasks" },
  { value: "3x", label: "Productivity improvement" }
]

// Decorative Shape Component - Purple themed
const ShapeBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-purple-500 w-3.5 sm:w-4 h-3.5 sm:h-4">
      <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor"/>
    </svg>
    <span className="text-xs sm:text-sm font-semibold text-purple-400">{children}</span>
  </div>
)

export const UseCases: FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[var(--bg-surface)] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-violet-500/5 rounded-full blur-[60px] sm:blur-[80px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ShapeBadge>Use Cases</ShapeBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">
            Transform how your team works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
            From data analysis to document generation, Chatty AI streamlines operations and accelerates business growth.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {USE_CASES.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Icon - Clean outline style */}
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-surface)] flex items-center justify-center mb-4 sm:mb-5 group-hover:border-purple-500/40 transition-colors">
                <useCase.icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-purple-500 transition-colors" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2">{useCase.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{useCase.description}</p>
              
              {/* Learn More Link */}
              <div className="flex items-center text-sm font-medium text-[var(--text-muted)] group-hover:text-purple-500 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-medium hover:opacity-90 transition-opacity">
            Explore All Use Cases
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

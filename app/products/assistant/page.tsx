'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { 
  MessageSquare, 
  Search, 
  Shield, 
  Zap, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Brain, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw,
  FileSearch,
  Bot,
  Globe,
  Lock,
  Rocket,
  TrendingUp,
  Users,
  ChevronRight,
  Star,
  Quote,
  Check,
  MousePointer2
} from 'lucide-react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useScroll, useSpring } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: `particle-${i}`,
    left: `${(i * 3.33) % 100}%`,
    top: `${(i * 7) % 100}%`,
    xOffset: (i % 5) * 4 - 10,
    duration: 3 + (i % 5),
    delay: (i % 10) * 0.2,
  }))
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Animated gradient orb
const GradientOrb = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-[80px] ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
)

// Interactive 3D Card
const Interactive3DCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    setRotateX(-mouseY / 20)
    setRotateY(mouseX / 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Animated counter
const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (Number.isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }
    const duration = 2000
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(numericValue * easeOut)
      setDisplayValue(value.includes('.') ? (numericValue * easeOut).toFixed(1) : current.toString())
      if (progress < 1) requestAnimationFrame(animate)
      else setDisplayValue(value)
    }
    animate()
  }, [isVisible, value])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

// Typing animation component
const TypeWriter = ({ text, className = "", onComplete }: { text: string; className?: string; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayText("")
    setIsComplete(false)
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setIsComplete(true)
        onComplete?.()
      }
    }, 30)
    return () => clearInterval(interval)
  }, [text, onComplete])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-purple-400 ml-1 align-middle"
        />
      )}
    </span>
  )
}

// RAG Steps data
const ragSteps = [
  {
    id: 'query',
    label: 'Ask Anything',
    icon: MessageSquare,
    description: 'Natural language queries',
    detail: 'Ask questions naturally, like talking to a colleague who knows everything about your organization.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'retrieve',
    label: 'Smart Search',
    icon: FileSearch,
    description: 'Semantic document search',
    detail: 'AI-powered search finds relevant content using meaning, not just keywords.',
    color: 'from-violet-500 to-indigo-500'
  },
  {
    id: 'context',
    label: 'Context Building',
    icon: Layers,
    description: 'Intelligent assembly',
    detail: 'Relevant passages are assembled to provide complete context for accurate answers.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'generate',
    label: 'AI Generation',
    icon: Brain,
    description: 'Grounded response',
    detail: 'Generates responses based only on your data — zero hallucinations, full accuracy.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'response',
    label: 'Cited Answer',
    icon: CheckCircle2,
    description: 'Verified with sources',
    detail: 'Every answer includes citations so you can verify and explore the source documents.',
    color: 'from-cyan-500 to-teal-500'
  },
]

// Features data
const features = [
  {
    title: 'Zero Hallucinations',
    description: 'Every response is grounded in your actual data with verifiable citations. If information does not exist, the AI tells you honestly.',
    icon: Shield,
    stat: '0%',
    statLabel: 'Hallucination rate',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption. Your data never leaves your infrastructure.',
    icon: Lock,
    stat: 'SOC 2',
    statLabel: 'Type II Certified',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized vector search delivers answers in milliseconds, even across millions of documents.',
    icon: Zap,
    stat: '<500',
    statLabel: 'ms response time',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Universal Integration',
    description: 'Connects to 40+ data sources including Confluence, SharePoint, Google Drive, and custom databases.',
    icon: Globe,
    stat: '40+',
    statLabel: 'Integrations',
    gradient: 'from-purple-500 to-pink-500'
  },
]

// Use cases data
const useCases = [
  {
    title: 'Knowledge Discovery',
    description: 'Instantly find answers buried in documents, policies, and past communications.',
    icon: Search,
    queries: ['What is the Q3 revenue target?', 'Find the marketing budget breakdown', 'When was project X approved?'],
    metric: '10x faster',
    metricLabel: 'information access'
  },
  {
    title: 'Employee Onboarding',
    description: 'New hires get instant answers about policies, procedures, and company knowledge.',
    icon: Users,
    queries: ['What is our PTO policy?', 'How do I submit expenses?', 'Who handles IT requests?'],
    metric: '60%',
    metricLabel: 'faster onboarding'
  },
  {
    title: 'Customer Support',
    description: 'Support agents get instant access to product docs and troubleshooting guides.',
    icon: MessageSquare,
    queries: ['How to reset password?', 'Return policy details?', 'Warranty information?'],
    metric: '45%',
    metricLabel: 'faster resolution'
  },
  {
    title: 'Research & Analysis',
    description: 'Synthesize insights from reports, studies, and internal research in seconds.',
    icon: TrendingUp,
    queries: ['Market trends summary?', 'Competitor analysis?', 'Customer feedback themes?'],
    metric: '5x',
    metricLabel: 'productivity gain'
  },
]

// Demo conversation
const demoMessages = [
  { role: 'user', content: "What was our company's revenue growth in Q3 2024?" },
  { 
    role: 'assistant', 
    content: "Based on the Q3 2024 Financial Report, revenue grew by 23.4% YoY to $142.5M. Key drivers were:\n\n• Enterprise sales: +31% ($89.2M)\n• SMB segment: +18% ($42.1M)\n• Professional services: +12% ($11.2M)\n\nThe growth exceeded the forecast of 19% due to strong enterprise adoption in EMEA.",
    sources: ['Q3-2024-Financial-Report.pdf', 'Revenue-Analysis-Q3.xlsx', 'Board-Presentation-Oct.pptx']
  }
]

// Integrations data
const integrations = [
  { name: 'Confluence', icon: '/confluence-logo.png' },
  { name: 'Notion', icon: '/notion-logo.png' },
  { name: 'Slack', icon: '/slack-logo.jpeg' },
  { name: 'Teams', icon: '/teams-logo.png' },
  { name: 'Salesforce', icon: '/salesforce-logo.png' },
  { name: 'Snowflake', icon: '/snowflake-logo.jpeg' },
  { name: 'BigQuery', icon: '/bigquery-logo.png' },
  { name: 'PostgreSQL', icon: '/postgresql-logo.png' },
]

export default function AssistantPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeUseCase, setActiveUseCase] = useState(0)
  const [showResponse, setShowResponse] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  
  const progress = useMotionValue(0)
  const progressWidth = useTransform(progress, [0, 100], ['0%', '100%'])

  // Auto-advance RAG steps
  useEffect(() => {
    if (!isPlaying) return
    const stepDuration = 4000
    progress.set(0)
    animate(progress, 100, { duration: stepDuration / 1000, ease: 'linear' })

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ragSteps.length)
      progress.set(0)
      animate(progress, 100, { duration: stepDuration / 1000, ease: 'linear' })
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isPlaying, progress])

  // Demo animation
  const startDemo = useCallback(() => {
    setShowResponse(false)
    setIsTyping(true)
  }, [])

  const handleTypingComplete = useCallback(() => {
    setIsTyping(false)
    setTimeout(() => setShowResponse(true), 1500)
  }, [])

  useEffect(() => {
    startDemo()
  }, [startDemo])

  return (
    <div ref={containerRef} className="overflow-x-hidden bg-[var(--bg-primary)]">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <GradientOrb className="w-[600px] h-[600px] -top-40 -left-40 bg-purple-600/20" delay={0} />
          <GradientOrb className="w-[500px] h-[500px] top-1/3 -right-40 bg-violet-600/15" delay={2} />
          <GradientOrb className="w-[400px] h-[400px] bottom-0 left-1/3 bg-indigo-600/10" delay={4} />
          <FloatingParticles />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-card)] border border-purple-500/30 text-sm font-semibold">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </motion.div>
                    <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                      Chatty AI Assistant
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.04em] leading-[1.05]">
                  <span className="text-[var(--text-primary)]">AI that </span>
                  <span className="relative">
                    <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                      actually
                    </span>
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M2 10 Q100 0 198 10"
                        fill="none"
                        stroke="#A855F7"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                  <br />
                  <span className="text-[var(--text-primary)]">knows your data.</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl"
              >
                Retrieval-Augmented Generation that searches your documents, 
                understands context, and delivers <span className="text-purple-400 font-semibold">cited answers</span> — not hallucinations.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: '10M+', label: 'Documents Indexed', id: 'stat-docs' },
                  { value: '99.9%', label: 'Accuracy Rate', id: 'stat-accuracy' },
                  { value: '<1s', label: 'Response Time', id: 'stat-response' },
                ].map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link href="/demo">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent animate-pulse" />
                    </div>
                    <span className="relative flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                
                <motion.button
                  onClick={() => document.querySelector('[data-section="how-it-works"]')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 rounded-2xl font-bold border-2 border-[var(--border-primary)] text-[var(--text-primary)] hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-purple-400" />
                    See How It Works
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Interactive3DCard>
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
                  
                  {/* Main card */}
                  <div className="relative bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Window header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-primary)] bg-[var(--bg-surface)]/50">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
                          <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
                        </div>
                        <span className="ml-3 text-xs text-[var(--text-muted)] font-medium">ChattyAI Assistant</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startDemo}
                        className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Replay
                      </motion.button>
                    </div>

                    {/* Chat content */}
                    <div className="p-6 space-y-5 min-h-[380px]">
                      {/* User message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
                          <span className="text-base">👤</span>
                        </div>
                        <div className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-primary)] rounded-2xl rounded-tl-md px-4 py-3">
                          <TypeWriter 
                            text={demoMessages[0].content} 
                            className="text-sm text-[var(--text-primary)]"
                            onComplete={handleTypingComplete}
                          />
                        </div>
                      </motion.div>

                      {/* Thinking indicator */}
                      <AnimatePresence>
                        {!isTyping && !showResponse && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                              <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                              <div className="flex gap-1">
                              <motion.div
                                className="w-2 h-2 rounded-full bg-purple-400"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                              />
                              <motion.div
                                className="w-2 h-2 rounded-full bg-purple-400"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
                              />
                              <motion.div
                                className="w-2 h-2 rounded-full bg-purple-400"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                              />
                            </div>
                              <span className="text-xs text-purple-400">Searching documents...</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* AI Response */}
                      <AnimatePresence>
                        {showResponse && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                              <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="bg-gradient-to-br from-purple-500/5 to-violet-500/5 border border-purple-500/20 rounded-2xl rounded-tl-md px-4 py-3">
                                <p className="text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                                  {demoMessages[1].content}
                                </p>
                              </div>
                              
                              {/* Sources */}
                              <motion.div 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap items-center gap-2"
                              >
                                <span className="text-xs text-[var(--text-muted)]">Sources:</span>
                                {demoMessages[1].sources?.map((source, i) => (
                                  <motion.span
                                    key={source}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="text-xs px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors cursor-pointer flex items-center gap-1"
                                  >
                                    <FileText className="w-3 h-3" />
                                    {source}
                                  </motion.span>
                                ))}
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <MousePointer2 className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== INTEGRATIONS MARQUEE ==================== */}
      <section className="py-16 border-y border-[var(--border-primary)] bg-[var(--bg-surface)]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <p className="text-center text-sm text-[var(--text-muted)] uppercase tracking-widest">
            Connects with your existing tools
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-surface)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-surface)] to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...integrations, ...integrations, ...integrations].map((integration, idx) => (
              <div key={`${integration.name}-${idx}`} className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] flex items-center justify-center overflow-hidden">
                  <Image src={integration.icon} alt={integration.name} width={24} height={24} className="w-6 h-6 object-contain" />
                </div>
                <span className="text-sm font-medium text-[var(--text-secondary)]">{integration.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS - RAG FLOW ==================== */}
      <ScrollReveal>
        <section data-section="how-it-works" className="py-32 relative overflow-hidden scroll-mt-24" aria-label="How It Works">
          <div className="absolute inset-0 pointer-events-none">
            <GradientOrb className="w-[500px] h-[500px] -top-20 -right-40 bg-indigo-600/10" delay={0} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section header */}
            <div className="text-center mb-20">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400 mb-4"
              >
                How It Works
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)] mb-6"
              >
                The RAG Intelligence Pipeline
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
              >
                Watch how your questions transform into accurate, cited answers in real-time.
              </motion.p>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)] hover:border-purple-500/40 transition-all"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setActiveStep(0); setIsPlaying(true) }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)] hover:border-purple-500/40 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </motion.button>
            </div>

            {/* Progress bar */}
            <div className="max-w-xl mx-auto mb-16">
              <div className="h-1.5 bg-[var(--bg-surface)] rounded-full overflow-hidden border border-[var(--border-primary)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-full"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>

            {/* RAG Steps - Interactive Timeline */}
            <div className="relative mb-16">
              {/* Connection line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--border-secondary)] to-transparent hidden lg:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {ragSteps.map((step, i) => (
                  <motion.button
                    key={step.id}
                    onClick={() => { setActiveStep(i); setIsPlaying(false) }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative p-6 rounded-2xl border text-left transition-all duration-500 focus:outline-none ${
                      activeStep === i
                        ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/40 shadow-xl shadow-purple-500/10 scale-105 z-10'
                        : activeStep > i
                          ? 'bg-[var(--bg-surface)] border-purple-500/20'
                          : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:border-purple-500/30'
                    }`}
                  >
                    {/* Step number indicator */}
                    <motion.div
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        activeStep >= i 
                          ? 'bg-gradient-to-br from-purple-500 to-violet-500 text-white scale-110 shadow-lg shadow-purple-500/30' 
                          : 'bg-[var(--bg-surface)] border border-[var(--border-primary)] text-[var(--text-muted)]'
                      }`}
                    >
                      {activeStep > i ? <Check className="w-4 h-4" /> : i + 1}
                    </motion.div>

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeStep === i 
                        ? `bg-gradient-to-br ${step.color}` 
                        : 'bg-[var(--bg-surface)]'
                    }`}>
                      <step.icon className={`w-7 h-7 transition-colors duration-300 ${
                        activeStep === i ? 'text-white' : 'text-[var(--text-muted)]'
                      }`} />
                    </div>
                    
                    <h3 className={`font-bold mb-1 transition-colors duration-300 ${
                      activeStep === i ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                    }`}>
                      {step.label}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{step.description}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Active step detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl mx-auto"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-surface)] border border-[var(--border-primary)] shadow-2xl overflow-hidden">
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${ragSteps[activeStep].color} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
                  
                  <div className="relative flex flex-col md:flex-row items-center gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${ragSteps[activeStep].color} flex items-center justify-center shrink-0 shadow-lg`}>
                      {(() => {
                        const IconComponent = ragSteps[activeStep].icon
                        return <IconComponent className="w-10 h-10 text-white" />
                      })()}
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                        {ragSteps[activeStep].label}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {ragSteps[activeStep].detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </ScrollReveal>

      {/* ==================== FEATURES SECTION ==================== */}
      <ScrollReveal>
        <section className="py-32 bg-[var(--bg-surface)]/50 border-y border-[var(--border-primary)] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <GradientOrb className="w-[600px] h-[600px] -bottom-40 -left-40 bg-purple-600/10" delay={0} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Left heading */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400 mb-4"
                >
                  Why Choose RAG
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-black tracking-[-0.02em] text-[var(--text-primary)] mb-6"
                >
                  Not just another AI chatbot.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-[var(--text-secondary)] leading-relaxed"
                >
                  Chatty AI fundamentally changes how AI answers questions. 
                  It retrieves real data first, ensuring every response is accurate, 
                  verifiable, and trustworthy.
                </motion.p>
              </div>

              {/* Right features grid */}
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <Interactive3DCard>
                      <div className={`relative h-full p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                        hoveredFeature === i
                          ? 'bg-gradient-to-br from-purple-500/5 to-violet-500/5 border-purple-500/40 shadow-xl shadow-purple-500/10'
                          : 'bg-[var(--bg-card)] border-[var(--border-primary)]'
                      }`}>
                        {/* Background gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 ${
                          hoveredFeature === i ? 'opacity-5' : ''
                        }`} />
                        
                        <div className="relative">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              hoveredFeature === i 
                                ? `bg-gradient-to-br ${feature.gradient}` 
                                : 'bg-[var(--bg-surface)]'
                            }`}>
                              <feature.icon className={`w-6 h-6 transition-colors duration-300 ${
                                hoveredFeature === i ? 'text-white' : 'text-[var(--text-muted)]'
                              }`} />
                            </div>
                            <div className="text-right">
                              <div className={`text-3xl font-black transition-colors duration-300 ${
                                hoveredFeature === i ? 'text-purple-400' : 'text-[var(--text-primary)]'
                              }`}>
                                <AnimatedCounter value={feature.stat} />
                              </div>
                              <div className="text-xs text-[var(--text-muted)]">{feature.statLabel}</div>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                          <p className="text-sm text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </Interactive3DCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ==================== USE CASES SECTION ==================== */}
      <ScrollReveal>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <GradientOrb className="w-[500px] h-[500px] top-1/3 -right-40 bg-violet-600/10" delay={0} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section header */}
            <div className="text-center mb-20">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400 mb-4"
              >
                Use Cases
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)] mb-6"
              >
                Transform how teams find answers
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Use case tabs */}
              <div className="space-y-4">
                {useCases.map((useCase, i) => (
                  <motion.button
                    key={useCase.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveUseCase(i)}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 focus:outline-none ${
                      activeUseCase === i
                        ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/40 shadow-lg shadow-purple-500/5'
                        : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:border-purple-500/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeUseCase === i 
                            ? 'bg-gradient-to-br from-purple-500 to-violet-500' 
                            : 'bg-[var(--bg-surface)]'
                        }`}>
                          <useCase.icon className={`w-6 h-6 transition-colors ${
                            activeUseCase === i ? 'text-white' : 'text-[var(--text-muted)]'
                          }`} />
                        </div>
                        <div>
                          <h3 className={`font-bold transition-colors ${
                            activeUseCase === i ? 'text-purple-400' : 'text-[var(--text-primary)]'
                          }`}>
                            {useCase.title}
                          </h3>
                          <p className="text-sm text-[var(--text-muted)] line-clamp-1">{useCase.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-purple-400">{useCase.metric}</div>
                        <div className="text-xs text-[var(--text-muted)]">{useCase.metricLabel}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Active use case detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUseCase}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="h-full bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-2xl p-8 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
                          {(() => {
                            const IconComponent = useCases[activeUseCase].icon
                            return <IconComponent className="w-7 h-7 text-white" />
                          })()}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[var(--text-primary)]">
                            {useCases[activeUseCase].title}
                          </h4>
                          <p className="text-sm text-[var(--text-secondary)]">
                            {useCases[activeUseCase].description}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-xs font-bold tracking-widest uppercase text-[var(--text-muted)] mb-4">
                          Example Queries
                        </p>
                        <div className="space-y-3">
                          {useCases[activeUseCase].queries.map((query, i) => (
                            <motion.div
                              key={query}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ x: 5, backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                              className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-primary)] cursor-pointer transition-all"
                            >
                              <Search className="w-5 h-5 text-purple-400 shrink-0" />
                              <span className="text-[var(--text-primary)]">{query}</span>
                              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] ml-auto" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Metric highlight */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[var(--text-secondary)]">Typical improvement</span>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                            <span className="text-2xl font-black text-purple-400">{useCases[activeUseCase].metric}</span>
                            <span className="text-sm text-[var(--text-muted)]">{useCases[activeUseCase].metricLabel}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ==================== VIDEO DEMO SECTION ==================== */}
      <ScrollReveal>
        <section className="py-32 bg-[var(--bg-surface)]/50 border-y border-[var(--border-primary)]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400 mb-4"
              >
                Product Demo
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)] mb-4"
              >
                See it in action
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-[var(--text-secondary)]"
              >
                Watch how Chatty AI transforms knowledge discovery in minutes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Interactive3DCard>
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
                  
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[var(--border-primary)] shadow-2xl">
                    <iframe
                      src="https://player.vimeo.com/video/1147332039?badge=0&autopause=0&player_id=0&app_id=58479"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Watch Chatty AI Demo - See how ChattyAI transforms knowledge discovery"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* ==================== TESTIMONIAL SECTION ==================== */}
      <ScrollReveal>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <GradientOrb className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10" delay={0} />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <Quote className="w-12 h-12 text-purple-500/20" />
              </div>
              
              <div className="bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500" />
                
                <p className="text-xl lg:text-2xl text-[var(--text-primary)] leading-relaxed mb-8 font-medium">
                  &ldquo;ChattyAI transformed how our team accesses information. What used to take hours 
                  of searching through documents now takes seconds. The accuracy and citations give us 
                  confidence in every answer.&rdquo;
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white text-xl font-bold">
                    JM
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[var(--text-primary)]">James Mitchell</div>
                    <div className="text-sm text-[var(--text-muted)]">VP of Operations, Fortune 500</div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-1 mt-6">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/10" />
          <GradientOrb className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/15" delay={0} />
          <FloatingParticles />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-semibold text-purple-400">
              <Rocket className="w-4 h-4" />
              Ready to get started?
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.03em] text-[var(--text-primary)]">
              Transform your enterprise
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                knowledge today.
              </span>
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Join leading organizations who trust ChattyAI for accurate, cited answers from their enterprise data.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-5 rounded-2xl font-bold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 text-lg">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-[var(--border-primary)] text-[var(--text-primary)] hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                >
                  Book a Demo
                </motion.button>
              </Link>
            </div>
            
            <p className="text-sm text-[var(--text-muted)]">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

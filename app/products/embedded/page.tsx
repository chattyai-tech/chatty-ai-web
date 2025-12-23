'use client'

import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Brain,
  Zap,
  Shield,
  Globe,
  Mail,
  BarChart3,
  Presentation,
  PenTool,
  MessageSquare,
  Search,
  FileSpreadsheet,
  MousePointer2,
  Lightbulb,
  RefreshCw,
  Languages,
  BookOpen,
  Target,
  TrendingUp,
  Clock,
  Users,
  Lock,
  Download,
  Settings,
  Play,
} from 'lucide-react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

// Floating particles - purple theme
const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: `particle-${i}`,
    left: `${(i * 4) % 100}%`,
    top: `${(i * 7) % 100}%`,
    xOffset: (i % 5) * 4 - 10,
    duration: 4 + (i % 4),
    delay: (i % 8) * 0.3,
  }))
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -20, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.2, 0.5, 0.2],
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

// Gradient orb - purple theme
const GradientOrb = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-[100px] ${className}`}
    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
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
    setRotateX(-(e.clientY - centerY) / 25)
    setRotateY((e.clientX - centerX) / 25)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setRotateX(0); setRotateY(0) }}
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

// Microsoft Office Apps data - using purple theme
const officeApps = [
  {
    id: 'word',
    name: 'Microsoft Word',
    icon: FileText,
    msColor: 'from-[#2B579A] to-[#185ABD]', // MS Word blue
    description: 'AI-powered writing assistant that helps you draft, edit, and enhance documents with enterprise knowledge.',
    features: [
      { icon: PenTool, title: 'Smart Drafting', desc: 'Generate content using your company\'s tone and style guidelines' },
      { icon: Search, title: 'Knowledge Search', desc: 'Find and insert relevant information from your enterprise data' },
      { icon: RefreshCw, title: 'Content Rewriting', desc: 'Rephrase, summarize, or expand text with one click' },
      { icon: Languages, title: 'Translation', desc: 'Translate documents while maintaining context and terminology' },
    ],
    demo: {
      title: 'Quarterly Report Draft',
      content: 'The Q3 2024 results show significant growth across all segments...',
      aiSuggestion: 'Add specific revenue figures from the financial database for clarity'
    }
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    icon: FileSpreadsheet,
    msColor: 'from-[#217346] to-[#185C37]', // MS Excel green
    description: 'Transform data analysis with natural language queries. Ask questions about your spreadsheets and get instant insights.',
    features: [
      { icon: MessageSquare, title: 'Natural Language Queries', desc: 'Ask questions like "What was the highest sales month?"' },
      { icon: BarChart3, title: 'Auto Chart Generation', desc: 'Create visualizations by describing what you want to see' },
      { icon: Lightbulb, title: 'Formula Assistance', desc: 'Get help writing and debugging complex formulas' },
      { icon: TrendingUp, title: 'Trend Analysis', desc: 'Identify patterns and anomalies in your data automatically' },
    ],
    demo: {
      query: 'Show me top 5 products by revenue this quarter',
      result: ['Product A: $2.4M', 'Product B: $1.8M', 'Product C: $1.5M', 'Product D: $1.2M', 'Product E: $980K']
    }
  },
  {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint',
    icon: Presentation,
    msColor: 'from-[#B7472A] to-[#C43E1C]', // MS PowerPoint red/orange
    description: 'Create stunning presentations faster with AI-generated content, layouts, and speaker notes from your knowledge base.',
    features: [
      { icon: Sparkles, title: 'Slide Generation', desc: 'Generate entire presentations from a simple outline' },
      { icon: BookOpen, title: 'Content Research', desc: 'Pull relevant data and stats from your enterprise sources' },
      { icon: Target, title: 'Speaker Notes', desc: 'Auto-generate talking points for each slide' },
      { icon: RefreshCw, title: 'Design Suggestions', desc: 'Get layout and visual recommendations' },
    ],
    demo: {
      title: 'Q3 Business Review',
      slides: ['Executive Summary', 'Revenue Overview', 'Key Achievements', 'Next Quarter Goals']
    }
  },
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    icon: Mail,
    msColor: 'from-[#0078D4] to-[#106EBE]', // MS Outlook blue
    description: 'Supercharge your email productivity with AI-powered drafting, summarization, and intelligent responses.',
    features: [
      { icon: PenTool, title: 'Email Drafting', desc: 'Compose professional emails with the right tone' },
      { icon: FileText, title: 'Thread Summarization', desc: 'Get quick summaries of long email conversations' },
      { icon: MessageSquare, title: 'Smart Replies', desc: 'Generate contextual response suggestions' },
      { icon: Clock, title: 'Meeting Prep', desc: 'Get briefings before meetings based on email context' },
    ],
    demo: {
      subject: 'Re: Project Timeline Update',
      aiDraft: 'Thank you for the update. Based on the current progress, I suggest we...'
    }
  }
]

// How it works steps
const howItWorksSteps = [
  {
    step: 1,
    title: 'Install the Add-in',
    description: 'Download ChattyAI from the Microsoft AppSource marketplace and install it across your organization with one click.',
    icon: Download
  },
  {
    step: 2,
    title: 'Connect Your Data',
    description: 'Securely connect your enterprise knowledge base, documents, databases, and internal systems to ChattyAI.',
    icon: Settings
  },
  {
    step: 3,
    title: 'Start Using AI',
    description: 'Access ChattyAI directly within Word, Excel, PowerPoint, and Outlook. Your AI assistant is always just a click away.',
    icon: Play
  }
]

// Benefits data - purple theme
const benefits = [
  { icon: Zap, title: '10x Faster', desc: 'Complete document tasks in a fraction of the time' },
  { icon: Shield, title: 'Enterprise Secure', desc: 'SOC 2 Type II certified, data stays in your tenant' },
  { icon: Users, title: 'Team Collaboration', desc: 'Shared knowledge base across your organization' },
  { icon: Lock, title: 'Data Privacy', desc: 'Your data is never used for AI training' },
]

export default function ChattyForWordPage() {
  const [activeApp, setActiveApp] = useState('word')
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const currentApp = officeApps.find(app => app.id === activeApp) || officeApps[0]

  return (
    <div ref={containerRef} className="overflow-x-hidden bg-[var(--bg-primary)]">
      {/* Progress bar - purple theme */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background - purple theme */}
        <div className="absolute inset-0 pointer-events-none">
          <GradientOrb className="w-[700px] h-[700px] -top-40 -left-40 bg-purple-600/20" delay={0} />
          <GradientOrb className="w-[500px] h-[500px] top-1/3 -right-40 bg-violet-600/15" delay={2} />
          <GradientOrb className="w-[400px] h-[400px] bottom-0 left-1/3 bg-indigo-600/10" delay={4} />
          <FloatingParticles />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge - purple theme */}
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
                      Microsoft 365 Integration
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Heading - purple theme */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.04em] leading-[1.05]">
                  <span className="text-[var(--text-primary)]">ChattyAI for </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    Microsoft Office
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl"
              >
                Bring enterprise AI directly into Word, Excel, PowerPoint, and Outlook. 
                Access your company knowledge, automate tasks, and work smarter — all without leaving Microsoft 365.
              </motion.p>

              {/* Office App Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {officeApps.map((app) => (
                  <motion.button
                    key={app.id}
                    onClick={() => setActiveApp(app.id)}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                      activeApp === app.id
                        ? 'bg-purple-500/10 border-purple-500/40 shadow-lg shadow-purple-500/10'
                        : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:border-purple-500/30'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${app.msColor} flex items-center justify-center`}>
                      <app.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className={`font-medium text-sm ${activeApp === app.id ? 'text-purple-400' : 'text-[var(--text-secondary)]'}`}>
                      {app.name.replace('Microsoft ', '')}
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              {/* CTAs - purple theme */}
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
                    className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden bg-gradient-to-r from-purple-600 to-violet-600 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <span className="relative flex items-center gap-2">
                      Get Started Free
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                
                <motion.button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Interactive3DCard>
                <div className="relative">
                  {/* Glow - purple theme */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
                  
                  {/* App Demo Card */}
                  <div className="relative bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-primary)] bg-[var(--bg-surface)]/50">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                          <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${currentApp.msColor} flex items-center justify-center`}>
                            <currentApp.icon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-[var(--text-primary)]">{currentApp.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20">
                        <Brain className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-medium text-purple-400">ChattyAI</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 min-h-[320px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeApp}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AppDemo app={currentApp} />
                        </motion.div>
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

      {/* ==================== APP FEATURES SECTION ==================== */}
      {officeApps.map((app, idx) => (
        <ScrollReveal key={app.id}>
          <section 
            id={app.id}
            className={`py-32 relative overflow-hidden scroll-mt-20 ${idx % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-surface)]/50'}`}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute ${idx % 2 === 0 ? '-right-40 top-20' : '-left-40 bottom-20'} w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-[120px] opacity-50`} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={idx % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-semibold mb-6">
                    <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${app.msColor} flex items-center justify-center`}>
                      <app.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-purple-400">
                      {app.name}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)] mb-4">
                    AI-Powered{' '}
                    <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                      {app.name.replace('Microsoft ', '')}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                    {app.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {app.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIdx * 0.1 }}
                        onMouseEnter={() => setHoveredFeature(`${app.id}-${fIdx}`)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          hoveredFeature === `${app.id}-${fIdx}`
                            ? 'bg-purple-500/5 border-purple-500/40 shadow-lg shadow-purple-500/5'
                            : 'bg-[var(--bg-card)] border-[var(--border-primary)]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shrink-0">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[var(--text-primary)] mb-1">{feature.title}</h4>
                            <p className="text-sm text-[var(--text-muted)]">{feature.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA - purple theme */}
                  <Link href="/demo">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Try {app.name.replace('Microsoft ', '')} Integration
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <Interactive3DCard>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/15 to-violet-500/15 rounded-3xl blur-2xl opacity-60" />
                      <div className="relative bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-primary)] bg-[var(--bg-surface)]/50">
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${app.msColor} flex items-center justify-center`}>
                              <app.icon className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-sm font-medium text-[var(--text-muted)]">{app.name}</span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 rounded bg-purple-500/10">
                            <Brain className="w-3 h-3 text-purple-400" />
                            <span className="text-xs text-purple-400">AI</span>
                          </div>
                        </div>
                        <div className="p-6 min-h-[280px]">
                          <AppDemo app={app} />
                        </div>
                      </div>
                    </div>
                  </Interactive3DCard>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      ))}

      {/* ==================== HOW IT WORKS ==================== */}
      <ScrollReveal>
        <section id="how-it-works" className="py-32 bg-[var(--bg-primary)] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <GradientOrb className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10" delay={0} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400 mb-4"
              >
                Getting Started
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)] mb-6"
              >
                How ChattyAI Connects to{' '}
                <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Microsoft 365
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
              >
                Get up and running in minutes with our seamless Microsoft 365 integration.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative"
                >
                  {/* Connection line */}
                  {idx < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                  )}
                  
                  <div className="relative bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-2xl p-8 text-center hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30">
                      {step.step}
                    </div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 flex items-center justify-center mx-auto mt-4 mb-6">
                      <step.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{step.title}</h3>
                    <p className="text-[var(--text-muted)]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ==================== BENEFITS ==================== */}
      <ScrollReveal>
        <section className="py-32 bg-[var(--bg-surface)]/50 border-y border-[var(--border-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400 mb-4"
              >
                Why Choose ChattyAI
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)]"
              >
                Enterprise-Ready AI for{' '}
                <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Microsoft 365
                </span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTASection />
    </div>
  )
}

// App Demo Component - purple theme for AI elements
function AppDemo({ app }: { app: typeof officeApps[0] }) {
  if (app.id === 'word') {
    return (
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-sm font-medium text-[var(--text-primary)] mb-2">{app.demo.title}</div>
          <p className="text-sm text-[var(--text-secondary)] mb-3">{app.demo.content}</p>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-sm text-purple-400">{app.demo.aiSuggestion}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-medium">Accept</button>
          <button className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-primary)] text-xs font-medium text-[var(--text-secondary)]">Modify</button>
        </div>
      </div>
    )
  }

  if (app.id === 'excel') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-primary)]">
          <Search className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-[var(--text-primary)]">{app.demo.query}</span>
        </div>
        <div className="space-y-2">
          {app.demo.result?.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-purple-500/5 border border-purple-500/20">
              <span className="text-sm text-[var(--text-primary)]">{item.split(':')[0]}</span>
              <span className="text-sm font-bold text-purple-400">{item.split(':')[1]}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (app.id === 'powerpoint') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-medium text-[var(--text-primary)] mb-2">Generated Presentation: {app.demo.title}</div>
        <div className="grid grid-cols-2 gap-2">
          {app.demo.slides?.map((slide, idx) => (
            <div key={idx} className="aspect-video rounded-lg bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 p-3 flex items-center justify-center">
              <span className="text-xs text-center text-[var(--text-secondary)]">{slide}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-purple-400">
          <Sparkles className="w-4 h-4" />
          <span>AI-generated speaker notes ready</span>
        </div>
      </div>
    )
  }

  if (app.id === 'outlook') {
    return (
      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-primary)]">
          <div className="text-xs text-[var(--text-muted)] mb-1">Subject</div>
          <div className="text-sm font-medium text-[var(--text-primary)]">{app.demo.subject}</div>
        </div>
        <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-400">AI Draft Suggestion</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">{app.demo.aiDraft}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-medium">Use Draft</button>
          <button className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-primary)] text-xs font-medium text-[var(--text-secondary)]">Edit</button>
        </div>
      </div>
    )
  }

  return null
}

'use client'

import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Bot, Workflow, Shield, CheckCircle, Play, Zap, Code2, Server, Lock, RefreshCw, UserPlus, Receipt, Database, ArrowRight, GitBranch, Webhook, MessageSquare, Activity, Settings, Link2, Brain, Folder, Search, Send, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'

// Workflow Node Types
interface WorkflowNode {
  id: string
  type: 'trigger' | 'action' | 'agent' | 'tool' | 'output' | 'n8n'
  label: string
  sublabel: string
  icon: React.ComponentType<{ className?: string }>
  x: number
  y: number
  color: string
  status?: 'idle' | 'running' | 'success' | 'error'
  connections?: string[]
}

export default function AgentsPage() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [executionStep, setExecutionStep] = useState(0)
  const [selectedWorkflow, setSelectedWorkflow] = useState<'invoice' | 'onboarding' | 'sync'>('invoice')
  const [showN8nConnection, setShowN8nConnection] = useState(false)

  // Workflow nodes for different use cases
  const workflows = {
    invoice: [
      { id: 'trigger1', type: 'trigger', label: 'New Invoice', sublabel: 'Webhook', icon: Webhook, x: 50, y: 200, color: 'purple', status: 'idle' },
      { id: 'n8n1', type: 'n8n', label: 'n8n Workflow', sublabel: 'Data Extraction', icon: Workflow, x: 250, y: 200, color: 'indigo', status: 'idle' },
      { id: 'agent1', type: 'agent', label: 'Chatty Agent', sublabel: 'AI Processing', icon: Bot, x: 450, y: 200, color: 'blue', status: 'idle' },
      { id: 'action1', type: 'action', label: 'Validate PO', sublabel: 'Database Query', icon: Database, x: 650, y: 150, color: 'emerald', status: 'idle' },
      { id: 'action2', type: 'action', label: 'Route Approval', sublabel: 'Business Logic', icon: Settings, x: 650, y: 250, color: 'amber', status: 'idle' },
      { id: 'output1', type: 'output', label: 'Update ERP', sublabel: 'System Sync', icon: RefreshCw, x: 850, y: 200, color: 'cyan', status: 'idle' },
    ],
    onboarding: [
      { id: 'trigger2', type: 'trigger', label: 'New Employee', sublabel: 'HR System', icon: UserPlus, x: 50, y: 200, color: 'purple', status: 'idle' },
      { id: 'agent2', type: 'agent', label: 'Chatty Agent', sublabel: 'Onboarding AI', icon: Bot, x: 250, y: 200, color: 'blue', status: 'idle' },
      { id: 'n8n2', type: 'n8n', label: 'n8n Integration', sublabel: 'Multi-System', icon: Link2, x: 450, y: 200, color: 'indigo', status: 'idle' },
      { id: 'action3', type: 'action', label: 'Create Accounts', sublabel: 'Provisioning', icon: Server, x: 650, y: 150, color: 'emerald', status: 'idle' },
      { id: 'action4', type: 'action', label: 'Send Welcome', sublabel: 'Email/Slack', icon: MessageSquare, x: 650, y: 250, color: 'amber', status: 'idle' },
      { id: 'output2', type: 'output', label: 'Complete', sublabel: 'Status Update', icon: CheckCircle, x: 850, y: 200, color: 'cyan', status: 'idle' },
    ],
    sync: [
      { id: 'trigger3', type: 'trigger', label: 'Schedule', sublabel: 'Cron Job', icon: Activity, x: 50, y: 200, color: 'purple', status: 'idle' },
      { id: 'agent3', type: 'agent', label: 'Chatty Agent', sublabel: 'Data Sync AI', icon: Bot, x: 250, y: 200, color: 'blue', status: 'idle' },
      { id: 'n8n3', type: 'n8n', label: 'n8n Pipeline', sublabel: 'ETL Process', icon: Workflow, x: 450, y: 200, color: 'indigo', status: 'idle' },
      { id: 'action5', type: 'action', label: 'Transform Data', sublabel: 'Mapping', icon: Code2, x: 650, y: 150, color: 'emerald', status: 'idle' },
      { id: 'action6', type: 'action', label: 'Validate', sublabel: 'Quality Check', icon: Shield, x: 650, y: 250, color: 'amber', status: 'idle' },
      { id: 'output3', type: 'output', label: 'Sync Complete', sublabel: 'All Systems', icon: RefreshCw, x: 850, y: 200, color: 'cyan', status: 'idle' },
    ],
  }

  const currentWorkflow = workflows[selectedWorkflow]

  // Simulate workflow execution
  const runWorkflow = useCallback(() => {
    setIsRunning(true)
    setExecutionStep(0)
    
    const steps = currentWorkflow.map((node, index) => ({
      nodeId: node.id,
      delay: index * 800,
    }))

    steps.forEach((step) => {
      setTimeout(() => {
        setExecutionStep((prev) => prev + 1)
        setActiveNode(step.nodeId)
        
        // Update node status
        const nodeIndex = currentWorkflow.findIndex((n) => n.id === step.nodeId)
        if (nodeIndex !== -1) {
          // Simulate node execution
          setTimeout(() => {
            setActiveNode(null)
          }, 600)
        }
      }, step.delay)
    })

    setTimeout(() => {
      setIsRunning(false)
      setExecutionStep(0)
      setActiveNode(null)
    }, steps.length * 800 + 1000)
  }, [currentWorkflow])

  // Get node color classes
  const getNodeColor = (color: string, isActive: boolean) => {
    const colors: Record<string, string> = {
      purple: isActive ? 'bg-purple-500 border-purple-400 shadow-purple-500/50' : 'bg-purple-500/20 border-purple-500/40',
      blue: isActive ? 'bg-blue-500 border-blue-400 shadow-blue-500/50' : 'bg-blue-500/20 border-blue-500/40',
      indigo: isActive ? 'bg-indigo-500 border-indigo-400 shadow-indigo-500/50' : 'bg-indigo-500/20 border-indigo-500/40',
      emerald: isActive ? 'bg-emerald-500 border-emerald-400 shadow-emerald-500/50' : 'bg-emerald-500/20 border-emerald-500/40',
      amber: isActive ? 'bg-amber-500 border-amber-400 shadow-amber-500/50' : 'bg-amber-500/20 border-amber-500/40',
      cyan: isActive ? 'bg-cyan-500 border-cyan-400 shadow-cyan-500/50' : 'bg-cyan-500/20 border-cyan-500/40',
    }
    return colors[color] || colors.blue
  }


  return (
    <div className="overflow-x-hidden bg-[var(--bg-primary)]">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-18">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Bot className="w-4 h-4" />
              <span>Chatty Agents</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[var(--text-primary)]"
            >
              Intelligent Agents
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                For Enterprise Automation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Build AI-powered agents with n8n integration. Create complex workflows that connect systems, make decisions, and automate business processes autonomously.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <Link
                href="/demo"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setShowN8nConnection(!showN8nConnection)}
                className="px-8 py-4 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] text-[var(--text-primary)] font-bold hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
              >
                See n8n Integration
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Workflow Builder Section */}
      <ScrollReveal>
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-surface)] to-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Workflow className="w-4 h-4" />
                <span>Interactive Workflow Builder</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-4">
                Visualize Agent Workflows
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                See how Chatty Agents connect with n8n workflows to automate complex business processes
              </p>
            </motion.div>

            {/* Workflow Selector */}
            <div className="flex justify-center gap-4 mb-8">
              {[
                { id: 'invoice' as const, label: 'Invoice Processing', icon: Receipt },
                { id: 'onboarding' as const, label: 'Employee Onboarding', icon: UserPlus },
                { id: 'sync' as const, label: 'Data Synchronization', icon: RefreshCw },
              ].map((workflow) => (
                <motion.button
                  key={workflow.id}
                  type="button"
                  onClick={() => {
                    setSelectedWorkflow(workflow.id)
                    setIsRunning(false)
                    setActiveNode(null)
                    setExecutionStep(0)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                    selectedWorkflow === workflow.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:border-purple-500/40'
                  }`}
                >
                  <workflow.icon className="w-4 h-4" />
                  <span>{workflow.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Workflow Canvas - Clean Minimalist Design */}
            <div className="relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-12 overflow-hidden min-h-[500px]">
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.15) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />


              {/* Clean Minimalist Workflow Nodes - Horizontal Linear Flow */}
              <div className="relative z-10 flex items-center justify-center gap-6 flex-wrap py-12">
                {currentWorkflow.map((node, index) => {
                  const isActive = activeNode === node.id
                  const isExecuted = executionStep > index
                  
                  // Color mapping for clean minimalist design
                  const colorClasses: Record<string, { border: string; bg: string; icon: string }> = {
                    purple: { 
                      border: 'border-purple-300 dark:border-purple-700', 
                      bg: 'bg-purple-50/50 dark:bg-purple-950/20',
                      icon: 'text-purple-600 dark:text-purple-400'
                    },
                    blue: { 
                      border: 'border-blue-300 dark:border-blue-700', 
                      bg: 'bg-blue-50/50 dark:bg-blue-950/20',
                      icon: 'text-blue-600 dark:text-blue-400'
                    },
                    indigo: { 
                      border: 'border-indigo-300 dark:border-indigo-700', 
                      bg: 'bg-indigo-50/50 dark:bg-indigo-950/20',
                      icon: 'text-indigo-600 dark:text-indigo-400'
                    },
                    emerald: { 
                      border: 'border-emerald-300 dark:border-emerald-700', 
                      bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
                      icon: 'text-emerald-600 dark:text-emerald-400'
                    },
                    amber: { 
                      border: 'border-amber-300 dark:border-amber-700', 
                      bg: 'bg-amber-50/50 dark:bg-amber-950/20',
                      icon: 'text-amber-600 dark:text-amber-400'
                    },
                    cyan: { 
                      border: 'border-cyan-300 dark:border-cyan-700', 
                      bg: 'bg-cyan-50/50 dark:bg-cyan-950/20',
                      icon: 'text-cyan-600 dark:text-cyan-400'
                    },
                  }
                  
                  const colors = colorClasses[node.color] || colorClasses.blue
                  
                  // Check if this node has branches (multiple nodes at same X position)
                  const nodesAtSameX = currentWorkflow.filter(n => n.x === node.x && n.id !== node.id)
                  const isBranchNode = nodesAtSameX.length > 0
                  
                  return (
                    <div key={node.id} className="flex items-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ 
                          opacity: 1, 
                          scale: isActive ? 1.02 : 1
                        }}
                        transition={{ 
                          delay: index * 0.06,
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="relative"
                        onClick={() => setActiveNode(isActive ? null : node.id)}
                      >
                        {/* Clean Minimalist Node Card - Dashed Border Style */}
                        <div
                          className={`
                            relative w-[160px] p-4 rounded-lg border-2 border-dashed cursor-pointer transition-all
                            bg-white dark:bg-zinc-900
                            ${colors.border}
                            ${colors.bg}
                            ${isActive ? 'shadow-md' : 'shadow-sm'}
                            ${isExecuted ? 'ring-1 ring-emerald-500/40' : ''}
                            hover:shadow-md
                          `}
                        >
                          {/* Icon Container - Minimalist */}
                          <div className="mb-2.5 flex items-center gap-2">
                            <div className={`w-9 h-9 rounded flex items-center justify-center ${colors.bg}`}>
                              <node.icon className={`w-4.5 h-4.5 ${colors.icon}`} />
                            </div>
                            {node.type === 'n8n' && (
                              <div className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                                n8n
                              </div>
                            )}
                            {node.type === 'agent' && (
                              <div className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                                Chatty
                              </div>
                            )}
                          </div>

                          {/* Node Label - Clean Typography */}
                          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5 leading-tight">
                            {node.label}
                          </div>
                          <div className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                            {node.sublabel}
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Arrow Connector - Only show if not last node and not a branch */}
                      {index < currentWorkflow.length - 1 && !isBranchNode && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.06 + 0.1 }}
                          className="flex-shrink-0 mx-2"
                        >
                          <ArrowRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600" />
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Control Panel */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <motion.button
                  type="button"
                  onClick={runWorkflow}
                  disabled={isRunning}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                    isRunning
                      ? 'bg-amber-600 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  }`}
                >
                  {isRunning ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </motion.div>
                      <span>Running...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Run Workflow</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* n8n Integration Info */}
            <AnimatePresence>
              {showN8nConnection && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
                      <Link2 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        Seamless n8n Integration
                      </h3>
                      <p className="text-[var(--text-secondary)] mb-4">
                        Chatty Agents integrate seamlessly with n8n workflows. Use n8n's powerful automation capabilities alongside Chatty's AI agents for complete workflow orchestration.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Native n8n node support</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Bidirectional data flow</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Shared workflow canvas</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Unified execution engine</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </ScrollReveal>

      {/* Conceptual Model - Model = Brain, Agent = Executing Arms */}
      <ScrollReveal delay={0.1}>
        <section className="relative py-16 sm:py-20 bg-[var(--bg-primary)] border-t border-[var(--border-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Bot className="w-4 h-4" />
                <span>Conceptual Model</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-4">
                Model = Brain, Agent = Executing Arms
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                The AI model provides intelligence and decision-making. Agents execute actions across your systems.
              </p>
            </div>

            {/* Enterprise Example Visualization */}
            <div className="bg-[var(--bg-card)] border-2 border-[var(--border-primary)] rounded-3xl p-8 lg:p-12 mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left: Visual Flow with Data Connection */}
                <div className="space-y-6">
                  {/* Model (Brain) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border-2 border-purple-500/30"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl bg-purple-500/20 border-2 border-purple-500/40 flex items-center justify-center"
                    >
                      <Brain className="w-8 h-8 text-purple-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">Model (Brain)</h3>
                      <p className="text-sm text-[var(--text-muted)]">Analyzes, understands, makes decisions</p>
                    </div>
                  </motion.div>
                  
                  {/* Connection Arrow with Data Flow - Clean Minimalist Design */}
                  <div className="flex flex-col items-center justify-center relative py-6 lg:py-4">
                    {/* Arrow Icon */}
                    <motion.div
                      animate={{ 
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="mb-2 lg:mb-0"
                    >
                      <ArrowRight className="w-6 h-6 text-purple-400 dark:text-purple-500 rotate-90 lg:rotate-0" />
                    </motion.div>
                    {/* Data Flow Label */}
                    <motion.div
                      className="px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50"
                      animate={{ 
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <span className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Data Flow</span>
                    </motion.div>
                  </div>

                  {/* Agent (Executing Arms) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border-2 border-blue-500/30"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        x: [0, 3, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center"
                    >
                      <Bot className="w-8 h-8 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">Agent (Executing Arms)</h3>
                      <p className="text-sm text-[var(--text-muted)]">Executes actions, connects to systems</p>
                    </div>
                  </motion.div>

                  {/* Connection to Organizational Data */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30"
                  >
                    <Database className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-medium text-[var(--text-primary)]">Connected to Organizational Data</span>
                  </motion.div>
                </div>

                {/* Right: Enterprise Example - Resume Processing */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">Enterprise Example: Resume Processing System</h4>
                  <div className="space-y-3">
                    {/* Model (Brain) Actions */}
                    <div className="mb-4 pb-4 border-b border-[var(--border-primary)]">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-bold text-purple-400">Model (Brain) - Thinking & Analysis</span>
                      </div>
                      <div className="space-y-2 pl-7">
                        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          Analyzes resume content & extracts skills
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          Matches candidates to job requirements
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          Maintains enriched CV database
                        </div>
                      </div>
                    </div>

                    {/* Agent (Executing Arms) Actions */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Bot className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-bold text-blue-400">Agent (Executing Arms) - Actions</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { action: 'Monitors folder for new resumes', icon: Folder, color: 'blue' },
                          { action: 'Pushes data to model database', icon: Database, color: 'emerald' },
                          { action: 'Sends email via agent execution', icon: Send, color: 'cyan' },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-primary)]"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/20 border border-${item.color}-500/40 flex items-center justify-center`}>
                              <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                            </div>
                            <span className="text-sm font-medium text-[var(--text-primary)]">{item.action}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How Chatty Agents Work */}
      <ScrollReveal delay={0.15}>
        <section className="relative py-16 sm:py-20 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-4">
                How Chatty Agents Work
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Intelligent agents that understand context, make decisions, and execute workflows autonomously
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Trigger Events',
                  description: 'Agents respond to webhooks, schedules, or system events. n8n workflows can trigger Chatty agents seamlessly.',
                  icon: Webhook,
                  color: 'purple',
                },
                {
                  step: '2',
                  title: 'AI Processing',
                  description: 'Chatty agents analyze context, make intelligent decisions, and determine the best course of action using AI.',
                  icon: Bot,
                  color: 'blue',
                },
                {
                  step: '3',
                  title: 'Execute Actions',
                  description: 'Agents execute actions across your systems - databases, APIs, n8n workflows, and more - all orchestrated intelligently.',
                  icon: Zap,
                  color: 'emerald',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-purple-500/40 transition-all group"
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    item.color === 'purple' ? 'bg-purple-500/20 border border-purple-500/40' :
                    item.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/40' :
                    'bg-emerald-500/20 border border-emerald-500/40'
                  }`}>
                    <item.icon className={`w-8 h-8 ${
                      item.color === 'purple' ? 'text-purple-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      'text-emerald-400'
                    }`} />
                  </div>
                  <div className={`text-4xl font-bold mb-4 ${
                    item.color === 'purple' ? 'text-purple-400' :
                    item.color === 'blue' ? 'text-blue-400' :
                    'text-emerald-400'
                  }`}>{item.step}</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Enterprise Features */}
      <ScrollReveal delay={0.15}>
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-surface)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Shield className="w-4 h-4" />
                <span>Enterprise Grade</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-4">
                Built for Enterprise Scale
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Security & Compliance', description: 'Full audit trails, role-based access, and enterprise security standards.' },
                { icon: Server, title: 'On-Premise Deployment', description: 'Deploy agents on your infrastructure with complete data sovereignty.' },
                { icon: Activity, title: 'Monitoring & Observability', description: 'Real-time monitoring, logging, and performance analytics.' },
                { icon: GitBranch, title: 'Version Control', description: 'Track workflow changes, rollback capabilities, and team collaboration.' },
                { icon: Settings, title: 'Error Handling', description: 'Automatic retries, error recovery, and intelligent failure handling.' },
                { icon: Lock, title: 'Data Privacy', description: 'End-to-end encryption and compliance with GDPR, HIPAA, and SOC 2.' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-purple-500/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
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

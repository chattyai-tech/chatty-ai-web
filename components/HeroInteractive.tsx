'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { FC } from 'react'
import {
  ArrowRight, Plus, MoreHorizontal, ChevronDown, Settings, Code, Check, 
  Loader2, Shield, Zap, Lock, Play, Pause, Database, Bot, FileText, MessageSquare,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'
import { BrandLogo } from './BrandLogo'
import { 
  DEMO_SCENARIO, SUGGESTIONS, TABLE_DATA, CHART_DATA, SQL_QUERY, 
  MODELING_TABLES, MODELING_RELATIONSHIPS, WORKFLOW_NODES, WORKFLOW_EDGES, WORD_PERSONAS 
} from '@/lib/constants'
import { ChatInterface } from './ChatInterface'
import { DataModelingView } from './DataModelingView'
import { WorkflowView } from './WorkflowView'
import { IntegrationView } from './IntegrationView'
import { ChartView } from './ChartView'

type ViewMode = 'idle' | 'typing' | 'thinking' | 'streaming' | 'complete'
type ActiveView = 'dashboard' | 'analysis' | 'modeling' | 'workflow' | 'integration' | 'chat'
type AutoplayState = 'autoplay' | 'interactive'

// Dashboard Icon
const DashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export const HeroInteractive: FC = () => {
  const [viewState, setViewState] = useState<ViewMode>('idle')
  const [typedQuery, setTypedQuery] = useState("")
  const [streamedResponse, setStreamedResponse] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState<'answer' | 'sql' | 'chart'>('answer')
  const [showTable, setShowTable] = useState(false)
  const [threadCount, setThreadCount] = useState(0)
  const [motionEnabled, setMotionEnabled] = useState(false)
  const [autoplayState, setAutoplayState] = useState<AutoplayState>('autoplay')
  const [activeView, setActiveView] = useState<ActiveView>('dashboard')
  const [currentDemoStep, setCurrentDemoStep] = useState(0)
  
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null)
  const isMounted = useRef(true)

  // Demo sequence for autoplay
  const demoSequence = [
    { view: 'dashboard' as ActiveView, duration: 3000 },
    { view: 'analysis' as ActiveView, duration: 4000 },
    { view: 'modeling' as ActiveView, duration: 3000 },
    { view: 'workflow' as ActiveView, duration: 3000 },
    { view: 'integration' as ActiveView, duration: 3000 },
    { view: 'chat' as ActiveView, duration: 4000 },
  ]

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  // Check motion preferences
  useEffect(() => {
    const mqReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const mqMobile = window.matchMedia?.('(max-width: 768px)')
    const update = () => setMotionEnabled(!(mqReduce?.matches || mqMobile?.matches))
    update()
    mqReduce?.addEventListener?.('change', update)
    mqMobile?.addEventListener?.('change', update)
    return () => {
      mqReduce?.removeEventListener?.('change', update)
      mqMobile?.removeEventListener?.('change', update)
    }
  }, [])

  // Run typing simulation
  const runTypingSimulation = async () => {
    const checkShouldContinue = () => isMounted.current && autoplayState === 'autoplay'
    
    setViewState('typing')
    setTypedQuery("")
    setStreamedResponse("")
    setShowResults(false)
    setShowTable(false)
    setActiveTab('answer')
    setThreadCount(1)

    // Type query
    for (let i = 0; i < DEMO_SCENARIO.query.length; i++) {
      if (!checkShouldContinue()) return
      setTypedQuery(prev => prev + DEMO_SCENARIO.query[i])
      await wait(22)
    }
    await wait(400)

    // Thinking state
    if (!checkShouldContinue()) return
    setViewState('thinking')
    await wait(900)

    // Stream response
    if (!checkShouldContinue()) return
    setViewState('streaming')
    const words = DEMO_SCENARIO.response.intro.split(/(\s+)/)
    let text = ""
    for (const word of words) {
      if (!checkShouldContinue()) return
      text += word
      setStreamedResponse(text)
      await wait(16)
    }

    await wait(250)
    if (!checkShouldContinue()) return
    setShowResults(true)
    await wait(350)
    if (!checkShouldContinue()) return
    setShowTable(true)
    setViewState('complete')
  }

  // Autoplay cycling
  const startAutoplay = useCallback(() => {
    if (autoplayInterval.current) clearInterval(autoplayInterval.current)
    
    autoplayInterval.current = setInterval(() => {
      if (autoplayState !== 'autoplay') return
      
      setCurrentDemoStep((prev) => {
        const next = (prev + 1) % demoSequence.length
        setActiveView(demoSequence[next].view)
        
        // Run typing simulation when returning to dashboard
        if (demoSequence[next].view === 'dashboard') {
          runTypingSimulation()
        }
        
        return next
      })
    }, demoSequence[currentDemoStep].duration)
  }, [autoplayState, currentDemoStep])

  useEffect(() => {
    if (autoplayState === 'autoplay' && motionEnabled) {
      runTypingSimulation()
      startAutoplay()
    } else {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current)
        autoplayInterval.current = null
      }
    }

    return () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current)
      }
    }
  }, [autoplayState, motionEnabled, startAutoplay])

  // Handle user interaction - switch to interactive mode
  const handleUserInteraction = () => {
    if (autoplayState === 'autoplay') {
      setAutoplayState('interactive')
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current)
        autoplayInterval.current = null
      }
    }
  }

  // Toggle autoplay
  const toggleAutoplay = () => {
    if (autoplayState === 'autoplay') {
      setAutoplayState('interactive')
    } else {
      setAutoplayState('autoplay')
      setCurrentDemoStep(0)
      setActiveView('dashboard')
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current)
      }
    }
  }, [])

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="h-full flex flex-col">
            {viewState === 'idle' && (
              <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10 md:py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-white text-2xl sm:text-3xl font-bold">C</span>
                </div>
                <h2 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--text-primary)] text-center">Know more about your data</h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 sm:mb-8 text-center">Try asking...</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.category}
                      onClick={handleUserInteraction}
                      className="group p-4 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--border-accent)] hover:shadow-sm text-left transition-all"
                    >
                      <span className="inline-block px-2 py-1 rounded-full text-[10px] font-medium bg-[var(--bg-elevated)] text-[var(--text-muted)] mb-2">
                        {s.category}
                      </span>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {viewState !== 'idle' && (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <span className="text-purple-400 text-xs sm:text-sm">Q</span>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium pt-0.5 sm:pt-1">{typedQuery}</p>
                </div>

                <div className="border border-[var(--border-primary)] rounded-lg sm:rounded-xl overflow-hidden bg-[var(--bg-card)]">
                  <div className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 border-b border-[var(--border-primary)] bg-[var(--bg-elevated)] overflow-x-auto">
                    <button
                      onClick={() => setActiveTab('answer')}
                      className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'answer' ? 'bg-purple-500/20 text-purple-600' : 'text-[var(--text-muted)] hover:text-purple-600'}`}
                    >
                      {viewState === 'complete' && <Check size={12} />}
                      Answer
                    </button>
                    <button
                      onClick={() => setActiveTab('sql')}
                      className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'sql' ? 'bg-purple-500/20 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                    >
                      <Code size={12} />
                      View SQL
                    </button>
                    <button
                      onClick={() => setActiveTab('chart')}
                      className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'chart' ? 'bg-purple-500/20 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                    >
                      <BarChart3 size={12} />
                      Chart
                    </button>
                  </div>

                  <div className="p-3 sm:p-5">
                    {viewState === 'thinking' && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                        <Loader2 size={14} className="animate-spin text-purple-500" />
                        <span>Analyzing your data...</span>
                      </div>
                    )}

                    {viewState !== 'thinking' && activeTab === 'answer' && (
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-end">
                          <button 
                            onClick={handleUserInteraction}
                            className="flex items-center gap-1 text-xs sm:text-sm text-purple-600 hover:text-purple-700"
                          >
                            Adjust the answer
                            <ChevronDown size={12} />
                          </button>
                        </div>

                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{streamedResponse}</p>

                        {showResults && (
                          <ul className="space-y-1 sm:space-y-1.5 pl-1">
                            {DEMO_SCENARIO.response.results.slice(0, 3).map((item, i) => (
                              <li key={i} className="flex items-baseline gap-1.5 sm:gap-2 text-xs sm:text-sm">
                                <span className="text-purple-500">•</span>
                                <span><strong className="text-[var(--text-primary)]">{item.title}:</strong> <span className="text-[var(--text-muted)]">${item.salary.toLocaleString()}</span></span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {showTable && (
                          <div className="mt-3 sm:mt-4 border border-[var(--border-primary)] rounded-lg overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm min-w-[280px]">
                              <thead>
                                <tr className="bg-[var(--bg-elevated)] border-b border-[var(--border-primary)]">
                                  <th className="text-left px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-[var(--text-muted)]">title</th>
                                  <th className="text-left px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-[var(--text-muted)]">average_salary</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[var(--border-primary)]">
                                {DEMO_SCENARIO.response.results.slice(0, 3).map((row, i) => (
                                  <tr key={i} className="hover:bg-[var(--bg-elevated)]">
                                    <td className="px-3 sm:px-4 py-1.5 sm:py-2 text-[var(--text-secondary)]">{row.title}</td>
                                    <td className="px-3 sm:px-4 py-1.5 sm:py-2 text-[var(--text-muted)] font-mono text-[10px] sm:text-xs">{row.salary}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    )}

                    {viewState !== 'thinking' && activeTab === 'sql' && (
                      <div className="rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-primary)] p-3 sm:p-4 overflow-x-auto">
                        <pre className="text-xs sm:text-sm font-mono text-[var(--text-primary)]">
                          <code>{SQL_QUERY}</code>
                        </pre>
                      </div>
                    )}

                    {viewState !== 'thinking' && activeTab === 'chart' && (
                      <ChartView data={CHART_DATA} />
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="p-3 sm:p-4 border-t border-[var(--border-primary)] bg-[var(--bg-card)]">
              <div className="max-w-2xl mx-auto flex items-center gap-2 sm:gap-3">
                <input
                  type="text"
                  placeholder={viewState === 'idle' ? "Ask to explore your data" : "Ask follow-up questions..."}
                  onClick={handleUserInteraction}
                  className="flex-1 h-9 sm:h-11 px-3 sm:px-4 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-disabled)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
                />
                <button 
                  onClick={handleUserInteraction}
                  className="min-h-[44px] min-w-[60px] h-9 sm:h-11 px-4 sm:px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-all touch-manipulation"
                >
                  Ask
                </button>
              </div>
            </div>
          </div>
        )

      case 'modeling':
        return <DataModelingView tables={MODELING_TABLES} relationships={MODELING_RELATIONSHIPS} />

      case 'workflow':
        return <WorkflowView nodes={WORKFLOW_NODES} edges={WORKFLOW_EDGES} />

      case 'integration':
        return <IntegrationView personas={WORD_PERSONAS} />

      case 'chat':
        return <ChatInterface />

      default:
        return null
    }
  }

  return (
    <section className="relative min-h-[100vh] sm:min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-28">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">
        {/* Security Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-primary)] text-xs text-[var(--text-muted)]">
            <Shield className="w-3 h-3" />
            <span>SOC 2 Type II</span>
            <span className="text-[var(--border-primary)]">•</span>
            <span>On-Premise</span>
            <span className="text-[var(--border-primary)]">•</span>
            <span>Zero Trust</span>
          </div>
        </div>

        {/* Headline */}
        <header className="text-center mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-5 leading-[1.1]">
            <span className="text-[var(--text-primary)]">One clear answer to all your company knowledge.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-normal">
            Enterprise AI platform that connects to all organizational data sources for secure, internal search and workflow automation.
          </p>
        </header>

        {/* CTA */}
        <div className="flex justify-center mb-8 sm:mb-10 px-4">
          <Link
            href="/demo"
            className="min-h-[44px] min-w-[140px] h-12 sm:h-13 px-6 sm:px-8 md:px-10 inline-flex items-center justify-center text-base sm:text-lg font-medium bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] hover:bg-[var(--cta-primary-hover)] rounded-lg transition-colors duration-200 touch-manipulation"
          >
            Book a Demo
          </Link>
        </div>

        {/* Product Interface */}
        <div className="mb-8 sm:mb-12 md:mb-16 w-full relative z-10 overflow-hidden">
          <div className="relative mx-auto max-w-5xl w-full px-2 sm:px-0 isolate overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-500/8 via-violet-500/8 to-indigo-500/8 rounded-xl sm:rounded-2xl blur-2xl pointer-events-none" />

            {/* Main Container */}
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] shadow-lg w-full isolate">
              {/* Header Bar */}
              <div className="h-10 sm:h-12 bg-[#2a2a2a] flex items-center justify-between px-3 sm:px-4 w-full relative z-10 border-b border-gray-700">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-6 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                    <BrandLogo size={18} className="h-5 w-auto" variant="hero" />
                    <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">Chatty AI</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Autoplay Toggle */}
                  <button
                    onClick={toggleAutoplay}
                    className={`flex items-center gap-1.5 h-5 sm:h-6 px-2 sm:px-2.5 rounded text-[10px] sm:text-xs font-medium transition-all ${
                      autoplayState === 'autoplay' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}
                  >
                    {autoplayState === 'autoplay' ? <Play size={8} /> : <Pause size={8} />}
                    {autoplayState === 'autoplay' ? 'Autoplay' : 'Interactive'}
                  </button>

                  {viewState !== 'idle' && (
                    <div className="hidden sm:flex items-center gap-2 sm:gap-3 ml-2 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-400"></span>
                        <span className="text-gray-400 text-[10px] sm:text-xs">Synced</span>
                      </div>
                      <button className="h-5 sm:h-6 px-2 sm:px-2.5 rounded bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] text-[10px] sm:text-xs font-medium hover:bg-[var(--cta-primary-hover)] whitespace-nowrap">Deploy</button>
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex overflow-hidden w-full relative isolate" style={{ minHeight: 'clamp(280px, 40vh, 500px)', maxHeight: 'clamp(400px, 70vh, 600px)' }}>
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-[180px] xl:w-[200px] border-r border-[var(--border-primary)] bg-[var(--bg-elevated)] shrink-0 relative z-0 overflow-hidden">
                  <div className="p-2.5 sm:p-3 border-b border-[var(--border-primary)]">
                    <button className="flex items-center gap-2 w-full px-2 py-1.5 rounded-lg hover:bg-gray-200 text-left text-gray-700">
                      <DashboardIcon />
                      <span className="text-xs sm:text-sm font-medium">Dashboard</span>
                    </button>
                  </div>

                  <div className="flex-1 p-2.5 sm:p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-700">Views</span>
                    </div>
                    <div className="space-y-1">
                      {[
                        { id: 'dashboard', label: 'Analysis', icon: BarChart3 },
                        { id: 'modeling', label: 'Data Model', icon: Database },
                        { id: 'workflow', label: 'Workflow', icon: Bot },
                        { id: 'integration', label: 'Integration', icon: FileText },
                        { id: 'chat', label: 'Chat', icon: MessageSquare },
                      ].map((view) => (
                        <button
                          key={view.id}
                          onClick={() => { setActiveView(view.id as ActiveView); handleUserInteraction(); }}
                          className={`group flex items-center justify-between px-2 py-1.5 rounded-lg cursor-pointer transition-colors w-full ${
                            activeView === view.id 
                              ? 'bg-white border border-gray-200' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <view.icon className="w-3 h-3 text-gray-600" />
                            <span className="text-[10px] sm:text-xs text-gray-700 truncate">{view.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 border-t border-[var(--border-primary)]">
                    <button className="flex items-center gap-2 w-full px-2 py-1.5 rounded-lg hover:bg-gray-200 text-left">
                      <Settings size={14} className="text-gray-600" />
                      <span className="text-xs sm:text-sm text-gray-600">Settings</span>
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col bg-[var(--bg-card)] min-w-0 w-full relative z-0 overflow-hidden">
                  {renderMainContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


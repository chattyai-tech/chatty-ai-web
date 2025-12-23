'use client'

import { useState, useEffect } from 'react'
import type { FC } from 'react'
import {
  ArrowRight,
  Plus, MoreHorizontal,
  ChevronDown, Settings,
  Code, Check, Loader2, Shield, Zap, Lock
} from 'lucide-react'
import Link from 'next/link'
import { BrandLogo } from './BrandLogo'

// ===== DATA =====
const DEMO_SCENARIO = {
  query: "What is the average salary for each position?",
  steps: 3,
  response: {
    intro: "To find the average salary for each position, we analyzed the latest salary data for employees based on their job titles. Here are the average salaries for some of the positions:",
    results: [
      { title: "Staff", salary: "$65,841.37", raw: "65841.37341048894" },
      { title: "Manager", salary: "$77,723.67", raw: "77723.67" },
      { title: "Senior Engineer", salary: "$69,782.33", raw: "69782.3329923169" },
      { title: "Senior Staff", salary: "$79,731.68", raw: "79731.67692738514" },
      { title: "Assistant Engineer", salary: "$55,893.86", raw: "55893.86" },
    ],
    followUp: "There are more positions with their average salaries, but these are the top examples."
  }
};

const SUGGESTIONS = [
  { category: "Aggregation", text: "What is the average salary for each position?" },
  { category: "Comparison", text: "Compare the average salary of male and female employees in each department." },
  { category: "Associating", text: "What are the names of the managers and the departments they manage?" },
];

// Dashboard Icon
const DashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const Hero: FC = () => {
  const [viewState, setViewState] = useState<'idle' | 'typing' | 'thinking' | 'streaming' | 'complete'>('idle');
  const [typedQuery, setTypedQuery] = useState("");
  const [streamedResponse, setStreamedResponse] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<'answer' | 'sql' | 'chart'>('answer');
  const [showTable, setShowTable] = useState(false);
  const [threadCount, setThreadCount] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(false); // Start as false to prevent flash of invisible content

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

  useEffect(() => {
    let isMounted = true;
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const runSimulation = async () => {
      // On mobile / reduced motion: keep the interface calm and static.
      if (!motionEnabled) {
        setViewState('complete')
        setTypedQuery(DEMO_SCENARIO.query)
        setStreamedResponse(DEMO_SCENARIO.response.intro)
        setShowResults(true)
        setShowTable(true)
        setActiveTab('answer')
        setThreadCount(1)
        return
      }

      // Desktop: run once (no endless looping) to avoid a "robotic" feel.
      setViewState('idle');
      setTypedQuery("");
      setStreamedResponse("");
      setShowResults(false);
      setShowTable(false);
      setActiveTab('answer');
      setThreadCount(0);
      await wait(1200);

      setViewState('typing');
      setThreadCount(1);
      for (let i = 0; i < DEMO_SCENARIO.query.length; i++) {
        if (!isMounted) return;
        setTypedQuery(prev => prev + DEMO_SCENARIO.query[i]);
        await wait(22);
      }
      await wait(400);

      setViewState('thinking');
      await wait(900);

      setViewState('streaming');
      const words = DEMO_SCENARIO.response.intro.split(/(\s+)/);
      let text = "";
      for (const word of words) {
        if (!isMounted) return;
        text += word;
        setStreamedResponse(text);
        await wait(16);
      }

      await wait(250);
      setShowResults(true);
      await wait(350);
      setShowTable(true);
      setViewState('complete');
    };

    runSimulation();
    return () => { isMounted = false; };
  }, [motionEnabled]);

  return (
    <section className="relative min-h-[100vh] sm:min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-28">

      {/* ===== DECORATIVE BACKGROUND - Subtle, Quiet ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Single subtle gradient orb - Responsive sizing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />

        {/* Very subtle grid pattern - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">

        {/* ===== SECURITY BADGE - Understated, Factual ===== */}
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

        {/* ===== HEADLINE - ONE Clear Primary Message ===== */}
        <header className="text-center mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-5 leading-[1.1]">
            <span className="text-[var(--text-primary)]">One clear answer to all your company knowledge.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-normal">
            Enterprise AI platform that connects to all organizational data sources for secure, internal search and workflow automation.
          </p>
        </header>

        {/* ===== SINGLE PRIMARY CTA ===== */}
        <div className="flex justify-center mb-8 sm:mb-10 px-4">
          <Link
            href="/demo"
            className="min-h-[44px] min-w-[140px] h-12 sm:h-13 px-6 sm:px-8 md:px-10 inline-flex items-center justify-center text-base sm:text-lg font-medium bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] hover:bg-[var(--cta-primary-hover)] rounded-lg transition-colors duration-200 touch-manipulation"
          >
            Book a Demo
          </Link>
        </div>

        {/* ===== PRODUCT INTERFACE - Responsive ===== */}
        <div className="mb-8 sm:mb-12 md:mb-16 w-full relative z-10 overflow-hidden">
          <div className="relative mx-auto max-w-5xl w-full px-2 sm:px-0 isolate overflow-hidden">
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-500/8 via-violet-500/8 to-indigo-500/8 rounded-xl sm:rounded-2xl blur-2xl pointer-events-none" />

            {/* Main Container - Product Interface Demo */}
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] shadow-lg w-full isolate" style={{ textAlign: 'left', contain: 'layout style paint' }}>

              {/* Header Bar - Dark Gray - Properly contained */}
              <div className="h-10 sm:h-12 bg-[var(--bg-header)] flex items-center justify-between px-3 sm:px-4 w-full relative z-10 border-b border-gray-700">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-6 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                    <BrandLogo size={18} className="h-5 w-auto" variant="hero" />
                    <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">Chatty AI</span>
                  </div>
                  <nav className="hidden md:flex items-center gap-1 shrink-0">
                    <button className="h-6 sm:h-7 px-2 sm:px-3 rounded-md bg-[#3a3a3a] text-white text-xs sm:text-sm font-medium">Home</button>
                    <button className="h-6 sm:h-7 px-2 sm:px-3 text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Modeling</button>
                  </nav>
                </div>
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

              {/* Body - Responsive height - Properly contained */}
              <div className="flex overflow-hidden w-full relative isolate" style={{ minHeight: 'clamp(280px, 40vh, 500px)', maxHeight: 'clamp(400px, 70vh, 600px)', contain: 'layout style paint' }}>

                {/* Sidebar - Light Gray Background - Properly contained */}
                <div className="hidden lg:flex flex-col w-[180px] xl:w-[200px] border-r border-[var(--border-primary)] bg-[var(--bg-elevated)] shrink-0 relative z-0 overflow-hidden">
                  <div className="p-2.5 sm:p-3 border-b border-[var(--border-primary)]">
                    <button className="flex items-center gap-2 w-full px-2 py-1.5 rounded-lg hover:bg-[var(--bg-hover)] text-left text-[var(--text-secondary)]">
                      <DashboardIcon />
                      <span className="text-xs sm:text-sm font-medium">Dashboard</span>
                    </button>
                  </div>

                  <div className="flex-1 p-2.5 sm:p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-[var(--text-secondary)]">Threads ({threadCount})</span>
                      <button className="flex items-center gap-1 h-5 sm:h-6 px-1.5 sm:px-2 rounded bg-[var(--bg-card)] border border-[var(--border-primary)] text-[9px] sm:text-[11px] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]">
                        <Plus size={8} />New
                      </button>
                    </div>
                    {threadCount === 0 ? (
                      <p className="text-[10px] sm:text-xs text-[var(--text-muted)]">No threads</p>
                    ) : (
                      <div className="group flex items-center justify-between px-2 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-primary)] cursor-pointer hover:bg-[var(--bg-hover)]">
                        <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] truncate pr-2">What is the average salary...</span>
                        <MoreHorizontal size={10} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100" />
                      </div>
                    )}
                  </div>

                  <div className="p-2.5 sm:p-3 border-t border-[var(--border-primary)]">
                    <button className="flex items-center gap-2 w-full px-2 py-1.5 rounded-lg hover:bg-[var(--bg-hover)] text-left">
                      <Settings size={14} className="text-[var(--text-muted)]" />
                      <span className="text-xs sm:text-sm text-[var(--text-muted)]">Settings</span>
                    </button>
                  </div>
                </div>

                {/* Main Content - White Background - Properly contained */}
                <div className="flex-1 flex flex-col bg-[var(--bg-card)] min-w-0 w-full relative z-0 overflow-hidden">
                  <div className="flex-1 overflow-y-auto overflow-x-hidden w-full relative" style={{ contain: 'layout style' }}>

                    {/* Idle State - Responsive */}
                    {viewState === 'idle' && (
                      <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10 md:py-12">
                        {/* Large Logo - Black Circle with White C - Proper spacing from header */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center mb-4 sm:mb-6 relative z-0">
                          <span className="text-white text-2xl sm:text-3xl font-bold">C</span>
                        </div>
                        <h2 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--text-primary)] text-center">Know more about your data</h2>
                        <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 sm:mb-8 text-center">Try asking...</p>

                        {/* Suggestion Cards - Exact Match from Screenshots */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl">
                          {SUGGESTIONS.map((s) => (
                            <button
                              key={s.category}
                              className="group p-4 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--border-accent)] hover:shadow-sm text-left transition-all"
                              style={{ textAlign: 'left' }}
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

                    {/* Active State - Responsive */}
                    {viewState !== 'idle' && (
                      <div className="p-4 sm:p-6" style={{ textAlign: 'left' }}>
                        {/* Question */}
                        <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                            <span className="text-purple-400 text-xs sm:text-sm">Q</span>
                          </div>
                          <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium pt-0.5 sm:pt-1">{typedQuery}</p>
                        </div>

                        {/* Tabs */}
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
                              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'sql' ? 'bg-purple-500/20 text-purple-600' : 'text-[var(--text-muted)] hover:text-purple-600'}`}
                            >
                              <Code size={12} />
                              View SQL
                            </button>
                          </div>

                          <div className="p-3 sm:p-5" style={{ textAlign: 'left' }}>
                            {viewState === 'thinking' && (
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                                <Loader2 size={14} className="animate-spin text-purple-500" />
                                <span>Analyzing your data...</span>
                              </div>
                            )}

                            {viewState !== 'thinking' && activeTab === 'answer' && (
                              <div className="space-y-3 sm:space-y-4">
                                <div className="flex justify-end">
                                  <button className="flex items-center gap-1 text-xs sm:text-sm text-purple-600 hover:text-purple-700">
                                    Adjust the answer
                                    <ChevronDown size={12} />
                                  </button>
                                </div>

                                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{streamedResponse}</p>

                                {showResults && (
                                  <ul className="space-y-1 sm:space-y-1.5 pl-1" style={{ textAlign: 'left' }}>
                                    {DEMO_SCENARIO.response.results.slice(0, 3).map((item, i) => (
                                      <li key={i} className="flex items-baseline gap-1.5 sm:gap-2 text-xs sm:text-sm">
                                        <span className="text-purple-500">•</span>
                                        <span><strong className="text-[var(--text-primary)]">{item.title}:</strong> <span className="text-[var(--text-muted)]">{item.salary}</span></span>
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
                                            <td className="px-3 sm:px-4 py-1.5 sm:py-2 text-[var(--text-muted)] font-mono text-[10px] sm:text-xs">{row.raw}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                )}
                              </div>
                            )}

                            {viewState !== 'thinking' && activeTab === 'sql' && (
                              <div className="rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-primary)] p-3 sm:p-4 overflow-x-auto" style={{ textAlign: 'left' }}>
                                <pre className="text-xs sm:text-sm font-mono text-[var(--text-primary)]">
                                  <code>{`SELECT title, AVG(salary) as average_salary
FROM employees e
JOIN salaries s ON e.emp_no = s.emp_no
GROUP BY title
ORDER BY average_salary DESC;`}</code>
                                </pre>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Bar - Responsive - Exact Match from Screenshots */}
                  <div className="p-3 sm:p-4 border-t border-[var(--border-primary)] bg-[var(--bg-card)]">
                    <div className="max-w-2xl mx-auto flex items-center gap-2 sm:gap-3">
                      <input
                        type="text"
                        placeholder={viewState === 'idle' ? "Ask to explore your data" : "Ask follow-up questions..."}
                        className="flex-1 h-9 sm:h-11 px-3 sm:px-4 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-disabled)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
                        style={{ textAlign: 'left' }}
                      />
                      <button className="min-h-[44px] min-w-[60px] h-9 sm:h-11 px-4 sm:px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-all touch-manipulation">
                        Ask
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== STATS - Responsive ===== */}
        {/* (Intentionally removed additional hero blocks to keep a single, clear primary message) */}
      </div>
    </section>
  );
};

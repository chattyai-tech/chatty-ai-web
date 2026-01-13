'use client';

import type React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  RotateCw,
  CheckCircle2,
  ChevronDown,
  PanelLeftClose,
  Share,
} from 'lucide-react';

import { DashboardView } from './components/views/Dashboard';
import { ModelingView } from './components/views/Modeling';
import { WorkflowView } from './components/views/Workflow';
import { DocumentView } from './components/views/Document';
import { Sidebar } from './components/Sidebar';
import type { AppState } from './types';
import { ViewType } from './types';
import { BrandLogo } from '../BrandLogo';

// Initial State
const INITIAL_STATE: AppState = {
  currentView: ViewType.DASHBOARD,
  isAutoplay: true,
  searchQuery: '',
  isTyping: false,
  stepIndex: 0,
  showResults: false,
};

// Script definition for the Autoplay
const SCRIPT_STEPS = [
  // 0: Dashboard - Wait
  { view: ViewType.DASHBOARD, action: 'wait', duration: 1500 },
  // 1: Dashboard - Type Query
  {
    view: ViewType.DASHBOARD,
    action: 'type',
    text: 'What is the average salary for each position?',
    duration: 2000,
  },
  // 2: Dashboard - Search Trigger (Transition to results)
  {
    view: ViewType.DASHBOARD,
    action: 'navigate',
    target: ViewType.ANALYSIS,
    duration: 1000,
  },
  // 3: Analysis - View Data (Allow time for chart animation)
  { view: ViewType.ANALYSIS, action: 'wait', duration: 4000 },
  // 4: Analysis - Navigate to Model
  {
    view: ViewType.ANALYSIS,
    action: 'navigate',
    target: ViewType.MODELING,
    duration: 800,
  },
  // 5: Modeling - Move Node (Simulated in component)
  { view: ViewType.MODELING, action: 'wait', duration: 3000 },
  // 6: Modeling - Navigate to Workflow (Knowledge)
  {
    view: ViewType.MODELING,
    action: 'navigate',
    target: ViewType.WORKFLOW,
    duration: 800,
  },
  // 7: Workflow - Process (Simulated in component)
  { view: ViewType.WORKFLOW, action: 'wait', duration: 3500 },
  // 8: Workflow - Navigate to Document
  {
    view: ViewType.WORKFLOW,
    action: 'navigate',
    target: ViewType.DOCUMENT,
    duration: 800,
  },
  // 9: Document - Simulate Typing/Response
  { view: ViewType.DOCUMENT, action: 'wait', duration: 4000 },
  // 10: End
  { view: ViewType.DOCUMENT, action: 'finish', duration: 0 },
];

export const HeroInteractive: React.FC = () => {
  const [state, setState] = useState<AppState>(INITIAL_STATE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start closed on mobile
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modelMenuRef = useRef<HTMLDivElement>(null);

  // Check motion preferences
  useEffect(() => {
    const mqReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia?.('(max-width: 768px)');
    const update = () =>
      setMotionEnabled(!(mqReduce?.matches || mqMobile?.matches));
    update();
    mqReduce?.addEventListener?.('change', update);
    mqMobile?.addEventListener?.('change', update);
    return () => {
      mqReduce?.removeEventListener?.('change', update);
      mqMobile?.removeEventListener?.('change', update);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modelMenuRef.current &&
        !modelMenuRef.current.contains(event.target as Node)
      ) {
        setIsModelMenuOpen(false);
      }
    };

    if (isModelMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModelMenuOpen]);

  // -- Interaction Handler --
  // Stops autoplay only if the interaction is manual (not script-driven)
  const handleInteraction = useCallback(() => {
    // If the event is synthetic/programmatic from script, we ignore it (logic handled in components)
    // But here we assume any direct UI event call is manual
    if (state.isAutoplay && state.stepIndex < SCRIPT_STEPS.length - 1) {
      setState((prev) => ({ ...prev, isAutoplay: false, isTyping: false }));
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [state.isAutoplay, state.stepIndex]);

  // -- Navigation Handler --
  const handleNavigate = useCallback(
    (view: ViewType) => {
      handleInteraction(); // Manual navigation stops autoplay
      setState((prev) => ({
        ...prev,
        currentView: view,
        showResults: view === ViewType.ANALYSIS,
        searchQuery: view === ViewType.DASHBOARD ? '' : prev.searchQuery,
      }));
      setIsModelMenuOpen(false);
    },
    [handleInteraction]
  );

  // -- Replay Handler --
  const handleReplay = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState({ ...INITIAL_STATE, isAutoplay: motionEnabled });
  };

  // -- Autoplay Engine --
  useEffect(() => {
    if (!state.isAutoplay || !motionEnabled) return;

    const currentStep = SCRIPT_STEPS[state.stepIndex];
    if (!currentStep) return;

    // Handle "Type" action start
    if (currentStep.action === 'type' && currentStep.text) {
      setState((prev) => ({ ...prev, isTyping: true }));
    }

    const nextDelay = currentStep.duration;

    timerRef.current = setTimeout(() => {
      // Handle Action Completion
      if (currentStep.action === 'type') {
        // Finished typing, commit the query text
        setState((prev) => ({
          ...prev,
          searchQuery: currentStep.text || '',
          isTyping: false,
        }));
      }

      if (currentStep.action === 'navigate' && currentStep.target) {
        setState((prev) => ({
          ...prev,
          currentView: currentStep.target as ViewType,
          showResults: currentStep.target === ViewType.ANALYSIS,
        }));
      }

      if (currentStep.action === 'finish') {
        setState((prev) => ({ ...prev, isAutoplay: false }));
        return;
      }

      // Move to next step
      setState((prev) => ({ ...prev, stepIndex: prev.stepIndex + 1 }));
    }, nextDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.stepIndex, state.isAutoplay, motionEnabled]);

  // -- View Renderer --
  const renderMainContent = () => {
    // Dashboard and Analysis share the same Chat Interface view
    if (
      state.currentView === ViewType.DASHBOARD ||
      state.currentView === ViewType.ANALYSIS
    ) {
      return (
        <DashboardView
          searchQuery={state.searchQuery}
          isTyping={state.isTyping && state.stepIndex === 1}
          showResults={
            state.showResults || state.currentView === ViewType.ANALYSIS
          }
          onSearch={(q) => {
            // If autoplay is active, this search is programmatic, don't stop autoplay
            if (!state.isAutoplay) {
              handleInteraction();
              setState((prev) => ({
                ...prev,
                searchQuery: q,
                showResults: true,
                currentView: ViewType.ANALYSIS,
              }));
            } else {
              // Just update state to show results without killing autoplay
              setState((prev) => ({ ...prev, showResults: true }));
            }
          }}
          isAutoplay={state.isAutoplay}
        />
      );
    }

    switch (state.currentView) {
      case ViewType.MODELING:
        return (
          <ModelingView
            isAutoplay={state.isAutoplay}
            onInteract={handleInteraction}
          />
        );
      case ViewType.WORKFLOW:
        return (
          <WorkflowView
            isAutoplay={state.isAutoplay}
            onInteract={handleInteraction}
          />
        );
      case ViewType.DOCUMENT:
        return (
          <DocumentView
            isAutoplay={state.isAutoplay}
            onInteract={handleInteraction}
          />
        );
      default:
        return null;
    }
  };

  const getViewLabel = (view: ViewType) => {
    switch (view) {
      case ViewType.DASHBOARD:
        return 'Chatty 4o';
      case ViewType.ANALYSIS:
        return 'Chatty 4o';
      case ViewType.MODELING:
        return 'Data Modeler';
      case ViewType.WORKFLOW:
        return 'Workflow Agent';
      case ViewType.DOCUMENT:
        return 'Docs Assistant';
      default:
        return 'Chatty 4o';
    }
  };

  return (
    <section className="relative min-h-[100vh] sm:min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-28">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              Enterprise AI Platform
            </span>
          </div>
        </div>

        {/* Headline */}
        <header className="text-center mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] mb-5 sm:mb-6 leading-[1.05]">
            <span className="text-[var(--text-primary)]">Your Private </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Enterprise AI
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-[var(--text-primary)]">Platform</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Powerful.
            </span>
            <span className="mx-1.5 sm:mx-2 text-[var(--text-primary)]">
              Secure.
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              On-Premise.
            </span>
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]/90 max-w-2xl mx-auto leading-relaxed">
            Chatty connects to your documents, databases, internal systems, and
            workflows. Ask questions, analyze data, and run AI agents that
            reason, decide, and act — with full control and enterprise-grade
            security.
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-3 mt-3 text-[8px] min-[550px]:text-sm font-semibold tracking-[0.15em] uppercase">
            <span className="text-purple-400">Knowledge</span>
            <span className="w-1 h-1 rounded-full bg-purple-500/50" />
            <span className="text-violet-400">Agents</span>
            <span className="w-1 h-1 rounded-full bg-violet-500/50" />
            <span className="text-blue-400">Automation</span>
            <span className="w-1 h-1 rounded-full bg-blue-500/50" />
            <span className="text-[var(--text-muted)]">One Platform</span>
          </div>
        </header>

        {/* Product Interface - Responsive Container - Full Size */}
        <div className="mb-8 sm:mb-12 md:mb-16 w-full relative z-10">
          <div className="relative mx-auto max-w-[1400px] w-full sm:px-6 lg:px-8 isolate overflow-hidden">
            <div className="w-full max-w-full overflow-x-hidden">
              {/* Subtle Glow Effect */}
              <div className="absolute -inset-1 sm:-inset-2 md:-inset-3 bg-gradient-to-r from-purple-500/8 via-violet-500/8 to-indigo-500/8 rounded-xl sm:rounded-2xl md:rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Container - Product Interface Demo - Full Size */}
              <div
                className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-card)] shadow-xl w-full isolate"
                style={{ textAlign: 'left', contain: 'layout style paint' }}
              >
                {/* Header Bar - Refined */}
                <div className="h-12 sm:h-14 md:h-16 bg-[var(--bg-header)] dark:bg-[#2d1f45] flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 w-full relative z-10 border-b border-gray-700 dark:border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <BrandLogo
                        size={100}
                        className="h-6 sm:h-7 md:h-8 w-auto"
                        variant="hero"
                      />
                    </div>

                    {/* Model / View Selector - Refined */}
                    <div className="relative" ref={modelMenuRef}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsModelMenuOpen(!isModelMenuOpen);
                          handleInteraction();
                        }}
                        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-transparent hover:bg-gray-700 dark:hover:bg-white/10 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-primary)] dark:text-white transition-colors"
                      >
                        <span className="whitespace-nowrap">
                          {getViewLabel(state.currentView)}
                        </span>
                        <ChevronDown
                          size={14}
                          className="text-gray-400 dark:text-gray-200 sm:w-4 sm:h-4"
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isModelMenuOpen && (
                        <div
                          className="absolute top-full left-0 mt-1.5 w-[220px] bg-[var(--bg-card)] rounded-xl shadow-xl border border-[var(--border-primary)] py-1.5 px-1.5 z-50 animate-fade-in-up origin-top-left"
                          style={{ contain: 'layout style paint' }}
                        >
                          {[
                            {
                              id: ViewType.DASHBOARD,
                              label: 'Chatty 4o',
                              desc: 'Great for most tasks',
                            },
                            {
                              id: ViewType.MODELING,
                              label: 'Data Modeler',
                              desc: 'Schema design & logic',
                            },
                            {
                              id: ViewType.WORKFLOW,
                              label: 'Workflow Agent',
                              desc: 'Process automation',
                            },
                            {
                              id: ViewType.DOCUMENT,
                              label: 'Docs Assistant',
                              desc: 'RAG & analysis',
                            },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleNavigate(item.id)}
                              className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between hover:bg-[var(--bg-elevated)] transition-colors ${
                                state.currentView === item.id
                                  ? 'bg-[var(--bg-elevated)]'
                                  : ''
                              }`}
                            >
                              <div>
                                <div className="text-sm font-medium text-[var(--text-primary)]">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-[var(--text-muted)]">
                                  {item.desc}
                                </div>
                              </div>
                              {state.currentView === item.id && (
                                <CheckCircle2
                                  size={14}
                                  className="text-[var(--accent-violet)]"
                                />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2">
                    {!state.isAutoplay && (
                      <button
                        type="button"
                        onClick={handleReplay}
                        className="p-2 text-gray-400 hover:bg-gray-700 rounded-full transition-colors"
                        title="Replay Demo"
                      >
                        <RotateCw size={18} />
                      </button>
                    )}
                    <button
                      type="button"
                      className="p-2 text-gray-400 hover:bg-gray-700 rounded-full transition-colors"
                      aria-label="Share"
                    >
                      <Share size={18} />
                    </button>
                  </div>
                </div>

                {/* Body - Responsive height - Full Size */}
                <div
                  className="flex overflow-hidden w-full relative isolate"
                  style={{
                    minHeight: 'clamp(400px, 60vh, 700px)',
                    maxHeight: 'clamp(600px, 85vh, 900px)',
                    contain: 'layout style paint',
                    isolation: 'isolate',
                  }}
                >
                  {/* Sidebar - Hidden on mobile, drawer on tablet - Larger */}
                  <div
                    className={`${
                      isSidebarOpen ? 'w-[240px] xl:w-[260px]' : 'w-0'
                    } hidden lg:flex flex-col border-r border-[var(--border-primary)] bg-[var(--bg-sidebar)] shrink-0 relative z-0 overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{ willChange: 'width' }}
                  >
                    <Sidebar
                      currentView={state.currentView}
                      onNavigate={handleNavigate}
                    />
                  </div>

                  {/* Mobile Sidebar Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden absolute top-2 left-2 z-20 p-2 bg-[var(--bg-card)]/90 backdrop-blur-sm rounded-lg shadow-sm border border-[var(--border-primary)] hover:bg-[var(--bg-card)] transition-colors"
                    aria-label="Toggle sidebar"
                  >
                    <PanelLeftClose
                      size={18}
                      className="text-[var(--text-primary)]"
                    />
                  </button>

                  {/* Mobile Sidebar Overlay - Larger */}
                  {isSidebarOpen && (
                    <>
                      <button
                        type="button"
                        className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                        onClick={() => setIsSidebarOpen(false)}
                        aria-label="Close sidebar"
                      />
                      <div
                        className={`lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-[var(--bg-sidebar)] z-50 transform transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                      >
                        <Sidebar
                          currentView={state.currentView}
                          onNavigate={(view) => {
                            handleNavigate(view);
                            setIsSidebarOpen(false);
                          }}
                        />
                      </div>
                    </>
                  )}

                  {/* Main Content */}
                  <div
                    className="flex-1 flex flex-col bg-[var(--bg-card)] min-w-0 w-full relative z-0 overflow-hidden"
                    style={{ contain: 'layout style' }}
                  >
                    {renderMainContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

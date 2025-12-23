import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  RotateCw, 
  CheckCircle2,
  ChevronDown,
  PanelLeftClose,
  Share,
  Sparkles
} from 'lucide-react';

import { DashboardView } from './components/views/Dashboard';
import { AnalysisView } from './components/views/Analysis';
import { ModelingView } from './components/views/Modeling';
import { WorkflowView } from './components/views/Workflow';
import { DocumentView } from './components/views/Document';
import { Sidebar } from './components/Sidebar';
import { AppState, ViewType } from './types';

// Initial State
const INITIAL_STATE: AppState = {
  currentView: ViewType.DASHBOARD,
  isAutoplay: true,
  searchQuery: "",
  isTyping: false,
  stepIndex: 0,
  showResults: false,
};

// Script definition for the Autoplay
const SCRIPT_STEPS = [
  // 0: Dashboard - Wait
  { view: ViewType.DASHBOARD, action: 'wait', duration: 1500 },
  // 1: Dashboard - Type Query
  { view: ViewType.DASHBOARD, action: 'type', text: "What is the average salary for each position?", duration: 2000 },
  // 2: Dashboard - Search Trigger (Transition to results)
  { view: ViewType.DASHBOARD, action: 'navigate', target: ViewType.ANALYSIS, duration: 1000 },
  // 3: Analysis - View Data (Allow time for chart animation)
  { view: ViewType.ANALYSIS, action: 'wait', duration: 4000 },
  // 4: Analysis - Navigate to Model
  { view: ViewType.ANALYSIS, action: 'navigate', target: ViewType.MODELING, duration: 800 },
  // 5: Modeling - Move Node (Simulated in component)
  { view: ViewType.MODELING, action: 'wait', duration: 3000 },
  // 6: Modeling - Navigate to Workflow (Knowledge)
  { view: ViewType.MODELING, action: 'navigate', target: ViewType.WORKFLOW, duration: 800 },
  // 7: Workflow - Process (Simulated in component)
  { view: ViewType.WORKFLOW, action: 'wait', duration: 3500 },
  // 8: Workflow - Navigate to Document
  { view: ViewType.WORKFLOW, action: 'navigate', target: ViewType.DOCUMENT, duration: 800 },
  // 9: Document - Simulate Typing/Response
  { view: ViewType.DOCUMENT, action: 'wait', duration: 4000 },
  // 10: End
  { view: ViewType.DOCUMENT, action: 'finish', duration: 0 },
];

export default function App() {
  const [state, setState] = useState<AppState>(INITIAL_STATE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // -- Interaction Handler --
  // Stops autoplay only if the interaction is manual (not script-driven)
  const handleInteraction = useCallback((e?: React.SyntheticEvent) => {
    // If the event is synthetic/programmatic from script, we ignore it (logic handled in components)
    // But here we assume any direct UI event call is manual
    if (state.isAutoplay && state.stepIndex < SCRIPT_STEPS.length - 1) {
      setState(prev => ({ ...prev, isAutoplay: false, isTyping: false }));
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [state.isAutoplay, state.stepIndex]);

  // -- Navigation Handler --
  const handleNavigate = (view: ViewType) => {
    handleInteraction(); // Manual navigation stops autoplay
    setState(prev => ({ 
        ...prev, 
        currentView: view,
        showResults: view === ViewType.ANALYSIS,
        searchQuery: view === ViewType.DASHBOARD ? "" : prev.searchQuery
    }));
    setIsModelMenuOpen(false);
  };

  // -- Replay Handler --
  const handleReplay = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState({ ...INITIAL_STATE, isAutoplay: true });
  };

  // -- Autoplay Engine --
  useEffect(() => {
    if (!state.isAutoplay) return;

    const currentStep = SCRIPT_STEPS[state.stepIndex];
    if (!currentStep) return;

    // Handle "Type" action start
    if (currentStep.action === 'type' && currentStep.text) {
       setState(prev => ({ ...prev, isTyping: true }));
    }

    const nextDelay = currentStep.duration;

    timerRef.current = setTimeout(() => {
      // Handle Action Completion
      if (currentStep.action === 'type') {
         // Finished typing, commit the query text
         setState(prev => ({ ...prev, searchQuery: currentStep.text || "", isTyping: false }));
      }
      
      if (currentStep.action === 'navigate' && currentStep.target) {
        setState(prev => ({ 
            ...prev, 
            currentView: currentStep.target as ViewType,
            showResults: currentStep.target === ViewType.ANALYSIS 
        }));
      }

      if (currentStep.action === 'finish') {
        setState(prev => ({ ...prev, isAutoplay: false }));
        return;
      }

      // Move to next step
      setState(prev => ({ ...prev, stepIndex: prev.stepIndex + 1 }));

    }, nextDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state.stepIndex, state.isAutoplay]);

  // -- View Renderer --
  const renderMainContent = () => {
    // Dashboard and Analysis share the same Chat Interface view
    if (state.currentView === ViewType.DASHBOARD || state.currentView === ViewType.ANALYSIS) {
        return <DashboardView 
                  searchQuery={state.searchQuery} 
                  isTyping={state.isTyping && state.stepIndex === 1}
                  showResults={state.showResults || state.currentView === ViewType.ANALYSIS}
                  onSearch={(q) => { 
                      // If autoplay is active, this search is programmatic, don't stop autoplay
                      if (!state.isAutoplay) {
                          handleInteraction();
                          setState(prev => ({...prev, searchQuery: q, showResults: true, currentView: ViewType.ANALYSIS}));
                      } else {
                          // Just update state to show results without killing autoplay
                          setState(prev => ({...prev, showResults: true}));
                      }
                  }} 
                  isAutoplay={state.isAutoplay}
                />;
    }
    
    switch (state.currentView) {
      case ViewType.MODELING:
        return <ModelingView isAutoplay={state.isAutoplay} onInteract={handleInteraction} />;
      case ViewType.WORKFLOW:
        return <WorkflowView isAutoplay={state.isAutoplay} onInteract={handleInteraction} />;
      case ViewType.DOCUMENT:
        return <DocumentView isAutoplay={state.isAutoplay} onInteract={handleInteraction} />;
      default:
        return null;
    }
  };

  const getViewLabel = (view: ViewType) => {
     switch(view) {
         case ViewType.DASHBOARD: return "Chatty 4o";
         case ViewType.ANALYSIS: return "Chatty 4o";
         case ViewType.MODELING: return "Data Modeler";
         case ViewType.WORKFLOW: return "Workflow Agent";
         case ViewType.DOCUMENT: return "Docs Assistant";
         default: return "Chatty 4o";
     }
  }

  return (
    <div className="h-screen bg-white text-slate-900 font-sans flex overflow-hidden">
      
      {/* Sidebar (Collapsible) */}
      <div className={`${isSidebarOpen ? 'w-[260px]' : 'w-0'} bg-[#171717] transition-all duration-300 ease-in-out overflow-hidden flex flex-col shrink-0`}>
         <Sidebar currentView={state.currentView} onNavigate={handleNavigate} />
      </div>

      {/* Main Content Area */}
      <div 
        className="flex-1 flex flex-col h-full relative min-w-0"
        onMouseDown={(e) => handleInteraction(e)}
        onTouchStart={(e) => handleInteraction(e)}
        onWheel={(e) => handleInteraction(e)}
      >
        
        {/* ChatGPT-style Top Bar */}
        <header className="h-14 flex items-center justify-between px-3 shrink-0 z-20">
            <div className="flex items-center gap-2">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    <PanelLeftClose size={20} />
                </button>
                
                {/* Model / View Selector */}
                <div className="relative">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsModelMenuOpen(!isModelMenuOpen); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-slate-100 rounded-lg text-lg font-semibold text-slate-700 transition-colors"
                    >
                        <span>{getViewLabel(state.currentView)}</span>
                        <ChevronDown size={16} className="text-slate-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {isModelMenuOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in-up origin-top-left">
                            {[
                                { id: ViewType.DASHBOARD, label: "Chatty 4o", desc: "Great for most tasks" },
                                { id: ViewType.MODELING, label: "Data Modeler", desc: "Schema design & logic" },
                                { id: ViewType.WORKFLOW, label: "Workflow Agent", desc: "Process automation" },
                                { id: ViewType.DOCUMENT, label: "Docs Assistant", desc: "RAG & analysis" },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigate(item.id)}
                                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between hover:bg-slate-50 transition-colors ${state.currentView === item.id ? 'bg-slate-50' : ''}`}
                                >
                                    <div>
                                        <div className="text-sm font-medium text-slate-800">{item.label}</div>
                                        <div className="text-xs text-slate-500">{item.desc}</div>
                                    </div>
                                    {state.currentView === item.id && <CheckCircle2 size={16} className="text-slate-900" />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
                {state.isAutoplay ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-100 shadow-sm animate-pulse-slow">
                       <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Demo Mode
                    </div>
                ) : (
                    <button onClick={handleReplay} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors" title="Replay Demo">
                         <RotateCw size={18} />
                    </button>
                )}
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <Share size={18} />
                </button>
                <div className="h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-medium ml-2 shadow-sm ring-2 ring-white">
                    U
                </div>
            </div>
        </header>

        {/* Main View Area */}
        <main className="flex-1 overflow-hidden relative">
             {renderMainContent()}
        </main>

        {/* Autoplay Toast Overlay */}
        {state.isAutoplay && (
             <div className="absolute bottom-24 right-6 z-50 pointer-events-none transition-opacity duration-500">
                <div className="bg-slate-900/90 backdrop-blur-md text-white text-xs px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-fade-in-up border border-white/10">
                  <Sparkles size={14} className="text-yellow-400" />
                  <span className="font-medium">Autoplay active. Interact to take control.</span>
                </div>
             </div>
        )}

      </div>
    </div>
  );
}
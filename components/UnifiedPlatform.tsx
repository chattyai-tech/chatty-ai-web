'use client'

import React, { useState, useEffect, useId } from 'react'
import type { FC } from 'react'
import { motion } from 'framer-motion'
import { Database, FileText, Layers, ArrowRight, Check, Play, Sparkles, Terminal, Code, Search, MessageSquare, Files, Folder, ChevronRight, GitBranch, Command } from 'lucide-react'

const tabs = [
  { id: 'rag', label: 'Chatty AI', icon: <Layers className="w-4 h-4" />, color: 'from-rose-500 to-pink-400', glow: 'shadow-rose-500/20' },
  { id: 'chattydb', label: 'ChattyDB', icon: <Database className="w-4 h-4" />, color: 'from-blue-500 to-cyan-400', glow: 'shadow-blue-500/20' },
  { id: 'word', label: 'Chatty for Word', icon: <FileText className="w-4 h-4" />, color: 'from-brand-violet to-purple-400', glow: 'shadow-purple-500/20' },
  { id: 'workflows', label: 'Chatty Agents', icon: <GitBranch className="w-4 h-4" />, color: 'from-purple-500 to-violet-400', glow: 'shadow-purple-500/20' },
  { id: 'code', label: 'Chatty Code', icon: <Code className="w-4 h-4" />, color: 'from-indigo-600 to-blue-500', glow: 'shadow-indigo-500/20' },
];

// Interactive ChattyDB Visual Component
const ChattyDBVisual: React.FC = () => {
  const [step, setStep] = useState(0);
  const [typedQuery, setTypedQuery] = useState('');
  const [typedSQL, setTypedSQL] = useState('');
  const [showResults, setShowResults] = useState(false);

  const query = '"Show monthly revenue by region for Q3"';
  const sql = `SELECT region, SUM(revenue)\nFROM sales_data\nWHERE quarter = 'Q3'\nGROUP BY region;`;

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      while (isMounted) {
        // Reset
        setStep(0);
        setTypedQuery('');
        setTypedSQL('');
        setShowResults(false);

        await new Promise(r => setTimeout(r, 500));
        if (!isMounted) return;
        setStep(1);

        // Type query
        for (let i = 0; i <= query.length; i++) {
          if (!isMounted) return;
          await new Promise(r => setTimeout(r, 40));
          setTypedQuery(query.slice(0, i));
        }

        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) return;
        setStep(2);

        // Type SQL
        for (let i = 0; i <= sql.length; i++) {
          if (!isMounted) return;
          await new Promise(r => setTimeout(r, 20));
          setTypedSQL(sql.slice(0, i));
        }

        await new Promise(r => setTimeout(r, 400));
        if (!isMounted) return;
        setStep(3);
        setShowResults(true);

        await new Promise(r => setTimeout(r, 4000));
      }
    };

    runAnimation();

    return () => { isMounted = false; };
  }, []);

  return (
    <div className="w-full h-full bg-[var(--bg-primary)] p-6 sm:p-8 font-mono text-sm relative overflow-hidden flex flex-col justify-center transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Floating particles */}
      <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-blue-500/30 animate-float" />
      <div className="absolute bottom-20 left-10 w-1.5 h-1.5 rounded-full bg-cyan-500/30 animate-float [animation-delay:1s]" />
      <div className="absolute top-1/2 right-20 w-1 h-1 rounded-full bg-purple-500/30 animate-float [animation-delay:2s]" />

      <div className="space-y-5 relative z-10">
        {/* Connection Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${step >= 1 ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-500'}`} />
            <span>Connected: production_db</span>
          </div>
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] transition-all duration-300 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <Terminal size={10} />
            Processing
          </div>
        </div>

        {/* Query Input */}
        <div className={`space-y-2 transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider font-sans flex items-center gap-2">
            <Search size={10} />
            Natural Language Query
          </div>
          <div className="p-3 bg-[var(--glass-bg)] rounded-lg border border-[var(--glass-border)] group hover:border-blue-500/30 transition-colors duration-300">
            <div className="text-[var(--text-primary)] text-sm font-sans font-medium min-h-[24px]">
              {typedQuery}
              {step === 1 && <span className="inline-block w-0.5 h-4 ml-0.5 bg-blue-400 animate-pulse align-middle rounded-full" />}
            </div>
          </div>
        </div>

        {/* Divider with animation */}
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent" />
          <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out ${step >= 2 ? 'w-full' : 'w-0'}`} />
        </div>

        {/* Generated SQL */}
        <div className={`space-y-2 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider font-sans flex items-center gap-2">
            <Code size={10} />
            Generated SQL
          </div>
          <div className="p-4 bg-[var(--bg-surface)] rounded-lg border border-[var(--border-primary)] relative overflow-hidden group hover:border-brand-electric/30 transition-colors duration-300">
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl transition-opacity duration-500 ${step === 2 ? 'opacity-100' : 'opacity-0'}`} />

            <code className="relative z-10 text-brand-electric text-sm leading-relaxed block whitespace-pre">
              {typedSQL.split('\n').map((line, lineIdx) => (
                <span key={`line-${lineIdx}-${line.slice(0, 10)}`} className="block">
                  {line.split(/(\b(?:SELECT|FROM|WHERE|GROUP BY|SUM)\b|'Q3')/).map((part, partIdx) => {
                    const partKey = `part-${lineIdx}-${partIdx}-${part.slice(0, 5)}`;
                    if (['SELECT', 'FROM', 'WHERE', 'GROUP BY'].includes(part)) {
                      return <span key={partKey} className="text-brand-violet">{part}</span>;
                    }
                    if (part === 'SUM') {
                      return <span key={partKey} className="text-brand-turquoise">{part}</span>;
                    }
                    if (part === "'Q3'") {
                      return <span key={partKey} className="text-emerald-400">{part}</span>;
                    }
                    return <span key={partKey}>{part}</span>;
                  })}
                </span>
              ))}
              {step === 2 && <span className="inline-block w-0.5 h-4 ml-0.5 bg-brand-electric animate-pulse align-middle rounded-full" />}
            </code>
          </div>
        </div>

        {/* Results Preview */}
        <div className={`transition-all duration-500 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-medium">Query executed • 3 rows returned</span>
            </div>
            <span className="text-[10px] text-[var(--text-muted)]">42ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Word Visual Component
const WordVisual: FC = () => {
  const [activeInsight, setActiveInsight] = useState(0);
  const [showInsight, setShowInsight] = useState(false);
  const [highlightedSection, setHighlightedSection] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const insights = [
    {
      type: 'warning',
      icon: '⚠️',
      title: 'Compliance Issue',
      text: 'Section 4.2 conflicts with 2024 policy',
      action: 'Fix Now',
      section: 1
    },
    {
      type: 'suggestion',
      icon: '💡',
      title: 'Clarity Improvement',
      text: 'Consider simplifying paragraph 2',
      action: 'Simplify',
      section: 2
    },
    {
      type: 'success',
      icon: '✓',
      title: 'Reference Found',
      text: 'Linked to Policy Doc #2847',
      action: 'View Link',
      section: 0
    },
  ];

  useEffect(() => {
    // Initial analysis animation
    setIsAnalyzing(true);
    const analyzeTimer = setTimeout(() => {
      setIsAnalyzing(false);
      setShowInsight(true);
      setHighlightedSection(insights[0].section);
    }, 1500);

    // Cycle through insights
    const cycleTimer = setInterval(() => {
      setActiveInsight(prev => {
        const next = (prev + 1) % insights.length;
        setHighlightedSection(insights[next].section);
        return next;
      });
    }, 4000);

    return () => {
      clearTimeout(analyzeTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  const currentInsight = insights[activeInsight];

  return (
    <div className="w-full h-full bg-zinc-950 p-4 flex flex-col relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Header - Document toolbar simulation */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
            <FileText size={10} className="text-blue-400" />
          </div>
          <div>
            <div className="text-white text-[10px] font-semibold">Contract_2024_v3.docx</div>
            <div className="text-zinc-500 text-[8px]">Last edited 2 min ago</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {isAnalyzing ? (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-400 text-[9px] font-medium">Analyzing...</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-emerald-400 text-[9px] font-medium">AI Ready</span>
            </div>
          )}
        </div>
      </div>

      {/* Document Editor */}
      <div className="relative z-10 flex-1 flex gap-3">
        {/* Main Document */}
        <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Mini toolbar */}
          <div className="flex items-center gap-1 px-3 py-2 border-b border-zinc-200 bg-zinc-50">
            <button type="button" className="w-6 h-6 rounded hover:bg-zinc-200 flex items-center justify-center text-zinc-500 text-[10px] font-bold">B</button>
            <button type="button" className="w-6 h-6 rounded hover:bg-zinc-200 flex items-center justify-center text-zinc-500 text-[10px] italic">I</button>
            <button type="button" className="w-6 h-6 rounded hover:bg-zinc-200 flex items-center justify-center text-zinc-500 text-[10px] underline">U</button>
            <div className="w-px h-4 bg-zinc-300 mx-1" />
            <button type="button" className="px-2 h-6 rounded hover:bg-zinc-200 flex items-center justify-center text-zinc-500 text-[9px]">¶</button>
          </div>

          {/* Document content */}
          <div className="flex-1 p-4 text-[10px] leading-relaxed text-zinc-700 overflow-hidden">
            {/* Title */}
            <div className="text-sm font-bold text-zinc-900 mb-3">Service Agreement</div>

            {/* Paragraph 1 */}
            <p className={`mb-3 p-1.5 -mx-1.5 rounded transition-all duration-300 ${highlightedSection === 0 ? 'bg-emerald-100 border-l-2 border-emerald-500' : ''
              }`}>
              This agreement is entered into between the parties as of the effective date stated herein.
            </p>

            {/* Paragraph 2 - Warning highlight */}
            <p className={`mb-3 p-1.5 -mx-1.5 rounded transition-all duration-300 ${highlightedSection === 1 ? 'bg-amber-100 border-l-2 border-amber-500' : ''
              }`}>
              <span className={highlightedSection === 1 ? 'bg-amber-200 px-0.5 rounded' : ''}>
                Section 4.2: The service provider shall maintain compliance
              </span>{' '}
              with all applicable regulations during the term.
            </p>

            {/* Paragraph 3 */}
            <p className={`mb-3 p-1.5 -mx-1.5 rounded transition-all duration-300 ${highlightedSection === 2 ? 'bg-blue-100 border-l-2 border-blue-500' : ''
              }`}>
              Payment terms are net-30 from invoice date. Late payments may incur additional fees.
            </p>

            {/* Cursor simulation */}
            <span className="inline-block w-0.5 h-3 bg-blue-500 animate-pulse" />
          </div>
        </div>

        {/* AI Sidebar */}
        <div className="w-36 flex flex-col gap-2">
          {/* Insight Card */}
          <div className={`p-3 rounded-lg border transition-all duration-500 ${showInsight ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } ${currentInsight.type === 'warning'
              ? 'bg-amber-500/10 border-amber-500/30'
              : currentInsight.type === 'suggestion'
                ? 'bg-blue-500/10 border-blue-500/30'
                : 'bg-emerald-500/10 border-emerald-500/30'
            }`}>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm">{currentInsight.icon}</span>
              <span className={`text-[9px] font-bold uppercase tracking-wide ${currentInsight.type === 'warning'
                ? 'text-amber-400'
                : currentInsight.type === 'suggestion'
                  ? 'text-blue-400'
                  : 'text-emerald-400'
                }`}>
                {currentInsight.title}
              </span>
            </div>
            <p className="text-[9px] text-zinc-300 mb-2 leading-relaxed">
              {currentInsight.text}
            </p>
            <button
              type="button"
              className={`w-full py-1.5 rounded text-[9px] font-semibold transition-colors ${currentInsight.type === 'warning'
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : currentInsight.type === 'suggestion'
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                }`}
            >
              {currentInsight.action}
            </button>
          </div>

          {/* Insight indicators */}
          <div className="flex justify-center gap-1">
            {insights.map((insight, idx) => (
              <button
                key={insight.title}
                type="button"
                onClick={() => {
                  setActiveInsight(idx);
                  setHighlightedSection(insight.section);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${idx === activeInsight ? 'bg-purple-400 scale-125' : 'bg-zinc-600 hover:bg-zinc-500'
                  }`}
              />
            ))}
          </div>

          {/* Quick stats */}
          <div className="mt-auto p-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
            <div className="text-[8px] text-zinc-500 uppercase tracking-wide mb-1">Analysis</div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-zinc-400">Issues</span>
                <span className="text-[9px] text-amber-400 font-semibold">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-zinc-400">Suggestions</span>
                <span className="text-[9px] text-blue-400 font-semibold">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-zinc-400">References</span>
                <span className="text-[9px] text-emerald-400 font-semibold">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Workflow Node Component
interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'ai' | 'output' | 'tool';
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  x: number;
  y: number;
  color: string;
  connections: string[];
}

// Connection type for managing connections
interface Connection {
  from: string;
  to: string;
}

const WorkflowsVisual: FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [executionCount, setExecutionCount] = useState(247);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [hoveredPort, setHoveredPort] = useState<{ nodeId: string; type: 'input' | 'output' } | null>(null);
  const gradientId = useId();
  const canvasRef = React.useRef<HTMLDivElement>(null);

  // Node positions state (for dragging)
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({
    // Main flow - horizontal top row
    trigger: { x: 20, y: 30 },
    setTable: { x: 170, y: 30 },
    agent: { x: 320, y: 30 },
    getModels: { x: 470, y: 30 },
    createKB: { x: 620, y: 30 },
    addFile: { x: 770, y: 30 },
    // Tool nodes - below agent in a row
    openai: { x: 170, y: 150 },
    memory: { x: 320, y: 150 },
    execSQL: { x: 470, y: 150 },
    getTable: { x: 620, y: 150 },
    // Output nodes
    createCase: { x: 770, y: 150 },
    getCase: { x: 920, y: 150 },
  });

  // Connections state (for dynamic connections)
  const [connections, setConnections] = useState<Connection[]>([
    // Main horizontal flow
    { from: 'trigger', to: 'setTable' },
    { from: 'setTable', to: 'agent' },
    { from: 'agent', to: 'getModels' },
    { from: 'getModels', to: 'createKB' },
    { from: 'createKB', to: 'addFile' },
    // Vertical connections from agent to tools
    { from: 'agent', to: 'openai' },
    { from: 'agent', to: 'memory' },
    { from: 'agent', to: 'execSQL' },
    { from: 'agent', to: 'getTable' },
    // Output flow
    { from: 'addFile', to: 'createCase' },
    { from: 'createCase', to: 'getCase' },
  ]);

  // Define workflow nodes
  const nodeDefinitions: Omit<WorkflowNode, 'x' | 'y' | 'connections'>[] = [
    { id: 'trigger', type: 'trigger', label: 'Update a chat', sublabel: 'update: chat', icon: MessageSquare, color: 'purple' },
    { id: 'setTable', type: 'action', label: 'Set Table Name', sublabel: 'manual', icon: FileText, color: 'gray' },
    { id: 'agent', type: 'ai', label: 'Database Agent', sublabel: '', icon: Database, color: 'blue' },
    { id: 'openai', type: 'tool', label: 'OpenAI Chat', sublabel: 'Model', icon: Sparkles, color: 'emerald' },
    { id: 'memory', type: 'tool', label: 'Simple Memory', sublabel: 'Memory', icon: Database, color: 'gray' },
    { id: 'execSQL', type: 'tool', label: 'Execute SQL', sublabel: 'executeQuery', icon: Code, color: 'blue' },
    { id: 'getTable', type: 'tool', label: 'Get Table Def', sublabel: 'executeQuery', icon: Database, color: 'blue' },
    { id: 'getModels', type: 'action', label: 'Get all models', sublabel: 'getAll: model', icon: Layers, color: 'purple' },
    { id: 'createKB', type: 'action', label: 'Create KB', sublabel: 'create: knowledge', icon: Layers, color: 'purple' },
    { id: 'addFile', type: 'action', label: 'Add to KB', sublabel: 'addFile: knowledge', icon: Layers, color: 'purple' },
    { id: 'createCase', type: 'output', label: 'Create a case', sublabel: 'create: case', icon: FileText, color: 'cyan' },
    { id: 'getCase', type: 'output', label: 'Get a case', sublabel: 'get: case', icon: FileText, color: 'cyan' },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400', glow: 'shadow-purple-500/30' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/40', text: 'text-blue-400', glow: 'shadow-blue-500/30' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/40', text: 'text-emerald-400', glow: 'shadow-emerald-500/30' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/40', text: 'text-amber-400', glow: 'shadow-amber-500/30' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/40', text: 'text-cyan-400', glow: 'shadow-cyan-500/30' },
    gray: { bg: 'bg-zinc-500/10', border: 'border-zinc-500/40', text: 'text-zinc-400', glow: 'shadow-zinc-500/30' },
  };

  // Run workflow animation
  useEffect(() => {
    if (!isRunning) return;

    const nodeOrder = ['trigger', 'setTable', 'agent', 'openai', 'memory', 'execSQL', 'getTable', 'getModels', 'createKB', 'addFile', 'createCase', 'getCase'];
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < nodeOrder.length) {
        setActiveNodes(prev => [...prev, nodeOrder[currentIdx]]);
        currentIdx++;
      } else {
        setIsRunning(false);
        setActiveNodes([]);
        setExecutionCount(c => c + 1);
        currentIdx = 0;
      }
    }, 300);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleRun = () => {
    setActiveNodes([]);
    setIsRunning(true);
  };

  // Zoom handlers
  const handleZoomIn = () => setZoom(z => Math.min(z + 0.1, 1.5));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.1, 0.5));
  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Auto-align nodes
  const handleAutoAlign = () => {
    setNodePositions({
      // Main flow - horizontal top row
      trigger: { x: 20, y: 30 },
      setTable: { x: 170, y: 30 },
      agent: { x: 320, y: 30 },
      getModels: { x: 470, y: 30 },
      createKB: { x: 620, y: 30 },
      addFile: { x: 770, y: 30 },
      // Tool nodes - below agent in a row
      openai: { x: 170, y: 150 },
      memory: { x: 320, y: 150 },
      execSQL: { x: 470, y: 150 },
      getTable: { x: 620, y: 150 },
      // Output nodes
      createCase: { x: 770, y: 150 },
      getCase: { x: 920, y: 150 },
    });
  };

  // Node dragging
  const handleNodeMouseDown = (e: React.MouseEvent, nodeId: string) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    setDraggedNode(nodeId);
    setSelectedNode(nodeId);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (draggedNode && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / zoom - pan.x - 60;
      const y = (e.clientY - rect.top) / zoom - pan.y - 25;

      setNodePositions(prev => ({
        ...prev,
        [draggedNode]: { x: Math.max(0, x), y: Math.max(0, y) }
      }));
    }
  };

  const handleCanvasMouseUp = () => {
    setDraggedNode(null);
  };

  // Connection handlers
  const handlePortClick = (nodeId: string, portType: 'input' | 'output') => {
    if (portType === 'output') {
      setConnectingFrom(nodeId);
    } else if (connectingFrom && portType === 'input') {
      // Check if connection already exists
      const exists = connections.some(c => c.from === connectingFrom && c.to === nodeId);
      if (!exists && connectingFrom !== nodeId) {
        setConnections(prev => [...prev, { from: connectingFrom, to: nodeId }]);
      }
      setConnectingFrom(null);
    }
  };

  // Node width for calculating connection points
  const NODE_WIDTH = 130;
  const NODE_HEIGHT = 50;

  // Get connection path between nodes
  const getConnectionPath = (fromId: string, toId: string) => {
    const fromPos = nodePositions[fromId];
    const toPos = nodePositions[toId];
    if (!fromPos || !toPos) return '';

    // Calculate center points
    const fromCenterX = fromPos.x + NODE_WIDTH / 2;
    const fromCenterY = fromPos.y + NODE_HEIGHT / 2;
    const toCenterX = toPos.x + NODE_WIDTH / 2;
    const toCenterY = toPos.y + NODE_HEIGHT / 2;

    // Connection from right side of source to left side of target
    const fromX = fromPos.x + NODE_WIDTH;
    const fromY = fromCenterY;
    const toX = toPos.x;
    const toY = toCenterY;

    // Check if it's a vertical connection (tools below agent)
    const isToolConnection = fromId === 'agent' && ['openai', 'memory', 'execSQL', 'getTable'].includes(toId);

    if (isToolConnection) {
      // Vertical connection: go down from bottom of agent, then horizontal to tool
      const agentBottom = fromPos.y + NODE_HEIGHT;
      const toolTop = toPos.y;
      const midY = agentBottom + (toolTop - agentBottom) / 2;

      return `M ${fromCenterX} ${agentBottom} L ${fromCenterX} ${midY} L ${toCenterX} ${midY} L ${toCenterX} ${toolTop}`;
    }

    // Check if nodes are on same row (horizontal connection)
    const isSameRow = Math.abs(fromPos.y - toPos.y) < 30;

    if (isSameRow) {
      // Simple horizontal bezier curve
      const controlOffset = Math.min(60, Math.abs(toX - fromX) / 3);
      return `M ${fromX} ${fromY} C ${fromX + controlOffset} ${fromY}, ${toX - controlOffset} ${toY}, ${toX} ${toY}`;
    }

    // Different rows - create an S-curve
    const midX = (fromX + toX) / 2;

    return `M ${fromX} ${fromY} C ${midX} ${fromY}, ${midX} ${toY}, ${toX} ${toY}`;
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-[#0a0a12] dark:to-[#0f0f1a] p-3 relative overflow-hidden transition-colors duration-300 flex flex-col">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.08)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)]"
        style={{ backgroundSize: `${16 * zoom}px ${16 * zoom}px` }}
      />

      {/* Header */}
      <div className="relative z-20 flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <div className="text-[var(--text-primary)] text-xs font-bold">Database Chatty AI Agent</div>
          <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[8px] font-semibold border border-emerald-500/20">
            ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {/* Zoom Controls */}
          <div className="flex items-center gap-0.5 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-0.5">
            <button
              type="button"
              onClick={handleZoomOut}
              className="w-6 h-6 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-xs"
              title="Zoom Out"
            >
              −
            </button>
            <span className="text-[9px] text-zinc-500 w-8 text-center">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={handleZoomIn}
              className="w-6 h-6 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-xs"
              title="Zoom In"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleResetView}
            className="w-6 h-6 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            title="Reset View"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" role="img" aria-label="Reset view">
              <title>Reset view icon</title>
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleAutoAlign}
            className="w-6 h-6 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            title="Auto Align"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" role="img" aria-label="Auto align">
              <title>Auto align icon</title>
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[9px] font-semibold transition-all duration-300 ${isRunning
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg shadow-purple-500/20'
              }`}
          >
            {isRunning ? (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Running
              </>
            ) : (
              <>
                <Play size={9} />
                Run
              </>
            )}
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="relative z-10 flex-1 overflow-auto cursor-grab active:cursor-grabbing rounded-lg"
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
        onMouseLeave={handleCanvasMouseUp}
        role="application"
        aria-label="Workflow canvas - drag nodes to reposition"
      >
        <div
          className="relative"
          style={{
            width: '1100px',
            height: '280px',
            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
            transformOrigin: 'top left'
          }}
        >
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" role="img" aria-label="Workflow connections">
            <title>Workflow node connections</title>
            {/* Connection Lines */}
            {connections.map(conn => {
              const isActive = activeNodes.includes(conn.from) && activeNodes.includes(conn.to);
              const path = getConnectionPath(conn.from, conn.to);
              const isToolConn = conn.from === 'agent' && ['openai', 'memory', 'execSQL', 'getTable'].includes(conn.to);

              return (
                <g key={`${conn.from}-${conn.to}`} className="group">
                  {/* Visible path */}
                  <path
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={isToolConn ? '4 4' : '0'}
                    className={`text-zinc-300 dark:text-zinc-700 transition-colors ${hoveredNode === conn.from || hoveredNode === conn.to ? 'text-purple-400 dark:text-purple-400' : ''}`}
                  />
                  {/* Active path */}
                  {isActive && (
                    <path
                      d={path}
                      fill="none"
                      stroke={`url(#${gradientId})`}
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  )}
                </g>
              );
            })}

            {/* Gradient definition */}
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Nodes */}
          {nodeDefinitions.map(nodeDef => {
            const Icon = nodeDef.icon;
            const colors = colorMap[nodeDef.color];
            const pos = nodePositions[nodeDef.id];
            const isActive = activeNodes.includes(nodeDef.id);
            const isSelected = selectedNode === nodeDef.id;
            const isHovered = hoveredNode === nodeDef.id;
            const isDragged = draggedNode === nodeDef.id;

            if (!pos) return null;

            return (
              <button
                key={nodeDef.id}
                type="button"
                aria-label={`${nodeDef.label} node - drag to reposition`}
                className={`
                  absolute flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 transition-all duration-150 select-none text-left group
                  bg-white dark:bg-zinc-900/95 shadow-lg backdrop-blur-sm
                  ${isActive ? `${colors.border} shadow-xl ${colors.glow}` : isSelected ? `${colors.border} shadow-xl` : 'border-zinc-200/80 dark:border-zinc-700/80'}
                  ${isHovered && !isDragged ? 'scale-[1.02] shadow-xl border-purple-400/50' : ''}
                  ${isSelected ? 'ring-2 ring-purple-500/50 ring-offset-2 ring-offset-transparent' : ''}
                  ${isDragged ? 'shadow-2xl scale-105 z-50 cursor-grabbing opacity-90' : 'cursor-grab'}
                `}
                style={{
                  left: pos.x,
                  top: pos.y,
                  width: `${NODE_WIDTH}px`,
                  height: `${NODE_HEIGHT}px`
                }}
                onMouseDown={(e) => handleNodeMouseDown(e, nodeDef.id)}
                onMouseEnter={() => !draggedNode && setHoveredNode(nodeDef.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Input Port */}
                <button
                  type="button"
                  className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-200 p-0 ${hoveredPort?.nodeId === nodeDef.id && hoveredPort?.type === 'input'
                    ? 'bg-purple-500 border-purple-400 scale-125'
                    : connectingFrom
                      ? 'bg-purple-200 dark:bg-purple-800 border-purple-400 scale-110'
                      : 'bg-zinc-100 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 opacity-0 group-hover:opacity-100'
                    }`}
                  onMouseEnter={() => setHoveredPort({ nodeId: nodeDef.id, type: 'input' })}
                  onMouseLeave={() => setHoveredPort(null)}
                  onClick={(e) => { e.stopPropagation(); handlePortClick(nodeDef.id, 'input'); }}
                  tabIndex={-1}
                  aria-label="Input connection port"
                />

                {/* Icon */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? colors.bg : 'bg-zinc-100 dark:bg-zinc-800'} transition-colors duration-300`}>
                  <Icon size={16} className={isActive ? colors.text : 'text-zinc-500 dark:text-zinc-400'} />
                </div>

                {/* Labels */}
                <div className="flex-1 min-w-0">
                  <div className={`text-[11px] font-semibold truncate leading-tight ${isActive ? colors.text : 'text-zinc-800 dark:text-zinc-200'}`}>
                    {nodeDef.label}
                  </div>
                  {nodeDef.sublabel && (
                    <div className="text-[9px] text-zinc-400 dark:text-zinc-500 truncate leading-tight mt-0.5">
                      {nodeDef.sublabel}
                    </div>
                  )}
                </div>

                {/* Output Port */}
                <button
                  type="button"
                  className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-200 p-0 ${connectingFrom === nodeDef.id
                    ? 'bg-purple-500 border-purple-400 scale-125'
                    : hoveredPort?.nodeId === nodeDef.id && hoveredPort?.type === 'output'
                      ? 'bg-purple-500 border-purple-400 scale-125'
                      : 'bg-zinc-100 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 opacity-0 group-hover:opacity-100'
                    }`}
                  onMouseEnter={() => setHoveredPort({ nodeId: nodeDef.id, type: 'output' })}
                  onMouseLeave={() => setHoveredPort(null)}
                  onClick={(e) => { e.stopPropagation(); handlePortClick(nodeDef.id, 'output'); }}
                  tabIndex={-1}
                  aria-label="Output connection port"
                />

                {/* Active indicator */}
                {isActive && (
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${colors.bg} ${colors.border} border-2 animate-ping`} />
                )}

                {/* Alert badge for trigger */}
                {nodeDef.id === 'trigger' && (
                  <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 rounded-full bg-red-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center shadow-md">
                    <span className="text-white text-[8px] font-bold">!</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Connection Mode Indicator */}
      {connectingFrom && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-purple-500 text-white text-[10px] font-semibold shadow-lg z-30 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Click a node&apos;s input port to connect • ESC to cancel
        </div>
      )}

      {/* Mini info bar */}
      <div className="relative z-20 flex items-center justify-between mt-2 px-1 text-[9px] text-zinc-500 dark:text-zinc-500">
        <div className="flex items-center gap-3">
          <span>{nodeDefinitions.length} nodes</span>
          <span>{connections.length} connections</span>
          <span>{executionCount} runs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Healthy
          </span>
        </div>
      </div>
    </div>
  );
};

// Modeling functionality is now part of ChattyDB
// Removed separate ModelingVisual component

// Interactive RAG Visual Component
const RAGVisual: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [documents, setDocuments] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => {
            setProgress(0);
            setDocuments(0);
          }, 2000);
          return 100;
        }
        return prev + 2;
      });
      setDocuments(prev => Math.min(prev + 24000, 1200000));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[var(--bg-primary)] p-6 flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(244,63,94,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Animated circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 border border-rose-500/10 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
        <div className="absolute w-48 h-48 border border-rose-500/15 rounded-full animate-[ping_3s_ease-in-out_infinite_0.5s]" />
        <div className="absolute w-32 h-32 border border-rose-500/20 rounded-full animate-[ping_3s_ease-in-out_infinite_1s]" />
      </div>

      {/* Document particles */}
      {[15, 30, 45, 60, 75, 90].map((left, i) => (
        <div
          key={`doc-particle-${left}`}
          className="absolute w-6 h-8 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-center animate-float"
          style={{
            left: `${left}%`,
            top: `${20 + (i % 2) * 15}%`,
            animationDelay: `${i * 0.3}s`
          }}
        >
          <FileText size={10} className="text-rose-400/60" />
        </div>
      ))}

      <div className="relative z-10 space-y-4">
        {/* Status Card */}
        <div className="bg-[var(--bg-surface)] p-5 rounded-xl border border-[var(--border-primary)] shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[var(--text-primary)] font-semibold">VECTOR_INDEX</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                {progress < 100 ? 'INDEXING' : 'READY'}
              </span>
            </div>
            <span className={`w-2 h-2 rounded-full ${progress < 100 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[var(--glass-bg)] h-3 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-200 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="text-[var(--text-muted)] font-mono">
              {(documents / 1000).toFixed(1)}K / 1.2M Documents
            </span>
            <span className={`font-semibold ${progress < 100 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {progress}%
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'chunks', label: 'Chunks', value: Math.floor(documents * 3.2).toLocaleString() },
            { id: 'embeddings', label: 'Embeddings', value: Math.floor(documents * 1.5).toLocaleString() },
            { id: 'latency', label: 'Latency', value: '42ms' },
          ].map((stat) => (
            <div key={stat.id} className="p-3 bg-[var(--glass-bg)] rounded-lg border border-[var(--border-primary)] text-center">
              <div className="text-[10px] text-[var(--text-muted)] mb-1">{stat.label}</div>
              <div className="text-sm text-[var(--text-primary)] font-semibold font-mono">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CodeVisual: React.FC = () => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('Analysing repository...');
  const [complete, setComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('auth.ts');
  const [isCommandPromptActive, setIsCommandPromptActive] = useState(false);
  const [commandProgress, setCommandProgress] = useState(0);

  const fullCode = `export function SecureAuth() {\n  const { user } = useAuth();\n\n  // @chatty: ensure PII is masked\n  const logUser = (data) => {\n    const masked = maskPII(data);\n    auditLog.info(masked);\n  };\n\n  return <div>{user.name}</div>;\n}`;

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      while (isMounted) {
        // Step 1: Analyze
        setCode('');
        setStatus('Analysing repository...');
        setComplete(false);
        setIsCommandPromptActive(false);
        setCommandProgress(0);
        await new Promise(r => setTimeout(r, 1200));

        // Step 2: Prompt Simulation
        if (!isMounted) return;
        setIsCommandPromptActive(true);
        for (let i = 0; i <= 100; i += 5) {
          if (!isMounted) return;
          setCommandProgress(i);
          await new Promise(r => setTimeout(r, 20));
        }
        await new Promise(r => setTimeout(r, 600));
        setIsCommandPromptActive(false);

        // Step 3: Generate
        if (!isMounted) return;
        setStatus('Generating secure logic...');
        for (let i = 0; i <= fullCode.length; i++) {
          if (!isMounted) return;
          await new Promise(r => setTimeout(r, 10));
          setCode(fullCode.slice(0, i));
        }

        // Step 4: Finish
        if (!isMounted) return;
        setComplete(true);
        setStatus('Validated (SOC2)');
        await new Promise(r => setTimeout(r, 4500));
      }
    };
    run();
    return () => { isMounted = false; };
  }, []);

  const files = [
    { name: 'auth.ts', color: 'text-indigo-400' },
    { name: 'db.ts', color: 'text-indigo-300' },
    { name: 'schema.prisma', color: 'text-emerald-400' },
    { name: 'package.json', color: 'text-amber-400' },
  ];

  return (
    <div className="w-full h-full bg-[#0a0a0f] font-mono text-[10px] sm:text-[11px] text-indigo-100/90 relative overflow-hidden flex flex-col transition-colors duration-300">
      {/* OS Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-indigo-500/10">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500/40" />
          <div className="w-2 h-2 rounded-full bg-amber-500/40" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
        </div>
        <div className="flex items-center gap-2 text-indigo-400/50 uppercase tracking-[0.2em] font-bold text-[9px]">
          <Terminal size={10} className="opacity-50" />
          Chatty Code IDE
        </div>
        <div className="w-8" />
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-32 sm:w-40 border-r border-white/5 bg-black/20 flex flex-col shrink-0">
          <div className="p-3 text-[9px] uppercase tracking-widest text-white/30 font-bold flex items-center justify-between">
            Explorer
            <Files size={10} />
          </div>
          <div className="flex-1 overflow-auto py-1">
            <div className="px-3 py-1.5 flex items-center gap-2 text-white/60 hover:bg-white/5 cursor-pointer">
              <ChevronRight size={10} className="text-white/20" />
              <Folder size={12} className="text-indigo-500/60" />
              <span className="truncate">src</span>
            </div>
            <div className="pl-6">
              {files.map(file => (
                <button
                  key={file.name}
                  type="button"
                  onClick={() => setActiveTab(file.name)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveTab(file.name); }}
                  className={`px-3 py-1.5 flex items-center gap-2 cursor-pointer transition-colors ${activeTab === file.name ? 'bg-indigo-500/10 text-white' : 'text-white/40 hover:bg-white/5'}`}
                >
                  <Code size={11} className={activeTab === file.name ? file.color : 'text-white/20'} />
                  <span className="truncate">{file.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-black/10 overflow-hidden relative">
          {/* Tabs */}
          <div className="flex bg-black/30 border-b border-white/5 overflow-x-auto scrollbar-hide">
            {['auth.ts', 'db.ts'].map(tab => (
              <div
                key={tab}
                className={`px-4 py-2 border-r border-white/5 flex items-center gap-2 shrink-0 cursor-pointer ${activeTab === tab ? 'bg-[#0a0a0f] text-white border-t-2 border-t-indigo-500' : 'text-white/30'}`}
              >
                <Code size={10} className={activeTab === tab ? 'text-indigo-500' : 'text-white/20'} />
                {tab}
              </div>
            ))}
          </div>

          {/* Editor Guts */}
          <div className="flex-1 p-4 sm:p-6 overflow-auto relative">
            <div className="flex">
              <div className="w-8 shrink-0 text-white/10 text-right pr-4 select-none leading-relaxed">
                {Array.from({ length: 14 }, (_, i) => i + 1).map((lineNum) => <div key={`line-number-${lineNum}`}>{lineNum}</div>)}
              </div>
              <div className="flex-1 min-w-0">
                <pre className="whitespace-pre-wrap leading-relaxed">
                  {activeTab === 'auth.ts' ? (
                    <>
                      {code}
                      <span className="w-1.5 h-3.5 bg-indigo-500/60 inline-block align-middle ml-0.5 animate-pulse" />
                    </>
                  ) : (
                    <span className="text-white/20 italic">{'// No changes predicted for this file'}</span>
                  )}
                </pre>
              </div>
            </div>

            {/* Command-K Simulation UI */}
            {isCommandPromptActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-center z-20"
              >
                <div className="bg-[#1a1a25]/90 backdrop-blur-md p-4 rounded-xl border border-indigo-500/30 shadow-2xl w-full max-w-[280px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-1.5 bg-indigo-600 rounded-md">
                      <Command size={14} className="text-white" />
                    </div>
                    <div className="text-[10px] text-white/90">Generating secure auth logic...</div>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-500"
                      style={{ width: `${commandProgress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Security Insight Toast */}
            {complete && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className="absolute bottom-6 right-6 bg-indigo-600/90 backdrop-blur-lg p-4 rounded-xl border border-white/20 text-white shadow-2xl max-w-[220px] z-30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-amber-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Policy Applied</span>
                </div>
                <p className="text-[10px] leading-relaxed opacity-90">
                  Automated PII masking and TLS enforcement synced with Enterprise Security Layer.
                </p>
              </motion.div>
            )}
          </div>

          {/* Editor Status Bar */}
          <div className="h-7 bg-black/40 border-t border-white/5 flex items-center justify-between px-3 text-[9px] uppercase tracking-[0.15em] text-white/30 font-bold">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <GitBranch size={10} className="text-indigo-500" />
                main*
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${complete ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                {status}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span className="hidden sm:inline">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const content = {
  chattydb: {
    title: "AI SQL & Data Exploration",
    subtitle: "Natural language to SQL in seconds",
    features: [
      "Generate complex SQL from plain English",
      "Explore tables, schemas & relationships with ERD & Schema Intelligence",
      "Visualize data with auto-generated charts"
    ],
    Visual: ChattyDBVisual
  },
  word: {
    title: "AI Inside Microsoft Office",
    subtitle: "Transform document workflows",
    features: [
      "Draft, summarize & compare documents",
      "Insert structured insights inline",
      "Automate reports & legal documents"
    ],
    Visual: WordVisual
  },
  workflows: {
    title: "Automation with AI Agents",
    subtitle: "Build intelligent automations",
    features: [
      "Build multi-step AI automations",
      "Trigger Chatty actions inside any system",
      "Connect databases, APIs & internal tools"
    ],
    Visual: WorkflowsVisual
  },
  rag: {
    title: "Document Intelligence Engine",
    subtitle: "Enterprise-scale document AI",
    features: [
      "Ingest millions of documents",
      "Secure, private vector stores",
      "Fully on-premise, zero external access"
    ],
    Visual: RAGVisual
  },
  code: {
    title: "AI Engineered for Code",
    subtitle: "Turn natural language into production code",
    features: [
      "Repository-aware code generation",
      "Automatic PII & security masking",
      "Explain or refactor complex legacy code"
    ],
    Visual: CodeVisual
  }
};

// Platform section ID - used for anchor navigation
const PLATFORM_SECTION_ID = 'platform';

export const UnifiedPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof content>('rag');

  return (
    <section id={PLATFORM_SECTION_ID} className="py-12 sm:py-16 bg-[var(--bg-primary)] dark:bg-[#271b3d] relative transition-colors duration-300">
      {/* Section Divider - Hidden in dark mode */}
      <div className="absolute top-0 left-0 right-0 section-divider dark:hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enterprise styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20 text-[var(--accent-violet)] text-xs font-bold tracking-wide uppercase mb-8">
            <Layers className="w-4 h-4" />
            Unified Platform
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[var(--text-primary)] mb-6 tracking-[-0.02em] leading-[1.1]">
            One Platform, Infinite Possibilities
          </h2>
          <p className="text-[var(--text-secondary)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            One interface for databases, documents, and automation. Everything your enterprise needs.
          </p>
        </div>

        {/* Tabs - Refined */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as keyof typeof content)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${activeTab === tab.id
                ? 'bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] border-[var(--cta-primary-bg)] shadow-lg shadow-[var(--accent-violet)]/20'
                : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-primary)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-secondary)] shadow-sm'
                }`}
            >
              <span className={activeTab === tab.id ? 'text-[var(--cta-primary-text)]' : 'text-[var(--accent-violet)]'}>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area - Premium glass effect */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-b from-[var(--accent-violet)]/10 via-transparent to-transparent rounded-3xl blur-xl -z-10" />

          <div className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden border border-[var(--border-primary)] shadow-2xl">
            <div className="grid md:grid-cols-2 min-h-[520px]">
              {/* Left - Info */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[var(--border-primary)] dark:border-transparent">
                <div className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-gradient-to-r ${tabs.find(t => t.id === activeTab)?.color} text-white text-xs font-bold uppercase tracking-wide mb-8`}>
                  {tabs.find(t => t.id === activeTab)?.icon}
                  {tabs.find(t => t.id === activeTab)?.label}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">{content[activeTab].title}</h3>
                <p className="text-[var(--text-muted)] text-base sm:text-lg mb-10 leading-relaxed">{content[activeTab].subtitle}</p>
                <ul className="space-y-5">
                  {content[activeTab].features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 group">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20 flex items-center justify-center text-[var(--accent-violet)] group-hover:bg-[var(--accent-violet)] group-hover:text-white transition-all duration-300 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[var(--text-secondary)] text-base group-hover:text-[var(--text-primary)] transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-violet)] hover:text-[var(--text-primary)] transition-colors duration-300 group">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
              {/* Right - Visual */}
              <div className="relative bg-[var(--bg-card)] min-h-[320px] md:min-h-0 transition-colors duration-300">
                {(() => {
                  const Visual = content[activeTab].Visual;
                  return <Visual />;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

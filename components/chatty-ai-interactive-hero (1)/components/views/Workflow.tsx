import React, { useState, useEffect, useRef } from 'react';
import { 
    Database, 
    MessageSquare, 
    Play, 
    RefreshCw, 
    PenTool, 
    Search, 
    Cloud,
    Plus,
    ChevronDown,
    MoreHorizontal,
    Zap,
    Cpu,
    FileText,
    StopCircle,
    Trash2,
    Settings2,
    X,
    AlertCircle,
    Brain
} from 'lucide-react';

interface WorkflowProps {
    isAutoplay: boolean;
    onInteract?: () => void;
}

interface WorkflowNode {
    id: number;
    label: string;
    sub: string;
    icon: any;
    x: number;
    y: number;
    type: 'trigger' | 'action' | 'agent';
    config?: Record<string, string>;
}

interface Edge {
    id: string;
    source: number;
    target: number;
}

export const WorkflowView: React.FC<WorkflowProps> = ({ isAutoplay, onInteract }) => {
    const [activeNode, setActiveNode] = useState<number>(-1); // For autoplay visual
    const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
    const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Initial Nodes
    const [nodes, setNodes] = useState<WorkflowNode[]>([
        { id: 0, label: 'Update a chat', sub: 'update: chat', icon: MessageSquare, x: 100, y: 180, type: 'trigger' },
        { id: 1, label: 'Set Table Name', sub: 'manual', icon: PenTool, x: 280, y: 180, type: 'action' },
        { 
            id: 2, 
            label: 'Database Agent', 
            sub: 'Chat Model + Memory', 
            icon: Database, 
            x: 480, 
            y: 180, 
            type: 'agent',
            config: {
                model: 'gpt-4-turbo',
                temperature: '0.7',
                memory: 'true',
                systemPrompt: 'You are an expert database analyst capable of writing optimized SQL queries.'
            }
        },
        { id: 3, label: 'Get all models', sub: 'getAll: model', icon: RefreshCw, x: 720, y: 120, type: 'action' },
        { id: 4, label: 'Execute SQL', sub: 'exec: sql', icon: Database, x: 720, y: 320, type: 'action' },
    ]);

    // Edges State
    const [edges, setEdges] = useState<Edge[]>([
        { id: 'e1', source: 0, target: 1 },
        { id: 'e2', source: 1, target: 2 }
    ]);

    // Drag State
    const [draggingId, setDraggingId] = useState<number | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    // Connection State
    const [connectingSource, setConnectingSource] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Helper to update node data
    const updateNode = (id: number, updates: any) => {
        if (onInteract) onInteract();
        setNodes(prev => prev.map(n => {
            if (n.id === id) {
                // If updating config, merge it
                if (updates.config) {
                    return { ...n, config: { ...n.config, ...updates.config } };
                }
                return { ...n, ...updates };
            }
            return n;
        }));
    };

    // Delete Handler (Nodes & Edges)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Delete' || e.key === 'Backspace') {
                if (onInteract) onInteract();
                
                if (selectedNodeId !== null) {
                    setNodes(prev => prev.filter(n => n.id !== selectedNodeId));
                    setEdges(prev => prev.filter(edge => edge.source !== selectedNodeId && edge.target !== selectedNodeId));
                    setSelectedNodeId(null);
                }
                
                if (selectedEdgeId !== null) {
                    setEdges(prev => prev.filter(e => e.id !== selectedEdgeId));
                    setSelectedEdgeId(null);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedNodeId, selectedEdgeId, onInteract]);

    // -- Mouse Handlers --
    useEffect(() => {
        if (draggingId === null) return;
        const handleMouseMoveWindow = (e: MouseEvent) => {
             setNodes(prev => prev.map(n => 
                n.id === draggingId 
                ? { ...n, x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y } 
                : n
            ));
        };
        const handleMouseUpWindow = () => setDraggingId(null);

        window.addEventListener('mousemove', handleMouseMoveWindow);
        window.addEventListener('mouseup', handleMouseUpWindow);
        return () => {
            window.removeEventListener('mousemove', handleMouseMoveWindow);
            window.removeEventListener('mouseup', handleMouseUpWindow);
        };
    }, [draggingId, dragOffset]);

    useEffect(() => {
        const handleGlobalMouseUp = () => setConnectingSource(null);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    const handleCanvasClick = () => {
        if (onInteract) onInteract();
        setSelectedNodeId(null);
        setSelectedEdgeId(null);
    }

    const handleNodeMouseDown = (e: React.MouseEvent, id: number, x: number, y: number) => {
        if (onInteract) onInteract();
        e.stopPropagation();
        setDraggingId(id);
        setSelectedNodeId(id);
        setSelectedEdgeId(null);
        setDragOffset({ x: e.clientX - x, y: e.clientY - y });
    };

    const handlePortMouseDown = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        e.preventDefault();
        if (onInteract) onInteract();
        setConnectingSource(id);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };

    const handlePortMouseUp = (e: React.MouseEvent, targetId: number) => {
        e.stopPropagation();
        if (connectingSource !== null && connectingSource !== targetId) {
            const exists = edges.some(e => e.source === connectingSource && e.target === targetId);
            const reverseExists = edges.some(e => e.source === targetId && e.target === connectingSource); // No cycles for this simple DAG
            
            if (!exists && !reverseExists) {
                setEdges(prev => [...prev, { id: `e-${Date.now()}`, source: connectingSource, target: targetId }]);
            }
        }
        setConnectingSource(null);
    };

    const handleMouseMoveCanvas = (e: React.MouseEvent) => {
        if (connectingSource !== null && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };

    const addNode = (label: string, icon: any, type: 'action' | 'trigger' | 'agent' = 'action') => {
        if (onInteract) onInteract();
        const newId = nodes.length > 0 ? Math.max(...nodes.map(n => n.id)) + 1 : 0;
        const newNode: WorkflowNode = {
            id: newId,
            label,
            sub: type === 'agent' ? 'AI Agent' : 'action',
            icon,
            x: 350 + (Math.random() * 50),
            y: 250 + (Math.random() * 50),
            type,
            config: type === 'agent' ? { model: 'gpt-4-turbo', temperature: '0.7', memory: 'true' } : {}
        };
        setNodes(prev => [...prev, newNode]);
        setSelectedNodeId(newId);
    };

    // Autoplay
    useEffect(() => {
        if (isAutoplay && draggingId === null && connectingSource === null) {
            const interval = setInterval(() => setActiveNode(prev => (prev + 1) % 5), 800);
            return () => clearInterval(interval);
        }
    }, [isAutoplay, draggingId, connectingSource]);

    const knowledgeActions = [
        { label: 'Create KB', full: 'Create a knowledge base', icon: Database }, 
        { label: 'Get KB', full: 'Get a knowledge base', icon: Search }, 
        { label: 'Update KB', full: 'Update a knowledge base', icon: RefreshCw },
        { label: 'Add File', full: 'Add file to knowledge base', icon: FileText }
    ];
    const chatActions = [
        { label: 'Create Chat', full: 'Create a chat', icon: MessageSquare }, 
        { label: 'Get Chat', full: 'Get a chat', icon: Search }, 
        { label: 'Update Chat', full: 'Update a chat', icon: RefreshCw }
    ];

    const filterActions = (list: any[]) => list.filter(a => a.full.toLowerCase().includes(searchQuery.toLowerCase()));
    const getNode = (id: number) => nodes.find(n => n.id === id);
    const selectedNode = selectedNodeId !== null ? nodes.find(n => n.id === selectedNodeId) : null;

    return (
        <div className="h-full w-full bg-[#f8fafc] relative overflow-hidden flex flex-col font-sans">
            
            {/* Top Toolbar */}
            <div className="h-12 border-b border-slate-200 bg-white flex items-center justify-between px-4 shrink-0 z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center shadow-sm">
                        <Zap size={18} className="text-white fill-white" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-800">New Automation Flow</div>
                        <div className="text-[10px] text-slate-400">Last edited just now</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                     <button 
                        onClick={() => { if(onInteract) onInteract(); setIsRunning(!isRunning); if(isRunning) setActiveNode(-1); }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all shadow-sm border
                            ${isRunning 
                                ? 'bg-red-50 text-red-600 border-red-100 hover:bg-red-100' 
                                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                            }`}
                    >
                        {isRunning ? <StopCircle size={14} fill="currentColor" className="opacity-20"/> : <Play size={14} fill="currentColor"/>}
                        {isRunning ? "Stop" : "Test Run"}
                     </button>
                     <button className="px-3 py-1.5 bg-slate-900 text-white rounded-md text-xs font-medium hover:bg-slate-800 shadow-sm">Publish</button>
                </div>
            </div>

            {/* Main Workspace */}
            <div className="flex-1 flex overflow-hidden">
                {/* Canvas */}
                <div 
                    ref={containerRef}
                    className="flex-1 relative overflow-hidden bg-slate-50 cursor-crosshair"
                    onMouseMove={handleMouseMoveCanvas}
                    onClick={handleCanvasClick}
                >
                    <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
                        style={{
                            backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
                            backgroundSize: '24px 24px'
                        }}>
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                            </marker>
                            <marker id="arrow-selected" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
                            </marker>
                        </defs>

                        {edges.map(edge => {
                            const source = getNode(edge.source);
                            const target = getNode(edge.target);
                            if (!source || !target) return null;
                            
                            const sx = source.x + 64; 
                            const sy = source.y + 32;
                            const tx = target.x;
                            const ty = target.y + 32;
                            // Bezier curve
                            const pathD = `M ${sx} ${sy} C ${sx + 80} ${sy}, ${tx - 80} ${ty}, ${tx} ${ty}`;
                            const isSelected = selectedEdgeId === edge.id;

                            return (
                                <g key={edge.id} onClick={(e) => { e.stopPropagation(); if(onInteract) onInteract(); setSelectedEdgeId(edge.id); setSelectedNodeId(null); }} className="pointer-events-auto cursor-pointer group">
                                    {/* Invisible thick path for easier clicking */}
                                    <path d={pathD} stroke="transparent" strokeWidth="15" fill="none" />
                                    
                                    {/* Visible path */}
                                    <path 
                                        d={pathD} 
                                        stroke={isSelected || isRunning ? "#3b82f6" : "#94a3b8"} 
                                        strokeWidth={isSelected ? "3" : "2"} 
                                        fill="none" 
                                        markerEnd={isSelected || isRunning ? "url(#arrow-selected)" : "url(#arrow)"} 
                                        className="transition-colors duration-300 group-hover:stroke-blue-400"
                                    />
                                    {isRunning && (
                                        <circle r="4" fill="#3b82f6">
                                            <animateMotion dur="1s" repeatCount="indefinite" path={pathD} keyPoints="0;1" keyTimes="0;1"/>
                                        </circle>
                                    )}
                                </g>
                            );
                        })}

                        {connectingSource !== null && (
                            <path 
                                d={`M ${getNode(connectingSource)!.x + 64} ${getNode(connectingSource)!.y + 32} C ${getNode(connectingSource)!.x + 100} ${getNode(connectingSource)!.y + 32}, ${mousePos.x - 50} ${mousePos.y}, ${mousePos.x} ${mousePos.y}`} 
                                stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" fill="none" 
                            />
                        )}
                    </svg>

                    {nodes.map((node, i) => (
                        <div
                            key={node.id}
                            onMouseDown={(e) => handleNodeMouseDown(e, node.id, node.x, node.y)}
                            className={`absolute flex flex-col items-center gap-2 transition-all duration-200 cursor-grab active:cursor-grabbing group
                                ${activeNode === i && isAutoplay ? 'scale-105' : ''}
                                ${draggingId === node.id ? 'z-50 scale-105' : 'z-10'}
                            `}
                            style={{ left: node.x, top: node.y }}
                        >
                            <div className={`
                                w-16 h-16 bg-white rounded-[16px] flex items-center justify-center relative shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] transition-all
                                ${activeNode === i && isAutoplay ? 'ring-2 ring-blue-500 border-transparent' : ''}
                                ${selectedNodeId === node.id ? 'ring-2 ring-blue-500 border-transparent shadow-[0_8px_30px_-4px_rgba(59,130,246,0.2)]' : 'border border-slate-100 hover:border-slate-300'}
                                ${connectingSource === node.id ? 'ring-2 ring-blue-500' : ''}
                            `}>
                                {node.type === 'agent' ? (
                                    <div className="h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center pointer-events-none">
                                         <span className="text-white font-bold text-sm">AI</span>
                                    </div>
                                ) : (
                                    <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center pointer-events-none text-slate-600">
                                         <node.icon size={20} />
                                    </div>
                                )}

                                {/* Hover Ports */}
                                <div onMouseUp={(e) => handlePortMouseUp(e, node.id)} className="absolute -left-3 w-6 h-6 flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2.5 h-2.5 bg-white border-2 border-slate-400 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:scale-125 transition-all"></div>
                                </div>
                                <div onMouseDown={(e) => handlePortMouseDown(e, node.id)} className="absolute -right-3 w-6 h-6 flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2.5 h-2.5 bg-white border-2 border-slate-400 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:scale-125 transition-all"></div>
                                </div>
                            </div>
                            <div className="text-center z-10 pointer-events-none">
                                <div className="text-[11px] font-bold text-slate-700 leading-tight mb-0.5 select-none bg-slate-50/80 px-2 py-0.5 rounded backdrop-blur-sm">{node.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive Right Panel */}
                <div className="w-[320px] bg-white border-l border-slate-200 flex flex-col hidden lg:flex z-20 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)]">
                     {selectedNode ? (
                         // Node Properties Panel
                         <div className="flex flex-col h-full animate-slide-in-right">
                             <div className="h-14 flex items-center justify-between px-5 border-b border-slate-100 shrink-0 bg-slate-50/50">
                                 <span className="font-bold text-sm text-slate-800 flex items-center gap-2">
                                     <Settings2 size={16} className="text-slate-500"/>
                                     Node Settings
                                 </span>
                                 <button onClick={() => setSelectedNodeId(null)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><X size={16}/></button>
                             </div>
                             <div className="p-5 flex-1 overflow-y-auto space-y-6">
                                 <div>
                                     <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Configuration</label>
                                     <div className="space-y-3">
                                         <div>
                                             <div className="text-[11px] text-slate-600 mb-1 font-medium">Node Label</div>
                                             <input 
                                                type="text" 
                                                value={selectedNode.label} 
                                                onChange={(e) => updateNode(selectedNode.id, { label: e.target.value })}
                                                className="w-full text-sm border border-slate-200 rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-colors" 
                                            />
                                         </div>
                                         <div>
                                             <div className="text-[11px] text-slate-600 mb-1 font-medium">Description</div>
                                             <input 
                                                type="text" 
                                                value={selectedNode.sub} 
                                                onChange={(e) => updateNode(selectedNode.id, { sub: e.target.value })}
                                                className="w-full text-sm border border-slate-200 rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-colors" 
                                            />
                                         </div>
                                     </div>
                                 </div>
                                 
                                 {/* Config Panel for Agents */}
                                 {selectedNode.type === 'agent' && (
                                     <div className="space-y-5 border-t border-slate-100 pt-5">
                                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                                            <Zap size={14} className="text-blue-600" fill="currentColor" /> 
                                            Model Configuration
                                        </h3>
                                        
                                        {/* Model Selection */}
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-medium text-slate-500">LLM Model</label>
                                            <div className="relative">
                                                <select 
                                                    value={selectedNode.config?.model || 'gpt-4-turbo'}
                                                    onChange={(e) => updateNode(selectedNode.id, { config: { model: e.target.value } })}
                                                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-xs rounded-md pl-3 pr-8 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition-all cursor-pointer hover:border-slate-300"
                                                >
                                                    <option value="gpt-4-turbo">GPT-4 Turbo</option>
                                                    <option value="gpt-4">GPT-4</option>
                                                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                                                    <option value="claude-3-opus">Claude 3 Opus</option>
                                                </select>
                                                <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Temperature */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <label className="text-[11px] font-medium text-slate-500">Temperature</label>
                                                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{selectedNode.config?.temperature || '0.7'}</span>
                                            </div>
                                            <input 
                                                type="range" 
                                                min="0" 
                                                max="1" 
                                                step="0.1"
                                                value={selectedNode.config?.temperature || '0.7'}
                                                onChange={(e) => updateNode(selectedNode.id, { config: { temperature: e.target.value } })}
                                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                            />
                                            <div className="flex justify-between text-[10px] text-slate-400 px-0.5">
                                                <span>Precise (0.0)</span>
                                                <span>Creative (1.0)</span>
                                            </div>
                                        </div>

                                        {/* Memory Toggle */}
                                        <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                            <div className="flex flex-col gap-0.5">
                                                <div className="flex items-center gap-1.5">
                                                    <Brain size={14} className="text-purple-600" />
                                                    <span className="text-xs font-semibold text-slate-700">Memory</span>
                                                </div>
                                                <span className="text-[10px] text-slate-500">Retain context from previous turns</span>
                                            </div>
                                            <button 
                                                onClick={() => updateNode(selectedNode.id, { config: { memory: String(selectedNode.config?.memory !== 'true') } })}
                                                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${selectedNode.config?.memory === 'true' ? 'bg-blue-600' : 'bg-slate-300'}`}
                                            >
                                                <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm ${selectedNode.config?.memory === 'true' ? 'translate-x-[18px]' : 'translate-x-[2px]'}`}/>
                                            </button>
                                        </div>
                                        
                                        {/* System Prompt */}
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-medium text-slate-500">System Prompt</label>
                                            <textarea 
                                                value={selectedNode.config?.systemPrompt || ''}
                                                onChange={(e) => updateNode(selectedNode.id, { config: { systemPrompt: e.target.value } })}
                                                className="w-full bg-white border border-slate-200 text-slate-700 text-xs rounded-md p-2.5 h-24 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none resize-none transition-all placeholder:text-slate-300"
                                                placeholder="Define the agent's persona and rules..."
                                            />
                                        </div>
                                     </div>
                                 )}

                                 <div className="pt-4 border-t border-slate-100">
                                     <button 
                                        onClick={() => {
                                            if (onInteract) onInteract();
                                            setNodes(prev => prev.filter(n => n.id !== selectedNode.id));
                                            setSelectedNodeId(null);
                                        }}
                                        className="w-full py-2 border border-red-200 text-red-600 rounded-md text-xs font-bold hover:bg-red-50 flex items-center justify-center gap-2 transition-colors"
                                    >
                                         <Trash2 size={14} /> Delete Node
                                     </button>
                                 </div>
                             </div>
                         </div>
                     ) : (
                         // Action Library Panel
                         <div className="flex flex-col h-full">
                            <div className="h-14 flex items-center px-5 border-b border-slate-100 gap-2 shrink-0">
                                <span className="font-bold text-sm text-slate-800">Action Library</span>
                            </div>
                            <div className="p-3 border-b border-slate-100 shrink-0">
                                <div className="relative">
                                    <Search size={14} className="absolute top-2.5 left-3 text-slate-400" />
                                    <input 
                                       type="text" 
                                       placeholder="Search components..." 
                                       className="w-full bg-white border border-slate-200 rounded-[4px] pl-9 py-2 text-xs outline-none text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all" 
                                       value={searchQuery}
                                       onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 space-y-4">
                                <div>
                                     <div className="flex items-center justify-between mb-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                         Triggers
                                     </div>
                                     <button 
                                       onClick={() => addNode('Webhook', Zap, 'trigger')}
                                       className="w-full text-left flex items-center gap-3 p-2 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group mb-1"
                                     >
                                         <div className="h-8 w-8 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 shrink-0"><Zap size={16}/></div>
                                         <div>
                                             <div className="text-xs font-bold text-slate-700">Webhook</div>
                                             <div className="text-[10px] text-slate-400">Receive HTTP requests</div>
                                         </div>
                                         <Plus size={14} className="ml-auto text-slate-300 group-hover:text-blue-500"/>
                                     </button>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                         Available Actions
                                     </div>
                                    <div className="space-y-2">
                                        {[...filterActions(knowledgeActions), ...filterActions(chatActions)].map((action, i) => (
                                            <button 
                                                key={i} 
                                                onClick={() => addNode(action.label, action.icon, 'action')}
                                                className="w-full text-left flex items-center gap-3 p-2 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group"
                                            >
                                                <div className="h-8 w-8 rounded-md bg-slate-50 flex items-center justify-center text-slate-600 shrink-0">
                                                    <action.icon size={16}/>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <div className="text-xs font-bold text-slate-700 truncate">{action.label}</div>
                                                    <div className="text-[10px] text-slate-400 truncate">{action.full}</div>
                                                </div>
                                                <Plus size={14} className="ml-auto text-slate-300 group-hover:text-blue-500"/>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                         </div>
                     )}
                </div>
            </div>
        </div>
    );
};
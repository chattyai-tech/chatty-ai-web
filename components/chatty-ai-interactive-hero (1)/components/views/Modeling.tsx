import React, { useState, useEffect, useRef } from 'react';
import { MOCK_SCHEMA_NODES } from '../../constants';
import { TableNode } from '../../types';
import { 
    Plus, 
    MoreVertical, 
    Box, 
    Search, 
    Minus, 
    ZoomIn, 
    ZoomOut, 
    Move,
    Copy,
    Trash2,
    Edit2,
    X,
    Sparkles,
    Database,
    Table as TableIcon
} from 'lucide-react';

interface ModelingProps {
    isAutoplay: boolean;
    onInteract?: () => void;
}

interface ContextMenuState {
    visible: boolean;
    x: number;
    y: number;
    nodeId: string | null;
}

export const ModelingView: React.FC<ModelingProps> = ({ isAutoplay, onInteract }) => {
    // Initialize nodes - If autoplay, start without the Inventory table (t4) to simulate its creation
    const [nodes, setNodes] = useState<TableNode[]>(() => {
        if (isAutoplay) {
            return MOCK_SCHEMA_NODES.filter(n => n.id !== 't4');
        }
        return MOCK_SCHEMA_NODES;
    });
    
    // Viewport State
    const [scale, setScale] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

    // Drag State
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    
    // Highlight State for Autoplay/Interaction
    const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);

    // Context Menu
    const [contextMenu, setContextMenu] = useState<ContextMenuState>({ visible: false, x: 0, y: 0, nodeId: null });
    
    const containerRef = useRef<HTMLDivElement>(null);
    const GRID_SIZE = 20;

    // Autoplay Animation Sequence
    useEffect(() => {
        if (isAutoplay && !draggingId && !isPanning) {
            // Step 1: Highlight 'products' table (t3) to show context
            const t1 = setTimeout(() => {
                setHighlightedNodeId('t3');
            }, 800);

            // Step 2: "AI" adds the 'inventory' table (t4)
            const t2 = setTimeout(() => {
                const inventoryNode = MOCK_SCHEMA_NODES.find(n => n.id === 't4');
                if (inventoryNode) {
                    setNodes(prev => {
                        if (prev.find(n => n.id === 't4')) return prev;
                        return [...prev, { ...inventoryNode, x: 350, y: 300 }];
                    });
                }
                setHighlightedNodeId('t4'); // Switch highlight to new table
            }, 2200);

            // Step 3: Clear highlight
            const t3 = setTimeout(() => {
                setHighlightedNodeId(null);
            }, 4000);

            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
        } else if (!isAutoplay) {
            setHighlightedNodeId(null);
        }
    }, [isAutoplay, draggingId, isPanning]);

    // Global Mouse Handlers
    useEffect(() => {
        const handleMouseMoveWindow = (e: MouseEvent) => {
            if (draggingId) {
                if (onInteract) onInteract();
                // Snap to Grid Logic
                const rawX = (e.clientX - dragOffset.x) / scale;
                const rawY = (e.clientY - dragOffset.y) / scale;
                
                const snappedX = Math.round(rawX / GRID_SIZE) * GRID_SIZE;
                const snappedY = Math.round(rawY / GRID_SIZE) * GRID_SIZE;

                setNodes(prev => prev.map(n => 
                    n.id === draggingId 
                    ? { ...n, x: snappedX, y: snappedY } 
                    : n
                ));
            } else if (isPanning) {
                const dx = e.clientX - lastMousePos.x;
                const dy = e.clientY - lastMousePos.y;
                setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
                setLastMousePos({ x: e.clientX, y: e.clientY });
            }
        };

        const handleMouseUpWindow = () => {
            setDraggingId(null);
            setIsPanning(false);
        };

        if (draggingId || isPanning) {
            window.addEventListener('mousemove', handleMouseMoveWindow);
            window.addEventListener('mouseup', handleMouseUpWindow);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMoveWindow);
            window.removeEventListener('mouseup', handleMouseUpWindow);
        };
    }, [draggingId, isPanning, dragOffset, lastMousePos, scale, onInteract]);

    // -- Handlers --

    const handleNodeMouseDown = (e: React.MouseEvent, id: string, nodeX: number, nodeY: number) => {
        if (e.button !== 0) return; // Only left click drags
        if (onInteract) onInteract();
        e.stopPropagation();
        setDraggingId(id);
        setHighlightedNodeId(id); // Highlight on click
        setContextMenu({ ...contextMenu, visible: false }); // Close menu on interaction
        setDragOffset({ 
            x: e.clientX - (nodeX * scale), 
            y: e.clientY - (nodeY * scale) 
        });
    };

    const handleNodeContextMenu = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        if (onInteract) onInteract();
        setContextMenu({
            visible: true,
            x: e.clientX,
            y: e.clientY,
            nodeId: id
        });
    };

    const handleCanvasMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        if (onInteract) onInteract();
        setIsPanning(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
        setContextMenu({ ...contextMenu, visible: false });
        setHighlightedNodeId(null);
    };

    const handleAddColumn = (e: React.MouseEvent, nodeId: string) => {
        e.stopPropagation();
        if (onInteract) onInteract();
        setNodes(prev => prev.map(n => {
            if (n.id === nodeId) {
                return { ...n, columns: [...n.columns, 'new_field'] };
            }
            return n;
        }));
    };

    const deleteNode = (id: string) => {
        if (onInteract) onInteract();
        setNodes(prev => prev.filter(n => n.id !== id));
        setContextMenu({ ...contextMenu, visible: false });
    };

    const handleAddTable = () => {
        if (onInteract) onInteract();
        const id = `t${Date.now()}`;
        // Add new table at center of current view roughly
        const centerX = -pan.x / scale + (containerRef.current ? containerRef.current.clientWidth / 2 / scale : 400);
        const centerY = -pan.y / scale + (containerRef.current ? containerRef.current.clientHeight / 2 / scale : 300);
        
        const newNode: TableNode = {
            id,
            name: 'new_table',
            columns: ['id', 'created_at'],
            x: centerX - 100, // Offset to center the node
            y: centerY - 100
        };
        setNodes(prev => [...prev, newNode]);
        setHighlightedNodeId(id);
    };

    // -- Orthogonal Path Rendering --
    const getOrthogonalPath = (startId: string, endId: string, startOffsetY = 40, endOffsetY = 40) => {
        const startNode = nodes.find(n => n.id === startId);
        const endNode = nodes.find(n => n.id === endId);

        if (!startNode || !endNode) return "";

        // Anchors: Start right side, End left side
        const startX = startNode.x + 220; 
        const startY = startNode.y + startOffsetY;
        const endX = endNode.x; 
        const endY = endNode.y + endOffsetY;

        const dist = Math.abs(endX - startX);
        const midX = startX + (dist / 2);

        // Simple S-curve via orthogonal segments
        return `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
    };

    const getTypeBadge = (colName: string) => {
        if (colName.includes('id') || colName.includes('amount') || colName.includes('price') || colName.includes('stock')) return "123";
        if (colName.includes('date') || colName.includes('at')) return "📅";
        return "Aa";
    };

    return (
        <div 
            ref={containerRef}
            className={`h-full w-full relative bg-[#f8fafc] overflow-hidden select-none font-sans ${isPanning ? 'cursor-grabbing' : 'cursor-default'}`}
            onMouseDown={handleCanvasMouseDown}
            onContextMenu={(e) => e.preventDefault()}
            onWheel={(e) => {
                if(e.ctrlKey) {
                    e.preventDefault();
                    setScale(s => Math.min(Math.max(s - e.deltaY * 0.001, 0.5), 2));
                }
            }}
        >
             {/* Grid Background */}
             <div className="absolute inset-0 pointer-events-none" 
                  style={{
                      backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                      `,
                      backgroundSize: `${GRID_SIZE * scale}px ${GRID_SIZE * scale}px`,
                      transform: `translate(${pan.x}px, ${pan.y}px)`,
                      opacity: 0.5
                  }}>
             </div>

             {/* Canvas Content */}
             <div 
                className="absolute inset-0 top-0 left-0 origin-top-left will-change-transform"
                style={{ 
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                    transition: isPanning || draggingId ? 'none' : 'transform 0.1s linear'
                }}
             >
                 {/* Connections Layer */}
                 <svg className="absolute -left-[5000px] -top-[5000px] w-[10000px] h-[10000px] pointer-events-none z-0 overflow-visible">
                     <defs>
                        <marker id="arrow-gray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                        </marker>
                     </defs>
                     {/* Dynamic Connections based on existing nodes */}
                     {/* Only render connection if both nodes exist */}
                     {nodes.find(n => n.id === 't1') && nodes.find(n => n.id === 't2') && (
                         <path d={getOrthogonalPath('t1', 't2', 60, 60)} stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrow-gray)" />
                     )}
                     {nodes.find(n => n.id === 't3') && nodes.find(n => n.id === 't1') && (
                         <path d={getOrthogonalPath('t3', 't1', 60, 100)} stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrow-gray)" />
                     )}
                     {nodes.find(n => n.id === 't3') && nodes.find(n => n.id === 't4') && (
                         <path d={getOrthogonalPath('t3', 't4', 100, 60)} stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrow-gray)" />
                     )}
                 </svg>

                 {/* Nodes */}
                 {nodes.map((node) => (
                     <div
                        key={node.id}
                        onMouseDown={(e) => handleNodeMouseDown(e, node.id, node.x, node.y)}
                        onContextMenu={(e) => handleNodeContextMenu(e, node.id)}
                        className={`absolute w-[220px] bg-white rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing z-10 flex flex-col border transition-all duration-300
                            ${draggingId === node.id ? 'shadow-xl scale-[1.02] z-50' : ''}
                            ${highlightedNodeId === node.id ? 'ring-2 ring-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] border-purple-500 z-40' : 'border-slate-200'}
                        `}
                        style={{ 
                            transform: `translate(${node.x}px, ${node.y}px)`,
                        }}
                     >
                         {/* Highlight Tag */}
                         {highlightedNodeId === node.id && isAutoplay && (
                             <div className="absolute -top-8 left-0 right-0 flex justify-center animate-fade-in-up">
                                 <div className="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                                     <Sparkles size={10} className="text-yellow-300" /> AI Generating
                                 </div>
                             </div>
                         )}

                         {/* Node Header */}
                         <div className={`px-3 py-2.5 rounded-t-lg flex justify-between items-center text-white transition-colors
                             ${highlightedNodeId === node.id ? 'bg-purple-600' : (draggingId === node.id ? 'bg-blue-600' : 'bg-slate-800')}
                         `}>
                             <div className="flex items-center gap-2 overflow-hidden">
                                <Box size={14} className={`${highlightedNodeId === node.id ? 'text-white' : 'text-blue-200'} shrink-0`} />
                                <span className="font-semibold text-sm tracking-wide truncate">{node.name}</span>
                             </div>
                             <button 
                                onMouseDown={(e) => e.stopPropagation()} 
                                onClick={(e) => handleNodeContextMenu(e, node.id)}
                                className="text-white/60 hover:text-white transition-colors"
                             >
                                <MoreVertical size={14} />
                             </button>
                         </div>
                         
                         {/* Columns */}
                         <div className="bg-white rounded-b-lg divide-y divide-slate-100 text-sm">
                             {node.columns.map((col, idx) => (
                                 <div key={idx} className="flex items-center justify-between px-3 py-2 hover:bg-slate-50 group transition-colors">
                                     <div className="flex items-center gap-2 overflow-hidden">
                                         <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{getTypeBadge(col)}</span>
                                         <span className="text-slate-700 truncate">{col}</span>
                                     </div>
                                     {/* Port dot */}
                                     <div className="w-2 h-2 rounded-full bg-slate-200 border border-white group-hover:bg-blue-400"></div>
                                 </div>
                             ))}
                             
                             {/* Add Column Button */}
                             <button 
                                onClick={(e) => handleAddColumn(e, node.id)}
                                className="w-full px-3 py-2 flex items-center gap-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors rounded-b-lg border-t border-transparent hover:border-blue-100"
                             >
                                 <Plus size={14} />
                                 <span className="text-xs font-medium">Add field</span>
                             </button>
                         </div>
                     </div>
                 ))}
             </div>
             
             {/* Canvas Controls */}
             <div className="absolute bottom-6 left-6 flex flex-col gap-3" onMouseDown={(e) => e.stopPropagation()}>
                {/* View Controls */}
                <div className="flex flex-col bg-white border border-slate-200 rounded-lg shadow-lg z-20 overflow-hidden">
                    <button onClick={() => setScale(s => Math.min(s + 0.1, 2))} className="p-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition-colors"><ZoomIn size={18} /></button>
                    <button onClick={() => setScale(s => Math.max(s - 0.1, 0.5))} className="p-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition-colors"><ZoomOut size={18} /></button>
                    <button onClick={() => { setPan({x:0, y:0}); setScale(1); }} className="p-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors" title="Reset View"><Box size={18} /></button>
                </div>
             </div>

             {/* Top Right Action Bar */}
             <div className="absolute top-4 right-4 z-20 flex gap-2" onMouseDown={(e) => e.stopPropagation()}>
                 <button 
                    onClick={handleAddTable}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg shadow-lg hover:bg-slate-800 transition-all font-medium text-sm"
                 >
                     <TableIcon size={16} /> Add Table
                 </button>
             </div>

             {/* Context Menu Portal */}
             {contextMenu.visible && contextMenu.nodeId && (
                 <div 
                    className="fixed z-[100] bg-white rounded-lg shadow-xl border border-slate-200 w-48 py-1 animate-scale-up origin-top-left"
                    style={{ left: contextMenu.x, top: contextMenu.y }}
                    onMouseDown={(e) => e.stopPropagation()}
                 >
                     <div className="px-3 py-2 border-b border-slate-100 mb-1">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Table Actions</span>
                     </div>
                     <button className="w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700 flex items-center gap-2">
                         <Edit2 size={14} /> Rename Table
                     </button>
                     <button className="w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700 flex items-center gap-2">
                         <Copy size={14} /> Duplicate
                     </button>
                     <div className="h-[1px] bg-slate-100 my-1"></div>
                     <button 
                        onClick={() => deleteNode(contextMenu.nodeId!)}
                        className="w-full text-left px-3 py-2 hover:bg-red-50 text-sm text-red-600 flex items-center gap-2"
                    >
                         <Trash2 size={14} /> Delete
                     </button>
                 </div>
             )}
        </div>
    );
};
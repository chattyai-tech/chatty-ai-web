'use client'

import React, { useState, useEffect, useRef } from 'react';
import {
    MoreHorizontal,
    PenLine,
    Trash2,
    Mic,
    Plus,
    LayoutGrid,
    Sparkles,
    Send,
    Search,
    X
} from 'lucide-react';
import { BrandLogo } from '../../../BrandLogo';

interface DocumentProps {
    isAutoplay: boolean;
    onInteract?: () => void;
}

interface DocMessage {
    id: string;
    type: 'user' | 'bot';
    text?: string;
    component?: React.ReactNode;
    timestamp: string;
}

// Helper component to highlight text based on search term
const Highlight: React.FC<{ text: string; term: string }> = ({ text, term }) => {
    if (!term || !term.trim()) return <>{text}</>;

    // Split text by the search term (case insensitive), capturing the delimiter
    // Using a simple split regex. Special regex chars in 'term' are not escaped here for simplicity, 
    // but in a production app you should escape them.
    const parts = text.split(new RegExp(`(${term})`, 'gi'));

    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === term.toLowerCase() ? (
                    <span key={i} className="bg-yellow-200 dark:bg-yellow-900/50 text-slate-900 dark:text-yellow-200 rounded-[2px] shadow-sm px-0.5 transition-all duration-300">
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
};

export const DocumentView: React.FC<DocumentProps> = ({ isAutoplay, onInteract }) => {
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);

    // Initial history matches the screenshot
    const [history, setHistory] = useState<DocMessage[]>([]);
    const [hasSimulated, setHasSimulated] = useState(false);

    // Initial Load Simulation
    useEffect(() => {
        const loadInitial = setTimeout(() => {
            setHistory([
                {
                    id: '1',
                    type: 'user',
                    text: 'summarize our company backup and restore procedure',
                    timestamp: 'Today at 8:45 PM'
                }
            ]);

            // Bot reply shortly after
            setTimeout(() => {
                setHistory(prev => [...prev, {
                    id: '2',
                    type: 'bot',
                    // We render component dynamically below to pass props
                    timestamp: 'Today at 8:45 PM'
                }]);
            }, 800);
        }, 500);
        return () => clearTimeout(loadInitial);
    }, []);

    // Autoplay Typing Simulation
    useEffect(() => {
        if (isAutoplay && !hasSimulated && history.length > 0) {
            const textToType = "Add a section about cloud recovery RTO/RPO limits.";
            let i = 0;
            const typeTimer = setInterval(() => {
                setInputValue(textToType.slice(0, i + 1));
                i++;
                if (i >= textToType.length) {
                    clearInterval(typeTimer);
                    // Send message after typing
                    setTimeout(() => {
                        handleSendInternal(textToType);
                        setHasSimulated(true);
                    }, 800);
                }
            }, 50);

            // Delay start to allow user to see the view first
            const startDelay = setTimeout(() => {
                // The interval is already running, but we could gate it here if needed. 
                // Logic simplifies to just running immediately after mount/prop change for demo fluidity
            }, 1000);

            return () => { clearInterval(typeTimer); clearTimeout(startDelay); };
        }
    }, [isAutoplay, hasSimulated, history.length]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // Scroll to the bottom of the container only, not the entire page
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [history]);

    const handleSendInternal = (text: string) => {
        const newMsg: DocMessage = {
            id: Date.now().toString(),
            type: 'user',
            text: text,
            timestamp: 'Just now'
        };

        setHistory(prev => [...prev, newMsg]);
        setInputValue("");

        // Simulate bot reply
        setTimeout(() => {
            setHistory(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                text: "I've updated the procedure with the standard RTO (4 hours) and RPO (1 hour) limits for cloud recovery scenarios. Would you like to review the draft?",
                timestamp: 'Just now'
            }]);
        }, 1500);
    }

    const handleSend = () => {
        if (!inputValue.trim()) return;
        if (onInteract) onInteract(); // Stop autoplay if user manually sends
        handleSendInternal(inputValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="h-full flex flex-col bg-[var(--bg-card)] font-sans relative" onClick={onInteract}>

            {/* Header */}
            <div className="h-14 border-b border-[var(--border-primary)] flex items-center justify-between px-6 shrink-0 bg-[var(--bg-card)] transition-all">
                <div className="flex items-center gap-4 flex-1 overflow-hidden">
                    {!isSearchActive ? (
                        <div className="flex items-center gap-2 animate-fade-in whitespace-nowrap">
                            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Company procedures</h2>
                            <span className="text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-secondary)]"><Plus size={16} /></span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 flex-1 max-w-md animate-fade-in-up">
                            <div className="relative flex-1">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                                <input
                                    autoFocus
                                    type="text"
                                    className="w-full bg-[var(--bg-elevated)] border border-transparent focus:bg-[var(--bg-card)] focus:border-blue-200 rounded-md py-1.5 pl-9 pr-8 text-sm outline-none transition-all text-[var(--text-primary)]"
                                    placeholder="Search in document..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <button onClick={() => setSearchTerm("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
                                        <X size={12} />
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-3 text-[var(--text-muted)] shrink-0">
                    <button
                        onClick={() => {
                            setIsSearchActive(!isSearchActive);
                            if (isSearchActive) setSearchTerm("");
                        }}
                        className={`p-2 rounded-md transition-colors ${isSearchActive ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'hover:bg-[var(--bg-elevated)] hover:text-[var(--text-secondary)]'}`}
                        title="Toggle Search"
                    >
                        <Search size={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-[var(--border-primary)] mx-1"></div>
                    <MoreHorizontal size={20} className="cursor-pointer hover:text-[var(--text-secondary)]" />
                    <div className="h-6 w-[80px] flex items-center justify-end">
                        <BrandLogo size={20} className="h-6 w-auto" variant="hero" />
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-8 space-y-8 pb-32">
                {history.map((msg) => (
                    <div key={msg.id} className="animate-fade-in">
                        {msg.type === 'user' ? (
                            <div className="flex justify-end">
                                <div className="bg-[var(--bg-elevated)] border border-[var(--border-primary)] rounded-2xl rounded-tr-sm px-5 py-3 max-w-2xl shadow-sm group">
                                    <div className="text-[11px] text-[var(--text-muted)] mb-1 text-right font-medium">{msg.timestamp}</div>
                                    <p className="text-[var(--text-secondary)] text-[15px]">
                                        <Highlight text={msg.text || ""} term={searchTerm} />
                                    </p>
                                    <div className="flex justify-end gap-2 mt-2 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PenLine size={12} className="cursor-pointer hover:text-[var(--text-secondary)]" />
                                        <Trash2 size={12} className="cursor-pointer hover:text-[var(--text-secondary)]" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-4 max-w-4xl">
                                <div className="h-8 w-8 rounded-lg bg-green-900 dark:bg-green-800 flex items-center justify-center shrink-0 mt-1 shadow-sm text-white font-bold text-xs">
                                    HR
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-sm text-[var(--text-primary)]">Company procedures</span>
                                        <span className="text-[11px] text-[var(--text-secondary)] font-bold">{msg.timestamp}</span>
                                    </div>

                                    {/* Render Bot Response with Highlighting */}
                                    {msg.text ? (
                                        <div className="prose prose-sm max-w-none text-[var(--text-secondary)] bg-[var(--bg-card)]">
                                            <p><Highlight text={msg.text} term={searchTerm} /></p>
                                        </div>
                                    ) : (
                                        <BotResponseContent searchTerm={searchTerm} />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Floating Box */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 z-10">
                <div className="bg-[var(--bg-card)] rounded-2xl shadow-xl border border-[var(--border-primary)] p-2 flex items-center gap-2 ring-1 ring-[var(--border-primary)]/50 transition-all focus-within:ring-blue-500/20 focus-within:border-blue-300">
                    <button className="p-2 text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] rounded-full transition-colors">
                        <Plus size={20} />
                    </button>
                    <button className="p-2 text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] rounded-full transition-colors">
                        <LayoutGrid size={18} />
                    </button>
                    <div className="px-3 py-1 bg-[var(--bg-elevated)] rounded text-xs text-[var(--text-muted)] font-medium flex items-center gap-1 cursor-default">
                        <Sparkles size={12} />
                        MS365_tool_agent_mode
                    </div>
                    <input
                        type="text"
                        placeholder="Send a Message"
                        className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)] px-2 h-10 placeholder:text-[var(--text-disabled)]"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onClick={(e) => e.stopPropagation()}
                        onFocus={() => { if (onInteract) onInteract(); }}
                    />
                    <button className="p-2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                        <Mic size={20} />
                    </button>
                    <button
                        onClick={handleSend}
                        className={`p-2 rounded-full transition-colors shadow-md flex items-center justify-center w-9 h-9 ${inputValue.trim() ? 'bg-[var(--accent-violet)] text-white hover:bg-[var(--violet-700)]' : 'bg-[var(--bg-surface)] text-[var(--text-disabled)]'}`}
                    >
                        {inputValue.trim() ? <Send size={14} className="ml-0.5" /> : <div className="rotate-90"><LayoutGrid size={16} /></div>}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Extracted Content Component for cleaner code
const BotResponseContent: React.FC<{ searchTerm?: string }> = ({ searchTerm = "" }) => (
    <div className="prose prose-sm max-w-none text-[var(--text-secondary)]">
        <p className="mb-4">
            <Highlight term={searchTerm} text="The company's " />
            <span className="font-semibold"><Highlight term={searchTerm} text="backup and restore procedure" /></span>
            <Highlight term={searchTerm} text=" (Procedure ID: 901-DP) defines the standards, responsibilities, and technical processes for safeguarding organizational data across all information systems within Rothschild Caesarea Group." />
        </p>

        <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-2"><Highlight term={searchTerm} text="1. Purpose and Scope" /></h3>
        <p className="mb-4">
            <Highlight term={searchTerm} text="The procedure ensures continuous data protection and the ability to recover information to its original state in case of data loss or system failure. It applies to all company systems, servers, and cloud storage environments" />
            <sup className="text-blue-600 font-medium">^1</sup>.
        </p>

        <h3 className="text-[16px] font-bold text-slate-900 mb-2"><Highlight term={searchTerm} text="2. Responsibilities" /></h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-[var(--text-muted)]">
            <li>
                <span className="font-semibold"><Highlight term={searchTerm} text="IT Systems Manager" /></span>
                <Highlight term={searchTerm} text=" oversees the implementation, compliance, and annual review of the backup and restore procedure." />
            </li>
            <li>
                <span className="font-semibold"><Highlight term={searchTerm} text="Infrastructure Manager" /></span>
                <Highlight term={searchTerm} text=" is responsible for managing backup hardware, executing daily backups, and testing recovery processes" />
                <sup className="text-blue-600 font-medium">^1</sup>.
            </li>
        </ul>

        <h3 className="text-[16px] font-bold text-slate-900 mb-2"><Highlight term={searchTerm} text="3. Backup Structure" /></h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-[var(--text-muted)]">
            <li><span className="font-semibold"><Highlight term={searchTerm} text="Full backups" /></span><Highlight term={searchTerm} text=" cover all company data (servers, systems, and files)." /></li>
            <li><span className="font-semibold"><Highlight term={searchTerm} text="Local backups" /></span><Highlight term={searchTerm} text=" are stored on-premises in the company's secured infrastructure." /></li>
            <li><span className="font-semibold"><Highlight term={searchTerm} text="Cloud backups" /></span><Highlight term={searchTerm} text=" are stored off-site in encrypted form using the AES-256 standard; encryption keys are rotated annually." /></li>
            <li>
                <span className="font-semibold"><Highlight term={searchTerm} text="Retention policy:" /></span>
                <ul className="list-[circle] pl-5 mt-1 space-y-1 text-[var(--text-muted)]">
                    <li><span className="font-semibold"><Highlight term={searchTerm} text="Daily backups" /></span><Highlight term={searchTerm} text=" retained for 7 days" /></li>
                    <li><span className="font-semibold"><Highlight term={searchTerm} text="Weekly backups" /></span><Highlight term={searchTerm} text=" retained for 21 days" /></li>
                    <li><span className="font-semibold"><Highlight term={searchTerm} text="Monthly backups" /></span><Highlight term={searchTerm} text=" retained for 12 months" /></li>
                    <li><span className="font-semibold"><Highlight term={searchTerm} text="Annual backups" /></span><Highlight term={searchTerm} text=" stored on physical media (tape) for 2 years" /><sup className="text-blue-600 font-medium">^2</sup>.</li>
                </ul>
            </li>
        </ul>

        <h3 className="text-[16px] font-bold text-slate-900 mb-2"><Highlight term={searchTerm} text="4. Restore Procedure" /></h3>
        <p className="mb-2">
            <Highlight term={searchTerm} text="Restoration can be initiated upon approval by the " />
            <span className="font-semibold"><Highlight term={searchTerm} text="Infrastructure Manager" /></span>
            <Highlight term={searchTerm} text=" or " />
            <span className="font-semibold"><Highlight term={searchTerm} text="IT Systems Manager" /></span>
            <Highlight term={searchTerm} text=" depending on scale:" />
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-slate-600">
            <li><span className="font-semibold"><Highlight term={searchTerm} text="Minor restores" /></span><Highlight term={searchTerm} text=" (specific files/directories) handled in production as needed." /></li>
            <li><span className="font-semibold"><Highlight term={searchTerm} text="Major restores" /></span><Highlight term={searchTerm} text=" (servers, databases) coordinated with executive IT leadership." /></li>
            <li><span className="font-semibold"><Highlight term={searchTerm} text="System restoration priority:" /></span><Highlight term={searchTerm} text=" infrastructure services, mission-critical systems (Tier A), Tier B systems, and then all other systems." /></li>
        </ul>
    </div>
);
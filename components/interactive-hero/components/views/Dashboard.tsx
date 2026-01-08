'use client'

import type React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Paperclip, Mic, ArrowUp } from 'lucide-react';
import { AnalysisView } from './Analysis';
import { BrandLogo } from '../../../BrandLogo';

interface DashboardProps {
    searchQuery: string;
    isTyping: boolean;
    showResults: boolean;
    onSearch: (query: string) => void;
    isAutoplay: boolean;
}

interface Message {
    id: string;
    type: 'user' | 'ai';
    text: string;
    component?: React.ReactNode;
}

export const DashboardView: React.FC<DashboardProps> = ({ searchQuery, isTyping, onSearch, isAutoplay }) => {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleUserSubmit = useCallback((query: string) => {
        if (!query.trim()) return;

        // Add User Message
        const userMsg: Message = { id: Date.now().toString(), type: 'user', text: query };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Notify parent 
        onSearch(query);

        setIsLoading(true);

        // Simulate Network Delay (Short for demo smoothness)
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                text: query,
                component: <AnalysisView isAutoplay={isAutoplay} />
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsLoading(false);
        }, 1200);
    }, [onSearch, isAutoplay]);

    // Handle external search query (from Autoplay or Props)
    useEffect(() => {
        if (isTyping && searchQuery === "") {
            setInputValue("What is the average salary for each position?");
        } else if (searchQuery && !isTyping && messages.length === 0) {
            // Commit the autoplay query
            handleUserSubmit(searchQuery);
        }
    }, [searchQuery, isTyping, messages.length, handleUserSubmit]);

    // Simple typing animation effect when `isTyping` is true
    useEffect(() => {
        if (isTyping) {
            let i = 0;
            const text = "What is the average salary for each position?";
            setInputValue("");
            const interval = setInterval(() => {
                setInputValue(text.slice(0, i + 1));
                i++;
                if (i > text.length) clearInterval(interval);
            }, 50); // Speed of typing
            return () => clearInterval(interval);
        }
    }, [isTyping]);

    // Scroll to bottom - only within the component container
    useEffect(() => {
        if (scrollContainerRef.current && messages.length > 0) {
            const container = scrollContainerRef.current;
            // Scroll to the bottom of the container only, not the entire page
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages.length]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Manual submit always triggers search
        handleUserSubmit(inputValue);
    };

    return (
        <div className="h-full flex flex-col relative bg-[var(--bg-card)]">

            {/* Scrollable Content Area - Refined Padding */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-32 scrollbar-thin scrollbar-thumb-[var(--border-primary)]">

                {messages.length === 0 ? (
                    // Empty State (ChatGPT Style) - Refined Design
                    <div className="h-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 animate-fade-in">
                        {/* Logo Section - Matching Navbar Style */}
                        <div className="mb-6 sm:mb-8 md:mb-10">
                            <BrandLogo size={56} className="h-14 sm:h-16 md:h-20 w-auto" variant="hero" />
                        </div>

                        {/* Heading */}
                        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 text-center">
                            How can I help you today?
                        </div>
                        <p className="text-sm sm:text-base text-[var(--text-muted)] mb-6 sm:mb-8 md:mb-10 text-center max-w-md">
                            Choose a suggestion or type your question below
                        </p>

                        {/* Suggestion Cards - Refined Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full max-w-2xl">
                            {[
                                { title: 'Analyze Q3 Revenue', sub: 'Compare against last year' },
                                { title: 'Schema Design', sub: 'Create a user table' },
                                { title: 'Workflow Automation', sub: 'Setup an email trigger' },
                                { title: 'Document Summary', sub: 'Summarize backup policy' },
                            ].map((card) => (
                                <button
                                    key={card.title}
                                    type="button"
                                    onClick={() => handleUserSubmit(card.title)}
                                    className="text-left p-4 sm:p-5 border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] hover:shadow-md transition-all duration-200 group active:scale-[0.98]"
                                >
                                    <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-violet)] mb-1.5 leading-tight">
                                        {card.title}
                                    </div>
                                    <div className="text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] leading-relaxed">
                                        {card.sub}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Chat Stream
                    <div className="w-full max-w-[800px] mx-auto pt-8 space-y-8">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                                {msg.type === 'user' ? (
                                    <div className="bg-[var(--bg-elevated)] px-5 py-2.5 rounded-[24px] max-w-[80%] text-[15px] text-[var(--text-primary)] leading-relaxed shadow-sm">
                                        {msg.text}
                                    </div>
                                ) : (
                                    <div className="flex gap-4 w-full">
                                        <div className="h-8 w-8 rounded-full bg-[var(--accent-violet)] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-1 shadow-md">C</div>
                                        <div className="flex-1 overflow-hidden">
                                            {/* AI Content Wrapper */}
                                            <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-[var(--text-primary)]">
                                                {msg.component}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="flex gap-4 w-full animate-fade-in">
                                <div className="h-8 w-8 rounded-full bg-[var(--accent-violet)] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-1">C</div>
                                <div className="flex items-center gap-1 mt-3">
                                    <div className="w-2 h-2 bg-[var(--accent-violet)] rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-[var(--accent-violet)] rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-[var(--accent-violet)] rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {/* Bottom Input Bar (Floating Capsule) - Refined */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)] to-transparent pt-8 sm:pt-10 md:pt-12">
                <div className="max-w-3xl mx-auto px-2 sm:px-4">
                    <form onSubmit={handleSubmit} className="relative bg-[var(--bg-elevated)] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 md:p-2.5 flex items-center shadow-sm ring-1 ring-[var(--border-primary)]/50 focus-within:ring-2 focus-within:ring-[var(--accent-violet)]/30 transition-all">
                        <button
                            type="button"
                            className="p-2 sm:p-2.5 text-[var(--text-muted)] hover:bg-[var(--bg-hover)] rounded-full transition-colors shrink-0"
                            aria-label="Attach file"
                        >
                            <Paperclip size={18} className="sm:w-5 sm:h-5" />
                        </button>
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Message Chatty..."
                            className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)] placeholder:text-[var(--text-disabled)] h-10 sm:h-12 md:h-14 py-2 sm:py-3 px-2 sm:px-3 text-sm sm:text-base"
                        />
                        <button
                            type="button"
                            className="p-2 sm:p-2.5 text-[var(--text-muted)] hover:bg-[var(--bg-hover)] rounded-full transition-colors shrink-0"
                            aria-label="Voice input"
                        >
                            <Mic size={18} className="sm:w-5 sm:h-5" />
                        </button>
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className={`p-2 sm:p-2.5 md:p-3 rounded-full shrink-0 transition-all duration-200 ${inputValue.trim()
                                    ? 'bg-[var(--accent-violet)] text-white shadow-md hover:bg-[var(--violet-700)]'
                                    : 'bg-[var(--bg-surface)] text-[var(--text-disabled)] cursor-not-allowed'
                                }`}
                            aria-label="Send message"
                        >
                            <ArrowUp size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    </form>
                    <div className="text-center mt-2 sm:mt-2.5">
                        <p className="text-[10px] sm:text-xs text-[var(--text-muted)] font-medium">Chatty AI can make mistakes. Check important info.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
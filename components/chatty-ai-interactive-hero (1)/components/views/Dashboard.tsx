import React, { useEffect, useState, useRef } from 'react';
import { Send, Paperclip, Mic, ArrowUp } from 'lucide-react';
import { AnalysisView } from './Analysis';

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

export const DashboardView: React.FC<DashboardProps> = ({ searchQuery, isTyping, showResults, onSearch, isAutoplay }) => {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle external search query (from Autoplay or Props)
    useEffect(() => {
        if (isTyping) {
            // Simulated typing effect handled by the parent state passing partial strings could be smoother
            // But here we rely on the full string passed at end of "type" action usually
            // However, the prompt implies "Simulating the typing". 
            // Since `searchQuery` is passed empty initially, then full text.
            // We can animate the local `inputValue` if we want, but for robust sync we'll use the prop directly if isTyping is false
        }
        
        if (isTyping && searchQuery === "") {
             setInputValue("What is the average salary for each position?"); // Show instantly or animate?
             // To animate, we'd need a local interval. Let's assume parent passes final text or we animate locally:
        } else if (searchQuery && !isTyping && messages.length === 0) {
            // Commit the autoplay query
            handleUserSubmit(searchQuery);
        }
    }, [searchQuery, isTyping]);

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

    // Scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleUserSubmit = (query: string) => {
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
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Manual submit always triggers search
        handleUserSubmit(inputValue);
    };

    return (
        <div className="h-full flex flex-col relative bg-white">
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-4 pb-32 scrollbar-thin scrollbar-thumb-slate-200">
                
                {messages.length === 0 ? (
                    // Empty State (ChatGPT Style)
                    <div className="h-full flex flex-col items-center justify-center -mt-12 animate-fade-in">
                        <div className="mb-8 p-4 bg-white rounded-full shadow-sm border border-slate-100">
                             <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold shadow-lg">C</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 w-full max-w-[700px]">
                            {[
                                { title: 'Analyze Q3 Revenue', sub: 'Compare against last year' },
                                { title: 'Schema Design', sub: 'Create a user table' },
                                { title: 'Workflow Automation', sub: 'Setup an email trigger' },
                                { title: 'Document Summary', sub: 'Summarize backup policy' },
                            ].map((card, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleUserSubmit(card.title)}
                                    className="text-left p-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:shadow-sm transition-all duration-200 group"
                                >
                                    <div className="text-sm font-semibold text-slate-800 group-hover:text-black">{card.title}</div>
                                    <div className="text-xs text-slate-500">{card.sub}</div>
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
                                    <div className="bg-[#f4f4f4] px-5 py-2.5 rounded-[24px] max-w-[80%] text-[15px] text-[#0d0d0d] leading-relaxed shadow-sm">
                                        {msg.text}
                                    </div>
                                ) : (
                                    <div className="flex gap-4 w-full">
                                        <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0 mt-1 shadow-md">C</div>
                                        <div className="flex-1 overflow-hidden">
                                            {/* AI Content Wrapper */}
                                            <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-[#0d0d0d]">
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
                                <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0 mt-1">C</div>
                                <div className="flex items-center gap-1 mt-3">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                                </div>
                             </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {/* Bottom Input Bar (Floating Capsule) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pt-10">
                <div className="max-w-[800px] mx-auto">
                    <form onSubmit={handleSubmit} className="relative bg-[#f4f4f4] rounded-[26px] p-2 flex items-end shadow-sm ring-1 ring-slate-900/5 focus-within:ring-slate-300 transition-all">
                        <button type="button" className="p-2.5 text-slate-500 hover:bg-slate-200 rounded-full mb-0.5 transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Message Chatty..."
                            className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-500 h-12 py-3 px-2 text-[15px]"
                        />
                        <button type="button" className="p-2.5 text-slate-500 hover:bg-slate-200 rounded-full mb-0.5 transition-colors">
                            <Mic size={20} />
                        </button>
                        <button 
                            type="submit"
                            disabled={!inputValue.trim()}
                            className={`p-2 rounded-full mb-0.5 transition-all duration-200 ${inputValue.trim() ? 'bg-black text-white shadow-md transform scale-100' : 'bg-[#e7e7e7] text-slate-400 scale-95'}`}
                        >
                            <ArrowUp size={20} />
                        </button>
                    </form>
                    <div className="text-center mt-2">
                        <p className="text-[11px] text-slate-400">Chatty AI can make mistakes. Check important info.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
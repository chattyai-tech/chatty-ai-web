'use client'

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Plus,
    Layout,
    Settings,
    MoreHorizontal,
    MessageSquare,
    Search,
    PenSquare,
    AlertTriangle,
    X
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
    currentView: ViewType;
    onNavigate: (view: ViewType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingView, setPendingView] = useState<ViewType | null>(null);

    const handleNavigation = (view: ViewType) => {
        if (view === currentView) return;

        // Mock check for unsaved changes (Assumed true for Modeling & Workflow for demo purposes)
        const hasUnsavedChanges = currentView === ViewType.MODELING || currentView === ViewType.WORKFLOW;

        if (hasUnsavedChanges) {
            setPendingView(view);
            setShowConfirm(true);
        } else {
            onNavigate(view);
        }
    };

    const confirmNavigation = () => {
        if (pendingView) {
            onNavigate(pendingView);
        }
        setShowConfirm(false);
        setPendingView(null);
    };

    const cancelNavigation = () => {
        setShowConfirm(false);
        setPendingView(null);
    };

    return (
        <aside className="h-full flex flex-col text-[#ececec]">
            {/* Logo Area */}
            <div className="px-4 py-3 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 hover:bg-[#212121] p-2 -ml-2 rounded-lg cursor-pointer transition-colors flex-1">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center shrink-0">
                        <span className="font-bold text-black text-sm">C</span>
                    </div>
                    <span className="font-semibold text-sm tracking-tight">Chatty AI</span>
                </div>
                <button
                    onClick={() => handleNavigation(ViewType.DASHBOARD)}
                    className="p-2 hover:bg-[#212121] rounded-lg text-[#ececec] transition-colors"
                    title="New Chat"
                >
                    <PenSquare size={18} />
                </button>
            </div>

            {/* Navigation / History */}
            <div className="flex-1 overflow-y-auto px-2 space-y-6 scrollbar-thin scrollbar-thumb-gray-700">

                {/* Section: Today */}
                <div>
                    <div className="px-2 text-[11px] font-bold text-[#A0A0A0] mb-2 uppercase tracking-wider">Today</div>
                    <div className="space-y-1">
                        <button
                            className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === ViewType.ANALYSIS || currentView === ViewType.DASHBOARD ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`}
                            onClick={() => handleNavigation(ViewType.DASHBOARD)}
                        >
                            <span className="truncate flex-1">Salary Analysis Q3</span>
                            <MoreHorizontal size={14} className="opacity-0 group-hover:opacity-100 text-[#ececec]" />
                        </button>
                        <button
                            className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === ViewType.MODELING ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`}
                            onClick={() => handleNavigation(ViewType.MODELING)}
                        >
                            <span className="truncate flex-1">Schema Modeling</span>
                        </button>
                    </div>
                </div>

                {/* Section: Previous 7 Days */}
                <div>
                    <div className="px-2 text-[11px] font-bold text-[#A0A0A0] mb-2 uppercase tracking-wider">Previous 7 Days</div>
                    <div className="space-y-1">
                        <button
                            className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === ViewType.WORKFLOW ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`}
                            onClick={() => handleNavigation(ViewType.WORKFLOW)}
                        >
                            <span className="truncate flex-1">Knowledge Agent Setup</span>
                        </button>
                        <button
                            className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === ViewType.DOCUMENT ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`}
                            onClick={() => handleNavigation(ViewType.DOCUMENT)}
                        >
                            <span className="truncate flex-1">Backup Procedures Doc</span>
                        </button>
                        <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors text-[#ececec] hover:bg-[#212121]">
                            <span className="truncate flex-1">SQL Optimization</span>
                        </button>
                        <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors text-[#ececec] hover:bg-[#212121]">
                            <span className="truncate flex-1">User Churn Report</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="p-2 mt-auto border-t border-[#333]">
                <button className="w-full flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-[#212121] text-sm text-[#ececec] transition-colors text-left">
                    <div className="h-7 w-7 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">U</div>
                    <div className="flex-1">
                        <div className="font-medium">User Admin</div>
                        <div className="text-[10px] text-[#B0B0B0] font-bold">Pro Plan</div>
                    </div>
                    <Settings size={16} className="text-[#999]" />
                </button>
            </div>

            {/* Confirmation Dialog Portal */}
            {showConfirm && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-fade-in font-sans">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-[400px] overflow-hidden animate-scale-up ring-1 ring-white/10">
                        <div className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                                    <AlertTriangle size={20} className="text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-slate-900 mb-1">Unsaved Changes</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        You have unsaved changes in the <strong>{currentView === ViewType.MODELING ? 'Data Modeler' : 'Workflow Editor'}</strong>.
                                        Leaving now will discard your progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3 border-t border-slate-100">
                            <button
                                onClick={cancelNavigation}
                                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-200/50 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmNavigation}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors ring-1 ring-red-700/10"
                            >
                                Leave without saving
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </aside>
    );
};
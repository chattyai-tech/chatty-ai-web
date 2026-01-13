(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/interactive-hero/components/views/Analysis.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalysisView",
    ()=>AnalysisView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AnalysisView = ({ isAutoplay })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('answer');
    const [stepsExpanded, setStepsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isOptimized, setIsOptimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOptimizing, setIsOptimizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Exact colors from Screenshot 8
    const chartData = [
        {
            name: 'Assistant Engineer',
            value: 55841,
            fill: '#7c5cfc'
        },
        {
            name: 'Engineer',
            value: 57000,
            fill: '#5542f6'
        },
        {
            name: 'Manager',
            value: 77723,
            fill: '#2a85ff'
        },
        {
            name: 'Senior Engineer',
            value: 69782,
            fill: '#0ea5e9'
        },
        {
            name: 'Senior Staff',
            value: 79731,
            fill: '#3b318d'
        },
        {
            name: 'Staff',
            value: 65841,
            fill: '#e91e63'
        },
        {
            name: 'Technique Leader',
            value: 64000,
            fill: '#f95700'
        }
    ];
    // Auto-switch tabs for demo effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalysisView.useEffect": ()=>{
            if (isAutoplay) {
                const t1 = setTimeout({
                    "AnalysisView.useEffect.t1": ()=>setActiveTab('sql')
                }["AnalysisView.useEffect.t1"], 1500);
                const t2 = setTimeout({
                    "AnalysisView.useEffect.t2": ()=>setActiveTab('chart')
                }["AnalysisView.useEffect.t2"], 3500);
                return ({
                    "AnalysisView.useEffect": ()=>{
                        clearTimeout(t1);
                        clearTimeout(t2);
                    }
                })["AnalysisView.useEffect"];
            } else {
                setActiveTab('answer');
            }
        }
    }["AnalysisView.useEffect"], [
        isAutoplay
    ]);
    const handleOptimize = ()=>{
        setIsOptimizing(true);
        setTimeout(()=>{
            setIsOptimized(true);
            setIsOptimizing(false);
        }, 1200);
    };
    const handleCopy = ()=>{
        navigator.clipboard.writeText(isOptimized ? optimizedSQL : originalSQL);
        setIsCopied(true);
        setTimeout(()=>setIsCopied(false), 2000);
    };
    const originalSQL = `SELECT
  t."title",
  AVG(s."salary") AS "avg_salary"
FROM "LatestSalaries" s
JOIN "titles" t ON s."emp_no" = t."emp_no"
GROUP BY t."title"
ORDER BY avg_salary DESC`;
    const optimizedSQL = `/* Optimized by Chatty AI */
WITH TitleAvg AS (
    SELECT 
        t.title,
        AVG(s.salary) as avg_salary
    FROM titles t
    INNER JOIN LatestSalaries s 
        ON t.emp_no = s.emp_no
    WHERE s.to_date = '9999-01-01'
    GROUP BY t.title
)
SELECT * FROM TitleAvg
ORDER BY avg_salary DESC;`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-4 animate-fade-in font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-[var(--border-primary)] rounded-lg bg-[var(--bg-card)] overflow-hidden shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setStepsExpanded(!stepsExpanded),
                        className: "w-full flex items-center justify-between px-3 py-2 bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 12,
                                        className: "text-purple-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Analyzed data"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            stepsExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 14,
                                className: "text-[var(--text-muted)]"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 112,
                                columnNumber: 38
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 14,
                                className: "text-[var(--text-muted)]"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 112,
                                columnNumber: 103
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    stepsExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pb-3 pt-2 space-y-1 bg-[var(--bg-card)] border-t border-[var(--border-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-[var(--text-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 12,
                                        className: "text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 117,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Identified tables: salaries, titles"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-[var(--text-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 12,
                                        className: "text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Joined on emp_no"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-[var(--text-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 12,
                                        className: "text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Calculated averages"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[15px] text-[var(--text-primary)] leading-relaxed",
                children: [
                    "To find the average salary for each position, I analyzed the latest salary data. Here are the average salaries for key positions:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc ml-5 mt-2 space-y-1 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Staff:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " $65,841.37"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Manager:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " $77,723.67"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Senior Engineer:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " $69,782.33"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Senior Staff:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " $79,731.68"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-[var(--border-primary)] rounded-xl bg-[var(--bg-card)] shadow-sm overflow-hidden my-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 p-1 bg-[var(--bg-elevated)] border-b border-[var(--border-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab('chart'),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === 'chart' ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        size: 14,
                                        className: "text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Chart"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 147,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab('sql'),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === 'sql' ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                        size: 14,
                                        className: "text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SQL Query"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 161,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab('answer'),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === 'answer' ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 14,
                                        className: "text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Data Table"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 163,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-[var(--bg-card)] min-h-[300px]",
                        children: [
                            activeTab === 'answer' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-[var(--border-primary)] rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-b border-[var(--border-primary)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left font-medium",
                                                            children: "Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-right font-medium",
                                                            children: "Average Salary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 180,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: chartData.slice(0, 5).map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-[var(--bg-elevated)] border-b border-[var(--border-primary)] last:border-0 text-[var(--text-secondary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2",
                                                                children: row.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 text-right font-mono",
                                                                children: [
                                                                    "$",
                                                                    row.value.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, row.name, true, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 186,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 179,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                    lineNumber: 178,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 177,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'sql' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-[var(--text-secondary)]",
                                                children: "Generated SQL"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 202,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    isOptimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full font-medium flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Optimized (Execution: 12ms)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleOptimize,
                                                        disabled: isOptimizing,
                                                        className: "text-xs flex items-center gap-1 text-[var(--text-muted)] hover:text-blue-600 border border-[var(--border-primary)] px-2 py-1 rounded bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] transition-all",
                                                        children: [
                                                            isOptimizing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "animate-spin",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 92
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 61
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 125
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Optimize Query"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleCopy,
                                                        className: "text-xs flex items-center gap-1 text-[var(--text-muted)] hover:text-blue-600 border border-[var(--border-primary)] px-2 py-1 rounded bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] transition-all",
                                                        children: [
                                                            isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 12,
                                                                className: "text-green-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 102
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            isCopied ? "Copied" : "Copy"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "text-xs flex items-center gap-1 text-[var(--text-muted)] hover:text-blue-600 border border-[var(--border-primary)] px-2 py-1 rounded bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                size: 12,
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Run"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 203,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 201,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-[var(--bg-elevated)] border rounded-lg p-3 font-mono text-xs overflow-x-auto transition-colors duration-500 ${isOptimized ? 'border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-900/20' : 'border-[var(--border-primary)]'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: `${isOptimizing ? 'animate-pulse' : ''} text-[var(--text-primary)]`,
                                            children: isOptimized ? optimizedSQL : originalSQL
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                            lineNumber: 235,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 234,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 200,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'chart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[300px] animate-fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: chartData,
                                        margin: {
                                            bottom: 40,
                                            top: 10,
                                            left: 0,
                                            right: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                vertical: false,
                                                stroke: "#f1f5f9"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 244,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fill: '#64748b',
                                                    fontSize: 10
                                                },
                                                angle: -45,
                                                textAnchor: "end",
                                                interval: 0,
                                                dy: 10
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 245,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fill: '#94a3b8',
                                                    fontSize: 10
                                                },
                                                tickFormatter: (val)=>`${val / 1000}k`
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 255,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                cursor: {
                                                    fill: '#f8fafc'
                                                },
                                                contentStyle: {
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                                    fontSize: '12px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 261,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "value",
                                                radius: [
                                                    4,
                                                    4,
                                                    0,
                                                    0
                                                ],
                                                children: chartData.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                        fill: entry.fill
                                                    }, `cell-${entry.name}`, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                                lineNumber: 265,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                        lineNumber: 243,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                    lineNumber: 242,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                                lineNumber: 241,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[15px] text-[var(--text-primary)]",
                children: "If you need information on additional positions or a different visualization, just ask!"
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/components/views/Analysis.tsx",
        lineNumber: 99,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnalysisView, "efj5uL37ZZNjpsxLVoyT6ZeJHow=");
_c = AnalysisView;
var _c;
__turbopack_context__.k.register(_c, "AnalysisView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/components/views/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardView",
    ()=>DashboardView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Analysis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/components/views/Analysis.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DashboardView = ({ searchQuery, isTyping, onSearch, isAutoplay })=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleUserSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DashboardView.useCallback[handleUserSubmit]": (query)=>{
            if (!query.trim()) return;
            // Add User Message
            const userMsg = {
                id: Date.now().toString(),
                type: 'user',
                text: query
            };
            setMessages({
                "DashboardView.useCallback[handleUserSubmit]": (prev)=>[
                        ...prev,
                        userMsg
                    ]
            }["DashboardView.useCallback[handleUserSubmit]"]);
            setInputValue("");
            // Notify parent 
            onSearch(query);
            setIsLoading(true);
            // Simulate Network Delay (Short for demo smoothness)
            setTimeout({
                "DashboardView.useCallback[handleUserSubmit]": ()=>{
                    const aiMsg = {
                        id: (Date.now() + 1).toString(),
                        type: 'ai',
                        text: query,
                        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Analysis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalysisView"], {
                            isAutoplay: isAutoplay
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 51,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0))
                    };
                    setMessages({
                        "DashboardView.useCallback[handleUserSubmit]": (prev)=>[
                                ...prev,
                                aiMsg
                            ]
                    }["DashboardView.useCallback[handleUserSubmit]"]);
                    setIsLoading(false);
                }
            }["DashboardView.useCallback[handleUserSubmit]"], 1200);
        }
    }["DashboardView.useCallback[handleUserSubmit]"], [
        onSearch,
        isAutoplay
    ]);
    // Handle external search query (from Autoplay or Props)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardView.useEffect": ()=>{
            if (isTyping && searchQuery === "") {
                setInputValue("What is the average salary for each position?");
            } else if (searchQuery && !isTyping && messages.length === 0) {
                // Commit the autoplay query
                handleUserSubmit(searchQuery);
            }
        }
    }["DashboardView.useEffect"], [
        searchQuery,
        isTyping,
        messages.length,
        handleUserSubmit
    ]);
    // Simple typing animation effect when `isTyping` is true
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardView.useEffect": ()=>{
            if (isTyping) {
                let i = 0;
                const text = "What is the average salary for each position?";
                setInputValue("");
                const interval = setInterval({
                    "DashboardView.useEffect.interval": ()=>{
                        setInputValue(text.slice(0, i + 1));
                        i++;
                        if (i > text.length) clearInterval(interval);
                    }
                }["DashboardView.useEffect.interval"], 50); // Speed of typing
                return ({
                    "DashboardView.useEffect": ()=>clearInterval(interval)
                })["DashboardView.useEffect"];
            }
        }
    }["DashboardView.useEffect"], [
        isTyping
    ]);
    // Scroll to bottom - only within the component container
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardView.useEffect": ()=>{
            if (scrollContainerRef.current && messages.length > 0) {
                const container = scrollContainerRef.current;
                // Scroll to the bottom of the container only, not the entire page
                container.scrollTo({
                    top: container.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }["DashboardView.useEffect"], [
        messages.length
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Manual submit always triggers search
        handleUserSubmit(inputValue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col relative bg-[var(--bg-card)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-32 scrollbar-thin scrollbar-thumb-[var(--border-primary)]",
                children: messages.length === 0 ? // Empty State (ChatGPT Style) - Refined Design
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 sm:mb-8 md:mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                size: 56,
                                className: "h-14 sm:h-16 md:h-20 w-auto",
                                variant: "hero"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 111,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 text-center",
                            children: "How can I help you today?"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 116,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-[var(--text-muted)] mb-6 sm:mb-8 md:mb-10 text-center max-w-md",
                            children: "Choose a suggestion or type your question below"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 119,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full max-w-2xl",
                            children: [
                                {
                                    title: 'Analyze Q3 Revenue',
                                    sub: 'Compare against last year'
                                },
                                {
                                    title: 'Schema Design',
                                    sub: 'Create a user table'
                                },
                                {
                                    title: 'Workflow Automation',
                                    sub: 'Setup an email trigger'
                                },
                                {
                                    title: 'Document Summary',
                                    sub: 'Summarize backup policy'
                                }
                            ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleUserSubmit(card.title),
                                    className: "text-left p-4 sm:p-5 border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] hover:shadow-md transition-all duration-200 group active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm sm:text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-violet)] mb-1.5 leading-tight",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                            lineNumber: 137,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] leading-relaxed",
                                            children: card.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                            lineNumber: 140,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, card.title, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                    lineNumber: 109,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : // Chat Stream
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[800px] mx-auto pt-8 space-y-8",
                    children: [
                        messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`,
                                children: msg.type === 'user' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[var(--bg-elevated)] px-5 py-2.5 rounded-[24px] max-w-[80%] text-[15px] text-[var(--text-primary)] leading-relaxed shadow-sm",
                                    children: msg.text
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 153,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 w-8 rounded-full bg-[var(--accent-violet)] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-1 shadow-md",
                                            children: "C"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                            lineNumber: 158,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-slate max-w-none text-[15px] leading-relaxed text-[var(--text-primary)]",
                                                children: msg.component
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                                lineNumber: 161,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                            lineNumber: 159,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 157,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, msg.id, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                lineNumber: 151,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 w-full animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 w-8 rounded-full bg-[var(--accent-violet)] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-1",
                                    children: "C"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 173,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-[var(--accent-violet)] rounded-full animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                            lineNumber: 175,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-[var(--accent-violet)] rounded-full animate-bounce delay-75"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                            lineNumber: 176,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-[var(--accent-violet)] rounded-full animate-bounce delay-150"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                            lineNumber: 177,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 174,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 172,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: messagesEndRef
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 181,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                    lineNumber: 149,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)] to-transparent pt-8 sm:pt-10 md:pt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-2 sm:px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "relative bg-[var(--bg-elevated)] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 md:p-2.5 flex items-center shadow-sm ring-1 ring-[var(--border-primary)]/50 focus-within:ring-2 focus-within:ring-[var(--accent-violet)]/30 transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "p-2 sm:p-2.5 text-[var(--text-muted)] hover:bg-[var(--bg-hover)] rounded-full transition-colors shrink-0",
                                    "aria-label": "Attach file",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                        size: 18,
                                        className: "sm:w-5 sm:h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                        lineNumber: 195,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    type: "text",
                                    value: inputValue,
                                    onChange: (e)=>setInputValue(e.target.value),
                                    placeholder: "Message Chatty...",
                                    className: "flex-1 bg-transparent border-none outline-none text-[var(--text-primary)] placeholder:text-[var(--text-disabled)] h-10 sm:h-12 md:h-14 py-2 sm:py-3 px-2 sm:px-3 text-sm sm:text-base"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "p-2 sm:p-2.5 text-[var(--text-muted)] hover:bg-[var(--bg-hover)] rounded-full transition-colors shrink-0",
                                    "aria-label": "Voice input",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        size: 18,
                                        className: "sm:w-5 sm:h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                        lineNumber: 210,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 205,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !inputValue.trim(),
                                    className: `p-2 sm:p-2.5 md:p-3 rounded-full shrink-0 transition-all duration-200 ${inputValue.trim() ? 'bg-[var(--accent-violet)] text-white shadow-md hover:bg-[var(--violet-700)]' : 'bg-[var(--bg-surface)] text-[var(--text-disabled)] cursor-not-allowed'}`,
                                    "aria-label": "Send message",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                        size: 18,
                                        className: "sm:w-5 sm:h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                        lineNumber: 221,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                    lineNumber: 212,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-2 sm:mt-2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] sm:text-xs text-[var(--text-muted)] font-medium",
                                children: "Chatty AI can make mistakes. Check important info."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                                lineNumber: 225,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                            lineNumber: 224,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                    lineNumber: 188,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/components/views/Dashboard.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DashboardView, "A6xNkKyT+kBUvUxLbswbp0OdnvI=");
_c = DashboardView;
var _c;
__turbopack_context__.k.register(_c, "DashboardView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_CHART_DATA",
    ()=>MOCK_CHART_DATA,
    "MOCK_SCHEMA_NODES",
    ()=>MOCK_SCHEMA_NODES,
    "SUGGESTED_QUERIES",
    ()=>SUGGESTED_QUERIES
]);
const MOCK_CHART_DATA = [
    {
        name: 'Jul',
        revenue: 4200,
        profit: 2400,
        customers: 120
    },
    {
        name: 'Aug',
        revenue: 3800,
        profit: 2200,
        customers: 110
    },
    {
        name: 'Sep',
        revenue: 6500,
        profit: 3800,
        customers: 180
    },
    {
        name: 'Oct',
        revenue: 4900,
        profit: 2900,
        customers: 140
    },
    {
        name: 'Nov',
        revenue: 5200,
        profit: 3100,
        customers: 150
    },
    {
        name: 'Dec',
        revenue: 7800,
        profit: 4500,
        customers: 210
    }
];
const MOCK_SCHEMA_NODES = [
    {
        id: 't1',
        name: 'sales_transactions',
        columns: [
            'id',
            'user_id',
            'product_id',
            'amount',
            'created_at'
        ],
        x: 50,
        y: 50
    },
    {
        id: 't2',
        name: 'users',
        columns: [
            'id',
            'email',
            'country',
            'signup_date'
        ],
        x: 350,
        y: 50
    },
    {
        id: 't3',
        name: 'products',
        columns: [
            'id',
            'sku',
            'category',
            'price'
        ],
        x: 50,
        y: 300
    },
    {
        id: 't4',
        name: 'inventory',
        columns: [
            'product_id',
            'warehouse_id',
            'stock'
        ],
        x: 350,
        y: 300
    }
];
const SUGGESTED_QUERIES = [
    "Analyze Q3 revenue trends",
    "Show user churn by region",
    "Forecast inventory for Q4",
    "Compare marketing ROI across channels"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/components/views/Modeling.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelingView",
    ()=>ModelingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript) <export default as Table>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ModelingView = ({ isAutoplay, onInteract })=>{
    _s();
    // Initialize nodes - If autoplay, start without the Inventory table (t4) to simulate its creation
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ModelingView.useState": ()=>{
            if (isAutoplay) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_SCHEMA_NODES"].filter({
                    "ModelingView.useState": (n)=>n.id !== 't4'
                }["ModelingView.useState"]);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_SCHEMA_NODES"];
        }
    }["ModelingView.useState"]);
    // Viewport State
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pan, setPan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isPanning, setIsPanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastMousePos, setLastMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Drag State
    const [draggingId, setDraggingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Highlight State for Autoplay/Interaction
    const [highlightedNodeId, setHighlightedNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Context Menu
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        x: 0,
        y: 0,
        nodeId: null
    });
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const GRID_SIZE = 20;
    // Autoplay Animation Sequence
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelingView.useEffect": ()=>{
            if (isAutoplay && !draggingId && !isPanning) {
                // Step 1: Highlight 'products' table (t3) to show context
                const t1 = setTimeout({
                    "ModelingView.useEffect.t1": ()=>{
                        setHighlightedNodeId('t3');
                    }
                }["ModelingView.useEffect.t1"], 800);
                // Step 2: "AI" adds the 'inventory' table (t4)
                const t2 = setTimeout({
                    "ModelingView.useEffect.t2": ()=>{
                        const inventoryNode = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_SCHEMA_NODES"].find({
                            "ModelingView.useEffect.t2.inventoryNode": (n)=>n.id === 't4'
                        }["ModelingView.useEffect.t2.inventoryNode"]);
                        if (inventoryNode) {
                            setNodes({
                                "ModelingView.useEffect.t2": (prev)=>{
                                    if (prev.find({
                                        "ModelingView.useEffect.t2": (n)=>n.id === 't4'
                                    }["ModelingView.useEffect.t2"])) return prev;
                                    return [
                                        ...prev,
                                        {
                                            ...inventoryNode,
                                            x: 350,
                                            y: 300
                                        }
                                    ];
                                }
                            }["ModelingView.useEffect.t2"]);
                        }
                        setHighlightedNodeId('t4'); // Switch highlight to new table
                    }
                }["ModelingView.useEffect.t2"], 2200);
                // Step 3: Clear highlight
                const t3 = setTimeout({
                    "ModelingView.useEffect.t3": ()=>{
                        setHighlightedNodeId(null);
                    }
                }["ModelingView.useEffect.t3"], 4000);
                return ({
                    "ModelingView.useEffect": ()=>{
                        clearTimeout(t1);
                        clearTimeout(t2);
                        clearTimeout(t3);
                    }
                })["ModelingView.useEffect"];
            } else if (!isAutoplay) {
                setHighlightedNodeId(null);
            }
        }
    }["ModelingView.useEffect"], [
        isAutoplay,
        draggingId,
        isPanning
    ]);
    // Global Mouse Handlers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelingView.useEffect": ()=>{
            const handleMouseMoveWindow = {
                "ModelingView.useEffect.handleMouseMoveWindow": (e)=>{
                    if (draggingId) {
                        if (onInteract) onInteract();
                        // Snap to Grid Logic
                        const rawX = (e.clientX - dragOffset.x) / scale;
                        const rawY = (e.clientY - dragOffset.y) / scale;
                        const snappedX = Math.round(rawX / GRID_SIZE) * GRID_SIZE;
                        const snappedY = Math.round(rawY / GRID_SIZE) * GRID_SIZE;
                        setNodes({
                            "ModelingView.useEffect.handleMouseMoveWindow": (prev)=>prev.map({
                                    "ModelingView.useEffect.handleMouseMoveWindow": (n)=>n.id === draggingId ? {
                                            ...n,
                                            x: snappedX,
                                            y: snappedY
                                        } : n
                                }["ModelingView.useEffect.handleMouseMoveWindow"])
                        }["ModelingView.useEffect.handleMouseMoveWindow"]);
                    } else if (isPanning) {
                        const dx = e.clientX - lastMousePos.x;
                        const dy = e.clientY - lastMousePos.y;
                        setPan({
                            "ModelingView.useEffect.handleMouseMoveWindow": (prev)=>({
                                    x: prev.x + dx,
                                    y: prev.y + dy
                                })
                        }["ModelingView.useEffect.handleMouseMoveWindow"]);
                        setLastMousePos({
                            x: e.clientX,
                            y: e.clientY
                        });
                    }
                }
            }["ModelingView.useEffect.handleMouseMoveWindow"];
            const handleMouseUpWindow = {
                "ModelingView.useEffect.handleMouseUpWindow": ()=>{
                    setDraggingId(null);
                    setIsPanning(false);
                }
            }["ModelingView.useEffect.handleMouseUpWindow"];
            if (draggingId || isPanning) {
                window.addEventListener('mousemove', handleMouseMoveWindow);
                window.addEventListener('mouseup', handleMouseUpWindow);
            }
            return ({
                "ModelingView.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMoveWindow);
                    window.removeEventListener('mouseup', handleMouseUpWindow);
                }
            })["ModelingView.useEffect"];
        }
    }["ModelingView.useEffect"], [
        draggingId,
        isPanning,
        dragOffset,
        lastMousePos,
        scale,
        onInteract
    ]);
    // -- Handlers --
    const handleNodeMouseDown = (e, id, nodeX, nodeY)=>{
        if (e.button !== 0) return; // Only left click drags
        if (onInteract) onInteract();
        e.stopPropagation();
        setDraggingId(id);
        setHighlightedNodeId(id); // Highlight on click
        setContextMenu({
            ...contextMenu,
            visible: false
        }); // Close menu on interaction
        setDragOffset({
            x: e.clientX - nodeX * scale,
            y: e.clientY - nodeY * scale
        });
    };
    const handleNodeContextMenu = (e, id)=>{
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
    const handleCanvasMouseDown = (e)=>{
        if (e.button !== 0) return;
        if (onInteract) onInteract();
        setIsPanning(true);
        setLastMousePos({
            x: e.clientX,
            y: e.clientY
        });
        setContextMenu({
            ...contextMenu,
            visible: false
        });
        setHighlightedNodeId(null);
    };
    const handleAddColumn = (e, nodeId)=>{
        e.stopPropagation();
        if (onInteract) onInteract();
        setNodes((prev)=>prev.map((n)=>{
                if (n.id === nodeId) {
                    return {
                        ...n,
                        columns: [
                            ...n.columns,
                            'new_field'
                        ]
                    };
                }
                return n;
            }));
    };
    const deleteNode = (id)=>{
        if (onInteract) onInteract();
        setNodes((prev)=>prev.filter((n)=>n.id !== id));
        setContextMenu({
            ...contextMenu,
            visible: false
        });
    };
    const handleAddTable = ()=>{
        if (onInteract) onInteract();
        const id = `t${Date.now()}`;
        // Add new table at center of current view roughly
        const centerX = -pan.x / scale + (containerRef.current ? containerRef.current.clientWidth / 2 / scale : 400);
        const centerY = -pan.y / scale + (containerRef.current ? containerRef.current.clientHeight / 2 / scale : 300);
        const newNode = {
            id,
            name: 'new_table',
            columns: [
                'id',
                'created_at'
            ],
            x: centerX - 100,
            y: centerY - 100
        };
        setNodes((prev)=>[
                ...prev,
                newNode
            ]);
        setHighlightedNodeId(id);
    };
    // -- Orthogonal Path Rendering --
    const getOrthogonalPath = (startId, endId, startOffsetY = 40, endOffsetY = 40)=>{
        const startNode = nodes.find((n)=>n.id === startId);
        const endNode = nodes.find((n)=>n.id === endId);
        if (!startNode || !endNode) return "";
        // Anchors: Start right side, End left side
        const startX = startNode.x + 220;
        const startY = startNode.y + startOffsetY;
        const endX = endNode.x;
        const endY = endNode.y + endOffsetY;
        const dist = Math.abs(endX - startX);
        const midX = startX + dist / 2;
        // Simple S-curve via orthogonal segments
        return `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
    };
    const getTypeBadge = (colName)=>{
        if (colName.includes('id') || colName.includes('amount') || colName.includes('price') || colName.includes('stock')) return "123";
        if (colName.includes('date') || colName.includes('at')) return "📅";
        return "Aa";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `h-full w-full relative bg-[#f8fafc] overflow-hidden select-none font-sans ${isPanning ? 'cursor-grabbing' : 'cursor-default'}`,
        onMouseDown: handleCanvasMouseDown,
        onContextMenu: (e)=>e.preventDefault(),
        onWheel: (e)=>{
            if (e.ctrlKey) {
                e.preventDefault();
                setScale((s)=>Math.min(Math.max(s - e.deltaY * 0.001, 0.5), 2));
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                      `,
                    backgroundSize: `${GRID_SIZE * scale}px ${GRID_SIZE * scale}px`,
                    transform: `translate(${pan.x}px, ${pan.y}px)`,
                    opacity: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                lineNumber: 247,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 top-0 left-0 origin-top-left will-change-transform",
                style: {
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                    transition: isPanning || draggingId ? 'none' : 'transform 0.1s linear'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute -left-[5000px] -top-[5000px] w-[10000px] h-[10000px] pointer-events-none z-0 overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "arrow-gray",
                                    viewBox: "0 0 10 10",
                                    refX: "8",
                                    refY: "5",
                                    markerWidth: "6",
                                    markerHeight: "6",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 0 0 L 10 5 L 0 10 z",
                                        fill: "#94a3b8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                        lineNumber: 271,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                    lineNumber: 270,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 269,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            nodes.find((n)=>n.id === 't1') && nodes.find((n)=>n.id === 't2') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: getOrthogonalPath('t1', 't2', 60, 60),
                                stroke: "#94a3b8",
                                strokeWidth: "2",
                                fill: "none",
                                markerEnd: "url(#arrow-gray)"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 277,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            nodes.find((n)=>n.id === 't3') && nodes.find((n)=>n.id === 't1') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: getOrthogonalPath('t3', 't1', 60, 100),
                                stroke: "#94a3b8",
                                strokeWidth: "2",
                                fill: "none",
                                markerEnd: "url(#arrow-gray)"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 280,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            nodes.find((n)=>n.id === 't3') && nodes.find((n)=>n.id === 't4') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: getOrthogonalPath('t3', 't4', 100, 60),
                                stroke: "#94a3b8",
                                strokeWidth: "2",
                                fill: "none",
                                markerEnd: "url(#arrow-gray)"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 283,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                        lineNumber: 268,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseDown: (e)=>handleNodeMouseDown(e, node.id, node.x, node.y),
                            onContextMenu: (e)=>handleNodeContextMenu(e, node.id),
                            className: `absolute w-[220px] bg-white rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing z-10 flex flex-col border transition-all duration-300
                            ${draggingId === node.id ? 'shadow-xl scale-[1.02] z-50' : ''}
                            ${highlightedNodeId === node.id ? 'ring-2 ring-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] border-purple-500 z-40' : 'border-slate-200'}
                        `,
                            style: {
                                transform: `translate(${node.x}px, ${node.y}px)`
                            },
                            children: [
                                highlightedNodeId === node.id && isAutoplay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-8 left-0 right-0 flex justify-center animate-fade-in-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 10,
                                                className: "text-yellow-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                lineNumber: 305,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " AI Generating"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                        lineNumber: 304,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                    lineNumber: 303,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `px-3 py-2.5 rounded-t-lg flex justify-between items-center text-white transition-colors
                             ${highlightedNodeId === node.id ? 'bg-purple-600' : draggingId === node.id ? 'bg-blue-600' : 'bg-slate-800'}
                         `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    size: 14,
                                                    className: `${highlightedNodeId === node.id ? 'text-white' : 'text-blue-200'} shrink-0`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-sm tracking-wide truncate",
                                                    children: node.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                            lineNumber: 314,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onMouseDown: (e)=>e.stopPropagation(),
                                            onClick: (e)=>handleNodeContextMenu(e, node.id),
                                            className: "text-white/60 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                lineNumber: 323,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                            lineNumber: 318,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                    lineNumber: 311,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-b-lg divide-y divide-slate-100 text-sm",
                                    children: [
                                        node.columns.map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between px-3 py-2 hover:bg-slate-50 group transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded font-bold",
                                                                children: getTypeBadge(col)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 truncate",
                                                                children: col
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full bg-slate-200 border border-white group-hover:bg-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                lineNumber: 330,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>handleAddColumn(e, node.id),
                                            className: "w-full px-3 py-2 flex items-center gap-2 text-slate-700 font-bold hover:text-blue-700 hover:bg-blue-50 cursor-pointer transition-colors rounded-b-lg border-t border-transparent hover:border-blue-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    children: "Add field"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                            lineNumber: 341,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                    lineNumber: 328,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, node.id, true, {
                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                            lineNumber: 289,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-6 flex flex-col gap-3",
                onMouseDown: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col bg-white border border-slate-200 rounded-lg shadow-lg z-20 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setScale((s)=>Math.min(s + 0.1, 2)),
                            className: "p-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 357,
                                columnNumber: 196
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                            lineNumber: 357,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setScale((s)=>Math.max(s - 0.1, 0.5)),
                            className: "p-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 358,
                                columnNumber: 198
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                            lineNumber: 358,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setPan({
                                    x: 0,
                                    y: 0
                                });
                                setScale(1);
                            },
                            className: "p-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors",
                            title: "Reset View",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 359,
                                columnNumber: 194
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                            lineNumber: 359,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                    lineNumber: 356,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                lineNumber: 354,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-20 flex gap-2",
                onMouseDown: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAddTable,
                    className: "flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg shadow-lg hover:bg-slate-800 transition-all font-medium text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                            lineNumber: 369,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Add Table"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                    lineNumber: 365,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                lineNumber: 364,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            contextMenu.visible && contextMenu.nodeId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-[100] bg-white rounded-lg shadow-xl border border-slate-200 w-48 py-1 animate-scale-up origin-top-left",
                style: {
                    left: contextMenu.x,
                    top: contextMenu.y
                },
                onMouseDown: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 border-b border-slate-100 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                            children: "Table Actions"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                            lineNumber: 381,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                        lineNumber: 380,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 384,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Rename Table"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                        lineNumber: 383,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 387,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Duplicate"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                        lineNumber: 386,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[1px] bg-slate-100 my-1"
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                        lineNumber: 389,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>deleteNode(contextMenu.nodeId),
                        className: "w-full text-left px-3 py-2 hover:bg-red-50 text-sm text-red-600 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                                lineNumber: 394,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Delete"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                        lineNumber: 390,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
                lineNumber: 375,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/components/views/Modeling.tsx",
        lineNumber: 234,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModelingView, "U0574WYKUTAs7A8DNaUVfBU7r/o=");
_c = ModelingView;
var _c;
__turbopack_context__.k.register(_c, "ModelingView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/components/views/Workflow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowView",
    ()=>WorkflowView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const WorkflowView = ({ isAutoplay, onInteract })=>{
    _s();
    const [activeNode, setActiveNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1); // For autoplay visual
    const [selectedNodeId, setSelectedNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedEdgeId, setSelectedEdgeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initial Nodes
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 0,
            label: 'Update a chat',
            sub: 'update: chat',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            x: 100,
            y: 180,
            type: 'trigger'
        },
        {
            id: 1,
            label: 'Set Table Name',
            sub: 'manual',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"],
            x: 280,
            y: 180,
            type: 'action'
        },
        {
            id: 2,
            label: 'Database Agent',
            sub: 'Chat Model + Memory',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
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
        {
            id: 3,
            label: 'Get all models',
            sub: 'getAll: model',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
            x: 720,
            y: 120,
            type: 'action'
        },
        {
            id: 4,
            label: 'Execute SQL',
            sub: 'exec: sql',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
            x: 720,
            y: 320,
            type: 'action'
        }
    ]);
    // Edges State
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'e1',
            source: 0,
            target: 1
        },
        {
            id: 'e2',
            source: 1,
            target: 2
        }
    ]);
    // Drag State
    const [draggingId, setDraggingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Connection State
    const [connectingSource, setConnectingSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Helper to update node data
    const updateNode = (id, updates)=>{
        if (onInteract) onInteract();
        setNodes((prev)=>prev.map((n)=>{
                if (n.id === id) {
                    // If updating config, merge it
                    if (updates.config) {
                        return {
                            ...n,
                            config: {
                                ...n.config,
                                ...updates.config
                            }
                        };
                    }
                    return {
                        ...n,
                        ...updates
                    };
                }
                return n;
            }));
    };
    // Delete Handler (Nodes & Edges)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowView.useEffect": ()=>{
            const handleKeyDown = {
                "WorkflowView.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Delete' || e.key === 'Backspace') {
                        if (onInteract) onInteract();
                        if (selectedNodeId !== null) {
                            setNodes({
                                "WorkflowView.useEffect.handleKeyDown": (prev)=>prev.filter({
                                        "WorkflowView.useEffect.handleKeyDown": (n)=>n.id !== selectedNodeId
                                    }["WorkflowView.useEffect.handleKeyDown"])
                            }["WorkflowView.useEffect.handleKeyDown"]);
                            setEdges({
                                "WorkflowView.useEffect.handleKeyDown": (prev)=>prev.filter({
                                        "WorkflowView.useEffect.handleKeyDown": (edge)=>edge.source !== selectedNodeId && edge.target !== selectedNodeId
                                    }["WorkflowView.useEffect.handleKeyDown"])
                            }["WorkflowView.useEffect.handleKeyDown"]);
                            setSelectedNodeId(null);
                        }
                        if (selectedEdgeId !== null) {
                            setEdges({
                                "WorkflowView.useEffect.handleKeyDown": (prev)=>prev.filter({
                                        "WorkflowView.useEffect.handleKeyDown": (e)=>e.id !== selectedEdgeId
                                    }["WorkflowView.useEffect.handleKeyDown"])
                            }["WorkflowView.useEffect.handleKeyDown"]);
                            setSelectedEdgeId(null);
                        }
                    }
                }
            }["WorkflowView.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "WorkflowView.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["WorkflowView.useEffect"];
        }
    }["WorkflowView.useEffect"], [
        selectedNodeId,
        selectedEdgeId,
        onInteract
    ]);
    // -- Mouse Handlers --
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowView.useEffect": ()=>{
            if (draggingId === null) return;
            const handleMouseMoveWindow = {
                "WorkflowView.useEffect.handleMouseMoveWindow": (e)=>{
                    setNodes({
                        "WorkflowView.useEffect.handleMouseMoveWindow": (prev)=>prev.map({
                                "WorkflowView.useEffect.handleMouseMoveWindow": (n)=>n.id === draggingId ? {
                                        ...n,
                                        x: e.clientX - dragOffset.x,
                                        y: e.clientY - dragOffset.y
                                    } : n
                            }["WorkflowView.useEffect.handleMouseMoveWindow"])
                    }["WorkflowView.useEffect.handleMouseMoveWindow"]);
                }
            }["WorkflowView.useEffect.handleMouseMoveWindow"];
            const handleMouseUpWindow = {
                "WorkflowView.useEffect.handleMouseUpWindow": ()=>setDraggingId(null)
            }["WorkflowView.useEffect.handleMouseUpWindow"];
            window.addEventListener('mousemove', handleMouseMoveWindow);
            window.addEventListener('mouseup', handleMouseUpWindow);
            return ({
                "WorkflowView.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMoveWindow);
                    window.removeEventListener('mouseup', handleMouseUpWindow);
                }
            })["WorkflowView.useEffect"];
        }
    }["WorkflowView.useEffect"], [
        draggingId,
        dragOffset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowView.useEffect": ()=>{
            const handleGlobalMouseUp = {
                "WorkflowView.useEffect.handleGlobalMouseUp": ()=>setConnectingSource(null)
            }["WorkflowView.useEffect.handleGlobalMouseUp"];
            window.addEventListener('mouseup', handleGlobalMouseUp);
            return ({
                "WorkflowView.useEffect": ()=>window.removeEventListener('mouseup', handleGlobalMouseUp)
            })["WorkflowView.useEffect"];
        }
    }["WorkflowView.useEffect"], []);
    const handleCanvasClick = ()=>{
        if (onInteract) onInteract();
        setSelectedNodeId(null);
        setSelectedEdgeId(null);
    };
    const handleNodeMouseDown = (e, id, x, y)=>{
        if (onInteract) onInteract();
        e.stopPropagation();
        setDraggingId(id);
        setSelectedNodeId(id);
        setSelectedEdgeId(null);
        setDragOffset({
            x: e.clientX - x,
            y: e.clientY - y
        });
    };
    const handlePortMouseDown = (e, id)=>{
        e.stopPropagation();
        e.preventDefault();
        if (onInteract) onInteract();
        setConnectingSource(id);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };
    const handlePortMouseUp = (e, targetId)=>{
        e.stopPropagation();
        if (connectingSource !== null && connectingSource !== targetId) {
            const exists = edges.some((e)=>e.source === connectingSource && e.target === targetId);
            const reverseExists = edges.some((e)=>e.source === targetId && e.target === connectingSource); // No cycles for this simple DAG
            if (!exists && !reverseExists) {
                setEdges((prev)=>[
                        ...prev,
                        {
                            id: `e-${Date.now()}`,
                            source: connectingSource,
                            target: targetId
                        }
                    ]);
            }
        }
        setConnectingSource(null);
    };
    const handleMouseMoveCanvas = (e)=>{
        if (connectingSource !== null && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };
    const addNode = (label, icon, type = 'action')=>{
        if (onInteract) onInteract();
        const newId = nodes.length > 0 ? Math.max(...nodes.map((n)=>n.id)) + 1 : 0;
        const newNode = {
            id: newId,
            label,
            sub: type === 'agent' ? 'AI Agent' : 'action',
            icon,
            x: 350 + Math.random() * 50,
            y: 250 + Math.random() * 50,
            type,
            config: type === 'agent' ? {
                model: 'gpt-4-turbo',
                temperature: '0.7',
                memory: 'true'
            } : {}
        };
        setNodes((prev)=>[
                ...prev,
                newNode
            ]);
        setSelectedNodeId(newId);
    };
    // Autoplay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkflowView.useEffect": ()=>{
            if (isAutoplay && draggingId === null && connectingSource === null) {
                const interval = setInterval({
                    "WorkflowView.useEffect.interval": ()=>setActiveNode({
                            "WorkflowView.useEffect.interval": (prev)=>(prev + 1) % 5
                        }["WorkflowView.useEffect.interval"])
                }["WorkflowView.useEffect.interval"], 800);
                return ({
                    "WorkflowView.useEffect": ()=>clearInterval(interval)
                })["WorkflowView.useEffect"];
            }
        }
    }["WorkflowView.useEffect"], [
        isAutoplay,
        draggingId,
        connectingSource
    ]);
    const knowledgeActions = [
        {
            label: 'Create KB',
            full: 'Create a knowledge base',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
        },
        {
            label: 'Get KB',
            full: 'Get a knowledge base',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"]
        },
        {
            label: 'Update KB',
            full: 'Update a knowledge base',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"]
        },
        {
            label: 'Add File',
            full: 'Add file to knowledge base',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        }
    ];
    const chatActions = [
        {
            label: 'Create Chat',
            full: 'Create a chat',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
        },
        {
            label: 'Get Chat',
            full: 'Get a chat',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"]
        },
        {
            label: 'Update Chat',
            full: 'Update a chat',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"]
        }
    ];
    const filterActions = (list)=>list.filter((a)=>a.full.toLowerCase().includes(searchQuery.toLowerCase()));
    const getNode = (id)=>nodes.find((n)=>n.id === id);
    const selectedNode = selectedNodeId !== null ? nodes.find((n)=>n.id === selectedNodeId) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full bg-[#f8fafc] relative overflow-hidden flex flex-col font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 border-b border-slate-200 bg-white flex items-center justify-between px-4 shrink-0 z-10 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    size: 18,
                                    className: "text-white fill-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                    lineNumber: 251,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                lineNumber: 250,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold text-slate-800",
                                        children: "New Automation Flow"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 254,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-700 font-bold",
                                        children: "Last edited just now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 255,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                lineNumber: 253,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                        lineNumber: 249,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (onInteract) onInteract();
                                    setIsRunning(!isRunning);
                                    if (isRunning) setActiveNode(-1);
                                },
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all shadow-sm border
                            ${isRunning ? 'bg-red-50 text-red-600 border-red-100 hover:bg-red-100' : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600'}`,
                                children: [
                                    isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__["StopCircle"], {
                                        size: 14,
                                        fill: "currentColor",
                                        className: "opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 267,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        size: 14,
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 267,
                                        columnNumber: 108
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isRunning ? "Stop" : "Test Run"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                lineNumber: 259,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1.5 bg-slate-900 text-white rounded-md text-xs font-medium hover:bg-slate-800 shadow-sm",
                                children: "Publish"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                lineNumber: 248,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "flex-1 relative overflow-hidden bg-slate-50 cursor-crosshair",
                        onMouseMove: handleMouseMoveCanvas,
                        onClick: handleCanvasClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.4] pointer-events-none",
                                style: {
                                    backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                                    backgroundSize: '24px 24px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                lineNumber: 283,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                                id: "arrow",
                                                viewBox: "0 0 10 10",
                                                refX: "8",
                                                refY: "5",
                                                markerWidth: "6",
                                                markerHeight: "6",
                                                orient: "auto-start-reverse",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 0 0 L 10 5 L 0 10 z",
                                                    fill: "#94a3b8"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                lineNumber: 292,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                                id: "arrow-selected",
                                                viewBox: "0 0 10 10",
                                                refX: "8",
                                                refY: "5",
                                                markerWidth: "6",
                                                markerHeight: "6",
                                                orient: "auto-start-reverse",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 0 0 L 10 5 L 0 10 z",
                                                    fill: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                lineNumber: 295,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 291,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    edges.map((edge)=>{
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                if (onInteract) onInteract();
                                                setSelectedEdgeId(edge.id);
                                                setSelectedNodeId(null);
                                            },
                                            className: "pointer-events-auto cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: pathD,
                                                    stroke: "transparent",
                                                    strokeWidth: "15",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: pathD,
                                                    stroke: isSelected || isRunning ? "#3b82f6" : "#94a3b8",
                                                    strokeWidth: isSelected ? "3" : "2",
                                                    fill: "none",
                                                    markerEnd: isSelected || isRunning ? "url(#arrow-selected)" : "url(#arrow)",
                                                    className: "transition-colors duration-300 group-hover:stroke-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    r: "4",
                                                    fill: "#3b82f6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                        dur: "1s",
                                                        repeatCount: "indefinite",
                                                        path: pathD,
                                                        keyPoints: "0;1",
                                                        keyTimes: "0;1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, edge.id, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 314,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }),
                                    connectingSource !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M ${getNode(connectingSource).x + 64} ${getNode(connectingSource).y + 32} C ${getNode(connectingSource).x + 100} ${getNode(connectingSource).y + 32}, ${mousePos.x - 50} ${mousePos.y}, ${mousePos.x} ${mousePos.y}`,
                                        stroke: "#3b82f6",
                                        strokeWidth: "2",
                                        strokeDasharray: "5,5",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 337,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                lineNumber: 290,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            nodes.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onMouseDown: (e)=>handleNodeMouseDown(e, node.id, node.x, node.y),
                                    className: `absolute flex flex-col items-center gap-2 transition-all duration-200 cursor-grab active:cursor-grabbing group
                                ${activeNode === i && isAutoplay ? 'scale-105' : ''}
                                ${draggingId === node.id ? 'z-50 scale-105' : 'z-10'}
                            `,
                                    style: {
                                        left: node.x,
                                        top: node.y
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `
                                w-16 h-16 bg-white rounded-[16px] flex items-center justify-center relative shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] transition-all
                                ${activeNode === i && isAutoplay ? 'ring-2 ring-blue-500 border-transparent' : ''}
                                ${selectedNodeId === node.id ? 'ring-2 ring-blue-500 border-transparent shadow-[0_8px_30px_-4px_rgba(59,130,246,0.2)]' : 'border border-slate-100 hover:border-slate-300'}
                                ${connectingSource === node.id ? 'ring-2 ring-blue-500' : ''}
                            `,
                                            children: [
                                                node.type === 'agent' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold text-sm",
                                                        children: "AI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center pointer-events-none text-slate-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(node.icon, {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onMouseUp: (e)=>handlePortMouseUp(e, node.id),
                                                    className: "absolute -left-3 w-6 h-6 flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2.5 h-2.5 bg-white border-2 border-slate-400 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:scale-125 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onMouseDown: (e)=>handlePortMouseDown(e, node.id),
                                                    className: "absolute -right-3 w-6 h-6 flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2.5 h-2.5 bg-white border-2 border-slate-400 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:scale-125 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 354,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center z-10 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-bold text-slate-700 leading-tight mb-0.5 select-none bg-slate-50/80 px-2 py-0.5 rounded backdrop-blur-sm",
                                                children: node.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 378,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, node.id, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                    lineNumber: 345,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                        lineNumber: 277,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[320px] bg-white border-l border-slate-200 flex flex-col hidden lg:flex z-20 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)]",
                        children: selectedNode ? // Node Properties Panel
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full animate-slide-in-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-14 flex items-center justify-between px-5 border-b border-slate-100 shrink-0 bg-slate-50/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-sm text-slate-800 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                    size: 16,
                                                    className: "text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Node Settings"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 391,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedNodeId(null),
                                            className: "p-1 hover:bg-slate-200 rounded text-slate-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                lineNumber: 395,
                                                columnNumber: 139
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 395,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                    lineNumber: 390,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 flex-1 overflow-y-auto space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide",
                                                    children: "Configuration"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-slate-600 mb-1 font-medium",
                                                                    children: "Node Label"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: selectedNode.label,
                                                                    onChange: (e)=>updateNode(selectedNode.id, {
                                                                            label: e.target.value
                                                                        }),
                                                                    className: "w-full text-sm border border-slate-200 rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-slate-600 mb-1 font-medium",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: selectedNode.sub,
                                                                    onChange: (e)=>updateNode(selectedNode.id, {
                                                                            sub: e.target.value
                                                                        }),
                                                                    className: "w-full text-sm border border-slate-200 rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 398,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        selectedNode.type === 'agent' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5 border-t border-slate-100 pt-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            size: 14,
                                                            className: "text-blue-600",
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Model Configuration"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[11px] font-medium text-slate-500",
                                                            children: "LLM Model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedNode.config?.model || 'gpt-4-turbo',
                                                                    onChange: (e)=>updateNode(selectedNode.id, {
                                                                            config: {
                                                                                model: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "w-full appearance-none bg-white border border-slate-200 text-slate-700 text-xs rounded-md pl-3 pr-8 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition-all cursor-pointer hover:border-slate-300",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "gpt-4-turbo",
                                                                            children: "GPT-4 Turbo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "gpt-4",
                                                                            children: "GPT-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "gpt-3.5-turbo",
                                                                            children: "GPT-3.5 Turbo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "claude-3-opus",
                                                                            children: "Claude 3 Opus"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 442,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 14,
                                                                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 444,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[11px] font-medium text-slate-500",
                                                                    children: "Temperature"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200",
                                                                    children: selectedNode.config?.temperature || '0.7'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "0",
                                                            max: "1",
                                                            step: "0.1",
                                                            value: selectedNode.config?.temperature || '0.7',
                                                            onChange: (e)=>updateNode(selectedNode.id, {
                                                                    config: {
                                                                        temperature: e.target.value
                                                                    }
                                                                }),
                                                            className: "w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-[10px] text-slate-600 font-bold px-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Precise (0.0)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Creative (1.0)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                                            size: 14,
                                                                            className: "text-purple-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-semibold text-slate-700",
                                                                            children: "Memory"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 474,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: "Retain context from previous turns"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>updateNode(selectedNode.id, {
                                                                    config: {
                                                                        memory: String(selectedNode.config?.memory !== 'true')
                                                                    }
                                                                }),
                                                            className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${selectedNode.config?.memory === 'true' ? 'bg-blue-600' : 'bg-slate-300'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm ${selectedNode.config?.memory === 'true' ? 'translate-x-[18px]' : 'translate-x-[2px]'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[11px] font-medium text-slate-500",
                                                            children: "System Prompt"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: selectedNode.config?.systemPrompt || '',
                                                            onChange: (e)=>updateNode(selectedNode.id, {
                                                                    config: {
                                                                        systemPrompt: e.target.value
                                                                    }
                                                                }),
                                                            className: "w-full bg-white border border-slate-200 text-slate-700 text-xs rounded-md p-2.5 h-24 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none resize-none transition-all placeholder:text-slate-300",
                                                            placeholder: "Define the agent's persona and rules..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 424,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-slate-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (onInteract) onInteract();
                                                    setNodes((prev)=>prev.filter((n)=>n.id !== selectedNode.id));
                                                    setSelectedNodeId(null);
                                                },
                                                className: "w-full py-2 border border-red-200 text-red-600 rounded-md text-xs font-bold hover:bg-red-50 flex items-center justify-center gap-2 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Delete Node"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                lineNumber: 500,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 499,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                    lineNumber: 397,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                            lineNumber: 389,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : // Action Library Panel
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-14 flex items-center px-5 border-b border-slate-100 gap-2 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm text-slate-800",
                                        children: "Action Library"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 517,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                    lineNumber: 516,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border-b border-slate-100 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 14,
                                                className: "absolute top-2.5 left-3 text-slate-600"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                lineNumber: 521,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search components...",
                                                className: "w-full bg-white border border-slate-200 rounded-[4px] pl-9 py-2 text-xs outline-none text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                lineNumber: 522,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                        lineNumber: 520,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                    lineNumber: 519,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto bg-slate-50/50 p-4 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2 text-xs font-bold text-slate-500 uppercase tracking-wide",
                                                    children: "Triggers"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>addNode('Webhook', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], 'trigger'),
                                                    className: "w-full text-left flex items-center gap-3 p-2 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 148
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs font-bold text-slate-700",
                                                                    children: "Webhook"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-400",
                                                                    children: "Receive HTTP requests"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 14,
                                                            className: "ml-auto text-slate-300 group-hover:text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 532,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2 text-xs font-bold text-slate-500 uppercase tracking-wide",
                                                    children: "Available Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        ...filterActions(knowledgeActions),
                                                        ...filterActions(chatActions)
                                                    ].map((action, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>addNode(action.label, action.icon, 'action'),
                                                            className: "w-full text-left flex items-center gap-3 p-2 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-8 w-8 rounded-md bg-slate-50 flex items-center justify-center text-slate-600 shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(action.icon, {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-bold text-slate-700 truncate",
                                                                            children: action.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 564,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-slate-400 truncate",
                                                                            children: action.full
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                            lineNumber: 565,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 14,
                                                                    className: "ml-auto text-slate-300 group-hover:text-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                                    lineNumber: 567,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                            lineNumber: 549,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                                    lineNumber: 531,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                            lineNumber: 515,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                        lineNumber: 386,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
                lineNumber: 275,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/components/views/Workflow.tsx",
        lineNumber: 245,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WorkflowView, "OjdPT5vT3S4VK0BGhbxMmNKdLfw=");
_c = WorkflowView;
var _c;
__turbopack_context__.k.register(_c, "WorkflowView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/components/views/Document.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentView",
    ()=>DocumentView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Helper component to highlight text based on search term
const Highlight = ({ text, term })=>{
    if (!term || !term.trim()) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: text
    }, void 0, false);
    // Split text by the search term (case insensitive), capturing the delimiter
    // Using a simple split regex. Special regex chars in 'term' are not escaped here for simplicity, 
    // but in a production app you should escape them.
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: parts.map((part, i)=>part.toLowerCase() === term.toLowerCase() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-yellow-200 dark:bg-yellow-900/50 text-slate-900 dark:text-yellow-200 rounded-[2px] shadow-sm px-0.5 transition-all duration-300",
                children: part
            }, i, false, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 44,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: part
            }, i, false, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 48,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false);
};
_c = Highlight;
const DocumentView = ({ isAutoplay, onInteract })=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSearchActive, setIsSearchActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initial history matches the screenshot
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasSimulated, setHasSimulated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initial Load Simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentView.useEffect": ()=>{
            const loadInitial = setTimeout({
                "DocumentView.useEffect.loadInitial": ()=>{
                    setHistory([
                        {
                            id: '1',
                            type: 'user',
                            text: 'summarize our company backup and restore procedure',
                            timestamp: 'Today at 8:45 PM'
                        }
                    ]);
                    // Bot reply shortly after
                    setTimeout({
                        "DocumentView.useEffect.loadInitial": ()=>{
                            setHistory({
                                "DocumentView.useEffect.loadInitial": (prev)=>[
                                        ...prev,
                                        {
                                            id: '2',
                                            type: 'bot',
                                            // We render component dynamically below to pass props
                                            timestamp: 'Today at 8:45 PM'
                                        }
                                    ]
                            }["DocumentView.useEffect.loadInitial"]);
                        }
                    }["DocumentView.useEffect.loadInitial"], 800);
                }
            }["DocumentView.useEffect.loadInitial"], 500);
            return ({
                "DocumentView.useEffect": ()=>clearTimeout(loadInitial)
            })["DocumentView.useEffect"];
        }
    }["DocumentView.useEffect"], []);
    // Autoplay Typing Simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentView.useEffect": ()=>{
            if (isAutoplay && !hasSimulated && history.length > 0) {
                const textToType = "Add a section about cloud recovery RTO/RPO limits.";
                let i = 0;
                const typeTimer = setInterval({
                    "DocumentView.useEffect.typeTimer": ()=>{
                        setInputValue(textToType.slice(0, i + 1));
                        i++;
                        if (i >= textToType.length) {
                            clearInterval(typeTimer);
                            // Send message after typing
                            setTimeout({
                                "DocumentView.useEffect.typeTimer": ()=>{
                                    handleSendInternal(textToType);
                                    setHasSimulated(true);
                                }
                            }["DocumentView.useEffect.typeTimer"], 800);
                        }
                    }
                }["DocumentView.useEffect.typeTimer"], 50);
                // Delay start to allow user to see the view first
                const startDelay = setTimeout({
                    "DocumentView.useEffect.startDelay": ()=>{
                    // The interval is already running, but we could gate it here if needed. 
                    // Logic simplifies to just running immediately after mount/prop change for demo fluidity
                    }
                }["DocumentView.useEffect.startDelay"], 1000);
                return ({
                    "DocumentView.useEffect": ()=>{
                        clearInterval(typeTimer);
                        clearTimeout(startDelay);
                    }
                })["DocumentView.useEffect"];
            }
        }
    }["DocumentView.useEffect"], [
        isAutoplay,
        hasSimulated,
        history.length
    ]);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentView.useEffect": ()=>{
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                // Scroll to the bottom of the container only, not the entire page
                container.scrollTo({
                    top: container.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }["DocumentView.useEffect"], [
        history
    ]);
    const handleSendInternal = (text)=>{
        const newMsg = {
            id: Date.now().toString(),
            type: 'user',
            text: text,
            timestamp: 'Just now'
        };
        setHistory((prev)=>[
                ...prev,
                newMsg
            ]);
        setInputValue("");
        // Simulate bot reply
        setTimeout(()=>{
            setHistory((prev)=>[
                    ...prev,
                    {
                        id: (Date.now() + 1).toString(),
                        type: 'bot',
                        text: "I've updated the procedure with the standard RTO (4 hours) and RPO (1 hour) limits for cloud recovery scenarios. Would you like to review the draft?",
                        timestamp: 'Just now'
                    }
                ]);
        }, 1500);
    };
    const handleSend = ()=>{
        if (!inputValue.trim()) return;
        if (onInteract) onInteract(); // Stop autoplay if user manually sends
        handleSendInternal(inputValue);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') handleSend();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-[var(--bg-card)] font-sans relative",
        onClick: onInteract,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 border-b border-[var(--border-primary)] flex items-center justify-between px-6 shrink-0 bg-[var(--bg-card)] transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 flex-1 overflow-hidden",
                        children: !isSearchActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 animate-fade-in whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-[var(--text-primary)]",
                                    children: "Company procedures"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-secondary)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 171,
                                        columnNumber: 122
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 171,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 169,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-1 max-w-md animate-fade-in-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 14,
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 176,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        autoFocus: true,
                                        type: "text",
                                        className: "w-full bg-[var(--bg-elevated)] border border-transparent focus:bg-[var(--bg-card)] focus:border-blue-200 rounded-md py-1.5 pl-9 pr-8 text-sm outline-none transition-all text-[var(--text-primary)]",
                                        placeholder: "Search in document...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 177,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchTerm(""),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                            lineNumber: 187,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 186,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 175,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 174,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-[var(--text-muted)] shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsSearchActive(!isSearchActive);
                                    if (isSearchActive) setSearchTerm("");
                                },
                                className: `p-2 rounded-md transition-colors ${isSearchActive ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'hover:bg-[var(--bg-elevated)] hover:text-[var(--text-secondary)]'}`,
                                title: "Toggle Search",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-[1px] bg-[var(--border-primary)] mx-1"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 206,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                size: 20,
                                className: "cursor-pointer hover:text-[var(--text-secondary)]"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 207,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-[80px] flex items-center justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                    size: 20,
                                    className: "h-6 w-auto",
                                    variant: "hero"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 208,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex-1 overflow-y-auto p-8 space-y-8 pb-32",
                children: [
                    history.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in",
                            children: msg.type === 'user' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[var(--bg-elevated)] border border-[var(--border-primary)] rounded-2xl rounded-tr-sm px-5 py-3 max-w-2xl shadow-sm group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] text-[var(--text-muted)] mb-1 text-right font-medium",
                                            children: msg.timestamp
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                            lineNumber: 221,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[var(--text-secondary)] text-[15px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                text: msg.text || "",
                                                term: searchTerm
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 223,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                            lineNumber: 222,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end gap-2 mt-2 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                    size: 12,
                                                    className: "cursor-pointer hover:text-[var(--text-secondary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 12,
                                                    className: "cursor-pointer hover:text-[var(--text-secondary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                            lineNumber: 225,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 220,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 219,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-8 w-8 rounded-lg bg-green-900 dark:bg-green-800 flex items-center justify-center shrink-0 mt-1 shadow-sm text-white font-bold text-xs",
                                        children: "HR"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 233,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-sm text-[var(--text-primary)]",
                                                        children: "Company procedures"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-[var(--text-secondary)] font-bold",
                                                        children: msg.timestamp
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 237,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            msg.text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-sm max-w-none text-[var(--text-secondary)] bg-[var(--bg-card)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                        text: msg.text,
                                                        term: searchTerm
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 48
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 244,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotResponseContent, {
                                                searchTerm: searchTerm
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 248,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 236,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 232,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, msg.id, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 217,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 255,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[var(--bg-card)] rounded-2xl shadow-xl border border-[var(--border-primary)] p-2 flex items-center gap-2 ring-1 ring-[var(--border-primary)]/50 transition-all focus-within:ring-blue-500/20 focus-within:border-blue-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 262,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 261,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 265,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 264,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-1 bg-[var(--bg-elevated)] rounded text-xs text-[var(--text-muted)] font-medium flex items-center gap-1 cursor-default",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 268,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "MS365_tool_agent_mode"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 267,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Send a Message",
                            className: "flex-1 bg-transparent border-none outline-none text-[var(--text-primary)] px-2 h-10 placeholder:text-[var(--text-disabled)]",
                            value: inputValue,
                            onChange: (e)=>setInputValue(e.target.value),
                            onKeyDown: handleKeyDown,
                            onClick: (e)=>e.stopPropagation(),
                            onFocus: ()=>{
                                if (onInteract) onInteract();
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 271,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 282,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 281,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSend,
                            className: `p-2 rounded-full transition-colors shadow-md flex items-center justify-center w-9 h-9 ${inputValue.trim() ? 'bg-[var(--accent-violet)] text-white hover:bg-[var(--violet-700)]' : 'bg-[var(--bg-surface)] text-[var(--text-disabled)]'}`,
                            children: inputValue.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                size: 14,
                                className: "ml-0.5"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 288,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rotate-90",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 288,
                                    columnNumber: 113
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 288,
                                columnNumber: 86
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 284,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                    lineNumber: 260,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DocumentView, "lXw9cxThJsKzmjgfvWbmtVqtpkw=");
_c1 = DocumentView;
// Extracted Content Component for cleaner code
const BotResponseContent = ({ searchTerm = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prose prose-sm max-w-none text-[var(--text-secondary)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                        term: searchTerm,
                        text: "The company's "
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                            term: searchTerm,
                            text: "backup and restore procedure"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 301,
                            columnNumber: 45
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                        term: searchTerm,
                        text: " (Procedure ID: 901-DP) defines the standards, responsibilities, and technical processes for safeguarding organizational data across all information systems within Rothschild Caesarea Group."
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 302,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 299,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[16px] font-bold text-[var(--text-primary)] mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                    term: searchTerm,
                    text: "1. Purpose and Scope"
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                    lineNumber: 305,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 305,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                        term: searchTerm,
                        text: "The procedure ensures continuous data protection and the ability to recover information to its original state in case of data loss or system failure. It applies to all company systems, servers, and cloud storage environments"
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 307,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                        className: "text-blue-600 font-medium",
                        children: "^1"
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 308,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[16px] font-bold text-slate-900 mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                    term: searchTerm,
                    text: "2. Responsibilities"
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                    lineNumber: 311,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc pl-5 space-y-2 mb-4 marker:text-[var(--text-muted)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "IT Systems Manager"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 314,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 314,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " oversees the implementation, compliance, and annual review of the backup and restore procedure."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 315,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 313,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "Infrastructure Manager"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 318,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 318,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " is responsible for managing backup hardware, executing daily backups, and testing recovery processes"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 319,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                className: "text-blue-600 font-medium",
                                children: "^1"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 320,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 317,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[16px] font-bold text-slate-900 mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                    term: searchTerm,
                    text: "3. Backup Structure"
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                    lineNumber: 324,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc pl-5 space-y-2 mb-4 marker:text-[var(--text-muted)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "Full backups"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 326,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 326,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " cover all company data (servers, systems, and files)."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 326,
                                columnNumber: 107
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 326,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "Local backups"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 327,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 327,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " are stored on-premises in the company's secured infrastructure."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 327,
                                columnNumber: 108
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 327,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "Cloud backups"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 328,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 328,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " are stored off-site in encrypted form using the AES-256 standard; encryption keys are rotated annually."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 328,
                                columnNumber: 108
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 328,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "Retention policy:"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 330,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 330,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-[circle] pl-5 mt-1 space-y-1 text-[var(--text-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                    term: searchTerm,
                                                    text: "Daily backups"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 57
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 332,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                term: searchTerm,
                                                text: " retained for 7 days"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 332,
                                                columnNumber: 116
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 332,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                    term: searchTerm,
                                                    text: "Weekly backups"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 57
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 333,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                term: searchTerm,
                                                text: " retained for 21 days"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 333,
                                                columnNumber: 117
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 333,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                    term: searchTerm,
                                                    text: "Monthly backups"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 57
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 334,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                term: searchTerm,
                                                text: " retained for 12 months"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 334,
                                                columnNumber: 118
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 334,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                    term: searchTerm,
                                                    text: "Annual backups"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 57
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 335,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                                term: searchTerm,
                                                text: " stored on physical media (tape) for 2 years"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 335,
                                                columnNumber: 117
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                className: "text-blue-600 font-medium",
                                                children: "^2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                                lineNumber: 335,
                                                columnNumber: 200
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                        lineNumber: 335,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 331,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 329,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 325,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[16px] font-bold text-slate-900 mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                    term: searchTerm,
                    text: "4. Restore Procedure"
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                    lineNumber: 340,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 340,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                        term: searchTerm,
                        text: "Restoration can be initiated upon approval by the "
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 342,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                            term: searchTerm,
                            text: "Infrastructure Manager"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 343,
                            columnNumber: 45
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 343,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                        term: searchTerm,
                        text: " or "
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 344,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                            term: searchTerm,
                            text: "IT Systems Manager"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                            lineNumber: 345,
                            columnNumber: 45
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 345,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                        term: searchTerm,
                        text: " depending on scale:"
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 346,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 341,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc pl-5 space-y-1 mb-4 marker:text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "Minor restores"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 349,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 349,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " (specific files/directories) handled in production as needed."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 349,
                                columnNumber: 109
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 349,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "Major restores"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 350,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 350,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " (servers, databases) coordinated with executive IT leadership."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 350,
                                columnNumber: 109
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 350,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                    term: searchTerm,
                                    text: "System restoration priority:"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                    lineNumber: 351,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 351,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                                term: searchTerm,
                                text: " infrastructure services, mission-critical systems (Tier A), Tier B systems, and then all other systems."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                                lineNumber: 351,
                                columnNumber: 123
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                        lineNumber: 351,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
                lineNumber: 348,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/components/views/Document.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = BotResponseContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Highlight");
__turbopack_context__.k.register(_c1, "DocumentView");
__turbopack_context__.k.register(_c2, "BotResponseContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewType",
    ()=>ViewType
]);
var ViewType = /*#__PURE__*/ function(ViewType) {
    ViewType["DASHBOARD"] = "Home";
    ViewType["ANALYSIS"] = "Analysis";
    ViewType["MODELING"] = "Modeling";
    ViewType["WORKFLOW"] = "Knowledge";
    ViewType["DOCUMENT"] = "API"; // Mapping Document to API/Docs view
    return ViewType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as PenSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Sidebar = ({ currentView, onNavigate })=>{
    _s();
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingView, setPendingView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleNavigation = (view)=>{
        if (view === currentView) return;
        // Mock check for unsaved changes (Assumed true for Modeling & Workflow for demo purposes)
        const hasUnsavedChanges = currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING || currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW;
        if (hasUnsavedChanges) {
            setPendingView(view);
            setShowConfirm(true);
        } else {
            onNavigate(view);
        }
    };
    const confirmNavigation = ()=>{
        if (pendingView) {
            onNavigate(pendingView);
        }
        setShowConfirm(false);
        setPendingView(null);
    };
    const cancelNavigation = ()=>{
        setShowConfirm(false);
        setPendingView(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "h-full flex flex-col text-[#ececec]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 mb-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 hover:bg-[#212121] p-2 -ml-2 rounded-lg cursor-pointer transition-colors flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-6 rounded-full bg-white flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-black text-sm",
                                    children: "C"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-sm tracking-tight",
                                children: "Chatty AI"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNavigation(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD),
                        className: "p-2 hover:bg-[#212121] rounded-lg text-[#ececec] transition-colors",
                        title: "New Chat",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__["PenSquare"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-2 space-y-6 scrollbar-thin scrollbar-thumb-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 text-[11px] font-bold text-[#A0A0A0] mb-2 uppercase tracking-wider",
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS || currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`,
                                        onClick: ()=>handleNavigation(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate flex-1",
                                                children: "Salary Analysis Q3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                                lineNumber: 84,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                size: 14,
                                                className: "opacity-0 group-hover:opacity-100 text-[#ececec]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`,
                                        onClick: ()=>handleNavigation(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate flex-1",
                                            children: "Schema Modeling"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 text-[11px] font-bold text-[#A0A0A0] mb-2 uppercase tracking-wider",
                                children: "Previous 7 Days"
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`,
                                        onClick: ()=>handleNavigation(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate flex-1",
                                            children: "Knowledge Agent Setup"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors group ${currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT ? 'bg-[#212121] text-white' : 'text-[#ececec] hover:bg-[#212121]'}`,
                                        onClick: ()=>handleNavigation(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate flex-1",
                                            children: "Backup Procedures Doc"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors text-[#ececec] hover:bg-[#212121]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate flex-1",
                                            children: "SQL Optimization"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-left transition-colors text-[#ececec] hover:bg-[#212121]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate flex-1",
                                            children: "User Churn Report"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 mt-auto border-t border-[#333]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-[#212121] text-sm text-[#ececec] transition-colors text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-7 w-7 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs",
                            children: "U"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium",
                                    children: "User Admin"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-[#B0B0B0] font-bold",
                                    children: "Pro Plan"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            size: 16,
                            className: "text-[#999]"
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-fade-in font-sans",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-2xl w-full max-w-[400px] overflow-hidden animate-scale-up ring-1 ring-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            size: 20,
                                            className: "text-amber-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 141,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-semibold text-slate-900 mb-1",
                                                children: "Unsaved Changes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                                lineNumber: 145,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 leading-relaxed",
                                                children: [
                                                    "You have unsaved changes in the ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING ? 'Data Modeler' : 'Workflow Editor'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 73
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ". Leaving now will discard your progress."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                                lineNumber: 146,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                        lineNumber: 144,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                lineNumber: 140,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                            lineNumber: 139,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-50 px-6 py-4 flex justify-end gap-3 border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: cancelNavigation,
                                    className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-200/50 rounded-lg transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                    lineNumber: 154,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: confirmNavigation,
                                    className: "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors ring-1 ring-red-700/10",
                                    children: "Leave without saving"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                                    lineNumber: 160,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                            lineNumber: 153,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                    lineNumber: 138,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
                lineNumber: 137,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/components/Sidebar.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "BEkFa3kc0h4pHCF/mqrPK3HpvJM=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/interactive-hero/HeroInteractive.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroInteractive",
    ()=>HeroInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share.js [app-client] (ecmascript) <export default as Share>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/components/views/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Modeling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/components/views/Modeling.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Workflow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/components/views/Workflow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Document$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/components/views/Document.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/interactive-hero/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
// Initial State
const INITIAL_STATE = {
    currentView: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD,
    isAutoplay: true,
    searchQuery: '',
    isTyping: false,
    stepIndex: 0,
    showResults: false
};
// Script definition for the Autoplay
const SCRIPT_STEPS = [
    // 0: Dashboard - Wait
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD,
        action: 'wait',
        duration: 1500
    },
    // 1: Dashboard - Type Query
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD,
        action: 'type',
        text: 'What is the average salary for each position?',
        duration: 2000
    },
    // 2: Dashboard - Search Trigger (Transition to results)
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD,
        action: 'navigate',
        target: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS,
        duration: 1000
    },
    // 3: Analysis - View Data (Allow time for chart animation)
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS,
        action: 'wait',
        duration: 4000
    },
    // 4: Analysis - Navigate to Model
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS,
        action: 'navigate',
        target: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING,
        duration: 800
    },
    // 5: Modeling - Move Node (Simulated in component)
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING,
        action: 'wait',
        duration: 3000
    },
    // 6: Modeling - Navigate to Workflow (Knowledge)
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING,
        action: 'navigate',
        target: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW,
        duration: 800
    },
    // 7: Workflow - Process (Simulated in component)
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW,
        action: 'wait',
        duration: 3500
    },
    // 8: Workflow - Navigate to Document
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW,
        action: 'navigate',
        target: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT,
        duration: 800
    },
    // 9: Document - Simulate Typing/Response
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT,
        action: 'wait',
        duration: 4000
    },
    // 10: End
    {
        view: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT,
        action: 'finish',
        duration: 0
    }
];
const HeroInteractive = ()=>{
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Start closed on mobile
    const [isModelMenuOpen, setIsModelMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [motionEnabled, setMotionEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check motion preferences
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroInteractive.useEffect": ()=>{
            const mqReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)');
            const mqMobile = window.matchMedia?.('(max-width: 768px)');
            const update = {
                "HeroInteractive.useEffect.update": ()=>setMotionEnabled(!(mqReduce?.matches || mqMobile?.matches))
            }["HeroInteractive.useEffect.update"];
            update();
            mqReduce?.addEventListener?.('change', update);
            mqMobile?.addEventListener?.('change', update);
            return ({
                "HeroInteractive.useEffect": ()=>{
                    mqReduce?.removeEventListener?.('change', update);
                    mqMobile?.removeEventListener?.('change', update);
                }
            })["HeroInteractive.useEffect"];
        }
    }["HeroInteractive.useEffect"], []);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroInteractive.useEffect": ()=>{
            const handleClickOutside = {
                "HeroInteractive.useEffect.handleClickOutside": (event)=>{
                    if (modelMenuRef.current && !modelMenuRef.current.contains(event.target)) {
                        setIsModelMenuOpen(false);
                    }
                }
            }["HeroInteractive.useEffect.handleClickOutside"];
            if (isModelMenuOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "HeroInteractive.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["HeroInteractive.useEffect"];
        }
    }["HeroInteractive.useEffect"], [
        isModelMenuOpen
    ]);
    // -- Interaction Handler --
    // Stops autoplay only if the interaction is manual (not script-driven)
    const handleInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroInteractive.useCallback[handleInteraction]": ()=>{
            // If the event is synthetic/programmatic from script, we ignore it (logic handled in components)
            // But here we assume any direct UI event call is manual
            if (state.isAutoplay && state.stepIndex < SCRIPT_STEPS.length - 1) {
                setState({
                    "HeroInteractive.useCallback[handleInteraction]": (prev)=>({
                            ...prev,
                            isAutoplay: false,
                            isTyping: false
                        })
                }["HeroInteractive.useCallback[handleInteraction]"]);
                if (timerRef.current) clearTimeout(timerRef.current);
            }
        }
    }["HeroInteractive.useCallback[handleInteraction]"], [
        state.isAutoplay,
        state.stepIndex
    ]);
    // -- Navigation Handler --
    const handleNavigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroInteractive.useCallback[handleNavigate]": (view)=>{
            handleInteraction(); // Manual navigation stops autoplay
            setState({
                "HeroInteractive.useCallback[handleNavigate]": (prev)=>({
                        ...prev,
                        currentView: view,
                        showResults: view === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS,
                        searchQuery: view === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD ? '' : prev.searchQuery
                    })
            }["HeroInteractive.useCallback[handleNavigate]"]);
            setIsModelMenuOpen(false);
        }
    }["HeroInteractive.useCallback[handleNavigate]"], [
        handleInteraction
    ]);
    // -- Replay Handler --
    const handleReplay = ()=>{
        if (timerRef.current) clearTimeout(timerRef.current);
        setState({
            ...INITIAL_STATE,
            isAutoplay: motionEnabled
        });
    };
    // -- Autoplay Engine --
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroInteractive.useEffect": ()=>{
            if (!state.isAutoplay || !motionEnabled) return;
            const currentStep = SCRIPT_STEPS[state.stepIndex];
            if (!currentStep) return;
            // Handle "Type" action start
            if (currentStep.action === 'type' && currentStep.text) {
                setState({
                    "HeroInteractive.useEffect": (prev)=>({
                            ...prev,
                            isTyping: true
                        })
                }["HeroInteractive.useEffect"]);
            }
            const nextDelay = currentStep.duration;
            timerRef.current = setTimeout({
                "HeroInteractive.useEffect": ()=>{
                    // Handle Action Completion
                    if (currentStep.action === 'type') {
                        // Finished typing, commit the query text
                        setState({
                            "HeroInteractive.useEffect": (prev)=>({
                                    ...prev,
                                    searchQuery: currentStep.text || '',
                                    isTyping: false
                                })
                        }["HeroInteractive.useEffect"]);
                    }
                    if (currentStep.action === 'navigate' && currentStep.target) {
                        setState({
                            "HeroInteractive.useEffect": (prev)=>({
                                    ...prev,
                                    currentView: currentStep.target,
                                    showResults: currentStep.target === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS
                                })
                        }["HeroInteractive.useEffect"]);
                    }
                    if (currentStep.action === 'finish') {
                        setState({
                            "HeroInteractive.useEffect": (prev)=>({
                                    ...prev,
                                    isAutoplay: false
                                })
                        }["HeroInteractive.useEffect"]);
                        return;
                    }
                    // Move to next step
                    setState({
                        "HeroInteractive.useEffect": (prev)=>({
                                ...prev,
                                stepIndex: prev.stepIndex + 1
                            })
                    }["HeroInteractive.useEffect"]);
                }
            }["HeroInteractive.useEffect"], nextDelay);
            return ({
                "HeroInteractive.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                }
            })["HeroInteractive.useEffect"];
        }
    }["HeroInteractive.useEffect"], [
        state.stepIndex,
        state.isAutoplay,
        motionEnabled
    ]);
    // -- View Renderer --
    const renderMainContent = ()=>{
        // Dashboard and Analysis share the same Chat Interface view
        if (state.currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD || state.currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardView"], {
                searchQuery: state.searchQuery,
                isTyping: state.isTyping && state.stepIndex === 1,
                showResults: state.showResults || state.currentView === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS,
                onSearch: (q)=>{
                    // If autoplay is active, this search is programmatic, don't stop autoplay
                    if (!state.isAutoplay) {
                        handleInteraction();
                        setState((prev)=>({
                                ...prev,
                                searchQuery: q,
                                showResults: true,
                                currentView: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS
                            }));
                    } else {
                        // Just update state to show results without killing autoplay
                        setState((prev)=>({
                                ...prev,
                                showResults: true
                            }));
                    }
                },
                isAutoplay: state.isAutoplay
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        switch(state.currentView){
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Modeling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelingView"], {
                    isAutoplay: state.isAutoplay,
                    onInteract: handleInteraction
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                    lineNumber: 242,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Workflow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkflowView"], {
                    isAutoplay: state.isAutoplay,
                    onInteract: handleInteraction
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$views$2f$Document$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentView"], {
                    isAutoplay: state.isAutoplay,
                    onInteract: handleInteraction
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
    const getViewLabel = (view)=>{
        switch(view){
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD:
                return 'Chatty 4o';
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].ANALYSIS:
                return 'Chatty 4o';
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING:
                return 'Data Modeler';
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW:
                return 'Workflow Agent';
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT:
                return 'Docs Assistant';
            default:
                return 'Chatty 4o';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[100vh] sm:min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
                }, void 0, false, {
                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-6 sm:mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(167,139,250,0.6)]"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-[var(--text-secondary)]",
                                    children: "Enterprise AI Platform"
                                }, void 0, false, {
                                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "text-center mb-6 sm:mb-8 max-w-4xl mx-auto px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] mb-5 sm:mb-6 leading-[1.05]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-primary)]",
                                        children: "Your Private "
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent",
                                        children: "Enterprise AI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden sm:block"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm:hidden",
                                        children: " "
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-primary)]",
                                        children: "Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 tracking-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent",
                                        children: "Powerful."
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mx-1.5 sm:mx-2 text-[var(--text-primary)]",
                                        children: "Secure."
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent",
                                        children: "On-Premise."
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-[var(--text-secondary)]/90 max-w-2xl mx-auto leading-relaxed",
                                children: "Chatty connects to your documents, databases, internal systems, and workflows. Ask questions, analyze data, and run AI agents that reason, decide, and act — with full control and enterprise-grade security."
                            }, void 0, false, {
                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 sm:gap-3 mt-3 text-[8px] min-[550px]:text-sm font-semibold tracking-[0.15em] uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-400",
                                        children: "Knowledge"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 h-1 rounded-full bg-purple-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-violet-400",
                                        children: "Agents"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 h-1 rounded-full bg-violet-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "Automation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 h-1 rounded-full bg-blue-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "One Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 sm:mb-12 md:mb-16 w-full relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto max-w-[1400px] w-full sm:px-6 lg:px-8 isolate overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-full overflow-x-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-1 sm:-inset-2 md:-inset-3 bg-gradient-to-r from-purple-500/8 via-violet-500/8 to-indigo-500/8 rounded-xl sm:rounded-2xl md:rounded-3xl blur-2xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-card)] shadow-xl w-full isolate",
                                        style: {
                                            textAlign: 'left',
                                            contain: 'layout style paint'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 sm:h-14 md:h-16 bg-[var(--bg-header)] dark:bg-[#2d1f45] flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 w-full relative z-10 border-b border-gray-700 dark:border-white/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 sm:gap-2 shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                                                    size: 100,
                                                                    className: "h-6 sm:h-7 md:h-8 w-auto",
                                                                    variant: "hero"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                ref: modelMenuRef,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            setIsModelMenuOpen(!isModelMenuOpen);
                                                                            handleInteraction();
                                                                        },
                                                                        className: "flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-transparent hover:bg-gray-700 dark:hover:bg-white/10 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-primary)] dark:text-white transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "whitespace-nowrap",
                                                                                children: getViewLabel(state.currentView)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                                lineNumber: 374,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                size: 14,
                                                                                className: "text-gray-400 dark:text-gray-200 sm:w-4 sm:h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                        lineNumber: 365,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    isModelMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-full left-0 mt-1.5 w-[220px] bg-[var(--bg-card)] rounded-xl shadow-xl border border-[var(--border-primary)] py-1.5 px-1.5 z-50 animate-fade-in-up origin-top-left",
                                                                        style: {
                                                                            contain: 'layout style paint'
                                                                        },
                                                                        children: [
                                                                            {
                                                                                id: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DASHBOARD,
                                                                                label: 'Chatty 4o',
                                                                                desc: 'Great for most tasks'
                                                                            },
                                                                            {
                                                                                id: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].MODELING,
                                                                                label: 'Data Modeler',
                                                                                desc: 'Schema design & logic'
                                                                            },
                                                                            {
                                                                                id: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].WORKFLOW,
                                                                                label: 'Workflow Agent',
                                                                                desc: 'Process automation'
                                                                            },
                                                                            {
                                                                                id: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewType"].DOCUMENT,
                                                                                label: 'Docs Assistant',
                                                                                desc: 'RAG & analysis'
                                                                            }
                                                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleNavigate(item.id),
                                                                                className: `w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between hover:bg-[var(--bg-elevated)] transition-colors ${state.currentView === item.id ? 'bg-[var(--bg-elevated)]' : ''}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-sm font-medium text-[var(--text-primary)]",
                                                                                                children: item.label
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                                                lineNumber: 422,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[11px] text-[var(--text-muted)]",
                                                                                                children: item.desc
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                                                lineNumber: 425,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                                        lineNumber: 421,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    state.currentView === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                        size: 14,
                                                                                        className: "text-[var(--accent-violet)]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                                        lineNumber: 430,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, item.id, true, {
                                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                                lineNumber: 411,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            !state.isAutoplay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleReplay,
                                                                className: "p-2 text-gray-400 hover:bg-gray-700 rounded-full transition-colors",
                                                                title: "Replay Demo",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "p-2 text-gray-400 hover:bg-gray-700 rounded-full transition-colors",
                                                                "aria-label": "Share",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__["Share"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex overflow-hidden w-full relative isolate",
                                                style: {
                                                    minHeight: 'clamp(400px, 60vh, 700px)',
                                                    maxHeight: 'clamp(600px, 85vh, 900px)',
                                                    contain: 'layout style paint',
                                                    isolation: 'isolate'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${isSidebarOpen ? 'w-[240px] xl:w-[260px]' : 'w-0'} hidden lg:flex flex-col border-r border-[var(--border-primary)] bg-[var(--bg-sidebar)] shrink-0 relative z-0 overflow-hidden transition-all duration-300 ease-in-out`,
                                                        style: {
                                                            willChange: 'width'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                                                            currentView: state.currentView,
                                                            onNavigate: handleNavigate
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsSidebarOpen(!isSidebarOpen),
                                                        className: "lg:hidden absolute top-2 left-2 z-20 p-2 bg-[var(--bg-card)]/90 backdrop-blur-sm rounded-lg shadow-sm border border-[var(--border-primary)] hover:bg-[var(--bg-card)] transition-colors",
                                                        "aria-label": "Toggle sidebar",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                                                            size: 18,
                                                            className: "text-[var(--text-primary)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
                                                                onClick: ()=>setIsSidebarOpen(false),
                                                                "aria-label": "Close sidebar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-[var(--bg-sidebar)] z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$interactive$2d$hero$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                                                                    currentView: state.currentView,
                                                                    onNavigate: (view)=>{
                                                                        handleNavigate(view);
                                                                        setIsSidebarOpen(false);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex flex-col bg-[var(--bg-card)] min-w-0 w-full relative z-0 overflow-hidden",
                                                        style: {
                                                            contain: 'layout style'
                                                        },
                                                        children: renderMainContent()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/interactive-hero/HeroInteractive.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroInteractive, "mNlQI4I1YhjlqixxTIscKFkiN9g=");
_c = HeroInteractive;
var _c;
__turbopack_context__.k.register(_c, "HeroInteractive");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_interactive-hero_88c227ec._.js.map
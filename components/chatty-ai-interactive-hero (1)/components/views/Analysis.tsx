import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell
} from 'recharts';
import { 
    ChevronDown, 
    ChevronRight, 
    CheckCircle2, 
    Code2, 
    BarChart3, 
    Sparkles,
    Wand2,
    MoreHorizontal,
    Play,
    RefreshCw,
    Copy,
    Check
} from 'lucide-react';

interface AnalysisProps {
    isAutoplay: boolean;
}

export const AnalysisView: React.FC<AnalysisProps> = ({ isAutoplay }) => {
    const [activeTab, setActiveTab] = useState<'answer' | 'sql' | 'chart'>('answer');
    const [stepsExpanded, setStepsExpanded] = useState(true);
    const [isOptimized, setIsOptimized] = useState(false);
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    // Exact colors from Screenshot 8
    const chartData = [
        { name: 'Assistant Engineer', value: 55841, fill: '#7c5cfc' }, // Purple
        { name: 'Engineer', value: 57000, fill: '#5542f6' }, // Blue-ish Purple
        { name: 'Manager', value: 77723, fill: '#2a85ff' }, // Azure Blue
        { name: 'Senior Engineer', value: 69782, fill: '#0ea5e9' }, // Cyan
        { name: 'Senior Staff', value: 79731, fill: '#3b318d' }, // Dark Navy
        { name: 'Staff', value: 65841, fill: '#e91e63' }, // Pink/Red
        { name: 'Technique Leader', value: 64000, fill: '#f95700' }, // Orange
    ];

    // Auto-switch tabs for demo effect
    useEffect(() => {
        if (isAutoplay) {
            const t1 = setTimeout(() => setActiveTab('sql'), 1500);
            const t2 = setTimeout(() => setActiveTab('chart'), 3500);
            return () => { clearTimeout(t1); clearTimeout(t2); };
        } else {
             setActiveTab('answer');
        }
    }, [isAutoplay]);

    const handleOptimize = () => {
        setIsOptimizing(true);
        setTimeout(() => {
            setIsOptimized(true);
            setIsOptimizing(false);
        }, 1200);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(isOptimized ? optimizedSQL : originalSQL);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
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

    return (
        <div className="w-full space-y-4 animate-fade-in font-sans">
            
            {/* Thinking / Process Steps (Collapsible) */}
            <div className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
                <button 
                    onClick={() => setStepsExpanded(!stepsExpanded)}
                    className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <Sparkles size={12} className="text-purple-600" />
                        <span>Analyzed data</span>
                    </div>
                    {stepsExpanded ? <ChevronDown size={14} className="text-slate-400" /> : <ChevronRight size={14} className="text-slate-400" />}
                </button>
                {stepsExpanded && (
                    <div className="px-3 pb-3 pt-2 space-y-1 bg-white border-t border-slate-100">
                         <div className="flex items-center gap-2 text-xs text-slate-500">
                             <CheckCircle2 size={12} className="text-green-500" />
                             <span>Identified tables: salaries, titles</span>
                         </div>
                         <div className="flex items-center gap-2 text-xs text-slate-500">
                             <CheckCircle2 size={12} className="text-green-500" />
                             <span>Joined on emp_no</span>
                         </div>
                         <div className="flex items-center gap-2 text-xs text-slate-500">
                             <CheckCircle2 size={12} className="text-green-500" />
                             <span>Calculated averages</span>
                         </div>
                    </div>
                )}
            </div>

            {/* Answer Text */}
            <div className="text-[15px] text-[#0d0d0d] leading-relaxed">
                To find the average salary for each position, I analyzed the latest salary data. Here are the average salaries for key positions:
                <ul className="list-disc ml-5 mt-2 space-y-1 mb-4">
                        <li><span className="font-semibold">Staff:</span> $65,841.37</li>
                        <li><span className="font-semibold">Manager:</span> $77,723.67</li>
                        <li><span className="font-semibold">Senior Engineer:</span> $69,782.33</li>
                        <li><span className="font-semibold">Senior Staff:</span> $79,731.68</li>
                </ul>
            </div>

            {/* Artifact Card */}
            <div className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden my-2">
                {/* Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-50 border-b border-slate-100">
                    <button 
                        onClick={() => setActiveTab('chart')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === 'chart' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'}`}
                    >
                        <BarChart3 size={14} className="text-orange-500" />
                        <span>Chart</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('sql')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === 'sql' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'}`}
                    >
                        <Code2 size={14} className="text-blue-500"/>
                        <span>SQL Query</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('answer')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === 'answer' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'}`}
                    >
                        <CheckCircle2 size={14} className="text-green-500"/>
                        <span>Data Table</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 bg-white min-h-[300px]">
                    
                    {activeTab === 'answer' && (
                        <div className="animate-fade-in">
                             <div className="border border-slate-200 rounded-lg overflow-hidden">
                                 <table className="w-full text-sm">
                                     <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                                         <tr>
                                             <th className="px-3 py-2 text-left font-medium">Title</th>
                                             <th className="px-3 py-2 text-right font-medium">Average Salary</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                         {chartData.slice(0, 5).map((row, i) => (
                                             <tr key={i} className="hover:bg-slate-50 border-b border-slate-100 last:border-0 text-slate-700">
                                                 <td className="px-3 py-2">{row.name}</td>
                                                 <td className="px-3 py-2 text-right font-mono">${row.value.toLocaleString()}</td>
                                             </tr>
                                         ))}
                                     </tbody>
                                 </table>
                             </div>
                        </div>
                    )}

                    {activeTab === 'sql' && (
                         <div className="animate-fade-in space-y-2">
                             <div className="flex justify-between items-center mb-1">
                                 <span className="text-xs font-medium text-slate-500">Generated SQL</span>
                                 <div className="flex gap-2">
                                     {isOptimized ? (
                                         <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                                             <CheckCircle2 size={10} /> Optimized (Execution: 12ms)
                                         </span>
                                     ) : (
                                        <button 
                                            onClick={handleOptimize}
                                            disabled={isOptimizing}
                                            className="text-xs flex items-center gap-1 text-slate-500 hover:text-blue-600 border border-slate-200 px-2 py-1 rounded bg-white hover:bg-slate-50 transition-all"
                                        >
                                            {isOptimizing ? <span className="animate-spin"><RefreshCw size={12}/></span> : <Wand2 size={12}/>}
                                            Optimize Query
                                        </button>
                                     )}
                                     
                                     <button 
                                        onClick={handleCopy}
                                        className="text-xs flex items-center gap-1 text-slate-500 hover:text-blue-600 border border-slate-200 px-2 py-1 rounded bg-white hover:bg-slate-50 transition-all"
                                     >
                                         {isCopied ? <Check size={12} className="text-green-600"/> : <Copy size={12}/>} 
                                         {isCopied ? "Copied" : "Copy"}
                                     </button>

                                     <button className="text-xs flex items-center gap-1 text-slate-500 hover:text-blue-600 border border-slate-200 px-2 py-1 rounded bg-white hover:bg-slate-50 transition-all">
                                         <Play size={12} fill="currentColor"/> Run
                                     </button>
                                 </div>
                             </div>
                             <div className={`bg-[#f8fafc] border rounded-lg p-3 font-mono text-xs overflow-x-auto transition-colors duration-500 ${isOptimized ? 'border-green-200 bg-green-50/30' : 'border-slate-100'}`}>
                                <pre className={isOptimizing ? 'animate-pulse' : ''}>{isOptimized ? optimizedSQL : originalSQL}</pre>
                             </div>
                         </div>
                    )}

                    {activeTab === 'chart' && (
                        <div className="w-full h-[300px] animate-fade-in">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{bottom: 40, top: 10, left: 0, right: 0}}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis 
                                        dataKey="name" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{fill: '#64748b', fontSize: 10}} 
                                        angle={-45}
                                        textAnchor="end"
                                        interval={0}
                                        dy={10}
                                    />
                                    <YAxis 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{fill: '#94a3b8', fontSize: 10}} 
                                        tickFormatter={(val) => `${val/1000}k`}
                                    />
                                    <Tooltip 
                                        cursor={{fill: '#f8fafc'}}
                                        contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px'}}
                                    />
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}

                </div>
            </div>
            
            <div className="text-[15px] text-[#0d0d0d]">
                If you need information on additional positions or a different visualization, just ask!
            </div>
        </div>
    );
};
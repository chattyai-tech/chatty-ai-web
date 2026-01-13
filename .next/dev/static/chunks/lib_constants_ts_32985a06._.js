(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ===== DATA FOR INTERACTIVE HERO SECTION =====
__turbopack_context__.s([
    "CHART_DATA",
    ()=>CHART_DATA,
    "DEMO_SCENARIO",
    ()=>DEMO_SCENARIO,
    "LOGOS",
    ()=>LOGOS,
    "MODELING_RELATIONSHIPS",
    ()=>MODELING_RELATIONSHIPS,
    "MODELING_TABLES",
    ()=>MODELING_TABLES,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "SECURITY_FEATURES",
    ()=>SECURITY_FEATURES,
    "SQL_QUERY",
    ()=>SQL_QUERY,
    "SUGGESTIONS",
    ()=>SUGGESTIONS,
    "TABLE_DATA",
    ()=>TABLE_DATA,
    "TRUSTED_ORGS_HERO",
    ()=>TRUSTED_ORGS_HERO,
    "USE_CASES",
    ()=>USE_CASES,
    "WORD_PERSONAS",
    ()=>WORD_PERSONAS,
    "WORKFLOW_EDGES",
    ()=>WORKFLOW_EDGES,
    "WORKFLOW_NODES",
    ()=>WORKFLOW_NODES
]);
const TABLE_DATA = [
    {
        title: 'Staff',
        salary: 65841.37341048894,
        count: 145
    },
    {
        title: 'Manager',
        salary: 77723.67,
        count: 23
    },
    {
        title: 'Senior Engineer',
        salary: 69782.3329923169,
        count: 67
    },
    {
        title: 'Senior Staff',
        salary: 79731.67692738514,
        count: 34
    },
    {
        title: 'Assistant Engineer',
        salary: 55893.86,
        count: 89
    },
    {
        title: 'Technique Leader',
        salary: 86469.12,
        count: 12
    },
    {
        title: 'Engineer',
        salary: 62178.35,
        count: 98
    },
    {
        title: 'HR Manager',
        salary: 72345.5,
        count: 8
    }
];
const CHART_DATA = TABLE_DATA.map(_c = (item)=>({
        name: item.title,
        salary: Math.round(item.salary),
        count: item.count
    }));
_c1 = CHART_DATA;
const SQL_QUERY = `SELECT title, AVG(salary) as average_salary, COUNT(*) as count
FROM employees e
JOIN salaries s ON e.emp_no = s.emp_no
GROUP BY title
ORDER BY average_salary DESC;`;
const DEMO_SCENARIO = {
    query: 'What is the average salary for each position?',
    steps: 5,
    response: {
        intro: 'To find the average salary for each position, we analyzed the latest salary data for employees based on their job titles. Here are the average salaries for some of the positions:',
        results: TABLE_DATA.slice(0, 5),
        followUp: 'There are more positions with their average salaries, but these are the top examples.'
    }
};
const SUGGESTIONS = [
    {
        category: 'Aggregation',
        text: 'What is the average salary for each position?'
    },
    {
        category: 'Comparison',
        text: 'Compare the average salary of male and female employees in each department.'
    },
    {
        category: 'Associating',
        text: 'What are the names of the managers and the departments they manage?'
    }
];
const MODELING_TABLES = [
    {
        id: 'employees',
        name: 'employees',
        position: {
            x: 100,
            y: 100
        },
        fields: [
            {
                name: 'emp_no',
                type: 'INT',
                primary: true
            },
            {
                name: 'first_name',
                type: 'VARCHAR'
            },
            {
                name: 'last_name',
                type: 'VARCHAR'
            },
            {
                name: 'gender',
                type: 'ENUM'
            },
            {
                name: 'hire_date',
                type: 'DATE'
            }
        ]
    },
    {
        id: 'salaries',
        name: 'salaries',
        position: {
            x: 400,
            y: 100
        },
        fields: [
            {
                name: 'emp_no',
                type: 'INT',
                primary: true
            },
            {
                name: 'salary',
                type: 'DECIMAL'
            },
            {
                name: 'from_date',
                type: 'DATE'
            },
            {
                name: 'to_date',
                type: 'DATE'
            }
        ]
    },
    {
        id: 'titles',
        name: 'titles',
        position: {
            x: 250,
            y: 300
        },
        fields: [
            {
                name: 'emp_no',
                type: 'INT',
                primary: true
            },
            {
                name: 'title',
                type: 'VARCHAR'
            },
            {
                name: 'from_date',
                type: 'DATE'
            },
            {
                name: 'to_date',
                type: 'DATE'
            }
        ]
    },
    {
        id: 'departments',
        name: 'departments',
        position: {
            x: 550,
            y: 300
        },
        fields: [
            {
                name: 'dept_no',
                type: 'CHAR',
                primary: true
            },
            {
                name: 'dept_name',
                type: 'VARCHAR'
            }
        ]
    }
];
const MODELING_RELATIONSHIPS = [
    {
        from: 'employees',
        to: 'salaries',
        field: 'emp_no'
    },
    {
        from: 'employees',
        to: 'titles',
        field: 'emp_no'
    }
];
const WORKFLOW_NODES = [
    {
        id: '1',
        type: 'trigger',
        position: {
            x: 100,
            y: 100
        },
        data: {
            label: 'New Data Arrives'
        }
    },
    {
        id: '2',
        type: 'agent',
        position: {
            x: 300,
            y: 100
        },
        data: {
            label: 'AI Agent'
        }
    },
    {
        id: '3',
        type: 'tool',
        position: {
            x: 500,
            y: 100
        },
        data: {
            label: 'Database Query'
        }
    },
    {
        id: '4',
        type: 'action',
        position: {
            x: 700,
            y: 100
        },
        data: {
            label: 'Send Report'
        }
    }
];
const WORKFLOW_EDGES = [
    {
        id: 'e1-2',
        source: '1',
        target: '2'
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3'
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4'
    }
];
const WORD_PERSONAS = [
    {
        id: 'lawyer',
        name: 'Lawyer',
        description: 'Legal document analysis'
    },
    {
        id: 'copywriter',
        name: 'Copywriter',
        description: 'Marketing content creation'
    },
    {
        id: 'analyst',
        name: 'Analyst',
        description: 'Data report generation'
    }
];
const NAV_LINKS = [
    {
        label: 'Product',
        href: '#platform'
    },
    {
        label: 'Security',
        href: '#security'
    },
    {
        label: 'How It Works',
        href: '#how-it-works'
    },
    {
        label: 'Contact',
        href: '#footer'
    }
];
const TRUSTED_ORGS_HERO = [
    {
        name: 'Howden',
        industry: 'Global Insurance'
    },
    {
        name: 'Hillel Yaffe',
        industry: 'Medical Center'
    },
    {
        name: 'Electra Power',
        industry: 'Consumer Energy'
    },
    {
        name: 'Beit HaNasi',
        industry: 'Government'
    },
    {
        name: 'Yazmak',
        industry: 'Enterprise Services'
    }
];
const SECURITY_FEATURES = [
    {
        title: 'On-Prem Deployment',
        description: 'Runs on your Kubernetes cluster or bare metal servers',
        iconName: 'Server'
    },
    {
        title: 'End-to-End Encryption',
        description: 'AES-256 encryption at rest, TLS 1.3 in transit',
        iconName: 'Lock'
    },
    {
        title: 'Role-Based Access',
        description: 'Granular permissions synced with Active Directory/LDAP',
        iconName: 'UserCheck'
    },
    {
        title: 'Audit Logging & Compliance',
        description: 'Every query, action, and access logged immutably',
        iconName: 'Activity'
    },
    {
        title: 'Zero External Exposure',
        description: 'No internet egress required, air-gapped capable',
        iconName: 'EyeOff'
    }
];
const LOGOS = [
    {
        name: 'Office of the President',
        image: '/d56fc5aad14690d3e1599ff3da4e67af.png'
    },
    {
        name: 'Hillel Yaffe',
        image: '/logo_eng.png'
    },
    {
        name: 'Electra Power',
        image: '/1645532977595-0.png'
    },
    {
        name: 'Howden',
        image: '/Howden_Consumer_Logo_Brass_RGB2.png'
    }
];
const USE_CASES = [
    {
        title: 'Generate SQL & analyze data',
        icon: 'database'
    },
    {
        title: 'Search and query enterprise documents',
        icon: 'search'
    },
    {
        title: 'Automate workflows with n8n',
        icon: 'zap'
    },
    {
        title: 'Draft & summarize reports in Word',
        icon: 'file-text'
    },
    {
        title: 'Compare legal & insurance documents',
        icon: 'scale'
    },
    {
        title: "Ask anything about your organization's knowledge",
        icon: 'message-square'
    }
];
var _c, _c1;
__turbopack_context__.k.register(_c, "CHART_DATA$TABLE_DATA.map");
__turbopack_context__.k.register(_c1, "CHART_DATA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=lib_constants_ts_32985a06._.js.map
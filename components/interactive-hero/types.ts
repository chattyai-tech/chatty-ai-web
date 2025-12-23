export enum ViewType {
    DASHBOARD = 'Home',
    ANALYSIS = 'Analysis', // Internal state for Dashboard results
    MODELING = 'Modeling',
    WORKFLOW = 'Knowledge', // Mapping Workflow to Knowledge/Agent view for demo
    DOCUMENT = 'API' // Mapping Document to API/Docs view
}

export interface AppState {
    currentView: ViewType;
    isAutoplay: boolean;
    searchQuery: string;
    isTyping: boolean;
    stepIndex: number;
    showResults: boolean; // Toggle between empty dashboard and analysis result
}

export interface MockDataPoint {
    name: string;
    revenue: number;
    profit: number;
    customers: number;
    // Added for specific chart mapping if needed
    [key: string]: string | number; 
}

export interface TableNode {
    id: string;
    name: string;
    columns: string[];
    x: number;
    y: number;
}










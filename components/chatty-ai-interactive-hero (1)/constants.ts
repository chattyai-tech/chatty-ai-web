import { MockDataPoint, TableNode } from './types';

export const MOCK_CHART_DATA: MockDataPoint[] = [
    { name: 'Jul', revenue: 4200, profit: 2400, customers: 120 },
    { name: 'Aug', revenue: 3800, profit: 2200, customers: 110 },
    { name: 'Sep', revenue: 6500, profit: 3800, customers: 180 }, // Spike
    { name: 'Oct', revenue: 4900, profit: 2900, customers: 140 },
    { name: 'Nov', revenue: 5200, profit: 3100, customers: 150 },
    { name: 'Dec', revenue: 7800, profit: 4500, customers: 210 },
];

export const MOCK_SCHEMA_NODES: TableNode[] = [
    { id: 't1', name: 'sales_transactions', columns: ['id', 'user_id', 'product_id', 'amount', 'created_at'], x: 50, y: 50 },
    { id: 't2', name: 'users', columns: ['id', 'email', 'country', 'signup_date'], x: 350, y: 50 },
    { id: 't3', name: 'products', columns: ['id', 'sku', 'category', 'price'], x: 50, y: 300 },
    { id: 't4', name: 'inventory', columns: ['product_id', 'warehouse_id', 'stock'], x: 350, y: 300 },
];

export const SUGGESTED_QUERIES = [
    "Analyze Q3 revenue trends",
    "Show user churn by region",
    "Forecast inventory for Q4",
    "Compare marketing ROI across channels"
];

export interface Transaction {
    id: string;
    amount: number;
    description: string;
    category: string;
    type: 'income' | 'expense';
    date: string;
}

export interface Balance {
    income: number;
    expenses: number;
    total: number;
}
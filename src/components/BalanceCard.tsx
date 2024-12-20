import React from 'react';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';
import type { Balance } from '../types/finance';

interface BalanceCardProps {
    balance: Balance;
}

export function BalanceCard({ balance }: BalanceCardProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <DollarSign size={24} />
                    <h3 className="font-semibold">Balance</h3>
                </div>
                <p className="text-2xl font-bold">${balance.total.toFixed(2)}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-green-600 mb-2">
                    <TrendingUp size={24} />
                    <h3 className="font-semibold">Income</h3>
                </div>
                <p className="text-2xl font-bold">${balance.income.toFixed(2)}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-red-600 mb-2">
                    <TrendingDown size={24} />
                    <h3 className="font-semibold">Expenses</h3>
                </div>
                <p className="text-2xl font-bold">${balance.expenses.toFixed(2)}</p>
            </div>
        </div>
    );
}
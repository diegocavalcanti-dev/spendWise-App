import React from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import type { Transaction } from '../types/finance';

interface TransactionListProps {
    transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
    return (
        <div className="space-y-4">
            {transactions.map((transaction) => (
                <div
                    key={transaction.id}
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                    <div className="flex items-center gap-3">
                        {transaction.type === 'income' ? (
                            <ArrowUpCircle className="text-green-500" />
                        ) : (
                            <ArrowDownCircle className="text-red-500" />
                        )}
                        <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-500">{transaction.category}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                            {new Date(transaction.date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
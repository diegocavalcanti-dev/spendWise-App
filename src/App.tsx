import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { TransactionForm } from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import { BalanceCard } from './components/BalanceCard';
import type { Transaction } from './types/finance';

function App() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
        const transaction = {
            ...newTransaction,
            id: crypto.randomUUID(),
        };
        setTransactions((prev) => [transaction, ...prev]);
    };

    const balance = transactions.reduce(
        (acc, transaction) => {
            const amount = transaction.amount;
            if (transaction.type === 'income') {
                acc.income += amount;
                acc.total += amount;
            } else {
                acc.expenses += amount;
                acc.total -= amount;
            }
            return acc;
        },
        { income: 0, expenses: 0, total: 0 }
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2">
                        <Wallet size={32} />
                        <h1 className="text-2xl font-bold">SpendWise</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid gap-8">
                    <BalanceCard balance={balance} />

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Adicionar Transação</h2>
                            <TransactionForm onAddTransaction={addTransaction} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">Transações Recentes</h2>
                            <TransactionList transactions={transactions} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
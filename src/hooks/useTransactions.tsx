import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface TransactionProps {
    id: number,
    type: string,
    title: string,
    amount: number,
    category: string,
    createdAt: string
}

interface TransactionContextData {
    transaction: TransactionProps [],
    createTransaction: (transaction: CreateTransactionProps) => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode
}

type CreateTransactionProps = Omit<TransactionProps, 'id' | 'createdAt'>;

const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transaction, setTransaction] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransaction(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: CreateTransactionProps) {
        const response = await api.post('/transaction', {
            ...transactionInput,
            createdAt: new Date()
        });

        const Transaction = response.data.transaction;
        setTransaction([
            ...transaction,
            Transaction
        ])
    }

    return(
        <TransactionContext.Provider value={{ transaction, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransactions() {
    const transactions = useContext(TransactionContext)

    return transactions;
}



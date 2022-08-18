import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransacionContextType {
  transactions: Transaction[] // retornando uma LISTA de interface Transações
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode //ReactNode é qualquer elemnto válido no react
}

export const TransactionsContext = createContext({} as TransacionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        q: query,
      }
    })
    setTransactions(response.data)
  }
    useEffect(() => {
      fetchTransactions();
    }, [])


    return (
      <TransactionsContext.Provider value={{
        transactions,
        fetchTransactions,
      }}>
        {children}
      </TransactionsContext.Provider>
    )
  }

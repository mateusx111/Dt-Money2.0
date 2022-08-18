import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummery() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce( // calculo do resumo de transações
    (acc, transaction) => {        // acc (accumulator) : é o objeto  income: 0,outcome: 0, total: 0
      if (transaction.type === 'income') {  // operações
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )  
  return summary
}

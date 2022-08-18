import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summery";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFromatter, priceFromatter } from "../../utils/formatter";
import { SearchFrom } from "./components/SearchFrom";

import { PriceHighLigh, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchFrom />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLigh variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '} {/* condicional para exibir o sinal negativo*/}
                      {priceFromatter.format(transaction.price)}
                    </PriceHighLigh>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFromatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>


    </div>
  )
}
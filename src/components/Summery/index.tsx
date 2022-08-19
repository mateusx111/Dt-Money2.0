import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummery } from '../../hooks/useSummary'
import { priceFromatter } from '../../utils/formatter'
import { SummeryCard, SummeryContainer } from './styles'

export function Summary() {
  const summary = useSummery()

  return (
    <SummeryContainer>
      <SummeryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={34} color="#00b37e" />
        </header>

        <strong>{priceFromatter.format(summary.income)}</strong>
      </SummeryCard>
      <SummeryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={34} color="#f75a68" />
        </header>

        <strong>{priceFromatter.format(summary.outcome)}</strong>
      </SummeryCard>
      <SummeryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={34} color="#fff" />
        </header>

        <strong>{priceFromatter.format(summary.total)}</strong>
      </SummeryCard>
    </SummeryContainer>
  )
}

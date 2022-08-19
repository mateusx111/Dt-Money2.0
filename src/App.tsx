import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transaction } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transaction /> {/* Header está dentro de Transaction */}
      </TransactionsProvider>
    </ThemeProvider>
  )
}

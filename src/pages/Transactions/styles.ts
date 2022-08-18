import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%; //100% da tela
  max-width: 1120px; // Se a tela for MENOR que 1120 a aplicação ocupará 100% da tela se for maior limitará a 1120
  margin: 4rem auto 0; // para centralizar
  padding: 0 1.5rem;// se a tela for menor que 1120 o conteúdo teram um espaçamento de 1.5rem

`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;// permitira o border-spacing
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: rgb(10, 10, 10, 0.5);

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
       border-top-right-radius: 8px;
       border-bottom-right-radius: 8px;
    }
  }
`
interface PriceHighLighProps{
  variant: 'income'|'outcome';
}
export const PriceHighLigh = styled.span<PriceHighLighProps>`
  color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme['red-300'] }
`


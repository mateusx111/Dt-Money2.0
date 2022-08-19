import styled, { css } from 'styled-components'

export const SummeryContainer = styled.section`
  width: 100%; //100% da tela
  max-width: 1120px; // Se a tela for MENOR que 1120 a aplicação ocupará 100% da tela se for maior limitará a 1120
  margin: 0 auto; // para centralizar
  padding: 0 1.5rem; // se a tela for menor que 1120 o conteúdo teram um espaçamento de 1.5rem

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem; // margin-top negativo joga o sumerry para cima, summerry ficará POR CIMA do Header
`

interface SummeryCardPros {
  variant?: 'green'
}

export const SummeryCard = styled.div<SummeryCardPros>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 8px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['gray-300']};
  }
  strong {
    //por padrão strong vem com o display in-line, tal não permite aplivar margim vertical
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
  background ${props.theme['green-700']}`}
`

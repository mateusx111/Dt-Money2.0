import styled from "styled-components"
import *as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled.header`
// Coitainer do header vai ocupar toda largura da tela do usuário
  background: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
// Conteúdo do header. separando o conteúdo do containar dá para fixar um máximo de largura 
  width: 100%; //100% da tela
  max-width: 1120px; // Se a tela for MENOR que 1120 a aplicação ocupará 100% da tela se for maior limitará a 1120
  margin: 0 auto; // para centralizar
  padding: 0 1.5rem;// se a tela for menor que 1120 o conteúdo teram um espaçamento de 1.5rem

  display: flex;
  justify-content: space-between;
  align-items: center; // vertivalmente alinhados ao centro
`
export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0; 
  border-radius: 8px;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme['white']};
  padding: 0 1.25rem;
  cursor: pointer;

  transition: background-color 0.5s;// com o transition aqui o o effeto acontece antes e depois de finalizar o hover 

  &:hover {
    //transition: background-color 0.5s; com o transition aqui o o efeito so acontece antes no inicio do hover
    background: ${props => props.theme['green-700']};
  }
`
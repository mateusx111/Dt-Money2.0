export const dateFromatter = new Intl.DateTimeFormat('pt-Br') // intl api de formatação do próprio JS
export const priceFromatter = new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
})

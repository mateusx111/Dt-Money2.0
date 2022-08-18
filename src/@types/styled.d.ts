// Quando utilizar o styled-componets  com o  typescript é PRECISO  criar um arquivo de tipagem que tenha 
// importado o styled-components para ESTENDER  a typagem que ele ja tem.
import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
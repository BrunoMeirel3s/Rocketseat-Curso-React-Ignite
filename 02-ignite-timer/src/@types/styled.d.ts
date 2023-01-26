/**
 * Parte utilizada para incluir a tipagem no typescript
 * referente ao tema utilizado na aplicação, necessário para
 * que seja possível utilizar o Intellissense na IDE
 */
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

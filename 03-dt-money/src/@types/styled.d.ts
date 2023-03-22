import { defaultTheme } from '../styles/themes/default'
import 'styled-components'
type ThemeType = typeof defaultTheme
/**
 * Para que as definições dos temas fiquem disponíveis
 * em todo o repositório é necessário extender o defaultTheme
 * dentro das definições de tipo do styled-components, desta forma
 * teremos acesso as definições de cores feitas no defaultTheme
 */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

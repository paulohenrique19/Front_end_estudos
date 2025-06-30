import 'styled-components';
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

/*criando tipagem para 'styled-components' 
onde adicionamos ThemeType no objeto DefaulTheme que já vem
por padrão em 'styled-components'
*/
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
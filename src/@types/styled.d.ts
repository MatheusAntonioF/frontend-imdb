/* eslint-disable no-unused-vars */
import 'styled-components'

import theme from '@styles/themes/light'

type Theme = theme.colors

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: (toSpace: number) => number

    colors: Theme
  }
}

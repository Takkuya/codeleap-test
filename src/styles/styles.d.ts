import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string
      font: string
      primary: string
      gray700: string
      gray900: string
    }

    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      exl: string
    }
  }
}

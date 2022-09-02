export const theme = {
  colors: {
    background: "#DDDDDD",
    font: "#fff",
    primary: "#000",
    gray700: "#777777",
    gray900: "#999999",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "1050px",
    xl: "1291px",
    exl: "1500px",
  },
  // fonts: {
  //   h1: "2.75rem",
  //   h2: "2.25rem",
  //   h3: "1.75rem",
  //   h4: "1.2rem",
  //   paragraph: "1.125rem",
  //   alternativeParagraph: "1rem",
  //   smallText: "0.875rem",
  // },
  // iconSize: {
  //   xs: 14,
  //   sm: 24,
  //   md: 32,
  //   lg: 40,
  //   xl: 72,
  // },
} as const

export type ThemeType = typeof theme

export type Color = keyof ThemeType["colors"]

export default theme

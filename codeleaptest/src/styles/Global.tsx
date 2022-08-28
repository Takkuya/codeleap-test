import { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Poppins";
    }

    html,body,#__next {
      min-height:100vh;
      max-width: 100%;
      background-color: ${(props) => props.theme.colors.background}
    }

    a,button {
      text-decoration: none;
      cursor: pointer;
      box-shadow:none;
      outline:none;
      background-color:transparent;
    }

    button {
      border: none;
      cursor: pointer;
    }

    input {
      border: none;
      outline: none;
    }

    ${({ theme: { breakpoints } }) => css`
      @media (min-width: ${breakpoints.xs}) {
        html {
          font-size: 75%;
        }
      }
      @media (min-width: ${breakpoints.md}) {
        html {
          font-size: 90%;
        }
      }
      @media (min-width: ${breakpoints.lg}) {
        html {
          font-size: 95%;
        }
      }
      @media (min-width: ${breakpoints.xl}) {
        html {
          font-size: 100%;
        }
      }
    `}
`

export default GlobalStyle

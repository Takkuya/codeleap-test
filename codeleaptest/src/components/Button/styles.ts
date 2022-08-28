import styled from "styled-components"

export const ButtonVariants = {
  primary: "primary",
  outlined: "outlined",
}

export const ButtonContainer = styled.div`
  button {
    font-weight: bold;
    padding: 0.5rem 2.5rem;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .${ButtonVariants.primary} {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};
  }
  .${ButtonVariants.outlined} {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`

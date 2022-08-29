import styled from "styled-components"

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  margin: 0 auto;

  #contentWrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 500px;
    padding: 1.5rem;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.font};
    border: 2px solid ${(props) => props.theme.colors.background};

    .inputWrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
    }
  }
`

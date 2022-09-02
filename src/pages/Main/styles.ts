import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin: 0 auto;
  padding-bottom: 2rem;

  width: 100vw;
  max-width: 800px;

  background-color: ${(props) => props.theme.colors.font};

  #formWrapper {
    border: 1px solid ${(props) => props.theme.colors.gray900};
  }

  #headerWrapper {
    background-color: ${(props) => props.theme.colors.primary};
    width: 100vw;
    max-width: 800px;
    color: ${(props) => props.theme.colors.font};
    padding: 1rem 1.5rem;
  }
`

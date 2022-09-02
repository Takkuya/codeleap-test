import styled from "styled-components"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 1.5rem;
  max-width: 600px;
  width: 100vw;

  #formInputsWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;

    textarea {
      resize: none;
      height: 80px;
    }
  }
`

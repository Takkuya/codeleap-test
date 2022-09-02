import styled from "styled-components"

export const Overlay = styled.div<{ visible: boolean }>``

export const ModalContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};

  display: flex;
  align-items: center;
  justify-content: center;

  #modalContentWrapper {
    background-color: ${(props) => props.theme.colors.font};
    color: ${(props) => props.theme.colors.primary};

    z-index: 10;
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    opacity: ${({ visible }) => (visible ? "1" : "0")};
    transition: all 0.2s ease;
  }
`

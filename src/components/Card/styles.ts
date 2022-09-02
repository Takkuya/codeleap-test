import styled, { css } from "styled-components"
import { IoTrashBin } from "react-icons/io5"
import { RiEditBoxFill } from "react-icons/ri"

export const CardContainer = styled.div`
  width: 100vw;
  max-width: 600px;
  border: 1px solid ${(props) => props.theme.colors.gray900};

  .cardHeaderWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};

    .iconWrapper {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;

      svg {
        fill: ${(props) => props.theme.colors.font};
      }
    }
  }

  .cardContentWrapper {
    padding: 1rem 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .cardInfoWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: ${(props) => props.theme.colors.gray700};

      .user {
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
const iconCSS = css`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`

export const TrashIcon = styled(IoTrashBin)`
  ${iconCSS};
`

export const EditIcon = styled(RiEditBoxFill)`
  ${iconCSS};
`

import { ReactNode } from "react"
import { ModalContainer } from "./styles"

type ModalProps = {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

export const Modal = ({
  isModalVisible,
  setIsModalVisible,
  children,
}: ModalProps) => {
  return (
    <>
      <ModalContainer
        visible={isModalVisible}
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <div
          id="modalContentWrapper"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </ModalContainer>
    </>
  )
}

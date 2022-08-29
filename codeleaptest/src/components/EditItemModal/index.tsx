import { Form, Modal } from "../"
import { EditItemModalContainer } from "./styles"

type EditItemModalProps = {
  isEditModalVisible: boolean
  setIsEditModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditItemModal = ({
  isEditModalVisible,
  setIsEditModalVisible,
}: EditItemModalProps) => {
  return (
    <EditItemModalContainer>
      <Modal
        isModalVisible={isEditModalVisible}
        setIsModalVisible={setIsEditModalVisible}
      >
        <Form title={"Edit item"} />
      </Modal>
    </EditItemModalContainer>
  )
}

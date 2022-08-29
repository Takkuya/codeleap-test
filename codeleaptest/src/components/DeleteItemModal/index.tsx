import { Button, Modal } from "../"
import { DeleteItemModalContainer } from "./styles"

type DeleteItemModalProps = {
  isDeleteModalVisible: boolean
  setIsDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const DeleteItemModal = ({
  isDeleteModalVisible,
  setIsDeleteModalVisible,
}: DeleteItemModalProps) => {
  function handleDeleteModal() {
    setIsDeleteModalVisible(false)
  }

  return (
    <DeleteItemModalContainer>
      <Modal
        isModalVisible={isDeleteModalVisible}
        setIsModalVisible={setIsDeleteModalVisible}
      >
        <div id="deleteModalWrapper">
          <p>Are you sure you want do delete this item?</p>

          <div className="buttonWrapper">
            <Button variant={["outlined"]} onClick={handleDeleteModal}>
              Cancel
            </Button>
            <Button variant={["outlined"]}>OK</Button>
          </div>
        </div>
      </Modal>
    </DeleteItemModalContainer>
  )
}

import { Button, Modal } from "../"
import { deleteItems } from "../../actions/ItemsActions/delete"
import { getCardItems, useAppDispatch } from "../../redux/itemsSlice"
import { DeleteItemModalContainer } from "./styles"

type DeleteItemModalProps = {
  isDeleteModalVisible: boolean
  setIsDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  itemId: number
}

export const DeleteItemModal = ({
  isDeleteModalVisible,
  setIsDeleteModalVisible,
  itemId,
}: DeleteItemModalProps) => {
  const dispatch = useAppDispatch()

  function handleDeleteModal() {
    setIsDeleteModalVisible(false)
  }

  async function handleDeleteItem() {
    await deleteItems({ itemId })
    await dispatch(getCardItems())
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
            <Button variant={["outlined"]} onClick={() => handleDeleteItem()}>
              OK
            </Button>
          </div>
        </div>
      </Modal>
    </DeleteItemModalContainer>
  )
}

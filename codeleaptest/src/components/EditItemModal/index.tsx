import { useState } from "react"
import { Modal, Button } from "../"
import { editItems } from "../../actions/ItemsActions/edit"
import { getCardItems, useAppDispatch } from "../../redux/itemsSlice"
import { FormContainer } from "../Form/styles"
import { EditItemModalContainer } from "./styles"

type EditItemModalProps = {
  isEditModalVisible: boolean
  setIsEditModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  itemId: number
  itemTitle: string
  itemContent: string
}

export const EditItemModal = ({
  isEditModalVisible,
  setIsEditModalVisible,
  itemId,
  itemTitle,
  itemContent,
}: EditItemModalProps) => {
  const dispatch = useAppDispatch()

  const [editCardInfo, setEditCardInfo] = useState({
    cardTitle: itemTitle,
    cardContent: itemContent,
  })

  async function handleEditItem() {
    await editItems({
      itemId,
      itemTitle: editCardInfo.cardTitle,
      itemContent: editCardInfo.cardContent,
    })
    await dispatch(getCardItems())
    setIsEditModalVisible(false)
  }

  return (
    <EditItemModalContainer>
      <Modal
        isModalVisible={isEditModalVisible}
        setIsModalVisible={setIsEditModalVisible}
      >
        <FormContainer>
          <h2>Edit item</h2>

          <div id="formInputsWrapper">
            <label>Title</label>
            <input
              placeholder="John Doe"
              value={editCardInfo.cardTitle}
              onChange={(event) =>
                setEditCardInfo({
                  ...editCardInfo,
                  cardTitle: event.target.value,
                })
              }
            />
            <label>Content</label>
            <textarea
              placeholder="John Doe"
              value={editCardInfo.cardContent}
              onChange={(event) =>
                setEditCardInfo({
                  ...editCardInfo,
                  cardContent: event.target.value,
                })
              }
            />
          </div>
          <div className="buttonWrapper">
            <Button
              variant={["primary"]}
              disabled={
                (!editCardInfo.cardTitle.trim() ||
                  !editCardInfo.cardContent.trim()) &&
                true
              }
              onClick={() => handleEditItem()}
            >
              Save
            </Button>
          </div>
        </FormContainer>
      </Modal>
    </EditItemModalContainer>
  )
}

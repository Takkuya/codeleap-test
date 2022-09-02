import { useState } from "react"
import { Modal, Button } from "../"
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
  const [cardInfo, setCardInfo] = useState({ cardTitle: "", cardContent: "" })

  async function handleEditItem() {
    console.log(itemId, itemTitle, itemContent)
  }

  // console.log(cardInfo)

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
            {/* <input
              placeholder="John Doe"
              value={itemTitle}
              onChange={(event) =>
                setCardInfo({ (event) => })
              }
            /> */}
            <label>Content</label>
            <textarea
              placeholder="John Doe"
              value={itemContent}
              onChange={(event) =>
                setCardInfo({ ...cardInfo, cardContent: event.target.value })
              }
            />
          </div>
          <div className="buttonWrapper">
            <Button
              variant={["primary"]}
              disabled={
                (!cardInfo.cardTitle.trim() || !cardInfo.cardContent.trim()) &&
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

import { useState } from "react"
import { DeleteItemModal, EditItemModal, Form } from "../"
import { CardContainer, EditIcon, TrashIcon } from "./styles"

export const Card = () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)

  function handleDeleteModal() {
    setIsDeleteModalVisible(!isDeleteModalVisible)
  }

  function handeEditModal() {
    setIsEditModalVisible(!isEditModalVisible)
  }

  return (
    <CardContainer>
      <div className="cardHeaderWrapper">
        <h2>Text</h2>
        <div className="iconWrapper">
          <button onClick={handleDeleteModal}>
            <TrashIcon />
          </button>
          <button onClick={handeEditModal}>
            <EditIcon />
          </button>
        </div>
      </div>
      <div className="cardContentWrapper">
        <div className="cardInfoWrapper">
          <span className="user">@Victor</span>
          <span>25 Minutos ago</span>
        </div>
        <div className="cardTextWrapper">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            maiores, commodi maxime vitae ratione cumque error? Minima quae
            aperiam quidem tenetur autem commodi quas asperiores, adipisci quis
            illum omnis! Porro.
          </p>
        </div>
      </div>

      <DeleteItemModal
        isDeleteModalVisible={isDeleteModalVisible}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
      />

      <EditItemModal
        isEditModalVisible={isEditModalVisible}
        setIsEditModalVisible={setIsEditModalVisible}
      />
    </CardContainer>
  )
}

import { useState } from "react"
import { useSelector } from "react-redux"
import { DeleteItemModal, EditItemModal } from "../"
import store from "../../redux/store"
import { CardContainer, EditIcon, TrashIcon } from "./styles"

type CardProps = {
  id: number
  username: string
  created_datetime: Date
  title: string
  content: string
}

export const Card = ({
  id,
  username,
  created_datetime,
  title,
  content,
}: CardProps) => {
  const state = useSelector(store.getState)

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
        <h2>{title}</h2>
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
          <span className="user">@{username}</span>
          <span>25 Minutos ago</span>
        </div>
        <div className="cardTextWrapper">
          <p>{content}</p>
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

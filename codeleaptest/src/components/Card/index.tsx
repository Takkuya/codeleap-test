import { useState } from "react"
import { useSelector } from "react-redux"
import { DeleteItemModal, EditItemModal, CalculatedTime } from "../"
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
  const userState = useSelector(store.getState)

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
          {userState.user.value === username ? (
            <>
              <button onClick={handleDeleteModal}>
                <TrashIcon />
              </button>
              <button onClick={handeEditModal}>
                <EditIcon />
              </button>
            </>
          ) : null}
        </div>
      </div>
      <div className="cardContentWrapper">
        <div className="cardInfoWrapper">
          <span className="user">@{username}</span>
          <CalculatedTime time={created_datetime} />
        </div>
        <div className="cardTextWrapper">
          <p>{content}</p>
        </div>
      </div>

      <DeleteItemModal
        isDeleteModalVisible={isDeleteModalVisible}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        itemId={id}
      />

      <EditItemModal
        isEditModalVisible={isEditModalVisible}
        setIsEditModalVisible={setIsEditModalVisible}
        itemId={id}
        itemTitle={title}
        itemContent={content}
      />
    </CardContainer>
  )
}

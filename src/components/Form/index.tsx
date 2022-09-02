import { useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "../"
import { FormContainer } from "./styles"
import store from "../../redux/store"
import { postCardItems, useAppDispatch } from "../../redux/itemsSlice"

export const Form = () => {
  const [cardInfo, setCardInfo] = useState({ cardTitle: "", cardContent: "" })
  const dispatch = useAppDispatch()
  const userState = useSelector(store.getState)

  function handleNewItem() {
    dispatch(
      postCardItems({
        itemUsername: userState.user.value,
        itemTitle: cardInfo.cardTitle,
        itemContent: cardInfo.cardContent,
      })
    )
    setCardInfo({ cardTitle: "", cardContent: "" })
  }

  return (
    <FormContainer>
      <h2>What's on your mind?</h2>

      <div id="formInputsWrapper">
        <label>Title</label>
        <input
          placeholder="Hello World"
          value={cardInfo.cardTitle}
          onChange={(event) =>
            setCardInfo({ ...cardInfo, cardTitle: event.target.value })
          }
        />
        <label>Content</label>
        <textarea
          placeholder="Content Here"
          value={cardInfo.cardContent}
          onChange={(event) =>
            setCardInfo({ ...cardInfo, cardContent: event.target.value })
          }
        />
      </div>
      <div className="buttonWrapper">
        <Button
          variant={["primary"]}
          disabled={
            (!cardInfo.cardTitle.trim() || !cardInfo.cardContent.trim()) && true
          }
          onClick={() => handleNewItem()}
        >
          Create
        </Button>
      </div>
    </FormContainer>
  )
}

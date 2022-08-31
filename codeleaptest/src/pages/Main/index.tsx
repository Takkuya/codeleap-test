import { MainContainer } from "./styles"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getCardItems, useAppDispatch } from "../../redux/itemsSlice"
import store from "../../redux/store"
import { Loading, Card, Form } from "../../components/"

type itemType = {
  id: number
  username: string
  title: string
  created_datetime: Date
  content: string
}

export const Main = () => {
  const state = useSelector(store.getState)
  const dispatch = useAppDispatch()

  const listItems = async () => {
    dispatch(getCardItems())
  }

  useEffect(() => {
    listItems()
  }, [])

  if (state.items.loading == true) {
    return <Loading />
  }

  return (
    <MainContainer>
      <div id="headerWrapper">
        <h2>Codeleap Network</h2>
      </div>
      <div id="formWrapper">
        <Form title={"What's on your mind?"} />
      </div>

      {state.items.value.map((item: itemType) => (
        <Card
          id={item.id}
          username={item.username}
          title={item.title}
          created_datetime={item.created_datetime}
          content={item.content}
        />
      ))}
    </MainContainer>
  )
}

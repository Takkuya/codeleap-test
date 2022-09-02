import { MainContainer } from "./styles"

import { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import itemsSlice, {
  getCardItems,
  postCardItems,
  useAppDispatch,
} from "../../redux/itemsSlice"
import store from "../../redux/store"
import { Loading, Card, Form } from "../../components/"
import { useNavigate } from "react-router-dom"

export type ItemType = {
  id: number
  username: string
  title: string
  created_datetime: Date
  content: string
}

export const Main = () => {
  const state = useSelector(store.getState)
  const userState = useSelector(store.getState)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  //redirect to signupPage
  function handleRoutes() {
    if (userState.user.value === "") {
      navigate("/signup")
    }
  }

  const listPosts = useCallback(async () => {
    dispatch(getCardItems())
  }, [dispatch])

  useEffect(() => {
    listPosts()
    handleRoutes()
  }, [dispatch])

  if (state.items.loading == true) {
    return <Loading />
  }

  return (
    <MainContainer>
      <div id="headerWrapper">
        <h2>Codeleap Network</h2>
      </div>
      <div id="formWrapper">
        <Form />
      </div>

      {state.items.value.map((item: ItemType) => (
        <Card
          key={item.id}
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

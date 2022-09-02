import { api } from "../"

type PostItemsProps = {
  itemUsername: string
  itemTitle: string
  itemContent: string
}

export const postItems = async ({
  itemUsername,
  itemTitle,
  itemContent,
}: PostItemsProps) => {
  try {
    const response = await api.post("/", {
      username: itemUsername,
      title: itemTitle,
      content: itemContent,
    })
    return response
  } catch (err) {
    console.error(err)
  }
}

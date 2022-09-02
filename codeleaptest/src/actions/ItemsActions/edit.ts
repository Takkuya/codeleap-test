import { api } from "../"

type EditItemsProps = {
  itemId: number
  itemTitle: string
  itemContent: string
}

export const editItems = async ({
  itemId,
  itemTitle,
  itemContent,
}: EditItemsProps) => {
  try {
    const response = await api.patch(`/${itemId}/`, {
      title: itemTitle,
      content: itemContent,
    })

    return response.data
  } catch (err) {
    console.error(err)
  }
}

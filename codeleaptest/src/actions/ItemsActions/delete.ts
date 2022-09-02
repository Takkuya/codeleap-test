import { api } from ".."

type DeleteItemsProps = {
  itemId: number
}

export const deleteItems = async ({ itemId }: DeleteItemsProps) => {
  try {
    const response = await api.delete(`/${itemId}/`)

    return response.data.results
  } catch (err) {
    console.error(err)
  }
}

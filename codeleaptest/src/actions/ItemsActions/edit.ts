import { api } from "../"

type EditItemsProps = {
  itemId: number
}

export const editItems = async ({ itemId }: EditItemsProps) => {
  try {
    const response = await api.patch(`/${itemId}/`)
  } catch (err) {
    console.error(err)
  }
}

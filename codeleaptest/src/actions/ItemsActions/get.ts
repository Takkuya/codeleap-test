import axios from "axios"

const baseUrl = "https://dev.codeleap.co.uk/careers/"

export const getItems = async () => {
  try {
    const response = await axios.get(baseUrl)

    return response.data.results
  } catch (err) {
    console.error(err)
  }
}

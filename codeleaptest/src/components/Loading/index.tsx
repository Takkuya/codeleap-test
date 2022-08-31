import { LoadingContainer } from "./styles"
import LoadingGif from "../../assets/loading.gif"

export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={LoadingGif} alt="loading gif" id="loadingSpinner" />
    </LoadingContainer>
  )
}

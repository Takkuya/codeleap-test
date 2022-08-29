import { Card } from "../../components/Card"
import { Form } from "../../components/Form"
import { MainContainer } from "./styles"

export const Main = () => {
  return (
    <MainContainer>
      <div id="headerWrapper">
        <h2>Codeleap Network</h2>
      </div>
      <div id="formWrapper">
        <Form title={"What's on your mind?"} />
      </div>

      <Card />
      <Card />
      <Card />
    </MainContainer>
  )
}

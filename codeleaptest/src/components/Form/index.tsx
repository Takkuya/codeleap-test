import { Button } from "../"
import { FormContainer } from "./styles"

type FormProps = {
  title: string
}

export const Form = ({ title }: FormProps) => {
  return (
    <FormContainer>
      <h2>{title}</h2>

      <div id="formInputsWrapper">
        <label>Title</label>
        <input placeholder="John Doe" />
        <label>Content</label>
        <textarea placeholder="John Doe" />
      </div>
      <div className="buttonWrapper">
        <Button variant={["primary"]}>Create</Button>
      </div>
    </FormContainer>
  )
}

import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { SignUpContainer } from "./styles"

export const SignUp = () => {
  return (
    <SignUpContainer>
      <div id="contentWrapper">
        <h2>Welcome to CodeLeap network!</h2>

        <div className="inputWrapper">
          <label>Please enter your username</label>
          <input placeholder="John Doe" />
        </div>

        <div className="buttonWrapper">
          <Link to="/main">
            <Button variant={["primary"]}>Enter</Button>
          </Link>
        </div>
      </div>
    </SignUpContainer>
  )
}

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/"
import { useAppDispatch } from "../../redux/itemsSlice"
import { getUsername } from "../../redux/userSlice"
import { SignUpContainer } from "./styles"

export const SignUp = () => {
  const [username, setUsername] = useState("")

  const dispatch = useAppDispatch()

  function handleUsername() {
    dispatch(getUsername(username))
  }

  return (
    <SignUpContainer>
      <div id="contentWrapper">
        <h2>Welcome to CodeLeap network!</h2>

        <div className="inputWrapper">
          <label>Please enter your username</label>
          <input
            placeholder="John Doe"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="buttonWrapper">
          <Link to="/">
            <Button
              variant={["primary"]}
              disabled={!username.trim() && true}
              onClick={() => handleUsername()}
            >
              Enter
            </Button>
          </Link>
        </div>
      </div>
    </SignUpContainer>
  )
}

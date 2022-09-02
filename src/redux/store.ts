import { configureStore } from "@reduxjs/toolkit"
import itemsReducer from "./itemsSlice"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: userReducer,
  },
})

export default store

import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import store from "./store"

const initialState = { value: "" }

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getName: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getName } = userSlice.actions

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const getUsername =
  (username: string) => async (dispatch: AppDispatch) => {
    dispatch(getName(username))
  }

export default userSlice.reducer

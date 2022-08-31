import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { getItems } from "../actions/ItemsActions/get"
import store from "./store"

const initialState = { value: [], loading: true }

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    load: (state, action) => {
      state.value = action.payload
      state.loading = false
    },
  },
})

export const { load } = itemsSlice.actions

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const getCardItems = () => async (dispatch: AppDispatch) => {
  const items = await getItems()
  dispatch(load(items))
}

export default itemsSlice.reducer

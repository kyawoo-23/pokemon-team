import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const toastSlice = createSlice({
  name: "toast",
  initialState: { value: "" },
  reducers: {
    callToast(state, action) {
      toast(action.payload)
    },
  },
})

export const { callToast } = toastSlice.actions
export const toastSliceReducer = toastSlice.reducer

import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const toastSlice = createSlice({
  name: "toast",
  initialState: { value: "" },
  reducers: {
    callToast(state, { payload }) {
      const { msg, delay } = payload
      toast(msg, { delay })
    },
  },
})

export const { callToast } = toastSlice.actions
export const toastSliceReducer = toastSlice.reducer

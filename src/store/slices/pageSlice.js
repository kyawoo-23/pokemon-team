import { createSlice } from "@reduxjs/toolkit"

const pageSlice = createSlice({
  name: "page",
  initialState: { value: 0 },
  reducers: {
    loadMorePage(state) {
      state.value++
    },
  },
})

export const { loadMorePage } = pageSlice.actions
export const pageSliceReducer = pageSlice.reducer

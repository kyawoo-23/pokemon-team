import { createSlice } from "@reduxjs/toolkit"

const teamsSlice = createSlice({
  name: "teams",
  initialState: [],
  reducers: {
    createTeam(state, action) {
      state.push(action.payload)
    },
    deleteTeam(state, action) {
      state.splice(action.payload, 1)
    },
    addPokemon(state, { payload }) {
      const { teamId, pokeId } = payload
      state[teamId].members.push(pokeId)
    },
  },
})

export const { createTeam, deleteTeam, addPokemon } = teamsSlice.actions
export const teamsSliceReducer = teamsSlice.reducer

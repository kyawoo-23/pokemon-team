import { createSlice } from "@reduxjs/toolkit"

const teamsSlice = createSlice({
  name: "teams",
  initialState: [],
  reducers: {
    createTeam(state, action) {
      state.push(action.payload)
    },
    deleteTeam(state, action) {
      const index = state.findIndex((s) => s.teamId === action.payload)
      state.splice(index, 1)
    },
    addPokemon(state, { payload }) {
      const { teamId, pokeName } = payload
      const index = state.findIndex((s) => s.teamId === teamId)
      state[index].members.push(pokeName)
    },
    removePokemon(state, { payload }) {
      const { teamId, member } = payload
      const teamIdx = state.findIndex((s) => s.teamId === teamId)
      const pokeIdx = state[teamIdx].members.indexOf(member)
      state[teamIdx].members.splice(pokeIdx, 1)
    },
    removeAllPokemon(state, { payload }) {
      const { teamId } = payload
      const teamIdx = state.findIndex((s) => s.teamId === teamId)
      state[teamIdx].members.length = 0
    },
  },
})

export const { createTeam, deleteTeam, addPokemon, removePokemon } =
  teamsSlice.actions
export const teamsSliceReducer = teamsSlice.reducer

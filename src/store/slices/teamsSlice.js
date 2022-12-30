import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

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
      if (state[index].members.length === 6) {
        toast(`there are already 6 pokemons in ${state[index].teamName}`)
        return
      }
      if (!state[index].members.includes(pokeName)) {
        state[index].members.push(pokeName)
        toast(`${pokeName} has been added to ${state[index].teamName}`)
      }
    },
    removePokemon(state, { payload }) {
      const { teamId, member } = payload
      const teamIdx = state.findIndex((s) => s.teamId === teamId)
      const pokeIdx = state[teamIdx].members.indexOf(member)
      state[teamIdx].members.splice(pokeIdx, 1)
    },
    replacePokemon(state, { payload }) {
      const { teamId, member, newMember } = payload
      const teamIdx = state.findIndex((s) => s.teamId === teamId)
      const memIdx = state[teamIdx].members.indexOf(member)
      state[teamIdx].members[memIdx] = newMember
    },
    // removeAllPokemon(state, { payload }) {
    //   const { teamId } = payload
    //   const teamIdx = state.findIndex((s) => s.teamId === teamId)
    //   state[teamIdx].members.length = 0
    // },
  },
})

export const {
  createTeam,
  deleteTeam,
  addPokemon,
  removePokemon,
  replacePokemon,
} = teamsSlice.actions
export const teamsSliceReducer = teamsSlice.reducer

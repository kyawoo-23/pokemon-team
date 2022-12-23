import { configureStore } from "@reduxjs/toolkit"
import {
  teamsSliceReducer,
  createTeam,
  deleteTeam,
  addPokemon,
} from "./slices/teamsSlice"

const store = configureStore({
  reducer: {
    teams: teamsSliceReducer,
  },
})

export { store, createTeam, deleteTeam, addPokemon }

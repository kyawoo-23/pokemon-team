import { configureStore } from "@reduxjs/toolkit"
import {
  teamsSliceReducer,
  createTeam,
  deleteTeam,
  addPokemon,
  removePokemon,
} from "./slices/teamsSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { pokeApi } from "./apis/pokeapi"
import { pokeDetailsApi } from "./apis/pokeDetailsApi"

const store = configureStore({
  reducer: {
    teams: teamsSliceReducer,
    [pokeApi.reducerPath]: pokeApi.reducer,
    [pokeDetailsApi.reducerPath]: pokeDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokeApi.middleware,
      pokeDetailsApi.middleware
    ),
})

setupListeners(store.dispatch)

export { store, createTeam, deleteTeam, addPokemon, removePokemon }
export { useFetchPokemonQuery } from "./apis/pokeApi"
export { useFetchPokemonDetailsQuery } from "./apis/pokeDetailsApi"

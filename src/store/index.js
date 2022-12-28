import { configureStore } from "@reduxjs/toolkit"
import {
  teamsSliceReducer,
  createTeam,
  deleteTeam,
  addPokemon,
  removePokemon,
  replacePokemon,
} from "./slices/teamsSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { pokeApi } from "./apis/pokeApi"
import { pokeDetailsApi } from "./apis/pokeDetailsApi"
import { pageSliceReducer, loadMorePage } from "./slices/pageSlice"
import { toastSliceReducer, callToast } from "./slices/toastSlice"

const store = configureStore({
  reducer: {
    teams: teamsSliceReducer,
    page: pageSliceReducer,
    toast: toastSliceReducer,
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

export {
  store,
  createTeam,
  deleteTeam,
  addPokemon,
  removePokemon,
  replacePokemon,
  loadMorePage,
  callToast,
}
export {
  useFetchPokemonQuery,
  useFetchPokemonSpeciesQuery,
} from "./apis/pokeApi"
export { useFetchPokemonDetailsQuery } from "./apis/pokeDetailsApi"

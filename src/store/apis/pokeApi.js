import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pokeApi = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    fetchPokemon: builder.query({
      query: (limit) => `pokemon?limit=${limit}&offset=0`,
    }),
  }),
})

export const { useFetchPokemonQuery } = pokeApi

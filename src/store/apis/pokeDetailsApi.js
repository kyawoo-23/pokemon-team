import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pokeDetailsApi = createApi({
  reducerPath: "pokeDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  endpoints: (builder) => ({
    fetchPokemonDetails: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
})

export const { useFetchPokemonDetailsQuery } = pokeDetailsApi

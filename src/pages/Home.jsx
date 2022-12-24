import React from "react"
import Layout from "../components/Layout"
import PokeCard from "../components/PokeCard"
import { useFetchPokemonQuery } from "../store"

const Home = () => {
  const { data, error, isLoading } = useFetchPokemonQuery(8)

  return (
    <Layout title="All pokemons">
      {error ? (
        <p className="text-red-600">Error fetching data</p>
      ) : isLoading ? (
        <p className="text-center">Loading data</p>
      ) : (
        data.results.map(({ name }, idx) => <PokeCard name={name} key={idx} />)
      )}
    </Layout>
  )
}

export default Home

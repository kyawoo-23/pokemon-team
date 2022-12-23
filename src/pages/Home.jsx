import React from "react"
import Layout from "../components/Layout"
import PokeCard from "../components/PokeCard"

const Home = () => {
  return (
    <Layout title="All pokemons">
      {["p1", "p2", "p3", "p4", "p5"].map((p, idx) => (
        <PokeCard name={p} key={idx} />
      ))}
    </Layout>
  )
}

export default Home

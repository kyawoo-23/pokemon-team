import React, { useState } from "react"
import { useParams } from "react-router-dom"
import {
  useFetchPokemonDetailsQuery,
  useFetchPokemonSpeciesQuery,
} from "../store"
import Loader from "../components/Loader"
import AddPokemonModal from "../components/AddPokemonModal"
import { typeBgColor } from "../../constants/typeBgColor"
import PokeStats from "../components/PokeStats"

const PokeDetails = () => {
  const { name } = useParams()
  const { data, error, isLoading } = useFetchPokemonDetailsQuery(name)
  const { data: species, isLoading: isSpeciesLoading } =
    useFetchPokemonSpeciesQuery(name)
  const [modalOpen, setModalOpen] = useState(false)

  let styles = {
    gradient: {
      background: `#1b1b1b`,
    },
  }
  if (!isLoading) {
    const doc = typeBgColor.find((t) => t.type === data?.types[0].type.name)
    styles = {
      gradient: {
        background: doc.value,
      },
    }
  }

  return (
    <>
      {modalOpen && (
        <AddPokemonModal pokeName={name} setModalOpen={setModalOpen} />
      )}
      <div
        className='grid grid-cols-2 md:grid-cols-3 items-center w-full'
        style={styles.gradient}
      >
        <div className='mx-auto p-5 col-span-2'>
          {isLoading ? (
            <Loader />
          ) : (
            <img
              className='w-full h-full'
              src={data?.sprites.other["official-artwork"].front_default}
            />
          )}
        </div>
        {!isLoading && !isSpeciesLoading && (
          <PokeStats
            data={data}
            species={species}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
    </>
  )
}

export default PokeDetails
